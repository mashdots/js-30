const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const articles = ['a', 'an', 'the']

bands.sort((bandA, bandB) => {
  const { 0: firstWordA, 1: secondWordA } = bandA.toLocaleLowerCase().split(' ');
  const { 0: firstWordB, 1: secondWordB } = bandB.toLocaleLowerCase().split(' ');

  const wordA = articles.includes(firstWordA) ? secondWordA : firstWordA;
  const wordB = articles.includes(firstWordB) ? secondWordB : firstWordB;
  
  return wordA > wordB;
})

const populateList = () => {
  const listItems = bands.map(band => `<li>${band}</li>`);
  
  document.querySelector('ul').innerHTML = listItems.join('')
}

populateList()
