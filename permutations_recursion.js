

// TODO => CLOSE BUT MISSING SOMETHING IN THE WAY THE FIRST NUMBER WRAPS BACK AROUND AGAIN.  MAY NEED TO PASS 4 LETTERS IN, INSTEAD OF 3.  ALSO NEED TO FINISH WORKING THROUGH THE 5 LETTER EXAMPLE TO MAKE SURE IT WILL WORK THE WAY I THINK IT WILL.



// CODE 
function permutations(string) {
  var final_array = [];
  if (string.length == 3) {
    return findLastThree(string);
  } else {
    var new_array = [];
    new_array.push(string);
    console.log('new_array at first is ', new_array);
    for (let i = 0; i < string.length; i++) {
      // var new_array = [];
      
      /// PROBLEM RIGHT HERE TO DO ... 
      
      new_array.push(moveLastFirst(new_array.pop()));
      // moveLastFirst(new_array.pop());
      
      
      
      // let new_iteration = moveLastFirst(string);
      // console.log("new_array after move last is ", new_array);
      let first_letter = new_array.slice(-1).pop().charAt(0);
      // console.log("first letter is ...", first_letter);
      let remaining_string = new_array.slice(-1).pop().slice(1);
      // console.log("remaining_string ", remaining_string);
      let arr = permutations(remaining_string);
      // console.log('permutations ', arr);
      // console.log('backtogetherarray ', addBackTogether(arr, first_letter));
      // console.log('new array before is ', new_array);
      new_array = new_array.concat(addBackTogether(arr, first_letter));
      // arr.forEach(function(word){
      //   new_array.push(first_letter + word);
      // });
      console.log("new array after concat is ", new_array);
    }
    console.log("new array is out of for is ", new_array.length);
    uniq_arr = new_array.filter(function(letter, idx, self) {
      return idx == self.indexOf(letter);
    });
    console.log('uniq_arr ', uniq_arr.length)
    return uniq_arr;
  }
}


function findLastThree(string) {
  var flt_arr = [];
  
  flt_arr.push(string);
  console.log("flt string is ", string);
  // console.log("flt arr is ", flt_arr);
  
  var i = 0;
  do { 
    // console.log(flt_arr.slice(-1).pop());
    var one = flipLastTwo(flt_arr.slice(-1).pop());
    // console.log(one);
    flt_arr.push(one);
    var two = flipBeforeLastTwo(one);
    // console.log('hi')
    // console.log(two);
    flt_arr.push(two);
    i++; 
  } while (i < 3);

  // DON"T NEED THIS ... REMOVES SECOND abc which is needed for movelastfirst function
  // console.log('arr is ', flt_arr);
  // uniq_arr = flt_arr.filter(function(letter, idx, self) {
  //   return idx == self.indexOf(letter);
  // })
  // console.log("uniq_arr  ", uniq_arr);
  return flt_arr.slice(1);
}

// PH - WORKING!
// Move last letter to first position.
function moveLastFirst(string) {
  // console.log(string);
  var str_minus_last = string.slice(0, -1);
  // console.log(str_minus_last);
  // console.log("here")
  // console.log("string is " + string);
  var last_letter = string.charAt(string.length-1);
  // console.log(""last_letter);
  // console.log('there')
  return (last_letter + str_minus_last);
}

// PH - WORKING!
function flipLastTwo(string) {
  var str_missing_two = string.slice(0, -2);
  // console.log(str_missing_two);
  // console.log(string)
  var last = string.charAt(string.length-1);
  // console.log(last);
  var second_to_last = string.charAt(string.length-2);
  return (str_missing_two + last + second_to_last);
}

// PH - WORKING!
function flipBeforeLastTwo(string) {
  var first = string.slice(0, -3);
  // console.log(first);
  var first_middle = string.charAt(string.length-3);
  // console.log(first_middle);
  var second_middle = string.charAt(string.length-2);
  // console.log(second_middle);
  var last = string.slice(-1);
  // console.log(last);
  return (first + second_middle + first_middle + last);
}

// PH = Working!!
function addBackTogether(array, letter) {
  var added_arr = [];
  array.forEach(function(word){
    added_arr.push(letter + word);
  });
  return added_arr;
}


// DRIVER CODE
// var sample = ['bc', 'cb'];
// addBackTogether(sample, 'a');

// findLastThree('abc'); // WORKING!

permutations('abcd');  // WORKING! 

// permutations('abcde');  // 