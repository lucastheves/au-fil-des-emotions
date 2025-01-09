<template>
  <div class="w-full">
    <div class="flex flex-row space-x-12 bg-beige px-12 py-6">
      <CustomButtonLink size="big" :isActive="state.selectedDate === 'all'" @click="() => handleChangeDate('all')"> Tout </CustomButtonLink>
      <CustomButtonLink size="big" :isActive="state.selectedDate === 'samedi'" @click="() => handleChangeDate('samedi')">
        Samedi
      </CustomButtonLink>
      <CustomButtonLink size="big" :isActive="state.selectedDate === 'dimanche'" @click="() => handleChangeDate('dimanche')">
        Dimanche
      </CustomButtonLink>
      <CustomButtonLink size="big" :isActive="state.selectedDate === 'both'" @click="() => handleChangeDate('both')">
        Les deux
      </CustomButtonLink>
    </div>

    <div class="flex flex-col bg-orange px-12 py-4">
      <div class="flex flex-row space-x-4">
        <CustomButton
          size="small"
          color="primary"
          :isActive="state.selectedType === 'all'"
          @click="() => handleChangeType('all')"
          >Tout</CustomButton
        >
        <CustomButton
          size="small"
          color="green"
          :isActive="state.selectedType === 'conference'"
          @click="() => handleChangeType('conference')"
          >Conférences</CustomButton
        >
        <CustomButton
          size="small"
          color="blue"
          :isActive="state.selectedType === 'atelier'"
          @click="() => handleChangeType('atelier')"
          >Ateliers</CustomButton
        >
        <CustomButton
          size="small"
          color="red"
          :isActive="state.selectedType === 'temps-echange'"
          @click="() => handleChangeType('temps-echange')"
          >Temps d'échange</CustomButton
        >
        <CustomButton
          size="small"
          color="dark-purple"
          :isActive="state.selectedType === 'autres'"
          @click="() => handleChangeType('autres')"
          >Autres</CustomButton
        >
      </div>

      <hr class="w-full bg-background h-0.5 mt-4 mb-16" />

      <div class="grid grid-cols-2 xl:grid-cols-4 py-16 gap-x-16 gap-y-16">
        <template v-for="(item, i) in filteredItems" :key="i">
          <ScheduleCard :item="item" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'

import CustomButton from '@/components/CustomButton.vue'
import CustomButtonLink from '@/components/CustomButtonLink.vue'
import {
  ScheduleItemDate,
  ScheduleItemEmotion,
  ScheduleItemType,
  type ScheduleItem,
} from '@/pages/HomePage/types'
import ScheduleCard from '@/pages/HomePage/components/Schedule/ScheduleCard.vue'

const state = reactive({
  selectedDate: 'all',
  selectedType: 'all',
})

function handleChangeType(type: string) {
  state.selectedType = type
}

function handleChangeDate(date: string) {
  state.selectedDate = date
}

