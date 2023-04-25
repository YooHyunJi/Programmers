function solution(survey, choices) {
    var answer = '';

    var arr_character = ['R', 'T', 'C', 'F', 'J', 'M', 'A', 'N'];
    var arr_score = new Array(8).fill(0);
    var character = '';
    var score = 0;
    var idx = 0;
    
    for(var i=0; i<choices.length; i++){
        score = choices[i]-4;
        if(score == 0){ continue; }
        else{
            if(score < 0){
                idx = arr_character.indexOf(survey[i][0]);
            }else{
                idx = arr_character.indexOf(survey[i][1]);
            }
            arr_score[idx] += Math.abs(score);}
    }
    
    for(var i=0; i<4; i++){
        idx = 2*i;
        console.log(arr_character[idx], arr_character[idx+1]);
        console.log(arr_score[idx], arr_score[idx+1]);
        if(arr_score[idx] == arr_score[idx+1]){
            character = arr_character[idx] < arr_character[idx+1]?
                        arr_character[idx]:
                        arr_character[idx+1];
        }else if(arr_score[idx] > arr_score[idx+1]){
            character = arr_character[idx];
        }else{
            character = arr_character[idx+1];
        }
        answer += character;
    }
    
    return answer;
}