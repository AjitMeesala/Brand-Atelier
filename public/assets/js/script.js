const jsonFilePath = "../assets/data/brandlist.json";

// Use fetch to get the data
fetch(jsonFilePath)
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
        <div class="d-flex flex-row justify-content-between w-100">
          <div class="text-white">Before</div>
          <div class="text-white">After</div>
        </div>
                        <main>
                          <div class="container-box">
                            <div class="image-container">
                              <img
                                class="image-before slider-image"
                               src="${
                                 data.brandList[i].path +
                                 data.brandList[i].before[j]
                               }"
                                alt="color photo"
                              />
                              
                              <img
                                class="image-after slider-image"
                                src="${
                                  data.brandList[i].path +
                                  data.brandList[i].after[j]
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
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="currentColor"
                                viewBox="0 0 256 256"
                              >
                                <rect width="256" height="256" fill="none"></rect>
                                <line
                                  x1="128"
                                  y1="40"
                                  x2="128"
                                  y2="216"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="16"
                                ></line>
                                <line
                                  x1="96"
                                  y1="128"
                                  x2="16"
                                  y2="128"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="16"
                                ></line>
                                <polyline
                                  points="48 160 16 128 48 96"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="16"
                                ></polyline>
                                <line
                                  x1="160"
                                  y1="128"
                                  x2="240"
                                  y2="128"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="16"
                                ></line>
                                <polyline
                                  points="208 96 240 128 208 160"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="16"
                                ></polyline>
                              </svg>
                            </div>
                          </div>
                        </main>
                      </div>`;
      }
      brandListItems +=
        `
      <!-- Trigger thumbnail -->
          <div
            style="
              width: 25rem;
              aspect-ratio: 16/9;
              background-color: blanchedalmond;
            "
            data-bs-toggle="modal"
            data-bs-target="#preview${i}"
          >
          <img src="${
            data.brandList[i].path + data.brandList[i].after[0]
          }" class="w-100" alt="After" />
          </div>

          <!-- Preview modal -->
          <div
            class="modal fade"
            id="preview${i}"
            tabindex="-1"
            aria-labelledby="exampleModalLabel${i}"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel${i}">
                    ${data.brandList[i].name}
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <div id="carouselExample${i}" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExample${i}" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExample${i}" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExample${i}" data-bs-slide-to="2" aria-label="Slide 3"></button>
                      <button type="button" data-bs-target="#carouselExample${i}" data-bs-slide-to="3" aria-label="Slide 4"></button>
                      <button type="button" data-bs-target="#carouselExample${i}" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                      <div class="d-flex flex-row justify-content-between w-100 px-2">
                        <div class="text-white">Before</div>
                        <div class="text-white">After</div>
                      </div>
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
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="currentColor"
                                viewBox="0 0 256 256"
                              >
                                <rect width="256" height="256" fill="none"></rect>
                                <line
                                  x1="128"
                                  y1="40"
                                  x2="128"
                                  y2="216"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="16"
                                ></line>
                                <line
                                  x1="96"
                                  y1="128"
                                  x2="16"
                                  y2="128"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="16"
                                ></line>
                                <polyline
                                  points="48 160 16 128 48 96"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="16"
                                ></polyline>
                                <line
                                  x1="160"
                                  y1="128"
                                  x2="240"
                                  y2="128"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="16"
                                ></line>
                                <polyline
                                  points="208 96 240 128 208 160"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="16"
                                ></polyline>
                              </svg>
                            </div>
                          </div>
                        </main>
                      </div>` +
        carouselList +
        `</div>
                    <button
                      class="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExample${i}"
                      data-bs-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExample${i}"
                      data-bs-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
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
  })
  .catch((error) => {
    // Handle any errors
    console.error("Error fetching JSON:", error);
  });

// slider script
// setTimeout(() => {
//   const container = document.querySelector(".container-box");
//   document.querySelector(".slider").addEventListener("input", (e) => {
//     container.style.setProperty("--position", `${e.target.value}%`);
//   });
// }, 2000);

// slider script

function slider() {
  const container = document.querySelectorAll(".container-box");
  container.forEach((container) => {
    container.querySelector(".slider").addEventListener("input", (e) => {
      container.style.setProperty("--position", `${e.target.value}%`);
    });
  });
}
