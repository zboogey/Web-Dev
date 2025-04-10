import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Vacancy } from '../../models/company';

@Component({
  selector: 'app-vacancy-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.scss'],
})
export class VacancyListComponent implements OnChanges {
  @Input() companyId!: number;
  vacancies: Vacancy[] = [];

  constructor(private apiService: ApiService) {}

  ngOnChanges(): void {
    if (this.companyId) {
      this.apiService.getCompanyVacancies(this.companyId).subscribe({
        next: (vacancies) => {
          console.log('Vacancies received:', vacancies);
          this.vacancies = vacancies;
        },
        error: (err) => console.error('Error fetching vacancies:', err),
      });
    }
  }
}
