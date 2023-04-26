function solution(n) {
    var answer = [];
    
    function hanoi(n, start, middle, end){}
    
    hanoi(n, 1, 2, 3);
    
    return answer;
    
    function hanoi(n, start, middle, end){
        var arr = [];
        if(n==1){ 
            arr.push(start, end);
            answer.push(arr);
        }
        else{
            hanoi(n-1, start, end, middle);
            arr.push(start, end);
            answer.push(arr);
            hanoi(n-1, middle, start, end);
        }
    }
}