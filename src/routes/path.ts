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
  page403: "/403",
  page404: "/404",
  page500: "/500",
  root: "/",
  all: "*",
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  kanban: path(ROOTS_DASHBOARD, "/kanban"),
  calendar: path(ROOTS_DASHBOARD, "/calendar"),
  fileManager: path(ROOTS_DASHBOARD, "/files-manager"),
  permissionDenied: path(ROOTS_DASHBOARD, "/permission-denied"),
  blank: path(ROOTS_DASHBOARD, "/blank"),
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
  mail: {
    root: path(ROOTS_DASHBOARD, "/mail"),
    all: path(ROOTS_DASHBOARD, "/mail/all"),
  },
  chat: {
    root: path(ROOTS_DASHBOARD, "/chat"),
    new: path(ROOTS_DASHBOARD, "/chat/new"),
    view: (name: string) => path(ROOTS_DASHBOARD, `/chat/${name}`),
  },
  user: {
    root: path(ROOTS_DASHBOARD, "/user"),
    new: path(ROOTS_DASHBOARD, "/user/new"),
    list: path(ROOTS_DASHBOARD, "/user/list"),
    cards: path(ROOTS_DASHBOARD, "/user/cards"),
    profile: path(ROOTS_DASHBOARD, "/user/profile"),
    account: path(ROOTS_DASHBOARD, "/user/account"),
    edit: (name: string) => path(ROOTS_DASHBOARD, `/user/${name}/edit`),
    demoEdit: path(ROOTS_DASHBOARD, `/user/reece-chung/edit`),
  },
  detail: {
    root: path(ROOTS_DASHBOARD, "/e-commerce"),
    shop: path(ROOTS_DASHBOARD, "/e-commerce/shop"),
    list: path(ROOTS_DASHBOARD, "/e-commerce/list"),
    checkout: path(ROOTS_DASHBOARD, "/e-commerce/checkout"),
    new: path(ROOTS_DASHBOARD, "/e-commerce/product/new"),
    view: (id: number) =>
      path(ROOTS_DASHBOARD, `detail/movie/${id}`),
    edit: (name: string) =>
      path(ROOTS_DASHBOARD, `/e-commerce/product/${name}/edit`),
    demoEdit: path(
      ROOTS_DASHBOARD,
      "/e-commerce/product/nike-blazer-low-77-vintage/edit"
    ),
    demoView: path(
      ROOTS_DASHBOARD,
      "/e-commerce/product/nike-air-force-1-ndestrukt"
    ),
  },
  invoice: {
    root: path(ROOTS_DASHBOARD, "/invoice"),
    list: path(ROOTS_DASHBOARD, "/invoice/list"),
    new: path(ROOTS_DASHBOARD, "/invoice/new"),
    view: (id: string) => path(ROOTS_DASHBOARD, `/invoice/${id}`),
    edit: (id: string) => path(ROOTS_DASHBOARD, `/invoice/${id}/edit`),
    demoEdit: path(
      ROOTS_DASHBOARD,
      "/invoice/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1/edit"
    ),
    demoView: path(
      ROOTS_DASHBOARD,
      "/invoice/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5"
    ),
  },
  blog: {
    root: path(ROOTS_DASHBOARD, "/blog"),
    posts: path(ROOTS_DASHBOARD, "/blog/posts"),
    new: path(ROOTS_DASHBOARD, "/blog/new"),
    view: (title: string) => path(ROOTS_DASHBOARD, `/blog/post/${title}`),
    demoView: path(
      ROOTS_DASHBOARD,
      "/blog/post/apply-these-7-secret-techniques-to-improve-event"
    ),
  },
};
