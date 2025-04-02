interface Review {
  text: string;
  author: string;
  avatar?: string;
  rating: number; 
}

export const reviews: Review[] = [
  {
    text: "El servicio de esta empresa es excepcional. ¡Muy recomendado!",
    author: "Juan Pérez",
    avatar: "/images/avatar.webp",
    rating: 5
  },
  {
    text: "Muy satisfecho con la calidad de los productos.",
    author: "Ana Gómez",
    avatar: "/images/avatar.webp",
    rating: 5
  },
  {
    text: "Excelente atención al cliente.",
    author: "Carlos López",
    avatar: "/images/avatar.webp",
    rating: 4
  }
];
