import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  info1: string[]=["Rumma Waka","C193005","xyz@gmail.net"]
  info2: string[]=["Waka","C193251","xyzn@gmail.net"]
  info3: string[]=["Rumma ","C193255","xyza@gmail.net"]

  getinfo1(): string[]{
    return this.info1
  }
  getinfo2(): string[]{
    return this.info2
  }
  getinfo3(): string[]{
    return this.info3
  }
  constructor() { }
}
