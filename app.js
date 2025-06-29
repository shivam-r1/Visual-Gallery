let imgsection = document.querySelector(".imageSection");
// let category = document.querySelector(".category")
console.log("hello");

const accessKey = "g6-LtLstaynKkYjcC26MFdzmjKPb-p8FKhi51QTzeMM";

const imagesData = async (
  query = "",
  page = 1,
  per_page = 12,
  orientation = "",
  color = ""
) => {
  // const endpoint = `https://api.unsplash.com/search/photos`;
  // const url = new URL(endpoint);

  // Add query params dynamically
  // url.searchParams.set('client_id', accessKey);
  // url.searchParams.set('query', query || 'nature');  // default search query
  // url.searchParams.set('page', page);
  // url.searchParams.set('per_page', per_page);
  // if (orientation) url.searchParams.set('orientation', orientation); // e.g., 'landscape'
  // if (color) url.searchParams.set('color', color); // e.g., 'black_and_white'

  try {
    // const res = await fetch(url.toString());
    // const res = await fetch(`https://api.unsplash.com/search/photos?client_id=${accessKey}`);
    const res = await fetch(
      `https://api.unsplash.com/photos?client_id=${accessKey}`
    );
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching visual images data:", error);
  }
};

// Example usage
let main = async () => {
  const data = await imagesData("mountains", 1, 12, "landscape", "blue");

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

    imgsection.appendChild(imgdiv);
  });
};

main();
