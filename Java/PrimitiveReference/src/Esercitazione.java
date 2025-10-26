public class Esercitazione {

    public static void incrementa(int x) {
        x++;
        System.out.println("in incremento"+ x);
    }

    public static void main(String[] args) {
        int x = 3;

        System.out.println("prima dell' incremento"+ x);
        incrementa(x);
        System.out.println("dopo l' incremento"+ x);
        //lo stiamo passanodo per vaore quindi non cambia, se lo passavamo per riferimento cambiava
        //per voalore non modifichiamo il contenuto della cella di memoria ma modifichiamo una copia
        //per riferimento viene modificato realmente perche si basa nel cambiare sulla cella di memoria
    }


}
