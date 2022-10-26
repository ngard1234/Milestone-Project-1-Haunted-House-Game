window.onload = function() {
  var audio = document.getElementById("my_audio").play();
  audio.volume = 0.1;
  
}

//Sizes the viewport in the canvas tag.
var canvas = document.querySelector("#my_canvas");
canvas.width= window.innerWidth;
canvas.height= window.innerHeight;

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
behindDoor('assets/images/wolf.jpg', '200', '50');

doorClose('400','50');
behindDoor('assets/images/zombie-face.jpg','400', '50');

doorClose('600','50');
behindDoor('assets/images/ghost-face.jpg','600', '50');

doorClose('800','50');
behindDoor('assets/images/killer-clown.jpg','800','50');

doorClose('1000','50');
behindDoor('assets/images/female-vampire.jpg','1000','50');

doorClose('1200','50');
behindDoor('assets/images/female-apparition.jpg','1200','50');

doorClose('200','325');
behindDoor('assets/images/scared-boy.jpg','200','325');

doorClose('400','325');
behindDoor('assets/images/scared-girl.jpg','400','325');

doorClose('600','325');
behindDoor('assets/images/crying-female.jpeg','600', '325');

doorClose('800','325');
behindDoor('assets/images/wolf.jpg','800','325');

doorClose('1000','325');
behindDoor('assets/images/zombie-face.jpg','1000','325');

doorClose('1200','325');
behindDoor('assets/images/ghost-face.jpg','1200','325');

doorClose('200','600');
behindDoor('assets/images/killer-clown.jpg','200','600');

doorClose('400','600');
behindDoor('assets/images/female-vampire.jpg','400','600');

doorClose('600','600');
behindDoor('assets/images/female-apparition.jpg','600','600');

doorClose('800','600');
behindDoor('assets/images/scared-boy.jpg','800','600');

doorClose('1000','600');
behindDoor('assets/images/scared-girl.jpg','1000','600');

doorClose('1200','600');
behindDoor('assets/images/crying-female.jpeg','1200','600');


//doorClose('assets/images/Ranch_Slab_Exterior.jpg', 'back_of_door', '800', '325');
//backOfDoor(/*'assets/images/Ranch_Slab_Exterior.jpg',*/ 'door_close', '800', '325');
//backOfDoor(/*'assets/images/Ranch_Slab_Exterior.jpg',*/ 'door_close', '1000', '325');
//doorClose('assets/images/Ranch_Slab_Exterior.jpg', 'back_of_door', '1200', '325');
//backOfDoor(/*'assets/images/Ranch_Slab_Exterior.jpg',*/ 'door_close', '1200', '325');

//doorClose('assets/images/Ranch_Slab_Exterior.jpg', 'back_of_door', '200', '600');
//backOfDoor(/*'assets/images/Ranch_Slab_Exterior.jpg',*/ 'door_close', '200', '600');
//doorClose('assets/images/Ranch_Slab_Exterior.jpg', 'back_of_door', '400', '600');
//backOfDoor(/*'assets/images/Ranch_Slab_Exterior.jpg',*/ 'door_close', '400', '600');
//doorClose('assets/images/Ranch_Slab_Exterior.jpg', 'back_of_door', '600', '600');
//backOfDoor(/*'assets/images/Ranch_Slab_Exterior.jpg',*/ 'door_close', '600', '600');
//doorClose('assets/images/Ranch_Slab_Exterior.jpg', 'back_of_door', '800', '600');
//backOfDoor(/*'assets/images/Ranch_Slab_Exterior.jpg',*/ 'door_close', '800', '600');
//doorClose('assets/images/Ranch_Slab_Exterior.jpg', 'back_of_door', '1000', '600');
//backOfDoor(/*'assets/images/Ranch_Slab_Exterior.jpg',*/ 'door_close', '1000', '600');
//doorClose('assets/images/Ranch_Slab_Exterior.jpg', 'back_of_door', '1200', '600');
//backOfDoor(/*'assets/images/Ranch_Slab_Exterior.jpg',*/ 'door_close', '1200', '600');*/


//Opening and closing door on game page. Door animation is defined in CSS file.
  
  var getDoor = document.querySelectorAll(".door_close");
  for(var i=0; i<getDoor.length; i++){
    getDoor[i].addEventListener("click", toggleDoor);
   
  }

  

  function toggleDoor() {
  
  this.classList.toggle("door_open");
  }
//Array for the images behind the doors,

  const behindDoorImages = [
    {
      name: 'demon',
      img: 'assets/images/halloween-demon.jpg'
    },
    {
      name: 'demon',
      img: 'assets/images/halloween-demon.jpg'
    },
    {
      name: 'green-monster',
      img: 'assets/images/green-monster.jpg'
    },
    {
      name: 'green-monster',
      img: 'assets/images/green-monster.jpg'
    },
    {
      name: 'werewolf',
      img: 'assets/images/werewolf.jpg'
    },
    {
      name: 'werewolf',
      img: 'assets/images/werewolf.jpg'
    },
    {
      name: 'vampire',
      img: 'vampire.jpg'
    },
    {
      name: 'vampire',
      img: 'vampire.jpg'
    },
    {
      name: 'vampire',
      img: 'vampire.jpg'
    },
    {
      name: 'vampire',
      img: 'vampire.jpg'
    },
    {
      name: 'vampire',
      img: 'vampire.jpg'
    },
    {
      name: 'vampire',
      img: 'vampire.jpg'
    },
    {
      name: 'vampire',
      img: 'vampire.jpg'
    },
    {
      name: 'vampire',
      img: 'vampire.jpg'
    },
    {
      name: 'vampire',
      img: 'vampire.jpg'
    },
    {
      name: 'vampire',
      img: 'vampire.jpg'
    },
    {
      name: 'vampire',
      img: 'vampire.jpg'
    },
    {
      name: 'vampire',
      img: 'vampire.jpg'
    },
  ]
//Scramble images by swapping two images at a time.
  function scrambleImagesArray() {
    for(var i= 0; i<behindDoorImages.length; i++) {
      var randomIndex = Math.floor(Math.random() * behindDoorImages.length);
      var temp = behindDoorImages[i];
      behindDoorImages[i] = behindDoorImages[randomIndex];
      behindDoorImages[randomIndex] = temp;
    }
  }

  //Next:scramble the initial array game board layout//