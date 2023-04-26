function solution(numbers) {
    var answer = '';
    
    var len = numbers.length;
    var num_extra = [];
    
    for(var i=0; i<len; i++){ numbers[i] += ''; }
    
    numbers.sort((a, b) => {return (b+a)*1 - (a+b)*1});
    
    for(var i=0; i<len; i++){ answer += numbers[i]; }
    if(answer*1 == 0){ answer = '0'; }
    
    return answer;
}