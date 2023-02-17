import { useEffect } from "react";
import { useState } from "react";
const getOrientation = () => window.screen.orientation.type;

const useScreens = () => {
  const [orientation, setOrientation] = useState(getOrientation());

  const updateOrientation = (_event: Event) => {
    setOrientation(getOrientation());
  };

  useEffect(() => {
    window.addEventListener("orientationchange", updateOrientation);
    return () => {
      window.removeEventListener("orientationchange", updateOrientation);
    };
  }, []);

  return orientation;
};

export default useScreens;
