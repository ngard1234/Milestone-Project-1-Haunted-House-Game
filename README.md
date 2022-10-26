# Milestone-Project-1-Haunted-House-Game

Objective:

Save and release as many captured visitors and kill as many monsters:

Prologue:

The haunted house have captured visitors over the years. You are now trapped and destined to become permanent guest of the haunted house. Your tasks is to rescued as many visitors as possible to escape the haunted house. The captured visitor body and spirit has been separated. Match the body to the spirit to set the free. Choose the wrong door match and you are DDDDooooommed. You have three chances. Third wrong guess and you will be a permeant guest. You die. ( image of your body and sprit separating)

Consequences:
	
With each wrong guess you body is attacked by what’s behind the door. Last wrong guess and you die.[Music: when wrong door is picked for consequence.]

With each wrong guess, your body decays. [Music: Body decays.] 

Players:

Two players or AI:

Each player have an avatar. With four sprite images: Normal, infected first lost, infected second lost, and infected third lost.

When the player is infected and then makes a corrected pick, he reverts back to and healthier image and gain health point. 

Each player will take turns picking two doors. The player that free the most visitors wins. 
The Games is played three time for the finale winner. 
Sometime the Haunted house cheats.

Who goes first:  Coin flip.

Entry Page:
[Static page]
[Dark green background Image]

“Welcome to the Halloween Haunted House
“Enter at you own risk.” 

[Two ‘3d’ buttons : (Button 1: Enter) (Button 2: Leave)] (Both buttons are the same functions. The haunted house cheats)


{Event Listener} (Button click take you to the next page)

Introduction Page and Player Selection:

[Background music playing: “Twin-Musicom-Spooky-Ride.mp3”]

Introduce the history of the haunted house: 
[Scrolling text banner that repeats]


Choose one  or two player:
{Event Listener}(Botton “ONE”: play against AI (haunted house), Button 
“TWO”: play against another player)

(Button click takes you to Game Page)



Game Page:


Layout:

[Background music playing : Spook5.mp3]
[Background Image: creepyroom.jpeg]

Top of page: Display scores for player(s) (one and two) and Health points.	
	
12 Door : 4 x 3 matrix with doors .  [4 x 3 matrix Array : doors ]

Sound:
Opening introduction. 
Doors squeaks when open.
When the wrong door is picked.
When the player dies.
When the right door is picked.
When door opens ambient sounds from the room.
Gif image of a monsters attacking player.
Background haunted house sounds. (Always on)



Actions:

All doors opening and closing with monsters and trapped visitors behind them. 

When all the doors close, the images behind the doors schuffles.

When player click on a door , his avatar walks from the right of the screen, to the door and  door opens.

Then player clicks on another door. And avatar walks to the other door.

If the player picks two images that are the same, the player scores a point.

If the Player picks two same visitor images, the player score a point and the visitor escape the haunted house.

If the player picks two different images the player losses and player health degrades loosing Health points: Player two or the AI turn to play.

If the player picks a monster on first pick: he will loose health point and will  have to pick the same monster to recover health point.

When it’s player two turns , player one avatar disappears. Player 2 avatar walks on from the left of the window toward the door.

The player with the most points wins and the looser is captured by the haunted house.

