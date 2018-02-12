import { IProcessContext } from "atomservicescore";
import { HttpContextStore } from "./http.context.store";

export interface HttpContext<RequestType = any, ResponseType = any> {
  // Core Functions
  toolname: string;
  process: IProcessContext;
  store: HttpContextStore;

  request: RequestType;
  response: ResponseType;

  // Request
  header: any;
  headers: any;
  method: string;           //  GET
  href: string;             //  http://localhost:3000/sample/url?qs01=01&qs02=02
  origin: string;           //  http://localhost:3000
  host: string;             //  localhost:3000
  hostname: string;         //  localhost
  protocol: string;         //  http
  originalUrl: string;      //  /sample/url?qs01=01&qs02=02
  url: string;              //  /sample/url?qs01=01&qs02=02
  path: string;             //  /sample/url
  querystring: string;      //  qs01=01&qs02=02
  query: string;            //  { qs01: "01", qs02: "02" }
  get(field: string): any;  //  Get "Header Field"
  data<DataType = any>(): DataType;

  // Response
  body: any;
  status: any;
  message: any;
  length: string;
  type: string;
  append(field: string, value: string): void;       //  Append "Header Field"
  set(field: string | any, value?: string): void;   //  set("field", "value") | set({ "field": "value" })
}
