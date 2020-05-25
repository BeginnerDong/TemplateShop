/* 
 * 路由对象
 * 中心思想：需要路由鉴权,由于uni-app没有vue中的全局钩子函数，所以封装了Router对象。
 * 说明：应用中的路由跳转尽量使用该Router的方法，并配合config中的路由表对象进行跳转。
 * 
 * 示例：this.$mRouter.push({route:this.$mRoutesConfig.main,query:{a:1}})
 * 
 */
class Router {
	constructor(arg) {
		
		this.callBack = () => {};
	}

	beforeEach(callBack) {
		if (callBack instanceof Function) this.callBack = callBack;
	}
	
	// 直接跳转下一页面
	navigateTo(to) {
		this.callBack("navigateTo", to);
	}

	// 关闭上一级页面跳转
	redirectTo(to) {
		console.log('redirectTo')
		this.callBack("redirectTo", to);
	}
	
	// 关闭之前所有页面跳转
	reLaunch(to) {
		this.callBack("reLaunch", to);
	}

	// 使用小程序内部底部bar后,在其他页面跳着这些页面需要使用switchTab方法跳转
	switchTab(to) {
		this.callBack("switchTab", to);
	}

	// 返回上一页面跳转
	back(delta) {
		uni.navigateBack({
			delta
		})
	}
}

export default new Router();