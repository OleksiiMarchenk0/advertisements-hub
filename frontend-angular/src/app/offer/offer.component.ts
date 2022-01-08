import { Offer } from './../interface/offer';
import { Category } from '../interface/category';
import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {
  offer: Offer;
  category: Category;
  sub: any;
  id: number;
  categoryId: number;
  isDataAvailable: boolean = false;

  constructor(private service: SharedService,
    private activatedRoute: ActivatedRoute) {
    this.id = 0;

    this.categoryId = 0;
    this.offer = {
      "id": 0,
      "name": "",
      "description": "",
      "price": "",
      "created_at": "",
      "category": 0
    };
    this.category = {
      "id": 0,
      "name": "",
      "ordering": 0
    }
  }

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.refreshOfferData(this.id);
  }
  refreshOfferData(id: number) {
    this.service.getOffer(id).subscribe((data) => {
      this.categoryId = data.category;
      this.offer = data;
      this.refreshCategoryData(this.categoryId);
    });
  }
  refreshCategoryData(id: number) {
    this.service.getCategory(id).subscribe((data) => {
      this.category = data;
      this.isDataAvailable = true;
    });
  }
}
