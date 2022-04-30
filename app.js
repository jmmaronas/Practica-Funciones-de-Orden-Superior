//VARIABLES

const MESES = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septimbre", "Octubre", "Noviembre", "Diciembre"]

let fechaActual=new Date()
let diaActual=fechaActual.getDate()
let mesNumero=fechaActual.getMonth()
let anioActual=fechaActual.getFullYear()

const mesHtml= document.getElementById("mes")
const anioHtml= document.getElementById("anio")
const diasHtml=document.getElementById("dias") 
const mesSiguiente=document.getElementById("mesSiguiente")
const mesPrevio=document.getElementById("mesPrevio")

mesHtml.innerHTML=MESES[mesNumero]
anioHtml.innerHTML=anioActual

function mostrarCalendario(){
    diasHtml.innerHTML=""
    for(let i=primerDia(); i>0; i--){
        diasHtml.innerHTML+=`
            <div>${diasDelMes(mesNumero-1)-(i-1)}</div>
        `
    }
    for(let i=1; i<=diasDelMes(mesNumero);i++){
        diasHtml.innerHTML+=`
            <div>${i}</di>
        `
    }
    for(let i=ultimoDia();i<6;i++){
        diasHtml.innerHTML+=`
            <div>${count++}</div>
        `
    }
}

function diasDelMes(mes){
    if(mes===-1) mes=11;
    if((mes==0)||(mes==2)||(mes==4)||(mes==6)||(mes==7)||(mes==9)||(mes==11)){
        return 31
    }else if((mes==3)||(mes==5)||(mes==8)||(mes==10)){
        return 30
    }
    else{
        return anioBiciesto() ? 29 : 28
    }
}

function anioBiciesto(){
    return (((anioActual % 100 !== 0) && (anioActual % 4 === 0)) || (anioActual % 400 === 0))
}

function primerDia(){
    let diaInicio=new Date(anioActual,  mesNumero, 1)
    let resultado=diaInicio.getDay()
    return resultado
}

function siguienteMes(){
    if(mesNumero!==11){
        mesNumero++
    }else{
        mesNumero=0
        anioActual++
    }
    cargarNuevaFecha()
}

function anteriorMes(){
    if(mesNumero!==0){
        mesNumero--
    }else{
        mesNumero=11
        anioActual--
    }
    cargarNuevaFecha()
}

function cargarNuevaFecha(){
    fechaActual.setFullYear(anioActual, mesNumero, diaActual)
    mesHtml.innerHTML=MESES[mesNumero]
    anioHtml.innerHTML=anioActual.toString()
    mostrarCalendario()
}

mesSiguiente.addEventListener("click", ()=>{
    siguienteMes()
})

mesPrevio.addEventListener("click", ()=>{
    anteriorMes()
})

mostrarCalendario()


