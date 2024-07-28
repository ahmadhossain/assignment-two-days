export interface Iproduct {
  Id: string;
  Name: string;
  SeName: string;
  ColorVariants: string | null;
  ShortDescription: string | null;
  ProductPrice: { OldPrice: number; Price: number };
  FeaturedImageUrl: string;
  AvailableQuantity: number;
  count: number;
}
