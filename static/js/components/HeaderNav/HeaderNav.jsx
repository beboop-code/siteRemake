import { useEffect, useRef } from 'react';
import './HeaderNav.css';
import { Link, useLocation } from 'react-router-dom';

/* Hi Alissa! Use me to change TopNav height! */
export const NAV_HEIGHT = 60;

const addActiveLink = linkRef => linkRef.current.classList.add('active-link');

function HeaderNav() {
  const { pathname } = useLocation();

  /* All Link Refs */
  const aboutLinkRef = useRef(null);
  const portfolioLinkRef = useRef(null);
  const headerRef = useRef(null);
  const extraLinkRef = useRef(null);

  /* Create shadow effect when header is on top of content */
  useEffect(() => {
    const content = document.querySelector('#content-container');
    const { current: header } = headerRef;

    /* onScroll add/remove shadow when passed Heading*/
    document.addEventListener('scroll', () =>
      content?.getBoundingClientRect()?.top <= NAV_HEIGHT
        ? header.classList.add('has-shadow')
        : header.classList.remove('has-shadow')
    );
  }, []);

  /* Update styles based on current tab changing */
  useEffect(() => {
    [
      { to: '/portfolio/', ref: portfolioLinkRef },
      { to: '/about/', ref: aboutLinkRef },
      { to: '/extra-projects/', ref: extraLinkRef }
    ].forEach(link => {
      /* Remove all style classes from links */
      link.ref.current.classList.remove('active-link');

      /* Add class back if the user is on that tab */
      if (link.to === pathname?.toLowerCase()) {
        addActiveLink(link.ref);
      } else if (pathname === '/') {
        /* In the special case of "Root", force to Portfolio Tab */
        addActiveLink(portfolioLinkRef);
      }
    });
  }, [pathname]);

  return (
    <nav
      ref={headerRef}
      className="header-container"
      style={{ height: `${NAV_HEIGHT}px` }}
    >
      <Link to="/" className="header-link-left">
        <p>Alissa Kushner</p>
      </Link>
      <div className="header-right">
        <Link ref={portfolioLinkRef} className="header-link" to="/portfolio/">
          Portfolio
        </Link>
        <Link ref={aboutLinkRef} className="header-link" to="/about/">
          About
        </Link>
        <Link ref={extraLinkRef} className="header-link" to="/extra-projects/">
          Extra
        </Link>
      </div>
    </nav>
  );
}

export default HeaderNav;
