import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartItem, ProductColor } from '../types';

type CartState = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  removeItem: (productId: string, size: string, colorId: string) => void;
  updateQuantity: (
    productId: string,
    size: string,
    colorId: string,
    quantity: number
  ) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getSubtotal: () => number;
};

function itemKey(productId: string, size: string, colorId: string) {
  return `${productId}-${size}-${colorId}`;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) => {
        const qty = item.quantity ?? 1;
        set((state) => {
          const existing = state.items.find(
            (i) =>
              i.productId === item.productId &&
              i.size === item.size &&
              i.color.id === item.color.id
          );

          if (existing) {
            return {
              items: state.items.map((i) =>
                itemKey(i.productId, i.size, i.color.id) ===
                itemKey(item.productId, item.size, item.color.id)
                  ? { ...i, quantity: i.quantity + qty }
                  : i
              ),
            };
          }

          return {
            items: [...state.items, { ...item, quantity: qty }],
          };
        });
      },

      removeItem: (productId, size, colorId) => {
        set((state) => ({
          items: state.items.filter(
            (i) =>
              !(
                i.productId === productId &&
                i.size === size &&
                i.color.id === colorId
              )
          ),
        }));
      },

      updateQuantity: (productId, size, colorId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId, size, colorId);
          return;
        }
        set((state) => ({
          items: state.items.map((i) =>
            i.productId === productId &&
            i.size === size &&
            i.color.id === colorId
              ? { ...i, quantity }
              : i
          ),
        }));
      },

      clearCart: () => set({ items: [] }),

      getTotalItems: () =>
        get().items.reduce((sum, i) => sum + i.quantity, 0),

      getSubtotal: () =>
        get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    }),
    {
      name: 'monve-cart',
    }
  )
);

export type { ProductColor };
