const body=document.querySelector("body")

body.addEventListener("mousemove",(e)=>{
    const x=e.layerX;
    const Y=e.layerY;
    const spanEle=document.createElement("span")
    spanEle.style.top=Y+"px";
    spanEle.style.left=x+"px";
    body.appendChild(spanEle)
    const size=Math.random()*100
    spanEle.style.height=size+"px"
    spanEle.style.width=size+"px"
if(spanEle.style.width < '50px'){
    spanEle.style.backgroundImage='url("./2.png")'
}else if(spanEle.style.width <'80px'){
console.log('w')
    spanEle.style.backgroundImage='url("./3.png")'  
}
    setTimeout(()=>{
        spanEle.remove()
    },3000)

})