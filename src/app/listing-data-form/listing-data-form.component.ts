import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {Listing} from '../types';

@Component({
  selector: 'app-listing-data-form',
  templateUrl: './listing-data-form.component.html',
  styleUrls: ['./listing-data-form.component.css']
})
export class ListingDataFormComponent implements OnInit {
  @Input() buttonText;
  @Input() currentName = '';
  @Input() currentDescription = '';
  @Input() currentPrice = '';
  name = '';
  description = '';
  price = '';
  constructor(
    private router: Router,
  ) { }

  @Output() onSubmit = new EventEmitter<Listing>();

  ngOnInit(): void {
    this.name = this.currentName;
    this.description = this.currentDescription;
    this.price = this.currentPrice;
  }

  onButtonClicked(): void{
    this.onSubmit.emit({
      id: null,
      name: this.name,
      description: this.description,
      price: Number(this.price),
      views: 0,
    });
  }
}
