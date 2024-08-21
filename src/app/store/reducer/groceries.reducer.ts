import { createReducer } from "@ngrx/store";
import { Grocery } from "../../../models/grocery.model";


const initialstate: Grocery[] = [
    {"id": 1, "name": "MILK", "type": "fruit"},
    {"id": 2, "name": "Banana", "type": "fruit"},
    {"id": 3, "name": "Lays Chips", "type": "Snacks"},
    {"id": 4, "name": "doritos", "type": "Snacks"}
]


export const groceryReducer =  createReducer(initialstate)


