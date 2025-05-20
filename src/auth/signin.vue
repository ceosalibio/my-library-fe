<template>
    <div>
        <v-form ref="form" @submit.prevent="login">
            <div>
                <Textfield 
                    v-model="email"
                    label="Username"
                    :rounded="true"
                />
            </div>
    
            <div>
                <Textfield 
                    v-model="password"
                    label="Password"
                    :rounded="true"
                    :type="'password'"
                />
            </div>

            <div class="text-center">
                <Button
                    :size="'small'"
                    :type="'submit'"

                >
                    Sign in
                </Button>
<!-- 
                <Textfield 
                    v-model="confirmValue"
                    label="Email"
                    :rounded="true"
                />
                <Button
                @on-click="confirm"

            >
                confirm
            </Button> -->

            <!-- <Textfield 
                    v-model="confirmValue"
                    label="Email"
                    :rounded="true"
                />
                <Button
                @on-click="signup"

            >
            signup
            </Button> -->
            </div>
        </v-form>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue'
    import { setItem } from '../utils/cache'
    import { store } from '../store';
    // import { signIn } from '../utils/awsCognito'
    // import { signIn, signUp , confirmSignUp} from '@aws-amplify/auth';



    const email = ref('')
    const password = ref('')
    const confirmValue = ref('')
    const name = ref('')
    const storeData = store()

    const login = () =>{
        let user = {
            username : email.value,
            password : password.value,
        }
        if(user.username == "ceo" && user.password == "salibio"){
            setItem('user',user)
            storeData.overlay = true
            setTimeout(() => {
                window.location.reload(true)
            }, 1500);
        }else{
            alert('Invalid credentials')
        }
    }

    // // Sign Up function
    // const signup = async () => {
    //     try {
    //         const result = await signUp({
    //         username: "salibioarceceo@gmail.com",
    //         password: "CQimages@1213",
    //         attributes: {
    //             email: "salibioceo@gmail.com",
    //             name: "ceo", // optional custom attribute
    //         },
    //         })
    //         console.log('Signup success:', result)
    //         alert('Check your email to confirm your account')
    //     } catch (error) {
    //         console.error('Signup error:', error)
    //         alert(error.message)
    //     }
    // }

    // const confirm = async () => {
    //     try {
    //         if (!email.value) {
    //             console.error('Username (email) is required');
    //             return;
    //         }
            
    //         await confirmSignUp('salibioceo@gmail.com', 'CQimages@1213'); // Passing email as username
    //         alert('Your account has been confirmed. You can now log in.')
    //     } catch (err) {
    //         console.error('Confirmation error:', err)
    //         alert(err.message)
    //     }
    // }
    // const login = async () =>{
    //     try {
    //         // if (!email.value) {
    //         //     console.error('Username (email) is required');
    //         //     return;
    //         // }
    //     const tokens = await signIn('salibioarceo@gmail.com', 'CQimages@1213');
    //     console.log('Logged in!', tokens);
    //     // localStorage.setItem('accessToken', tokens.accessToken);
    //   } catch (err) {
    //   console.log(err)
    //   }
    // }

    // onMounted(() => {
    //     console.log(signIn)
    // })

</script>