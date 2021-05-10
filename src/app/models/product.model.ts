export class Product {
  productName : string
  imagePath : string
  price: number
  category : string
  stock : number
  description: string

  constructor( 
    productName : string,
    imagePath : string,
    price: number,
    category : string,
    stock : number,
    description: string){
      this.productName = productName;
      this.imagePath = imagePath;
      this.price = price;
      this.category = category;
      this.stock = stock;
      this.description = description
  }
}