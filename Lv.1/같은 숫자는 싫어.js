function solution(arr)
{
    var answer = [];

    var len = arr.length;
    var prev = arr[0];
    
    answer.push(arr[0]);
    
    for(var i=1; i<len; i++){
        if(arr[i] != prev){ answer.push(arr[i]); }
        prev = arr[i];
    }
    
    
    return answer;
}