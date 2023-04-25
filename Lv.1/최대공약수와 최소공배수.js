function solution(n, m) {
    var answer = [];
    
    var small = n < m? n: m;
    var answer_1 = 1;
    var answer_2 = n+m - small; // big
    
    for(var i=2; i<=small; i++){
        if(n%i == 0 && m%i == 0){ answer_1 = i; }
    }
    answer.push(answer_1);
    
    if(answer_2 % small != 0){
        answer_2 = (n*m)/answer_1;
    }
    answer.push(answer_2);
    
    return answer;
}