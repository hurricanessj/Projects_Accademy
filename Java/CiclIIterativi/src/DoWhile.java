public class DoWhile {
    public static void main(String[] args) {
        int contatore = 29;
        int fine = 12;

//        do {
//            System.out.println("contatore:" + contatore);
//            contatore++;
//        } while (contatore <= fine);

        while(contatore<=fine){
            System.out.println("contatore:"+contatore);
            contatore++;
        }

        if(contatore == 2 && fine == 10){
            System.out.println(contatore);
        }
    }
}
