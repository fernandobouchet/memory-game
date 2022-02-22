export function MixPokemons(array) {
  return array.sort(() => Math.random() - 0.5);
}

export function randomNumbersNoRepeat() {
  const random = [];
  let index = 0;
  while (index < 13) {
    const number = Math.floor(Math.random() * (151 - 1) + 1);
    if (!random.includes(number)) {
      random.push(number);
      index += 1;
    }
  }
  return random;
}
