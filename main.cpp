#include<bits/stdc++.h>
using namespace std;
#define e "\n"
long long totalTreasure=0;
vector<long long>Treasure;
vector<string>account;
vector<string>history;
map<int,vector<string>>mp;

void User(int id){

    while (1)
    {
       cout<<"1 Total Treasure"<<e;
       cout<<"2 My Treausre"<<e;
       cout<<"3 Contribute to treause"<<e;
       cout<<"0 to return back"<<e;
       int x;   cin>>x;
       if(x==0)break;
       if(x==1)cout<<totalTreasure<<e;
       else if(x==2){
            cout<<"You have = "<<Treasure[id]<<" TK"<<e;
       }else if(x==3){
            cout<<"Enter Amount = ";
            long long z;    cin>>z;
            Treasure[id]+=z;
            totalTreasure+=z;
       }
    }
}

void createAccount(){
    cout<<"Amount = ";
    long long z;    cin>>z;
    cout<<"Password = ";
    string pass;    cin>>pass;
    Treasure.push_back(z);
    account.push_back(pass);
    totalTreasure+=z;
    cout<<"Your Id is = "<<Treasure.size()-1<<e;
}

bool accountChecker(int id,string ps){
    if(account[id]==ps)return 1;
    return 0;
}

void groupMember(){

   while(1){
    cout<<"1 Create New Account"<<e;
    cout<<"2 Already Have Account"<<e;
    cout<<"3 Number of User"<<e;
    cout<<"0 to return back"<<e;
    int x;  cin>>x;
    int id;
    if(x==0)break;
    if(x==1){
        createAccount();
    }else if(x==2){
        string ps;
        cout<<"ID = ";  cin>>id;
        if(id>=Treasure.size()){
            cout<<"Wrong ID"<<e;
        }else{
            cout<<"Password = "; cin>>ps;
        bool ok=accountChecker(id,ps);
        if(ok){
            User(id);
        }else{
            cout<<"Wrong id and password"<<e;
        }
        }
    }else if(x==3){
        cout<<Treasure.size()<<e;
    }
   }
}

bool amountCheck(long long amount){
    bool ok=1;
    for(int i=0;i<Treasure.size();i++){
        if(Treasure[i]<amount){
            cout<<"Id "<<i<<" have "<<Treasure[i]<<" Tk which is not suffiecent"<<e;
            ok=0;
        }
    }
    return ok;
}

void historyAdder(string hist){
    for(int i=0;i<Treasure.size();i++)mp[i].push_back(hist);
}

void groupTreasure(){
    while(1){
        cout<<"1 Total Treasure"<<e;
        cout<<"2 My Treause"<<e;
        cout<<"3 Other Treause"<<e;
        cout<<"4 Use Money"<<e;
        cout<<"5 Money History"<<e;
        cout<<"0 Return back"<<e;
        int x;  cin >>x;
        if(x==0)break;
        else if(x==1)cout<<totalTreasure<<e;
        else if(x==2)cout<<Treasure[0]<<e;
        else if(x==3){
            cout<<"Enter Id = ";
            int y;  cin>>y;
            if(y>=Treasure.size()){
                cout<<"User Not Found"<<e;
            }else {
                cout<<"User "<<y<<"have = "<<Treasure[y]<<"TK"<<e;
            }
        }else if(x==4){
            cout<<"1 From Everyone"<<e;
            cout<<"2 Individual User"<<e;
            int z;  cin>>z;
            if(z==1){
                cout<<"Amount = ";  cin>>z;

                
                bool ok=amountCheck(z);

                if(ok){
                    cout<<"Reason = ";
                    string a;   getline(cin>>ws,a);
                    string b=" ";
                    b+=to_string(z);
                    a+=b;
                    history.push_back(a);
                    historyAdder(a);

                    for(int i=0;i<Treasure.size();i++){
                        totalTreasure-=z;
                        Treasure[i]-=z;
                    }
                    cout<<"New Total Balance = "<<totalTreasure<<e;
                }
            }else if(z==2){
                cout<<"ID = ";  cin>>x;
                if(x>=Treasure.size()){
                    cout<<"User NOt Found"<<e;
                }else{
                    cout<<"Amount = ";  cin>>z;
                    if(Treasure[x]<z){
                        cout<<"He doesn't have sufficient balance"<<e;
                    }else{

                        cout<<"Reason = ";
                        string a;   getline(cin>>ws,a);
                        string b=" ";
                        b+=to_string(z);
                        a+=b;
                        mp[x].push_back(a);

                        Treasure[x]-=z;
                        totalTreasure-=z;
                    }
                }
                cout<<"New Total Balance = "<<totalTreasure<<" Tk"<<e;
                cout<<"New balance for Id = "<<x<<" is "<<Treasure[x]<<" Tk"<<e;
            }
        }else if(x==5){
            cout<<"1 All"<<e;
            cout<<"2 Individual"<<e;
            cin>>x;
            if(x==1){
                for(auto u:history)cout<<u<<e;
            }else if(x==2){
                cout<<"ID = ";
                cin >>x;
                if(x>=Treasure.size()){
                    cout<<"User not Found!"<<e;
                }else{
                    for(auto u:mp[x])cout<<u<<e;
                }
            }
        }
    }
}

int main(){
    while(1){
        cout<<"1 Group Treasure"<<e;
        cout<<"2 Group Member"<<e;
        int x;  cin>>x;
        if(x==1){
            if(Treasure.empty()){
                createAccount();
                cout<<"Group Treasure Account Succesfull"<<e;
            }else{
                cout<<"Enter Your Password = ";
                string a;cin>>a;
                if(account[0]==a){
                    groupTreasure();
                }else cout<<"Wrong username and password"<<e;
            }
        }
        else if(x==2)groupMember();
    }
}