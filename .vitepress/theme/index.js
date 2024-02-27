import DefaultTheme from 'vitepress/theme';
import LayoutComponent from './layout.vue';
import './styles.css';

export default { ...DefaultTheme, Layout: LayoutComponent };