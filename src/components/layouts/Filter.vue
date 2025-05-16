<template>
  <div class="d-none d-sm-flex">
    <div class="d-flex align-center px-4 py-3" style="width: 100%;">
      <!-- Title (Logo) -->
      <div class="me-4" style="width: 300px;">
        <h2 class="ma-0">CEOLibrary</h2>
      </div>
      <!-- Search Bar -->
      <div class="flex-grow-1 me-4" style="max-width: 700px;">
        <Textfield
        v-model="storeData.keyword"
          placeholder="Search here..."
          rounded
          block
          density="comfortable"
          style="height: 40px; background: white;"
        />
      </div>
      <!-- Buttons -->
      <div class="d-flex align-center">
        <Button 
          class="me-2" 
          :variant="'text'"
          @on-click="storeData.search()"
          :disabled="storeData.keyword?false:true"
        >
          Search
        </Button>
        <Button 
          :variant="'text'" 
          :color="'success'" 
          :to="'/create'"
        >
          Add
        </Button>
      </div>
    </div>
    <div class="mt-5 mr-5">
      <h3>Signin</h3>
    </div>
</div>

<!-- small screen -->
<div class="d-sm-none ma-2">
  <div class="d-flex justify-space-between">
    <h2 class="ma-0">CEOLibrary</h2>
    <span>Signin</span>
  </div>

  <div class="d-flex ma-2">
    <div class="flex-grow-1">
      <Textfield
        v-model="storeData.keyword"
          placeholder="Search here..."
          rounded
          block
          density="comfortable"
          style="height: 40px; background: white;"
        />
    </div>
    

        <div class="d-flex align-center">
          <Button 
            class="me-2" 
            :variant="'text'"
            :size="'x-small'"
            @on-click="storeData.search()"
            :disabled="storeData.keyword?false:true"
          >
            Search
          </Button>
          <Button 
            :variant="'text'"
            :size="'x-small'" 
            :color="'success'" 
            :to="'/create'"
          >
            Add
          </Button>
        </div>
  </div>
</div>
  
</template>

<script setup>
  import { store } from '../../store';
  import { watch } from 'vue';
  

  const storeData = store()

  watch(
  () => storeData.keyword,
  (newVal, oldVal) => {
    if(!newVal){
      storeData.getAll()
      storeData.noResult = false
    }
  }


)
</script>
