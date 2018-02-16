import { HttpContext } from "./http.context";

export interface IComposable {
  toComposing: () => Composing;
}

export type Composing = (ctx: HttpContext, ...args: any[]) => void;