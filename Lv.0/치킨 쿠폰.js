function solution(chicken) {
    var answer = 0;
    
    while(1){
        if(chicken - 10 < 0){ break; }
        answer++;
        chicken -= 9;
    }
    
    return answer;
}