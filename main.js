
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

console.log(vowelCount('mIsalAbam AsisArkAn sAss ipmiss ouripI'))


// 1 5 7 9 11
var coinDet = function(num){
	var coinCounter = 0;
	if(num/11>=1){
		var elevens = num/11;
		var newNum = num - (elevens*11)
		if(newNum>=9){
			enterNine();
		}
		else if(newNum>=5){
			enterFive();
		}
		else{return num;}
	}
	else if(num/9>=1){
		enterNine();
		var enterNine = function(newNum){
			var nine = newNum/9;

		};
	}
	else if(num/5>=1){
		var enterFive = function(){

		};
	}
	else{return num;}
	return parseInt(elevens) + parseInt(nines) + parseInt(fives) + parseInt(ones);
};