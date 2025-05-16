<template>
    <v-container>
      <ContentPage />
    </v-container>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import ContentPage from '../pages/content.page.vue'
//   import axios from 'axios'
  
  const route = useRoute()
  const id = route.query.id
  
//   const result = ref(null)
//   const loading = ref(false)
  
//   const fetchData = async () => {
//     if (!id) return
  
//     loading.value = true
//     try {
//       const response = await axios.get(`https://your-api.com/items/${id}`)
//       result.value = response.data
//     } catch (error) {
//       console.error('API error:', error)
//       result.value = null
//     } finally {
//       loading.value = false
//     }
//   }
  
//   onMounted(fetchData)
  </script>
  