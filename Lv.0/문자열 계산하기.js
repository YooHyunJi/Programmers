function solution(my_string) {
    var answer = 0;
    
    var arr_split = my_string.split(' ');
    var len = arr_split.length;
    var new_digit = 0;
    
    answer = arr_split[0] * 1;
    
    for(var i=1; i<len; i+=2){
        new_digit = arr_split[i+1] * 1;

        console.log(answer, new_digit);
        
        if(arr_split[i] == '+'){
            answer += new_digit;
        }else{
            answer -= new_digit;
        }
    }
    
    return answer;
}