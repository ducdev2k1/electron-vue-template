import { myRoute } from '@/utils/MyRoute';

export const sidebarConfig = [
  {
    title: 'locale.home',
    icon: 'HomeRoundedIcon',
    link: myRoute.home,
  },
  {
    title: 'locale.activity',
    icon: 'HistoryRoundedIcon',
    link: myRoute.activity,
  },
  {
    title: 'locale.my_computer',
    icon: 'DesktopMacRoundedIcon',
    link: myRoute.myComputer,
  },
  {
    title: 'locale.share_with_me',
    icon: 'ShareRoundedIcon',
    link: myRoute.shareWithMe,
  },
  {
    title: 'locale.about',
    icon: 'InfoRoundedIcon',
    link: myRoute.about,
  },
  {
    title: 'locale.setting',
    icon: 'SettingsRoundedIcon',
    link: myRoute.setting,
  },
  {
    title: 'locale.help',
    icon: 'HelpRoundedIcon',
    link: myRoute.help,
  },
];
