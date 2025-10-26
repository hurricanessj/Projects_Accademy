import { Archivable } from "./InterfaceArchivable";

export class Invoice implements Archivable {
    constructor(
        private id: number,
        private title: string,
        public amount: number
    ) {}

    getId(): number {
        return this.id;
    }

    getTitle(): string {
        return this.title;
    }
}