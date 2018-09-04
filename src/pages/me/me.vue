<template>
	<div>个人中心页面</div>
</template>
<script>
	export default {
		data () {
			userinfo: {}
		},
		mounted () {
			this.getUserInfo()
		},
		methods: {
			getUserInfo () {
				wx.request({
					url: 'http://localhost:5757/weapp/demo',
					method: 'get',
					success: res => {
						console.log(res)
					}
				})
			}
		}
	}
</script>
