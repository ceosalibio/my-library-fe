<template>
    <div>
        <v-container>
            <div>
                <Button
                    :to="'/'"
                >
                    <v-icon>
                        mdi-arrow-left
                    </v-icon>
                    back
                </Button>
            </div>
    
            <div class="mt-2">
                <div>
                    <Textfield 
                        v-model="storeData.content.title"
                        :label="'Title'"
                        :placeholder="'Add title here'"
                    />
                </div>
    
                <div v-for="(desc, index) in storeData.content.description" :key="index">
                    <div class="text-end">
                        <Button
                            :variant="'plain'"
                            :color="'red'"
                            @on-click="remove(index)"
                        >
                            Delete
                        </Button>
                    </div>
                    <Textarea
                        v-model="desc.description"
                        :label="'Description ' + (index + 1)"
                        :placeholder="'Input description'"
                        class="pre-wrap"
                    />
                    <Textarea
                        v-model="desc.code"
                        :label="'</> Code ' + (index + 1)"
                        :placeholder="'Input code here'"
                        class="code-font pre-wrap"
             
                    />
                </div>
    
                <div class="d-flex justify-center ga-2">
                    <Button :color="'warning'" @click="addDescription">
                        Add
                    </Button>
                    <Button 
                        :color="'success'"
                        @on-click="storeData.update(storeData.content.id)"
                    >
                        Save
                    </Button>
                </div>
            </div>
        </v-container>
        
    </div>
</template>
<script setup>
    import { store } from '../store'
    import { onMounted } from 'vue'
    import { useRoute } from 'vue-router'

    const route = useRoute()
    const storeData = store()
    const id = route.query.id
    if (!Array.isArray(storeData.description)) {
        storeData.description = [
            {
                // id: 1,
                description: '',
                code: ''
            }
        ]
    }

    const addDescription = () => {
        storeData.content.description.push({
            description: '',
            code: ''
        })
    }

    const remove = (index) =>{
        storeData.description.splice(index, 1)
    }

    onMounted(()=>{
        storeData.getById(id)
    })
    
</script>

<style>
    .code-font{
        font-family:'Courier New', Courier, monospace;
    }
</style>