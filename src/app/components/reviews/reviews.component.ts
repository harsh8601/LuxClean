import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
declare var bootstrap: any; 

interface Review {
  customerName: string;
  date: string;
  feedback: string
}

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent {
  

  constructor(private renderer: Renderer2, private elRef: ElementRef) { }

  ngOnInit(): void {
    // Run the script after the DOM has fully loaded
    this.renderer.listen('window', 'DOMContentLoaded', () => {
      const multipleCardCarousel = this.elRef.nativeElement.querySelector("#carouselExampleControls");

      if (window.matchMedia("(min-width: 576px)").matches) {
        const carousel = new bootstrap.Carousel(multipleCardCarousel, {
          interval: false
        });
        const carouselWidth = this.elRef.nativeElement.querySelector(".carousel-inner").scrollWidth;
        const cardWidth = this.elRef.nativeElement.querySelector(".carousel-item").offsetWidth;
        let scrollPosition = 0;

        // Event listener for next button
        this.elRef.nativeElement.querySelector('#carouselExampleControls .carousel-control-next').addEventListener('click', () => {
          if (scrollPosition < carouselWidth - cardWidth * 3) {
            scrollPosition += cardWidth*2;
            this.elRef.nativeElement.querySelector('.carousel-inner').scrollLeft = scrollPosition;
          }
        });

        // Event listener for previous button
        this.elRef.nativeElement.querySelector('#carouselExampleControls .carousel-control-prev').addEventListener('click', () => {
          if (scrollPosition > 0) {
            scrollPosition -= cardWidth*2;
            this.elRef.nativeElement.querySelector('.carousel-inner').scrollLeft = scrollPosition;
          }
        });
      } else {
        this.renderer.addClass(multipleCardCarousel, "slide");
      }
    });
  }

  
  

    
  
}