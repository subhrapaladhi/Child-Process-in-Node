#include<bits/stdc++.h>
using namespace std;

void sayHello(string name){
    string data = "Hello " + name + "!";
    cout<<data<<endl;
}

int main(int argc, const char *argv[]){
    string name = "world";
    if(argc>1){
        name = argv[1];
    }
    sayHello(name);
    return 0;
}