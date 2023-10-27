import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import TextPlugin from 'gsap/TextPlugin'; // Import the TextPlugin
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(TextPlugin); // Register the TextPlugin
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'FinanceFast-Website';

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.fadeInFromLeft();
    this.fadeInFromCenter();
    this.blinkCursor();
    this.mockups();
    this.partners();
    this.carousel();
    this.featureContainer();
  }

  // Fade in animation for the main hero text

  private text = 'Simplify Your International Transactions with'; // Text for the type animation
  private textTwo = 'One Platform'; // ext for the type animation (Blue text)
  private speed = 0.1; // Typing speed (lower value for faster typing)
  private cursorBlinkSpeed = 0.5; // Cursor blinking speed

  private blinkCursor(): void {
    const cursor = this.el.nativeElement.querySelector('.cursor');
    const element = this.el.nativeElement.querySelector('.mainHeroText');
    const blueTextelement = this.el.nativeElement.querySelector('.blue-text');

    gsap.to(element, {
      delay: 2,
      text: this.text,
      duration: this.text.length * this.speed,
      ease: 'power1.in',
    });

    gsap.to(blueTextelement, {
      delay: 6,
      text: this.textTwo,
      duration: this.textTwo.length * 0.1,
      ease: 'power1.in',
    });

    gsap.to(cursor, {
      opacity: 0,
      repeat: -1, // Repeat the animation indefinitely
      yoyo: true, // Reverse the animation (blink effect)
      duration: this.cursorBlinkSpeed,
      force3D: true,
    });

    // Position the cursor based on the width and height of the text element
    gsap.set(cursor, {
      x: () => element.offsetWidth,
      y: () => element.offsetHeight / 2 - cursor.offsetHeight / 2,
    });
  }

  // Fade in animation for the sub hero text

  fadeInFromLeft() {
    const element = this.el.nativeElement.querySelector('.subHeroText');

    gsap.from(element, {
      opacity: 0,
      y: -20,
      duration: 0.75,
      delay: 10, // Animation duration in seconds
      ease: 'power1.inOut', // Easing function
    });

    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 0.75,
      delay: 10, // Animation duration in seconds
      ease: 'power1.inOut', // Easing function
    });
  }

  // Fade in animation for the lower section of the hero container

  fadeInFromCenter() {
    const element = this.el.nativeElement.querySelector('.hero-lower');

    gsap.to(element, {
      opacity: 1,
      x: 0,
      duration: 1,
      delay: 10, // Animation duration in seconds
      ease: 'power1.inOut', // Easing function
    });
  }

  mockups() {
    const element = this.el.nativeElement.querySelector('.mockup-group');

    gsap.from(element, {
      opacity: 0,
      y: 20,
      duration: 0.75,
      delay: 11, // Animation duration in seconds
      ease: 'power1.inOut', // Easing function
    });

    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 0.75,
      delay: 11, // Animation duration in seconds
      ease: 'power1.inOut',
      // scrollTrigger: {
      //   trigger: element,
      //   start: 'top center+=100', // Start animation 100 pixels below the top of the viewport
      //   end: 'bottom center', // End animation when the bottom of the element reaches the center of the viewport
      //   scrub: true, // Smoothly scrub through the animation as the user scrolls
      //   markers: true, // Show markers for debugging purposes (you can remove this in production)
      // }, // Easing function
    });
  }

  partners() {
    const element = this.el.nativeElement.querySelector('.partners-container');

    gsap.from(element, {
      width: 0,
      opacity: 0,
      x: -100,
      duration: 0.75,
      delay: 11, // Animation duration in seconds
      ease: 'power1.inOut', // Easing function
    });

    gsap.to(element, {
      width: '100%',
      opacity: 1,
      x: 0,
      duration: 0.75,
      delay: 11, // Animation duration in seconds
      ease: 'power1.inOut', // Easing function
    });
  }

  private carousel(): void {
    const carousel = this.el.nativeElement.querySelector('.carousel');
    const items = this.el.nativeElement.querySelectorAll('.carousel-item');

    // Calculate total width of marquee
    const totalWidth: any = Array.from(items).reduce((acc, item: any) => {
      acc += item.offsetWidth;
      return acc;
    }, 0);

    // Clone items to fill the marquee
    let clones = '';
    items.forEach((item: HTMLElement) => {
      clones += item.outerHTML;
    });
    carousel.innerHTML += clones;

    // Set the width of marquee to fit all items
    carousel.style.width = totalWidth * 2 + '%';

    // Create a GSAP timeline
    const timeline = gsap.timeline({
      repeat: -1, // Repeat infinitely
      defaults: { ease: 'linear' },
    });

    // Animation to move the marquee to the left
    timeline.to(carousel, {
      yoyo: true,
      x: -carousel.style.width, // Move the marquee to the left by the total width of items
      duration: carousel.style.width / 100, // Adjust the duration for the speed of the marquee (100 pixels per second in this case)
      scrollTrigger: {
        trigger: carousel,
        start: 'start end', // Start the animation when the marquee starts and end when it ends
        scrub: true, // Smoothly scrub through the animation as the user scrolls
      },
    });
  }

  featureContainer() {
    const mainHeaderText = 'Say Goodbye to International Payment Hassles';
    const featureSection = document.querySelector('.feature-section');
    const mainHeader = document.querySelector('.feature-section-mainHeader');
    const subHeader = document.querySelector('.feature-section-subheader');

    gsap.from(featureSection, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 10,
      scrollTrigger: {
        trigger: featureSection,
        start: 'top bottom-=200',
        end: 'bottom center',
        scrub: true,
      },
    });

    gsap.to(featureSection, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 10,
      scrollTrigger: {
        trigger: featureSection,
        start: 'top bottom-=200',
        end: 'bottom center',
        scrub: true,
      },
    });

    gsap.from(subHeader, {
      opacity: 0,
      y: -100,
      duration: 1,
      scrollTrigger: {
        trigger: subHeader,
        start: 'top bottom-=200',
        end: 'bottom center',
        scrub: true,
      },
    });

    gsap.to(subHeader, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: subHeader,
        start: 'top bottom-=200',
        end: 'bottom center',
        scrub: true,
      },
    });

    gsap.to(mainHeader, {
      text: mainHeaderText,
      duration: mainHeaderText.length * 0.1,
      scrollTrigger: {
        trigger: mainHeader,
        start: 'top bottom-=200',
        end: 'bottom center',
        // scrub: true,
      },
    });
  }
}
