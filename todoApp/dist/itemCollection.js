"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCollection = void 0;
const item_1 = require("./item");
class ItemCollection {
    constructor(items = []) {
        this.items = items;
        this.nextId = 1;
    }
    addTodo(task) {
        let item = new item_1.Item(this.nextId, task);
        this.nextId++;
        this.items.push(item);
    }
    taskDone(taskId) {
        let item = this.items.find((item) => item.taskId == taskId);
        item.done = true;
    }
    printAll() {
        this.items.forEach((item) => {
            item.printTask();
        });
    }
}
exports.ItemCollection = ItemCollection;
