import axios from "axios";
import { xmlToObject } from "../utils/xmlToObject";

export const getProducts = async ({
    productCode,
    pageNum = 1,
    pageSize = 10,
    keyword = "",
    sortCd = "CP",
    filter = "",
}) => {
    try {
        const res = await axios(
            `/11st?key=${import.meta.env.VITE_ELEVEN_STORE_API_KEY}` +
                (productCode == null
                    ? `&apiCode=ProductSearch&keyword=${keyword}&pageNum=${pageNum}&pageSize=${pageSize}&sortCd=${sortCd}${filter}`
                    : `&apiCode=ProductInfo&productCode=${productCode}`)
        );

        const parser = new DOMParser();

        const xmlDoc = parser.parseFromString(res.data, "text/xml");

        const result = xmlToObject(xmlDoc);

        return result;
    } catch (err) {
        console.error(err);
    }
};
