function solution(sides) {
    var answer = 0;
    
    big = Math.max.apply(null, sides);
    
    const sum = sides.reduce((a,b) => (a+b));
    if(sum - big > big){
        answer = 1;
    }else{
        answer = 2;
    }
    
    return answer;
}