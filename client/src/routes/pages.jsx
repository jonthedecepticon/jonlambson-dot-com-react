import LoginPage from 'views/Pages/LoginPage.jsx';
import RegisterPage from 'views/Pages/RegisterPage.jsx';
import HomePage from 'views/Pages/HomePage.jsx';

var pagesRoutes = [
    { path: "/pages/login-page", name: "Login Page", mini: "LP", component: LoginPage },
    { path: "/pages/register-page", name: "Register", mini: "RP", component: RegisterPage },
    { path: "/pages/home-page", name: "Home Page", mini: "HP", component: HomePage }
];

export default pagesRoutes;
