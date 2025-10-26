#include <iostream>
using namespace std;

int somma(int *a, int *b);
void swap(int *x, int *y);

int main()
{

    // * si legge contenuto di ...operatore di dereferenziazione -> permette di accedere al valore memorizzato all’indirizzo puntato
    // & si legge indirizzo di...operatore di address-of -> estituisce l’indirizzo di memoria della variabile
    int x = 42;
    int *ptr = &x;

    cout << "valore della variabile (x) : " << x << endl;
    cout << "indirizzo di x (&x) : " << &x << endl;
    cout << "contenuto di ptr (*ptr) " << *ptr << endl;
    cout << "l'indirizzo del puntatore (ptr):" << ptr << endl;

    cout << "--------------------ESERCIZIO 2----------------------------" << endl;
    int numero = 10;
    int *ptr_numero = &numero;

    cout << "valore della variabile prima di cambiarlo " << numero << endl;
    cout << "valore della variabile puntata: " << *ptr_numero << endl;
    cout << "indirizzo puntatore: " << ptr_numero << endl;
    cout << "indirizzo della variabile:  " << &numero << endl;
    *ptr_numero = 99;
    cout << "valore cambiato tramite il puntatore: " << *ptr_numero << endl;
    cout << "valore della variabile: " << numero << endl;

    cout << "--------------------ESERCIZIO 3----------------------------" << endl;

    int num1 = 5;
    int num2 = 7;
    int *ptr_add1 = &num1;
    int *ptr_add2 = &num2;

    somma(ptr_add1, ptr_add2); //passiamo così a somma l'indirizzo dei due puntatori

    cout << "--------------------ESERCIZIO 4----------------------------" << endl;
    int a = 10;
    int b = 20;

    cout << "Prima dello swap: a= " << a << endl
         << "b= " <<b<< endl;

    swap(&a, &b); //anche in questo caso abbiamo passato l'indirizzo, ma stavolta tramite la variabile

    cout << "Dopo lo swap: a = " << a << ", b = " << b << endl;

    cout << "--------------------ESERCIZIO 5---------------------------" << endl;

    int arr_numeri[5] = {1, 2, 3, 4, 5};
    int *ptr_array = arr_numeri;

    for (int i = 0; i < 5; i++)
    {
        cout << *(ptr_array + i) << "" << endl;
    }

    cout << "--------------------ESERCIZIO 6----------------------------" << endl;

    int c = 100;
    int *ptr_c = &c;
    int **pp = &ptr_c;

    cout << "stampa di c: " << c << endl;
    cout << "stampa di puntatore: " << *ptr_c << endl;
    cout << "stampa del doppio puntatore: " << **pp << endl;

    cout << "--------------------ESERCIZIO 6----------------------------" << endl;

    int *ptr_din;

    ptr_din = new int;

    *ptr_din = 77;

    cout << "Valore allocato dinamicamente: " << *ptr_din << endl;

    delete ptr_din;
    ptr_din = nullptr;

    return 0;
}

int somma(int *a, int *b)//nei parametri prendiamo il valore dal contenuto dei parametripassati 
{
    int sum = *a + *b;
    cout << "accediamo al contenuto attraverso indirizzi  e la somma è: " << sum << endl;
    return sum;
}

void swap(int *x, int *y)// come il caso precedente andiamo a estrapolare il valore dall'indirizzo, accederndo e modificando i valori attraverso i puntatori
{

    int appoggio = *x;
    *x = *y;
    *y = appoggio;

    cout << "i valori sono cambiati: x=" << *x << endl
         << "y:" << *y << endl;
}
