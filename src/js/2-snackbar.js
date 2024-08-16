// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


// Основна функція для ініціалізації роботи з формою
function initFormHandler() {
    const form = document.querySelector('.form');
    form.addEventListener('submit', handleSubmit);
}

// Обробка події сабміту форми
function handleSubmit(event) {
    event.preventDefault(); // Запобігаємо перезавантаженню сторінки

    const delay = getFormDelay(event);
    const state = getFormState(event);

    createPromise(delay, state)
        .then(handleSuccess)
        .catch(handleError);
}

// Отримання значення затримки з форми
function getFormDelay(event) {
    return Number(event.target.delay.value);
}

// Отримання вибраного стану промісу з форми
function getFormState(event) {
    return event.target.state.value;
}

// Створення промісу з затримкою і обраним станом
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

// Обробка успішного виконання промісу
function handleSuccess(delay) {
    iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight'
    });
}

// Обробка відхилення промісу
function handleError(delay) {
    iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight'
    });
}

// Виклик ініціалізації після завантаження сторінки
initFormHandler();
