import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-kokebok-page',
  templateUrl: './kokebok-page.component.html',
  styleUrls: ['./kokebok-page.component.scss'],
})
export class KokebokPageComponent implements AfterViewInit {
  ngAfterViewInit() {
    const pages = document.getElementsByClassName('page');
    const pageNumbers = Array.from(pages).map((_, i) => i + 1);

    for (let i = 0; i < pages.length; i++) {
      const page = pages[i] as HTMLElement;

      if (i % 2 === 0) {
        page.style.zIndex = (pages.length - i).toString();
      }

      // Add the click event handler to each page element
      page.addEventListener('click', function () {
        const pageNum = pageNumbers[i];

        if (pageNum % 2 === 0) {
          this.classList.remove('flipped');
          const prevElement = this.previousElementSibling as HTMLElement;
          prevElement?.classList.remove('flipped');
        } else {
          this.classList.add('flipped');
          const nextElement = this.nextElementSibling as HTMLElement;
          nextElement?.classList.add('flipped');
        }
      });
    }
  }
}
