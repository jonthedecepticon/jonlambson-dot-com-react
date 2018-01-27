import Dashboard from 'views/Dashboard/Dashboard.jsx';
import GoogleMaps from 'views/Maps/GoogleMaps.jsx';
import FullScreenMap from 'views/Maps/FullScreenMap.jsx';
import SurveyNew from 'views/Forms/Surveys/SurveyNew.jsx';
import VectorMap from 'views/Maps/VectorMap.jsx';
import Calendar from 'views/Calendar/Calendar.jsx';
import UserPage from 'views/Pages/UserPage.jsx';
import Donate from 'views/Pages/DonatePage.jsx';

import pagesRoutes from './pages.jsx';

var pages = [{ path: "/pages/user-page", name: "User Page", mini: "UP", component: UserPage }].concat(pagesRoutes);

var dashRoutes = [
    { path: "/dashboard", name: "Dashboard", icon: "pe-7s-graph", component: Dashboard },
    { collapse: true, path: "/maps", name: "Maps", state: "openMaps", icon: "pe-7s-map-marker", views:
        [{ path: "/maps/google-maps", name: "Google Maps", mini: "GM", component: GoogleMaps },
        { path: "/maps/full-screen-maps", name: "Full Screen Map", mini: "FSM", component: FullScreenMap },
        { path: "/maps/vector-maps", name: "Vector Map", mini: "VM", component: VectorMap }]
    },
    { path: "/forms/survey-new", name: "Survey", icon: "pe-7s-note2", component: SurveyNew },
    { path: "/calendar", name: "Calendar", icon: "pe-7s-date", component: Calendar },
    { path: "/donate", name: "Purchase Credits", icon:"pe-7s-gift", component: Donate },
    { collapse: true, path: "/pages", name: "Pages", state: "openPages", icon:"pe-7s-news-paper", views:
        pages
    },
    { redirect: true, path: "/", pathTo: "/pages/home-page", name: "Home" }
];
export default dashRoutes;
