function solution(m, musicinfos) {
    var answer = '';
    
    function playing_time(start, end){};
    function sharp_to_lower(melody){};
    function repeat_melody(len, melody){};
    var len = musicinfos.length;
    var proccessed_musicinfos = [];
    
    m = sharp_to_lower(m);
    
    // [재생 시간, 제목, 시간 동안 재생된 멜로디]
    for(var i=0; i<len; i++){
        var tmp_arr = musicinfos[i].split(',');
        
        tmp_arr[1] = playing_time(tmp_arr[0],tmp_arr[1]);
        tmp_arr[3] = sharp_to_lower(tmp_arr[3]);
        tmp_arr[3] = repeat_melody(tmp_arr[1], tmp_arr[3]);
        tmp_arr.shift();
        proccessed_musicinfos.push(tmp_arr);
    }
    
    // 재생 시간 기준 내림차순 정렬
    proccessed_musicinfos.sort((a, b) => {return b[0]-a[0]});
    
    for(var i=0; i<len; i++){
        if(proccessed_musicinfos[i][2].match(m)){
            answer = proccessed_musicinfos[i][1];
            break;
        }
    }
    // 일치하는 음악이 없을 때 예외 처리
    if(answer == ''){ answer = '(None)'; }
    
    return answer;
    
    function playing_time(start, end){
        start = start.split(':');
        end = end.split(':');
        start = start[0]*60 + start[1]*1;
        end = end[0]*60 + end[1]*1;
        
        return end-start;
    }
    
    function sharp_to_lower(melody){
        var len = melody.length;
        var new_melody = '';
        
        for(var i=0; i<len; i++){
            if(melody[i+1] == '#'){
                new_melody += melody[i].toLowerCase();
                i++;
            }else{ new_melody += melody[i]; }
        }
        
        return new_melody;
    }
    
    function repeat_melody(len, melody){
        var len_melody = melody.length;
        var new_melody = '';
        
        for(var i=0; i<len; i++){ 
            new_melody += melody[i%len_melody]; 
        }
        
        return new_melody;
    }
}