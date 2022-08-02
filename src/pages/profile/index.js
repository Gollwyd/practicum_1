import tpl from './tpl.hbs';
import './styles.less';
import emptyModal from '../../components/emptyModal'

import modalContent from './modalContent.hbs';


const readonly=true;
const changePassword=true;

const errors = {
    oldPasswordError: 'Слабый пароль',
    newPasswordError: 'Слабый пароль',
    newPassword2Error: 'Пароли не совпадают',
};

const data = {
    avatar: 'https://cs13.pikabu.ru/avatars/1352/x1352124-1331818029.png',
    display_name: 'Иван',
    email: 'pochta@yandex.ru',
    login: 'ivanivanov',
    first_name: 'Иван',
    second_name: 'Иванов',
    phone: '+7(909)9673030',
}
const modalError='Ошибка, попробуйте ещё раз';
const avatarModal = emptyModal({content: modalContent({title: 'Загрузите файл', showError: !!modalError, error: modalError, warning: 'Нужно выбрать файл'})});

export default () => tpl({data, readonly, errors, changePassword, showModal: true, modal: avatarModal});
