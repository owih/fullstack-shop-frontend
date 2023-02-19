type Product = {
  id: number,
  name: string,
  type: string,
  price: number,
  sale?: number,
  description?: string,
  stock: number,
  image?: string[],
}

export default Product;
