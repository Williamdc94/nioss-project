document.querySelector("form").addEventListener("submit", async function (e) {
  e.preventDefault();
  var btn = document.getElementById("submit-btn");
  btn.disabled = true;
  btn.innerText = "Processing...";

  // Get the updated cart total
  const cartTotal = document.getElementById("totalledCart").value;

  // Get reCAPTCHA token (if using v2 checkbox)
  // const recaptchaResponse = document.querySelector('.g-recaptcha-response').value;

  // Build JSON payload - now includes optional extras
  const payload = {
    "g-recaptcha-response": "recaptchaResponse",
    location: document.querySelector("select[name='location']").value,
    type: document.querySelector("input[name='type']").value,
    organisation: document.querySelector("input[name='organisation']").value,
    cart_total: cartTotal, // Add cart total to payload

    // Arrays
    firstname: Array.from(
      document.querySelectorAll("input[name='firstname[]']"),
    ).map((i) => i.value),
    lastname: Array.from(
      document.querySelectorAll("input[name='lastname[]']"),
    ).map((i) => i.value),
    email: Array.from(document.querySelectorAll("input[name='email[]']")).map(
      (i) => i.value,
    ),
    title: Array.from(document.querySelectorAll("select[name='title[]']")).map(
      (i) => i.value,
    ),
    position: Array.from(
      document.querySelectorAll("input[name='position[]']"),
    ).map((i) => i.value),
    contactnumber: Array.from(
      document.querySelectorAll("input[name='contactnumber[]']"),
    ).map((i) => i.value),

    // Optional extras arrays
    ncdmb: Array.from(document.querySelectorAll("input[name='ncdmb[]']")).map(
      (i) => i.checked,
    ),
    nnpc: Array.from(document.querySelectorAll("input[name='nnpc[]']")).map(
      (i) => i.checked,
    ),
    dpr: Array.from(document.querySelectorAll("input[name='dpr[]']")).map(
      (i) => i.checked,
    ),

    // Optional social media fields
    twitter: Array.from(
      document.querySelectorAll("input[name='twitter[]']"),
    ).map((i) => i.value),
    facebook: Array.from(
      document.querySelectorAll("input[name='facebook[]']"),
    ).map((i) => i.value),
    linkedin: Array.from(
      document.querySelectorAll("input[name='linkedin[]']"),
    ).map((i) => i.value),

    bankk: document.querySelector("select[name='bankk']").value,
  };

  window.addEventListener("DOMContentLoaded", function () {
    genLoopPass();
    // Initialize cart total calculation
    updateCartTotal();
  });

  function genLoopPass() {
    const options = Array.from(
      { length: 100 },
      (_, i) => `<option value="${i + 1}">${i + 1}</option>`,
    ).join("");
    $("#experienceNo").html(options);
  }

  $("#experienceNo").on("change", function () {
    const noOfInp = $(this).val() - 1;
    let newInput = "";
    for (let y = 2; y <= noOfInp + 1; y++) {
      newInput += `
      <div class="row mt-4">
        <div class="col-sm-12"><b>Qty ${y}</b></div>
        <div class="col-sm-6 mt-2">
          <label class="h6"><span class="required_txt">*</span> Title</label>
          <select class="form-control" required name="title[]">
            <option value=""></option>
            <option>HE</option><option>Hon</option><option>Engr</option>
            <option>Mrs</option><option>Ms</option><option>Mr</option>
            <option>Dr</option><option>Professor</option><option>Dame</option>
            <option>Sir</option><option>Other</option>
          </select>
        </div>
        <div class="col-sm-6 mt-2">
          <label class="h6"><span class="required_txt">*</span> First Name</label>
          <input type="text" required class="form-control form-white" name="firstname[]">
        </div>
        <div class="col-sm-6 mt-2">
          <label class="h6"><span class="required_txt">*</span> Last Name</label>
          <input type="text" required class="form-control form-white" name="lastname[]">
        </div>
        <div class="col-sm-6 mt-2">
          <label class="h6"><span class="required_txt">*</span> Job Title</label>
          <input type="text" required class="form-control form-white" name="position[]">
        </div>
        <div class="col-sm-6 mt-2">
          <label class="h6"><span class="required_txt">*</span> E-mail</label>
          <input type="email" required class="form-control form-white emailVerify" name="email[]">
        </div>
        <div class="col-sm-6 mt-2">
          <label class="h6"><span class="required_txt">*</span> Contact Number</label>
          <input type="text" required class="phoneCount form-control form-white" name="contactnumber[]">
        </div>
        <div class="col-sm-6 mt-2">
          <label class="h6">Twitter handle</label>
          <input class="form-control form-white" name="twitter[]" type="text">
        </div>
        <div class="col-sm-6 mt-2">
          <label class="h6">LinkedIn handle</label>
          <input class="form-control form-white" name="linkedin[]" type="text">
        </div>
        <div class="col-sm-6 mt-2">
          <label class="h6">Facebook handle</label>
          <input class="form-control form-white" name="facebook[]" type="text">
        </div>
      </div>
    `;
    }
    $("#newinputcontainer").html(newInput);

    if (typeof attachOptionalExtrasListeners === "function")
      attachOptionalExtrasListeners();
    if (typeof updateCartTotal === "function") updateCartTotal();
  });

  var countries = new Array(
    "Nigeria",
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burma",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo, Democratic Republic",
    "Congo, Republic of the",
    "Costa Rica",
    "Cote d'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Greenland",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, North",
    "Korea, South",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Mongolia",
    "Morocco",
    "Monaco",
    "Mozambique",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Samoa",
    "San Marino",
    " Sao Tome",
    "Saudi Arabia",
    "Senegal",
    "Serbia and Montenegro",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  );
  var selector = document.getElementsByClassName("selectCountry");
  for (let u = 0; u < selector.length; u++) {
    const element = selector[u];
    for (var i = 0; i < countries.length; i++) {
      var option = document.createElement("option");
      var txt = document.createTextNode(countries[i]);
      option.appendChild(txt);
      option.setAttribute("value", countries[i]);
      element.insertBefore(option, element.lastChild);
    }
  }

  // Cancellation Policy
  // Get the modal for Privacy Policy
  var modal2 = document.getElementById("myModal2");

  // Get the button that opens the Privacy Policy modal
  var btn2 = document.getElementById("myBtn2");

  // // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close2")[0];

  // When the user clicks the button, open the modal
  btn2.onclick = function () {
    modal2.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal2.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal2) {
      modal2.style.display = "none";
    }
  };

  var countriesi = new Array(
    "Nigeria",
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burma",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo, Democratic Republic",
    "Congo, Republic of the",
    "Costa Rica",
    "Cote d'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Greenland",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, North",
    "Korea, South",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Mongolia",
    "Morocco",
    "Monaco",
    "Mozambique",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Samoa",
    "San Marino",
    " Sao Tome",
    "Saudi Arabia",
    "Senegal",
    "Serbia and Montenegro",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  );
  var selectore = document.getElementsByClassName("selectCountri");
  for (let u = 0; u < selectore.length; u++) {
    const element = selectore[u];
    for (var i = 0; i < countriesi.length; i++) {
      var option = document.createElement("option");
      var txt = document.createTextNode(countriesi[i]);
      option.appendChild(txt);
      option.setAttribute("value", countriesi[i]);
      element.insertBefore(option, element.lastChild);
    }
  }

  function doalert(checkboxElem, vAl) {
    if (checkboxElem.checked) {
      var ff = document.getElementById("totalledCart").value;
      var qq = parseInt(ff) + parseInt(vAl);
      document.getElementById("totalledCart").value = qq;
    } else {
      var ff = document.getElementById("totalledCart").value;
      var qq = parseInt(ff - vAl);
      document.getElementById("totalledCart").value = qq;
    }
  }

  // Function to update cart total
  function updateCartTotal() {
    // Base cost per VIP pass
    const baseCostPerPass = 10000;

    // Get number of passes
    const numberOfPasses =
      parseInt(document.getElementById("experienceNo").value) || 1;

    // Calculate base total
    let total = baseCostPerPass * numberOfPasses;

    // Add optional extras for each pass
    const allOptionalCheckboxes = document.querySelectorAll(
      ".optional-checkbox:checked",
    );

    allOptionalCheckboxes.forEach((checkbox) => {
      const cost = parseInt(checkbox.getAttribute("data-cost")) || 0;
      total += cost;
    });

    // Update the cart total field
    document.getElementById("totalledCart").value = total;
  }

  // Function to attach event listeners to optional extras checkboxes
  function attachOptionalExtrasListeners() {
    const optionalCheckboxes = document.querySelectorAll(".optional-checkbox");

    optionalCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", updateCartTotal);
    });
  }

  // Attach event listeners to existing checkboxes on page load
  document.addEventListener("DOMContentLoaded", function () {
    attachOptionalExtrasListeners();

    // Also update when number of forms changes
    document
      .getElementById("experienceNo")
      .addEventListener("change", updateCartTotal);
  });

  try {
    const BACKEND_URL = "https://reg.nigeriaenergysummit.com";
    const response = await fetch(BACKEND_URL + "/api/profile_reg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (result.success) {
      const baseUrl = "https://nigeriaenergysummit.com";
      if (result.payment_method === "card") {
        const encoded = btoa(JSON.stringify(result.data));
        //console.log(result.data);
        window.location.href = `${baseUrl}/checkout?data=${encoded}`;
      } else {
        const encoded = btoa(JSON.stringify(result.data));
        window.location.href = `${baseUrl}/invoice?data=${encoded}`;
      }
    } else {
      alert("ERROR: " + result.message);
      console.error("Server Error:", result);
    }
  } catch (error) {
    console.error("Request Failed:", error);
    alert("Network error. Try again.");
  } finally {
    // optionally re-enable if needed
    btn.disabled = false;
    btn.innerText = "Next";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-links a");
  if (!links.length) return; // exit if no nav links

  const currentPath = window.location.pathname;
  links.forEach((link) => {
    try {
      const linkUrl = new URL(link.href);
      const linkPath = linkUrl.pathname;
      link.classList.toggle(
        "active",
        linkPath === currentPath ||
          ((currentPath === "/" || currentPath === "/nies/") &&
            linkPath === "/nies"),
      );
    } catch (e) {
      console.error("Bad link href:", link.href);
    }
  });
});

