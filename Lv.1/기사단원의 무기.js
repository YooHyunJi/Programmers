function solution(number, limit, power) {
    var answer = 0;
    
    var div = 0;
    var num = 0;
    var arr_strength = [];
    
    for(var i=1; i<=number; i++){
        div = 0;
        num = Math.sqrt(i);
        for(var j=1; j<num; j++){
            if(i%j == 0){ div++; }
        }
        div *= 2;
        if(num - Math.floor(num) == 0){ div += 1;}
        if(div > limit){ div = power; }
        arr_strength.push(div);
    }
    answer = arr_strength.reduce((a, b) => a+b);
    
    return answer;
}