const items = ref<ScheduleItem[]>([
  {
    type: ScheduleItemType.ATELIER,
    title: 'Yoga du rire',
    description:
      'Un moment de partage animé par un spécialiste pour explorer la joie à travers le rire.',
    emotion: ScheduleItemEmotion.JOIE,
    date: ScheduleItemDate.SAMEDI,
    time: '10h',
  },
  {
    type: ScheduleItemType.CONFERENCE,
    title: 'La colère chez l’enfant',
    description:
      'Des clés pour mieux identifier et accompagner la gestion de la colère chez les enfants.',
    emotion: ScheduleItemEmotion.COLERE,
    date: ScheduleItemDate.SAMEDI,
    time: '11h',
  },
  {
    type: ScheduleItemType.ATELIER,
    title: "L'écoute émotionnelle",
    description:
      'Avec un thérapeute, découvrez comment soutenir et écouter les émotions dans les moments difficiles.',
    emotion: ScheduleItemEmotion.TRISTESSE,
    date: ScheduleItemDate.SAMEDI,
    time: '11h30',
  },
  {
    type: ScheduleItemType.ATELIER,
    title: 'Découverte culinaire',
    description: 'Transformez le dégoût en une expérience gustative guidée par un chef passionné.',
    emotion: ScheduleItemEmotion.DEGOUT,
    date: ScheduleItemDate.DIMANCHE,
    time: '14h30'
  },
  {
    type: ScheduleItemType.CONFERENCE,
    title: 'L’importance de la peur',
    description:
      'Un éclairage sur le rôle positif de la peur et ses bienfaits dans le développement.',
    emotion: ScheduleItemEmotion.PEUR,
    date: ScheduleItemDate.SAMEDI,
    time: '14h',
  },
  {
    type: ScheduleItemType.AUTRES,
    title: 'Les émotions en images',
    description:
      'Projection d’un court-métrage illustrant les 5 émotions fondamentales et leur rôle dans nos vies.',
    date: ScheduleItemDate.SAMEDI,
    time: '16h30',
  },
  {
    type: ScheduleItemType.ATELIER,
    title: "Création d'une boîte à colère",
    description:
      'Aidez les enfants à exprimer leurs frustrations grâce à cet outil éducatif et ludique.',
    emotion: ScheduleItemEmotion.COLERE,
    date: ScheduleItemDate.DIMANCHE,
    time: '10h',
  },
  {
    type: ScheduleItemType.TEMPS_ECHANGE,
    title: 'Cultiver la joie en famille',
    description:
      'Avec un psychologue, explorez des stratégies simples pour enrichir les moments de bonheur familial.',
    emotion: ScheduleItemEmotion.JOIE,
    date: ScheduleItemDate.DIMANCHE,
    time: '11h',
  },
  {
    type: ScheduleItemType.ATELIER,
    title: 'Carnet des souvenirs précieux',
    description:
      'Créez un carnet pour célébrer les moments heureux, même face aux défis de la tristesse.',
    emotion: ScheduleItemEmotion.TRISTESSE,
    date: ScheduleItemDate.DIMANCHE,
    time: '13h',
  },
  {
    type: ScheduleItemType.TEMPS_ECHANGE,
    title: 'Accueillir ses émotions',
    description:
      'Discussion avec des professionnel(le)s pour apprendre à accepter et valoriser toutes les émotions.',
    date: ScheduleItemDate.DIMANCHE,
    time: '14h',
  },
  {
    type: ScheduleItemType.AUTRES,
    title: 'L’arc-en-ciel des émotions',
    description: 'Un spectacle interactif pour comprendre et mieux gérer les émotions en famille.',
    date: ScheduleItemDate.DIMANCHE,
    time: '16h',
  },
  {
    type: ScheduleItemType.ATELIER,
    title: 'Zone de défoulement',
    description: 'Punching-balls et papiers à froisser pour canaliser la colère.',
    emotion: ScheduleItemEmotion.COLERE,
    date: ScheduleItemDate.BOTH,
  },
  {
    type: ScheduleItemType.ATELIER,
    title: 'Mur du bonheur',
    description: 'Exprimez votre joie en dessinant ou écrivant ce qui vous rend heureux(se).',
    emotion: ScheduleItemEmotion.JOIE,
    date: ScheduleItemDate.BOTH,
  },
  {
    type: ScheduleItemType.AUTRES,
    title: 'Mini vidéos',
    description: 'Des vidéos pédagogiques sur chaque émotion à découvrir à l’entrée des espaces.',
    date: ScheduleItemDate.BOTH,
  },
  {
    type: ScheduleItemType.AUTRES,
    title: 'Coin lecture',
    description: 'Un espace calme avec des livres sur les émotions pour petits et grands.',
    date: ScheduleItemDate.BOTH,
  },
  {
    type: ScheduleItemType.AUTRES,
    title: 'Jeux de société',
    description: 'Partagez des moments ludiques en découvrant des jeux autour des émotions.',
    date: ScheduleItemDate.BOTH,
  },
])

const filteredItems = computed(() => {
  const filteredByType =
    state.selectedType === 'all'
      ? items.value
      : items.value.filter((item) => item.type === state.selectedType)
  const filteredByDate =
    state.selectedDate === 'all'
      ? filteredByType
      : filteredByType.filter((item) => item.date === state.selectedDate)

  return filteredByDate
})
</script>
