export interface CreateProductDTO {
  price: number;
  status: string;
  discounted: string;
  discount: number;
  name: string;
  description: string;
  image: string;
}

export type UpdateProductDTO = Partial<CreateProductDTO>;
