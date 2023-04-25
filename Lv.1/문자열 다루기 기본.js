function solution(s) {
    var answer = true;
    
    var len = s.length;
    var arr_number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    if(len!=4 && len!=6){ answer = false; }
    else{
        for(var i=0; i<len; i++){
            if(arr_number.indexOf(s[i]*1) == -1){
                answer = false;
            }
        }
    }
    
    return answer;
}