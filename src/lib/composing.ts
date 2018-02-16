import { HttpContext } from "./http.context";

export type Composing = (ctx: HttpContext, ...args: any[]) => void;
