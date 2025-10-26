using System;
using models.auto;

public struct PuntoStruct { public int X; }
public class PuntoClass { public int X; }

public class Program
{
    public static void Main()
    {
        var s1 = new PuntoStruct { X = 10 };
        var s2 = s1;//s2=10
        s2.X = 20; 
        /* in questo caso grazie a struct abbiamo fatto la copia dell'istanza s1 creando s2 e cambiato il valore in 20*/

        var c1 = new PuntoClass { X = 10 };
        var c2 = c1;
        c2.X = 20;

        Console.WriteLine(s1.X); // Output: 10
        Console.WriteLine(c1.X); // Output: 20
    }
}
