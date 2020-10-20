$(document).ready(function(){
	
	var goods = [
		{
			id: 1,
			name: 'Blond',
			url: 'img/Cinderella.jpg'
		},
		{
			id: 2,
			name: 'Red',
			url: 'img/ariel.png'
		},
		{
			id: 3,
			name: 'Black',
			url: 'img/moana.jpg'
		},
		{
			id: 4,
			name: 'Jasmin',
			url: 'img/jasmin.jpg'
		},
		{
			id: 5,
			name: 'White',
			url: 'img/rapunccel.jpg'
		}
	];
	
	var curentId = 0;
		
	//$('.login-popup').hide();
	
	$('.login-popup .close').click(function(){
		$('.login-popup').hide();
	});
	
	$('.goods.first .add').click(function(){
		var newName = $('.goods.first .new-image-name').val();
		var newUrl = $('.goods.first .new-image-url').val();
		
		var good = {
			id: goods.sort(x => -1 * x.id)[0].id + 1,
			name: newName,
			url: newUrl
		};
		goods.push(good);
		refreshGoods();
	});

	$('.left-menu .refresh').click(function(){
		refreshGoods();
	});
	
	
	$(".right") .click(function(){
		curentId++;
		if (curentId == goods.length ){
			curentId = 0;
		}
		var good = goods[curentId];
		$(".center-image").attr('src', good.url);
		
		
	});
	
	$(".left") .click(function(){
		curentId--;
		if (curentId < 0){
			curentId = goods.length -1;
		}
		var good = goods[curentId];
		$(".center-image").attr('src', good.url);
		
		updateCarousel();
	});
	
	
	
	function filterGoods(oldGoods){
		var textFilter = $('.left-menu .request').val();
	
		var newGoods = oldGoods.filter(function (good){
			if (good.name.indexOf(textFilter) > -1){
				return true;
			}
			return false;
		});
		return newGoods;
	}
		
	function updateCarousel(){
		
		var leftIndex = calcIndex(curentId - 1);
		var rightIndex = calcIndex(curentId + 1);
	
		if (leftIndex < 0){
			leftIndex = goods.length -2;
		} 
		var good = goods[leftIndex];
		$(".left-image").attr("src", good.url);
		
		
	};
	
	function calcIndex(index){
		index %=goods.length;
		if (index < 0){
			index = index + goods.length;
		}
	return index;
	};
	
	
	function sortGoods(copyGoods){
		
		var register = $("[name=register]:checked").val();
										
		var userCheckSortDir = $("[name=sort]:checked").val();
		
		var magic = userCheckSortDir == "Up"
			? 1
			: -1;
		
		var newGoods = copyGoods.sort(function(a, b){
		  var first = a.name;
		  var second = b.name;
		  
		  if (register == "without"){
			  first = first.toLowerCase();
			  second = second.toLowerCase();
		  }
			if (first > second){
				return 1 * magic;
			}
			if (first < second) {
				return -1 * magic;
			}
			return 0;
		});
		
		return newGoods;
	}
	
	$(".left-menu .request").keyup(function(){
		refreshGoods()
	});
	
	function refreshGoods(){
		$(".content .goods:not(.first)").remove();
		
		var filteredGoods = filterGoods(goods);
		
		var filteredAndSortedGoods = sortGoods(filteredGoods);
		
		drawGoods(filteredAndSortedGoods)
			
	}
	
	function drawGoods(copyGoods){
		for	(var i = 0; i< copyGoods.length; i++){
			var good = copyGoods[i];
			var goodsDiv = $('<div>');
		
			goodsDiv.addClass('goods');
			goodsDiv.attr("data-id", good.id);
			goodsDiv.click(fullScreen);
						
			var divName = $('<div>');
			divName.text(good.name);
			
			var divImg = $('<div>');
			divImg.addClass('image');
			var img = $('<img>');
			img.attr('src', good.url);
			divImg.append(img);
			
			goodsDiv.append(divName);
			goodsDiv.append(divImg);
			
			$('.content').append(goodsDiv);
		}
	}
	
	function fullScreen(){
		$('.data-id').empty();
		
		$('.login-popup').show();
		var a = $(this).attr('data-id');
		for (var i = 0; i< goods.length; i++){
			if (goods[i].id == a){
				var goodsDiv = $('<div>');
				
				var img = $('<img>');
				img.attr('src', goods[i].url);
				goodsDiv.append(img);
				
				$('.data-id').append(goodsDiv);
			}
			
		}
	}
		
});