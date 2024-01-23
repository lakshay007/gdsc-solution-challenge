<script>
 import Lawyer from '$lib/assets/Lawyer.png';
 import Bulb from '$lib/assets/Bulb.png';
 import Handshake from '$lib/assets/handshake.png';
 import userpic from '$lib/assets/user.png';
 import Algo from '$lib/assets/Algo.png';
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
  
    <div class="background">
        <header>
            <span class="logo">The Charter</span>
            <nav class="nav-all">
                <nav class="nav-1">
                    <a href="#" class="nav-link">ProBono Services </a>
                    <a href="#" class="nav-link">Schedule Appointment </a>
                    <a href="#" class="nav-link">Community </a>
                </nav>
                <nav class="nav-2">
                        <a href="#" class="nav-link">Sign In</a>
                        <div class="dropdown">
                            
                            <button id="button-1" class="button" tabindex="0"><a href="#">Sign Up</a></button>
                            <div class="dropdown-content">
                                <a href="/lawyerlogin" >As Lawyer</a>
                                <a>As User</a>
                            </div>

                        </div>

                    </nav>
                </nav>
        </header>
        <article>
            <div class="article-1">
                <h1>Presenting The Charter,</h1>
                <h2>A pro bono legal service committed to bridging the gap between <br>budding lawyers and individuals facing legal challenges.</h2>
                <p>The Charter envisions a society where legal assistance is not determined by financial means <br>but is a fundamental right accessible to all</p>
                <div class="button-section">
                    <a href="#"><button id="button-2" class="button">Browse Hub</button></a>
                </div>
                <div class="template">
                    <span class="credit-template">Minimial Fee</span>
                    <span class="credit-template">Hassle free Appointment Scheduling </span>
                </div>

            </div>
            <div class="article-2">
                <img src={Lawyer} alt="lawyer">
            </div>
        </article>
    </div>
    <div class="title">
        <h3>Why The Charter?</h3>
        <h2>A good cause needs a better<br> lawyer.</h2>
    </div>
    <section class="good-portfolio">
        <div class="section-cards-1">
            <section class="section-card-1">
                <img src={Algo} alt="time">
                <h3>Algorthmic Matching</h3>
                <p>Connect with legal professionals<br> and seek legal assistance<br>within geographical proximity.</p>
            </section>
            <section class="section-card-1">
                <img src={Handshake} alt="code">
                <h3>Virtual Collaboration</h3>
                <p>Legal professionals collaborate with clients<br> through secure online platform<br> offering guidance and support.</p>
            </section>
            <section class="section-card-1">
                <img src={Bulb} alt="devices">
                <h3>Resolution</h3>
                <p>Parties explore viable strategies, <br> fostering ideation and creative solutions<br>to concerned matters.</p>
            </section>
        </div>
        <section class="section-cards-2">
            <section class="section-card-2">
                    <div class="set sa-set">
                        <h3>Ayden Verma</h3>
                        <h4>Legal Personnel</h4>
                    </div>
                    <p>The Charter has changed the way<br> of legal world. It has made<br>life so easy.</p>
                    <button id="sa-button">View Ayden's Portfolio</button>
                
                    
            </section>
            <section class="section-card-2">
                    <div class="set mh-set">
                        <h3>Myra Gupta</h3>
                        <h4>Lawyer @ ABC</h4>
                    </div>
                    <p>The Charter has changed the way<br> of legal world. It has made<br>life so easy.</p>
                    <button class="sectionbutton">View Myra's Portfolio</button>
              
            </section>
            <section class="section-card-2">
                    <div class="set jd-set">
                        <h3>Reyansh Jain</h3>
                        <h4>Chairperson @ XYZ</h4>
                    </div>
                    <p>The Charter has changed the way<br> of legal world. It has made<br>life so easy.</p>
                    <button class="sectionbutton">View Reyansh's Portfolio</button>
                
            </section>
        </section>
        <footer>
            <div class="footer-text">
                <span class="logo">The Charter</span>
                <p>With us,<br>be the catalyst of your change<br>and embody justice in its essence.</p>
            </div>
            <nav class="footer-nav">
                <h2>Sitemap</h2>
                <a href="#">Homepage</a>
                <a href="#">Testimonials</a>
                <a href="#">Features</a>
            </nav>
            <nav class="footer-nav">
                <h2>Resources</h2>
                <a href="#">Support</a>
                <a href="#">Contact</a>
                <a href="#">FAQ</a>
            </nav>
            <nav class="footer-nav">
                <h2>Portfolios</h2>
                <a href="#">Ayden Verma</a>
                <a href="#">Myra Gupta</a>
                <a href="#">Reyansh Jain </a>
            </nav>
        </footer>
