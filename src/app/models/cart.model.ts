export interface Cart {
  _id:string 
  product_id: {
    description: string;
    imagePath: string;
    price: number;
    productName: string;
    stock: number;
    __v: number;
    _id: string;
  }
  total_price:number,
  quantity: number
}


