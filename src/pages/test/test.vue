<template>
	<div id="sidebar">
		<header><a href="#">"<<<"</a></header>
		<el-menu></el-menu>
	</div>
</template>


<script>
	export default {
		name: 'menu'
	}
	Vue.component(
		'el-menu',
		{
			template: '<div> A custom component </div>'
		}
	)
</script>

<style>

</style>