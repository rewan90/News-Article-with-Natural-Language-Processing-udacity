
// js files
import { handleSubmit } from './js/formHandler'

// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')

      .then((registration) => {
        if (registration) {
          console.log('Service worker registered:', registration);
        } else {
          console.error('Service worker registration failed');
        }
      })
      .catch((error) => {
        console.error('Service worker registration error:', error);
      });
  });
}
// alert("I EXIST")
console.log("CHANGE!!");

// sass files
import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";

export { handleSubmit };
