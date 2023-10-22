import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";
const GiftReceived = () => {
    const [isRedirect, setIsRedirect] = useState(false);
    const [origin, setOrigin] = useState("");

    const currentUrl = window.location.href;

    useEffect(() => {
        checkUrl();
    }, []);

    const checkUrl = async () => {
        const urlCollection = collection(db, "url");
        const urlQuery = query(urlCollection, where("short", "==", currentUrl));
        const querySnapshot = await getDocs(urlQuery);
        const newData = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
        }));

        if (newData.length) {
            setIsRedirect(true);
            setOrigin(newData[0].origin);
        }
    };

    isRedirect ? window.location.replace(origin) : null;
};

export default GiftReceived;
