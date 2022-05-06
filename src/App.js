import React, { useEffect, useState } from "react";
import CommanRoutesfile from "./mycomponents/commanRoutes/CommanRoutesfile";

import Header from "./mycomponents/commenPage/header/Header";
import Footer from "./mycomponents/commenPage/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
const App = () => {
  const [checkLogin,setCheckLogin] = useState(null);
 
  useEffect(() => {
    setCheckLogin(JSON.parse(localStorage.getItem("userDetails")));
  },[]);

  return (
    <>
      <Header checkLogin={checkLogin} />
      <CommanRoutesfile setCheckLogin={setCheckLogin} />
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
    </>
  );
};

export default App;
