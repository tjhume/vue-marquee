<template>
	<!-- Background Image is retrieved from data -->
	<div id="page-ui" :style="{backgroundImage: 'url(assets/img/' + data.blocks[0].background + ')'}">
		<div class="wrap flex-column">

			<!-- Centered main content -->
			<transition name="fade-in">
				<div v-show="animated" id="content" class="flex-fill flex-row flex-center">

					<!-- Headline retrieved from data -->
					<div v-show="animated" class="headline">
						<h1>{{ data.blocks[0].headline }}</h1>
					</div>

					<!-- Subhead retrieved from data -->
					<div class="subhead">
						<div class="text">
							<p>{{ data.blocks[0].subhead }}</p>
						</div>
					</div>
				</div>
			</transition>

			<!-- Call to action -->
			<transition name="slide-in-bottom">
				<div v-show="animated" id="cta" class="flex-none">
					<div class="cta-inner flex-row flex-center">
					
						<!-- CTA text retrieved from data -->
						<div class="half cta-main">
							<h3>{{ data.blocks[0].cta }}</h3>
						</div>
						
						<!-- Let's talk text stays constant -->
						<div class="half lets-talk">
							<a href="https://www.bukwild.com/contact"><h5>LET'S TALK.</h5><span class="rarr">&rarr;</span></a>
						</div>

					</div>
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
export default {
	props: ['data', 'animated']
}
</script>

<style lang="stylus" scoped>

	#page-ui
		background-size cover
		background-position center center

		.wrap
			padding-top 138px
			min-height 100vh

	#content, #cta
		width 100%
		max-width: 1440px
		margin: 0 auto

	#content
		color white

	#cta .cta-inner
		text-align center
		background-color white

		h3
			padding 0px 10px

		a
			color black

			&:hover
				opacity 0.6

		h5
			font-size 14px
			letter-spacing 1px
			display inline
			vertical-align middle
			padding-right 8px
			font-weight normal

		.rarr
			color #ffc004
			font-size 30px
			dispay inline
			vertical-align middle

	.half
		width 50%

	.headline
		padding-right 6px
		letter-spacing -2.2px
		width 62%

	.subhead
		padding-left 6px
		width 38%

		.text
			width 360px
			max-width 90%
			margin 0 auto
			font-size 14px
			line-height 26px
</style>