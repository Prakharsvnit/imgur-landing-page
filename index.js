const fetchPhotos = () => {
    axios.get('https://api.unsplash.com/photos/', {
      params: {
        client_id: "kAIDL8jzLGf34v9CZoWZXiSdMzplmQilway18VyJhYQ",
        page:1,
        per_page:50,
        order_by:"latest"
      }
  }).then(response => {
       const photos = response.data
       photos.forEach(function(el){
        appendPhotos(el)
    });
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    console.log("done");
  });

}

fetchPhotos();

var data_div = document.getElementById('gallery-item');

function appendPhotos(el){

    var image = document.createElement('img');

    image.src = el.urls.thumb;

    image.classList.add('img-thumb');

    data_div.append(image)



}
