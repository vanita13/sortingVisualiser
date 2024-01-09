function swap(el1,el2)
{
    temp = el1.style.height
    el1.style.height = el2.style.height;
    el2.style.height = temp;
    
 }


// Function to partition the array and return the partition index
async function partition(arr, low, high) {
    
	// Choosing the pivot
	let pivot = parseFloat(arr[high].style.height);

	// Index of smaller element and indicates the right position of pivot found so far
	let i = low - 1;
	for (let j = low; j <= high - 1; j++) {
        
		// If current element is smaller than the pivot
        let h1 = parseFloat(arr[j].style.height);
		if (h1 <= pivot) {
			// Increment index of smaller element
			i++;
            arr[i].style.background="red"; arr[j].style.background="red";
            await new Promise(resolve => setTimeout(() => {resolve()}, anime_speed));
            swap(arr[i],arr[j]);
            await new Promise(resolve => setTimeout(() => {resolve()}, anime_speed));
            //changeColor(arr[i],arr[j]);
            arr[i].style.background="yellow"; arr[j].style.background="yellow";
           
        };
            
		}
        
	

    swap(arr[i+1],arr[high]);
	//[arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Swap pivot to its correct position
	return i + 1; // Return the partition index
}

// The main function that implements QuickSort
async function quickSort(arr, low, high) {
	if (low < high) {
		// pi is the partitioning index, arr[pi] is now at the right place
		let pi = await partition(arr, low, high);

		// Separately sort elements before partition and after partition
        //console.log("Calling quicksot again")
		await quickSort(arr, low, pi - 1);
		await quickSort(arr, pi + 1, high);
	}
}



