const size = {
    mobile: "400px",
    tablet: "600px",
    laptop: "900px",
    desktop: "1200px",
};

const media = {
    mobile: `(min-width: ${size.mobile})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    desktop: `(min-width: ${size.desktop})`,
};

const scroll = `
    &::-webkit-scrollbar {
        width: 0px;
    }
    &::-webkit-scrollbar-thumb {
        position: fixed;
        right: 0;
        z-index: 9999;
        border-radius: 4px;
        background: transparent;
    }

    &:hover {
        &::-webkit-scrollbar-thumb {
            background: #ccc;
        }
    }
`;

const font = {
    gmarket: {
        bold: `GmarketSansTTFBold, sans-serif, Arial`,
        medium: `GmarketSansTTFMedium, sans-serif, Arial`,
        light: `GmarketSansTTFLight, sans-serif, Arial`,
    }
}

const theme = {
    mainColor: "#0a4297",
    media,
    size,
    font,
    scroll
};

export default theme;
