import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { gsap, random } from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import SplitType from 'split-type'

// import CustomBounce from 'gsap-trial/CustomBounce';
// import CustomEase from 'gsap-trial/CustomEase';

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSRulePlugin);

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.testimonials();
  }

  constructor(private el: ElementRef){}

  testimonials(){
    const scrollWrapper = this.el.nativeElement.querySelector('.lower-testimonials-section');
    const mainContainer = this.el.nativeElement.querySelector('scroll-wrapper-testimonials');


    gsap.to( scrollWrapper, {
      xPercent: -100 * (scrollWrapper.length -1),
      ease: "none",
      scrollTrigger: {
        trigger: mainContainer,
        pin: true,
        scrub: 1,
        end: "+=3000"
      }
    })
  }

}
