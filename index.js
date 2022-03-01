// // Your code here
// function moveDodgerLeft(){
// const dodger = document.getElementById('dodger');
// dodger.style.backgroundColor = '#FF69B4';
// dodger.style.bottom='0px';
// dodger.style.left='0px'}
// document.addEventListener('keydown', function (event){
// if (event.key==="ArrowLeft"){
//  moveDodgerLeft();   
// }
// });
const dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

function moveDodgerRight(){
    const dodger=document.getElementById('dodger');
    dodger.style='10px'
    dodger.style.left='180px'}
    document.addEventListener('keydown',function (e) {
        if (e.key==='keydown'){
        moveDodgerRight();
    }
});
