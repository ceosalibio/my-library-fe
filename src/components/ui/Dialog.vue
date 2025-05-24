<template>
    <div>
        <v-dialog
            v-model="model"
            :max-width="props.width"
            :transition="props.transition"
            persistent 
            class="custom-dialog"
        >
            <slot></slot>
        </v-dialog>
    </div>
</template>
<script setup>

    const model = defineModel()
    const props = defineProps({
        width   :   {
            type    : String,
            default : '400'
        },
        transition   :  {
            type    : String,
            default : ''
        },
    })
</script>

<style scoped>
.custom-dialog {
    align-items: flex-start;
    justify-content: flex-center;
  }
</style>