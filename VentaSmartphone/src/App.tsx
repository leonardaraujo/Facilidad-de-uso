import { BrowserRouter, Route } from 'react-router-dom';
import { GlobalStyle } from './components/styles/GlobalStyle';
import RoutesWithNotFound from './routes/RoutesWithNotFound';
import Login from './pages/Login';
import { Navigate } from 'react-router-dom';
import PRIVATE_ROUTES from './constants/routes/PRIVATE_ROUTES';
import AuthGuard from './guards/Auth.guard';
import RoutesAppPrivate from './routes/RoutesAppPrivate';
function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <RoutesWithNotFound>
          <Route
            path="/"
            element={<Navigate to={PRIVATE_ROUTES.APP} />}
          ></Route>
          <Route path={PRIVATE_ROUTES.LOGIN} element={<Login />}></Route>
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
