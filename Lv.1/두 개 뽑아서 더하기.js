function solution(numbers) {
    var answer = [];
    
    var len = numbers.length;
    var tmp = 0;
    var sum = 0;
    
    for(var i=0; i<len-1; i++){
        for(var j=i+1; j<len; j++){
            sum = numbers[i] + numbers[j];
            if(answer.indexOf(sum) == -1){
                answer.push(sum);
            }
        }
    }
    
    len = answer.length;
    
    for(var i=0; i<len-1; i++){
        for(var j=i+1; j<len; j++){
            if(answer[i] > answer[j]){
                tmp = answer[i];
                answer[i] = answer[j];
                answer[j] = tmp;
            }
        }
    }
    
    console.log(numbers);
    
    return answer;
}