import form from './form.hbs';
import buttons from './buttons.hbs';
import modal from '../../components/modal'


const errors = {
    mailError: 'Такой E-mail уже существует',
    loginError: 'Такой логин уже существует',
    phoneError: 'Неверный номер',
    fNameError: '',
    sNameError: '',
    password1Error: 'Слабый пароль',
    password2Error: 'Пароли не совпадают',
};

const pageProps = {
    title: 'Регистрация',
    form: form(errors),
    buttons: buttons({}),
}

export default ()=> modal(pageProps);
