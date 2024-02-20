
//reveal effect --------------------------------------------------

/*function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  
  // To check the scroll position on page load
  reveal();
*/


// scroll event to show/hide the back to top button dynamically -------
  document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("backToTopBtn");
   // backToTopBtn.addEventListener("click", goToTop);
  
    window.onscroll = function() {
      if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
      } else {
        button.style.display = "none";
      }
    };
  
    button.onclick = function() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };

    const goToTop = () => {
      document.body.scrollIntoView({
        behavior: "smooth"
      });
    };
    
  });


/*
for the Favorites button element: 
1. Create buttons for each of the recipes
2. when clicked, the container holding the image and the caption and the link are stored locally
3. the locally stored container is stored in an array
4. with a js function, that array is displayed in favorites.html
*/

var addItemId = 0;
function addToFavorites(item){
  addItemId +=1;
  var selectedItem = document.createElement('div');
  selectedItem.classList.add('favoritedImg');
  selectedItem.setAttribute('id', addItemId);

  var img = document.createElement('img');
  img.setAttribute('src', item.children[0].currentSrc);

  var link = document.createElement('div');
  link.innerText = item.children[0].innerText;

  var title = document.createElement('div');
  title.innerText = item.children[1].innerText;

  var delBtn = document.createElement('button');
  delBtn.innerText = 'Delete';
  delBtn.setAttribute('onclick', 'del('+addItemId+')');
  var cartItems = document.getElementById('title');
  selectedItem.append(img);
  selectedItem.append(link);
  selectedItem.append(title);
  selectedItem.append(delBtn);
  cartItems.append(selectedItem);

}

function del(item){
  document.getElementById(item).remove();

}



