import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyListComponent } from './components/company-list/company-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CompanyListComponent],
  template: ` <app-company-list></app-company-list> `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hh-front';
}
