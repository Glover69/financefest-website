import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { gsap, random } from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';


gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent implements AfterViewInit {

  ngAfterViewInit() {
    this.fadeInFromLeft();
    this.fadeInFromCenter();
    this.blinkCursor();
  }

  constructor(private el: ElementRef) {}


  private text = 'Simplify Your International Transactions with One Platform'; // Text for the type animation
  private speed = 0.1; // Typing speed (lower value for faster typing)
  private cursorBlinkSpeed = 0.5; // Cursor blinking speed

  private blinkCursor(): void {
    const cursor = this.el.nativeElement.querySelector('.cursor');
    const element = this.el.nativeElement.querySelector('.mainHeroText');

    gsap.to(element, {
      delay: 2,
      text: this.text,
      duration: this.text.length * this.speed,
      ease: 'power1.in',

      onComplete: () => {
        // Animation is complete
        // Change the color of 'One Platform'
        const worldIndex = this.text.indexOf('One Platform');
        const worldSpan = document.createElement('span');
        worldSpan.textContent = 'One Platform'; // worldSpan.style.color = '#563ACC'; // Set the desired color

        gsap.to(worldSpan, {
          color: '#563ACC',
          delay: 1,
          duration: 0.75,

          onComplete: () => {
            element.innerHTML =
              this.text.substring(0, worldIndex) + worldSpan.outerHTML;
          },
        });
      },
    });

    // gsap.to(cursor, {
    //   opacity: 0,
    //   repeat: -1, // Repeat the animation indefinitely
    //   yoyo: true, // Reverse the animation (blink effect)
    //   duration: this.cursorBlinkSpeed,
    //   force3D: true,
    // });
  }


  // Fade in animation for the sub hero text
  fadeInFromLeft() {
    const element = this.el.nativeElement.querySelectorAll('.subHeroText');

    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 9, // Animation duration in seconds
      ease: 'power1.inOut', // Easing function
    });
  }


  // Fade in animation for the lower section of the hero container
  fadeInFromCenter() {
    const element = this.el.nativeElement.querySelector('.hero-lower');

    gsap.to(element, {
      'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
      opacity: 1,
      y: 0,
      duration: 1.25,
      delay: 9, // Animation duration in seconds
      ease: 'power3.inOut', // Easing function
    });
  }
}
