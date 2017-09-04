<template>
	<div class="m-header">
		<div class="icon"></div>
		<h1 class="text">Chicken Music</h1>
	</div>
</template>
<script type="text/javascript">
	export default {}
</script>
<style lang="less" scoped>
	@import "~@/common/style/variable.less";
	@import "~@/common/style/mixin.less";

	.m-header{
		position: relative;
		height:44px;
		text-align:center;
		color:@color-theme;
		font-size:0;
		.icon{
			display:inline-block;
			vertical-align: top;
			margin-top:6px;
			width:30px;
			height:32px;
			margin-right:9px;
			.bg-image('~@/components/m-header/image/logo');
			background-size:30px 32px;
		}
		.text{
			display:inline-block;
			vertical-align: top;
			line-height: 44px;
			font-size: @font-size-large;
		}
	}
</style>