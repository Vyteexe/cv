let titulo1 = document.getElementById("tittle1");
let titulo2 = document.getElementById("tittle2");
let titulo3 = document.getElementById("tittle3");
let proyectos = document.getElementById("empezarProyectos");
let derecha = document.getElementById('arrowderecha');
let izquierda = document.getElementById('arrowizquierda')
titulo1.style.backgroundColor = "rgb(214, 214, 214)";
let verProyectos = document.getElementById('verproyectos');
let verHabilidades = document.getElementById('verhabilidades');
window.alert('La página no fue creada con responsive web design. Para mejor experiencia abre la página en el navegador de tu computadora');


titulo2.addEventListener('click',function(){
    document.getElementById("textos").style.display = "none";
    document.getElementById("textos2").style.display = "block";
    document.getElementById("textos3").style.display = "none";
    titulo1.style.backgroundColor = "aliceblue";
    titulo2.style.backgroundColor = "rgb(214, 214, 214)";
    titulo3.style.backgroundColor = "aliceblue";
});

titulo3.addEventListener('click',function(){
    document.getElementById("textos").style.display = "none";
    document.getElementById("textos2").style.display = "none";
    document.getElementById("textos3").style.display = "block";
    titulo1.style.backgroundColor = "aliceblue";
    titulo2.style.backgroundColor = "aliceblue";
    titulo3.style.backgroundColor = "rgb(214, 214, 214)";
});

titulo1.addEventListener('click',function(){
    document.getElementById("textos").style.display = "block";
    document.getElementById("textos2").style.display = "none";
    document.getElementById("textos3").style.display = "none";
    titulo1.style.backgroundColor = "rgb(214, 214, 214)";
    titulo2.style.backgroundColor = "aliceblue";
    titulo3.style.backgroundColor = "aliceblue";
});


verProyectos.addEventListener('click',function(){
    document.getElementById("textos").style.display = "none";
    document.getElementById("textos2").style.display = "block";
    document.getElementById("textos3").style.display = "none";
    titulo1.style.backgroundColor = "aliceblue";
    titulo2.style.backgroundColor = "rgb(214, 214, 214)";
    titulo3.style.backgroundColor = "aliceblue";
});

verHabilidades.addEventListener('click',function(){
    document.getElementById("textos").style.display = "none";
    document.getElementById("textos2").style.display = "none";
    document.getElementById("textos3").style.display = "block";
    titulo1.style.backgroundColor = "aliceblue";
    titulo2.style.backgroundColor = "aliceblue";
    titulo3.style.backgroundColor = "rgb(214, 214, 214)";
});



proyectos.addEventListener('click',function(){
    document.getElementById('encabezadonone').style.display = "none";
    document.getElementById('parrafo2none').style.display = "none";
    document.getElementById('oculto1').style.display = "block";
    document.getElementById('oculto2').style.display = "block";
    document.getElementById('imagenoculta1').style.display = "block";
    derecha.style.display = "block";
});


let contador = 0;

derecha.addEventListener('click',function(){
    contador += 1;
    console.log(contador)
    if(contador ==1){

    document.getElementById('imagenoculta1').style.display = "none";
    document.getElementById('imagenoculta2').style.display = "block";
    document.getElementById('oculto1').style.display = "none";
    document.getElementById('oculto2').style.display = "none";
    document.getElementById('oculto3').style.display = "block";
    document.getElementById('oculto4').style.display = "block";
    izquierda.style.display = "block";
    
    };
    if(contador == 2){
        document.getElementById('imagenoculta2').style.display = "none";
        document.getElementById('imagenoculta3').style.display = "block";
        document.getElementById('imagenoculta4').style.display = "block";
        document.getElementById('oculto3').style.display = "none";
        document.getElementById('oculto4').style.display = "none";
        document.getElementById('oculto5').style.display = "block";
        document.getElementById('oculto6').style.display = "block";
    }
    if(contador == 3){
        document.getElementById('imagenoculta3').style.display = "none";
        document.getElementById('imagenoculta4').style.display = "none";
        document.getElementById('imagenoculta5').style.display = "block";
        document.getElementById('imagenoculta6').style.display = "block";
        document.getElementById('oculto5').style.display = "none";
        document.getElementById('oculto6').style.display = "none";
        document.getElementById('oculto7').style.display = "block";
        document.getElementById('oculto8').style.display = "block";
        derecha.style.display = "none";
    }
    
    

});

izquierda.addEventListener('click',function(){
    contador -= 1;
    console.log(contador)
    if(contador == 0){
        document.getElementById('imagenoculta1').style.display = "block";
        document.getElementById('imagenoculta2').style.display = "none";
        document.getElementById('oculto1').style.display = "block";
        document.getElementById('oculto2').style.display = "block";
        document.getElementById('oculto3').style.display = "none";
        document.getElementById('oculto4').style.display = "none";
        izquierda.style.display = "none";
    }
    if(contador == 1){
        document.getElementById('imagenoculta2').style.display = "block";
        document.getElementById('imagenoculta3').style.display = "none";
        document.getElementById('imagenoculta4').style.display = "none";
        document.getElementById('oculto3').style.display = "block";
        document.getElementById('oculto4').style.display = "block";
        document.getElementById('oculto5').style.display = "none";
        document.getElementById('oculto6').style.display = "none";
    }

    if(contador == 2){
        document.getElementById('imagenoculta3').style.display = "block";
        document.getElementById('imagenoculta4').style.display = "block";
        document.getElementById('imagenoculta5').style.display = "none";
        document.getElementById('imagenoculta6').style.display = "none";
        document.getElementById('oculto5').style.display = "block";
        document.getElementById('oculto6').style.display = "block";
        document.getElementById('oculto7').style.display = "none";
        document.getElementById('oculto8').style.display = "none";
        derecha.style.display = "block";
    }
    
});

