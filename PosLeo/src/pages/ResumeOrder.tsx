import Cart from "../components/ResumeOrder/Cart";
import ResumeData from "../components/ResumeOrder/ResumeData";
import { LayoutResumeOrder } from "../components/style/resumeOrder/ResumeOrder.styles";
import PRIVATE_ROUTES from "../constants/routes/PRIVATE_ROUTES";
import useResumeOrderStore from "../store/resumeOrderStore";
import { Navigate } from "react-router-dom";
const ResumeOrder = () => {
  const { resumeOrderNote } = useResumeOrderStore((state) => ({
    resumeOrderNote: state.resumeOrderNote,
  }));
  if (!resumeOrderNote.id) {
    return <Navigate to={`/${PRIVATE_ROUTES.APP}`} replace={true} />;
  }
  return (
    <LayoutResumeOrder>
      <ResumeData
        seller={resumeOrderNote.seller}
        client={resumeOrderNote.client}
        bagId={resumeOrderNote.bagId}
      ></ResumeData>
      <Cart
        products={resumeOrderNote.products}
        idOrderNote={resumeOrderNote.id}
      ></Cart>
    </LayoutResumeOrder>
  );
};
export default ResumeOrder;
