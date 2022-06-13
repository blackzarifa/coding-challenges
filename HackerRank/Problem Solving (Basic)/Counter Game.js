function counterGame(n) {
  let player = true;
  let num = n;

  while (num > 1) {
    if ((Math.log(num) / Math.log(2)) % 1 !== 0) {
      for (let i = 2; i < num; i++) {
        console.log(i);
        if ((2 ** i) > num) {
          num = num - (2 ** (i - 1));
          player = !player;
          console.log(num, player)
          break;
        }
      }
    } else {
      num = num / 2;
      player = !player;
    }
  }

  return player ? 'Richard' : 'Louise';
}