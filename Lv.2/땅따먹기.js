function solution(land) {
    var answer = 0;

    var len = land.length;
    
    for(var i=1; i<len; i++){
        land[i][0] += Math.max(land[i-1][1], land[i-1][2], land[i-1][3]);
        land[i][1] += Math.max(land[i-1][0], land[i-1][2], land[i-1][3]);
        land[i][2] += Math.max(land[i-1][0], land[i-1][1], land[i-1][3]);
        land[i][3] += Math.max(land[i-1][0], land[i-1][1], land[i-1][2]);
    }

    answer = Math.max.apply(null, land[len-1]);

    return answer;
}