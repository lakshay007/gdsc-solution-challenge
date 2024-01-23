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
    <label class="flex cursor-pointer gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
        <input type="checkbox" value="dark" class="toggle theme-controller"/>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
      </label>
    <div class="h-screen flex flex-col items-center justify-center ">
        <p class="label-text">username:</p>
    <input bind:value={uusername} type="text" placeholder="Type here" class="input input-bordered input-black w-full max-w-xs"/>
    <p class="label-text">password: 
        
    </p>
    
    <input bind:value={passwordd} type="password" placeholder="Type here" class="input input-bordered input-black w-full max-w-xs"/>
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
