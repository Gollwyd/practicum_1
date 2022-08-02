import tpl from './index.hbs';
import './styles.less';
import './components';
import {loginPage, registrationPage, errorPage, chatPage, profilePage} from './pages';

document.getElementById('root').innerHTML = tpl({
	loginPage: loginPage(),
    registrationPage: registrationPage(),
    errorPage: errorPage(),
    chatPage: chatPage(),
    profilePage: profilePage(),
});
