
let dataBlog = [];

function blog(event) {
    event.preventDefault();
    let nodejs = document.getElementById("node-js");
    let reactjs = document.getElementById("react-js");
    let nextjs = document.getElementById("next-js");
    let php = document.getElementById("php");
    let logonjs = '<i class="fa-brands fa-node-js"></i>';
    let logorjs = '<i class="fa-brands fa-react"></i>';
    let logonextjs = '<i class="fa-brands fa-neos"></i>';
    let logophp = '<i class="fa-brands fa-php"></i>';
    let empty ='';
    let title = document.getElementById("title").value;
    let content = document.getElementById("description").value;
    let image = document.getElementById("input-blog-image").files;
    let startDay = document.getElementById("start-month").value;
    let endDay = document.getElementById("end-month").value;
    let start = new Date(startDay);
    let end = new Date (endDay);
    let durasi = ( end.getMonth() + 1 ) - ( start.getMonth() + 1 ); 
    
    if(nodejs.checked) {
        nodejs = logonjs;   
    } else {
        nodejs = empty;
    }

    if(reactjs.checked) {
        reactjs =logorjs;
    } else {
        reactjs = empty;
    }

    if(nextjs.checked) {
        nextjs = logonextjs;
    } else {
        nextjs = empty;
    } 

    if(php.checked) {
        php = logophp;
    } else {
        php = empty;
    }
    
    

    image = URL.createObjectURL(image[0]); 
    console.log(image);
    let blog = {
        title,
        content,
        image,
        postAt: new Date (),
        author : "M ibnuh hakim",
        start,
        end,
        durasi,
        nodejs,
        reactjs,
        nextjs,
        php
    };

dataBlog.push(blog)
console.log(dataBlog);

renderBlog();
}

function renderBlog() {
    document.getElementById("contents").innerHTML = "";
  
    for (let index = 0; index < dataBlog.length; index++) {
      document.getElementById("contents").innerHTML += `
      <a href="post.html">
      <div class="anu">
          <div>
              <img src="${dataBlog[index].image}">
          </div>
              <div class="judul">${dataBlog[index].title}</div>
              <div>Durasi : ${dataBlog[index].durasi} bulan </div>
              <div class="detail-blog-content">
              <p>
                ${getFullTime(dataBlog[index].postAt)} | ${dataBlog[index].author}
              </p>
            </div>
              <div class="description">${dataBlog[index].content}</div>
              <div style="display: flex; font-size: 30px; color: black; font-weight: bold;">
              <div style="margin-left: 10px;"> 
                  ${dataBlog[index].nodejs} 
              </div>
              <div style="margin-left: 10px;">
                  ${dataBlog[index].reactjs} 
              </div>
              <div style="margin-left: 10px;">
                  ${dataBlog[index].nextjs} 
              </div>
              <div style="margin-left: 10px;">
                  ${dataBlog[index].php}
              </div>
          </div>
          <div>
              <div class="tombol">
                  <div>
                      <button class="btn-edit">Edit</button>
                  </div>
                  <div>
                      <button class="btn-delete">Delete</button>
                  </div>
              </div>
          </div>    
      </div>
      </a>
      `;
    }
  }

  function getFullTime(time) {

    let monthName = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    // console.log(monthName[8]);
  
    let date = time.getDate();
    // console.log(date);
  
    let monthIndex = time.getMonth();
    // console.log(monthIndex);
  
    let year = time.getFullYear();
    // console.log(year);
  
    let hours = time.getHours();
    let minutes = time.getMinutes();
    // console.log(minutes);
  
    if (hours <= 9) {
      hours = "0" + hours;
    } else if (minutes <= 9) {
      minutes = "0" + minutes;
    }
  
    return `${date} ${monthName[monthIndex]} ${year} ${hours}:${minutes} WIB`;
  }
  
  function getDistanceTime(time) {
    let timeNow = new Date();
    let timePost = time;
  
    // waktu sekarang - waktu post
    let distance = timeNow - timePost; // hasilnya milidetik
    console.log(distance);
  
    let milisecond = 1000; // milisecond
    let secondInHours = 3600; // 1 jam 3600 detik
    let hoursInDays = 24; // 1 hari 24 jam
  
    let distanceDay = Math.floor(
      distance / (milisecond * secondInHours * hoursInDays)
    ); // 1/86400000
    let distanceHours = Math.floor(distance / (milisecond * 60 * 60)); // 1/3600000
    let distanceMinutes = Math.floor(distance / (milisecond * 60)); // 1/60000
    let distanceSeconds = Math.floor(distance / milisecond); // 1/1000
  
    if (distanceDay > 0) {
      return `${distanceDay} Day Ago`;
    } else if (distanceHours > 0) {
      return `${distanceHours} Hours Ago`;
    } else if (distanceMinutes > 0) {
      return `${distanceMinutes} Minutes Ago`;
    } else {
      return `${distanceSeconds} Seconds Ago`;
    }
  }
  
  setInterval(function () {
    renderBlog();
  }, 10000);
  