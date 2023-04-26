function solution(s) {
    var answer = [];
    
    var round = 0;
    var cnt_zero = 0;
    var s_no_zero = '';
    
    while(s != '1'){
        round++;
        s_no_zero = s.replace(/0/g, '');
        cnt_zero += s.length - s_no_zero.length;
        s = (s_no_zero.length).toString(2);
    }
    
    answer.push(round);
    answer.push(cnt_zero);
    
    return answer;
}