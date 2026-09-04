// Product images — import the ones we have, null for placeholders
import teddyCandle from '../assets/images/teddy-candle.jpg';
import flowerCandle from '../assets/images/flower-candle.jpg';
import giftHamper from '../assets/images/gift-hamper.jpg';
import candleBouquet from '../assets/images/candle-bouquet.jpg';
import giftCandle from '../assets/images/gift-candle.jpg';
import customGift from '../assets/images/custom-gift.jpg';

export const products = [
  // Teddy Candles
  {
    id: 1,
    name: 'Classic Teddy Bear Candle',
    price: 349,
    category: 'Teddy Candles',
    occasion: ['Birthday Gifts', 'Personalized Gifts'],
    description: 'An adorable handcrafted teddy bear candle in soft cream, perfect for gifting on birthdays and special occasions. Made with premium soy wax.',
    image: teddyCandle,
    badge: 'Bestseller',
  },
  {
    id: 2,
    name: 'Mini Teddy Candle Set',
    price: 499,
    category: 'Teddy Candles',
    occasion: ['Birthday Gifts'],
    description: 'A set of 3 mini teddy bear candles in pastel shades. Perfect for party favours or small gifts.',
    image: null, // Add your image
    badge: null,
  },
  // Flower Candles
  {
    id: 3,
    name: 'Rose Petal Candle',
    price: 299,
    category: 'Flower Candles',
    occasion: ['Anniversary Gifts', 'Wedding Favours'],
    description: 'A delicate rose-shaped candle in soft blush pink. Handcrafted with love, perfect for romantic occasions.',
    image: flowerCandle,
    badge: 'Bestseller',
  },
  {
    id: 4,
    name: 'Sunflower Candle',
    price: 279,
    category: 'Flower Candles',
    occasion: ['Birthday Gifts'],
    description: 'A cheerful sunflower candle to brighten anyone\'s day. Made with natural soy wax and a cotton wick.',
    image: null, // Add your image
    badge: 'New',
  },
  {
    id: 5,
    name: 'Lavender Bloom Candle',
    price: 319,
    category: 'Flower Candles',
    occasion: ['Personalized Gifts'],
    description: 'A beautiful lavender flower candle with a subtle fragrance. A perfect addition to any home décor.',
    image: null, // Add your image
    badge: null,
  },
  // Gift Candles
  {
    id: 6,
    name: 'Premium Jar Candle',
    price: 599,
    category: 'Gift Candles',
    occasion: ['Birthday Gifts', 'Anniversary Gifts', 'Corporate Gifts'],
    description: 'An elegant glass jar candle with a gold lid and satin ribbon. Long-lasting soy wax with a warm vanilla scent.',
    image: giftCandle,
    badge: 'Bestseller',
  },
  {
    id: 7,
    name: 'Scented Pillar Candle',
    price: 449,
    category: 'Gift Candles',
    occasion: ['Festival Gifts'],
    description: 'A beautifully crafted pillar candle with a warm amber fragrance. Ideal for home décor and festive gifting.',
    image: null, // Add your image
    badge: null,
  },
  {
    id: 8,
    name: 'Heart Shaped Candle',
    price: 249,
    category: 'Gift Candles',
    occasion: ['Anniversary Gifts', 'Wedding Favours'],
    description: 'A romantic heart-shaped candle in blush pink. A sweet token of love for your special someone.',
    image: null, // Add your image
    badge: null,
  },
  // Candle Bouquets
  {
    id: 9,
    name: 'Classic Candle Bouquet',
    price: 1299,
    category: 'Candle Bouquets',
    occasion: ['Birthday Gifts', 'Anniversary Gifts'],
    description: 'A stunning bouquet of handmade flower candles wrapped in kraft paper with a satin ribbon. A unique and lasting gift.',
    image: candleBouquet,
    badge: 'Bestseller',
  },
  {
    id: 10,
    name: 'Mini Candle Bouquet',
    price: 799,
    category: 'Candle Bouquets',
    occasion: ['Birthday Gifts', 'Wedding Favours'],
    description: 'A petite bouquet of 5 flower candles in pastel shades. Perfect for intimate celebrations.',
    image: null, // Add your image
    badge: 'New',
  },
  // Gift Hampers
  {
    id: 11,
    name: 'Premium Gift Hamper',
    price: 2499,
    category: 'Gift Hampers',
    occasion: ['Birthday Gifts', 'Anniversary Gifts', 'Festival Gifts'],
    description: 'A luxurious gift hamper with handmade candles, dried flowers, and beautifully wrapped surprises. The ultimate gifting experience.',
    image: giftHamper,
    badge: 'Bestseller',
  },
  {
    id: 12,
    name: 'Celebration Hamper',
    price: 1799,
    category: 'Gift Hampers',
    occasion: ['Birthday Gifts', 'Festival Gifts'],
    description: 'A curated celebration hamper with candles, chocolates, and dried flower arrangements. Perfect for any festive occasion.',
    image: null, // Add your image
    badge: null,
  },
  // Festival Collection
  {
    id: 13,
    name: 'Diwali Special Set',
    price: 899,
    category: 'Festival Collection',
    occasion: ['Festival Gifts'],
    description: 'A festive collection of decorative diyas and candles with gold accents. Spread light and joy this Diwali.',
    image: null, // Add your image
    badge: 'Seasonal',
  },
  {
    id: 14,
    name: 'Rakhi Gift Box',
    price: 699,
    category: 'Festival Collection',
    occasion: ['Festival Gifts', 'Personalized Gifts'],
    description: 'A specially curated Rakhi gift box with a handmade candle, rakhi, and sweets packaging. Show your sibling you care.',
    image: null, // Add your image
    badge: 'Seasonal',
  },
  // Corporate Gifts
  {
    id: 15,
    name: 'Corporate Gift Set',
    price: 1499,
    category: 'Corporate Gifts',
    occasion: ['Corporate Gifts'],
    description: 'An elegant corporate gift set with premium jar candles and branded packaging. Ideal for employee appreciation and client gifts.',
    image: null, // Add your image
    badge: null,
  },
  {
    id: 16,
    name: 'Bulk Event Favours',
    price: 199,
    category: 'Corporate Gifts',
    occasion: ['Corporate Gifts', 'Wedding Favours'],
    description: 'Customizable mini candle favours for events, weddings, and corporate gatherings. Minimum order of 25 pieces.',
    image: null, // Add your image
    badge: null,
  },
  // Custom Gifts
  {
    id: 17,
    name: 'Custom Gift Box',
    price: 1999,
    category: 'Custom Gifts',
    occasion: ['Birthday Gifts', 'Anniversary Gifts', 'Personalized Gifts'],
    description: 'A fully personalized gift box curated just for your loved one. Choose the candle, packaging, and add a personal message.',
    image: customGift,
    badge: 'Popular',
  },
  {
    id: 18,
    name: 'Personalized Name Candle',
    price: 549,
    category: 'Custom Gifts',
    occasion: ['Birthday Gifts', 'Personalized Gifts'],
    description: 'A custom candle with the name or message of your choice engraved on it. A truly personal gift.',
    image: null, // Add your image
    badge: null,
  },
];

