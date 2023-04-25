function solution(bin1, bin2) {
    var answer = '';
    
    var a = 0;
    var b = 0;
    var carry = 0;
    var sum = 0;
    var len = bin1.length > bin2.length ? bin1.length : bin2.length;
    
    bin1 = bin1.split('').reverse().join('');
    bin2 = bin2.split('').reverse().join('');
    
    for(var i=0; i<len; i++){
        if(bin1 != ''){ 
            a = bin1[0] * 1;
            bin1 = bin1.substr(1);
        } else{ a = 0; }
        
        if(bin2 != ''){
            b = bin2[0] * 1;
            bin2 = bin2.substr(1);
        } else{ b = 0; }
        
        sum = a + b + carry;
        if(sum >= 2){ carry = 1; sum -= 2;} else{ carry = 0; }
        answer += sum + "";
    }
    
    if(carry == 1){ 
        answer += "1" ;
    }
    
    answer = answer.split('').reverse().join('');
    
    return answer;
}