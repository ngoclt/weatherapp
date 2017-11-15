import { 
  Injectable, 
  Inject 
} from '@angular/core';
import {
  APP_CONFIG,
  IAppConfig
} from './app.config';
import {
  Http,
  Headers,
  RequestOptions,
  URLSearchParams,
  Response
} from '@angular/http';
import 'rxjs/Rx';
import {
  Observable
} from 'rxjs/Observable';

@Injectable()
export class AppService {

  constructor(private http: Http, 
    @Inject(APP_CONFIG) private config: IAppConfig) {
    
  }

  request(path: string, param: any): Observable < any > {
    const url = this.config.apiEndpoint + path;
    const params: URLSearchParams = new URLSearchParams();
    for (const key in param) {
      if (param.hasOwnProperty(key)) {
        const val = param[key];
        params.set(key, val);
      }
    }

    const options = new RequestOptions({
      search: params
    });

    return this.http
      .get(url, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    const body = res.json();

    return body || {};
  }

  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';

    return Observable.throw(errMsg);
  }
}
