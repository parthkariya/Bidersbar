import "./App.css";
import {
  Allevents,
  Bidddingpayment,
  EditProfile,
  ForgatePass,
  Home,
  Howitwork,
  Landingpage,
  LiveBidding,
  Login,
  NewPassword,
  NotificationMenu,
  Orders,
  PickATable,
  ResetOTP,
  Singlepageeventdetails,
  Verification,
  Yourbid,
  CartConfirmation,
  MenuScreen,
  Mycart,
  PaymentPage,
} from "./pages";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Footer, Navbar } from "./common";
import Signup from "./pages/signup/Signup";
import Biddingconformation from "./pages/biddingconformation/Biddingconformation";
import Counterbiddingpayment from "./pages/counterbiddingpayment/Counterbiddingpayment";
import Counterbiddingconformation from "./pages/counterbiddingconformation/Counterbiddingconformation";
import PrivateRoutes from "./utils/PrivateRoutes";
import OrderRoutes from "./utils/OrderRoutes";
function App() {
  return (
    <>
      {/* <Landingpage /> */}
      <BrowserRouter basename="bbar">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Landingpage />} />
          <Route path="/forgatepass" element={<ForgatePass />} />
          <Route path="/resetpassotp" element={<ResetOTP />} />
          <Route path="/resetpassword" element={<NewPassword />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/events" element={<Allevents />} />
            <Route path="/eventsdetails" element={<Singlepageeventdetails />} />
            <Route path="/verification" element={<Verification />} />
            <Route path="/howitwork" element={<Howitwork />} />
            <Route
              path="/biddingconformation"
              element={<Biddingconformation />}
            />
            <Route
              path="/counterbiddingconformation"
              element={<Counterbiddingconformation />}
            />
            <Route path="/payment" element={<Home />} />
            <Route path="/notification" element={<NotificationMenu />} />
            <Route path="/yourbid" element={<Yourbid />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/editprofile" element={<EditProfile />} />
            <Route path="/counterbid" element={<Counterbiddingpayment />} />
            <Route path="/cartsuccess" element={<CartConfirmation />} />
            <Route path="/menu" element={<MenuScreen />} />
            <Route path="/cart" element={<Mycart />} />
            <Route path="/orderpaymet" element={<PaymentPage />} />
            <Route element={<OrderRoutes />}>
              <Route path="/livebidding" element={<LiveBidding />} />
              <Route path="/picktable" element={<PickATable />} />
              <Route path="/biddingpayment" element={<Bidddingpayment />} />
            </Route>
          </Route>

          {/* <Route path="/Products" element={<Products />} />
          <Route path="/Aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} /> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
