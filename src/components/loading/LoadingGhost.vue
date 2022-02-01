<template>
    <ul class="grid gap-md width-100%">
        <!-- <li>
            <ul class="grid gap-xs items-center">
                <li class="col-2">
                    <div class="ske ske--circle"></div>
                </li>

                <li class="col-10">
                    <ul class="grid gap-xxs">
                        <li class="col-8">
                            <div class="ske ske--text"></div>
                        </li>

                        <li>
                            <div class="ske ske--text text-sm"></div>
                        </li>
                    </ul>
                </li>
            </ul>
        </li> -->

        <li>
            <ul class="grid gap-xxs">
                <li class="col-11">
                    <div class="ske ske--text text-sm"></div>
                </li>

                <li>
                    <div class="ske ske--text text-sm"></div>
                </li>

                <li class="col-6">
                    <div class="ske ske--text text-sm"></div>
                </li>
            </ul>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'LoadingGhost'
};
</script>

<style media="screen">
/* --------------------------------
Component: Skeleton Screen
Descr: Content placeholder used to indicate that content is loading
Docs: https://codyhouse.co/ds/components/app/skeleton-screen
-------------------------------- */
:root {
    /* all */
    --ske-animation-duration: 1s;

    /* rectangle + text */
    --ske-radius: var(--radius-md);
}
</style>

<style lang="scss">
.ske {
  position: relative;
  background-color: alpha(var(--color-contrast-higher), 0.1);
  overflow: hidden;

  &::after { // animated background effect
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, alpha(var(--color-contrast-higher), 0), alpha(var(--color-contrast-higher), 0.1), alpha(var(--color-contrast-higher), 0));
    background-repeat: no-repeat;
    background-size: 500px 100%;
    background-position: -500px 0;
    will-change: background-position;
    animation: ske-background var(--ske-animation-duration) infinite;
  }
}

@keyframes ske-background {
  from {
    background-position: -500px 0;
  }

  to {
    background-position: calc(100% + 500px) 0;
  }
}

// --circle
.ske--circle {
  height: 0;
  padding-bottom: 100%;
  border-radius: 50%;
  clip-path: circle(50% at 50% 50%);
}

// --rectangle
.ske--rect,
[class*="ske--rect-"],
.ske--square {
  border-radius: var(--ske-radius);
  clip-path: inset(0% 0% 0% 0% round var(--ske-radius));
}

[class*="ske--rect-"],
.ske--square {
  height: 0;
  padding-bottom: calc(100%/(var(--ske-aspect-ratio)));
}

.ske--rect-16\:9 {
  --ske-aspect-ratio: 16/9;
}

.ske--rect-4\:3 {
  --ske-aspect-ratio: 4/3;
}

.ske--square, .ske--rect-1\:1 {
  --ske-aspect-ratio: 1/1;
}

// --text
.ske--text {
  height: 1em;
  border-radius: var(--ske-radius);
  clip-path: inset(0% 0% 0% 0% round var(--ske-radius));
}
</style>
