import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'platzi-store';

  items = ['nicolas', 'roni', 'carlos'];

  power:number = 10;
 

  addItems(){
    this.items.push(this.title)
  }
  deleteItem(index:number){
    this.items.splice(index,1)

  }

  ngOnInit(): void {
  }

}
