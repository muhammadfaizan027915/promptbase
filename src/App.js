import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Views/Layout";
import Account from "./Views/Account";
import Error from "./Views/Error";
import Profile from "./Views/Profile";
import Checkout from "./Views/Checkout";
import Success from "./Views/Success";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Error />} />
        <Route path="account" element={<Account />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
        <Route path="checkout/success" element={<Success />} />
      </Route>
      <Route path="checkout/:id" element={<Checkout />} />
    </>
  )
);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
