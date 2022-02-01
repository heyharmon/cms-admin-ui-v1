<template>
    <nav style="min-width: 190px;" class="sidenav sidenav--basic padding-y-md">
        <!-- <ul class="sidenav__list margin-bottom-sm">
            <li class="sidenav__item">
                <a href="#0" class="sidenav__link">
                    <svg class="icon sidenav__icon" fill="#212121" stroke="#212121"  viewBox="0 0 24 24"><g stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" stroke-miterlimit="10"><rect x="2" y="2" width="7" height="7" fill="none" stroke="#212121"></rect> <rect data-color="color-2" x="15" y="2" width="7" height="7" fill="none"></rect> <rect data-color="color-2" x="2" y="15" width="7" height="7" fill="none"></rect> <rect x="15" y="15" width="7" height="7" fill="none" stroke="#212121"></rect></g></svg>
                    <span class="sidenav__text">Dashboard</span>
                </a>
            </li>

            <li class="sidenav__item">
                <a href="#0" class="sidenav__link">
                    <svg class="icon sidenav__icon" fill="#212121" stroke="#212121"  viewBox="0 0 24 24"><g stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" stroke-miterlimit="10"><polyline points="2 14 6 18 18 3" fill="none" data-color="color-2"></polyline> <line x1="23" y1="8" x2="20" y2="8" fill="none" stroke="#212121"></line> <line x1="23" y1="13" x2="16" y2="13" fill="none" stroke="#212121"></line> <line x1="23" y1="18" x2="12" y2="18" fill="none" stroke="#212121"></line></g></svg>
                    <span class="sidenav__text">View site</span>
                </a>
            </li>
        </ul> -->

        <ul class="sidenav__list margin-bottom-sm">
            <li class="sidenav__item sidenav__item--expanded">
                <router-link :to="{ name: 'dashboard-pages' }" class="sidenav__link">
                    <svg class="icon sidenav__icon" viewBox="0 0 24 24"><g stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" fill="#212121" stroke="#212121" stroke-miterlimit="10"><polygon fill="none" stroke="#212121" points="2,7 12,1 22,7 12,13 "></polygon> <polyline data-color="color-2" fill="none" points=" 22,12 12,18 2,12 "></polyline> <polyline data-color="color-2" fill="none" points=" 22,17 12,23 2,17 "></polyline></g></svg>
                    <span class="sidenav__text">Pages</span>
                </router-link>
            </li>

            <li class="sidenav__item">
                <router-link :to="{ name: 'dashboard-page-blueprints' }" class="sidenav__link">
                    <svg class="icon sidenav__icon" viewBox="0 0 24 24"><g stroke-linecap="square" stroke-width="2" fill="none" stroke="#212121" stroke-linejoin="miter" stroke-miterlimit="10"><line data-cap="butt" x1="2" y1="8" x2="22" y2="8" stroke-linecap="butt" stroke="#212121"></line> <line data-cap="butt" x1="8" y1="8" x2="8" y2="22" stroke-linecap="butt" stroke="#212121"></line><path d="M20,22H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H20a2,2,0,0,1,2,2V20A2,2,0,0,1,20,22Z"></path></g></svg>
                    <span class="sidenav__text">Blueprints</span>
                </router-link>
            </li>

            <li class="sidenav__item">
                <router-link :to="{ name: 'dashboard-files' }" class="sidenav__link">
                    <svg class="icon sidenav__icon" viewBox="0 0 24 24"><g stroke-linecap="square" stroke-width="2" fill="none" stroke="currentColor" stroke-linejoin="miter"><polyline data-cap="butt" points="1 20 6 14 10 18 17 10 23 17" stroke-linecap="butt"></polyline><rect x="1" y="3" width="22" height="18"></rect><circle cx="9" cy="8" r="2"></circle></g></svg>
                    <span class="sidenav__text">Uploads</span>
                </router-link>
            </li>

            <!-- <li class="sidenav__item">
                <router-link :to="{ name: 'dashboard-menus' }" class="sidenav__link">
                    <svg class="icon sidenav__icon" viewBox="0 0 24 24"><g stroke-linecap="square" stroke-width="2" fill="none" stroke="#212121" stroke-linejoin="miter" stroke-miterlimit="10"><line x1="1" y1="12" x2="23" y2="12" stroke="#212121"></line> <line x1="12" y1="5" x2="23" y2="5"></line> <line x1="1" y1="19" x2="12" y2="19"></line></g></svg>
                    <span class="sidenav__text">Menus</span>
                </router-link>
            </li> -->
        </ul>

        <!-- <ul class="sidenav__list">
            <li class="sidenav__item">
                <a href="#0" class="sidenav__link">
                    <svg class="icon sidenav__icon" fill="#212121" stroke="#212121" viewBox="0 0 24 24"><g stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" stroke-miterlimit="10"><circle data-color="color-2" cx="8" cy="12" r="3" fill="none"></circle><path d="M8,5h8a7,7,0,0,1,7,7h0a7,7,0,0,1-7,7H8a7,7,0,0,1-7-7H1A7,7,0,0,1,8,5Z" fill="none" stroke="#212121"></path></g></svg>
                    <span class="sidenav__text">Settings</span>
                </a>
            </li>
        </ul> -->

    </nav>
