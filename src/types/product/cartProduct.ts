import ProductType from '@/types/product/productType';
import ProductImage from '@/types/product/productImage';

type CartProduct = {
  id: number,
  name: string,
  type: ProductType[],
  price: number,
  sale?: number,
  description?: string,
  stock: number,
  image: ProductImage[],
  count: number,
}

export default CartProduct;
