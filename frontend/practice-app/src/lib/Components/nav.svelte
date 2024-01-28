<script>
     let handlesignout = async()=>{
        localStorage.removeItem("username");
        window.location.href = 'http://localhost:5173/'

    }
    </script>
<main>
<div class="navbar bg-base-100">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>About us</a></li>
          <li>
            <a>Profile</a>
            <ul class="p-2">
              <li><a>My profile</a></li>
              <li><a on:click={handlesignout}>Sign out</a></li>
            </ul>
          </li>
          <li><a>Dashboard</a></li>
        </ul>
      </div>
      <a class="btn btn-ghost text-xl">The Charter</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><a>ProBono</a></li>
        <li>
          <details>
            <summary>Profile</summary>
            <ul class="p-2">
              <li><a href = '/homepage/lawyerprofile' >My profile</a></li>
              <li><a on:click={handlesignout}>Sign out</a></li>
            </ul>
          </details>
        </li>
        <li><a>Schedule</a></li>
      </ul>
    </div>
    <div class="navbar-end">
        <label class="flex cursor-pointer gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
            <input type="checkbox" value="dark" class="toggle theme-controller"/>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          </label>
    </div>
  </div>
</main>