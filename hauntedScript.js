var doorChosen = [];// Array will store both the door that are open.

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


/*
function dataId(){
  for(var i=0; i<behindDoorImages.length; i++){
    closeDoor.setAttribute('data-id',id);
    behindDoor.setAttribute('data-id',id);
}
 console.log()
}

dataId();*/

//Array for the images behind the doors, 
//Scramble images by swapping two images at a time.
function scrambleImagesArray() {
  for(var i= 1; i<behindDoorImages.length; i++) {
    var randomIndex = Math.floor(Math.random() * behindDoorImages.length);
   // console.log(i);
    var temp = behindDoorImages[i];
    //console.log(temp);
    //console.log(behindDoorImages[i]);
    behindDoorImages[i] = behindDoorImages[randomIndex];
    behindDoorImages[randomIndex] = temp; 
    //console.log(randomIndex);
    //console.log(behindDoorImages[randomIndex]);
    //console.log(behindDoorImages[i]);
    //console.log(temp);
    //console.log(behindDoorImages)
    
  }
  return behindDoorImages;
}
scrambleImagesArray()
//console.log(behindDoorImages)


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
doorClose('200','50');
behindDoor(behindDoorImages[0].img, '200', '50');

doorClose('400','50');
behindDoor(behindDoorImages[1].img,'400', '50');

doorClose('600','50');
behindDoor(behindDoorImages[2].img,'600', '50');

doorClose('800','50');
behindDoor(behindDoorImages[3].img,'800','50');

doorClose('1000','50');
behindDoor(behindDoorImages[4].img,'1000','50');

doorClose('1200','50');
behindDoor(behindDoorImages[5].img,'1200','50');

doorClose('200','325');
behindDoor(behindDoorImages[6].img,'200','325');

doorClose('400','325');
behindDoor(behindDoorImages[7].img,'400','325');

doorClose('600','325');
behindDoor(behindDoorImages[8].img,'600', '325');

doorClose('800','325');
behindDoor(behindDoorImages[9].img,'800','325');

doorClose('1000','325');
behindDoor(behindDoorImages[10].img,'1000','325');

doorClose('1200','325');
behindDoor(behindDoorImages[11].img,'1200','325');

doorClose('200','600');
behindDoor(behindDoorImages[12].img,'200','600');

doorClose('400','600');
behindDoor(behindDoorImages[13].img,'400','600');

doorClose('600','600');
behindDoor(behindDoorImages[14].img,'600','600');

doorClose('800','600');
behindDoor(behindDoorImages[15].img,'800','600');

doorClose('1000','600');
behindDoor(behindDoorImages[16].img,'1000','600');

doorClose('1200','600');
behindDoor(behindDoorImages[17].img,'1200','600');

//function closeDoor(){
  var getDoor = document.querySelectorAll(".door_close");
  //return getDoor
//}

  for(var i=0; i<getDoor.length; i++){
    getDoor[i].addEventListener("click", toggleDoor);
    //getDoor[i].addEventListener("click", doorCompare);
    
  }

 
  //console.log(doorChosen);

  function toggleDoor() {
    this.classList.toggle("door_open");
  }

  /*function doorCompare() {
    var doorId=this.getAttribute('data-id');
    doorChosen.push(behindDoorImages[doorId]);
    if (behindDoorImages.length === 2){
      if(behindDoorImages[0] === behindDoorImages[1]){
        console.log("Both doors are the same");// score to be added to display
      }else{document.querySelectorAll(".door_close") }
    }
  }*/

//you to add many events to the same element, without overwriting existing events:
//element.addEventListener("click", myFunction);
//element.addEventListener("click", mySecondFunction);//let a=event.target.doorChosen.push(getDoor[i]);
  
//function hide(evt) {
// evt.target refers to the clicked <li> element
// This is different than evt.currentTarget, which would refer to the parent <ul> in this context
//evt.target.style.visibility = 'hidden';