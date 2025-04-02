interface Review {
  text: string;
  author: string;
  avatar?: string;
}

export const reviews: Review[] = [
  {
    text: "El servicio de esta empresa es excepcional. ¡Muy recomendado!",
    author: "Juan Pérez",
    avatar: "/images/avatar.webp"
  },
  {
    text: "Muy satisfecho con la calidad de los productos.",
    author: "Ana Gómez",
    avatar: "/images/avatar.webp"
  },
  {
    text: "Excelente atención al cliente.",
    author: "Carlos López",
    avatar: "/images/avatar.webp"
  }
];
