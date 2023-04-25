function solution(order) {
    var answer = 0;
    
    var judge = 0;
    
    while(order != 0){
        judge = order % 10;
        if(judge % 3 == 0
          && judge != 0) { answer++; }
        order = Math.floor(order/10);
    }
    
    return answer;
}