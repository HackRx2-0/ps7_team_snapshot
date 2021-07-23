let myform = document.getElementById('myform');
let targetimage = document.getElementById('targetimage');
myform.addEventListener('submit', function(e){
    let urlimage = document.getElementById('onlineurl');
    let urlimageval = urlimage.value;
    if(urlimageval.length){
        targetimage.setAttribute('src',urlimageval);
        urlimage.value = '';
    }
    
    e.preventDefault();
    console.log('done');
});

function showPreviewOne(event){
if(event.target.files.length > 0){
    let src = URL.createObjectURL(event.target.files[0]);
    let preview = document.getElementById("targetimage");
    preview.src = src;
    preview.style.display = "block";
} 
}