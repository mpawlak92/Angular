import { ProductService } from "../product.service"
import { FavouritesService } from "./favourites.service"

export function favouritesFactory(isFavorite:boolean){
    return()=>{
        if(isFavorite){
            return new FavouritesService()
        }
        return new ProductService()
    }
}