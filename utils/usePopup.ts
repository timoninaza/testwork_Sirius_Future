import { useEffect, useRef, useState } from "react";

const usePopup = () => {
  const [popupOpened, setPopupOpened] = useState(false);
  const popupRef = useRef();
  useEffect(() => {
    if (popupOpened) {
      const onClick = (e) => {
        if (popupRef.current && !popupRef.current.contains(e.target)) {
          setPopupOpened(false);
        }
      };
      document.body.addEventListener("click", onClick);
      return () => document.body.removeEventListener("click", onClick);
    }
  }, [popupOpened]);
  return [popupOpened, setPopupOpened, popupRef];
};

export default usePopup;
