import DialogType from '@/types/dialog/dialogType';

type SideLink = {
  id: number,
  icon: string,
  title: string,
  value: string,
  modal?: DialogType,
  url?: string,
}

export default SideLink;
