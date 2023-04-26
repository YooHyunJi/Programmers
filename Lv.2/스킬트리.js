function solution(skill, skill_trees) {
    var answer = 0;
    
    var len_trees = skill_trees.length;
    var len_skill = skill.length;
    var flag = false;
    var cnt = 0;
    
    for(var i=0; i<len_trees; i++){
        flag = false;
        cnt = 0;
        for(var j=len_skill-1; j>=0; j--){
            if(skill_trees[i].indexOf(skill[j]) == -1){ cnt++; }
            if(flag == false && skill_trees[i].indexOf(skill[j]) >= 0){
                flag = true;
                continue;
            }
            if(flag == true){
                if(skill_trees[i].indexOf(skill[j]) > skill_trees[i].indexOf(skill[j+1]) || 
                   skill_trees[i].indexOf(skill[j]) == -1){
                    flag = false;
                    break;
                }
            }
        }
        if(cnt == len_skill){ flag = true; }
        if(flag == true){ answer++; }
    }
    
    return answer;
}