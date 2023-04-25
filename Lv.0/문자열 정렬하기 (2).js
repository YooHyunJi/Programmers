function solution(my_string) {
    var answer = '';
    
    var len = my_string.length;
    var tmp = '';
    
    my_string = my_string.toLowerCase();    
    
    for(var i=0; i<len-1; i++){
        for(var j=i+1; j<len; j++){
            if(my_string[i] > my_string[j]){
                console.log(my_string[i], my_string[j]);
                
                my_string = my_string.slice(0, i) 
                       + my_string[j] 
                       + my_string.slice(i+1, j) 
                       + my_string[i] 
                       + my_string.slice(j+1, len);
            }
        }
    }
    
    answer = my_string;
    return answer;
}