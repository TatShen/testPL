
export type Product = {
  id: string
  name: string
  description: string
  image:string
  promotion: boolean
  active: boolean
  rating: string
}

class ProductsApi {
  private baseUrl: string = "https://642ec14a8ca0fe3352d7fe14.mockapi.io/api/v1/products";
  
  private async _request(url: string, options?: RequestInit) {
    const response = await fetch(url, options);
    return response.json();
  }

  getProducts(page: number, perPage: number): Promise<Product[]> {
    const url = new URL(this.baseUrl);
    url.searchParams.append('page', page.toString());
    url.searchParams.append('limit', perPage.toString());
    
    return this._request(url.toString(), { 
      method: 'GET',
      next: { revalidate: 3600 }
    });
  }
}

const productsApi = new ProductsApi();
export default productsApi;
