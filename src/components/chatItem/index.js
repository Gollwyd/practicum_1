import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './styles.less';

Handlebars.registerPartial('chatItem', tpl);

// export default (label) => tpl({ label });
