function caesarCipher(s, k) {
  while (k > 26)
    k -= 26;

  return s.split('').map(letter => {
    if (letter.match(/[^a-zA-Z]/)) return letter;

    let code = letter.charCodeAt(0);

    if (letter.match(/[a-z]/))
      return (code + k) > 122 ? String.fromCharCode(code + k - 26) : String.fromCharCode(code + k);
    else
      return (code + k) > 90 ? String.fromCharCode(code + k - 26) : String.fromCharCode(code + k);
  }).join('');
}