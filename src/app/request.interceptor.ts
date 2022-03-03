import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';

import { LoaderService } from './services/loader.service';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  loader = true;
  constructor(private loaderservice: LoaderService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log(request);
    return next.handle(request).pipe(finalize(() => this.loaderservice.hide()));
  }
}
