#include<bits/stdc++.h>
using namespace std;
 
int main(){ 
    int t;
    cin >> t;
    t = 4*t;
    while(t--) {
        int n;
        cin >> n;
        vector<string> str;
        for(int i = 0; i < n; i++){
            string tmp;
            cin >> tmp;
            str.push_back(tmp);
        }
        int nums[n];
        for(int i = 0; i < n; i++){
            cin >> nums[i];
        }
        int order[n-1];
        for(int i = 0; i < n; i++){
            cin >> order[i];
        }
        int maxi = INT_MIN;
        for(int i = 0; i < n-1; i++){
            maxi = max(maxi,nums[i]);
            cout << str[order[i]] << " " << maxi;
            int c = 0;
            for(auto it : str){
                if(c == order[i]) str.erase(it);
                c++;
            }
        }
   }
}