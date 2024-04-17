import Route from "./Route.js";
//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "La Galerie", "/pages/galerie.html"),
    new Route("/signin", "Connexion", "/pages/auth/signin.html" , "/js/auth/signin.js"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html","/js/auth/signup.js"),
    new Route("/account", "Mon Compte", "/pages/auth/account.html"),
    new Route("/editPassword", "Changememt de mot de passe", "/pages/auth/editpassword.html"),
    new Route("/allResa", "Vos Réservations", "/pages/reservations/allResa.html"),
    new Route("/reservez", "réservez", "/pages/reservations/reservez.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";