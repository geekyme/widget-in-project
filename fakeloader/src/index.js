import "./index.css";
import App from "./App";

if (typeof window !== "undefined" && window.document) {
  fetch(`${process.env.PUBLIC_URL}/asset-manifest.json`)
    .then(res => {
      return res.json();
    })
    .then(body => {
      var styles = document.createElement("link");
      styles.rel = "stylesheet";
      styles.type = "text/css";
      styles.media = "screen";
      styles.href = `${process.env.PUBLIC_URL}/${body["main.css"]}`;
      document.getElementsByTagName("head")[0].appendChild(styles);
    })
    .catch(e => {
      console.error("Failed to load widget styles:", e);
    });
}

export default App;
