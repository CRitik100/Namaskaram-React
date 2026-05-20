import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import About from "./component/About";
import RestaurantMenu from "./component/RestrauntMenu";
import Error from "./component/Error";
import useInternetStatus from "./utils/useInternetStatus";
import NoInternet from "./component/NoInternt";
// import Contact from "./component/Contact";
// import Grocery from "./component/grocery";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./component/Cart";

/*
mainContainer
    heading
        -Logo
        -Nav Items
    Body
        -Search 
        -Restaurant Container
            -Restaurant Card
                -Image
                -Name
                -price
                -rating
    Footer
        -Copyright
        -Links
        -Address
        -Contact
*/

/*
 * Chunking, code bundling, lazy loading, dynamic import, code splitting, on demand loading.--> For optimizing the code and improving the performance of the application.
 */

const Grocery = lazy(() => import("./component/grocery"));
const Contact = lazy(() => import("./component/Contact"));

const MainContainer = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Ritik Ch",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName }}>
        <div className="mainContainer p-8 bg-stone-100 font-serif">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: (
          <Suspense>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/restraunt/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
