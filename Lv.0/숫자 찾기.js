function solution(num, k) {
    var answer = -1;
    
    var len = 0;

    num = '' + num;
    len = num.length;
    k = '' + k;
    
    for(var i=0; i<len; i++){
        if(num[i] == k){
            answer = i+1;
            break;
        }
    }
    
    return answer;
}