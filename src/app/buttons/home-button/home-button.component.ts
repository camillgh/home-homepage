import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-button',
  templateUrl: './home-button.component.html',
  styleUrls: ['./home-button.component.scss'],
})
export class HomeButtonComponent {
  constructor(private router: Router) {}

  isHovered: boolean = false;
  isClicked: boolean = false;

  startAnimation(): void {
    this.isHovered = true;
  }

  stopAnimation(): void {
    this.isHovered = false;
  }

  onClick(): void {
    this.router.navigate(['/landing']);
  }
  @HostListener('document:click', ['$event'])
  outsideClick(event: any): void {
    this.isClicked = false;
  }
}
