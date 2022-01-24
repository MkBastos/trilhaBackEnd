import { Injectable } from "@angular/core";
import { FormControl } from "@angular/forms";

@Injectable()
export class Validacoes {

  static getIdade(data : FormControl) {
      let today = new Date()
      let nascimento = new Date(data.value)
      let ano = today.getFullYear() - nascimento.getFullYear()

      if (ano >= 18) {
        return alert ("Maoir de idade")
      } else {
        return alert("Menor de idade")
      }
  }

}
