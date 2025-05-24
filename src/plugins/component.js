import Appbar from '../components/layouts/Appbar.vue'
import Textfield from '../components/ui/Textfield.vue'
import Textarea from '../components/ui/Textarea.vue'
import Button from '../components/ui/Button.vue'
import Card from '../components/ui/Card.vue'
import Overlay from '../components/ui/Overlay.vue'
import Dialog from '../components/ui/Dialog.vue'

export default {
    install(app){
        app.component('Appbar',Appbar)
        app.component('Textfield',Textfield)
        app.component('Textarea',Textarea)
        app.component('Button',Button)
        app.component('Card',Card)
        app.component('Overlay',Overlay)
        app.component('Dialog',Dialog)
    }
}