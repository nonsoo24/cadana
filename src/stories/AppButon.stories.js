// Import necessary dependencies
import AppButton from '../components/forms/AppButton.vue';

// Export default object with title and component
export default {
  title: 'Components/AppButton', // Title of the story
  component: AppButton,
  tags: ['autodocs'],
};

// Define a template for the story
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes), // Pass props as arguments
  components: { AppButton }, // Component to be rendered
  template: '<AppButton v-bind="$props" />', // Template for rendering the component
});

// Define the Default story
export const Default = Template.bind({});
Default.args = {
  label: 'Click me', // Set the label for the button
};

// Define the Disabled story
export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button', // Set the label for the disabled button
  disabled: true, // Set the disabled property to true
};

// Define the Button with Icon story
export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Button with Icon', // Set the label for the button
  icon: '../assets/plus-primary.png', // Set the path to the icon image
};

// Define the Secondary Button story
export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button', // Set the label for the secondary button
  variant: 'secondary', // Set the variant to 'secondary'
};
