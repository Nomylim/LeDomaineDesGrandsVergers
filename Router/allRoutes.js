import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/l'atelier", "l'atelier", "/pages/l'atelier.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Domaine des grands Vergers";