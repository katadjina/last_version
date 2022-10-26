const draggableListItems = document.querySelectorAll('.draggable-list li');
const endMessage = document.getElementById('endMessage');


//Points counter  // Either 0 or 1  //

let PCpoints = 0;
console.log(PCpoints);



//current element being dragged


let selectedId;

//target phrase 
let dropTargetId;

//counter for correct phrases
let matchingCounter = 0;


addEventListener();

function dragStart() {
    selectedId = this.id;
    //console.log(selectedId);
}


function dragEnter() {
    this.classList.add('over');
}


function dragLeave() {
    this.classList.remove('over');
}

function dragOver(ev) {
    ev.preventDefault();
}

function dragDrop() {
    dropTargetId = this.id;
    //console.log(dropTargetId);

    if (checkForMatch(selectedId, dropTargetId)) {
        document.getElementById(selectedId).style.display = 'none';
        document.getElementById(dropTargetId).style.display = 'none';
        matchingCounter++;
    }

    if (matchingCounter === 8 ) {
        endMessage.style.display = 'block';
        PCpoints = 1;
        console.log(PCpoints);
    }


    this.classList.remove('over');

}


function checkForMatch(selected, dropTarget) {
    switch (selected) {
        case 'e1':
            return dropTarget === 's1' ? true : false;
        case 'e2':
            return dropTarget === 's2' ? true : false;
        case 'e3':
            return dropTarget === 's3' ? true : false;
        case 'e4':
            return dropTarget === 's4' ? true : false;
        case 'e5':
            return dropTarget === 's5' ? true : false;
        case 'e6':
            return dropTarget === 's6' ? true : false;
        case 'e7':
            return dropTarget === 's7' ? true : false;
        case 'e8':
            return dropTarget === 's8' ? true : false;

        default:
            return false;
    }
}





function addEventListener() {
    draggableListItems.forEach(item => {
        item.addEventListener('dragstart', dragStart);
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('drop', dragDrop);
        item.addEventListener('dragover', dragOver);
        item.addEventListener('dragleave', dragLeave);
    })
}


	



// TIMER    //PLAY BUTTON starts the timer

//let view = false;

let time = document.getElementById('time');

let dis = document.getElementById("game");
let plButton = document.getElementById("start");



//Determine time play
let num = 15;

const afficheTemps = function(){
   time.innerHTML = num;
   if (num === 0){
    time.innerHTML = "timeout!";
    clearInterval(interval);
    dis.style.display =  'none';
    plButton.style.display = 'none';
    if (num < 5){
        time.style.color = 'red';
    }
   }    
//affichage

if (num > 0){
   dis.style.display =  'block';
  }

}

    


const countdown = function(){
    interval = setInterval(
        function(){
            num--;
            afficheTemps();
        },
        1000
    );

}





















