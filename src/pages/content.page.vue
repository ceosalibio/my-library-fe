<template>
    <div>
        <div>
            <Button
                :to="'/'"
                :size="'small'"
            >
                <v-icon>mdi-arrow-left</v-icon>
                BACK
            </Button>
        </div>
        <div class="text-h5 mt-5">
            {{ storeData.content.title }}
        </div>
        <div class="mt-10" v-if="!storeData.contentResult">
            <v-list v-for="item in storeData.content.description">
                <div class="pre-wrap" v-if="item.description">
                    {{ item.description }}
                </div>
                <Card
                    :color="'black'"
                    v-if="item.code"
                >
                    <div class="text-end mr-5 mt-3" v-if="!storeData.copy">
                        <v-icon @click="copyToClipboard(item.code)">mdi-content-copy</v-icon>
                    </div>
                    <div class="text-end mr-5 mt-3" v-else>
                        <v-icon >mdi-check</v-icon> 
                        Copied
                    </div>
                    <v-card-text >
                        <div class="pre-wrap code-font">
                            {{ item.code }}
                        </div>
                    </v-card-text>
                </Card>
            </v-list>
        </div>

        <div
            v-else
            class="d-flex align-center justify-center flex-column text-grey"
            style="height: 300px; width: 100%;"
        >
            <v-icon size="48" class="mb-2">mdi-magnify</v-icon>
            <div class="text-h6">No result found</div>
        </div>
    </div>
</template>
<script setup>
    import { ref, onMounted } from 'vue'
    import { useRoute } from 'vue-router'
    import { store } from '../store';
    import { copyToClipboard } from '../utils/copy'

    const route = useRoute()
    const id = route.query.id
    const storeData = store()

    // const displayContent = () =>{
    //     // storeData.content = storeData.tableData.find(r => r.id === id) || {};
    //    console.log(storeData.content)
    // }

    onMounted(()=>{
        // displayContent()
        storeData.getById(id)
    })

    


</script>