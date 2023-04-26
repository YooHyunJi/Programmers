function solution(record) {
    var answer = [];
    
    var len = record.length;
    var dic_users = {};
    var arr_msg = [];
    var id = '';
    
    for(var i=0; i<len; i++){
        arr_msg = record[i].split(' ');
        
        switch(arr_msg[0]){
            case 'Enter':
                answer.push('님이 들어왔습니다.' + arr_msg[1]);
                dic_users[arr_msg[1]] = arr_msg[2];
                break;
                
            case 'Change':
                dic_users[arr_msg[1]] = arr_msg[2];
                break;
                
            case 'Leave':
                answer.push('님이 나갔습니다.' + arr_msg[1]);
                break;
        }
    }
    
    for(var i=0; i<answer.length; i++){
        id = answer[i].match(/\.[a-zA-Z\d]*/g)[0].slice(1);
        answer[i] = dic_users[id] + answer[i].replace(id, '');
    }
    
    return answer;
}