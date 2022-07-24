class ProductsApiService {
  async getProducts(shopName) {
    const response = await fetch(
      `http://localhost:7000/api/products/${JSON.parse(shopName)}`
    );
    return await response.json();
  }

  async getShopsNames() {
    const response = await fetch('http://localhost:7000/api/shops');
    return await response.json();
  }

  async sendOrder(order) {
    await fetch('http://localhost:7000/api/orders', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
    });
  }
}

export const productsApiService = new ProductsApiService();
