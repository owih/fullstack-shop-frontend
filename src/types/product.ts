import ProductSizes from '@/types/productSizes';

type Product = {
  id: number,
  name: string,
  type: string,
  price: number,
  sale?: number,
  description?: string,
  stock: number,
  sizes: ProductSizes,
  images?: string[],
}

export default Product;
