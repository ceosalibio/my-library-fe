<template>
    <div>
        <Dialog
            v-model="dialog"
        >
            <Card>
                <v-card-title class="text-center">
                    Sign in
                </v-card-title>
                <v-card-text>
                    <SignIn />
                </v-card-text>
            </Card>
        </Dialog>
    </div>
</template>
<script setup>
    import { ref, defineExpose } from 'vue'
    import SignIn from './signin.vue'

    const dialog = ref(false)

    const showDialog = () =>{
        dialog.value = true
    }

    defineExpose({
        showDialog 
    })
</script>