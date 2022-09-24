import axios from 'axios';

export class Fetcher {
  private http = axios

  constructor() {
  }

  getRequest(url: string): Promise<any> {
    return new Promise(resolve => {
      this.http.get(url)
        .then(res => res.data)
        .then(data => {
          resolve(data)
        })
    })
  }
}
