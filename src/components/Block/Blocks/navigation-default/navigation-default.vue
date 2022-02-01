<template>
    <header class="mega-nav mega-nav--mobile _mega-nav--desktop mega-nav--desktop@md position-relative js-mega-nav">
      <div class="mega-nav__container">
        <!-- Logo -->
        <router-link
          :to="{
            name: 'preview',
            params: { page: 1 }
          }"
          class="mega-nav__logo"
        >
          <svg width="104" height="30" viewBox="0 0 104 30">
            <title>Go to homepage</title>
            <path d="M37.54 24.08V3.72h4.92v16.37h8.47v4zM60.47 24.37a7.82 7.82 0 01-5.73-2.25 8.36 8.36 0 01-2-5.62 8.32 8.32 0 012.08-5.71 8 8 0 015.64-2.18 8.07 8.07 0 015.68 2.2 8.49 8.49 0 012 5.69 8.63 8.63 0 01-1.78 5.38 7.6 7.6 0 01-5.89 2.49zm0-3.67c2.42 0 2.73-3 2.73-4.23s-.31-4.26-2.73-4.26-2.79 3-2.79 4.26.32 4.23 2.82 4.23zM95.49 24.37a7.82 7.82 0 01-5.73-2.25 8.36 8.36 0 01-2-5.62 8.32 8.32 0 012.08-5.71 8.4 8.4 0 0111.31 0 8.43 8.43 0 012 5.69 8.6 8.6 0 01-1.77 5.38 7.6 7.6 0 01-5.89 2.51zm0-3.67c2.42 0 2.73-3 2.73-4.23s-.31-4.26-2.73-4.26-2.8 3-2.8 4.26.31 4.23 2.83 4.23zM77.66 30c-5.74 0-7-3.25-7.23-4.52l4.6-.26c.41.91 1.17 1.41 2.76 1.41a2.45 2.45 0 002.82-2.53v-2.68a7 7 0 01-1.7 1.75 6.12 6.12 0 01-5.85-.08c-2.41-1.37-3-4.25-3-6.66 0-.89.12-3.67 1.45-5.42a5.67 5.67 0 014.64-2.4c1.2 0 3 .25 4.46 2.82V8.81h4.85v15.33a5.2 5.2 0 01-2.12 4.32A9.92 9.92 0 0177.66 30zm.15-9.66c2.53 0 2.81-2.69 2.81-3.91s-.31-4-2.81-4-2.81 2.8-2.81 4 .27 3.91 2.81 3.91zM55.56 3.72h9.81v2.41h-9.81z" fill="var(--color-contrast-higher)" />
            <circle cx="15" cy="15" r="15" fill="var(--color-primary)" />
          </svg>
      </router-link>

        <!-- Mobile Icons -->
        <div class="mega-nav__icon-btns mega-nav__icon-btns--mobile">

          <!-- Mobile: Search -->
          <button class="reset mega-nav__icon-btn mega-nav__icon-btn--search js-tab-focus" aria-label="Toggle search" aria-controls="mega-nav-search">
            <svg class="icon" viewBox="0 0 24 24">
              <g class="icon__group" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2">
                <path d="M4.222 4.222l15.556 15.556" />
                <path d="M19.778 4.222L4.222 19.778" />
                <circle cx="9.5" cy="9.5" r="6.5" />
              </g>
            </svg>
          </button>

          <!-- Mobile: Toggle Menu -->
          <button class="reset mega-nav__icon-btn mega-nav__icon-btn--menu js-tab-focus" aria-label="Toggle menu" aria-controls="mega-nav-navigation">
            <svg class="icon" viewBox="0 0 24 24">
              <g class="icon__group" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2">
                <path d="M1 6h22" />
                <path d="M1 12h22" />
                <path d="M1 18h22" />
              </g>
            </svg>
          </button>
        </div>

        <div class="mega-nav__nav js-mega-nav__nav" id="mega-nav-navigation" role="navigation" aria-label="Main">
          <div class="mega-nav__nav-inner">
            <ul class="mega-nav__items">
              <li class="mega-nav__label">Menu</li>

              <!-- Menu Item -->
              <li
                v-for="item in menu"
                class="mega-nav__item js-mega-nav__item"
              >
                <button class="reset mega-nav__control js-mega-nav__control js-tab-focus">
                  {{ item.title }}
                  <i class="mega-nav__arrow-icon" aria-hidden="true">
                    <svg class="icon" viewBox="0 0 16 16"><g class="icon__group" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"><path d="M2 2l12 12" /><path d="M14 2L2 14" /> </g></svg>
                  </i>
                </button>
                <!-- Dropdown -->
                <div class="mega-nav__sub-nav-wrapper">
                  <div class="mega-nav__sub-nav mega-nav__sub-nav--layout-2">
                    <!-- Children Group -->
                    <ul v-for="child in item.children" class="mega-nav__sub-items">
                      <li class="mega-nav__label">{{ child.title }}</li>
                      <!-- Link -->
                      <li v-for="grandchild in child.children" class="mega-nav__sub-item">
                          <router-link
                            :to="{
                              name: 'preview',
                              params: { page: grandchild.id }
                            }"
                            class="mega-nav__sub-link"
                          >
                              {{ grandchild.title }}
                          </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <!-- Link -->
              <!-- <li class="mega-nav__label">Other</li>
              <li class="mega-nav__item">
                <a href="#0" class="mega-nav__control">Link</a>
              </li> -->
            </ul>

            <ul class="mega-nav__items">
              <!-- Desktop Icons -->
              <li class="mega-nav__icon-btns mega-nav__icon-btns--desktop">

                <!-- Search -->
                <button class="reset mega-nav__icon-btn mega-nav__icon-btn--search js-tab-focus" aria-label="Toggle search" aria-controls="mega-nav-search">
                  <svg class="icon" viewBox="0 0 24 24">
                    <g class="icon__group" fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2">
                      <path d="M4.222 4.222l15.556 15.556" />
                      <path d="M19.778 4.222L4.222 19.778" />
                      <circle cx="9.5" cy="9.5" r="6.5" />
                    </g>
                  </svg>
                </button>
              </li>

              <!-- Login -->
              <li class="mega-nav__item">
                <a href="#0" class="btn btn--primary mega-nav__btn">Log In</a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Search Dropdown -->
        <div class="mega-nav__search js-mega-nav__search" id="mega-nav-search">
          <div class="mega-nav__search-inner">
            <input class="form-control width-100%" type="reset search" name="megasite-search" id="megasite-search" placeholder="Search..." aria-label="Search">

            <div class="margin-top-lg">
              <p class="mega-nav__label">Quick Links</p>

              <ul>
                <li><a href="#0" class="mega-nav__quick-link">Trouble Logging In</a></li>
                <li><a href="#0" class="mega-nav__quick-link">Routing Number</a></li>
                <li><a href="#0" class="mega-nav__quick-link">Lost or Stolen Card</a></li>
                <li><a href="#0" class="mega-nav__quick-link">Loan Status</a></li>
                <li><a href="#0" class="mega-nav__quick-link">Make a Payment</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
