import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { gsap, random } from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
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
    this.fadeInFromLeft();
    this.fadeInFromCenter();
    this.blinkCursor();
    this.mockups();
    this.partners();
    // this.bounce();
    // this.carousel();
    // this.featureContainer();
  }

  // Fade in animation for the main hero text

  private text = 'Simplify Your International Transactions with'; // Text for the type animation
  private textTwo = 'One Platform'; // ext for the type animation (Blue text)
  private speed = 0.1; // Typing speed (lower value for faster typing)
  private cursorBlinkSpeed = 0.5; // Cursor blinking speed

  private blinkCursor(): void {
    const cursor = CSSRulePlugin.getRule('.hero-text-wrapper::after');
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
  }

  // Fade in animation for the sub hero text

  fadeInFromLeft() {
    const element = this.el.nativeElement.querySelectorAll('.subHeroText');

    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 8, // Animation duration in seconds
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
      duration: 1.5,
      delay: 8, // Animation duration in seconds
      ease: 'power3.inOut', // Easing function
    });
  }

  mockups() {
    const element = this.el.nativeElement.querySelector('.mockup-group');

    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      delay: 8, // Animation duration in seconds
      ease: 'power4.inOut',
    });
  }

  partners() {
    const element = this.el.nativeElement.querySelector('.partners-container');

    gsap.to(element, {
      width: '100%',
      opacity: 1,
      x: 0,
      duration: 1,
      delay: 8, // Animation duration in seconds
      ease: 'power1.inOut', // Easing function
      onComplete: () => {
        // Animation complete callback
        // Change the page's overflow property to 'scroll'
        document.body.style.overflow = 'scroll';
        this.el.nativeElement.querySelector('.feature-section').style.display =
          'flex';
      },
    });
  }

  bounce() {
    // CustomBounce.create('myBounce', {
      // strength: 0.5,
       // squash: 0,
      // squashID: 'myBounce-squash',
    // }); 

    // gsap.from('.white-container',{
    //   y: -150
    // })
  }
}
