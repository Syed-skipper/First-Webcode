var div = document.createElement("div");
div.setAttribute("class", "container justify-content-center");

var h1 = document.createElement("p");
h1.setAttribute("id", "para");
h1.innerHTML = "Brewery Search";
div.append(h1);

var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "search-input");
input.setAttribute("placeholder", "what are you looking for?");

var button = document.createElement("button");
button.setAttribute("type", "button");
button.setAttribute("id","search-btn");
button.setAttribute("class", "btn btn-primary");
button.innerHTML = "Search";
button.addEventListener("click", foo);

var active = document.createElement("div");
active.setAttribute("class", "row");
active.setAttribute("id", "active");

div.append(input, button,active);
document.body.append(div);

async function foo() {
  try {
    let res = document.getElementById("search-input").value;
    let res1 = `https://api.openbrewerydb.org/breweries/search?query=${res}`;
    let res2 = await fetch(res1);
    let url1 = await res2.json();
    for (var i in url1) {
      var colm = document.createElement("div");
      colm.setAttribute("id", "column");
      colm.setAttribute("class", "col-sm-6 col-lg-4 col-xl-3 mb-4");
      active.append(colm);
      colm.innerHTML += `
      <div class="card text-center h-100">
       <div class="card-header text-left ">
       <p class="card-text">${url1[i].name}<br> <b>${url1[i].brewery_type}</b></p>
       </div>
        <div class="card-body text-left">
          <p class="card-text "><b>Address</b> : ${url1[i].city}, ${url1[i].state}</p>
          <p class="card-text"> <b>Website</b> : ${url1[i].website_url}</p>
         </div>
         <div class="card-footer text-left">
         <p class="card-text"><b> Phone No : ${url1[i].phone}</b></p>
       </div>
        </div>`;
    }
  } catch (error) {
    alert(error);
  }
}

let inp = document.getElementById("search-input");
inp.addEventListener("keyup", function(x) {
  x.preventDefault();
  if (x.key === 'Enter') {
    document.getElementById("search-btn").click();
  }
  
  });

