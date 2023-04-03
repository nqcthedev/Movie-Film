import _mock from "../_mock"
import { randomInArray } from '../utils';
// ----------------------------------------------------------------------


export const _notification = [...Array(5)].map((_, index) => ({
  id:_mock.id(index),
  title: [
    'Your order is placed',
    'Sylvan King',
    'You have new message',
    'You have new mail',
    'Delivery processing',
  ][index],
  description: [
    'waiting for shipping',
    'answered to your comment on the Minimal',
    '5 unread messages',
    'sent from Guido Padberg',
    'Your order is being shipped',
  ][index],
  avatar: [null, _mock.image.avatar(2), null, null, null][index],
  type: ['order_placed', 'friend_interactive', 'chat_message', 'mail', 'order_shipped'][index],
  createdAt: _mock.time(index),
  isUnRead: [true, true, false, false, false][index],
}))

export const _contacts = [...Array(20)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.name.fullName(index),
  username: _mock.name.fullName(index),
  avatar: _mock.image.avatar(index),
  address: _mock.address.fullAddress(index),
  phone: _mock.phoneNumber(index),
  email: _mock.email(index),
  lastActivity: _mock.time(index),
  status: randomInArray(['online', 'offline', 'away', 'busy']),
  role: _mock.role(index),
}));

// ----------------------------------------------------------------------


export const _socials = [
  {
    value: 'website',
    name: 'Website',
    icon: 'ant-design:global-outlined',
    color: '#00AB55',
    path: 'https://johnwick.movie/',
  },
  {
    value: 'imdb',
    name: 'IMDB',
    icon: 'mdi:movie',
    color: '#1877F2',
    path: 'https://www.instagram.com/caitlyn.kerluke',
  },
  {
    value: 'favourite',
    name: 'Add Favourite',
    icon: 'mdi:favourite',
    color: '#E02D69',
    path: 'https://www.linkedin.com/caitlyn.kerluke',
  },
  {
    value: 'watchlist',
    name: 'Add Watchlist',
    icon: 'material-symbols:list-alt-add',
    color: '#00AAEC',
    path: 'https://www.twitter.com/caitlyn.kerluke',
  },
];