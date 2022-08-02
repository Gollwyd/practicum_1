import tpl from './tpl.hbs';
import './styles.less';

export default ({title, form, buttons}) => tpl({
    title,
	form,
    buttons,
});
