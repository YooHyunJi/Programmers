function solution(polynomial) {
    var answer = '';
    
    var len = 0;
    var tmp = 0;
    var x_num = 0;
    var num = 0;
    
    polynomial = polynomial.replace(/\+/g, '');
    polynomial = polynomial.split('  ');
    len = polynomial.length;
    
    for(var i=0; i<len; i++){
        if(polynomial[i].substr(-1) == 'x'){
            tmp = polynomial[i].replace('x', '');
            if(tmp == ''){
                x_num += 1;
            }else{
                x_num += tmp * 1;
            }
        }else{
            num += polynomial[i] * 1;
        }
    }
    
    if(x_num != 0){
        if(x_num == 1){
            answer += 'x';
        }else{
            answer += x_num + 'x';
        }
        if(num != 0){
             answer += ' + '
        }
    }
    if(num != 0){
        answer += num;
    }
    
    return answer;
}