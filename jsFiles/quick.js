function swap(el1,el2)
{
    //setTimeout((el1,el2)=>{el1.style.background="red"; el2.style.background="red";},200000)
	temp = el1.style.height
    el1.style.height = el2.style.height;
    el2.style.height = temp;
    //setTimeout((el1,el2)=>{el1.style.background="red"; el2.style.background="red";},200000)

 }


// Function to partition the array and return the partition index
function partition(arr, low, high) {
    
	// Choosing the pivot
	let pivot = parseFloat(arr[high].style.height);

	// Index of smaller element and indicates the right position of pivot found so far
	let i = low - 1;
	for (let j = low; j <= high - 1; j++) {
        function changeColor(){
            arr[i].style.background="yellow"; arr[j].style.background="yellow"
        }
        function changeColorRed(){
            arr[i].style.background="red"; arr[j].style.background="red"
        }
		// If current element is smaller than the pivot
        let h1 = parseFloat(arr[j].style.height);
		if (h1 <= pivot) {
			// Increment index of smaller element
			i++;
            //setTimeout((el1,el2)=>{el1.style.background="red"; el2.style.background="red";},200000)
            //setTimeout(()=>{changeColorRed;},200);
            swap(arr[i],arr[j]);
            //setTimeout(changeColor,300);
            
        };
            
		}
        
	

    swap(arr[i+1],arr[high]);
	//[arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Swap pivot to its correct position
	return i + 1; // Return the partition index
}

// The main function that implements QuickSort
function quickSort(arr, low, high) {
	if (low < high) {
		// pi is the partitioning index, arr[pi] is now at the right place
		let pi = partition(arr, low, high);

		// Separately sort elements before partition and after partition
        console.log("Calling quicksot again")
		quickSort(arr, low, pi - 1);
		quickSort(arr, pi + 1, high);
	}
}