</main>
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

h1,
h2,
h3,
h4 {
    font-weight: 400;
}

body {
    font-family: 'Inter', sans-serif;
    margin: 0 140px;
}

.background {
    background: #fbf8f3;
    margin: 0 0px;
}


header {
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin: 0 100px;
    align-items: center;
    height: 100px;
}

header a:not(.button a) {
    color: #b0aeab;
    text-decoration: none;
}

.logo {
    font-size: 20px;
    font-weight: 600;
}

.nav-all {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.nav-1 {
    display: flex;
    gap: 30px;
    align-items: center;
}

.nav-2 {
    display: flex;
    gap: 30px;
    align-items: center;
}

.button {
    padding: 10px 20px;
    background: #4d13d1;
    border-radius: 5px;
    border: none;
}

.button a {
    color: #fff;
    text-decoration: none;
    font-size: 14px;
}

.hamburguer {
    display: none;
}

article {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 100px 150px 100px;
}

.article-1 {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

#review {
    position: relative;
    margin-left: 100px;
    font-size: 15px;
    font-weight: 500;
}

#review::before {
    position: absolute;
    content: '';
    background: url(Assets/star.svg);
    width: 90px;
    height: 19px;
    left: -100px;
    bottom: 1px;
}

.article-1 h1 {
    font-size: 45px;
    font-weight: 650;
}

.article-1 p {
    font-size: 15px;
    color: #b0aeab;
}

.button-section {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 38px;
}

#button-2 {
    padding: 15px 22px;
    border-radius: 5px;
    border: none;
    color: #fff;
    cursor: pointer;
}

.button-section a {
    color: #4d13d1;
    font-weight: 600;
}

.template {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 43px;
    
    color: #b0aeab;
}

.credit-template {
    position: relative;
    font-size: 15px;
}

.credit-template::before {
    position: absolute;
    content: '';
    background: url(Assets/Checkmark.svg);
    width: 24px;
    height: 24px;
    left: -33px;
    top: -3px;
}

.article-2 img {
    width: 50%;
    height:60%;
    float:right;
    float:inline-end;
}



.title {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 0 80px;
    padding: 80px 0 30px 0;
}

.title h3 {
    font-size: 15px;
    font-weight: 800;
    color: #4d13d1
}

.title h2 {
    font-size: 30px;
    font-weight: 750;
}

.good-portfolio {
    display: flex;
    flex-direction: column;
    margin: 0 80px 80px 80px;
}

.section-cards-1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.section-card-1 {
    display: flex;
    flex-direction: column;
    gap: 15px
}

.section-card-1 img {
    width: 200px;
    height: 200px;
}

.section-card-1 h3 {
    font-size: 15px;
    font-weight: 600;
}

.section-card-1 p {
    font-size: 16px;
    color: #b0aeab;
    line-height: 24px;
}

.diversify {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #4d13d1;
    padding: 50px 50px 0 50px;
    margin: 0 -50px;
    border-radius: 10px;
}

.diversify-1 {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.diversify-1 h2 {
    color: #fff;
    font-size: 40px;
    font-weight: 800;
}

.diversify-1 p {
    font-size: 23px;
    color: #fff;
}

#button-3 {
    padding: 15px 60px;
    border-radius: 5px;
    border: none;
    color: #4d13d1;
    font-weight: 900;
    cursor: pointer;
}

