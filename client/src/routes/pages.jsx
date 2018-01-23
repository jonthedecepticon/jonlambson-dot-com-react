import LoginPage from 'views/Pages/LoginPage.jsx';
// import RegisterPage from 'views/Pages/RegisterPage.jsx';
import HomePage from 'views/Pages/HomePage.jsx';
import ContactPage from 'views/Pages/ContactPage.jsx';
import PortfolioPage from 'views/Pages/PortfolioPage.jsx';
import ResumePage from 'views/Pages/ResumePage.jsx';

var pagesRoutes = [
    { path: "/pages/login-page", name: "Login Page", mini: "LP", component: LoginPage },
    // { path: "/pages/register-page", name: "Register", mini: "RP", component: RegisterPage },
    { path: "/pages/home-page", name: "Home Page", mini: "HP", component: HomePage },
    { path: "/pages/contact-page", name: "Contact Page", mini: "CP", component: ContactPage },
    { path: "/pages/portfolio-page", name: "Portfolio Page", mini: "PP", component: PortfolioPage },
    { path: "/pages/resume-page", name: "Resume Page", mini: "RP", component: ResumePage }
];

export default pagesRoutes;
