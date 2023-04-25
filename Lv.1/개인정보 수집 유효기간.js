function solution(today, terms, privacies) {
    var answer = [];
    
    var len_t = terms.length;
    var len_p = privacies.length;
    
    today = today.split(/\./g).map(Number);
    today = new Date(today[0], today[1]-1, today[2]+1);
    
    for(var i=0; i<len_t; i++){
        terms[i] = terms[i].split(' ');
        terms[i][1] = terms[i][1]*1;
    }
    for(var i=0; i<len_p; i++){
        privacies[i] = privacies[i].split(' ');
        privacies[i][0] = privacies[i][0].split(/\./g).map(Number);
        for(var j=0; j<len_t; j++){
            if(privacies[i][1] == terms[j][0]){
                privacies[i][0][1] += terms[j][1];
                if(privacies[i][0][1] > 12){
                    privacies[i][0][1] -= 12;
                    privacies[i][0][0]++;
                }
            }
        }
        privacies[i] = new Date(privacies[i][0][0], 
                                privacies[i][0][1]-1, 
                                privacies[i][0][2]+1, 0, 0, 0, 0);
        if(privacies[i] <= today){ answer.push(i+1); }
    }
    
    
    
    return answer;
}