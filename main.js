
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
	var splitd = str.split('');
	var counter = 0;
	splitd.map(function(let){
		if(let === 'a' || let ==='i'||let ==='e'||let ==='i'||let ==='o'||let ==='u'||let ==='y'){
			console.log(let);
			counter++;
		}
	});
	return counter
};

console.log(vowelCount('misalabam asis arkan sass ipmiss ouripi'))