function solution(num) {
    var answer = 0;
    
    if(num == 1){
        answer = 0;
    }else{
        while(answer <= 500){
            answer++;
            if(num%2 == 0){
                num /= 2;
            }else{
                num = 3*num + 1;
            }
            if(num == 1){ break; }
        }
        if(answer > 500){ answer = -1; }
    }
    
    return answer;
}