import { Story, Meta, moduleMetadata} from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { ButtonModule } from './button.module';

export default {
  title: 'Components/Button',
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

  template: `
  <bit-button sty="text" color="secondary">Text - secondary</bit-button>
  <bit-button sty="raised" color="secondary">raised - secondary</bit-button>
  <bit-button sty="outlined" color="secondary">outlined - secondary</bit-button>
  <bit-button sty="text" type="fab" color="secondary"><i class="material-icons mx-auto">menu_book</i></bit-button>
  <bit-button sty="raised" type="fab" color="secondary"><i class="material-icons mx-auto">menu_book</i>
  </bit-button>
  <bit-button sty="outlined" type="fab" color="secondary"><i class="material-icons mx-auto">menu_book</i>
  </bit-button>`,
});

export const Default = Template.bind({});
Default.args = {
  
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};