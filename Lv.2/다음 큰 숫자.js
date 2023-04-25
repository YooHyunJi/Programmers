function solution(n) {
    var answer = 0;
    
    var n_binary = n.toString(2);
    var n_one = n_binary.replace(/0/g, '').length;
    var n_zero = n_binary.length - n_one;
    
    var inc = n+1;
    var inc_binary = '';
    var inc_one = 0;
    var inc_zero = 0;
    
    while(1){
        inc_binary = inc.toString(2);
        inc_one = inc_binary.replace(/0/g, '').length;
        inc_zero = inc_binary.length - inc_one;
        if(n_one == inc_one){
            answer = inc;
            break;
        }
        inc++;
    }
    
    return answer;
}