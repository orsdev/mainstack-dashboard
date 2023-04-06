import {
  AlarmIcon,
  DeleteIcon,
  EditIcon,
  FileIcon,
  GlassIcon,
  GroupIcon,
  MenuIcon,
  PhotoIcon,
  YoutubeIcon,
} from "./icons";

export const MainMenuNavigation = [
  {
    icon: <MenuIcon />,
    title: "Dashboard",
    route: "/",
  },
  {
    icon: <EditIcon />,
    title: "Item 1",
    route: "/item-1",
  },
  {
    icon: <GroupIcon />,
    title: "Item 2",
    route: "/item-2",
  },
  {
    icon: <GlassIcon />,
    title: "Item 3",
    route: "/item-3",
  },
];

export const OthersOneMenuNavigation = [
  {
    icon: <PhotoIcon />,
    title: "Item 4",
    route: "/item-4",
  },
  {
    icon: <DeleteIcon />,
    title: "Item 5",
    route: "/item-5",
  },
];

export const OthersTwoMenuNavigation = [
  {
    icon: <YoutubeIcon />,
    title: "Item 6",
    route: "/item-6",
  },
  {
    icon: <FileIcon />,
    title: "Item 7",
    route: "/item-7",
  },
  {
    icon: <AlarmIcon />,
    title: "Item 8",
    route: "/item-8",
  },
];
