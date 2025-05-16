<template>
    <div>
        <v-overlay 
            :model-value="storeData.overlay"
            class="align-center justify-center"
        >
            <v-progress-circular
                indeterminate
                size="64"
                color="primary"
            ></v-progress-circular>
        </v-overlay>
    </div>
</template>

<script setup>
    import { store } from '../../store';
    const storeData = store()
</script>

<style lang="scss" scoped>

</style>