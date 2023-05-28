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
    let startDay = document.getElementById("start-date").value;
    let endDay = document.getElementById("end-date").value;
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

  
  
    for (let index = 0; index < dataBlog.length; index++) {
      document.getElementById("contents").innerHTML += `
      <div class="anu">
        <div>
          <img src="${dataBlog[index].image}" alt="" style="width: 100%;">
        </div>
        <div class="judul">
            ${dataBlog[index].title}
        </div>
        <div>
            Durasi : ${dataBlog[index].durasi} bulan 
        </div>
        <div class="description">
            ${dataBlog[index].content}
        </div>
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
          <div class="tombol">
              <div>
                  <button class="btn-edit">Edit</button>
              </div>
              <div>
                  <button class="btn-delete">Delete</button>
              </div>
          </div>
          </div>
      `;
    }
  }

  