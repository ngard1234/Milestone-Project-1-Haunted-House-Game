let doorChosenArr = [];// Array will store both doors that are selected.
let imageChosenArr = [];// Array will store both images that are selected.
let notMatchArr=[];
let behindDoorArr=[]
const scoreBoardResults= document.querySelector("#scorevalue");
const healthScoreResult= document.querySelector("#value");
let scorewinsArr=[];
let scorelost=0;

let introPage = document.querySelector('.intro');
introPage.addEventListener('click', ()=>{
  introPage.style.opacity = 0;
  setTimeout(()=>{
    introPage.classList.add('hidden');
  },610)
})
  

//var behindDoorArr=[];// Array will all the back of door elements.

window.onload = function() {
  var audio = document.getElementById("my_audio").play();
  audio.volume = 0.1; 
}

//Sizes the viewport in the canvas tag.
var canvas = document.querySelector("#my_canvas");
canvas.width= window.innerWidth;
canvas.height= window.innerHeight;

//Array for all the Image elements appended to behindDoorImages.
var behindDoorImages = [
  {
    name: 'werewolf',
    img: 'assets/images/wolf.jpg'
  },
  {
    name: 'werewolf',
    img: 'assets/images/wolf.jpg'
  },
  {
    name: 'zombie',
    img: 'assets/images/zombie-face.jpg'
  },
  {
    name: 'zombie',
    img: 'assets/images/zombie-face.jpg'
  },
  {
    name: 'ghost face',
    img: 'assets/images/ghost-face.jpg'
  },
  {
    name: 'ghost face',
    img: 'assets/images/ghost-face.jpg'
  },
  {
    name: 'killer clown',
    img: 'assets/images/killer-clown.jpg'
  },
  {
    name: 'killer clown',
    img: 'assets/images/killer-clown.jpg'
  },
  {
    name: 'vampire',
    img: 'assets/images/female-vampire.jpg'
  },
  {
    name: 'vampire',
    img: 'assets/images/female-vampire.jpg'
  },
  {
    name: 'apparition',
    img: 'assets/images/female-apparition.jpg'
  },
  {
    name: 'apparition',
    img: 'assets/images/female-apparition.jpg'
  },
  {
    name: 'scared boy',
    img: 'assets/images/scared-boy.jpg'
  },
  {
    name: 'scared boy',
    img: 'assets/images/scared-boy.jpg'
  },
  {
    name: 'scared girl',
    img: 'assets/images/scared-girl.jpg'
  },
  {
    name: 'scared girl',
    img: 'assets/images/scared-girl.jpg'
  },
  {
    name: 'crying woman',
    img: 'assets/images/crying-female.jpeg'
  },
  {
    name: 'crying woman',
    img: 'assets/images/crying-female.jpeg'
  },
]

//Scramble images position in the game grid board by swapping two images at a time.
function scrambleImagesArray() { 
  for(var i= 0; i<behindDoorImages.length; i++) {
    var randomIndex = Math.floor(Math.random() * behindDoorImages.length);
    var temp = behindDoorImages[i];
    behindDoorImages[i] = behindDoorImages[randomIndex];
    behindDoorImages[randomIndex] = temp;  
  }
  return behindDoorImages;
}
scrambleImagesArray();

//Creating the game grid-board layout.
//Function for reating and positioning elements, to add front door images, for the game grid-board layout.
function doorClose(leftpos, bottompos){
  let doorFront = document.createElement('canvas');
  doorFront.className = "door_close";    
  doorFront.style.left = leftpos +'px';
  doorFront.style.top = bottompos +'px';
  document.body.append(doorFront);  
return 
} 

//Function for creating and positioning elements for behind the doors and adding images.
function behindDoor(assetsrc, leftpos, bottompos){
  let backOfDoor = document.createElement('canvas');
  backOfDoor.className = "back_of_door";    
  backOfDoor.style.backgroundImage="url('"+assetsrc+"')";
  backOfDoor.style.left = leftpos +'px';
  backOfDoor.style.top = bottompos +'px';
  document.body.append(backOfDoor);  
return 
} 

//Execute game grid-board layout and behind the door images.
//To be simplified later.
doorClose('200','225');
behindDoor(behindDoorImages[0].img, '200', '225');

doorClose('450','225');
behindDoor(behindDoorImages[1].img,'450', '225');

doorClose('700','225');
behindDoor(behindDoorImages[2].img,'700', '225');

doorClose('950','225');
behindDoor(behindDoorImages[3].img,'950','225');

doorClose('1200','225');
behindDoor(behindDoorImages[4].img,'1200','225');

doorClose('1450','225');
behindDoor(behindDoorImages[5].img,'1450','225');


doorClose('200','525');
behindDoor(behindDoorImages[6].img,'200','525');

doorClose('450','525');
behindDoor(behindDoorImages[7].img,'450','525');

doorClose('700','525');
behindDoor(behindDoorImages[8].img,'700', '525');

doorClose('950','525');
behindDoor(behindDoorImages[9].img,'950','525');

doorClose('1200','525');
behindDoor(behindDoorImages[10].img,'1200','525');

