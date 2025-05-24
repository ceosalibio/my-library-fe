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
          v-if="storeData.isAuthenticated"
        >
          Add
        </Button>
      </div>
    </div>
    <div class="mt-5 mr-10 pointer" >
      <span v-if="!storeData.isAuthenticated" @click="openDialog()">Signin</span>
      <span v-else @click="signOut()">Signout</span>
    </div>
    
</div>

<!-- small screen -->
<div class="d-sm-none ma-2">
  <div class="d-flex justify-space-between">
    <h2 class="ma-0">CEOLibrary</h2>
      <span v-if="!storeData.isAuthenticated" @click="openDialog()" class="pointer">Signin</span>
      <span v-else @click="signOut()" class="pointer">Sign out</span>
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
            v-if="storeData.isAuthenticated"
          >
            Add
          </Button>
        </div>
  </div>

  <DialogAuth ref="auth" />
</div>
  
</template>

<script setup>
  import { store } from '../../store';
  import { ref, watch } from 'vue';
  import { removeItem } from '../../utils/cache';
  import DialogAuth from '../../auth/auth.vue';
  
  const storeData = store()
  const auth = ref()

  const openDialog = () =>{
    auth.value?.showDialog()
  }

  const signOut = () =>{
    let isConFirmed = confirm("Are you sure you want to sign out?")
    if(isConFirmed){
      removeItem('user')
      storeData.overlay = true
      setTimeout(() => {
        window.location.reload()
      }, 1500);
    }
  }

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
