import SharedLayout from "../components/general/SharedLayout";
import PRIVATE_ROUTES from "../constants/routes/PRIVATE_ROUTES";
import OrderNoteApp from "../pages/OrderNoteApp";
import RoutesWithNotFound from "./RoutesWithNotFound";
import { Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Preview from "../pages/Preview";
import Record from "../pages/Record";
import { useEffect } from "react";
import { fGetUser } from "../fetch/fUser";
import useUserStore from "../store/userStore";
import { useNavigate } from "react-router-dom";
import useOrderNote from "../store/orderNoteStore";
import SavedNotes from "../pages/SavedNotes";
import ResumeSendNote from "../pages/ResumeSendNote";
import useSocket from "../hooks/useSocket";
const RoutesAppPrivate = () => {
  const setSeller = useOrderNote((state) => state.setSeller);
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);
  const socket = useSocket();
  console.log("render");
  useEffect(() => {
    //fetching user
    fGetUser(JSON.parse(sessionStorage.getItem("token") || ""))
      .then((response) => {
        console.log(response);
        setUser(response.data);
        setSeller(response.data);
      })
      .catch(() => {
        sessionStorage.clear();
        navigate("/login", { replace: true });
      });
  }, []);

  useEffect(() => {
    //sockets
    if (socket) {
      socket.on("connect", () => {
        console.log("connected");
      });
    }
    return () => {
      if (socket) {
        socket.off("connect", () => console.log("connected"));
      }
    };
  }, [socket]);
  return (
    <RoutesWithNotFound>
      <Route
        path="/"
        element={<Navigate to={PRIVATE_ROUTES.CREATE_ORDER_NOTE} />}
      ></Route>
      <Route element={<SharedLayout />}>
        <Route
          path={PRIVATE_ROUTES.CREATE_ORDER_NOTE}
          element={<OrderNoteApp></OrderNoteApp>}
        ></Route>
        <Route
          path={PRIVATE_ROUTES.RECORD_ORDER_NOTES}
          element={<Record></Record>}
        ></Route>{" "}
        <Route
          path={PRIVATE_ROUTES.SAVED_NOTES}
          element={<SavedNotes></SavedNotes>}
        ></Route>
      </Route>
      <Route
        path={PRIVATE_ROUTES.PREVIEW}
        element={<Preview></Preview>}
      ></Route>
      <Route
        path={PRIVATE_ROUTES.RESUME_SEND}
        element={<ResumeSendNote></ResumeSendNote>}
      ></Route>
    </RoutesWithNotFound>
  );
};
export default RoutesAppPrivate;
