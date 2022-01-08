import { Category } from './../interface/category';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  OffersList: any = [];
  CategoryList: any = [];
  public filterCategory: any;
  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.refreshCategoryList();
    this.refreshOffersList();
  }

  refreshCategoryList() {
    this.service.getCategories().subscribe(data => {
      console.log(data);

      this.CategoryList = data;
    });
  }
  refreshOffersList() {
    this.service.getOffers().subscribe(data => {
      this.filterCategory = data;
      console.log(data);
      this.OffersList = data;
    });
  }
  filterOffers(category: Category) {
    this.filterCategory = this.OffersList
      .filter((a: any) => {
        if (a.category == category.id || category.id == null) {
          return a;
        }
      })
  }
}

