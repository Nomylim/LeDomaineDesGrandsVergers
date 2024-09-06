import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/l'atelier", "l'atelier", "/pages/l'atelier.html"),
    new Route("/pommiers", "les pommiers", "/pages/pommiers.html"),
    new Route("/tarifs", "les tarifs", "/pages/tarifs.html"),
    new Route("/pechers", "les pêchers", "/pages/pechers.html"),
    new Route("/cerisiers", "les cerisiers", "/pages/cerisiers.html"),

];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Domaine des grands Vergers";