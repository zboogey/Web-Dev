import { Component } from '@angular/core';

@Component({
  selector: 'app-share-buttons',
  standalone: true,
  templateUrl: './share-buttons.component.html',
  styleUrls: ['./share-buttons.component.css']
})
export class ShareButtonsComponent {
  shareUrl: string = 'https://kaspi.kz';
  shareTitle: string = 'Check out this Apple Charger on Kaspi!';

  get whatsappShareUrl(): string {
    return `https://api.whatsapp.com/send?text=${encodeURIComponent(this.shareTitle + ' ' + this.shareUrl)}`;
  }

  get telegramShareUrl(): string {
    return `https://t.me/share/url?url=${encodeURIComponent(this.shareUrl)}&text=${encodeURIComponent(this.shareTitle)}`;
  }
}
