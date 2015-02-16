function distribute(nums, queues, n, digit) {
 for (var i = 0; i < n; ++i) {
  if (digit == 1) {
    queues[nums[i]%10].enqueue(nums[i]);
    }
  else {
    queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
    }
  }
}

function collect(queues, nums) { // function called collect that takes the arguments of queues and nums
 var i = 0; // initializes a variable i and sets it to 0
 for (var digit = 0; digit < 10; ++digit) { // for loop that goes through 10 times
   while (!queues[digit].empty()) { // as long as queues is not empty
     nums[i++] = queues[digit].dequeue(); // nums will get that element and make room for the next one
     }// end of while loop
   }// end of for loop
}// end of collect

function dispArray(arr) {
 for (var i = 0; i < arr.length; ++i) {
   write(arr[i] + " ");
   }
 }

