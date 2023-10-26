import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import TextPlugin from 'gsap/TextPlugin'; // Import the TextPlugin

gsap.registerPlugin(TextPlugin); // Register the TextPlugin


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
    this.typeText();
    this.blinkCursor();
  }

  // Fade in animation for the main hero text

  private text = 'Simplify Your International Transactions with'; // Text you want to type out
  private speed = 0.1; // Typing speed (lower value for faster typing)
  private cursorBlinkSpeed = 0.5; // Cursor blinking speed (adjust as needed)

  private typeText(): void {
    const element = this.el.nativeElement.querySelector('.mainHeroText');

    gsap.to(element, {
      delay: 2,
      text: this.text,
      duration: this.text.length * this.speed,
      ease: 'power1.in',
    });
  }

  private blinkCursor(): void {
    const cursor = this.el.nativeElement.querySelector('.cursor');
    const element = this.el.nativeElement.querySelector('.typing-text');

    
    gsap.to(cursor, {
      opacity: 0,
      repeat: -1, // Repeat the animation indefinitely
      yoyo: true, // Reverse the animation (blink effect)
      duration: this.cursorBlinkSpeed,
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
      y: 50,
      duration: 0.75,
      delay: 7.5, // Animation duration in seconds
      ease: 'power1.inOut' // Easing function
    });
  }

  // Fade in animation for the lower section of the hero container

  fadeInFromCenter() {
    const element = this.el.nativeElement.querySelector('.hero-lower');

    // gsap.from(element, {
    //   opacity: 0,
    //   x: 0,
    //   duration: 1,
    //   delay: 10, // Animation duration in seconds
    //   ease: 'power1.inOut' // Easing function
    // });

    gsap.to(element, {
      opacity: 1,
      x: 0,
      duration: 1,
      delay: 10, // Animation duration in seconds
      ease: 'power1.inOut' // Easing function
    });
  }
}
