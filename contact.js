  var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form");
         var status = document.getElementById("status");

      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "მადლობა, თქვენი მესიჯი მიღებულია!";
        form.reset()
      }).catch(error => {
        status.innerHTML = "დაფიქსირდა შეცდომა, ცადეთ თავიდან"
      });
    }
    form.addEventListener("submit", handleSubmit)
