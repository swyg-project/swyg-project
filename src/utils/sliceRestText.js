function sliceRestText(text, length) {
  if (typeof text !== "string") {
    throw new Error("입력받은 text의 타입이 문자열이 아닙니다");
  }
  if (typeof length !== "number") {
    throw new Error("입력받은 length의 타입이 숫자가 아닙니다");
  }

  const sliced =
    text.length > length ? text.slice(0, length - 1) + "..." : text;

  return sliced;
}

export default sliceRestText;
