export class GenericMagazino<T>{
    private items: T[] = [];

    aggiungi(item: T): void{
        this.items.push(item);
    }

    getTutti(): T[] {
        return this.items;
    }
}

