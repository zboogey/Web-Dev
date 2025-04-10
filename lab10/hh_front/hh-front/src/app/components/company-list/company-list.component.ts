import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Company } from '../../models/company';
import { VacancyListComponent } from '../vacancy-list/vacancy-list.component';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [CommonModule, VacancyListComponent],
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  selectedCompanyId: number | null = null;
  error: string | null = null;

  constructor(private apiService: ApiService) {
    console.log('CompanyListComponent constructed');
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
    this.loadCompanies();
  }

  loadCompanies(): void {
    console.log('Loading companies...');
    this.apiService.getCompanies().subscribe({
      next: (companies) => {
        console.log('Companies loaded successfully:', companies);
        this.companies = companies;
        this.error = null;
      },
      error: (err) => {
        console.error('Error in ngOnInit:', err);
        this.error = 'Failed to load companies. Please try again later.';
      },
      complete: () => console.log('Company request completed'),
    });
  }

  selectCompany(companyId: number): void {
    console.log('Selected company ID:', companyId);
    this.selectedCompanyId =
      this.selectedCompanyId === companyId ? null : companyId;
  }
}
