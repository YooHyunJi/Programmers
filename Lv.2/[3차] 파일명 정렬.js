function solution(files) {
    var answer = [];
    
    var len = files.length;
    var head = '';
    var number = '';
    var tail = '';
    var arr_hnt = [];
    var arr_same_head = [];
    var number_done = [];
    var flag = false;
    
    for(var i=0; i<len; i++){
        head = files[i].match(/^[a-zA-Z .-]+|\d/g)[0].toLowerCase();
        number = files[i].replace(head, '').match(/\d{1,5}/g)[0];
        arr_hnt.push([head, number, i]);
    }

    arr_hnt.sort((a, b) => a[0]>=b[0]? 1: -1);
    arr_same_head.push(arr_hnt[0]);
    for(var i=1; i<len; i++){
        if(arr_same_head[0][0] == arr_hnt[i][0]){
            arr_same_head.push(arr_hnt[i]);
        }else{
            arr_same_head.sort((a, b) => a[1]*1 - b[1]*1);
            number_done = number_done.concat(arr_same_head);
            arr_same_head = [];
            arr_same_head.push(arr_hnt[i]);
        }
    }
    if(arr_same_head.length != 0){
        arr_same_head.sort((a, b) => a[1]*1 - b[1]*1);
        number_done = number_done.concat(arr_same_head);
    }
    
    for(var i=0; i<len; i++){
        answer.push(files[number_done[i][2]]);
    }
    
    return answer;
}