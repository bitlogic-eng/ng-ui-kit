import { Story, Meta, moduleMetadata} from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { ButtonModule } from './button.module';

export default {
  title: 'bitlogic/Button',
  component: ButtonComponent,
  argTypes: {},
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        ButtonModule
      ],
    }),
  ],

  template: `<bit-button sty="text" color="secondary">Text - secondary</bit-button>`,
});

export const Default = Template.bind({});
Default.args = {
};