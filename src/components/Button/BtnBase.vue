<script setup lang="ts">
  interface IProps {
    iconName?: string;
    title?: string;
    iconRight?: boolean;
    htmlType?: string;
    loading?: boolean;
  }

  const props = withDefaults(defineProps<IProps>(), {
    iconName: '',
    title: '',
    iconRight: false,
    loading: false,
  });

  const iconName = computed(() => props.iconName as string);
  const title = computed(() => props.title as string);
  const iconRight = computed(() => props.iconRight);
  const htmlType = computed(() => props.htmlType || 'button');
  const loading = computed(() => props.loading as boolean);
</script>

<template>
  <a-button
    class="c-btn"
    :html-type="htmlType"
    :class="{
      'flex-row-reverse': iconRight,
    }">
    <AntIcons :icon="iconName" v-if="iconName.length > 0 && !loading" />
    <AntIcons icon="LoadingOutlined" v-if="loading" />
    <slot name="beforeTitle"></slot>
    {{ title }}
    <slot name="title" />
  </a-button>
</template>

<style scoped lang="scss"></style>
