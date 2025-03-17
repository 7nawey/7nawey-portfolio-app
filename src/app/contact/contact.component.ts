import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true, // ✅ مهم جدًا للمكونات المستقلة
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  email: string = 'mohamedelhnawey676@gmail.com';
  phone: string = '+2001200284939';
  whatsapp: string = 'https://wa.me/2001200284939';
  linkedin: string = 'https://www.linkedin.com/in/mohamed-elhnawey';
  github: string = 'https://github.com/7nawey';
}
