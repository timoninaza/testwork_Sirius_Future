import "../styles/globals.css";
import "react-datetime/css/react-datetime.css";
import { Provider } from "react-redux";
import { useStore } from "../store/store.ts";
import moment from "moment";
import "moment/locale/ru";

moment.locale("ru");

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
