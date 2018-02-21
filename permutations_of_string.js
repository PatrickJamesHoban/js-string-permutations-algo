// PSEUDO CODE

// Priorities:  
  // Get a one letter string working
  // Get a two letter string working.
  // Get a two letter string w/ duplicates working
  // Make sure 3 letter string still works.
  // Get a four letter string to work.



// For each unique letter, you need to shuffle the others to all possible positions.  This way you can ignore repeat letters.

// So start by counting the unique letters.

// Put the p at the start first and calculate the possible combinations of remaining letters.

// Maybe I could start by sorting the letters.
// Return that as the first string into the array.

// track positions each letter has been?



// ********************************* PATTERN FOR 3 LETTERS *************************************

// abc => flip 2, 3
// acb => flip 1, 2
// cab => flip 2, 3
// cba => flip 1, 2
// bca => flip 2, 3
// bac => flip 1, 2 - Back at the Beginning.


// ******************************* 4TH PATTERN ATTEMPT FOR 4 LETTERS - WORKS!!! ***************************************

// SET DEFG AS THE BEGINNING FOR REFERENCE.  I KNOW I HAVE 4 DIFFERENT LETTERS THAT NEED TO MOVE TO THE FIRST POSITION SO I HAVE 4 DIFFERENT MOVE FIRST TO LAST THAT I NEED TO MAKE.

// DEFG => 
// DEGF => FLIP 3, 4
// DGEF => FLIP 2, 3
// DGFE => FLIP 3, 4
// DFGE => FLIP 2, 3
// DFEG => FLIP 3, 4

      // DEFG => FLIP 2, 3 - BACK AT BEGINNING
// GDEF => MOVE LAST TO FIRST
// GDFE => FLIP 3, 4 - FLIP LAST POS.
// GFDE => FLIP 2, 3 
// GFED => FLIP 3, 4
// GEFD => FLIP 2, 3
// GEDF => FLIP 3, 4

      // GDEF => FLIP 2, 3 - BACK AT BEGINNING
// FGDE => FLIP 2, 3 - BACK AT BEGINNING, & MOVE LAST TO FIRST
// FGED => FLIP 3, 4
// FEGD => FLIP 2, 3
// FEDG => FLIP 3, 4
// FDEG => FLIP 2, 3
// FDGE => FLIP 3, 4

      // FGDE => FLIP 2, 3 - BACK AT BEGINNING
// EFGD => FLIP 2, 3 - BACK AT BEGINNING, & MOVE LAST TO FIRST
// EFDG => FLIP 3, 4
// EDFG => FLIP 2, 3
// EDGF => FLIP 3, 4
// EGDF => FLIP 2, 3
// EGFD => FLIP 3, 4

      // EFGD => FLIP 2, 3 - BACK AT BEGINNING
// DEFG => FLIP 2, 3 - BACK AT BEGINNING, & MOVE LAST TO FIRST, BACK AT TRUE BEGINNING

// WORKING!!!!



// ***********************************  CODE  *****************************************
function permutations(string) {
  var arr = [];
  // arr.push("hi")
  arr.push(string);
  // console.log(arr);
  // console.log(arr.slice(-1).pop().slice(-1).toString());
  // console.log(arr)
  // console.log(arr.slice(-1).pop().toString().slice(0));
  // console.log(arr)
  // flip last two
  var k = 3;
  if ( string.length > 3 ) { 
    k = 0;
  }
  // console.log(k); // 1 for 'defg'
  
  for (k; k < string.length; k++) {
    // move last to first...
    console.log("hi");
    // console.log(arr.slice(-1).pop());
    // console.log(arr.pop());
    
    // this doesn't manipulate the array, but does create duplicate entries.
    // arr.push(moveLastFirst(arr.slice(-1).pop()));
    // using only .pop() manipulates the array, but in a way that we want, removing duplicates.
    arr.push(moveLastFirst(arr.pop()));
    
    var i = 0;
    do { 
      // console.log(arr.slice(-1).pop());
      var one = flipLastTwo(arr.slice(-1).pop());
      // console.log(one);
      arr.push(one);
      var two = flipBeforeLastTwo(one);
      // console.log('hi')
      // console.log(two);
      arr.push(two);
      i++; 
    } while (i < 3);
  }
  
  // remove the duplicate abc
  // arr.pop();
  console.log(arr);
  uniq_arr = arr.filter(function(letter, idx, self) {
    return idx == self.indexOf(letter);
  })
  // console.log(uniq_arr);
  return uniq_arr;
}

