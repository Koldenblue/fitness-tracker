init();

// if after id?= in the url in the search bar is undefined, 
// then the last workout will be retrieved from the database.
async function init() {
  if (location.search.split("=")[1] === undefined) {
    const workout = await API.getLastWorkout();
    // if the last workout is retrieved, add the workout id to the search bar
    if (workout) {
      location.search = "?id=" + workout._id;
    } else {
      // otherwise add the display none class to the continue button
      // d-none: Name variables properly instead of taking one-letter shortcuts.
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}

