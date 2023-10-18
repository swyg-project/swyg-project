function addComma(num) {
    num = Number(num);
    if(isNaN(num)) {
        throw new Error("올바른 값을 입력해주세요");
    }
    return num.toLocaleString();
}

export default addComma;