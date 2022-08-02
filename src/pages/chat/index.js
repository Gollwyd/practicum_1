import tpl from './tpl.hbs';
import './styles.less';

const chatList = [
    {
        data: {
            title: 'Андрей',
            image: 'https://cs13.pikabu.ru/avatars/1352/x1352124-1331818029.png',
            lastMessage: 'Друзья, у меня для вас особенный выпуск новостей! бла бла бла rgrgererg',
            date: '10:05',
            unread: 2,
        },
    },
    {
        data: {
            title: 'Андрей',
            image: 'https://cs13.pikabu.ru/avatars/1352/x1352124-1331818029.png',
            lastMessage: 'Друзья, у меня для вас особенный выпуск новостей! бла бла бла rgrgererg',
            date: 'пт',
            unread: 2,
        },
    }
]

const pageProps = {
    chatList,
    subtitle: 'Мы уже фиксим',
    linkTitle: 'Назад к чатам',
}

export default () => tpl(pageProps);
