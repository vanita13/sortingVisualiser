function swap(el1,el2)
{

    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);


    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");

    el1.style.height = transform2;
    el2.style.height = transform1;

 }
// function swap1(items, leftIndex, rightIndex){
//     var temp = items[leftIndex].style.height;
//     items[leftIndex].style.height = items[rightIndex].style.height;
//     items[rightIndex].style.height = temp;
// }
//  function partition(items, left, right) {
//     var pivot   = items[Math.floor((right + left) / 2)].style.height, //middle element
//         i       = left, //left pointer
//         j       = right; //right pointer
//     while (i <= j) {
//         while (items[i].style.height < pivot) {
//             i++;
//         }
//         while (items[j].style.height > pivot) {
//             j--;
//         }
//         if (i <= j) {
//             swap1( items,i,j); //sawpping two elements
//             i++;
//             j--;
//         }
//     }
//     return i;
// }

// function quickSort(items, left, right) {
//     var index;
//     if (items.length > 1) {
//         index = partition(items, left, right); //index returned from partition
//         if (left < index - 1) { //more elements on the left side of the pivot
//             quickSort(items, left, index - 1);
//         }
//         if (index < right) { //more elements on the right side of the pivot
//             quickSort(items, index, right);
//         }
//     }
//     //return items;
// }

function partition (arr ,low ,high) 
{
    var pivot = arr[high].style.height; // pivot 
    var i = (low -1); // Index of smaller element and indicates the right position of pivot found so far
 
    for (var j = low; j <= high -1; j++) 
    {
        // If current element is smaller than the pivot 
        if (arr[j].style.height < pivot) 
        { 
            i++; // increment index of smaller element 
            swap(arr[i], arr[j]); 
        } 
    } 
    swap(arr[i + 1], arr[high]); 
    return (i + 1); 
} 

function quickSort(arr, low, high) 
{ console.log("low"+low+"heigh"+high);
    if (low < high) 
    { 
        /* pi is partitioning index, arr[p] is now 
        at right place */
        var pi = partition(arr, low, high); 
        console.log(pi) ;
 
        // Separately sort elements before 
        // partition and after partition 
        quickSort(arr, low, pi -1); 
        quickSort(arr, pi +1, high); 
    } 
    console.log("low"+low+"heigh"+high);
} 