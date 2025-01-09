import { ScheduleItemDate, ScheduleItemEmotion, ScheduleItemType } from './types'

export const SCHEDULE_ITEMS_PICTOS: Record<ScheduleItemEmotion, string> = {
  [ScheduleItemEmotion.JOIE]: '/assets/pictos/joie.svg',
  [ScheduleItemEmotion.COLERE]: '/assets/pictos/colere.svg',
  [ScheduleItemEmotion.TRISTESSE]: '/assets/pictos/tristesse.svg',
  [ScheduleItemEmotion.PEUR]: '/assets/pictos/peur.svg',
  [ScheduleItemEmotion.DEGOUT]: '/assets/pictos/degout.svg',
}

export const SCHEDULE_ITEMS_TYPES: Record<ScheduleItemType, string> = {
  [ScheduleItemType.CONFERENCE]: 'Conférences',
  [ScheduleItemType.ATELIER]: 'Ateliers',
  [ScheduleItemType.TEMPS_ECHANGE]: "Temps d'échange",
  [ScheduleItemType.AUTRES]: 'Autres',
}

export const SCHEDULE_ITEMS_DATES: Record<ScheduleItemDate, string> = {
  [ScheduleItemDate.SAMEDI]: 'Samedi',
  [ScheduleItemDate.DIMANCHE]: 'Dimanche',
  [ScheduleItemDate.BOTH]: 'Les deux',
}
