function swap(el1,el2)
{

    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);


    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");

    el1.style.height = transform2;
    el2.style.height = transform1;

 }

async function selectionSort(){
    var x = document.getElementById("bars").querySelectorAll(".flex-child");
    var i,j,minIndex;
    for(i =0;i<x.length-1;i++){
        minIndex = i;
        for(j = i+1;j<x.length;j++){
            var h1 = parseInt(x[j].style.height.match(/\d/g).join(''));
            var h2 = parseInt(x[minIndex].style.height.match(/\d/g).join(''));
            if(h1<h2){
                minIndex = j;
            }
        }
        x[i].style.background="red";
        x[minIndex].style.background="red";
        await new Promise(resolve => setTimeout(() => {resolve()}, 200));
        swap(x[i],x[minIndex]);
        await new Promise(resolve => setTimeout(() => {resolve()}, 200));
        x[i].style.background="yellow";
        x[minIndex].style.background="yellow";
    }
}