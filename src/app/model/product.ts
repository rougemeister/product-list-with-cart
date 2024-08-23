export interface Product {
    image: {
      thumbnail: string;
      mobile: string;
      tablet: string;
      desktop: string;
    };
    addedToCart: boolean;
    quantity: number;
    name: string;
    category: string;
    price: number;
  }