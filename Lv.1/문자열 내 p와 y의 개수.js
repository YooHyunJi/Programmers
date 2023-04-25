function solution(s){
    var answer = true;

    var cnt_p = (s.split('p')).length;
    var cnt_P = (s.split('P')).length;
    var cnt_v = (s.split('y')).length;
    var cnt_V = (s.split('Y')).length;
    
    if(cnt_p+cnt_P != cnt_v+cnt_V){ answer = false; }

    return answer;
}