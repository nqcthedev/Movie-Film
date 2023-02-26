function path(root:string, sublink:string) {
  return `${root}${sublink}`
}


const ROOTS_AUTH = '/auth';
const ROOTS_DASHBOARD = '/dashboard';

export const PATH_PAGE = {
  page403: '/403',
  page404: '/404',
  page500: '/500',
}

export const PATH_ROUTER = {
  dashboard: '/dashboard',
  popular: '/popular',
  toprate: '/top-rate',
  upcomming: '/up-comming',
  login: '/auth/login',
  notfound: '/not-found',
  root: '/',
  all: '*',
};

