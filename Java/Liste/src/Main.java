import java.util.*;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;
import java.util.logging.Logger;


public class Main {
    public static void main(String[] args) {
        List<Integer> numberList = new ArrayList<>();

        numberList.add(22);
        numberList.add(44);
        numberList.add(33);
        numberList.add(55);
        numberList.add(66);

        System.out.println("lista con println--------");
        System.out.println(numberList);

        Iterator<Integer> i = numberList.iterator();
        System.out.println("lista con Iterator--------");
        while (i.hasNext()) {
            Integer numero = i.next();
            System.out.println(numero);
        }

        numberList.remove(2);
        System.out.println("rimosso il terzo elemento della lista: " + numberList);


        numberList.remove(Integer.valueOf(66));
        System.out.println("rimozione del valore preciso" + numberList);
        System.out.println("\n---------------------");
        Set<Integer> numberSetList = new HashSet<>();

        numberSetList.add(10);
        numberSetList.add(20);
        numberSetList.add(30);
        numberSetList.add(20);
        numberSetList.add(10);
        numberSetList.add(40);

        Iterator<Integer> iterator = numberSetList.iterator();

        System.out.println("Iterazione dei numeri unici:");
        while (iterator.hasNext()) {
            Integer numero = iterator.next();
            System.out.println(numero);
        }

        System.out.println("\n\nlista stringhe--------------");

        Set<String> stringList = new HashSet<>();
        stringList.add("stringa1");
        stringList.add("stringa2");
        stringList.add("stringa3");
        stringList.add("stringa4");
        stringList.add("stringa5");

        Iterator<String> iString = stringList.iterator();
        while (iString.hasNext()) {
            String stringa = iString.next();
            System.out.println(stringa);
        }
        System.out.println("\n rimozione elemento dalla lista\n");
        stringList.remove(String.valueOf("stringa3"));
        System.out.println(stringList);
        System.out.println("\n----------------------");


        Set<String> nameList = new HashSet<>();
        nameList.add("Gaetano");
        nameList.add("Davide");
        nameList.add("Gennaro");
        nameList.add("Vincenzo");
        nameList.add("Francesco");
        nameList.add("Pasquale");
        System.out.println("rimozione elemento");


        nameList.remove("Pasquale");

        System.out.println(nameList);
    }
}
