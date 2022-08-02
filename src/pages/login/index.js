import form from './form.hbs';
import buttons from './buttons.hbs';
import modal from '../../components/modal'

const loginError = 'Неверный логин';
const passwordError = 'Неверный пароль';

const pageProps = {
    title: 'Войти',
    form: form({loginError, passwordError}),
    buttons: buttons({}),
}

export default ()=> modal(pageProps);
