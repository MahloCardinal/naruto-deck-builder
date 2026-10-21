'use strict';

// Add a complete language catalog here; the language selector is populated automatically.
const TRANSLATIONS = {
  "en": {
    "name": "English",
    "locale": "en-GB",
    "ui": {
      "pageTitle": "Naruto · Cards and decks",
      "brand": "Naruto · Personal collection",
      "heading": "Cards and decks",
      "catalogDescription": "3 sets · card effects · local images",
      "database": "Card database",
      "builder": "Deck builder",
      "sections": "Sections",
      "language": "Language",
      "filters": "Filter cards",
      "searchFilters": "Search and filters",
      "textOrIndex": "Text or index",
      "searchPlaceholder": "Search here",
      "rarity": "Rarity",
      "season": "Set",
      "skillType": "Ability type",
      "cost": "Cost",
      "chakra": "Chakra",
      "minPower": "Min power",
      "minimum": "min",
      "cardLevel": "Card level",
      "sort": "Sort",
      "sortCards": "Sort cards",
      "index": "Index",
      "alphabetical": "Name",
      "quality": "Quality",
      "power": "Power",
      "resetFilters": "Clear filters",
      "allFeminine": "All",
      "all": "All",
      "none": "No type",
      "common": "Common",
      "rare": "Rare",
      "epic": "Epic",
      "legendary": "Legendary",
      "first": "First",
      "second": "Second",
      "third": "Third",
      "ascending": "Ascending",
      "descending": "Descending",
      "ascendingAction": "Ascending order. Switch to descending",
      "descendingAction": "Descending order. Switch to ascending",
      "selectedCount": "{count} selected",
      "cardCount": "{count} cards",
      "noResults": "No cards match the filters.",
      "assumptions": "Calculation assumptions",
      "enemyChakra": "Enemy Chakra",
      "enemies": "Enemy targets",
      "allyChakra": "Ally Chakra",
      "allies": "Ally targets",
      "activations": "Card activations",
      "applyStandard": "Apply defaults",
      "calculationInfo": "Calculation info",
      "standardApplied": "Defaults applied to all cards in this session.",
      "standardPending": "Changes pending: cards still use the previous defaults.",
      "deck": "Current deck",
      "defaultDeckName": "Deck 1",
      "deckNameLabel": "Deck name:",
      "deckNamePlaceholder": "Deck name",
      "deckSlots": "The ten deck slots",
      "deckCardsLevels": "Deck cards and levels",
      "averageCost": "Average cost",
      "averagePower": "Average power",
      "averageQuality": "Average quality",
      "viewDeck": "View deck details",
      "import": "Import",
      "export": "Export",
      "clearDeck": "Clear",
      "closeDeck": "Close deck",
      "closeCard": "Close card details",
      "closeInfo": "Close calculation information",
      "distribution": "Cost distribution",
      "curveCaption": "Number of cards at each cost.",
      "databaseEffects": "Card effects database",
      "builderCards": "Cards for the deck",
      "confirm": "Confirm",
      "cancel": "Cancel",
      "replaceDeck": "Replace the current deck with the imported deck?",
      "confirmClear": "Remove all cards from the deck?",
      "deckImported": "Deck imported.",
      "sessionUnavailable": "Automatic session saving is unavailable. Export your deck to keep it.",
      "sessionInvalid": "The saved session could not be restored. You can import an exported deck.",
      "addToDeck": "Add to deck",
      "removeFromDeck": "Remove from deck",
      "addCard": "Add {name} to deck",
      "removeCard": "Remove {name} from deck",
      "openCard": "Open {name} #{index}",
      "removeNamedCard": "Remove {name}",
      "emptySlot": "Slot {slot} empty",
      "cardLevelTitle": "{name} · level {level}",
      "levelShort": "Lv.{level}",
      "changeLevel": "Change level",
      "changeLevelTitle": "Click to switch to level {level}",
      "changeLevelAction": "Level {level}. Switch to level {next}",
      "powerQuality": "Power and quality",
      "localAssumptions": "Assumptions for this card",
      "useStandard": "Use defaults",
      "localChanges": "Changes apply immediately to this card only.",
      "powerComposition": "Power breakdown",
      "contributions": "Calculation contributions",
      "noContributions": "No additional numerical contribution.",
      "baseChakra": "Base Chakra",
      "summonedChakra": "Summoned Chakra",
      "chakraBoosts": "Chakra boosts",
      "friendlyDamage": "Damage to self / allies",
      "enemyDamage": "Damage to enemies",
      "burn": "Burn",
      "heal": "Heal",
      "curveBar": "Cost {cost}: {count} cards",
      "energyCost": "Energy cost",
      "costValue": "Cost {value}",
      "chakraValue": "Base Chakra {value}",
      "info1": "Power = base Chakra + Summons + boosts − damage to self and allies + damage to enemies + Burn + Healing.",
      "info2": "Quality = Power / card cost.",
      "info3": "Burn = enemy targets * duration in seconds (or enemy Chakra if lower than the duration).",
      "info4": "Effects are counted as activating the number of times stated on the card or in the calculation assumptions.",
      "info5": "Movement, Guard and other modifiers are not included in the card's Power.",
      "info6": "The level selector in the filter panel changes the entire list, except cards already in the deck. Exports include individual levels and calculation assumptions."
    },
    "effects": {
      "Cost": "Cost",
      "Chakra": "Chakra",
      "Weaken": "Weaken",
      "Push": "Push",
      "Pin": "Pin",
      "Rush": "Rush",
      "Slow": "Slow",
      "Guard": "Guard",
      "Seal": "Seal",
      "Switch": "Switch",
      "Summon": "Summon",
      "Teleport": "Teleport",
      "Burn": "Burn",
      "Focus": "Focus",
      "Heal": "Heal"
    },
    "terms": {
      "Cost": "costs?",
      "Chakra": "chakra",
      "Weaken": "weaken[\\p{L}]*",
      "Push": "push[\\p{L}]*",
      "Pin": "pin(?:ned|ning|s)?",
      "Rush": "rush[\\p{L}]*",
      "Slow": "slow[\\p{L}]*",
      "Guard": "guard[\\p{L}]*",
      "Seal": "seal[\\p{L}]*",
      "Switch": "switch[\\p{L}]*",
      "Summon": "summon[\\p{L}]*",
      "Teleport": "teleport[\\p{L}]*",
      "Burn": "burn[\\p{L}]*",
      "Focus": "focus(?:ed|ing|es)?",
      "Heal": "heal[\\p{L}]*"
    },
    "cards": {
      "S1_001": {
        "name": "NARUTO UZUMAKI",
        "ability": "Potential",
        "descriptions": [
          "The first time this card gains chakra, gain extra Chakra(+1).",
          "The first time this card gains chakra, gain extra Chakra(+2)."
        ]
      },
      "S1_002": {
        "name": "NARUTO UZUMAKI",
        "ability": "Learning",
        "descriptions": [
          "Chakra(+2) after 6 seconds.",
          "Chakra(+3) after 6 seconds."
        ]
      },
      "S1_003": {
        "name": "NARUTO UZUMAKI",
        "ability": "Shadow Clone Jutsu",
        "descriptions": [
          "Create 1 clone on another lane with Chakra(1).",
          "Summon 1 clone on another lane with Chakra(2)."
        ]
      },
      "S1_004": {
        "name": "NARUTO UZUMAKI",
        "ability": "Oath",
        "descriptions": [
          "Chakra(+1) after successful encounter.",
          "Chakra(+2) after successful encounter."
        ]
      },
      "S1_005": {
        "name": "SASUKE UCHIHA",
        "ability": "Kunai Mastery",
        "descriptions": [
          "On encounter, Weaken(2) the rival card.",
          "On encounter, Weaken(3) the rival card."
        ]
      },
      "S1_006": {
        "name": "SAKURA HARUNO",
        "ability": "Kunai Throw",
        "descriptions": [
          "On deploy, Weaken(2) a random rival in Long Range.",
          "On deploy, Weaken(3) a random rival in Long Range."
        ]
      },
      "S1_007": {
        "name": "SAKURA HARUNO",
        "ability": "Chakra Balance",
        "descriptions": [
          "When lane allies succeed an encounter, Chakra(+1) to them and Pin(3s) self.",
          "When lane allies succeed an encounter, Chakra(+1) to them and Pin(5s) self."
        ]
      },
      "S1_008": {
        "name": "SAKURA HARUNO",
        "ability": "Roundhouse Kick",
        "descriptions": [
          "On encounter, Push(1) and Weaken(1) the rival card.",
          "On encounter, Push(2) and Weaken(1) the rival card."
        ]
      },
      "S1_009": {
        "name": "KAKASHI HATAKE",
        "ability": "Rush",
        "descriptions": [
          "Rush(5s)",
          "Rush(6s)"
        ]
      },
      "S1_010": {
        "name": "KAKASHI HATAKE",
        "ability": "Team Leader",
        "descriptions": [
          "On encounter, Chakra(+2) to an ally in Short Range.",
          "On encounter, Chakra(+3) to a lane ally in Short Range."
        ]
      },
      "S1_011": {
        "name": "IRUKA UMINO",
        "ability": "Sensei",
        "descriptions": [
          "Chakra(+2) to next ally deployed.",
          "Chakra(+3) to next ally deployed."
        ]
      },
      "S1_012": {
        "name": "ZABUZA MOMOCHI",
        "ability": "Menacing Entry",
        "descriptions": [
          "Deploy to Mid Range, Slow(4s) and lane Switch rival with the highest Chakra.",
          "Deploy to Mid Range, Slow(6s) and Switch lane rival with the highest Chakra."
        ]
      },
      "S1_013": {
        "name": "ZABUZA MOMOCHI",
        "ability": "Aggression",
        "descriptions": [
          "On deploy, Weaken(3) closest rival card on lane.",
          "On deploy, Weaken(4) closest rival card on lane."
        ]
      },
      "S1_014": {
        "name": "HAKU",
        "ability": "Needles",
        "descriptions": [
          "On deploy, Pin(6s) closest lane rival.",
          "On deploy, Pin(7s) closest lane rival."
        ]
      },
      "S1_015": {
        "name": "KONOHAMARU SARUTOBI",
        "ability": "Shuriken Throw",
        "descriptions": [
          "On deploy, Weaken(1) a random rival in Short Range.",
          "On deploy, Weaken(2) a random rival in Short Range."
        ]
      },
      "S1_016": {
        "name": "EBISU",
        "ability": "Quick Lesson",
        "descriptions": [
          "On deploy, Chakra(+2) to closest ally.",
          "On deploy, Chakra(+3) to closest ally."
        ]
      },
      "S1_017": {
        "name": "TAZUNA",
        "ability": "Bridge Builder",
        "descriptions": [
          "On deploy, pull 2 allies in Mid Range back to this card.",
          "On deploy, pull 3 allies in Mid Range back to this card."
        ]
      },
      "S1_018": {
        "name": "INARI",
        "ability": "Rush",
        "descriptions": [
          "Rush(2s)",
          "Rush(3s)"
        ]
      },
      "S1_019": {
        "name": "KAIZA",
        "ability": "Martyr",
        "descriptions": [
          "Chakra(+1) to all allies when withdrawing.",
          "Chakra(+2) to lane allies when withdrawing."
        ]
      },
      "S1_020": {
        "name": "MIZUKI TOJI",
        "ability": "Hidden Intent",
        "descriptions": [
          "On deploy, Weaken(2) a random lane ally and Chakra(+3) for this card.",
          "On deploy, Weaken(2) a random lane ally and Chakra(+4) for this card."
        ]
      },
      "S1_021": {
        "name": "MIZUKI TOJI",
        "ability": "Pushover",
        "descriptions": [
          "On withdraw, Chakra(+1) for 3 random allies.",
          "On withdraw, Chakra(+2) for 3 random allies."
        ]
      },
      "S1_022": {
        "name": "MADAME SHIJIMI",
        "ability": "Cat Rescue",
        "descriptions": [
          "On deploy, Chakra(+1) and Slow(3s) to three lane allies in Short Range.",
          "On deploy, Chakra(+2) and Slow(3s) to three lane allies in Short Range."
        ]
      },
      "S1_023": {
        "name": "GOZU",
        "ability": "Ambush",
        "descriptions": [
          "On encounter, Weaken(1) rival card and Teleport behind it.",
          "On encounter, Weaken(2) rival card and Teleport behind it."
        ]
      },
      "S1_024": {
        "name": "TSUNAMI",
        "ability": "Hospitality",
        "descriptions": [
          "On deploy, Chakra(+1) for 2 lane allies.",
          "On deploy, Chakra(+1) for 3 lane allies."
        ]
      },
      "S1_025": {
        "name": "WARAJI",
        "ability": "Rush",
        "descriptions": [
          "Rush(3s)",
          "Rush(4s)"
        ]
      },
      "S1_026": {
        "name": "ZORI",
        "ability": "Rush",
        "descriptions": [
          "Rush(3s)",
          "Rush(4s)"
        ]
      },
      "S1_027": {
        "name": "INO YAMANAKA",
        "ability": "Charm",
        "descriptions": [
          "On deploy, Chakra(+1) to closest ally in Short Range and push them to Mid Range.",
          "On deploy, Chakra(+2) to closest ally in Short Range and Push them to Mid Range."
        ]
      },
      "S1_028": {
        "name": "SHIKAMARU NARA",
        "ability": "Shadow Paralysis Jutsu",
        "descriptions": [
          "On deploy, Pin(10s) self and closest rival card.",
          "On deploy, Pin(12s) self and closest rival card."
        ]
      },
      "S1_029": {
        "name": "CHOJI AKIMICHI",
        "ability": "Strength",
        "descriptions": [
          "On encounter, Push(1) the rival card.",
          "On encounter, Push(2) the rival card."
        ]
      },
      "S1_030": {
        "name": "ASUMA SARUTOBI",
        "ability": "Melee Prowess",
        "descriptions": [
          "On encounter, Chakra(+3) if rival card has a higher chakra number.",
          "On encounter, Chakra(+4) if rival card has a higher chakra number."
        ]
      },
      "S1_031": {
        "name": "HINATA HYUGA",
        "ability": "Shy",
        "descriptions": [
          "On deploy, Push(2) closest rival card in Short Range.",
          "On deploy, Push(3) closest rival card in Short Range."
        ]
      },
      "S1_032": {
        "name": "HINATA HYUGA",
        "ability": "Gentle Fist",
        "descriptions": [
          "On encounter, Push(1) rival cards with 3 or less Chakra.",
          "On encounter, Push(2) rival cards with 3 or less Chakra."
        ]
      },
      "S1_033": {
        "name": "KIBA INUZUKA",
        "ability": "Best Friend",
        "descriptions": [
          "Summon a random Akamaru from your deck and give it Chakra(+1). If Akamaru is not found, this card gains Chakra(+1) instead.",
          "Summon a random Akamaru from your deck and give it Chakra(+2). If Akamaru is not found, this card gains Chakra(+2) instead."
        ]
      },
      "S1_034": {
        "name": "AKAMARU",
        "ability": "Rush",
        "descriptions": [
          "Rush(6s)",
          "Rush(7s)"
        ]
      },
      "S1_035": {
        "name": "SHINO ABURAME",
        "ability": "Chakra Insects",
        "descriptions": [
          "On encounter, Chakra(+2) to this card and Weaken(1) rival card.",
          "On encounter, Chakra(+2) to this card and Weaken(2) rival card."
        ]
      },
      "S1_036": {
        "name": "KURENAI YUHI",
        "ability": "Feint",
        "descriptions": [
          "On encounter, Push(2) and Pin(2s) rival card.",
          "On encounter, Push(2) and Pin(4s) rival card."
        ]
      },
      "S1_037": {
        "name": "PAKKUN",
        "ability": "Sharp Nose",
        "descriptions": [
          "Ignore all rival skills and encounters until reaching Mid Range. Allies gain Rush(+2s) when deployed on this lane while this card is active.",
          "Ignore all rival skills and encounters until reaching Mid Range. Allies gain Rush(3s) when deployed on this lane while this card is active."
        ]
      },
      "S1_038": {
        "name": "AYAME",
        "ability": "Fresh Meal",
        "descriptions": [
          "On deploy, Chakra(+2) to 2 lane allies in Mid Range.",
          "On deploy, Chakra(+2) to 3 lane allies in Mid Range."
        ]
      },
      "S1_039": {
        "name": "MOEGI KAZAMATSURI",
        "ability": "Rush",
        "descriptions": [
          "Rush(2s)",
          "Rush(3s)"
        ]
      },
      "S1_040": {
        "name": "UDON ISE",
        "ability": "Rush",
        "descriptions": [
          "Rush(2s)",
          "Rush(3s)"
        ]
      },
      "S1_041": {
        "name": "NINJA TROOPS",
        "ability": "Vanguard",
        "descriptions": [
          "Rush(2s). On withdraw, Chakra(+3) to most recently deployed ally.",
          "Rush(3s). On withdraw, Chakra(+3) to most recently deployed ally."
        ]
      },
      "S1_042": {
        "name": "NARUTO UZUMAKI",
        "ability": "Defenseless",
        "descriptions": [
          "On withdraw, Weaken(3) rival card.",
          "On withdraw, Weaken(4) rival card."
        ]
      },
      "S1_043": {
        "name": "NARUTO UZUMAKI",
        "ability": "Prankster",
        "descriptions": [
          "On deploy, Slow(10s) all cards on lane.",
          "On deploy, Slow(12s) all cards on lane."
        ]
      },
      "S1_044": {
        "name": "NARUTO UZUMAKI",
        "ability": "Sexy Jutsu",
        "descriptions": [
          "On deploy, Pin(4s) one rival card in Mid Range.",
          "On deploy, Pin(5s) one lane rival in Mid Range."
        ]
      },
      "S1_045": {
        "name": "NARUTO UZUMAKI",
        "ability": "Loneliness",
        "descriptions": [
          "On deploy, Chakra(+3) and Slow(6s) if no lane allies present.",
          "On deploy, Chakra(+4) and Slow(6s) if no lane allies present."
        ]
      },
      "S1_046": {
        "name": "NARUTO UZUMAKI",
        "ability": "Graduation",
        "descriptions": [
          "Gain Chakra(+1) for each lane ally in short range.",
          "Gain Chakra(+2) for each lane ally in short range."
        ]
      },
      "S1_047": {
        "name": "NARUTO UZUMAKI",
        "ability": "Transformation Jutsu",
        "descriptions": [
          "On deploy, disguise as another card up to 3 cost from your deck. Reverts to original on encounter or when weakened.",
          "On deploy, disguise as another card up to 4 cost from your deck. Reverts to original on encounter or when weakened."
        ]
      },
      "S1_048": {
        "name": "NARUTO UZUMAKI",
        "ability": "Cunning",
        "descriptions": [
          "On encounter, Pin(4s) rival card and Teleport behind it.",
          "On encounter, Pin(6s) rival card and Teleport behind it."
        ]
      },
      "S1_049": {
        "name": "SASUKE UCHIHA",
        "ability": "Projection",
        "descriptions": [
          "Next ally deploys to Mid Range. Pin(4s) and Switch a random lane rival in Mid Range.",
          "Next ally deploys to Mid Range. Pin(8s) and Switch a random lane rival in Mid Range."
        ]
      },
      "S1_050": {
        "name": "HIRUZEN SARUTOBI",
        "ability": "Telescope Technique",
        "descriptions": [
          "When allies gain Rush, apply Chakra(+1) and Rush(+1s) to them.",
          "When allies gain Rush, apply Chakra(+1) and Rush(+2s) to them."
        ]
      },
      "S1_051": {
        "name": "IRUKA UMINO",
        "ability": "Goofball",
        "descriptions": [
          "Randomly lane Switch every 8 seconds.",
          "Randomly lane Switch every 6 seconds."
        ]
      },
      "S1_052": {
        "name": "IRUKA UMINO",
        "ability": "Sacrifice",
        "descriptions": [
          "Deploy to Mid Range and Chakra(+1) to closest ally.",
          "Deploy to Mid Range and Chakra(+2) to the closest ally."
        ]
      },
      "S1_053": {
        "name": "ZABUZA MOMOCHI",
        "ability": "Hidden in the Mist",
        "descriptions": [
          "On deploy, Pin(6s) and Weaken(1) all rivals in Short Range.",
          "On deploy, Pin(6s) and Weaken(2) all rivals in Short Range."
        ]
      },
      "S1_054": {
        "name": "ZABUZA MOMOCHI",
        "ability": "Broken",
        "descriptions": [
          "Gain Chakra(+3) the first time a lane ally withdraws.",
          "Gain Chakra(+4) the first time a lane ally withdraws."
        ]
      },
      "S1_055": {
        "name": "KONOHAMARU SARUTOBI",
        "ability": "Imperfect Sexy Jutsu",
        "descriptions": [
          "On deploy, 50% chance to Pin(6s) one rival card in Mid Range.",
          "On deploy, 50% chance to Pin(8s) one lane rival in Mid Range."
        ]
      },
      "S1_056": {
        "name": "KONOHAMARU SARUTOBI",
        "ability": "Legacy",
        "descriptions": [
          "On deploy, 50% chance to summon a random Hiruzen from your deck, otherwise Chakra(+2).",
          "On deploy, 50% chance to summon a random Hiruzen from your deck, otherwise Chakra(+3)."
        ]
      },
      "S1_057": {
        "name": "KONOHAMARU SARUTOBI",
        "ability": "Sexy Jutsu",
        "descriptions": [
          "On deploy, Pin(4s) one rival card in Mid Range.",
          "On deploy, Pin(5s) one lane rival in Mid Range."
        ]
      },
      "S1_058": {
        "name": "EBISU",
        "ability": "Difficult Lessons",
        "descriptions": [
          "All allies deployed gain Chakra(+2) but Weaken(1) this card each time.",
          "Next allies deployed gain Chakra(+3) but Weaken(1) this card each time."
        ]
      },
      "S1_059": {
        "name": "INARI",
        "ability": "Take Action",
        "descriptions": [
          "On deploy, Weaken(1) and Slow(6s) the closest rival card in Long Range.",
          "On deploy, Weaken(1) and Slow(8s) the closest lane rival in Long Range."
        ]
      },
      "S1_060": {
        "name": "GATO",
        "ability": "Crime Lord",
        "descriptions": [
          "On deploy, Focus(6s). If Focus succeeds, Summon a random card from up to 3 cost from your deck.",
          "On deploy, Focus(4s). If Focus succeeds, Summon a random card from up to 3 cost from your deck."
        ]
      },
      "S1_061": {
        "name": "NINJA HOUNDS",
        "ability": "Fanged Pursuit",
        "descriptions": [
          "On deploy, Pin(6s) self and highest chakra lane rival.",
          "On deploy, Pin(8s) self and highest chakra lane rival."
        ]
      },
      "S1_062": {
        "name": "TEUCHI",
        "ability": "Way of Ramen",
        "descriptions": [
          "Chakra(+1) to lane allies after 8 seconds.",
          "Chakra(+2) to lane allies after 8 seconds."
        ]
      },
      "S1_063": {
        "name": "NARUTO UZUMAKI",
        "ability": "Determination",
        "descriptions": [
          "When allied Iruka is about to withdraw, pull it back to the start of the lane and create 3 clones with Chakra(1) distributed on all lanes.",
          "When allied Iruka is about to withdraw, pull it back to the start of the lane and Summon 5 clones with Chakra(1) distributed on all lanes."
        ]
      },
      "S1_064": {
        "name": "NARUTO UZUMAKI",
        "ability": "Showmanship",
        "descriptions": [
          "Chakra(+5) after 10s.",
          "Chakra(+6) after 10s."
        ]
      },
      "S1_065": {
        "name": "NARUTO UZUMAKI",
        "ability": "Mass Sexy Jutsu",
        "descriptions": [
          "On encounter, Pin(6s) rival card, teleport behind it and gain Rush(2s).",
          "On encounter, Pin(8s) rival card, teleport behind it and gain Rush(4s)."
        ]
      },
      "S1_066": {
        "name": "SASUKE UCHIHA",
        "ability": "Prediction",
        "descriptions": [
          "Cannot be weakened during encounters with rival cards of 2 or less Chakra.",
          "Cannot be weakened during encounters with rival cards of 3 or less Chakra."
        ]
      },
      "S1_067": {
        "name": "SAKURA HARUNO",
        "ability": "Inner Fire",
        "descriptions": [
          "Chakra(+3) the first time a lane rival is deployed, then Chakra(+1) every time a rival is deployed or Switches to this lane.",
          "Chakra(+3) the first time a lane rival is deployed, then Chakra(+2) every time a rival is deployed or Switches to this lane."
        ]
      },
      "S1_068": {
        "name": "KAKASHI HATAKE",
        "ability": "Thousand Years of Death",
        "descriptions": [
          "Jump to the first rival card that comes nearby, Weaken(1) and Push(3) it.",
          "Jump to the first rival card that comes nearby, Weaken(1) and Push(4) it."
        ]
      },
      "S1_069": {
        "name": "KAKASHI HATAKE",
        "ability": "Giant Vortex Jutsu",
        "descriptions": [
          "On deploy, Push(3) and Weaken(2) all lane rivals.",
          "On deploy, Push(3) and Weaken(3) all lane rivals."
        ]
      },
      "S1_070": {
        "name": "KAKASHI HATAKE",
        "ability": "Raikiri",
        "descriptions": [
          "Jump to the first rival card that comes nearby and Weaken(3) it. Ignores Guard.",
          "Jump to the first rival card that comes nearby and Weaken(4) it. Ignores Guard."
        ]
      },
      "S1_071": {
        "name": "KAKASHI HATAKE",
        "ability": "Clone Bluff",
        "descriptions": [
          "Spend remaining energy to Summon up to 5 clones with Chakra(2) disguised as the original.",
          "Spend remaining energy to summon up to 6 clones with Chakra(2) disguised as the original."
        ]
      },
      "S1_072": {
        "name": "IRUKA UMINO",
        "ability": "Scolding",
        "descriptions": [
          "While this card is active, Chakra(+1) and Pin(2s) to allies with 2 Chakra when deploying them.",
          "While this card is active, Chakra(+2) and Pin(2s) to allies with 2 Chakra when deploying them."
        ]
      },
      "S1_073": {
        "name": "HIRUZEN SARUTOBI",
        "ability": "Will of Fire",
        "descriptions": [
          "Chakra[+1] to all allies after 10 seconds.",
          "Chakra(+2) to all allies after 10 seconds."
        ]
      },
      "S1_074": {
        "name": "ZABUZA MOMOCHI",
        "ability": "Water Dragon Jutsu",
        "descriptions": [
          "On deploy, Weaken(1) and Push(1) all lane rivals in Short and Mid Range.",
          "On deploy, Weaken(1) and Push(3) all lane rivals in Short and Mid Range."
        ]
      },
      "S1_075": {
        "name": "HAKU",
        "ability": "Crystal Ice Mirrors",
        "descriptions": [
          "On encounter, Pin(2s) and Weaken(1) lane rivals nearby, then lane Switch. When gaining Chakra, re-enable this skill.",
          "On encounter, Pin(4s) and Weaken(1) lane rivals nearby, then lane Switch. When gaining Chakra, re-enable this skill."
        ]
      },
      "S1_076": {
        "name": "GAMABUNTA",
        "ability": "Toad Teamwork",
        "descriptions": [
          "Chakra(+1) whenever allies Push rivals.",
          "Chakra(+2) whenever allies Push rivals."
        ]
      },
      "S1_077": {
        "name": "NARUTO UZUMAKI",
        "ability": "Multi Shadow Clone",
        "descriptions": [
          "Create 2 clones with Chakra(2) and Rush(4s) on the other lanes, then 2 new clones after 10s. Chakra(+1) whenever these clones withdraw.",
          "Summon 2 clones with Chakra(2) and Rush(6s) on the other lanes, then 2 new clones after 10s. Chakra(+1) whenever these clones withdraw."
        ]
      },
      "S1_078": {
        "name": "NARUTO UZUMAKI",
        "ability": "Kyubi Rage",
        "descriptions": [
          "Whenever allies withdraw, Chakra(+1) and Rush(+1s).",
          "Whenever allies withdraw, Chakra(+2) and Rush(+1s)."
        ]
      },
      "S1_079": {
        "name": "NARUTO UZUMAKI",
        "ability": "Furious Punch",
        "descriptions": [
          "Deploy to Mid Range, Weaken(2) and Push(1) all lane rivals.",
          "Deploy to Mid Range, Weaken(2) and Push(3) all lane rivals."
        ]
      },
      "S1_080": {
        "name": "NARUTO UZUMAKI",
        "ability": "Resolve",
        "descriptions": [
          "Chakra(+2) every 8s.",
          "Chakra(+2) every 6s."
        ]
      },
      "S1_081": {
        "name": "SASUKE UCHIHA",
        "ability": "Fireball Jutsu",
        "descriptions": [
          "On deploy, Weaken(2) all rivals in Mid Range.",
          "On deploy, Weaken(3) all rivals in Mid Range."
        ]
      },
      "S1_082": {
        "name": "KAKASHI HATAKE",
        "ability": "Battle Plan",
        "descriptions": [
          "While active, Chakra(+1) whenever allies Weaken rivals. Allies gain Chakra(+1) for each card affected the first time they Weaken rivals.",
          "While active, Chakra(+2) whenever allies Weaken rivals. Allies gain Chakra(+1) for each card affected the first time they Weaken rivals."
        ]
      },
      "S1_083": {
        "name": "ZABUZA MOMOCHI",
        "ability": "Demon",
        "descriptions": [
          "On deploy, Weaken(1) all cards. If they have 3 or less Chakra, Weaken(3) instead.",
          "On deploy, Weaken(1) all cards. If they have 4 or less Chakra, Weaken(4) instead."
        ]
      },
      "S1_084": {
        "name": "ZABUZA MOMOCHI",
        "ability": "Reckless Charge",
        "descriptions": [
          "On each encounter, Weaken(2) rival cards with 4 or less Chakra and push them on another lane. Permanent Rush.",
          "On each encounter, Weaken(3) rival cards with 4 or less Chakra and lane Switch them. Permanent Rush."
        ]
      },
      "S1_085": {
        "name": "KYUBI",
        "ability": "Natural Disaster",
        "descriptions": [
          "Deploy to Mid Range, Push(1) and Weaken(3) all cards. While active, Weaken(1) newly deployed cards. Permanently Slow.",
          "Deploy to Mid Range, Push(1) and Weaken(4) all cards. While active, Weaken(1) newly deployed cards. Permanently Slow."
        ]
      },
      "S2_001": {
        "name": "Naruto Uzumaki",
        "ability": "Chakra Training",
        "descriptions": [
          "On deploy, 50% chance to gain Chakra(+3).",
          "On deploy, 50% chance to gain Chakra(+4)."
        ]
      },
      "S2_002": {
        "name": "Naruto Uzumaki",
        "ability": "Challenger",
        "descriptions": [
          "On deploy, Pin(1s) and Chakra(+2) for each lane rival with higher Chakra.",
          "On deploy, Pin(2s) and Chakra(+2) per lane rival with higher Chakra."
        ]
      },
      "S2_003": {
        "name": "Sasuke Uchiha",
        "ability": "Lion's Barrage",
        "descriptions": [
          "Jump to the first rival card that comes nearby and Weaken(2) it.",
          "Jump to the first rival card that comes nearby and Weaken(3) it."
        ]
      },
      "S2_004": {
        "name": "Sakura Haruno",
        "ability": "Rush",
        "descriptions": [
          "Rush(2s)",
          "Rush(3s)"
        ]
      },
      "S2_005": {
        "name": "Rock Lee",
        "ability": "Protector",
        "descriptions": [
          "Rush(+3s) whenever a rival is deployed on this lane.",
          "Rush(+4s) whenever a rival is deployed on this lane."
        ]
      },
      "S2_006": {
        "name": "Rock Lee",
        "ability": "Love Bomb",
        "descriptions": [
          "Chakra(+1) to next ally deployed. While this card is active, lane Switch that ally every 8 seconds.",
          "Chakra(+2) to next ally deployed. While this card is active, lane Switch that ally every 8 seconds."
        ]
      },
      "S2_007": {
        "name": "Neji Hyuga",
        "ability": "Gentle Fist",
        "descriptions": [
          "On encounter, Weaken(2) and Push(1).",
          "On encounter, Weaken(2) and Push(2)."
        ]
      },
      "S2_008": {
        "name": "Tenten",
        "ability": "Rising Twin Dragons",
        "descriptions": [
          "On deploy, Weaken(1) and Slow(6s) all rivals in Long Range.",
          "On deploy, Weaken(1) and Slow(8s) all rivals in Long Range."
        ]
      },
      "S2_009": {
        "name": "Gai Maito",
        "ability": "Power of Youth",
        "descriptions": [
          "While this card is active, Chakra(+2) to Rock Lee cards when deploying them.",
          "While this card is active, Chakra(+3) to Rock Lee cards when deploying them."
        ]
      },
      "S2_010": {
        "name": "Gaara",
        "ability": "Dangerous",
        "descriptions": [
          "Deploy to Mid Range, Chakra(+3) if there is a rival card in Mid Range.",
          "Deploy to Mid Range, Chakra(+4) if there is a rival card in Mid Range."
        ]
      },
      "S2_011": {
        "name": "Kankuro",
        "ability": "Brazen",
        "descriptions": [
          "Chakra(+3) to next allied Gaara deployed.",
          "Chakra(+4) to next allied Gaara deployed."
        ]
      },
      "S2_012": {
        "name": "Temari",
        "ability": "Prudent",
        "descriptions": [
          "Guard(1) and Slow(6s) to next allied Gaara deployed.",
          "Guard(1) and Slow(10s) to next allied Gaara deployed."
        ]
      },
      "S2_013": {
        "name": "Baki",
        "ability": "Resilient",
        "descriptions": [
          "Rush(3s) and Guard(1).",
          "Rush(4s) and Guard(1)."
        ]
      },
      "S2_014": {
        "name": "Ino Yamanaka",
        "ability": "Rush",
        "descriptions": [
          "Rush(2s)",
          "Rush(3s)"
        ]
      },
      "S2_015": {
        "name": "Kabuto Yakushi",
        "ability": "Explanation",
        "descriptions": [
          "On deploy, all allies in Short Range randomly gain Chakra(+1) or Pin(4s).",
          "On deploy, all allies in Short Range randomly gain Chakra(+2) or Pin(4s)."
        ]
      },
      "S2_016": {
        "name": "Student Trio",
        "ability": "Team Konohamaru",
        "descriptions": [
          "On withdraw, redeploy as Konohamaru, Moegi and Udon with Rush(3s) and Chakra(1) on each lane.",
          "On withdraw, redeploy as Konohamaru, Moegi and Udon with Rush(4s) and Chakra(1) on each lane."
        ]
      },
      "S2_017": {
        "name": "Ibiki Morino",
        "ability": "Strict Rules",
        "descriptions": [
          "On deploy, Push(2) or Pin(4s) all lane rivals.",
          "On deploy, Push(3) or Pin(5s) all lane rivals."
        ]
      },
      "S2_018": {
        "name": "Choza Akimichi",
        "ability": "Old Friends",
        "descriptions": [
          "While this card is active, Chakra(+1) to allied Shikaku and Inoichi cards.",
          "While this card is active, Chakra(+2) to allied Shikaku and Inoichi cards."
        ]
      },
      "S2_019": {
        "name": "Inoichi Yamanaka",
        "ability": "Old Friends",
        "descriptions": [
          "While this card is active, Chakra(+1) to allied Choza and Shikaku cards.",
          "While this card is active, Chakra(+2) to allied Choza and Shikaku cards."
        ]
      },
      "S2_020": {
        "name": "Shikaku Nara",
        "ability": "Old Friends",
        "descriptions": [
          "While this card is active, Chakra(+1) to allied Inoichi and Choza cards.",
          "While this card is active, Chakra(+2) to allied Inoichi and Choza cards."
        ]
      },
      "S2_021": {
        "name": "Hanabi Hyuga",
        "ability": "Prodigy",
        "descriptions": [
          "Rush(2s). On encounter, Push(2).",
          "Rush(3s). On encounter, Push(3)."
        ]
      },
      "S2_022": {
        "name": "Hiashi Hyuga",
        "ability": "Hyuga Leader",
        "descriptions": [
          "While this card is active, allied Hyuga cards gain Chakra(+2) and Push(+1).",
          "While this card is active, allied Hyuga cards gain Chakra(+3) and Push(+1)."
        ]
      },
      "S2_023": {
        "name": "Hizashi Hyuga",
        "ability": "Brother's Sacrifice",
        "descriptions": [
          "Rush(2s). When allied Hiashi is about to withdraw, pull it back to the start of the lane and withdraw in its place.",
          "Rush(3s). When allied Hiashi is about to withdraw, pull it back to the start of the lane and withdraw in its place."
        ]
      },
      "S2_024": {
        "name": "Zaku Abumi",
        "ability": "Slicing Sound Wave",
        "descriptions": [
          "On deploy, Push(2) and lane Switch two rival cards in Mid Range.",
          "On deploy, Push(2) and lane Switch three rival cards in Mid Range."
        ]
      },
      "S2_025": {
        "name": "Dosu Kinuta",
        "ability": "Resonating Echo Drill",
        "descriptions": [
          "On encounter, Weaken(2) the rival card. If rival does not withdraw, Pin(4s) it then lane Switch.",
          "On encounter, Weaken(2) the rival card. If rival does not withdraw, Pin(5s) it then lane Switch."
        ]
      },
      "S2_026": {
        "name": "Kin Tsuchi",
        "ability": "Bell Needles",
        "descriptions": [
          "On deploy, Weaken(1) and Pin(2s) closest rival card.",
          "On deploy, Weaken(2) and Pin(2s) closest rival card."
        ]
      },
      "S2_027": {
        "name": "Izumo Kamizuki",
        "ability": "Sabotage",
        "descriptions": [
          "On deploy, Pin(2s) two random lane allies.",
          "On deploy, Pin(2s) three random lane allies."
        ]
      },
      "S2_028": {
        "name": "Kotetsu Hagane",
        "ability": "Misdirection",
        "descriptions": [
          "On deploy, Slow(4s) and lane Switch two random allies.",
          "On deploy, Slow(4s) and lane Switch three random allies."
        ]
      },
      "S2_029": {
        "name": "Oboro",
        "ability": "Fog Clone",
        "descriptions": [
          "On deploy, create 2 clones with Chakra(1). When clones withdraw, 50% chance to create another clone on the same lane.",
          "On deploy, Summon 2 clones with Chakra(2). When clones withdraw, 50% chance to create another clone on the same lane."
        ]
      },
      "S2_030": {
        "name": "Yoroi Akado",
        "ability": "Chakra Absorbtion",
        "descriptions": [
          "On encounter, Chakra(+1) to this card and Weaken(1) rival card. Also disables any active skill.",
          "On encounter, Chakra(+2) to this card and Weaken(1) rival card. Also disables any active skill."
        ]
      },
      "S2_031": {
        "name": "Ningame",
        "ability": "Temperance",
        "descriptions": [
          "Whenever lane allies gain Rush, it converts to Chakra(+1) instead.",
          "Whenever lane allies gain Rush, it converts to Chakra(+2) instead."
        ]
      },
      "S2_032": {
        "name": "Gama",
        "ability": "Toad Scroll",
        "descriptions": [
          "On deploy, Summon a random Toad from your deck and give it Chakra(+1).",
          "On deploy, Summon a random Toad from your deck and give it Chakra(+2)."
        ]
      },
      "S2_033": {
        "name": "Gamakichi",
        "ability": "Loudmouth",
        "descriptions": [
          "Allied Toads apply Push(1) on encounter while this card is active. Chakra(+1) whenever a Toad pushes a rival.",
          "Allied Toads apply Push(2) on encounter while this card is active. Chakra(+1) whenever a Toad pushes a rival."
        ]
      },
      "S2_034": {
        "name": "Giant Snake",
        "ability": "Slither",
        "descriptions": [
          "Deploy to Mid Range and lane Switch any two other cards present in Mid Range.",
          "Deploy to Mid Range and lane Switch any 3 other cards present in Mid Range."
        ]
      },
      "S2_035": {
        "name": "Raido Namiashi",
        "ability": "Bodyguard",
        "descriptions": [
          "Rush(2s). When allied Hiruzen is about to withdraw, pull it back to the start of the lane and withdraw in its place.",
          "Rush(3s). When allied Hiruzen is about to withdraw, pull it back to the start of the lane and withdraw in its place."
        ]
      },
      "S2_036": {
        "name": "Homura Mitokado",
        "ability": "Reassurance",
        "descriptions": [
          "Next ally deployed gains Guard(1) and Chakra(+1).",
          "Next ally deployed gains Guard(1) and Chakra(+2)."
        ]
      },
      "S2_037": {
        "name": "Koharu Utatane",
        "ability": "Security",
        "descriptions": [
          "After 10 seconds, deploy Anbu Black Ops.",
          "After 8 seconds, deploy Anbu Black Ops."
        ]
      },
      "S2_038": {
        "name": "Genma Shiranui",
        "ability": "Proctor",
        "descriptions": [
          "On deploy, Focus(6s). If Focus succeeds, Summon a random card up to 4 energy cost from your deck. If it has 3 or less Chakra, grant it Chakra(+2).",
          "On deploy, Focus(4s). If Focus succeeds, Summon a random card up to 4 cost from your deck. If it has 3 or less chakra, grant it Chakra(+2)."
        ]
      },
      "S2_039": {
        "name": "Genma Shiranui",
        "ability": "Alert",
        "descriptions": [
          "On deploy, Weaken(3) one lane rival in Mid Range.",
          "On deploy, Weaken(3) two lane rivals in Mid Range."
        ]
      },
      "S2_040": {
        "name": "Yashamaru",
        "ability": "Reluctant Duty",
        "descriptions": [
          "On withdraw, Weaken(3) all nearby cards.",
          "On withdraw, Weaken(4) all nearby cards."
        ]
      },
      "S2_041": {
        "name": "Karura",
        "ability": "Mother's Love",
        "descriptions": [
          "On deploy, Chakra(+2) and Slow(3s) to allied Gaara cards.",
          "On deploy, Chakra(+2) and Slow(5s) to allied Gaara cards."
        ]
      },
      "S2_042": {
        "name": "Yugao Uzuki",
        "ability": "Vengeful Oath",
        "descriptions": [
          "Rush(3s). Guard(1). On encounter, Weaken(2).",
          "Rush(4s). Guard(1). On encounter, Weaken(2)."
        ]
      },
      "S2_043": {
        "name": "Hana Inuzuka",
        "ability": "Rush",
        "descriptions": [
          "Rush(4s)",
          "Rush(5s)"
        ]
      },
      "S2_044": {
        "name": "Tsume Inuzuka",
        "ability": "Lead the Charge",
        "descriptions": [
          "Rush(4s). Next ally deployed gains Rush(+3s) and Chakra(+1).",
          "Rush(4s). Next ally deployed gains Rush(+3s) and Chakra(+2)."
        ]
      },
      "S2_045": {
        "name": "Shibi Aburame",
        "ability": "Timely Aid",
        "descriptions": [
          "Rush(5s). Chakra(+1) to allies when reaching them.",
          "Rush(6s). Chakra(+1) to allies when reaching them."
        ]
      },
      "S2_046": {
        "name": "Jirobo",
        "ability": "South",
        "descriptions": [
          "Next Orochimaru deployed gains Chakra(+3).",
          "Next Orochimaru deployed gains Chakra(+4)."
        ]
      },
      "S2_047": {
        "name": "Kidomaru",
        "ability": "East",
        "descriptions": [
          "Next Orochimaru deployed gains Rush(+4s).",
          "Next Orochimaru deployed gains Rush(+5s)."
        ]
      },
      "S2_048": {
        "name": "Sakon",
        "ability": "West",
        "descriptions": [
          "Next Orochimaru deployed will Weaken(3) closest rival card.",
          "Next Orochimaru deployed will Weaken(4) closest rival card."
        ]
      },
      "S2_049": {
        "name": "Tayuya",
        "ability": "North",
        "descriptions": [
          "Next Orochimaru deployed gains Guard(1).",
          "Next Orochimaru deployed gains Guard(2)."
        ]
      },
      "S2_050": {
        "name": "Anbu",
        "ability": "Black Ops",
        "descriptions": [
          "On deploy, randomly gains Chakra(+2) or Rush(4s).",
          "On deploy, randomly gains Chakra(+3) or Rush(5s)."
        ]
      },
      "S2_051": {
        "name": "Naruto Uzumaki",
        "ability": "Breaker of Destiny",
        "descriptions": [
          "Guard(2). When Guard activates, Rush(+2s). When Rush ends, lane Switch.",
          "Guard(3). When Guard activates, Rush(2s). When Rush ends, lane Switch."
        ]
      },
      "S2_052": {
        "name": "Sakura Haruno",
        "ability": "Steadfast",
        "descriptions": [
          "On encounter, Weaken(1) the rival card and Guard(1).",
          "On encounter, Weaken(1) the rival card and Guard(2)."
        ]
      },
      "S2_053": {
        "name": "Rock Lee",
        "ability": "Leaf Whirlwind",
        "descriptions": [
          "On encounter, Push(1) and Weaken(2) the rival card.",
          "On encounter, Push(2) and Weaken(2) the rival card."
        ]
      },
      "S2_054": {
        "name": "Neji Hyuga",
        "ability": "Byakugan",
        "descriptions": [
          "On deploy, reduce the closest rival card's Chakra to half and gain Rush(2s).",
          "On deploy, reduce the closest rival card's Chakra to half and gain Rush(4s)."
        ]
      },
      "S2_055": {
        "name": "Neji Hyuga",
        "ability": "Burden of Destiny",
        "descriptions": [
          "Whenever this card gains Chakra, gain extra Chakra(+1). Cannot have more than 10 total Chakra.",
          "Whenever this card gains Chakra, gain extra Chakra(+2). Cannot have more than 10 total Chakra."
        ]
      },
      "S2_056": {
        "name": "Gai Maito",
        "ability": "Reprimand",
        "descriptions": [
          "Deploy to Mid Range, Chakra(+2) and Pin(2s) closest lane ally.",
          "Deploy to Mid Range, Chakra(+2) and Pin(6s) closest lane ally."
        ]
      },
      "S2_057": {
        "name": "Choji Akimichi",
        "ability": "Human Boulder",
        "descriptions": [
          "Rush(3s). On each encounter, Push(2) and Weaken(1) if Rush is active.",
          "Rush(4s). On each encounter, Push(2) and Weaken(1) if Rush is active."
        ]
      },
      "S2_058": {
        "name": "Ino Yamanaka",
        "ability": "Mind Transfer",
        "descriptions": [
          "On deploy, Focus(8s) and take control of the lane rival in Mid Range with the highest Chakra. After Focus ends, return control of the card to your rival.",
          "On deploy, Focus(12s) and take control of the lane rival in Mid Range with the highest Chakra. After Focus ends, return control of the card to your rival."
        ]
      },
      "S2_059": {
        "name": "Hinata Hyuga",
        "ability": "Deflect",
        "descriptions": [
          "On encounter, Push(1) and lane Switch rival card.",
          "On encounter, Push(2) and lane Switch rival card."
        ]
      },
      "S2_060": {
        "name": "Gaara",
        "ability": "Sand Shield",
        "descriptions": [
          "Guard(2). When Guard activates, Chakra(+1).",
          "Guard(3). When Guard activates, Chakra(+1)."
        ]
      },
      "S2_061": {
        "name": "Temari",
        "ability": "Giant Folding Fan",
        "descriptions": [
          "Guard(2). On deploy and when Guard activates, Push(2) all lane rivals.",
          "Guard(3). On deploy and when Guard activates, Push(3) all lane rivals."
        ]
      },
      "S2_062": {
        "name": "Anko Mitarashi",
        "ability": "Striking Shadow Snakes",
        "descriptions": [
          "On deploy, Weaken(2) and Pin(4s) one lane rival card in Mid Range.",
          "On deploy, Weaken(2) and Pin(4s) two lane rival cards in Mid Range."
        ]
      },
      "S2_063": {
        "name": "Choza Akimichi",
        "ability": "Body Expansion",
        "descriptions": [
          "On encounter, Push(3) and Weaken(2).",
          "On encounter, Push(3) and Weaken(3)."
        ]
      },
      "S2_064": {
        "name": "Inoichi Yamanaka",
        "ability": "Mind Destruction",
        "descriptions": [
          "On deploy, Focus(10s) and take control of the closest lane rival in Mid Range, Slow(10s) it and permanently disable any active skill. After Focus ends, return control of the card to your rival.",
          "On deploy, Focus(14s) and take control of the closest lane rival in Mid Range, Slow(10s) it and permanently disable any active skill. After Focus ends, return control of the card to your rival."
        ]
      },
      "S2_065": {
        "name": "Shikaku Nara",
        "ability": "Shadow Paralysis",
        "descriptions": [
          "On deploy, Pin(10s) self and two lane rivals in Long Range.",
          "On deploy, Pin(12s) self and two lane rivals in Long Range."
        ]
      },
      "S2_066": {
        "name": "Jiraiya",
        "ability": "Pervy Sage",
        "descriptions": [
          "Randomly lane Switch every 10 seconds.",
          "Randomly lane Switch every 8 seconds."
        ]
      },
      "S2_067": {
        "name": "Orochimaru",
        "ability": "Machinations",
        "descriptions": [
          "On deploy and on withdraw, Weaken(1) up to any 4 cards.",
          "On deploy and on withdraw, Weaken(1) up to any 6 cards."
        ]
      },
      "S2_068": {
        "name": "Hashirama Senju",
        "ability": "Edo Regeneration",
        "descriptions": [
          "When below base chakra, Chakra(+1) every 4s until back to base chakra.",
          "When below base chakra, Chakra(+1) every 3s until back to base chakra."
        ]
      },
      "S2_069": {
        "name": "Tobirama Senju",
        "ability": "Edo Regeneration",
        "descriptions": [
          "When below base chakra, Chakra(+1) every 4s until back to base chakra.",
          "When below base chakra, Chakra(+1) every 3s until back to base chakra."
        ]
      },
      "S2_070": {
        "name": "Hiruzen Sarutobi",
        "ability": "The Third",
        "descriptions": [
          "On encounter, Chakra(+2). On withdraw, Chakra(+2) to all allies.",
          "On encounter, Chakra(+3). On withdraw, Chakra(+2) to all allies."
        ]
      },
      "S2_071": {
        "name": "Hayate Gekko",
        "ability": "Crescent Moon Dance",
        "descriptions": [
          "On encounter, Weaken(1) three times. If rival does not withdraw, also Push(2).",
          "On encounter, Weaken(1) three times. If rival does not withdraw, also Push(3)."
        ]
      },
      "S2_072": {
        "name": "Ibiki Morino",
        "ability": "Interrogation",
        "descriptions": [
          "On deploy, Weaken(1) and Slow(4s) all cards.",
          "On deploy, Weaken(1) and Slow(6s) all cards."
        ]
      },
      "S2_073": {
        "name": "Gamahiro",
        "ability": "Heft",
        "descriptions": [
          "On deploy, Chakra(+2) for each allied Toad on the board. Permanent Slow.",
          "On deploy, Chakra(+3) for each allied Toad on the board. Permanent Slow."
        ]
      },
      "S2_074": {
        "name": "Sasuke Uchiha",
        "ability": "Chidori",
        "descriptions": [
          "On encounter, jump through nearby rivals, Weaken(2) each of them. Ignores Guard.",
          "On encounter, jump through nearby rivals, Weaken(3) each of them. Ignores Guard."
        ]
      },
      "S2_075": {
        "name": "Rock Lee",
        "ability": "Weightless",
        "descriptions": [
          "Rush(3s). On each encounter, if rival card has higher Chakra, Push(1) and Weaken(2), then lane Switch.",
          "Rush(3s). On each encounter, if rival card has higher Chakra, Push(2) and Weaken(2), then lane Switch."
        ]
      },
      "S2_076": {
        "name": "Neji Hyuga",
        "ability": "Rotation",
        "descriptions": [
          "On encounter, Push(2) and Weaken(3) all nearby rival cards.",
          "On encounter, Push(4) and Weaken(3) all nearby rival cards."
        ]
      },
      "S2_077": {
        "name": "Kiba Inuzuka",
        "ability": "Man Beast Clone",
        "descriptions": [
          "Next Akamaru deployed becomes a full copy of this card with Rush(4s).",
          "Next Akamaru deployed becomes a full copy of this card with Rush(5s)."
        ]
      },
      "S2_078": {
        "name": "Shikamaru Nara",
        "ability": "Shogi Master",
        "descriptions": [
          "On deploy, Pin(10s) self and gain Chakra(+3). While this card is active, whenever you Pin other allied cards or they Focus, they gain Chakra(+3).",
          "On deploy, Pin(12s) self and gain Chakra(+4). While this card is active, whenever you Pin other allied cards or they Focus, they gain Chakra(+3)."
        ]
      },
      "S2_079": {
        "name": "Asuma Sarutobi",
        "ability": "Chakra Blades",
        "descriptions": [
          "On each encounter, Weaken(1). When this card causes a rival to withdraw, Rush(+1s).",
          "On each encounter, Weaken(2). When this card causes a rival to withdraw, Rush(+1s)."
        ]
      },
      "S2_080": {
        "name": "Gaara",
        "ability": "Unstable",
        "descriptions": [
          "On deploy, Weaken(2) and Slow(6s) all cards on lane.",
          "On deploy, Weaken(2) and Slow(8s) all cards on lane."
        ]
      },
      "S2_081": {
        "name": "Gaara",
        "ability": "Bloodlust",
        "descriptions": [
          "Chakra(+1) whenever allied cards Weaken any number of cards.",
          "Chakra(+2) whenever allied cards Weaken any number of cards."
        ]
      },
      "S2_082": {
        "name": "Kankuro",
        "ability": "Puppet Assault",
        "descriptions": [
          "Weaken(3) and Slow(2s) the first rival card that comes nearby. If rival does not withdraw, lane Switch it. Chakra(+1) and re-enable this skill when another ally causes a rival to Switch.",
          "Weaken(3) and Slow(5s) the first rival card that comes nearby. If rival does not withdraw, lane Switch it. Chakra(+1) and re-enable this skill when another ally causes a rival to Switch."
        ]
      },
      "S2_083": {
        "name": "Jiraya",
        "ability": "Toad Sage",
        "descriptions": [
          "Chakra(+3) to allied Toads while this card is active.",
          "Chakra(+4) to allied Toads while this card is active."
        ]
      },
      "S2_084": {
        "name": "Orochimaru",
        "ability": "Treachery",
        "descriptions": [
          "Ignore all rival skills and encounters. When in Mid Range, Chakra(+2) and become vulnerable.",
          "Ignore all rival skills and encounters. When in Mid Range, Chakra(+3) and become vulnerable."
        ]
      },
      "S2_085": {
        "name": "Orochimaru",
        "ability": "Kusanagi",
        "descriptions": [
          "On each encounter, Weaken(2). Whenever a rival card lane Switch, Switch to the same lane and gain Guard(1).",
          "On each encounter, Weaken(3). Whenever a rival card lane Switch, Switch to the same lane and gain Guard(1)."
        ]
      },
      "S2_086": {
        "name": "Orochimaru",
        "ability": "Edo Tensei",
        "descriptions": [
          "On deploy, Weaken(2) two allies with lowest chakra. For each withdrawal, Summon Edo Hashirama and Tobirama from your deck, granting them Rush(3s).",
          "On deploy, Weaken(2) two allies with lowest chakra. For each withdrawal, Summon Edo Hashirama and Tobirama from your deck, granting them Rush(5s)."
        ]
      },
      "S2_087": {
        "name": "Hashirama Senju",
        "ability": "Deep Forest Emergence",
        "descriptions": [
          "On deploy, Pin(12s) all rival cards.",
          "On deploy, Pin(14s) all rival cards."
        ]
      },
      "S2_088": {
        "name": "Tobirama Senju",
        "ability": "Water Shock Wave",
        "descriptions": [
          "On deploy, Weaken(2) and Slow(4s) all rival cards.",
          "On deploy, Weaken(2) and Slow(8s) all rival cards."
        ]
      },
      "S2_089": {
        "name": "Hiruzen Sarutobi",
        "ability": "Fire Dragon Bombs",
        "descriptions": [
          "On deploy, Weaken(3) and Burn(4) closest rival card.",
          "On deploy, Weaken(3) and Burn(5) closest rival card."
        ]
      },
      "S2_090": {
        "name": "Enma",
        "ability": "Monkey King",
        "descriptions": [
          "Chakra(+1) to allies when they lane Switch.",
          "Chakra(+2) to allies when they lane Switch."
        ]
      },
      "S2_091": {
        "name": "Naruto Uzumaki",
        "ability": "Will to Protect",
        "descriptions": [
          "The first time this card goes below base Chakra, gain Chakra(+4) and Rush(3s). On withdraw, permanently increase base Chakra by 2.",
          "The first time this card goes below base Chakra, gain Chakra(+5) and Rush(3s). On withdraw, permanently increase base Chakra by 2."
        ]
      },
      "S2_092": {
        "name": "Sasuke Uchiha",
        "ability": "Curse Mark",
        "descriptions": [
          "On deploy, Chakra(+3). After each encounter, Chakra(+2).",
          "On deploy, Chakra(+4). After each encounter, Chakra(+2)."
        ]
      },
      "S2_093": {
        "name": "Sakura Haruno",
        "ability": "Unyielding",
        "descriptions": [
          "Permanent Guard. Every time Guard activates, Chakra(+1) and lane Switch.",
          "Permanent Guard. Every time Guard activates, Chakra(+2) and lane Switch."
        ]
      },
      "S2_094": {
        "name": "Rock Lee",
        "ability": "Fifth Gate",
        "descriptions": [
          "On deploy, Focus(5s). If Focus succeeds, gain Chakra(+7) and enable the rest of this skill. Jump to the first rival card that comes nearby. On each encounter, Weaken(2) rival card and Weaken(1) self.",
          "On deploy, Focus(3s). If Focus succeeds, gain Chakra(+7) and enable the rest of this skill. Jump to the first rival card that comes nearby. On each encounter, Weaken(2) rival card and Weaken(1) self."
        ]
      },
      "S2_095": {
        "name": "Neji Hyuga",
        "ability": "Sixty-Four Palms",
        "descriptions": [
          "On each encounter Push(1) and Weaken(1). When this card causes a rival to withdraw, it also permanently reduces its base Chakra by 2.",
          "On each encounter Push(1) and Weaken(2). When this card causes a rival to withdraw, it also permanently reduces its base Chakra by 2."
        ]
      },
      "S2_096": {
        "name": "Gaara",
        "ability": "Sand Release",
        "descriptions": [
          "Guard(1). Whenever a rival card comes nearby, Pin(8s) and gain Chakra(+2). If the rival is already Pinned, Weaken(3) and gain Guard(1) instead.",
          "Guard(2). Whenever a rival card comes nearby, Pin(8s) it and gain Chakra(+2). If the rival is already Pinned, Weaken(3) and gain Guard(1) instead."
        ]
      },
      "S2_097": {
        "name": "Hiruzen Sarutobi",
        "ability": "Elemental Master",
        "descriptions": [
          "On deploy, Weaken(1) and Slow(8s) all lane rivals. The first time this card gains Chakra, Weaken(2) and Burn(3) all lane rivals.",
          "On deploy, Weaken(1) and Slow(12s) all lane rivals. The first time this card gains Chakra, Weaken(2) and Burn(4) all lane rivals."
        ]
      },
      "S2_098": {
        "name": "Hiruzen Sarutobi",
        "ability": "Reaper Death Seal",
        "descriptions": [
          "On deploy, Focus(4s). If Focus succeeds, enable the rest of this skill. When a rival card comes nearby with equal or higher Chakra, remove up to 12 Chakra from it and disable any active skill. If the target withdraws, Seal(15s). On withdraw, Seal(15s) self. Instantly withdraw after sealing 3 cards.",
          "On deploy, Focus(4s). If Focus succeeds, enable the rest of this skill. When a rival card comes nearby with equal or higher Chakra, remove up to 15 Chakra from it and disable any active skill. If the target withdraws, Seal(15s). On withdraw, Seal(15s) self. Instantly withdraw after sealing 3 cards."
        ]
      },
      "S2_099": {
        "name": "Ichibi",
        "ability": "Air Bullets",
        "descriptions": [
          "On deploy, Weaken(2) all lane rivals in Long Range. Every 10 seconds, Focus(2s). If Focus succeeds, Weaken(2) all lane rivals in Long Range.",
          "On deploy, Weaken(3) all lane rivals in Long Range. Every 10 seconds, Focus(2s). If Focus succeeds, Weaken(3) all lane rivals in Long Range."
        ]
      },
      "S2_100": {
        "name": "Kyubi",
        "ability": "Linked Fate",
        "descriptions": [
          "Chakra(+7) to next ally deployed. Cards are linked, when one withdraws so does the other.",
          "Chakra(+8) to next ally deployed. Cards are linked, when one withdraws so does the other."
        ]
      },
      "S3_001": {
        "name": "Naruto Uzumaki",
        "ability": "Shared Dream",
        "descriptions": [
          "Whenever another card with Shared Dream withdraws, this card gains Chakra(+1).",
          "Whenever another card with Shared Dream withdraws, this card gains Chakra(+2)."
        ]
      },
      "S3_002": {
        "name": "Sasuke Uchiha",
        "ability": "Fireball Training",
        "descriptions": [
          "Rush(1s). On deploy, Chakra(+1) for each rival card affected by Burn.",
          "Rush(2s). On deploy, Chakra(+1) for each rival card affected by Burn."
        ]
      },
      "S3_003": {
        "name": "Choji Akimichi",
        "ability": "Partial Arm Expansion",
        "descriptions": [
          "When a rival card comes nearby, Weaken(1) and Push(2) it.",
          "When a rival card comes nearby, Weaken(1) and Push(4) it."
        ]
      },
      "S3_004": {
        "name": "Kankuro",
        "ability": "Puppet Switch",
        "descriptions": [
          "On encounter, Teleport behind rival card, Weaken(2) and Pin(5s) it.",
          "On encounter, Teleport behind rival card, Weaken(2) and Pin(8s) it."
        ]
      },
      "S3_005": {
        "name": "Kankuro",
        "ability": "Iron Maiden",
        "descriptions": [
          "When rival card comes nearby, Pull it to this card and disable its skill, then Weaken(2) it.",
          "When rival card comes nearby, Pull it to this card and disable its skill, then Weaken(3) it."
        ]
      },
      "S3_006": {
        "name": "Neji Hyuga",
        "ability": "Narrow Defense",
        "descriptions": [
          "Guard(2). When Guard activates, 50% chance to Pin(6s) self.",
          "Guard(3). When Guard activates, 50% chance to Pin(6s) self."
        ]
      },
      "S3_007": {
        "name": "Shikamaru Nara",
        "ability": "Slacker",
        "descriptions": [
          "Rush(2s)",
          "Rush(3s)"
        ]
      },
      "S3_008": {
        "name": "Jiraiya",
        "ability": "Rush",
        "descriptions": [
          "Rush(4s)",
          "Rush(5s)"
        ]
      },
      "S3_009": {
        "name": "Jiraiya",
        "ability": "Toad Mouth Trap",
        "descriptions": [
          "On deploy, Pin(6s) all cards on lane.",
          "On deploy, Pin(10s) all cards on lane."
        ]
      },
      "S3_010": {
        "name": "Jiraiya",
        "ability": "Advanced Training",
        "descriptions": [
          "Whenever you deploy a lane ally with 3 or less Chakra, grant them Focus(8s). If that Focus succeeds, the allied card gains Chakra(+3).",
          "Whenever you deploy a lane ally with 3 or less Chakra, grant them Focus(8s). If that Focus succeeds, the allied card gains Chakra(+4)."
        ]
      },
      "S3_011": {
        "name": "Orochimaru",
        "ability": "Guarded",
        "descriptions": [
          "Guard(1)",
          "Guard(2)"
        ]
      },
      "S3_012": {
        "name": "Orochimaru",
        "ability": "Elusive",
        "descriptions": [
          "Rush(3s). When a rival card comes nearby, Weaken(1) it and lane Switch.",
          "Rush(5s). When a rival card comes nearby, Weaken(1) it and lane Switch."
        ]
      },
      "S3_013": {
        "name": "Tsunade",
        "ability": "Rush",
        "descriptions": [
          "Rush(3s)",
          "Rush(4s)"
        ]
      },
      "S3_014": {
        "name": "Tsunade",
        "ability": "Power Flick",
        "descriptions": [
          "Guard(1). When a rival card comes nearby, jump to it and Push(2) it.",
          "Guard(1). When a rival card comes nearby, jump to it and Push(4) it."
        ]
      },
      "S3_015": {
        "name": "Tsunade",
        "ability": "Seasoned",
        "descriptions": [
          "Rush(3s). On encounter, Push(1).",
          "Rush(4s). On encounter, Push(1)."
        ]
      },
      "S3_016": {
        "name": "Manda",
        "ability": "Collosal Serpent",
        "descriptions": [
          "Rush(4s) and Guard(1). When Guard activates, lane Switch.",
          "Rush(4s) and Guard(2). When Guard activates, lane Switch."
        ]
      },
      "S3_017": {
        "name": "Katsuyu",
        "ability": "Acid Shot",
        "descriptions": [
          "On deploy, Weaken(2) and Slow(6s) all rivals in Mid Range.",
          "On deploy, Weaken(3) and Slow(6s) all rivals in Mid Range."
        ]
      },
      "S3_018": {
        "name": "Hiruzen Sarutobi",
        "ability": "Bell Test",
        "descriptions": [
          "Slow(6s) next three allies deployed, granting them Chakra(+1) every 3 seconds while affected by this Slow.",
          "Slow(9s) next three allies deployed, granting them Chakra(+1) every 3 seconds while affected by this Slow."
        ]
      },
      "S3_019": {
        "name": "Itachi Uchiha",
        "ability": "Big Brother",
        "descriptions": [
          "Next Sasuke deployed gains Chakra(+2) and Rush(4s) when deployed on the same lane, or Guard(2) and Slow(10s) when deployed on another lane.",
          "Next Sasuke deployed gains Chakra(+2) and Rush(5s) when deployed on the same lane, or Guard(2) and Slow(12s) when deployed on another lane."
        ]
      },
      "S3_020": {
        "name": "Jirobo",
        "ability": "Cursed Seal Release",
        "descriptions": [
          "Guard(1). On encounter, Push(1).",
          "Guard(2). On encounter, Push(1)."
        ]
      },
      "S3_021": {
        "name": "Kidomaru",
        "ability": "Cursed Seal Release",
        "descriptions": [
          "Guard(1) and Rush(2s).",
          "Guard(1) and Rush(4s)."
        ]
      },
      "S3_022": {
        "name": "Kidomaru",
        "ability": "Rain of Spiders",
        "descriptions": [
          "On deploy, randomly Pin(4s) or Slow(6s) all rival cards.",
          "On deploy, randomly Pin(6s) or Slow(8s) all rival cards."
        ]
      },
      "S3_023": {
        "name": "Kimimaro",
        "ability": "Bone Control",
        "descriptions": [
          "Rush(2s). On encounter, Weaken(3).",
          "Rush(4s). On encounter, Weaken(3)."
        ]
      },
      "S3_024": {
        "name": "Sakon & Ukon",
        "ability": "Cursed Seal Release",
        "descriptions": [
          "Guard(1). On encounter, Weaken(1).",
          "Guard(1). On encounter, Weaken(2)."
        ]
      },
      "S3_025": {
        "name": "Tayuya",
        "ability": "Cursed Seal Release",
        "descriptions": [
          "Guard(1) and Rush(2s).",
          "Guard(1) and Rush(4s)."
        ]
      },
      "S3_026": {
        "name": "Kimimaro",
        "ability": "Cursed Seal Release",
        "descriptions": [
          "Guard(1). When a rival card comes nearby, Pin(2s) self and Chakra(+1). On encounter, Weaken(1).",
          "Guard(2). When a rival card comes nearby, Pin(2s) self and Chakra(+1). On encounter, Weaken(1)."
        ]
      },
      "S3_027": {
        "name": "Shizune",
        "ability": "Devoted Pig",
        "descriptions": [
          "On deploy, Summon Tonton with Chakra(1) and Rush(5s) on the same lane as allied Tsunade. When reaching an allied Tsunade card, grant it Chakra(+3) and then withdraw.",
          "On deploy, Summon Tonton with Chakra(1) and Rush(5s) on the same lane as allied Tsunade. When reaching an allied Tsunade card, grant it Chakra(+4) and then withdraw."
        ]
      },
      "S3_028": {
        "name": "Tsume Inuzuka",
        "ability": "Houndmaster",
        "descriptions": [
          "On deploy, Summon Kuromaru with Chakra(3) on another lane. The next Ninja Hound deployed gains Chakra(+2).",
          "On deploy, Summon Kuromaru with Chakra(3) on another lane. The next Ninja Hound deployed gains Chakra(+3)."
        ]
      },
      "S3_029": {
        "name": "Akahoshi",
        "ability": "Deceitful Training",
        "descriptions": [
          "Whenever allied cards Focus, grant them Focus(+4s). Weaken(1) allied cards every 4 seconds during Focus.",
          "Whenever allied cards Focus, grant them Focus(+6s). Weaken(1) allied cards every 4 seconds during Focus."
        ]
      },
      "S3_030": {
        "name": "Amachi",
        "ability": "Water Cannonball",
        "descriptions": [
          "Rush(2s). On deploy, Weaken(1) closest rival card in Mid Range.",
          "Rush(3s). On deploy, Weaken(2) closest rival card in Mid Range."
        ]
      },
      "S3_031": {
        "name": "Aoi Rokusho",
        "ability": "Needle Shower",
        "descriptions": [
          "On encounter, Weaken(1) and Slow(3s) all nearby lane rivals.",
          "On encounter, Weaken(1) and Slow(5s) all nearby lane rivals."
        ]
      },
      "S3_032": {
        "name": "Dan Kato",
        "ability": "Shared Dream",
        "descriptions": [
          "Whenever another card with Shared Dream withdraws, this card gains Chakra(+1).",
          "Whenever another card with Shared Dream withdraws, this card gains Chakra(+2)."
        ]
      },
      "S3_033": {
        "name": "Fugaku Uchiha",
        "ability": "Uchiha Leader",
        "descriptions": [
          "When deploying Uchiha allies, they gain Guard(+1) and Slow(6s) if they have 3 Chakra or less, otherwise they gain Chakra(+2) and Pin(4s).",
          "When deploying Uchiha allies, they gain Guard(+2) and Slow(6s) if they have 3 Chakra or less, otherwise they gain Chakra(+3) and Pin(4s)."
        ]
      },
      "S3_034": {
        "name": "Fūjin",
        "ability": "Legendary Strength",
        "descriptions": [
          "Guard(1). On encounter, Weaken(1) and Push(3).",
          "Guard(2). On encounter, Weaken(1) and Push(3)."
        ]
      },
      "S3_035": {
        "name": "Gamatatsu",
        "ability": "Food Motivated",
        "descriptions": [
          "On deploy, Focus(12s). Every 4 seconds during Focus, spend 1 energy if available to grant other allied Toads Chakra(+2).",
          "On deploy, Focus(16s). Every 4 seconds during Focus, spend 1 energy if available to grant other allied Toads Chakra(+2)."
        ]
      },
      "S3_036": {
        "name": "Hanzaki",
        "ability": "Robbery Scheme",
        "descriptions": [
          "Rush(2s). On deploy, Weaken(1) all lane allies, gaining Chakra(+2) for each ally affected.",
          "Rush(3s). On deploy, Weaken(1) all lane allies, gaining Chakra(+2) for each ally affected."
        ]
      },
      "S3_037": {
        "name": "Hanzaki",
        "ability": "Zanbato Lunge",
        "descriptions": [
          "Guard(1). When a rival card comes nearby, jump to it then Weaken(1) or Push(1) it.",
          "Guard(2). When a rival card comes nearby, jump to it then Weaken(1) or Push(1) it."
        ]
      },
      "S3_038": {
        "name": "Idate Morino",
        "ability": "Racer",
        "descriptions": [
          "Rush(4s). On encounter, lane Switch.",
          "Rush(5s). On encounter, lane Switch."
        ]
      },
      "S3_039": {
        "name": "Jirocho Wasabi",
        "ability": "Honest Belief",
        "descriptions": [
          "Next ally deployed on another lane gains Rush(2s) and Guard(1). When this ally reaches Mid Range, convert remaining Rush in up to 3 Chakra.",
          "Next ally deployed on another lane gains Rush(3s) and Guard(1). When this ally reaches Mid Range, convert remaining Rush in up to 3 Chakra."
        ]
      },
      "S3_040": {
        "name": "Arashi",
        "ability": "Binding Mandala",
        "descriptions": [
          "On deploy, Push(2) and Pin(8s) lane rival with highest Chakra. While affected by this Pin, Weaken(1) the rival card every 4s.",
          "On deploy, Push(4) and Pin(8s) lane rival with highest Chakra. While affected by this Pin, Weaken(1) the rival card every 4s."
        ]
      },
      "S3_041": {
        "name": "Kagerō",
        "ability": "Kagero Ninja Art",
        "descriptions": [
          "On deploy, Weaken(3) two lane rivals in Mid Range, then lane Switch self and two lane allies in Short Range.",
          "On deploy, Weaken(4) two lane rivals in Mid Range, then lane Switch self and two lane allies in Short Range."
        ]
      },
      "S3_042": {
        "name": "Kyuroku Wagarashi",
        "ability": "Dishonorable",
        "descriptions": [
          "Next lane ally deployed gains Rush(4s). On withdraw, lane Switch and Slow(3s) all lane allies.",
          "Next lane ally deployed gains Rush(5s). On withdraw, lane Switch and Slow(3s) all lane allies."
        ]
      },
      "S3_043": {
        "name": "Mikoto Uchiha",
        "ability": "Soothing",
        "descriptions": [
          "Next Sasuke deployed gains Chakra(+1). The first time an allied Sasuke card goes below base Chakra, Heal(1) it.",
          "Next Sasuke deployed gains Chakra(+1). The first time an allied Sasuke card goes below base Chakra, Heal(2) it."
        ]
      },
      "S3_044": {
        "name": "Mizuki",
        "ability": "Animal Cursed Seal",
        "descriptions": [
          "On encounter, Weaken(4). After 20 seconds, set self to Chakra(1) and disable this skill.",
          "On encounter, Weaken(5). After 20 seconds, set self to Chakra(1) and disable this skill."
        ]
      },
      "S3_045": {
        "name": "Nawaki",
        "ability": "Shared Dream",
        "descriptions": [
          "Whenever another card with Shared Dream withdraws, this card gains Chakra(+1).",
          "Whenever another card with Shared Dream withdraws, this card gains Chakra(+2)."
        ]
      },
      "S3_046": {
        "name": "Raiga Kurosuki",
        "ability": "Thunderswords",
        "descriptions": [
          "When a rival card comes nearby, Weaken(1) and lane Switch it.",
          "When a rival card comes nearby, Weaken(2) and lane Switch it."
        ]
      },
      "S3_047": {
        "name": "Raijin",
        "ability": "Legendary Strength",
        "descriptions": [
          "Guard(1). On encounter, Weaken(1) and Push(3).",
          "Guard(2). On encounter, Weaken(1) and Push(3)."
        ]
      },
      "S3_048": {
        "name": "Sumaru",
        "ability": "Local Guidance",
        "descriptions": [
          "On deploy, two allies in Short Range gain Rush(3s).",
          "On deploy, three allies in Short Range gain Rush(3s)."
        ]
      },
      "S3_049": {
        "name": "Yoshino Nara",
        "ability": "Strict",
        "descriptions": [
          "Next Shikamaru deployed gains Chakra(+1) and Slow(8s).",
          "Next Shikamaru deployed gains Chakra(+1) and Slow(12s)."
        ]
      },
      "S3_050": {
        "name": "Uchiha Trio",
        "ability": "Suspicion",
        "descriptions": [
          "Rush(4s). When in Mid Range, Chakra(+2).",
          "Rush(6s). When in Mid Range, Chakra(+2)."
        ]
      },
      "S3_051": {
        "name": "Naruto Uzumaki",
        "ability": "Demon Fox Cloak",
        "descriptions": [
          "Rush(3s). On deploy, Chakra(+2). The first time this card goes below base chakra, Heal(2).",
          "Rush(5s). On deploy, Chakra(+2). The first time this card goes below base chakra, Heal(2)."
        ]
      },
      "S3_052": {
        "name": "Sasuke Uchiha",
        "ability": "Cursed Seal Release",
        "descriptions": [
          "The first time this card gains Chakra, gain extra Chakra(+2).",
          "The first time this card gains Chakra, gain extra Chakra(+4)."
        ]
      },
      "S3_053": {
        "name": "Kankuro",
        "ability": "Outmaneuver",
        "descriptions": [
          "Whenever allies teleport behind rivals, gain Chakra(+2).",
          "Whenever allies teleport behind rivals, gain Chakra(+3)."
        ]
      },
      "S3_054": {
        "name": "Shikamaru Nara",
        "ability": "Shadow Strangle",
        "descriptions": [
          "When a rival card comes nearby, Pin(6s) it and this card. Rival card loses 1 Chakra every 2 seconds while affected by this Pin.",
          "When a rival card comes nearby, Pin(8s) it and this card. Rival card loses 1 Chakra every 2 seconds while affected by this Pin."
        ]
      },
      "S3_055": {
        "name": "Akamaru",
        "ability": "Marking",
        "descriptions": [
          "On deploy, Slow(8s) all lane rivals. While this Slow is active, Weaken(+1) to allied Weaken skills applied to affected rivals.",
          "On deploy, Slow(12s) all lane rivals. While this Slow is active, Weaken(+1) to allied Weaken skills applied to affected rivals."
        ]
      },
      "S3_056": {
        "name": "Itachi Uchiha",
        "ability": "Poise",
        "descriptions": [
          "Gain Chakra(+1) and Pin(2s) self whenever any card gains Focus.",
          "Gain Chakra(+2) and Pin(4s) self whenever any card gains Focus."
        ]
      },
      "S3_057": {
        "name": "Jiraiya",
        "ability": "Seasoned",
        "descriptions": [
          "Rush(3s). On encounter, lane Switch.",
          "Rush(4s). On encounter, lane Switch."
        ]
      },
      "S3_058": {
        "name": "Jiraiya",
        "ability": "Needle Jizo",
        "descriptions": [
          "Guard(2). When Guard activates, Weaken(2) the rival that triggered it. Ignores Guard.",
          "Guard(3). When Guard activates, Weaken(2) the rival that triggered it. Ignores Guard."
        ]
      },
      "S3_059": {
        "name": "Orochimaru",
        "ability": "Seasoned",
        "descriptions": [
          "Rush(3s). On encounter, Weaken(1).",
          "Rush(4s). On encounter, Weaken(1)."
        ]
      },
      "S3_060": {
        "name": "Tsunade",
        "ability": "The Fifth",
        "descriptions": [
          "On deploy, Chakra(+1) to all allies on other lanes. While this card is active, whenever an ally is Weakened the first time, Heal(2) it.",
          "On deploy, Chakra(+2) to all allies on other lanes. While this card is active, whenever an ally is Weakened the first time, Heal(2) it."
        ]
      },
      "S3_061": {
        "name": "Tsunade",
        "ability": "Legendary Sitting Duck",
        "descriptions": [
          "On deploy, 10% chance to gain Chakra(+6). Otherwise, gain Rush(3s).",
          "On deploy, 10% chance to gain Chakra(+7). Otherwise, gain Rush(4s)."
        ]
      },
      "S3_062": {
        "name": "Tsunade",
        "ability": "Desperate Healing",
        "descriptions": [
          "On deploy, Heal(2) closest lane ally. The first time a lane ally loses Chakra from any source, Heal(2) it.",
          "On deploy, Heal(3) closest lane ally. The first time a lane ally loses Chakra from any source, Heal(3) it."
        ]
      },
      "S3_063": {
        "name": "Gamabunta",
        "ability": "Toad Kenjutsu",
        "descriptions": [
          "When a rival card comes nearby, jump to it and Weaken(2). Gain Rush(+3s) the first time when gaining Chakra.",
          "When a rival card comes nearby, jump to it and Weaken(3). Gain Rush(+4s) the first time when gaining Chakra."
        ]
      },
      "S3_064": {
        "name": "Kabuto Yakuchi",
        "ability": "Chakra Scalpel",
        "descriptions": [
          "Rush(2s). On encounter, Teleport behind rival card and permanently Pin it.",
          "Rush(3s). On encounter, Teleport behind rival card and permanently Pin it."
        ]
      },
      "S3_065": {
        "name": "Kisame Hoshigaki",
        "ability": "Samehada Guard",
        "descriptions": [
          "Guard(3). When Guard activates, Weaken(1) the rival that triggered Guard and gain Chakra(+1).",
          "Guard(4). When Guard activates, Weaken(1) the rival that triggered Guard and gain Chakra(+1)."
        ]
      },
      "S3_066": {
        "name": "Jirobo",
        "ability": "Chakra Drain",
        "descriptions": [
          "On each encounter, Chakra(+1) to this card and Weaken(1) rival card.",
          "On each encounter, Chakra(+1) to this card and Weaken(2) rival card."
        ]
      },
      "S3_067": {
        "name": "Sakon & Ukon",
        "ability": "Cursed Fusion",
        "descriptions": [
          "On encounter, Teleport behind rival card then Pin(6s) it and self. Rival loses 1 Chakra every 2 seconds while affected by this Pin.",
          "On encounter, Teleport behind rival card then Pin(8s) it and self. Rival loses 1 Chakra every 2 seconds while affected by this Pin."
        ]
      },
      "S3_068": {
        "name": "Kurenai Yuhi",
        "ability": "Genjutsu Feint",
        "descriptions": [
          "On encounter, Teleport behind rival card, Weaken(2) and Slow(4s).",
          "On encounter, Teleport behind rival card, Weaken(2) and Slow(8s)."
        ]
      },
      "S3_069": {
        "name": "Shizune",
        "ability": "Poison Mist",
        "descriptions": [
          "On deploy, Slow(8s) all cards in Mid Range and disable their skills. They lose 2 Chakra every 4 seconds while affected by this Slow.",
          "On deploy, Slow(12s) all cards in Mid Range and disable their skills. They lose 2 Chakra every 4 seconds while affected by this Slow."
        ]
      },
      "S3_070": {
        "name": "Akahoshi",
        "ability": "Unscrupulous",
        "descriptions": [
          "Guard(1). When Guard activates, Weaken(2) the rival that activated it. The first time this card loses Chakra, Weaken(2) a random ally and gain Chakra(+2) and Guard(+1).",
          "Guard(1). When Guard activates, Weaken(2) the rival that activated it. The first time this card loses Chakra, Weaken(2) a random ally and gain Chakra(+3) and Guard(+1)."
        ]
      },
      "S3_071": {
        "name": "Amachi",
        "ability": "Sea Monster",
        "descriptions": [
          "On deploy, Pin(6s) self. While affected by Pin, every 3 seconds Pin(3s) or Slow(6s) all lane rivals.",
          "On deploy, Pin(9s) self. While affected by Pin, every 3 seconds Pin(3s) or Slow(6s) all lane rivals."
        ]
      },
      "S3_072": {
        "name": "Aoi Rokusho",
        "ability": "Raijin Sword",
        "descriptions": [
          "Guard(2). On encounter, Weaken(1) and Pin(2s) rival card. Ignores Guard.",
          "Guard(2). On encounter, Weaken(2) and Pin(4s) rival card. Ignores Guard."
        ]
      },
      "S3_073": {
        "name": "Sumaru",
        "ability": "Star Chakra",
        "descriptions": [
          "On deploy, Chakra(+1) and lane Switch if lane allies are present. On encounter, Weaken(2) rival card.",
          "On deploy, Chakra(+1) and lane Switch if lane allies are present. On encounter, Weaken(3) rival card."
        ]
      },
      "S3_074": {
        "name": "Naruto Uzumaki",
        "ability": "Rasengan",
        "descriptions": [
          "On encounter, Weaken(2) and Push(4). Removes all Guard from rival card.",
          "On encounter, Weaken(3) and Push(5). Removes all Guard from rival card."
        ]
      },
      "S3_075": {
        "name": "Naruto Uzumaki",
        "ability": "One-Tail Form",
        "descriptions": [
          "On each encounter, Weaken(1). The first time this card goes below base Chakra, Heal(3) self.",
          "On each encounter, Weaken(1). The first time this card goes below base Chakra, Heal(4) self."
        ]
      },
      "S3_076": {
        "name": "Sasuke Uchiha",
        "ability": "Evolved Prediction",
        "descriptions": [
          "Guard(3). When Guard activates, Chakra(+1). Cannot be Weakened during encounters with rival cards of 3 or less Chakra.",
          "Guard(3). When Guard activates, Chakra(+2). Cannot be Weakened during encounters with rival cards of 3 or less Chakra."
        ]
      },
      "S3_077": {
        "name": "Sasuke Uchiha",
        "ability": "Winged Defense",
        "descriptions": [
          "Guard(2). On encounter, Weaken(2). When Guard activates, gain Rush(2s) and re-enable this skill.",
          "Guard(2). On encounter, Weaken(2). When Guard activates, gain Rush(4s) and re-enable this skill."
        ]
      },
      "S3_078": {
        "name": "Gaara",
        "ability": "Shukaku's Shield",
        "descriptions": [
          "Guard(3). While this card is active, lane allies behind it ignore rival skill effects but consume this card's Guard.",
          "Guard(4). While this card is active, lane allies behind it ignore rival skill effects but consume this card's Guard."
        ]
      },
      "S3_079": {
        "name": "Kiba Inuzuka",
        "ability": "Transformation Combo",
        "descriptions": [
          "On deploy, withdraw allied Akamaru and Kiba and transfer their Chakra to this card, gaining additional Chakra(+1) for each withdrawal. On each encounter, Weaken(1).",
          "On deploy, withdraw allied Akamaru and Kiba and transfer their Chakra to this card, gaining additional Chakra(+2) for each withdrawal. On each encounter, Weaken(1)."
        ]
      },
      "S3_080": {
        "name": "Rock Lee",
        "ability": "Loopy Fist",
        "descriptions": [
          "Every 10s, Focus(3s) self. If Focus succeeds, randomly gain Rush(2s), Guard(1) or Chakra(+1). On each encounter, Weaken(1).",
          "Every 8s, Focus(3s) self. If Focus succeeds, randomly gain Rush(2s), Guard(1) or Chakra(+1). On each encounter, Weaken(1)."
        ]
      },
      "S3_081": {
        "name": "Temari",
        "ability": "Quick Beheading Dance",
        "descriptions": [
          "On deploy, Focus(9s). Every 3 seconds during Focus, Weaken(1) and Push(2) all rivals in Mid and Long Range.",
          "On deploy, Focus(9s). Every 3 seconds during Focus, Weaken(1) and Push(4) all rivals in Mid and Long Range."
        ]
      },
      "S3_082": {
        "name": "Itachi Uchiha",
        "ability": "Tsukuyomi Army",
        "descriptions": [
          "While this card is active, whenever you Pin rival cards, Summon a clone of this card on that same lane with Rush(4s) and lose 1 Chakra. Clones cannot score base hits or gain Chakra.",
          "While this card is active, whenever you Pin rival cards, Summon a clone of this card on that same lane with Rush(6s) and lose 1 Chakra. Clones cannot score base hits or gain Chakra."
        ]
      },
      "S3_083": {
        "name": "Itachi Uchiha",
        "ability": "Amaterasu Escape",
        "descriptions": [
          "Whenever a rival card comes nearby Burn(10) it, then lane Switch and lose 1 Chakra. This Burn effect can spread to other cards when they touch and ignores Guard.",
          "Whenever a rival card comes nearby Burn(15) it, then lane Switch and lose 1 Chakra. This Burn effect can spread to other cards when they touch and ignores Guard."
        ]
      },
      "S3_084": {
        "name": "Jiraiya",
        "ability": "Toad Oil Flamethrower",
        "descriptions": [
          "On deploy Burn(3) all rival cards then Focus(8s). During Focus, gain Chakra(+1) whenever allies apply Burn. If Focus succeeds, Burn(4) all rival cards.",
          "On deploy Burn(3) all rival cards then Focus(8s). During Focus, gain Chakra(+1) whenever allies apply Burn. If Focus succeeds, Burn(5) all rival cards."
        ]
      },
      "S3_085": {
        "name": "Gamabunta",
        "ability": "Toad Oil Combo",
        "descriptions": [
          "On deploy, Burn(3) all lane rivals. If any rivals are already affected by Burn, instantly trigger the remaining Burn amount.",
          "On deploy, Burn(4) all lane rivals. If any rivals are already affected by Burn, instantly trigger the remaining Burn amount."
        ]
      },
      "S3_086": {
        "name": "Kidomaru",
        "ability": "Spider Bow",
        "descriptions": [
          "On deploy, Focus(12s). Every 4 seconds during Focus, Weaken(2) and Pin(6s) highest Chakra rival in Long Range.",
          "On deploy, Focus(16s). Every 4 seconds during Focus, Weaken(2) and Pin(6s) highest Chakra rival in Long Range."
        ]
      },
      "S3_087": {
        "name": "Tayuya",
        "ability": "Demonic Flute",
        "descriptions": [
          "On deploy, Chakra(+1). While this card is active, Slows applied by allies do not expire.",
          "On deploy, Chakra(+2). While this card is active, Slows applied by allies do not expire."
        ]
      },
      "S3_088": {
        "name": "Kimimaro",
        "ability": "Living Weapon",
        "descriptions": [
          "Guard(3). On each encounter, Weaken(2). Lane Switch when causing a rival to withdraw.",
          "Guard(5). On each encounter, Weaken(2). Lane Switch when causing a rival to withdraw."
        ]
      },
      "S3_089": {
        "name": "Akahoshi",
        "ability": "Star Dragon",
        "descriptions": [
          "On deploy, Push(2), Weaken(1) and Pin(4s) all lane rivals.",
          "On deploy, Push(2), Weaken(1) and Pin(8s) all lane rivals."
        ]
      },
      "S3_090": {
        "name": "Raiga Kurosuki",
        "ability": "Thunder Dragon Tornado",
        "descriptions": [
          "On deploy, Focus(8s). If Focus succeeds, Weaken(3) and Push(2) all lane rivals in Short and Mid Range.",
          "On deploy, Focus(6s). If Focus succeeds, Weaken(3) and Push(2) all lane rivals in Short and Mid Range."
        ]
      },
      "S3_091": {
        "name": "Sasuke Uchiha",
        "ability": "Black Chidori",
        "descriptions": [
          "Rush(4s). Jump to the first rival card that comes nearby, gain Chakra(+2) and Weaken(3) it. Weaken(2) all other nearby cards. Ignores Guard.",
          "Rush(5s). Jump to the first rival card that comes nearby, gain Chakra(+2) and Weaken(4) it. Weaken(2) all other nearby cards. Ignores Guard."
        ]
      },
      "S3_092": {
        "name": "Naruto Uzumaki",
        "ability": "Demon Fox Rasengan",
        "descriptions": [
          "Rush(4s). Jump to the first rival card that comes nearby, Weaken(3) and Push(2) it. Weaken(2) all other nearby cards. Removes all Guard from rival card.",
          "Rush(5s). Jump to the first rival card that comes nearby, Weaken(4) and Push(2) it. Weaken(2) all other nearby cards. Removes all Guard from rival card."
        ]
      },
      "S3_093": {
        "name": "Choji Akimichi",
        "ability": "Butterfly Rage",
        "descriptions": [
          "Guard(3). When Guard activates, Chakra(+2). If the rival card that triggered Guard is nearby, jump to it. While Guard is available, Weaken(2) and Push(1) on each encounter.",
          "Guard(3). When Guard activates, Chakra(+3). If the rival card that triggered Guard is nearby, jump to it. While Guard is available, Weaken(2) and Push(1) on each encounter."
        ]
      },
      "S3_094": {
        "name": "Gaara",
        "ability": "Sand Tsunami",
        "descriptions": [
          "On deploy, Focus(6s). Every 2 seconds during Focus, Weaken(1) and Push(1) all rival cards. If they have 2 or less Chakra, Weaken(2) instead. When this card causes another to withdraw, Seal(5s) it.",
          "On deploy, Focus(8s). Every 2 seconds during Focus, Weaken(1) and Push(1) all rival cards. If they have 3 or less Chakra, Weaken(3) instead. When this card causes another to withdraw, Seal(5s) it."
        ]
      },
      "S3_095": {
        "name": "Itachi Uchiha",
        "ability": "Tsukuyomi",
        "descriptions": [
          "On deploy, Pin(12s) closest rival card, then lose 1 Chakra. If rival card is above 1 Chakra, it loses 1 Chakra each second. Whenever allies Pin rival cards, retrigger this skill for each affected rival.",
          "On deploy, Pin(16s) closest rival card, then lose 1 Chakra. If rival card is above 1 Chakra, it loses 1 Chakra each second. Whenever allies Pin rival cards, retrigger this skill for each affected rival."
        ]
      },
      "S3_096": {
        "name": "Itachi Uchiha",
        "ability": "Carnage",
        "descriptions": [
          "Whenever any card is deployed on the same lane, Weaken(1) and Pin(10s). If it has 3 or less Chakra, Weaken(3) instead. Lane Switch afterwards.",
          "Whenever any card is deployed on the same lane, Weaken(2) and Pin(10s). If it has 4 or less Chakra, Weaken(4) instead. Lane Switch afterwards."
        ]
      },
      "S3_097": {
        "name": "Tsunade",
        "ability": "Mitotic Regeneration",
        "descriptions": [
          "The first time this card goes below base Chakra, Heal back to base chakra and gain Chakra(+4). For the next 10 seconds, ignore rival skills and Heal(4) after each encounter. On withdraw, permanently decrease base Chakra by 1.",
          "The first time this card goes below base Chakra, Heal back to base chakra and gain Chakra(+5). For the next 10 seconds, ignore rival skills and Heal(4) after each encounter. On withdraw, permanently decrease base Chakra by 1."
        ]
      },
      "S3_098": {
        "name": "Sakon & Ukon",
        "ability": "Synchronized Defense",
        "descriptions": [
          "Deploys as Sakon and Ukon on separate lanes with Guard(2). Whenever allied Guard activates, both cards gain Chakra(+1).",
          "Deploys as Sakon and Ukon on separate lanes with Guard(4). Whenever allied Guard activates, both cards gain Chakra(+1)."
        ]
      },
      "S3_099": {
        "name": "Tayuya",
        "ability": "Doki Summoning",
        "descriptions": [
          "On deploy, Focus(8s). If Focus succeeds, Summon a Doki demon on each lane. Whenever you Summon other cards, they gain Chakra(+1). Ignore all rival skills and encounters while the demons are active.",
          "On deploy, Focus(6s). If Focus succeeds, Summon a Doki demon on each lane. Whenever you Summon other cards, they gain Chakra(+1). Ignore all rival skills and encounters while the demons are active."
        ]
      },
      "S3_100": {
        "name": "Kimimaro",
        "ability": "Unwavering Loyalty",
        "descriptions": [
          "On deploy, gain Chakra(+6) and Rush(5s). Permanent Guard while Rush is active. On each encounter, Weaken(1) self and Weaken(3) rival card. On withdraw, Weaken(2) all cards. Cannot be affected by allied skills.",
          "On deploy, gain Chakra(+8) and Rush(6s). Permanent Guard while Rush is active. On each encounter, Weaken(1) self and Weaken(3) rival card. On withdraw, Weaken(2) all cards. Cannot be affected by allied skills."
        ]
      }
    },
    "ruleNotes": {
      "S2_041": "{allies} allies of the required character; deck composition is not checked.",
      "S1_004": "Encounter effects applied over {activations} encounters.",
      "S1_005": "Encounter effects applied over {activations} encounters.",
      "S1_008": "Encounter effects applied over {activations} encounters.",
      "S1_010": "Encounter effects applied over {activations} encounters.",
      "S1_023": "Encounter effects applied over {activations} encounters.",
      "S1_030": "Encounter effects applied over {activations} encounters.",
      "S1_035": "Encounter effects applied over {activations} encounters.",
      "S2_007": "Encounter effects applied over {activations} encounters.",
      "S2_025": "Encounter effects applied over {activations} encounters.",
      "S2_030": "Encounter effects applied over {activations} encounters.",
      "S2_042": "Encounter effects applied over {activations} encounters.",
      "S2_052": "Encounter effects applied over {activations} encounters.",
      "S2_053": "Encounter effects applied over {activations} encounters.",
      "S2_063": "Encounter effects applied over {activations} encounters.",
      "S3_004": "Encounter effects applied over {activations} encounters.",
      "S3_023": "Encounter effects applied over {activations} encounters.",
      "S3_024": "Encounter effects applied over {activations} encounters.",
      "S3_034": "Encounter effects applied over {activations} encounters.",
      "S3_044": "One encounter before 20s; the later reset to Chakra(1) is excluded from the peak. Effects without explicit repetition apply once.",
      "S3_047": "Encounter effects applied over {activations} encounters.",
      "S3_059": "Encounter effects applied over {activations} encounters.",
      "S3_068": "Encounter effects applied over {activations} encounters.",
      "S3_072": "Encounter effects applied over {activations} encounters.",
      "S3_074": "Encounter effects applied over {activations} encounters.",
      "S1_003": "One new unit with the stated Chakra.",
      "S1_019": "{allies} targets/events for the specified group; favourable conditions.",
      "S1_046": "{allies} targets/events for the specified group; favourable conditions.",
      "S1_062": "{allies} targets/events for the specified group; favourable conditions.",
      "S1_073": "{allies} targets/events for the specified group; favourable conditions.",
      "S2_015": "{allies} targets/events for the specified group; favourable conditions.",
      "S2_022": "{allies} targets/events for the specified group; favourable conditions.",
      "S2_073": "{allies} targets/events for the specified group; favourable conditions.",
      "S2_083": "{allies} targets/events for the specified group; favourable conditions.",
      "S3_002": "{allies} targets/events for the specified group; favourable conditions.",
      "S1_020": "Damage to an ally is subtracted.",
      "S1_021": "3 allies.",
      "S1_022": "3 allies.",
      "S1_024": "The number of allies stated for the level.",
      "S1_033": "One bonus: Akamaru or this card. Recalling from the deck does not duplicate base power.",
      "S1_038": "The number of allies stated for the level.",
      "S1_053": "{enemies} enemies hit.",
      "S1_069": "{enemies} enemies hit.",
      "S1_074": "{enemies} enemies hit.",
      "S1_079": "{enemies} enemies hit.",
      "S1_081": "{enemies} enemies hit.",
      "S2_008": "{enemies} enemies hit.",
      "S2_076": "{enemies} enemies in one encounter. Effects without explicit repetition apply once.",
      "S2_088": "{enemies} enemies hit.",
      "S3_017": "{enemies} enemies hit.",
      "S3_031": "{enemies} enemies in one encounter. Effects without explicit repetition apply once.",
      "S3_089": "{enemies} enemies hit.",
      "S3_090": "{enemies} enemies hit.",
      "S1_056": "The branch with a numerical bonus is used. Recalling Hiruzen does not add his power again.",
      "S1_060": "Card recalled from the deck: its power is already included, so no new unit is counted.",
      "S1_071": "Maximum stated number of clones, assuming enough energy.",
      "S1_083": "Highest conditional branch: {enemies} enemies and {allies} allies, with no net gain.",
      "S2_002": "{enemies} enemies with higher Chakra.",
      "S2_016": "Three new units with Chakra(1); recycling the card is not simulated.",
      "S2_018": "One ally for each of the two names; required identities are not checked.",
      "S2_019": "One ally for each of the two names; required identities are not checked.",
      "S2_020": "One ally for each of the two names; required identities are not checked.",
      "S2_032": "Bonus to the recalled Toad; its power is already included in the deck.",
      "S2_037": "Anbu Black Ops has no stated Chakra: the Summon is not quantified.",
      "S2_038": "Low-Chakra bonus branch; the card summoned from the deck is not duplicated.",
      "S2_039": "One or two enemies, depending on the level.",
      "S2_040": "{enemies} enemies and {allies} allies hit on withdrawal; no net gain.",
      "S2_054": "Halves enemy Chakra: the value needs the target's Chakra. Enter a correction.",
      "S2_058": "Temporary control of an enemy is not converted into power.",
      "S2_064": "Temporary control of an enemy is not converted into power.",
      "S2_062": "One or two enemies, depending on the level.",
      "S2_067": "Explicit number of targets; one deployment and one withdrawal.",
      "S2_070": "One encounter; bonus to {allies} allies once on withdrawal. Effects without explicit repetition apply once.",
      "S2_071": "3 hits in one encounter. Effects without explicit repetition apply once.",
      "S2_072": "{enemies} enemies and {allies} allies: friendly damage offsets enemy damage.",
      "S2_080": "{enemies} enemies and {allies} allies: friendly damage offsets enemy damage.",
      "S2_074": "{enemies} nearby enemies in one encounter. Effects without explicit repetition apply once.",
      "S2_077": "Copy of an allied card, with no new power added to the deck total.",
      "S2_086": "Damage to the two allies is subtracted; recalling from the deck is not duplicated and sacrifices are not simulated.",
      "S2_089": "Burn is treated as total damage equal to its number.",
      "S2_091": "Bonus once. The base increase on withdrawal applies to the next life and is not added.",
      "S2_097": "Two distinct events, both against {enemies} enemies; Burn is treated as total damage.",
      "S3_027": "New Tonton and bonus to Tsunade; Tsunade's presence and survival are not simulated.",
      "S3_028": "New Kuromaru and bonus to the next Ninja Hound.",
      "S3_036": "{allies} allies take 1 damage; this card gains 2 for each.",
      "S3_041": "Two enemies.",
      "S3_043": "Bonus to the next Sasuke and one later heal.",
      "S3_051": "Initial bonus and one heal.",
      "S3_060": "The configured allies are assumed to be on other lanes and each hit for the first time: one boost and one Heal per ally.",
      "S3_062": "One initial heal and the first reactive heal.",
      "S3_073": "Initial bonus and damage in one encounter. Effects without explicit repetition apply once.",
      "S3_085": "{enemies} enemies; existing Burn is not counted without a known value.",
      "S3_091": "First target, bonus and damage to 5 other enemies and {allies} allies. The wording \"other cards\" is ambiguous.",
      "S3_092": "The first target is hit separately; damage to other cards excludes that target and includes all configured allies.",
      "S3_039": "Favourable conversion of remaining initial Rush: 2/3 Chakra at level 1/2, capped at 3; no external boost simulated."
    },
    "calculation": {
      "effectC": "Chakra boost",
      "effectW": "Weaken",
      "effectH": "Heal",
      "effectB": "Burn per target",
      "effectK": "summoned Chakra",
      "amount": "{value} {effect}",
      "burnTotal": "{value} Burn per target, total duration capped by enemy Chakra",
      "copy": "{value} copy Chakra",
      "restore": "{value} healing from 1 Chakra to base",
      "rush": "{value} Chakra from remaining Rush (maximum 3)",
      "enemies": {
        "one": "{value} enemy",
        "other": "{value} enemies"
      },
      "otherEnemies": "{value} other enemies, excluding the first target",
      "allies": {
        "one": "{value} ally",
        "other": "{value} allies"
      },
      "first": "{value} first activation",
      "remaining": {
        "one": "{value} subsequent activation",
        "other": "{value} subsequent activations"
      },
      "activations": {
        "one": "{value} activation",
        "other": "{value} activations"
      },
      "enemyChakra": "{value} enemy Chakra",
      "targets": {
        "one": "{value} target",
        "other": "{value} targets"
      },
      "drain": "{value} Chakra removed without going below 1",
      "removable": "{value} removable Chakra",
      "bestBranch": "best branch: {label}",
      "unquantified": "Numerical contribution has not yet been quantified.",
      "repeated": "Effect applied over {activations} activations.",
      "once": "Encounter effect counted once; only effects explicitly stating every encounter are repeated.",
      "favourable": "Favourable conditions are assumed. Synergies with other cards are not simulated.",
      "tactical": "Tactical effect with no numerical Chakra boost, damage or healing.",
      "halving": "Halving uses the enemy Chakra set in the options; the exact in-game rounding remains unconfirmed.",
      "burnNote": "Burn: affected targets × min(duration in seconds, enemy Chakra). Spreading is limited to the configured enemy targets; multiple applications do not duplicate the same Chakra points.",
      "allCards": "Effect on all cards: {enemies} enemies and {allies} allies. Friendly damage, capped by ally Chakra per application, reduces Power.",
      "ebisu": "Bonus and penalties use the configured number of allies; the card's survival is not simulated."
    },
    "errors": {
      "invalidJson": "The file does not contain valid deck JSON.",
      "invalidDeck": "Invalid deck file.",
      "invalidCards": "Check the cards, duplicates and levels in the file.",
      "invalidOptions": "Invalid calculation options.",
      "invalidValues": "Invalid assumption values.",
      "invalidOverrides": "Invalid card overrides.",
      "missingCard": "Assumptions refer to a card not in the deck.",
      "fileTooLarge": "The file is too large.",
      "importFailed": "Unable to import the deck.",
      "invalidRule": "Invalid rule: {id} level {level}, {factor}",
      "invalidFactor": "Invalid factor: {factor}"
    },
    "normalizations": []
  },
  "it": {
    "name": "Italiano",
    "locale": "it-IT",
    "ui": {
      "pageTitle": "Naruto · Carte e mazzi",
      "brand": "Naruto · Archivio personale",
      "heading": "Carte e mazzi",
      "catalogDescription": "3 serie · testi italiani · immagini locali",
      "database": "Database carte",
      "builder": "Componi mazzo",
      "sections": "Sezioni",
      "language": "Lingua",
      "filters": "Filtra carte",
      "searchFilters": "Ricerca e filtri",
      "textOrIndex": "Testo o indice",
      "searchPlaceholder": "Scrivi qui",
      "rarity": "Rarità",
      "season": "Serie",
      "skillType": "Tipo abilità",
      "cost": "Costo",
      "chakra": "Chakra",
      "minPower": "Potenza min",
      "minimum": "min",
      "cardLevel": "Lv carta",
      "sort": "Ordina",
      "sortCards": "Ordina carte",
      "index": "Indice",
      "alphabetical": "Alfabetico",
      "quality": "Qualità",
      "power": "Potenza",
      "resetFilters": "Azzera filtri",
      "allFeminine": "Tutte",
      "all": "Tutti",
      "none": "Senza tipo",
      "common": "Comune",
      "rare": "Rara",
      "epic": "Epica",
      "legendary": "Leggendaria",
      "first": "Prima",
      "second": "Seconda",
      "third": "Terza",
      "ascending": "Crescente",
      "descending": "Decrescente",
      "ascendingAction": "Ordine crescente. Passa a decrescente",
      "descendingAction": "Ordine decrescente. Passa a crescente",
      "selectedCount": "{count} selezionati",
      "cardCount": "{count} carte",
      "noResults": "Nessuna carta corrisponde ai filtri.",
      "assumptions": "Ipotesi di calcolo",
      "enemyChakra": "Chakra avversario",
      "enemies": "Avversari bersagliati",
      "allyChakra": "Chakra alleato",
      "allies": "Alleati bersagliati",
      "activations": "Attivazioni carta",
      "applyStandard": "Applica standard",
      "calculationInfo": "Info calcolo danni",
      "standardApplied": "Standard applicato a tutte le carte della sessione.",
      "standardPending": "Modifiche da applicare: le carte usano ancora lo standard precedente.",
      "deck": "Mazzo in costruzione",
      "defaultDeckName": "Mazzo 1",
      "deckNameLabel": "Nome del mazzo:",
      "deckNamePlaceholder": "Nome del mazzo",
      "deckSlots": "Le dieci carte del mazzo",
      "deckCardsLevels": "Carte del mazzo e livelli",
      "averageCost": "Costo medio",
      "averagePower": "Potenza media",
      "averageQuality": "Qualità media",
      "viewDeck": "Visualizza dettagli mazzo",
      "import": "Importa",
      "export": "Esporta",
      "clearDeck": "Svuota",
      "closeDeck": "Chiudi mazzo",
      "closeCard": "Chiudi dettaglio",
      "closeInfo": "Chiudi informazioni sul calcolo",
      "distribution": "Distribuzione dei costi",
      "curveCaption": "Numero di carte per costo.",
      "databaseEffects": "Database degli effetti",
      "builderCards": "Carte per il mazzo",
      "confirm": "Conferma",
      "cancel": "Annulla",
      "replaceDeck": "Sostituire il mazzo corrente con quello importato?",
      "confirmClear": "Rimuovere tutte le carte dal mazzo?",
      "deckImported": "Mazzo importato.",
      "sessionUnavailable": "Il salvataggio automatico della sessione non è disponibile. Esporta il mazzo per conservarlo.",
      "sessionInvalid": "Non è stato possibile ripristinare la sessione salvata. Puoi importare un mazzo esportato.",
      "addToDeck": "Aggiungi al mazzo",
      "removeFromDeck": "Rimuovi dal mazzo",
      "addCard": "Aggiungi {name} al mazzo",
      "removeCard": "Rimuovi {name} dal mazzo",
      "openCard": "Apri {name} #{index}",
      "removeNamedCard": "Rimuovi {name}",
      "emptySlot": "Posto {slot} vuoto",
      "cardLevelTitle": "{name} · livello {level}",
      "levelShort": "Lv.{level}",
      "changeLevel": "Cambia livello",
      "changeLevelTitle": "Clicca per passare al livello {level}",
      "changeLevelAction": "Livello {level}. Passa al livello {next}",
      "powerQuality": "Potenza e Qualità",
      "localAssumptions": "Ipotesi per questa carta",
      "useStandard": "Usa standard",
      "localChanges": "Modifiche immediate, solo per questa carta.",
      "powerComposition": "Composizione della potenza",
      "contributions": "Contributi del calcolo",
      "noContributions": "Nessun contributo numerico aggiuntivo.",
      "baseChakra": "Chakra base",
      "summonedChakra": "Chakra evocato",
      "chakraBoosts": "Aumenti di Chakra",
      "friendlyDamage": "Danni a sé / alleati",
      "enemyDamage": "Danni agli avversari",
      "burn": "Bruciatura",
      "heal": "Cura",
      "curveBar": "Costo {cost}: {count} carte",
      "energyCost": "Costo energetico",
      "costValue": "Costo {value}",
      "chakraValue": "Chakra base {value}",
      "info1": "Potenza = Chakra base + Evocazioni + aumenti − danni a sé e agli alleati + danni agli avversari + Bruciatura + Cure.",
      "info2": "Qualità = Potenza / costo della carta.",
      "info3": "Bruciatura = avversari bersagliati * durata in secondi (o Chakra avversario se è più basso dei secondi).",
      "info4": "Gli effetti si contano come attivati un numero di volte pari a quello indicato nella carta o nelle ipotesi di calcolo.",
      "info5": "Movimento, Difesa e altri modificatori non sono considerati nel conteggio della Potenza della carta.",
      "info6": "Il selettore del livello del pannello dei filtri modifica l'intera lista, tranne le carte già inserite nel mazzo. L'export include livelli e ipotesi di calcolo individuali."
    },
    "effects": {
      "Cost": "Costo",
      "Chakra": "Chakra",
      "Weaken": "Indebolimento",
      "Push": "Spinta",
      "Pin": "Blocco",
      "Rush": "Scatto",
      "Slow": "Rallentamento",
      "Guard": "Difesa",
      "Seal": "Sigillo",
      "Switch": "Cambio",
      "Summon": "Evocazione",
      "Teleport": "Teletrasporto",
      "Burn": "Bruciatura",
      "Focus": "Concentrazione",
      "Heal": "Cura"
    },
    "terms": {
      "Cost": "cost[oi]",
      "Chakra": "chakra",
      "Weaken": "indebol[\\p{L}]*",
      "Push": "resping[\\p{L}]*|sping[\\p{L}]*|spint[ae]",
      "Pin": "blocc[\\p{L}]*|immobilizz[\\p{L}]*",
      "Rush": "scatt[\\p{L}]*|acceler[\\p{L}]*",
      "Slow": "rallent[\\p{L}]*",
      "Guard": "difes[ae]|difend[\\p{L}]*",
      "Seal": "sigill[\\p{L}]*",
      "Switch": "scambi[\\p{L}]*|cambi[\\p{L}]*",
      "Summon": "evoc[\\p{L}]*",
      "Teleport": "teletrasport[\\p{L}]*",
      "Burn": "bruci[\\p{L}]*",
      "Focus": "concentra[\\p{L}]*",
      "Heal": "cur[ae]|curare|curano|recupera[\\p{L}]*"
    },
    "cards": {
      "S1_001": {
        "name": "NARUTO UZUMAKI",
        "ability": "Potenziale",
        "descriptions": [
          "La prima volta che questa carta guadagna Chakra, ottiene un ulteriore Chakra(+1).",
          "La prima volta che questa carta guadagna Chakra, ottiene un ulteriore Chakra(+2)."
        ]
      },
      "S1_002": {
        "name": "NARUTO UZUMAKI",
        "ability": "Addestramento",
        "descriptions": [
          "Ottiene Chakra(+2) dopo 6 secondi.",
          "Ottiene Chakra(+3) dopo 6 secondi."
        ]
      },
      "S1_003": {
        "name": "NARUTO UZUMAKI",
        "ability": "Moltiplicazione superiore del corpo",
        "descriptions": [
          "Evoca 1 clone su un'altra corsia con Chakra(1).",
          "Evoca 1 clone su un'altra corsia con Chakra(2)."
        ]
      },
      "S1_004": {
        "name": "NARUTO UZUMAKI",
        "ability": "Giuramento",
        "descriptions": [
          "Ottiene Chakra(+1) dopo una vittoria.",
          "Ottiene Chakra(+2) dopo una vittoria."
        ]
      },
      "S1_005": {
        "name": "SASUKE UCHIHA",
        "ability": "Padronanza del Kunai",
        "descriptions": [
          "In caso di scontro, Indebolisce(2) la carta avversaria.",
          "In caso di scontro, Indebolisce(3) la carta avversaria."
        ]
      },
      "S1_006": {
        "name": "SAKURA HARUNO",
        "ability": "Lancio del Kunai",
        "descriptions": [
          "Quando viene giocata, Indebolisce(2) un avversario di corsia casuale nel lungo raggio.",
          "Quando viene giocata, Indebolisce(3) un avversario di corsia casuale nel lungo raggio."
        ]
      },
      "S1_007": {
        "name": "SAKURA HARUNO",
        "ability": "Equilibrio dei Chakra",
        "descriptions": [
          "Quando gli alleati di corsia vincono uno scontro, fornisce loro Chakra(+1) e si Blocca(3s).",
          "Quando gli alleati di corsia vincono uno scontro, fornisce loro Chakra(+1) e si Blocca(5s)."
        ]
      },
      "S1_008": {
        "name": "SAKURA HARUNO",
        "ability": "Calcio Rotante",
        "descriptions": [
          "In caso di scontro, Respinge(1) e Indebolisce(1) la carta avversaria.",
          "In caso di scontro, Respinge(2) e Indebolisce(1) la carta avversaria."
        ]
      },
      "S1_009": {
        "name": "KAKASHI HATAKE",
        "ability": "Impazienza",
        "descriptions": [
          "Scatta(5s)",
          "Scatta(6s)"
        ]
      },
      "S1_010": {
        "name": "KAKASHI HATAKE",
        "ability": "Caposquadra",
        "descriptions": [
          "In caso di scontro, fornisce Chakra(+2) a un alleato di corsia nel corto raggio.",
          "In caso di scontro, fornisce Chakra(+3) a un alleato di corsia nel corto raggio."
        ]
      },
      "S1_011": {
        "name": "IRUKA UMINO",
        "ability": "Sensei",
        "descriptions": [
          "Fornisce Chakra(+2) al prossimo alleato schierato.",
          "Fornisce Chakra(+3) al prossimo alleato schierato."
        ]
      },
      "S1_012": {
        "name": "ZABUZA MOMOCHI",
        "ability": "Ingresso Minaccioso",
        "descriptions": [
          "Viene schierata nel medio raggio, Rallenta(4s) e Cambia corsia all'avversario con più Chakra.",
          "Viene schierata nel medio raggio, Rallenta(6s) e Cambia corsia all'avversario con più Chakra."
        ]
      },
      "S1_013": {
        "name": "ZABUZA MOMOCHI",
        "ability": "Assalto",
        "descriptions": [
          "Quando viene schierata, Indebolisce(3) la carta avversaria più vicina sulla corsia.",
          "Quando viene schierata, Indebolisce(4) la carta avversaria più vicina sulla corsia."
        ]
      },
      "S1_014": {
        "name": "HAKU",
        "ability": "Aghi",
        "descriptions": [
          "Quando viene giocata, Blocca(6s) l'avversario di corsia più vicino.",
          "Quando viene giocata, Blocca(7s) l'avversario di corsia più vicino."
        ]
      },
      "S1_015": {
        "name": "KONOHAMARU SARUTOBI",
        "ability": "Lancio dello Shuriken",
        "descriptions": [
          "Quando viene giocata, Indebolisce(1) un avversario di corsia casuale nel corto raggio.",
          "Quando viene giocata, Indebolisce(2) un avversario di corsia casuale nel corto raggio."
        ]
      },
      "S1_016": {
        "name": "EBISU",
        "ability": "Insegnamento Lampo",
        "descriptions": [
          "Quando viene giocata, fornisce Chakra(+2) all'alleato di corsia più vicino.",
          "Quando viene giocata, fornisce Chakra(+3) all'alleato di corsia più vicino."
        ]
      },
      "S1_017": {
        "name": "TAZUNA",
        "ability": "Punto di Raccordo",
        "descriptions": [
          "Quando viene giocata, richiama 2 alleati di corsia nel medio raggio su questa carta.",
          "Quando viene giocata, richiama 3 alleati di corsia nel medio raggio su questa carta."
        ]
      },
      "S1_018": {
        "name": "INARI",
        "ability": "Impazienza",
        "descriptions": [
          "Scatta(2s)",
          "Scatta(3s)"
        ]
      },
      "S1_019": {
        "name": "KAIZA",
        "ability": "Martirio",
        "descriptions": [
          "Al ritiro, fornisce Chakra(+1) agli alleati di corsia.",
          "Al ritiro, fornisce Chakra(+2) agli alleati di corsia."
        ]
      },
      "S1_020": {
        "name": "MIZUKI TOJI",
        "ability": "Intento Nascosto",
        "descriptions": [
          "Quando viene giocata, Indebolisce(2) un alleato casuale della corsia e Chakra(+3) per questa carta.",
          "Quando viene giocata, Indebolisce(2) un alleato casuale della corsia e Chakra(+4) per questa carta."
        ]
      },
      "S1_021": {
        "name": "MIZUKI TOJI",
        "ability": "Preda Facile",
        "descriptions": [
          "Al ritiro, fornisce Chakra(+1) a 3 alleati casuali.",
          "Al ritiro, fornisce Chakra(+2) a 3 alleati casuali."
        ]
      },
      "S1_022": {
        "name": "MADAME SHIJIMI",
        "ability": "Salvataggio del Gatto",
        "descriptions": [
          "Quando viene giocata, fornisce Chakra(+1) e Rallentamento(3s) a 3 alleati di corsia nel corto raggio.",
          "Quando viene giocata, fornisce Chakra(+2) e Rallentamento(3s) a 3 alleati di corsia nel corto raggio."
        ]
      },
      "S1_023": {
        "name": "GOZU",
        "ability": "Agguato",
        "descriptions": [
          "In caso di scontro, Indebolisce(1) la carta avversaria e si Teletrasporta alle sue spalle.",
          "In caso di scontro, Indebolisce(2) la carta avversaria e si Teletrasporta alle sue spalle."
        ]
      },
      "S1_024": {
        "name": "TSUNAMI",
        "ability": "Ospitalità",
        "descriptions": [
          "Quando viene giocata, fornisce Chakra(+1) agli alleati di corsia (bersagli: 2).",
          "Quando viene giocata, fornisce Chakra(+1) agli alleati di corsia (bersagli: 3)."
        ]
      },
      "S1_025": {
        "name": "WARAJI",
        "ability": "Impazienza",
        "descriptions": [
          "Scatta(3s)",
          "Scatta(4s)"
        ]
      },
      "S1_026": {
        "name": "ZORI",
        "ability": "Impazienza",
        "descriptions": [
          "Scatta(3s)",
          "Scatta(4s)"
        ]
      },
      "S1_027": {
        "name": "INO YAMANAKA",
        "ability": "Fascino",
        "descriptions": [
          "Quando viene giocata, fornisce Chakra(+1) all'alleato più vicino nel corto raggio e lo Respinge nel medio raggio.",
          "Quando viene giocata, fornisce Chakra(+2) all'alleato più vicino nel corto raggio e lo Respinge nel medio raggio."
        ]
      },
      "S1_028": {
        "name": "SHIKAMARU NARA",
        "ability": "Strangolamento dell'Ombra",
        "descriptions": [
          "Quando viene giocata, Blocca(10s) se stessa e la carta avversaria di corsia più vicina.",
          "Quando viene giocata, Blocca(12s) se stessa e la carta avversaria di corsia più vicina."
        ]
      },
      "S1_029": {
        "name": "CHOJI AKIMICHI",
        "ability": "Forza",
        "descriptions": [
          "In caso di scontro, Respinge(1) la carta avversaria.",
          "In caso di scontro, Respinge(2) la carta avversaria."
        ]
      },
      "S1_030": {
        "name": "ASUMA SARUTOBI",
        "ability": "Corpo a Corpo",
        "descriptions": [
          "In caso di scontro, ottiene Chakra(+3) se la carta avversaria ha un Chakra più alto.",
          "In caso di scontro, ottiene Chakra(+4) se la carta avversaria ha un Chakra più alto."
        ]
      },
      "S1_031": {
        "name": "HINATA HYUGA",
        "ability": "Timidezza",
        "descriptions": [
          "Quando viene giocata, Respinge(2) la carta di corsia dell'avversario più vicino nel corto raggio.",
          "Quando viene giocata, Respinge(3) la carta di corsia dell'avversario più vicino nel corto raggio."
        ]
      },
      "S1_032": {
        "name": "HINATA HYUGA",
        "ability": "Pugno Gentile",
        "descriptions": [
          "In caso di scontro, Respinge(1) la carta avversaria con un Chakra inferiore o uguale a 3.",
          "In caso di scontro, Respinge(2) la carta avversaria con un Chakra inferiore o uguale a 3."
        ]
      },
      "S1_033": {
        "name": "KIBA INUZUKA",
        "ability": "Migliore Amico",
        "descriptions": [
          "Evoca un Akamaru casuale dal tuo mazzo e dagli Chakra(+1). Se non c'è Akamaru, questa carta ottiene invece Chakra(+1).",
          "Evoca un Akamaru casuale dal tuo mazzo e dagli Chakra(+2). Se non c'è Akamaru, questa carta ottiene invece Chakra(+2)."
        ]
      },
      "S1_034": {
        "name": "AKAMARU",
        "ability": "Impazienza",
        "descriptions": [
          "Scatta(6s)",
          "Scatta(7s)"
        ]
      },
      "S1_035": {
        "name": "SHINO ABURAME",
        "ability": "Insetti di Chakra",
        "descriptions": [
          "In caso di scontro, ottiene Chakra(+2) e Indebolisce(1) la carta avversaria.",
          "In caso di scontro, ottiene Chakra(+2) e Indebolisce(2) la carta avversaria."
        ]
      },
      "S1_036": {
        "name": "KURENAI YUHI",
        "ability": "Finta",
        "descriptions": [
          "In caso di scontro, Respinge(2) e Blocca(2s) la carta avversaria.",
          "In caso di scontro, Respinge(2) e Blocca(4s) la carta avversaria."
        ]
      },
      "S1_037": {
        "name": "PAKKUN",
        "ability": "Fiuto Acuto",
        "descriptions": [
          "Ignora tutte le abilità e gli scontri avversari fino a raggiungere il medio raggio. Gli alleati ottengono Scatta(2s) quando vengono schierati su questa corsia mentre questa carta è attiva.",
          "Ignora tutte le abilità e gli scontri avversari fino a raggiungere il medio raggio. Gli alleati ottengono Scatta(3s) quando vengono schierati su questa corsia mentre questa carta è attiva."
        ]
      },
      "S1_038": {
        "name": "AYAME",
        "ability": "Pasto Fresco",
        "descriptions": [
          "Quando viene giocata, fornisce Chakra(+2) a 2 alleati di corsia nel medio raggio.",
          "Quando viene giocata, fornisce Chakra(+2) a 3 alleati di corsia nel medio raggio."
        ]
      },
      "S1_039": {
        "name": "MOEGI KAZAMATSURI",
        "ability": "Impazienza",
        "descriptions": [
          "Scatta(2s)",
          "Scatta(3s)"
        ]
      },
      "S1_040": {
        "name": "UDON ISE",
        "ability": "Impazienza",
        "descriptions": [
          "Scatta(2s)",
          "Scatta(3s)"
        ]
      },
      "S1_041": {
        "name": "Truppe ninja",
        "ability": "Avanguardia",
        "descriptions": [
          "Scatta(2s). Al ritiro, fornisce Chakra(+3) all'ultimo alleato schierato.",
          "Scatta(3s). Al ritiro, fornisce Chakra(+3) all'ultimo alleato schierato."
        ]
      },
      "S1_042": {
        "name": "NARUTO UZUMAKI",
        "ability": "Innocenza",
        "descriptions": [
          "Al ritiro, Indebolisce(3) la carta avversaria.",
          "Al ritiro, Indebolisce(4) la carta avversaria."
        ]
      },
      "S1_043": {
        "name": "NARUTO UZUMAKI",
        "ability": "Beffa",
        "descriptions": [
          "Quando viene giocata, Rallenta(10s) tutte le carte sulla corsia.",
          "Quando viene giocata, Rallenta(12s) tutte le carte sulla corsia."
        ]
      },
      "S1_044": {
        "name": "NARUTO UZUMAKI",
        "ability": "Tecnica dell'Erotismo",
        "descriptions": [
          "Quando viene giocata, Blocca(4s) una carta avversaria di corsia nel medio raggio.",
          "Quando viene giocata, Blocca(5s) una carta avversaria di corsia nel medio raggio."
        ]
      },
      "S1_045": {
        "name": "NARUTO UZUMAKI",
        "ability": "Solitudine",
        "descriptions": [
          "Quando viene giocata, ottiene Chakra(+3) e Rallenta(6s) se non sono presenti alleati in corsia.",
          "Quando viene giocata, ottiene Chakra(+4) e Rallenta(6s) se non sono presenti alleati in corsia."
        ]
      },
      "S1_046": {
        "name": "NARUTO UZUMAKI",
        "ability": "Promozione",
        "descriptions": [
          "Ottiene Chakra(+1) per ogni alleato di corsia nel corto raggio.",
          "Ottiene Chakra(+2) per ogni alleato di corsia nel corto raggio."
        ]
      },
      "S1_047": {
        "name": "NARUTO UZUMAKI",
        "ability": "Tecnica della Trasformazione",
        "descriptions": [
          "Quando viene giocata, assume l'aspetto di un'altra carta dal tuo mazzo con Costo fino a 3. Torna all'aspetto originale allo scontro o quando viene Indebolita.",
          "Quando viene giocata, assume l'aspetto di un'altra carta dal tuo mazzo con Costo fino a 4. Torna all'aspetto originale allo scontro o quando viene Indebolita."
        ]
      },
      "S1_048": {
        "name": "NARUTO UZUMAKI",
        "ability": "Astuzia",
        "descriptions": [
          "In caso di scontro, Blocca(4s) la carta avversaria e si Teletrasporta alle sue spalle.",
          "In caso di scontro, Blocca(6s) la carta avversaria e si Teletrasporta alle sue spalle."
        ]
      },
      "S1_049": {
        "name": "SASUKE UCHIHA",
        "ability": "Proiezione",
        "descriptions": [
          "Il prossimo alleato viene schierato a media distanza. Applica Blocco(4s) a un avversario casuale della corsia a media distanza e gli fa Cambiare corsia.",
          "Il prossimo alleato viene schierato a media distanza. Applica Blocco(8s) a un avversario casuale della corsia a media distanza e gli fa Cambiare corsia."
        ]
      },
      "S1_050": {
        "name": "HIRUZEN SARUTOBI",
        "ability": "Tecnica della Chiaroveggenza",
        "descriptions": [
          "Quando gli alleati Scattano, applica loro Chakra(+1) e Scatto(+1s).",
          "Quando gli alleati Scattano, applica loro Chakra(+1) e Scatto(+2s)."
        ]
      },
      "S1_051": {
        "name": "IRUKA UMINO",
        "ability": "Testa Quadra",
        "descriptions": [
          "Cambia corsia casualmente ogni 8 secondi.",
          "Cambia corsia casualmente ogni 6 secondi."
        ]
      },
      "S1_052": {
        "name": "IRUKA UMINO",
        "ability": "Sacrificio",
        "descriptions": [
          "Giocata nel medio raggio e fornisce Chakra(+1) all'alleato di corsia più vicino.",
          "Giocata nel medio raggio e fornisce Chakra(+2) all'alleato di corsia più vicino."
        ]
      },
      "S1_053": {
        "name": "ZABUZA MOMOCHI",
        "ability": "Velo di Nebbia",
        "descriptions": [
          "Quando viene giocata, Blocca(6s) e Indebolisce(1) tutti gli avversari nel corto raggio.",
          "Quando viene giocata, Blocca(6s) e Indebolisce(2) tutti gli avversari nel corto raggio."
        ]
      },
      "S1_054": {
        "name": "ZABUZA MOMOCHI",
        "ability": "Collasso",
        "descriptions": [
          "Ottiene Chakra(+3) la prima volta che un alleato di corsia si ritira.",
          "Ottiene Chakra(+4) la prima volta che un alleato di corsia si ritira."
        ]
      },
      "S1_055": {
        "name": "KONOHAMARU SARUTOBI",
        "ability": "Tecnica Seducente Imperfetta",
        "descriptions": [
          "Quando viene giocata, ha il 50% di possibilità di Bloccare(6s) una carta avversaria di corsia nel medio raggio.",
          "Quando viene giocata, ha il 50% di possibilità di Bloccare(8s) una carta avversaria di corsia nel medio raggio."
        ]
      },
      "S1_056": {
        "name": "KONOHAMARU SARUTOBI",
        "ability": "Eredità",
        "descriptions": [
          "Quando viene giocata, ha il 50% di possibilità di Evocare un Hiruzen casuale dal mazzo, altrimenti ottiene Chakra(+2).",
          "Quando viene giocata, ha il 50% di possibilità di Evocare un Hiruzen casuale dal mazzo, altrimenti ottiene Chakra(+3)."
        ]
      },
      "S1_057": {
        "name": "KONOHAMARU SARUTOBI",
        "ability": "Tecnica dell'Erotismo",
        "descriptions": [
          "Quando viene giocata, Blocca(4s) una carta avversaria di corsia nel medio raggio.",
          "Quando viene giocata, Blocca(5s) una carta avversaria di corsia nel medio raggio."
        ]
      },
      "S1_058": {
        "name": "EBISU",
        "ability": "Lezioni Difficili",
        "descriptions": [
          "I prossimi alleati schierati ottengono Chakra(+2), ma questa carta viene Indebolita(1) ogni volta.",
          "I prossimi alleati schierati ottengono Chakra(+3), ma questa carta viene Indebolita(1) ogni volta."
        ]
      },
      "S1_059": {
        "name": "INARI",
        "ability": "In Azione",
        "descriptions": [
          "Quando viene giocata, Indebolisce(1) e Rallenta(6s) il primo avversario di corsia più vicino nel lungo raggio.",
          "Quando viene giocata, Indebolisce(1) e Rallenta(8s) il primo avversario di corsia più vicino nel lungo raggio."
        ]
      },
      "S1_060": {
        "name": "GATO",
        "ability": "Capoclan del Male",
        "descriptions": [
          "Quando viene giocata, Concentrazione(6s). Se la Concentrazione riesce, Evoca una carta casuale con un Costo massimo di 3 dal tuo mazzo.",
          "Quando viene giocata, Concentrazione(4s). Se la Concentrazione riesce, Evoca una carta casuale con un Costo massimo di 3 dal tuo mazzo."
        ]
      },
      "S1_061": {
        "name": "Segugi ninja",
        "ability": "Inseguimento Vorace",
        "descriptions": [
          "Quando viene giocata, Blocca(6s) sé stessa e l'avversario di corsia con più Chakra.",
          "Quando viene giocata, Blocca(8s) sé stessa e l'avversario di corsia con più Chakra."
        ]
      },
      "S1_062": {
        "name": "TEUCHI",
        "ability": "La Via del Ramen",
        "descriptions": [
          "Chakra(+1) agli alleati nella sua corsia dopo 8 secondi.",
          "Chakra(+2) agli alleati nella sua corsia dopo 8 secondi."
        ]
      },
      "S1_063": {
        "name": "NARUTO UZUMAKI",
        "ability": "Determinazione",
        "descriptions": [
          "Quando un Iruka alleato sta per ritirarsi, lo riporta all'inizio della corsia ed Evoca 3 cloni con Chakra(1) distribuiti su tutte le corsie.",
          "Quando un Iruka alleato sta per ritirarsi, lo riporta all'inizio della corsia ed Evoca 5 cloni con Chakra(1) distribuiti su tutte le corsie."
        ]
      },
      "S1_064": {
        "name": "NARUTO UZUMAKI",
        "ability": "Esibizionismo",
        "descriptions": [
          "Ottiene Chakra(+5) dopo 10 secondi.",
          "Ottiene Chakra(+6) dopo 10 secondi."
        ]
      },
      "S1_065": {
        "name": "NARUTO UZUMAKI",
        "ability": "Tecnica dell'Erotismo Multipla",
        "descriptions": [
          "In caso di scontro, Blocca(6s) la carta avversaria, si Teletrasporta dietro di essa e Scatta(2s).",
          "In caso di scontro, Blocca(8s) la carta avversaria, si Teletrasporta dietro di essa e Scatta(4s)."
        ]
      },
      "S1_066": {
        "name": "SASUKE UCHIHA",
        "ability": "Previsione",
        "descriptions": [
          "Non viene Indebolita durante gli scontri con carte avversarie da 2 o meno Chakra.",
          "Non viene Indebolita durante gli scontri con carte avversarie da 3 o meno Chakra."
        ]
      },
      "S1_067": {
        "name": "SAKURA HARUNO",
        "ability": "Fuoco Interiore",
        "descriptions": [
          "Ottiene Chakra(+3) la prima volta che un avversario viene schierato sulla stessa corsia; poi ottiene Chakra(+1) ogni volta che un avversario viene schierato su questa corsia o vi arriva con un Cambio di corsia.",
          "Ottiene Chakra(+3) la prima volta che un avversario viene schierato sulla stessa corsia; poi ottiene Chakra(+2) ogni volta che un avversario viene schierato su questa corsia o vi arriva con un Cambio di corsia."
        ]
      },
      "S1_068": {
        "name": "KAKASHI HATAKE",
        "ability": "Dolore Millenario",
        "descriptions": [
          "Salta sulla prima carta avversaria che si avvicina, Indebolendola(1) e Respingendola(3).",
          "Salta sulla prima carta avversaria che si avvicina, Indebolendola(1) e Respingendola(4)."
        ]
      },
      "S1_069": {
        "name": "KAKASHI HATAKE",
        "ability": "Esplosione Acquatica",
        "descriptions": [
          "Quando viene giocata, Respinge(3) e Indebolisce(2) tutti gli avversari di corsia.",
          "Quando viene giocata, Respinge(3) e Indebolisce(3) tutti gli avversari di corsia."
        ]
      },
      "S1_070": {
        "name": "KAKASHI HATAKE",
        "ability": "Raikiri",
        "descriptions": [
          "Salta sulla prima carta avversaria che si avvicina e la Indebolisce(3). Ignora Difesa.",
          "Salta sulla prima carta avversaria che si avvicina e la Indebolisce(4). Ignora Difesa."
        ]
      },
      "S1_071": {
        "name": "KAKASHI HATAKE",
        "ability": "Bluff",
        "descriptions": [
          "Consuma l'energia rimanente per Evocare fino a 5 cloni con Chakra(2) camuffati come l'originale.",
          "Consuma l'energia rimanente per Evocare fino a 6 cloni con Chakra(2) camuffati come l'originale."
        ]
      },
      "S1_072": {
        "name": "IRUKA UMINO",
        "ability": "Rimprovero",
        "descriptions": [
          "Mentre questa carta è attiva, fornisce Chakra(+1) e Blocca(2s) agli alleati con 2 Chakra quando vengono schierati.",
          "Mentre questa carta è attiva, fornisce Chakra(+2) e Blocca(2s) agli alleati con 2 Chakra quando vengono schierati."
        ]
      },
      "S1_073": {
        "name": "HIRUZEN SARUTOBI",
        "ability": "Volontà del Fuoco",
        "descriptions": [
          "Dopo 1 secondi, fornisce Chakra(+10) a tutti gli alleati.",
          "Dopo 10 secondi, fornisce Chakra(+2) a tutti gli alleati."
        ]
      },
      "S1_074": {
        "name": "ZABUZA MOMOCHI",
        "ability": "Tecnica del Drago Acquatico",
        "descriptions": [
          "Quando viene giocata, Indebolisce(1) e Respinge(1) tutti gli avversari di corsia nel corto e medio raggio.",
          "Quando viene giocata, Indebolisce(1) e Respinge(3) tutti gli avversari di corsia nel corto e medio raggio."
        ]
      },
      "S1_075": {
        "name": "HAKU",
        "ability": "Specchi di Ghiaccio",
        "descriptions": [
          "In caso di scontro, Blocca(2s) e Indebolisce(1) gli avversari vicini, poi Cambia corsia. Questa abilità si riattiva ogni volta che viene ottenuto del Chakra.",
          "In caso di scontro, Blocca(4s) e Indebolisce(1) gli avversari vicini, poi Cambia corsia. Questa abilità si riattiva ogni volta che viene ottenuto del Chakra."
        ]
      },
      "S1_076": {
        "name": "GAMABUNTA",
        "ability": "Cooperazione del Rospo",
        "descriptions": [
          "Chakra(+1) ogni volta che gli alleati Respingono gli avversari.",
          "Chakra(+2) ogni volta che gli alleati Respingono gli avversari."
        ]
      },
      "S1_077": {
        "name": "NARUTO UZUMAKI",
        "ability": "Moltiplicazione Superiore Estrema del Corpo",
        "descriptions": [
          "Evoca 2 cloni sulle altre corsie con Chakra(2) e Scatta(4s), poi 2 nuovi cloni dopo 10s. Chakra(+1) ogni volta che questi cloni si ritirano.",
          "Evoca 2 cloni sulle altre corsie con Chakra(2) e Scatta(6s), poi 2 nuovi cloni dopo 10s. Chakra(+1) ogni volta che questi cloni si ritirano."
        ]
      },
      "S1_078": {
        "name": "NARUTO UZUMAKI",
        "ability": "La Furia di Kyubi",
        "descriptions": [
          "Quando gli alleati si ritirano, Chakra(+1) e Scatto(1s)",
          "Quando gli alleati si ritirano, Chakra(+2) e Scatto(1s)"
        ]
      },
      "S1_079": {
        "name": "NARUTO UZUMAKI",
        "ability": "Pugno Vigoroso",
        "descriptions": [
          "Giocata nel medio raggio, Indebolisce(2) e Respinge(1) tutti gli avversari di corsia.",
          "Giocata nel medio raggio, Indebolisce(2) e Respinge(3) tutti gli avversari di corsia."
        ]
      },
      "S1_080": {
        "name": "NARUTO UZUMAKI",
        "ability": "Risolutezza",
        "descriptions": [
          "Ottiene Chakra(+2) ogni 8 secondi.",
          "Ottiene Chakra(+2) ogni 6 secondi."
        ]
      },
      "S1_081": {
        "name": "SASUKE UCHIHA",
        "ability": "Palla di Fuoco",
        "descriptions": [
          "Quando viene giocata, Indebolisce(2) tutti gli avversari nel medio raggio.",
          "Quando viene giocata, Indebolisce(3) tutti gli avversari nel medio raggio."
        ]
      },
      "S1_082": {
        "name": "KAKASHI HATAKE",
        "ability": "Piano di Battaglia",
        "descriptions": [
          "Mentre è attivo, Chakra(+1) ogni volta che gli alleati Indeboliscono i rivali. Gli alleati ottengono Chakra(+1) per ogni carta influenzata la prima volta che Indeboliscono i rivali.",
          "Mentre è attivo, Chakra(+2) ogni volta che gli alleati Indeboliscono i rivali. Gli alleati ottengono Chakra(+1) per ogni carta influenzata la prima volta che Indeboliscono i rivali."
        ]
      },
      "S1_083": {
        "name": "ZABUZA MOMOCHI",
        "ability": "Demone",
        "descriptions": [
          "Quando viene giocata, Indebolisce(1) tutte le carte. Se hanno 3 o meno Chakra, Indebolisce(3).",
          "Quando viene giocata, Indebolisce(1) tutte le carte. Se hanno 4 o meno Chakra, Indebolisce(4)."
        ]
      },
      "S1_084": {
        "name": "ZABUZA MOMOCHI",
        "ability": "Carica Spericolata",
        "descriptions": [
          "Ad ogni scontro, Indebolisce(2) le carte avversarie con 4 o meno Chakra e le fa Cambiare corsia. Scatta continuamente.",
          "Ad ogni scontro, Indebolisce(3) le carte avversarie con 4 o meno Chakra e le fa Cambiare corsia. Scatta continuamente."
        ]
      },
      "S1_085": {
        "name": "KYUBI",
        "ability": "Catastrofe Naturale",
        "descriptions": [
          "Viene schierato a media distanza e applica Spinta(1) e Indebolimento(3) a tutte le carte. Finché è attivo, applica Indebolimento(1) alle nuove carte schierate. Rallentamento permanente.",
          "Viene schierato a media distanza e applica Spinta(1) e Indebolimento(4) a tutte le carte. Finché è attivo, applica Indebolimento(1) alle nuove carte schierate. Rallentamento permanente."
        ]
      },
      "S2_001": {
        "name": "Naruto Uzumaki",
        "ability": "Manipolazione del Chakra",
        "descriptions": [
          "Quando viene giocata, ha il 50% di possibilità di Chakra(+3).",
          "Quando viene giocata, ha il 50% di possibilità di Chakra(+4)."
        ]
      },
      "S2_002": {
        "name": "Naruto Uzumaki",
        "ability": "Sfidante",
        "descriptions": [
          "Quando viene giocata, Blocca(1s) e ottiene Chakra(+2) per ogni avversario di corsia con più Chakra.",
          "Quando viene giocata, Blocca(2s) e ottiene Chakra(+2) per ogni avversario di corsia con più Chakra."
        ]
      },
      "S2_003": {
        "name": "Sasuke Uchiha",
        "ability": "Attacco concatenato del leone",
        "descriptions": [
          "Salta sulla prima carta avversaria che si avvicina, e Indebolendola(2).",
          "Salta sulla prima carta avversaria che si avvicina, e Indebolendola(3)."
        ]
      },
      "S2_004": {
        "name": "Sakura Haruno",
        "ability": "Impazienza",
        "descriptions": [
          "Scatta(2s)",
          "Scatta(3s)"
        ]
      },
      "S2_005": {
        "name": "Rock Lee",
        "ability": "Protezione",
        "descriptions": [
          "Scatta(+3s) ogni volta che un avversario è schierato su questa corsia.",
          "Scatta(+4s) ogni volta che un avversario è schierato su questa corsia."
        ]
      },
      "S2_006": {
        "name": "Rock Lee",
        "ability": "Bomba d'amore",
        "descriptions": [
          "Fornisce Chakra(+1) al prossimo alleato schierato. Mentre questa carta è attiva, Cambia corsia a quell'alleato ogni 8 secondi.",
          "Fornisce Chakra(+2) al prossimo alleato schierato. Mentre questa carta è attiva, Cambia corsia a quell'alleato ogni 8 secondi."
        ]
      },
      "S2_007": {
        "name": "Neji Hyuga",
        "ability": "Pugno Gentile",
        "descriptions": [
          "In caso di scontro, Indebolisce(2) e Respinge(1).",
          "In caso di scontro, Indebolisce(2) e Respinge(2)."
        ]
      },
      "S2_008": {
        "name": "Tenten",
        "ability": "Ascesa dei due draghi",
        "descriptions": [
          "Quando viene giocata, Indebolisce(1) e Rallenta(6s) tutti gli avversari nel lungo raggio.",
          "Quando viene giocata, Indebolisce(1) e Rallenta(8s) tutti gli avversari nel lungo raggio."
        ]
      },
      "S2_009": {
        "name": "Gai Maito",
        "ability": "Potere della giovinezza",
        "descriptions": [
          "Mentre questa carta è attiva, fornisce Chakra(+2) alle carte Rock Lee che vengono schierate.",
          "Mentre questa carta è attiva, fornisce Chakra(+3) alle carte Rock Lee che vengono schierate."
        ]
      },
      "S2_010": {
        "name": "Gaara",
        "ability": "Pericoloso",
        "descriptions": [
          "Giocata nel medio raggio, ottiene Chakra(+3) se c'è una carta avversaria nel medio raggio.",
          "Giocata nel medio raggio, ottiene Chakra(+4) se c'è una carta avversaria nel medio raggio."
        ]
      },
      "S2_011": {
        "name": "Kankuro",
        "ability": "Sfacciato",
        "descriptions": [
          "Fornisce Chakra(+3) al prossimo Gaara alleato schierato.",
          "Fornisce Chakra(+4) al prossimo Gaara alleato schierato."
        ]
      },
      "S2_012": {
        "name": "Temari",
        "ability": "Prudente",
        "descriptions": [
          "Fornisce Difesa(1) e Rallentamento(6s) al prossimo Gaara alleato schierato.",
          "Fornisce Difesa(1) e Rallentamento(10s) al prossimo Gaara alleato schierato."
        ]
      },
      "S2_013": {
        "name": "Baki",
        "ability": "Resiliente",
        "descriptions": [
          "Scatta(3s) e Difesa(1).",
          "Scatta(4s) e Difesa(1)."
        ]
      },
      "S2_014": {
        "name": "Ino Yamanaka",
        "ability": "Impazienza",
        "descriptions": [
          "Scatta(2s)",
          "Scatta(3s)"
        ]
      },
      "S2_015": {
        "name": "Kabuto Yakushi",
        "ability": "Spiegazione",
        "descriptions": [
          "Quando viene giocata, tutti gli alleati nel corto raggio ottengono casualmente Chakra(+1) o Blocco(4s).",
          "Quando viene giocata, tutti gli alleati nel corto raggio ottengono casualmente Chakra(+2) o Blocco(4s)."
        ]
      },
      "S2_016": {
        "name": "Student Trio",
        "ability": "Squadra Konohamaru",
        "descriptions": [
          "Al ritiro, schiera nuovamente Konohamaru, Moegi e Udon con Scatto(3s) e Chakra(1) su ogni corsia.",
          "Al ritiro, schiera nuovamente Konohamaru, Moegi e Udon con Scatto(4s) e Chakra(1) su ogni corsia."
        ]
      },
      "S2_017": {
        "name": "Ibiki Morino",
        "ability": "Regole Rigorose",
        "descriptions": [
          "Quando viene giocata, Respinge(2) o Blocca(4s) tutti gli avversari di corsia.",
          "Quando viene giocata, Respinge(3) o Blocca(5s) tutti gli avversari di corsia."
        ]
      },
      "S2_018": {
        "name": "Choza Akimichi",
        "ability": "Vecchi Amici",
        "descriptions": [
          "Mentre questa carta è attiva, fornisce Chakra(+1) alle carte Shikaku e Inoichi alleate.",
          "Mentre questa carta è attiva, fornisce Chakra(+2) alle carte Shikaku e Inoichi alleate."
        ]
      },
      "S2_019": {
        "name": "Inoichi Yamanaka",
        "ability": "Vecchi Amici",
        "descriptions": [
          "Mentre questa carta è attiva, fornisce Chakra(+1) alle carte Choza e Shikaku alleate.",
          "Mentre questa carta è attiva, fornisce Chakra(+2) alle carte Choza e Shikaku alleate."
        ]
      },
      "S2_020": {
        "name": "Shikaku Nara",
        "ability": "Vecchi Amici",
        "descriptions": [
          "Mentre questa carta è attiva, fornisce Chakra(+1) alle carte Inoichi e Choza alleate.",
          "Mentre questa carta è attiva, fornisce Chakra(+2) alle carte Inoichi e Choza alleate."
        ]
      },
      "S2_021": {
        "name": "Hanabi Hyuga",
        "ability": "Prodigio",
        "descriptions": [
          "Scatta(2s). In caso di scontro, Respinge(2).",
          "Scatta(3s). In caso di scontro, Respinge(3)."
        ]
      },
      "S2_022": {
        "name": "Hiashi Hyuga",
        "ability": "Capo degli Hyuga",
        "descriptions": [
          "Mentre questa carta è attiva, fornisce Chakra(+2) e Respinge(1) alle carte Hyuga alleate.",
          "Mentre questa carta è attiva, fornisce Chakra(+3) e Respinge(1) alle carte Hyuga alleate."
        ]
      },
      "S2_023": {
        "name": "Hizashi Hyuga",
        "ability": "Sacrificio del Fratello",
        "descriptions": [
          "Scatta(2s). Quando l'Hiashi alleato sta per ritirarsi, lo riporta all'inizio della corsia e si ritira al suo posto.",
          "Scatta(3s). Quando l'Hiashi alleato sta per ritirarsi, lo riporta all'inizio della corsia e si ritira al suo posto."
        ]
      },
      "S2_024": {
        "name": "Zaku Abumi",
        "ability": "Onda tagliente",
        "descriptions": [
          "Quando viene giocata, Respinge(2) e Cambia corsia a 2 carte avversarie nel medio raggio.",
          "Quando viene giocata, Respinge(2) e Cambia corsia a 3 carte avversarie nel medio raggio."
        ]
      },
      "S2_025": {
        "name": "Dosu Kinuta",
        "ability": "Onda di suono",
        "descriptions": [
          "In caso di scontro, Indebolisce(2) la carta avversaria. Se l'avversario non si ritira, la fa Bloccare(4s) e Cambia corsia.",
          "In caso di scontro, Indebolisce(2) la carta avversaria. Se l'avversario non si ritira, la fa Bloccare(5s) e Cambia corsia."
        ]
      },
      "S2_026": {
        "name": "Kin Tsuchi",
        "ability": "Senbon d'ombra",
        "descriptions": [
          "Quando viene giocata, Indebolisce(1) e Blocca(2s) la carta avversaria più vicina.",
          "Quando viene giocata, Indebolisce(2) e Blocca(2s) la carta avversaria più vicina."
        ]
      },
      "S2_027": {
        "name": "Izumo Kamizuki",
        "ability": "Sabotaggio",
        "descriptions": [
          "Quando viene giocata, Blocca(2s) 2 alleati di corsia casuali.",
          "Quando viene giocata, Blocca(2s) 3 alleati di corsia casuali."
        ]
      },
      "S2_028": {
        "name": "Kotetsu Hagane",
        "ability": "Depistaggio",
        "descriptions": [
          "Quando viene giocata, Rallenta(4s) e Cambia corsia a 2 alleati casuali.",
          "Quando viene giocata, Rallenta(4s) e Cambia corsia a 3 alleati casuali."
        ]
      },
      "S2_029": {
        "name": "Oboro",
        "ability": "Clone di fumo",
        "descriptions": [
          "Quando viene giocata, Evoca 2 cloni con Chakra(1). Quando i cloni si ritirano, ha il 50% di possibilità di creare un altro clone sulla stessa corsia.",
          "Quando viene giocata, Evoca 2 cloni con Chakra(2). Quando i cloni si ritirano, ha il 50% di possibilità di creare un altro clone sulla stessa corsia."
        ]
      },
      "S2_030": {
        "name": "Yoroi Akado",
        "ability": "Assorbimento del Chakra",
        "descriptions": [
          "In caso di scontro, ottiene Chakra(+1) e Indebolisce(1) la carta avversaria. Disattiva anche qualsiasi abilità attiva.",
          "In caso di scontro, ottiene Chakra(+2) e Indebolisce(1) la carta avversaria. Disattiva anche qualsiasi abilità attiva."
        ]
      },
      "S2_031": {
        "name": "Ningame",
        "ability": "Temperanza",
        "descriptions": [
          "Ogni volta che gli alleati di corsia ottengono Scatto, viene convertito in Chakra(+1).",
          "Ogni volta che gli alleati di corsia ottengono Scatto, viene convertito in Chakra(+2)."
        ]
      },
      "S2_032": {
        "name": "Gama",
        "ability": "Rotolo di Rospo",
        "descriptions": [
          "Quando viene giocata, Evoca un rospo casuale dal mazzo e gli conferisce Chakra(+1).",
          "Quando viene giocata, Evoca un rospo casuale dal mazzo e gli conferisce Chakra(+2)."
        ]
      },
      "S2_033": {
        "name": "Gamakichi",
        "ability": "Bocca larga",
        "descriptions": [
          "Mentre questa carta è attiva, i rospi alleati applicano Respinge(1) durante lo scontro. Chakra(+1) ogni volta che un rospo Respinge un avversario.",
          "Mentre questa carta è attiva, i rospi alleati applicano Respinge(2) durante lo scontro. Chakra(+1) ogni volta che un rospo Respinge un avversario."
        ]
      },
      "S2_034": {
        "name": "Giant Snake",
        "ability": "Movimento del serpente",
        "descriptions": [
          "Viene schierata nel medio raggio e Cambia corsia ad altre 2 carte presenti nel medio raggio.",
          "Viene schierata nel medio raggio e Cambia corsia ad altre 3 carte presenti nel medio raggio."
        ]
      },
      "S2_035": {
        "name": "Raido Namiashi",
        "ability": "Guardia del Corpo",
        "descriptions": [
          "Scatta(2s). Quando l'Hiruzen alleato sta per ritirarsi, lo riporta all'inizio della corsia e si ritira al suo posto.",
          "Scatta(3s). Quando l'Hiruzen alleato sta per ritirarsi, lo riporta all'inizio della corsia e si ritira al suo posto."
        ]
      },
      "S2_036": {
        "name": "Homura Mitokado",
        "ability": "Rassicurazione",
        "descriptions": [
          "Il prossimo alleato schierato ottiene Difesa(1) e Chakra(+1).",
          "Il prossimo alleato schierato ottiene Difesa(1) e Chakra(+2)."
        ]
      },
      "S2_037": {
        "name": "Koharu Utatane",
        "ability": "Sicurezza",
        "descriptions": [
          "Dopo 10 secondi, schiera la Squadra Speciale Anbu.",
          "Dopo 8 secondi, schiera la Squadra Speciale Anbu."
        ]
      },
      "S2_038": {
        "name": "Genma Shiranui",
        "ability": "Esaminatore",
        "descriptions": [
          "Quando viene giocata, Concentrazione(6s). Se la Concentrazione riesce, Evoca una carta casuale con un Costo massimo di 4 dal tuo mazzo. Se ha 3 o meno Chakra, le fornisce Chakra(+2).",
          "Quando viene giocata, Concentrazione(4s). Se la Concentrazione riesce, Evoca una carta casuale con un Costo massimo di 4 dal tuo mazzo. Se ha 3 o meno Chakra, le fornisce Chakra(+2)."
        ]
      },
      "S2_039": {
        "name": "Genma Shiranui",
        "ability": "Attenzione",
        "descriptions": [
          "Quando viene giocata, Indebolisce(3) carte avversarie di corsia nel medio raggio (bersagli: 1).",
          "Quando viene giocata, Indebolisce(3) carte avversarie di corsia nel medio raggio (bersagli: 2)."
        ]
      },
      "S2_040": {
        "name": "Yashamaru",
        "ability": "Che seccatura",
        "descriptions": [
          "Al ritiro, Indebolisce(3) tutte le carte vicine.",
          "Al ritiro, Indebolisce(4) tutte le carte vicine."
        ]
      },
      "S2_041": {
        "name": "Karura",
        "ability": "Amore di Mamma",
        "descriptions": [
          "Quando viene giocata, fornisce Chakra(+2) e Rallentamento(3s) alle carte Gaara alleate.",
          "Quando viene giocata, fornisce Chakra(+2) e Rallentamento(5s) alle carte Gaara alleate."
        ]
      },
      "S2_042": {
        "name": "Yugao Uzuki",
        "ability": "Giuramento di vendetta",
        "descriptions": [
          "Scatta(3s). Difesa(1). In caso di scontro, Indebolisce(2).",
          "Scatta(4s). Difesa(1). In caso di scontro, Indebolisce(2)."
        ]
      },
      "S2_043": {
        "name": "Hana Inuzuka",
        "ability": "Impazienza",
        "descriptions": [
          "Scatta(4s)",
          "Scatta(5s)"
        ]
      },
      "S2_044": {
        "name": "Tsume Inuzuka",
        "ability": "Alla carica",
        "descriptions": [
          "Scatta(4s). Il prossimo alleato schierato ottiene Scatto(+3s) e Chakra(+1).",
          "Scatta(4s). Il prossimo alleato schierato ottiene Scatto(+3s) e Chakra(+2)."
        ]
      },
      "S2_045": {
        "name": "Shibi Aburame",
        "ability": "Aiuto tempestivo",
        "descriptions": [
          "Scatta(5s). Fornisce Chakra(+1) agli alleati che raggiunge.",
          "Scatta(6s). Fornisce Chakra(+1) agli alleati che raggiunge."
        ]
      },
      "S2_046": {
        "name": "Jirobo",
        "ability": "Sud",
        "descriptions": [
          "Il prossimo Orochimaru schierato ottiene Chakra(+3).",
          "Il prossimo Orochimaru schierato ottiene Chakra(+4)."
        ]
      },
      "S2_047": {
        "name": "Kidomaru",
        "ability": "Est",
        "descriptions": [
          "Il prossimo Orochimaru schierato ottiene Scatto(+4s).",
          "Il prossimo Orochimaru schierato ottiene Scatto(+5s)."
        ]
      },
      "S2_048": {
        "name": "Sakon",
        "ability": "Ovest",
        "descriptions": [
          "Il prossimo Orochimaru schierato Indebolirà(3) la carta avversaria più vicina.",
          "Il prossimo Orochimaru schierato Indebolirà(4) la carta avversaria più vicina."
        ]
      },
      "S2_049": {
        "name": "Tayuya",
        "ability": "Nord",
        "descriptions": [
          "Il prossimo Orochimaru schierato ottiene Difesa(1).",
          "Il prossimo Orochimaru schierato ottiene Difesa(2)."
        ]
      },
      "S2_050": {
        "name": "Anbu",
        "ability": "Squadra Speciale",
        "descriptions": [
          "Quando viene giocata, ottiene casualmente Chakra(+2) o Scatto(4s).",
          "Quando viene giocata, ottiene casualmente Chakra(+3) o Scatto(5s)."
        ]
      },
      "S2_051": {
        "name": "Naruto Uzumaki",
        "ability": "Distruttore del destino",
        "descriptions": [
          "Difesa(2). Quando \"Difesa\" si attiva, Scatta(2s). Quando lo Scatto termina, Cambia corsia.",
          "Difesa(3). Quando \"Difesa\" si attiva, Scatta(2s). Quando lo Scatto termina, Cambia corsia."
        ]
      },
      "S2_052": {
        "name": "Sakura Haruno",
        "ability": "Fermezza",
        "descriptions": [
          "In caso di scontro, Indebolisce(1) la carta avversaria e Difesa(1).",
          "In caso di scontro, Indebolisce(1) la carta avversaria e Difesa(2)."
        ]
      },
      "S2_053": {
        "name": "Rock Lee",
        "ability": "Vento della foglia",
        "descriptions": [
          "In caso di scontro, Respinge(1) e Indebolisce(2) la carta avversaria.",
          "In caso di scontro, Respinge(2) e Indebolisce(2) la carta avversaria."
        ]
      },
      "S2_054": {
        "name": "Neji Hyuga",
        "ability": "Byakugan",
        "descriptions": [
          "Quando viene giocata, dimezza il Chakra della carta rivale più vicina e ottiene Scatto(2s).",
          "Quando viene giocata, dimezza il Chakra della carta rivale più vicina e ottiene Scatto(4s)."
        ]
      },
      "S2_055": {
        "name": "Neji Hyuga",
        "ability": "Destino infelice",
        "descriptions": [
          "Ogni volta che questa carta ottiene Chakra, ottiene Chakra(+1) aggiuntivo. Può raggiungere un massimo di 10 Chakra.",
          "Ogni volta che questa carta ottiene Chakra, ottiene Chakra(+2) aggiuntivo. Può raggiungere un massimo di 10 Chakra."
        ]
      },
      "S2_056": {
        "name": "Gai Maito",
        "ability": "Rimproverare",
        "descriptions": [
          "Giocata nel medio raggio, ottiene Chakra(+2) e Blocca(2s) l'alleato di corsia più vicino.",
          "Giocata nel medio raggio, ottiene Chakra(+2) e Blocca(6s) l'alleato di corsia più vicino."
        ]
      },
      "S2_057": {
        "name": "Choji Akimichi",
        "ability": "Proiettile umano",
        "descriptions": [
          "Scatto(3s). A ogni combattimento, applica Spinta(2) e Indebolimento(1) se Scatto è attivo.",
          "Scatto(4s). A ogni combattimento, applica Spinta(2) e Indebolimento(1) se Scatto è attivo."
        ]
      },
      "S2_058": {
        "name": "Ino Yamanaka",
        "ability": "Trasmissione spirituale",
        "descriptions": [
          "Quando viene giocata, Concentrazione(8s) e prende il controllo dell'avversario nel medio raggio di corsia con il Chakra più alto. Al termine della Concentrazione, restituisce il controllo della carta al tuo avversario.",
          "Quando viene giocata, Concentrazione(12s) e prende il controllo dell'avversario nel medio raggio di corsia con il Chakra più alto. Al termine della Concentrazione, restituisce il controllo della carta al tuo avversario."
        ]
      },
      "S2_059": {
        "name": "Hinata Hyuga",
        "ability": "Deviare",
        "descriptions": [
          "In caso di scontro, Respinge(1) la carta avversaria e le fa Cambiare corsia.",
          "In caso di scontro, Respinge(2) la carta avversaria e le fa Cambiare corsia."
        ]
      },
      "S2_060": {
        "name": "Gaara",
        "ability": "Scudo di sabbia",
        "descriptions": [
          "Difesa(2). Quando \"Difesa\" si attiva, ottiene Chakra(+1).",
          "Difesa(3). Quando \"Difesa\" si attiva, ottiene Chakra(+1)."
        ]
      },
      "S2_061": {
        "name": "Temari",
        "ability": "Ventaglio gigante",
        "descriptions": [
          "Difesa(2). Quando viene giocata e quando \"Difesa\" si attiva, Respinge(2) tutti gli avversari di corsia.",
          "Difesa(3). Quando viene giocata e quando \"Difesa\" si attiva, Respinge(3) tutti gli avversari di corsia."
        ]
      },
      "S2_062": {
        "name": "Anko Mitarashi",
        "ability": "Ombra della serpe",
        "descriptions": [
          "Quando viene giocata, Indebolisce(2) e Blocca(4s) carte avversarie di corsia nel medio raggio (bersagli: 1).",
          "Quando viene giocata, Indebolisce(2) e Blocca(4s) carte avversarie di corsia nel medio raggio (bersagli: 2)."
        ]
      },
      "S2_063": {
        "name": "Choza Akimichi",
        "ability": "Espansione",
        "descriptions": [
          "In caso di scontro, Respinge(3) e Indebolisce(2) la carta avversaria.",
          "In caso di scontro, Respinge(3) e Indebolisce(3) la carta avversaria."
        ]
      },
      "S2_064": {
        "name": "Inoichi Yamanaka",
        "ability": "Sconvolgimento spirituale",
        "descriptions": [
          "Quando viene giocata, Concentrazione(10s) e prendi il controllo del rivale di corsia più vicino a media distanza, lo Rallenta(10s) e disabilita permanentemente qualsiasi abilità attiva. Al termine della Concentrazione, restituisce il controllo della carta al tuo avversario.",
          "Quando viene giocata, Concentrazione(14s) e prendi il controllo del rivale di corsia più vicino a media distanza, lo Rallenta(10s) e disabilita permanentemente qualsiasi abilità attiva. Al termine della Concentrazione, restituisce il controllo della carta al tuo avversario."
        ]
      },
      "S2_065": {
        "name": "Shikaku Nara",
        "ability": "Controllo dell'ombra",
        "descriptions": [
          "Quando viene giocata, Blocca(10s) se stessa e 2 avversari di corsia nel lungo raggio.",
          "Quando viene giocata, Blocca(12s) se stessa e 2 avversari di corsia nel lungo raggio."
        ]
      },
      "S2_066": {
        "name": "Jiraiya",
        "ability": "Eremita porcello",
        "descriptions": [
          "Cambia corsia casualmente ogni 10 secondi.",
          "Cambia corsia casualmente ogni 8 secondi."
        ]
      },
      "S2_067": {
        "name": "Orochimaru",
        "ability": "Macchinazioni",
        "descriptions": [
          "Quando viene giocata e al ritiro, Indebolisce(1) fino a 4 carte qualsiasi.",
          "Quando viene giocata e al ritiro, Indebolisce(1) fino a 6 carte qualsiasi."
        ]
      },
      "S2_068": {
        "name": "Hashirama Senju",
        "ability": "Resurrezione di Edo",
        "descriptions": [
          "Quando è al di sotto del suo livello di Chakra, ottiene Chakra(+1) ogni 4s fino a tornare al suo livello.",
          "Quando è al di sotto del suo livello di Chakra, ottiene Chakra(+1) ogni 3s fino a tornare al suo livello."
        ]
      },
      "S2_069": {
        "name": "Tobirama Senju",
        "ability": "Resurrezione di Edo",
        "descriptions": [
          "Quando è al di sotto del suo livello di Chakra, ottiene Chakra(+1) ogni 4s fino a tornare al suo livello.",
          "Quando è al di sotto del suo livello di Chakra, ottiene Chakra(+1) ogni 3s fino a tornare al suo livello."
        ]
      },
      "S2_070": {
        "name": "Hiruzen Sarutobi",
        "ability": "Il Terzo",
        "descriptions": [
          "In caso di scontro, ottiene Chakra(+2). Al ritiro, fornisce Chakra(+2) a tutti gli alleati.",
          "In caso di scontro, ottiene Chakra(+3). Al ritiro, fornisce Chakra(+2) a tutti gli alleati."
        ]
      },
      "S2_071": {
        "name": "Hayate Gekko",
        "ability": "Danza della luna crescente",
        "descriptions": [
          "In caso di scontro, Indebolisce(1) 3 volte. Se il rivale non si ritira, Respinge(2).",
          "In caso di scontro, Indebolisce(1) 3 volte. Se il rivale non si ritira, Respinge(3)."
        ]
      },
      "S2_072": {
        "name": "Ibiki Morino",
        "ability": "Interrogatorio",
        "descriptions": [
          "Quando viene giocata, Indebolisce(1) e Rallenta(4s) tutte le carte.",
          "Quando viene giocata, Indebolisce(1) e Rallenta(6s) tutte le carte."
        ]
      },
      "S2_073": {
        "name": "Gamahiro",
        "ability": "Peso",
        "descriptions": [
          "Quando viene schierato, ottiene Chakra(+2) per ogni Rospo alleato in campo. Rallentamento permanente.",
          "Quando viene schierato, ottiene Chakra(+3) per ogni Rospo alleato in campo. Rallentamento permanente."
        ]
      },
      "S2_074": {
        "name": "Sasuke Uchiha",
        "ability": "Chidori",
        "descriptions": [
          "In caso di scontro, supera i rivali vicini e Indebolisce(2) ognuno di loro. Ignora Difesa.",
          "In caso di scontro, supera i rivali vicini e Indebolisce(3) ognuno di loro. Ignora Difesa."
        ]
      },
      "S2_075": {
        "name": "Rock Lee",
        "ability": "Alleggerimento",
        "descriptions": [
          "Scatta(3s). Ad ogni scontro, se la carta avversaria ha un Chakra più alto, Respinge(1) e Indebolisce(2), poi Cambia corsia.",
          "Scatta(3s). Ad ogni scontro, se la carta avversaria ha un Chakra più alto, Respinge(2) e Indebolisce(2), poi Cambia corsia."
        ]
      },
      "S2_076": {
        "name": "Neji Hyuga",
        "ability": "Rotazione",
        "descriptions": [
          "In caso di scontro, Respinge(2) e Indebolisce(3) tutte le carte avversarie vicine.",
          "In caso di scontro, Respinge(4) e Indebolisce(3) tutte le carte avversarie vicine."
        ]
      },
      "S2_077": {
        "name": "Kiba Inuzuka",
        "ability": "Moltiplicazione selvatica",
        "descriptions": [
          "Il prossimo Akamaru schierato diventa una copia esatta di questa carta con Scatto(4s).",
          "Il prossimo Akamaru schierato diventa una copia esatta di questa carta con Scatto(5s)."
        ]
      },
      "S2_078": {
        "name": "Shikamaru Nara",
        "ability": "Maestro di Shogi",
        "descriptions": [
          "Quando viene giocata, si Blocca(10s) e ottiene Chakra(+3). Mentre questa carta è attiva, ogni volta che Blocchi altre carte alleate o queste ottengono Concentrazione, ottengono Chakra(+3).",
          "Quando viene giocata, si Blocca(12s) e ottiene Chakra(+4). Mentre questa carta è attiva, ogni volta che Blocchi altre carte alleate o queste ottengono Concentrazione, ottengono Chakra(+3)."
        ]
      },
      "S2_079": {
        "name": "Asuma Sarutobi",
        "ability": "Lame di Chakra",
        "descriptions": [
          "Ad ogni scontro, Indebolisce(1). Quando questa carta fa ritirare un avversario, Scatta(+1s).",
          "Ad ogni scontro, Indebolisce(2). Quando questa carta fa ritirare un avversario, Scatta(+1s)."
        ]
      },
      "S2_080": {
        "name": "Gaara",
        "ability": "Instabile",
        "descriptions": [
          "Quando viene giocata, Indebolisce(2) e Rallenta(6s) tutte le carte sulla corsia.",
          "Quando viene giocata, Indebolisce(2) e Rallenta(8s) tutte le carte sulla corsia."
        ]
      },
      "S2_081": {
        "name": "Gaara",
        "ability": "Sete di sangue",
        "descriptions": [
          "Ottiene Chakra(+1) ogni volta che le carte alleate Indeboliscono qualsiasi carta.",
          "Ottiene Chakra(+2) ogni volta che le carte alleate Indeboliscono qualsiasi carta."
        ]
      },
      "S2_082": {
        "name": "Kankuro",
        "ability": "Marionettista",
        "descriptions": [
          "Applica Indebolimento(3) e Rallentamento(2s) al primo avversario che si avvicina. Se l'avversario non si ritira, gli fa Cambiare corsia. Quando un altro alleato fa Cambiare corsia a un avversario, ottiene Chakra(+1) e riattiva questa abilità.",
          "Applica Indebolimento(3) e Rallentamento(5s) al primo avversario che si avvicina. Se l'avversario non si ritira, gli fa Cambiare corsia. Quando un altro alleato fa Cambiare corsia a un avversario, ottiene Chakra(+1) e riattiva questa abilità."
        ]
      },
      "S2_083": {
        "name": "Jiraya",
        "ability": "Eremita dei Rospi",
        "descriptions": [
          "Mentre questa carta è attiva, fornisce Chakra(+3) ai rospi alleati.",
          "Mentre questa carta è attiva, fornisce Chakra(+4) ai rospi alleati."
        ]
      },
      "S2_084": {
        "name": "Orochimaru",
        "ability": "Tradimento",
        "descriptions": [
          "Ignora tutte le abilità e gli scontri avversari. Nel medio raggio, ottiene Chakra(+2) e diventa vulnerabile.",
          "Ignora tutte le abilità e gli scontri avversari. Nel medio raggio, ottiene Chakra(+3) e diventa vulnerabile."
        ]
      },
      "S2_085": {
        "name": "Orochimaru",
        "ability": "Kusanagi",
        "descriptions": [
          "Ad ogni scontro, Indebolisce(2). Ogni volta che una carta avversaria Cambia corsia, Cambia alla stessa corsia e ottiene Difesa(1).",
          "Ad ogni scontro, Indebolisce(3). Ogni volta che una carta avversaria Cambia corsia, Cambia alla stessa corsia e ottiene Difesa(1)."
        ]
      },
      "S2_086": {
        "name": "Orochimaru",
        "ability": "Edo Tensei",
        "descriptions": [
          "Quando viene giocata, Indebolisce(2) 2 alleati con Chakra più basso. Per ogni ritiro, Evoca Edo Hashirama e Tobirama dal mazzo, conferendo loro Scatto(3s).",
          "Quando viene giocata, Indebolisce(2) 2 alleati con Chakra più basso. Per ogni ritiro, Evoca Edo Hashirama e Tobirama dal mazzo, conferendo loro Scatto(5s)."
        ]
      },
      "S2_087": {
        "name": "Hashirama Senju",
        "ability": "Crescita rigogliosa",
        "descriptions": [
          "Quando viene giocata, Blocca(12s) tutte le carte avversarie.",
          "Quando viene giocata, Blocca(14s) tutte le carte avversarie."
        ]
      },
      "S2_088": {
        "name": "Tobirama Senju",
        "ability": "Onda violenta",
        "descriptions": [
          "Quando viene giocata, Indebolisce(2) e Rallenta(4s) tutte le carte avversarie.",
          "Quando viene giocata, Indebolisce(2) e Rallenta(8s) tutte le carte avversarie."
        ]
      },
      "S2_089": {
        "name": "Hiruzen Sarutobi",
        "ability": "Bombe del drago",
        "descriptions": [
          "Quando viene giocata, Indebolisce(3) e Brucia(4) la carta avversaria più vicina.",
          "Quando viene giocata, Indebolisce(3) e Brucia(5) la carta avversaria più vicina."
        ]
      },
      "S2_090": {
        "name": "Enma",
        "ability": "Re Scimmia",
        "descriptions": [
          "Fornisce Chakra(+1) agli alleati quando Cambiano corsia.",
          "Fornisce Chakra(+2) agli alleati quando Cambiano corsia."
        ]
      },
      "S2_091": {
        "name": "Naruto Uzumaki",
        "ability": "Volontà di Proteggere",
        "descriptions": [
          "La prima volta che questa carta va sotto il suo livello di Chakra, ottiene Chakra(+4) e Scatto(3s). Al ritiro, aumenta permanentemente il livello di Chakra di 2.",
          "La prima volta che questa carta va sotto il suo livello di Chakra, ottiene Chakra(+5) e Scatto(3s). Al ritiro, aumenta permanentemente il livello di Chakra di 2."
        ]
      },
      "S2_092": {
        "name": "Sasuke Uchiha",
        "ability": "Segno maledetto",
        "descriptions": [
          "Quando viene giocata, ottiene Chakra(+3). Dopo ogni scontro, ottiene Chakra(+2).",
          "Quando viene giocata, ottiene Chakra(+4). Dopo ogni scontro, ottiene Chakra(+2)."
        ]
      },
      "S2_093": {
        "name": "Sakura Haruno",
        "ability": "Inflessibile",
        "descriptions": [
          "Ottiene Difesa permanentemente. Ogni volta che Difesa si attiva, ottiene Chakra(+1) e Cambia corsia.",
          "Ottiene Difesa permanentemente. Ogni volta che Difesa si attiva, ottiene Chakra(+2) e Cambia corsia."
        ]
      },
      "S2_094": {
        "name": "Rock Lee",
        "ability": "Quinta Porta",
        "descriptions": [
          "Quando viene schierato, avvia Concentrazione(5s). Se riesce, ottiene Chakra(+7) e attiva il resto dell'abilità. Salta sul primo avversario che si avvicina. A ogni combattimento, applica Indebolimento(2) all'avversario e Indebolimento(1) a sé stesso.",
          "Quando viene schierato, avvia Concentrazione(3s). Se riesce, ottiene Chakra(+7) e attiva il resto dell'abilità. Salta sul primo avversario che si avvicina. A ogni combattimento, applica Indebolimento(2) all'avversario e Indebolimento(1) a sé stesso."
        ]
      },
      "S2_095": {
        "name": "Neji Hyuga",
        "ability": "Sessantaquattro Palmi",
        "descriptions": [
          "Ad ogni scontro, Respinge(1) e Indebolisce(1). Quando questa carta fa ritirare un rivale, riduce anche permanentemente il suo livello di Chakra di 2.",
          "Ad ogni scontro, Respinge(1) e Indebolisce(2). Quando questa carta fa ritirare un rivale, riduce anche permanentemente il suo livello di Chakra di 2."
        ]
      },
      "S2_096": {
        "name": "Gaara",
        "ability": "Controllo della sabbia",
        "descriptions": [
          "Difesa(1). Ogni volta che una carta avversaria si avvicina, la Blocca(8s) e ottiene Chakra(+2). Se l'avversario è già Bloccato, lo Indebolisce(3) e ottiene invece Difesa(1).",
          "Difesa(2). Ogni volta che una carta avversaria si avvicina, la Blocca(8s) e ottiene Chakra(+2). Se l'avversario è già Bloccato, lo Indebolisce(3) e ottiene invece Difesa(1)."
        ]
      },
      "S2_097": {
        "name": "Hiruzen Sarutobi",
        "ability": "Maestro degli elementi",
        "descriptions": [
          "Quando viene giocata, Indebolisce(1) e Rallenta(8s) tutti gli avversari di corsia. La prima volta che questa carta ottiene Chakra, Indebolisce(2) e Brucia(3) tutti gli avversari di corsia.",
          "Quando viene giocata, Indebolisce(1) e Rallenta(12s) tutti gli avversari di corsia. La prima volta che questa carta ottiene Chakra, Indebolisce(2) e Brucia(4) tutti gli avversari di corsia."
        ]
      },
      "S2_098": {
        "name": "Hiruzen Sarutobi",
        "ability": "Sigillo del diavolo",
        "descriptions": [
          "Quando viene giocata, Concentrazione(4s). Se la Concentrazione riesce, attiva il resto di questa abilità. Quando una carta avversaria si avvicina con Chakra uguale o superiore, le rimuove fino a 12 Chakra e disattiva qualsiasi abilità attiva. Se il bersaglio si ritira, applica Sigillo(15s). Al proprio ritiro, applica Sigillo(15s) a se stessa. Si ritira all'istante dopo aver Sigillato 3 carte.",
          "Quando viene giocata, Concentrazione(4s). Se la Concentrazione riesce, attiva il resto di questa abilità. Quando una carta avversaria si avvicina con Chakra uguale o superiore, le rimuove fino a 15 Chakra e disattiva qualsiasi abilità attiva. Se il bersaglio si ritira, applica Sigillo(15s). Al proprio ritiro, applica Sigillo(15s) a se stessa. Si ritira all'istante dopo aver Sigillato 3 carte."
        ]
      },
      "S2_099": {
        "name": "Ichibi",
        "ability": "Proiettili d'aria",
        "descriptions": [
          "Quando viene giocata, Indebolisce(2) tutti gli avversari di corsia nel lungo raggio. Ogni 10 secondi, Concentrazione(2s). Se la Concentrazione riesce, Indebolisce(2) tutti gli avversari di corsia nel lungo raggio.",
          "Quando viene giocata, Indebolisce(3) tutti gli avversari di corsia nel lungo raggio. Ogni 10 secondi, Concentrazione(2s). Se la Concentrazione riesce, Indebolisce(3) tutti gli avversari di corsia nel lungo raggio."
        ]
      },
      "S2_100": {
        "name": "Kyubi",
        "ability": "Destini Incrociati",
        "descriptions": [
          "Fornisce Chakra(+7) al prossimo alleato schierato. Le carte sono collegate, quindi quando una si ritira così fa l'altra.",
          "Fornisce Chakra(+8) al prossimo alleato schierato. Le carte sono collegate, quindi quando una si ritira così fa l'altra."
        ]
      },
      "S3_001": {
        "name": "Naruto Uzumaki",
        "ability": "Sogno condiviso",
        "descriptions": [
          "Ogni volta che un'altra carta con Sogno Condiviso si ritira, questa carta ottiene Chakra(+1).",
          "Ogni volta che un'altra carta con Sogno Condiviso si ritira, questa carta ottiene Chakra(+2)."
        ]
      },
      "S3_002": {
        "name": "Sasuke Uchiha",
        "ability": "Allenamento della palla di fuoco",
        "descriptions": [
          "Scatta(1s). Quando viene giocata, Chakra(+1) per ogni carta avversaria affetta da Brucia.",
          "Scatta(2s). Quando viene giocata, Chakra(+1) per ogni carta avversaria affetta da Brucia."
        ]
      },
      "S3_003": {
        "name": "Choji Akimichi",
        "ability": "Espansione parziale del braccio",
        "descriptions": [
          "Quando una carta avversaria si avvicina, Indebolisce(1) e Respinge(2).",
          "Quando una carta avversaria si avvicina, Indebolisce(1) e Respinge(4)."
        ]
      },
      "S3_004": {
        "name": "Kankuro",
        "ability": "Scambio di marionette",
        "descriptions": [
          "In caso di scontro, Teletrasporta dietro la carta avversaria, la Indebolisce(2) e la Blocca(5s).",
          "In caso di scontro, Teletrasporta dietro la carta avversaria, la Indebolisce(2) e la Blocca(8s)."
        ]
      },
      "S3_005": {
        "name": "Kankuro",
        "ability": "Vergine di ferro",
        "descriptions": [
          "Quando una carta avversaria si avvicina, la attira verso questa carta e ne disattiva l'abilità, poi la Indebolisce(2).",
          "Quando una carta avversaria si avvicina, la attira verso questa carta e ne disattiva l'abilità, poi la Indebolisce(3)."
        ]
      },
      "S3_006": {
        "name": "Neji Hyuga",
        "ability": "Difesa ravvicinata",
        "descriptions": [
          "Difesa(2). Quando Difesa si attiva, 50% di probabilità di Bloccare(6s) se stessa.",
          "Difesa(3). Quando Difesa si attiva, 50% di probabilità di Bloccare(6s) se stessa."
        ]
      },
      "S3_007": {
        "name": "Shikamaru Nara",
        "ability": "Scansafatiche",
        "descriptions": [
          "Scatta(2s)",
          "Scatta(3s)"
        ]
      },
      "S3_008": {
        "name": "Jiraiya",
        "ability": "Impazienza",
        "descriptions": [
          "Scatta(4s)",
          "Scatta(5s)"
        ]
      },
      "S3_009": {
        "name": "Jiraiya",
        "ability": "Trappola della bocca del rospo",
        "descriptions": [
          "Quando viene giocata, Blocca(6s) tutte le carte sulla corsia.",
          "Quando viene giocata, Blocca(10s) tutte le carte sulla corsia."
        ]
      },
      "S3_010": {
        "name": "Jiraiya",
        "ability": "Allenamento avanzato",
        "descriptions": [
          "Ogni volta che giochi un alleato di corsia con 3 o meno Chakra, gli concede Concentrazione(8s). Se quella Concentrazione riesce, la carta alleata ottiene Chakra(+3).",
          "Ogni volta che giochi un alleato di corsia con 3 o meno Chakra, gli concede Concentrazione(8s). Se quella Concentrazione riesce, la carta alleata ottiene Chakra(+4)."
        ]
      },
      "S3_011": {
        "name": "Orochimaru",
        "ability": "Protetto",
        "descriptions": [
          "Difesa(1)",
          "Difesa(2)"
        ]
      },
      "S3_012": {
        "name": "Orochimaru",
        "ability": "Sfuggente",
        "descriptions": [
          "Scatta(3s). Quando una carta avversaria si avvicina, la Indebolisce(1) e Cambia corsia.",
          "Scatta(5s). Quando una carta avversaria si avvicina, la Indebolisce(1) e Cambia corsia."
        ]
      },
      "S3_013": {
        "name": "Tsunade",
        "ability": "Impazienza",
        "descriptions": [
          "Scatta(3s)",
          "Scatta(4s)"
        ]
      },
      "S3_014": {
        "name": "Tsunade",
        "ability": "Colpo di potenza",
        "descriptions": [
          "Difesa(1). Quando una carta avversaria si avvicina, le salta addosso e la Respinge(2).",
          "Difesa(1). Quando una carta avversaria si avvicina, le salta addosso e la Respinge(4)."
        ]
      },
      "S3_015": {
        "name": "Tsunade",
        "ability": "Esperienza",
        "descriptions": [
          "Scatta(3s). In caso di scontro, Respinge(1).",
          "Scatta(4s). In caso di scontro, Respinge(1)."
        ]
      },
      "S3_016": {
        "name": "Manda",
        "ability": "Serpente colossale",
        "descriptions": [
          "Scatta(4s) e Difesa(1). Quando Difesa si attiva, Cambia corsia.",
          "Scatta(4s) e Difesa(2). Quando Difesa si attiva, Cambia corsia."
        ]
      },
      "S3_017": {
        "name": "Katsuyu",
        "ability": "Getto acido",
        "descriptions": [
          "Quando viene giocata, Indebolisce(2) e Rallenta(6s) tutti gli avversari nel medio raggio.",
          "Quando viene giocata, Indebolisce(3) e Rallenta(6s) tutti gli avversari nel medio raggio."
        ]
      },
      "S3_018": {
        "name": "Hiruzen Sarutobi",
        "ability": "Prova dei campanelli",
        "descriptions": [
          "Rallenta(6s) i prossimi 3 alleati giocati, fornendo loro Chakra(+1) ogni 3 secondi finché subiscono questo Rallenta.",
          "Rallenta(9s) i prossimi 3 alleati giocati, fornendo loro Chakra(+1) ogni 3 secondi finché subiscono questo Rallenta."
        ]
      },
      "S3_019": {
        "name": "Itachi Uchiha",
        "ability": "Fratello maggiore",
        "descriptions": [
          "Il prossimo Sasuke giocato ottiene Chakra(+2) e Scatta(4s) se giocato sulla stessa corsia, oppure Difesa(2) e Rallenta(10s) se giocato su un'altra corsia.",
          "Il prossimo Sasuke giocato ottiene Chakra(+2) e Scatta(5s) se giocato sulla stessa corsia, oppure Difesa(2) e Rallenta(12s) se giocato su un'altra corsia."
        ]
      },
      "S3_020": {
        "name": "Jirobo",
        "ability": "Rilascio del segno maledetto",
        "descriptions": [
          "Difesa(1). In caso di scontro, Respinge(1).",
          "Difesa(2). In caso di scontro, Respinge(1)."
        ]
      },
      "S3_021": {
        "name": "Kidomaru",
        "ability": "Rilascio del segno maledetto",
        "descriptions": [
          "Difesa(1) e Scatta(2s).",
          "Difesa(1) e Scatta(4s)."
        ]
      },
      "S3_022": {
        "name": "Kidomaru",
        "ability": "Pioggia di ragni",
        "descriptions": [
          "Quando viene giocata, Blocca(4s) o Rallenta(6s) casualmente tutte le carte avversarie.",
          "Quando viene giocata, Blocca(6s) o Rallenta(8s) casualmente tutte le carte avversarie."
        ]
      },
      "S3_023": {
        "name": "Kimimaro",
        "ability": "Controllo delle ossa",
        "descriptions": [
          "Scatta(2s). In caso di scontro, Indebolisce(3).",
          "Scatta(4s). In caso di scontro, Indebolisce(3)."
        ]
      },
      "S3_024": {
        "name": "Sakon & Ukon",
        "ability": "Rilascio del segno maledetto",
        "descriptions": [
          "Difesa(1). In caso di scontro, Indebolisce(1).",
          "Difesa(1). In caso di scontro, Indebolisce(2)."
        ]
      },
      "S3_025": {
        "name": "Tayuya",
        "ability": "Rilascio del segno maledetto",
        "descriptions": [
          "Difesa(1) e Scatta(2s).",
          "Difesa(1) e Scatta(4s)."
        ]
      },
      "S3_026": {
        "name": "Kimimaro",
        "ability": "Rilascio del segno maledetto",
        "descriptions": [
          "Difesa(1). Quando una carta avversaria si avvicina, si Blocca(2s) e Chakra(+1). In caso di scontro, Indebolisce(1).",
          "Difesa(2). Quando una carta avversaria si avvicina, si Blocca(2s) e Chakra(+1). In caso di scontro, Indebolisce(1)."
        ]
      },
      "S3_027": {
        "name": "Shizune",
        "ability": "Maialino devoto",
        "descriptions": [
          "Quando viene giocata, Evoca Tonton con Chakra(1) e Scatta(5s) sulla stessa corsia della Tsunade alleata. Raggiungendo una carta Tsunade alleata, le fornisce Chakra(+3) e poi si ritira.",
          "Quando viene giocata, Evoca Tonton con Chakra(1) e Scatta(5s) sulla stessa corsia della Tsunade alleata. Raggiungendo una carta Tsunade alleata, le fornisce Chakra(+4) e poi si ritira."
        ]
      },
      "S3_028": {
        "name": "Tsume Inuzuka",
        "ability": "Maestra dei segugi",
        "descriptions": [
          "Quando viene giocata, Evoca Kuromaru con Chakra(3) su un'altra corsia. Il prossimo Cane Ninja giocato ottiene Chakra(+2).",
          "Quando viene giocata, Evoca Kuromaru con Chakra(3) su un'altra corsia. Il prossimo Cane Ninja giocato ottiene Chakra(+3)."
        ]
      },
      "S3_029": {
        "name": "Akahoshi",
        "ability": "Allenamento ingannevole",
        "descriptions": [
          "Ogni volta che le carte alleate si Concentrano, concede loro Concentrazione(+4s). Indebolisce(1) le carte alleate ogni 4 secondi durante la Concentrazione.",
          "Ogni volta che le carte alleate si Concentrano, concede loro Concentrazione(+6s). Indebolisce(1) le carte alleate ogni 4 secondi durante la Concentrazione."
        ]
      },
      "S3_030": {
        "name": "Amachi",
        "ability": "Palla di cannone acquatica",
        "descriptions": [
          "Scatta(2s). Quando viene giocata, Indebolisce(1) la carta avversaria più vicina nel medio raggio.",
          "Scatta(3s). Quando viene giocata, Indebolisce(2) la carta avversaria più vicina nel medio raggio."
        ]
      },
      "S3_031": {
        "name": "Aoi Rokusho",
        "ability": "Pioggia di aghi",
        "descriptions": [
          "In caso di scontro, Indebolisce(1) e Rallenta(3s) tutti gli avversari di corsia vicini.",
          "In caso di scontro, Indebolisce(1) e Rallenta(5s) tutti gli avversari di corsia vicini."
        ]
      },
      "S3_032": {
        "name": "Dan Kato",
        "ability": "Sogno condiviso",
        "descriptions": [
          "Ogni volta che un'altra carta con Sogno Condiviso si ritira, questa carta ottiene Chakra(+1).",
          "Ogni volta che un'altra carta con Sogno Condiviso si ritira, questa carta ottiene Chakra(+2)."
        ]
      },
      "S3_033": {
        "name": "Fugaku Uchiha",
        "ability": "Capo degli Uchiha",
        "descriptions": [
          "Quando vengono schierate carte Uchiha alleate, queste ottengono Difesa(+1) e Rallenta(6s) se hanno 3 o meno Chakra, altrimenti ottengono Chakra(+2) e Blocca(4s).",
          "Quando vengono schierate carte Uchiha alleate, queste ottengono Difesa(+2) e Rallenta(6s) se hanno 3 o meno Chakra, altrimenti ottengono Chakra(+3) e Blocca(4s)."
        ]
      },
      "S3_034": {
        "name": "Fūjin",
        "ability": "Forza leggendaria",
        "descriptions": [
          "Difesa(1). In caso di scontro, Indebolisce(1) e Respinge(3).",
          "Difesa(2). In caso di scontro, Indebolisce(1) e Respinge(3)."
        ]
      },
      "S3_035": {
        "name": "Gamatatsu",
        "ability": "Fame motivante",
        "descriptions": [
          "Quando viene giocata, Si Concentra(12s). Ogni 4 secondi durante la Concentrazione, spende 1 energia se disponibile per fornire Chakra(+2) agli altri Rospi alleati.",
          "Quando viene giocata, Si Concentra(16s). Ogni 4 secondi durante la Concentrazione, spende 1 energia se disponibile per fornire Chakra(+2) agli altri Rospi alleati."
        ]
      },
      "S3_036": {
        "name": "Hanzaki",
        "ability": "Piano di rapina",
        "descriptions": [
          "Scatta(2s). Quando viene giocata, Indebolisce(1) tutti gli alleati di corsia, ottenendo Chakra(+2) per ogni alleato colpito.",
          "Scatta(3s). Quando viene giocata, Indebolisce(1) tutti gli alleati di corsia, ottenendo Chakra(+2) per ogni alleato colpito."
        ]
      },
      "S3_037": {
        "name": "Hanzaki",
        "ability": "Affondo dello Zanbato",
        "descriptions": [
          "Difesa(1). Quando una carta avversaria si avvicina, le salta addosso e la Indebolisce(1) o la Respinge(1).",
          "Difesa(2). Quando una carta avversaria si avvicina, le salta addosso e la Indebolisce(1) o la Respinge(1)."
        ]
      },
      "S3_038": {
        "name": "Idate Morino",
        "ability": "Corridore",
        "descriptions": [
          "Scatta(4s). In caso di scontro, Cambia corsia.",
          "Scatta(5s). In caso di scontro, Cambia corsia."
        ]
      },
      "S3_039": {
        "name": "Jirocho Wasabi",
        "ability": "Fiducia sincera",
        "descriptions": [
          "Il prossimo alleato schierato su un'altra corsia ottiene Scatto(2s) e Difesa(1). Quando raggiunge la media distanza, converte lo Scatto residuo in un massimo di 3 Chakra.",
          "Il prossimo alleato schierato su un'altra corsia ottiene Scatto(3s) e Difesa(1). Quando raggiunge la media distanza, converte lo Scatto residuo in un massimo di 3 Chakra."
        ]
      },
      "S3_040": {
        "name": "Arashi",
        "ability": "Mandala vincolante",
        "descriptions": [
          "Quando viene giocata, Respinge(2) e Blocca(8s) l'avversario di corsia con più Chakra. Finché subisce questo Blocca, Indebolisce(1) la carta avversaria ogni 4s.",
          "Quando viene giocata, Respinge(4) e Blocca(8s) l'avversario di corsia con più Chakra. Finché subisce questo Blocca, Indebolisce(1) la carta avversaria ogni 4s."
        ]
      },
      "S3_041": {
        "name": "Kagerō",
        "ability": "Arte ninja di Kagero",
        "descriptions": [
          "Quando viene giocata, Indebolisce(3) 2 avversari di corsia nel medio raggio, poi Cambia corsia a sé stessa e a 2 alleati di corsia nel corto raggio.",
          "Quando viene giocata, Indebolisce(4) 2 avversari di corsia nel medio raggio, poi Cambia corsia a sé stessa e a 2 alleati di corsia nel corto raggio."
        ]
      },
      "S3_042": {
        "name": "Kyuroku Wagarashi",
        "ability": "Disonorevole",
        "descriptions": [
          "Il prossimo alleato di corsia giocato ottiene Scatta(4s). Al ritiro, Cambia corsia e Rallenta(3s) tutti gli alleati di corsia.",
          "Il prossimo alleato di corsia giocato ottiene Scatta(5s). Al ritiro, Cambia corsia e Rallenta(3s) tutti gli alleati di corsia."
        ]
      },
      "S3_043": {
        "name": "Mikoto Uchiha",
        "ability": "Conforto",
        "descriptions": [
          "Il prossimo Sasuke giocato ottiene Chakra(+1). La prima volta che una carta Sasuke alleata scende sotto il Chakra base, la Cura(1).",
          "Il prossimo Sasuke giocato ottiene Chakra(+1). La prima volta che una carta Sasuke alleata scende sotto il Chakra base, la Cura(2)."
        ]
      },
      "S3_044": {
        "name": "Mizuki",
        "ability": "Segno maledetto animale",
        "descriptions": [
          "In caso di scontro, Indebolisce(4). Dopo 20 secondi, imposta il proprio Chakra a Chakra(1) e disattiva questa abilità.",
          "In caso di scontro, Indebolisce(5). Dopo 20 secondi, imposta il proprio Chakra a Chakra(1) e disattiva questa abilità."
        ]
      },
      "S3_045": {
        "name": "Nawaki",
        "ability": "Sogno condiviso",
        "descriptions": [
          "Ogni volta che un'altra carta con Sogno Condiviso si ritira, questa carta ottiene Chakra(+1).",
          "Ogni volta che un'altra carta con Sogno Condiviso si ritira, questa carta ottiene Chakra(+2)."
        ]
      },
      "S3_046": {
        "name": "Raiga Kurosuki",
        "ability": "Spade del tuono",
        "descriptions": [
          "Quando una carta avversaria si avvicina, la Indebolisce(1) e le Cambia corsia.",
          "Quando una carta avversaria si avvicina, la Indebolisce(2) e le Cambia corsia."
        ]
      },
      "S3_047": {
        "name": "Raijin",
        "ability": "Forza leggendaria",
        "descriptions": [
          "Difesa(1). In caso di scontro, Indebolisce(1) e Respinge(3).",
          "Difesa(2). In caso di scontro, Indebolisce(1) e Respinge(3)."
        ]
      },
      "S3_048": {
        "name": "Sumaru",
        "ability": "Guida del luogo",
        "descriptions": [
          "Quando viene giocata, 2 alleati nel corto raggio ottengono Scatta(3s).",
          "Quando viene giocata, 3 alleati nel corto raggio ottengono Scatta(3s)."
        ]
      },
      "S3_049": {
        "name": "Yoshino Nara",
        "ability": "Severità",
        "descriptions": [
          "Il prossimo Shikamaru giocato ottiene Chakra(+1) e Rallenta(8s).",
          "Il prossimo Shikamaru giocato ottiene Chakra(+1) e Rallenta(12s)."
        ]
      },
      "S3_050": {
        "name": "Trio Uchiha",
        "ability": "Sospetto",
        "descriptions": [
          "Scatta(4s). Quando è nel medio raggio, Chakra(+2).",
          "Scatta(6s). Quando è nel medio raggio, Chakra(+2)."
        ]
      },
      "S3_051": {
        "name": "Naruto Uzumaki",
        "ability": "Manto della volpe demoniaca",
        "descriptions": [
          "Scatta(3s). Quando viene giocata, Chakra(+2). La prima volta che questa carta scende sotto il Chakra base, Cura(2).",
          "Scatta(5s). Quando viene giocata, Chakra(+2). La prima volta che questa carta scende sotto il Chakra base, Cura(2)."
        ]
      },
      "S3_052": {
        "name": "Sasuke Uchiha",
        "ability": "Rilascio del segno maledetto",
        "descriptions": [
          "La prima volta che questa carta ottiene Chakra, ottiene Chakra(+2) aggiuntivo.",
          "La prima volta che questa carta ottiene Chakra, ottiene Chakra(+4) aggiuntivo."
        ]
      },
      "S3_053": {
        "name": "Kankuro",
        "ability": "Superiorità tattica",
        "descriptions": [
          "Ogni volta che gli alleati si Teletrasportano dietro gli avversari, ottiene Chakra(+2).",
          "Ogni volta che gli alleati si Teletrasportano dietro gli avversari, ottiene Chakra(+3)."
        ]
      },
      "S3_054": {
        "name": "Shikamaru Nara",
        "ability": "Strangolamento dell'ombra",
        "descriptions": [
          "Quando un avversario si avvicina, applica Blocco(6s) a lui e a sé stessa. L'avversario perde 1 Chakra ogni 2 secondi finché è sotto questo Blocco.",
          "Quando un avversario si avvicina, applica Blocco(8s) a lui e a sé stessa. L'avversario perde 1 Chakra ogni 2 secondi finché è sotto questo Blocco."
        ]
      },
      "S3_055": {
        "name": "Akamaru",
        "ability": "Marcatura",
        "descriptions": [
          "Quando viene giocata, Rallenta(8s) tutti gli avversari di corsia. Finché questo Rallenta è attivo, Indebolimento(+1) alle abilità Indebolire alleate applicate agli avversari colpiti.",
          "Quando viene giocata, Rallenta(12s) tutti gli avversari di corsia. Finché questo Rallenta è attivo, Indebolimento(+1) alle abilità Indebolire alleate applicate agli avversari colpiti."
        ]
      },
      "S3_056": {
        "name": "Itachi Uchiha",
        "ability": "Compostezza",
        "descriptions": [
          "Ottiene Chakra(+1) e si Blocca(2s) ogni volta che una carta ottiene Concentrazione.",
          "Ottiene Chakra(+2) e si Blocca(4s) ogni volta che una carta ottiene Concentrazione."
        ]
      },
      "S3_057": {
        "name": "Jiraiya",
        "ability": "Esperienza",
        "descriptions": [
          "Scatta(3s). In caso di scontro, Cambia corsia.",
          "Scatta(4s). In caso di scontro, Cambia corsia."
        ]
      },
      "S3_058": {
        "name": "Jiraiya",
        "ability": "Jizo degli aghi",
        "descriptions": [
          "Difesa(2). Quando Difesa si attiva, Indebolisce(2) l'avversario che l'ha attivata. Ignora Difesa.",
          "Difesa(3). Quando Difesa si attiva, Indebolisce(2) l'avversario che l'ha attivata. Ignora Difesa."
        ]
      },
      "S3_059": {
        "name": "Orochimaru",
        "ability": "Esperienza",
        "descriptions": [
          "Scatta(3s). In caso di scontro, Indebolisce(1).",
          "Scatta(4s). In caso di scontro, Indebolisce(1)."
        ]
      },
      "S3_060": {
        "name": "Tsunade",
        "ability": "La Quinta",
        "descriptions": [
          "Quando viene schierata, fornisce Chakra(+1) a tutti gli alleati sulle altre corsie. Finché questa carta è attiva, quando un alleato subisce Indebolimento per la prima volta, gli applica Cura(2).",
          "Quando viene schierata, fornisce Chakra(+2) a tutti gli alleati sulle altre corsie. Finché questa carta è attiva, quando un alleato subisce Indebolimento per la prima volta, gli applica Cura(2)."
        ]
      },
      "S3_061": {
        "name": "Tsunade",
        "ability": "Bersaglio leggendario",
        "descriptions": [
          "Quando viene giocata, 10% di probabilità di ottenere Chakra(+6). Altrimenti, ottiene Scatta(3s).",
          "Quando viene giocata, 10% di probabilità di ottenere Chakra(+7). Altrimenti, ottiene Scatta(4s)."
        ]
      },
      "S3_062": {
        "name": "Tsunade",
        "ability": "Cura disperata",
        "descriptions": [
          "Quando viene giocata, Cura(2) l'alleato di corsia più vicino. La prima volta che un alleato di corsia perde Chakra da qualsiasi fonte, lo Cura(2).",
          "Quando viene giocata, Cura(3) l'alleato di corsia più vicino. La prima volta che un alleato di corsia perde Chakra da qualsiasi fonte, lo Cura(3)."
        ]
      },
      "S3_063": {
        "name": "Gamabunta",
        "ability": "Arte della spada del rospo",
        "descriptions": [
          "Quando una carta avversaria si avvicina, le salta addosso e la Indebolisce(2). Ottiene Scatta(+3s) la prima volta che ottiene Chakra.",
          "Quando una carta avversaria si avvicina, le salta addosso e la Indebolisce(3). Ottiene Scatta(+4s) la prima volta che ottiene Chakra."
        ]
      },
      "S3_064": {
        "name": "Kabuto Yakuchi",
        "ability": "Bisturi di chakra",
        "descriptions": [
          "Scatta(2s). In caso di scontro, Teletrasporta dietro la carta avversaria e la Blocca in modo permanente.",
          "Scatta(3s). In caso di scontro, Teletrasporta dietro la carta avversaria e la Blocca in modo permanente."
        ]
      },
      "S3_065": {
        "name": "Kisame Hoshigaki",
        "ability": "Difesa di Samehada",
        "descriptions": [
          "Difesa(3). Quando Difesa si attiva, Indebolisce(1) l'avversario che l'ha attivata e ottiene Chakra(+1).",
          "Difesa(4). Quando Difesa si attiva, Indebolisce(1) l'avversario che l'ha attivata e ottiene Chakra(+1)."
        ]
      },
      "S3_066": {
        "name": "Jirobo",
        "ability": "Assorbimento del chakra",
        "descriptions": [
          "A ogni scontro, Chakra(+1) per questa carta e Indebolisce(1) la carta avversaria.",
          "A ogni scontro, Chakra(+1) per questa carta e Indebolisce(2) la carta avversaria."
        ]
      },
      "S3_067": {
        "name": "Sakon & Ukon",
        "ability": "Fusione maledetta",
        "descriptions": [
          "In caso di scontro, Teletrasporta dietro la carta avversaria poi Blocca(6s) lei e questa carta. L'avversario perde 1 Chakra ogni 2 secondi finché subisce questo Blocca.",
          "In caso di scontro, Teletrasporta dietro la carta avversaria poi Blocca(8s) lei e questa carta. L'avversario perde 1 Chakra ogni 2 secondi finché subisce questo Blocca."
        ]
      },
      "S3_068": {
        "name": "Kurenai Yuhi",
        "ability": "Finta illusoria",
        "descriptions": [
          "In caso di scontro, Teletrasporta dietro la carta avversaria, la Indebolisce(2) e la Rallenta(4s).",
          "In caso di scontro, Teletrasporta dietro la carta avversaria, la Indebolisce(2) e la Rallenta(8s)."
        ]
      },
      "S3_069": {
        "name": "Shizune",
        "ability": "Nebbia velenosa",
        "descriptions": [
          "Quando viene giocata, Rallenta(8s) tutte le carte nel medio raggio e ne disattiva le abilità. Perdono 2 Chakra ogni 4 secondi finché subiscono questo Rallenta.",
          "Quando viene giocata, Rallenta(12s) tutte le carte nel medio raggio e ne disattiva le abilità. Perdono 2 Chakra ogni 4 secondi finché subiscono questo Rallenta."
        ]
      },
      "S3_070": {
        "name": "Akahoshi",
        "ability": "Senza scrupoli",
        "descriptions": [
          "Difesa(1). Quando Difesa si attiva, applica Indebolimento(2) all'avversario che l'ha attivata. La prima volta che perde Chakra, applica Indebolimento(2) a un alleato casuale e ottiene Chakra(+2) e Difesa(+1).",
          "Difesa(1). Quando Difesa si attiva, applica Indebolimento(2) all'avversario che l'ha attivata. La prima volta che perde Chakra, applica Indebolimento(2) a un alleato casuale e ottiene Chakra(+3) e Difesa(+1)."
        ]
      },
      "S3_071": {
        "name": "Amachi",
        "ability": "Mostro marino",
        "descriptions": [
          "Quando viene giocata, si Blocca(6s). Finché è Bloccata, ogni 3 secondi Blocca(3s) o Rallenta(6s) tutti gli avversari di corsia.",
          "Quando viene giocata, si Blocca(9s). Finché è Bloccata, ogni 3 secondi Blocca(3s) o Rallenta(6s) tutti gli avversari di corsia."
        ]
      },
      "S3_072": {
        "name": "Aoi Rokusho",
        "ability": "Spada Raijin",
        "descriptions": [
          "Difesa(2). In caso di scontro, Indebolisce(1) e Blocca(2s) la carta avversaria. Ignora Difesa.",
          "Difesa(2). In caso di scontro, Indebolisce(2) e Blocca(4s) la carta avversaria. Ignora Difesa."
        ]
      },
      "S3_073": {
        "name": "Sumaru",
        "ability": "Chakra della stella",
        "descriptions": [
          "Quando viene giocata, Chakra(+1) e Cambia corsia se ci sono alleati di corsia. In caso di scontro, Indebolisce(2) la carta avversaria.",
          "Quando viene giocata, Chakra(+1) e Cambia corsia se ci sono alleati di corsia. In caso di scontro, Indebolisce(3) la carta avversaria."
        ]
      },
      "S3_074": {
        "name": "Naruto Uzumaki",
        "ability": "Rasengan",
        "descriptions": [
          "In caso di scontro, Indebolisce(2) e Respinge(4). Rimuove tutta la Difesa dalla carta avversaria.",
          "In caso di scontro, Indebolisce(3) e Respinge(5). Rimuove tutta la Difesa dalla carta avversaria."
        ]
      },
      "S3_075": {
        "name": "Naruto Uzumaki",
        "ability": "Forma a una coda",
        "descriptions": [
          "A ogni scontro, Indebolisce(1). La prima volta che questa carta scende sotto il Chakra base, si Cura(3).",
          "A ogni scontro, Indebolisce(1). La prima volta che questa carta scende sotto il Chakra base, si Cura(4)."
        ]
      },
      "S3_076": {
        "name": "Sasuke Uchiha",
        "ability": "Previsione evoluta",
        "descriptions": [
          "Difesa(3). Quando Difesa si attiva, Chakra(+1). Non può essere Indebolita negli scontri con carte avversarie di 3 o meno Chakra.",
          "Difesa(3). Quando Difesa si attiva, Chakra(+2). Non può essere Indebolita negli scontri con carte avversarie di 3 o meno Chakra."
        ]
      },
      "S3_077": {
        "name": "Sasuke Uchiha",
        "ability": "Difesa alata",
        "descriptions": [
          "Difesa(2). In caso di scontro, Indebolisce(2). Quando Difesa si attiva, ottiene Scatta(2s) e riattiva questa abilità.",
          "Difesa(2). In caso di scontro, Indebolisce(2). Quando Difesa si attiva, ottiene Scatta(4s) e riattiva questa abilità."
        ]
      },
      "S3_078": {
        "name": "Gaara",
        "ability": "Scudo di Shukaku",
        "descriptions": [
          "Difesa(3). Finché questa carta è attiva, gli alleati di corsia dietro di essa ignorano gli effetti delle abilità avversarie ma consumano la Difesa di questa carta.",
          "Difesa(4). Finché questa carta è attiva, gli alleati di corsia dietro di essa ignorano gli effetti delle abilità avversarie ma consumano la Difesa di questa carta."
        ]
      },
      "S3_079": {
        "name": "Kiba Inuzuka",
        "ability": "Combinazione di trasformazione",
        "descriptions": [
          "Quando viene giocata, ritira Akamaru e Kiba alleati e trasferisce il loro Chakra a questa carta, ottenendo Chakra(+1) aggiuntivo per ogni ritiro. A ogni scontro, Indebolisce(1).",
          "Quando viene giocata, ritira Akamaru e Kiba alleati e trasferisce il loro Chakra a questa carta, ottenendo Chakra(+2) aggiuntivo per ogni ritiro. A ogni scontro, Indebolisce(1)."
        ]
      },
      "S3_080": {
        "name": "Rock Lee",
        "ability": "Pugno barcollante",
        "descriptions": [
          "Ogni 10s avvia Concentrazione(3s) su sé stesso. Se riesce, ottiene casualmente Scatto(2s), Difesa(1) o Chakra(+1). A ogni combattimento, applica Indebolimento(1).",
          "Ogni 8s avvia Concentrazione(3s) su sé stesso. Se riesce, ottiene casualmente Scatto(2s), Difesa(1) o Chakra(+1). A ogni combattimento, applica Indebolimento(1)."
        ]
      },
      "S3_081": {
        "name": "Temari",
        "ability": "Danza della decapitazione rapida",
        "descriptions": [
          "Quando viene giocata, Si Concentra(9s). Ogni 3 secondi durante la Concentrazione, Indebolisce(1) e Respinge(2) tutti gli avversari nel medio e lungo raggio.",
          "Quando viene giocata, Si Concentra(9s). Ogni 3 secondi durante la Concentrazione, Indebolisce(1) e Respinge(4) tutti gli avversari nel medio e lungo raggio."
        ]
      },
      "S3_082": {
        "name": "Itachi Uchiha",
        "ability": "Esercito dello Tsukuyomi",
        "descriptions": [
          "Finché questa carta è attiva, ogni volta che Blocchi carte avversarie, Evoca un clone di questa carta su quella stessa corsia con Scatta(4s) e perde 1 Chakra. I cloni non possono segnare punti né ottenere Chakra.",
          "Finché questa carta è attiva, ogni volta che Blocchi carte avversarie, Evoca un clone di questa carta su quella stessa corsia con Scatta(6s) e perde 1 Chakra. I cloni non possono segnare punti né ottenere Chakra."
        ]
      },
      "S3_083": {
        "name": "Itachi Uchiha",
        "ability": "Fuga da Amaterasu",
        "descriptions": [
          "Ogni volta che una carta avversaria si avvicina, la Brucia(10), poi Cambia corsia e perde 1 Chakra. Questo effetto Brucia può propagarsi ad altre carte al contatto e ignora Difesa.",
          "Ogni volta che una carta avversaria si avvicina, la Brucia(15), poi Cambia corsia e perde 1 Chakra. Questo effetto Brucia può propagarsi ad altre carte al contatto e ignora Difesa."
        ]
      },
      "S3_084": {
        "name": "Jiraiya",
        "ability": "Lanciafiamme dell'olio di rospo",
        "descriptions": [
          "Quando viene giocata, Brucia(3) tutte le carte avversarie poi Si Concentra(8s). Durante la Concentrazione, ottiene Chakra(+1) ogni volta che gli alleati applicano Brucia. Se la Concentrazione riesce, Brucia(4) tutte le carte avversarie.",
          "Quando viene giocata, Brucia(3) tutte le carte avversarie poi Si Concentra(8s). Durante la Concentrazione, ottiene Chakra(+1) ogni volta che gli alleati applicano Brucia. Se la Concentrazione riesce, Brucia(5) tutte le carte avversarie."
        ]
      },
      "S3_085": {
        "name": "Gamabunta",
        "ability": "Combinazione dell'olio di rospo",
        "descriptions": [
          "Quando viene giocata, Brucia(3) tutti gli avversari di corsia. Se degli avversari subiscono già Brucia, attiva istantaneamente la quantità di Brucia rimanente.",
          "Quando viene giocata, Brucia(4) tutti gli avversari di corsia. Se degli avversari subiscono già Brucia, attiva istantaneamente la quantità di Brucia rimanente."
        ]
      },
      "S3_086": {
        "name": "Kidomaru",
        "ability": "Arco del ragno",
        "descriptions": [
          "Quando viene schierato, avvia Concentrazione(12s). Ogni 4 secondi durante Concentrazione, applica Indebolimento(2) e Blocco(6s) all'avversario con più Chakra a lunga distanza.",
          "Quando viene schierato, avvia Concentrazione(16s). Ogni 4 secondi durante Concentrazione, applica Indebolimento(2) e Blocco(6s) all'avversario con più Chakra a lunga distanza."
        ]
      },
      "S3_087": {
        "name": "Tayuya",
        "ability": "Flauto demoniaco",
        "descriptions": [
          "Quando viene giocata, Chakra(+1). Finché questa carta è attiva, i Rallenta applicati dagli alleati non scadono.",
          "Quando viene giocata, Chakra(+2). Finché questa carta è attiva, i Rallenta applicati dagli alleati non scadono."
        ]
      },
      "S3_088": {
        "name": "Kimimaro",
        "ability": "Arma vivente",
        "descriptions": [
          "Difesa(3). A ogni scontro, Indebolisce(2). Cambia corsia quando fa ritirare un avversario.",
          "Difesa(5). A ogni scontro, Indebolisce(2). Cambia corsia quando fa ritirare un avversario."
        ]
      },
      "S3_089": {
        "name": "Akahoshi",
        "ability": "Drago della stella",
        "descriptions": [
          "Quando viene giocata, Respinge(2), Indebolisce(1) e Blocca(4s) tutti gli avversari di corsia.",
          "Quando viene giocata, Respinge(2), Indebolisce(1) e Blocca(8s) tutti gli avversari di corsia."
        ]
      },
      "S3_090": {
        "name": "Raiga Kurosuki",
        "ability": "Tornado del drago del tuono",
        "descriptions": [
          "Quando viene giocata, Si Concentra(8s). Se la Concentrazione riesce, Indebolisce(3) e Respinge(2) tutti gli avversari di corsia nel corto e medio raggio.",
          "Quando viene giocata, Si Concentra(6s). Se la Concentrazione riesce, Indebolisce(3) e Respinge(2) tutti gli avversari di corsia nel corto e medio raggio."
        ]
      },
      "S3_091": {
        "name": "Sasuke Uchiha",
        "ability": "Chidori nero",
        "descriptions": [
          "Scatta(4s). Salta alla prima carta rivale che si avvicina, ottiene Chakra(+2) e la Indebolisce(3). Indebolisce(2) tutte le altre carte vicine. Ignora Difesa.",
          "Scatta(5s). Salta alla prima carta rivale che si avvicina, ottiene Chakra(+2) e la Indebolisce(4). Indebolisce(2) tutte le altre carte vicine. Ignora Difesa."
        ]
      },
      "S3_092": {
        "name": "Naruto Uzumaki",
        "ability": "Rasengan della volpe demoniaca",
        "descriptions": [
          "Scatto(4s). Salta sul primo avversario che si avvicina, applicandogli Indebolimento(3) e Spinta(2). Applica Indebolimento(2) a tutte le altre carte vicine. Rimuove tutta la Difesa dell'avversario.",
          "Scatto(5s). Salta sul primo avversario che si avvicina, applicandogli Indebolimento(4) e Spinta(2). Applica Indebolimento(2) a tutte le altre carte vicine. Rimuove tutta la Difesa dell'avversario."
        ]
      },
      "S3_093": {
        "name": "Choji Akimichi",
        "ability": "Furia della farfalla",
        "descriptions": [
          "Difesa(3). Quando Difesa si attiva, ottiene Chakra(+2). Se l'avversario che ha attivato Difesa è vicino, salta su di lui. Finché Difesa è disponibile, applica Indebolimento(2) e Spinta(1) a ogni combattimento.",
          "Difesa(3). Quando Difesa si attiva, ottiene Chakra(+3). Se l'avversario che ha attivato Difesa è vicino, salta su di lui. Finché Difesa è disponibile, applica Indebolimento(2) e Spinta(1) a ogni combattimento."
        ]
      },
      "S3_094": {
        "name": "Gaara",
        "ability": "Tsunami di sabbia",
        "descriptions": [
          "Quando viene giocata, Si Concentra(6s). Ogni 2 secondi durante la Concentrazione, Indebolisce(1) e Respinge(1) tutte le carte avversarie. Se hanno 2 o meno Chakra, invece Indebolisce(2). Quando questa carta ne fa ritirare un'altra, la Sigillo(5s).",
          "Quando viene giocata, Si Concentra(8s). Ogni 2 secondi durante la Concentrazione, Indebolisce(1) e Respinge(1) tutte le carte avversarie. Se hanno 3 o meno Chakra, invece Indebolisce(3). Quando questa carta ne fa ritirare un'altra, la Sigillo(5s)."
        ]
      },
      "S3_095": {
        "name": "Itachi Uchiha",
        "ability": "Tsukuyomi",
        "descriptions": [
          "Quando viene giocata, Blocca(12s) la carta avversaria più vicina, poi perde 1 Chakra. Se la carta avversaria ha più di 1 Chakra, perde 1 Chakra al secondo. Ogni volta che gli alleati Bloccano carte avversarie, riattiva questa abilità per ogni avversario colpito.",
          "Quando viene giocata, Blocca(16s) la carta avversaria più vicina, poi perde 1 Chakra. Se la carta avversaria ha più di 1 Chakra, perde 1 Chakra al secondo. Ogni volta che gli alleati Bloccano carte avversarie, riattiva questa abilità per ogni avversario colpito."
        ]
      },
      "S3_096": {
        "name": "Itachi Uchiha",
        "ability": "Carneficina",
        "descriptions": [
          "Ogni volta che una carta viene giocata sulla stessa corsia, la Indebolisce(1) e la Blocca(10s). Se ha 3 o meno Chakra, invece la Indebolisce(3). Poi Cambia corsia.",
          "Ogni volta che una carta viene giocata sulla stessa corsia, la Indebolisce(2) e la Blocca(10s). Se ha 4 o meno Chakra, invece la Indebolisce(4). Poi Cambia corsia."
        ]
      },
      "S3_097": {
        "name": "Tsunade",
        "ability": "Rigenerazione mitotica",
        "descriptions": [
          "La prima volta che scende sotto il Chakra base, si Cura fino a quel valore e ottiene Chakra(+4). Per i successivi 10 secondi ignora le abilità avversarie e applica Cura(4) a sé stessa dopo ogni combattimento. Quando si ritira, riduce permanentemente il proprio Chakra base di 1.",
          "La prima volta che scende sotto il Chakra base, si Cura fino a quel valore e ottiene Chakra(+5). Per i successivi 10 secondi ignora le abilità avversarie e applica Cura(4) a sé stessa dopo ogni combattimento. Quando si ritira, riduce permanentemente il proprio Chakra base di 1."
        ]
      },
      "S3_098": {
        "name": "Sakon & Ukon",
        "ability": "Difesa sincronizzata",
        "descriptions": [
          "Si schiera come Sakon e Ukon su corsie separate con Difesa(2). Ogni volta che la Difesa di un alleato si attiva, entrambe le carte ottengono Chakra(+1).",
          "Si schiera come Sakon e Ukon su corsie separate con Difesa(4). Ogni volta che la Difesa di un alleato si attiva, entrambe le carte ottengono Chakra(+1)."
        ]
      },
      "S3_099": {
        "name": "Tayuya",
        "ability": "Evocazione dei Doki",
        "descriptions": [
          "Quando viene schierata, avvia Concentrazione(8s). Se riesce, Evoca un demone Doki su ogni corsia. Ogni volta che Evochi altre carte, queste ottengono Chakra(+1). Ignora tutte le abilità e i combattimenti avversari finché i demoni sono attivi.",
          "Quando viene schierata, avvia Concentrazione(6s). Se riesce, Evoca un demone Doki su ogni corsia. Ogni volta che Evochi altre carte, queste ottengono Chakra(+1). Ignora tutte le abilità e i combattimenti avversari finché i demoni sono attivi."
        ]
      },
      "S3_100": {
        "name": "Kimimaro",
        "ability": "Lealtà incrollabile",
        "descriptions": [
          "Quando viene giocata, ottiene Chakra(+6) e Scatta(5s). Difesa permanente finché Scatta è attivo. A ogni scontro, si Indebolisce(1) e Indebolisce(3) la carta avversaria. Al ritiro, Indebolisce(2) tutte le carte. Non può essere influenzata dalle abilità alleate.",
          "Quando viene giocata, ottiene Chakra(+8) e Scatta(6s). Difesa permanente finché Scatta è attivo. A ogni scontro, si Indebolisce(1) e Indebolisce(3) la carta avversaria. Al ritiro, Indebolisce(2) tutte le carte. Non può essere influenzata dalle abilità alleate."
        ]
      }
    },
    "ruleNotes": {
      "S2_041": "{allies} alleati del personaggio richiesto; composizione del mazzo non verificata.",
      "S1_004": "Effetti di incontro applicati in {activations} combattimenti.",
      "S1_005": "Effetti di incontro applicati in {activations} combattimenti.",
      "S1_008": "Effetti di incontro applicati in {activations} combattimenti.",
      "S1_010": "Effetti di incontro applicati in {activations} combattimenti.",
      "S1_023": "Effetti di incontro applicati in {activations} combattimenti.",
      "S1_030": "Effetti di incontro applicati in {activations} combattimenti.",
      "S1_035": "Effetti di incontro applicati in {activations} combattimenti.",
      "S2_007": "Effetti di incontro applicati in {activations} combattimenti.",
      "S2_025": "Effetti di incontro applicati in {activations} combattimenti.",
      "S2_030": "Effetti di incontro applicati in {activations} combattimenti.",
      "S2_042": "Effetti di incontro applicati in {activations} combattimenti.",
      "S2_052": "Effetti di incontro applicati in {activations} combattimenti.",
      "S2_053": "Effetti di incontro applicati in {activations} combattimenti.",
      "S2_063": "Effetti di incontro applicati in {activations} combattimenti.",
      "S3_004": "Effetti di incontro applicati in {activations} combattimenti.",
      "S3_023": "Effetti di incontro applicati in {activations} combattimenti.",
      "S3_024": "Effetti di incontro applicati in {activations} combattimenti.",
      "S3_034": "Effetti di incontro applicati in {activations} combattimenti.",
      "S3_044": "un combattimento prima dei 20s; successivo azzeramento a Chakra(1) non incluso nel picco. Gli effetti senza ripetizione esplicita si applicano una sola volta.",
      "S3_047": "Effetti di incontro applicati in {activations} combattimenti.",
      "S3_059": "Effetti di incontro applicati in {activations} combattimenti.",
      "S3_068": "Effetti di incontro applicati in {activations} combattimenti.",
      "S3_072": "Effetti di incontro applicati in {activations} combattimenti.",
      "S3_074": "Effetti di incontro applicati in {activations} combattimenti.",
      "S1_003": "Una nuova unità con il chakra indicato.",
      "S1_019": "{allies} bersagli/eventi per il gruppo indicato; condizioni favorevoli.",
      "S1_046": "{allies} bersagli/eventi per il gruppo indicato; condizioni favorevoli.",
      "S1_062": "{allies} bersagli/eventi per il gruppo indicato; condizioni favorevoli.",
      "S1_073": "{allies} bersagli/eventi per il gruppo indicato; condizioni favorevoli.",
      "S2_015": "{allies} bersagli/eventi per il gruppo indicato; condizioni favorevoli.",
      "S2_022": "{allies} bersagli/eventi per il gruppo indicato; condizioni favorevoli.",
      "S2_073": "{allies} bersagli/eventi per il gruppo indicato; condizioni favorevoli.",
      "S2_083": "{allies} bersagli/eventi per il gruppo indicato; condizioni favorevoli.",
      "S3_002": "{allies} bersagli/eventi per il gruppo indicato; condizioni favorevoli.",
      "S1_020": "Il danno a un alleato viene sottratto.",
      "S1_021": "3 alleati.",
      "S1_022": "3 alleati.",
      "S1_024": "Numero di alleati specificato dal livello.",
      "S1_033": "Un solo bonus: Akamaru oppure la carta stessa. Richiamo dal mazzo senza duplicare forza base.",
      "S1_038": "Numero di alleati specificato dal livello.",
      "S1_053": "{enemies} avversari colpiti.",
      "S1_069": "{enemies} avversari colpiti.",
      "S1_074": "{enemies} avversari colpiti.",
      "S1_079": "{enemies} avversari colpiti.",
      "S1_081": "{enemies} avversari colpiti.",
      "S2_008": "{enemies} avversari colpiti.",
      "S2_076": "{enemies} avversari per ciascuno dei un combattimento. Gli effetti senza ripetizione esplicita si applicano una sola volta.",
      "S2_088": "{enemies} avversari colpiti.",
      "S3_017": "{enemies} avversari colpiti.",
      "S3_031": "{enemies} avversari per ciascuno dei un combattimento. Gli effetti senza ripetizione esplicita si applicano una sola volta.",
      "S3_089": "{enemies} avversari colpiti.",
      "S3_090": "{enemies} avversari colpiti.",
      "S1_056": "Si usa il ramo con bonus numerico. Il richiamo di Hiruzen non aggiunge nuovamente la sua forza.",
      "S1_060": "Carta richiamata dal mazzo: forza già inclusa nel mazzo, nessuna nuova unità conteggiata.",
      "S1_071": "Massimo numero dichiarato di cloni, energia sufficiente.",
      "S1_083": "Ramo condizionale più alto: {enemies} avversari e {allies} alleati, saldo nullo.",
      "S2_002": "{enemies} avversari con chakra superiore.",
      "S2_016": "Tre nuove unità con Chakra(1); riciclo della carta non simulato.",
      "S2_018": "Un alleato per ciascuno dei due nomi; identità necessarie non controllate.",
      "S2_019": "Un alleato per ciascuno dei due nomi; identità necessarie non controllate.",
      "S2_020": "Un alleato per ciascuno dei due nomi; identità necessarie non controllate.",
      "S2_032": "Bonus al rospo richiamato; forza del rospo già inclusa nel mazzo.",
      "S2_037": "Anbu Black Ops non ha chakra dichiarato: evocazione non quantificata.",
      "S2_038": "Bonus sul ramo con chakra basso; evocato dal mazzo non duplicato.",
      "S2_039": "Uno o due nemici, secondo il livello.",
      "S2_040": "{enemies} avversari e {allies} alleati colpiti al ritiro; saldo nullo.",
      "S2_054": "Dimezza chakra nemico: valore non determinabile senza chakra del bersaglio. Imposta una correzione.",
      "S2_058": "Controllo temporaneo del nemico non tradotto in forza.",
      "S2_064": "Controllo temporaneo del nemico non tradotto in forza.",
      "S2_062": "Uno o due nemici secondo il livello.",
      "S2_067": "Numero esplicito di bersagli; uno schieramento e un ritiro.",
      "S2_070": "un combattimento; bonus a {allies} alleati una volta al ritiro. Gli effetti senza ripetizione esplicita si applicano una sola volta.",
      "S2_071": "3 colpi per ciascuno dei un combattimento. Gli effetti senza ripetizione esplicita si applicano una sola volta.",
      "S2_072": "{enemies} avversari e {allies} alleati: il danno amico compensa quello nemico.",
      "S2_080": "{enemies} avversari e {allies} alleati: il danno amico compensa quello nemico.",
      "S2_074": "{enemies} avversari vicini per ciascuno dei un combattimento. Gli effetti senza ripetizione esplicita si applicano una sola volta.",
      "S2_077": "Copia di una carta alleata, senza nuova forza aggiunta al totale del mazzo.",
      "S2_086": "Danno ai due alleati sottratto; richiamo dal mazzo non duplicato e sacrifici non simulati.",
      "S2_089": "Burn considerato danno complessivo pari al suo numero.",
      "S2_091": "Bonus una volta. Aumento base al ritiro vale nella vita successiva e non viene aggiunto.",
      "S2_097": "Due eventi distinti, entrambi su {enemies} avversari; Burn vale danno totale.",
      "S3_027": "Nuovo Tonton e bonus a Tsunade; presenza di Tsunade e sopravvivenza non simulate.",
      "S3_028": "Nuovo Kuromaru più bonus al prossimo Ninja Hound.",
      "S3_036": "{allies} alleati subiscono 1 danno, la carta guadagna 2 per ciascuno.",
      "S3_041": "Due nemici.",
      "S3_043": "Bonus al prossimo Sasuke e un recupero successivo.",
      "S3_051": "Bonus iniziale e recupero una volta.",
      "S3_060": "Gli alleati impostati si presumono sulle altre corsie e tutti colpiti una prima volta: un bonus e una Cura per alleato.",
      "S3_062": "Un recupero iniziale e il primo recupero reattivo.",
      "S3_073": "Bonus iniziale e danno in un combattimento. Gli effetti senza ripetizione esplicita si applicano una sola volta.",
      "S3_085": "{enemies} avversari; Burn preesistente non conteggiato senza valore noto.",
      "S3_091": "Primo bersaglio, bonus e danno a 5 altri nemici e {allies} alleati. “Altre carte” ambiguo.",
      "S3_092": "Primo bersaglio colpito separatamente; il danno alle altre carte esclude quel bersaglio e comprende tutti gli alleati impostati.",
      "S3_039": "Conversione favorevole dello Scatto iniziale residuo: 2/3 Chakra al livello 1/2, massimo 3; nessun potenziamento esterno simulato."
    },
    "calculation": {
      "effectC": "aumento Chakra",
      "effectW": "Indebolimento",
      "effectH": "Cura",
      "effectB": "Bruciatura per bersaglio",
      "effectK": "Chakra evocato",
      "amount": "{value} {effect}",
      "burnTotal": "{value} Bruciatura per bersaglio, durata complessiva limitata dal Chakra avversario",
      "copy": "{value} Chakra della copia",
      "restore": "{value} Cura da 1 Chakra fino al valore base",
      "rush": "{value} Chakra da Scatto residuo (massimo 3)",
      "enemies": {
        "one": "{value} avversario",
        "other": "{value} avversari"
      },
      "otherEnemies": "{value} altri avversari, escluso il primo bersaglio",
      "allies": {
        "one": "{value} alleato",
        "other": "{value} alleati"
      },
      "first": "{value} prima attivazione",
      "remaining": {
        "one": "{value} attivazione successiva",
        "other": "{value} attivazioni successive"
      },
      "activations": {
        "one": "{value} attivazione",
        "other": "{value} attivazioni"
      },
      "enemyChakra": "{value} Chakra avversario",
      "targets": {
        "one": "{value} bersaglio",
        "other": "{value} bersagli"
      },
      "drain": "{value} Chakra rimosso senza scendere sotto 1",
      "removable": "{value} Chakra rimovibile",
      "bestBranch": "ramo migliore: {label}",
      "unquantified": "Contributo numerico non ancora quantificato.",
      "repeated": "Effetto applicato in {activations} attivazioni.",
      "once": "Effetto di combattimento conteggiato una sola volta; si ripetono solo gli effetti che indicano ogni combattimento.",
      "favourable": "Si presume una condizione favorevole. Le sinergie con altre carte non vengono simulate.",
      "tactical": "Effetto tattico senza aumento numerico di Chakra, danno o Cura.",
      "halving": "Il dimezzamento usa il Chakra avversario impostato nelle opzioni; arrotondamento esatto di gioco da confermare.",
      "burnNote": "Bruciatura: bersagli coinvolti × min(durata in secondi, Chakra avversario). La diffusione è limitata agli avversari bersagliati; più applicazioni non duplicano gli stessi punti Chakra.",
      "allCards": "Effetto su tutte le carte: {enemies} avversari e {allies} alleati. Il danno amichevole, limitato dal Chakra alleato per applicazione, riduce la Potenza.",
      "ebisu": "Bonus e penalità per il numero di alleati impostato; non viene simulata la sopravvivenza della carta."
    },
    "errors": {
      "invalidJson": "Il file non contiene un mazzo JSON valido.",
      "invalidDeck": "File mazzo non valido.",
      "invalidCards": "Controlla carte, duplicati e livelli nel file.",
      "invalidOptions": "Opzioni di calcolo non valide.",
      "invalidValues": "Valori delle ipotesi non validi.",
      "invalidOverrides": "Personalizzazioni non valide.",
      "missingCard": "Ipotesi riferite a una carta assente.",
      "fileTooLarge": "File troppo grande.",
      "importFailed": "Impossibile importare il mazzo.",
      "invalidRule": "Regola non valida: {id} livello {level}, {factor}",
      "invalidFactor": "Fattore non valido: {factor}"
    },
    "normalizations": [
      [
        "Recupero",
        "Cura"
      ],
      [
        "recupero",
        "cura"
      ],
      [
        "Recuperi",
        "Cure"
      ],
      [
        "recuperi",
        "cure"
      ]
    ]
  }
};
