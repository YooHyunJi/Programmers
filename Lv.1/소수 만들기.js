function solution(nums) {
    var answer = 0;
    
    var len = nums.length;
    var sum = 0;
    var cnt = 0;
    
    for(var i=0; i<len-2; i++){
        for(var j=i+1; j<len-1; j++){
            for(var k=j+1; k<len; k++){
                cnt = 0;
                sum = nums[i] + nums[j] + nums[k];
                for(var l=2; l<=Math.sqrt(sum); l++){
                    if(sum%l == 0){ cnt++; }
                }
                if(cnt == 0){ answer++; }
            }
        }
    }
    
    return answer;
}