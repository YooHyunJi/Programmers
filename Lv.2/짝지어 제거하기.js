function solution(s)
{
    var answer = -1;

    var len = s.length;
    var stack = [];
    
    for(var i=0; i<len; i++){
        if(stack[answer] != s[i]){
            stack.push(s[i]);
            answer++;
        }else{
            stack.pop();
            answer--;
        }
    }
    if(answer == -1){
        answer = 1;
    }else{
        answer = 0;
    }

    return answer;
}