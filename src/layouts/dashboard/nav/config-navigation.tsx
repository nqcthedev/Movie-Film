// routes
import { PATH_DASHBOARD } from "@/routes/path";
// components
import Label from "@/components/label";
import Iconify from "@/components/iconify";
import SvgColor from "@/components/svg-color";
import LabelNotification from "./LabelNotification";


// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

const ICONS = {
  blog: icon("ic_blog"),
  cart: icon("ic_cart"),
  chat: icon("ic_chat"),
  mail: icon("ic_mail"),
  user: icon("ic_user"),
  file: icon("ic_file"),
  lock: icon("ic_lock"),
  label: icon("ic_label"),
  blank: icon("ic_blank"),
  kanban: icon("ic_kanban"),
  folder: icon("ic_folder"),
  banking: icon("ic_banking"),
  booking: icon("ic_booking"),
  invoice: icon("ic_invoice"),
  calendar: icon("ic_calendar"),
  disabled: icon("ic_disabled"),
  external: icon("ic_external"),
  menuItem: icon("ic_menu_item"),
  ecommerce: icon("ic_ecommerce"),
  analytics: icon("ic_analytics"),
  dashboard: icon("ic_dashboard"),
  theair: icon("ic_tv-bold"),
  tvPopular: icon("ic_tv-one"),
  rate: icon("ic_star-rate"),
  popular: icon("ic_popular"),
  rateView: icon("ic_tv-top-rate"),
  watch: icon("ic_watch"),
  favorite: icon("ic_favorite"),
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: "menu",
    items: [{ title: "home", path: "/", icon: ICONS.dashboard }],
  },

  // MOVIE
  // ----------------------------------------------------------------------
  {
    subheader: "Movie",
    items: [
      {
        title: "trending",
        path: PATH_DASHBOARD.movie.trending,
        icon: ICONS.analytics,
      },
      {
        title: "popular",
        path: PATH_DASHBOARD.movie.popular,
        icon: ICONS.popular,
      },
      {
        title: "toprate",
        path: PATH_DASHBOARD.movie.topRate,
        icon: ICONS.rate,
      },
      {
        title: "upcoming",
        path: PATH_DASHBOARD.movie.upcoming,
        icon: ICONS.lock,
      },
    ],
  },

  // LIBARY
  // ----------------------------------------------------------------------
  {
    subheader: "LIBRARY",
    items: [
      {
        title: "watched",
        path: PATH_DASHBOARD.watchList,
        icon: ICONS.watch,
        info: (
          <Label color="info" startIcon={<Iconify icon="ic:twotone-live-tv" />}>
            NEW 
          </Label>
        ),
      },
      {
        title: "favorit",
        path: PATH_DASHBOARD.favourite,
        icon: ICONS.favorite,
        info: <LabelNotification/>,
      },
    ],
  },

  {
    subheader: "TV",
    items: [
      {
        title: "airingtoday",
        path: PATH_DASHBOARD.tv.airingToday,
        icon: ICONS.kanban,
      },
      {
        title: "ontheair",
        path: PATH_DASHBOARD.tv.onTheAir,
        icon: ICONS.theair,
      },
      {
        title: "tvpopular",
        path: PATH_DASHBOARD.tv.tvPopular,
        icon: ICONS.tvPopular,
      },
      {
        title: "tvtoprate",
        path: PATH_DASHBOARD.tv.tvTopRate,
        icon: ICONS.rateView,
      },
    ],
  },
];

export default navConfig;
