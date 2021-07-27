import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SliderComponent, SliderInfo } from './slider.component';
import { SliderModule } from './slider.module';

const slideInfo: SliderInfo[] = [
  {
    careerLevel: 'GRADO',
    modality: 'DISTANCIA - EDUCACION DISTRIBUIDA',
    assigment: 'VCIN02466',
    careerName: 'LICENCIATURA EN COMERCIO INTERNACIONAL',
    subjectsApprove: '35/37',
    credits: '3/12',
    subjectsLabel:'Materias programáticas aprobadas para el plan de estudio',
    creditsLabel:'Créditos acumulados'

  },
  {
    careerLevel: 'GRADO 1',
    modality: 'DISTANCIA - EDUCACION DISTRIBUIDA',
    assigment: 'VCIN03000',
    careerName: 'Licenciatura en Gestión Turística',
    subjectsApprove: '1/10',
    credits: '3/3',
    subjectsLabel:'Materias programáticas aprobadas para el plan de estudio',
    creditsLabel:'Créditos acumulados'
  },
  {
    careerLevel: 'GRADO 2',
    modality: 'DISTANCIA - EDUCACION DISTRIBUIDA',
    assigment: 'VCIN04000',
    careerName: 'Mat 3',
    subjectsApprove: '1/10',
    credits: '3/3',
    subjectsLabel:'Materias programáticas aprobadas para el plan de estudio',
    creditsLabel:'Créditos acumulados'
  },
  {
    careerLevel: 'GRADO 3',
    modality: 'DISTANCIA - EDUCACION DISTRIBUIDA',
    assigment: 'VCIN04000',
    careerName: 'Mat 3',
    subjectsApprove: '1/10',
    credits: '3/3',
    subjectsLabel:'Materias programáticas aprobadas para el plan de estudio',
    creditsLabel:'Créditos acumulados'
  }
]

export default {
  title: 'bitlogic/Slider',
  component: SliderComponent,
  argTypes: {},
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        SliderModule
      ],
    }),
  ],

} as Meta;

const Template: Story<SliderComponent> = (args: SliderComponent) => ({
  component: SliderComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  slideInfo: slideInfo
};