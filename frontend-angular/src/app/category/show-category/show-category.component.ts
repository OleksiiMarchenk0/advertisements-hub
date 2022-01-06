import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.scss']
})
export class ShowCategoryComponent implements OnInit {
  CategoryList: any = [ ];
  constructor(private service: SharedService) {
    console.log("constructotrr");

  }

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
