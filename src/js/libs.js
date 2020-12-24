import { createClient } from "pexels";
import refs from "./refs.js";
import template from "../templates/item.hbs";

let key = "563492ad6f91700001000001390f9fee0a794c1182a72e49e0e0eae2";

const client = createClient(key);
console.log(client);

// refs.gallery.append(img);

// получаем 1 объект
// client.photos.random().then((obj) => {
//   console.log(obj);
//   img.src = obj.src.original;
// });

// получаем обьектов столько, сколько указали в
let query = "lotus";
client.photos.search({ query, per_page: 10 }).then((result) => {
  console.log(result.photos);
  const items = template(result.photos);
  refs.gallery.insertAdjacentHTML("afterbegin", items);
});
// =======================
// client.photos
//   .search({ query, per_page: 10 })
//   .then((result) => {
//     console.log(result.photos);
//     const images = result.photos.map((el) => {
//       const img = document.createElement("img");
//       img.width = "300";
//       img.src = el.src.original;
//       return img;
//     });
//     console.log(images);
//     return images;
//   })
//   .then((images) => {
//     //
//     refs.gallery.append(...images);
//     return refs.gallery;
//   });
// ================

