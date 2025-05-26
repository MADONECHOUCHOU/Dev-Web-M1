import { Component,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit{
ngAfterViewInit(): void {
    const scrollContainer = document.getElementById("product-scroll");
    const btnPrev = document.getElementById("mobile-prev");
    const btnNext = document.getElementById("mobile-next");

    if (btnPrev && btnNext && scrollContainer) {
      btnPrev.addEventListener("click", () => {
        scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
      });

      btnNext.addEventListener("click", () => {
        scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
      });
    }
  }
}
