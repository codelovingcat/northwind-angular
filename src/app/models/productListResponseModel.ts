import { Product } from "./product";
import { ResponseModel } from "./responseModel";

export interface ProductListResponseModel extends ResponseModel {
    data:Product[]
 }
