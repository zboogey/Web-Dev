import { Component, Input } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-item/product-item.component';

interface Product {
  name: string;
  description: string;
  image: string;
  rating: number;
  link: string;
  category: string;
  price: number;
  likes: number;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, NgFor, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  @Input() category: string = 'All';

  products: Product[] = [
    
    {
      name: 'Apple iPhone 13 128Gb черный',
      description:
        'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко.',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
      category: 'Телефоны',
      price: 271696,
      likes: 0,
    },
    {
      name: 'Apple 18W USB-C Power Adapter USB Type-C белый',
      description:
        'Адаптер Apple 18W USB-C Power Adapter представляет собой компактное и эффективное зарядное устройство, предназначенное для быстрой и эффективной зарядки ваших устройств.',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h1b/hd6/64377056231454.jpg?format=gallery-medium',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/apple-18w-usb-c-power-adapter-usb-type-c-belyi-102743952/?c=750000000',
      category: 'Телефоны',
      price: 9990,
      likes: 0,
    },
    {
      name: 'Смартфон Apple iPhone 16 Pro Max 256Gb черный',
      description:
        'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета. Это самое производительное устройство в линейке Apple iPhone с масштабным дисплеем, потрясающей производительностью и невероятной внешней эргономикой. Iphone 16 pro max – настоящий титан в своем семействе.',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000',
      category: 'Телефоны',
      price: 684827,
      likes: 0,
    },
    {
      name: 'Кеды DD&OO черный',
      description:
        'термопластичная резина (ТПР)',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/hc6/h66/85607758364702.jpg?format=gallery-medium',
      rating: 4.2,
      link: 'https://kaspi.kz/shop/p/kedy-dd-oo-x-50-2901ddbl-chernyi-36-116335878/?c=750000000&hasVariants=true',
      category: 'Обувь',
      price: 5971,
      likes: 0,
    },
    {
      name: 'Кроссовки Fashion белый',
      description:
        'Кроссовки женские, упакованы в коробки. Маломерят на один размер. Комфортные. Соответствует фото',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h67/h28/86141304668190.jpg?format=gallery-medium',
      rating: 4.2,
      link: 'https://kaspi.kz/shop/p/krossovki-fashion-d82-belyi-36-119871130/?c=750000000&hasVariants=true',
      category: 'Обувь',
      price: 3585,
      likes: 0,
    },
    {
      name: 'Тапочки белый',
      description:
        'Мягкие стильные тапочки. Стилизованы под шерсть овечки. Декоративные сердечки. Стиль подходит как взрослым так и подросткам. Легкие и комфортные. Не скользящая подошва.',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h17/h1a/84761378062366.jpg?format=gallery-medium',
      rating: 4.2,
      link: 'https://kaspi.kz/shop/p/tapochki-632047-belyi-36-37-115551448/?c=750000000&hasVariants=true',
      category: 'Обувь',
      price: 1562,
      likes: 0,
    },
    {
      name: 'Пусеты белый бижутерный сплав, акрил',
      description:
        'начение веса оттенка на фото и характеристики являются примерными усредненными и могут отличаться от фактических',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/hd6/hfd/84932970020894.jpg?format=gallery-medium',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/pusety-belyi-bizhuternyi-splav-akril-115934139/?c=750000000',
      category: 'Укращения',
      price: 119,
      likes: 0,
    },
    {
      name: 'Серьги Лепестки бижутерный сплав, без вставок',
      description:
        'начение веса оттенка на фото и характеристики являются примерными усредненными и могут отличаться от фактических',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/hb7/h46/81270775021598.jpg?format=gallery-medium',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/ser-gi-lepestki-bizhuternyi-splav-bez-vstavok-110853997/?c=750000000',
      category: 'Укращения',
      price: 110,
      likes: 0,
    },
    {
      name: 'Кольцо размер регулируемый бижутерный сплав, перламутр',
      description:
        'начение веса оттенка на фото и характеристики являются примерными усредненными и могут отличаться от фактических',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h09/h0f/84939931189278.jpg?format=gallery-medium',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/pusety-belyi-bizhuternyi-splav-akril-115934139/?c=750000000',
      category: 'Укращения',
      price: 105,
      likes: 0,
    },
    {
      name: 'Серьги Лепестки бижутерный сплав, без вставок',
      description:
        '120 уровней скорости и 3 тренировочных канала, ходьба, бег трусцой, различные упражнения объединены в мощном тренажере',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/he5/h0c/86514196250654.jpg?format=gallery-medium',
      rating: 4.3,
      link: 'https://kaspi.kz/shop/p/fortis-gorizontal-naja-110131962/?c=750000000',
      category: 'Спорт',
      price: 24776,
      likes: 0,
    },
    {
      name: 'Креатин Maxler 100% Golden Creatine 300 г',
      description:
        'Каждый атлет знает о положительных эффектах креатина на рост мышечной массы и тренировочный процесс в целом:',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h77/h52/86474306912286.jpg?format=gallery-medium',
      rating: 4.3,
      link: 'https://kaspi.kz/shop/p/maxler-100-golden-creatine-300-g-29502177/?c=750000000',
      category: 'Спорт',
      price: 14900,
      likes: 0,
    },
    {
      name: 'Креатин Kevin Levrone Kevin Levrone Gold Creatine 300 г',
      description:
        'Kevin Levrone Gold Creatine - диетическая добавка, созданная на основе высококачественного креатина моногидрата - соединения,',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/hb1/h2d/85541705121822.jpg?format=gallery-medium',
      rating: 4.3,
      link: 'https://kaspi.kz/shop/p/kevin-levrone-kevin-levrone-gold-creatine-300-g-117800576/?c=750000000',
      category: 'Спорт',
      price: 7999,
      likes: 0,
    },
  ];

  get filteredProducts() {
    return this.category === 'All'
      ? this.products
      : this.products.filter((p) => p.category === this.category);
  }

  removeProduct(index: number) {
    this.products.splice(index, 1);
  }
}