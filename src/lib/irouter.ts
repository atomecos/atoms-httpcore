export interface IRouter {
  parseFrom: (routes: { [key: string]: { topic: string; type: string; quality: string; } }) => number;
  route: (actionPath: string, on: { topic: string; type: string; quality: string; }) => any;
  resolve: (method: string, path: string) => undefined | { channel: { topic: string; type: string; quality: string; }, value: { [name: string]: string; } };
}
