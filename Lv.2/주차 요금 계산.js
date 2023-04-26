function solution(fees, records) {
    var answer = [];
    
    var len = records.length;
    var split_time = '';
    var split_code = '';
    var split_io = '';
    var arr_history = [];
    var dictionary = {};
    var idx = 0;
    var in_time = 0;
    var out_time = 0;
    var using_time = 0;
    var arr_keys = [];
    var fee = 0;
    var additional_time = 0;
    
    for(var i=0; i<len; i++){
        split_time = records[i].split(' ')[0];
        split_code = records[i].split(' ')[1];
        split_io = records[i].split(' ')[2];
        
        // 입차
        if(split_io == 'IN'){
            arr_history.push(split_code);
            arr_history.push(split_time);
        }
        // 출차
        else{     
            idx = arr_history.indexOf(split_code);
            
            in_time = (arr_history[idx+1].slice(0,2))*60 + (arr_history[idx+1].slice(3,5))*1;
            out_time = (split_time.slice(0,2))*60 + (split_time.slice(3,5))*1;
            using_time = out_time - in_time;

            if(dictionary[split_code]){
                dictionary[split_code] += using_time;
            }else{
                dictionary[split_code] = using_time;
            }
            arr_history.splice(idx, 2);            
        }
    }
    
    for(var i=0; i<arr_history.length/2; i++){
        idx = i*2;
        split_code = arr_history[idx];

        in_time = (arr_history[idx+1].slice(0,2))*60 + (arr_history[idx+1].slice(3,5))*1;
        out_time = 23*60 + 59*1;
        using_time = out_time - in_time;

        if(dictionary[split_code]){
            dictionary[split_code] += using_time;
        }else{
            dictionary[split_code] = using_time;
        }
        arr_history.splice(idx, 2);
        i -= 1;
    }

    arr_keys = Object.keys(dictionary).sort(function(a, b){ return a-b; });

    for(var i=0; i<arr_keys.length; i++){
        additional_time = dictionary[arr_keys[i]] - fees[0];
        fee = fees[1];
        if(additional_time > 0){
            additional_time = Math.ceil(additional_time / fees[2]);
            fee += additional_time * fees[3];
        }
        answer.push(fee);
    }
    
    return answer;
}