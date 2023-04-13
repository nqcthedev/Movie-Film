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
    value: 'watchlist',
    name: 'Add Watchlist',
    icon: 'material-symbols:list-alt-add',
    color: '#00AAEC',
    path: 'https://www.twitter.com/caitlyn.kerluke',
  },
];


export const _socialsAccount = [
  {
    value: 'facebook',
    name: 'FaceBook',
    icon: 'eva:facebook-fill',
    color: '#1877F2',
    path: 'https://www.facebook.com/nqc111/',
  },
  {
    value: 'github',
    name: 'Github',
    icon: 'eva:github-fill',
    color: 'black',
    path: 'https://github.com/nqcthedev',
  },
  {
    value: 'linkedin',
    name: 'Linkedin',
    icon: 'eva:linkedin-fill',
    color: '#007EBB',
    path: 'https://www.linkedin.com/in/nguyen-quoc-cuong-85539a22b/',
  },
  {
    value: 'google',
    name: 'Google',
    icon: 'eva:google-fill',
    color: '#DF3E30',
    path: 'https://www.twitter.com/caitlyn.kerluke',
  },
];



export const _iconComment = [
  {
    value: 'smile',
    name: 'Chèn 1 biểu tưởng cảm xúc',
    icon: 'bi:emoji-smile',
  },
  {
    value: 'checkin',
    name: 'Đính kèm một ảnh hoặc video',
    icon: 'streamline:image-camera-1-photos-picture-camera-photography-photo-pictures',
  },
  {
    value: 'gif',
    name: 'Bình luận bằng file GIF',
    icon: 'heroicons:gif',
  },
  {
    value:"sticker",
    name:"Bình luận bằng nhãn dán",
    icon:"mdi:sticker-emoji"
  }
];