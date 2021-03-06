import Pages from 'containers/Pages/Pages.jsx';
import Dash from 'containers/Dash/Dash.jsx';

var appRoutes = [
    { path: "/pages/login-page", name: "Pages", component: Pages },
    // { path: "/pages/register-page", name: "Pages", component: Pages },
    { path: "/pages/home-page", name: "Pages", component: Pages },
    { path: "/pages/contact-page", name: "Pages", component: Pages },
    { path: "/pages/portfolio-page", name: "Pages", component: Pages },
    { path: "/pages/resume-page", name: "Pages", component: Pages },
    { path: "/", name: "Home", component: Dash }
];

export default appRoutes;
