//Ação de On Click //


function clickTriagem() {

    document.getElementById("image-default").style.display = 'none';
    document.getElementById("image-consulta").style.display = 'none';
    document.getElementById("image-saude").style.display = 'none';

    if (window.innerWidth <= 768) {
        document.getElementById("image-triagem").style.display = 'block';
    } else {
        document.getElementById("image-triagem").style.display = 'flex';
    }
};

function clickConsulta() {

    document.getElementById("image-default").style.display = 'none';
    document.getElementById("image-triagem").style.display = 'none';
    document.getElementById("image-saude").style.display = 'none';

    if (window.innerWidth <= 768) {
        document.getElementById("image-consulta").style.display = 'block';
    } else {
        document.getElementById("image-consulta").style.display = 'flex';
    }
};

function clickSaude() {

    document.getElementById("image-default").style.display = 'none';
    document.getElementById("image-triagem").style.display = 'none';
    document.getElementById("image-consulta").style.display = 'none';


    if (window.innerWidth <= 768) {
        document.getElementById("image-saude").style.display = 'block';
    } else {
        document.getElementById("image-saude").style.display = 'flex';
    }


};
