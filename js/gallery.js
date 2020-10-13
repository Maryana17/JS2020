$(document).ready(function(){
	
	var goods = [
		{
			name: 'Blond',
			url: 'https://upload.wikimedia.org/wikipedia/ru/thumb/f/f5/Cinderella_disney_princess.jpg/300px-Cinderella_disney_princess.jpg'
		},
		{
			name: 'Red',
			url: 'https://e7.pngegg.com/pngimages/846/621/png-clipart-ariel-disney-princess-frames-graph-disney-princess-disney-princess-fictional-character.png'
		},
		{
			name: 'Black',
			url: 'https://c7.hotpng.com/preview/285/923/688/united-states-moana-hei-hei-the-rooster-character-the-walt-disney-company-moana.jpg'
		}
	];
	
		
	$('.login-popup').hide();
	
	$('.login-popup .close').click(function(){
		$('.login-popup').hide();
	});
	
	$('.goods.first .add').click(function(){
		var newName = $('.goods.first .new-image-name').val();
		var newUrl = $('.goods.first .new-image-url').val();
		
		var good = {
			name: newName,
			url: newUrl
		};
		goods.push(good);
		refreshGoods();
	});

	$('.left-menu .refresh').click(function(){
		refreshGoods();
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
});