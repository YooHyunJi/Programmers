function solution(nums) {
    var answer = 0;
    
    var only_array = [...(new Set(nums))];
    var only_len = only_array.length;
    var len = nums.length;
    
    if(only_len > len/2){ answer = len/2; }
    else{ answer = only_len;}
    
    return answer;
}