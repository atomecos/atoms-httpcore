export interface HttpRouter {
  setRoute(actionPath: string, on: { topic: string; type: string; quality: string; }): any;
  setRoutes(routes: { [actionPath: string]: { topic: string; type: string; quality: string; }; }): number;
  resolve(method: string, path: string): undefined | { channel: { topic: string; type: string; quality: string; }, value: { [name: string]: string; } };
}
