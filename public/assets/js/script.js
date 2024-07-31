// Load data
async function loadData() {
  const jsonFilePath = "../assets/data/brandlist.json";

  // Use fetch to get the data
  await fetch(jsonFilePath)
    .then((response) => {
      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      return response.json(); // Parse the JSON in the response
    })
    .then((data) => {
      // Create a new list item for each brand
      var brandList = document.getElementById("brand-list");
      var brandListItems = "";
      for (var i = 0; i < data.brandList.length; i++) {
        var carouselList = "";
        for (var j = 1; j < data.brandList[i].before.length; j++) {
          carouselList += `
        <div class="carousel-item">
          <main>
            <div class="container-box">
              <div class="image-container">
                <img
                  class="image-before slider-image"
                  src="${data.brandList[i].path + data.brandList[i].before[j]}"
                  alt="color photo"
                />
                
                <img
                  class="image-after slider-image"
                  src="${data.brandList[i].path + data.brandList[i].after[j]}"
                  alt="black and white"
                />
              </div>
              <!-- step="10" -->
              <input
                type="range"
                min="0"
                max="100"
                value="50"
                aria-label="Percentage of before photo shown"
                class="slider"
              />
              <div class="slider-line" aria-hidden="true"></div>
              <div class="slider-button" aria-hidden="true">
                <svg style="width: 30px; height: 30px;" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
                <style type="text/css">
                  .st0{fill:#212529;}
                </style>
                <g>
                  <g>
                    <path class="st0" d="M6.25,10.2c0.11,0.12,0.11,0.3-0.01,0.42L0.5,16.17c-0.06,0.06-0.13,0.08-0.21,0.08
                      c-0.08,0-0.15-0.03-0.21-0.09c-0.11-0.12-0.11-0.3,0.01-0.42l5.75-5.55"/>
                    <path class="st0" d="M6.04,21.81c-0.07,0-0.15-0.03-0.2-0.08l-5.75-5.55C0,16.09-0.03,15.96,0.02,15.85
                      c0.04-0.11,0.15-0.18,0.27-0.18h11.72c0.16,0,0.29,0.13,0.29,0.29s-0.13,0.29-0.29,0.29H1.02l5.22,5.05
                      c0.12,0.11,0.12,0.3,0.01,0.42C6.19,21.78,6.12,21.81,6.04,21.81z"/>
                  </g>
                  <g>
                    <path class="st0" d="M25.75,21.8c-0.11-0.12-0.11-0.3,0.01-0.42l5.75-5.55c0.06-0.06,0.13-0.08,0.21-0.08
                      c0.08,0,0.15,0.03,0.21,0.09c0.11,0.12,0.11,0.3-0.01,0.42l-5.75,5.55"/>
                    <path class="st0" d="M25.96,10.19c0.07,0,0.15,0.03,0.2,0.08l5.75,5.55c0.09,0.08,0.11,0.21,0.07,0.32
                      c-0.04,0.11-0.15,0.18-0.27,0.18H19.99c-0.16,0-0.29-0.13-0.29-0.29c0-0.16,0.13-0.29,0.29-0.29h10.99l-5.22-5.05
                      c-0.12-0.11-0.12-0.3-0.01-0.42C25.81,10.22,25.88,10.19,25.96,10.19z"/>
                  </g>
                  <path class="st0" d="M16.08,5.71c0.16,0,0.29,0.14,0.29,0.3L16.23,26c0,0.08-0.04,0.15-0.09,0.2c-0.06,0.06-0.13,0.09-0.21,0.09
                    c-0.16,0-0.29-0.14-0.29-0.3L15.77,6"/>
                </g>
                </svg>
              </div>
            </div>
          </main>
        </div>`;
        }
        // removed header
        // <div class="modal-header">
        //   <h1 class="modal-title fs-5" id="exampleModalLabel${i}">
        //     ${data.brandList[i].name}
        //   </h1>
        //   <button
        //     type="button"
        //     class="btn-close"
        //     data-bs-dismiss="modal"
        //     aria-label="Close"
        //   ></button>
        // </div>
        brandListItems +=
          `
      <!-- Trigger thumbnail -->
          <div
            data-bs-toggle="modal"
            data-bs-target="#preview${i}"
            class="thumbnail_zoom"
          >
          <img src="${
            data.brandList[i].path + data.brandList[i].prevLogo
          }" class="w-100 before_img" alt="After"/>
          <img src="${
            data.brandList[i].path + data.brandList[i].afterLogo
          }" class="w-100 after_img" alt="After"/>
          </div>

          <!-- Preview modal -->
          <div
            class="modal fade"
            id="preview${i}"
            tabindex="-1"
            aria-labelledby="exampleModalLabel${i}"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-xl" style="">
              <div class="modal-content" style="background-color: transparent; border: none;">
                <div class="modal-body">
                  <div id="carouselExample${i}" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators" style="margin-bottom: -2rem">
                      <button type="button" data-bs-target="#carouselExample${i}" style="background-color: white; height: 1px;" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExample${i}" style="background-color: white; height: 1px;" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExample${i}" style="background-color: white; height: 1px;" data-bs-slide-to="2" aria-label="Slide 3"></button>
                      <button type="button" data-bs-target="#carouselExample${i}" style="background-color: white; height: 1px;" data-bs-slide-to="3" aria-label="Slide 4"></button>
                      <button type="button" data-bs-target="#carouselExample${i}" style="background-color: white; height: 1px;" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    </div>
                    <div class="carousel-inner mx-auto" style="width: 95%">
                      <div class="carousel-item active">
                        <main>
                          <div class="container-box">
                            <div class="image-container">
                              <img
                                class="image-before slider-image"
                               src="${
                                 data.brandList[i].path +
                                 data.brandList[i].before[0]
                               }"
                                alt="color photo"
                              />
                              <img
                                class="image-after slider-image"
                                src="${
                                  data.brandList[i].path +
                                  data.brandList[i].after[0]
                                }"
                                alt="black and white"
                              />
                            </div>
                            <!-- step="10" -->
                            <input
                              type="range"
                              min="0"
                              max="100"
                              value="50"
                              aria-label="Percentage of before photo shown"
                              class="slider"
                            />
                            <div class="slider-line" aria-hidden="true"></div>
                            <div class="slider-button" aria-hidden="true">
                              <svg style="width: 30px; height: 30px;" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
                              <style type="text/css">
                                .st0{fill:#212529;}
                              </style>
                              <g>
                                <g>
                                  <path class="st0" d="M6.25,10.2c0.11,0.12,0.11,0.3-0.01,0.42L0.5,16.17c-0.06,0.06-0.13,0.08-0.21,0.08
                                    c-0.08,0-0.15-0.03-0.21-0.09c-0.11-0.12-0.11-0.3,0.01-0.42l5.75-5.55"/>
                                  <path class="st0" d="M6.04,21.81c-0.07,0-0.15-0.03-0.2-0.08l-5.75-5.55C0,16.09-0.03,15.96,0.02,15.85
                                    c0.04-0.11,0.15-0.18,0.27-0.18h11.72c0.16,0,0.29,0.13,0.29,0.29s-0.13,0.29-0.29,0.29H1.02l5.22,5.05
                                    c0.12,0.11,0.12,0.3,0.01,0.42C6.19,21.78,6.12,21.81,6.04,21.81z"/>
                                </g>
                                <g>
                                  <path class="st0" d="M25.75,21.8c-0.11-0.12-0.11-0.3,0.01-0.42l5.75-5.55c0.06-0.06,0.13-0.08,0.21-0.08
                                    c0.08,0,0.15,0.03,0.21,0.09c0.11,0.12,0.11,0.3-0.01,0.42l-5.75,5.55"/>
                                  <path class="st0" d="M25.96,10.19c0.07,0,0.15,0.03,0.2,0.08l5.75,5.55c0.09,0.08,0.11,0.21,0.07,0.32
                                    c-0.04,0.11-0.15,0.18-0.27,0.18H19.99c-0.16,0-0.29-0.13-0.29-0.29c0-0.16,0.13-0.29,0.29-0.29h10.99l-5.22-5.05
                                    c-0.12-0.11-0.12-0.3-0.01-0.42C25.81,10.22,25.88,10.19,25.96,10.19z"/>
                                </g>
                                <path class="st0" d="M16.08,5.71c0.16,0,0.29,0.14,0.29,0.3L16.23,26c0,0.08-0.04,0.15-0.09,0.2c-0.06,0.06-0.13,0.09-0.21,0.09
                                  c-0.16,0-0.29-0.14-0.29-0.3L15.77,6"/>
                              </g>
                              </svg>
                            </div>
                          </div>
                        </main>
                      </div>` +
          carouselList +
          `</div>
                    <button
                      class="carousel-control-prev flex-column gap-4 justify-content-between button_before"
                      type="button"
                      data-bs-target="#carouselExample${i}"
                      data-bs-slide="prev"
                      style="left: -11px; width: 1.5rem; padding-top: 1.5rem; padding-bottom: 7rem; opacity: 1;"
                    >
                    <div class="text-white text_before">Before</div>
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                        style="filter: none; opacity: 1;"
                      ></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next flex-column-reverse gap-4 justify-content-between button_after"
                      type="button"
                      data-bs-target="#carouselExample${i}"
                      data-bs-slide="next"
                      style="right: -11px; width: 1.5rem; padding-top: 7rem; opacity: 1; padding-bottom: 1rem;"
                    >
                    <div class="text-white text_after">After</div>
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                        style="filter: none; opacity: 1;"
                      ></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
      }
      brandList.innerHTML = brandListItems;
      slider();
      hoverLogo();
    })
    .catch((error) => {
      // Handle any errors
      console.error("Error fetching JSON:", error);
    });
}

// delay script
const delay = (delayInms) => {
  return new Promise((resolve) => setTimeout(resolve, delayInms));
};

// animation script
function showAnimation(container) {
  const thumbnail = document.querySelectorAll(".thumbnail_zoom");
  thumbnail.forEach((thumbnail) => {
    thumbnail.addEventListener("click", async () => {
      var position = 50;
      await delay(500);
      while (position <= 100) {
        container.forEach((container) => {
          container.style.setProperty("--position", `${position}%`);
        });
        position += 1;
        await delay(10);
      }
      // while (position >= 0) {
      //   container.forEach((container) => {
      //     container.style.setProperty("--position", `${position}%`);
      //   });
      //   position -= 1;
      //   await delay(10);
      // }
      while (position >= 50) {
        container.forEach((container) => {
          container.style.setProperty("--position", `${position}%`);
        });
        position -= 1;
        await delay(10);
      }
      // dispose variable
      position = null;
    });
  });
}

// slider script

function slider() {
  const container = document.querySelectorAll(".container-box");
  showAnimation(container);
  container.forEach((container) => {
    container.querySelector(".slider").addEventListener("input", (e) => {
      container.style.setProperty("--position", `${e.target.value}%`);
    });
  });
}

// hover logo script

function hoverLogo() {
  $(".thumbnail_zoom").on({
    mouseover:function(){
      $(this).find(".before_img").stop().animate({opacity:0},600);
      $(this).find(".after_img").stop().animate({opacity:1},600);
    }, mouseout:function(){
      $(this).find(".before_img").stop().animate({opacity:1},600);
      $(this).find(".after_img").stop().animate({opacity:0},600);
    } 
  });
}

// Video Play on user observation
window.addEventListener('load', videoScroll);
window.addEventListener('scroll', videoScroll);

function videoScroll() {

  if ( document.querySelectorAll('video[autoplay]').length > 0) {
    var windowHeight = window.innerHeight,
        videoEl = document.querySelectorAll('video[autoplay]');

    for (var i = 0; i < videoEl.length; i++) {

      var thisVideoEl = videoEl[i],
          videoHeight = thisVideoEl.clientHeight,
          videoClientRect = thisVideoEl.getBoundingClientRect().top;

      if ( videoClientRect <= ( (windowHeight) - (videoHeight*.5) ) && videoClientRect >= ( 0 - ( videoHeight*.5 ) ) ) {
        thisVideoEl.play();
      } else {
        thisVideoEl.pause();
      }
    }
  }
}