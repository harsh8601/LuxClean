import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { HomeComponent } from './components/home/home.component';
import { BookNowComponent } from './components/book-now/book-now.component';
import { ServiceComponent } from './components/service/service.component';
import { StandardComponent } from './components/service/standard/standard.component'
import { SignatureComponent } from './components/service/signature/signature.component'
import { PlatinumComponent } from './components/service/platinum/platinum.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'book-now', component: BookNowComponent },
  { path: 'service', component: ServiceComponent},
  { path: 'standard', component: StandardComponent},
  { path: 'signature', component: SignatureComponent},
  { path: 'platinum', component: PlatinumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
