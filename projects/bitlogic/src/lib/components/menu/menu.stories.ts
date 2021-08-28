import { Story, Meta } from '@storybook/angular';
import { MenuComponent, MenuOption} from './menu.component';

const options: MenuOption[] = [
  { id: 'butt-1', name: 'Exámenes', icon: 'insert_drive_file', link:"" },
  { id: 'butt-2', name: 'Materias', icon: 'menu_book', link:"" },
  { id: 'butt-3', name: 'Pagos', icon: 'receipt', link:"" },
  { id: 'butt-4', name: 'Titulos', icon: 'done', link:""  },
  { id: 'butt-5', name: 'info', icon: 'info', link:"" },
];

const moreOption = { id: '_mas', name: 'Más', icon: 'more_vert', link:"" }

export default {
  title: 'Components/Menu',
  component: MenuComponent,
  argTypes: {},
} as Meta;

const Template: Story<MenuComponent> = (args: MenuComponent) => ({
  component: MenuComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  options: options,
  moreOption: moreOption,
  selectedOptionId: 'butt-1'
};