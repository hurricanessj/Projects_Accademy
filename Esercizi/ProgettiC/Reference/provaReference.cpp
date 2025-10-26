#include <iostream>
using namespace std;

void funzione(int &x)
{
    x = 10;
}

int &comparazione(int &x, int &y)
{
    return (x > y) ? x : y;
}

int main()
{
    // le referenze non possono essere prima dichiarate e poi assegnate, vanno subito inizializzate e non a null
    // non possono essere modificate successivamente

    /*
    int prova = 5;
    int &referenzaProva = prova;


    cout << prova << endl;
    cout << referenzaProva << endl;

    prova = 10;
    cout << prova << endl;
    cout << referenzaProva << endl;

    prova = 50;
    cout << prova << endl;
    cout << referenzaProva << endl;

    */

    /*
        int prova = 5;
    cout<<prova<<endl;

    funzione(prova);

    cout<<prova<<endl;

    */

    int x = 5;
    int y = 50;
    // int maggiore = (x > y) ? x : y;
    int &maggiore = comparazione(x, y);
    
    cout << maggiore << endl;

    maggiore = 100;

    cout << maggiore << endl;

    return 0;
}