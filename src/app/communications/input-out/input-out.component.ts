import { Products } from './../../core/model/communications/products';
import { InputOutService } from './../../core/service/communications/input-out.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-out',
  templateUrl: './input-out.component.html',
  styleUrls: ['./input-out.component.css'],
})
export class InputOutComponent implements OnInit {
  constructor(private inputOutService: InputOutService) {}

  ngOnInit() {
    this.inputOutService.get().subscribe((products: Products[]) => {
      console.log(products);
    });
  }
}
