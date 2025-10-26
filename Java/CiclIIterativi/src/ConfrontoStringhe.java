public class ConfrontoStringhe {
    public static void main(String[] args) {

        String stringa = "Mi chiamo Lorenzo";
        String altraStringa = "Mi chiamo Lorenzo";
        String primaParte = "Mi chiamo ";
        String secondaParte = "Lorenzo";


        if(altraStringa == stringa){
            System.out.println("le stringhe sono uguali");
        }else {
            System.out.println("le stringhe non sono uguali");
        }

        if(stringa == (primaParte+secondaParte)){
            System.out.println("Le stringhe sono ancora uguali");
        }else{
            System.out.println("le stringhe non sono uguali"); }

        if(stringa.equals(primaParte+secondaParte)){
            System.out.println("sono uguali");
        }else{
            System.out.println("non sono uguali");
        }


        if(stringa == stringa.toUpperCase()){
            System.out.println("uguale");
        }else{
            System.out.println("non lo è");
        }

        if(stringa.equals(stringa.toUpperCase())){
            System.out.println("uguale");
        }else{
            System.out.println("non lo è");
        }

        if(stringa.equalsIgnoreCase(stringa.toUpperCase())){
            System.out.println("uguale");
        }else{
            System.out.println("non lo è");
        }

    }
    }


