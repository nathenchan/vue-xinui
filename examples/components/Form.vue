<template>
	<div>
		<div class="demo-pages">
			<h3>Form 表单</h3>
			<p class="tips">x-form-item的required会给label加上*号标记，result数组保存各个控件的验证结果，满足条件true反之false</p>
			<p class="tips">验证方式：input使用verify属性传递一个以json为成员的数组，JSON的key{type,reg,text}，具体使用看verifyData。</br>
			多选框组支持最少选择个数验证，用min字段跟required限制</br>
			下拉选择菜单可以验证是否已选择，用required</br>
			省市区选择同上，用required</br>
			文本域目前支持验证是否已填写,用required</br>
			除input组件外，以上几个表单组件的报错信息可以用error-text赋值，在验证返回false时显示
			</p>
			<div class="show-page">
				<div class="demo-page">
					<x-form label-width="90px" ref="form">
						<x-form-item required>
							<x-form-label>昵称</x-form-label>
							<x-form-control>
								<x-input type="text" v-model="form.testNum" placeholder="输入内容" :verify="verify.verifyData" :result.sync="verifyResult[0]" />
							</x-form-control>
						</x-form-item>
						<x-form-item required>
							<x-form-label>密码</x-form-label>
							<x-form-control>
								<x-input type="password" v-model="form.testNum2" placeholder="输入密码" :verify="verify.verifyData2" :result.sync="verifyResult[1]" />
							</x-form-control>
						</x-form-item>
						<x-form-item required>
							<x-form-label>多选</x-form-label>
							<x-form-control>
								<x-checkbox-group v-model="form.checklist" min="2" :result.sync="verifyResult[2]" error-text="至少选2个" >
									<x-checkbox val="sz">
										<template v-slot:text>深圳</template>
									</x-checkbox>
									<x-checkbox val="gz">
										<template v-slot:text>广州</template>
									</x-checkbox>
									<x-checkbox val="bj">
										<template v-slot:text>北京</template>
									</x-checkbox>
									<x-checkbox val="sh">
										<template v-slot:text>上海</template>
									</x-checkbox>
									<x-checkbox val="hz">
										<template v-slot:text>杭州</template>
									</x-checkbox>
								</x-checkbox-group>
							</x-form-control>
						</x-form-item>
						<x-form-item required>
							<x-form-label>下拉选择</x-form-label>
							<x-form-control>
								<x-select v-model="form.selectValue" placeholder="下拉菜单" error-text="至少选一个" required :result.sync="verifyResult[3]">
									<x-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"  />
								</x-select>
							</x-form-control>
						</x-form-item>
						<x-form-item>
							<x-form-label>开关</x-form-label>
							<x-form-control>
								<x-switch v-model="form.switchVal" :open-value="true" :close-value="false" />
							</x-form-control>
						</x-form-item>
						<x-form-item>
							<x-form-label>性别</x-form-label>
							<x-form-control>
								<x-radio val="1" v-model="form.radioVal">
									<template v-slot:text >男</template>
								</x-radio>
								<x-radio val="2" v-model="form.radioVal">
									<template v-slot:text >女</template>
								</x-radio>
							</x-form-control>
						</x-form-item>
						<x-form-item required>
							<x-form-label>地址</x-form-label>
							<x-form-control>
								<x-location-select :location-data="locationData" v-model="form.locationVal" error-text="选择完整地址" required :result.sync="verifyResult[4]" />
							</x-form-control>
						</x-form-item>
						<x-form-item required>
							<x-form-label>短评</x-form-label>
							<x-form-control>
								<x-textarea v-model="form.areaText" error-text="填写短评" required :result.sync="verifyResult[5]" />
							</x-form-control>
						</x-form-item>
						<x-form-item>
							<x-form-control>
								<x-button :btnStyle="{width:'80px',height:'30px',borderRadius:'6px',background:'#2196f3',color:'#fff'}" @click="SubForm">确定</x-button>
							</x-form-control>
						</x-form-item>
					</x-form>
				</div>
			</div>
			<!-- <source-page :tmpl=""></source-page> -->
	    </div>

	    <div class="api-pages">
			<h3>Attributes</h3>
			<table width="100%">
				<thead>
					<tr>
						<td>参数名</td>
						<td>说明</td>
						<td>类型</td>
						<td>默认值</td>
						<td>可选值</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>src</td>
						<td>图片地址</td>
						<td>String</td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>

		<div class="api-pages">
			<h3>Events</h3>
			<table width="100%">
				<thead>
					<tr>
						<td>事件名</td>
						<td>说明</td>
						<td>回调参数</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>src</td>
						<td>图片地址</td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
// 验证，必填、必选
import locationData from '../../data/areadata.js'
export default{
	data(){
		return {
			form:{
				testNum:'',
				testNum2:'',
				checklist:[],
				switchVal:false,
				locationVal:'',
				selectValue:'',
				radioVal:'1',
				areaText:''
			},
			locationData,
			options:[
				{
					label:'测试',
					value:1
				},
				{
					label:'测试2',
					value:2
				}
			],
			verify:{
				checkboxData:{ min:1,max:3 },
				verifyData:[{type:'required',text:'必填'},{type:'test',reg:/[\d]+/,text:'含数字'},{type:'length',max:20,min:8,text:'8-20个字符'}],
				verifyData2:[{type:'required',text:'必填'},{type:'test',reg:/[\d]+/,text:'含数字'},{type:'length',max:20,min:8,text:'8-20个字符'}]
			},
			verifyResult:[false,false,false,false,false,false]
		}
	},
	methods:{
		SubForm(){
			let finallyResult = this.verifyResult.every(el=>el)
			this.$refs.form.veifyAll()
		}
	}
}
</script>

<style lang="scss">
.x-form{
	width:580px;
	.line-height-set{
		line-height: 1.3;
	}
	.line-height-set2{
		line-height: 1.5;
	}
}
</style>