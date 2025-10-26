#include <iostream>
#include <string>

using namespace std;

int main()
{

    int num = 20;

    auto quadrato = [num]()
    {
        return num * num;
    };

    int risultato = quadrato();

    cout<<"il risultato e': "<<risultato<<endl;

    return 0;
}