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
    const indx = get().cart.findIndex((el) => product.Id === el.Id);
    if (indx !== -1) {
      const temp = get().cart;
      temp[indx].count += 1;
      set((state) => ({
        cart: temp,
      }));
    } else
      set((state) => ({
        cart: [...state.cart, { ...product, count: 1 }],
      }));
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
