<template>
  <q-header class="doc-header header-toolbar doc-brand row justify-center" bordered :height-hint="128">
    <q-toolbar class="doc-header__primary q-pl-lg q-pr-md no-wrap items-stretch">
      <div class="doc-header-icon-links row no-wrap items-center">
        <q-btn
          class="header-btn doc-header__leftmost q-mr-xs lt-1300"
          flat
          round
          icon="menu"
          aria-label="Menu"
          :aria-expanded="docStore.state.value.menuDrawer ? 'true' : 'false'"
          aria-controls="menu-drawer"
          @click="docStore.toggleMenuDrawer"
        >
          <q-tooltip>Menu</q-tooltip>
        </q-btn>
      </div>

      <router-link to="/" class="doc-header__logo row items-center no-wrap cursor-pointer">
        <img
          class="doc-header__logo-img"
          :src="logo.img"
          alt="Quasar Logo"
          width="48"
          height="48"
        >
        <img
          class="doc-header__logo-text q-ml-md"
          :src="logo.text"
          alt="Quasar Logo"
          width="150"
          height="20"
        >
      </router-link>

      <q-space />

      <doc-header-icon-links
        class="gt-860"
        :menu="socialLinks.children"
      />

      <doc-search />

      <div class="doc-header-icon-links q-ml-sm row no-wrap items-center">
        <q-btn
          class="header-btn"
          type="a"
          flat
          round
          :icon="mdiCompare"
          @click="docStore.toggleDark"
        />
      </div>

      <div v-if="hasToc" class="doc-header-icon-links q-ml-sm lt-md row no-wrap items-center">
        <q-btn
          class="header-btn"
          flat
          round
          :icon="mdiFolderPound"
          aria-label="Table of Contents"
          :aria-expanded="docStore.state.value.tocDrawer ? 'true' : 'false'"
          aria-controls="toc-drawer"
          @click="docStore.toggleTocDrawer"
        >
        <q-tooltip>Table of Contents</q-tooltip>
      </q-btn>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { computed } from 'vue'
import { mdiCompare, mdiFolderPound } from '@quasar/extras/mdi-v6'

import { socialLinks } from 'src/assets/links.social.js'

import DocSearch from './DocSearch.vue'
// import DocHeaderTextLinks from './DocHeaderTextLinks.vue'
import DocHeaderIconLinks from './DocHeaderIconLinks.vue'

import { useDocStore } from './store/index.js'
const docStore = useDocStore()

const logo = computed(() => {
  const opt = docStore.$q.dark.isActive === true ? '-dark' : ''
  return {
    img: `https://cdn.quasar.dev/logo-v2/svg/logo${opt}.svg`,
    text: `https://cdn.quasar.dev/logo-v2/svg/logotype${opt}.svg`
  }
})

const hasToc = computed(() => docStore.$route.meta.fullwidth !== true && docStore.$route.meta.fullscreen !== true && docStore.state.value.toc.length !== 0)
</script>

<style lang="sass">
.doc-header
  transition: none

  &__primary
    height: 72px
    max-width: 2200px

  &__logo-img
    transform: rotate(0deg)
    transition: transform .8s ease-in-out

  &__logo
    padding-right: 24px

    &:hover .doc-header__logo-img
      transform: rotate(-360deg)

  &__version
    color: #000
    border: 1px solid $brand-primary
    transition: none
    .q-focus-helper
      color: $brand-primary

  &__leftmost
    margin-left: -8px

  /**
    Spacers are used to align the links dead center
   */
  &__primary-left-spacer
    width: 198px

  @media (max-width: 320px)
    .q-btn
      font-size: 12px
    .q-btn--rectangle
      padding: 8px 2px 8px 10px !important

  @media (max-width: 1059px)
    &__logo-text
      display: none

  @media (max-width: 699px)
    .q-toolbar
      padding-left: 16px
      padding-right: 8px
    &__logo
      padding-right: 16px
    .doc-search
      width: 100%
  @media (min-width: 700px)
    .doc-search
      margin-left: 8px
      .doc-search__logo
        display: none

  &__links
    justify-content: end
    @media (min-width: 1921px)
      justify-content: center

.doc-header-menu
  letter-spacing: $letter-spacing-brand
  border: 1px solid $separator-color
  font-size: ($font-size - 2px)
  box-shadow: none !important
  background-color: #fff

  .q-item
    height: 36px

  .q-item__label--header
    color: $brand-accent
    padding: 16px
    &:first-child
      padding-top: 8px
  .q-item__section--side .q-icon
    color: $brand-primary

  &__arrow
    margin-right: -8px

.doc-header-text-links__item
  .q-icon
    margin-left: 0

body.body--dark
  .doc-header__primary
    border-bottom-color: $separator-dark-color
  .doc-header-menu
    background: $dark-bg
    border-color: $separator-dark-color

  .doc-header
    &__version
      color: #fff

  .doc-header-icon-links
    color: $brand-primary

$mq-list: 860 /* social-links */, 1300 /* drawer */
@each $query in $mq-list
  @media (min-width: #{$query}px)
    .lt-#{$query}
      display: none

  @media (max-width: #{$query - 1}px)
    .gt-#{$query}
      display: none
</style>
