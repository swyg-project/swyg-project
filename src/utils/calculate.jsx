const calculate = (scoreList) => {
  let mbti = "";
  const count = { I: 0, E: 0, S: 0, F: 0, T: 0, P: 0, J: 0 };
  scoreList.forEach((x) => {
    count[x] = (count[x] || 0) + 1;
  });
  count.I > count.E ? (mbti += "I") : (mbti += "E");
  count.S > count.N ? (mbti += "S") : (mbti += "N");
  count.T > count.F ? (mbti += "T") : (mbti += "F");
  count.P > count.J ? (mbti += "P") : (mbti += "J");
  mbti = mbti.toLowerCase();
  return mbti;
};
export { calculate };
