import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  responsivity = false;

  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth <= 1060) {
      this.responsivity = true
  } else {
    this.responsivity = false
  }
}

  ngOnInit(): void {
    if (window.innerWidth <= 1060) {
      this.responsivity = true
    }
  }

}
