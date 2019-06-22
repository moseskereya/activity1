const button = document.querySelector('.btn');
const mainClass = document.querySelector('.main');
let classStatus = 1;
function myFunction(){
if(classStatus === 1){
mainClass.style.display = 'none';
    classStatus = 0;
}else if(classStatus === 0) {
    mainClass.style.display = 'block';
    classStatus = 1;
}
}
myFunction();