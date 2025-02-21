import routes from './router';

/* Components */
import HeaderNav from './components/HeaderNav/HeaderNav';
import Footer from './components/Footer/Footer';
import './Layout.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Layout() {
  return (
    <BrowserRouter>
      <div className="layout">
        <HeaderNav />
        <div id="content-container" className="content-container">
          <Routes>
            {routes.map((route, idx) => (
              <Route
                path={route.path}
                element={route.element}
                key={`route-${idx}`}
              />
            ))}
            {/* Add a default path if component doesn't exist */}
            {/* // TODO: Maybe make a component to show user they entered the wrong path? */}
            <Route path="*" element={routes[0].element} key="route-default" />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default Layout;
