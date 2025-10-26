using System;
using System.Runtime.Intrinsics.Arm;

namespace MyApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string nome = "gaetano";
            string cognome = "esposito";
            string stringa = string.Format("\n sto usando formato e sono {0} {1}", nome, cognome);
            string stringaToUpper = nome.ToUpper();


            Console.Write("buongiorno io sono: " + nome + " " + cognome);
            Console.Write("\n\nsono {0} {1}", nome, cognome);
            Console.Write("\n---------------\n\n");
            Console.Write($"<= utilizzo del dollaro permette di inizializzare nel console write le variabili,\n => {nome} {cognome}");
            Console.WriteLine("\n" + nome.Length);

            Console.WriteLine("\n----imput utente----\n");
            Console.WriteLine("inserisci una stringa:\n");
            string stringaInput = Console.ReadLine();
            System.Console.WriteLine("stringa sclta: " + stringaInput);

            System.Console.WriteLine("inserisci il primo numero:\n");
            string n1 = Console.ReadLine();
            System.Console.WriteLine("inserisci il secondo numero:\n");
            string n2 = Console.ReadLine();

            int num1 = int.Parse(n1);
            int num2 = int.Parse(n2);

            int somma = num1 + num2;

            System.Console.WriteLine("somma: "+somma);

        }
    }
}