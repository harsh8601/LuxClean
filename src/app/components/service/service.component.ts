import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fadeInOutAnimation } from 'src/app/animations';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
  animations: [fadeInOutAnimation],
})
export class ServiceComponent implements OnInit {

  constructor(private router: Router) { }

  selectedArea: string| null = 'all'; // Default to 2500 sq ft

  ngOnInit(): void {
  }

  applyAreaFilter(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedArea = target.value !== 'null' ? target.value : null;
  }

  bookNow(serviceTitle: string, serviceArea: number) {
    this.router.navigate(['/book-now'], {
      queryParams: {
        title: serviceTitle,
        area: serviceArea.toString(),
      }
    });
  }

  standardinfo(){
    this.router.navigate(['/standard']);
  }

  signatureinfo(){
    this.router.navigate(['/signature']);
  }

  platinuminfo(){
    this.router.navigate(['/platinum']);
  }
  
}
