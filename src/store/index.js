import { defineStore } from "pinia"
import { useRouter } from "vue-router"
import instance from "../utils/instance"
import { getItem } from '../utils/cache'

export const store = defineStore('store', {
    state : () =>({
        router : useRouter(),
        user : getItem('user') || null,
        title : '',
        description : [
            {id : 1,description : '', code : '', image :''}
        ],
        tableData : [],
        content : {},
        overlay : false,
        keyword : '',
        noResult : false,
        contentResult : false
    }),

    getters : {
        isAuthenticated: (state) => !!state.user
    },
    actions : {
        async getAll(){
            try {
                this.overlay = true
                const { data } = await instance.get(`https://l8ad4lpm9c.execute-api.ap-southeast-2.amazonaws.com/library`);
                if(data){
                    // console.log(data)
                    this.tableData = data
                    this.overlay = false
                }
            } catch (error) {
                console.log(error)
                if(error.status == 404){
                    this.noResult = true
                    this.overlay = false
                }
            }
        },

        async getById(id){
            console.log(id,'ceo')
            try {
                this.overlay = true
                const { data } = await instance.get(`https://l8ad4lpm9c.execute-api.ap-southeast-2.amazonaws.com/items/${id}`)
                if(data){
                    this.content = data
                    this.overlay = false
                }
            } catch (error) {
                if(error.status == 404){
                    this.contentResult = true
                    this.overlay = false
                }
            }
        },
        async search(){
            try {
                this.overlay = true
                const { data } = await instance.get(`https://l8ad4lpm9c.execute-api.ap-southeast-2.amazonaws.com/items/search/${this.keyword}`)
                if(data){
                    // console.log(data)
                    this.tableData = data
                    this.overlay = false
                }
            } catch (error) {
                if(error.status == 404){
                    this.tableData = []
                    this.noResult = true
                    this.overlay = false
                }
            }
        },
       async create(){
            // this.overlay = true
            // const id = Math.random().toString(36).substr(2, 9);
            // this.tableData.push({id : id,title : this.title, description : this.description})
            // setTimeout(() => {
            //     this.title = ''
            //     this.description =  [
            //         {id : 1,description : '', code : '', image :''}
            //     ]
            //     this.overlay = false
            // }, 1500);

            try {
                this.overlay = true
                const { data } = await instance.post(`https://l8ad4lpm9c.execute-api.ap-southeast-2.amazonaws.com/items`,{
                    title : this.title,
                    description : this.description
                })
                if(data){
                    this.tableData.push(data.data)
                    this.title = ''
                    this.description =  [
                        {id : 1,description : '', code : '', image :''}
                    ]
                    this.overlay = false
                }
            } catch (error) {
                
            }
        },

        async update(id){
     

            try {
                this.overlay = true
                const { data } = await instance.put(` https://l8ad4lpm9c.execute-api.ap-southeast-2.amazonaws.com/update/${id}`,{
                    title : this.content.title,
                    description : this.content.description,
                    views : this.content.views
                })
                if(data){
                    this.router.push({ path: '/'})

                }
            } catch (error) {
                
            }
        },

        async delete(id){
            try {
                let isConfirm = confirm('Are you sure you want to delete?')
                if(isConfirm){
                    this.overlay = true
                    const { data } = await instance.delete(`https://l8ad4lpm9c.execute-api.ap-southeast-2.amazonaws.com/delete/${id}`)
                    if(data){
                        this.overlay = false
                        this.getAll()
                    }
                }
            } catch (error) {
                console.log(error)
            }
        }

        // search() {
        //     const keyword = this.keyword.trim().toUpperCase();
        //     console.log(keyword,'ceo')
        //     if (!keyword) return this.tableData;
        
        //     this.tableData =  this.tableData.filter(item => {

        //         const matchesTitle = item.title?.toString().toUpperCase().includes(keyword);
        
        //         const matchesDescription = Array.isArray(item.description) && item.description.some(descItem =>
        //             Object.values(descItem).some(value =>
        //                 typeof value === 'string' &&
        //                 value.toUpperCase().includes(keyword)
        //             )
        //         );
        //         console.log(matchesTitle , matchesTitle)
        
        //         return matchesTitle || matchesDescription;
        //     });
   
        // }
    }
})