let dataBlog = [];

function checkbox() {
    let nodejs = document.getElementById("node-js").value;
    let reactjs = document.getElementById("react-js");
    let nextjs = document.getElementById("next-js");
    let typescript = document.getElementById("typescript");
    let logonjs = new Image(50,50);
    let logorjs = new Image(50,50);
    let logonextjs = new Image(50,50);
    let logots = new Image(50,50);
    logonjs.src = 'nodejs.png';
    logorjs.src = 'reactjs.png';
    logonextjs.src = 'nextjs.png';
    logots.src = 'typescript.png';
    njs = document.getElementById("njs");
    rjs = document.getElementById("rjs");
    next = document.getElementById("next");
    ts = document.getElementById("ts");

    let empty="";
        if(nodejs.checked==true) {
            empty += njs.appendChild(logonjs);
        }

        if(reactjs.checked==true) {
            empty += rjs.appendChild(logorjs);
        }

        if(nextjs.checked==true) {
            empty += next.appendChild(logonextjs);
        }

        if(typescript.checked==true) {
            empty += ts.appendChild(logots);
        }
    }

    checkbox();

function blog(event) {
    event.preventDefault();

    let title = document.getElementById("title").value;
    let content = document.getElementById("description").value;
    let image = document.getElementById("input-blog-image").files;
    let start = document.getElementById("start-date").value;
    let end = document.getElementById("end-date").value;
    let durasi = start % end;
    
    

    image = URL.createObjectURL(image[0]);
    console.log(image);
    let blog = {
        title,
        content,
        image,
        start,
        end,
        durasi,
    };

    

dataBlog.push(blog)
console.log(dataBlog);

renderBlog();
}



function renderBlog() {

  
  
    for (let index = 0; index < dataBlog.length; index++) {
      document.getElementById("contents").innerHTML += `
      <div class="post" id="contents">
      <div class="anu">
      <div>
          <img src="${dataBlog[index].image}" alt="" style="width: 100%;">
      </div>
          <div class="judul">${dataBlog[index].title}</div>
          <div>Durasi : ${dataBlog[index].durasi} Months </div>
          <div class="description">${dataBlog[index].content}</div>
        <div class="logo" id="tampil">
        </div>
        <div>
        <div style="display: flex;">
          <div id="njs" style="margin-right: 20px;">${checkbox[index].njs}</div>
          <div id="rjs" style="margin-right: 20px;"></div>
          <div id="next" style="margin-right: 20px;"></div>
          <div id="ts" style="margin-right: 20px;"></div>
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
        </div>
      `;
    }
  }

  