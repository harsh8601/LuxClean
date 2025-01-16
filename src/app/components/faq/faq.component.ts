import { Component, OnInit } from '@angular/core';

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  faqItems: FaqItem[] = [
    {
      question: 'Do you service my area?',
      answer: 'Currently, we offer our service only in XYZ.',
      isOpen: false
    },
    {
      question: 'Do you bring your own supplies?',
      answer: 'Yes! Our professional cleaners will bring their own supplies.',
      isOpen: false
    },
    {
      question: 'Can I trust your cleaning professionals?',
      answer: 'All service providers that we refer passed background check and has been reference checked. We work only with the best domestic workers that passed our screening process.',
      isOpen: false
    }
  ];

  toggleAnswer(faqItem: FaqItem): void {
    faqItem.isOpen = !faqItem.isOpen;
  }

  constructor() { }

  ngOnInit(): void {

  }

}
