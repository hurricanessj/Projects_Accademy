#include <iostream>
using namespace std;

void dichirazioneArray();
void sommaeMedia();
void valMAXvalMin(int arrayDiInteri[6]);

int main()
{
    dichirazioneArray();
    sommaeMedia();

    int arrayEsercizione[]={12,23,43,55,44};

    valMAXvalMin(arrayEsercizione);
}

void dichirazioneArray()
{
    int arrayDiNumeri[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

    for (int i = 0; i < 10; i++)
    {
        cout << arrayDiNumeri[i] << endl;
    }
}

void sommaeMedia()
{

    int arrayDaSommare[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    int sommaFinale = 0;

    for (int i = 0; i < 10; i++)
    {
        sommaFinale += arrayDaSommare[i];
        cout << "somma: " << sommaFinale << endl;
    }

    cout << "la somma finale e': " << sommaFinale << endl;
    cout << "la media e':" << sommaFinale / 10;
}

void valMAXvalMin(int arrayDiInteri[6])
{
    int valMaX=arrayDiInteri[0];
    int valmin=arrayDiInteri[0];
    for(int i=1; i<6; i++){

        if(arrayDiInteri[i]>valMaX){
            valMaX=arrayDiInteri[i];
        }
        if(arrayDiInteri[i]<valmin){
            valmin=arrayDiInteri[i];
        }
    }

        cout<<"il valore massimo: "<<valMaX<<endl;
        cout<<"il valore minimo: "<<valmin<<endl;
    }
