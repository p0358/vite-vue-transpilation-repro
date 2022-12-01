import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

function test() {
    return { value: 'aa' };
}
// BELOW WILL WORK in .ts file, but not in .vue (see HelloWorld.vue)
console.log('main.ts', test()?.value || 'bb');
//

createApp(App).mount('#app')
