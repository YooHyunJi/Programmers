function solution(numbers) {
    var answer = 0;
    
    var tmp = 0;
    var len = numbers.length;
    var smallest = 0;
    var biggest = 0;
    
    for(var i=0; i<len; i++){
        for(var j=0; j<i;j++){
            if(numbers[i] < numbers[j]){
                tmp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = tmp;
            }
        }
    }
    
    smallest = numbers[0] * numbers[1];
    biggest = numbers[len-1] * numbers[len-2];
    
    if(smallest > biggest) answer = smallest;
    else answer = biggest;
    
    return answer;
}