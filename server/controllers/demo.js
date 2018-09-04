module.exports = async (ctx, next) => {
	ctx.state = {
		code: 200,
		data: {
			msg: '欢迎使用小程序后台'
		}
	}
}