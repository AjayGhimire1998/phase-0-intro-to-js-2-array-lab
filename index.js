// Write your solution here!
let cats = ['Milo', 'Otis', 'Garfield'];

let destructivelyAppendCat = a => {
cats.push('Ralph');


}

let destructivelyPrependCat= a => {
  cats.unshift('Bob');
}

let destructivelyRemoveLastCat = a => {
  cats.pop();
}

let destructivelyRemoveFirstCat = a => {
  cats.shift();
}

let appendCat = a => {
 
  // cats.push('Broom');
  let catsTwo = [ 
    ...cats, a
  ];
  
  console.log(catsTwo) 
  return catsTwo;
}
appendCat('Broom');

let prependCat = a => {
  let catsThree = [
    a, ...cats, 
  ];
  console.log(catsThree);
  return catsThree;
}

let removeLastCat = a => {
  let catsFour = 
    cats.slice(0, cats.length-1)
  ;
  return catsFour;
}

let removeFirstCat = a => {
  let catsFive = cats.slice(1);
  return catsFive;
}

  

 
  



