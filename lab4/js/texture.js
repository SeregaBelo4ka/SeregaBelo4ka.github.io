
var arr = ['url("texture/weather/weather.png")', 
'url("texture/new_year_background/new_year_background.png")', 
'url("texture/paisley/paisley.png")', 
'url("texture/swirl_pattern/swirl_pattern.png")']; 
var i = 0; 
function getPath () { 
i = (i==arr.length-1)? 0: i+1; 
return arr[i]; 
};
function changeTexture (){ 
document.body.style.backgroundImage = getPath(); 
};
setInterval(changeTexture, 7000);
