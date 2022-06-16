import { Component, OnInit } from '@angular/core';
import { Color } from '../models/color';
import { ColorService } from '../services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
  providers:[ColorService]
})
export class ColorComponent implements OnInit {
  colors:Color[]=[];
  selectedCategory: Color | null = null;
  constructor(private serv:ColorService) { }

  ngOnInit(): void {
    this.serv.getColors().subscribe(data=>{
      this.colors = data
    });
  }
  displayAll = true;
  selectCategory(item?: Color) {
    if (item) {
      this.selectedCategory = item;
      this.displayAll = false;
    } else {
      this.selectedCategory = null;
      this.displayAll = true;
    }
  }

}
