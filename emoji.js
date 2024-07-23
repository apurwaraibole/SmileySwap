const openMouthFace=document.querySelector('.openmouth');
const smilingFace=document.querySelector('.smilingeyes');
//const beautifulFace =document.querySelector('.beautiful');
//const kissFace =document.querySelector('.kiss');



//Add event listner
openMouthFace.addEventListener('click',()=>{
    if(smilingFace.classList.contains('smilingeyes')) {
        smilingFace.classList.add('active');
        openMouthFace.classList.remove('active');
    }
});

smilingFace.addEventListener('click',()=>{
    if(openMouthFace.classList.contains('openmouth')){
        openMouthFace.classList.add('active');
        smilingFace.classList.remove('active');
    }
} ) ;

/*beautifulFace.addEventListener('click',()=>{
    if(kissFace.classList.contains('kiss')) {
        kissFace.classList.add('pasive');
        beautifulFace.classList.remove('pasive');
    }
});

kissFace.addEventListener('click',()=>{
    if(beautifulFace.classList.contains('kiss')) {
        beautifulFace.classList.add('pasive');
        kissFace.classList.remove('pasive');
    }
});
*/