</template>

<script>
import { onMounted } from 'vue'
import script from './script.js'

export default {
    name: 'navigation-default',
    setup() {
        const menu = [
            {
                'title': 'Accounts',
                'children': [
                    {
                        'title': 'Checking',
                        'children': [
                            {
                                'id': 2,
                                'title': 'Free Checking'
                            },
                            {
                                'id': 3,
                                'title': 'Interest Checking'
                            },
                            {
                                'id': 4,
                                'title': 'Youth Checking'
                            },
                            {
                                'id': 5,
                                'title': 'Senior Checking'
                             }
                        ]
                    },
                    {
                        'title': 'Savings',
                        'children': [
                            {
                                'id': 6,
                                'title': 'Regular Savings'
                            },
                            {
                                'id': 7,
                                'title': 'Custom Savings'
                            },
                            {
                                'id': 8,
                                'title': 'Youth Savings'
                            },
                            {
                                'id': 9,
                                'title': 'Money Market'
                            },
                            {
                                'id': 10,
                                'title': 'Certificates'
                            }
                        ]
                    },
                    {
                        'title': 'Retirement',
                        'children': [
                            {
                                'id': 11,
                                'title': 'Traditional IRA'
                            },
                            {
                                'id': 12,
                                'title': 'Roth IRA'
                            },
                        ]
                    }
                ]
            },
            {
                'title': 'Loans',
                'children': [
                    {
                        'title': 'Vehicle',
                        'children': [
                            {
                                'id': 13,
                                'title': 'Auto Loan'
                            },
                            {
                                'id': 14,
                                'title': 'Recreational Vehicle Loan'
                            },
                        ]
                    },
                    {
                        'title': 'Home',
                        'children': [
                            {
                                'id': 15,
                                'title': 'Mortgage'
                            },
                            {
                                'id': 16,
                                'title': 'Home Equity Loan'
                            },
                            {
                                'id': 17,
                                'title': 'Home Equity Line of Credit'
                             }
                        ]
                    },
                    {
                        'title': 'Personal',
                        'children': [
                            {
                                'id': 18,
                                'title': 'Personal Loan'
                            },
                            {
                                'id': 19,
                                'title': 'Personal Line of Credit'
                            },
                        ]
                    }
                ]
            },
            {
                'title': 'Cards',
                'children': [
                    {
                        'title': 'Credit',
                        'children': [
                            {
                                'id': 20,
                                'title': 'Visa Signature'
                            },
                            {
                                'id': 21,
                                'title': 'Visa Platinum'
                            }
                        ]
                    },
                    {
                        'title': 'Debit',
                        'children': [
                            {
                                'id': 5229,
                                'title': 'Debit Card'
                            },
                        ]
                    },
                    {
                        'title': 'Prepaid',
                        'children': [
                            {
                                'id': 23,
                                'title': 'Prepaid Giftcard'
                            },
                        ]
                    }
                ]
            },
            {
                'title': 'Business',
                'children': [
                    {
                        'title': 'Accounts',
                        'children': [
                            {
                                'id': 24,
                                'title': 'Business Free Checking'
                            },
                            {
                                'id': 25,
                                'title': 'Business Regular Savings'
                            },
                        ]
                    },
                    {
                        'title': 'Loans',
                        'children': [
                            {
                                'id': 26,
                                'title': 'SBA Loan'
                            },
                            {
                                'id': 27,
                                'title': 'Business Line of Credit'
                            },
                            {
                                'id': 28,
                                'title': 'Business Vehicle Loan'
                            },
                            {
                                'id': 29,
                                'title': 'Business Real Estate'
                            },
                        ]
                    },
                    {
                        'title': 'Cards',
                        'children': [
                            {
                                'id': 30,
                                'title': 'Business Visa'
                            },
                            {
                                'id': 31,
                                'title': 'Business Debit Card'
                            },
                        ]
                    }
                ]
            },
            {
                'title': 'About',
                'children': [
                    {
                        'title': 'Contact',
                        'children': [
                            {
                                'id': 32,
                                'title': 'Contact Us'
                            },
                            {
                                'id': 33,
                                'title': 'Branches and ATMs'
                            },
                        ]
                    },
                    {
                        'title': 'Who We Are',
                        'children': [
                            {
                                'id': 34,
                                'title': 'About Us'
                            },
                            {
                                'id': 35,
                                'title': 'What Makes Us Different'
                            },
                            {
                                'id': 36,
                                'title': 'History '
                            },
                        ]
                    },
                    {
                        'title': 'Resources',
                        'children': [
                            {
                                'id': 37,
                                'title': 'Careers'
                            },
                            {
                                'id': 38,
                                'title': 'Help Center'
                            }
                        ]
                    }
                ]
            }
        ]

        onMounted(() => {
            script()
        })

        return {
            menu
        }
    }
}
</script>

<style lang="scss">
    @import './style.scss';
</style>
