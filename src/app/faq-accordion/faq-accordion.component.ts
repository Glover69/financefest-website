import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-faq-accordion',
  templateUrl: './faq-accordion.component.html',
  styleUrls: ['./faq-accordion.component.scss']
})
export class FaqAccordionComponent {

  expanded : boolean = false;
 

  toggleAccordion() {
    this.expanded = !this.expanded;
  }

  @Input() title!: string;
  @Input() content!: string;
  @Input() isExpanded!: boolean; 
}
