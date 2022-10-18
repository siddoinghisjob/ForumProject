#include<bits/stdc++.h>
using namespace std;
 
int main(){ 
    int t;
    cin >> t;
    t = t;
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
        for(int i = 0; i < n-1; i++){
            cin >> order[i];
        }
        int maxi = INT_MIN;
        for(int i = 0; i < str.size(); i++){
            maxi = max(maxi,nums[order[i]-1]);
            cout << str[order[i]-1] << " " << maxi << endl;
            int c = 0;
            for(auto it = str.begin(); it!=str.end(); ++it){
                if(c == order[i]-1) str.erase(it);
                c++;
            }
        }
   }
}