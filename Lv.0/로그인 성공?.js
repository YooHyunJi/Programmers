function solution(id_pw, db) {
    var answer = '';
    
    var len = db.length;
    
    for(var i=0; i<len; i++){
        if(db[i][0] == id_pw[0]){
            if(db[i][1] == id_pw[1]){
                answer = "login";
                console.log("login");
                break;
            }else{
                answer = "wrong pw";
                console.log("wrong pw");
            }
        }
    }
    
    if(answer == ""){
        answer = "fail";
        console.log("fail");
    }
    
    return answer;
}