import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  save(key: string, data: string) {
    // sessionStorage.setItem(key, this.getSettable(data));
    sessionStorage.setItem(key, data);
  }

  read(key: string) {
    const value = sessionStorage.getItem(key);
    // return this.getGettable(value);
    return value;
  }

  remove(key: string) {
    sessionStorage.removeItem(key);
  }

  clear() {
    sessionStorage.clear();
  }
  
}
