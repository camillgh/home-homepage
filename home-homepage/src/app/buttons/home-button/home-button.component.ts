import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home-button',
  templateUrl: './home-button.component.html',
  styleUrls: ['./home-button.component.scss'],
})
export class HomeButtonComponent {
  constructor() {
    console.log('HomeButtonComponent initialized.');
  }

  ngOnInit() {
    console.log('HomeButtonComponent rendered on the page.');
  }
  isHovered: boolean = false;
  isClicked: boolean = false;

  startAnimation(): void {
    this.isHovered = true;
  }

  stopAnimation(): void {
    this.isHovered = false;
  }

  onClick(): void {
    this.isClicked = !this.isClicked;
  }
  @HostListener('document:click', ['$event'])
  outsideClick(event: any): void {
    this.isClicked = false;
  }
}
