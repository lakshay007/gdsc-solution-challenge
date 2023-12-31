<script>
let API_URL = "http://localhost:3000/"
let useralready = 0;
let usersuccess = 0;
let passwordauth = 0;
let uusername,passwordd;
const handleSubmit = async(event)=>{
    const data = {
        username: uusername,
        password: passwordd
    }
   console.log(data);
   console.log(JSON.stringify(data));
    const check = await fetch(API_URL + "UserData/" + data.username)
    let ans = await check.json();
    console.log(ans);
    if(ans==null){
    //    document.cookie = "name=" +data.username+ "; SameSite=None; Secure";
    localStorage.setItem("username", data.username);
        const response = await fetch(API_URL+"UserData",{
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
});
useralready = 0;
usersuccess = 1;
setTimeout(5000);
window.location.href = '/homepage'
    }
    else{
        useralready = 1;
    }

// const responsee = await fetch(API_URL+"products");
//     let  dataaa = await responsee.json();
//     console.log(dataaa);
}
let handlelogin = async()=>{
    const data = {
        username: uusername,
        password: passwordd
    }
    const check = await fetch(API_URL + "UserData/" + data.username)
    let ans = await check.json();
    console.log(ans);
    if(ans == null){
        passwordauth = -2;
    }
   else if(ans.password===data.password){
        console.log("sign in successful")
        //document.cookie = "name=" +data.username+ "; SameSite=None; Secure";
        localStorage.setItem("username", data.username);
        passwordauth = 1;
        window.location.href = '/homepage'
    }
    else{
        passwordauth = -1;
    }

}

</script>
<main>

    <div class="h-screen flex flex-col items-center justify-center ">
        <p>username:</p>
    <input bind:value={uusername}/>
    <p>password:</p>
    <input bind:value={passwordd} type="password" />
    <button on:click={handlelogin} class="btn btn-outline btn-white" >Log in</button>
    <button on:click={handleSubmit} class="btn btn-outline btn-white" >SignUp</button>
    {#if useralready == 1}
    <h1>username is already in use</h1>
    {/if}
    {#if usersuccess == 1}
    <h1>user successfully created,redirecting to homepage</h1>
    {/if}
    {#if passwordauth == -1}
    <p>wrong password, please try again</p>
    {/if}
    {#if passwordauth == -2}
    <p>user is not registered, please sign up</p>
    {/if}
</div>
</main>
<style>

</style>

