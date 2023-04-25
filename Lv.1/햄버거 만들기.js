function solution(ingredient) {
    var answer = 0;
    
    var len = ingredient.length;
    var arr_hamburger = ingredient.slice(0, 3);
    var top = 3;

   for(var i=3; i<len; i++){
       arr_hamburger.push(ingredient[i]);
       top++;
       if(arr_hamburger.slice(top-4, top).join('') == '1231'){
           answer++;
           arr_hamburger.pop();
           arr_hamburger.pop();
           arr_hamburger.pop();
           arr_hamburger.pop();
           top -= 4;
       }
   }
    
    return answer;
}