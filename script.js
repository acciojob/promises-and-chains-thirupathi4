    document.getElementById("form").addEventListener("submit", function(event) {
      event.preventDefault(); // stops page refresh

      let name = document.getElementById("name").value.trim();
      let age = document.getElementById("age").value.trim();

      // Validation
      if (name === "" || age === "") {
        alert("Please enter valid details.");
        return;
      }

      // Promise with 4-second delay
      let checkAge = new Promise(function(resolve, reject) {
        setTimeout(() => {
          if (age > 18) {
            resolve(`Welcome, ${name}. You can vote.`);
          } else {
            reject(`Oh sorry ${name}. You aren't old enough.`);
          }
        }, 4000);
      });

      checkAge
        .then(function(message) {
          alert(message);
        })
        .catch(function(error) {
          alert(error);
        });
    });