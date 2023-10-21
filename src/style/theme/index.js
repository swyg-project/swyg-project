const size = {
  tablet: "600px",
  laptop: "900px",
  desktop: "1200px",
};

const media = {
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};

const theme = {
  mainColor: "#0a4297",
  media,
  size,
};

export default theme;
