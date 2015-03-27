
var alphabetSoup = function (string){
	// This rocks because there is no sort method called. 
	// The tized array is populated with letters that are 
	// already alphabetized because I map over the alphbet array first.
	// Pretty cool.
	var splitd = string.split('');
	var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
	var tized=[];
	alphabet.map(function(letter){
		splitd.map(function(stringLet){
			if(letter === stringLet){
				tized.push(letter);
			}
		});

	});
	return tized;
};

// console.log(alphabetSoup("howdeosapersonbehavereationalconditional"));
			

var vowelCount = function(str){
	var splitd = str.toLowerCase().split('');
	var counter = 0;
	splitd.map(function(let){
		if(let === 'a' || let ==='i'||let ==='e'||let ==='i'||let ==='o'||let ==='u'||let ==='y'){
			console.log(let);
			counter++;
		}
	});
	return counter
};

// console.log(vowelCount('mIsalAbam AsisArkAn sAss ipmiss ouripI'))


// 1 5 7 9 11
var coinDet = function(num){
	var ones;
	var fives;
	var sevens;
	var nines;
	if(num>=11){
		var elevens = Math.floor(num/11);
		// console.log('elevens',elevens);
		var afterEleven = num - (elevens*11)
		if(afterEleven>=9){
			enterNine(afterEleven);
		}
		else if(afterEleven>=5){
			enterFive(afterEleven);
		}
		else{
			ones = num;
		}
	}
	else if(num>=9){
		enterNine(num);
		var enterNine = function(afterEleven){
			nines = Math.floor(afterEleven/9);
			var afterNine = afterEleven - (nines*9);
			if(afterNine>=5){}
			else{ones = afterNine;}
		};
	}
	else if (num>=7){
		enterSeven(num);
		var enterSeven = function(afterNine){
			sevens = Math.floor(afterNine/7);
			afterSeven = afterNine - (sevens*7);
		};
	}
	else if(num>=5){
		enterFive(num);
		var enterFive = function(afterSeven){
			fives = Math.floor(newNum/5);
			var afterFive = afterSeven - (fives*5);
			ones = afterFive;
		};
	}
	else{
		ones = num;
	}
	// console.log('ones',ones)
	return elevens + nines + fives + ones;
};
// console.log(coinDet(12));




var romanCoin = function(num){
	var ones;
	var sevens;
	var nines;
	if(num>=11){
		var elevens = Math.floor(num/11);
		var afterEleven = num - elevens*11;
		if(afterEleven>=9){
			enterNine(afterEleven);
		}
		else if(afterEleven>=7){
			enterSeven(afterEleven);
		}
		else if(afterEleven>=5){
			enterFive(afterEleven);
		}
		else{ones = afterEleven;}
	}
	else if(num>=9){
		enterNine(num);
		function enterNine(afterEleven){
			nines = Math.floor(afterEleven/9);
			var afterNine = afterEleven - nines*9;
			enterSeven(afterNine);
		}
	}
	else if(num>=7){
		enterSeven(num);
		function enterSeven(afterNine){
			sevens = Math.floor(afterNine);
			var afterSeven = afterNine - sevens*7;
			ones = afterSeven;
		}
	}
	else{ones = num}
	return elevens + nines + sevens + ones;
};

console.log(romanCoin(28));
