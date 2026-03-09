export type Product = {
  id: number;
  name: string;
  description?: string;
  price?: number;
  categoryId?: number;
  imageUrl?: string;
  isSignature?: boolean;
};

export type Category = {
  id: number;
  name: string;
  description?: string;
};