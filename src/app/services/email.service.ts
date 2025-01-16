// email.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private formspreeUrl = 'https://formspree.io/f/mkndjena';

  constructor(private http: HttpClient) {}

  sendEmail(email: string, message: string): Observable<any> {
    const formData = {
      email,
      message,
    };

    return this.http.post(this.formspreeUrl, formData, { responseType: 'json' });
  }
}
