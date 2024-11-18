export const GetRandom = (arr, n) => {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}


export const convertTo12Hour = (time24) => {
    // Split the time string into hours and minutes
    const [hours, minutes, seconds] = time24.split(':').map(Number);
  
    // Determine AM or PM
    const period = hours >= 12 ? 'PM' : 'AM';
  
    // Convert hours to 12-hour format
    const hours12 = hours % 12 || 12; 
  
    // Format the 12-hour time string
    return `${hours12}:${minutes.toString().padStart(2, '0')} ${period}`;
  }
  