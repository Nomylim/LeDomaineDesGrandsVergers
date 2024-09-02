import Route from "./Route.js"; 

//Définir ici les routes
export const allRoutes = [
    new Route("/", "Acceuil", "/pages/home.html"),
    new Route("/", "l'atelier", "/pages/l'atelier.html"),
    new Route("/", "pommier", "/pages/pommier.html"),
    new Route("/", "cerisiers", "/pages/cerisiers.html"),
    new Route("/", "pechers", "/pages/pechers.html"),
    new Route("/", "tarifs", "/pages/tarifs.html"),

];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websitename = "Le domaine des grands vergers";