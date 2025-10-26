public class Main {
    public static void main(String[] args) {

        FiguraFactory.register("cerchio", Cerchio::new);
        FiguraFactory.register("quadrato", Quadrato::new);


        Figura f1 = FiguraFactory.create("cerchio");
        Figura f2 = FiguraFactory.create("quadrato");

        f1.disegna();
        f2.disegna();

    }
}