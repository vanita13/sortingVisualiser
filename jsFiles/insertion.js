
async function insertionSort(){
    var x = document.getElementById("bars").querySelectorAll(".flex-child");
    var i,j,key,keyNode;
    for(i=1 ;i < x.length;i++){
        keyNode = x[i];
        key = parseInt(x[i].style.height.match(/\d/g).join(''));
        j = i -1;
        while (j >= 0 && parseInt(x[j].style.height.match(/\d/g).join('')) > key)
        { 
            //console.log(x[j]+" "+x[j].style.height+x[j+1]+" "+x[j+1].style.height);
            x[j].style.background="red";
            x[j+1].style.background="red";
            //await new Promise(resolve => setTimeout(() => {resolve()}, 200));
            x[j + 1].style.height = x[j].style.height
            //await new Promise(resolve => setTimeout(() => {resolve()}, 200));
            x[j].style.background="yellow";
            x[j+1].style.background="yellow";
            //console.log(x[j]+" "+x[j].style.height+x[j+1]+" "+x[j+1].style.height);
            //console.log(x[j+1].style.height);
            //arr[j + 1].style.height = arr[j].style.height; 
            j = j - 1; 
        } 
        //swap(x[j+1],keyNode);
        x[j+1].style.background="red";
        x[i].style.background="red";
        await new Promise(resolve => setTimeout(() => {resolve()}, 200));
        x[ j+ 1].style.height = key+"px"; 
        await new Promise(resolve => setTimeout(() => {resolve()}, 200));
        x[i].style.background="yellow";
        x[j+1].style.background="yellow";

    }
}