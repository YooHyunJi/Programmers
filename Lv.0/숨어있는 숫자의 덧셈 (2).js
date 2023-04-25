function solution(my_string) {
    var answer = 0;
    
    var len = my_string.length;
    var tmp = '';
    var flag = 0;
    
    my_string = my_string.replace(/[a-z]/g, ' ');
    my_string = my_string.replace(/[A-Z]/g, ' ');
    
    for(var i=0; i<len; i++){
        if(my_string[i] != ' '){
            tmp += my_string[i];
            flag = 1;
        }else{
            answer += tmp * 1;
            tmp = '';
            flag = 0;
        }
    }
    
    if(flag == 1){
        answer += tmp * 1;
    }
    
    return answer;
}