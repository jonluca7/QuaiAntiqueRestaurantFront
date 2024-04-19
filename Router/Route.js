export default class Route {
    constructor(url, title, pathHtml,authorize, pathJS = "") {
      this.url = url;
      this.title = title;
      this.pathHtml = pathHtml;
      this.pathJS = pathJS;
      this.authorize = authorize;
    }
}

/*

[] -> Tout le monde peut y accéder ;
["disconnected"] -> Réservé aux Utilisateurs déconnectés ;
["client"] -> Reservé aux utilisateurs avec le role client;
["admin"] -> Reservé aux tilisateurs avec le role admin ;
["client", "admin"] -> Reservé aux utilisateurs avec le role client ou admin;


*/