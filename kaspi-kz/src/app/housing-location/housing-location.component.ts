import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HousingLocation } from "../housing-location";
import { ShareButtonsComponent } from '../share-buttons/share-buttons.component';

@Component({
  selector: "app-housing-location",
  standalone: true,
  imports: [CommonModule, ShareButtonsComponent],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="housingLocation.photo"
        alt="Фото товара: {{ housingLocation.name }}"
      />
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>

      <p class="listing-location">{{ housingLocation.description }}</p>
      <p class="listing-location">
        Рейтинг: {{ housingLocation.rating }} / 5.0
      </p>
      <a class="listing-location" href="{{ housingLocation.link }}"
        >Открыть на Kaspi.kz</a
      >
      <app-share-buttons></app-share-buttons>
    </section>
  `,
  styleUrls: ["./housing-location.component.css"],
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
