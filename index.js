
function vr_comision(){

 vr_venta = parseFloat(document.getElementById("vr_venta").value);
 zona = (document.getElementById("zona").value);


 salario = parseFloat(document.getElementById("salario").value);



    if(zona == "Norte"){
        comision = vr_venta*0.05;
    }else if(zona == "Sur"){
        comision = vr_venta*0.04;
    }else if(zona == "Oriente"){
        comision = vr_venta*0.03;
    }else{
        alert("Zona invalida");
    }
    total_pagar = salario+comision;

    document.getElementById('comision').value = comision;
    document.getElementById('total_pagar').value = total_pagar;
}




