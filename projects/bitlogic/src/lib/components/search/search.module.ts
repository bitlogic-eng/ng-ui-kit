import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,    
    MatIconModule,
    ReactiveFormsModule,
    MatAutocompleteModule
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }
