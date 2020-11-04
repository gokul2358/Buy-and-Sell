import { Component, OnInit } from '@angular/core';
import {Listing} from '../types';
import {ActivatedRoute, Router} from '@angular/router';
import {ListingsService} from '../listings.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  email = '';
  message = '';
  listing: Listing;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listingsService: ListingsService,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listingsService.getListingById(id)
      .subscribe(listing => {
        this.listing = listing;
        this.message = `Hi I am interested in your ${this.listing.name}`;
      });
    this.message = `I am interested in your ${this.listing.name.toLocaleLowerCase()}!`;
  }

  sendMessage(): void{
    alert('Your Messafe has been sent');
    this.router.navigateByUrl('/listings');
  }
}
