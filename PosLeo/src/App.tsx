import { BrowserRouter, Route } from 'react-router-dom';
import RoutesWithNotFound from './routes/RoutesWithNotFound';
import { GlobalStyle } from './components/style/GlobalStyle';
import { Navigate } from 'react-router-dom';
import PRIVATE_ROUTES from './constants/routes/PRIVATE_ROUTES.ts';
import PUBLIC_ROUTES from './constants/routes/PUBLIC_ROUTES.ts';
import Login from './pages/Login.tsx';
import AuthGuard from './guards/Auth.guard.tsx';
import RoutesAppPrivate from './routes/RoutesAppPrivate.tsx';
function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <RoutesWithNotFound>
          <Route
            path="/"
            element={<Navigate to={PRIVATE_ROUTES.APP}></Navigate>}
          ></Route>
          <Route path={PUBLIC_ROUTES.LOGIN} element={<Login></Login>}></Route>
          <Route element={<AuthGuard />}>
            <Route
              path={`${PRIVATE_ROUTES.APP}/*`}
              element={<RoutesAppPrivate />}
            ></Route>
          </Route>
        </RoutesWithNotFound>
      </BrowserRouter>
    </>
  );
}

export default App;
