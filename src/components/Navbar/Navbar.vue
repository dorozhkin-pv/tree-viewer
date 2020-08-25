<template>
	<div>
		<nav class="menu blue darken-3">
			<div class="container">
				<div class="menu__wrapper">
					<div class="menu__logo-and-burger">
						<span class="logo"><router-link :to="{ name: 'Home' }">Tree viewer</router-link></span>
						<span @click="openMenu" data-target="mobile-demo" class="sidenav-trigger">
							<font-awesome-icon icon="bars" />
						</span>
					</div>

					<div class="menu__controls">
						<span class="hello">Hello, Guest!</span>
						<button class="waves-effect waves-light btn-small" disabled="true">Profile</button>
						<button class="waves-effect waves-light btn-small" disabled="true">LogIn</button>
					</div>
				</div>
			</div>
		</nav>

		<ul class="sidenav" ref="sidenav" id="mobile-demo">
			<span class="hello">Hello, Guest!</span>
			<li><router-link :to="{ name: 'GenerateTree' }">Generate a tree</router-link></li>
			<li><router-link :to="{ name: 'DisplayExistingTree' }">Display existing tree</router-link></li>
		</ul>
	</div>
</template>

<script>

	export default {
		methods: {
			openMenu() {
				let options = {
					edge: 'left',
					draggable: true
				}
				let elem = this.$refs.sidenav
				let instances = M.Sidenav.init(elem, options)
			}
		}
	}
</script>

<style lang="scss" scoped>
.menu {
	&__wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	&__controls .btn-small {
		margin-left: 1rem;
	}
}

.sidenav-trigger {
	cursor: pointer;
}

.sidenav {
	padding-top: 2rem;
	.hello{
		display: none;
	}
	li {
		a {
			font-weight: bold;

			&.router-link-exact-active {
				color: #fafafa;
				background-color: #3b8be4;
			}
		}
	}
}

@media (max-width: 441px) {
	.logo {
		display: none;
	}	
}

@media (max-width: 365px) {
	.hello {
		display: none;
	}
	.sidenav {
		padding-top: 0;
		.hello{
			display: block;
			padding: 18px 32px;
			margin-bottom: 32px;
			background-color: #26a69a;
			color: #fff;
		}
	} 
}

</style>