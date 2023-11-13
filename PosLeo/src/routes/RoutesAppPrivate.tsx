import PRIVATE_ROUTES from "../constants/routes/PRIVATE_ROUTES";
import RoutesWithNotFound from "./RoutesWithNotFound";
import { Route, Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { fGetUser } from "../fetch/fUser";
import useUserStore from "../store/userStore";
import SharedLayout from "../components/general/SharedLayout";
import SearchSale from "../pages/SearchSale";
import ResumeOrder from "../pages/ResumeOrder";
import OrderNotes from "../pages/OrderNotes";
import useOrderNotesStore from "../store/orderNotesStore";
import { fGetOrderNotes } from "../fetch/fOrderNote";

import playBellSound from "../utils/soundBell";
import SaleNote from "../pages/SaleNote";
import SaleNoteNotFound from "../pages/SaleNoteNotFound";
import useSocket from "../hooks/useSocket";
const RoutesAppPrivate = () => {
  //obtiene los datos del usuario
  const setAllOrderNotes = useOrderNotesStore(
    (state) => state.setAllOrderNotes
  );
  const socket = useSocket();
  const { setUser } = useUserStore();
  const navigate = useNavigate();
  useEffect(() => {
    //fetching user
    fGetUser(JSON.parse(sessionStorage.getItem("token") || ""))
      .then((response) => {
        setUser(response.data);
      })
      .catch(() => {
        sessionStorage.clear();
        navigate("/login", { replace: true });
      });

    //first refresh
    fGetOrderNotes()
      .then((respond) => {
        console.log("setting first refresh");
        setAllOrderNotes(respond.data);
        console.log();
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    //sockets
    if (socket) {
      socket.on("connect", () => console.log("connected"));
      socket.on("newOrder", () => {
        fGetOrderNotes()
          .then((respond) => {
            playBellSound();
            console.log("setting data");
            console.log(respond.data);
            useOrderNotesStore.getState().setAllOrderNotes(respond.data);
          })
          .catch((err) => console.log(err));
        console.log("newOrder");
      });
    }
    return () => {
      if (socket) {
        socket.off("connect", () => console.log("connected"));
        socket.off("newOrder", () => {
          fGetOrderNotes()
            .then((respond) => {
              console.log("setting data");
              useOrderNotesStore.getState().setAllOrderNotes(respond.data);
            })
            .catch((err) => console.log(err));
          console.log("newOrder");
        });
      }
    };
  }, [socket]);

  return (
    <RoutesWithNotFound>
      <Route
        path="/"
        element={<Navigate to={PRIVATE_ROUTES.ORDER_NOTES} />}
      ></Route>
      <Route element={<SharedLayout />}>
        <Route
          path={PRIVATE_ROUTES.ORDER_NOTES}
          element={<OrderNotes></OrderNotes>}
        ></Route>
        <Route
          path={PRIVATE_ROUTES.SEARCH_SALE}
          element={<SearchSale></SearchSale>}
        ></Route>
        <Route
          path={PRIVATE_ROUTES.RESUME_ORDER}
          element={<ResumeOrder></ResumeOrder>}
        ></Route>
        <Route
          path={PRIVATE_ROUTES.SALE_NOTE}
          element={<SaleNote></SaleNote>}
        ></Route>{" "}
        <Route
          path={"saleNote/notFound"}
          element={<SaleNoteNotFound></SaleNoteNotFound>}
        ></Route>
      </Route>
    </RoutesWithNotFound>
  );
};
export default RoutesAppPrivate;
