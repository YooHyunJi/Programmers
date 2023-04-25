function solution(wallpaper) {
    var answer = [];
    
    var height = wallpaper.length;
    var width = wallpaper[0].length;
    var lux = 51;
    var luy = 51;
    var rdx = -1;
    var rdy = -1;
    
    for(var i=0; i<height; i++){
        if(wallpaper[i].match(/#/g)){
            if(i < lux){ lux = i; }
            rdx = i;
            
            luy = wallpaper[i].indexOf('#') < luy?
                            wallpaper[i].indexOf('#'):
                            luy;
            rdy = wallpaper[i].lastIndexOf('#') > rdy?
                            wallpaper[i].lastIndexOf('#'):
                            rdy;
        }
    }
    answer.push(lux, luy, rdx+1, rdy+1);
    
    return answer;
}