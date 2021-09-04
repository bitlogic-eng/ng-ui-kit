import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
// import Fuse from 'fuse';

@Component({
  selector: 'bit-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  // private _fuseOptions: any;
  // private _keys: Array<string> = [];
  // private _data: any;
  // private _fuse: any;
  filterSearch: FormControl = new FormControl('');

  @Input()
  label: string = '<label>';

  @Input()
  placeholder: string = '<placeholder>'

  // @Input()
  // set Key(keys: Array<string>){
  //   this._keys = keys;
  // }

  // @Input()
  // set data(data: any) {
  //   this._data = data;
  //   // this._fuse = new Fuse(this._data, this._fuseOptions);
  //   this._fuse.keys = this._keys
  // }

  @Input() timeToSearch = 500;

  @Input() minLength = 2;

  @Input() autocomplete = 'off';

  @Output()
  search: EventEmitter<string> = new EventEmitter();

  @Output() typing = new EventEmitter<boolean>();

  constructor() {   
    // this._fuseOptions = {
    //   includeScore: true,
    //   minMatchCharLength: 3,
    //   threshold: 0.3,
    //   caseSensitive: false,
    //   shouldSort: true,
    //   tokenize: true,
    //   matchAllTokens: true,
    //   location: 0,
    //   distance: 100,
    //   maxPatternLength: 32
    // };
  }

  ngOnInit(): void {
    this.filterSearch.setValidators(Validators.minLength(this.minLength));
    this.filterSearch.valueChanges.pipe(
      tap(() => this.typing.emit(true)),
      debounceTime(this.timeToSearch),
      tap(() => this.typing.emit(false)),
      distinctUntilChanged())
      .subscribe(() => {
       // Constraint: only search when the input is empty or valid
        if (this.filterSearch.value === '' || this.filterSearch.valid) {
          this.notitySearch();
        }
      });

  }

  notitySearch() {
    this.search.emit(this.filterSearch.value);
  }

  onFocus() {

  }

  onBlur() {
  }

}
