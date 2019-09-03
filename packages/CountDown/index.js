import CountDown from './src/CountDown.vue'

CountDown.install = function(Vue){
	Vue.component(CountDown.name,CountDown)
}
export default CountDown