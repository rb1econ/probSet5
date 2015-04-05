
// var alphabetSoup = function (string){
// 	// This rocks because there is no sort method called. 
// 	// The tized array is populated with letters that are 
// 	// already alphabetized because I map over the alphbet array first.
// 	// Pretty cool.
// 	var splitd = string.split('');
// 	var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
// 	var tized=[];
// 	alphabet.map(function(letter){
// 		splitd.map(function(stringLet){
// 			if(letter === stringLet){
// 				tized.push(letter);
// 			}
// 		});

// 	});
// 	return tized;
// };

// // console.log(alphabetSoup("howdeosapersonbehavereationalconditional"));
			

// var vowelCount = function(str){
// 	var splitd = str.toLowerCase().split('');
// 	var counter = 0;
// 	splitd.map(function(let){
// 		if(let === 'a' || let ==='i'||let ==='e'||let ==='i'||let ==='o'||let ==='u'||let ==='y'){
// 			console.log(let);
// 			counter++;
// 		}
// 	});
// 	return counter
// };

// // console.log(vowelCount('mIsalAbam AsisArkAn sAss ipmiss ouripI'))


// // A function that tells you the minimum number of coins your total money value can be converted to if the coins are in denominations of 1, 5, 7, 9, 11. First pull out the 11s, then 9s if any exist etc...
// var romanCoin = function(num){
// 	var ones=0;
// 	var fives=0;
// 	var sevens=0;
// 	var nines=0;
// 	var elevens=0;
// 	if(num>=11){
// 		var elevens = Math.floor(num/11);
// 		var afterEleven = num - elevens*11;
// 		if(afterEleven>=9){
// 			enterNine(afterEleven);
// 		}
// 		else if(afterEleven>=7){
// 			enterSeven(afterEleven);
// 		}
// 		else if(afterEleven>=5){
// 			enterFive(afterEleven);
// 		}
// 		else{ones = afterEleven;}
// 	}
// 	else if(num>=9){
// 		enterNine(num);
// 		function enterNine(afterEleven){
// 			nines = Math.floor(afterEleven/9);
// 			var afterNine = afterEleven - nines*9;
// 			enterSeven(afterNine);
// 		}
// 	}
// 	else if(num>=7){
// 		enterSeven(num);
// 		function enterSeven(afterNine){
// 			sevens = Math.floor(afterNine/7);
// 			var afterSeven = afterNine - sevens*7;
// 			ones = afterSeven;
// 		}
// 	}
// 	else if(num>=5){
// 		enterFive(num);
// 		function enterFive(afterSeven){
// 			fives = Math.floor(afterSeven/5);
// 			var afterFive = afterSeven - fives*5;
// 			ones = afterFive;
// 		};
// 	}
// 	else{ones = num}
// 	nines = parseInt(nines);
// 	sevens = parseInt(sevens);
// 	console.log('11', elevens, 'nines', nines, '7', sevens, '5', fives, '1', ones)
// 	return elevens + nines + sevens + ones;
// };

// // console.log('typeof romanCoin()',typeof romanCoin(28));

// var theOutput = romanCoin(29);

// $('.coiner').append('<p>'+parseInt(theOutput)+'</p>');

// var LetterChanges = function (str) { 
// 	var charray = [];
//   var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//   var changed = str.split('').map(function(e){
//     var index = alphabet.indexOf(e);
//     console.log("index of " + e +"", index);
//     console.log("index plus " , alphabet[index+1])
//    	charray.push(alphabet[index+1]);
//   });
//   return charray.join(''); 
         
// }
// console.log(LetterChanges("hello"));

function FirstFactorial(num) { 
	var n = [];
	for(var i = 1; i <=num; i++){
		n.push(i);
	}
	// console.log(n);
	var multiplier = 1;
	n.map(function(item){
		multiplier = multiplier*item;
	});
	// console.log(multiplier);
  // code goes here  
  return multiplier; 
         
}
console.log(FirstFactorial(8));