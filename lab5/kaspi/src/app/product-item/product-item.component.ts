import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  name: string;
  description: string;
  image: string;
  rating: number;
  link: string;
  price: number;
  likes: number;
}

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() remove = new EventEmitter<void>();

  openLink() {
    window.open(this.product.link, '_blank');
  }

  shareOnWhatsApp() {
    const text = `Check out this product: ${this.product.name} for ${this.product.price} KZT  ${this.product.rating}/5 \n${this.product.link}`;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      text
    )}`;
    window.open(url, '_blank');
  }

  shareOnTelegram() {
    const text = `Check out this product: ${this.product.name} for ${this.product.price} KZT  ${this.product.rating}/5 \n${this.product.link}`;
    const url = `https://t.me/share/url?url=${encodeURIComponent(
      this.product.link
    )}&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }

  likeProduct() {
    if (this.product.likes < 1) {
      this.product.likes += 1;
    }
  }

  removeProduct() {
    this.remove.emit();
  }
}