function solution(arr, divisor) {
    var answer = [];
    
    var len = arr.length;
    
    for(var i=0; i<len; i++){
        if(arr[i] % divisor == 0){ answer.push(arr[i]); }
    }
    if(answer.length == 0){
        answer.push(-1);
    }else{
        answer.sort(function compare(a, b){
            return a - b;
        });
    }
    
    return answer;
}