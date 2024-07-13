// example 1
const ages = [100, 45, 32, 33, 16, 40, 67, 21, 89, 11];

let filteredAges = ages.filter((age) => age == 45 || age == 32);

console.log('filteredAges: ', filteredAges);

// example 2
const words = ['spring', 'elite', 'dilligent', 'beach', 'present'];

const filteredWords = words.filter((word) => word.length >= 7);

console.log('filteredWords: ', filteredWords);


// example 3 (searching)
const filteredWords2 = words.filter((word) => word.includes('ch'));

console.log('filteredWords2: ', filteredWords2);


// display to DOM
document.getElementById("app").innerHTML = 
`<p>Filtered Ages: ${filteredAges}</p>

<p>Filtered Words 1: ${filteredWords}</p>

<p>Filtered Words 2: ${filteredWords2}</p>

`;