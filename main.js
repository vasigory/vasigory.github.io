window.onload= function(){
var 
control_1 = document.getElementById('control__item-1'),
control_2 = document.getElementById('control__item-2'),
control_3 = document.getElementById('control__item-3'),
control_4 = document.getElementById('control__item-4'),
control_5 = document.getElementById('control__item-5'),
item_1 = document.getElementById('item__1'),
item_2 = document.getElementById('item__2'),
item_3 = document.getElementById('item__3'),
item_4 = document.getElementById('item__4'),
item_5 = document.getElementById('item__5');

document.querySelector('#home__main-text').style.top = '0';

control_1.onmouseover = function(){
item_1.style.display = 'block';
item_1.style.opacity = '1.0';
};

control_1.onmouseout = function(){
item_1.style.display = 'none';
item_1.style.opacity = '0.0';
};

control_2.onmouseover = function(){
item_2.style.display = 'block';
item_2.style.opacity = '1.0';
};

control_2.onmouseout = function(){
item_2.style.display = 'none';
item_2.style.opacity = '0.0';
};

control_3.onmouseover = function(){
item_3.style.display = 'block';
item_3.style.opacity = '1.0';
};

control_3.onmouseout = function(){
item_3.style.display = 'none';
item_3.style.opacity = '0.0';
};



$("#control__item-1").click(function(){
document.querySelector('.home').style.display = "block";
document.querySelector('.solar__system').style.display = "none";
document.querySelector('.planets').style.display = "none";
});

$("#control__item-2").click(function(){
document.querySelector('.solar__system').style.display = "block";
document.querySelector('.home').style.display = "none";
document.querySelector('.planets').style.display = "none";
});

$("#control__item-3").click(function(){
document.querySelector('.solar__system').style.display = "none";
document.querySelector('.home').style.display = "none";
document.querySelector('.planets').style.display = "block";
});




$("#planets__item-1").click(function(){
document.querySelector('.mercury').style.display = "block";
document.querySelector('.venus').style.display = "none";
document.querySelector('.earth').style.display = "none";
document.querySelector('.mars').style.display = "none";
document.querySelector('.jupiter').style.display = "none";
document.querySelector('.saturn').style.display = "none";
document.querySelector('.uranus').style.display = "none";
document.querySelector('.neptune').style.display = "none";
});

$("#planets__item-2").click(function(){
document.querySelector('.mercury').style.display = "none";
document.querySelector('.venus').style.display = "block";
document.querySelector('.earth').style.display = "none";
document.querySelector('.mars').style.display = "none";
document.querySelector('.jupiter').style.display = "none";
document.querySelector('.saturn').style.display = "none";
document.querySelector('.uranus').style.display = "none";
document.querySelector('.neptune').style.display = "none";
});

$("#planets__item-3").click(function(){
document.querySelector('.mercury').style.display = "none";
document.querySelector('.venus').style.display = "none";
document.querySelector('.earth').style.display = "block";
document.querySelector('.mars').style.display = "none";
document.querySelector('.jupiter').style.display = "none";
document.querySelector('.saturn').style.display = "none";
document.querySelector('.uranus').style.display = "none";
document.querySelector('.neptune').style.display = "none";
});

$("#planets__item-4").click(function(){
document.querySelector('.mercury').style.display = "none";
document.querySelector('.venus').style.display = "none";
document.querySelector('.earth').style.display = "none";
document.querySelector('.mars').style.display = "block";
document.querySelector('.jupiter').style.display = "none";
document.querySelector('.saturn').style.display = "none";
document.querySelector('.uranus').style.display = "none";
document.querySelector('.neptune').style.display = "none";
});

$("#planets__item-5").click(function(){
document.querySelector('.mercury').style.display = "none";
document.querySelector('.venus').style.display = "none";
document.querySelector('.earth').style.display = "none";
document.querySelector('.mars').style.display = "none";
document.querySelector('.jupiter').style.display = "block";
document.querySelector('.saturn').style.display = "none";
document.querySelector('.uranus').style.display = "none";
document.querySelector('.neptune').style.display = "none";
});

$("#planets__item-6").click(function(){
document.querySelector('.mercury').style.display = "none";
document.querySelector('.venus').style.display = "none";
document.querySelector('.earth').style.display = "none";
document.querySelector('.mars').style.display = "none";
document.querySelector('.jupiter').style.display = "none";
document.querySelector('.saturn').style.display = "block";
document.querySelector('.uranus').style.display = "none";
document.querySelector('.neptune').style.display = "none";
});

$("#planets__item-7").click(function(){
document.querySelector('.mercury').style.display = "none";
document.querySelector('.venus').style.display = "none";
document.querySelector('.earth').style.display = "none";
document.querySelector('.mars').style.display = "none";
document.querySelector('.jupiter').style.display = "none";
document.querySelector('.saturn').style.display = "none";
document.querySelector('.uranus').style.display = "block";
document.querySelector('.neptune').style.display = "none";
});

$("#planets__item-8").click(function(){
document.querySelector('.mercury').style.display = "none";
document.querySelector('.venus').style.display = "none";
document.querySelector('.earth').style.display = "none";
document.querySelector('.mars').style.display = "none";
document.querySelector('.jupiter').style.display = "none";
document.querySelector('.saturn').style.display = "none";
document.querySelector('.uranus').style.display = "none";
document.querySelector('.neptune').style.display = "block";
});



};

function text_one(){
	document.getElementById('text__1').style.opacity = "1.0";
	document.getElementById('text__2').style.opacity = "0.0";
}

function text_two(){
	document.getElementById('text__1').style.opacity = "0.0";
	document.getElementById('text__2').style.opacity = "1.0";
}

function text_one_solar(){
	document.getElementById('solar__text-one').style.opacity = "1.0";
	document.getElementById('solar__text-two').style.opacity = "0.0";
}

function text_two_solar(){
	document.getElementById('solar__text-one').style.opacity = "0.0";
	document.getElementById('solar__text-two').style.opacity = "1.0";
}