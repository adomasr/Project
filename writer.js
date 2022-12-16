const loggedInName = JSON.parse(localStorage.getItem('loggedInName'));
const loginNameEl = document.getElementById('login-name-el');
//const logoutBtn = document.getElementById('logout-btn');    //copy to writer page
//const loginUrl = 'http://127.0.0.1:3000/a_p1/';             //copy to writer page
const saveBtn = document.getElementById('save');
const textArea = document.getElementById('text-area');
const userIndex = getUserObjectIndex(); //to function 'resume your work'
const mainData = JSON.parse(localStorage.getItem('mainData')); //to function 'resume your work'


loginNameEl.textContent = `Hello, ${loggedInName}`;

textArea.value = mainData[userIndex].diary; //to function 'resume your work'





/*
logoutBtn.addEventListener('click', function() {            //copy to writer page
  window.location.href = loginUrl;
  localStorage.removeItem('loggedInName');
})
*/


saveBtn.addEventListener('click', function() {
  const index = getUserObjectIndex();
  const mainData = JSON.parse(localStorage.getItem('mainData'));
  mainData[index].diary = textArea.value;
  localStorage.setItem('mainData', JSON.stringify(mainData));
});


//functions
function getUserObject() {
  const mainData = JSON.parse(localStorage.getItem('mainData'));
  for (let e of mainData) {
    if (e.name === loggedInName){
      return e;
    }
  }
} //delete


function getUserObjectIndex () {
  const mainData = JSON.parse(localStorage.getItem('mainData'));
  for (let i = 0; i < mainData.length; i++) {
    if (mainData[i].name === loggedInName) {
      return i;
    }
  }
}
