import { HttpContext } from "./http.context";

export type Composing = (ctx: HttpContext, next: () => any) => void;
