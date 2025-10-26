#include <iostream>
#include "headerfile.hpp"
#include "Persona.hpp"

using namespace std;
//dichiarazione di funzione
//int calcolaSecondiInAnni(int anno = 1);


int main()
{
    int secondiInAnno = calcolaSecondiInAnni();
    int secondiIn2anni = calcolaSecondiInAnni(2);
    int secondiIn3anni = calcolaSecondiInAnni(3);
    int secondiIn4anni = calcolaSecondiInAnni(4);

    cout << secondiInAnno<<endl;
    cout << secondiIn2anni<<endl;
    cout << secondiIn3anni<<endl;
    cout << secondiIn4anni<<endl;


    // struct
    Persona p1 = {"gaetano", "esposito"};
    Persona p;
    p.nome = "Mario";
    p.cognome = "Rossi";
    cout << "Nome: " << p.nome << ", Cognome: " << p.cognome << endl;

    return 0;
}

int calcolaSecondiInAnni(int anno)
{
    cout<<"anno: "<<anno<<endl;
    int secondiTotali = 60 * 60 * 24 * 365 * anno;
    return secondiTotali;
}