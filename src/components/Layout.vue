<template>
	<div id="layout">
		<div class="wrap">
			<div class="left">
				<div class="logo">
					<img src="assets/img/abc_logo.svg" alt="The abc company">
				</div>
				<div class="menu">
					<ul>
						<!-- Loads links based on page array, which is passed as prop from App.vue -->
						<li v-for="page in pages" :key="page.title">
							<router-link :to="'/' + page.slug">{{ page.title }}</router-link>
						</li>
					</ul>
				</div>
			</div>

			<div class="right">
				<a class="contact-button" href="https://www.bukwild.com/contact">Contact Us</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['pages']
}
</script>

<style lang="stylus" scoped>
	#layout
		font-weight bold
		height 138px
		position absolute
		top 0px
		left 0px
		width 100%
		z-index 9999
		
		.wrap
			width 100%
			max-width: 1440px
			margin: 0 auto

	a
		color white

		&:hover
			color #ffc004

	ul
		list-style-type none
		margin 0
		padding 0
		font-size 14px

	li a
		line-height 26px
		
		&.router-link-active
			color #ffc004

	.left
		float left
	
	.right
		float right

	.contact-button
		padding 10px 30px
		border 1px solid white
		display inline-block
		margin-top 25px
		font-size 15px

		&:hover
			border 1px solid #ffc004
	
	.logo
		margin-top 19px

		img
			width 76px
			height 38px
			object-fit contain

</style>