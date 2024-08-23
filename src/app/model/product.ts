export interface Image {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  
}

export interface Product {
    image: Image;
    addedToCart: boolean;
    quantity: number;
    name: string;
    category: string;
    price: number;
  }