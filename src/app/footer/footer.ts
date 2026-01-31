import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';@Component({

  selector: 'app-footer',
  imports: [FontAwesomeModule],
  templateUrl: './footer.html',
})
export class Footer {
  linkedInIcon = faLinkedin;
}
