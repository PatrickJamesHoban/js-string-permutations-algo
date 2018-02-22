// ******************************  PSEUDOCODE RECURSIVE IDEA ************************************************************

  // instead of string.length, what if i pass it just the portion of the string it needs each time.
  
  // it has to be recursive, for each call it has to send a smaller section of string and run it.  Then it can use that smaller string's length still.


// function recursiveCall(string, piece) {
  // return when string length is 4
  // 6 times call this... take 1 letter off

//   for (let i = 0; i < string.length; )
// }

  // 5 times call this... take 1 letter off

  // 4 times call this.. return


// if string.length == 3, return the array of strings

// else, string.length times do ... 
  // move last letter to first ...

  // then call 'manipulate string' without the first letter
    // arr.push( arr.each(str) { first letter + str } );

// return the array at the end.


// ********************************************  CODE ****************************************************************
// ************************************** FINAL REFACTOR *************************************************************
function permutations(string) {
  var new_array = [];
  if (string.length <= 2) {
    return moveLastFirst(string);
  } else {
    for (let i = 0; i < string.length; i++) {
      let first_arr = [];
      let first_letter = "";
      let remaining_string = "";
      
      if (typeof new_array[0] === 'undefined') {
        first_arr = moveLastFirst(string);
        first_letter = first_arr[0].charAt(0);
        remaining_string = first_arr[0].slice(1);
      } else {
        // slice doesn't change original...
        first_arr = moveLastFirst(new_array.slice(-1).pop());
        first_letter = first_arr[0].charAt(0);
        remaining_string = first_arr[0].slice(1);
      }      
      
      // recursive call
      let arr = permutations(remaining_string);
      new_array = new_array.concat(addBackTogether(arr, first_letter));
    }
  }
  // Removes duplicate strings from the array before return.
  return new_array.filter(function(letter, idx, self) {
    return idx == self.indexOf(letter);
  });
}

function addBackTogether(array, letter) {
  var added_arr = [];
  array.forEach(function(word){
    added_arr.push(letter + word);
  });
  return added_arr;
}

function moveLastFirst(string) {
  var arr = [];
  var flip_value = string.charAt(string.length-1) + string.slice(0, -1);
  if (string != flip_value) { arr.push(flip_value); }
  arr.push(string);
  return (arr);
}

// **************************************   DRIVER CODE  *************************************************

// var sample = ['bc', 'cb'];
// addBackTogether(sample, 'a');

// findLastThree('abc'); // WORKING!

// moveLastFirst('a'); // WORKS! ['a']

// moveLastFirst('aa'); // WORKS! ['aa']

// moveLastFirst('ab'); // WORKS! [ 'ba', 'ab']

// permutations('a'); // WORKING... [ 'a' ]

// permutations('ab'); // WORKING... [ 'ba', 'ab' ]

// permutations('bb'); // WORKING... [ 'bb' ]

// permutations('abc'); // WORKING! [ 'cba', 'cab', 'bac', 'bca', 'acb', 'abc' ]

// permutations('abb'); // WORKING! [ 'bba', 'bab', 'abb' ]

// permutations('aab'); // WORKING! [ 'baa', 'aab', 'aba' ]

// permutations('aba'); // WORKING! [ 'aba', 'aab', 'baa' ]

permutations('aabc'); // ['cbaa', 'caab', 'caba', 'abac', 'abca', 'aacb', 'aabc', 'acba', 'acab', 'baca', 'baac', 'bcaa']

// permutations('abcd');  // WORKING! WORKING WITH IF ELSE!

// permutations('abcde');  // WORKING! ALSO WORKS W/ UNIQUE!

// permutations('ababc');  // 



// *************************************** ORIGINAL CODE THOUGHT PROCESS *********************************************


// ******************************** SECOND REFACTOR USING ONLY LAST TO FIRST *****************************************
// ************************************** WORKING FOR ALL TESTS! *****************************************************
// function permutations(string) {
//   if (string.length <= 2) {
//     return moveLastFirst(string);
//   } else {
//     var new_array = [];
//     for (let i = 0; i < string.length; i++) {
//       let first_arr = [];
//       let first_letter = "";
//       let remaining_string = "";
      
//       if (typeof new_array[0] === 'undefined') {
//         first_arr = moveLastFirst(string);
//         // console.log('first arr ', first_arr[0]); // ['cab', 'abc']
//         first_letter = first_arr[0].charAt(0);
//         // console.log('first letter ', first_letter);
//         remaining_string = first_arr[0].slice(1);
//         // console.log('remaining_string ', remaining_string );
//       } else {
//         // slice doesn't change original...
//         first_arr = moveLastFirst(new_array.slice(-1).pop());
//         // console.log('else first_arr ', first_arr);
//         first_letter = first_arr[0].charAt(0);
//         // console.log('else first letter ', first_letter);
//         remaining_string = first_arr[0].slice(1);
//         // console.log('else remaining_string ', remaining_string );
//       }      
      
