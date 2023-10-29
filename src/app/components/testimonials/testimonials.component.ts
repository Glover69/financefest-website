import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { gsap, random } from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.testimonials();
  }

  constructor(private el: ElementRef) {}

  testimonials() {
    const scrollWrapper = gsap.utils.toArray<HTMLElement>('.wrapper');
    const scrollContainer = document.getElementsByClassName(
      '.scroll-wrapper-testimonials'
    )[0];

    gsap.to(scrollWrapper, {
      xPercent: -100 * scrollWrapper.length,
      ease: 'none',
      scrollTrigger: {
        trigger: '.testimonials-section',
        // start: 'top',
        pin: true,
        // scrub: 1,
        // end: '+=3000',
        // markers: true,
      },

    });

    // gsap.to(scrollContainer, {
    //   x: () =>
    //   -100 * (scrollWrapper.length) +
    //     'px',
    //   ease: 'none',
    //   scrollTrigger: {
    //     trigger: '.testimonials-section',
    //     invalidateOnRefresh: true,
    //     pin: true,
    //     scrub: 1,
    //     // end: () => '+=' + scrollContainer.offsetWidth,
    //   },
    // });

    console.log(-100 * scrollWrapper.length);
  }
}
