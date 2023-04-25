function solution(price) {
    var answer = 0;
    var discount = 1;
    
    if(price < 100000){
        discount = 1;
    }else if(price < 300000){
        discount = 0.95;
    }else if(price < 500000){
        discount = 0.9;
    }else{
        discount = 0.8;
    }
    
    answer = Math.floor(price * discount);
    
    return answer;
}