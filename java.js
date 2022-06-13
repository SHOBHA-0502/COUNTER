let count =0
const value = document.querySelector("#value")
// const btnin = document.querySelector("btn increase")
// const btnre = document.querySelector("btn reset")
// const btndec = document.querySelector("btn decrease");

document.querySelector(".btn-1").addEventListener("click",function(){
    count++;
    value.textContent=count;
    console.log(count)
})
document.querySelector(".btn-2").addEventListener("click",function(){
    count=0;
    value.textContent=count;
})
document.querySelector(".btn-3").addEventListener("click",function(){
    count--;
    value.textContent=count;
})