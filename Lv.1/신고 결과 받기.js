function solution(id_list, report, k) {
    var answer = new Array(id_list.length).fill(0);
    
    var len_id = id_list.length;
    var len_report = report.length;
    var from = '';
    var to = '';
    var arr_report = [];
    var from = [];
    
    for(var i=0; i<len_id; i++){
        arr_report.push([0, [], false]);
    }
    // console.log(arr_report);
    
    for(var i=0; i<len_report; i++){
        from = report[i].split(' ')[0];
        to = report[i].split(' ')[1];
        // console.log(from, to);
        from = id_list.indexOf(from);
        to = id_list.indexOf(to);
        // console.log(from, to);
        
        if(arr_report[to][1].indexOf(from) == -1){
            // console.log(from + '은 처음이넹 ..');
            arr_report[to][1].push(from);
            if(arr_report[to][0] < k){
                arr_report[to][0]++;
            }
            if(arr_report[to][2] == false && arr_report[to][0] == k){
                // console.log('헥 정지');
                arr_report[to][2] = true;
            }
        }else{
            // console.log(from + '은 이미 신고함 ..');
        }
    }
    
    // console.log(arr_report);
    
    for(var i=0; i<len_id; i++){
        if(arr_report[i][2] == true){
            for(var j=0; j<arr_report[i][1].length; j++){
                answer[arr_report[i][1][j]]++;
            }
        }
    }
    
    return answer;
}