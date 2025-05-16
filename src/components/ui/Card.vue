<template>
    <div>
      <v-card
        :variant="props.variant"
        :color="color"
      >
        <slot></slot>
      </v-card>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue';
  
  const props = defineProps({
    width: {
      type: String,
      default: '',
    },
    variant: {
      type: String,
      default: 'elevated',
    },
    color: {
      type: String,
      default: '',
    },
    elevation: {
      type: String,
      default: '0',
    },
    nested: {
      type: Boolean,
      default: false,
    }
  });
  

  </script>
  