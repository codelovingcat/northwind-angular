import { Category } from "./category";
import { ResponseModel } from "./responseModel";

export interface CategoryListResponseModel extends ResponseModel{
    data:Category[]
}