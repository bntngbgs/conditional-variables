// 1. Conditional Variable (?)
const isMarried = true;

const status = isMarried ? 'kamu sudah menikah' : 'kamu masih single';
console.log(status);

// 2. Conditional Variable (&&)
const nilai = 82;

const kondisiAnd = nilai > 80 && 'Nilai kamu tinggi';
console.log(kondisiAnd);

// 3. Conditional Variable (||)
const umur = 27;

const kondisiOr = umur < 24 || 'Kamu masih muda';
console.log(kondisiOr);

// 4. Map()
const characters = [
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    eye_color: 'blue',
    gender: 'male',
  },
  {
    name: 'Darth Vader',
    height: '202',
    mass: '136',
    eye_color: 'yellow',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: '150',
    mass: '49',
    eye_color: 'brown',
    gender: 'female',
  },
  {
    name: 'Anakin Skywalker',
    height: '188',
    mass: '84',
    eye_color: 'blue',
    gender: 'male',
  },
];

const fullName = characters.map((char) => {
  return char.name;
});

console.log(fullName);

// 5. Filter()
const blueEyes = characters.filter((char) => {
  return char.eye_color == 'blue';
});

console.log(blueEyes);
