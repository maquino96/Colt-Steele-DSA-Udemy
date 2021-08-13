var originalDigits = function(s) {
    // var map = Object.create(null);
    // var nums = new Array(10).fill(0);
    
    // for (var i = 0; i < s.length; i++) {
    //     if (map[s[i]]) {
    //         map[s[i]]++;
    //     } else {
    //         map[s[i]] = 1;
    //     }
    // }
    
    // var detect = [ // index in nums, all letters, letter for count
    //     [0, "zero", "z"],
    //     [2, "two", "w"],
    //     [4, "four", "u"],
    //     [6, "six", "x"],
    //     [8, "eight", "g"],
    //     [5, "five", "f"],
    //     [7, "seven", "v"],
    //     [9, "nine", "i"],
    //     [3, "three", "h"],
    //     [1, "one", "n"]
    // ];
    
    // var count;
    // for (var i = 0; i < detect.length; i++) {
    //     count = map[detect[i][2]];
    //     if (count > 0) {
    //         nums[detect[i][0]] = count;
    //         for (var j = 0; j < detect[i][1].length; j++) {
    //             map[detect[i][1][j]] -= count;
    //         }
    //     }
    // }
    
    // var result = [];
    // for (var i = 0; i < nums.length; i++) {
    //     if (nums[i] > 0) {
    //         result.push(i.toString().repeat(nums[i]));
    //     }
    // }
	
    // return result.join("");

        let count = Array(10);
        count.fill(0);
        
        for(let i = 0; i < s.length; i++) {
            let x = s[i];

            //evens
            if (x == 'z') count[0]++;
            if (x == 'w') count[2]++;
            if (x == 'u') count[4]++; 
            if (x == 'x') count[6]++;
            if (x == 'g') count[8]++;

            //odds 
            if (x == 's') count[7]++; //7-6
            if (x == 'f') count[5]++; //5-4
            if (x == 'h') count[3]++; //3-8
            if (x == 'i') count[9]++; //9-8-5-6
            if (x == 'o') count[1]++; //1-0-2-4
        }

        //updates the count, subtracting repetitions 
        count[7] -= count[6];
        count[5] -= count[4];
        count[3] -= count[8];
        count[9] = count[9] - count[8] - count[5] - count[6];
        count[1] = count[1] - count[0] - count[2] - count[4];
        
        //
        let result = "";
        for(let i = 0; i <= 9; i++) {
            for(let j = 0; j < count[i]; j++) {
                result+= i;
            }
        }
        return result;
};

console.log(originalDigits("owoztneoer"))
console.log(originalDigits("zerotwofoursixeightfivesevenninethreeone"))
console.log(originalDigits("enninethreeonersixevenninethreeonezerotwofouzerotwofourightfivezerotwofoursixeightfivesevenninethreeonesesixeightfivesev"))
console.log(originalDigits("ennineowoztneoerthreeonersixevenninowoztneoerethreeonezerotwofouowoztneoerzerotwofourightfivezerotwofoursixeightfivesowoztneoerevenninethreeowoztneoeronesesixeightfivesev"))