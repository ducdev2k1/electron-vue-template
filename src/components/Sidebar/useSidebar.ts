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
    title: 'locale.myComputer',
    icon: 'DesktopOutlined',
    link: myRoute.myComputer,
  },
  {
    title: 'locale.sharewithme',
    icon: 'UsergroupAddOutlined',
    link: myRoute.sharewithme,
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
