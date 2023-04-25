function solution(numbers, k) {
    var answer = 0;
    var rotation = [];
    var len_numbers = numbers.length;
    var len_rotation = 0;
    var key = 0;
    
    if(len_numbers % 2 == 0){
        for(var i=1; i<=len_numbers; i+=2){
            rotation.push(i);
        }
    }else{
        for(var i=1; i<=len_numbers; i+=2){
            rotation.push(i);
        }
        for(var i=2; i<=len_numbers; i+=2){
            rotation.push(i);
        }
    }
    len_rotation = rotation.length;
    
    key = len_rotation - 1;
    if(k % len_rotation != 0){
        key = k % len_rotation - 1;
    }
    answer = rotation[key];
    
    return answer;
}