import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './styles.less';

Handlebars.registerPartial('formInput', tpl);

// export default (label, required, type) => tpl({ label, required, type, isPasswordWrong });
