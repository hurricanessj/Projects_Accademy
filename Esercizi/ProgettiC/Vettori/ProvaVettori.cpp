#include <iostream>
#include <vector>
using namespace std;

void prova(vector<int> vettore)
{
        for (int numero : vettore)
    {
        cout << numero;
    }
}

int main()
{
    vector<int> numeri = {12, 23, 34, 45};
    numeri[0] = 100;
    cout << numeri[0] << endl;
    cout << numeri.size();

    numeri.insert(numeri.begin(), 0);

    numeri.erase(numeri.begin());

    numeri.pop_back();
    numeri.clear();

    prova(numeri);

    return 0;
}