<template>
    <div>
        <v-textarea
            v-model="model"
            :label="props.label"
            :placeholder="props.placeholder"
            :variant="props.variant"
            :density="props.density"
            :type="props.type"
            :rows="props.row"
            :rules="props.rules"
            :disabled="props.disabled"
            :clearable="props.clearable"
            :block="props.block"
            :maxlength="props.maxlength"
            :append-inner-icon="props.appendIcon"
            :rounded="props.rounded"
            auto-grow
            @click:append-inner="$emit('on-click')"
            @update:model-value="$emit('on-change')"

        >
            <slot></slot>
        </v-textarea>
    </div>
</template>
<script setup>
    const model = defineModel();
    const emit = defineEmits(['on-change','on-click'])
    const props = defineProps({
        label : {
            type    : String,
            default : ''
        },
        placeholder : {
            type    : String,
            default : ''
        },
        variant : {
            type    : String,
            default : 'outlined'
        },
        density : {
            type    : String,
            default : 'compact'
        },
        row : {
            type    : String,
            default : '2'
        },
        type : {
            type    : String,
            default : 'text'
        },
        maxlength : {
            type    : String,
            default : ''
        },
        appendIcon : {
            type    : String,
            default : ''
        },
        rules : {
            type    : Array,
            default : () => []
        },
        disabled : {
            type    : Boolean,
            default : false
        },
        clearable : {
            type    : Boolean,
            default : false
        },
        block : {
            type    : Boolean,
            default : false
        },
        rounded : {
            type    : Boolean,
            default : false
        }

    })
</script>