export const categories = [
  'All',
  'Teddy Candles',
  'Flower Candles',
  'Gift Candles',
  'Candle Bouquets',
  'Gift Hampers',
  'Festival Collection',
  'Corporate Gifts',
  'Custom Gifts',
];

export const occasions = [
  'Birthday Gifts',
  'Anniversary Gifts',
  'Wedding Favours',
  'Festival Gifts',
  'Corporate Gifts',
  'Personalized Gifts',
];

export const reviews = [
  {
    id: 1,
    name: 'Priya M.',
    text: 'Ordered a candle bouquet for my best friend\'s birthday and she absolutely loved it! The packaging was beautiful and the candles smelled amazing.',
    rating: 5,
    occasion: 'Birthday Gift',
  },
  {
    id: 2,
    name: 'Rahul S.',
    text: 'Got a custom gift hamper for our anniversary. The attention to detail was incredible. My wife was so happy. Highly recommend!',
    rating: 5,
    occasion: 'Anniversary Gift',
  },
  {
    id: 3,
    name: 'Sneha K.',
    text: 'Ordered 50 mini candle favours for my wedding. They were beautifully made and all my guests loved them. Thank you Wrapped In Love!',
    rating: 5,
    occasion: 'Wedding Favours',
  },
  {
    id: 4,
    name: 'Ankit D.',
    text: 'The Diwali gift set was perfect for gifting to family. Premium quality candles with elegant packaging. Will order again.',
    rating: 4,
    occasion: 'Festival Gift',
  },
  {
    id: 5,
    name: 'Meera J.',
    text: 'The teddy bear candle is the cutest thing ever! It was so well-made that I didn\'t even want to light it. Definitely ordering more.',
    rating: 5,
    occasion: 'Birthday Gift',
  },
];
