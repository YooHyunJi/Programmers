function solution(n, lost, reserve) {
    var answer = 0;
    
    var len = reserve.length;
    var idx = 0;
    var tmp_lost = [];
    var tmp_reserve = [];
    var answer_1 = 0;
    var answer_2 = 0;
    
    // reserve에서 lost 중복 제거
    for(var i=0; i<len; i++){
        idx = lost.indexOf(reserve[i]);
        if(idx != -1){
            reserve.splice(i, 1);
            lost.splice(idx, 1);
            i--;
        }
    }
    
    // reserve 통해 수업 가능한 lost 제거

    // 1) 왼쪽 먼저 탐색
    len = lost.length;
    tmp_lost = JSON.parse(JSON.stringify(lost));
    tmp_reserve = JSON.parse(JSON.stringify(reserve));
    // console.log('first');
    // console.log(tmp_lost, tmp_reserve);
    
    for(var i=0; i<len; i++){
        idx = tmp_reserve.indexOf(tmp_lost[i]-1);
        if(idx == -1){
            idx = tmp_reserve.indexOf(tmp_lost[i]+1);
        }
        if(idx != -1){
            // console.log(tmp_lost[i], tmp_reserve[idx]);
            tmp_lost.splice(i, 1);
            tmp_reserve.splice(idx, 1);
            i--;
            len--;
        }
    }
    // console.log(tmp_lost, tmp_reserve);
    answer_1 = n - tmp_lost.length;
    
    // 2) 오른쪽 먼저 탐색
    len = lost.length;
    tmp_lost = JSON.parse(JSON.stringify(lost));
    tmp_reserve = JSON.parse(JSON.stringify(reserve));
    // console.log('second');
    // console.log(tmp_lost, tmp_reserve);
    
    for(var i=0; i<len; i++){
        idx = tmp_reserve.indexOf(tmp_lost[i]+1);
        if(idx == -1){
            idx = tmp_reserve.indexOf(tmp_lost[i]-1);
        }
        if(idx != -1){
            // console.log(tmp_lost[i], tmp_reserve[idx]);
            tmp_lost.splice(i, 1);
            tmp_reserve.splice(idx, 1);
            i--;
            len--;
        }
    }
    // console.log(tmp_lost, tmp_reserve);
    answer_2 = n - tmp_lost.length;
    
    // 수업 가능한 인원 계산
    answer = answer_1 > answer_2? answer_1: answer_2;
    
    return answer;
}