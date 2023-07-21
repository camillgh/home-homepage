import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  activeRoute: string = '/';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = event.url;
      }
    });
  }

  // Add a scroll event listener to update the activeRoute when scrolling
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const currentRoute = this.router.url;
    const landingPageContainer = document.querySelector('.planting-page') as HTMLElement;
    const componentContainers = document.querySelectorAll('.component-container');

    if (landingPageContainer) {
      const landingPageTop = landingPageContainer.getBoundingClientRect().top;
      if (landingPageTop < 0) {
        // Check if any component container is in view and update activeRoute accordingly
        componentContainers.forEach((container: Element) => {
          const componentTop = (container as HTMLElement).offsetTop;
          const componentBottom = componentTop + (container as HTMLElement).offsetHeight;
          if (window.pageYOffset >= componentTop && window.pageYOffset <= componentBottom) {
            this.activeRoute = currentRoute;
          }
        });
      }
    }
  }
}
