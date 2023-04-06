<script>
	import {Router,Route, Link} from 'svelte-routing'
  	import Header from './layout/Header.svelte';
	import About from './features/about/views/About.svelte';
	import Home from './features/home/views/Home.svelte';
	import {loading as loader} from './interceptors/loader.interceptor'
	
	let loading=false;
	loader.subscribe(value=>{
		loading = value
	})

</script>

{#if loading}
<div class="loader">
  <div class="spinner"></div>
</div>
{/if}
<Router>
	<Header/>
	<div class="container my-container">
		<Route path="/" component={Home} />
		<Route path="/about"component={About} />
	</div>
</Router>

<style>
	.my-container{
		margin-top:20px;
	}

	.loader {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: auto;
	}
  
	.spinner {
	  position:fixed;
	  border: 3px solid rgba(255, 255, 255, 0.3);
	  border-top-color: white;
	  border-radius: 50%;
	  width: 20px;
	  height: 20px;
	  animation: spin 0.8s linear infinite;
	}
  
	@keyframes spin {
	  to {
		transform: rotate(360deg);
	  }
	}
</style>

  
 
  