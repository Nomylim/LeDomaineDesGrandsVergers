import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/l'atelier", "L'atelier", "/pages/l'atelier.html"),
    new Route("/pommiers", "Les Pommiers", "/pages/pommiers.html"),
    new Route("/tarifs", "Les Tarifs", "/pages/tarifs.html"),
    new Route("/pechers", "Les Pêchers", "/pages/pechers.html"),
    new Route("/cerisiers", "Les Cerisiers", "/pages/cerisiers.html"),

];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Domaine des grands Vergers";