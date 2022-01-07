import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  CategoryList: any = [ ];
  constructor(private service: SharedService) { }
  ngOnInit(): void {
    this.refreshCategoryList();
  }
  refreshCategoryList() {
    this.service.getCategories().subscribe(data => {
      console.log(data);

      this.CategoryList = data;
    });
  }
}
