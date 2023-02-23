import ProductResponse from '@/types/response/productResponse';

type ProductsResponse = {
  count: number,
  products: ProductResponse[],
}

export default ProductsResponse;
