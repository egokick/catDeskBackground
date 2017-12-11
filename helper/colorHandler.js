var hexColor1 = 0x42eef4;
var hexColor2 = 0x46f441;

//blue - purple gradient
var color1 = [66,232,244]; // BLUE
var color2 = [204,10,181]; // Green

function colorGradient() {
	
	if (movementDirection > 0)
	{
		return hexColor1;
	}
	else
	{
		return hexColor2;
	}
}


function byte2Hex(n)
  {
    var nybHexString = "0123456789ABCDEF";
    return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
  }

 function RGB2Color(r,g,b)
  {
    return '0x' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
  }

function refreshGlobalVariables(){
		i+= 0.1;
}

function midRGB(){

	var rgb = [0,0,0];

	 rgb[0] = ((color1[0] + color2[0]) / 2);
	 rgb[1] = ((color1[1] + color2[1]) / 2);
	 rgb[2] = ((color1[2] + color2[2]) / 2);
	
	return rgb;
}

function colorAmplitude(){
	return midRGB();
}

function gradientColorRGB(i){
	var frequency = .25;

//https://stackoverflow.com/questions/5731863/mapping-a-numeric-range-onto-another
// slope = (output_end - output_start) / (input_end - input_start)
// output = output_start + slope * (input - input_start)

	var slope = [(color1[0] - color2[0]) / (3-1)
	, (color1[1] - color2[1]) / (3-1)
	, (color1[2] - color2[2]) / (3-1)];

//	var outputTST = color2[0] + slope[0] * (1.5 - 1);

	var rgb = [color2[0] + slope[0] * ( (Math.sin(i * frequency)+2) - 1)
	, color2[1] + slope[1] * ( (Math.sin(i * frequency)+2) - 1)
	, color2[2] + slope[2] * ( (Math.sin(i * frequency)+2) - 1)];

	return rgb;
}


function gradientColorHEX(i)
{
	return rgbToHex(gradientColorRGB(i));
}

function rgbToHex(rgb){
	var hex = '0x' + byte2Hex(rgb[0]) + byte2Hex(rgb[1]) + byte2Hex(rgb[2]);
	
	return hex;
}


function byte2Hex(n)
  {
    var nybHexString = "0123456789ABCDEF";
    return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
  }


function sinWave(x){

return Math.sin(x);
}
