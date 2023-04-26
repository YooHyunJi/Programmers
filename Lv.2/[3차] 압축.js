function solution(msg) {
    var answer = [];
    
    var len = msg.length;
    var arr_dictionary = ['A', 'B', 'C', 'D', 'E', 'F',  
                     'G', 'H', 'I', 'J', 'K', 'L',
                     'M', 'N', 'O', 'P', 'Q', 'R', 
                     'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var word_front = '';
    var word_end = '';
    
   for(var i=0; i<len; i++){
       word_front = msg[i];
       word_end = msg[i+1];
       while(arr_dictionary.indexOf(word_front+word_end) != -1){
           i++;
           if(i == len){ break; }
           word_front = word_front + word_end;
           word_end = msg[i+1];
       }
       answer.push(arr_dictionary.indexOf(word_front) + 1);
       arr_dictionary.push(word_front+word_end);
   }

    
    return answer;
}