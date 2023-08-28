import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import {
  Form,
  ConfirmationPage,
  EditForm,
  ThankYouPage,
  ProgressiveImage
} from "./components/exportModules";
import { useAppContext } from "./context/AppContext";
import useBackgroundImage from "./hooks/useBackgroundImage";

function App() {
  const {currentPage} = useAppContext()
  const { small: smallImage, large: largeImage } = useBackgroundImage();
  return (
    <ProgressiveImage
        smallImage={smallImage}
        largeImage={largeImage}
        alt="Background Image"
        className="app-container">
      <Navbar />
      {currentPage === "home" && <Homepage />}
      {currentPage === "form" && <Form />}
      {currentPage === "edit" && <EditForm />}
      {currentPage === "confirm" && <ConfirmationPage />}
      {currentPage === "last" && <ThankYouPage />}
      </ProgressiveImage>
  );
}

export default App;
