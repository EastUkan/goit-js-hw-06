/*reduce, filter, sort
Получи массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
Слияние массивов:*/

// Write code under this line
const getSortedUniqueSkills = array =>
  [...array]
    .reduce((acc, { skills }) => [...acc, ...skills], [])
    .filter((value, index, array) => array.indexOf(value) === index)
    .sort();

console.log(getSortedUniqueSkills(users));
