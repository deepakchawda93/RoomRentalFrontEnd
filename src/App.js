import React from "react";
import CommanRoutesfile from "./mycomponents/commanRoutes/CommanRoutesfile";

import Header from "./mycomponents/commenPage/header/Header";
import Footer from "./mycomponents/commenPage/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
const App = () => {
  return (
    <>
      <Header />
      <CommanRoutesfile />
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        limit={3}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default App;
