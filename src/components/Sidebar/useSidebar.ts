import { myRoute } from '@/utils/MyRoute';

export const sidebarConfig = [
  {
    title: 'locale.home',
    icon: 'HomeOutlined',
    link: myRoute.home,
  },
  {
    title: 'locale.activity',
    icon: 'HistoryOutlined',
    link: myRoute.activity,
  },
  {
    title: 'locale.my_computer',
    icon: 'DesktopOutlined',
    link: myRoute.myComputer,
  },
  {
    title: 'locale.share_with_me',
    icon: 'UsergroupAddOutlined',
    link: myRoute.shareWithMe,
  },
  {
    title: 'locale.about',
    icon: 'InfoCircleOutlined',
    link: myRoute.about,
  },
  {
    title: 'locale.setting',
    icon: 'SettingOutlined',
    link: myRoute.setting,
  },
  {
    title: 'locale.help',
    icon: 'QuestionCircleOutlined',
    link: myRoute.help,
  },
];