const cards = document.querySelectorAll(".attend-reason-card");
const dots = document.querySelectorAll(".dot-attend");
let current = 0;
let autoplayInterval;

function updateCarousel() {
  cards.forEach((card, i) => {
    card.classList.remove("active", "left", "right", "hidden");

    if (i === current) {
      card.classList.add("active");
    } else if (i === (current - 1 + cards.length) % cards.length) {
      card.classList.add("left");
    } else if (i === (current + 1) % cards.length) {
      card.classList.add("right");
    } else {
      card.classList.add("hidden");
    }
  });

  dots.forEach((dot, index) => {
    if (index === current) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function nextSlide() {
  current = (current + 1) % cards.length;
  updateCarousel();
}

function goToSlide(index) {
  current = index;
  updateCarousel();
  resetAutoplay();
}

function resetAutoplay() {
  clearInterval(autoplayInterval);
  autoplayInterval = setInterval(nextSlide, 5000);
}

// Dot navigation
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => goToSlide(index));
});

// Initialize
updateCarousel();
autoplayInterval = setInterval(nextSlide, 5000);

// Pause on hover
const carousel = document.querySelector(".carousel-container-attend");
carousel.addEventListener("mouseenter", () => clearInterval(autoplayInterval));
carousel.addEventListener("mouseleave", () => {
  autoplayInterval = setInterval(nextSlide, 5000);
});

// Scroll animations
function checkScroll() {
  const elements = document.querySelectorAll(".fade-in");
  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (elementTop < windowHeight - 100) {
      element.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", checkScroll);
window.addEventListener("load", checkScroll);

// Mobile menu functionality
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");

if (mobileMenuBtn && navLinks) {
  mobileMenuBtn.addEventListener("click", () => {
    navLinks.style.display =
      navLinks.style.display === "flex" ? "none" : "flex";
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const headerHeight =
        document.getElementById("header").offsetHeight +
        document.querySelector(".top-header").offsetHeight;
      const targetPosition =
        target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector(".the-forms");
  if (el)
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
});
