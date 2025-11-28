<script setup lang="ts">
  import * as DIcons from '@ducdev2k1/vue-material-icons';

  defineOptions({
    inheritAttrs: false,
  });

  type IconName = keyof typeof DIcons;
  export type { IconName };

  interface IProps {
    icon: IconName | any;
    size?: string | number;
    color?: string;
    viewBox?: string;
  }

  const props = withDefaults(defineProps<IProps>(), {
    size: '24',
  });
  const icon = computed(() => DIcons[props.icon.trim() as IconName]);
  const isOffice = computed(() => props.icon.includes('Office'));
</script>

<template>
  <span :class="['m-icon', { 'm-icon--office': isOffice }]">
    <component :is="icon" :size="props.size" :color="props.color" :viewBox="props.viewBox" v-bind="$attrs" />
  </span>
</template>
