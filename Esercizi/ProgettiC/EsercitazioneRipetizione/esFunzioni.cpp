#include <iostream>
using namespace std;
// esercizio 1
int returnMax(int a, int b);
int getMax(int a, int b);

// esercizio 2
void incrementaValore(int x);
void incrementaRiferimento(int &x);

int main()
{
    // esercizio 1
    int x = 2, y = 3;
    int z = 3, w = 2;
    int d = 4, t = 4;

    int xy = returnMax(x, y);
    int zw = getMax(z, w);
    int dt = returnMax(d, t);

    cout << "il valore piu' alto tra x e y: " << xy << endl;
    cout << "il valore piu' alto tra z e w: " << zw << endl;
    cout << "il valore piu' alto tra d e t: " << dt << endl;

    cout << "----------------esercizio 2---------------------\n\n";

    int var = 0;
    int varRif = 0;
    cout << "prima dell'incremento\n"<< var << endl;
    incrementaValore(var);
    cout << "dopo l'incremento\n"<< var << endl;
    
    cout<<"\nPASSAGGIO PER RIFERIMENTO\n";
    
    cout << "prima dell'incremento per riferimento\n"<< var << endl;
    incrementaRiferimento(varRif);
    cout << "dopo l'incremento\n"<< varRif << endl;

    /*
    Nel prima caso il valore di var viene copiato in un altra variabile locale della funzione(x)
    incrementiamo nello scope della funzione ma la variabile non viene mai toccata

    Nel secondo caso la nostra x è un riferimento a varRif(la nostra variabile allocata nel main)
    significa che x è solo un altro nome di varRif
    x è proprio la variabile originale con un altro nome (alias).
    x è un riferimento alla stessa variabile che passo, cioè un alias diretto, non una copia.
    */
    return 0;
}

// esercizio 1
int returnMax(int a, int b)
{
    int valMax;
    if (a > b)
    {
        valMax = a;
    }
    else if (b > a)
    {
        valMax = b;
    }
    else
    {
        cout << "i valori sono uguali:" << a << " " << b << endl;
        valMax = a;
    }
    return valMax;
}



int getMax(int a, int b)
{
    if (a > b)
    {
        return a;
    }
    else if (b > a)
    {
        return b;
    }
    else
    {
        cout << "i valori sono uguali:" << a << " " << b << endl;
        return a;
    }
}

// esercizio 2
void incrementaValore(int x) {
    x++;
    cout << "Dentro incrementaValore: x = " << x << endl;
}

void incrementaRiferimento(int &x) {
    x++;
    cout << "Dentro incrementaRiferimento: x = " << x << endl;
}