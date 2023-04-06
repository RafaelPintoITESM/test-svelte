<script>
    
	import {Link} from 'svelte-routing'
  import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

  const progress = tweened(0, {
		duration: 400,
		easing: cubicOut
	});

  let inputValue = 0;
</script>

<p>About works!</p>
<p>me lavo la carita con agua y con jabon</p>
<Link href="/">Go home</Link>

<div>
  <progress value={$progress}></progress>
</div>
<input type="number" bind:value={inputValue} on:change={()=> progress.set(inputValue/100)}/>



<style>
	progress {
		display: block;
		width: 100%;
	}
</style>