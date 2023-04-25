function solution(n) {
    var answer = 0;
    
    var sqrt = Math.sqrt(n);
    console.log(sqrt - Math.floor(sqrt));
    
    if(sqrt - Math.floor(sqrt) == 0){
        answer = (sqrt+1) ** 2;
    }else{
        answer--;
    }
    
    return answer;
}