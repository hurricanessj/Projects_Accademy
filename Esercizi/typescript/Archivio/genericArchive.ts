import { Archivable } from "./InterfaceArchivable";
export class Archive<T extends Archivable> {
    private documents: T[] = [];

    addDocument(doc: T): void {
        this.documents.push(doc);
    }

    getDocumentById(id: number): T | undefined {
        return this.documents.find(doc => doc.getId() == id);
    }

    listTitles(): string[] {
        return this.documents.map(doc => doc.getTitle());
    }
}
