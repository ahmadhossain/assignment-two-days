import { Iproduct } from "@/pages/products";
import { create } from "zustand";

interface ICart {
  cart: Iproduct[];
  addItem: (data: Iproduct) => void;
  deleteItem: (id: string) => void;
}

export const useCart = create<ICart>()((set) => ({
  cart: [],
  addItem: (data) => set((state) => ({ cart: [...state.cart, data] })),
  deleteItem: (id) =>
    set((state) => ({ cart: state.cart.filter((el) => id !== el.Id) })),
}));
