import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, Response, Headers } from "@angular/http";
import { Observable } from "rxjs";

@Injectable()
export class RaspberryService {

  private serverURL:string = "Url";

    private headers:Headers = new Headers(
      {
        'Accept': 'application/json',
        'Content-Type': 'application/hal+json',
        'Access-Control-Allow' : '*'
      }
    );

  constructor(private http:Http) { }

  getUrl(url: string):string {
    return this.serverURL + url;
  }

  getOptions(_options: RequestOptionsArgs):RequestOptionsArgs{
    let op =  {headers: this.headers};
    if(_options){
      return Object.assign(op, _options);
    }
    return op;
  }

  get(endpoint:string, options?: RequestOptionsArgs):Observable<Response>{
    let url = this.getUrl(endpoint);
    let op = this.getOptions(options);


    return this.http.get(url).map(res=>res.json()).catch(err=>Observable.throw(err));

  }

  post(endpoint:string, body:any, options?: RequestOptionsArgs):Observable<Response>{
    let url = this.getUrl(endpoint);
    let op = this.getOptions(options);
    return this.http.post(url,body,op).map(res=>res.json()).catch(err=>Observable.throw(err));

  }

  put(endpoint:string, body:any, options?: RequestOptionsArgs):Observable<Response>{
    let url = this.getUrl(endpoint);
    let op = this.getOptions(options);
    return this.http.put(url,body,op).map(res=>res.json()).catch(err=>Observable.throw(err));

  }

  delete(endpoint:string, options?: RequestOptionsArgs):Observable<Response>{
    let url = this.getUrl(endpoint);
    return this.http.delete(url,options).map(res=>res.json()).catch(err=>Observable.throw(err));

  }

}

