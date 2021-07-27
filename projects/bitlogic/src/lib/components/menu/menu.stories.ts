import { Story, Meta } from '@storybook/angular';
import { MenuComponent, MenuOpcion} from './menu.component';

const options: MenuOpcion[] = [
  { id: 'butt-1', name: 'Exámenes', icon: 'insert_drive_file', link:"", selected: true },
  { id: 'butt-2', name: 'Materias', icon: 'menu_book', link:"", selected: false },
  { id: 'butt-3', name: 'Pagos', icon: 'receipt', link:"", selected: false },
  { id: 'butt-4', name: 'Más opciones', icon: 'more_vert', link:"", selected: false }
];

export default {
  title: 'bitlogic/Menu',
  component: MenuComponent,
  argTypes: {},
} as Meta;

const Template: Story<MenuComponent> = (args: MenuComponent) => ({
  component: MenuComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  options: options
};