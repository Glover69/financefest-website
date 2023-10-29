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
    const scrollWrapper = gsap.utils.toArray<HTMLElement>('.wrapper');
    const scrollContainer = this.el.nativeElement.querySelector('.scroll-wrapper-testimonials');

  //   // Calculate the total width of all child elements
  // const totalWidth = scrollWrapper.reduce((acc, child) => {
  //   const childWidth = child.clientWidth; // Use clientWidth to get the element's width
  //   return acc + childWidth;
  // }, 0);

  // // Calculate the scroll percentage based on the total width and parent container's width
  // const scrollPercentage = -(totalWidth - scrollWrapper[0].parentElement.clientWidth) / totalWidth * 100;

    gsap.to(scrollWrapper, {
      xPercent: -100 * (scrollWrapper.length),
      ease: "none",
      scrollTrigger: {
        trigger: '.testimonials-section',
        pin: true,
        scrub: 1,
        end: '+=2000'
      }
    })

    console.log(-100 * (scrollContainer.length))
  }

}
