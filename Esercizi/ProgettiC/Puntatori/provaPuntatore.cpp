#include <iostream>

using namespace std;

void funzione(int *ptr_parametro){
    *ptr_parametro = 50;

}

int main()
{

    // * => si usa per creare una variabile puntatore
    // & => restituisce l'indirizzo della variabile che lo succede (&variabile)

    int prova = 5;
    int *ptr_prova = nullptr;
    ptr_prova = &prova; //il puntore cosi punta all'indirizzo di prova

    //cout << prova << endl;      // valore della variabile
    //cout << &prova << endl;     // indirizzo della variabile prova
    //cout << ptr_prova << endl;  // variabile a cui è stata assegnato il valore dell indirizzo della memoria di prova
    //cout << *ptr_prova << endl; // valore a cui l'indirizzo fa riferimento

    //cambiamo il valore dell indirizzo di prova
    *ptr_prova=200;
    //cout<<prova<<endl;
   funzione(&prova);

   cout<<prova<<endl;

   // delete ptr_prova;
   // cout<<ptr_prova<<endl;
    
    return 0;
}