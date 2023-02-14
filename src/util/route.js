export class Route {
    constructor(route, callback) {
        this.route = route;
        this.callback = callback;
    }

    match(route) {
        return this.route === route;
    }
}

export default class Routes {
    constructor() {
        this.routes = [];
    }

    add(route) {
        this.routes.push(route);
    }

    async check(route, cli) {
        this.routes.forEach(async (r) => {
            if (r.match(route)) await r.callback(cli);
        });
    }
}