.diversify-2 img {
    width: 650px;
    margin-bottom: -4px;
}

.section-cards-2 {
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    margin: 70px -45px;

}

.section-card-2 {
    display: flex;
    flex-direction: column;
    border: 1px solid #b0aeab;
    padding: 30px;
    gap: 20px;
    border-radius: 5px;
}

.sa-set {
    position: relative;
    line-height: 20px;
    
}

.sa-set::before {
    position: absolute;
    width: 54px;
    height: 54px;
    left: -70px;
    bottom: -5px;
}

.mh-set {
    position: relative;
    line-height: 20px;
    
}

.mh-set::before {
    position: absolute;
    content: '';
    width: 54px;
    height: 54px;
    left: -70px;
    bottom: -5px;
}

.jd-set {
    position: relative;
    line-height: 20px;
    
}

.jd-set::before {
    position: absolute;
    content: '';

    width: 54px;
    height: 54px;
    left: -70px;
    bottom: -5px;
}

.set h3 {
    font-weight: 700;
    color: #4d13d1;
    font-size: 15px;
}

.section-card-2 p {
    font-weight: 500;
    line-height: 22px;
    font-size: 17px;
}

.sectionbutton {
    padding: 15px 16px;
    border: 1px solid #b0aeab;
    background: #fff;
    border-radius: 5px;
    color: #4d13d1;
    font-weight: 800;
}

#sa-button {
    padding: 15px 8px;
    border: 1px solid #b0aeab;
    background: #fff;
    border-radius: 5px;
    color: #4d13d1;
    font-weight: 800;
}

footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #fbf8f3;
    margin: 0 -140px;
    padding: 30px 100px;
}

.footer-text {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.footer-text p,
h4 {
    font-size: 16px;
    color: #b0aeab;
}

.footer-nav {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.footer-nav h2 {
    font-size: 20px;
    font-weight: 600;
}

.footer-nav a {
    text-decoration: none;
    color: #b0aeab
}

@media screen and (max-width:37rem) {
    body {
        margin: 0 80px;
    }

    .hamburguer {
        display: block;
        position: absolute;
        bottom: 635px;
        left: 325px;
    }

    header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .nav-all {
        display: flex;
        position: relative;
        background: #fff;
        border-radius: 5px;
        gap: 18px;
        width: 200px;
        padding: 40px;
        flex-direction: column;
        border: 1px solid #b0aeab;
        top: 110px;
        left: 5px;
    }

    .nav-all.open {
        display: none;
    }

    .nav-1 {
        display: flex;
        flex-direction: column;
        gap: 18px;
    }

    .nav-2 {
        display: flex;
        flex-direction: column;
    }

    article {
        display: flex;
        flex-direction: column-reverse;
        gap: 40px;
    }

    .article-2 img {
        width: 100%;
        height: 100%;
    }

    #review {
        display: none;
    }

    .article-1 p {
        display: flex;
        width: 315px;
        font-size: 20px;
    }

    .button-section {
        display: flex;
        flex-direction: column;
    }

    #button-2 {
        width: 320px;
        margin: auto;
        font-size: 15px;
    }

    .template {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 40px;
        gap: 20px;
    }

    .credit-template {
        font-size: 17px;
    }

    .title {
        
        display: flex;
        flex-direction: column;
    }

    .title h2 {
        word-break: keep-all;
    }

    .section-cards-1 {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .diversify {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 30px;
        gap: 50px;
    }

    #button-3 {
        padding: 15px 75px;
    }

    .diversify-2 img {
        width: 250px;
        height: 330px;
        object-fit: cover;
        margin-bottom: -34px;
    }

    .section-cards-2 {
        display: flex;
        flex-direction:column;
        gap: 30px;
    }

    #sa-button {
        padding: 15px 38px;
    }

    footer {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .footer-nav {
        display: flex;
        flex-direction: column;
        gap: 10px
    }
}
</style>

