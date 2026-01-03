import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import AllVehicles from "../Pages/AllVehicles/AllVehicles";
import AddVehicle from "../Pages/AddVehicle/AddVehicle";
import MyVehicles from "../Pages/MyVehicles/MyVehicles";
import MyBookings from "../Pages/MyBookings/MyBookings";
import PrivateRoute from "./PrivateRoute";
import VehicleDetails from "../Pages/VehicleDetails/VehicleDetails";
import UpdateVehicle from "../Pages/UpdateVehicle/UpdateVehicle";
import Error from "../Pages/Error/Error";
import DashboardLayout from "../Layout/DashboardLayout";
import DashboardHome from "../Pages/DashboardHome/DashboardHome";
import Profile from "../Pages/Profile/Profile";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
      {
        path: "/all-vehicles",
        element: <AllVehicles></AllVehicles>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/add-vehicle",
        element: (
          <PrivateRoute>
            <AddVehicle></AddVehicle>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-vehicles",
        element: (
          <PrivateRoute>
            <MyVehicles></MyVehicles>
          </PrivateRoute>
        ),
      },

      {
        path: "/vehicle-details/:id",
        element: <VehicleDetails></VehicleDetails>,
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateVehicle></UpdateVehicle>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        Component: DashboardHome,
      },
      {
        path: "profile",
        Component: Profile,
      },
      {
        path: "my-bookings",
        Component: MyBookings,
      },
    ],
  },
]);
