import ProductType from '@/types/productType';
import ProductImage from '@/types/productImage';

type CartProduct = {
  id: number,
  name: string,
  type: ProductType[],
  price: number,
  sale?: number,
  description?: string,
  stock: number,
  image?: ProductImage[],
  count: number,
}

export default CartProduct;
