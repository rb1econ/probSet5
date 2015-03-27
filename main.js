
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
	var nines;
	var fives;
	var coinCounter = 0;
	if(num>=11){
		var elevens = num/11;
		var afterEleven = num - (elevens*11)
		if(afterEleven>=9){
			enterNine(afterEleven);
		}
		else if(afterEleven>=5){
			enterFive(afterEleven);
		}
		else{
			// do something different here::
			return num;
		}
	}
	else if(num>=9){
		enterNine();
		var enterNine = function(afterEleven){
			nines = afterEleven/9;
			var afterNine = afterEleven - (nines*9);
			if(afterNine>=5){}
		};
	}
	else if(num>=5){
		var enterFive = function(){
			fives = newNum
		};
	}
	else{
		// for cases of 1 2 3 4, handle differently than return though..
		return num;
	}
	return parseInt(elevens) + parseInt(nines) + parseInt(fives) + parseInt(ones);
};