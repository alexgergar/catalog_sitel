import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

// this is needed for global css files for the next.js framework
// individual component css files are in the pages folder with componentName.module.css
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}