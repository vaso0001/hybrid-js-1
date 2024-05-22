    function fetchImages() {
    fetch('https://picsum.photos/v2/list')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const photos = document.getElementById('photos');
        data.forEach(item => {
            const image = document.createElement('img');
            image.src = item.download_url;
            image.alt = 'ImagePhoto';
            image.style.width = '200px';
            image.style.height = '200px';
            photos.appendChild(image);
            });
        })
      
      .catch(error => {
        
        console.error('error', error);
      });
    }
      
      window.addEventListener('load', fetchImages);
      
    //   const storagecache = caches.open('image-cache');
    //    then((cacheresponse) => {
    //           if (!Array.isArray(cacheresponse))
    //             throw new Error("Received data is not an array");
    //         imageUrl(cacheresponse.map((img) => img.download_url));
    //             cacheresponse.forEach((img) => getImage(img.download_url));
    //         })
    //         .catch((err) => console.log(`An error occured: ${err}`));
    //         function fetchAndCacheImage(url) {
    //         fetch(url)
    //           .then((response) => {
    //             if (!response.ok) throw new Error(response.statusText);
    //           return response.blob();
    //           })