</template>

<script>
export default {}
</script>

<style media="screen">
:root {
  /* List items */
  /* Height of each list item (navigation links) */
  --sidenav-list-item-height: 44px;
  /* Item horizontal padding */
  --sidenav-list-item-padding-x: var(--space-md);

  /* Icons */
  /* Size of main link icons */
  --sidenav-icon-size: 18px;
  /* Gap between main icon and text label */
  --sidenav-icon-text-gap: 10px;
}
</style>

<style lang="scss" scoped>
.sidenav {}

.sidenav__list .sidenav__list { // sublist
  display: none; // hide sublist

  .sidenav__link { // sublink
    padding-left: calc(var(--sidenav-list-item-padding-x) + var(--sidenav-sublist-control-size) + var(--sidenav-sublist-control-margin-right) + var(--sidenav-icon-size) + var(--sidenav-icon-text-gap));
  }
}

.sidenav__item {
  position: relative;
}

.sidenav__link {
  font-size: 18px;
  display: flex;
  height: var(--sidenav-list-item-height);
  align-items: center;
  padding: 0 var(--sidenav-list-item-padding-x) 0 calc(var(--sidenav-list-item-padding-x) + var(--sidenav-sublist-control-size) + var(--sidenav-sublist-control-margin-right));
  text-decoration: none;
  color: var(--color-contrast-high);
  transition: .2s;

  &:hover {
    // background-color: alpha(var(--color-contrast-higher), 0.05);
    color: var(--color-primary);

    svg * {
        stroke: var(--color-primary);
    }
  }
}

.sidenav__link[aria-current="page"],
.sidenav__link--current {
  // background-color: alpha(var(--color-primary), 0.1);
  color: var(--color-primary);

  svg * {
      stroke: var(--color-primary);
  }
}

.sidenav__icon { // main item icons
  width: var(--sidenav-icon-size);
  height: var(--sidenav-icon-size);
  margin-right: var(--sidenav-icon-text-gap);
}

.sidenav__text { // link labels
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: var(--space-xxs);
}

.sidenav__counter {
  display: inline-block;
  background-color: alpha(var(--color-contrast-higher), 0.15);
  color: var(--color-contrast-high);
  font-size: var(--text-xs);
  padding: var(--space-xxxxs) var(--space-xxs);
  border-radius: 50em;
  margin-left: auto;
}

.sidenav__label {
  padding-left: var(--sidenav-list-item-padding-x);
}

.sidenav__divider {
  width: 100%;
  height: 1px;
  background-color: var(--color-contrast-lower);
}

// --basic -> no sublists
.sidenav--basic {
  .sidenav__link, .sidenav__label {
    padding-left: var(--sidenav-list-item-padding-x);
  }
}

// --minified
.sidenav--minified {
  --sidenav-list-item-height: auto;

  .sidenav__list .sidenav__list {
    display: none !important; // hide sublists
  }

  .sidenav__link, .sidenav__label {
    padding-left: var(--sidenav-list-item-padding-x);
  }

  .sidenav__link {
    flex-direction: column;
    padding-top: var(--space-md);
    padding-bottom: var(--space-md);
  }

  .sidenav__icon {
    margin: 0 0 var(--sidenav-icon-text-gap);
  }

  .sidenav__text {
    padding: 0; // reset
  }

  .sidenav__counter, .sidenav__sublist-control {
    display: none; // hide counter and arrow icon
  }
}
</style>
