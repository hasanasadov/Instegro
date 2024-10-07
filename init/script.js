document.getElementById("checkUnfollowers").addEventListener("click", function () {
    // Get the input values
    const followers = document.getElementById("followers").value.split("\n").map(f => f.trim().toLowerCase());
    const following = document.getElementById("following").value.split("\n").map(f => f.trim().toLowerCase());
  
    // Filter out the people you follow who don't follow you back
    const unfollowers = following.filter(person => !followers.includes(person));
  
    // Display the results
    const unfollowersList = document.getElementById("unfollowersList");
    unfollowersList.innerHTML = ""; // Clear previous results
  
    if (unfollowers.length > 0) {
      unfollowers.forEach(person => {
        const li = document.createElement("li");
        li.textContent = person;
        unfollowersList.appendChild(li);
      });
      document.getElementById("results").style.display = "block";
    } else {
      unfollowersList.innerHTML = "<li>Everyone follows you back!</li>";
      document.getElementById("results").style.display = "block";
    }
  });
  