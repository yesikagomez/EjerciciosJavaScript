document.getElementById("comprobar").addEventListener("click", texto);

function texto()
{
    let palabra = document.getElementById('palabra').value;
    let valor;
    palabra = palabra.toLowerCase();
 
	// eliminamos los espacios en blanco
	palabra = palabra.replace(/ /g, "");
 
	for (var i=0;i<palabra.length;i++){
		if(palabra[i]!=palabra[palabra.length-i-1]){
			valor=false;
		}else{
            valor=true;
        }
	}
    
    if(valor==true)
    {
	    alert("Esto es palíndromo");
    }else{
        alert("Esto no es palíndromo");
    }
}
 
document.getElementById("convertir").addEventListener("click", Romanos);

function Romanos(){
    let num = document.getElementById('numero').value;
    num = parseInt(num);

    if (num > 3999999) { alert('Number is too big!'); return false; }
    if (num < 1) { alert('Number is too small!'); return false; }

    var result = '',
        ref = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'],
        xis = [1000,900,500,400,100,90,50,40,10,9,5,4,1];

    if (num <= 3999999 && num >= 4000) {
        num += ''; // need to convert to string for .substring()
        result = '<label style="text-decoration: overline;">'+convert(num.substring(0,num.length-3))+'</label>';
        num = num.substring(num.length-3);
    }

    for (x = 0; x < ref.length; x++){
        while(num >= xis[x]){
            result += ref[x];
            num -= xis[x];
        }
    }
    alert (result);
}

document.getElementById("verificar").addEventListener("click", verificarTelefono);

function verificarTelefono(){
    let numeroTelefono = document.getElementById('telefono').value;
    let valor;
    var found = numeroTelefono.search(/^(\+{1}\d{2,3}\s?[(]{1}\d{1,3}[)]{1}\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}$/);
    if(found > -1) {
        valor= true;
    }
    else {
        valor= false;
    }

    alert(valor);
}