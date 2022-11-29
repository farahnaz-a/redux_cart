import axios from 'axios'

export async function getProductsData(){
    let allProductsListFromApi = await axios.get('https://dummyjson.com/products')
    return allProductsListFromApi.data.products
}