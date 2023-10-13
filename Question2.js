function sum(nums, target){
    const map = {}

    for(let i = 0; i < nums.length; i++){
        let sub = target - nums[i]
        if(map[sub]) return [map[sub], i]

        map[nums[i]] = i;        
    }

    return []
}