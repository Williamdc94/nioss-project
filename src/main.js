document.addEventListener('DOMContentLoaded', () => {
          const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
          const mobileMenu = document.querySelector('.mobile-menu');
          const mobileMenuClose = document.querySelector('.mobile-menu-close');

          if (mobileMenuBtn && mobileMenu && mobileMenuClose) {
              mobileMenuBtn.addEventListener('click', () => {
                  mobileMenu.style.display = 'flex';
              });

              mobileMenuClose.addEventListener('click', () => {
                  mobileMenu.style.display = 'none';
              });
          }
      });

        // Scroll buttons
        const tabLabels = document.querySelector('.tab-labels');
        document.querySelector('.tab-nav-btn.left').addEventListener('click', () => {
            tabLabels.scrollBy({
                left: -150,
                behavior: 'smooth'
            });
        });
        document.querySelector('.tab-nav-btn.right').addEventListener('click', () => {
            tabLabels.scrollBy({
                left: 150,
                behavior: 'smooth'
            });
        });


    document.querySelector("form").addEventListener("submit", async function(e) {
        e.preventDefault();
        var btn = document.getElementById('submit-btn');
        btn.disabled = true;
        btn.innerText = "Processing...";

        // Get the updated cart total
        const cartTotal = document.getElementById('totalledCart').value;
        
        // Get reCAPTCHA token (if using v2 checkbox)
        // const recaptchaResponse = document.querySelector('.g-recaptcha-response').value;

        // Build JSON payload - now includes optional extras
        const payload = {
            "g-recaptcha-response": "recaptchaResponse",
            "location": document.querySelector("select[name='location']").value,
            "type": document.querySelector("input[name='type']").value,
            "organisation": document.querySelector("input[name='organisation']").value,
            "cart_total": cartTotal, // Add cart total to payload

            // Arrays
            "firstname": Array.from(document.querySelectorAll("input[name='firstname[]']")).map(i => i
                .value),
            "lastname": Array.from(document.querySelectorAll("input[name='lastname[]']")).map(i => i
                .value),
            "email": Array.from(document.querySelectorAll("input[name='email[]']")).map(i => i.value),
            "title": Array.from(document.querySelectorAll("select[name='title[]']")).map(i => i.value),
            "position": Array.from(document.querySelectorAll("input[name='position[]']")).map(i => i
                .value),
            "contactnumber": Array.from(document.querySelectorAll("input[name='contactnumber[]']")).map(
                i => i.value),

            // Optional extras arrays
            "ncdmb": Array.from(document.querySelectorAll("input[name='ncdmb[]']")).map(i => i.checked),
            "nnpc": Array.from(document.querySelectorAll("input[name='nnpc[]']")).map(i => i.checked),
            "dpr": Array.from(document.querySelectorAll("input[name='dpr[]']")).map(i => i.checked),

            // Optional social media fields
            "twitter": Array.from(document.querySelectorAll("input[name='twitter[]']")).map(i => i
                .value),
            "facebook": Array.from(document.querySelectorAll("input[name='facebook[]']")).map(i => i
                .value),
            "linkedin": Array.from(document.querySelectorAll("input[name='linkedin[]']")).map(i => i
                .value),

            "bankk": document.querySelector("select[name='bankk']").value
        };


         window.addEventListener('DOMContentLoaded', function() {
        genLoopPass();
        // Initialize cart total calculation
        updateCartTotal();
    });


    function genLoopPass() {
        var MaxNo = 101;
        var text = '';
        var i = 1;
        while (i < MaxNo) {
            text += `<option value="${i}" >${i}</option>`;
            i++;
        }
        $('#experienceNo').html(text);
    }

    $('#experienceNo').on('change', function() {
        var noOfInp = ($(this).val()) - 1;
        var i = 0;
        var y = 2;
        var newInput = '';
        while (i < noOfInp) {
            newInput += `
                <div class="row" style="margin-top: 40px">
                    <div style="flex: 1 1 100%;" class="mt-2 col-sm-12"><b>Qty ${y++}</b></div>
                    <br/><br/>
                    <div class="col-sm-6 mt-2">
                        <label for="firstname" class="h6"><span class="required_txt">*</span>Job Title</label>
                        <select class="form-control" required="" name="title[]">
                            <option selected="" value=""></option>
                            <option>HE</option>
                            <option>Hon</option>
                            <option>Engr</option>
                            <option>Mrs</option>
                            <option>Ms</option>
                            <option>Mr</option>
                            <option>Dr</option>
                            <option>Professor</option>
                            <option>Dame</option>
                            <option>Sir</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div class="col-sm-6 mt-2">
                        <label for="firstname" class="h6"><span class="required_txt">*</span> First Name</label>
                        <input type="text" required="" id="firstname" class="form-control form-white"
                            name="firstname[]">
                    </div>
                    <div class="col-sm-6 mt-2">
                        <label for="lastname" class="h6"><span class="required_txt">*</span> Last Name</label>
                        <input type="text" required="" class="form-control form-white"
                            name="lastname[]">
                    </div>
                    <div class="col-sm-6 mt-2">
                        <label for="website" class="h6"><span class="required_txt">*</span> Job title</label>
                        <input type="text" required="" id="position" class="form-control form-white"
                            name="position[]">
                    </div>
                    <div class="col-sm-6 mt-2">
                        <label for="email" class="h6"><span class="required_txt">*</span> E-mail</label>
                        <input type="email" required="" class="form-control form-white emailVerify" name="email[]">
                    </div>
                    <div class="col-sm-6 mt-2">
                        <label for="website" class="h6"><span class="required_txt">*</span> Contact Number</label>
                        <input type="text" required="" class="phoneCount form-control form-white"
                            name="contactnumber[]">
                    </div>
                    
                    <div class="col-sm-6 mt-2">
                        <label for="website" class="h6">Twitter handle</label>
                        <input class="form-control form-white" name="twitter[]" type="text">
                    </div>
                    
                    <div class="col-sm-6 mt-2">
                        <label for="website" class="h6">LinkedIn handle</label>
                        <input class="form-control form-white" name="linkedin[]" type="text">
                    </div>
                    
                    <div class="col-sm-6 mt-2">
                        <label for="website" class="h6">Facebook handle</label>
                        <input class=" form-control form-white" name="facebook[]" type="text">
                    </div>
                    
                   
                </div>
            `;
            i++;
        }
        $('#newinputcontainer').html(newInput);
        
        // Add event listeners to new checkboxes
        attachOptionalExtrasListeners();
        updateCartTotal();
    });

        var countries = new Array('Nigeria', "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antarctica",
        "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi",
        "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China",
        "Colombia", "Comoros", "Congo, Democratic Republic", "Congo, Republic of the", "Costa Rica",
        "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica",
        "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea",
        "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
        "Greece", "Greenland", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras",
        "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
        "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait",
        "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Mongolia", "Morocco",
        "Monaco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger",
        "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines",
        "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino", " Sao Tome",
        "Saudi Arabia", "Senegal", "Serbia and Montenegro", "Seychelles", "Sierra Leone", "Singapore", "Slovakia",
        "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Suriname",
        "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine",
        "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela",
        "Vietnam", "Yemen", "Zambia", "Zimbabwe");
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



    // Get the modal for Privacy Policy
    var modal = document.getElementById("myModal");

    // Get the button that opens the Privacy Policy modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
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
    btn2.onclick = function() {
        modal2.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal2.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal2) {
            modal2.style.display = "none";
        }
    }




    var countriesi = new Array('Nigeria', "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antarctica",
        "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi",
        "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China",
        "Colombia", "Comoros", "Congo, Democratic Republic", "Congo, Republic of the", "Costa Rica",
        "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica",
        "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea",
        "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
        "Greece", "Greenland", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras",
        "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
        "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait",
        "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
        "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Mongolia", "Morocco",
        "Monaco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger",
        "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines",
        "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino", " Sao Tome",
        "Saudi Arabia", "Senegal", "Serbia and Montenegro", "Seychelles", "Sierra Leone", "Singapore", "Slovakia",
        "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Suriname",
        "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine",
        "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela",
        "Vietnam", "Yemen", "Zambia", "Zimbabwe");
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

            var ff = document.getElementById('totalledCart').value;
            var qq = parseInt(ff) + parseInt(vAl);
            document.getElementById('totalledCart').value = qq;
        } else {
            var ff = document.getElementById('totalledCart').value;
            var qq = parseInt(ff - vAl);
            document.getElementById('totalledCart').value = qq;
        }
    }



    // Function to update cart total
    function updateCartTotal() {
        // Base cost per VIP pass
        const baseCostPerPass = 10000;
        
        // Get number of passes
        const numberOfPasses = parseInt(document.getElementById('experienceNo').value) || 1;
        
        // Calculate base total
        let total = baseCostPerPass * numberOfPasses;
        
        // Add optional extras for each pass
        const allOptionalCheckboxes = document.querySelectorAll('.optional-checkbox:checked');
        
        allOptionalCheckboxes.forEach(checkbox => {
            const cost = parseInt(checkbox.getAttribute('data-cost')) || 0;
            total += cost;
        });
        
        // Update the cart total field
        document.getElementById('totalledCart').value = total;
    }

    // Function to attach event listeners to optional extras checkboxes
    function attachOptionalExtrasListeners() {
        const optionalCheckboxes = document.querySelectorAll('.optional-checkbox');
        
        optionalCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', updateCartTotal);
        });
    }

    // Attach event listeners to existing checkboxes on page load
    document.addEventListener('DOMContentLoaded', function() {
        attachOptionalExtrasListeners();
        
        // Also update when number of forms changes
        document.getElementById('experienceNo').addEventListener('change', updateCartTotal);
    });




        try {
            const BACKEND_URL = "https://reg.nigeriaenergysummit.com";
            const response = await fetch(BACKEND_URL + "/api/profile_reg", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(payload)
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

     /* -------------------------------------------------
         COOKIE BANNER
      ------------------------------------------------- */

    function showCookieBanner() {
          const consent = localStorage.getItem('cookieConsent');
          const banner = document.getElementById('cookieConsent');

          if (!banner) return;

          if (!consent) {
              setTimeout(() => banner.classList.add('show'), 400);
          }
      }


      /*function acceptCookies() {
          localStorage.setItem('cookieConsent', 'accepted');
          hideBanner();
      }

         function declineCookies() {
          localStorage.setItem('cookieConsent', 'declined');
          hideBanner();
      }

      function hideBanner() {
          const banner = document.getElementById('cookieConsent');
          if (banner) banner.classList.remove('show');
      }*/

       /* -------------------------------------------------
         INTRO VIDEO WITH SOUND OVERLAY
      ------------------------------------------------- */
      function showIntroVideo() {
          const modal = document.getElementById('introModal');
          const video = document.getElementById('introVideo');
          const overlay = document.getElementById('soundOverlay');

          if (!modal || !video) {
              console.warn("Intro modal missing — showing cookies.");
              showCookieBanner();
              return;
          }

          modal.classList.add('active');

              /* 1. Start autoplay muted (allowed in all browsers) */
          video.muted = true;
          video.play().catch(err => console.warn("Muted autoplay failed:", err));

          /* 2. Clicking the overlay -> enable sound */
          if (overlay) {
              overlay.addEventListener("click", () => {
                  video.muted = false;
                  video.currentTime = 0; // restart from beginning with sound
                  video.play();
                  overlay.classList.add("hidden");
              });
          }

          /* 3. Video pausing works naturally (we didn't block clicks) */

          /* 4. When video ends, close modal */
          video.onended = () => closeIntroVideo();
      }

      
      /* -------------------------------------------------
         CLOSE INTRO VIDEO
      ------------------------------------------------- */
      function closeIntroVideo() {
          const modal = document.getElementById('introModal');
          const video = document.getElementById('introVideo');

          if (modal) modal.classList.remove('active');
          if (video) video.pause();

          showCookieBanner();
      }

       /* -------------------------------------------------
         LOADER → THEN VIDEO
      ------------------------------------------------- */
      function hideLoaderAndStartIntro() {
          const loader = document.querySelector('.loader-container');
          const loadingText = document.querySelector('.loading-text');

          if (!loader) {
              showIntroVideo();
              return;
          }

          loader.style.opacity = "0";
          loader.style.transition = "opacity 0.5s ease";

          if (loadingText) {
              loadingText.style.opacity = "0";
              loadingText.style.transition = "opacity 0.5s ease";
          }

          setTimeout(() => {
              loader.style.display = "none";
              if (loadingText) loadingText.style.display = "none";

              showIntroVideo();
          }, 500);
      }

      
      /* -------------------------------------------------
         RUN ON PAGE LOAD
      ------------------------------------------------- */
      window.addEventListener("load", hideLoaderAndStartIntro);

      document.addEventListener("DOMContentLoaded", function() {
        const currentPath = window.location.pathname; // e.g., /nies/about
        const links = document.querySelectorAll(".nav-links a");

        links.forEach(link => {
            // Create a temporary anchor to extract pathname
            const linkUrl = new URL(link.href);
            const linkPath = linkUrl.pathname;

            // Remove previous active classes
            link.classList.remove("active");

            // Add active if pathname matches
            if (linkPath === currentPath) {
                link.classList.add("active");
            }

            // Optional: handle home page root

            if ((currentPath === "/" || currentPath === "/nies/") && linkPath === "/nies") {
                link.classList.add("active");
            }
        });
    });


      const cards = document.querySelectorAll('.attend-reason-card');
        const dots = document.querySelectorAll('.dot-attend');
        let current = 0;
        let autoplayInterval;

        function updateCarousel() {
            cards.forEach((card, i) => {
                card.classList.remove('active', 'left', 'right', 'hidden');

                if (i === current) {
                    card.classList.add('active');
                } else if (i === (current - 1 + cards.length) % cards.length) {
                    card.classList.add('left');
                } else if (i === (current + 1) % cards.length) {
                    card.classList.add('right');
                } else {
                    card.classList.add('hidden');
                }
            });

            dots.forEach((dot, index) => {
                if (index === current) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
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
            dot.addEventListener('click', () => goToSlide(index));
        });

        // Initialize
        updateCarousel();
        autoplayInterval = setInterval(nextSlide, 5000);

        // Pause on hover
        const carousel = document.querySelector('.carousel-container-attend');
        carousel.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
        carousel.addEventListener('mouseleave', () => {
            autoplayInterval = setInterval(nextSlide, 5000);
        });


          // Scroll animations
        function checkScroll() {
            const elements = document.querySelectorAll('.fade-in');
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (elementTop < windowHeight - 100) {
                    element.classList.add('visible');
                }
            });
        }

        window.addEventListener('scroll', checkScroll);
        window.addEventListener('load', checkScroll);

        // Mobile menu functionality
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');

        if (mobileMenuBtn && navLinks) {
            mobileMenuBtn.addEventListener('click', () => {
                navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            });
        }

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const headerHeight = document.getElementById('header').offsetHeight + document
                        .querySelector('.top-header').offsetHeight;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset -
                        headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });


          document.addEventListener('DOMContentLoaded', () => {
            const el = document.querySelector('.the-forms');
            if (el) el.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });


         document.addEventListener("DOMContentLoaded", () => {
            const container = document.querySelector(".tab-labels");
            const active = container.querySelector(".active");

            if (active) {
                const scrollLeft = active.offsetLeft - container.offsetWidth / 2 + active.offsetWidth / 2;
                container.scrollTo({
                    left: scrollLeft,
                    behavior: "smooth"
                });
            }

            // Left/Right navigation buttons
            document.querySelector(".tab-nav-btn.left").onclick = () => {
                container.scrollBy({
                    left: -150,
                    behavior: "smooth"
                });
            };
            document.querySelector(".tab-nav-btn.right").onclick = () => {
                container.scrollBy({
                    left: 150,
                    behavior: "smooth"
                });
            };
        });