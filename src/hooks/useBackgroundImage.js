// useBackgroundImage.js
import { useAppContext } from "../context/AppContext";

const useBackgroundImage = () => {
  const { currentPage } = useAppContext();

  const getBackgroundImage = () => {
    if (currentPage === "home") {
      return {
        small: "/src/assets/pics/small_image.png",
        large: "/src/assets/pics/BG_Welcome_page@2x.png"
      };
    } else if (
      currentPage === "form" ||
      currentPage === "edit" ||
      currentPage === "confirm"
    ) {
      return {
        small: "/src/assets/pics/small_image.png",
        large: "/src/assets/pics/BG_EnterTextfield_page@2x.png"
      };
    } else if (currentPage === "last") {
      return {
        small: "/src/assets/pics/small_image.png",
        large: "/src/assets/pics/ThankYouPage.png"
      };
    }
  };

  return getBackgroundImage();
};

export default useBackgroundImage;
