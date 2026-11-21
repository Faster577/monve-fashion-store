import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type FavoritesState = {
  ids: string[];
  toggle: (productId: string) => void;
  add: (productId: string) => void;
  remove: (productId: string) => void;
  isFavorite: (productId: string) => boolean;
  getCount: () => number;
};

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      ids: [],

      toggle: (productId) => {
        const { ids } = get();
        if (ids.includes(productId)) {
          set({ ids: ids.filter((id) => id !== productId) });
        } else {
          set({ ids: [...ids, productId] });
        }
      },

      add: (productId) => {
        const { ids } = get();
        if (!ids.includes(productId)) {
          set({ ids: [...ids, productId] });
        }
      },

      remove: (productId) => {
        set({ ids: get().ids.filter((id) => id !== productId) });
      },

      isFavorite: (productId) => get().ids.includes(productId),

      getCount: () => get().ids.length,
    }),
    {
      name: 'monve-favorites',
    }
  )
);
