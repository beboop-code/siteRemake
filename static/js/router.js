/* Page Components */
import Portfolio from './pages/Portfolio/Portfolio';
import PortfolioDetail from './pages/PortfolioDetail/PortfolioDetail';
import Passions from './pages/Passions/Passions';
import About2 from './pages/About/AboutV2';

import { articleMap } from './articles/articleMap';
import ExtraProjects from './pages/Extra/ExtraProjects';

const router = [
  {
    path: '/',
    element: <Portfolio />
  },
  {
    path: 'about',
    element: <About2 />
  },
  {
    path: 'passions',
    element: <Passions />
  },
  {
    path: 'portfolio',
    element: <Portfolio />
  },
  {
    path: 'portfolio/:caseStudyName',
    element: <PortfolioDetail articleMap={articleMap} />
  },
  {
    path: 'extra-projects',
    element: <ExtraProjects />
  }
];

export default router;
