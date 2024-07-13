const ages = [100, 45, 32, 33, 16, 40, 67, 21, 89, 11];

const filteredAges = ages.filter((num) => num >= 30);

document.getElementById("app").innerHTML = filteredAges;

console.log('filteredAges: ', filteredAges);