import ProductTypeResponse from '@/types/response/productTypeResponse';
import ProductImage from '@/types/response/productImageResponse';

interface ProductResponse {
  id: number,
  name: string,
  type: ProductTypeResponse[],
  price: number,
  sale?: number,
  description?: string,
  stock: number,
  image?: ProductImage[],
}

export default ProductResponse;
