var output = document.getElementById("output");

// **************font family changing part**************
function fontPopins(){
    output.style.fontFamily = 'Poppins', sans-serif;
}
function fontRoboto(){
    output.style.fontFamily = 'Roboto', sans-serif; 
}
function fontHachi(){
    output.style.fontFamily = 'Hachi Maru Pop', cursive;
}
function fontDancing(){
    output.style.fontFamily = 'Dancing Script', cursive;
}
function fontSans(){
    output.style.fontFamily = 'sans-serif';
}



// ***************font bold/underlined/italic part**************

function fontBold(){
    if(output.style.fontWeight != '700'){
        output.style.fontWeight = '700';
    }
    else{
        output.style.fontWeight = 'normal';
    }
}
function textUnderline(){
    if(output.style.textDecoration != 'underline'){
        output.style.textDecoration = 'underline';
    }
    else{
        output.style.textDecoration = 'none';
    }
}
function textItalic(){
    if(output.style.fontStyle != 'italic'){
        output.style.fontStyle = 'italic';
    }
    else{
        output.style.fontStyle = 'normal';
    }
}



// ************font color part ****************
// var  colorValue = document.getElementById("color-code").value; 
// console.log(colorValue);
// function fontColor(){
//     output.value.style.color = colorValue;
// }