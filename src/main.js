import { createApp } from 'vue';
import App from './App.vue';
import "./assets/tailwind.css";
import router from "./router"; // Import router

const app = createApp(App); // Create the Vue app
app.use(router); // Use router in the app
app.mount("#app"); // Mount the app to the DOM
