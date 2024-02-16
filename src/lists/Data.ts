import { Iterator, IteratorI } from "../interatos/Interator";

export class Data<T> {
    private items: T[];

    constructor(items: T[]) {
        this.items = items;
    }

    getIterator(): IteratorI<T> {
        return new Iterator(this.items);
    }
}