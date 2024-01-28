<script>
    import Nav from '../../../lib/Components/nav.svelte'
    let API_URL = "http://localhost:3000/"
    let field = '';
    let name = '';
    let surname = '';
    let phoneNumber = '';
    let email = '';
    let selectedOption ='';
    let experience='';
    let age = '';
    let date = '';
    let submitted = 0
    const options = [
        { value: 'Noida', label: 'Noida' },
        { value: 'Hyderabad', label: 'Hyderabad' },
        { value: 'Manipal', label: 'Manipal' }
      ];

      
    const handleSubmit = async() => {
        if(name!="" && phoneNumber!="" &&email!="" &&experience!="" &&selectedOption!="" && field!=""&& age!=""  ){

      console.log('Name:', name);
      console.log('Surname:',surname);
      console.log('Phone Number:', phoneNumber);
      console.log('Email:', email);
      console.log('Selected Option:', selectedOption);
      console.log('Fields:', field);
      console.log('Experience:', experience);
      console.log('Age:', age);
      console.log("dates:",date);
      let data = {
        "Name": name+surname,
        "Phone": phoneNumber,
        "Email":email,
        "Exp": experience,
        "Location":selectedOption,
        "Specialization": field,
        "Age": age
    }
    
    console.log(JSON.stringify(data));
    const response = await fetch(API_URL+"LawyerData",{
       method: 'POST',
       body: JSON.stringify(data),
       headers: { 'Content-Type': 'application/json' }
   });
   submitted = 1; }};
   
   
  </script>
  
  
  <main>
    <Nav>
    </Nav>
    <div class="flex flex-col min-h-screen min-w-full justify-center items-center">
      <h1 class="text-4xl font-semibold mt-2">Profile</h1>
      <form  on:submit|preventDefault={handleSubmit} class="flex flex-col min-h-40vh bg-base-200 border-base-100 rounded-xl gap-4 min-h-[90%] min-w-[50%] mt-6 mb-6">
        <div class="flex items-center gap-9 pl-11 pt-6">
          <div class="h-[10rem] w-[10rem] bg-gray-400 rounded-full flex justify-center items-center">
            <img src='../src/lib/assets/profile.png' alt="noo" class="h-[8rem] w-[8rem] cursor-pointer ml-[1rem]">
          </div>
          <input type="file" id="myFile" name="filename" class="absolute mt-[4rem] ml-[4rem] opacity-0 cursor-pointer">
          <div class="flex justify-between items-center w-2/3">
            <input type="text" id="name" bind:value={name} autocomplete="given-name"  placeholder="First Name" class="outline-none p-4 border-2 border-base-200 rounded-xl w-1/2 m-2"/>
            <input type="text" id="surname" bind:value={surname} autocomplete="family-name" placeholder="Last Name" class="outline-none p-4 border-2 border-base-200 rounded-xl w-1/2 m-2"/>
          </div>
        </div>
          <input type="tel" id="phoneNumber" bind:value={phoneNumber} autocomplete="tel" placeholder="PhoneNo." class="p-4 border-2 border-base-200 rounded-xl w-2/3 mt-2 mx-8"/>
          <input type="email" id="email" bind:value={email} autocomplete="email" placeholder="Email" class="p-4 outline-none border-2 border-base-200 rounded-xl w-2/3  mx-8"/>
          <input type="number" id="Experience" bind:value={experience} autocomplete="off" placeholder="Experience" class="p-4 outline-none border-2 border-base-200 rounded-xl w-2/3 mx-8"/>
          <input type="text" id="Field" bind:value={field} autocomplete="off" placeholder="Fields" class="p-4 outline-none border-2 border-base-200 rounded-xl w-2/3 mx-8"/>
          <input type="text" id="Dates" bind:value={date} autocomplete="off" placeholder="Enter the dates on which you are free to work this month" class="p-4 outline-none border-2 border-base-200 rounded-xl w-2/3 mx-8"/>
          <div class="flex justify-center gap-2">
            <select id="dropdown" bind:value={selectedOption} autocomplete="off" class="p-4 border-2 border-base-200 rounded-xl w-2/3  mx-8 text-gray-400">
              <option value="" disabled hidden class="text-gray-500">City</option>
              {#each options as { value, label }}
                <option value={value}>{label}</option>
              {/each}
            </select>
            <input type="number" id="Age" bind:value={age} autocomplete="off" placeholder="Age" class="outline-none p-4 border-2 border-base-200 rounded-xl w-2/3  mx-8"/>
          </div>
          <button  class="p-4 bg-base-300 border-2 rounded-xl text-xl text-gray-700 m-4" >Submit</button>
      </form>
      {#if submitted == 1}
      <button  class="p-4 bg-base-300 border-2 rounded-xl text-xl text-gray-700 m-4" >Next</button>
      {/if}
    
    </div>
  </main>