import { Component, Signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Grocery } from '../../../models/grocery.model';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { addToBucket, removeFromBucket } from '../../store/actions/bucket.action';
import { selectgroceries } from '../../store/selectors/groceries.selector';


@Component({
  selector: 'app-grocery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grocery.component.html',
  styleUrl: './grocery.component.css'
})
export class GroceryComponent {

  groceries$?:Observable<Grocery[]>;

  constructor(private store: Store<{groceries:Grocery[]}>){
    this.groceries$ = store.select(selectgroceries)

  }


  onTypeChange(event: Event){

  }


  increment(item:Grocery){
    const payload = {
      id:item.id,
      name:item.name,
      quantity:1
    }
    // this.store.dispatch({type: "Update",payload:payload})
    this.store.dispatch(addToBucket({payload:payload}))

  }
  decrement(item:Grocery){
    const payload = {
      id:item.id,
      name:item.name
    }

    this.store.dispatch(removeFromBucket({payload:payload}))



  }

}
