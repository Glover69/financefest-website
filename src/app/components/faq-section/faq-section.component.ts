import { Component } from '@angular/core';

@Component({
  selector: 'app-faq-section',
  templateUrl: './faq-section.component.html',
  styleUrls: ['./faq-section.component.scss']
})
export class FaqSectionComponent {

  content = [
    { title: 'How does FinanceFast work?', content: "FinanceFast is a platform that allows you to transfer money to anywhere in the world with confidence and ease. Simply create an account, add your recipient's information, and make a transfer. Our platform handles the rest.", isExpanded: false },  
    { title: 'Is it safe to use FinanceFast?', content: "FinanceFast is a platform that allows you to transfer money to anywhere in the world with confidence and ease. Simply create an account, add your recipient's information, and make a transfer. Our platform handles the rest.", isExpanded: false },
    { title: 'Can I track my transfer?', content: "FinanceFast is a platform that allows you to transfer money to anywhere in the world with confidence and ease. Simply create an account, add your recipient's information, and make a transfer. Our platform handles the rest.", isExpanded: false },
    { title: 'Are there any hidden fees with FinanceFast?', content: "FinanceFast is a platform that allows you to transfer money to anywhere in the world with confidence and ease. Simply create an account, add your recipient's information, and make a transfer. Our platform handles the rest.", isExpanded: false },

  ]
}
