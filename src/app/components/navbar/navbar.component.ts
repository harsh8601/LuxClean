import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private location: Location) { }

  ngOnInit(): void {
  }
  
  openBookingForm() {
    this.router.navigate(['/book-now']);
  }

  viewServiceandPrices(){
    this.router.navigate(['/service'])
  }

  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  reloadPage(): void {
    this.location.replaceState('/'); // Navigate to the current route (home in this case)
    window.location.reload(); // Reload the page
  }
}
