import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import Fuse from 'fuse.js';

export interface AutoCompleteOption {
  id: string,
  code: string,
  description: string,
  type: string,
  metaData: any
};

@Component({
  selector: 'bit-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  private _fuseOptions: any;
  private _fuse: Fuse<AutoCompleteOption> = null;
  private _autoCompleteOptions: AutoCompleteOption[] = [];

  filterSearch: FormControl = new FormControl('');
  optionsResults = [];

  @Input()
  label: string;

  @Input()
  placeholder: string;

  @Input() timeToSearch = 500;

  @Input() minLength = 2;

  @Input() 
  set autoCompleteOptions(autoCompleteOptions: AutoCompleteOption[]){
    this._autoCompleteOptions = autoCompleteOptions;
    this._fuse = new Fuse(this._autoCompleteOptions, this._fuseOptions);
  }

  @Output()
  search: EventEmitter<string> = new EventEmitter();

  @Output() typing = new EventEmitter<boolean>();

  constructor() {   
    
    this._fuseOptions = {
      includeScore: true,
      minMatchCharLength: 1,
      threshold: 0.3,
      caseSensitive: false,
      shouldSort: true,
      tokenize: true,
      matchAllTokens: true,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      keys: ['description', 'code']      
    };

    // this._fuse = new Fuse(this._autoCompleteOptions, this._fuseOptions);
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

  displayOption(option) {
    return option ? `${option.description} ${option.code ? `- ${option.code}` : ''}` : '';
  }

  OptionsAutoComplete($event) {
    if (this._fuse !== null ) {
      const target = $event.target as HTMLInputElement;
      this.optionsResults = this._fuse.search(target.value).slice(0, 100);  
    }
  }

}
