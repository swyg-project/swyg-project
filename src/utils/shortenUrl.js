import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../services/firebase";

async function shortenUrl(originUrl) {
  const checkShortedUrl = async (originUrl) => {
    try {
      //url이름의 collection
      const urlCollection = collection(db, "url");
      //originalUrl이 이 collection에 있는지 확인하기
      const urlQuery = query(urlCollection, where("origin", "==", originUrl));
      const querySnapshot = await getDocs(urlQuery);
      let shortUrl = "";
      if (!querySnapshot.empty) {
        shortUrl = querySnapshot.docs[0].data()["short"];
      }

      //shortUrl 반환
      return shortUrl !== "" ? shortUrl : null;
    } catch (error) {
      console.error("Firebase에 접근 중 오류 발생:", error);
      return false;
    }
  };

  // uniqueValue를 base62로 인코딩하는 함수
  const encodeBase62 = (num) => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const base = characters.length;

    let result = "";
    while (num > 0) {
      const remainder = num % base;
      result = characters.charAt(remainder) + result;
      num = Math.floor(num / base);
    }

    return result || "0"; // 0은 '0'으로 인코딩
  };

  const generateUniqueValue = () => {
    const uniqueValue = Date.now().toString();
    // uniqueValue의 값이 있는지 확인하기
    return uniqueValue;
  };

  // firebase에 업로드 하는 함수

  const sendUrl = async (col, uniqueValue, origin, short) => {
    try {
      await setDoc(doc(col, uniqueValue.toString()), {
        origin,
        short,
      });
    } catch (error) {
      console.error("Firebase 데이터 업로드 중 오류:", error);
    }
  };

  const checkExistUniqueValue = async (uniqueValue) => {
    try {
      const docRef = doc(db, "url", uniqueValue);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return true;
      } else {
        console.log("Firebase에서 문서가 존재하지않음");
        return false;
      }
    } catch (error) {
      console.err("firebase 접근 실패 오류:", error);
    }
  };

  const finalUniqueValue = async () => {
    // 중복이 안될때까지 고유ID생성
    let uniqueValue = generateUniqueValue();

    while (await checkExistUniqueValue(uniqueValue)) {
      uniqueValue = generateUniqueValue();
    }
    return uniqueValue;
  };

  try {
    const existingShortUrl = await checkShortedUrl(originUrl);
    if (existingShortUrl) {
      return existingShortUrl;
    } else {
      const uniqueValue = await finalUniqueValue();
      console.log(uniqueValue);

      const encodedValue = encodeBase62(uniqueValue);
      console.log("encodedValue:", encodedValue);
      const encodedUrl = `${
        import.meta.env.VITE_PUBLIC_URL
      }short/${encodedValue}`;

      // // firebase에 넣기
      const col = collection(db, "url");
      await sendUrl(col, uniqueValue, originUrl, encodedUrl);
      return encodedUrl;
    }
  } catch (error) {
    console.error("shortenUrl 함수에서 오류발생함:", error);
    return originUrl;
  }
}
export default shortenUrl;
