import { CategoriaProdotto } from "./EnumCategoriaProdotto";

export interface Prodotto {
    id: number;
    nome: string;
    categoria: CategoriaProdotto;
}
