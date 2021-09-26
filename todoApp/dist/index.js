"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const itemCollection_1 = require("./itemCollection");
let icollection = new itemCollection_1.ItemCollection();
icollection.addTodo("pay bill");
icollection.taskDone(1);
icollection.printAll();
