function solution(numbers) {
    var answer = 0;
    
    var len = numbers.length;
    var max_1 = numbers[0];
    var max_2 = numbers[1];
    
    if(len == 2){
        return numbers[0] * numbers[1];
    }else{
        for(var i=2; i<len; i++){
            if(numbers[i] > max_1 || numbers[i] > max_2){
                if(max_1 < max_2){
                    max_1 = numbers[i];
                }else{
                    max_2 = numbers[i];
                }
            }
        }
    }
    answer = max_1 * max_2;
    
    return answer;
}