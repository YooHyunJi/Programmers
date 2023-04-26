function solution(str1, str2) {
    var answer = 0;
    
    var len_1 = str1.length;
    var len_2 = str2.length;
    var token_1 = [];
    var token_2 = [];
    var token = '';
    var verify = '';
    var idx = 0;
    var both = 0;
    var each = 0;
    
    for(var i=0; i<len_1-1; i++){
        token = str1.slice(i, i+2);
        if(/[a-zA-Z]{2}/g.test(token) == true){
            token_1.push((token).toLowerCase());
        }    
    }
    for(var i=0; i<len_2-1; i++){
        token = str2.slice(i, i+2);
        if(/[a-zA-Z]{2}/g.test(token) == true){
            token_2.push(token.toLowerCase());
        }    
    }
    len_1 = token_1.length;
    len_2 = token_2.length;
    for(var i=0; i<len_1; i++){
        idx = token_2.indexOf(token_1[i]);
        if(idx != -1){
            both++;
            token_2.splice(idx, 1);
        }
    }
    
    each = token_1.length + token_2.length;
    answer = each == 0? 65536: Math.floor((both/each)*65536);
    
    
    return answer;
}