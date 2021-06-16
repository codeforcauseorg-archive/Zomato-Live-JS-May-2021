let fs = require("fs");
let axios = require("axios");
let data = require("./zomato_with_images.json");

async function filler(items) {
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    let imgContent = fs.readFileSync(`./photos/${item.path}`, {
      encoding: "base64",
    });

    let response = await axios.post("http://localhost:3000/images/", {
      content: imgContent,
    });

    console.log(i);

    await axios.post("http://localhost:3000/restaurant/", {
      name: item.name,
      address: item.address,
      phoneNo: item.phone,
      rating: item.rate,
      onlineOrder: item.online_order,
      photo: `/images/${response.data._id}`,
    });
  }
}

filler(data);

//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
