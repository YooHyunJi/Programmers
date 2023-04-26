function solution(n, t, m, p) {
    var answer = '';
    
    var max = m*t;
    var string_tmp = '';
    var word_tmp = '';
    
    for(var i=0; i<=max; i++){
        string_tmp += (i.toString(n)).toUpperCase();
    }
    for(var i=0; i<t; i++){
        answer += string_tmp[m*i + (p-1)];
    }
    
    return answer;
}