function solution(my_string, num1, num2) {
    var answer = '';
    
    var len = my_string.length;
    var lim_1 = num1 < num2? num1: num2;
    var lim_2 = num1 + num2 - lim_1;
    
    for(var i=0; i<len; i++){
        if(i == lim_1){
            answer += my_string[lim_2];
        }else if(i == lim_2){
            answer += my_string[lim_1];
        }else{
            answer += my_string[i];
        }
    }
    
    return answer;
}