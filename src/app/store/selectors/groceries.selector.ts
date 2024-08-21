import { Store } from "@ngrx/store";
import { Grocery } from "../../../models/grocery.model";


export const  selectgroceries = (state:{groceries:Grocery[]}) => state.groceries