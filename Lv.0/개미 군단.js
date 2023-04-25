function solution(hp) {
    var answer = 0;
    
    while(hp > 0){
        if(hp / 5 >= 1){
            answer++;
            hp -= 5;
            continue;
        }
        else if(hp / 3 >= 1){
            answer++;
            hp -= 3;
            continue;
        }
        else{
            answer += hp;
            hp = 0;
            break;
        }
    }
    
    return answer;
}