import {Item} from './item'

import { ItemCollection } from './itemCollection'

let icollection:ItemCollection = new ItemCollection();

icollection.addTodo("pay bill")
icollection.taskDone(1);
icollection.printAll();