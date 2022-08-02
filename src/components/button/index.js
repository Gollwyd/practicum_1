import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './styles.less';

Handlebars.registerPartial('mainButton', tpl);

export default (label) => tpl({ label });
