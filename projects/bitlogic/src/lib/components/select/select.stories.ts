import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SelectComponent } from './select.component';
import { SelectModule } from './select.module';
// import { MatSelectModule } from '@angular/material/select';

export default {
  title: 'Components/Select',
  component: SelectComponent,
  argTypes: {},
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        SelectModule,
        // MatSelectModule
      ],
    }),
  ],

} as Meta;

const Template: Story<SelectComponent> = (args: SelectComponent) => ({
  component: SelectComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};

