//your JS code here. If required.
    
 document.getElementById("userForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form from refreshing

      let name = document.getElementById("name").value.trim();
      let age = document.getElementById("age").value.trim();

      // Validate input
      if (name === "" || age === "") {
        alert("Please enter valid details.");
        
      }
	 let checkPromise=new Promise((resolve,reject)=>{
		 if(age>18){
			 setTimeout(resolve(alert("Welcome, . You can vote.")),4000)
		 }
		 else if(age<18){
			 setTimeout(reject(alert("Oh sorry . You aren't old enough.")),4000)
		 }
		 }
	 })
	 
 