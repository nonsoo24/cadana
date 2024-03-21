import { ref } from 'vue';
import NavBar from '../components/NavBar.vue';

export default {
  title: 'NavBar',
  component: NavBar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {},
};

const Template = (args) => ({
  components: { NavBar },
  setup() {
    const isDark = ref(false); // Simulating reactive data
    const dropdownOptions = ref([
      { label: 'Profile', route: '/' },
      { label: 'Settings', route: '/' },
    ]);

    return {
      ...args,
      isDark,
      dropdownOptions,
      toggleTheme: () => {
        isDark.value = !isDark.value;
      },
    };
  },
  template: '<NavBar :pageTitle="pageTitle" :isDarkMode="isDark" :dropdownOptions="dropdownOptions" @toggleTheme="toggleTheme" />',
});

export const Default = Template.bind({});
Default.args = {
  pageTitle: 'Home',
};
