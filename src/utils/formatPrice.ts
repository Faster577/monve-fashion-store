export function formatPrice(price: number): string {
  return new Intl.NumberFormat('ru-RU', {
    style: 'decimal',
    maximumFractionDigits: 0,
  }).format(price) + ' ₽';
}
