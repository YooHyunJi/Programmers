function solution(n, m, section) {
    var answer = 0;
    
    var wall = new Array(n).fill(1);
    var empty_wall = false;
    
    for(var i=0; i<section.length; i++){
        wall[section[i]-1] = 0;
    }
    
    for(var i=0; i<n; i++){
        if(wall[i] == 1){ continue; }
        for(var j=0; j<m; j++){ wall[i+j] = 1; }
        i += m-1;
        answer++;
    }
    
    return answer;
}