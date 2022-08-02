import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './styles.less';

Handlebars.registerPartial('profileInput', tpl);

// export default (label, required, type) => tpl({ label, required, type, isPasswordWrong });
