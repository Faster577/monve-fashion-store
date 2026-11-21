import type { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    slug: 'pryamoe-palto',
    name: 'Пальто прямого кроя',
    price: 18900,
    category: 'outerwear',
    description:
      'Пальто прямого силуэта из плотной шерстяной смеси. Чистые линии, скрытая застёжка и мягкая подкладка создают образ спокойной уверенности. Идеально для городских будней и вечерних прогулок.',
    images: [
      'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&q=80',
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80',
      'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&q=80',
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { id: 'graphite', name: 'Графит', hex: '#292724' },
      { id: 'beige', name: 'Бежевый', hex: '#C4B5A0' },
      { id: 'camel', name: 'Верблюжий', hex: '#A58B70' },
    ],
    tags: ['пальто', 'осень', 'зима'],
    featured: true,
    isNew: true,
    isBestseller: true,
    popularity: 98,
  },
  {
    id: '2',
    slug: 'sviter-myagkaya-sherst',
    name: 'Свитер из мягкой шерсти',
    price: 8900,
    category: 'women',
    description:
      'Объёмный свитер из итальянской шерсти с мягкой фактурой. Свободный крой подчёркивает естественность движений и создаёт ощущение уюта без потери элегантности.',
    images: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80',
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80',
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { id: 'cream', name: 'Кремовый', hex: '#F5F0E8' },
      { id: 'taupe', name: 'Тауп', hex: '#77716A' },
      { id: 'black', name: 'Чёрный', hex: '#1A1918' },
    ],
    tags: ['свитер', 'шерсть'],
    featured: true,
    isNew: true,
    isBestseller: false,
    popularity: 92,
  },
  {
    id: '3',
    slug: 'bryuki-svobodnyy-siluet',
    name: 'Брюки свободного силуэта',
    price: 7500,
    category: 'women',
    description:
      'Брюки свободного кроя с высокой посадкой. Мягкая ткань драпируется естественно, создавая лёгкий и современный силуэт. Универсальная основа гардероба.',
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80',
      'https://images.unsplash.com/photo-1506629082955-511b1aa96283?w=800&q=80',
      'https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=800&q=80',
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { id: 'black', name: 'Чёрный', hex: '#1A1918' },
      { id: 'beige', name: 'Бежевый', hex: '#C4B5A0' },
      { id: 'olive', name: 'Оливковый', hex: '#6B6B4F' },
    ],
    tags: ['брюки', 'база'],
    featured: true,
    isNew: false,
    isBestseller: true,
    popularity: 95,
  },
  {
    id: '4',
    slug: 'futbolka-bazovaya',
    name: 'Футболка базовая',
    price: 3200,
    category: 'women',
    description:
      'Базовая футболка из плотного хлопка премиального качества. Идеальная посадка, аккуратные швы и тактильная мягкость — фундамент любого образа.',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { id: 'white', name: 'Белый', hex: '#FFFFFF' },
      { id: 'black', name: 'Чёрный', hex: '#1A1918' },
      { id: 'ivory', name: 'Слоновая кость', hex: '#FAF8F3' },
    ],
    tags: ['футболка', 'база', 'хлопок'],
    featured: false,
    isNew: false,
    isBestseller: true,
    popularity: 88,
  },
  {
    id: '5',
    slug: 'rubashka-hlopok',
    name: 'Рубашка из хлопка',
    price: 6400,
    category: 'men',
    description:
      'Классическая рубашка из египетского хлопка с мягким матовым блеском. Свободный крой и аккуратный воротник делают её уместной и в офисе, и на выходных.',
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80',
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { id: 'white', name: 'Белый', hex: '#FFFFFF' },
      { id: 'sky', name: 'Голубой', hex: '#B8C5D0' },
      { id: 'sand', name: 'Песочный', hex: '#D4C5A9' },
    ],
    tags: ['рубашка', 'хлопок'],
    featured: true,
    isNew: false,
    isBestseller: false,
    popularity: 80,
  },
  {
    id: '6',
    slug: 'kurtka-minimalizm',
    name: 'Куртка минималистичного кроя',
    price: 15900,
    category: 'outerwear',
    description:
      'Лёгкая куртка с чистым силуэтом и функциональными деталями. Водоотталкивающая ткань, скрытые карманы и продуманная конструкция для городской жизни.',
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
      'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=800&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { id: 'black', name: 'Чёрный', hex: '#1A1918' },
      { id: 'olive', name: 'Оливковый', hex: '#5C5C45' },
      { id: 'taupe', name: 'Тауп', hex: '#77716A' },
    ],
    tags: ['куртка', 'демисезон'],
    featured: true,
    isNew: true,
    isBestseller: false,
    popularity: 85,
  },
  {
    id: '7',
    slug: 'kardigan-svobodnyy',
    name: 'Кардиган свободного силуэта',
    price: 9800,
    category: 'women',
    description:
      'Мягкий кардиган свободного кроя из смесовой пряжи. Длинный силуэт и объёмные рукава создают ощущение лёгкости. Носите поверх платьев или с брюками.',
    images: [
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80',
      'https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=800&q=80',
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { id: 'cream', name: 'Кремовый', hex: '#F5F0E8' },
      { id: 'mocha', name: 'Мокко', hex: '#8B7355' },
      { id: 'grey', name: 'Серый', hex: '#9A9590' },
    ],
    tags: ['кардиган', 'трикотаж'],
    featured: false,
    isNew: true,
    isBestseller: false,
    popularity: 78,
  },
  {
    id: '8',
    slug: 'kozhanuy-remen',
    name: 'Кожаный ремень',
    price: 4500,
    category: 'accessories',
    description:
      'Ремень из натуральной кожи с минималистичной пряжкой. Тонкий профиль и аккуратная обработка краёв — деталь, которая завершает любой образ.',
    images: [
      'https://images.unsplash.com/photo-1624222247344-550fb60583fd?w=800&q=80',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80',
    ],
    sizes: ['80', '85', '90', '95', '100'],
    colors: [
      { id: 'black', name: 'Чёрный', hex: '#1A1918' },
      { id: 'brown', name: 'Коричневый', hex: '#6B4423' },
      { id: 'cognac', name: 'Коньячный', hex: '#A0522D' },
    ],
    tags: ['ремень', 'кожа', 'аксессуар'],
    featured: false,
    isNew: false,
    isBestseller: true,
    popularity: 82,
  },
  {
    id: '9',
    slug: 'platye-midi',
    name: 'Платье миди с разрезом',
    price: 11200,
    category: 'women',
    description:
      'Платье миди из струящейся ткани с боковым разрезом. Лаконичный крой и мягкая драпировка подчёркивают естественную красоту силуэта.',
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80',
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80',
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { id: 'black', name: 'Чёрный', hex: '#1A1918' },
      { id: 'burgundy', name: 'Бордовый', hex: '#6B2D3C' },
      { id: 'cream', name: 'Кремовый', hex: '#F5F0E8' },
    ],
    tags: ['платье', 'миди'],
    featured: true,
    isNew: true,
    isBestseller: false,
    popularity: 90,
  },
  {
    id: '10',
    slug: 'dzhinsy-pryamye',
    name: 'Джинсы прямого кроя',
    price: 8900,
    category: 'men',
    description:
      'Джинсы прямого силуэта из плотного денима. Классическая посадка, чистые линии и выверенная длина — современная интерпретация вневременной модели.',
    images: [
      'https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=800&q=80',
      'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=800&q=80',
      'https://images.unsplash.com/photo-1475178626620-a4d074967452?w=800&q=80',
    ],
    sizes: ['28', '30', '32', '34', '36'],
    colors: [
      { id: 'indigo', name: 'Индиго', hex: '#3D4F6F' },
      { id: 'black', name: 'Чёрный', hex: '#1A1918' },
      { id: 'washed', name: 'Выбеленный', hex: '#8B9BB0' },
    ],
    tags: ['джинсы', 'деним'],
    featured: false,
    isNew: false,
    isBestseller: true,
    popularity: 87,
  },
  {
    id: '11',
    slug: 'sharf-sherstyanoy',
    name: 'Шарф из мериносовой шерсти',
    price: 5200,
    category: 'accessories',
    description:
      'Широкий шарф из тонкой мериносовой шерсти. Мягкая фактура и нейтральные оттенки позволяют сочетать его с любым верхним слоем гардероба.',
    images: [
      'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800&q=80',
      'https://images.unsplash.com/photo-1601924994987-69e26a50eb37?w=800&q=80',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80',
    ],
    sizes: ['ONE SIZE'],
    colors: [
      { id: 'cream', name: 'Кремовый', hex: '#F5F0E8' },
      { id: 'camel', name: 'Верблюжий', hex: '#A58B70' },
      { id: 'graphite', name: 'Графит', hex: '#292724' },
    ],
    tags: ['шарф', 'аксессуар', 'шерсть'],
    featured: false,
    isNew: true,
    isBestseller: false,
    popularity: 75,
  },
  {
    id: '12',
    slug: 'pidzhak-oversize',
    name: 'Пиджак oversize',
    price: 14500,
    category: 'women',
    description:
      'Пиджак oversize с мягкими плечами и удлинённым силуэтом. Структурированная ткань держит форму, сохраняя комфорт и свободу движений.',
    images: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80',
      'https://images.unsplash.com/photo-1594938291221-94f18cbb3220?w=800&q=80',
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { id: 'black', name: 'Чёрный', hex: '#1A1918' },
      { id: 'beige', name: 'Бежевый', hex: '#C4B5A0' },
      { id: 'grey', name: 'Серый', hex: '#6B6864' },
    ],
    tags: ['пиджак', 'oversize'],
    featured: true,
    isNew: false,
    isBestseller: true,
    popularity: 91,
  },
  {
    id: '13',
    slug: 'svitshot-muzhskoy',
    name: 'Свитшот с круглым вырезом',
    price: 6800,
    category: 'men',
    description:
      'Свитшот из плотного хлопкового футера. Мягкая внутренняя петля, аккуратный крой и сдержанная цветовая палитра — для тех, кто ценит простоту.',
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80',
      'https://images.unsplash.com/photo-1578587018452-892baccfd572?w=800&q=80',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { id: 'grey', name: 'Серый меланж', hex: '#A8A29E' },
      { id: 'black', name: 'Чёрный', hex: '#1A1918' },
      { id: 'cream', name: 'Кремовый', hex: '#F5F0E8' },
    ],
    tags: ['свитшот', 'повседневное'],
    featured: false,
    isNew: false,
    isBestseller: false,
    popularity: 72,
  },
  {
    id: '14',
    slug: 'sumka-kozhanaya',
    name: 'Сумка из мягкой кожи',
    price: 12800,
    category: 'accessories',
    description:
      'Компактная сумка из мягкой натуральной кожи. Лаконичный дизайн, регулируемый ремень и вместительное внутреннее отделение для повседневных нужд.',
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80',
      'https://images.unsplash.com/photo-1590874103328-eac38a67437e?w=800&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80',
    ],
    sizes: ['ONE SIZE'],
    colors: [
      { id: 'black', name: 'Чёрный', hex: '#1A1918' },
      { id: 'cognac', name: 'Коньячный', hex: '#A0522D' },
      { id: 'cream', name: 'Кремовый', hex: '#E8DFD0' },
    ],
    tags: ['сумка', 'кожа', 'аксессуар'],
    featured: true,
    isNew: true,
    isBestseller: false,
    popularity: 86,
  },
  {
    id: '15',
    slug: 'yubka-midi-plisse',
    name: 'Юбка миди плиссе',
    price: 7200,
    category: 'women',
    description:
      'Юбка миди с мягкой плиссировкой. Лёгкая ткань создаёт воздушный силуэт, а эластичный пояс обеспечивает комфортную посадку.',
    images: [
      'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&q=80',
      'https://images.unsplash.com/photo-1577900232427-18219b9166a0?w=800&q=80',
      'https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=800&q=80',
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { id: 'black', name: 'Чёрный', hex: '#1A1918' },
      { id: 'beige', name: 'Бежевый', hex: '#C4B5A0' },
      { id: 'taupe', name: 'Тауп', hex: '#77716A' },
    ],
    tags: ['юбка', 'плиссе'],
    featured: false,
    isNew: false,
    isBestseller: false,
    popularity: 70,
  },
  {
    id: '16',
    slug: 'trench-klassicheskiy',
    name: 'Тренч классический',
    price: 21900,
    category: 'outerwear',
    description:
      'Классический тренч из плотного хлопка с водоотталкивающей пропиткой. Двубортная застёжка, пояс и шлица сзади — детали, которые определяют характер вещи.',
    images: [
      'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=800&q=80',
      'https://images.unsplash.com/photo-1548126032-077b816dba8f?w=800&q=80',
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { id: 'beige', name: 'Бежевый', hex: '#C4B5A0' },
      { id: 'black', name: 'Чёрный', hex: '#1A1918' },
      { id: 'khaki', name: 'Хаки', hex: '#6B6B4F' },
    ],
    tags: ['тренч', 'классика'],
    featured: true,
    isNew: false,
    isBestseller: true,
    popularity: 96,
  },
  {
    id: '17',
    slug: 'bryuki-muzhskie-chinos',
    name: 'Брюки-чиносы',
    price: 6900,
    category: 'men',
    description:
      'Брюки-чиносы из хлопковой саржи с лёгким стрейчем. Универсальный крой средней посадки подходит для работы и выходных.',
    images: [
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80',
    ],
    sizes: ['28', '30', '32', '34', '36'],
    colors: [
      { id: 'beige', name: 'Бежевый', hex: '#C4B5A0' },
      { id: 'navy', name: 'Тёмно-синий', hex: '#2C3E50' },
      { id: 'olive', name: 'Оливковый', hex: '#6B6B4F' },
    ],
    tags: ['брюки', 'чиносы'],
    featured: false,
    isNew: false,
    isBestseller: false,
    popularity: 74,
  },
  {
    id: '18',
    slug: 'kepka-sherstyanaya',
    name: 'Кепка из шерсти',
    price: 3900,
    category: 'accessories',
    description:
      'Структурированная кепка из тонкой шерстяной ткани. Чистая форма и сдержанный дизайн дополняют городской гардероб.',
    images: [
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&q=80',
      'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=800&q=80',
      'https://images.unsplash.com/photo-1575428656923-f5b5b5e8e8e8?w=800&q=80',
    ],
    sizes: ['S/M', 'L/XL'],
    colors: [
      { id: 'black', name: 'Чёрный', hex: '#1A1918' },
      { id: 'camel', name: 'Верблюжий', hex: '#A58B70' },
      { id: 'grey', name: 'Серый', hex: '#6B6864' },
    ],
    tags: ['кепка', 'аксессуар'],
    featured: false,
    isNew: true,
    isBestseller: false,
    popularity: 65,
  },
  {
    id: '19',
    slug: 'zhilet-stehanyy',
    name: 'Жилет стёганый',
    price: 9900,
    category: 'outerwear',
    description:
      'Лёгкий стёганый жилет с наполнителем из переработанного полиэстера. Слоистость без тяжести — для прохладных дней и переменчивой погоды.',
    images: [
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80',
      'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&q=80',
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { id: 'black', name: 'Чёрный', hex: '#1A1918' },
      { id: 'cream', name: 'Кремовый', hex: '#F5F0E8' },
      { id: 'olive', name: 'Оливковый', hex: '#5C5C45' },
    ],
    tags: ['жилет', 'слой'],
    featured: false,
    isNew: true,
    isBestseller: false,
    popularity: 77,
  },
  {
    id: '20',
    slug: 'polo-hlopok',
    name: 'Поло из пике',
    price: 5400,
    category: 'men',
    description:
      'Классическое поло из хлопкового пике. Плотная фактура, аккуратный воротник и сдержанная палитра — основа умного casual-гардероба.',
    images: [
      'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=800&q=80',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80',
      'https://images.unsplash.com/photo-1622445275576-721325763afe?w=800&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { id: 'white', name: 'Белый', hex: '#FFFFFF' },
      { id: 'navy', name: 'Тёмно-синий', hex: '#2C3E50' },
      { id: 'beige', name: 'Бежевый', hex: '#C4B5A0' },
    ],
    tags: ['поло', 'casual'],
    featured: false,
    isNew: false,
    isBestseller: false,
    popularity: 68,
  },
  {
    id: '21',
    slug: 'botinki-kozha',
    name: 'Ботинки из гладкой кожи',
    price: 16900,
    category: 'accessories',
    description:
      'Ботинки на плоской подошве из гладкой кожи. Минималистичный силуэт и качественная фурнитура — обувь, которая служит сезонами.',
    images: [
      'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&q=80',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80',
      'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=800&q=80',
    ],
    sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44'],
    colors: [
      { id: 'black', name: 'Чёрный', hex: '#1A1918' },
      { id: 'brown', name: 'Коричневый', hex: '#6B4423' },
    ],
    tags: ['ботинки', 'обувь', 'кожа'],
    featured: true,
    isNew: false,
    isBestseller: true,
    popularity: 89,
  },
  {
    id: '22',
    slug: 'bluza-shelk',
    name: 'Блуза из шёлковой смеси',
    price: 8600,
    category: 'women',
    description:
      'Блуза из шёлковой смеси с мягким блеском. Свободный крой и деликатная драпировка создают ощущение лёгкости и изысканности.',
    images: [
      'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=800&q=80',
      'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&q=80',
      'https://images.unsplash.com/photo-1598554747436-c9293d6a934e?w=800&q=80',
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { id: 'ivory', name: 'Слоновая кость', hex: '#FAF8F3' },
      { id: 'blush', name: 'Пудровый', hex: '#D4B5A8' },
      { id: 'black', name: 'Чёрный', hex: '#1A1918' },
    ],
    tags: ['блуза', 'шёлк'],
    featured: false,
    isNew: true,
    isBestseller: false,
    popularity: 81,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getFeaturedProducts(limit = 8): Product[] {
  return products
    .filter((p) => p.featured)
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, limit);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, limit);
}

export function getNewProducts(limit = 8): Product[] {
  return products
    .filter((p) => p.isNew)
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, limit);
}

export const PRICE_RANGE = {
  min: Math.min(...products.map((p) => p.price)),
  max: Math.max(...products.map((p) => p.price)),
};

const SIZE_ORDER = [
  'XS', 'S', 'S/M', 'M', 'L', 'L/XL', 'XL', 'XXL', 'ONE SIZE',
  '28', '30', '32', '34', '36', '37', '38', '39', '40', '41', '42', '43', '44',
  '80', '85', '90', '95', '100',
];

export const ALL_SIZES = Array.from(
  new Set(products.flatMap((p) => p.sizes))
).sort((a, b) => {
  const ia = SIZE_ORDER.indexOf(a);
  const ib = SIZE_ORDER.indexOf(b);
  if (ia === -1 && ib === -1) return a.localeCompare(b);
  if (ia === -1) return 1;
  if (ib === -1) return -1;
  return ia - ib;
});

export const ALL_COLORS = Array.from(
  new Map(
    products.flatMap((p) => p.colors).map((c) => [c.id, c])
  ).values()
);
