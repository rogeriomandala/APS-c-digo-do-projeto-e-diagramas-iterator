// Iterator pattern implementation in TypeScript
export interface IteratorI<T> {
    hasNext(): boolean;
    next(): T;
}

export class Iterator<T> implements IteratorI<T> {
    private index: number = 0;
    private items: T[];

    constructor(items: T[]) {
        this.items = items;
    }
    
    hasNext(): boolean {
        return this.index < this.items.length;
    }

    next(): T {
        if(this.index >= this.items.length) {
            throw new Error('No more item')
        }

        const item = this.items[this.index];
        this.index++;

        return item;
    }
}