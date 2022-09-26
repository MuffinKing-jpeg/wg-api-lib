import axios from 'axios';
import { randomBytes } from 'node:crypto';
import { EventEmitter } from 'node:events';

class FetchEvent extends EventEmitter { }


export class Fetcher {
  private http = axios;
  private fetchEmitter = new FetchEvent();
  private queue: string[] = [];
  private isCounting: boolean = false;
  private emitterTimer!: any;
  private timerInterval: number = 150

  constructor() {
  }

  getRequest(url: string): Promise<any> {
    if(!this.isCounting) {
      this.startTimer();
      this.isCounting = true;
    }
    const id = randomBytes(30).toString('hex')
    this.addId(id)

    return new Promise(resolve => {

      this.fetchEmitter.on(id, () => {
        this.http.get(url)
          .then(res => res.data)
          .then(data => {
            resolve(data)
          })
      })
    })
  }

  private addId(id: string): void {
    this.queue.push(id)
  }

  private startTimer(): void {
    this.emitterTimer = setInterval(this.emitter.bind(this), this.timerInterval);
  }


  private emitter(): void {
    if (this.queue[0]) {
      this.fetchEmitter.emit(this.queue[0])
      this.queue.shift()
    } else {
      this.isCounting = false
      clearInterval(this.emitterTimer)
    }
  }
}
