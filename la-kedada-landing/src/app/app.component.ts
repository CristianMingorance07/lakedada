import {Component, HostListener} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TestimonialsComponent} from "./components/testimonials/testimonials.component";
import {FooterComponent} from "./components/footer/footer.component";
import {FeaturesComponent} from "./components/features/features.component";
import {AboutComponent} from "./components/about/about.component";
import {BannerComponent} from "./components/banner/banner.component";
import {HeaderComponent} from "./components/header/header.component";
import {NgClass} from "@angular/common";
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestimonialsComponent, FooterComponent, FeaturesComponent, AboutComponent, BannerComponent, HeaderComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'la-kedada-landing';
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }


  sendEmail(event: Event) {
    event.preventDefault();

    emailjs.sendForm(
      'service_zwvbkgf',
      'template_aumru0e',
      event.target as HTMLFormElement,
      'xC2bKaNewUtskFKsA'
    ).then((result: EmailJSResponseStatus) => {
      console.log('Correo enviado:', result.text);
      alert('Mensaje enviado correctamente.');
    }, (error) => {
      console.log('Error al enviar correo:', error.text);
      alert('Hubo un error al enviar el mensaje. Inténtalo nuevamente.');
    });
  }
}
