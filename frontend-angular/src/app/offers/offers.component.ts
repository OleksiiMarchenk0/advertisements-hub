import { Category } from './../interface/category';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Offer } from '../interface/offer';
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  allCategoriesFilter:Category=  {
    "id": 0,
    "name": "",
    "ordering": 0
}
  OffersList: Offer[] = [];
  CategoryList: Category[] = [];
  public filteredOffers: Offer[]=[];
  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.refreshCategoryList();
    this.refreshOffersList();
  }
  refreshCategoryList() {
    this.service.getCategories().subscribe(data => {
      console.log(data);

      this.CategoryList = data.sort(function(a, b) {
        return a.ordering - b.ordering;
      });;
    });
  }
  refreshOffersList() {
    this.service.getOffers().subscribe(data => {
      this.filteredOffers = data;
      console.log(data);
      this.OffersList = data;
    });
  }
  filterOffers(category: Category) {
    this.filteredOffers = this.OffersList
      .filter((offer: any) => {
        if (offer.category == category.id || category.id == 0) {
          return offer;
        }
      })
  }
}

