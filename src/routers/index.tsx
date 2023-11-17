import { Route, Routes } from "react-router-dom"
import { routes } from "./Routers"
// import { useContext } from "react"
// import { AppContext } from "../contexts/AppContext"

interface UserProfile {
  profile: {
    ROLES_NAME: string;
    // Add other properties as needed
  };
}

interface RouteType {
  path: string;
  name: string;
  element: React.ReactElement;
  elementPageLogin: React.ReactElement;
  isPrivate: boolean;
}
export default function index() {
  // const { user } = useContext(AppContext)
  // const user: UserProfile | null = null;
  const user : UserProfile = {profile : {ROLES_NAME : "ADMIN"}} // Update as needed

  const RenderElement = (r: RouteType, u: UserProfile | null) => {
    if (r.isPrivate && u?.profile.ROLES_NAME === "ADMIN") {
      return r.element;
    }
    if (r.isPrivate && u?.profile.ROLES_NAME !== "ADMIN") {
      return r.elementPageLogin;
    }
    if (!r.isPrivate && u) {
      return r.element;
    }
    return r.elementPageLogin;
  };

  return (
    <Routes>
      {routes.map((r, i) => (
        <Route key={i} path={r.path} element={RenderElement(r, user)} />
      ))}
    </Routes>
  );
}
