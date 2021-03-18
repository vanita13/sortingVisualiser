function swap(el1,el2)
{

    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);


    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");

    el1.style.height = transform2;
    el2.style.height = transform1;

 }
 async function bubbleSort(){
    var x = document.getElementById("bars").querySelectorAll(".flex-child");
    //console.log(x[0].style.height);
    var i,j;
    for( i = 0;i< x.length-1;i++){
        for( j = 0 ; j< x.length-i-1;j++){
            // const style1 = window.getComputedStyle(x[j]);
            // const style2 = window.getComputedStyle(x[j+1]);


            // const transform1 = style1.getPropertyValue("height");
            // const transform2 = style2.getPropertyValue("height");
            var h1 = parseInt(x[j].style.height.match(/\d/g).join(''));
            var h2 = parseInt(x[j+1].style.height.match(/\d/g).join(''));
             if(h1 > h2){
            //     //x[j+1].innerHTML = "hi";
                 x[j].style.background="red";
                 x[j+1].style.background="red";
                 await new Promise(resolve => setTimeout(() => {resolve(), 200000}));
                 swap(x[j],x[j+1]);
                 await new Promise(resolve => setTimeout(() => {resolve(), 200000}));
                 x[j].style.background="yellow";
                 x[j+1].style.background="yellow";
             }

             }
    }
 }
