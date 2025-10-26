import { MezzoDiTrasporto } from "./MezzoDiTrasporto";

export class GenericGarage<T extends MezzoDiTrasporto> {
    private contenuto: T;
    private autoParcheggiate: T[] = [];
    public max: 5;

    aggiungi(elemento: T): void {
        if (this.autoParcheggiate.length >= this.max) {
            this.autoParcheggiate.pop();
        }
        this.autoParcheggiate.push(elemento);
    }

    trovaPerNome(nome: string): T | undefined {
        return this.autoParcheggiate.find(auto => auto.nome == nome);
    }

    getElementi(): T[] {
        return this.autoParcheggiate;
    }

    getElemento(index: number): T | undefined {
        return this.autoParcheggiate[index];
    }

    setContenuto(contenuto: T): void {
        this.contenuto = contenuto;
    }

    getContenuto(): T {
        return this.contenuto;
    }

    info(): string {
        return `Tipo: ${this.contenuto.info()}`;
    }


}
