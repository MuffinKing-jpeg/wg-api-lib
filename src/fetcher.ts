import axios from 'axios';
import { randomBytes } from 'node:crypto';
import { EventEmitter } from 'node:events';

class FetchEvent extends EventEmitter {}


export class Fetcher {
  private http = axios;
  private fetchEmitter = new FetchEvent();
  private queue: string[] = [];
  private emitterTimer = setInterval(this.emitter.bind(this), 150);

  constructor() {
  }

  getRequest(url: string): Promise<any> {
    const id = randomBytes(30).toString('hex')
    this.addId(id)

    return new Promise(resolve => {
      this.fetchEmitter.on(id,() => {
        this.http.get(url)
          .then(res => res.data)
          .then(data => {
            resolve(data)
          })
      })
    })
  }

  private addId(id:string): void {
    this.queue.push(id)
  }

  private emitter(): void {
    if(this.queue[0]) {
      this.fetchEmitter.emit(this.queue[0])
      this.queue.shift()
    }
  }
}
