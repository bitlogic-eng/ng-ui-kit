import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { SearchComponent } from './search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
// import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'Components/Search',
  component: SearchComponent,
  argTypes: {},
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        ReactiveFormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        BrowserAnimationsModule
      ],
    }),
  ],

} as Meta;

const Template: Story<SearchComponent> = (args: SearchComponent) => ({
  component: SearchComponent,
  props: args
})

export const Default = Template.bind({});
Default.args = {
};