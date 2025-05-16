<template>
    <div>
        <div>
            <Filter />
        </div>
        <div>
            <v-container>
                <v-list v-for="(item,i) in storeData.tableData" :key="i" v-if="!storeData.noResult">
                    <v-list-item
                        prepend-avatar="https://www.gravatar.com/avatar/?d=mp"
                    >
                        <v-list-item-content>
                            <v-list-item-title class="text-h6 title" @click="viewPage(item)" >{{item.title}}</v-list-item-title>
                            <v-list-item-subtitle>{{item.description[0].description}}</v-list-item-subtitle>
                            <div class="text-caption text-grey">
                                Created at – {{ dateString(item.created_at) }}
                            </div>
                        </v-list-item-content>
                        <v-list-item-action>
                            <Button
                                :variant="'text'"
                                :size="'x-small'"
                                class="button-text"
                                :color="'warning'"
                                @on-click="goUpdate(item)"
                            >
                                update
                            </Button>
                            <Button
                                :variant="'text'"
                                :size="'x-small'"
                                class="button-text"
                                :color="'red'"
                                @on-click="storeData.delete(item.id)"
                            >
                                delete
                            </Button>
                          </v-list-item-action>
                    </v-list-item>
                </v-list>

                <div
                    v-else
                    class="d-flex align-center justify-center flex-column text-grey"
                    style="height: 300px; width: 100%;"
                >
                    <v-icon size="48" class="mb-2">mdi-magnify</v-icon>
                    <div class="text-h6">No result found</div>
                </div>
            </v-container>
            
        </div>
    </div>
</template>
<script setup>
    import Filter from '../components/layouts/Filter.vue';
    import { dateString } from '../utils/date'
    import { store } from '../store'
    import { useRouter } from 'vue-router'
    import { onMounted } from 'vue'

    const router = useRouter()

    const storeData = store()

    const viewPage = (item) =>{
        // console.log(item)
        router.push({
            path: '/content',
            query: { id : item.id}
        })
    }

    const goUpdate = (item) =>{
        router.push({
            path: '/update',
            query: { id : item.id}
        })
    }

    onMounted(() => {
        if(storeData.keyword){
            storeData.search()
        }else{
            storeData.getAll()
        }
    })
</script>

<style>
.button-text{
    padding: 0px;
    size: 8px !important;
}

.title:hover {
    cursor: pointer;
    color: rgb(31, 104, 231);
    text-decoration:underline;
}
</style>