import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  OffersList:any=[];
  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.refreshOffersList();
  }
  refreshOffersList() {
    this.service.getOffers().subscribe(data => {
      console.log(data);

      this.OffersList = data;
    });
  }

}