//       // recursive call
//       let arr = permutations(remaining_string);

//       new_array = new_array.concat(addBackTogether(arr, first_letter));
//     }
//   }
  
//   // console.log('new arr final is ', new_array);
//   // Removes duplicate strings from the array before return.
//   uniq_arr = new_array.filter(function(letter, idx, self) {
//     return idx == self.indexOf(letter);
//   });
//   // console.log('unique array length is ', uniq_arr.length)
//   return uniq_arr;
// }

// function addBackTogether(array, letter) {
//   var added_arr = [];
//   array.forEach(function(word){
//     added_arr.push(letter + word);
//   });
//   return added_arr;
// }

// function moveLastFirst(string) {
//   var arr = [];
//   var flip_value = string.charAt(string.length-1) + string.slice(0, -1);
//   if (string != flip_value) { arr.push(flip_value); }
//   arr.push(string);
//   return (arr);
// }


// ******************************** FIRST REFACTOR OF RECURSIVE ALGORITHM ********************************************
// ******************************** DOES NOT WORK FOR STRINGS LENGTH 0 - 3 *******************************************
// function permutations(string) {
//   if (string.length == 3) {
//     return findLastThree(string);
//   } else {
//     var new_array = [];
//     for (let i = 0; i < string.length; i++) {
//       let first_string = "";
//       let first_letter = "";
//       let remaining_string = "";
      
//       if (typeof new_array[0] === 'undefined') {
//         first_string = moveLastFirst(string);
//         first_letter = first_string.charAt(0);
//         remaining_string = first_string.slice(1);
//       } else {
//         // slice doesn't change original...
//         first_string = moveLastFirst(new_array.slice(-1).pop());
//         first_letter = first_string.charAt(0);
//         remaining_string = first_string.slice(1);
//       }      

//       // recursive call
//       let arr = permutations(remaining_string);

//       new_array = new_array.concat(addBackTogether(arr, first_letter));
//     }
//   }

//   // Removes duplicate strings from the array before return.
//   uniq_arr = new_array.filter(function(letter, idx, self) {
//     return idx == self.indexOf(letter);
//   });

//   return uniq_arr;
// }


// function findLastThree(string) {
//   var flt_arr = [];
//   flt_arr.push(string);
//   var i = 0;
//   do { 
//     var one = flipLastTwo(flt_arr.slice(-1).pop());
//     flt_arr.push(one);
//     var two = flipBeforeLastTwo(one);
//     flt_arr.push(two);
//     i++; 
//   } while (i < 3);

//   // Slice 1 removes the first 'abc' off the front and returns the array of strings.
//   return flt_arr.slice(1);
// }

// function flipLastTwo(string) {
//   var str_missing_two = string.slice(0, -2);
//   var last = string.charAt(string.length-1);
//   var second_to_last = string.charAt(string.length-2);
//   return (str_missing_two + last + second_to_last);
// }

// function flipBeforeLastTwo(string) {
//   var first = string.slice(0, -3);
//   var first_middle = string.charAt(string.length-3);
//   var second_middle = string.charAt(string.length-2);
//   var last = string.slice(-1);
//   return (first + second_middle + first_middle + last);
// }

// // Move last letter to first position in the string.
// function moveLastFirst(string) {
//   var str_minus_last = string.slice(0, -1);
//   var last_letter = string.charAt(string.length-1);
//   return (last_letter + str_minus_last);
// }

// // Add the first letter back to the front of each string in the array.
// function addBackTogether(array, letter) {
//   var added_arr = [];
//   array.forEach(function(word){
//     added_arr.push(letter + word);
//   });
//   return added_arr;
// }

// *************************** FIRST CODE ATTEMPT WORKING FOR UP TO 5 LETTER STRING **********************************

// function permutations(string) {
//   var final_array = [];
//   if (string.length == 3) {
//     return findLastThree(string);
//   } else {
//     var new_array = [];
//     // DON'T STORE THE STRING, USE OR STATEMENT
//     // new_array.push(string);
//     console.log('new_array at first is ', new_array);
//     for (let i = 0; i < string.length; i++) {
//       // var new_array = [];
//       let first_string = "";
//       let first_letter = "";
//       let remaining_string = "";
      
//       /// PROBLEM RIGHT HERE TO DO ... 
//       console.log('length is ', new_array.length);
//       console.log("i is ", i);
//       console.log('new array is ', new_array);
//       console.log(typeof new_array[0])
//       if (typeof new_array[0] === 'undefined') {
//         console.log("SUCCESS!");
//         first_string = moveLastFirst(string);
//         console.log('first string ', first_string);
//         first_letter = first_string.charAt(0);
//         console.log('first letter ', first_letter);
//         remaining_string = first_string.slice(1);
//         console.log('remaining string ', remaining_string);
//       } else {
//         // slice doesn't change original...
//         first_string = moveLastFirst(new_array.slice(-1).pop());
        
