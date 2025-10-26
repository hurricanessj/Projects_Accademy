import { Archivable } from "./InterfaceArchivable";

export class Report implements Archivable {
    constructor(
        private id: number,
        private title: string,
        public content: string
    ) {}

    getId(): number {
        return this.id;
    }

    getTitle(): string {
        return this.title;
    }
}
