function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = "/auth";
const ROOTS_DASHBOARD = "/";

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, "/login"),
  loginByPhone: path(ROOTS_AUTH, "/login-by-phone"),
  register: path(ROOTS_AUTH, "/register"),
  loginUnprotected: path(ROOTS_AUTH, "/login-unprotected"),
  registerUnprotected: path(ROOTS_AUTH, "/register-unprotected"),
  verify: path(ROOTS_AUTH, "/verify"),
  resetPassword: path(ROOTS_AUTH, "/reset-password"),
  newPassword: path(ROOTS_AUTH, "/new-password"),
};



export const PATH_ROUTER = {
  community: "/community",
  popular: "/popular",
  toprate: "/top-rate",
  upcomming: "/up-comming",
  notfound: "/not-found",
  faqs: '/faqs',
  about:'about',
  contact:"contact",
  page403: "/403",
  page404: "/404",
  page500: "/500",
  root: "/",
  all: "*",
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,

  movie: {
    trending: path(ROOTS_DASHBOARD, "trending"),
    popular: path(ROOTS_DASHBOARD, "popular"),
    topRate: path(ROOTS_DASHBOARD, "topRate"),
    upcoming: path(ROOTS_DASHBOARD, "upcoming"),
  },

  tv: {
    airingToday: path(ROOTS_DASHBOARD, "airingToday"),
    onTheAir: path(ROOTS_DASHBOARD, "onTheAir"),
    tvPopular: path(ROOTS_DASHBOARD, "tvPopular"),
    tvTopRate: path(ROOTS_DASHBOARD, "tvTopRate"),
  },
  favourite:path(ROOTS_DASHBOARD, "favourite"),
  watchList:path(ROOTS_DASHBOARD, "watch-list"),
  watchMovie:(id:number, type: string) => path(ROOTS_DASHBOARD, `watch/${type}/${id}`),

  user: {
    root: path(ROOTS_DASHBOARD, "/user"),
    account: path(ROOTS_DASHBOARD, "user/account"),
    edit: (name: string) => path(ROOTS_DASHBOARD, `/user/${name}/edit`),
    profile:path(ROOTS_DASHBOARD, "coming-soon")
  },

  detail: {
    view: (id: number, type: string) =>
      path(ROOTS_DASHBOARD, `detail/${type}/${id}`),
  },
};
