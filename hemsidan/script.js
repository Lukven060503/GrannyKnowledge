// Add event listener to the close button at the top
function Closebutton1(){
  document.getElementById('blackBar').style.display = 'none';
}
function Closebutton(){
  document.getElementById('whiteBar').style.display = 'none';
}
function AcceptCookies() {
    document.getElementById('whiteBar').style.display = 'none';
}

function showContent(contentId) {
    // Hide all content divs
    var contentDivs = document.querySelectorAll('.container');
    contentDivs.forEach(function(div) {
      div.classList.add('hidden');
    });

    // Show the selected content div
    var selectedDiv = document.getElementById(contentId);
    selectedDiv.classList.remove('hidden');
  }
// Add event listener to the close button at the bottoma
