public class MetodiStringhe {
    public static void main(String[] args) {
        String pensierino ="ieri siamo andati a mare il tempo era bello ma c'era troppo vento";
        int posizioneMare = pensierino.indexOf("mare");

        if(posizioneMare >= 0){
            System.out.println("la frase ha la parola mare in posizione"+ posizioneMare );
        }else{
            System.out.println("non contiene la parola mare");
        }

        if(pensierino.endsWith("vento")){
            System.out.println("la frase finisce con la parola vento");
        }else{
            System.out.println("non finisce conla parola vento");
        }

        System.out.println(pensierino.substring(5, 12));
        System.out.println(pensierino.toUpperCase());
        System.out.println(pensierino.replaceAll("ieri", "oggi"));

        System.out.println(pensierino.length());

    }
}
