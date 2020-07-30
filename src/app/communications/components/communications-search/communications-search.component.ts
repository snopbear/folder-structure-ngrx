import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'fsn-communications-search',
  templateUrl: './communications-search.component.html',
  styleUrls: ['./communications-search.component.css'],
})
export class CommunicationsSearchComponent
  implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('filterElement', { static: false }) filterElementRef: ElementRef;

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  @Input() displayDetail: boolean;

  @Input() hitCount: number;

  hitMessage: string;

  // tslint:disable-next-line: variable-name
  private _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.valueChange.emit(value);
  }

  constructor() {}
  ngAfterViewInit(): void {
    if (this.filterElementRef.nativeElement) {
      this.filterElementRef.nativeElement.focus();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['hitCount'] && !changes['hitCount'].currentValue) {
      this.hitMessage = 'No matches found';
    } else {
      this.hitMessage = 'Hits:' + this.hitCount;
    }
  }
  ngOnInit() {}
}
