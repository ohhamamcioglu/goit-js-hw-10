import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}

form.addEventListener('submit', event => {
  event.preventDefault(); // Formun varsayılan submit davranışını engeller

  const delay = parseInt(form.elements.delay.value);
  const state = form.elements.state.value;

  createPromise(delay, state)
    .then(delayValue => {
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${delayValue}ms`,
        position: 'topRight',
      });
    })
    .catch(delayValue => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delayValue}ms`,
        position: 'topRight',
      });
    });

  form.reset(); // Formu sıfırla
});