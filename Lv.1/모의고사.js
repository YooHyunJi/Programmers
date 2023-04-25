function solution(answers) {
    var answer = [];
    
    var len = answers.length;
    var pattern_1 = [1, 2, 3, 4, 5];
    var pattern_2 = [2, 1, 2, 3, 2, 4, 2, 5];
    var pattern_3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    var answer_1 = [];
    var answer_2 = [];
    var answer_3 = [];
    var score = [0, 0, 0];
    var idx = 0;
    var high_score = 0;
    
    for(var i=0; i<8; i++){ answer_1 = answer_1.concat(pattern_1); }
    for(var i=0; i<5; i++){ answer_2 = answer_2.concat(pattern_2); }
    for(var i=0; i<4; i++){ answer_3 = answer_3.concat(pattern_3); }
    
    for(var i=0; i<len ;i++){
        idx = i%40;
        if(answers[i] == answer_1[idx]){ score[0]++; }
        if(answers[i] == answer_2[idx]){ score[1]++; }
        if(answers[i] == answer_3[idx]){ score[2]++; }
    }
    
    
    high_score = Math.max.apply(null, score);
    
    for(var i=0; i<3; i++){
        if(score[i] == high_score){
            answer.push(i+1);
        }
    }
    
    return answer;
}