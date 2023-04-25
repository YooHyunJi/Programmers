function solution(spell, dic) {
    var answer = 2;
    
    var len_dic = dic.length;
    var len_spell = spell.length;
    var tmp_dic = [];
    
    for(var i=0; i<len_dic; i++){
        if(dic[i].length != len_spell){
            continue;
        }else{
            tmp_dic.push(dic[i]);
        }
    }
    
    len_dic = tmp_dic.length;
    for(var i=0; i<len_dic; i++){
        for(var j=0; j<len_spell; j++){
            tmp_dic[i] = tmp_dic[i].replace(spell[j], '');
        }
    }
    
    for(var i=0; i<len_dic; i++){
        if(tmp_dic[i] == '') return 1;
    }
    
    return answer;
}