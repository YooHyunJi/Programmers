function solution(price, money, count) {
    var answer = -1;
    
    var needed = 0;

    for(var i=0, needed = 0; i<count; i++, needed += price*i){}
    
    answer = needed - money;
    answer = answer<0? 0: answer;
    
    return answer;
}