import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
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
// gsap.registerPlugin(CustomEase, CustomBounce);

export interface CurrencyConvert {
  image: string;
  title: string;
  subTitle: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'FinanceFast-Website';

  // Populating currency containers
  currencyConvert: CurrencyConvert[] = [
    {
      image: '/assets/svgs/currency-lira.svg',
      title: 'Turkish Lira',
      subTitle: '₦‎ 340 to ₺1 + ₦2,500 hidden conversion fee',
    },
    {
      image: '/assets/svgs/currency-rand.svg',
      title: 'South Africa Rand',
      subTitle: '₦‎ 470 to R1 + ₦3,100 hidden conversion fee',
    },
    {
      image: '/assets/svgs/currency-dollar.svg',
      title: 'United States Dollar',
      subTitle: '₦‎ 770 to $1 + ₦‎ 3,000 hidden conversion fee',
    },
    {
      image: '/assets/svgs/currency-won.svg',
      title: 'South Korean Won',
      subTitle: '₦‎ 470 to ₩1 + ₦‎ 5,000 hidden conversion fee',
    },
    {
      image: '/assets/svgs/currency-yuan.svg',
      title: 'Chinese Yuan',
      subTitle: '₦‎ 470 to  ¥1 + ₦‎ 3,200 hidden conversion fee',
    },
  ];

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    // this.fadeInFromLeft();
    // this.fadeInFromCenter();
    // this.blinkCursor();
    // this.mockups();
    // this.partners();
    // this.bounce();
    // this.carousel();
    // this.featureContainer();
  }

  // Fade in animation for the main hero text

  private text = 'Simplify Your International Transactions with One Platform'; // Text for the type animation
  private textTwo = ''; // ext for the type animation (Blue text)
  private speed = 0.1; // Typing speed (lower value for faster typing)
  private cursorBlinkSpeed = 0.5; // Cursor blinking speed
  // private splitText = require('split-text');
  
  
 

  private blinkCursor(): void {
    const cursor = this.el.nativeElement.querySelector('.cursor');
    const element = this.el.nativeElement.querySelector('.mainHeroText');
    const blueTextelement = this.el.nativeElement.querySelector('.blue-text');
    // const textThree = SplitType.create('.partners-txt', {types: 'chars'});

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
        worldSpan.textContent = 'One Platform';        // worldSpan.style.color = '#563ACC'; // Set the desired color

        gsap.to(worldSpan, {
          color: '#563ACC',
          delay: 1,
          duration: 0.75,

          onComplete: () => {
            element.innerHTML = this.text.substring(0, worldIndex) + worldSpan.outerHTML;
          }   
        
        });
      }
      
    });

    gsap.to(cursor, {
      opacity: 0,
      repeat: -1, // Repeat the animation indefinitely
      yoyo: true, // Reverse the animation (blink effect)
      duration: this.cursorBlinkSpeed,
      force3D: true,
    });
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

  mockups() {
    const element = this.el.nativeElement.querySelector('.mockup-group');

    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 1.25,
      delay: 9, // Animation duration in seconds
      ease: 'power4.inOut',
    });
  }

  partners() {
    const element = this.el.nativeElement.querySelector('.partners-container');

    gsap.to(element, {
      width: '100%',
      opacity: 1,
      duration: 1,
      delay: 8, // Animation duration in seconds
      ease: 'power1.inOut', // Easing function
      onComplete: () => {
        // Animation complete callback
        // Change the page's overflow property to 'scroll'
        // document.body.style.overflowY = 'scroll';
        // this.el.nativeElement.querySelector('.feature-section').style.display =
        //   'flex';
      },
    });
  }

  bounce() {
    CustomBounce.create('myBounce', {
      strength: 0.5,
      squash: 0,
      squashID: 'myBounce-squash',
    });

    gsap.to('.white-container', {
      delay: 0.5,
      duration: 5,
      y: '0',
      // rotate: ,
      transformOrigin: 'top center',
      ease: 'myBounce',
      repeat: 0,
      repeatDelay: 1.5,
      stagger: 0.25,
      scrollTrigger: {
        trigger: '.white-container',
        // pin the trigger element while active
        start: 'top 300px',
        end: 'top 100px', // end after scrolling 500px beyond the start
        markers: true,
      },
    });

    //the squish which affects scaleX and scaleY. To make the effect stronger/weaker, just change the scaleX/scaleY values:
    gsap.to('.white-container', {
      delay: 0.2,
      duration: 6,
      scaleX: 1,
      scaleY: 1,
      ease: 'myBounce-squash',
      transformOrigin: 'bottom',
      repeat: 0,
      repeatDelay: 1.5,
    });
  }
}
