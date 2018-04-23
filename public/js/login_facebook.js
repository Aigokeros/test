window.fbAsyncInit = function() {
    FB.init({
      appId      : '277560409449230',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.8'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  function statusChangeCallback(response) {
      console.log('statusChangeCallback');
      console.log(response);
      // The response object is returned with a status field that lets the
      // app know the current login status of the person.
      // Full docs on the response object can be found in the documentation
      // for FB.getLoginStatus().
      if (response.status === 'connected') {
      // Logged into your app and Facebook.
      testAPI();
      } else {
      // The person is not logged into your app or we are unable to tell.
      document.getElementById('status').innerHTML = 'Please log ' +
          'into this app.';
      }
  }

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

   
   function checkLoginState() {
       FB.getLoginStatus(function(response) {
        if (response.status === "connected") {
          alert('เข้าสู่ระบบด้วย Facebook สำเร็จ');
          setInfo();
       } else {
            alert('เข้าสู่ระบบด้วย Facebook ไม่สำเร็จ');
       }
   });
   }
  
    FB.getLoginStatus(function(response) {
        if (response.status === "connected") {
          document.getElementById('status').innerHTML = 'we are connected!';
          alert('เข้าสู่ระบบด้วย Facebook สำเร็จ');
       } else if(response.status === 'not_authorized'){
           document.getElementById('status').innerHTML = 'we are not logged in!';
            alert('เข้าสู่ระบบด้วย Facebook ไม่สำเร็จ');
       }else{
          document.getElementById('status').innerHTML = 'you are not logged into facebook!';
       }
      });
       

  function setInfo() {
      console.log('Welcome!  Fetching your information.... ');
      FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('name').innerHTML =
          'Thanks for logging in, ' + response.name + '!';
      });
  }

 function logout(){
     FB.logout(function(response){
         alert("user is logout now!");
     });
 }

 function login(){
    FB.login(function(response) {
        checkLoginState();
      }, {scope: 'public_profile,email'});
}