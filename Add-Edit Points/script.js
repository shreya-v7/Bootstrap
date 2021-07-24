$('td').tooltip();
var valuearc=0;
var valuebas=0;
var valuebad=0;
var valuet=0;

function addarc()
{       
        var pointadd = parseInt(document.getElementById("pointsarc").value);
        valuearc = isNaN(valuearc) ? 0 : valuearc;
        valuearc+=100;
        document.getElementById('pointsarc').innerHTML = valuearc;
}

function halfarc()
{       
        var pointhalf = parseInt(document.getElementById("pointsarc").value);
        valuearc = isNaN(valuearc) ? 0 : valuearc;
        valuearc+=50;
        document.getElementById('pointsarc').innerHTML = valuearc;
}

function minusarc()
{       
        var pointadd = parseInt(document.getElementById("pointsarc").value);
        valuearc = isNaN(valuearc) ? 0 : valuearc;
        valuearc-=100;
        document.getElementById('pointsarc').innerHTML = valuearc;
}
function addbas()
{       
        var pointadd = parseInt(document.getElementById("pointsbas").value);
        valuebas = isNaN(valuebas) ? 0 : valuebas;
        valuebas+=100;
        document.getElementById('pointsbas').innerHTML = valuebas;
}

function halfbas()
{       
        var pointhalf = parseInt(document.getElementById("pointsbas").value);
        valuebas = isNaN(valuebas) ? 0 : valuebas;
        valuebas+=50;
        document.getElementById('pointsbas').innerHTML = valuebas;
}

function minusbas()
{       
        var pointadd = parseInt(document.getElementById("pointsbas").value);
        valuebas = isNaN(valuebas) ? 0 : valuebas;
        valuebas-=100;
        document.getElementById('pointsbas').innerHTML = valuebas;
}
function addbad()
{       
        var pointadd = parseInt(document.getElementById("pointsbas").value);
        valuebas = isNaN(valuebas) ? 0 : valuebas;
        valuebas+=100;
        document.getElementById('pointsbas').innerHTML = valuebas;
}

function halfbad()
{       
        var pointhalf = parseInt(document.getElementById("pointsbas").value);
        valuebas = isNaN(valuebas) ? 0 : valuebas;
        valuebas+=50;
        document.getElementById('pointsbas').innerHTML = valuebas;
}

function minusbad()
{       
        var pointadd = parseInt(document.getElementById("pointsbas").value);
        valuebas = isNaN(value) ? 0 : valuebas;
        valuebas-=100;
        document.getElementById('pointsbas').innerHTML = valuebas;
}

function addbad()
{       
        var pointadd = parseInt(document.getElementById("pointsbad").value);
        valuebad = isNaN(valuebad) ? 0 : valuebad;
        valuebad+=100;
        document.getElementById('pointsbad').innerHTML = valuebad;
}

function halfbad()
{       
        var pointhalf = parseInt(document.getElementById("pointsbad").value);
        valuebad = isNaN(valuebad) ? 0 : valuebad;
        valuebad+=50;
        document.getElementById('pointsbad').innerHTML = valuebad;
}

function minusbad()
{       
        var pointadd = parseInt(document.getElementById("pointsbad").value);
        valuebad = isNaN(valuebad) ? 0 : valuebad;
        valuebad-=100;
        document.getElementById('pointsbad').innerHTML = valuebad;
}

function addt()
{       
        var pointadd = parseInt(document.getElementById("pointst").value);
        valuet = isNaN(valuebad) ? 0 : valuet;
        valuet+=100;
        document.getElementById('pointst').innerHTML = valuet;
}

function halft()
{       
        var pointhalf = parseInt(document.getElementById("pointst").value);
        valuet = isNaN(valuet) ? 0 : valuet;
        valuet+=50;
        document.getElementById('pointst').innerHTML = valuet;
}

function minust()
{       
        var pointadd = parseInt(document.getElementById("pointst").value);
        valuet = isNaN(valuet) ? 0 : valuet;
        valuet-=100;
        document.getElementById('pointst').innerHTML = valuet;
}