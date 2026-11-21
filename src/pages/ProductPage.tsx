import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Heart, Minus, Plus, Truck, RotateCcw } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { ProductGallery } from '../components/products/ProductGallery';
import { ProductCard } from '../components/products/ProductCard';
import { Button } from '../components/common/Button';
import {
  getProductBySlug,
  getRelatedProducts,
} from '../data/products';
import { formatPrice } from '../utils/formatPrice';
import { CATEGORY_LABELS } from '../types';
import { useCartStore } from '../store/cartStore';
import { useFavoritesStore } from '../store/favoritesStore';
import { useUiStore } from '../store/uiStore';

export function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColorId, setSelectedColorId] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [sizeError, setSizeError] = useState(false);

  useEffect(() => {
    if (!product) return;
    setSelectedSize('');
    setSelectedColorId(product.colors[0]?.id ?? '');
    setQuantity(1);
    setSizeError(false);
    window.scrollTo(0, 0);
  }, [product]);

  const addItem = useCartStore((s) => s.addItem);
  const isFavorite = useFavoritesStore((s) =>
    product ? s.isFavorite(product.id) : false
  );
  const toggleFavorite = useFavoritesStore((s) => s.toggle);
  const notify = useUiStore((s) => s.notify);
  const setCartOpen = useUiStore((s) => s.setCartOpen);

  if (!product) {
    return (
      <div className="pt-32 pb-20 px-5 text-center">
        <SEO title="Товар не найден — MONVÉ" />
        <h1 className="font-display text-3xl">Товар не найден</h1>
        <p className="mt-3 font-body text-taupe">
          Возможно, страница была удалена или адрес указан неверно.
        </p>
        <Link
          to="/catalog"
          className="inline-block mt-8 px-6 py-3 bg-graphite text-ivory font-body text-xs tracking-[0.16em] uppercase"
        >
          Перейти в каталог
        </Link>
      </div>
    );
  }

  const selectedColor =
    product.colors.find((c) => c.id === selectedColorId) ?? product.colors[0];
  const needsSize = product.category !== 'accessories' || product.sizes[0] !== 'ONE SIZE';
  const related = getRelatedProducts(product);

  const handleAddToCart = () => {
    if (needsSize && !selectedSize && product.sizes[0] !== 'ONE SIZE') {
      setSizeError(true);
      return;
    }

    const size =
      product.sizes[0] === 'ONE SIZE'
        ? 'ONE SIZE'
        : selectedSize || product.sizes[0];

    addItem({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size,
      color: selectedColor,
      quantity,
    });

    notify('Товар добавлен в корзину');
    setCartOpen(true);
  };

  return (
    <>
      <SEO
        title={`${product.name} — MONVÉ`}
        description={product.description.slice(0, 155)}
      />
      <div className="pt-24 md:pt-28 pb-20 px-5 md:px-8 max-w-[1440px] mx-auto">
        <Breadcrumb
          items={[
            { label: 'Главная', to: '/' },
            { label: 'Каталог', to: '/catalog' },
            {
              label: CATEGORY_LABELS[product.category],
              to: `/catalog?category=${product.category}`,
            },
            { label: product.name },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <ProductGallery images={product.images} name={product.name} />

          <div className="lg:pt-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                {(product.isNew || product.isBestseller) && (
                  <p className="font-body text-[10px] tracking-[0.2em] uppercase text-taupe mb-2">
                    {product.isNew ? 'Новинка' : 'Бестселлер'}
                  </p>
                )}
                <h1 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] tracking-wide text-graphite leading-tight">
                  {product.name}
                </h1>
                <p className="mt-3 font-body text-lg text-graphite">
                  {formatPrice(product.price)}
                </p>
              </div>
              <button
                type="button"
                onClick={() => toggleFavorite(product.id)}
                className="p-3 border border-graphite/15 hover:border-graphite transition-colors"
                aria-label={
                  isFavorite
                    ? 'Убрать из избранного'
                    : 'Добавить в избранное'
                }
              >
                <Heart
                  size={20}
                  className={
                    isFavorite ? 'fill-graphite text-graphite' : ''
                  }
                />
              </button>
            </div>

            <p className="mt-8 font-body text-sm text-taupe leading-relaxed">
              {product.description}
            </p>

            {/* Colors */}
            <div className="mt-8">
              <p className="font-body text-xs tracking-[0.14em] uppercase text-graphite mb-3">
                Цвет: {selectedColor.name}
              </p>
              <div className="flex gap-2.5">
                {product.colors.map((color) => (
                  <button
                    key={color.id}
                    type="button"
                    onClick={() => setSelectedColorId(color.id)}
                    className={`w-9 h-9 border-2 transition-transform ${
                      selectedColorId === color.id
                        ? 'border-graphite scale-110'
                        : 'border-transparent'
                    }`}
                    style={{
                      backgroundColor: color.hex,
                      boxShadow:
                        color.hex === '#FFFFFF' || color.hex === '#FAF8F3'
                          ? 'inset 0 0 0 1px #ccc'
                          : undefined,
                    }}
                    aria-label={color.name}
                    aria-pressed={selectedColorId === color.id}
                  />
                ))}
              </div>
            </div>

            {/* Sizes */}
            {product.sizes[0] !== 'ONE SIZE' && (
              <div className="mt-8">
                <p className="font-body text-xs tracking-[0.14em] uppercase text-graphite mb-3">
                  Размер
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => {
                        setSelectedSize(size);
                        setSizeError(false);
                      }}
                      className={`min-w-[48px] px-3 py-2.5 font-body text-sm border transition-colors ${
                        selectedSize === size
                          ? 'bg-graphite text-ivory border-graphite'
                          : 'border-graphite/25 hover:border-graphite'
                      }`}
                      aria-pressed={selectedSize === size}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {sizeError && (
                  <p className="mt-2 font-body text-xs text-red-700" role="alert">
                    Выбери размер, чтобы добавить товар в корзину
                  </p>
                )}
              </div>
            )}

            {/* Quantity */}
            <div className="mt-8">
              <p className="font-body text-xs tracking-[0.14em] uppercase text-graphite mb-3">
                Количество
              </p>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-2 border border-graphite/20 hover:border-graphite"
                  aria-label="Уменьшить количество"
                >
                  <Minus size={16} />
                </button>
                <span className="font-body text-sm w-8 text-center">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-2 border border-graphite/20 hover:border-graphite"
                  aria-label="Увеличить количество"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <Button
              fullWidth
              size="lg"
              className="mt-10"
              onClick={handleAddToCart}
            >
              Добавить в корзину
            </Button>

            <div className="mt-10 space-y-4 border-t border-graphite/10 pt-8">
              <div className="flex gap-3">
                <Truck size={18} className="text-taupe shrink-0 mt-0.5" />
                <div>
                  <p className="font-body text-sm text-graphite">Доставка</p>
                  <p className="font-body text-xs text-taupe mt-1 leading-relaxed">
                    Бесплатная доставка от 10 000 ₽. Срок — 2–5 рабочих дней по
                    России.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <RotateCcw size={18} className="text-taupe shrink-0 mt-0.5" />
                <div>
                  <p className="font-body text-sm text-graphite">Возврат</p>
                  <p className="font-body text-xs text-taupe mt-1 leading-relaxed">
                    14 дней на возврат и обмен. Вещь должна сохранить товарный
                    вид и бирки.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-24 md:mt-32">
            <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] tracking-wide mb-10">
              Вам может понравиться
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
