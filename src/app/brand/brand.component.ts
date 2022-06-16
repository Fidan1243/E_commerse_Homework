import { Component, OnInit } from '@angular/core';
import { Brand } from '../models/brand';
import { BrandService } from '../services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
  providers:[BrandService]
})
export class BrandComponent implements OnInit {
  selectedCategory: Brand | null = null;
  brands:Brand[]=[];
  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.brandService.getBrands().subscribe(data=>{
      this.brands = data
    });
  }
  displayAll = true;
  selectCategory(item?: Brand) {
    if (item) {
      this.selectedCategory = item;
      this.displayAll = false;
    } else {
      this.selectedCategory = null;
      this.displayAll = true;
    }
  }

}
