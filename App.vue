<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "@/uni_modules/uview-ui/index.scss";
</style>
<script>
	export default {
		onLaunch: function() {
			this.$u.http.get('/auth/info', {}, {}).then(res=>{
				 // private String username;
				 //    private String phone;
				 //    private String email;
				 //    private Short gender;
				 //    private String avatar;
				 // 'vuex_username','vuex_avatar','vuex_gender','vuex_phone', 'vuex_token'
				console.log(res)
				this.$u.vuex('vuex_username',res.data.username)
				this.$u.vuex('vuex_avatar',res.data.avatar)
				this.$u.vuex('vuex_gender',res.data.gender)
				this.$u.vuex('vuex_phone',res.data.phone)
			}).catch(error=>{
				uni.redirectTo({
					url:'/pages/login/login'
				})
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
