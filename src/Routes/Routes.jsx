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

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
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
        path: "/my-bookings",
        element: (
          <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
        ),
      },
      {
        path: "/vehicle-details/:id",
        element: (
          <PrivateRoute>
            <VehicleDetails></VehicleDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
