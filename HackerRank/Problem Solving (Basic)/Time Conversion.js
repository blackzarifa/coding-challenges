function timeConversion(s) {
  const convertedStr = s.substring(0,8).split(':');

  if (s.charAt(8) === 'A') {
      if (convertedStr[0] === '12')
        convertedStr[0] = '00';

      return convertedStr.join(':');
  } else if (s.charAt(8) === 'P') {
    if (convertedStr[0] !== '12') 
      convertedStr[0] = Number(convertedStr[0]) + 12;
      
    return convertedStr.join(':');
  }
}