doorClose('1450','525');
behindDoor(behindDoorImages[11].img,'1450','525');


doorClose('200','825');
behindDoor(behindDoorImages[12].img,'200','825');

doorClose('450','825');
behindDoor(behindDoorImages[13].img,'450','825');

doorClose('700','825');
behindDoor(behindDoorImages[14].img,'700','825');

doorClose('950','825');
behindDoor(behindDoorImages[15].img,'950','825');

doorClose('1200','825');
behindDoor(behindDoorImages[16].img,'1200','825');

doorClose('1450','825');
behindDoor(behindDoorImages[17].img,'1450','825');

//Assign a dataId of number (0-17) to front of door and back of door.
function dataId(){
  for(let i=0; i<behindDoorImages.length; i++){
    let door = document.querySelectorAll(".door_close");
    door[i].setAttribute('data-id',i);
    let behindDoor = document.querySelectorAll(".back_of_door");
    behindDoor[i].setAttribute('data-id',i);
    behindDoorArr.push(behindDoor[i]);
}
}

dataId();
//Assigning the addListener to the front-of-door, so they can be "click" selected.
//Use the event "click" to store the selected elements(front-of-door), the images back-of door, and theto compare for matching.
  let getDoor = document.querySelectorAll(".door_close");
  for(let i=0; i<getDoor.length; i++){
    getDoor[i].addEventListener("click", toggleDoor);
    getDoor[i].addEventListener("click", storeImage);
    getDoor[i].addEventListener("click", compareImages);
   // getDoor[i].addEventListener("click", countdown);  
    
  }

  //When click event trigger, front of door opens.
  function toggleDoor() {
    this.classList.toggle("door_open");
  }

//When click event trigger, chosen back-of-door images, married to front-of-door, are stored.
  function storeImage() {
    var doorId=this.getAttribute('data-id');
    imageChosenArr.push(behindDoorImages[doorId].name);
    doorChosenArr.push(this); 
    //console.log(this);
    console.log(doorChosenArr, "storeImage");
    console.log(imageChosenArr, "storeImage");
    
    }

  function compareImages(){
    if (imageChosenArr.length === 2){
      
        if(imageChosenArr[0] === imageChosenArr[1]){
          console.log(imageChosenArr,"both images are the same.");
          scorewinsArr.push(imageChosenArr[0]);
          scoreBoardResults.textContent= scorewinsArr.length;
          doorChosenArr.shift();
          doorChosenArr.shift();
          imageChosenArr= [];
          if(scorewinsArr.length ==9){
            scoreBoardResults.textContent="🎇Congratulations! You have won!!🎇";        
          }
          }
          else if(imageChosenArr[0]!== imageChosenArr[1]){
           console.log(imageChosenArr,"both images are NOT the same.");
           notMatchArr.push(imageChosenArr[0]);
           notMatchArr.push(imageChosenArr[1]); 
           scorelost++; 
           //alert("💀Your doors didn't match.You are slowly dying💀")
           //pumkin="🎃 "
           notMatchArr.push(imageChosenArr[0]);
           healthScoreResult.textContent = scorelost;
           closedoor();
          }
          
        }
      }
      
    function closedoor(){
      setTimeout(()=>{
        console.log(imageChosenArr, "before doors are closes");
        console.log('door close');
        doorChosenArr[0].classList.toggle("door_open");
        doorChosenArr[1].classList.toggle("door_open");
        console.log(imageChosenArr, "after door close");
        doorChosenArr.length=0;
        imageChosenArr.length=0;
      }, 2000);
    }


//Timer countdown & function startTimer.
let numberOfClicks = 0;
function countdown(){
  numberOfClicks=+ 1;
    if (numberOfClicks = 1) {
      startTimer();
    }
}

  document.getElementById('timer').innerHTML = 04 + ":" + 59;

  function startTimer() {
    var presentTime = document.getElementById('timer').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if(s==59){m=m-1}
    if(m<0){
    alert("Time's up, you have lost the game!! Try again later.")
      return
    }
  
    document.getElementById('timer').innerHTML =
      m + ":" + s;
    //console.log(m)
    setTimeout(startTimer, 2000);
  
  }

  function checkSecond(sec) {
    if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
    if (sec < 0) {sec = "59"};
    return sec;
  }



//Reset the arrays for chosen door and images, so player can select another pair of doors.   
function reset(){
  
  doorChosenArr = [];
  console.log(doorChosenArr);
  imageChosenArr = [];
  console.log(imageChosenArr);
  notMatchArr=[];
  console.log(notMatchArr);
  behindDoorArr=[]
  console.log(behindDoorArr);
  scorewinsArr=[];
  console.log(scorewinsArr);
  scoreBoardResults.textContent= scorewinsArr.length;
  scorelost=0;
  console.log(scorelost);
  healthScoreResult.textContent = scorelost;
  
  scrambleImagesArray();
  let resetDoor = document.querySelectorAll(".door_open")
  for (i=0; i<resetDoor.length; i++){
    resetDoor[i].classList.toggle("door_open");
  }
  }
