function Game()
{

// map arrays
    var yOne = [];
    var yTwo = [];
    var yThree = [];
    var yFour = [];
    var yFive = [];
    var ySix = [];
    
    // dialogue arrays
    var jarlKorstal = [];
    var belor = [];
    var guard = [];
    var tallBlondeMan = [];
    var jarlBalin = [];
    var estra = [];
    var jarlGervis = [];
    var eimmir = [];
    var littleBoy = [];
    var jeffBezos = [];
    
    // call dialogue functions
    SetJarlKorstal();
    SetBelor();
    SetGuard();
    SetTallBlondeMan();
    SetJarlBalin();
    SetEstra();
    SetJarlGervis();
    SetEimmir();
    SetLittleBoy();
    SetJeffBezos();
    
    // dialogue text functions
    function SetJarlKorstal()
    {
        jarlKorstal[1] = "Hello there friend!  I have a contract for you.  Would you please take this letter to Jarl Balin of Norbury?";
        jarlKorstal[2] = "Have you delivered the letter yet?";
        jarlKorstal[3] = "Thank you very much.";
        jarlKorstal[4] = "You shouldn't have done that. The guards draw their hatchets and embed them in your back before you can finish drawing your weapon.";
    }
    function SetBelor()
    {
        belor[1] = "Hi there! Do you have something for me?";
        belor[2] = "Yay! A scroll from Eimmir! I wonder what he will think of next. Thank you courier. You may be on your way now.";
      belor[3] = "Thank you courier.  You may be on your way now.";
        belor[4] = "You shouldn't have done that. The guards draw their hatchets and embed them in your back before you can finish drawing your weapon.";
    }
    function SetGuard()
    {
        guard[1] = "Watch yourself.";
        
        
        guard[4] = "But why? Guards always wear armor and carry weapons. They quickly knock you out and break your neck so they don't get blood anywhere.";
    }
    function SetTallBlondeMan()
    {
        tallBlondeMan[1] = "Halt! I need your help! I need a mirror in order to see my hair. But I cannot get one for myself in fear of messing up my hair. Would you find me a mirror?";
        tallBlondeMan[2] = "Go no further! Do you have my mirror yet?";
        tallBlondeMan[3] = "Oh thank you so much! Ah, yes, my hair is looking wonderful. Goodbye Sir mirror fetcher!";
        tallBlondeMan[4] = "Not smart. Tall Blonde Man loves his hair for a reason. Suddenly his hair grows quickly, moving as though it has a mind of its own. As the hair tightens around your neck you realize that the hair is quite marvelous.";
    }
    function SetJarlBalin()
    {
        jarlBalin[1] = "Hello there. I am expecting a letter from Jarl Korstal of Saffron. Do you have it for me?";
        
        jarlBalin[3] = "Thank you very much.  I suppose you must be off delivering more letters and such.  Here is a fine mirror so see yourself in.  But take this lantern, it's nearly dark out. (this lantern has no oil, but it's the thought that counts)";
        jarlBalin[4] = "Bad idea. Jarl Balin doesn't have guards for good reason. Balin pulls a knife from his belt and throws it at you before you can react. You would think about what you did if the knife wasn't embedded in your frontal lobe.";
      jarlBalin[5] = "Thank you very much Courier.  You may be on your way.";
    }
    function SetEstra()
    {
        estra[1] = "Ah, hello there. As a courier you are just the person I wanted to see. I need you to deliver this letter to Jarl Gervis in Clacton. He will see to your payment after the letter is delivered.";
            estra[2] = "Deliver the letter to Jarl Gervis and he shall see to your payment.";
        estra[3] = "Thank you very much Courier.";
        estra[4] = "Estra draws her bow and fires. You look down to see her arrow in your chest. But you look up when you hear her draw another arrow. Before your vision goes black you see her loose her arrow.";
    }
    function SetJarlGervis()
    {
        jarlGervis[1] = "I'm sorry I can't talk right now I'm waiting to hear about my business proposal from Estra in Norbury. Do you have it?";
        
        jarlGervis[3] = "Thank you very much! Hmm... Yes, I see... Well that means everything is in motion! You can recieve your payment in the small warehouse in the South East. Tell them I sent you and they will help you out.";
        jarlGervis[4] = "Before you can attack Jarl Gervis a bright light errupts from where Eimmir is standing. Suddenly you can't move, speak, or even breathe. You can still see and hear though. You look down and see that you have been transformed into a foot rest. I guess someone will find you useful.";
    }
    function SetEimmir()
    {
        eimmir[1] = "Oh, hello you. I need to deliver a scroll to Belor in Saffron. But I am much to busy with my research. I would explain but I'm afraid your small brain can't comprehend it. Here take this scroll to Belor.";
        eimmir[2] = "Why are you here? I thought your brain had evolved enough so you could find your way about. Did you deliver the scroll yet?";
        eimmir[3] = "Finally, that took you ages. When I was you're age I could've done it in half the time, on one foot. For your services you can have... this... prized weapon (He hands you this very old, and very rusty sword). It was definitly in some important battle. Now leave before I turn you into something useful.";
        eimmir[4] = "Truly foolish. Eimmir simple snaps his finger and your arms and legs turn to dust. At first you think you're spared, but soon you realize that you would've had just enough time to say some memorable line. What kind of magic death only kills you after you say some line?";
    }
    function SetLittleBoy()
    {
        littleBoy[1] = "Hey you! You wanna get past and cross the river? Not on my watch! Not while I'm stuck using this... this... STICK! I want a real sword! Bring me a real sword and I'll help you cross the river.";
        
        littleBoy[3] = "Yes! A real sword! I can't believe you were dumb enough to give a kid a real sword! Take this rope, it's attached to that branch so you can swing over the river. See ya!";
        littleBoy[4] = "Foolishly you assumed that this kid was weak because he uses a stick. But he is actually quite adept with it. He takes you down and starts beating you to death. As you lose consciousness you question why you attacked a child.";
    }
    function SetJeffBezos()
    {
        jeffBezos[1] = "Hi who are you? Were you sent by Jarl Gervis?";
        jeffBezos[2] = "Alright! I want to invite you onto the ground floor for the biggest company you've ever seen. You'll be making enough money to retire after three weeks. What do you say, are you in?";
        jeffBezos[3] = "Awesome it's great to have you on board. We are the USPS, the Ultimate Skyrim Postal Service. We deliver whatever people want, to whichever person they want. And they pay us for it. Now you can just sit back, and relax because the game is over.";
        jeffBezos[4] = "Suddenly a forklift impales you from behind. As you bleed out you wish you had invested earlier.";
    }
    
    // call functions
    SetYOne();
    SetYTwo();
    SetYThree();
    SetYFour();
    SetYFive();
    SetYSix();

    // map text functions
    function SetYOne()
    {
    yOne[3] = "Your Room: There is a small cot in one corner. It's small, a little uncomfortable, you can get a new one some other day. Across the room there is a small footlocker. On the wall hangs your bag along with your knife. It's not a mansion, but it's home.";
    yOne[7] = "Hut: This odd little hut seems abandoned. There is nothing but broken windows, a small vase of oil, and an empty bed frame.  You keep the oil for later.";
}
    function SetYTwo()
    {
    yTwo[1] = "Saffron Town Hall: There are two guards standing by the door. Ahead you see Jarl Korstal seated in the great hall. Sitting beside him is his adviser Belor.";
    yTwo[2] = "Saffron Town Center: You look around to see people hurrying about buying, selling, and talking. You see a path to the East, and the Town Hall to the West.";
    yTwo[3] = "East of Saffron Town Center: Your house is to the North. To the West you see Saffron's Town Center, and to the East you see a path.";
    yTwo[4] = "Fork in the Road: You come across a sign which points to the river in the East, Norbury in the South, and Saffron in the West.";
    yTwo[5] = "Forest Path: You come to a stop when Tall Blonde Man blocks the way.";
    yTwo[6] = "Forest Path:";
    yTwo[7] = "Forest Path: There is an oddly placed hut just North of you.";
    yTwo[8] = "Forest Path: As you're walking the path starts to turn. You can't see where the path leads but you hear a river up ahead.";
    // this is for after you give Blonde Man the mirror
    yTwo[10] = "Forest Path: This is the very spot where you helped that man with amazing hair.";
}
    function SetYThree()
    {
    yThree[2] = "West Cave: With the lantern lit you can see much better. You are in a smallish cave that is large enough to walk through. On the ground there are the tracks of someone who already passed through here.";
    yThree[3] = "West Cave: The hole turned out to be a cave. It's pretty dark though. You should probably turn on a light.";
    yThree[4] = "Forest Path: Over to the West you see something that looks like a hole.";
    yThree[8] = "Forest Path: You come to a stop when you see Little Boy swinging a stick around in the middle of the path.";
    // this is for after you give the little boy the sword
    yThree[10] = "River Bank: To the South is the raging river that you can't swim across. Luckily your rope swing is still there.";
}
    function SetYFour()
    {
    yFour[2] = "West Cave: The cave has gotten a little brighter, is that sunlight? You can clearly see that someone has been through here recently. Is this a cave or a tunnel?";
    yFour[4] = "Forest Path:";
    yFour[8] = "River: As you swing over the river you imagine Little Boy swinging and falling to certain death. That would be traumatic for anyone hearing or seeing the story. Luckily no one would ever write a story where a kid fell from a rope swing to their death.";
}
    function SetYFive()
    {
    yFive[2] = "Clacton Town Center: Nearly everyone is staring at you. You can almost see them thinking: Who is this gorgeous man who just appeared? He must be very smart since he found his way here all by himself. But alas, no one will speak their thoughts. To the South you see a small town hall.";
    yFive[4] = "Norbury Town Center: Some people are slowing down to look at you. Have they not seen a courier before. Or maybe they think you have mail for them. The Town Hall is just South of here.";
    yFive[8] = "River Bank: To the North is the river. Your rope still hangs there, waiting for you to swing on it once again. There is a path leading South of here.";
}
    function SetYSix()
    {
    ySix[2] = "Clacton Town Hall: The town hall was built into the side of a mountain. The outside made it look like a small house. But this great stone fortress is beautiful. Tall stone pillars, hanging crystal chandeliers. Over in the great hall you see Jarl Gervis seated in a throne made of marble. Guards stand by each pillar and door. The Jarl's court wizard, Eimmir, sits near the Jarl.";
    ySix[4] = "Norbury Town Hall: Inside you see Jarl Balin sitting at a table talking to Estra his advisor.";
    ySix[7] = "Small Warehouse: All around you are bags of mail, boxes of goods, and a pile of some weird crap. People are running around trying to organize these packages. Among the ruckus you see a man standing still watching you. His name tag says Jeff Bezos.";
    ySix[8] = "Forest Path: To the North you can still hear the river. But over to the West there is a large building. Didn't you hear about this place from someone?";
}

    // variables

    var xPosition = 3;
    var yPosition = 1;
    
    var helpMessage = "Input 'n' to go North, 'e' to go East, 's' to go South, 'w' to go west.  Or input 'talk (name of person)' to talk to someone, 'attack (name of person)' to attack someone, 'inv' to see your inventory,  'help' to display this message again, 'restart' to restart the game, or 'quit' to quit the game.";

    var gaveMirror = false;
    var gaveSword = false;
  var gaveJarlKorstalLetter = false;
  var gaveEstraLetter = false;
  var gaveEimmirScroll = false;
  var tallBlondeManThere = true;
  var littleBoyThere = true;

// javascript object
var inventory = {
    mirror:0,
    sword:0,
    lantern:0,
    oil:0
}
var dialogueOption = {
jarlKorstal:1,
belor:1,
guard:1,
tallBlondeMan:1,
jarlBalin:1,
estra:1,
jarlGervis:1,
eimmir:1,
littleBoy:1,
jeffBezos:1
}





var userAction;
    var element = document.getElementById("unorderedList");

game();

document.getElementById("user-input").onkeypress = function(event)
{
    if(event.keyCode == 13 || event.which == 13)
    {
        // gets input from user
        userAction = document.getElementById("user-input").value;
        getInput();
        
        //makes a new <li>
        var newListElement = document.createElement("li"); 
        var node = document.createTextNode(userAction); 
        newListElement.appendChild(node); 
        element.appendChild(newListElement);
        
        //Resets user-input to blank
        document.getElementById("user-input").value = ""; 
        
        userAction = userAction.toLowerCase();
        
        CheckAnswer(userAction);

        //Goes to bottom of scroll bar
        newListElement.scrollIntoView();
        
    }
}


function CheckAnswer(userAction)
{
    
    if (userAction == "look")
        {
            Look();
        }
        else if(userAction == "n")
        {
            North();
        }
        else if(userAction == "s" && xPosition == 8 && yPosition == 6)
        {
            output("You can't go that way.");
        }
        else if(userAction == "s")
        {
            South();
        }
        else if(userAction == "e")
        {
            East();
        }
        else if(userAction == "w")
        {
            West();
        }
        else if(userAction.includes('talk'))
        {
            Talk();
        }
        else if(userAction.includes('attack'))
        {
            Attack();
        }
        else if (userAction == "inv")
        {
            output("You have " + inventory.mirror + " mirrors, " + inventory.sword + " swords, " + inventory.lantern + " lanterns, " + inventory.oil + " oz of oil.");
        }
        else if (userAction == "help")
        {
            output(helpMessage);
        }
        else if (userAction == "restart")
        {
            Game();
        }
        else if (userAction == "quit")
        {
            return;
        }
        else
        {
            output("That was not a valid input");
        }
    
}// end of checkAnswer function


function Look()
    {
        document.getElementById("user-input").scrollIntoView();
        
      if (xPosition == 7 && yPosition == 5)
      {
          yPosition = 6;
        output("You can't go that way.");
      }
      
      
        if (yPosition == 1)
        {
            output(yOne[xPosition]);
        }
        else if (yPosition == 2)
        {
            if (xPosition == 5 && gaveMirror == true)
            {
                output(yTwo[10]);
            }
        else
        {
            output(yTwo[xPosition]);
        }
    }
    else if (yPosition == 3)
    {
        if (xPosition == 8 && gaveSword == true)
        {
            output(yThree[10]);
        }
        else
        {
            output(yThree[xPosition]);
        }
    }
    else if (yPosition == 4)
    {
        if (xPosition == 8 && gaveSword == false)
        {
            output("You can't go that way, you need to find a sword first.");
            yPosition = 3;
        }
        else
        {
            output(yFour[xPosition]);
        }
    }
    else if (yPosition == 5)
    {
        output(yFive[xPosition]);
    }
    else if (yPosition == 6)
    {
        output(ySix[xPosition]);
    }
        
        document.getElementById("user-input").scrollIntoView();
        
}// end of Look function
    

    // directional functions
    function North()
    {
        
    if (yPosition == 2 && yOne[xPosition] != "" && xPosition == 3 || xPosition == 7)
    {
        yPosition--;
        if (xPosition == 7)
        {
            inventory.oil = 1;
        }
        document.getElementById("user-input").scrollIntoView();
        Look();
    }
    else if (yPosition == 3 && xPosition == 4 || xPosition == 8)
    {
        yPosition--;
        document.getElementById("user-input").scrollIntoView();
        Look();
    }
    else if (yPosition == 4 && yThree[xPosition] != "")
    {
        yPosition--;
        document.getElementById("user-input").scrollIntoView();
        Look();
    }
    else if (yPosition == 5 && yFour[xPosition] != "")
    {
        yPosition--;
        document.getElementById("user-input").scrollIntoView();
        Look();
    }
    else if (yPosition == 6 && yFive[xPosition] != "")
    {
        yPosition--;
        document.getElementById("user-input").scrollIntoView();
        Look();
    }
    else
    {
        output("You can't go that way.");
    }
        
        
        
}// end of North function
    function South()
    {
        
    if (yPosition == 1 && yTwo[xPosition] != "")
    {
        yPosition++;
        document.getElementById("user-input").scrollIntoView();
        Look();
    }
    else if (yPosition == 2 && xPosition == 4 || xPosition == 8)
    {
        yPosition++;
        document.getElementById("user-input").scrollIntoView();
        Look();
    }
    else if (yPosition == 3 && yFour[xPosition] != "")
    {
        if (xPosition == 8 && gaveSword == false)
        {
            output("You can't go that way.  You need to find a sword first.");
        }
        else
        {
            yPosition++;
            document.getElementById("user-input").scrollIntoView();
            Look();
        }
    }
    else if (yPosition == 4 && yFive[xPosition] != "")
    {
        yPosition++;
        document.getElementById("user-input").scrollIntoView();
        Look();
    }
    else if (yPosition == 5 && ySix[xPosition] != "")
    {
        yPosition++;
        document.getElementById("user-input").scrollIntoView();
        Look();
    }
  else if (yPosition == 6 && xPosition == 8)
  {
      output("You can't go that way.");
  }
    else
    {
        output("You can't go that way.");
    }
        document.getElementById("user-input").scrollIntoView();
        
}// end of South function
    function East()
    {
        
        if(yPosition == 2 && xPosition < 8)
        {
            if (xPosition == 5 && gaveMirror == false)
            {
                output("You can't go that way.  You need to find a mirror.");
            }
            else
            {
                xPosition++;
                document.getElementById("user-input").scrollIntoView();
                Look();
            }
        }
        else if(yPosition == 3 && xPosition < 4)
        {
            xPosition++;
            document.getElementById("user-input").scrollIntoView();
            Look();
        }
        else if(yPosition == 6 && xPosition == 7)
        {
            xPosition++;
            document.getElementById("user-input").scrollIntoView();
            Look();
        }
        else
        {
            output("You can't go that way.");
        }
        document.getElementById("user-input").scrollIntoView();
        
    }// end of East function
    function West()
    {
        
        if(yPosition == 2 && xPosition > 1)
        {
            xPosition--;
            document.getElementById("user-input").scrollIntoView();
            Look();
        }
        else if(yPosition == 3 && 1 < xPosition && xPosition < 5)
        {
            if(xPosition == 3 && inventory.lantern == 0 || inventory.oil == 0)
            {
                output("You can't go that way until you have a lantern and some oil.");
            }
            else
            {
                xPosition--;
                document.getElementById("user-input").scrollIntoView();
                Look();
            }
        }
        else if(yPosition == 6 && xPosition == 8)
        {
            xPosition--;
            document.getElementById("user-input").scrollIntoView();
            Look();
        }
        else
        {
            output("You can't go that way.");
        }
        document.getElementById("user-input").scrollIntoView();
        
    }// end of West function


function Talk()
    {
      
      // Jarl Korstal
      if (userAction == "talk jarl korstal" && xPosition == 1 && yPosition == 2)
      {
          output(jarlKorstal[dialogueOption.jarlKorstal]);
        if (dialogueOption.jarlKorstal == 1)
        {
            dialogueOption.jarlKorstal = 2;
        }
        else if (dialogueOption.jarlKorstal == 2 && gaveJarlKorstalLetter == true)
        {
            dialogueOption.jarlKorstal = 3;
        }
      }
      
      // Belor
      else if (userAction == "talk belor" && xPosition == 1 && yPosition == 2)
      {
          output(belor[dialogueOption.belor]);
        if (dialogueOption.belor == 1 && dialogueOption.eimmir == 2)
        {
            output(belor[2]);
            dialogueOption.belor = 3;
            gaveEimmirScroll = true;
        }
      }
      
      // guard
      else if (userAction == "talk guard")
      {
          output(guard[1]);
      }
      
      // Tall Blonde Man
      else if (userAction == "talk tall blonde man" && tallBlondeManThere == true && xPosition == 5 && yPosition == 2)
      {
          output(tallBlondeMan[dialogueOption.tallBlondeMan]);
        if (dialogueOption.tallBlondeMan == 1)
        {
            dialogueOption.tallBlondeMan = 2;
        }
        else if (dialogueOption.tallBlondeMan == 2 && inventory.mirror == 1)
        {
            inventory.mirror = 0;
          gaveMirror = true;
          tallBlondeManThere = false;
          
          output(tallBlondeMan[3]);
        }
      }
      
      // Jarl Balin
      else if (userAction == "talk jarl balin" && xPosition == 4 && yPosition == 6)
      {
          output(jarlBalin[dialogueOption.jarlBalin]);
        if (dialogueOption.jarlBalin == 1 && dialogueOption.jarlKorstal == 2)
        {
            gaveJarlKorstalLetter = true;
          output(jarlBalin[3]);
          inventory.lantern = 1;
          inventory.mirror = 1;
          dialogueOption.jarlBalin = 5;
        }
        
      }
      
      // Estra
      else if (userAction == "talk estra" && xPosition == 4 && yPosition == 6)
      {
          output(estra[dialogueOption.estra]);
        if (dialogueOption.estra == 1)
        {
            dialogueOption.estra = 2;
        }
        else if (dialogueOption.estra == 2 && gaveEstraLetter == true)
        {
            dialogueOption.estra = 3;
          output(estra[3]);
        }
      }
      
      // Jarl Gervis
      else if (userAction == "talk jarl gervis" && xPosition == 2 && yPosition == 6)
      {
          output(jarlGervis[dialogueOption.jarlGervis]);
        if (dialogueOption.jarlGervis == 1 && dialogueOption.estra == 2)
        {
            gaveEstraLetter = true;
          dialogueOption.jarlGervis = 3;
          output(jarlGervis[3]);
        }
      }
      
      // Eimmir
      else if (userAction == "talk eimmir" && xPosition == 2 && yPosition == 6)
      {
          output(eimmir[dialogueOption.eimmir]);
        if (dialogueOption.eimmir == 1)
        {
            dialogueOption.eimmir = 2;
          
        }
        else if (dialogueOption.eimmir == 2 && gaveEimmirScroll == true)
        {
            output(eimmir[3]);
            inventory.sword = 1;
            dialogueOption.eimmir = 5;
            eimmir[5] = "Leave me.";
        }
      }
      
      // Little Boy
      else if (userAction == "talk little boy" && xPosition == 8 && yPosition == 3 && littleBoyThere == true)
      {
          output(littleBoy[dialogueOption.littleBoy]);
        if (dialogueOption.littleBoy == 1 && inventory.sword == 1)
        {
            output(littleBoy[3]);
            gaveSword = true;
          littleBoyThere = false;
          inventory.sword == 0;
        }
      }
      
      // Jeff Bezos
      else if (userAction == "talk jeff bezos" && xPosition == 7 && yPosition == 6)
      {
          output(jeffBezos[dialogueOption.jeffBezos]);
        if (dialogueOption.jeffBezos == 1 && dialogueOption.jarlGervis == 3)
        {
            dialogueOption.jeffBezos = 2;
        }
        else if (dialogueOption.jeffBezos == 2)
        {
            dialogueOption.jeffBezos = 3;
        }
      }
      
      // if you can't talk to them
      else
      {
          output("You can't talk to them here.");
      }
        
    }// end of Talk function
 
  function Attack()
    {
      // Jarl Korstal
      if (userAction == "attack jarl korstal" && xPosition == 1 && yPosition == 2)
      {
          output(jarlKorstal[4]);
      }      
      // Belor
      else if (userAction == "attack belor" && xPosition == 1 && yPosition == 2)
      {
          output(belor[4]);
      }      
      // guard
      else if (userAction == "attack guard")
      {
          output(guard[4]);
      }      
      // Tall Blonde Man
      else if (userAction == "attack tall blonde man" && tallBlondeManThere == true && xPosition == 5 && yPosition == 1)
      {
          output(tallBlondeMan[4]);
      }      
      // Jarl Balin
      else if (userAction == "attack jarl balin" && xPosition == 4 && yPosition == 6)
      {
                output(jarlBalin[4]);
      }      
      // Estra
      else if (userAction == "attack estra" && xPosition == 4 && yPosition == 6)
      {
          output(estra[4]);
      }      
      // Jarl Gervis
      else if (userAction == "attack jarl gervis" && xPosition == 2 && yPosition == 6)
      {
          output(jarlGervis[4]);
      }      
      // Eimmir
      else if (userAction == "attack eimmir" && xPosition == 2 && yPosition == 6)
      {
          output(eimmir[4]);
      }      
      // Little Boy
      else if (userAction == "attack little boy" && xPosition == 8 && yPosition == 3 && littleBoyThere == true)
      {
          output(littleBoy[4]);
      }
      // Jeff Bezos
      else if (userAction == "attack jeff bezos" && xPosition == 7 && yPosition == 6)
      {
          output(jeffBezos[4]);
      }      
      // if you can't attack them
      else
      {
          output("You can't attack them here.");
      }
        
    }// end of Attack function


function game()
{
    output(helpMessage);
}

function getInput()
{
    var userAction = document.getElementById("user-input").value;
}

function output(userAction)
{
    //makes a <li>
    var newListElement = document.createElement("li"); 
    //create a textNode
    var node = document.createTextNode(userAction); 
    newListElement.appendChild(node); 
    var element = document.getElementById("unorderedList");
    element.appendChild(newListElement);
    //resets user-input to blank
    document.getElementById("user-input").value = ""; 
    
    document.getElementById("user-input").scrollIntoView();
}// end of output function
    
    
}


Game();