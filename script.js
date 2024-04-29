var slides =document.querySelectorAll('.slide');
var preBtn =document.querySelector("#prev");
var nextBtn =document.querySelector("#next");
var readmore =document.querySelector("#readmore");

slides.forEach(
    (slide,idx)=>{
        slide.style.left= `${100*idx}%`;
    }
)
var counter=0;
preBtn.addEventListener(
    "click",()=>{

if(!counter<=0){
    counter--;

    slideImage();
}
}
)
nextBtn.addEventListener(
    "click",()=>{
    if(counter <slides.length-1){
       
    counter++;
    slideImage();
    }
})
const slideImage = ()=>{
    slides.forEach(
        (slide)=> {
            slide.style.transform =`translateX(-${counter*100}%)`;
        }
    )
}
var isDisplayed=false;
const displayMore = ()=>{
    console.log(isDisplayed)
if(!isDisplayed){
    document.querySelector('.btn').innerText= 'READLESS';
    readmore.style.display= 'block';
    isDisplayed=true;
}else{
    document.querySelector('.btn').innerText= 'READMORE';
        readmore.style.display= 'none';
        isDisplayed=false

    }
}

console.log(slides)


$( document ).ready(function() {
    var testiArr= [
        {p :"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque eveniet odit deleniti consequatur eos excepturi accusantium autem sint." ,imgSrc :"https://picsum.photos/id/234/400/300",idx: 1},
        {p :"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque eveniet odit deleniti consequatur eos excepturi accusantium autem sint." ,imgSrc :"https://picsum.photos/id/236/400/300" , idx: 2},
        {p :"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque eveniet odit deleniti consequatur eos excepturi accusantium autem sint." ,imgSrc :"https://picsum.photos/id/24/400/300" , idx: 3},
        {p :"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque eveniet odit deleniti consequatur eos excepturi accusantium autem sint." ,imgSrc :"https://picsum.photos/id/55/400/300", idx: 4}
       
    ]
    console.log(testiArr)
 var testIdx =0;
    $("#l2").click(()=>{

        if(!testIdx<=0){
            testIdx--;
        
            
            console.log("v")
            testi();
        }

    })
    $("#r2").click(()=>{
        if(testIdx <testiArr.length-1){
       
            testIdx++;
            console.log("v")

       testi();
        }
    })
    const testi = ()=>{
        $(".testimonials").html(`<h2>TESTIMONIALS </h2>
        <div class="container d-flex justify-content-between"><p >${testiArr[testIdx].p}</p>
            <div class="img-testimonials ml-5px"><img src="${testiArr[testIdx].imgSrc}" alt=""></div></div>
            <button type="button" class="btn btn-outline-warning">${testIdx+1}/${testiArr.length}</button>

            `);
    
    
   
    }
 
});