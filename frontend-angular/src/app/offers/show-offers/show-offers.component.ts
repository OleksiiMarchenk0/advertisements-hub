import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-show-offers',
  templateUrl: './show-offers.component.html',
  styleUrls: ['./show-offers.component.scss']
})
export class ShowOffersComponent implements OnInit {
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
