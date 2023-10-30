import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { FaqSectionComponent } from './components/faq-section/faq-section.component';
import { FaqAccordionComponent } from './faq-accordion/faq-accordion.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TestimonialsComponent,
    HeroSectionComponent,
    FaqSectionComponent,
    FaqAccordionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
