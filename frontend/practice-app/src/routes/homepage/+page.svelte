<script>
  import Nav from '$lib/Components/nav.svelte'
    import { onMount } from 'svelte';
    let username;
    let notfound = 0;
    onMount(async () => {
// 	     obj = document.cookie
//   .split("; ")
//   .find((row) => row.startsWith("name="))
//   ?.split("=")[1];
 username = localStorage.getItem("username");
 if(username == null){
    notfound = 1;

 }
	});
    
</script>
<main>
 {#if notfound == 0}
 <Nav>
 </Nav>
<h1>welcome {username}</h1>
{:else}
<h1>uh oh, page not found!</h1>
{/if}

</main>
<style>

</style>
