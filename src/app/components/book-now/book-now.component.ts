// book-now.component.ts
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.scss']
})
export class BookNowComponent implements OnInit {

  serviceTitle: string = "";
  servicePrice: string = "";
  serviceArea: string = "";
  constructor(private router: Router, private emailService: EmailService, private route: ActivatedRoute) { 
    
  }
  
  formData: any = {
    first_name: '',
    last_name: '',
    email: '',
    mobile_number: '',
    address: '',
    apt_suite: '',
    city: '',
    zip_code: '',
    selected_date: null,
    selected_time: '', 
    selected_service: '', 
    selected_area: '',
    cleaning_frequency: '',
    movingInOut: false,
    balconyCleaning: false,
    additional_notes: '',
    parking_option: '', 
    selected_price: 0
  };

  servicePrices: any = {
    'Standard Cleaning Package': {
      'Area upto 2500 sq ft': 147,
      'Area upto 3500 sq ft': 247,
      'Area upto 5000 sq ft': 547
    },
    'Signature Cleaning Package': {
      'Area upto 2500 sq ft': 247,
      'Area upto 3500 sq ft': 347,
      'Area upto 5000 sq ft': 747
    },
    'Platinum Cleaning Package': {
      'Area upto 2500 sq ft': 347,
      'Area upto 3500 sq ft': 447,
      'Area upto 5000 sq ft': 947
    },
    'Laundry': 34,
    'Fridge Interior Clean': 27,
    'Window Sill Cleaning': 27,
    'Pantry Organization': 57,
    'Closet Organization': 111,
    'Vents Cleaning': 37
  };
  
  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      this.serviceTitle = params['title'];
      this.serviceArea = params['area'].toString();
    });
    if(this.serviceTitle){
      this.formData.selected_service = this.serviceTitle;
      if(this.serviceArea){
        this.formData.selected_area  = 'Area upto ' + this.serviceArea + ' sq ft';
      }
    }
  }
  
  calculateTotalPrice(): number {
    const selectedService = this.formData.selected_service;
    let price = 0;
    if (['Standard Cleaning Package', 'Signature Cleaning Package', 'Platinum Cleaning Package'].includes(selectedService)) {
      const selectedArea = this.formData.selected_area;
      if (this.servicePrices[selectedService] && this.servicePrices[selectedService][selectedArea]) {
        price = this.servicePrices[selectedService][selectedArea];
      } else if (this.servicePrices[selectedService]) {
        price = 0;
      }
    } else {
      price = this.servicePrices[selectedService] || 0;
    }
    this.formData.selected_price = price;
  
    return price;
  }
  
  showAreaDropdown(): boolean {
    return ['Standard Cleaning Package', 'Signature Cleaning Package', 'Platinum Cleaning Package'].includes(this.formData.selected_service);
  }
  
  selectArea(selectedArea: string){
    this.formData.selected_area = selectedArea;
    this.formData.selected_price = this.calculateTotalPrice();
  }

  selectService(selectedService: string): void {
    this.formData.selected_service = selectedService;
  }

  formatFormDataMessage(formData: any): string {
    // Extract properties from formData
    const {
      first_name,
      last_name,
      email,
      mobile_number,
      address,
      apt_suite,
      city,
      zip_code,
      selected_date,
      selected_time,
      selected_service,
      selected_area,
      cleaning_frequency,
      movingInOut,
      balconyCleaning,
      additional_notes,
      parking_option,
      selected_price
    } = formData;
  
    const message = `
      Booking Details:
      Name: ${first_name} ${last_name}
      Mobile Number: ${mobile_number}
      Address: ${address} ${apt_suite ? `Apt/Suite: ${apt_suite}` : ''}, ${city}, ${zip_code}
      Date and Time: ${selected_date} ${selected_time}
      Service: ${selected_service} ${selected_area}
      Cleaning Frequency: ${cleaning_frequency}
      Additional Notes: ${additional_notes}
      Parking Option: ${parking_option}
      Special Requests:
      - Moving In/Out: ${movingInOut ? 'Yes' : 'No'}
      - Balcony Cleaning: ${balconyCleaning ? 'Yes' : 'No'}
      Total Amount to be paid: $${selected_price}
    `;
  
    return message;
  }
  
  onSubmit() {
    let msg = this.formatFormDataMessage(this.formData);
    this.emailService.sendEmail(this.formData.email, msg).subscribe(
      (response) => {
        console.log('Email sent successfully', response);
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Error sending email', error);
      }
    );
  }

  navigateToNewPage() {
    this.router.navigate(['/home']);
  }

  toggleServiceType(option: string) {
    const index = this.formData.serviceType.indexOf(option);

    if (index === -1) {
      this.formData.serviceType.push(option);
    } else {
      this.formData.serviceType.splice(index, 1);
    }
  }

  generateHours(){
    const hours: string[] = [];
    for (let i = 8; i <= 19; i++) {
        const time = i < 12 ? `${i}:00 AM` : `${i - 12}:00 PM`;
        hours.push(time);
    }
    return hours;
  }
  
  updateBillingMethod(option: string) {
    this.formData.billingMethod = option;
  }

  selectFrequency(frequency: string): void {
    this.formData.cleaning_frequency = frequency;
  }
}
