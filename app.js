let imgsection = document.querySelector(".imageSection");
// let category = document.querySelector(".category")
let allorien = document.querySelector("#allOrientation");
let allcatagory = document.querySelector("#AllCategories");
let allcolor = document.querySelector("#allcolors");
// console.log(orien.value);
let color;
let orien;
let catagory;

const accessKey = "6Jxn3JaAafmcwc0eTAj5aVvHAnfzPmL9onVcC2_Fv9E";

const imagesData = async (
  query = "",
  page = 1,
  per_page = 12,
  orientation = "",
  color = ""
) => {
  const endpoint = `https://api.unsplash.com/search/photos`;
  const url = new URL(endpoint);

  // Add query params dynamically
  url.searchParams.set("client_id", accessKey);
  url.searchParams.set("query", query || "nature"); // default search query
  url.searchParams.set("page", page);
  url.searchParams.set("per_page", per_page);
  if (orientation) url.searchParams.set("orientation", orientation); // e.g., 'landscape'
  if (color) url.searchParams.set("color", color); // e.g., 'black_and_white'

  try {
    const res = await fetch(url.toString());
    const data = await res.json();
    console.log(data);
    return data.results;
  } catch (error) {
    console.error("Error fetching visual images data:", error);
  }
};

allorien.addEventListener("click", (e) => {
  if (e.target.value.length) {
    orien = e.target.value;
    main();
  }
});

allcatagory.addEventListener("click", (e) => {
  if (e.target.value.length) {
    catagory = e.target.value;
    main();
  }
});

allcolor.addEventListener("click", (e) => {
  if (e.target.value.length) {
    color = e.target.value;
    main();
  }
});

// Example usage
let main = async () => {
  const data = await imagesData(catagory, 1, 12, orien, color);

  data.forEach((element) => {
    // console.log(element);
    let imgdiv = document.createElement("div");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let imgele = document.createElement("img");
    let overlay = document.createElement("div");

    imgdiv.id = "img";
    p1.classList.add("imgTitle");
    p2.classList.add("category");
    overlay.classList.add("overlay");

    p1.innerText = element.description;
    p2.innerText = element.description;
    imgele.src = element.urls.full;

    imgdiv.appendChild(imgele);
    imgdiv.appendChild(p1);
    imgdiv.appendChild(p2);
    imgdiv.appendChild(overlay);

    imgsection.prepend(imgdiv);
  });
};

main();
