function solution(sizes) {
    var answer = 0;
    
    var len = sizes.length;
    var width = 0;
    var height = 0;
    var max_width = 0;
    var max_height = 0;
    
    for(var i=0; i<len; i++){
        width = sizes[i][0] > sizes[i][1]? sizes[i][0]: sizes[i][1];
        height = sizes[i][0] + sizes[i][1] - width;
        
        if(width > max_width){ max_width = width; }
        if(height > max_height){ max_height = height; }
    }
    
    answer = max_width * max_height;
    
    return answer;
}