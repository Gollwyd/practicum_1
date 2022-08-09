import tpl from './tpl.hbs';
import './styles.less';

const pageProps = {
    title: 500,
    subtitle: 'Мы уже фиксим',
    linkTitle: 'Назад к чатам',
}

export default () => tpl(pageProps);
