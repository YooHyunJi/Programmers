function solution(n) {
    var answer = 0;
    
    var sum_1 = 0;
    var sum_2 = 1;
    var sum_3 = 0;
    
    for(var i=0; i<n-1; i++){
        sum_3 = (sum_1 + sum_2) % 1234567;
        sum_1 = sum_2;
        sum_2 = sum_3;
    }
    answer = sum_3;
    
    return answer;
}