import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }

  getProducts()  {
    return[
     {
       name: 'ส้มโอ',
       price: 990,
       image:'../assets/img/ส้มโอทับทิมสยาม.jfif'
     },
     {
       name: 'แตงโม',
       price: 1000,
       image:'../assets/img/แตงโม.jfif'

     },
     {
       name: 'มะพร้าวน้ำหอม',
       price: 500,
       image:'../assets/img/มะพร้าว.jfif'

     },
    ];
 }
}

