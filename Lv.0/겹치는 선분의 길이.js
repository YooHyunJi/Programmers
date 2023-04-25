function solution(lines) {
    var answer = 0;
    
    var overlap_array = []
    
    // 겹치는 선분 구하기
    for(var i=0; i<3; i++){
        var start = 101;
        var end = 101;
        var line1 = lines[i%3][0] < lines[(i+1)%3][0]? 
                    lines[i%3]:
                    lines[(i+1) % 3];
        var line2 = lines[i%3][0] < lines[(i+1)%3][0]? 
                    lines[(i+1)%3]:
                    lines[i%3];
        
        if(line1[1] > line2[0]){
            start = line2[0];
            end = line1[1] > line2[1]? line2[1]: line1[1];
        }
        if(start != 101){ overlap_array.push([start, end]); }
    }
    console.log(overlap_array);
    
    // 겹치는 선분의 개수에 따라 다르게 처리
    switch(overlap_array.length){
        case 0:
            answer = 0;
            break;
        case 1:
            answer = overlap_array[0][1] - overlap_array[0][0];
            break;
        case 2:
            var line1 = overlap_array[0][0] < overlap_array[1][0]?
                        overlap_array[0]:
                        overlap_array[1];
            var line2 = overlap_array[0][0] < overlap_array[1][0]?
                        overlap_array[1]:
                        overlap_array[0];
            if(line1[1] < line2[0]){
                answer = (line1[1]-line1[0]) + (line2[1]-line2[0]);
            }else{
                answer = line2[1] - line1[0];
            }
            break;
        case 3:
            var start = Math.min(overlap_array[0][0], 
                                 overlap_array[1][0], 
                                 overlap_array[2][0]);
            var end = Math.max(overlap_array[0][1],
                               overlap_array[1][1],
                               overlap_array[2][1]);
            answer = end - start;
            break;
    }
    
    return answer;
}