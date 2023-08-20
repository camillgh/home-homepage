import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  constructor() {}

  getBaseHref(): string {
    if (window.location.hostname === 'localhost') {
      return '/';
    } else {
      return 'https://camillgh.github.io/home-homepage/';
    }
  }
}
