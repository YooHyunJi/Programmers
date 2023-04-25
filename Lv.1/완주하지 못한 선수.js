function solution(participant, completion) {
    var answer = '';
    
    var len = completion.length;
    
    participant.sort();
    completion.sort();
    console.log(participant);
    console.log(completion);
    
    for(var i=0; i<len; i++){
        if(participant[i] != completion[i]){
            answer = participant[i];
            break;
        }
    }
    if(answer == ''){
        answer = participant[len];
    }
    
    return answer;
}