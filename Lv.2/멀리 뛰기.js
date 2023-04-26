function solution(n) {
    var answer = 0;
    
    var arr = [0, 1];
    var tmp = 0;
    
    for(var i=0; i<n; i++){
        tmp = (arr[i] + arr[i+1]) % 1234567;
        arr.push(tmp);
    }
    
    answer = arr.pop();
    
    return answer;
}