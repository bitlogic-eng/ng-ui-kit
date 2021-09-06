import { Story, Meta, moduleMetadata} from '@storybook/angular';
import { SearchComponent } from './search.component';
import { SearchModule } from './search.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';


export default {
  title: 'Components/Search',
  component: SearchComponent,
  argTypes: {},
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [SearchComponent],
      imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,    
        MatIconModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        BrowserAnimationsModule

    
      ],
    }),
    //👇 Wraps our stories with a decorator
    // componentWrapperDecorator(story => `<div style="margin: 3em">${story}</div>`),
  ],
} as Meta;

const Template: Story<SearchComponent> = (args: SearchComponent) => ({
  component: SearchComponent,
  props: args,
  // decorators: [
  //   moduleMetadata({
  //     declarations: [],
  //     imports: [
  //       SearchModule
  //     ],
  //   }),
  // ],

  template: `<bit-search></bit-search>`,
});

export const Default = Template.bind({});
Default.args = {
  
};
