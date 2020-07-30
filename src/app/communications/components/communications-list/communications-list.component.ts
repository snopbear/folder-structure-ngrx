import { Products } from './../../../core/model/communications/products';
import { InputOutService } from './../../../core/service/communications/input-out.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fsn-communications-list',
  templateUrl: './communications-list.component.html',
  styleUrls: ['./communications-list.component.css'],
})
export class CommunicationsListComponent implements OnInit {
  @Input() products: Products[];

  constructor() {}

  ngOnInit() {}
}
