import { Iproduct } from "@/pages/products";
import { create } from "zustand";

interface ICart {
  cart: Iproduct[];
  addItem: (product: Iproduct) => void;
  deleteItem: (id: string) => void;
  addAll: (produts: Iproduct[]) => void;
}

export const useCart = create<ICart>()((set, get) => ({
  cart: [],
  addItem: (product) => {
    set((state) => ({ cart: [...state.cart, product] }));
    localStorage.setItem("cart", JSON.stringify(get().cart));
  },
  deleteItem: (id) => {
    set((state) => ({ cart: state.cart.filter((el) => id !== el.Id) })),
      localStorage.setItem("cart", JSON.stringify(get().cart));
  },
  addAll: (products: Iproduct[]) =>
    set((state) => ({
      cart: products,
    })),
}));