//         first_letter = first_string.charAt(0);
        
//         remaining_string = first_string.slice(1);
//       // moveLastFirst(new_array.pop());
//       // LOSES IT WHEN IT DROPS THE D AND GOES TO EACB, SHOULD BE EABC
//   //     new array after concat is  [ 'eabcd',
//   // 'edabc',
//   // 'edacb',
//   // 'edcab',
//   // 'edcba',
//   // 'edbca',
//   // 'edbac',
//   // 'ecdab',
//   // 'ecdba',
//   // 'ecbda',
//   // 'ecbad',
//   // 'ecabd',
//   // 'ecadb',
//   // 'ebcda',
//   // 'ebcad',
//   // 'ebacd',
//   // 'ebadc',
//   // 'ebdac',
//   // 'ebdca',
//   // 'eabcd',
//   // 'eabdc',
//   // 'eadbc',
//   // 'eadcb',
//   // 'eacdb',
//   // 'eacbd' ]
//       // let new_iteration = moveLastFirst(string);
//       // console.log("new_array after move last is ", new_array);
//       // first_letter = new_array.slice(-1).pop().charAt(0);
//       // console.log("first letter is ...", first_letter);
//       // remaining_string = new_array.slice(-1).pop().slice(1);
      
//       }      
//       // console.log("remaining_string ", remaining_string);
//       let arr = permutations(remaining_string);
//       // console.log('permutations ', arr);
//       // console.log('backtogetherarray ', addBackTogether(arr, first_letter));
//       // console.log('new array before is ', new_array);
//       new_array = new_array.concat(addBackTogether(arr, first_letter));
//       // arr.forEach(function(word){
//       //   new_array.push(first_letter + word);
//       // });
//       console.log("new array after concat is ", new_array);

//     }
//   }
//     // console.log("new array is out of for is ", new_array.length);
//     uniq_arr = new_array.filter(function(letter, idx, self) {
//       return idx == self.indexOf(letter);
//     });
//     console.log('uniq_arr final is ', uniq_arr.length)
//     return uniq_arr;
//     // console.log('new_array final is ', new_array.length);
//     // return new_array;
// }


// function findLastThree(string) {
//   var flt_arr = [];
  
//   flt_arr.push(string);
//   console.log("flt string is ", string);
//   // console.log("flt arr is ", flt_arr);
  
//   var i = 0;
//   do { 
//     // console.log(flt_arr.slice(-1).pop());
//     // if flt_arr
//     var one = flipLastTwo(flt_arr.slice(-1).pop());
//     // console.log(one);
//     flt_arr.push(one);
//     var two = flipBeforeLastTwo(one);
//     // console.log('hi')
//     // console.log(two);
//     flt_arr.push(two);
//     i++; 
//   } while (i < 3);

//   // DON"T NEED THIS ... REMOVES SECOND abc which is needed for movelastfirst function
//   // console.log('arr is ', flt_arr);
//   // uniq_arr = flt_arr.filter(function(letter, idx, self) {
//   //   return idx == self.indexOf(letter);
//   // })
  
//   // maybe solve by adding start to the end again?
//   console.log("flt_arr  ", flt_arr);
//   return flt_arr.slice(1);
// }

// // PH - WORKING!
// // Move last letter to first position.
// function moveLastFirst(string) {
//   // console.log(string);
//   var str_minus_last = string.slice(0, -1);
//   // console.log(str_minus_last);
//   // console.log("here")
//   // console.log("string is " + string);
//   var last_letter = string.charAt(string.length-1);
//   // console.log(""last_letter);
//   // console.log('there')
//   return (last_letter + str_minus_last);
// }

// // PH - WORKING!
// function flipLastTwo(string) {
//   var str_missing_two = string.slice(0, -2);
//   // console.log(str_missing_two);
//   // console.log(string)
//   var last = string.charAt(string.length-1);
//   // console.log(last);
//   var second_to_last = string.charAt(string.length-2);
//   return (str_missing_two + last + second_to_last);
// }

// // PH - WORKING!
// function flipBeforeLastTwo(string) {
//   var first = string.slice(0, -3);
//   // console.log(first);
//   var first_middle = string.charAt(string.length-3);
//   // console.log(first_middle);
//   var second_middle = string.charAt(string.length-2);
//   // console.log(second_middle);
//   var last = string.slice(-1);
//   // console.log(last);
//   return (first + second_middle + first_middle + last);
// }

// // PH = Working!!
// function addBackTogether(array, letter) {
//   var added_arr = [];
//   array.forEach(function(word){
//     added_arr.push(letter + word);
//   });
//   return added_arr;
// }

