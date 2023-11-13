import { Routes, Route } from 'react-router-dom';
const RoutesWithNotFound = ({ children }: { children: React.ReactNode }) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<p></p>}></Route>
    </Routes>
  );
};
export default RoutesWithNotFound;
