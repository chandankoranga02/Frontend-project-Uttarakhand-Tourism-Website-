

document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("district");
  const nextBtn = document.querySelector(".btn.next");
  const backBtn = document.querySelector(".btn.back");

  if (!select) {
    console.error("No <select id='district'> element found.");
    return;
  }


  if (nextBtn) nextBtn.disabled = true;


  if (typeof getUttarakhandDistricts !== "function") {
    console.error("getUttarakhandDistricts is not defined. Make sure districts.js is loaded before this file.");
    return;
  }



  getUttarakhandDistricts()
    .then(districts => {

      if (select.options.length > 1) return;

      const frag = document.createDocumentFragment();
      districts.forEach(d => {
        const opt = new Option(d, d); // new Option(text, value)
        frag.appendChild(opt);
      });
      select.appendChild(frag);
      console.log("Districts populated:", districts.length);
    })
    .catch(err => {
      console.error("Error fetching districts:", err);
    });

  // 2) Enable Next when a valid option is chosen
  select.addEventListener("change", (e) => {
    const val = e.target.value;
    if (nextBtn) nextBtn.disabled = !val;
  });

  // 3) Mapping: district name -> target page (edit filenames as per your project)
  const districtToPage = {
    "Dehradun": "file:///E:/Coding/Hotels%20and%20tourist%20destination%20project%20frontend/destination/select/Dehradun/card.html",
    "Haridwar": "file:///E:/Coding/Hotels%20and%20tourist%20destination%20project%20frontend/destination/select/Haridwar/card.html",
    "Pauri Garhwal": "file:///E:/Coding/Hotels%20and%20tourist%20destination%20project%20frontend/destination/select/Pauri/card.html",
    "Tehri Garhwal": "file:///E:/Coding/Hotels%20and%20tourist%20destination%20project%20frontend/destination/select/Tehri/card.html",
    "Chamoli": "file:///E:/Coding/Hotels%20and%20tourist%20destination%20project%20frontend/destination/select/Chamoli/card.html",
    "Rudraprayag": "file:///E:/Coding/Hotels%20and%20tourist%20destination%20project%20frontend/destination/select/Rudraprayag/card.html",
    "Uttarkashi": "file:///E:/Coding/Hotels%20and%20tourist%20destination%20project%20frontend/destination/select/Uttarkashi/card.html",
    "Almora": "file:///E:/Coding/Hotels%20and%20tourist%20destination%20project%20frontend/destination/select/Almora/card.html",
    "Bageshwar": "file:///E:/Coding/Hotels%20and%20tourist%20destination%20project%20frontend/destination/select/Bageshwar/card.html",
    "Pithoragarh": "file:///E:/Coding/Hotels%20and%20tourist%20destination%20project%20frontend/destination/select/Pithoragarh/card.html",
    "Champawat": "file:///E:/Coding/Hotels%20and%20tourist%20destination%20project%20frontend/destination/select/Champawat/card.html",
    "Nainital": "file:///E:/Coding/Hotels%20and%20tourist%20destination%20project%20frontend/destination/select/Nainital/card.html",
    "Udham Singh Nagar": "file:///E:/Coding/Hotels%20and%20tourist%20destination%20project%20frontend/destination/select/Uddham%20singh%20nagar/card.html"
    // add/change names & file paths as needed
  };

  // 4) Next button behavior
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      const chosen = select.value;
      if (!chosen) {
        alert("Please select a district first.");
        return;
      }

      // If you have a page for this district, navigate to it
      if (districtToPage[chosen]) {
        window.location.href = districtToPage[chosen]; // same tab
        return;
      }

      // Fallback: open a generic page with query parameter
      const fallback = "district-info.html?name=" + encodeURIComponent(chosen);
      window.location.href = fallback;
    });
  }

  // 5) Back button behavior (simple)
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      // If you want to go to a specific page instead of history.back(), change this.
      if (history.length > 1) history.back();
      else window.location.href = "/"; // or any safe default
    });
  }
});
