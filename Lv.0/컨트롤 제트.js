function solution(s) {
    var answer = 0;
    
    var arr = s.split(' ');
    var len = arr.length;
    
    for(var i=0; i<len; i++){
        if(arr[i+1] == 'Z'){
            i += 1;
            continue;
        }
        answer += arr[i] * 1;
    }    
    
    return answer;
}