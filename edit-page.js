let inputrange = document.querySelectorAll('.slider');
let targetimage = document.getElementById('canvas');
for(let i=0; i<=inputrange.length-1; i++ ){
    inputrange[i].addEventListener('input', editimage);
}
function editimage(){
    let gs = document.getElementById('gs');  
    let gsval = gs.value;   
    targetimage.style.filter = 'grayscale('+gsval+'%)';
}