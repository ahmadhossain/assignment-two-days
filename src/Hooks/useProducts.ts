import { Iproduct } from "@/pages/products";
import { create } from "zustand";

interface ICart {
  products: Iproduct[];
  addAllProduct: (products: Iproduct[]) => void;
  incProductQuantity: (id: string, count: number) => void;
  decProductQuantity: (id: string) => void;
}

export const useProducts = create<ICart>()((set, get) => ({
  products: [],
  addAllProduct: (products: Iproduct[]) =>
    set((state) => ({ products: products })),

  incProductQuantity: (id: string, count: number) => {
    const temp = get().products;
    const indx = temp.findIndex((el) => el.Id === id);
    temp[indx].AvailableQuantity += count;
    set((state) => ({ products: temp }));
  },

  decProductQuantity: (id: string) => {
    const temp = get().products;
    const indx = temp.findIndex((el) => el.Id === id);
    temp[indx].AvailableQuantity--;
    set((state) => ({ products: temp }));
  },
}));
