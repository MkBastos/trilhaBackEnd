import { BackEndService } from './../shared/back-end.service';
import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Category } from '../shared/category.model';

import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {

  currentAction: string | undefined;
  categoryForm = new FormGroup({

    id: new FormControl(null),
    name: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    description: new FormControl(null)

  });

  pageTitle: string = '';
  serverErrorMessages: string[] = [];
  submittingForm: boolean = false;
  category: Category = new Category();

  constructor(
    private service : BackEndService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.setCurrentAction();
    this.buildCategoryForm();
    //this.loadCategory();
  }

  submitForm() {
    this.submittingForm = true;

    if (this.currentAction == "new") {
      this.createCategory();
    } else {
      this.updateCategory();
    }
  }

  ngAfterContentChecked() {
    this.setPageTitle();
  }

  private setCurrentAction() {
    if (this.route.snapshot.url[0].path == "new") {
      this.currentAction = "new"
    } else {
      this.currentAction = "edit"
    }
  }

  private buildCategoryForm() {
    this.categoryForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(2)]],
      description: [null]
    })
  }

  /*private loadCategory() {
    if (this.currentAction == "edit") {
      this.route.paramMap.pipe(
        switchMap(params => this.categoryService.getById(+params.get?("id")))
      ).subscribe(
        (category) => {
          this.category = category;
          this.categoryForm?.patchValue(category)
        },
        (error) => alert("Ocorreu um erro no servidor, tente mais tarde.")
      )
    }
  }*/

  private setPageTitle() {
    if (this.currentAction = "new") {
      this.pageTitle = "Cadastro de nova categoria"
    } else {
      const categoryName = this.category.name || ""
      this.pageTitle = "Editando categoria: " + categoryName;
    }
  }

   createCategory() {
    console.log("Chamando o serviço"),
    this.service.create(this.categoryForm.value).subscribe();
    this.categoryForm.reset();
  }

  private updateCategory() {
    const category: Category = Object.assign(new Category(), this.categoryForm.value);
    this.service.update(category).subscribe(
      category => this.actionsForSucess(category),
      error => this.actionsForError(error)
    )
  }

  private actionsForSucess(category: Category) {
   // toastr.success("Solicitação processado com sucesso!");
    this.router.navigateByUrl("categories", { skipLocationChange: true }).then(
      () => this.router.navigate(["categories", category.id, "edit"])
    )
  }

  private actionsForError(error: any) {
    console.log("Ocorreu um erro ao processar sua solicitação!");
    this.submittingForm = false;
    if (error.status === 422) {
      this.serverErrorMessages = JSON.parse(error._body).errors;

    } else {
      this.serverErrorMessages = ["Falha na comunicação com o servidor, tente mais tarde."]
    }
  }

}
