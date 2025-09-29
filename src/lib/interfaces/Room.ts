export interface Room {
  id: number;
  title: string;
  image: string;
  rating: number;
  reviews: number | null;
  bedType: string;
  price: number;
  originalPrice: number | null;
  discount: number | null;
}
