public class Contenuto {

    public static void main(String[] args) {

        Contenitore<String> contenitoreStringhe = new Contenitore<>();

        contenitoreStringhe.setContenuto("Ciao");

        System.out.println(contenitoreStringhe.getContenuto());

        Contenitore<Integer>contenitoreInteri = new Contenitore<>();
        contenitoreInteri.setContenuto(12);
        System.out.println(contenitoreInteri.getContenuto());

    }

}