function solution(s) {
    var answer = 0;
    
    var len = s.length;
    var x = s[0];
    var x_cnt = 1;
    var y_cnt = 0;
    
    for(var i=1; i<len; i++){
        if(s[i] == x){ x_cnt++; }
        else{ y_cnt++; }
        if(x_cnt == y_cnt){
            answer++;
            x = s[i+1];
            x_cnt = 0;
            y_cnt = 0;
        }
    }
    if(x_cnt != y_cnt){ answer++; }
    
    return answer;
}