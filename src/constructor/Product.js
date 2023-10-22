export class Product {
    constructor(product) {
        if (product) {
            this.code = product.ProductCode["#text"];
            this.image = product.ProductImage300["#cdata-section"];
            this.name = product.ProductName["#cdata-section"];
            this.price = product.ProductPrice["#text"];
            this.salePrice = product.SalePrice["#text"];
            this.url = product.DetailPageUrl["#cdata-section"];
        }
    }
}

export const refineProduct = (xmlDoc) => {
    if (xmlDoc == null) {
        return [];
    }

    if (
        xmlDoc.ProductSearchResponse == null &&
        xmlDoc.ProductInfoResponse == null
    ) {
        throw new Error("상품 데이터를 받아오지 못했습니다");
    }

    if (xmlDoc.ProductSearchResponse == null) {
        const product = xmlDoc.ProductInfoResponse.Product;
        return {
            productCode: product.ProductCode["#text"],
            productImage: product.BasicImage["#cdata-section"],
            productName: product.ProductName["#cdata-section"],
            productPrice: product.ProductPrice.Price["#text"],
            productSalePrice: product.ProductPrice.LowestPrice["#text"],
            productUrl: `https://www.11st.co.kr/products/${product.ProductCode["#text"]}`,
        };
    } else {
        const products = xmlDoc.ProductSearchResponse.Products.Product;
        return products.map((product) => new Product(product));
    }
};

export const createProductList = (prod) => {
    const productList = new Set();
    prod = Array.isArray(prod) ? prod : [prod];

    prod.forEach((xmlDoc) => {
        productList.add(refineProduct(xmlDoc));
    });

    return [...productList].flat();
};

export const parseProductCode = (prod) => {
    const products = Array.isArray(prod) ? [...prod] : [prod];

    try {
        products.forEach((product) => {
            if (product instanceof Product) {
                throw new Error(
                    "파싱하려는 대상이 Product의 인스턴스가 아닙니다"
                );
            }
        });

        return products.map((product) => ({ productCode: product.code }));
    } catch (err) {
        throw err;
    }
};

// 요청시 입력 데이터 검사
export class RequestProduct {
    constructor({ product, sortCd, quantity, ...rest }) {
        if (
            typeof product !== "string" ||
            typeof sortCd !== "string" ||
            typeof quantity !== "number"
        ) {
            throw new Error("일치하는 인자가 없거나 올바른 타입이 아닙니다");
        }

        if (
            (rest.filter != null && typeof rest.filter !== "string") ||
            (rest.apiCode != null && typeof rest.apiCode !== "string") ||
            (rest.pageNum != null && typeof rest.pageNum !== "number")
        ) {
            throw new Error(
                "필수 인자가 아닌 값이 존재하지만 올바른 타입이 아닙니다"
            );
        }

        this.keyword = product;
        this.sortCd = sortCd;
        this.pageSize = quantity;
        this.filter = rest.filter || undefined;
        this.apiCode = rest.apiCode || undefined;
        this.pageNum = rest.pageNum || undefined;
    }
}
