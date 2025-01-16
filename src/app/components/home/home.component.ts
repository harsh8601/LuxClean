import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { slideDownAnimation } from 'src/app/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [slideDownAnimation],
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  welcomeMessage = 'Welcome to Lex Clean Service!';

  bookNow() {
    this.router.navigate(['/book-now']);
  }
}
