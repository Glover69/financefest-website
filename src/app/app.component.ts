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
    this.mockups();
    this.partners();
    // this.bounce();
    // this.carousel();
    // this.featureContainer();
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

  // bounce() {
  //   CustomBounce.create('myBounce', {
  //     strength: 0.5,
  //     squash: 0,
  //     squashID: 'myBounce-squash',
  //   });

  //   gsap.to('.white-container', {
  //     delay: 0.5,
  //     duration: 5,
  //     y: '0',
  //     // rotate: ,
  //     transformOrigin: 'top center',
  //     ease: 'myBounce',
  //     repeat: 0,
  //     repeatDelay: 1.5,
  //     stagger: 0.25,
  //     scrollTrigger: {
  //       trigger: '.white-container',
  //       // pin the trigger element while active
  //       start: 'top 300px',
  //       end: 'top 100px', // end after scrolling 500px beyond the start
  //       markers: true,
  //     },
  //   });

  //   //the squish which affects scaleX and scaleY. To make the effect stronger/weaker, just change the scaleX/scaleY values:
  //   gsap.to('.white-container', {
  //     delay: 0.2,
  //     duration: 6,
  //     scaleX: 1,
  //     scaleY: 1,
  //     ease: 'myBounce-squash',
  //     transformOrigin: 'bottom',
  //     repeat: 0,
  //     repeatDelay: 1.5,
  //   });
  // }
}
