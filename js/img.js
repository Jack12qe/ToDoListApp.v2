const imgElement = document.querySelector("img");

const imgList = ["italy-beach.jpg", "taiwan-night.jpg", "taiwan-sunset.jpeg"];

function insertImg() {
    imgElement.src = `img/${
        imgList[Math.floor(Math.random() * imgList.length)]
    }`;
    document.body.appendChild(imgElement);
}

insertImg();
setInterval(insertImg, 7000);
