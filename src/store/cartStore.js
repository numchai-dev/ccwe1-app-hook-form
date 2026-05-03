import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  cart: [],
  // เพิ่มสินค้าลงตะกร้า
  addToCart: (product) => {
    // ... ทำเพิ่มตรงนี้
    set((state) => ({ cart: [...state.cart, product]}))
  },
  // ลบสินค้าออกจากตะกร้า
  removeFromCart: (productId) => {
    // ... ทำเพิ่มตรงนี้
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId)
    }))
  },
  // นับจำนวนสินค้าในตะกร้า
  getCartCount: () => get().cart.length,
}));
