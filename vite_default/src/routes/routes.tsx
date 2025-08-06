import { lazy, type JSX } from "react";
import type { AdminRoute } from "../types/common";

// export interface AdminRoute {
//   path: string;
//   name: string;
//   icon: string;
//   element?: JSX.Element;
//   hidden?: boolean;
//   children?: AdminRoute[];
// }

const Dashboard = lazy(() => import("../pages/Dashboard"));
const Users = lazy(() => import("../pages/Users"));
const Inbox = lazy(() => import("../pages/Inbox"));
const Login = lazy(() => import("../pages/Login"));
export const adminRoutes: AdminRoute[] = [
  {
    path: "",
    name: "",
    element: <Login />,
  },
  {
    path: "dashboard",
    name: "Dashboard",
    element: <Dashboard />,
  },
  {
    path: "users",
    name: "Users",
    element: <Users />,
  },
  {
    path: "emails",
    name: "Email",
    children: [
      {
        path: "inbox",
        name: "Inbox",
        element: <Inbox />,
      },
    ],
  },
];
