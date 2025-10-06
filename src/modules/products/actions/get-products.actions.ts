import { tesloApi } from "@/api/telosApi";
import type { Product } from "./interface/product.interface";
import { getProductImageActions } from "./get-products-image.actions";

export const getProducts = async ( page: number = 1, limit : number = 10) => {

    try {
        const { data } = await tesloApi.get<Product[]>(`/products?limit=${limit}&offset=${page * 10}`);
        return data.map(product => ({
            ...product,
            images: product.images.map(getProductImageActions)
        }));
    } catch (error) {
        console.log(error);
        throw new Error ('error getting products')
    }
    return 
}