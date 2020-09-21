$(document).ready(function(){
	console.log(1);
	
	$(".login-popup .icon-close").click(function(){
		$(".login-popup").hide();	
	});

	$(".coin .process").click(function(){
		var data = $(".coin .data").val() - 0;
		
		var coinData = calcCoinText(data);
		
		$(".coin .result").text(coinData);
	});
	
	$(".text .process").click(function(){
		var data = $(".text .data").val();
		
		var textData = reverText(data);
		
		$(".text .result").text(textData);
	});
	
	$(".word .process").click(function(){
		var data = $(".word .data").val();
		
		var textData = numberWord(data);
		
		$(".word .result").text(textData);
	});
	
	
	$(".rules .process").click(function(){
		var data = $(".rules .data").val();
		
		var rulesData = rulesSlash(data);
		
		$(".rules .result").text(rulesData);
	});
	
	function rulesSlash(text){
		var count = 0;
		var bra = [
			["(", ")"],
			["<", ">"],
			["{", "}"]	
		];
		
		for(var iText = 0; iText < text.length; iText++){
			var symbol = text[iText];
			for(var iBra = 0; iBra < bra.length; iBra++){
				var onePairofBra = bra[iBra];
				if (onePairofBra[0] == symbol){
					count++;
				}
			}
		}
		
		return count;
		
	}
	
	
	
	function numberWord(text){
		var number = 1;

		for(var i = 0; i < text.length; i++){
			if (text[i] == " "){
				number = number + 1;
			}
			
		}
		
		
		return number;
		
	}
	
	function reverText(word){
		var result = [];
		
		for(var i = word.length - 1; i >= 0; i--){
			result.push( word[i] );
		}
		
		return result.join("");
	}
	
	
	
	function calcCoinText(number){
		if (number < 11)
			return Numbers0To10[number];
		if (number < 20)
			return Numbers11To19[number -11];
		
	
		var array = numberToArray(number);
		var sent = array[2];
		result = sents [sent - 1];
		var ten = array[1];
		result += tens[ten - 2];
		var numberOne = array[0];
		if (numberOne > 0){
			result +=" " + Numbers0To10[numberOne];
		}
		return result;
	}

	function numberToArray(fullNumber){
		var array = [];
		
		while(fullNumber > 0){
			var number = fullNumber % 10;
			array.push(number);
			fullNumber = (fullNumber - number) / 10;
		}
		return array;
	}
		
		
	var Numbers0To10 = ["ноль","один","два", "три","четыре","пять","шесть","семь","восемь","девять","десять"];
	var Numbers11To19 = ["одиннадцать","двенадцать","тринадцать","четырнадцать","пятнадцать","шестнадцать","семнадцать","восемнадцать","девятнадцать"];
	var tens = ["двадцать","тридцать","сорок","пятьдесят","шестьдесят","семьдесят","восемьдесят","девяноста"];
	var sents = ["сто","двести","триста","четыреста","пятьсот","шестьсот","семьсот","восемьсот","девятьсот"]
	
	
	$(".encrypt .process").click(function(){
		var data = $(".encrypt .data").val() - 0;
		
		var encryptData = encryptNumber(data);
		
		$(".encrypt .result").text(encryptData);
		
	});
	
	function encryptNumber(data){
		var numbersText = ["ноль","один","два", "три","четыре","пять","шесть","семь","восемь","девять"]
		var encryptData = numbersText[data].length;
		return encryptData;
	}
	
});

// var condition0 = true;
// var condition1 = condition0 && false;

// var condition2 = condition0 || condition1;

// var condition3 = condition2 || (condition1 && condition0);

// var condition3 = !(condition1 && condition0);


// var num1 = 2;
// var num2 = 15;

// //7
// var answer = sum(num1, num2);

// //75
// var answer2 = sum(60, num2);

// var answer3 = sum(50, 100);

// //167 - 1050
// var answer4 = sum(answer, answer3) - sum(5, 7);

// var answer4 = sum(sum(60, 80), sum(1, 1)) - sum(5, 7);

// function sum(anyNumber1, anyNumber2){
	// return anyNumber1 + anyNumber2;
// }


















