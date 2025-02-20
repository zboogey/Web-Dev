import { Injectable } from "@angular/core";
import { HousingLocation } from "./housing-location";

@Injectable({
  providedIn: "root",
})
export class HousingService {
  protected housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: "Зарядное устройство Apple 18W USB-C Power Adapter USB Type-C белый",
      photo:
        "https://resources.cdn-kaspi.kz/img/m/p/h1b/hd6/64377056231454.jpg?format=gallery-medium",
      description:
        "Адаптер Apple 18W USB-C Power Adapter представляет собой компактное и эффективное зарядное устройство, предназначенное для быстрой и эффективной зарядки ваших устройств.",
      rating: 4,
      link: "https://kaspi.kz/shop/p/apple-18w-usb-c-power-adapter-usb-type-c-belyi-102743952/?c=750000000",
    },
    {
      id: 1,
      name: "Чехол Для Apple iPhone 13 прозрачный",
      photo:
        "https://resources.cdn-kaspi.kz/img/m/p/h5c/hec/86261115060254.png?format=gallery-medium",
      description:
        "Надежный и стильный чехол для вашего смартфона, обеспечивающий защиту от царапин, ударов и загрязнений. Идеально повторяет форму устройства, сохраняя удобный доступ ко всем кнопкам, портам и камере. Выполнен из качественных материалов, которые гарантируют долговечность и комфортное использование. Элегантный дизайн подчеркивает ваш стиль и обеспечивает дополнительный уровень защиты для вашего устройства.",
      rating: 4.5,
      link: "https://kaspi.kz/shop/p/dlja-apple-iphone-13-prozrachnyi-106185651/?c=750000000",
    },
    {
      id: 2,
      name: "Смартфон Apple iPhone 13 128Gb черный",
      photo:
        "https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium",
      description:
        "Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.",
      rating: 5,
      link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000",
    },
    {
      id: 3,
      name: "Смартфон Apple iPhone 16 Pro Max 256Gb черный",
      photo:
        "https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium",
      description:
        "Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета. Это самое производительное устройство в линейке Apple iPhone с масштабным дисплеем, потрясающей производительностью и невероятной внешней эргономикой. Iphone 16 pro max – настоящий титан в своем семействе. Флагманская модель с тончайшими рамками корпуса обладает эргономичным дизайном, высокой ударо- и влагозащитой.",
      rating: 3,
      link: "https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000",
    },
    {
      id: 4,
      name: "Зарядное устройство Apple 20W USB-C Power Adapter белый",
      photo:
        "https://resources.cdn-kaspi.kz/img/m/p/h95/h0e/63961934823454.jpg?format=gallery-medium",
      description:
        "Адаптер питания Apple USB‑C мощностью 20 Вт дает возможность быстро и эффективно заряжать гаджеты. Проверяется на основном сайте через QR на оригинальность. Этот адаптер совместим с любыми устройствами Apple, оснащенными портом USB-C: смартфон, планшет или смарт-часы",
      rating: 4.9,
      link: "https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?c=750000000",
    },
    {
      id: 5,
      name: "Смартфон Apple iPhone 16 Pro Max 256Gb золотистый",
      photo:
        "https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-medium",
      description:
        "Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета. Это самое производительное устройство в линейке Apple iPhone с масштабным дисплеем, потрясающей производительностью и невероятной внешней эргономикой. Iphone 16 pro max – настоящий титан в своем семействе",
      rating: 4.1,
      link: "https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000",
    },
    {
      id: 6,
      name: "Смартфон Xiaomi Redmi 13C 8 ГБ/256 ГБ черный",
      photo:
        "https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-medium",
      description:
        "яркость: 450 нит (тип.), 600 нит (HBM) Поддерживает режим чтения. Сертификация по безопасности для зрения TÜV Rheinland Low Blue Light Оптимизация для снижения усталости глаз и излучения синего света с помощью технологии Flicker Free Поддерживает FM-радио (с разъемом для наушников) Поддержка зарядки 18 Вт Оболочка MIUI 14. Смартфон не предназначен для ААА (тяжелых) игр.",
      rating: 4.1,
      link: "https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000",
    },
    {
      id: 7,
      name: "Чехол Для Apple iPhone 11 прозрачный",
      photo:
        "https://resources.cdn-kaspi.kz/img/m/p/h53/hf3/86260519796766.jpg?format=gallery-medium",
      description:
        "Легкий, но при этом максимально- надежный чехол для Apple iPhone 11. Усиленные углы чехла - снижают силу удара на 30%. Полная защита камеры и выступающие над поверхностью экрана бортики - создают дополнительную защиту для экрана и камеры телефона. Кристально- прозрачный, тонкий и пластичный материал плотно облегает корпус смартфона, сохраняя стиль и индивидуальность гаджета. ",
      rating: 4.1,
      link: "https://kaspi.kz/shop/p/dlja-apple-iphone-11-prozrachnyi-103661424/?c=750000000",
    },
    {
      id: 8,
      name: "Смартфон Apple iPhone 16 Pro Max 256Gb золотистый",
      photo:
        "https://resources.cdn-kaspi.kz/img/m/p/h74/ha7/87295492882462.png?format=gallery-medium",
      description:
        "Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета. Это самое производительное устройство в линейке Apple iPhone с масштабным дисплеем, потрясающей производительностью и невероятной внешней эргономикой. Iphone 16 pro max – настоящий титан в своем семействе",
      rating: 4.1,
      link: "https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-serebristyi-123890752/?c=750000000",
    },
    {
      id: 9,
      name: "Смартфон Apple iPhone 16 128Gb черный",
      photo:
        "https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium",
      description:
        "Phone 16 – новый дизайн, яркие цвета, мощный процессор и свежая iOS 18 с искусственным интеллектом. Этот айфон предлагает еще больше возможностей, чем его предшественники, выводя базовую модель на другой уровень: лучше, интереснее, удобнее. Это компактный и удобный смартфон для тех, кому нужно производительное устройство в стильном корпусе без компромиссов по качеству фото или комфорту в использовании.",
      rating: 4.1,
      link: "https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000",
    },
  ];
  constructor() {}

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(
      (housingLocation) => housingLocation.id === id
    );
  }
}
