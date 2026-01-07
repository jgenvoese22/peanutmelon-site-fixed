export type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
  note?: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "red-91",
    name: 'Red Rope Snapback "91"',
    price: "$35",
    image: "/products/red-91.png",
    note: 'Front: "91" • Side: "the sergei" • Back: "PEANUT MELON HAT CO."',
  },
  {
    id: "mallard",
    name: "Cream / Forest Green Mallard",
    price: "$34",
    image: "/products/mallard.png",
    note: "Front: flying mallard • Back: PEANUT MELON",
  },
  {
    id: "moose",
    name: "Cream / Brown Moose",
    price: "$34",
    image: "/products/moose.png",
    note: "Front: moose • Back: PEANUT MELON",
  },
  {
    id: "gray-cursive",
    name: "Gray Rope (Cursive)",
    price: "$32",
    image: "/products/gray-cursive.png",
    note: 'Front: "Peanut Melon" in cursive',
  },
];
