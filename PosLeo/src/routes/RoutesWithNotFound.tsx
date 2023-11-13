import { Routes, Route } from 'react-router-dom';
import NotFound from '../pages/NotFound';
const RoutesWithNotFound = ({ children }: { children: React.ReactNode }) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
  );
};
export default RoutesWithNotFound;
