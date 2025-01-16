import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FooterComponent } from './components/footer/footer.component';
import { BookNowComponent } from './components/book-now/book-now.component';
import { ServiceComponent } from './components/service/service.component';
import { StandardComponent } from './components/service/standard/standard.component';
import { SignatureComponent } from './components/service/signature/signature.component';
import { PlatinumComponent } from './components/service/platinum/platinum.component';
import { FaqComponent } from './components/faq/faq.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'book-now', component: BookNowComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReviewsComponent,
    NavbarComponent,
    FooterComponent,
    BookNowComponent,
    ServiceComponent,
    StandardComponent,
    SignatureComponent,
    PlatinumComponent,
    FaqComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
