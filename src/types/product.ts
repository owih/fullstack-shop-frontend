import ProductImage from '@/types/productImage';
import ProductType from '@/types/productType';

type Product = {
  id: number,
  name: string,
  type: ProductType[],
  price: number,
  sale?: number,
  description?: string,
  stock: number,
  image?: ProductImage[],
}

export default Product;
