function repeatText(text, times) {
  let result = "";
  for (let i = 0; i < times; i++) {
    result += text;
  }
  return result;
}

document.write(repeatText("こんにちは", 3));
