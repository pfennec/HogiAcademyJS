$(document).ready(function(){
    $('#zero').click(function(){
        document.forms.display.value +=0;
    })
    $('#un').click(function(){
        document.forms.display.value +=1;
    })

$('#deux').click(function(){
    document.forms.display.value +=2;
})
$('#trois').click(function(){
    document.forms.display.value +=3;
})
$('#quatre').click(function(){
    document.forms.display.value +=4;
})
$('#cinq').click(function(){
    document.forms.display.value +=5;
})
$('#six').click(function(){
    document.forms.display.value +=6;
})
$('#sept').click(function(){
    document.forms.display.value +=7;
})
$('#huite').click(function(){
    document.forms.display.value +=8;
})
$('#neuf').click(function(){
    document.forms.display.value +=9;
})

$('#div').click(function(){
    document.forms.display.value +='/';
})
$('#add').click(function(){
    document.forms.display.value +='+';
})
$('#sous').click(function(){
    document.forms.display.value +='-';
})
$('#virg').click(function(){
    document.forms.display.value +='.';
})
$('#mult').click(function(){
    document.forms.display.value +='*';
})
$('#supp').click(function(){
    document.forms.display.value ='';
})
$('#result').click(function(){
    document.forms.display.value =
    eval(document.forms.display.value);
});
})
