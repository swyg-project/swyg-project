import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";
const GiftReceived = () => {
  const [isRedirect, setIsRedirect] = useState(false);
  const [origin, setOrigin] = useState("");
  //현재 url 받아오기
  const currentUrl = window.location.href;

  useEffect(() => {
    checkUrl();
  }, []);

  //현재 url과 db에 있는 shortUrl이 일치하는지 확인.
  const checkUrl = async () => {
    const urlCollection = collection(db, "url");
    const urlQuery = query(urlCollection, where("short", "==", currentUrl));
    const querySnapshot = await getDocs(urlQuery);
    const newData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      // ,id: doc.id,
    }));

    if (newData.length) {
      console.log(newData);
      setIsRedirect(true);
      setOrigin(newData[0].origin);
    }
  };

  isRedirect ? window.location.replace(origin) : null;
};

export default GiftReceived;
