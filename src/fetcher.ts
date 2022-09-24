import axios from 'axios';
import { interval, Observable, throttle } from 'rxjs';

export class Fetcher {
  private http = axios

  constructor() {
  }

  getRequest(url: string) {
    return new Observable(subscriber => {
      this.http.get(url)
        .then(res => res.data)
        .then(data => {
          console.log(url);

          subscriber.next(data)
        })
    })
      .pipe(throttle(() => interval(1000)))
  }
}
