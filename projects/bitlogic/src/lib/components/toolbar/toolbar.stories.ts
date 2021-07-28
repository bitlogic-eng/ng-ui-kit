import { Story, Meta } from '@storybook/angular';
import {ToolbarComponent} from './toolbar.component';

export default {
  title: 'Components/Toolbar',
  component: ToolbarComponent,
  argTypes: {},
} as Meta;

const Template: Story<ToolbarComponent> = (args: ToolbarComponent) => ({
  component: ToolbarComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
};

