import { HttpContext } from "./http.context";

export interface HttpRouter {
  setRoute(actionPath: string, on: { topic: string; type: string; quality: string; }): any;
  setRoutes(routes: { [actionPath: string]: { topic: string; type: string; quality: string; }; }): number;
  set404NotFoundHandler(handler: (ctx: HttpContext, path: string, next: () => Promise<void>) => Promise<void>): void;
  set500ErrorHandler(handler: (ctx: HttpContext, error: any, next: () => Promise<void>) => Promise<void>): void;
  resolve(method: string, path: string): undefined | { channel: { topic: string; type: string; quality: string; }, value: { [name: string]: string; } };
}
