function solution(name, yearning, photo) {
    var answer = [];
    
    var len_dic = name.length;
    var len_photos = photo.length;
    var dic = {};
    
    for(var i=0; i<len_dic; i++){ dic[name[i]] = yearning[i]; }
    console.log(dic);
    
    for(var i=0; i<len_photos; i++){
        var sum = 0;
        var len_photo = photo[i].length;
        
        for(var j=0; j<len_photo; j++){
            if(dic[photo[i][j]]){
                sum += dic[photo[i][j]];
            }else{
                continue;
            }   
        }
        answer.push(sum);
    }
    
    return answer;
}