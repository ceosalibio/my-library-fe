<template>
    <div>
        <v-btn
            :type="props.type"
            :variant="props.variant"
            :color="props.color"
            :density="props.density"
            :to="to"
            :height="height"
            :style="{ width: props.width + 'px' }"
            :loading="loading"
            :block="block"
            :icon="icon"
            :disabled="disabled"
            :size="props.size"
            @click="$emit('on-click')"
        >
            <slot></slot>
        </v-btn>
    </div>
</template>
<script setup>
    const emit = defineEmits(['on-click'])

    const props = defineProps({
        type : {
            type    : String,
            default : 'button'
        },
        variant : {
            type    : String,
            default : 'elevated'
        },
        density : {
            type    : String,
            default : 'default'
        },
        size : {
            type    : String,
            default : 'large'
        },
        color : {
            type    : String,
            default : 'primary'
        },
        to : {
            type    : String,
            default : ''
        },
        height : {
            type    : String,
            default : ''
        },
        width: {
            type: [Number, String], // Allow both Number and String
            default: ''
        },
        loading : {
            type    : Boolean,
            default : false
        },
        block : {
            type    : Boolean,
            default : false
        },
        icon : {
            type    : Boolean,
            default : false
        },
        disabled : {
            type    : Boolean,
            default : false
        }
    })
</script>