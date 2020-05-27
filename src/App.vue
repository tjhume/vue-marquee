<template>
	<div id="app" class="flex-column" ref="app">

		<!-- Passes the pages to the header -->
		<transition name="slide-in-top">
			<buk-layout v-show="animated" :pages="pageData.pages"></buk-layout>
		</transition>

		<transition name="slide">
			<!-- Adding a key forces the transition -->
			<router-view :animated="animated" :key="$route.path"></router-view>
		</transition>

	</div>
</template>

<script>
import pageData from './data/data.json'
import BukLayout from './components/Layout.vue'

export default {
	name: 'app',
	data() {
		return {
			pageData: pageData,
			animated: false
		}
	},
	components: {
		'buk-layout': BukLayout
	},
	created: function() { 
		// Automatically navigate to the first page given in the data if current route is the root
		if(this.$route.path === '/') {
			this.$router.push(pageData.pages[0].slug);
		}
	},
	mounted: function() {
		// Triggers inital build animation
		this.animated = true

		// Once mounted, this will preload the other background images
		for(var i = 0; i < this.pageData.pages.length; i++) {
			const image = new Image();
			image.src = 'assets/img/' + this.pageData.pages[i].blocks[0].background;
		}
	}

}
</script>

<style lang="stylus">

	*
		box-sizing border-box

	body,html
		margin 0
		padding 0

	body
		font-family 'Helvetica Neue'
		background-color #020202 /* Ensures any white space will look more natural with the dark theme */

	a,
	a:link,
	a:visited,
	a:hover,
	a:active
		text-decoration none
		transition all 0.3s

	.flex-row
		display flex
		flex-flow row

	.flex-column
		display flex
		flex-flow column
	
	.flex-fill
		flex auto

	.flex-none
		flex none

	.flex-center
		align-items center
		justify-content center

	#app
		overflow hidden
		position relative


	/* Animation */
	
	.slide-leave-active, .slide-enter-active
		transition all 1s

	.slide-leave-active
		position absolute
		width 100%

	.slide-enter
		transform translate(100%, 0)

	.slide-leave-to
		transform translate(-100%, 0)

	
	.slide-in-bottom-enter-active
		transition all 2s

	.slide-in-bottom-enter
		transform translateY(20px)
		opacity 0

	.slide-in-top-enter-active
		transition all 2s

	.slide-in-top-enter
		transform translateY(-20px)
		opacity 0

	.fade-in-enter-active
		transition all 2s

	.fade-in-enter
		opacity 0

	/* Responsive */

	@import 'fluid.styl'

	h1
		fluid(font-size, 84, 32, max-break: 1440, min-break: 480)

	h3
		fluid(font-size, 24, 18, max-break: 1440, min-break: 480)

	#content, #cta, #layout .wrap
		fluid(padding-left, 130, 10, max-break: 1440, min-break: 480)
		fluid(padding-right, 130, 10, max-break: 1440, min-break: 480)

	#content .subhead .text
		fluid(line-height, 26, 15, max-break: 1440, min-break: 480)

	#cta .cta-inner
		fluid(height, 179, 140, max-break: 1440, min-break: 480)
		fluid(padding-left, 20, 0, max-break: 1440, min-break: 480)
		fluid(padding-right, 20, 0, max-break: 1440, min-break: 480)

</style>
