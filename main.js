var alphabetSoup = function (string){
	var splitd = string.split('');
	var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
	var numberatized=[];
	alphabet.map(function(letter){
		splitd.map(function(stringLet){
			if(letter === stringLet){
				numberatized.push(letter);
			}
		});

	});
	return numberatized;
};

console.log(alphabetSoup("howdeosapersonbehavereationalconditional"));
			


			