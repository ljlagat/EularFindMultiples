function multiplesSum(a, b, limit) {
    let multiples = [];

    function findMultiples() {
        const tempMultiples = [];
        for (let i = 1; i < limit; i++) {
            if (i % a === 0 || i % b === 0) {
                tempMultiples.push(i);
            }
        }
        return tempMultiples;
    }

    function calculateSum(arr) {
        return arr.reduce((acc, curr) => acc + curr, 0);
    }

    return [findMultiples, calculateSum];
}

// Test the app
const [findMultiples, calculateSum] = multiplesSum(3, 5, 1000);

// Find multiples and calculate sum
const multiples = findMultiples();
const result = calculateSum(multiples);

console.log("Sum of multiples:", result);
// Display result
//document.getElementById("result").textContent = "Sum of multiples: " + result;
