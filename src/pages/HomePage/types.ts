export enum ScheduleItemType {
  CONFERENCE = 'conference',
  ATELIER = 'atelier',
  TEMPS_ECHANGE = 'temps-echange',
  AUTRES = 'autres',
}

export enum ScheduleItemEmotion {
  JOIE = 'joie',
  COLERE = 'colere',
  TRISTESSE = 'tristesse',
  PEUR = 'peur',
  DEGOUT = 'degout',
}

export enum ScheduleItemDate {
  SAMEDI = 'samedi',
  DIMANCHE = 'dimanche',
  BOTH = 'both',
}

export type ScheduleItem = {
  type: ScheduleItemType
  title: string
  description: string
  emotion?: ScheduleItemEmotion
  date: ScheduleItemDate
  time?: string
}
