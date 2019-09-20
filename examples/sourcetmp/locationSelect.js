const locationText = {
	tips:'',
	html:`<x-location-select :location-data="locationData" v-model="locationVal" @lastChange="changefn" />`,
	css:``,
	js:`export default{
  data(){
    return {
      locationData,
      locationVal:'',
      testData:[ // 参考数据格式
        {
            "name": "北京市",
            "cityList": [
              { // 市级
                "name": "北京市", // 如果是直辖市则与上级名相同
                "areaList": [ // 区列表
                {
                  "name": "东城区"
                }
                ]
              }
            ]
        },
        {
          "name": "广东省",
          "cityList": [
            { // 市级
                "name": "深圳市",
                "areaList": [ // 区列表
                {
                  "name": "福田区"
                }
                ]
              },
              {
                "name": "广州市",
                "areaList": [ // 区列表
                {
                  "name": "荔湾区"
                }
                ]
              }
          ]
        }
      ]
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