<template>
    <div class="bg">
      <div class="container max-width-lg">
        <div class="subnav js-subnav">
          <button class="reset btn btn--subtle margin-y-sm subnav__control js-subnav__control">
            <span>Menu</span>
            <svg class="icon icon--xxs margin-left-xxs" aria-hidden="true" viewBox="0 0 12 12">
              <polyline points="0.5 3.5 6 9.5 11.5 3.5" fill="none" stroke-width="1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></polyline>
            </svg>
          </button>

          <div class="subnav__wrapper js-subnav__wrapper">
            <nav class="subnav__nav justify-center">
              <button class="reset subnav__close-btn js-subnav__close-btn js-tab-focus" aria-label="Close navigation">
                <svg class="icon" viewBox="0 0 16 16">
                  <g stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10">
                    <line x1="13.5" y1="2.5" x2="2.5" y2="13.5"></line>
                    <line x1="2.5" y1="2.5" x2="13.5" y2="13.5"></line>
                  </g>
                </svg>
              </button>

              <ul class="subnav__list">
                <li class="subnav__item"><a href="#0" class="subnav__link" aria-current="page">Overview</a></li>
                <li class="subnav__item"><a href="#0" class="subnav__link">Features</a></li>
                <li class="subnav__item"><a href="#0" class="subnav__link">Rates</a></li>
                <li class="subnav__item"><a href="#0" class="subnav__link">Compare</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { onMounted } from 'vue'
import script from './script.js'

export default {
    name: 'subnavigation-default',
    setup() {
        onMounted(() => {
            script()
        })
    }
}
</script>

<style lang="scss">
    @import './style.scss';
</style>
