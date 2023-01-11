import { App } from "./app";
import { router } from './router'

const app : App = new App();
app.server.listen(3000);
app.server.use(router);
