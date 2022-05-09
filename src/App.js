import React, { useEffect, useState } from "react";
import CommanRoutesfile from "./mycomponents/commanRoutes/CommanRoutesfile";
import { Container, Button } from "react-floating-action-button";
import Header from "./mycomponents/commenPage/header/Header";
import Footer from "./mycomponents/commenPage/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
const App = () => {
  const [checkLogin,setCheckLogin] = useState(null);
  const [checkLogin1,setCheckLogin1] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setCheckLogin(JSON.parse(localStorage.getItem("userDetails")));
  },[checkLogin1]);

  // for scroll top up button
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setVisible(true);
    } else if (scrolled <= 100) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible);
  return (
    <>
      <Header setCheckLogin1={setCheckLogin1} checkLogin={checkLogin} />
      <CommanRoutesfile setCheckLogin1={setCheckLogin1} />
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        limit={3}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
        {/* npm i react-floating-action-button */}
        <div style={{ display: visible ? "inline" : "none" }}>
        <Container>
          <Button
            tooltip="PageUp"
            icon="fas fa-arrow-up"
            onClick={scrollToTop}
          />
        </Container>
      </div>
    </>
  );
};
export default App;
