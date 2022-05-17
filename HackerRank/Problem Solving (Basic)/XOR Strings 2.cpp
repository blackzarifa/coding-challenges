string strings_xor(string s, string t) {
  string res = "";
  for(int i = 0; i < s.size(); i++) {
      if(s[i] != t[i])
          res += '1';
      else
          res += '0';
  }

  return res;
}