// PH - WORKING!
// Move last letter to first position.
function moveLastFirst(string) {
  // console.log(string);
  var str_minus_last = string.slice(0, -1);
  // console.log(str_minus_last);
  var last_letter = string.charAt(string.length-1);
  // console.log(last_letter);
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

function permutationsFive(string) {
  var perms = [];
  var begOne = string.split().sort().join();
  var starts = [];
  starts.push( begOne );
  perms.push( begOne );
  console.log(starts);
  if (!starts.includes(begOne.slice(-1) + begOne.slice(0,-1))){
    console.log("hi")
  }
  
  for ( let i=1; i < string.length; i++ ) {
    // move last to first
    // set beginning
    // console.log(starts);
    starts.push( begOne.slice(-1) + begOne.slice(0,-1) );
    perms.push( begOne.slice(-1) + begOne.slice(0,-1) );
    console.log(starts);
    console.log(perms);
    
    function flipFourFive(){
      string.charAt(-1)
    };
    
    for (let j=1; j < string.length-1; j++) {
      
    }
    
  }
}


// DRIVER CODE

// console.log(flipLastTwo('abc'));  // WORKING!

// console.log(flipBeforeLastTwo('abc')); // WORKING!

// permutations('abc'); // WORKING!

// permutations('a'); // WORKING!

// permutations('ab'); // WORKING!!

// permutations('aa'); // WORKING!!

// permutations('defg'); // WORKING!!

// permutations('aabb'); // WORKING!!

permutations('abcde'); // 

// permutations('abacd'); //

// permutations('p'); // ['p']

// permutations('ph'); // ['ph', 'hp']

// permutations('pphh'); // ['pphh', 'phph', 'phhp', 'hpph', 'hphp', 'hhpp']




// PSEUDO CODE 

  // Set j as string.length - i factorial. This would be the permutations needed to move to the next step. j = 1.


// 1 // abcdefg => sort the string and add it to the array.

  // Start at the second to last position. // Set i as the second to last position. i = 2. j = 1

// 2 // abcdegf => take the last string added, take the last two letters and flip them.

  // Move to the third to last position.  // j + 1, j == i, i += 1, Set i as the 3rd to last position.

// 3 // abcdgef => Take original string, move last letter to be the 3rd from last letter to the end.
  // i = 3, j = 1, k = 1

  // Could use a j here and ++ to add until we hit the position where the i is... j = 1, i = 3 ? 
  // Keep track of the fact that the 2nd to last letter moved into third position, then the last letter...

// 2 // abcdgfe => take the last string added, take the last two letters and flip them.

  // k = 0, set k back to i-2


// 3-4 // abcdfeg => Take original string, move 2nd to last letter to be third from last letter to the end.
  
  // j = 2, i = 3, k = 1

// 2 // abcdfge => take the last string added, take the last two letters and flip them.

  // j = 2, i = 3, k = 0
  // when k = 0 && j = i-1, then i += 1, j = i-1, k = i-2
  // last 3 letters will have 3! possibilities = 3*2*1 = 6


// 5 // abcgdef => Take original string, move last letter to be 4th from last letter to the end.

  // now I have to move the last three letters... use a k = i-2 that subtracts each round?
  // j = 1, i = 4, k = 2
  // going until j = i-1 or 3.

// ? // abcgedf => flip 5 & 6
// ? // abcgefd => flip 6 & 7
// ? // abcgfed => flip 5 & 6
// ? // abcgfde => flip 6 & 7
// ? // abcgdfe => flip 5 & 6

// 5 // abcgdef => Take original string, move 2nd to last letter to be 4th from last letter to the end.

// ? // abcgedf => flip 5 & 6
// ? // abcgefd => flip 6 & 7
// ? // abcgfed => flip 5 & 6
// ? // abcgfde => flip 6 & 7
// ? // abcgdfe => flip 5 & 6



// abcdefg => 
// abcdegf => flip 6 & 7
// abcdgef => flip 5 & 6
// abcdgfe => flip 6 & 7
// abcdfge => flip 5 & 6
// abcdfeg => flip 6 & 7
// abcdefg == flip 5 & 6, but now equals the original string and it's time to move to the 4th from the end.

// abcedfg => flip 4 & 5
// abcefdg => flip 5 & 6
// abcefgd => flip 6 & 7
// abcegfd => flip 5 & 6
// abcegdf => flip 6 & 7
// abcedgf => flip 5 & 6
// abcedfg => flip 6 & 7, once again equals the original string and it's time to move the number in 4th from the end...


// ********************************* PATTERN FOR 3 LETTERS *************************************

// abc => flip 2, 3
// acb => flip 1, 2
// cab => flip 2, 3
// cba => flip 1, 2
// bca => flip 2, 3
// bac => flip 1, 2 - Back at the Beginning.

// ********************************* FAILED PATTERN FOR 4 LETTERS *************************************


// defg == length of 4, so 4! solutions = 4*3*2*1 = 24

// defg => sorted, first [0], 
// degf => flip 3 & 4, start from back
// dgef => flip 2 & 3, advance, 2nd [1]
// dgfe => flip 3 & 4, start from back
// dfge => flip 2 & 3, advance, 3rd [1]
// dfeg => flip 3 & 4, 

// fdeg => flip 1 & 2,
// fdge => flip 3 & 4
// fgde => flip 2 & 3,
// fged => flip 3 & 4,
// fegd => flip 2 & 3,
// fedg => flip 3 & 4

// efdg => flip 1 & 2, needs a trigger, has to happen twice
// efgd => flip 3 & 4
// egfd => flip 2 & 3
// egdf => flip 3 & 4
// edgf => flip 2 & 3
// edfg => flip 3 & 4

// MISSING COMBINATIONS FOR G

// ***************************** PATTERN ATTEMPT FOR 4 LETTERS ****************************************

// defg => 
// degf => flip 3, 4
// dgef => flip 2, 3

// gdef => flip 1, 2
// gdfe => flip 3, 4
// gfde => flip 2, 3

// fgde => flip 1, 2
// fged => flip 3, 4
// fegd => flip 2, 3

// efgd => flip 1, 2
// efdg => flip 3, 4
// edfg => flip 2, 3

// defg => flip 1, 2

// MISSING 3 COMBINATIONS FOR EVERY LETTER.

// ******************************* 3RD PATTERN ATTEMPT FOR 4 LETTERS **********************************

// DEFG => 
// EDFG => FLIP 1, 2
// EFDG => FLIP 2, 3
// EFGD => FLIP 3, 4

// EGFD => FLIP 2, 3
// EGDF => FLIP 3, 4

// GEDF => FLIP 1, 2
// GDEF => FLIP 2, 3
// GDFE => FLIP 3, 4

// GFDE => FLIP 2, 3
// GFED => FLIP 3, 4

// FGED => FLIP 1, 2
// FEGD => FLIP 2, 3
// FEDG => FLIP 3, 4

// FDEG => FLIP 2, 3
// FDGE => FLIP 3, 4

// DFGE => FLIP 1, 2
// DGFE => FLIP 2, 3
// DGEF => FLIP 3, 4

// DEGF => FLIP 2, 3

// MISSING 1 COMBINATION FOR EVERY LETTER

// ******************************* 4TH PATTERN ATTEMPT FOR 4 LETTERS - WORKS!!! ***************************************

// SET DEFG AS THE BEGINNING FOR REFERENCE.  I KNOW I HAVE 4 DIFFERENT LETTERS THAT NEED TO MOVE TO THE FIRST POSITION SO I HAVE 4 DIFFERENT MOVE FIRST TO LAST THAT I NEED TO MAKE.

// DEFG => MOVE FIRST TO LAST

// GDEF => MOVE LAST TO FIRST
// GDFE => FLIP 3, 4 - FLIP LAST POS.
// GFDE => FLIP 2, 3 
// GFED => FLIP 3, 4
// GEFD => FLIP 2, 3
// GEDF => FLIP 3, 4

      // GDEF => FLIP 2, 3 - BACK AT BEGINNING
// FGDE => FLIP 2, 3 - BACK AT BEGINNING, & MOVE LAST TO FIRST
// FGED => FLIP 3, 4
// FEGD => FLIP 2, 3
// FEDG => FLIP 3, 4
// FDEG => FLIP 2, 3
// FDGE => FLIP 3, 4

      // FGDE => FLIP 2, 3 - BACK AT BEGINNING
// EFGD => FLIP 2, 3 - BACK AT BEGINNING, & MOVE LAST TO FIRST
// EFDG => FLIP 3, 4
// EDFG => FLIP 2, 3
// EDGF => FLIP 3, 4
// EGDF => FLIP 2, 3
// EGFD => FLIP 3, 4

      // EFGD => FLIP 2, 3 - BACK AT BEGINNING
// DEFG => FLIP 2, 3 - BACK AT BEGINNING, & MOVE LAST TO FIRST
// DEGF => FLIP 3, 4
// DGEF => FLIP 2, 3
// DGFE => FLIP 3, 4
// DFGE => FLIP 2, 3
// DFEG => FLIP 3, 4

      // DEFG => FLIP 2, 3 - BACK AT BEGINNING, BACK AT ORIGINAL STRING / TRUE BEGINNING!!
// WORKING!!!!

// ****************************** 5 LETTER PATTERN 1ST ATTEMPT, USE WORKING 4 LETTER PATTERN *************************

// ABCDE => 

// EABCD => MOVE LAST TO FIRST
// EABDC => FLIP 4, 5
// EADBC => FLIP 3, 4
// EADCB => FLIP 4, 5
// EACDB => FLIP 3, 4
// EACBD => FLIP 4, 5

    // EABCD => FLIP 3, 4 - BACK AT BEGINNING
// EBACD => FLIP 3, 4 - BACK AT BEGINNING, THEN FLIP 2, 3
// EBADC => FLIP 4, 5
// EBDAC => FLIP 3, 4
// EBDCA => FLIP 4, 5
// EBCDA => FLIP 3, 4
// EBCAD => FLIP 4, 5

    // EBACD => FLIP 3, 4 - BACK AT BEGINNING
// EABCD => FLIP 3, 4 - BACK AT BEGINNING, FLIP 2, 3 - BACK EVEN FURTHER, FLIP 1, 2 



// ****************************** 5 LETTER PATTERN 2ND ATTEMPT *********************************************

// ABCDE => SET AS BEGINNING 1

// EABCD => MOVE LAST TO FIRST, SET AS BEGINNING 2
// EABDC => FLIP 4, 5
// EADBC => FLIP 3, 4
// EADCB => FLIP 4, 5
// EACDB => FLIP 3, 4
// EACBD => FLIP 4, 5

  // EABCD => FLIP 3, 4 - BACK AT BEGINNING
// EDABC => FLIP 3, 4 - BACK AT BEGINNING, MOVE LAST TO SECOND, SET AS NEW BEGINNING 3
// EDACB => FLIP 4, 5
// EDCAB => FLIP 3, 4
// EDCBA => FLIP 4, 5
// EDBCA => FLIP 3, 4
// EDBAC => FLIP 4, 5

  // EDABC => FLIP 3, 4 - BACK AT BEGINNING
// ECDAB => FLIP 3, 4 - BACK AT BEGINNING, MOVE LAST TO SECOND, SET AS NEW BEGINNING 3
// ECDBA => FLIP 4, 5
// ECBDA => FLIP 3, 4
// ECBAD => FLIP 4, 5
// ECABD => FLIP 3, 4
// ECADB => FLIP 4, 5

  // ECDAB => FLIP 3, 4 - BACK AT BEGINNING
// EBCDA => FLIP 3, 4 - BACK AT BEGINNING, MOVE LAST TO SECOND, SET AS NEW BEGINNING 3
// EBCAD => FLIP 4, 5
// EBACD => FLIP 3, 4
// EBADC => FLIP 4, 5
// EBDAC => FLIP 3, 4
// EBDCA => FLIP 4, 5

  // EBCDA => FLIP 3, 4 - BACK AT BEGINNING 3
  // EABCD => MOVE LAST TO SECOND - BACK AT BEGINNING 2, NOT AT BEGINNING 1
// DEABC => MOVE LAST TO FIRST, SET AS BEGINNING 2


// ******************************** 6 LETTER PATTERN 1ST ATTEMPT ****************************************

// ABCDEF => 

// FABCDE => MOVE LAST TO FIRST
// FABCED => FLIP 5, 6
// FABECD => FLIP 4, 5
// FABEDC => FLIP 5, 6
// FABDEC => FLIP 4, 5
// FABDCE => FLIP 5, 6

  // FABCDE => FLIP 4, 5 - BACK AT BEGINNING
// FAEBCD => FLIP 4, 5 - BACK AT BEGINNING, MOVE LAST TO SECOND
// FAEBDC => FLIP 5, 6
// FAEDBC => FLIP 4, 5
// FAEDCB => FLIP 5, 6
// FAECDB => FLIP 4, 5
// FAECBD => FLIP 5, 6

  // FAEBCD => FLIP 4, 5 - BACK AT BEGINNING


  // ...

  // FAEC


// ******************************** START DETERMINING PATTERN FOR 5 LETTERS *********************************

// abcde => sorted, first [0]
// abced => flip 4, 5
// abecd => flip 3, 4
// abedc => flip 4, 5
// abdec => flip 3, 4
// abdce => flip 4, 5

// 


// how do I know how many times I have to repeat for each flip?

// gdef => Move the last letter to the first and run it.
// 
// degf => flip 2 & 3,
// defg => flip 3 & 4, 
// gfde => flip 3 & 4
// g => flip 2 & 3

// edfg == flip 3 & 4, now equals or back to where we started...
// take last from array and... reverse it?

// gfde =>
// fgde => flip 1 & 2
// fdge => flip 2 & 3,
// fdeg => flip 3 & 4
// fedg => flip 2 & 3, 
// fegd => flip 3 & 4,
// fged => flip 2 & 3

// 

// degf => flip 1 & 2,
// dgef => flip 2 & 3,
// dgfe => flip 3 & 4,
// degf => flip 2 & 3, 
// 




// fegd => flip 4 & 5, have a new first letter
// fged => flip 5 & 6
// fgde => flip 6 & 7

// gfde => flip 4 & 5
// gdfe => flip 5 & 6
// gdef => flip 6 & 7

// dgef => flip 4 & 5
// degf => flip 5 & 6
// defg == flip 6 & 7, 



// last 4 letters will have 4! possibilities = 4*3*2*1 = 24



// hhimmpp
// hhimpmp
// hhi