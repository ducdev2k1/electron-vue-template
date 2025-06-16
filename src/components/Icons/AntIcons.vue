<script lang="ts" setup>
  import * as AntIcons from '@ant-design/icons-vue';
  import { AntdIconProps } from '@ant-design/icons-vue/lib/components/AntdIcon';

  const props = defineProps<{
    icon: string; // ví dụ: 'HomeOutlined'
    iconProps?: AntdIconProps; // Use the AntdIconProps type
  }>();

  const iconComponent = computed(() => {
    return AntIcons[props.icon as keyof typeof AntIcons] || null;
  });
</script>

<template>
  <component :is="iconComponent" v-bind="iconProps" />
</template>
