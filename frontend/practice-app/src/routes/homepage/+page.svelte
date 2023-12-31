<script>
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
    let handlesignout = async()=>{
        localStorage.removeItem("username");
        window.location.href = 'http://localhost:5173/'

    }

</script>
<main>
 {#if notfound == 0}
<h1>welcome {username}</h1>
<button on:click={handlesignout} class="btn btn-outline btn-white">sign out</button>
{:else}
<h1>uh oh, page not found!</h1>
{/if}

</main>
<style>

</style>