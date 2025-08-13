import { Suspense, type JSX } from "react";
import { Route, Routes } from "react-router-dom";
import { adminRoutes } from "./routes";
import AdminLayout from "../layout/layout";
import NotFound from "../pages/Notfound";

interface RouteConfig {
  path: string;
  element: JSX.Element | null;
  children?: RouteConfig[];
}

const renderRouteTree = (routes: RouteConfig[]): JSX.Element[] =>
  routes.map(({ path, element, children }) => (
    <Route key={path} path={path} element={element}>
      {children && renderRouteTree(children)}
    </Route>
  ));

export default function Router(): JSX.Element {
  return (
    <Suspense fallback={"loading....."}>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          {renderRouteTree(adminRoutes)}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
