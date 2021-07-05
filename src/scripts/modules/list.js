import writtenNumber from 'written-number';

export const encounters = [
  {
    challenge: (num) => {
      return `At the beginning of your upkeep phase out each creature you control. At the beginning of you end step phase in each creature you control.`
    },
    reward: (num) => {
      return `When you leave this room exile each creature you creature you control and then return it to the battlefield under your control. Then end the turn.`
    },
    description:  `One of your party attempt to walk across the room. A crackling electric energy fills the room. The party member vanishes. Moments later all the hairs on your body begin to stand on end a flash of light and the party member is back looking dazed but no worse for wear.`,
  },

  {
    challenge: (num) => {
      return `You may not leave this room. Tap any number of creatures you control with total power ${num} or more: You may leave this room until end of turn.`
    },
    reward: (num) => {
      return `Put a +1/+1 counter on up to ${num} target creature${num > 1 ? "s" : ""}. Then end the turn.`
    },
    description:  `That door seems braced from the other side. Going to really take some force to break it down.`,
  },

  {
    challenge: (num) => {
      return `When you enter this room each creature you control takes ${num - 5 < 2 ? 1 : num - 5} damage.`
    },
    reward: (num) => {
      return `When you leave this room create ${num - 5 < 2 ? 1 : num - 5} clue token${num - 5 < 2 ? "" : "s"}. Then end the turn.`
    },
    description:  `The a tile drop out from the floor into a dark abyss, then another, and another. Suddenly the whole floor is collapsing!`,
  },

  {
    challenge: (num) => {
      return `At the beginning of your end step sacrifice ${num - 5 < 2 ? 'one' : writtenNumber(num - 5)} creature${num - 5 < 2 ? "" : "s"}. Whenever you cast more than three spells in a turn you may move to an adjacent room.`
    },
    reward: (num) => {
      return `When you leave this room create a clue token for each creature you sacrificed in it. Then end the turn.`
    },
    description:  `The walls are closing in! Quickly brace them with whatever you can find!`,
  },

  {
    challenge: (num) => {
      return `At the beginning of your upkeep you take ${num - 5 < 2 ? 'one' : writtenNumber(num - 5)} damage. At the beginning of your endstep you may pay ${num - 5 < 2 ? 1 : num - 5}. If you do, you gain ${num - 5 < 2 ? 'one' : writtenNumber(num - 5)} life.`
    },
    reward: (num) => {
      return `When you leave this room you may sacrifice any number of non basic lands. For each land sacrificed this way create 5 treasure tokens. Then end the turn.`
    },
    description:  `As you enter a large black walled room a large mechanical eye hanging from th e ceiling turns to face you. You immedtely hear a humm climbing in pitch. Seconds later a heat rays reaches out to incinerate you and your party.`,
  },
  {
    challenge: (num) => {
      return `At the beginning of your endstep, create ${writtenNumber(num)} 1/1 red goblin token creature${num > 1 ? "s" : ""}. They fight one of your creatures chosen at random.`
    },
    reward: (num) => {
      return `When you leave this room create ${num - 3 < 2 ? 1 : num - 3} treasure token${num - 3 < 2 ? "" : "s"}. Then end the turn.`
    },
    description:  `Ahead of you a small filthy goblin emerges from behind some rubble. She looks just as suprised to see you as you are to see her. This only lasts a moment before she grabs a twisted horn hanging from around her kneck and lets loose two loud bursts of "noise" before diving back into the a small hole in the wall. Prepare yourselves for battle!`,
  },
  {
    challenge: (num) => {
      return `At the beginning of your endstep create ${writtenNumber(num)} 2/2 black zombie token creature${num > 1 ? "s" : ""} tapped. Whenever a zombie you control becomes untapped you lose 1 life and it fights the creature you control with the greatest power. Tap ${num*2} untapped zombies you control. Return a creature from your graveyard to the battlefield tapped. It is a zombie in addition to its other types.`
    },
    reward: (num) => {
      return `When you leave this room create ${num - 3 < 2 ? 1 : num - 3} food token${num - 3 < 2 ? "" : "s"}. Then end the turn.`
    },
    description:  `Weary from your travels you are happy to have finally arrived at what seems to be a safe room. It seems to be dinner time and you are exited to eat anything, even your trail rations! As you enter and start to settle in you immeditaly become aware of a stench. Something is terribly wrong here. You don't see or hear anything until a refuse pile begins to move. It immeditaly becomes clear that what you thought was discarded, rotting rags in the low light was in fact a pile of corpses that are now rising. Before you can flee the undead pour from the surrounding dungeon. The zombies attack!`,
  },
  {
    challenge: (num) => {
      return `At the bginning of your upkeep you lose ${num - 3 < 2 ? 1 : num - 3} life, draw ${num - 3 < 2 ? 1 : num - 3} cards, and each opponent gains ${num - 3 < 2 ? 1 : num - 3} life. At the beginning of your endstep discard ${num - 3 < 2 ? 1 : num - 3} card${num - 3 < 2 ? "" : "s"}.`
    },
    reward: (num) => {
      return `When you leave this room create ${num} treasure token${num > 1 ? "s" : ""}. Then end the turn.`
    },
    description:  `As you trudge along a muddy well tread path in a cave portion of the dungeon you hear a series of bird calls. "That's odd" remarks one of your party members. Before you are able to identify the origin of these calls a massive man steps out from behind a large stelagtite brandishing a giant spiked club. He recommends that you give up all of your gold without a fight. When you reach for your weapons the large bandit looks suddenly enraged as he commands his band of scum and villiany to attack. A number of other bandits reveal step from the shadows. This might be a tougher fight that you had first though.`,
  },
  {
    challenge: (num) => {
      return `At the beginning of your turn create ${writtenNumber(num)} 1/1 green Saproling token creature${num > 1 ? "s" : ""}. When there are ${writtenNumber(num*2)} or more Saprolings created this way they fight the creature you control with the greatest toughness. If that creature is put into a graveyard this turn, create 1/1 green Saproling token creatures equal to it's toughness.`
    },
    reward: (num) => {
      return `When you leave this room create ${num - 3 < 2 ? 1 : num - 3} food token${num - 3 < 2 ? "" : "s"}. Then end the turn.`
    },
    description:  `A small creature crawls out of a hollow rotting mushroom stump. It is covered so thickly in moss, mold, and fungus that you are unsure if there is a creature underneath. In a chittering voice it says "Nothing personal but the forest must feed".`,
  },
  {
    challenge: (num) => {
      return `At the end of your turn tap ${writtenNumber(num)} creatures you control. Whenever a creature you control becomes untapped mill the top card of your library.`
    },
    reward: (num) => {
      return `When you leave this room create ${num} clue token${num > 1 ? "s" : ""}. Then end the turn.`
    },
    description:  `You find yourslf in a large step well. You begin to decend towards the bottom seeing a stairway up the other side. After a couple minutes  you hear a rumbling in the distance. Then you feel it. A rectangular openning along the length of the rooms ceiling begins to gush water. Within moments you and your party are swiming for your lives.`,
  },
  {
    challenge: (num) => {
      return `While in this room, blue creatures you control get -3/-0. Red creatures you control get +3/0. At the beginning of your upkeep create a ${num}/${num} green ooze token. It fights the creature with the greatest power on the battlefield. Then exile the top ${num} cards of your library. You may play those cards until end of turn.`
    },
    reward: (num) => {
      return `When you leave this room create ${num - 3 < 2 ? 1 : num - 3} food token${num - 3 < 2 ? "" : "s"}. Then end the turn.`
    },
    description:  `You find yourself in a natural cave formation covered in luminecent fungi, lichen, and moss. Wondering along a small path you start to smell smoke. Suddenly a massive patch of flaming slimey moss hurdles past you and smashes into a massive stelagtite. That was no normal moss says one of your party. Without any other warning fire begins to spring up all around you, as the cave begins to move and ungulate, no longer rooted to the ground. You have stumbled into a battle between an Elemental Shamman and the very biome itself. Chaos reigns as the fire spreads!`,
  },
  {
    challenge: (num) => {
      return `Whenever you play a spell counter it and create 1/1 blue Bird tokens with flying equal to the mana value of the countered spell. Whenever a creature with flying attacks, its owner mills a card.`
    },
    reward: (num) => {
      return `When you leave this room create ${num - 3 < 2 ? 1 : num - 3} food token${num - 3 < 2 ? "" : "s"}. Then end the turn.`
    },
    description: `You step into a massive room with varios opennings in the cieling. One of them even looks like there might be a pin prick of sunlight at the top. Suprisingly you hears the songs of birds echoing around the room. Hundreds if not thousands of them. It's beautiful to see the patterns of the flock as they ebb and flow along the ceiling. Hmmm, they look like they are almost headed in this direction. Ohh, they are definitely headed in this direction. That's a lot of birds. Oh crap! That's a lot of birds! No time to run!`,
  },
  {
    challenge: (num) => {
      return `At the beginning of your upkeep create ${num - 3 < 2 ? 'one' : writtenNumber(num - 3)} 1/1 white Spirit token${num - 3 < 2 ? "" : "s"} with flying. Non-creature spells cost 1 extra for each spirit you control. If a player would search their library they instead gain 5 life.`
    },
    reward: (num) => {
      return `When you leave this room create ${num - 3 < 2 ? 1 : num - 3} clue token${num - 3 < 2 ? "" : "s"}. Then end the turn.`
    },
    description:  `The sound of rattling chains and shackles, seems to suround you. Soon after the misty forms of spirits, phantoms, and apprartions come into view. This is clearly a cavern of lost souls.`,
  },
  {
    challenge: (num) => {
      return `At the beginning of your upkeep create each player creates ${writtenNumber(num)} 1/1 Contruct artifact creature token${num - 3 < 2 ? "" : "s"}. At the beginning of your endstep put a +1/+1 on each artifact creature then return each non-artifact creature to its owners hand.`
    },
    reward: (num) => {
      return `When you leave this room create ${num - 3 < 2 ? 1 : num - 3} clue token${num - 3 < 2 ? "" : "s"}. Then end the turn.`
    },
    description: `You have entered ruins from some advanced magic weilding civilization. They are ancient and bizarre contructs unlike anything you have ever seen lining each room. After an uneventful day of rummaging, one of your party members finds an orb covered in various runes. It hums with a calmning resonence. As you brush your fingers over some of the symbols, it suddenly begins to hum much loader. Immediatly the machines begin to move!`,
  },
]

export const winEncounter = {
  challenge: (num) => {
    return 'When you enter this room you gain 20 life, shuffle your graveyard into your library, then draw 7 cards. Untap all lands you control. Until the end of turn spells in your hand are free to cast.';
  },
  reward: (num) => {
    return `When you leave this room you must create a new dungeon and start at level 1. Then end the turn.`;
  },
  description:  `This will be a grand conclusion story`,
};

export const startEncounter = {
  challenge: (num) => {
    return 'This room is empty.';
  },
  reward: (num) => {
    return `When you leave this room nothing happens. Then end the turn.`;
  },
  description:  `The dungeon awaits!`,
};