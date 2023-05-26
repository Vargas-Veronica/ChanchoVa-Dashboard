const BASE_PRODUCTS_URL_API = "http://localhost/3000/api/products"
export const getProducts = async () => {
    const response = await fetch (BASE_PRODUCTS_URL_API)
    const data = await response.json()
        return data
}