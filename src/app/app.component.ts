import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import TextPlugin from 'gsap/TextPlugin'; // Import the TextPlugin
import ScrollTrigger from 'gsap/ScrollTrigger';


gsap.registerPlugin(TextPlugin); // Register the TextPlugin
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'FinanceFast-Website';

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    this.fadeInFromLeft();
    this.fadeInFromCenter();
    // this.typeText();
    this.blinkCursor();
    this.mockups();
    this.partners();
  }

  // Fade in animation for the main hero text

  private text = 'Simplify Your International Transactions with'; // Text you want to type out
  private textTwo = 'One Platform'; // Text you want to type out
  private speed = 0.1; // Typing speed (lower value for faster typing)
  private cursorBlinkSpeed = 0.5; // Cursor blinking speed (adjust as needed)

  // private typeText(): void {
  //   const element = this.el.nativeElement.querySelector('.mainHeroText');

  //   gsap.to(element, {
  //     delay: 2,
  //     text: this.text,
  //     duration: this.text.length * this.speed,
  //     ease: 'power1.in',
  //   });
  // }
  

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
      duration: this.text.length * 0.05,
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
      ease: 'power1.inOut' // Easing function
    });

    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 0.75,
      delay: 10, // Animation duration in seconds
      ease: 'power1.inOut' // Easing function
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
      ease: 'power1.inOut' // Easing function
    });
  }

  mockups(){
    const element = this.el.nativeElement.querySelector('.mockup-group');

    gsap.from(element, {
      opacity: 0,
      y: 20,
      duration: 0.75,
      delay: 11, // Animation duration in seconds
      ease: 'power1.inOut', // Easing function
      // scrollTrigger: {
      //   trigger: element,
      //   start: 'top center+=100', // Start animation 100 pixels below the top of the viewport
      //   end: 'bottom center', // End animation when the bottom of the element reaches the center of the viewport
      //   scrub: true, // Smoothly scrub through the animation as the user scrolls
      //   markers: true, // Show markers for debugging purposes (you can remove this in production)
      // },
    });

    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 0.75,
      delay: 11, // Animation duration in seconds
      ease: 'power1.inOut' // Easing function
    });
  }

  partners(){
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
      ease: 'power1.inOut' // Easing function
    });
  }
}
