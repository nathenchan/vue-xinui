const locationText = {
	tips:'',
	html:`<x-location-select :location-data="locationData" v-model="locationVal" @lastChange="changefn" />`,
	css:``,
	js:`export default{
  data(){
    return {
      locationData,
      locationVal:''
    }
  },
  methods:{
    changefn(){
      console.log(this.locationVal)
    }
  }
}`
}


export { locationText }