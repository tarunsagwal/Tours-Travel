let count=0;
let counting=0;
let head_index = 0;
let index=0;
let heade=document.querySelector(".place_name");
let head=document.querySelectorAll(".h1");
let pgraph=document.querySelector(".pgraph");
let para =document.querySelectorAll('.graph');
let images =document.querySelectorAll('.back_img');
let dot =document.querySelectorAll('.dot');
let dots=document.querySelectorAll(".dots_p")
let card=document.querySelector('.card_container');
let fram=document.querySelectorAll(".card");
let imag=()=>{
    for(var img=0;img<images.length;img++){
        images[img].style.opacity=0;
        dot[img].style.transform='scale(.2)';
        dots[img].style.transform='scale(.2)';
        images[img].style.transition='0.5s'
        dot[img].style.transition='0.5s'
        dots[img].style.transition='0.5s'
    }
    images[index-1].style.opacity=1;
    dot[index-1].style.transform='scale(1)';
    dots[index-1].style.transform='scale(1)';
    images[index-1].style.transition='0.5s'
    dot[index-1].style.transition='1s'
    dots[index-1].style.transition='3s'
}
const head_first_clone = head[0].cloneNode(true);
const card_first_clone = fram[0].cloneNode(true);
const para_first_clone = para[0].cloneNode(true);
const last_clone=head[head.length-1].cloneNode(true);
const card_clone=fram[fram.length-1].cloneNode(true);
const para_clone=para[para.length-1].cloneNode(true);
head_first_clone.id="fclone";
card_first_clone.id="fram_img";
para_first_clone.id="pclone";
last_clone.id="lcone";
card_clone.id="fram_img";
para_clone.id="plcone";
heade.append(head_first_clone);
card.append(card_first_clone);
pgraph.append(para_first_clone);
card.prepend(card_clone);
heade.prepend(last_clone);
pgraph.prepend(para_clone);
let head_height = head[head_index].clientHeight;
let card_height = fram[head_index].clientWidth;
let para_height = para[head_index].clientHeight;
heade.addEventListener('transitionend',()=>{
    let head=document.querySelectorAll(".h1");
    let fram=document.querySelectorAll(".fram_img")
    if(head[head_index].id===head_first_clone.id){
        heade.style.transition="none";
        pgraph.style.transition="none";
        head_index=1;
        heade.style.transform=`translateY(-${head_index*head_height}px)`;
        pgraph.style.transform=`translateY(-${head_index*para_height}px)`;
        console.log('success' + head[head_index].id);
    }
    if(fram[head_index].id===card_first_clone.id){
        card.style.transition="none";
        head_index=1;
        card.style.transform=`translateX(-${head_index*head_height}px)`;
        console.log('success' + head[head_index].id);
    }
    if(fram[head_index].id===last_clone.id){
        card.style.transition='none';
        head_index=1;
        card.style.transform=`translateX(-${head_index*card_height}px)`;
        console.log('success2' + head[head_index].id);
    }
    if(head[head_index].id===last_clone.id){
        heade.style.transition='none';
        head_index=1;
        heade.style.transform=`translateY(-${head_index*head_height}px)`;
        console.log('success2' + head[head_index].id);
    }
})
let head_changer_nxt=()=>{
    let head=document.querySelectorAll(".h1");
    let fram=document.querySelectorAll(".fram_img");
    if(head_index>=head.length-1)return;
    if(head_index>=fram.length-1)return;
    head_index++;
    heade.style.transform=`translateY(-${head_index*head_height}px)`;
    card.style.transform=`translateX(-${head_index*card_height}px)`;
    pgraph.style.transform=`translateY(-${head_index*para_height}px)`;
    heade.style.transition="1s";
    card.style.transition="1s";
    pgraph.style.transition="1s";
    console.log(head_index)
}
// console.log(append)



function right(){
    index++;
    if(index>images.length){
        index=1;
    }
    if(index>dot.length){
        index=1;
    }
    imag()
    head_changer_nxt()
}
// let left=(y)=>{
// }
let header=document.querySelector("header");
let nav =document.querySelector(".onemore");
let sir =document.createElement("i");
nav.appendChild(sir);
sir.setAttribute('class','bx bx-search');
sir.setAttribute('id','topsearch');
sir.setAttribute('onclick','search()');
// sir.setAttribute('style','color: aquamarine;');
let search=()=>{
    sir.style.border="none";
    let sear=document.querySelectorAll("#topsearch");
    for(var dotes=0; dotes<sear.length;dotes++){
        sear[dotes].style.transform='translateX(93px)';
    }
    div=document.createElement("input");
    div.setAttribute('class','try');
    nav.appendChild(div);
    nav.setAttribute('onload','trysearch()');
    div.setAttribute('type','text');
    let trysearch=()=>{
        let searc=document.querySelectorAll(".try");
        for(var dotes=0; dotes<searc.length;dotes++){
            searc[dotes].style.transform='translateX(0px)';
        }
    }
    setInterval(trysearch,100);
}
let second =document.querySelector(".twomore");
let icon =document.createElement("i");
second.appendChild(icon);
icon.setAttribute('class','bx bx-search');
icon.setAttribute('id','search');
icon.setAttribute('onclick','sec()');
let sec=()=>{
    icon.style.border="none";
    let sec=document.querySelectorAll("#search");
    for(var dotes=0; dotes<sec.length;dotes++){
        sec[dotes].style.transform='translateX(93px)';
    }
    div=document.createElement("input");
    div.setAttribute('class','try');
    second.appendChild(div);
    nav.setAttribute('onload','seconds()');
    div.setAttribute('type','text');
    let seconds=()=>{
        let searc=document.querySelectorAll(".try");
        for(var dotes=0; dotes<searc.length;dotes++){
            searc[dotes].style.transform='translateX(0px)';
        }
    }
    setInterval(seconds,100);
}
let last =document.querySelector(".new");
let menub =document.createElement("i");
last.appendChild(menub);
menub.setAttribute('class','bx bx-menu');
menub.setAttribute('id','menu');
menub.setAttribute('onclick','menu()');
let menu=()=>{
    let dbox =document.createElement("div");
    last.appendChild(dbox);
    dbox.setAttribute('class','box');
    dbox.setAttribute('onload','xicons()');
    let xicons=()=>{
        let iconi=document.querySelectorAll(".box");
        for(var ic=0; ic<iconi.length;ic++){
            iconi[ic].style.transform='translateY(0px)';
        }
    }
    setInterval(xicons,100);


let naver =document.createElement("nav");
dbox.appendChild(naver);
naver.setAttribute('class','naver');
let xicon =document.createElement("i");
naver.appendChild(xicon);
xicon.setAttribute('id','x');
xicon.setAttribute('style','color:aquamarine;');
xicon.setAttribute('class','bx bx-x');
let afirst=document.createElement('a');
naver.appendChild(afirst);
afirst.setAttribute('href','#');
afirst.innerText="news";
let asec=document.createElement('a');
naver.appendChild(asec);
asec.setAttribute('href','#');
asec.innerText="destinations";
let athird=document.createElement('a');
naver.appendChild(athird);
athird.setAttribute('href','#');
athird.innerText="bolg";
let afour=document.createElement('a');
naver.appendChild(afour);
afour.setAttribute('href','#');
afour.innerText="contact";
}
// menu()


