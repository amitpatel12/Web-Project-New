showNotes();

let addBtn = document.getElementById('addBtn');

addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let addTitle = document.querySelector('#addTitle');
    let notes = localStorage.getItem("notes")

    // console.log(addTitle);

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        title: addTitle.value,
        text: addTxt.value

    }

    notesObj.push(myObj)
    localStorage.setItem("notes", JSON.stringify(notesObj))
    addTxt.value = "";
    addTitle.value = "";
    // console.log(notesObj)
    showNotes();
})


// function to show element from localstorage
function showNotes() {
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html = ""
    notesObj.forEach(function (element, index) {
        let a = new Date;
        html += `
        <div class="noteCard">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.text}</p>
                    <div class="card-btn-cnt"> 
                        <button id ="${index}" onclick ="deleteNote(this.id)" class="btn btn-primary del-btn">Delete</button>
                        <button id ="${index}" onclick ="deleteNote(this.id)" class="btn btn-primary edit-btn">Edit</button>
                    </div>
                    <div>
                        ${a.toDateString()}
                    </div>
                </div>
            </div>
        
        `;

    });

    let notesElm = document.getElementById('notes')
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `<span class="nothing-msg"> 😒 Nothing to show! Add a note</span>`
    }

}


// function to delete node

function deleteNote(index) {
    console.log("I am deleting", index)

    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj))
    showNotes();
}


let search = document.getElementById('searchTxt');
search.addEventListener('input',function(){
    let inputVal = search.value.toLowerCase();

    // let inputVal = search.value.toLowerCase();
    // console.log('input event fired!',inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    let note_cnt = document.getElementsByClassName('note-container');
    let main_cnt = document.getElementsByClassName('main_cnt');
    Array.from(noteCards).forEach(function(element){
        let cardtitle = element.getElementsByTagName('h5')[0].innerText;
        // console.log(cardTxt);
        console.log(element.getElementsByTagName('h5'))

       
            // note_cnt.style.margin = '100px 10px';
            // main_cnt.style.display = 'flex';

            // note_cnt.style.backgroundColor = "red";

        if(cardtitle.includes(inputVal)){
            element.style.display = 'block';
            
        }
        else{
            element.style.display = 'none';
        }
    })
})