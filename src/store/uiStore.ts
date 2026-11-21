import { create } from 'zustand';

type Notification = {
  id: string;
  message: string;
  type: 'success' | 'info' | 'error';
};

type UiState = {
  searchOpen: boolean;
  cartOpen: boolean;
  mobileMenuOpen: boolean;
  introDone: boolean;
  notifications: Notification[];
  setSearchOpen: (open: boolean) => void;
  setCartOpen: (open: boolean) => void;
  setMobileMenuOpen: (open: boolean) => void;
  setIntroDone: (done: boolean) => void;
  notify: (message: string, type?: Notification['type']) => void;
  dismissNotification: (id: string) => void;
};

export const useUiStore = create<UiState>((set) => ({
  searchOpen: false,
  cartOpen: false,
  mobileMenuOpen: false,
  introDone: sessionStorage.getItem('monve-intro') === '1',
  notifications: [],

  setSearchOpen: (open) => set({ searchOpen: open }),
  setCartOpen: (open) => set({ cartOpen: open }),
  setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
  setIntroDone: (done) => {
    if (done) sessionStorage.setItem('monve-intro', '1');
    set({ introDone: done });
  },

  notify: (message, type = 'success') => {
    const id = `${Date.now()}-${Math.random()}`;
    set((state) => ({
      notifications: [...state.notifications, { id, message, type }],
    }));
    setTimeout(() => {
      set((state) => ({
        notifications: state.notifications.filter((n) => n.id !== id),
      }));
    }, 3500);
  },

  dismissNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
    })),
}));
