import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { InputOutService } from 'src/app/core/service/communications/input-out.service';
import { Products } from 'src/app/core/model/communications/products';
import { CommunicationsSearchComponent } from '../../components/communications-search/communications-search.component';

@Component({
  selector: 'fsn-communications-shell',
  templateUrl: './communications-shell.component.html',
  styleUrls: ['./communications-shell.component.css'],
})
export class CommunicationsShellComponent implements OnInit, AfterViewInit {
  // Container Presentational Component Pattern

  @ViewChild(CommunicationsSearchComponent, { static: true })
  communicationsSearchComponent: CommunicationsSearchComponent;

  parentListFilter: string;

  products: Products[];
  filteredProducts: Products[];
  includeDetail = true;

  constructor(private inputOutService: InputOutService) {}

  ngOnInit(): void {
    this.inputOutService.get().subscribe((products: Products[]) => {
      this.products = products;
      this.performFilter(this.parentListFilter);
    });
  }

  ngAfterViewInit() {
    this.parentListFilter = this.communicationsSearchComponent.listFilter;
  }
  onValueChange(value: string): void {
    this.performFilter(value);
  }
  performFilter(filterBy?: string): void {
    if (filterBy) {
      this.filteredProducts = this.products.filter(
        (product: Products) =>
          product.productName
            .toLocaleLowerCase()
            .indexOf(filterBy.toLocaleLowerCase()) !== -1
      );
    } else {
      this.filteredProducts = this.products;
    }
  }
}
