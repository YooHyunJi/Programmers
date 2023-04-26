function solution(brown, yellow) {
    var answer = [];
    
    var height = 3;
    var width = (brown-(height*2))/2 + 2;
    
    while(1){
        if((width-2)*(height-2) == yellow){ break; }
        do{
            height++;
            width = (brown-(height*2))/2 + 2;
        }while(width - Math.floor(width) != 0)
    }
    answer = [width, height];
    
    return answer;
}