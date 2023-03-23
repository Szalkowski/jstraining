const createTipper = (tip) => (bill) => bill * tip

const tip15 = createTipper(.15)
console.log(tip15(100))