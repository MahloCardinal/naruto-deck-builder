'use strict';

// Add a complete language catalog here, the language selector is populated automatically.
const TRANSLATIONS = {
  "en": {
    "name": "English",
    "locale": "en-GB",
    "ui": {
      "synergies": "Synergies",
      "synergyPartners": "Cards that synergize with {name}",
      "synergySources": "Cards with identical partners",
      "loadMore": "Show more",
      "backToTop": "Back to top",
      "details": "Details",
      "collapseSidebar": "Collapse sidebar",
      "expandSidebar": "Expand sidebar",
      "sortBy": "Sort by:",
      "toolbarModes": "Toolbar modes",
      "collapseToolbar": "Collapse toolbar",
      "expandToolbar": "Expand toolbar",
      "pageTitle": "Naruto · Cards and decks",
      "brand": "Naruto · Deck builder",
      "heading": "Cards and decks",
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
      "defaultDeckName": "Deck 1",
      "deckNameLabel": "Deck name:",
      "deckNamePlaceholder": "Deck name",
      "deckSlots": "The ten deck slots",
      "deckCardsLevels": "Deck cards and levels",
      "averageCost": "Average cost",
      "averagePower": "Average power",
      "averageQuality": "Average quality",
      "viewDeck": "Deck details",
      "import": "Import",
      "export": "Export",
      "clearDeck": "Clear",
      "closeDeck": "Close deck",
      "closeCard": "Close card details",
      "closeInfo": "Close calculation information",
      "distribution": "Cost distribution",
      "curveCaption": "Number of cards per Cost",
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
      "openCard": "Open {name} · {reference}",
      "removeNamedCard": "Remove {name}",
      "emptySlot": "Slot {slot} empty",
      "cardLevelTitle": "{name} · {reference} · level {level}",
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
      "info6": "The level selector in the filter panel changes the entire list, except cards already in the deck.",
      "deckBuilding": "Deck in progress",
      "deckInfo": "Deck information",
      "closeDeckInfo": "Close deck information",
      "deckPowerDescription": "Average power is the mean of the Power values of the cards in the deck.",
      "deckQualityDescription": "Average quality is the mean of the Quality values of the individual cards in the deck.",
      "exportInfo": "Exports include the levels and calculation assumptions specific to each card."
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
          "On deploy, Weaken(2) a random lane rival in Long Range.",
          "On deploy, Weaken(3) a random lane rival in Long Range."
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
          "On encounter, Chakra(+2) to a lane ally in Short Range.",
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
          "Deploys directly to Mid Range. Slows(4s) the rival with the highest Chakra on this card's lane and makes that rival Switch lanes.",
          "Deploys directly to Mid Range. Slows(6s) the rival with the highest Chakra on this card's lane and makes that rival Switch lanes."
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
          "On deploy, Weaken(1) a random lane rival in Short Range.",
          "On deploy, Weaken(2) a random lane rival in Short Range."
        ]
      },
      "S1_016": {
        "name": "EBISU",
        "ability": "Quick Lesson",
        "descriptions": [
          "On deploy, Chakra(+2) to closest lane ally.",
          "On deploy, Chakra(+3) to closest lane ally."
        ]
      },
      "S1_017": {
        "name": "TAZUNA",
        "ability": "Bridge Builder",
        "descriptions": [
          "On deploy, pull 2 lane allies in Mid Range back to this card.",
          "On deploy, pull 3 lane allies in Mid Range back to this card."
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
          "Chakra(+1) to lane allies when withdrawing.",
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
          "On deploy, Pin(10s) self and closest lane rival card.",
          "On deploy, Pin(12s) self and closest lane rival card."
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
          "On deploy, Push(2) closest lane rival card in Short Range.",
          "On deploy, Push(3) closest lane rival card in Short Range."
        ]
      },
      "S1_032": {
        "name": "HINATA HYUGA",
        "ability": "Gentle Fist",
        "descriptions": [
          "On the first encounter, Push(1) only the encountered rival, if it has 3 or less Chakra.",
          "On the first encounter, Push(2) only the encountered rival, if it has 3 or less Chakra."
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
          "Ignore all rival skills and encounters until reaching Mid Range. Allies gain Rush(+3s) when deployed on this lane while this card is active."
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
          "On deploy, Pin(4s) one lane rival card in Mid Range.",
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
          "Deploys directly to Mid Range and grants Chakra(+1) to the closest lane ally.",
          "Deploys directly to Mid Range and grants Chakra(+2) to the closest lane ally."
        ]
      },
      "S1_053": {
        "name": "ZABUZA MOMOCHI",
        "ability": "Hidden in the Mist",
        "descriptions": [
          "On deploy, Pin(6s) and Weaken(1) all rivals on this card's lane in Short Range.",
          "On deploy, Pin(6s) and Weaken(2) all rivals on this card's lane in Short Range."
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
          "On deploy, 50% chance to Pin(6s) one lane rival card in Mid Range.",
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
          "On deploy, Pin(4s) one lane rival card in Mid Range.",
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
          "On deploy, Weaken(1) and Slow(6s) the closest lane rival card in Long Range.",
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
          "Whenever allies withdraw, Chakra(+1) and Rush(1s).",
          "Whenever allies withdraw, Chakra(+2) and Rush(1s)."
        ]
      },
      "S1_079": {
        "name": "NARUTO UZUMAKI",
        "ability": "Furious Punch",
        "descriptions": [
          "Deploys directly to Mid Range. Weakens(2) and Pushes(1) all lane rivals.",
          "Deploys directly to Mid Range. Weakens(2) and Pushes(3) all lane rivals."
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
          "On each encounter, Weaken(2) rival cards with 4 or less Chakra and make them Switch lanes. Permanent Rush.",
          "On each encounter, Weaken(3) rival cards with 4 or less Chakra and make them Switch lanes. Permanent Rush."
        ]
      },
      "S1_085": {
        "name": "KYUBI",
        "ability": "Natural Disaster",
        "descriptions": [
          "Deploys directly to Mid Range. Pushes(1) and Weakens(3) all cards. While active, Weakens(1) newly deployed cards. Permanently Slowed.",
          "Deploys directly to Mid Range. Pushes(1) and Weakens(4) all cards. While active, Weakens(1) newly deployed cards. Permanently Slowed."
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
          "On deploy, Pin(1s) and gain Chakra(+2) for each lane rival with higher Chakra.",
          "On deploy, Pin(2s) and gain Chakra(+2) for each lane rival with higher Chakra."
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
          "Deploys directly to Mid Range. Gains Chakra(+3) if there is a rival card in Mid Range.",
          "Deploys directly to Mid Range. Gains Chakra(+4) if there is a rival card in Mid Range."
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
          "While this card is active, allied Hyuga cards gain Chakra(+2) and Push(1).",
          "While this card is active, allied Hyuga cards gain Chakra(+3) and Push(1)."
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
          "Deploys directly to Mid Range and makes any two other cards present in Mid Range Switch lanes.",
          "Deploys directly to Mid Range and makes any 3 other cards present in Mid Range Switch lanes."
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
          "Guard(2). When Guard activates, restart Rush(2s). When Rush ends, lane Switch.",
          "Guard(3). When Guard activates, restart Rush(2s). When Rush ends, lane Switch."
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
          "Deploys directly to Mid Range. The closest lane ally gains Chakra(+2) and is Pinned(2s).",
          "Deploys directly to Mid Range. The closest lane ally gains Chakra(+2) and is Pinned(6s)."
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
          "On each encounter Push(1) and Weaken(1). When this card causes a rival to withdraw, it also permanently reduces that rival's base Chakra by 2.",
          "On each encounter Push(1) and Weaken(2). When this card causes a rival to withdraw, it also permanently reduces that rival's base Chakra by 2."
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
          "On deploy, Push(2) and Pin(8s) lane rival with highest Chakra. While that rival is affected by this Pin, Weaken(1) the rival card every 4s.",
          "On deploy, Push(4) and Pin(8s) lane rival with highest Chakra. While that rival is affected by this Pin, Weaken(1) the rival card every 4s."
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
          "The next lane ally deployed gains Rush(4s). When Kyuroku withdraws, that ally Switches lanes and all lane allies are Slowed(3s).",
          "The next lane ally deployed gains Rush(5s). When Kyuroku withdraws, that ally Switches lanes and all lane allies are Slowed(3s)."
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
    "normalizations": [],
    "flag": "gb"
  },
  "it": {
    "name": "Italiano",
    "locale": "it-IT",
    "ui": {
      "synergies": "Sinergie",
      "synergyPartners": "Carte in sinergia con {name}",
      "synergySources": "Carte con gli stessi abbinamenti",
      "loadMore": "Mostra altre",
      "backToTop": "Torna su",
      "details": "Dettagli",
      "collapseSidebar": "Riduci barra laterale",
      "expandSidebar": "Espandi barra laterale",
      "sortBy": "Ordina per:",
      "toolbarModes": "Modalità della barra",
      "collapseToolbar": "Chiudi barra",
      "expandToolbar": "Apri barra",
      "pageTitle": "Naruto · Carte e mazzi",
      "brand": "Naruto · Creazione deck",
      "heading": "Carte e mazzi",
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
      "defaultDeckName": "Mazzo 1",
      "deckNameLabel": "Nome del mazzo:",
      "deckNamePlaceholder": "Nome del mazzo",
      "deckSlots": "Le dieci carte del mazzo",
      "deckCardsLevels": "Carte del mazzo e livelli",
      "averageCost": "Costo medio",
      "averagePower": "Potenza media",
      "averageQuality": "Qualità media",
      "viewDeck": "Dettagli mazzo",
      "import": "Importa",
      "export": "Esporta",
      "clearDeck": "Svuota",
      "closeDeck": "Chiudi mazzo",
      "closeCard": "Chiudi dettaglio",
      "closeInfo": "Chiudi informazioni sul calcolo",
      "distribution": "Distribuzione dei costi",
      "curveCaption": "Numero di carte per Costo",
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
      "openCard": "Apri {name} · {reference}",
      "removeNamedCard": "Rimuovi {name}",
      "emptySlot": "Posto {slot} vuoto",
      "cardLevelTitle": "{name} · {reference} · livello {level}",
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
      "info6": "Il selettore del livello del pannello dei filtri modifica l'intera lista, tranne le carte già inserite nel mazzo.",
      "deckBuilding": "Mazzo in costruzione",
      "deckInfo": "Info mazzo",
      "closeDeckInfo": "Chiudi informazioni del mazzo",
      "deckPowerDescription": "La potenza media è la media delle potenze delle carte del mazzo.",
      "deckQualityDescription": "La qualità media è la media delle qualità delle singole carte del mazzo.",
      "exportInfo": "L'export include livelli e ipotesi di calcolo specifici di ogni carta."
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
          "Ottiene Chakra(+1) dopo uno scontro vinto.",
          "Ottiene Chakra(+2) dopo uno scontro vinto."
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
          "Viene schierata nel medio raggio, Rallenta(4s) e Cambia corsia all'avversario con più Chakra della propria corsia.",
          "Viene schierata nel medio raggio, Rallenta(6s) e Cambia corsia all'avversario con più Chakra della propria corsia."
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
          "Al primo scontro, Respinge(1) solo l'avversario incontrato, se ha Chakra inferiore o uguale a 3.",
          "Al primo scontro, Respinge(2) solo l'avversario incontrato, se ha Chakra inferiore o uguale a 3."
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
          "Ignora tutte le abilità e gli scontri avversari fino a raggiungere il medio raggio. Gli alleati ottengono Scatta(+2s) quando vengono schierati su questa corsia mentre questa carta è attiva.",
          "Ignora tutte le abilità e gli scontri avversari fino a raggiungere il medio raggio. Gli alleati ottengono Scatta(+3s) quando vengono schierati su questa corsia mentre questa carta è attiva."
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
          "Quando gli alleati ottengono Scatto, applica loro Chakra(+1) e Scatto(+1s).",
          "Quando gli alleati ottengono Scatto, applica loro Chakra(+1) e Scatto(+2s)."
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
          "Viene schierata nel medio raggio e fornisce Chakra(+1) all'alleato di corsia più vicino.",
          "Viene schierata nel medio raggio e fornisce Chakra(+2) all'alleato di corsia più vicino."
        ]
      },
      "S1_053": {
        "name": "ZABUZA MOMOCHI",
        "ability": "Velo di Nebbia",
        "descriptions": [
          "Quando viene giocata, Blocca(6s) e Indebolisce(1) tutti gli avversari della propria corsia nel corto raggio.",
          "Quando viene giocata, Blocca(6s) e Indebolisce(2) tutti gli avversari della propria corsia nel corto raggio."
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
          "Dopo 10 secondi, fornisce Chakra(+1) a tutti gli alleati.",
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
          "In caso di scontro, Blocca(2s) e Indebolisce(1) gli avversari vicini della propria corsia, poi Cambia corsia. Questa abilità si riattiva ogni volta che viene ottenuto del Chakra.",
          "In caso di scontro, Blocca(4s) e Indebolisce(1) gli avversari vicini della propria corsia, poi Cambia corsia. Questa abilità si riattiva ogni volta che viene ottenuto del Chakra."
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
          "Viene schierata nel medio raggio, Indebolisce(2) e Respinge(1) tutti gli avversari di corsia.",
          "Viene schierata nel medio raggio, Indebolisce(2) e Respinge(3) tutti gli avversari di corsia."
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
          "Quando viene giocata, Indebolisce(1) tutte le carte. Se hanno 3 o meno Chakra, invece Indebolisce(3).",
          "Quando viene giocata, Indebolisce(1) tutte le carte. Se hanno 4 o meno Chakra, invece Indebolisce(4)."
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
          "Quando viene giocata, ha il 50% di possibilità di ottenere Chakra(+3).",
          "Quando viene giocata, ha il 50% di possibilità di ottenere Chakra(+4)."
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
          "Salta sulla prima carta avversaria che si avvicina e la Indebolisce(2).",
          "Salta sulla prima carta avversaria che si avvicina e la Indebolisce(3)."
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
          "Viene schierata nel medio raggio, ottiene Chakra(+3) se c'è una carta avversaria nel medio raggio.",
          "Viene schierata nel medio raggio, ottiene Chakra(+4) se c'è una carta avversaria nel medio raggio."
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
          "Difesa(2). Quando Difesa si attiva, riavvia Scatto(2s). Quando lo Scatto termina, Cambia corsia.",
          "Difesa(3). Quando Difesa si attiva, riavvia Scatto(2s). Quando lo Scatto termina, Cambia corsia."
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
          "Viene schierata nel medio raggio. L'alleato di corsia più vicino ottiene Chakra(+2) e viene Bloccato(2s).",
          "Viene schierata nel medio raggio. L'alleato di corsia più vicino ottiene Chakra(+2) e viene Bloccato(6s)."
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
          "Ad ogni scontro, Respinge(1) e Indebolisce(1). Quando questa carta fa ritirare un rivale, riduce anche permanentemente il Chakra base di quel rivale di 2.",
          "Ad ogni scontro, Respinge(1) e Indebolisce(2). Quando questa carta fa ritirare un rivale, riduce anche permanentemente il Chakra base di quel rivale di 2."
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
          "In caso di scontro, si Teletrasporta dietro la carta avversaria, la Indebolisce(2) e la Blocca(5s).",
          "In caso di scontro, si Teletrasporta dietro la carta avversaria, la Indebolisce(2) e la Blocca(8s)."
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
          "Quando viene giocata, Respinge(2) e Blocca(8s) l'avversario di corsia con più Chakra. Finché quell'avversario resta Bloccato da questo effetto, Indebolisce(1) la carta avversaria ogni 4s.",
          "Quando viene giocata, Respinge(4) e Blocca(8s) l'avversario di corsia con più Chakra. Finché quell'avversario resta Bloccato da questo effetto, Indebolisce(1) la carta avversaria ogni 4s."
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
          "Il prossimo alleato di corsia schierato ottiene Scatto(4s). Quando Kyuroku si ritira, quell'alleato Cambia corsia e tutti gli alleati di corsia vengono Rallentati(3s).",
          "Il prossimo alleato di corsia schierato ottiene Scatto(5s). Quando Kyuroku si ritira, quell'alleato Cambia corsia e tutti gli alleati di corsia vengono Rallentati(3s)."
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
          "Scatta(2s). In caso di scontro, si Teletrasporta dietro la carta avversaria e la Blocca in modo permanente.",
          "Scatta(3s). In caso di scontro, si Teletrasporta dietro la carta avversaria e la Blocca in modo permanente."
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
          "In caso di scontro, si Teletrasporta dietro la carta avversaria poi Blocca(6s) lei e questa carta. L'avversario perde 1 Chakra ogni 2 secondi finché subisce questo Blocca.",
          "In caso di scontro, si Teletrasporta dietro la carta avversaria poi Blocca(8s) lei e questa carta. L'avversario perde 1 Chakra ogni 2 secondi finché subisce questo Blocca."
        ]
      },
      "S3_068": {
        "name": "Kurenai Yuhi",
        "ability": "Finta illusoria",
        "descriptions": [
          "In caso di scontro, si Teletrasporta dietro la carta avversaria, la Indebolisce(2) e la Rallenta(4s).",
          "In caso di scontro, si Teletrasporta dietro la carta avversaria, la Indebolisce(2) e la Rallenta(8s)."
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
          "Quando viene giocata, Si Concentra(6s). Ogni 2 secondi durante la Concentrazione, Indebolisce(1) e Respinge(1) tutte le carte avversarie. Se hanno 2 o meno Chakra, invece Indebolisce(2). Quando questa carta ne fa ritirare un'altra, la Sigilla(5s).",
          "Quando viene giocata, Si Concentra(8s). Ogni 2 secondi durante la Concentrazione, Indebolisce(1) e Respinge(1) tutte le carte avversarie. Se hanno 3 o meno Chakra, invece Indebolisce(3). Quando questa carta ne fa ritirare un'altra, la Sigilla(5s)."
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
    ],
    "flag": "it"
  },
  "fr": {
    "name": "Français",
    "locale": "fr-FR",
    "ui": {
      "synergies": "Synergies",
      "synergyPartners": "Cartes en synergie avec {name}",
      "synergySources": "Cartes avec les mêmes associations",
      "loadMore": "Afficher plus",
      "backToTop": "Retour en haut",
      "details": "Détails",
      "collapseSidebar": "Réduire la barre latérale",
      "expandSidebar": "Déployer la barre latérale",
      "sortBy": "Trier par :",
      "toolbarModes": "Modes de la barre",
      "collapseToolbar": "Replier la barre",
      "expandToolbar": "Déplier la barre",
      "pageTitle": "Naruto · Cartes et decks",
      "brand": "Naruto · Créateur de decks",
      "heading": "Cartes et decks",
      "database": "Base de cartes",
      "builder": "Créer un deck",
      "sections": "Sections",
      "language": "Langue",
      "filters": "Filtrer les cartes",
      "searchFilters": "Recherche et filtres",
      "textOrIndex": "Texte ou numéro",
      "searchPlaceholder": "Rechercher",
      "rarity": "Rareté",
      "season": "Série",
      "skillType": "Type de compétence",
      "cost": "Coût",
      "chakra": "Chakra",
      "minPower": "Puissance min.",
      "minimum": "min",
      "cardLevel": "Niveau de carte",
      "sort": "Trier",
      "sortCards": "Trier les cartes",
      "index": "Numéro",
      "alphabetical": "Nom",
      "quality": "Qualité",
      "power": "Puissance",
      "resetFilters": "Effacer les filtres",
      "allFeminine": "Toutes",
      "all": "Tous",
      "none": "Sans type",
      "common": "Commune",
      "rare": "Rare",
      "epic": "Épique",
      "legendary": "Légendaire",
      "first": "Première",
      "second": "Deuxième",
      "third": "Troisième",
      "ascending": "Croissant",
      "descending": "Décroissant",
      "ascendingAction": "Ordre croissant. Passer à décroissant",
      "descendingAction": "Ordre décroissant. Passer à croissant",
      "selectedCount": "{count} sélectionnés",
      "cardCount": "{count} cartes",
      "noResults": "Aucune carte ne correspond aux filtres.",
      "assumptions": "Hypothèses de calcul",
      "enemyChakra": "Chakra adverse",
      "enemies": "Cibles adverses",
      "allyChakra": "Chakra allié",
      "allies": "Cibles alliées",
      "activations": "Activations de la carte",
      "applyStandard": "Appliquer les valeurs",
      "calculationInfo": "Infos de calcul",
      "standardApplied": "Valeurs appliquées à toutes les cartes de cette session.",
      "standardPending": "Modifications en attente : les cartes utilisent encore les valeurs précédentes.",
      "defaultDeckName": "Deck 1",
      "deckNameLabel": "Nom du deck :",
      "deckNamePlaceholder": "Nom du deck",
      "deckSlots": "Les dix emplacements du deck",
      "deckCardsLevels": "Cartes et niveaux du deck",
      "averageCost": "Coût moyen",
      "averagePower": "Puissance moyenne",
      "averageQuality": "Qualité moyenne",
      "viewDeck": "Détails",
      "import": "Importer",
      "export": "Exporter",
      "clearDeck": "Vider",
      "closeDeck": "Fermer le deck",
      "closeCard": "Fermer les détails de la carte",
      "closeInfo": "Fermer les informations de calcul",
      "distribution": "Répartition des coûts",
      "curveCaption": "Nombre de cartes par Coût",
      "databaseEffects": "Base des effets des cartes",
      "builderCards": "Cartes pour le deck",
      "confirm": "Confirmer",
      "cancel": "Annuler",
      "replaceDeck": "Remplacer le deck actuel par le deck importé ?",
      "confirmClear": "Retirer toutes les cartes du deck ?",
      "deckImported": "Deck importé.",
      "sessionUnavailable": "La sauvegarde automatique de session est indisponible. Exportez votre deck pour le conserver.",
      "sessionInvalid": "La session enregistrée n'a pas pu être restaurée. Vous pouvez importer un deck exporté.",
      "addToDeck": "Ajouter au deck",
      "removeFromDeck": "Retirer du deck",
      "addCard": "Ajouter {name} au deck",
      "removeCard": "Retirer {name} du deck",
      "openCard": "Ouvrir {name} · {reference}",
      "removeNamedCard": "Retirer {name}",
      "emptySlot": "Emplacement {slot} vide",
      "cardLevelTitle": "{name} · {reference} · niveau {level}",
      "levelShort": "Niv.{level}",
      "changeLevel": "Changer de niveau",
      "changeLevelTitle": "Cliquer pour passer au niveau {level}",
      "changeLevelAction": "Niveau {level}. Passer au niveau {next}",
      "powerQuality": "Puissance et qualité",
      "localAssumptions": "Hypothèses pour cette carte",
      "useStandard": "Valeurs par défaut",
      "localChanges": "Modifications immédiates, uniquement pour cette carte.",
      "powerComposition": "Détail de la puissance",
      "contributions": "Contributions au calcul",
      "noContributions": "Aucune contribution numérique supplémentaire.",
      "baseChakra": "Chakra de base",
      "summonedChakra": "Chakra invoqué",
      "chakraBoosts": "Bonus de Chakra",
      "friendlyDamage": "Dégâts à soi-même / aux alliés",
      "enemyDamage": "Dégâts aux adversaires",
      "burn": "Brûlure",
      "heal": "Soin",
      "curveBar": "Coût {cost} : {count} cartes",
      "energyCost": "Coût en énergie",
      "costValue": "Coût {value}",
      "chakraValue": "Chakra de base {value}",
      "info1": "Puissance = Chakra de base + Invocations + bonus − dégâts à soi-même et aux alliés + dégâts aux adversaires + Brûlure + Soins.",
      "info2": "Qualité = Puissance / coût de la carte.",
      "info3": "Brûlure = cibles adverses × durée en secondes (ou Chakra adverse s'il est inférieur à la durée).",
      "info4": "Les effets sont comptés selon le nombre d'activations indiqué sur la carte ou dans les hypothèses de calcul.",
      "info5": "Le déplacement, la Parade et les autres modificateurs ne sont pas inclus dans la Puissance.",
      "info6": "Le sélecteur de niveau des filtres modifie toute la liste, sauf les cartes déjà dans le deck.",
      "deckBuilding": "Deck en construction",
      "deckInfo": "Infos du deck",
      "closeDeckInfo": "Fermer les informations du deck",
      "deckPowerDescription": "La puissance moyenne est la moyenne des puissances des cartes du deck.",
      "deckQualityDescription": "La qualité moyenne est la moyenne des qualités de chaque carte du deck.",
      "exportInfo": "L'export inclut les niveaux et les hypothèses de calcul propres à chaque carte."
    },
    "effects": {
      "Cost": "Coût",
      "Chakra": "Chakra",
      "Weaken": "Affaiblissement",
      "Push": "Repousse",
      "Pin": "Immobilisation",
      "Rush": "Accélération",
      "Slow": "Ralentissement",
      "Guard": "Parade",
      "Seal": "Scellement",
      "Switch": "Transfert",
      "Summon": "Invocation",
      "Teleport": "Téléportation",
      "Burn": "Brûlure",
      "Focus": "Concentration",
      "Heal": "Soin"
    },
    "terms": {
      "Cost": "coûts?",
      "Chakra": "chakra",
      "Weaken": "affaibli[\\p{L}]*",
      "Push": "repouss[\\p{L}]*",
      "Pin": "immobilis[\\p{L}]*",
      "Rush": "acc[eéè]l[eéè]r[\\p{L}]*",
      "Slow": "ralenti[\\p{L}]*",
      "Guard": "parad[\\p{L}]*|pare",
      "Seal": "scell[\\p{L}]*",
      "Switch": "transf[èé]r[\\p{L}]*|change[\\p{L}]*",
      "Summon": "invo[qc][\\p{L}]*",
      "Teleport": "téléport[\\p{L}]*",
      "Burn": "brûl[\\p{L}]*",
      "Focus": "concentr[\\p{L}]*",
      "Heal": "soin[\\p{L}]*|soign[\\p{L}]*"
    },
    "cards": {
      "S1_001": {
        "name": "NARUTO UZUMAKI",
        "ability": "Potentiel",
        "descriptions": [
          "La première fois que cette carte gagne du chakra, gagne Chakra(+1) supplémentaire.",
          "La première fois que cette carte gagne du chakra, gagne Chakra(+2) supplémentaire."
        ]
      },
      "S1_002": {
        "name": "NARUTO UZUMAKI",
        "ability": "Apprentissage",
        "descriptions": [
          "Chakra(+2) après 6 secondes.",
          "Chakra(+3) après 6 secondes."
        ]
      },
      "S1_003": {
        "name": "NARUTO UZUMAKI",
        "ability": "Multiclonage",
        "descriptions": [
          "Crée 1 clone sur une autre voie avec Chakra(1).",
          "Invoque 1 clone sur une autre voie avec Chakra(2)."
        ]
      },
      "S1_004": {
        "name": "NARUTO UZUMAKI",
        "ability": "Serment",
        "descriptions": [
          "Chakra(+1) après une confrontation réussie.",
          "Chakra(+2) après une confrontation réussie."
        ]
      },
      "S1_005": {
        "name": "SASUKE UCHIHA",
        "ability": "Maîtrise des kunais",
        "descriptions": [
          "À la confrontation, Affaiblit(2) la carte rivale.",
          "À la confrontation, Affaiblit(3) la carte rivale."
        ]
      },
      "S1_006": {
        "name": "SAKURA HARUNO",
        "ability": "Lancer de kunai",
        "descriptions": [
          "Au déploiement, Affaiblit(2) un rival aléatoire à Longue Distance. Les cibles appartiennent à cette voie.",
          "Au déploiement, Affaiblit(3) un rival aléatoire à Longue Distance. Les cibles appartiennent à cette voie."
        ]
      },
      "S1_007": {
        "name": "SAKURA HARUNO",
        "ability": "Équilibre du Chakra",
        "descriptions": [
          "Quand les alliés de sa voie réussissent une confrontation, Chakra(+1) pour eux et Immobilisation(3s) pour cette carte.",
          "Quand les alliés de sa voie réussissent une confrontation, Chakra(+1) pour eux et Immobilisation(5s) pour cette carte."
        ]
      },
      "S1_008": {
        "name": "SAKURA HARUNO",
        "ability": "Coup de pied retourné",
        "descriptions": [
          "À la confrontation, Repousse(1) et Affaiblit(1) la carte rivale.",
          "À la confrontation, Repousse(2) et Affaiblit(1) la carte rivale."
        ]
      },
      "S1_009": {
        "name": "KAKASHI HATAKE",
        "ability": "Ruée",
        "descriptions": [
          "Accélère(5s)",
          "Accélère(6s)"
        ]
      },
      "S1_010": {
        "name": "KAKASHI HATAKE",
        "ability": "Chef d'Équipe",
        "descriptions": [
          "À la confrontation, Chakra(+2) à un allié à Courte Distance. Les cibles appartiennent à cette voie.",
          "À la confrontation, Chakra(+3) à un allié de sa voie à Courte Distance."
        ]
      },
      "S1_011": {
        "name": "IRUKA UMINO",
        "ability": "Maître",
        "descriptions": [
          "Chakra(+2) au prochain allié déployé.",
          "Chakra(+3) au prochain allié déployé."
        ]
      },
      "S1_012": {
        "name": "ZABUZA MOMOCHI",
        "ability": "Entrée Menaçante",
        "descriptions": [
          "Se déploie à Mi-distance, Ralentit(4s) et Transfère l'adversaire de sa voie ayant le plus de Chakra.",
          "Se déploie à Mi-distance, Ralentit(6s) et Transfère l'adversaire de sa voie ayant le plus de Chakra."
        ]
      },
      "S1_013": {
        "name": "ZABUZA MOMOCHI",
        "ability": "Agression",
        "descriptions": [
          "Au déploiement, Affaiblit(3) le rival le plus proche sur sa voie.",
          "Au déploiement, Affaiblit(4) le rival le plus proche sur sa voie."
        ]
      },
      "S1_014": {
        "name": "HAKU",
        "ability": "Aiguilles",
        "descriptions": [
          "Au déploiement, Immobilise(6s) le rival le plus proche sur sa voie.",
          "Au déploiement, Immobilise(7s) le rival le plus proche sur sa voie."
        ]
      },
      "S1_015": {
        "name": "KONOHAMARU SARUTOBI",
        "ability": "Lancer de Shuriken",
        "descriptions": [
          "Au déploiement, Affaiblit(1) un rival aléatoire à courte distance. Les cibles appartiennent à cette voie.",
          "Au déploiement, Affaiblit(2) un rival aléatoire à courte distance. Les cibles appartiennent à cette voie."
        ]
      },
      "S1_016": {
        "name": "EBISU",
        "ability": "Leçon Rapide",
        "descriptions": [
          "Au déploiement, Chakra(+2) à l'allié le plus proche. Les cibles appartiennent à cette voie.",
          "Au déploiement, Chakra(+3) à l'allié le plus proche. Les cibles appartiennent à cette voie."
        ]
      },
      "S1_017": {
        "name": "TAZUNA",
        "ability": "Constructeur de ponts",
        "descriptions": [
          "Au déploiement, ramène 2 alliés à mi-distance sur cette carte. Les cibles appartiennent à cette voie.",
          "Au déploiement, ramène 3 alliés à mi-distance sur cette carte. Les cibles appartiennent à cette voie."
        ]
      },
      "S1_018": {
        "name": "INARI",
        "ability": "Ruée",
        "descriptions": [
          "Accélère(2s)",
          "Accélère(3s)"
        ]
      },
      "S1_019": {
        "name": "KAIZA",
        "ability": "Martyr",
        "descriptions": [
          "Au retrait, donne Chakra(+1) aux alliés de sa voie uniquement.",
          "Au retrait, donne Chakra(+2) aux alliés de sa voie uniquement."
        ]
      },
      "S1_020": {
        "name": "MIZUKI TOJI",
        "ability": "Intention Cachée",
        "descriptions": [
          "Au déploiement, Affaiblit(2) un allié aléatoire de sa voie et Chakra(+3) à cette carte.",
          "Au déploiement, Affaiblit(2) un allié aléatoire de sa voie et Chakra(+4) à cette carte."
        ]
      },
      "S1_021": {
        "name": "MIZUKI TOJI",
        "ability": "Proie Facile",
        "descriptions": [
          "Quand elle se retire, Chakra(+1) pour 3 alliés aléatoires.",
          "Quand elle se retire, Chakra(+2) pour 3 alliés aléatoires."
        ]
      },
      "S1_022": {
        "name": "MADAME SHIJIMI",
        "ability": "Sauvetage de Chat",
        "descriptions": [
          "Au déploiement, Chakra(+1) et Ralentit(3s) trois alliés de sa voie à courte distance.",
          "Au déploiement, Chakra(+2) et Ralentit(3s) trois alliés de sa voie à courte distance."
        ]
      },
      "S1_023": {
        "name": "GOZU",
        "ability": "Embuscade",
        "descriptions": [
          "À la confrontation, Affaiblit(1) la carte rivale et se Téléporte derrière elle.",
          "À la confrontation, Affaiblit(2) la carte rivale et se Téléporte derrière elle."
        ]
      },
      "S1_024": {
        "name": "TSUNAMI",
        "ability": "Hospitalité",
        "descriptions": [
          "Au déploiement, Chakra(+1) pour 2 alliés de sa voie.",
          "Au déploiement, Chakra(+1) pour 3 alliés de sa voie."
        ]
      },
      "S1_025": {
        "name": "WARAJI",
        "ability": "Ruée",
        "descriptions": [
          "Accélère(3s)",
          "Accélère(4s)"
        ]
      },
      "S1_026": {
        "name": "ZORI",
        "ability": "Ruée",
        "descriptions": [
          "Accélère(3s)",
          "Accélère(4s)"
        ]
      },
      "S1_027": {
        "name": "INO YAMANAKA",
        "ability": "Charme",
        "descriptions": [
          "Au déploiement, Chakra(+1) à l'allié le plus proche à Courte Distance et le pousse à Moyenne Distance.",
          "Au déploiement, Chakra(+2) à l'allié le plus proche à Courte Distance et le Repousse à Mi-distance."
        ]
      },
      "S1_028": {
        "name": "SHIKAMARU NARA",
        "ability": "La Prise des Ombres",
        "descriptions": [
          "Au déploiement, Immobilise(10s) cette carte et la carte rivale la plus proche. Les cibles appartiennent à cette voie.",
          "Au déploiement, Immobilise(12s) cette carte et la carte rivale la plus proche. Les cibles appartiennent à cette voie."
        ]
      },
      "S1_029": {
        "name": "CHOJI AKIMICHI",
        "ability": "Force",
        "descriptions": [
          "À la confrontation, Repousse(1) la carte rivale.",
          "À la confrontation, Repousse(2) la carte rivale."
        ]
      },
      "S1_030": {
        "name": "ASUMA SARUTOBI",
        "ability": "Combat Rapproché",
        "descriptions": [
          "À la confrontation, Chakra(+3) si la carte rivale a un Chakra plus élevé.",
          "À la confrontation, Chakra(+4) si la carte rivale a un Chakra plus élevé."
        ]
      },
      "S1_031": {
        "name": "HINATA HYUGA",
        "ability": "Timide",
        "descriptions": [
          "Au déploiement, Repousse(2) la carte rivale la plus proche à Courte Distance. Les cibles appartiennent à cette voie.",
          "Au déploiement, Repousse(3) la carte rivale la plus proche à Courte Distance. Les cibles appartiennent à cette voie."
        ]
      },
      "S1_032": {
        "name": "HINATA HYUGA",
        "ability": "Poing Souple",
        "descriptions": [
          "Lors de la première confrontation, Repousse(1) uniquement l'adversaire rencontré s'il a 3 Chakra ou moins.",
          "Lors de la première confrontation, Repousse(2) uniquement l'adversaire rencontré s'il a 3 Chakra ou moins."
        ]
      },
      "S1_033": {
        "name": "KIBA INUZUKA",
        "ability": "Meilleur Ami",
        "descriptions": [
          "Invoque un Akamaru aléatoire de ton deck et lui donne Chakra(+1). S'il n'y a pas d'Akamaru, cette carte gagne Chakra(+1) à la place.",
          "Invoque un Akamaru aléatoire de ton deck et lui donne Chakra(+2). S'il n'y a pas d'Akamaru, cette carte gagne Chakra(+2) à la place."
        ]
      },
      "S1_034": {
        "name": "AKAMARU",
        "ability": "Ruée",
        "descriptions": [
          "Accélère(6s)",
          "Accélère(7s)"
        ]
      },
      "S1_035": {
        "name": "SHINO ABURAME",
        "ability": "Insectes de Chakra",
        "descriptions": [
          "À la confrontation, Chakra(+2) à cette carte et Affaiblit(1) la carte rivale.",
          "À la confrontation, Chakra(+2) à cette carte et Affaiblit(2) la carte rivale."
        ]
      },
      "S1_036": {
        "name": "KURENAI YUHI",
        "ability": "Feinte",
        "descriptions": [
          "À la confrontation, Repousse(2) et Immobilise(2s) la carte rivale.",
          "À la confrontation, Repousse(2) et Immobilise(4s) la carte rivale."
        ]
      },
      "S1_037": {
        "name": "PAKKUN",
        "ability": "Nez Fin",
        "descriptions": [
          "Ignore toutes les compétences et confrontations rivales jusqu'à atteindre la Moyenne Distance. Les alliés gagnent Accélère(+2s) en étant déployés sur cette voie tant que cette carte est active.",
          "Ignore toutes les compétences et confrontations rivales jusqu'à atteindre la Mi-distance. Les alliés gagnent Accélère(+3s) lorsqu'ils sont déployés sur cette voie tant que cette carte est active."
        ]
      },
      "S1_038": {
        "name": "AYAME",
        "ability": "Repas Copieux",
        "descriptions": [
          "Au déploiement, Chakra(+2) à 2 alliés de sa voie à Mi-distance.",
          "Au déploiement, Chakra(+2) à 3 alliés de sa voie à Mi-distance."
        ]
      },
      "S1_039": {
        "name": "MOEGI KAZAMATSURI",
        "ability": "Ruée",
        "descriptions": [
          "Accélère(2s)",
          "Accélère(3s)"
        ]
      },
      "S1_040": {
        "name": "UDON ISE",
        "ability": "Ruée",
        "descriptions": [
          "Accélère(2s)",
          "Accélère(3s)"
        ]
      },
      "S1_041": {
        "name": "NINJA TROOPS",
        "ability": "Avant-garde",
        "descriptions": [
          "Accélère(2s). Lorsqu'elle se retire, Chakra(+3) à l'allié déployé le plus récemment.",
          "Accélère(3s). Lorsqu'elle se retire, Chakra(+3) à l'allié déployé le plus récemment."
        ]
      },
      "S1_042": {
        "name": "NARUTO UZUMAKI",
        "ability": "Inoffensif",
        "descriptions": [
          "Lorsqu'elle se retire, Affaiblit(3) la carte rivale.",
          "Lorsqu'elle se retire, Affaiblit(4) la carte rivale."
        ]
      },
      "S1_043": {
        "name": "NARUTO UZUMAKI",
        "ability": "Farceur",
        "descriptions": [
          "Au déploiement, Ralentit(10s) toutes les cartes sur la voie.",
          "Au déploiement, Ralentit(12s) toutes les cartes sur la voie."
        ]
      },
      "S1_044": {
        "name": "NARUTO UZUMAKI",
        "ability": "Sexy Méta",
        "descriptions": [
          "Au déploiement, Immobilise(4s) une carte rivale à Mi-distance. Les cibles appartiennent à cette voie.",
          "Au déploiement, Immobilise(5s) une carte rivale de la voie à Mi-distance."
        ]
      },
      "S1_045": {
        "name": "NARUTO UZUMAKI",
        "ability": "Solitude",
        "descriptions": [
          "Au déploiement, Chakra(+3) et Ralentit(6s) s'il n'y a aucun allié sur sa voie.",
          "Au déploiement, Chakra(+4) et Ralentit(6s) s'il n'y a aucun allié sur sa voie."
        ]
      },
      "S1_046": {
        "name": "NARUTO UZUMAKI",
        "ability": "Diplomation",
        "descriptions": [
          "Gagne Chakra(+1) par allié de sa voie à Courte Distance.",
          "Gagne Chakra(+2) par allié de sa voie à Courte Distance."
        ]
      },
      "S1_047": {
        "name": "NARUTO UZUMAKI",
        "ability": "Métamorphose",
        "descriptions": [
          "Au déploiement, se déguise en une autre carte de votre deck qui coûte jusqu'à 3 Énergies. Revient à l'original lors d'une confrontation ou d'un affaiblissement.",
          "Au déploiement, se déguise en une autre carte de votre deck qui coûte jusqu'à 4 Énergies. Revient à l'original lors d'une confrontation ou d'un affaiblissement."
        ]
      },
      "S1_048": {
        "name": "NARUTO UZUMAKI",
        "ability": "Rusé",
        "descriptions": [
          "À la confrontation, Immobilise(4s) la carte rivale et se Téléporte derrière elle.",
          "À la confrontation, Immobilise(6s) la carte rivale et se Téléporte derrière elle."
        ]
      },
      "S1_049": {
        "name": "SASUKE UCHIHA",
        "ability": "Projection",
        "descriptions": [
          "Le prochain allié se déploie à Mi-distance. Immobilise(4s) et Transfère un adversaire aléatoire de sa voie à Mi-distance.",
          "Le prochain allié se déploie à Mi-distance. Immobilise(8s) et Transfère un adversaire aléatoire de sa voie à Mi-distance."
        ]
      },
      "S1_050": {
        "name": "HIRUZEN SARUTOBI",
        "ability": "Technique du Télescope",
        "descriptions": [
          "Quand des alliés gagnent Accélération, ils gagnent Chakra(+1) et Accélère(+1s).",
          "Quand des alliés gagnent Accélération, ils gagnent Chakra(+1) et Accélère(+2s)."
        ]
      },
      "S1_051": {
        "name": "IRUKA UMINO",
        "ability": "Ahuri",
        "descriptions": [
          "Transfert de voie aléatoire toutes les 8 secondes.",
          "Transfert de voie aléatoire toutes les 6 secondes."
        ]
      },
      "S1_052": {
        "name": "IRUKA UMINO",
        "ability": "Sacrifice",
        "descriptions": [
          "Est déployée directement à mi-distance et accorde Chakra(+1) à l'allié de sa voie le plus proche.",
          "Est déployée directement à mi-distance et accorde Chakra(+2) à l'allié de sa voie le plus proche."
        ]
      },
      "S1_053": {
        "name": "ZABUZA MOMOCHI",
        "ability": "Caché dans la Brume",
        "descriptions": [
          "Au déploiement, Immobilise(6s) et Affaiblit(1) tous les adversaires de sa voie à Courte Distance.",
          "Au déploiement, Immobilise(6s) et Affaiblit(2) tous les adversaires de sa voie à Courte Distance."
        ]
      },
      "S1_054": {
        "name": "ZABUZA MOMOCHI",
        "ability": "Brisé",
        "descriptions": [
          "Gagne Chakra(+3) la première fois qu'un allié de sa voie se retire.",
          "Gagne Chakra(+4) la première fois qu'un allié de sa voie se retire."
        ]
      },
      "S1_055": {
        "name": "KONOHAMARU SARUTOBI",
        "ability": "Sexy Méta raté",
        "descriptions": [
          "Au déploiement, 50 % de chance d'Immobiliser(6s) une carte rivale à mi-distance. Les cibles appartiennent à cette voie.",
          "Au déploiement, 50 % de chance d'Immobiliser(8s) une carte rivale de la voie à mi-distance."
        ]
      },
      "S1_056": {
        "name": "KONOHAMARU SARUTOBI",
        "ability": "Héritage",
        "descriptions": [
          "Au déploiement, 50 % de chances d'invoquer un Hiruzen aléatoire de ton deck, sinon Chakra(+2).",
          "Au déploiement, 50 % de chances d'invoquer un Hiruzen aléatoire de ton deck, sinon Chakra(+3)."
        ]
      },
      "S1_057": {
        "name": "KONOHAMARU SARUTOBI",
        "ability": "Sexy Méta",
        "descriptions": [
          "Au déploiement, Immobilise(4s) une carte rivale à mi-distance. Les cibles appartiennent à cette voie.",
          "Au déploiement, Immobilise(5s) une carte rivale de la voie à mi-distance."
        ]
      },
      "S1_058": {
        "name": "EBISU",
        "ability": "Leçons Difficiles",
        "descriptions": [
          "Tous les alliés déployés gagnent Chakra(+2) mais Affaiblit(1) cette carte à chaque fois.",
          "Les prochains alliés déployés gagnent Chakra(+3) mais Affaiblit(1) cette carte à chaque fois."
        ]
      },
      "S1_059": {
        "name": "INARI",
        "ability": "Prend les armes",
        "descriptions": [
          "Au déploiement, Affaiblit(1) et Ralentit(6s) la carte rivale la plus proche à longue distance. Les cibles appartiennent à cette voie.",
          "Au déploiement, Affaiblit(1) et Ralentit(8s) le premier rival de sa voie à longue distance."
        ]
      },
      "S1_060": {
        "name": "GATO",
        "ability": "Parrain de la pègre",
        "descriptions": [
          "Au déploiement, Concentration(6s). Si la Concentration réussit, Invoque une carte aléatoire de coût maximum 3 depuis ton deck.",
          "Au déploiement, Concentration(4s). Si la Concentration réussit, Invoque une carte aléatoire de coût maximum 3 depuis ton deck."
        ]
      },
      "S1_061": {
        "name": "NINJA HOUNDS",
        "ability": "Les Crocs Traqueurs ",
        "descriptions": [
          "Au déploiement, Immobilise(6s) elle-même et l'adversaire de sa voie avec le chakra le plus élevé.",
          "Au déploiement, Immobilise(8s) cette carte et l'adversaire de sa voie avec le chakra le plus élevé."
        ]
      },
      "S1_062": {
        "name": "TEUCHI",
        "ability": "La voie du Ramen",
        "descriptions": [
          "Chakra(+1) aux alliés de sa voie après 8 secondes.",
          "Chakra(+2) aux alliés de sa voie après 8 secondes."
        ]
      },
      "S1_063": {
        "name": "NARUTO UZUMAKI",
        "ability": "Détermination",
        "descriptions": [
          "Lorsqu'un Iruka allié est sur le point de se retirer, le ramène au début de la voie et crée 3 clones avec Chakra(1) réparti sur toutes les voies.",
          "Quand un Iruka allié est sur le point de se retirer, le ramène au début de la voie et Invoque 5 clones avec Chakra(1) répartis sur toutes les voies."
        ]
      },
      "S1_064": {
        "name": "NARUTO UZUMAKI",
        "ability": "Showman",
        "descriptions": [
          "Chakra(+5) après 10 s.",
          "Chakra(+6) après 10 s."
        ]
      },
      "S1_065": {
        "name": "NARUTO UZUMAKI",
        "ability": "Sexy Méta Harem",
        "descriptions": [
          "À la confrontation, Immobilise(6s) la carte rivale, se téléporte derrière elle et Accélère(2s).",
          "À la confrontation, Immobilise(8s) la carte rivale, se téléporte derrière elle et Accélère(4s)."
        ]
      },
      "S1_066": {
        "name": "SASUKE UCHIHA",
        "ability": "Prédiction",
        "descriptions": [
          "Ne peut pas être affaibli lors des confrontations avec des cartes rivales de 2 de Chakra ou moins.",
          "Ne peut pas être affaibli lors des confrontations avec des cartes rivales de 3 de Chakra ou moins."
        ]
      },
      "S1_067": {
        "name": "SAKURA HARUNO",
        "ability": "Feu intérieur",
        "descriptions": [
          "Gagne Chakra(+3) au premier déploiement d'un adversaire sur sa voie, puis Chakra(+1) chaque fois qu'un adversaire est déployé ou Transféré sur cette voie.",
          "Gagne Chakra(+3) au premier déploiement d'un adversaire sur sa voie, puis Chakra(+2) chaque fois qu'un adversaire est déployé ou Transféré sur cette voie."
        ]
      },
      "S1_068": {
        "name": "KAKASHI HATAKE",
        "ability": "1000 Ans de Souffrance",
        "descriptions": [
          "Saute sur la première carte rivale qui arrive à proximité, Affaiblit(1) et Repousse(3) cette dernière.",
          "Saute sur la première carte rivale qui arrive à proximité, Affaiblit(1) et Repousse(4) cette dernière."
        ]
      },
      "S1_069": {
        "name": "KAKASHI HATAKE",
        "ability": "Grande Cataracte",
        "descriptions": [
          "Au déploiement, Repousse(3) et Affaiblit(2) tous les rivaux de la voie.",
          "Au déploiement, Repousse(3) et Affaiblit(3) tous les rivaux de la voie."
        ]
      },
      "S1_070": {
        "name": "KAKASHI HATAKE",
        "ability": "Raikiri",
        "descriptions": [
          "Saute sur la première carte rivale qui s'approche et Affaiblit(3) cette dernière. Ignore les Parades.",
          "Saute sur la première carte rivale qui s'approche et Affaiblit(4) cette dernière. Ignore les Parades."
        ]
      },
      "S1_071": {
        "name": "KAKASHI HATAKE",
        "ability": "Feinte de Clones",
        "descriptions": [
          "Dépense l'énergie restante pour invoquer jusqu'à 5 clones avec Chakra(2) déguisés en l'original.",
          "Dépense l'énergie restante pour invoquer jusqu'à 6 clones avec Chakra(2) déguisés en l'original."
        ]
      },
      "S1_072": {
        "name": "IRUKA UMINO",
        "ability": "Réprimande",
        "descriptions": [
          "Tant que cette carte est active, Chakra(+1) et Immobilise(2s) les alliés à 2 Chakra lorsqu'ils sont déployés.",
          "Tant que cette carte est active, Chakra(+2) et Immobilise(2s) les alliés ayant 2 de Chakra lors de leur déploiement."
        ]
      },
      "S1_073": {
        "name": "HIRUZEN SARUTOBI",
        "ability": "Flamme de la Volonté",
        "descriptions": [
          "Chakra[+1] à tous les alliés après 10 secondes.",
          "Après 10 secondes, Chakra(+2) à tous les alliés."
        ]
      },
      "S1_074": {
        "name": "ZABUZA MOMOCHI",
        "ability": "Le Dragon Aqueux ",
        "descriptions": [
          "Au déploiement, Affaiblit(1) et Repousse(1) tous les rivaux de la voie à courte et moyenne distance.",
          "Au déploiement, Affaiblit(1) et Repousse(3) toutes les cartes rivales de la voie à Courte et Mi-distance."
        ]
      },
      "S1_075": {
        "name": "HAKU",
        "ability": "Démoniaques Miroirs de Glace",
        "descriptions": [
          "À la confrontation, Immobilise(2s) et Affaiblit(1) les adversaires proches de sa voie, puis Transfère sa propre carte. Cette compétence se réactive chaque fois qu'elle gagne du Chakra.",
          "À la confrontation, Immobilise(4s) et Affaiblit(1) les adversaires proches de sa voie, puis Transfère sa propre carte. Cette compétence se réactive chaque fois qu'elle gagne du Chakra."
        ]
      },
      "S1_076": {
        "name": "GAMABUNTA",
        "ability": "Coopération du Crapaud",
        "descriptions": [
          "Chakra(+1) lorsque des alliés Repoussent des rivaux.",
          "Chakra(+2) lorsque des alliés Repoussent des rivaux."
        ]
      },
      "S1_077": {
        "name": "NARUTO UZUMAKI",
        "ability": "Multiclonage Supra",
        "descriptions": [
          "Crée 2 clones sur les autres voies avec Chakra(2) et Accélère(4s), puis 2 nouveaux clones après 10 secondes. Chakra(+1) à chaque retrait de ces clones.",
          "Invoque 2 clones sur les autres voies avec Chakra(2) et Accélère(6s), puis 2 nouveaux clones après 10 s. Chakra(+1) quand ces clones se retirent."
        ]
      },
      "S1_078": {
        "name": "NARUTO UZUMAKI",
        "ability": "Fureur de Kyubi",
        "descriptions": [
          "Lorsque des alliés se retirent, Chakra(+1) et Accélère(1s)",
          "Lorsque des alliés se retirent, Chakra(+2) et Accélère(1s)"
        ]
      },
      "S1_079": {
        "name": "NARUTO UZUMAKI",
        "ability": "Coup de Poing Furieux",
        "descriptions": [
          "Est déployée directement à mi-distance, Affaiblit(2) et Repousse(1) tous les rivaux de la voie.",
          "Est déployée directement à mi-distance, Affaiblit(2) et Repousse(3) tous les rivaux de la voie."
        ]
      },
      "S1_080": {
        "name": "NARUTO UZUMAKI",
        "ability": "Déterminé",
        "descriptions": [
          "Chakra(+2) toutes les 8 secondes.",
          "Chakra(+2) toutes les 6 secondes."
        ]
      },
      "S1_081": {
        "name": "SASUKE UCHIHA",
        "ability": "Boule de Feu Suprême",
        "descriptions": [
          "Au déploiement, Affaiblit(2) tous les rivaux à mi-distance.",
          "Au déploiement, Affaiblit(3) tous les rivaux à mi-distance."
        ]
      },
      "S1_082": {
        "name": "KAKASHI HATAKE",
        "ability": "Plan de Bataille",
        "descriptions": [
          "Tant qu'elle est active, Chakra(+1) chaque fois que des alliés Affaiblissent leurs rivaux. Les alliés gagnent Chakra(+1) pour chaque carte affectée la première fois qu'ils Affaiblissent leurs rivaux.",
          "Tant qu'elle est active, Chakra(+2) chaque fois que des alliés Affaiblissent leurs rivaux. Les alliés gagnent Chakra(+1) pour chaque carte affectée la première fois qu'ils Affaiblissent leurs rivaux."
        ]
      },
      "S1_083": {
        "name": "ZABUZA MOMOCHI",
        "ability": "Démon",
        "descriptions": [
          "Au déploiement, Affaiblit(1) toutes les cartes. Si elles ont 3 de Chakra ou moins, Affaiblit(3) à la place.",
          "Au déploiement, Affaiblit(1) toutes les cartes. Si elles ont 4 de Chakra ou moins, Affaiblit(4) à la place."
        ]
      },
      "S1_084": {
        "name": "ZABUZA MOMOCHI",
        "ability": "Charge Téméraire",
        "descriptions": [
          "À chaque confrontation, Affaiblit(2) les cartes rivales avec 4 de Chakra ou moins et les Transfère sur une autre voie. Accélère en permanence.",
          "À chaque confrontation, Affaiblit(3) les cartes rivales avec 4 de Chakra ou moins et les Transfère sur une autre voie. Accélère en permanence."
        ]
      },
      "S1_085": {
        "name": "KYUBI",
        "ability": "Catastrophe naturelle",
        "descriptions": [
          "Se déploie à Mi-distance, Repousse(1) et Affaiblit(3) toutes les cartes. Tant qu'elle est active, Affaiblit(1) les nouvelles cartes déployées. Ralentissement permanent.",
          "Se déploie à Mi-distance, Repousse(1) et Affaiblit(4) toutes les cartes. Tant qu'elle est active, Affaiblit(1) les nouvelles cartes déployées. Ralentissement permanent."
        ]
      },
      "S2_001": {
        "name": "Naruto Uzumaki",
        "ability": "Entraînement au Chakra",
        "descriptions": [
          "Au déploiement, 50% de chances de gagner Chakra(+3).",
          "Au déploiement, 50% de chances de gagner Chakra(+4)."
        ]
      },
      "S2_002": {
        "name": "Naruto Uzumaki",
        "ability": "Challenger",
        "descriptions": [
          "Au déploiement, Immobilisation(1s) et gagne Chakra(+2) pour chaque adversaire de sa voie ayant plus de Chakra.",
          "Au déploiement, Immobilisation(2s) et gagne Chakra(+2) pour chaque adversaire de sa voie ayant plus de Chakra."
        ]
      },
      "S2_003": {
        "name": "Sasuke Uchiha",
        "ability": "Fureur du Lion",
        "descriptions": [
          "Saute sur la première carte rivale qui arrive à proximité, et l'Affaiblit(2).",
          "Saute sur la première carte rivale qui arrive à proximité, et l'Affaiblit(3)."
        ]
      },
      "S2_004": {
        "name": "Sakura Haruno",
        "ability": "Ruée",
        "descriptions": [
          "Accélère(2s)",
          "Accélère(3s)"
        ]
      },
      "S2_005": {
        "name": "Rock Lee",
        "ability": "Protecteur",
        "descriptions": [
          "Accélère(+3s) chaque fois qu'un rival est déployé sur cette voie.",
          "Accélère(+4s) chaque fois qu'un rival est déployé sur cette voie."
        ]
      },
      "S2_006": {
        "name": "Rock Lee",
        "ability": "Bombe d'Amour",
        "descriptions": [
          "Chakra(+1) au prochain allié déployé. Transfère ce dernier toutes les 8 secondes tant que cette carte est active.",
          "Chakra(+2) au prochain allié déployé. Transfère ce dernier toutes les 8 secondes tant que cette carte est active."
        ]
      },
      "S2_007": {
        "name": "Neji Hyuga",
        "ability": "Poing Souple",
        "descriptions": [
          "À la confrontation, Affaiblit(2) et Repousse(1).",
          "À la confrontation, Affaiblit(2) et Repousse(2)."
        ]
      },
      "S2_008": {
        "name": "Tenten",
        "ability": "Dragons Jumeaux",
        "descriptions": [
          "Au déploiement, Affaiblit(1) et Ralentit(6s) tous les rivaux à Longue Distance.",
          "Au déploiement, Affaiblit(1) et Ralentit(8s) tous les rivaux à Longue Distance."
        ]
      },
      "S2_009": {
        "name": "Gai Maito",
        "ability": "Fougue de la Jeunesse",
        "descriptions": [
          "Tant que cette carte est active, Chakra(+2) aux cartes Rock Lee lors de leur déploiement.",
          "Tant que cette carte est active, Chakra(+3) aux cartes Rock Lee lors de leur déploiement."
        ]
      },
      "S2_010": {
        "name": "Gaara",
        "ability": "Dangereux",
        "descriptions": [
          "Est déployée directement à mi-distance et gagne Chakra(+3) si une carte rivale se trouve à mi-distance.",
          "Est déployée directement à mi-distance et gagne Chakra(+4) si une carte rivale se trouve à mi-distance."
        ]
      },
      "S2_011": {
        "name": "Kankuro",
        "ability": "Effronté",
        "descriptions": [
          "Chakra(+3) au prochain allié Gaara déployé.",
          "Chakra(+4) au prochain allié Gaara déployé."
        ]
      },
      "S2_012": {
        "name": "Temari",
        "ability": "Prudent",
        "descriptions": [
          "Octroie Parade(1) et Ralentit(6s) le prochain allié Gaara déployé.",
          "Octroie Parade(1) et Ralentit(10s) le prochain allié Gaara déployé."
        ]
      },
      "S2_013": {
        "name": "Baki",
        "ability": "Résilient",
        "descriptions": [
          "Accélère(3s) et Pare(1).",
          "Accélère(4s) et Pare(1)."
        ]
      },
      "S2_014": {
        "name": "Ino Yamanaka",
        "ability": "Ruée",
        "descriptions": [
          "Accélère(2s)",
          "Accélère(3s)"
        ]
      },
      "S2_015": {
        "name": "Kabuto Yakushi",
        "ability": "Explication",
        "descriptions": [
          "Au déploiement, les alliés à Courte Distance prennent aléatoirement Chakra(+1) ou Immobilisation(4s).",
          "Au déploiement, les alliés à Courte Distance prennent aléatoirement Chakra(+2) ou Immobilisation(4s)."
        ]
      },
      "S2_016": {
        "name": "Student Trio",
        "ability": "Équipe Konohamaru",
        "descriptions": [
          "Lors du retrait, se redéploie en tant que Konohamaru, Moegi et Udon avec Accélère(3s) et Chakra(1) sur chaque voie.",
          "Lors du retrait, se redéploie en tant que Konohamaru, Moegi et Udon avec Accélère(4s) et Chakra(1) sur chaque voie."
        ]
      },
      "S2_017": {
        "name": "Ibiki Morino",
        "ability": "Règles strictes",
        "descriptions": [
          "Au déploiement, Repousse(2) ou Immobilise(4s) tous les rivaux de sa voie.",
          "Au déploiement, Repousse(3) ou Immobilise(5s) tous les rivaux de sa voie."
        ]
      },
      "S2_018": {
        "name": "Choza Akimichi",
        "ability": "Vieux Amis",
        "descriptions": [
          "Tant que cette carte est active, Chakra(+1) aux cartes Shikaku et Inoichi alliées.",
          "Tant que cette carte est active, Chakra(+2) aux cartes Shikaku et Inoichi alliées."
        ]
      },
      "S2_019": {
        "name": "Inoichi Yamanaka",
        "ability": "Vieux Amis",
        "descriptions": [
          "Tant que cette carte est active, Chakra(+1) aux cartes Shikaku et Choza alliées.",
          "Tant que cette carte est active, Chakra(+2) aux cartes Shikaku et Choza alliées."
        ]
      },
      "S2_020": {
        "name": "Shikaku Nara",
        "ability": "Vieux Amis",
        "descriptions": [
          "Tant que cette carte est active, Chakra(+1) aux cartes Inoichi et Choza alliées.",
          "Tant que cette carte est active, Chakra(+2) aux cartes Inoichi et Choza alliées."
        ]
      },
      "S2_021": {
        "name": "Hanabi Hyuga",
        "ability": "Prodige",
        "descriptions": [
          "Accélère(2s). À la confrontation, Repousse(2).",
          "Accélère(3s). À la confrontation, Repousse(3)."
        ]
      },
      "S2_022": {
        "name": "Hiashi Hyuga",
        "ability": "Chef Hyuga",
        "descriptions": [
          "Tant que cette carte est active, les Hyuga alliés gagnent Chakra(+2) et Repousse(1). Repousse ne s'ajoute pas à une valeur déjà présente.",
          "Tant que cette carte est active, les Hyuga alliés gagnent Chakra(+3) et Repousse(1). Repousse ne s'ajoute pas à une valeur déjà présente."
        ]
      },
      "S2_023": {
        "name": "Hizashi Hyuga",
        "ability": "Sacrifice du Frère",
        "descriptions": [
          "Accelère(2s). Lorsqu'un Hiashi allié est sur le point de se retirer, il est ramené au début de sa voie, et cette carte se retire à sa place.",
          "Accélère(3s). Lorsqu'un Hiashi allié est sur le point de se retirer, il est ramené au début de sa voie, et cette carte se retire à sa place."
        ]
      },
      "S2_024": {
        "name": "Zaku Abumi",
        "ability": "Ondes Cinglantes",
        "descriptions": [
          "Au déploiement, Repousse(2) et Transfère deux cartes rivales à Moyenne Distance.",
          "Au déploiement, Repousse(2) et Transfère de voie trois cartes rivales à Mi-distance."
        ]
      },
      "S2_025": {
        "name": "Dosu Kinuta",
        "ability": "Affection par Sons Perçants",
        "descriptions": [
          "À la confrontation, Affaiblit(2) la carte adverse. Si l'adversaire ne se retire pas, Immobilise(4s) la carte, puis Transfert de voie.",
          "À la confrontation, Affaiblit(2) la carte adverse. Si l'adversaire ne se retire pas, Immobilise(5s) la carte, puis Transfert de voie."
        ]
      },
      "S2_026": {
        "name": "Kin Tsuchi",
        "ability": "Senbon aux Grelots",
        "descriptions": [
          "Au déploiement, Affaiblit(1) et Immobilise(2s) la carte rivale la plus proche.",
          "Au déploiement, Affaiblit(2) et Immobilise(2s) la carte rivale la plus proche."
        ]
      },
      "S2_027": {
        "name": "Izumo Kamizuki",
        "ability": "Sabotage",
        "descriptions": [
          "Au déploiement, Immobilise(2s) 2 alliés aléatoires sur sa voie.",
          "Au déploiement, Immobilise(2s) 3 alliés aléatoires sur sa voie."
        ]
      },
      "S2_028": {
        "name": "Kotetsu Hagane",
        "ability": "Désorientation",
        "descriptions": [
          "Au déploiement, Ralentit(4s) et Transfère 2 alliés aléatoires.",
          "Au déploiement, Ralentit(4s) et Transfère de voie trois alliés aléatoires."
        ]
      },
      "S2_029": {
        "name": "Oboro",
        "ability": "Clones de Brumes",
        "descriptions": [
          "Au déploiement, crée 2 clones avec Chakra(1). Quand les clones se retirent, 50 % de chances de créer un autre clone sur la même voie.",
          "Au déploiement, Invoque 2 clones avec Chakra(2). Quand les clones se retirent, 50 % de chances de créer un autre clone sur la même voie."
        ]
      },
      "S2_030": {
        "name": "Yoroi Akado",
        "ability": "Absorption de Chakra",
        "descriptions": [
          "À la confrontation, gagne Chakra(+1) et Affaiblit(1) la carte rivale. Désactive toute compétence active.",
          "À la confrontation, gagne Chakra(+2) et Affaiblit(1) la carte rivale. Désactive toute compétence active."
        ]
      },
      "S2_031": {
        "name": "Ningame",
        "ability": "Tempérance",
        "descriptions": [
          "Quand des alliés de sa voie gagnent Accélération, ils gagnent Chakra(+1) à la place.",
          "Quand des alliés de sa voie gagnent Accélération, ils gagnent Chakra(+2) à la place."
        ]
      },
      "S2_032": {
        "name": "Gama",
        "ability": "Parchemin du Crapaud",
        "descriptions": [
          "Au déploiement, Invoque un Crapaud aléatoire du deck avec Chakra(+1).",
          "Au déploiement, Invoque un Crapaud aléatoire du deck avec Chakra(+2)."
        ]
      },
      "S2_033": {
        "name": "Gamakichi",
        "ability": "Grande Gueule",
        "descriptions": [
          "Les Crapauds alliés Repoussent(1) à chaque confrontation tant que cette carte est active. Chakra(+1) à chaque fois qu'un Crapaud repousse un rival.",
          "Les Crapauds alliés appliquent Repousse(2) lors d'une confrontation tant que cette carte est active. Chakra(+1) chaque fois qu'un Crapaud repousse un rival."
        ]
      },
      "S2_034": {
        "name": "Giant Snake",
        "ability": "Glisser",
        "descriptions": [
          "Est déployée directement à mi-distance et Transfère deux autres cartes présentes à Moyenne Distance.",
          "Est déployée directement à mi-distance et Transfère de voie 3 autres cartes présentes à Mi-distance."
        ]
      },
      "S2_035": {
        "name": "Raido Namiashi",
        "ability": "Garde du Corps",
        "descriptions": [
          "Accélère(2s). Lorsqu'un Hiruzen allié est sur le point de se retirer, il est ramené au début de sa voie, et cette carte se retire à sa place.",
          "Accélère(3s). Lorsqu'un Hiruzen allié est sur le point de se retirer, il est ramené au début de sa voie, et cette carte se retire à sa place."
        ]
      },
      "S2_036": {
        "name": "Homura Mitokado",
        "ability": "Réconfort",
        "descriptions": [
          "Le prochain allié déployé Pare(1) et gagne Chakra(+1).",
          "Le prochain allié déployé Pare(1) et gagne Chakra(+2)."
        ]
      },
      "S2_037": {
        "name": "Koharu Utatane",
        "ability": "Sécurité",
        "descriptions": [
          "Après 10 secondes, déploie les forces spéciales Anbu.",
          "Après 8 secondes, déploie les forces spéciales Anbu."
        ]
      },
      "S2_038": {
        "name": "Genma Shiranui",
        "ability": "Procureur",
        "descriptions": [
          "Au déploiement, Concentration(6s). Si la Concentration réussit, Invoque une carte aléatoire du deck, d'un coût max. de 4. Si elle n'a que 3 ou moins de Chakra, elle prend Chakra(+2).",
          "Au déploiement, Concentration(4s). Si la Concentration réussit, Invoque une carte aléatoire de coût maximum 4 depuis ton deck. Si elle a 3 Chakra ou moins, lui accorde Chakra(+2)."
        ]
      },
      "S2_039": {
        "name": "Genma Shiranui",
        "ability": "Alerte",
        "descriptions": [
          "Au déploiement, Affaiblit(3) une carte rivale de sa voie à Mi-distance.",
          "Au déploiement, Affaiblit(3) deux cartes rivales de sa voie à Mi-distance."
        ]
      },
      "S2_040": {
        "name": "Yashamaru",
        "ability": "Devoir à Contrecœur",
        "descriptions": [
          "Lors du retrait, Affaiblit(3) toutes les cartes à proximité.",
          "Lors du retrait, Affaiblit(4) toutes les cartes à proximité."
        ]
      },
      "S2_041": {
        "name": "Karura",
        "ability": "Amour Maternel",
        "descriptions": [
          "Au déploiement, Chakra(+2) et Ralentit(3s) les cartes Gaara alliées.",
          "Au déploiement, Chakra(+2) et Ralentit(5s) les cartes Gaara alliées."
        ]
      },
      "S2_042": {
        "name": "Yugao Uzuki",
        "ability": "Serment de vengeance",
        "descriptions": [
          "Accélère(3s). Pare(1). À la confrontation, Affaiblit(2).",
          "Accélère(4s). Pare(1). À la confrontation, Affaiblit(2)."
        ]
      },
      "S2_043": {
        "name": "Hana Inuzuka",
        "ability": "Ruée",
        "descriptions": [
          "Accélère(4s)",
          "Accélère(5s)"
        ]
      },
      "S2_044": {
        "name": "Tsume Inuzuka",
        "ability": "Mener la Charge",
        "descriptions": [
          "Accélère(4s). Le prochain allié déployé gagne Accélère(+3s) et Chakra(+1).",
          "Accélère(4s). Le prochain allié déployé gagne Accélère(+3s) et Chakra(+2)."
        ]
      },
      "S2_045": {
        "name": "Shibi Aburame",
        "ability": "Secours Opportun",
        "descriptions": [
          "Accélère(5s). Chakra(+1) aux alliés dépassés.",
          "Accélère(6s). Chakra(+1) aux alliés dépassés."
        ]
      },
      "S2_046": {
        "name": "Jirobo",
        "ability": "Sud",
        "descriptions": [
          "Le prochain Orochimaru déployé gagne Chakra(+3).",
          "Le prochain Orochimaru déployé gagne Chakra(+4)."
        ]
      },
      "S2_047": {
        "name": "Kidomaru",
        "ability": "Est",
        "descriptions": [
          "Le prochain Orochimaru déployé Accélère(+4s).",
          "Le prochain Orochimaru déployé Accélère(+5s)."
        ]
      },
      "S2_048": {
        "name": "Sakon",
        "ability": "Ouest",
        "descriptions": [
          "Le prochain Orochimaru déployé Affaiblit(3) la carte rivale la plus proche.",
          "Le prochain Orochimaru déployé Affaiblit(4) la carte rivale la plus proche."
        ]
      },
      "S2_049": {
        "name": "Tayuya",
        "ability": "Nord",
        "descriptions": [
          "Le prochain Orochimaru déployé gagne Pare(1).",
          "Le prochain Orochimaru déployé gagne Parade(2)."
        ]
      },
      "S2_050": {
        "name": "Anbu",
        "ability": "Forces Spéciales",
        "descriptions": [
          "Au déploiement, prend aléatoirement Chakra(+2) ou Accélère(4s).",
          "Au déploiement, prend aléatoirement Chakra(+3) ou Accélère(5s)."
        ]
      },
      "S2_051": {
        "name": "Naruto Uzumaki",
        "ability": "Briseur de Destin",
        "descriptions": [
          "Parade(2). Quand Parade s'active, redémarre Accélération(2s) sans ajout à la durée restante. À la fin de l'Accélération, Transfère sa propre carte.",
          "Parade(3). Quand Parade s'active, redémarre Accélération(2s) sans ajout à la durée restante. À la fin de l'Accélération, Transfère sa propre carte."
        ]
      },
      "S2_052": {
        "name": "Sakura Haruno",
        "ability": "Fermeté",
        "descriptions": [
          "À la confrontation, Affaiblit(1) la carte rivale et Pare(1).",
          "À la confrontation, Affaiblit(1) la carte rivale et Pare(2)."
        ]
      },
      "S2_053": {
        "name": "Rock Lee",
        "ability": "Bourrasque de Konoha",
        "descriptions": [
          "À la confrontation, Repousse(1) et Affaiblit(2) la carte rivale.",
          "À la confrontation, Repousse(2) et Affaiblit(2) la carte rivale."
        ]
      },
      "S2_054": {
        "name": "Neji Hyuga",
        "ability": "Byakugan",
        "descriptions": [
          "Au déploiement, divise le Chakra de la carte rivale la plus proche par 2 et Accélère(2s).",
          "Au déploiement, divise le Chakra de la carte rivale la plus proche par 2 et Accélère(4s)."
        ]
      },
      "S2_055": {
        "name": "Neji Hyuga",
        "ability": "Fardeau du Destin",
        "descriptions": [
          "Chaque fois que cette carte gagne du Chakra, Chakra(+1) en plus. Elle ne peut pas avoir plus de 10 de Chakra au total.",
          "Chaque fois que cette carte gagne du Chakra, Chakra(+2) en plus. Elle ne peut pas avoir plus de 10 de Chakra au total."
        ]
      },
      "S2_056": {
        "name": "Gai Maito",
        "ability": "Réprimande",
        "descriptions": [
          "Est déployée directement à mi-distance. L'allié de sa voie le plus proche gagne Chakra(+2) et est Immobilisé(2s).",
          "Est déployée directement à mi-distance. L'allié de sa voie le plus proche gagne Chakra(+2) et est Immobilisé(6s)."
        ]
      },
      "S2_057": {
        "name": "Choji Akimichi",
        "ability": "Boulet Humain",
        "descriptions": [
          "Accélère(3s). À chaque confrontation, Repousse(2) et Affaiblit(1) si Accélération est actif.",
          "Accélère(4s). À chaque confrontation, Repousse(2) et Affaiblit(1) si Accélération est actif."
        ]
      },
      "S2_058": {
        "name": "Ino Yamanaka",
        "ability": "Transposition",
        "descriptions": [
          "Au déploiement, Concentration(8s) et prend le contrôle du rival de sa voie à Mi-distance avec le Chakra le plus élevé. À la fin de la Concentration, rend le contrôle de la carte à ton rival.",
          "Au déploiement, Concentration(12s) et prend le contrôle du rival de sa voie à Mi-distance avec le Chakra le plus élevé. À la fin de la Concentration, rend le contrôle de la carte à ton adversaire."
        ]
      },
      "S2_059": {
        "name": "Hinata Hyuga",
        "ability": "Dévier",
        "descriptions": [
          "À la confrontation, Repousse(1) et Transfère la carte rivale.",
          "À la confrontation, Repousse(2) et Transfère la carte rivale."
        ]
      },
      "S2_060": {
        "name": "Gaara",
        "ability": "Bouclier de sable",
        "descriptions": [
          "Pare(2). Lorsque la Parade s'active, Chakra(+1).",
          "Pare(3). Lorsque la Parade s'active, Chakra(+1)."
        ]
      },
      "S2_061": {
        "name": "Temari",
        "ability": "Grand Eventail",
        "descriptions": [
          "Pare(2). Au déploiement et lorsque la Parade s'active, Repousse(2) tous les rivaux de sa voie.",
          "Pare(3). Au déploiement et lorsque la Parade s'active, Repousse(3) tous les rivaux de sa voie."
        ]
      },
      "S2_062": {
        "name": "Anko Mitarashi",
        "ability": "Poigne du Serpent Spectral",
        "descriptions": [
          "Au déploiement, Affaiblit(2) et Immobilise(4s) une carte rivale de sa voie à Mi-distance.",
          "Au déploiement, Affaiblit(2) et Immobilise(4s) deux cartes rivales de sa voie à Mi-distance."
        ]
      },
      "S2_063": {
        "name": "Choza Akimichi",
        "ability": "Décuplement Corporel",
        "descriptions": [
          "À la confrontation, Repousse(3) et Affaiblit(2) la carte rivale.",
          "À la confrontation, Repousse(3) et Affaiblit(3) la carte rivale."
        ]
      },
      "S2_064": {
        "name": "Inoichi Yamanaka",
        "ability": "Grande Confusion ",
        "descriptions": [
          "Au déploiement, Concentration(10s) et prend le contrôle de la carte rivale à Mi-distance la plus proche sur sa voie, la Ralentit(10s) et désactive définitivement toute compétence active. À la fin de la Concentration, rend le contrôle de la carte à ton rival.",
          "Au déploiement, Concentration(14s) et prend le contrôle de la carte rivale à Mi-distance la plus proche sur sa voie, la Ralentit(10s) et désactive définitivement toute compétence active. À la fin de la Concentration, rend le contrôle de la carte à ton adversaire."
        ]
      },
      "S2_065": {
        "name": "Shikaku Nara",
        "ability": "Prise des Ombres",
        "descriptions": [
          "Au déploiement, Immobilise(10s) elle-même et deux rivaux de sa voie à Longue Distance.",
          "Au déploiement, Immobilise(12s) cette carte et deux cartes rivales de sa voie à Longue Distance."
        ]
      },
      "S2_066": {
        "name": "Jiraiya",
        "ability": "Ermite Pervers",
        "descriptions": [
          "Transfert de voie toutes les 10 secondes.",
          "Transfert de voie toutes les 8 secondes."
        ]
      },
      "S2_067": {
        "name": "Orochimaru",
        "ability": "Machinations",
        "descriptions": [
          "Au déploiement et au retrait, Affaiblit(1) jusqu'à 4 cartes quelconques.",
          "Au déploiement et au retrait, Affaiblit(1) jusqu'à 6 cartes quelconques."
        ]
      },
      "S2_068": {
        "name": "Hashirama Senju",
        "ability": "Réincarnation",
        "descriptions": [
          "Quand son Chakra est inférieur à sa valeur initiale, Chakra(+1) toutes les 4 secondes jusqu'à sa valeur initiale.",
          "Quand son Chakra est inférieur à sa valeur initiale, Chakra(+1) toutes les 3 secondes jusqu'à sa valeur initiale."
        ]
      },
      "S2_069": {
        "name": "Tobirama Senju",
        "ability": "Réincarnation",
        "descriptions": [
          "Quand son Chakra est inférieur à sa valeur initiale, Chakra(+1) toutes les 4 secondes jusqu'à sa valeur initiale.",
          "Quand son Chakra est inférieur à sa valeur initiale, Chakra(+1) toutes les 3 secondes jusqu'à sa valeur initiale."
        ]
      },
      "S2_070": {
        "name": "Hiruzen Sarutobi",
        "ability": "Le Troisième",
        "descriptions": [
          "À la confrontation, Chakra(+2). Au retrait, Chakra(+2) à tous les alliés.",
          "À la confrontation, Chakra(+3). Au retrait, Chakra(+2) à tous les alliés."
        ]
      },
      "S2_071": {
        "name": "Hayate Gekko",
        "ability": "Danse sous la Nouvelle Lune",
        "descriptions": [
          "À la confrontation, Affaiblit(1) trois fois. Si l'adversaire ne se retire pas, Repousse(2) également.",
          "À la confrontation, Affaiblit(1) trois fois. Si l'adversaire ne se retire pas, Repousse(3) également."
        ]
      },
      "S2_072": {
        "name": "Ibiki Morino",
        "ability": "Interrogatoire",
        "descriptions": [
          "Au déploiement, Affaiblit(1) et Ralentit(4s) toutes les cartes.",
          "Au déploiement, Affaiblit(1) et Ralentit(6s) toutes les cartes."
        ]
      },
      "S2_073": {
        "name": "Gamahiro",
        "ability": "Soupeser",
        "descriptions": [
          "Au déploiement, gagne Chakra(+2) pour chaque Crapaud allié. Ralentissement permanent.",
          "Au déploiement, gagne Chakra(+3) pour chaque Crapaud allié. Ralentissement permanent."
        ]
      },
      "S2_074": {
        "name": "Sasuke Uchiha",
        "ability": "Chidori",
        "descriptions": [
          "À la confrontation, saute au travers des rivaux proches, Affaiblit(2) chacun d'eux. Ignore les Parades.",
          "À la confrontation, saute au travers des rivaux proches, Affaiblit(3) chacun d'eux. Ignore les Parades."
        ]
      },
      "S2_075": {
        "name": "Rock Lee",
        "ability": "Extrême Légèreté",
        "descriptions": [
          "Accélère(3s). À chaque confrontation, si la carte rivale a un Chakra supérieur, Repousse(1) et Affaiblit(2), puis Transfert de voie.",
          "Accélère(3s). À chaque confrontation, si la carte rivale a un Chakra supérieur, Repousse(2) et Affaiblit(2), puis Transfert de voie."
        ]
      },
      "S2_076": {
        "name": "Neji Hyuga",
        "ability": "Tourbillon Divin",
        "descriptions": [
          "À la confrontation, Repousse(2) et Affaiblit(3) toutes les cartes rivales à proximité.",
          "À la confrontation, Repousse(4) et Affaiblit(3) toutes les cartes rivales à proximité."
        ]
      },
      "S2_077": {
        "name": "Kiba Inuzuka",
        "ability": "Hommes-Bêtes Enragés",
        "descriptions": [
          "Le prochain Akamaru déployé devient une copie complète de cette carte avec Accélération(4s).",
          "Le prochain Akamaru déployé devient une copie complète de cette carte avec Accélération(5s)."
        ]
      },
      "S2_078": {
        "name": "Shikamaru Nara",
        "ability": "Maître de Shogi",
        "descriptions": [
          "Au déploiement, Immobilisation(10s) et gagne Chakra(+3). Tant que cette carte est active, chaque fois que tu Immobilises d'autres cartes alliées ou qu'elles se Concentrent, elles gagnent Chakra(+3).",
          "Au déploiement, s'Immobilise(12s) et gagne Chakra(+4). Tant que cette carte est active, chaque fois que tu Immobilises d'autres cartes alliées ou qu'elles gagnent Concentration, elles gagnent Chakra(+3)."
        ]
      },
      "S2_079": {
        "name": "Asuma Sarutobi",
        "ability": "Lames de Chakra",
        "descriptions": [
          "À chaque confrontation, Affaiblit(1). Quand cette carte provoque le retrait d'un rival, Accélère(+1s).",
          "À chaque confrontation, Affaiblit(2). Quand cette carte provoque le retrait d'un rival, Accélère(+1s)."
        ]
      },
      "S2_080": {
        "name": "Gaara",
        "ability": "Instable",
        "descriptions": [
          "Au déploiement, Affaiblit(2) et Ralentit(6s) toutes les cartes sur la voie.",
          "Au déploiement, Affaiblit(2) et Ralentit(8s) toutes les cartes sur la voie."
        ]
      },
      "S2_081": {
        "name": "Gaara",
        "ability": "Assoiffé de Sang",
        "descriptions": [
          "Chakra(+1) chaque fois qu'un allié Affaiblit d'autres cartes.",
          "Chakra(+2) chaque fois qu'un allié Affaiblit d'autres cartes."
        ]
      },
      "S2_082": {
        "name": "Kankuro",
        "ability": "Agression du Pantin",
        "descriptions": [
          "Affaiblit(3) et Ralentit(2s) le premier adversaire qui s'approche. S'il ne se retire pas, le Transfère. Gagne Chakra(+1) et réactive cette compétence lorsqu'un autre allié provoque le Transfert d'un adversaire.",
          "Affaiblit(3) et Ralentit(5s) le premier adversaire qui s'approche. S'il ne se retire pas, le Transfère. Gagne Chakra(+1) et réactive cette compétence lorsqu'un autre allié provoque le Transfert d'un adversaire."
        ]
      },
      "S2_083": {
        "name": "Jiraya",
        "ability": "Crapaud Ermite",
        "descriptions": [
          "Chakra(+3) aux Crapauds alliés tant que cette carte est active.",
          "Chakra(+4) aux Crapauds alliés tant que cette carte est active."
        ]
      },
      "S2_084": {
        "name": "Orochimaru",
        "ability": "Traîtrise",
        "descriptions": [
          "Ignore toutes les compétences et confrontations avec des cartes rivales. À Mi-distance, gagne Chakra(+2) et devient vulnérable.",
          "Ignore toutes les compétences et confrontations avec des cartes rivales. À Mi-distance, gagne Chakra(+3) et devient vulnérable."
        ]
      },
      "S2_085": {
        "name": "Orochimaru",
        "ability": "Kusanagi",
        "descriptions": [
          "À chaque confrontation, Affaiblit(2). Chaque fois qu'une carte rivale fait un Transfert de voie, cette carte se Transfère dans la même voie et Pare(1).",
          "À chaque confrontation, Affaiblit(3). Chaque fois qu'une carte rivale fait un Transfert de voie, cette carte se Transfère dans la même voie et Pare(1)."
        ]
      },
      "S2_086": {
        "name": "Orochimaru",
        "ability": "Réincarnation des Âmes",
        "descriptions": [
          "Au déploiement, Affaiblit(2) les deux alliés au Chakra le plus bas. Pour chaque retrait ainsi généré, Invoque Edotensei Hashirama et Tobirama depuis le deck, avec Accélération(3s).",
          "Au déploiement, Affaiblit(2) les deux alliés au Chakra le plus bas. Pour chaque retrait ainsi généré, Invoque Edotensei Hashirama et Tobirama depuis le deck, avec Accélération(5s)."
        ]
      },
      "S2_087": {
        "name": "Hashirama Senju",
        "ability": "Croissance Luxuriante de la Forêt ",
        "descriptions": [
          "Au déploiement, Immobilise(12s) toutes les cartes rivales.",
          "Au déploiement, Immobilise(14s) toutes les cartes rivales."
        ]
      },
      "S2_088": {
        "name": "Tobirama Senju",
        "ability": "Suiton : Raz de Marée",
        "descriptions": [
          "Au déploiement, Affaiblit(2) et Ralentit(4s) toutes les cartes rivales.",
          "Au déploiement, Affaiblit(2) et Ralentit(8s) toutes les cartes rivales."
        ]
      },
      "S2_089": {
        "name": "Hiruzen Sarutobi",
        "ability": "Souffle du Dragon de Feu",
        "descriptions": [
          "Au déploiement, Affaiblit(3) et Brûle(4) la carte rivale la plus proche.",
          "Au déploiement, Affaiblit(3) et Brûle(5) la carte rivale la plus proche."
        ]
      },
      "S2_090": {
        "name": "Enma",
        "ability": "Roi Singe",
        "descriptions": [
          "Chakra(+1) aux alliés lorsqu'ils Transfèrent.",
          "Chakra(+2) aux alliés lorsqu'ils Transfèrent."
        ]
      },
      "S2_091": {
        "name": "Naruto Uzumaki",
        "ability": "Volonté de Protection",
        "descriptions": [
          "La première fois que son Chakra descend en dessous de sa valeur initiale, gagne Chakra(+4) et Accélère(3s). Au retrait, augmente définitivement son Chakra initial de 2.",
          "La première fois que son Chakra descend en dessous de sa valeur initiale, gagne Chakra(+5) et Accélère(3s). Au retrait, augmente définitivement son Chakra initial de 2."
        ]
      },
      "S2_092": {
        "name": "Sasuke Uchiha",
        "ability": "Marque Maudite",
        "descriptions": [
          "Au déploiement, Chakra(+3). Après chaque confrontation, Chakra(+2).",
          "Au déploiement, Chakra(+4). Après chaque confrontation, Chakra(+2)."
        ]
      },
      "S2_093": {
        "name": "Sakura Haruno",
        "ability": "Inflexible",
        "descriptions": [
          "Parade permanente. À chaque Parade, Chakra(+1) et Transfert de voie.",
          "Parade permanente. À chaque Parade, Chakra(+2) et Transfert de voie."
        ]
      },
      "S2_094": {
        "name": "Rock Lee",
        "ability": "Cinquième Porte",
        "descriptions": [
          "Au déploiement, Concentration(5s). Si la Concentration réussit, gagne Chakra(+7) et active le reste de cette compétence. Saute sur la prochaine carte rivale qui s'approche. À chaque confrontation, Affaiblit(2) la carte rivale et s'Affaiblit(1) elle-même.",
          "Au déploiement, Concentration(3s). Si la Concentration réussit, gagne Chakra(+7) et active le reste de cette compétence. Saute sur la prochaine carte rivale qui s'approche. À chaque confrontation, Affaiblit(2) la carte rivale et s'Affaiblit(1) elle-même."
        ]
      },
      "S2_095": {
        "name": "Neji Hyuga",
        "ability": "64 Poings du Hakke",
        "descriptions": [
          "À chaque confrontation, Repousse(1) et Affaiblit(1). Lorsque cette carte provoque le retrait d'un rival, réduit définitivement le Chakra initial de ce dernier de 2.",
          "À chaque confrontation, Repousse(1) et Affaiblit(2). Lorsque cette carte provoque le retrait d'un rival, réduit définitivement le Chakra initial de ce dernier de 2."
        ]
      },
      "S2_096": {
        "name": "Gaara",
        "ability": "Déchaînement du Sable",
        "descriptions": [
          "Pare(1). Lorsqu'une carte rivale s'approche, Immobilise(8s) et gagne Chakra(+2). Si le rival est déjà Immobilisé, Affaiblit(3) et gagne Pare(1) à la place.",
          "Pare(2). Chaque fois qu'une carte rivale s'approche, l'Immobilise(8s) et gagne Chakra(+2). Si le rival est déjà Immobilisé, l'Affaiblit(3) et gagne Parade(1) à la place."
        ]
      },
      "S2_097": {
        "name": "Hiruzen Sarutobi",
        "ability": "Maître des Éléments",
        "descriptions": [
          "Au déploiement, Affaiblit(1) et Ralentit(8s) les cartes rivales de la voie. La première fois que le Chakra de cette carte augmente, Affaiblit(2) et Brûle(3) les cartes rivales de sa voie.",
          "Au déploiement, Affaiblit(1) et Ralentit(12s) toutes les cartes rivales de la voie. La première fois que cette carte gagne du Chakra, Affaiblit(2) et Brûle(4) toutes les cartes rivales de la voie."
        ]
      },
      "S2_098": {
        "name": "Hiruzen Sarutobi",
        "ability": "Emprisonnement des Morts  ",
        "descriptions": [
          "Au déploiement, Concentration(4s). Si la Concentration réussit, active le reste de cette compétence. Quand une carte rivale s'approche avec un Chakra égal ou supérieur, lui retire jusqu'à 12 Chakra et désactive sa compétence active. Si la cible se retire, Scelle(15s). Au retrait, se Scelle(15s) elle-même. Se retire immédiatement après avoir scellé 3 cartes.",
          "Au déploiement, Concentration(4s). Si la Concentration réussit, active le reste de cette compétence. Quand une carte rivale s'approche avec un Chakra égal ou supérieur, lui retire jusqu'à 15 Chakra et désactive toute compétence active. Si la cible se retire, la Scelle(15s). Lors de son propre retrait, se Scelle(15s). Se retire instantanément après avoir scellé 3 cartes."
        ]
      },
      "S2_099": {
        "name": "Ichibi",
        "ability": "Distorsion de l’Air ",
        "descriptions": [
          "Au déploiement, Affaiblit(2) tous les rivaux de la voie à Longue Distance. Toutes les 10 secondes, Concentration(2s). Si la Concentration réussit, Affaiblit(2) tous les rivaux de la voie à Longue Distance.",
          "Au déploiement, Affaiblit(3) tous les rivaux de la voie à Longue Distance. Toutes les 10 secondes, Concentration(2s). Si la Concentration réussit, Affaiblit(3) tous les rivaux de la voie à Longue Distance."
        ]
      },
      "S2_100": {
        "name": "Kyubi",
        "ability": "Destin Lié",
        "descriptions": [
          "Chakra(+7) au prochain allié déployé. Les cartes sont liées : lorsqu’une carte se retire, l’autre également.",
          "Chakra(+8) au prochain allié déployé. Les cartes sont liées : lorsqu’une carte se retire, l’autre également."
        ]
      },
      "S3_001": {
        "name": "Naruto Uzumaki",
        "ability": "Rêve partagé",
        "descriptions": [
          "Chaque fois qu'une autre carte avec Rêve Partagé se retire, cette carte gagne Chakra(+1).",
          "Chaque fois qu'une autre carte avec Rêve Partagé se retire, cette carte gagne Chakra(+2)."
        ]
      },
      "S3_002": {
        "name": "Sasuke Uchiha",
        "ability": "Entraînement à la boule de feu",
        "descriptions": [
          "Accélère(1s). Au déploiement, Chakra(+1) pour chaque carte rivale affectée par Brûlure.",
          "Accélère(2s). Au déploiement, Chakra(+1) pour chaque carte rivale affectée par Brûlure."
        ]
      },
      "S3_003": {
        "name": "Choji Akimichi",
        "ability": "Expansion partielle",
        "descriptions": [
          "Quand une carte rivale s'approche, Affaiblit(1) et Repousse(2).",
          "Quand une carte rivale s'approche, Affaiblit(1) et Repousse(4)."
        ]
      },
      "S3_004": {
        "name": "Kankuro",
        "ability": "Transfert de marionnette",
        "descriptions": [
          "À la confrontation, Téléporte derrière la carte rivale, l'Affaiblit(2) et l'Immobilise(5s).",
          "À la confrontation, Téléporte derrière la carte rivale, l'Affaiblit(2) et l'Immobilise(8s)."
        ]
      },
      "S3_005": {
        "name": "Kankuro",
        "ability": "Vierge de fer",
        "descriptions": [
          "Quand une carte rivale s'approche, l'attire vers cette carte et désactive sa compétence, puis l'Affaiblit(2).",
          "Quand une carte rivale s'approche, l'attire vers cette carte et désactive sa compétence, puis l'Affaiblit(3)."
        ]
      },
      "S3_006": {
        "name": "Neji Hyuga",
        "ability": "Défense ciblée",
        "descriptions": [
          "Parade(2). Quand Parade s'active, 50 % de chances de s'Immobiliser(6s).",
          "Parade(3). Quand Parade s'active, 50 % de chances de s'Immobiliser(6s)."
        ]
      },
      "S3_007": {
        "name": "Shikamaru Nara",
        "ability": "Flemmard",
        "descriptions": [
          "Accélère(2s)",
          "Accélère(3s)"
        ]
      },
      "S3_008": {
        "name": "Jiraiya",
        "ability": "Accélération",
        "descriptions": [
          "Accélère(4s)",
          "Accélère(5s)"
        ]
      },
      "S3_009": {
        "name": "Jiraiya",
        "ability": "Piège de la bouche du crapaud",
        "descriptions": [
          "Au déploiement, Immobilise(6s) toutes les cartes de la voie.",
          "Au déploiement, Immobilise(10s) toutes les cartes de la voie."
        ]
      },
      "S3_010": {
        "name": "Jiraiya",
        "ability": "Entraînement avancé",
        "descriptions": [
          "Chaque fois que tu déploies un allié de voie avec 3 Chakra ou moins, lui accorde Concentration(8s). Si cette Concentration réussit, la carte alliée gagne Chakra(+3).",
          "Chaque fois que tu déploies un allié de voie avec 3 Chakra ou moins, lui accorde Concentration(8s). Si cette Concentration réussit, la carte alliée gagne Chakra(+4)."
        ]
      },
      "S3_011": {
        "name": "Orochimaru",
        "ability": "Sur ses gardes",
        "descriptions": [
          "Parade(1)",
          "Parade(2)"
        ]
      },
      "S3_012": {
        "name": "Orochimaru",
        "ability": "Insaisissable",
        "descriptions": [
          "Accélère(3s). Quand une carte rivale s'approche, l'Affaiblit(1) et Change de voie.",
          "Accélère(5s). Quand une carte rivale s'approche, l'Affaiblit(1) et Change de voie."
        ]
      },
      "S3_013": {
        "name": "Tsunade",
        "ability": "Accélération",
        "descriptions": [
          "Accélère(3s)",
          "Accélère(4s)"
        ]
      },
      "S3_014": {
        "name": "Tsunade",
        "ability": "Pichenette puissante",
        "descriptions": [
          "Parade(1). Quand une carte rivale s'approche, bondit dessus et la Repousse(2).",
          "Parade(1). Quand une carte rivale s'approche, bondit dessus et la Repousse(4)."
        ]
      },
      "S3_015": {
        "name": "Tsunade",
        "ability": "Aguerri",
        "descriptions": [
          "Accélère(3s). À la confrontation, Repousse(1).",
          "Accélère(4s). À la confrontation, Repousse(1)."
        ]
      },
      "S3_016": {
        "name": "Manda",
        "ability": "Serpent colossal",
        "descriptions": [
          "Accélère(4s) et Parade(1). Quand Parade s'active, Change de voie.",
          "Accélère(4s) et Parade(2). Quand Parade s'active, Change de voie."
        ]
      },
      "S3_017": {
        "name": "Katsuyu",
        "ability": "Jet d'acide",
        "descriptions": [
          "Au déploiement, Affaiblit(2) et Ralentit(6s) tous les rivaux à Mi-distance.",
          "Au déploiement, Affaiblit(3) et Ralentit(6s) tous les rivaux à Mi-distance."
        ]
      },
      "S3_018": {
        "name": "Hiruzen Sarutobi",
        "ability": "Épreuve des clochettes",
        "descriptions": [
          "Ralentit(6s) les trois prochains alliés déployés, leur accordant Chakra(+1) toutes les 3 secondes tant qu'ils subissent ce Ralentissement.",
          "Ralentit(9s) les trois prochains alliés déployés, leur accordant Chakra(+1) toutes les 3 secondes tant qu'ils subissent ce Ralentissement."
        ]
      },
      "S3_019": {
        "name": "Itachi Uchiha",
        "ability": "Grand frère",
        "descriptions": [
          "Le prochain Sasuke déployé gagne Chakra(+2) et Accélère(4s) s'il est déployé sur la même voie, ou Parade(2) et Ralentit(10s) s'il est déployé sur une autre voie.",
          "Le prochain Sasuke déployé gagne Chakra(+2) et Accélère(5s) s'il est déployé sur la même voie, ou Parade(2) et Ralentit(12s) s'il est déployé sur une autre voie."
        ]
      },
      "S3_020": {
        "name": "Jirobo",
        "ability": "Libération du sceau maudit",
        "descriptions": [
          "Parade(1). À la confrontation, Repousse(1).",
          "Parade(2). À la confrontation, Repousse(1)."
        ]
      },
      "S3_021": {
        "name": "Kidomaru",
        "ability": "Libération du sceau maudit",
        "descriptions": [
          "Parade(1) et Accélère(2s).",
          "Parade(1) et Accélère(4s)."
        ]
      },
      "S3_022": {
        "name": "Kidomaru",
        "ability": "Pluie d'araignées",
        "descriptions": [
          "Au déploiement, Immobilise(4s) ou Ralentit(6s) aléatoirement toutes les cartes rivales.",
          "Au déploiement, Immobilise(6s) ou Ralentit(8s) aléatoirement toutes les cartes rivales."
        ]
      },
      "S3_023": {
        "name": "Kimimaro",
        "ability": "Contrôle des os",
        "descriptions": [
          "Accélère(2s). À la confrontation, Affaiblit(3).",
          "Accélère(4s). À la confrontation, Affaiblit(3)."
        ]
      },
      "S3_024": {
        "name": "Sakon & Ukon",
        "ability": "Libération du sceau maudit",
        "descriptions": [
          "Parade(1). À la confrontation, Affaiblit(1).",
          "Parade(1). À la confrontation, Affaiblit(2)."
        ]
      },
      "S3_025": {
        "name": "Tayuya",
        "ability": "Libération du sceau maudit",
        "descriptions": [
          "Parade(1) et Accélère(2s).",
          "Parade(1) et Accélère(4s)."
        ]
      },
      "S3_026": {
        "name": "Kimimaro",
        "ability": "Libération du sceau maudit",
        "descriptions": [
          "Parade(1). Quand une carte rivale s'approche, s'Immobilise(2s) et Chakra(+1). À la confrontation, Affaiblit(1).",
          "Parade(2). Quand une carte rivale s'approche, s'Immobilise(2s) et Chakra(+1). À la confrontation, Affaiblit(1)."
        ]
      },
      "S3_027": {
        "name": "Shizune",
        "ability": "Cochon dévoué",
        "descriptions": [
          "Au déploiement, Invoque Tonton avec Chakra(1) et Accélère(5s) sur la même voie que la Tsunade alliée. En atteignant une carte Tsunade alliée, lui accorde Chakra(+3) puis se retire.",
          "Au déploiement, Invoque Tonton avec Chakra(1) et Accélère(5s) sur la même voie que la Tsunade alliée. En atteignant une carte Tsunade alliée, lui accorde Chakra(+4) puis se retire."
        ]
      },
      "S3_028": {
        "name": "Tsume Inuzuka",
        "ability": "Maîtresse des chiens",
        "descriptions": [
          "Au déploiement, Invoque Kuromaru avec Chakra(3) sur une autre voie. Le prochain Chien Ninja déployé gagne Chakra(+2).",
          "Au déploiement, Invoque Kuromaru avec Chakra(3) sur une autre voie. Le prochain Chien Ninja déployé gagne Chakra(+3)."
        ]
      },
      "S3_029": {
        "name": "Akahoshi",
        "ability": "Entraînement trompeur",
        "descriptions": [
          "Chaque fois que des cartes alliées se concentrent, leur accorde Concentration(+4s). Affaiblit(1) les cartes alliées toutes les 4 secondes pendant la Concentration.",
          "Chaque fois que des cartes alliées se concentrent, leur accorde Concentration(+6s). Affaiblit(1) les cartes alliées toutes les 4 secondes pendant la Concentration."
        ]
      },
      "S3_030": {
        "name": "Amachi",
        "ability": "Boulet d'eau",
        "descriptions": [
          "Accélère(2s). Au déploiement, Affaiblit(1) la carte rivale la plus proche à Mi-distance.",
          "Accélère(3s). Au déploiement, Affaiblit(2) la carte rivale la plus proche à Mi-distance."
        ]
      },
      "S3_031": {
        "name": "Aoi Rokusho",
        "ability": "Pluie d'aiguilles",
        "descriptions": [
          "À la confrontation, Affaiblit(1) et Ralentit(3s) tous les rivaux de voie à proximité.",
          "À la confrontation, Affaiblit(1) et Ralentit(5s) tous les rivaux de voie à proximité."
        ]
      },
      "S3_032": {
        "name": "Dan Kato",
        "ability": "Rêve partagé",
        "descriptions": [
          "Chaque fois qu'une autre carte avec Rêve Partagé se retire, cette carte gagne Chakra(+1).",
          "Chaque fois qu'une autre carte avec Rêve Partagé se retire, cette carte gagne Chakra(+2)."
        ]
      },
      "S3_033": {
        "name": "Fugaku Uchiha",
        "ability": "Chef des Uchiha",
        "descriptions": [
          "Au déploiement de cartes Uchiwa alliées, elles gagnent Parade(+1) et Ralentit(6s) si elles ont 3 Chakra ou moins, sinon elles gagnent Chakra(+2) et Immobilisation(4s).",
          "Au déploiement de cartes Uchiwa alliées, elles gagnent Parade(+2) et Ralentit(6s) si elles ont 3 Chakra ou moins, sinon elles gagnent Chakra(+3) et Immobilisation(4s)."
        ]
      },
      "S3_034": {
        "name": "Fūjin",
        "ability": "Force légendaire",
        "descriptions": [
          "Parade(1). À la confrontation, Affaiblit(1) et Repousse(3).",
          "Parade(2). À la confrontation, Affaiblit(1) et Repousse(3)."
        ]
      },
      "S3_035": {
        "name": "Gamatatsu",
        "ability": "Motivé par la nourriture",
        "descriptions": [
          "Au déploiement, Se concentre(12s). Toutes les 4 secondes pendant la Concentration, dépense 1 énergie si disponible pour accorder Chakra(+2) aux autres Crapauds alliés.",
          "Au déploiement, Se concentre(16s). Toutes les 4 secondes pendant la Concentration, dépense 1 énergie si disponible pour accorder Chakra(+2) aux autres Crapauds alliés."
        ]
      },
      "S3_036": {
        "name": "Hanzaki",
        "ability": "Plan de vol",
        "descriptions": [
          "Accélère(2s). Au déploiement, Affaiblit(1) tous les alliés de voie, gagnant Chakra(+2) pour chaque allié affecté.",
          "Accélère(3s). Au déploiement, Affaiblit(1) tous les alliés de voie, gagnant Chakra(+2) pour chaque allié affecté."
        ]
      },
      "S3_037": {
        "name": "Hanzaki",
        "ability": "Estocade au Zanbato",
        "descriptions": [
          "Parade(1). Quand une carte rivale s'approche, bondit dessus puis l'Affaiblit(1) ou la Repousse(1).",
          "Parade(2). Quand une carte rivale s'approche, bondit dessus puis l'Affaiblit(1) ou la Repousse(1)."
        ]
      },
      "S3_038": {
        "name": "Idate Morino",
        "ability": "Coureur",
        "descriptions": [
          "Accélère(4s). À la confrontation, Change de voie.",
          "Accélère(5s). À la confrontation, Change de voie."
        ]
      },
      "S3_039": {
        "name": "Jirocho Wasabi",
        "ability": "Foi sincère",
        "descriptions": [
          "Le prochain allié déployé sur une autre voie gagne Accélère(2s) et Parade(1). Quand il atteint la Mi-distance, convertit l'Accélération restante en Chakra, jusqu'à 3.",
          "Le prochain allié déployé sur une autre voie gagne Accélère(3s) et Parade(1). Quand il atteint la Mi-distance, convertit l'Accélération restante en Chakra, jusqu'à 3."
        ]
      },
      "S3_040": {
        "name": "Arashi",
        "ability": "Mandala d'entrave",
        "descriptions": [
          "Au déploiement, Repousse(2) et Immobilise(8s) le rival de voie avec le plus de Chakra. Tant que ce rival subit cette Immobilisation, Affaiblit(1) la carte rivale toutes les 4 s.",
          "Au déploiement, Repousse(4) et Immobilise(8s) le rival de voie avec le plus de Chakra. Tant que ce rival subit cette Immobilisation, Affaiblit(1) la carte rivale toutes les 4 s."
        ]
      },
      "S3_041": {
        "name": "Kagerō",
        "ability": "Art ninja Kagero",
        "descriptions": [
          "Au déploiement, Affaiblit(3) deux rivaux de voie à Mi-distance, puis Change de voie avec deux alliés de voie à Courte Distance.",
          "Au déploiement, Affaiblit(4) deux rivaux de voie à Mi-distance, puis Change de voie avec deux alliés de voie à Courte Distance."
        ]
      },
      "S3_042": {
        "name": "Kyuroku Wagarashi",
        "ability": "Déshonneur",
        "descriptions": [
          "Le prochain allié de voie déployé gagne Accélération(4s). Lorsque Kyuroku se retire, cet allié Change de voie et tous les alliés de voie sont Ralentis(3s).",
          "Le prochain allié de voie déployé gagne Accélération(5s). Lorsque Kyuroku se retire, cet allié Change de voie et tous les alliés de voie sont Ralentis(3s)."
        ]
      },
      "S3_043": {
        "name": "Mikoto Uchiha",
        "ability": "Apaisement",
        "descriptions": [
          "Le prochain Sasuke déployé gagne Chakra(+1). La première fois qu'une carte Sasuke alliée passe sous son Chakra de base, la Soigne(1).",
          "Le prochain Sasuke déployé gagne Chakra(+1). La première fois qu'une carte Sasuke alliée passe sous son Chakra de base, la Soigne(2)."
        ]
      },
      "S3_044": {
        "name": "Mizuki",
        "ability": "Sceau maudit animal",
        "descriptions": [
          "À la confrontation, Affaiblit(4). Après 20 secondes, réduit son Chakra à Chakra(1) et désactive cette compétence.",
          "À la confrontation, Affaiblit(5). Après 20 secondes, réduit son Chakra à Chakra(1) et désactive cette compétence."
        ]
      },
      "S3_045": {
        "name": "Nawaki",
        "ability": "Rêve partagé",
        "descriptions": [
          "Chaque fois qu'une autre carte avec Rêve Partagé se retire, cette carte gagne Chakra(+1).",
          "Chaque fois qu'une autre carte avec Rêve Partagé se retire, cette carte gagne Chakra(+2)."
        ]
      },
      "S3_046": {
        "name": "Raiga Kurosuki",
        "ability": "Épées de foudre",
        "descriptions": [
          "Quand une carte rivale s'approche, l'Affaiblit(1) et Change sa voie.",
          "Quand une carte rivale s'approche, l'Affaiblit(2) et Change sa voie."
        ]
      },
      "S3_047": {
        "name": "Raijin",
        "ability": "Force légendaire",
        "descriptions": [
          "Parade(1). À la confrontation, Affaiblit(1) et Repousse(3).",
          "Parade(2). À la confrontation, Affaiblit(1) et Repousse(3)."
        ]
      },
      "S3_048": {
        "name": "Sumaru",
        "ability": "Guide local",
        "descriptions": [
          "Au déploiement, deux alliés à Courte Distance gagnent Accélère(3s).",
          "Au déploiement, trois alliés à Courte Distance gagnent Accélère(3s)."
        ]
      },
      "S3_049": {
        "name": "Yoshino Nara",
        "ability": "Sévérité",
        "descriptions": [
          "Le prochain Shikamaru déployé gagne Chakra(+1) et Ralentit(8s).",
          "Le prochain Shikamaru déployé gagne Chakra(+1) et Ralentit(12s)."
        ]
      },
      "S3_050": {
        "name": "Uchiha Trio",
        "ability": "Soupçon",
        "descriptions": [
          "Accélère(4s). Lorsqu'elle est à Mi-distance, Chakra(+2).",
          "Accélère(6s). Lorsqu'elle est à Mi-distance, Chakra(+2)."
        ]
      },
      "S3_051": {
        "name": "Naruto Uzumaki",
        "ability": "Manteau du renard démoniaque",
        "descriptions": [
          "Accélère(3s). Au déploiement, Chakra(+2). La première fois que cette carte passe sous son Chakra de base, Soigne(2).",
          "Accélère(5s). Au déploiement, Chakra(+2). La première fois que cette carte passe sous son Chakra de base, Soigne(2)."
        ]
      },
      "S3_052": {
        "name": "Sasuke Uchiha",
        "ability": "Libération du sceau maudit",
        "descriptions": [
          "La première fois que cette carte gagne du Chakra, gagne Chakra(+2) supplémentaire.",
          "La première fois que cette carte gagne du Chakra, gagne Chakra(+4) supplémentaire."
        ]
      },
      "S3_053": {
        "name": "Kankuro",
        "ability": "Supériorité tactique",
        "descriptions": [
          "Chaque fois que des alliés se téléportent derrière des rivaux, gagne Chakra(+2).",
          "Chaque fois que des alliés se téléportent derrière des rivaux, gagne Chakra(+3)."
        ]
      },
      "S3_054": {
        "name": "Shikamaru Nara",
        "ability": "Étranglement de l'ombre",
        "descriptions": [
          "Quand un adversaire s'approche, l'Immobilise(6s) ainsi que cette carte. L'adversaire perd 1 Chakra toutes les 2 secondes tant qu'il subit cette Immobilisation.",
          "Quand un adversaire s'approche, l'Immobilise(8s) ainsi que cette carte. L'adversaire perd 1 Chakra toutes les 2 secondes tant qu'il subit cette Immobilisation."
        ]
      },
      "S3_055": {
        "name": "Akamaru",
        "ability": "Marquage",
        "descriptions": [
          "Au déploiement, Ralentit(8s) tous les rivaux de voie. Tant que ce Ralentissement est actif, Affaiblissement(+1) aux compétences Affaiblir alliées appliquées aux rivaux affectés.",
          "Au déploiement, Ralentit(12s) tous les rivaux de voie. Tant que ce Ralentissement est actif, Affaiblissement(+1) aux compétences Affaiblir alliées appliquées aux rivaux affectés."
        ]
      },
      "S3_056": {
        "name": "Itachi Uchiha",
        "ability": "Sang-froid",
        "descriptions": [
          "Gagne Chakra(+1) et s'Immobilise(2s) chaque fois qu'une carte gagne la Concentration.",
          "Gagne Chakra(+2) et s'Immobilise(4s) chaque fois qu'une carte gagne la Concentration."
        ]
      },
      "S3_057": {
        "name": "Jiraiya",
        "ability": "Aguerri",
        "descriptions": [
          "Accélère(3s). À la confrontation, Change de voie.",
          "Accélère(4s). À la confrontation, Change de voie."
        ]
      },
      "S3_058": {
        "name": "Jiraiya",
        "ability": "Jizo d'aiguilles",
        "descriptions": [
          "Parade(2). Quand Parade s'active, Affaiblit(2) le rival qui l'a déclenchée. Ignore Parade.",
          "Parade(3). Quand Parade s'active, Affaiblit(2) le rival qui l'a déclenchée. Ignore Parade."
        ]
      },
      "S3_059": {
        "name": "Orochimaru",
        "ability": "Aguerri",
        "descriptions": [
          "Accélère(3s). À la confrontation, Affaiblit(1).",
          "Accélère(4s). À la confrontation, Affaiblit(1)."
        ]
      },
      "S3_060": {
        "name": "Tsunade",
        "ability": "La Cinquième",
        "descriptions": [
          "Au déploiement, donne Chakra(+1) à tous les alliés des autres voies. Tant que cette carte est active, Soigne(2) chaque allié la première fois qu'il est Affaibli.",
          "Au déploiement, donne Chakra(+2) à tous les alliés des autres voies. Tant que cette carte est active, Soigne(2) chaque allié la première fois qu'il est Affaibli."
        ]
      },
      "S3_061": {
        "name": "Tsunade",
        "ability": "Cible facile légendaire",
        "descriptions": [
          "Au déploiement, 10 % de chances de gagner Chakra(+6). Sinon, gagne Accélère(3s).",
          "Au déploiement, 10 % de chances de gagner Chakra(+7). Sinon, gagne Accélère(4s)."
        ]
      },
      "S3_062": {
        "name": "Tsunade",
        "ability": "Soin désespéré",
        "descriptions": [
          "Au déploiement, Soigne(2) l'allié de voie le plus proche. La première fois qu'un allié de voie perd du Chakra, quelle qu'en soit la source, le Soigne(2).",
          "Au déploiement, Soigne(3) l'allié de voie le plus proche. La première fois qu'un allié de voie perd du Chakra, quelle qu'en soit la source, le Soigne(3)."
        ]
      },
      "S3_063": {
        "name": "Gamabunta",
        "ability": "Kenjutsu du crapaud",
        "descriptions": [
          "Quand une carte rivale s'approche, bondit dessus et l'Affaiblit(2). Gagne Accélère(+3s) la première fois qu'elle gagne du Chakra.",
          "Quand une carte rivale s'approche, bondit dessus et l'Affaiblit(3). Gagne Accélère(+4s) la première fois qu'elle gagne du Chakra."
        ]
      },
      "S3_064": {
        "name": "Kabuto Yakuchi",
        "ability": "Scalpel de Chakra",
        "descriptions": [
          "Accélère(2s). À la confrontation, Téléporte derrière la carte rivale et l'Immobilise définitivement.",
          "Accélère(3s). À la confrontation, Téléporte derrière la carte rivale et l'Immobilise définitivement."
        ]
      },
      "S3_065": {
        "name": "Kisame Hoshigaki",
        "ability": "Parade de Samehada",
        "descriptions": [
          "Parade(3). Quand Parade s'active, Affaiblit(1) le rival qui l'a déclenchée et gagne Chakra(+1).",
          "Parade(4). Quand Parade s'active, Affaiblit(1) le rival qui l'a déclenchée et gagne Chakra(+1)."
        ]
      },
      "S3_066": {
        "name": "Jirobo",
        "ability": "Drain de Chakra",
        "descriptions": [
          "À chaque confrontation, Chakra(+1) pour cette carte et Affaiblit(1) la carte rivale.",
          "À chaque confrontation, Chakra(+1) pour cette carte et Affaiblit(2) la carte rivale."
        ]
      },
      "S3_067": {
        "name": "Sakon & Ukon",
        "ability": "Fusion maudite",
        "descriptions": [
          "À la confrontation, Téléporte derrière la carte rivale puis l'Immobilise(6s) ainsi que cette carte. Le rival perd 1 Chakra toutes les 2 secondes tant qu'il subit cette Immobilisation.",
          "À la confrontation, Téléporte derrière la carte rivale puis l'Immobilise(8s) ainsi que cette carte. Le rival perd 1 Chakra toutes les 2 secondes tant qu'il subit cette Immobilisation."
        ]
      },
      "S3_068": {
        "name": "Kurenai Yuhi",
        "ability": "Feinte de genjutsu",
        "descriptions": [
          "À la confrontation, Téléporte derrière la carte rivale, l'Affaiblit(2) et la Ralentit(4s).",
          "À la confrontation, Téléporte derrière la carte rivale, l'Affaiblit(2) et la Ralentit(8s)."
        ]
      },
      "S3_069": {
        "name": "Shizune",
        "ability": "Brume empoisonnée",
        "descriptions": [
          "Au déploiement, Ralentit(8s) toutes les cartes à Mi-distance et désactive leurs compétences. Elles perdent 2 Chakra toutes les 4 secondes tant qu'elles subissent ce Ralentissement.",
          "Au déploiement, Ralentit(12s) toutes les cartes à Mi-distance et désactive leurs compétences. Elles perdent 2 Chakra toutes les 4 secondes tant qu'elles subissent ce Ralentissement."
        ]
      },
      "S3_070": {
        "name": "Akahoshi",
        "ability": "Sans scrupules",
        "descriptions": [
          "Parade(1). Quand Parade s'active, Affaiblit(2) le rival qui l'a activée. La première fois que cette carte perd du Chakra, Affaiblit(2) un allié aléatoire et gagne Chakra(+2) et Parade(+1).",
          "Parade(1). Quand Parade s'active, Affaiblit(2) le rival qui l'a activée. La première fois que cette carte perd du Chakra, Affaiblit(2) un allié aléatoire et gagne Chakra(+3) et Parade(+1)."
        ]
      },
      "S3_071": {
        "name": "Amachi",
        "ability": "Monstre marin",
        "descriptions": [
          "Au déploiement, s'Immobilise(6s). Tant qu'elle subit l'Immobilisation, toutes les 3 secondes Immobilise(3s) ou Ralentit(6s) tous les rivaux de voie.",
          "Au déploiement, s'Immobilise(9s). Tant qu'elle subit l'Immobilisation, toutes les 3 secondes Immobilise(3s) ou Ralentit(6s) tous les rivaux de voie."
        ]
      },
      "S3_072": {
        "name": "Aoi Rokusho",
        "ability": "Épée de Raijin",
        "descriptions": [
          "Parade(2). À la confrontation, Affaiblit(1) et Immobilise(2s) la carte rivale. Ignore Parade.",
          "Parade(2). À la confrontation, Affaiblit(2) et Immobilise(4s) la carte rivale. Ignore Parade."
        ]
      },
      "S3_073": {
        "name": "Sumaru",
        "ability": "Chakra de l'étoile",
        "descriptions": [
          "Au déploiement, Chakra(+1) et Change de voie s'il y a des alliés de voie. À la confrontation, Affaiblit(2) la carte rivale.",
          "Au déploiement, Chakra(+1) et Change de voie s'il y a des alliés de voie. À la confrontation, Affaiblit(3) la carte rivale."
        ]
      },
      "S3_074": {
        "name": "Naruto Uzumaki",
        "ability": "Rasengan",
        "descriptions": [
          "À la confrontation, Affaiblit(2) et Repousse(4). Retire toute Parade de la carte rivale.",
          "À la confrontation, Affaiblit(3) et Repousse(5). Retire toute Parade de la carte rivale."
        ]
      },
      "S3_075": {
        "name": "Naruto Uzumaki",
        "ability": "Forme à une queue",
        "descriptions": [
          "À chaque confrontation, Affaiblit(1). La première fois que cette carte passe sous son Chakra de base, se Soigne(3).",
          "À chaque confrontation, Affaiblit(1). La première fois que cette carte passe sous son Chakra de base, se Soigne(4)."
        ]
      },
      "S3_076": {
        "name": "Sasuke Uchiha",
        "ability": "Prédiction évoluée",
        "descriptions": [
          "Parade(3). Quand Parade s'active, Chakra(+1). Ne peut pas être Affaibli lors des confrontations avec des cartes rivales de 3 Chakra ou moins.",
          "Parade(3). Quand Parade s'active, Chakra(+2). Ne peut pas être Affaibli lors des confrontations avec des cartes rivales de 3 Chakra ou moins."
        ]
      },
      "S3_077": {
        "name": "Sasuke Uchiha",
        "ability": "Défense ailée",
        "descriptions": [
          "Parade(2). À la confrontation, Affaiblit(2). Quand Parade s'active, gagne Accélère(2s) et réactive cette compétence.",
          "Parade(2). À la confrontation, Affaiblit(2). Quand Parade s'active, gagne Accélère(4s) et réactive cette compétence."
        ]
      },
      "S3_078": {
        "name": "Gaara",
        "ability": "Bouclier de Shukaku",
        "descriptions": [
          "Parade(3). Tant que cette carte est active, les alliés de voie derrière elle ignorent les effets de compétence rivaux mais consomment la Parade de cette carte.",
          "Parade(4). Tant que cette carte est active, les alliés de voie derrière elle ignorent les effets de compétence rivaux mais consomment la Parade de cette carte."
        ]
      },
      "S3_079": {
        "name": "Kiba Inuzuka",
        "ability": "Combo de transformation",
        "descriptions": [
          "Au déploiement, retire Akamaru et Kiba alliés et transfère leur Chakra à cette carte, gagnant Chakra(+1) supplémentaire par retrait. À chaque confrontation, Affaiblit(1).",
          "Au déploiement, retire Akamaru et Kiba alliés et transfère leur Chakra à cette carte, gagnant Chakra(+2) supplémentaire par retrait. À chaque confrontation, Affaiblit(1)."
        ]
      },
      "S3_080": {
        "name": "Rock Lee",
        "ability": "Poing de l'homme ivre",
        "descriptions": [
          "Toutes les 10s, se Concentre(3s). Si la Concentration réussit, gagne aléatoirement Accélère(2s), Parade(1) ou Chakra(+1). À chaque confrontation, Affaiblit(1).",
          "Toutes les 8s, se Concentre(3s). Si la Concentration réussit, gagne aléatoirement Accélère(2s), Parade(1) ou Chakra(+1). À chaque confrontation, Affaiblit(1)."
        ]
      },
      "S3_081": {
        "name": "Temari",
        "ability": "Danse de décapitation rapide",
        "descriptions": [
          "Au déploiement, Se concentre(9s). Toutes les 3 secondes pendant la Concentration, Affaiblit(1) et Repousse(2) tous les rivaux à Mi- et Longue distance.",
          "Au déploiement, Se concentre(9s). Toutes les 3 secondes pendant la Concentration, Affaiblit(1) et Repousse(4) tous les rivaux à Mi- et Longue distance."
        ]
      },
      "S3_082": {
        "name": "Itachi Uchiha",
        "ability": "Armée de Tsukuyomi",
        "descriptions": [
          "Tant que cette carte est active, chaque fois que tu Immobilises des cartes rivales, Invoque un clone de cette carte sur cette même voie avec Accélère(4s) et perd 1 Chakra. Les clones ne peuvent pas marquer de points ni gagner de Chakra.",
          "Tant que cette carte est active, chaque fois que tu Immobilises des cartes rivales, Invoque un clone de cette carte sur cette même voie avec Accélère(6s) et perd 1 Chakra. Les clones ne peuvent pas marquer de points ni gagner de Chakra."
        ]
      },
      "S3_083": {
        "name": "Itachi Uchiha",
        "ability": "Fuite d'Amaterasu",
        "descriptions": [
          "Chaque fois qu'une carte rivale s'approche, la Brûle(10), puis Change de voie et perd 1 Chakra. Cet effet de Brûlure peut se propager aux autres cartes à leur contact et ignore Parade.",
          "Chaque fois qu'une carte rivale s'approche, la Brûle(15), puis Change de voie et perd 1 Chakra. Cet effet de Brûlure peut se propager aux autres cartes à leur contact et ignore Parade."
        ]
      },
      "S3_084": {
        "name": "Jiraiya",
        "ability": "Lance-flammes à l'huile de crapaud",
        "descriptions": [
          "Au déploiement, Brûle(3) toutes les cartes rivales puis Se concentre(8s). Pendant la Concentration, gagne Chakra(+1) chaque fois que des alliés appliquent Brûlure. Si la Concentration réussit, Brûle(4) toutes les cartes rivales.",
          "Au déploiement, Brûle(3) toutes les cartes rivales puis Se concentre(8s). Pendant la Concentration, gagne Chakra(+1) chaque fois que des alliés appliquent Brûlure. Si la Concentration réussit, Brûle(5) toutes les cartes rivales."
        ]
      },
      "S3_085": {
        "name": "Gamabunta",
        "ability": "Combo à l'huile de crapaud",
        "descriptions": [
          "Au déploiement, Brûle(3) tous les rivaux de voie. Si des rivaux subissent déjà Brûlure, déclenche instantanément le montant de Brûlure restant.",
          "Au déploiement, Brûle(4) tous les rivaux de voie. Si des rivaux subissent déjà Brûlure, déclenche instantanément le montant de Brûlure restant."
        ]
      },
      "S3_086": {
        "name": "Kidomaru",
        "ability": "Arc d'araignée",
        "descriptions": [
          "Au déploiement, Se concentre(12s). Toutes les 4 secondes pendant la Concentration, Affaiblit(2) et Immobilise(6s) le rival avec le plus de Chakra à Longue Distance.",
          "Au déploiement, Se concentre(16s). Toutes les 4 secondes pendant la Concentration, Affaiblit(2) et Immobilise(6s) le rival avec le plus de Chakra à Longue Distance."
        ]
      },
      "S3_087": {
        "name": "Tayuya",
        "ability": "Flûte démoniaque",
        "descriptions": [
          "Au déploiement, Chakra(+1). Tant que cette carte est active, les Ralentissements appliqués par des alliés n'expirent pas.",
          "Au déploiement, Chakra(+2). Tant que cette carte est active, les Ralentissements appliqués par des alliés n'expirent pas."
        ]
      },
      "S3_088": {
        "name": "Kimimaro",
        "ability": "Arme vivante",
        "descriptions": [
          "Parade(3). À chaque confrontation, Affaiblit(2). Change de voie lorsqu'elle fait se retirer un rival.",
          "Parade(5). À chaque confrontation, Affaiblit(2). Change de voie lorsqu'elle fait se retirer un rival."
        ]
      },
      "S3_089": {
        "name": "Akahoshi",
        "ability": "Dragon de l'étoile",
        "descriptions": [
          "Au déploiement, Repousse(2), Affaiblit(1) et Immobilise(4s) tous les rivaux de voie.",
          "Au déploiement, Repousse(2), Affaiblit(1) et Immobilise(8s) tous les rivaux de voie."
        ]
      },
      "S3_090": {
        "name": "Raiga Kurosuki",
        "ability": "Tornade du dragon de foudre",
        "descriptions": [
          "Au déploiement, Se concentre(8s). Si la Concentration réussit, Affaiblit(3) et Repousse(2) tous les rivaux de voie à Courte et Mi-distance.",
          "Au déploiement, Se concentre(6s). Si la Concentration réussit, Affaiblit(3) et Repousse(2) tous les rivaux de voie à Courte et Mi-distance."
        ]
      },
      "S3_091": {
        "name": "Sasuke Uchiha",
        "ability": "Chidori noir",
        "descriptions": [
          "Accélère(4s). Saute sur la première carte rivale qui s'approche, gagne Chakra(+2) et l'Affaiblit(3). Affaiblit(2) toutes les autres cartes à proximité. Ignore Parade.",
          "Accélère(5s). Saute sur la première carte rivale qui s'approche, gagne Chakra(+2) et l'Affaiblit(4). Affaiblit(2) toutes les autres cartes à proximité. Ignore Parade."
        ]
      },
      "S3_092": {
        "name": "Naruto Uzumaki",
        "ability": "Rasengan du renard démoniaque",
        "descriptions": [
          "Accélère(4s). Saute sur la première carte rivale qui s'approche, l'Affaiblit(3) et la Repousse(2). Affaiblit(2) toutes les autres cartes à proximité. Retire toute la Parade de la carte adverse.",
          "Accélère(5s). Saute sur la première carte rivale qui s'approche, l'Affaiblit(4) et la Repousse(2). Affaiblit(2) toutes les autres cartes à proximité. Retire toute la Parade de la carte adverse."
        ]
      },
      "S3_093": {
        "name": "Choji Akimichi",
        "ability": "Fureur du papillon",
        "descriptions": [
          "Parade(3). Quand Parade s'active, Chakra(+2). Si la carte rivale qui a déclenché Parade est à proximité, bondit dessus. Tant que Parade est disponible, Affaiblit(2) et Repousse(1) à chaque confrontation.",
          "Parade(3). Quand Parade s'active, Chakra(+3). Si la carte rivale qui a déclenché Parade est à proximité, bondit dessus. Tant que Parade est disponible, Affaiblit(2) et Repousse(1) à chaque confrontation."
        ]
      },
      "S3_094": {
        "name": "Gaara",
        "ability": "Tsunami de sable",
        "descriptions": [
          "Au déploiement, Se concentre(6s). Toutes les 2 secondes pendant la Concentration, Affaiblit(1) et Repousse(1) toutes les cartes rivales. Si elles ont 2 Chakra ou moins, Affaiblit(2) à la place. Lorsque cette carte en fait se retirer une autre, la Scelle(5s).",
          "Au déploiement, Se concentre(8s). Toutes les 2 secondes pendant la Concentration, Affaiblit(1) et Repousse(1) toutes les cartes rivales. Si elles ont 3 Chakra ou moins, Affaiblit(3) à la place. Lorsque cette carte en fait se retirer une autre, la Scelle(5s)."
        ]
      },
      "S3_095": {
        "name": "Itachi Uchiha",
        "ability": "Tsukuyomi",
        "descriptions": [
          "Au déploiement, Immobilise(12s) la carte rivale la plus proche, puis perd 1 Chakra. Si la carte rivale a plus de 1 Chakra, elle perd 1 Chakra par seconde. Chaque fois que des alliés Immobilisent des cartes rivales, redéclenche cette compétence pour chaque rival affecté.",
          "Au déploiement, Immobilise(16s) la carte rivale la plus proche, puis perd 1 Chakra. Si la carte rivale a plus de 1 Chakra, elle perd 1 Chakra par seconde. Chaque fois que des alliés Immobilisent des cartes rivales, redéclenche cette compétence pour chaque rival affecté."
        ]
      },
      "S3_096": {
        "name": "Itachi Uchiha",
        "ability": "Carnage",
        "descriptions": [
          "Chaque fois qu'une carte est déployée sur la même voie, l'Affaiblit(1) et l'Immobilise(10s). Si elle a 3 Chakra ou moins, l'Affaiblit(3) à la place. Change de voie ensuite.",
          "Chaque fois qu'une carte est déployée sur la même voie, l'Affaiblit(2) et l'Immobilise(10s). Si elle a 4 Chakra ou moins, l'Affaiblit(4) à la place. Change de voie ensuite."
        ]
      },
      "S3_097": {
        "name": "Tsunade",
        "ability": "Régénération mitotique",
        "descriptions": [
          "La première fois que cette carte descend sous son Chakra de base, Soigne jusqu'au Chakra de base et gagne Chakra(+4). Pendant les 10 secondes suivantes, ignore les compétences adverses et Soigne(4) après chaque confrontation. Au retrait, réduit définitivement son Chakra de base de 1.",
          "La première fois que cette carte descend sous son Chakra de base, Soigne jusqu'au Chakra de base et gagne Chakra(+5). Pendant les 10 secondes suivantes, ignore les compétences adverses et Soigne(4) après chaque confrontation. Au retrait, réduit définitivement son Chakra de base de 1."
        ]
      },
      "S3_098": {
        "name": "Sakon & Ukon",
        "ability": "Défense synchronisée",
        "descriptions": [
          "Se déploie en Sakon et Ukon sur des voies distinctes avec Parade(2). Chaque fois que la Parade d'un allié s'active, les deux cartes gagnent Chakra(+1).",
          "Se déploie en Sakon et Ukon sur des voies distinctes avec Parade(4). Chaque fois que la Parade d'un allié s'active, les deux cartes gagnent Chakra(+1)."
        ]
      },
      "S3_099": {
        "name": "Tayuya",
        "ability": "Invocation des Doki",
        "descriptions": [
          "Au déploiement, Se concentre(8s). Si la Concentration réussit, Invoque un démon Doki sur chaque voie. Chaque fois que tu Invoques d'autres cartes, elles gagnent Chakra(+1). Ignore toutes les compétences et confrontations rivales tant que les démons sont actifs.",
          "Au déploiement, Se concentre(6s). Si la Concentration réussit, Invoque un démon Doki sur chaque voie. Chaque fois que tu Invoques d'autres cartes, elles gagnent Chakra(+1). Ignore toutes les compétences et confrontations rivales tant que les démons sont actifs."
        ]
      },
      "S3_100": {
        "name": "Kimimaro",
        "ability": "Loyauté inébranlable",
        "descriptions": [
          "Au déploiement, gagne Chakra(+6) et Accélère(5s). Parade permanente tant que l'Accélération est active. À chaque confrontation, s'Affaiblit(1) et Affaiblit(3) la carte rivale. Au retrait, Affaiblit(2) toutes les cartes. Ne peut pas être affectée par les compétences alliées.",
          "Au déploiement, gagne Chakra(+8) et Accélère(6s). Parade permanente tant que l'Accélération est active. À chaque confrontation, s'Affaiblit(1) et Affaiblit(3) la carte rivale. Au retrait, Affaiblit(2) toutes les cartes. Ne peut pas être affectée par les compétences alliées."
        ]
      }
    },
    "ruleNotes": {
      "S2_041": "{allies} alliés du personnage requis ; la composition du deck n'est pas vérifiée.",
      "S1_004": "Effets de confrontation appliqués sur {activations} confrontations.",
      "S1_005": "Effets de confrontation appliqués sur {activations} confrontations.",
      "S1_008": "Effets de confrontation appliqués sur {activations} confrontations.",
      "S1_010": "Effets de confrontation appliqués sur {activations} confrontations.",
      "S1_023": "Effets de confrontation appliqués sur {activations} confrontations.",
      "S1_030": "Effets de confrontation appliqués sur {activations} confrontations.",
      "S1_035": "Effets de confrontation appliqués sur {activations} confrontations.",
      "S2_007": "Effets de confrontation appliqués sur {activations} confrontations.",
      "S2_025": "Effets de confrontation appliqués sur {activations} confrontations.",
      "S2_030": "Effets de confrontation appliqués sur {activations} confrontations.",
      "S2_042": "Effets de confrontation appliqués sur {activations} confrontations.",
      "S2_052": "Effets de confrontation appliqués sur {activations} confrontations.",
      "S2_053": "Effets de confrontation appliqués sur {activations} confrontations.",
      "S2_063": "Effets de confrontation appliqués sur {activations} confrontations.",
      "S3_004": "Effets de confrontation appliqués sur {activations} confrontations.",
      "S3_023": "Effets de confrontation appliqués sur {activations} confrontations.",
      "S3_024": "Effets de confrontation appliqués sur {activations} confrontations.",
      "S3_034": "Effets de confrontation appliqués sur {activations} confrontations.",
      "S3_044": "Une confrontation avant 20s ; le retour ultérieur à Chakra(1) est exclu du maximum. Les effets sans répétition explicite s'appliquent une fois.",
      "S3_047": "Effets de confrontation appliqués sur {activations} confrontations.",
      "S3_059": "Effets de confrontation appliqués sur {activations} confrontations.",
      "S3_068": "Effets de confrontation appliqués sur {activations} confrontations.",
      "S3_072": "Effets de confrontation appliqués sur {activations} confrontations.",
      "S3_074": "Effets de confrontation appliqués sur {activations} confrontations.",
      "S1_003": "Une nouvelle unité avec le Chakra indiqué.",
      "S1_019": "{allies} cibles/événements du groupe indiqué ; conditions favorables.",
      "S1_046": "{allies} cibles/événements du groupe indiqué ; conditions favorables.",
      "S1_062": "{allies} cibles/événements du groupe indiqué ; conditions favorables.",
      "S1_073": "{allies} cibles/événements du groupe indiqué ; conditions favorables.",
      "S2_015": "{allies} cibles/événements du groupe indiqué ; conditions favorables.",
      "S2_022": "{allies} cibles/événements du groupe indiqué ; conditions favorables.",
      "S2_073": "{allies} cibles/événements du groupe indiqué ; conditions favorables.",
      "S2_083": "{allies} cibles/événements du groupe indiqué ; conditions favorables.",
      "S3_002": "{allies} cibles/événements du groupe indiqué ; conditions favorables.",
      "S1_020": "Les dégâts à un allié sont soustraits.",
      "S1_021": "3 alliés.",
      "S1_022": "3 alliés.",
      "S1_024": "Le nombre d'alliés indiqué pour ce niveau.",
      "S1_033": "Un bonus : Akamaru ou cette carte. Le rappel depuis le deck ne double pas la puissance de base.",
      "S1_038": "Le nombre d'alliés indiqué pour ce niveau.",
      "S1_053": "{enemies} adversaires touchés.",
      "S1_069": "{enemies} adversaires touchés.",
      "S1_074": "{enemies} adversaires touchés.",
      "S1_079": "{enemies} adversaires touchés.",
      "S1_081": "{enemies} adversaires touchés.",
      "S2_008": "{enemies} adversaires touchés.",
      "S2_076": "{enemies} adversaires dans une confrontation. Les effets sans répétition explicite s'appliquent une fois.",
      "S2_088": "{enemies} adversaires touchés.",
      "S3_017": "{enemies} adversaires touchés.",
      "S3_031": "{enemies} adversaires dans une confrontation. Les effets sans répétition explicite s'appliquent une fois.",
      "S3_089": "{enemies} adversaires touchés.",
      "S3_090": "{enemies} adversaires touchés.",
      "S1_056": "L'option avec un bonus numérique est utilisée. Rappeler Hiruzen n'ajoute pas sa puissance une deuxième fois.",
      "S1_060": "Carte rappelée du deck : sa puissance est déjà incluse, aucune nouvelle unité n'est comptée.",
      "S1_083": "Meilleure option conditionnelle : {enemies} adversaires et {allies} alliés, sans gain net.",
      "S2_002": "{enemies} adversaires avec un Chakra supérieur.",
      "S2_016": "Trois nouvelles unités avec Chakra(1) ; le recyclage de la carte n'est pas simulé.",
      "S2_018": "Un allié pour chacun des deux noms ; les identités requises ne sont pas vérifiées.",
      "S2_019": "Un allié pour chacun des deux noms ; les identités requises ne sont pas vérifiées.",
      "S2_020": "Un allié pour chacun des deux noms ; les identités requises ne sont pas vérifiées.",
      "S2_032": "Bonus au Crapaud rappelé ; sa puissance est déjà incluse dans le deck.",
      "S2_037": "Le Chakra des Anbu n'est pas indiqué : l'Invocation n'est pas quantifiée.",
      "S2_038": "Option de bonus à faible Chakra ; la carte invoquée depuis le deck n'est pas comptée deux fois.",
      "S2_039": "Un ou deux adversaires, selon le niveau.",
      "S2_040": "{enemies} adversaires et {allies} alliés touchés au retrait ; aucun gain net.",
      "S2_054": "Divise le Chakra adverse par deux selon le Chakra configuré pour la cible.",
      "S2_058": "Le contrôle temporaire d'un adversaire n'est pas converti en puissance.",
      "S2_064": "Le contrôle temporaire d'un adversaire n'est pas converti en puissance.",
      "S2_062": "Un ou deux adversaires, selon le niveau.",
      "S2_067": "Nombre explicite de cibles ; un déploiement et un retrait.",
      "S2_070": "Une confrontation ; bonus à {allies} alliés une fois au retrait. Les effets sans répétition explicite s'appliquent une fois.",
      "S2_071": "3 coups dans une confrontation. Les effets sans répétition explicite s'appliquent une fois.",
      "S2_072": "{enemies} adversaires et {allies} alliés : les dégâts alliés compensent les dégâts adverses.",
      "S2_080": "{enemies} adversaires et {allies} alliés : les dégâts alliés compensent les dégâts adverses.",
      "S2_074": "{enemies} adversaires proches dans une confrontation. Les effets sans répétition explicite s'appliquent une fois.",
      "S2_077": "Copie d'une carte alliée, sans ajout de puissance au total du deck.",
      "S2_086": "Les dégâts aux deux alliés sont soustraits ; le rappel depuis le deck n'est pas compté deux fois et les sacrifices ne sont pas simulés.",
      "S2_089": "La Brûlure est comptée comme des dégâts totaux égaux à sa valeur.",
      "S2_091": "Bonus unique. L'augmentation de base au retrait concerne la vie suivante et n'est pas ajoutée.",
      "S2_097": "Deux événements distincts, chacun contre {enemies} adversaires ; la Brûlure est comptée en dégâts totaux.",
      "S3_027": "Nouveau Tonton et bonus à Tsunade ; la présence et la survie de Tsunade ne sont pas simulées.",
      "S3_028": "Nouveau Kuromaru et bonus au prochain Chien Ninja.",
      "S3_036": "{allies} alliés subissent 1 dégât ; cette carte gagne 2 pour chacun.",
      "S3_041": "Deux adversaires.",
      "S3_043": "Bonus au prochain Sasuke et un Soin ultérieur.",
      "S3_051": "Bonus initial et un Soin.",
      "S3_060": "Les alliés configurés sont supposés sur d'autres voies et touchés pour la première fois : un bonus et un Soin par allié.",
      "S3_062": "Un Soin initial et le premier Soin réactif.",
      "S3_073": "Bonus initial et dégâts dans une confrontation. Les effets sans répétition explicite s'appliquent une fois.",
      "S3_085": "{enemies} adversaires ; la Brûlure existante n'est pas comptée sans valeur connue.",
      "S3_091": "Première cible, bonus et dégâts à 5 autres adversaires et {allies} alliés. Le terme « autres cartes » est ambigu.",
      "S3_092": "La première cible est touchée séparément ; les dégâts aux autres cartes l'excluent et incluent tous les alliés configurés.",
      "S3_039": "Conversion favorable de l'Accélération initiale restante : 2/3 Chakra aux niveaux 1/2, maximum 3 ; aucun bonus externe simulé."
    },
    "calculation": {
      "effectC": "bonus de Chakra",
      "effectW": "Affaiblissement",
      "effectH": "Soin",
      "effectB": "Brûlure par cible",
      "effectK": "Chakra invoqué",
      "amount": "{value} {effect}",
      "burnTotal": "{value} Brûlure par cible, durée totale limitée par le Chakra adverse",
      "copy": "{value} Chakra de la copie",
      "restore": "{value} Soins de 1 Chakra au Chakra de base",
      "rush": "{value} Chakra de l'Accélération restante (maximum 3)",
      "enemies": {
        "one": "{value} adversaire",
        "other": "{value} adversaires"
      },
      "otherEnemies": "{value} autres adversaires, première cible exclue",
      "allies": {
        "one": "{value} allié",
        "other": "{value} alliés"
      },
      "first": "{value} première activation",
      "remaining": {
        "one": "{value} activation suivante",
        "other": "{value} activations suivantes"
      },
      "activations": {
        "one": "{value} activation",
        "other": "{value} activations"
      },
      "enemyChakra": "{value} Chakra adverse",
      "targets": {
        "one": "{value} cible",
        "other": "{value} cibles"
      },
      "drain": "{value} Chakra retiré sans descendre sous 1",
      "removable": "{value} Chakra retirable",
      "bestBranch": "meilleure option : {label}",
      "unquantified": "Contribution numérique pas encore quantifiée.",
      "repeated": "Effet appliqué sur {activations} activations.",
      "once": "Effet de confrontation compté une fois ; seuls les effets indiquant chaque confrontation sont répétés.",
      "favourable": "Conditions favorables supposées. Les synergies entre cartes ne sont pas simulées.",
      "tactical": "Effet tactique sans bonus numérique de Chakra, dégâts ou Soins.",
      "halving": "La division par deux utilise le Chakra adverse configuré ; l'arrondi exact en jeu reste à confirmer.",
      "burnNote": "Brûlure : cibles touchées × min(durée en secondes, Chakra adverse). La propagation est limitée aux cibles adverses configurées ; les applications multiples ne comptent pas deux fois les mêmes points de Chakra.",
      "allCards": "Effet sur toutes les cartes : {enemies} adversaires et {allies} alliés. Les dégâts alliés, limités au Chakra allié par application, réduisent la Puissance.",
      "ebisu": "Bonus et pénalités selon le nombre d'alliés configuré ; la survie de la carte n'est pas simulée."
    },
    "errors": {
      "invalidJson": "Le fichier ne contient pas de JSON de deck valide.",
      "invalidDeck": "Fichier de deck invalide.",
      "invalidCards": "Vérifiez les cartes, les doublons et les niveaux du fichier.",
      "invalidOptions": "Options de calcul invalides.",
      "invalidValues": "Valeurs d'hypothèses invalides.",
      "invalidOverrides": "Réglages individuels de carte invalides.",
      "missingCard": "Les hypothèses font référence à une carte absente du deck.",
      "fileTooLarge": "Le fichier est trop volumineux.",
      "importFailed": "Impossible d'importer le deck.",
      "invalidRule": "Règle invalide : {id}, niveau {level}, {factor}",
      "invalidFactor": "Facteur invalide : {factor}"
    },
    "normalizations": [],
    "flag": "fr"
  },
  "pt": {
    "name": "Português",
    "locale": "pt-PT",
    "ui": {
      "synergies": "Sinergias",
      "synergyPartners": "Cartas com sinergia com {name}",
      "synergySources": "Cartas com as mesmas combinações",
      "loadMore": "Mostrar mais",
      "backToTop": "Voltar ao topo",
      "details": "Detalhes",
      "collapseSidebar": "Recolher barra lateral",
      "expandSidebar": "Expandir barra lateral",
      "sortBy": "Ordenar por:",
      "toolbarModes": "Modos da barra",
      "collapseToolbar": "Recolher barra",
      "expandToolbar": "Expandir barra",
      "pageTitle": "Naruto · Cartas e decks",
      "brand": "Naruto · Criador de decks",
      "heading": "Cartas e decks",
      "database": "Banco de cartas",
      "builder": "Montar deck",
      "sections": "Seções",
      "language": "Idioma",
      "filters": "Filtrar cartas",
      "searchFilters": "Pesquisa e filtros",
      "textOrIndex": "Texto ou número",
      "searchPlaceholder": "Pesquisar",
      "rarity": "Raridade",
      "season": "Série",
      "skillType": "Tipo de habilidade",
      "cost": "Custo",
      "chakra": "Chakra",
      "minPower": "Poder mín.",
      "minimum": "min",
      "cardLevel": "Nível da carta",
      "sort": "Ordenar",
      "sortCards": "Ordenar cartas",
      "index": "Número",
      "alphabetical": "Nome",
      "quality": "Qualidade",
      "power": "Poder",
      "resetFilters": "Limpar filtros",
      "allFeminine": "Todas",
      "all": "Todos",
      "none": "Sem tipo",
      "common": "Comum",
      "rare": "Rara",
      "epic": "Épica",
      "legendary": "Lendária",
      "first": "Primeira",
      "second": "Segunda",
      "third": "Terceira",
      "ascending": "Crescente",
      "descending": "Decrescente",
      "ascendingAction": "Ordem crescente. Mudar para decrescente",
      "descendingAction": "Ordem decrescente. Mudar para crescente",
      "selectedCount": "{count} selecionados",
      "cardCount": "{count} cartas",
      "noResults": "Nenhuma carta corresponde aos filtros.",
      "assumptions": "Hipóteses de cálculo",
      "enemyChakra": "Chakra adversário",
      "enemies": "Alvos adversários",
      "allyChakra": "Chakra aliado",
      "allies": "Alvos aliados",
      "activations": "Ativações da carta",
      "applyStandard": "Aplicar padrão",
      "calculationInfo": "Informações de cálculo",
      "standardApplied": "Valores aplicados a todas as cartas desta sessão.",
      "standardPending": "Alterações pendentes: as cartas ainda usam os valores anteriores.",
      "defaultDeckName": "Deck 1",
      "deckNameLabel": "Nome do deck:",
      "deckNamePlaceholder": "Nome do deck",
      "deckSlots": "Os dez espaços do deck",
      "deckCardsLevels": "Cartas e níveis do deck",
      "averageCost": "Custo médio",
      "averagePower": "Poder médio",
      "averageQuality": "Qualidade média",
      "viewDeck": "Detalhes",
      "import": "Importar",
      "export": "Exportar",
      "clearDeck": "Esvaziar",
      "closeDeck": "Fechar deck",
      "closeCard": "Fechar detalhes da carta",
      "closeInfo": "Fechar informações de cálculo",
      "distribution": "Distribuição de custos",
      "curveCaption": "Número de cartas por Custo",
      "databaseEffects": "Banco de efeitos das cartas",
      "builderCards": "Cartas para o deck",
      "confirm": "Confirmar",
      "cancel": "Cancelar",
      "replaceDeck": "Substituir o deck atual pelo deck importado?",
      "confirmClear": "Remover todas as cartas do deck?",
      "deckImported": "Deck importado.",
      "sessionUnavailable": "O salvamento automático da sessão está indisponível. Exporte seu deck para preservá-lo.",
      "sessionInvalid": "Não foi possível restaurar a sessão salva. Você pode importar um deck exportado.",
      "addToDeck": "Adicionar ao deck",
      "removeFromDeck": "Remover do deck",
      "addCard": "Adicionar {name} ao deck",
      "removeCard": "Remover {name} do deck",
      "openCard": "Abrir {name} · {reference}",
      "removeNamedCard": "Remover {name}",
      "emptySlot": "Espaço {slot} vazio",
      "cardLevelTitle": "{name} · {reference} · nível {level}",
      "levelShort": "Nv.{level}",
      "changeLevel": "Mudar nível",
      "changeLevelTitle": "Clique para mudar para o nível {level}",
      "changeLevelAction": "Nível {level}. Mudar para o nível {next}",
      "powerQuality": "Poder e qualidade",
      "localAssumptions": "Hipóteses desta carta",
      "useStandard": "Usar padrão",
      "localChanges": "Alterações imediatas, apenas nesta carta.",
      "powerComposition": "Composição do poder",
      "contributions": "Contribuições do cálculo",
      "noContributions": "Nenhuma contribuição numérica adicional.",
      "baseChakra": "Chakra base",
      "summonedChakra": "Chakra invocado",
      "chakraBoosts": "Bônus de Chakra",
      "friendlyDamage": "Dano a si / aos aliados",
      "enemyDamage": "Dano aos adversários",
      "burn": "Queimadura",
      "heal": "Cura",
      "curveBar": "Custo {cost}: {count} cartas",
      "energyCost": "Custo de energia",
      "costValue": "Custo {value}",
      "chakraValue": "Chakra base {value}",
      "info1": "Poder = Chakra base + Invocações + bônus − dano a si e aos aliados + dano aos adversários + Queimadura + Cura.",
      "info2": "Qualidade = Poder / custo da carta.",
      "info3": "Queimadura = alvos adversários × duração em segundos (ou Chakra adversário, se for menor que a duração).",
      "info4": "Os efeitos são contados pelo número de ativações indicado na carta ou nas hipóteses de cálculo.",
      "info5": "Movimento, Bloqueio e outros modificadores não entram no Poder da carta.",
      "info6": "O seletor de nível dos filtros altera toda a lista, exceto as cartas que já estão no deck.",
      "deckBuilding": "Deck em construção",
      "deckInfo": "Informações do deck",
      "closeDeckInfo": "Fechar informações do deck",
      "deckPowerDescription": "O poder médio é a média dos poderes das cartas do deck.",
      "deckQualityDescription": "A qualidade média é a média das qualidades de cada carta do deck.",
      "exportInfo": "A exportação inclui os níveis e as hipóteses de cálculo específicos de cada carta."
    },
    "effects": {
      "Cost": "Custo",
      "Chakra": "Chakra",
      "Weaken": "Enfraquecimento",
      "Push": "Empurra",
      "Pin": "Imobilização",
      "Rush": "Ímpeto",
      "Slow": "Desaceleração",
      "Guard": "Bloqueio",
      "Seal": "Selo",
      "Switch": "Troca",
      "Summon": "Invocação",
      "Teleport": "Teletransporte",
      "Burn": "Queimadura",
      "Focus": "Concentração",
      "Heal": "Cura"
    },
    "terms": {
      "Cost": "custos?",
      "Chakra": "chakra",
      "Weaken": "enfraque[\\p{L}]*",
      "Push": "empurr[\\p{L}]*|repelir",
      "Pin": "imobiliz[\\p{L}]*|fixa[\\p{L}]*",
      "Rush": "ímpeto[\\p{L}]*|acelera[\\p{L}]*",
      "Slow": "desacelera[\\p{L}]*|lentidão|retarda[\\p{L}]*",
      "Guard": "bloque[\\p{L}]*|defesa[\\p{L}]*|guarda[\\p{L}]*",
      "Seal": "sel[\\p{L}]*",
      "Switch": "troc[\\p{L}]*",
      "Summon": "invoc[\\p{L}]*",
      "Teleport": "teletransport[\\p{L}]*",
      "Burn": "queim[\\p{L}]*",
      "Focus": "concentr[\\p{L}]*",
      "Heal": "cura[\\p{L}]*"
    },
    "cards": {
      "S1_001": {
        "name": "NARUTO UZUMAKI",
        "ability": "Potencial",
        "descriptions": [
          "Na primeira vez que esta carta ganha chakra, ela ganha um Chakra(+1) adicional.",
          "Na primeira vez que esta carta ganha chakra, ela ganha um Chakra(+2) adicional."
        ]
      },
      "S1_002": {
        "name": "NARUTO UZUMAKI",
        "ability": "Aprendizado",
        "descriptions": [
          "Chakra(+2) após 6 segundos.",
          "Chakra(+3) após 6 segundos."
        ]
      },
      "S1_003": {
        "name": "NARUTO UZUMAKI",
        "ability": "Jutsu Clones das Sombras",
        "descriptions": [
          "Cria 1 clone em outra fileira com Chakra(1).",
          "Invoca 1 clone em outra fileira com Chakra(2)."
        ]
      },
      "S1_004": {
        "name": "NARUTO UZUMAKI",
        "ability": "Juramento",
        "descriptions": [
          "Chakra(+1) após um confronto bem-sucedido.",
          "Chakra(+2) após um confronto bem-sucedido."
        ]
      },
      "S1_005": {
        "name": "SASUKE UCHIHA",
        "ability": "Domínio da Kunai",
        "descriptions": [
          "Ao confrontar, Enfraquece(2) a carta adversária.",
          "Ao confrontar, Enfraquece(3) a carta adversária."
        ]
      },
      "S1_006": {
        "name": "SAKURA HARUNO",
        "ability": "Arremesso de Kunai",
        "descriptions": [
          "Ao ser mobilizado, Enfraquece(2) um adversário em Longo Alcance aleatório. Os alvos pertencem à própria fileira.",
          "Ao ser mobilizado, Enfraquece(3) um adversário em Longo Alcance aleatório. Os alvos pertencem à própria fileira."
        ]
      },
      "S1_007": {
        "name": "SAKURA HARUNO",
        "ability": "Equilíbrio dos Chakras",
        "descriptions": [
          "Quando aliados em sua fileira forem bem-sucedidos em um confronto, Chakra(+1) para eles e Imobilização(3s) para si.",
          "Quando aliados em sua fileira forem bem-sucedidos em um confronto, Chakra(+1) para eles e Imobilização(5s) para si."
        ]
      },
      "S1_008": {
        "name": "SAKURA HARUNO",
        "ability": "Chute Giratório",
        "descriptions": [
          "Ao confrontar, Empurra(1) e Enfraquece(1) a carta adversária.",
          "Ao confrontar, Empurra(2) e Enfraquece(1) a carta adversária."
        ]
      },
      "S1_009": {
        "name": "KAKASHI HATAKE",
        "ability": "Ímpeto",
        "descriptions": [
          "Ímpeto(5s)",
          "Ímpeto(6s)"
        ]
      },
      "S1_010": {
        "name": "KAKASHI HATAKE",
        "ability": "Líder de Equipe",
        "descriptions": [
          "Ao confrontar, Chakra(+2) para um aliado em Curto Alcance. Os alvos pertencem à própria fileira.",
          "Ao confrontar, Chakra(+3) para um aliado da fileira em Curto Alcance."
        ]
      },
      "S1_011": {
        "name": "IRUKA UMINO",
        "ability": "Sensei",
        "descriptions": [
          "Chakra(+2) para o próximo aliado implantado.",
          "Chakra(+3) para o próximo aliado implantado."
        ]
      },
      "S1_012": {
        "name": "ZABUZA MOMOCHI",
        "ability": "Entrada Ameaçadora",
        "descriptions": [
          "É mobilizada no Médio Alcance, Desacelera(4s) e Troca de fileira o adversário da própria fileira com mais Chakra.",
          "É mobilizada no Médio Alcance, Desacelera(6s) e Troca de fileira o adversário da própria fileira com mais Chakra."
        ]
      },
      "S1_013": {
        "name": "ZABUZA MOMOCHI",
        "ability": "Agressão",
        "descriptions": [
          "Ao ser mobilizado, Enfraquece(3) a carta adversária mais próxima na fileira.",
          "Ao ser mobilizado, Enfraquece(4) a carta adversária mais próxima na fileira."
        ]
      },
      "S1_014": {
        "name": "HAKU",
        "ability": "Agulhas",
        "descriptions": [
          "Ao ser mobilizado, Imobiliza(6s) o adversário mais próximo em sua fileira.",
          "Ao ser mobilizado, Imobiliza(7s) o adversário mais próximo em sua fileira."
        ]
      },
      "S1_015": {
        "name": "KONOHAMARU SARUTOBI",
        "ability": "Arremesso de Shuriken",
        "descriptions": [
          "Ao ser mobilizado, Enfraquece(1) um adversário aleatório em Curto Alcance. Os alvos pertencem à própria fileira.",
          "Ao ser mobilizado, Enfraquece(2) um adversário aleatório em Curto Alcance. Os alvos pertencem à própria fileira."
        ]
      },
      "S1_016": {
        "name": "EBISU",
        "ability": "Lição Rápida",
        "descriptions": [
          "Ao ser mobilizado, Chakra(+2) para o aliado mais próximo. Os alvos pertencem à própria fileira.",
          "Ao ser mobilizado, Chakra(+3) para o aliado mais próximo. Os alvos pertencem à própria fileira."
        ]
      },
      "S1_017": {
        "name": "TAZUNA",
        "ability": "Construtor de Pontes",
        "descriptions": [
          "Ao ser mobilizado, puxe 2 aliados em Médio Alcance para esta carta. Os alvos pertencem à própria fileira.",
          "Ao ser mobilizado, puxe 3 aliados em Médio Alcance para esta carta. Os alvos pertencem à própria fileira."
        ]
      },
      "S1_018": {
        "name": "INARI",
        "ability": "Ímpeto",
        "descriptions": [
          "Ímpeto(2s)",
          "Ímpeto(3s)"
        ]
      },
      "S1_019": {
        "name": "KAIZA",
        "ability": "Mártir",
        "descriptions": [
          "Ao se retirar, concede Chakra(+1) apenas aos aliados da própria fileira.",
          "Ao se retirar, concede Chakra(+2) apenas aos aliados da própria fileira."
        ]
      },
      "S1_020": {
        "name": "MIZUKI TOJI",
        "ability": "Intenção Oculta",
        "descriptions": [
          "Ao ser mobilizado, Enfraquece(2) um aliado aleatório de sua fileira e Chakra(+3) para este card.",
          "Ao ser mobilizado, Enfraquece(2) um aliado aleatório de sua fileira e Chakra(+4) para este card."
        ]
      },
      "S1_021": {
        "name": "MIZUKI TOJI",
        "ability": "Presa Fácil",
        "descriptions": [
          "Ao se retirar, Chakra(+1) para 3 aliados aleatórios.",
          "Ao se retirar, Chakra(+2) para 3 aliados aleatórios."
        ]
      },
      "S1_022": {
        "name": "MADAME SHIJIMI",
        "ability": "Resgate de Gatos",
        "descriptions": [
          "Ao ser mobilizado, Chakra(+1) para 3 aliados da sua fileira em Curto Alcance e Desaceleração(3s) neles.",
          "Ao ser mobilizado, Chakra(+2) para 3 aliados da sua fileira em Curto Alcance e Desaceleração(3s) neles."
        ]
      },
      "S1_023": {
        "name": "GOZU",
        "ability": "Emboscada",
        "descriptions": [
          "Ao confrontar, Enfraquece(1) a carta adversária e Teletransporta para trás dela.",
          "Ao confrontar, Enfraquece(2) a carta adversária e Teletransporta para trás dela."
        ]
      },
      "S1_024": {
        "name": "TSUNAMI",
        "ability": "Hospitalidade",
        "descriptions": [
          "Ao ser mobilizado, Chakra(+1) para 2 aliados da sua fileira.",
          "Ao ser mobilizado, Chakra(+1) para 3 aliados da sua fileira."
        ]
      },
      "S1_025": {
        "name": "WARAJI",
        "ability": "Ímpeto",
        "descriptions": [
          "Ímpeto(3s)",
          "Ímpeto(4s)"
        ]
      },
      "S1_026": {
        "name": "ZORI",
        "ability": "Ímpeto",
        "descriptions": [
          "Ímpeto(3s)",
          "Ímpeto(4s)"
        ]
      },
      "S1_027": {
        "name": "INO YAMANAKA",
        "ability": "Charme",
        "descriptions": [
          "Ao ser mobilizado, Chakra(+1) ao aliado mais próximo em Curto Alcance e o empurra para Médio Alcance.",
          "Ao ser mobilizado, Chakra(+2) ao aliado mais próximo no Curto Alcance e o Empurra para o Médio Alcance."
        ]
      },
      "S1_028": {
        "name": "SHIKAMARU NARA",
        "ability": "Jutsu de Paralisia das Sombras",
        "descriptions": [
          "Ao ser mobilizado, Imobiliza(10s) a si mesmo e a carta adversária mais próxima. Os alvos pertencem à própria fileira.",
          "Ao ser mobilizado, Imobiliza(12s) a si mesmo e a carta adversária mais próxima. Os alvos pertencem à própria fileira."
        ]
      },
      "S1_029": {
        "name": "CHOJI AKIMICHI",
        "ability": "Força",
        "descriptions": [
          "Ao confrontar, Empurra(1) a carta adversária.",
          "Ao confrontar, Empurra(2) a carta adversária."
        ]
      },
      "S1_030": {
        "name": "ASUMA SARUTOBI",
        "ability": "Destreza de Corpo A Corpo",
        "descriptions": [
          "Ao confrontar, Chakra(+3) se a carta adversária tiver um número de chakra maior.",
          "Ao confrontar, Chakra(+4) se a carta adversária tiver um número de chakra maior."
        ]
      },
      "S1_031": {
        "name": "HINATA HYUGA",
        "ability": "Tímido",
        "descriptions": [
          "Ao ser mobilizado, Empurra(2) a carta adversária mais próxima em Curto Alcance. Os alvos pertencem à própria fileira.",
          "Ao ser mobilizado, Empurra(3) a carta adversária mais próxima em Curto Alcance. Os alvos pertencem à própria fileira."
        ]
      },
      "S1_032": {
        "name": "HINATA HYUGA",
        "ability": "Punho Gentil",
        "descriptions": [
          "No primeiro confronto, Empurra(1) apenas o adversário encontrado, se ele tiver 3 Chakra ou menos.",
          "No primeiro confronto, Empurra(2) apenas o adversário encontrado, se ele tiver 3 Chakra ou menos."
        ]
      },
      "S1_033": {
        "name": "KIBA INUZUKA",
        "ability": "Melhor amigo",
        "descriptions": [
          "Invoca um Akamaru aleatório do seu baralho e dê a ele Chakra(+1). Se não houver nenhum Akamaru, esta carta ganha Chakra(+1) em vez disso.",
          "Invoca um Akamaru aleatório do seu baralho e dê a ele Chakra(+2). Se não houver nenhum Akamaru, esta carta ganha Chakra(+2) em vez disso."
        ]
      },
      "S1_034": {
        "name": "AKAMARU",
        "ability": "Ímpeto",
        "descriptions": [
          "Ímpeto(6s)",
          "Ímpeto(7s)"
        ]
      },
      "S1_035": {
        "name": "SHINO ABURAME",
        "ability": "Insetos de Chakra",
        "descriptions": [
          "Ao confrontar, Chakra(+2) para esta carta e Enfraquece(1) a carta adversária.",
          "Ao confrontar, Chakra(+2) para esta carta e Enfraquece(2) a carta adversária."
        ]
      },
      "S1_036": {
        "name": "KURENAI YUHI",
        "ability": "Finta",
        "descriptions": [
          "Ao confrontar, Empurra(2) e Imobiliza(2s) a carta adversária.",
          "Ao confrontar, Empurra(2) e Imobiliza(4s) a carta adversária."
        ]
      },
      "S1_037": {
        "name": "PAKKUN",
        "ability": "Nariz Aguçado",
        "descriptions": [
          "Ignora todas as habilidades e confrontos adversários até atingir o Médio Alcance. Aliados ganham Ímpeto(+2s) ao serem mobilizados nesta fileira enquanto esta carta estiver ativa.",
          "Ignora todas as habilidades e confrontos rivais até alcançar o Médio Alcance. Aliados ganham Ímpeto(+3s) ao serem mobilizados nesta fileira enquanto esta carta estiver ativa."
        ]
      },
      "S1_038": {
        "name": "AYAME",
        "ability": "Refeição Fresca",
        "descriptions": [
          "Ao ser mobilizado, Chakra(+2) a 2 aliados em sua fileira em Médio Alcance.",
          "Ao ser mobilizado, Chakra(+2) a 3 aliados em sua fileira em Médio Alcance."
        ]
      },
      "S1_039": {
        "name": "MOEGI KAZAMATSURI",
        "ability": "Ímpeto",
        "descriptions": [
          "Ímpeto(2s)",
          "Ímpeto(3s)"
        ]
      },
      "S1_040": {
        "name": "UDON ISE",
        "ability": "Ímpeto",
        "descriptions": [
          "Ímpeto(2s)",
          "Ímpeto(3s)"
        ]
      },
      "S1_041": {
        "name": "NINJA TROOPS",
        "ability": "Vanguarda",
        "descriptions": [
          "Ímpeto(2s). Ao se retirar, Chakra(+3) para o aliado mobilizado mais recentemente.",
          "Ímpeto(3s). Ao se retirar, Chakra(+3) para o aliado mobilizado mais recentemente."
        ]
      },
      "S1_042": {
        "name": "NARUTO UZUMAKI",
        "ability": "Inofensivo",
        "descriptions": [
          "Quando se retira, Enfraquece(3) a carta rival.",
          "Quando se retira, Enfraquece(4) a carta rival."
        ]
      },
      "S1_043": {
        "name": "NARUTO UZUMAKI",
        "ability": "Brincalhão",
        "descriptions": [
          "Ao ser mobilizado, Desacelera(10s) todas as cartas na fileira.",
          "Ao ser mobilizado, Desacelera(12s) todas as cartas na fileira."
        ]
      },
      "S1_044": {
        "name": "NARUTO UZUMAKI",
        "ability": "Jutsu Sexy",
        "descriptions": [
          "Ao ser mobilizado, Imobiliza(4s) uma carta adversária em Médio Alcance. Os alvos pertencem à própria fileira.",
          "Ao ser mobilizado, Imobiliza(5s) uma carta adversária em sua fileira em Médio Alcance."
        ]
      },
      "S1_045": {
        "name": "NARUTO UZUMAKI",
        "ability": "Solidão",
        "descriptions": [
          "Ao ser mobilizado, Chakra(+3) e Desacelera(6s) se não houver aliados em sua fileira.",
          "Ao ser mobilizado, Chakra(+4) e Desacelera(6s) se não houver aliados em sua fileira."
        ]
      },
      "S1_046": {
        "name": "NARUTO UZUMAKI",
        "ability": "Diplomacia",
        "descriptions": [
          "Esta carta ganha Chakra(+1) para cada aliado da própria fileira no Curto Alcance.",
          "Esta carta ganha Chakra(+2) para cada aliado da própria fileira no Curto Alcance."
        ]
      },
      "S1_047": {
        "name": "NARUTO UZUMAKI",
        "ability": "Jutsu de Transformação",
        "descriptions": [
          "Ao ser mobilizado, ela se disfarça como outra carta de até 3 de custo do seu baralho. Ela retorna à sua forma original ao confrontar ou quando enfraquecida.",
          "Ao ser mobilizado, ela se disfarça como outra carta de até 4 de custo do seu baralho. Ela retorna à sua forma original ao confrontar ou quando enfraquecida."
        ]
      },
      "S1_048": {
        "name": "NARUTO UZUMAKI",
        "ability": "Astucioso",
        "descriptions": [
          "Ao confrontar, Imobiliza(4s) a carta adversária e Teletransporta para trás dela.",
          "Ao confrontar, Imobiliza(6s) a carta adversária e Teletransporta para trás dela."
        ]
      },
      "S1_049": {
        "name": "SASUKE UCHIHA",
        "ability": "Projeção",
        "descriptions": [
          "O próximo aliado é mobilizado no Médio Alcance. Imobiliza(4s) e Troca de fileira um adversário aleatório da própria fileira no Médio Alcance.",
          "O próximo aliado é mobilizado no Médio Alcance. Imobiliza(8s) e Troca de fileira um adversário aleatório da própria fileira no Médio Alcance."
        ]
      },
      "S1_050": {
        "name": "HIRUZEN SARUTOBI",
        "ability": "Técnica de Telescópios",
        "descriptions": [
          "Quando os aliados ganham Ímpeto, aplica Chakra(+1) e Ímpeto(+1s) neles.",
          "Quando os aliados ganham Ímpeto, aplica Chakra(+1) e Ímpeto(+2s) neles."
        ]
      },
      "S1_051": {
        "name": "IRUKA UMINO",
        "ability": "Impressionado",
        "descriptions": [
          "Troque de fileira aleatoriamente a cada 8 segundos.",
          "Troque de fileira aleatoriamente a cada 6 segundos."
        ]
      },
      "S1_052": {
        "name": "IRUKA UMINO",
        "ability": "Sacrifício",
        "descriptions": [
          "É mobilizada diretamente no Médio Alcance e Chakra(+1) ao aliado mais próximo. Os alvos pertencem à própria fileira.",
          "É mobilizada diretamente no Médio Alcance e Chakra(+2) para o aliado mais próximo. Os alvos pertencem à própria fileira."
        ]
      },
      "S1_053": {
        "name": "ZABUZA MOMOCHI",
        "ability": "Escondido na Névoa",
        "descriptions": [
          "Ao ser mobilizada, Imobiliza(6s) e Enfraquece(1) todos os adversários da própria fileira no Curto Alcance.",
          "Ao ser mobilizada, Imobiliza(6s) e Enfraquece(2) todos os adversários da própria fileira no Curto Alcance."
        ]
      },
      "S1_054": {
        "name": "ZABUZA MOMOCHI",
        "ability": "Brisa",
        "descriptions": [
          "Ganha Chakra(+3) na primeira vez que um aliado do seu caminho se retira.",
          "Ganha Chakra(+4) na primeira vez que um aliado do seu caminho se retira."
        ]
      },
      "S1_055": {
        "name": "KONOHAMARU SARUTOBI",
        "ability": "Jutsu Sexy Imperfeito",
        "descriptions": [
          "Ao ser mobilizado, 50% de chance de Imobilizar(6s) uma carta adversária em Médio Alcance. Os alvos pertencem à própria fileira.",
          "Ao ser mobilizado, 50% de chance de Imobilizar(8s) uma carta adversária na fileira em Médio Alcance."
        ]
      },
      "S1_056": {
        "name": "KONOHAMARU SARUTOBI",
        "ability": "Legado",
        "descriptions": [
          "Ao ser mobilizado, há 50% de chance de invocar um Hiruzen aleatório do seu baralho. Caso contrário, Chakra(+2).",
          "Ao ser mobilizado, há 50% de chance de invocar um Hiruzen aleatório do seu baralho. Caso contrário, Chakra(+3)."
        ]
      },
      "S1_057": {
        "name": "KONOHAMARU SARUTOBI",
        "ability": "Jutsu Sexy",
        "descriptions": [
          "Ao ser mobilizado, Imobiliza(4s) uma carta adversária em Médio Alcance. Os alvos pertencem à própria fileira.",
          "Ao ser mobilizado, Imobiliza(5s) uma carta adversária na fileira em Médio Alcance."
        ]
      },
      "S1_058": {
        "name": "EBISU",
        "ability": "Lições Difíceis",
        "descriptions": [
          "Todos os aliados mobilizados ganham Chakra(+2), mas Enfraquece(1) esta carta cada vez.",
          "Todos os aliados mobilizados ganham Chakra(+3), mas Enfraquece(1) esta carta cada vez."
        ]
      },
      "S1_059": {
        "name": "INARI",
        "ability": "Agir",
        "descriptions": [
          "Ao ser mobilizado, Enfraquece(1) e Lentidão(6s) a carta adversária mais próxima em Longo Alcance. Os alvos pertencem à própria fileira.",
          "Ao ser mobilizado, Enfraquece(1) e Desacelera(8s) o adversário em Longo Alcance na fileira mais próxima."
        ]
      },
      "S1_060": {
        "name": "GATO",
        "ability": "Senhor do Crime",
        "descriptions": [
          "Ao ser mobilizado, Concentração(6s). Se a Concentração for bem-sucedida, invoca uma carta aleatória com custo de até 3 do seu baralho.",
          "Ao ser mobilizado, Concentração(4s). Se a Concentração for bem-sucedida, Invoca uma carta aleatória com custo de até 3 do seu baralho."
        ]
      },
      "S1_061": {
        "name": "NINJA HOUNDS",
        "ability": "As Presas do Rastreador",
        "descriptions": [
          "Ao ser mobilizado, Imobiliza(6s) a si mesmo e o adversário em sua fileira com o chakra mais alto.",
          "Ao ser mobilizado, Imobiliza(8s) a si mesma e o adversário em sua fileira com o chakra mais alto."
        ]
      },
      "S1_062": {
        "name": "TEUCHI",
        "ability": "O Caminho do Lámen",
        "descriptions": [
          "Chakra(+1) para aliados em sua fileira após 8 segundos.",
          "Chakra(+2) para aliados em sua fileira após 8 segundos."
        ]
      },
      "S1_063": {
        "name": "NARUTO UZUMAKI",
        "ability": "Determinação",
        "descriptions": [
          "Quando o Iruka aliado estiver prestes a recuar, o traz de volta ao início da fileira e cria 3 clones com Chakra(1) distribuído por todas as fileiras.",
          "Quando um Iruka aliado está prestes a se retirar, puxa-o de volta ao início da fileira e Invoca 5 clones com Chakra(1) distribuídos em todas as fileiras."
        ]
      },
      "S1_064": {
        "name": "NARUTO UZUMAKI",
        "ability": "Showman",
        "descriptions": [
          "Chakra(+5) após 10 s.",
          "Chakra(+6) após 10 s."
        ]
      },
      "S1_065": {
        "name": "NARUTO UZUMAKI",
        "ability": "Jutsu Sexy em Massa",
        "descriptions": [
          "Ao confrontar, Imobiliza(6s) a carta adversária, teletransporta para trás dela e ganha Ímpeto(2s).",
          "Ao confrontar, Imobiliza(8s) a carta adversária, teletransporta para trás dela e ganha Ímpeto(4s)."
        ]
      },
      "S1_066": {
        "name": "SASUKE UCHIHA",
        "ability": "Previsão",
        "descriptions": [
          "Não pode ser enfraquecido durante confrontos com cartas rivais de 2 Chakras ou menos.",
          "Não pode ser enfraquecido durante confrontos com cartas rivais de 3 Chakras ou menos."
        ]
      },
      "S1_067": {
        "name": "SAKURA HARUNO",
        "ability": "Fogo Interior",
        "descriptions": [
          "Ganha Chakra(+3) na primeira mobilização de um adversário na própria fileira; depois, Chakra(+1) sempre que um adversário é mobilizado ou Troca para esta fileira.",
          "Ganha Chakra(+3) na primeira mobilização de um adversário na própria fileira; depois, Chakra(+2) sempre que um adversário é mobilizado ou Troca para esta fileira."
        ]
      },
      "S1_068": {
        "name": "KAKASHI HATAKE",
        "ability": "1000 Anos de Morte",
        "descriptions": [
          "Salta para a primeira carta rival que se aproximar, Enfraquece(1) e Empurra(3)-a para trás.",
          "Salta para a primeira carta rival que se aproximar, Enfraquece(1) e Empurra(4)-a para trás."
        ]
      },
      "S1_069": {
        "name": "KAKASHI HATAKE",
        "ability": "Jutsu Vórtex Gigante",
        "descriptions": [
          "Ao ser mobilizado, Empurra(3) e Enfraquece(2) todos os adversários da fileira.",
          "Ao ser mobilizado, Empurra(3) e Enfraquece(3) todos os adversários da fileira."
        ]
      },
      "S1_070": {
        "name": "KAKASHI HATAKE",
        "ability": "Raikiri",
        "descriptions": [
          "Pule na primeira carta adversária que se aproximar e Enfraqueça(3). Ignora Bloqueio.",
          "Pule na primeira carta adversária que se aproximar e Enfraqueça(4). Ignora Bloqueio."
        ]
      },
      "S1_071": {
        "name": "KAKASHI HATAKE",
        "ability": "Clonar Falso",
        "descriptions": [
          "Gaste a energia restante para invocar até 5 clones com Chakra(2) disfarçados como o original.",
          "Gaste a energia restante para invocar até 6 clones com Chakra(2) disfarçados como o original."
        ]
      },
      "S1_072": {
        "name": "IRUKA UMINO",
        "ability": "Reprimenda",
        "descriptions": [
          "Enquanto esta carta estiver ativa, Chakra(+1) e Imobiliza(2s) aliados com 2 Chakra ao mobilizá-los.",
          "Enquanto esta carta estiver ativa, Chakra(+2) e Imobiliza(2s) aos aliados com 2 Chakra ao mobilizá-los."
        ]
      },
      "S1_073": {
        "name": "HIRUZEN SARUTOBI",
        "ability": "Vontade do Fogo",
        "descriptions": [
          "Chakra[+1] a todos os aliados após 10 segundos.",
          "Após 10 segundos, Chakra(+2) para todos os aliados."
        ]
      },
      "S1_074": {
        "name": "ZABUZA MOMOCHI",
        "ability": "Jutsu Dragão de Água",
        "descriptions": [
          "Ao ser mobilizado, Enfraquece(1) e Empurra(1) todos os adversários da fileira em Curto e Médio Alcance.",
          "Ao ser mobilizado, Enfraquece(1) e Empurra(3) todos os rivais da fileira no Curto e Médio Alcance."
        ]
      },
      "S1_075": {
        "name": "HAKU",
        "ability": "Espelhos Demoníacos de Gelo",
        "descriptions": [
          "Ao confrontar, Imobiliza(2s) e Enfraquece(1) os adversários próximos da própria fileira, depois Troca de fileira. Esta habilidade é reativada sempre que ganha Chakra.",
          "Ao confrontar, Imobiliza(4s) e Enfraquece(1) os adversários próximos da própria fileira, depois Troca de fileira. Esta habilidade é reativada sempre que ganha Chakra."
        ]
      },
      "S1_076": {
        "name": "GAMABUNTA",
        "ability": "Cooperação de sapos",
        "descriptions": [
          "Chakra(+1) quando aliados Repelir rivais.",
          "Chakra(+2) quando aliados Empurrar rivais."
        ]
      },
      "S1_077": {
        "name": "NARUTO UZUMAKI",
        "ability": "Múltiplos Clones das Sombras",
        "descriptions": [
          "Cria 2 clones com Chakra(2) e Ímpeto(4s) nas outras fileiras, depois 2 novos clones após 10s. Chakra(+1) sempre que esses clones recuarem.",
          "Invoca 2 clones nas outras fileiras com Chakra(2) e Ímpeto(6s) e, então, 2 novos clones após 10s. Chakra(+1) sempre que esses clones se retiram."
        ]
      },
      "S1_078": {
        "name": "NARUTO UZUMAKI",
        "ability": "Fúria de Kyubi",
        "descriptions": [
          "Quando os aliados se retiram, Chakra(+1) e Ímpeto(1s)",
          "Quando os aliados se retiram, Chakra(+2) e Ímpeto(1s)"
        ]
      },
      "S1_079": {
        "name": "NARUTO UZUMAKI",
        "ability": "Soco Furioso",
        "descriptions": [
          "É mobilizada diretamente no Médio Alcance, Enfraquece(2) e Empurra(1) todos os adversários da fileira.",
          "É mobilizada diretamente no Médio Alcance, Enfraquece(2) e Empurra(3) todos os adversários da fileira."
        ]
      },
      "S1_080": {
        "name": "NARUTO UZUMAKI",
        "ability": "Determinado",
        "descriptions": [
          "Chakra(+2) a cada 8s.",
          "Chakra(+2) a cada 6s."
        ]
      },
      "S1_081": {
        "name": "SASUKE UCHIHA",
        "ability": "Jutsu Bola de Fogo",
        "descriptions": [
          "Ao ser mobilizado, Enfraquece(2) todos os adversários em Médio Alcance.",
          "Ao ser mobilizado, Enfraquece(3) todos os adversários em Médio Alcance."
        ]
      },
      "S1_082": {
        "name": "KAKASHI HATAKE",
        "ability": "Plano de Batalha",
        "descriptions": [
          "Enquanto estiver ativo, ganha Chakra(+1) sempre que aliados Enfraquecem rivais. Aliados ganham Chakra(+1) para cada carta afetada na primeira vez que eles Enfraquecem rivais.",
          "Enquanto estiver ativo, ganha Chakra(+2) sempre que aliados Enfraquecem rivais. Aliados ganham Chakra(+1) para cada carta afetada na primeira vez que eles Enfraquecem rivais."
        ]
      },
      "S1_083": {
        "name": "ZABUZA MOMOCHI",
        "ability": "Demônio",
        "descriptions": [
          "Ao ser mobilizado, Enfraquece(1) todas as cartas. Se elas tiverem 3 ou menos de Chakra,Enfraquece(3) em vez disso.",
          "Ao ser mobilizado, Enfraquece(1) todas as cartas. Se elas tiverem 4 ou menos de Chakra,Enfraquece(4) em vez disso."
        ]
      },
      "S1_084": {
        "name": "ZABUZA MOMOCHI",
        "ability": "Investida Imprudente",
        "descriptions": [
          "Em cada confronto, Enfraquece(2) as cartas adversárias com 4 ou menos de Chakra e obriga-as a Trocar de fileira. Ímpeto permanente.",
          "Em cada confronto, Enfraquece(3) as cartas adversárias com 4 ou menos de Chakra e obriga-as a Trocar de fileira. Ímpeto permanente."
        ]
      },
      "S1_085": {
        "name": "KYUBI",
        "ability": "Desastre natural",
        "descriptions": [
          "É mobilizada no Médio Alcance, Empurra(1) e Enfraquece(3) todas as cartas. Enquanto estiver ativa, Enfraquece(1) as cartas recém-mobilizadas. Desaceleração permanente.",
          "É mobilizada no Médio Alcance, Empurra(1) e Enfraquece(4) todas as cartas. Enquanto estiver ativa, Enfraquece(1) as cartas recém-mobilizadas. Desaceleração permanente."
        ]
      },
      "S2_001": {
        "name": "Naruto Uzumaki",
        "ability": "Treinamento de Chakra",
        "descriptions": [
          "Ao ser mobilizado, 50% de chance de Chakra(+3).",
          "Ao ser mobilizado, 50% de chance de Chakra(+4)."
        ]
      },
      "S2_002": {
        "name": "Naruto Uzumaki",
        "ability": "Desafiante",
        "descriptions": [
          "Ao ser mobilizada, Imobilização(1s) e ganha Chakra(+2) para cada adversário da própria fileira com mais Chakra.",
          "Ao ser mobilizada, Imobilização(2s) e ganha Chakra(+2) para cada adversário da própria fileira com mais Chakra."
        ]
      },
      "S2_003": {
        "name": "Sasuke Uchiha",
        "ability": "Barragem do Leão",
        "descriptions": [
          "Salta para a primeira carta rival que se aproximar, e Enfraquece(2)-a para trás.",
          "Salta para a primeira carta rival que se aproximar, e Enfraquece(3)-a para trás."
        ]
      },
      "S2_004": {
        "name": "Sakura Haruno",
        "ability": "Ímpeto",
        "descriptions": [
          "Ímpeto(2s)",
          "Ímpeto(3s)"
        ]
      },
      "S2_005": {
        "name": "Rock Lee",
        "ability": "Protetor",
        "descriptions": [
          "Ímpeto(+3s) sempre que um adversário for mobilizado nesta fileira.",
          "Ímpeto(+4s) sempre que um adversário for mobilizado nesta fileira."
        ]
      },
      "S2_006": {
        "name": "Rock Lee",
        "ability": "Bomba do Amor",
        "descriptions": [
          "Chakra(+1) ao próximo aliado mobilizado. Enquanto esta carta estiver ativa, Troca de fileira esse aliado a cada 8 segundos.",
          "Chakra(+2) ao próximo aliado mobilizado. Enquanto esta carta estiver ativa, Troque de fileira esse aliado a cada 8 segundos."
        ]
      },
      "S2_007": {
        "name": "Neji Hyuga",
        "ability": "Punho Gentil",
        "descriptions": [
          "Ao confrontar, Enfraquece(2) e Empurra(1).",
          "Ao confrontar, Enfraquece(2) e Empurra(2)."
        ]
      },
      "S2_008": {
        "name": "Tenten",
        "ability": "Dragões Gêmeos",
        "descriptions": [
          "Ao ser mobilizado, Enfraquece(1) e Desacelera(6s) todos os adversários no Longo Alcance.",
          "Ao ser mobilizado, Enfraquece(1) e Desacelera(8s) todos os adversários no Longo Alcance."
        ]
      },
      "S2_009": {
        "name": "Gai Maito",
        "ability": "Poder da Juventude",
        "descriptions": [
          "Enquanto esta carta estiver ativa, Chakra(+2) para as cartas de Rock Lee ao mobilizá-las.",
          "Enquanto esta carta estiver ativa, Chakra(+3) para as cartas de Rock Lee ao mobilizá-las."
        ]
      },
      "S2_010": {
        "name": "Gaara",
        "ability": "Perigoso",
        "descriptions": [
          "É mobilizada diretamente no Médio Alcance. Chakra(+3) se houver uma carta adversária no Médio Alcance.",
          "É mobilizada diretamente no Médio Alcance. Chakra(+4) se houver uma carta adversária no Médio Alcance."
        ]
      },
      "S2_011": {
        "name": "Kankuro",
        "ability": "Descarado",
        "descriptions": [
          "Chakra(+3) ao próximo Gaara aliado mobilizado.",
          "Chakra(+4) ao próximo Gaara aliado mobilizado."
        ]
      },
      "S2_012": {
        "name": "Temari",
        "ability": "Prudente",
        "descriptions": [
          "Bloqueio(1) e Desaceleração(6s) ao próximo Gaara aliado mobilizado.",
          "Bloqueio(1) e Desaceleração(10s) ao próximo Gaara aliado mobilizado."
        ]
      },
      "S2_013": {
        "name": "Baki",
        "ability": "Resiliente",
        "descriptions": [
          "Ímpeto(3s) e Bloqueio(1).",
          "Ímpeto(4s) e Bloqueio(1)."
        ]
      },
      "S2_014": {
        "name": "Ino Yamanaka",
        "ability": "Ímpeto",
        "descriptions": [
          "Ímpeto(2s)",
          "Ímpeto(3s)"
        ]
      },
      "S2_015": {
        "name": "Kabuto Yakushi",
        "ability": "Explicação",
        "descriptions": [
          "Ao ser mobilizado, todos os aliados no Curto Alcance ganham aleatoriamente Chakra(+1) ou Imobilização(4s).",
          "Ao ser mobilizado, todos os aliados no Curto Alcance ganham aleatoriamente Chakra(+2) ou Imobilização(4s)."
        ]
      },
      "S2_016": {
        "name": "Student Trio",
        "ability": "Equipe Konohamaru",
        "descriptions": [
          "Ao retirar-se, remobiliza como Konohamaru, Moegi e Udon com Ímpeto(3s) e Chakra(1) em cada fileira.",
          "Ao retirar-se, remobiliza como Konohamaru, Moegi e Udon com Ímpeto(4s) e Chakra(1) em cada fileira."
        ]
      },
      "S2_017": {
        "name": "Ibiki Morino",
        "ability": "Regras Rígidas",
        "descriptions": [
          "Ao ser mobilizado, Empurra(2) ou Imobiliza(4s) todos os adversários em sua fileira.",
          "Ao ser mobilizado, Empurra(3) ou Imobiliza(5s) todos os adversários em sua fileira."
        ]
      },
      "S2_018": {
        "name": "Choza Akimichi",
        "ability": "Velhos Amigos",
        "descriptions": [
          "Enquanto esta carta estiver ativa, Chakra(+1) para as cartas de Shikaku e Inoichi aliadas.",
          "Enquanto esta carta estiver ativa, Chakra(+2) para as cartas de Shikaku e Inoichi aliadas."
        ]
      },
      "S2_019": {
        "name": "Inoichi Yamanaka",
        "ability": "Velhos Amigos",
        "descriptions": [
          "Enquanto esta carta estiver ativa, Chakra(+1) para as cartas de Choza e Shikaku aliadas.",
          "Enquanto esta carta estiver ativa, Chakra(+2) para as cartas de Choza e Shikaku aliadas."
        ]
      },
      "S2_020": {
        "name": "Shikaku Nara",
        "ability": "Velhos Amigos",
        "descriptions": [
          "Enquanto esta carta estiver ativa, Chakra(+1) para as cartas de Inoichi e Choza aliadas.",
          "Enquanto esta carta estiver ativa, Chakra(+2) para as cartas de Inoichi e Choza aliadas."
        ]
      },
      "S2_021": {
        "name": "Hanabi Hyuga",
        "ability": "Prodígio",
        "descriptions": [
          "Ímpeto(2s). Ao confrontar, Empurro(2).",
          "Ímpeto(3s). Ao confrontar, Empurro(3)."
        ]
      },
      "S2_022": {
        "name": "Hiashi Hyuga",
        "ability": "Líder Hyuga",
        "descriptions": [
          "Enquanto esta carta estiver ativa, os Hyuga aliados ganham Chakra(+2) e Empurra(1). Empurra não aumenta um valor já existente.",
          "Enquanto esta carta estiver ativa, os Hyuga aliados ganham Chakra(+3) e Empurra(1). Empurra não aumenta um valor já existente."
        ]
      },
      "S2_023": {
        "name": "Hizashi Hyuga",
        "ability": "Sacrifício do Irmão",
        "descriptions": [
          "Ímpeto(2s). Quando Hiashi aliado estiver prestes a se retirar, coloque-o de volta no início da fileira e recue em seu lugar.",
          "Ímpeto(3s). Quando Hiashi aliado estiver prestes a se retirar, coloque-o de volta no início da fileira e recue em seu lugar."
        ]
      },
      "S2_024": {
        "name": "Zaku Abumi",
        "ability": "Onda Sonora Cortante",
        "descriptions": [
          "Ao ser mobilizado, Empurra(2) e Troca de fileira duas cartas adversárias em Médio Alcance.",
          "Ao ser mobilizado, Empurra(2) e Troca de fileira três cartas rivais no Médio Alcance."
        ]
      },
      "S2_025": {
        "name": "Dosu Kinuta",
        "ability": "Broca de Eco Ressonante",
        "descriptions": [
          "Ao confrontar, Enfraquece(2) a carta adversária. Se o adversário não for retirado, Imobilize(4s) e depois Troque de fileira.",
          "Ao confrontar, Enfraquece(2) a carta adversária. Se o adversário não for retirado, Imobilize(5s) e depois Troque de fileira."
        ]
      },
      "S2_026": {
        "name": "Kin Tsuchi",
        "ability": "Agulhas de Sino",
        "descriptions": [
          "Ao ser mobilizado, Enfraquece(1) e Imobiliza(2s) a carta adversária mais próxima.",
          "Ao ser mobilizado, Enfraquece(2) e Imobiliza(2s) a carta adversária mais próxima."
        ]
      },
      "S2_027": {
        "name": "Izumo Kamizuki",
        "ability": "Sabotar",
        "descriptions": [
          "Ao ser mobilizado, Imobiliza(2s) dois aliados aleatórios na fileira.",
          "Ao ser mobilizado, Imobiliza(2s) três aliados aleatórios na fileira."
        ]
      },
      "S2_028": {
        "name": "Kotetsu Hagane",
        "ability": "Desorientação",
        "descriptions": [
          "Ao ser mobilizado, Lentidão(4s) e Troca de fileira 2 aliados aleatórios.",
          "Ao ser mobilizado, Desacelera(4s) e Troca de fileira três aliados aleatórios."
        ]
      },
      "S2_029": {
        "name": "Oboro",
        "ability": "Clone da Névoa",
        "descriptions": [
          "Ao ser mobilizado, cria 2 clones com Chakra(1). Quando os clones são retirados, 50% de chance de criar outro clone na mesma fileira.",
          "Ao ser mobilizado, Invoca 2 clones com Chakra(2). Quando os clones são retirados, 50% de chance de criar outro clone na mesma fileira."
        ]
      },
      "S2_030": {
        "name": "Yoroi Akado",
        "ability": "Absorção de Chakra",
        "descriptions": [
          "Ao confrontar, Chakra(+1) para essa carta e Enfraquece(1) a carta adversária. Também desativa qualquer habilidade ativa.",
          "Ao confrontar, Chakra(+2) para essa carta e Enfraquece(1) a carta adversária. Também desativa qualquer habilidade ativa."
        ]
      },
      "S2_031": {
        "name": "Ningame",
        "ability": "Temperança",
        "descriptions": [
          "Sempre que aliados na fileira ganharem Ímpeto, será convertido em Chakra(+1).",
          "Sempre que aliados na fileira ganharem Ímpeto, será convertido em Chakra(+2)."
        ]
      },
      "S2_032": {
        "name": "Gama",
        "ability": "Pergaminho do Sapo",
        "descriptions": [
          "Ao ser mobilizado, Invoca um Sapo aleatório do seu baralho e concede a ele Chakra(+1).",
          "Ao ser mobilizado, Invoca um Sapo aleatório do seu baralho e concede a ele Chakra(+2)."
        ]
      },
      "S2_033": {
        "name": "Gamakichi",
        "ability": "Falastrão",
        "descriptions": [
          "Sapos aliados aplicam Empurra(1) ao confrontar enquanto esta carta estiver ativa. Chakra(+1) sempre que um Sapo empurra um adversário.",
          "Sapos aliados aplicam Empurra(2) ao confrontar enquanto esta carta estiver ativa. Chakra(+1) sempre que um Sapo empurra um rival."
        ]
      },
      "S2_034": {
        "name": "Giant Snake",
        "ability": "Deslize",
        "descriptions": [
          "É mobilizada diretamente no Médio Alcance e Troca de fileira duas outras cartas presentes em Médio Alcance.",
          "É mobilizada diretamente no Médio Alcance e Troca de fileira 3 outras cartas presentes no Médio Alcance."
        ]
      },
      "S2_035": {
        "name": "Raido Namiashi",
        "ability": "Escolta",
        "descriptions": [
          "Ímpeto(2s). Quando Hiruzen aliado estiver prestes a ser retirado, coloque-o de volta no início da fileira e se retira em seu lugar.",
          "Ímpeto(3s). Quando Hiruzen aliado estiver prestes a ser retirado, coloque-o de volta no início da fileira e se retira em seu lugar."
        ]
      },
      "S2_036": {
        "name": "Homura Mitokado",
        "ability": "Resseguro",
        "descriptions": [
          "O próximo aliado mobilizado ganha Bloqueio(1) e Chakra(+1).",
          "O próximo aliado mobilizado ganha Bloqueio(1) e Chakra(+2)."
        ]
      },
      "S2_037": {
        "name": "Koharu Utatane",
        "ability": "Segurança",
        "descriptions": [
          "Após 10 segundos, mobiliza Os Caçadores Especiais Anbu.",
          "Após 8 segundos, mobiliza Os Caçadores Especiais Anbu."
        ]
      },
      "S2_038": {
        "name": "Genma Shiranui",
        "ability": "Examinador",
        "descriptions": [
          "Ao ser mobilizado, Concentração(6s). Se a Concentração for bem-sucedida, Invoca uma carta aleatória de custo até 4 do seu deck. Se ela tiver 3 ou menos de Chakra, conceda a ela Chakra(+2).",
          "Ao ser mobilizado, Concentração(4s). Se a Concentração for bem-sucedida, Invoca uma carta aleatória com custo de até 4 do seu baralho. Se tiver 3 de Chakra ou menos, concede-lhe Chakra(+2)."
        ]
      },
      "S2_039": {
        "name": "Genma Shiranui",
        "ability": "Alerta",
        "descriptions": [
          "Ao ser mobilizado, Enfraquece(3) um rival da fileira no Médio Alcance.",
          "Ao ser mobilizado, Enfraquece(3) dois rivais da fileira no Médio Alcance."
        ]
      },
      "S2_040": {
        "name": "Yashamaru",
        "ability": "Dever Relutante",
        "descriptions": [
          "Ao ser retirado, Enfraquece(3) todos os cards próximos.",
          "Ao ser retirado, Enfraquece(4) todos os cards próximos."
        ]
      },
      "S2_041": {
        "name": "Karura",
        "ability": "Amor de Mãe",
        "descriptions": [
          "Ao ser mobilizado, concede Chakra(+2) e Retarda(3s) aos cards de Gaara aliados.",
          "Ao ser mobilizado, concede Chakra(+2) e Desacelera(5s) aos cards de Gaara aliados."
        ]
      },
      "S2_042": {
        "name": "Yugao Uzuki",
        "ability": "Juramento Vingativo",
        "descriptions": [
          "Ímpeto(3s). Bloqueio(1). Ao encontrar, Enfraquece(2).",
          "Ímpeto(4s). Bloqueio(1). Ao encontrar, Enfraquece(2)."
        ]
      },
      "S2_043": {
        "name": "Hana Inuzuka",
        "ability": "Ímpeto",
        "descriptions": [
          "Ímpeto(4s)",
          "Ímpeto(5s)"
        ]
      },
      "S2_044": {
        "name": "Tsume Inuzuka",
        "ability": "Liderar A Investida",
        "descriptions": [
          "Ímpeto(4s). O próximo aliado mobilizado ganha Ímpeto(+3s) e Chakra(+1).",
          "Ímpeto(4s). O próximo aliado mobilizado ganha Ímpeto(+3s) e Chakra(+2)."
        ]
      },
      "S2_045": {
        "name": "Shibi Aburame",
        "ability": "Ajuda Oportuna",
        "descriptions": [
          "Ímpeto(5s). Concede Chakra(+1) aos aliados ao alcançá-los.",
          "Ímpeto(6s). Concede Chakra(+1) aos aliados ao alcançá-los."
        ]
      },
      "S2_046": {
        "name": "Jirobo",
        "ability": "Sul",
        "descriptions": [
          "O próximo Orochimaru mobilizado ganha Chakra(+3).",
          "O próximo Orochimaru mobilizado ganha Chakra(+4)."
        ]
      },
      "S2_047": {
        "name": "Kidomaru",
        "ability": "Leste",
        "descriptions": [
          "O próximo Orochimaru mobilizado ganha Ímpeto(+4s).",
          "O próximo Orochimaru mobilizado ganha Ímpeto(+5s)."
        ]
      },
      "S2_048": {
        "name": "Sakon",
        "ability": "Oeste",
        "descriptions": [
          "O próximo Orochimaru mobilizado Enfraquecerá(3) o card rival mais próximo.",
          "O próximo Orochimaru mobilizado Enfraquecerá(4) o card rival mais próximo."
        ]
      },
      "S2_049": {
        "name": "Tayuya",
        "ability": "Norte",
        "descriptions": [
          "O próximo Orochimaru mobilizado ganha Bloqueio(1).",
          "O próximo Orochimaru mobilizado ganha Bloqueio(2)."
        ]
      },
      "S2_050": {
        "name": "Anbu",
        "ability": "Caçadores Especiais",
        "descriptions": [
          "Ao ser mobilizado, ganha aleatoriamente Chakra(+2) ou Ímpeto(4s).",
          "Ao ser mobilizado, ganha aleatoriamente Chakra(+3) ou Ímpeto(5s)."
        ]
      },
      "S2_051": {
        "name": "Naruto Uzumaki",
        "ability": "Rompedor do Destino",
        "descriptions": [
          "Bloqueio(2). Quando Bloqueio é ativado, reinicia Ímpeto(2s), sem somar à duração restante. Quando Ímpeto termina, Troca de fileira.",
          "Bloqueio(3). Quando Bloqueio é ativado, reinicia Ímpeto(2s), sem somar à duração restante. Quando Ímpeto termina, Troca de fileira."
        ]
      },
      "S2_052": {
        "name": "Sakura Haruno",
        "ability": "Inabalável",
        "descriptions": [
          "Ao encontrar, Enfraquece(1) o card rival e Bloqueio(1).",
          "Ao encontrar, Enfraquece(1) o card rival e Bloqueio(2)."
        ]
      },
      "S2_053": {
        "name": "Rock Lee",
        "ability": "Redemoinho da Folha",
        "descriptions": [
          "Ao confrontar, Empurra(1) e Enfraquece(2) a carta adversária.",
          "Ao confrontar, Empurra(2) e Enfraquece(2) a carta adversária."
        ]
      },
      "S2_054": {
        "name": "Neji Hyuga",
        "ability": "Byakugan",
        "descriptions": [
          "Ao ser mobilizado, reduz o Chakra do card rival mais próximo pela metade e ganha Ímpeto(2s).",
          "Ao ser mobilizado, reduz o Chakra do card rival mais próximo pela metade e ganha Ímpeto(4s)."
        ]
      },
      "S2_055": {
        "name": "Neji Hyuga",
        "ability": "Fardo do Destino",
        "descriptions": [
          "Sempre que este card ganha Chakra, ganha Chakra(+1) extra. Não pode ter mais de 10 de Chakra total.",
          "Sempre que este card ganha Chakra, ganha Chakra(+2) extra. Não pode ter mais de 10 de Chakra total."
        ]
      },
      "S2_056": {
        "name": "Gai Maito",
        "ability": "Reprimenda",
        "descriptions": [
          "É mobilizada diretamente no Médio Alcance. O aliado da própria fileira mais próximo ganha Chakra(+2) e é Imobilizado(2s).",
          "É mobilizada diretamente no Médio Alcance. O aliado da própria fileira mais próximo ganha Chakra(+2) e é Imobilizado(6s)."
        ]
      },
      "S2_057": {
        "name": "Choji Akimichi",
        "ability": "Massa Humana",
        "descriptions": [
          "Ímpeto(3s). Em cada encontro, Empurra(2) e Enfraquece(1) se Acelerar estiver ativo.",
          "Ímpeto(4s). Em cada encontro, Empurra(2) e Enfraquece(1) se Ímpeto estiver ativo."
        ]
      },
      "S2_058": {
        "name": "Ino Yamanaka",
        "ability": "Transferência de Mente",
        "descriptions": [
          "Ao ser mobilizado, Concentração(8s) e assume o controle do rival no Médio Alcance da fileira com o Chakra mais alto. Quando a Concentração termina, devolve o controle da carta ao seu rival.",
          "Ao ser mobilizado, Concentração(12s) e assume o controle do rival no Médio Alcance da fileira com o Chakra mais alto. Ao fim da Concentração, devolve o controle da carta ao seu adversário."
        ]
      },
      "S2_059": {
        "name": "Hinata Hyuga",
        "ability": "Desviar",
        "descriptions": [
          "Ao encontrar, Empurra(1) e Troca de fileira com o card rival.",
          "Ao encontrar, Empurra(2) e Troca de fileira com o card rival."
        ]
      },
      "S2_060": {
        "name": "Gaara",
        "ability": "Escudo de Areia",
        "descriptions": [
          "Bloqueio(2). Quando a Bloqueio é ativada, Chakra(+1).",
          "Bloqueio(3). Quando Bloquear ativa, ganha Chakra(+1)."
        ]
      },
      "S2_061": {
        "name": "Temari",
        "ability": "Ventilador Gigante",
        "descriptions": [
          "Bloqueio(2). Ao ser mobilizado e quando a Bloqueio é ativada, Empurra(2) todos os adversários da fileira.",
          "Bloqueio(3). Ao ser mobilizado e quando Bloqueio ativa, Empurra(3) todos os rivais da fileira."
        ]
      },
      "S2_062": {
        "name": "Anko Mitarashi",
        "ability": "Serpente da Sombra que Ataca",
        "descriptions": [
          "Ao ser mobilizado, Enfraquece(2) e Fixa(4s) um carta rival da fileira no Médio Alcance.",
          "Ao ser mobilizado, Enfraquece(2) e Imobiliza(4s) duas cartas rivais da fileira no Médio Alcance."
        ]
      },
      "S2_063": {
        "name": "Choza Akimichi",
        "ability": "Expansão Corporal",
        "descriptions": [
          "Ao confrontar, Empurra(3) e Enfraquece(2) a carta adversária.",
          "Ao confrontar, Empurra(3) e Enfraquece(3) a carta adversária."
        ]
      },
      "S2_064": {
        "name": "Inoichi Yamanaka",
        "ability": "Destuição da Mente",
        "descriptions": [
          "Ao ser mobilizado, Concentração(10s) e assume o controle do rival no Médio Alcance da fileira mais próximo, o Retarda(10s) e desativa permanentemente qualquer habilidade ativa. Quando a Concentração termina, devolve o controle da carta ao seu rival.",
          "Ao ser mobilizado, Concentração(14s) e assume o controle do rival no Médio Alcance da fileira mais próximo, o Desacelera(10s) e desativa permanentemente qualquer habilidade ativa. Ao fim da Concentração, devolve o controle da carta ao seu adversário."
        ]
      },
      "S2_065": {
        "name": "Shikaku Nara",
        "ability": "Sombra Paralisante",
        "descriptions": [
          "Ao ser mobilizado, Imobiliza(10s) a si mesmo e dois adversários da fileira em Longo Alcance.",
          "Ao ser mobilizado, Imobiliza(12s) a si mesmo e dois rivais da fileira no Longo Alcance."
        ]
      },
      "S2_066": {
        "name": "Jiraiya",
        "ability": "Sábio Tarado",
        "descriptions": [
          "Troca de fileira aleatoriamente a cada 10 segundos.",
          "Troca de fileira aleatoriamente a cada 8 segundos."
        ]
      },
      "S2_067": {
        "name": "Orochimaru",
        "ability": "Maquinações",
        "descriptions": [
          "Ao ser mobilizado e ao se retirar, Enfraquece(1) até 4 cartas quaisquer.",
          "Ao ser mobilizado e ao se retirar, Enfraquece(1) até 6 cartas quaisquer."
        ]
      },
      "S2_068": {
        "name": "Hashirama Senju",
        "ability": "Reanimação Edo",
        "descriptions": [
          "Quando abaixo do Chakra base, ganha Chakra(+1) a cada 4 segundos até voltar ao Chakra base.",
          "Quando abaixo do Chakra base, ganha Chakra(+1) a cada 3 segundos até voltar ao Chakra base."
        ]
      },
      "S2_069": {
        "name": "Tobirama Senju",
        "ability": "Reanimação Edo",
        "descriptions": [
          "Quando abaixo do Chakra base, ganha Chakra(+1) a cada 4 segundos até voltar ao Chakra base.",
          "Quando abaixo do Chakra base, ganha Chakra(+1) a cada 3 segundos até voltar ao Chakra base."
        ]
      },
      "S2_070": {
        "name": "Hiruzen Sarutobi",
        "ability": "O Terceiro",
        "descriptions": [
          "Ao encontrar, ganha Chakra(+2). Ao ser retirado, concede Chakra(+2) a todos os aliados.",
          "Ao encontrar, ganha Chakra(+3). Ao ser retirado, concede Chakra(+2) a todos os aliados."
        ]
      },
      "S2_071": {
        "name": "Hayate Gekko",
        "ability": "Dança da Lua Crescente",
        "descriptions": [
          "Ao encontrar, Enfraquece(1) três vezes. Se o rival não for retirado, também Empurra(2).",
          "Ao encontrar, Enfraquece(1) três vezes. Se o rival não for retirado, também Empurra(3)."
        ]
      },
      "S2_072": {
        "name": "Ibiki Morino",
        "ability": "Interrogatório",
        "descriptions": [
          "Ao ser mobilizado, Enfraquece(1) e Retarda(4s) todos os cards.",
          "Ao ser mobilizado, Enfraquece(1) e Desacelera(6s) todos os cards."
        ]
      },
      "S2_073": {
        "name": "Gamahiro",
        "ability": "Peso",
        "descriptions": [
          "Ao ser mobilizado, ganha Chakra(+2) para cada Sapo aliado. Desaceleração permanente.",
          "Ao ser mobilizado, ganha Chakra(+3) para cada Sapo aliado. Desaceleração permanente."
        ]
      },
      "S2_074": {
        "name": "Sasuke Uchiha",
        "ability": "Chidori",
        "descriptions": [
          "Ao encontrar, salta através dos rivais próximos, Enfraquecendo(2) cada um deles. Ignora Bloqueio.",
          "Ao encontrar, salta através dos rivais próximos, Enfraquecendo(3) cada um deles. Ignora Bloqueio."
        ]
      },
      "S2_075": {
        "name": "Rock Lee",
        "ability": "Leveza",
        "descriptions": [
          "Ímpeto(3s). Em cada encontro, se o card rival tiver Chakra superior, Empurra(1) e Enfraquece(2), depois Troca de fileira.",
          "Ímpeto(3s). Em cada encontro, se o card rival tiver Chakra superior, Empurra(2) e Enfraquece(2), depois Troca de fileira."
        ]
      },
      "S2_076": {
        "name": "Neji Hyuga",
        "ability": "Rotação",
        "descriptions": [
          "Ao encontrar, Empurra(2) e Enfraquece(3) todos os cards rivais próximos.",
          "Ao encontrar, Empurra(4) e Enfraquece(3) todos os cards rivais próximos."
        ]
      },
      "S2_077": {
        "name": "Kiba Inuzuka",
        "ability": "Clone de Homem Besta",
        "descriptions": [
          "O próximo Akamaru mobilizado torna-se uma cópia completa deste card com Ímpeto(4s).",
          "O próximo Akamaru mobilizado torna-se uma cópia completa deste card com Ímpeto(5s)."
        ]
      },
      "S2_078": {
        "name": "Shikamaru Nara",
        "ability": "Mestre de Shogi",
        "descriptions": [
          "Ao ser mobilizado, Fixa(10s) a si mesmo e ganha Chakra(+3). Enquanto este card estiver ativo, sempre que você Fixar outros cards aliados ou eles se Concentrarem, eles ganham Chakra(+3).",
          "Ao ser mobilizado, Imobiliza(12s) a si mesmo e ganha Chakra(+4). Enquanto este card estiver ativo, sempre que você Imobilizar outros cards aliados ou eles ganharem Concentração, eles ganham Chakra(+3)."
        ]
      },
      "S2_079": {
        "name": "Asuma Sarutobi",
        "ability": "Lâminas de Chakra",
        "descriptions": [
          "Em cada encontro, Enfraquece(1). Quando este card faz um rival ser retirado, Ímpeto(+1s).",
          "Em cada encontro, Enfraquece(2). Quando este card faz um rival ser retirado, Ímpeto(+1s)."
        ]
      },
      "S2_080": {
        "name": "Gaara",
        "ability": "Instável",
        "descriptions": [
          "Ao ser mobilizado, Enfraquece(2) e Retarda(6s) todos os cards na fileira.",
          "Ao ser mobilizado, Enfraquece(2) e Desacelera(8s) todos os cards na fileira."
        ]
      },
      "S2_081": {
        "name": "Gaara",
        "ability": "Sede de Sangue",
        "descriptions": [
          "Ganha Chakra(+1) sempre que cards aliados Enfraquecem qualquer card.",
          "Ganha Chakra(+2) sempre que cards aliados Enfraquecem qualquer card."
        ]
      },
      "S2_082": {
        "name": "Kankuro",
        "ability": "Ataque de Marionete",
        "descriptions": [
          "Enfraquece(3) e Desacelera(2s) o primeiro adversário que se aproxima. Se ele não se retirar, Troca sua fileira. Ganha Chakra(+1) e reativa esta habilidade quando outro aliado faz um adversário Trocar de fileira.",
          "Enfraquece(3) e Desacelera(5s) o primeiro adversário que se aproxima. Se ele não se retirar, Troca sua fileira. Ganha Chakra(+1) e reativa esta habilidade quando outro aliado faz um adversário Trocar de fileira."
        ]
      },
      "S2_083": {
        "name": "Jiraya",
        "ability": "Sábio dos Sapos",
        "descriptions": [
          "Concede Chakra(+3) aos Sapos aliados enquanto este card estiver ativo.",
          "Concede Chakra(+4) aos Sapos aliados enquanto este card estiver ativo."
        ]
      },
      "S2_084": {
        "name": "Orochimaru",
        "ability": "Traição",
        "descriptions": [
          "Ignora todas as habilidades e encontros rivais. Quando no Médio Alcance, ganha Chakra(+2) e torna-se vulnerável.",
          "Ignora todas as habilidades e encontros rivais. Quando no Médio Alcance, ganha Chakra(+3) e torna-se vulnerável."
        ]
      },
      "S2_085": {
        "name": "Orochimaru",
        "ability": "Kusanagi",
        "descriptions": [
          "Em cada encontro, Enfraquece(2). Sempre que um card rival Troca de fileira, Troca para a mesma fileira e ganha Bloqueio(1).",
          "Em cada encontro, Enfraquece(3). Sempre que um card rival Troca de fileira, Troca para a mesma fileira e ganha Bloqueio(1)."
        ]
      },
      "S2_086": {
        "name": "Orochimaru",
        "ability": "Invocação: Reencarnação Impura",
        "descriptions": [
          "Ao ser mobilizado, Enfraquece(2) dois aliados com o menor Chakra. Para cada retirada, Invoca Edo Hashirama e Tobirama do seu deck, concedendo-lhes Ímpeto(3s).",
          "Ao ser mobilizado, Enfraquece(2) dois aliados com o menor Chakra. Para cada retirada, Invoca Edo Hashirama e Tobirama do seu deck, concedendo-lhes Ímpeto(5s)."
        ]
      },
      "S2_087": {
        "name": "Hashirama Senju",
        "ability": "Emersão da Floresta Profunda",
        "descriptions": [
          "Ao ser mobilizado, Fixa(12s) todos os cards rivais.",
          "Ao ser mobilizado, Imobiliza(14s) todos os cards rivais."
        ]
      },
      "S2_088": {
        "name": "Tobirama Senju",
        "ability": "Onda Chocante de Agua",
        "descriptions": [
          "Ao ser mobilizado, Enfraquece(2) e Lentidão(4s) todas as cartas adversárias.",
          "Ao ser mobilizado, Enfraquece(2) e Desacelera(8s) todos os cards rivais."
        ]
      },
      "S2_089": {
        "name": "Hiruzen Sarutobi",
        "ability": "Bomba do Dragão de Fogo",
        "descriptions": [
          "Ao ser mobilizado, Enfraquece(3) e Queima(4) a carta adversária mais próxima.",
          "Ao ser mobilizado, Enfraquece(3) e Queima(5) o card rival mais próximo."
        ]
      },
      "S2_090": {
        "name": "Enma",
        "ability": "Rei Macaco",
        "descriptions": [
          "Concede Chakra(+1) aos aliados quando eles Trocam de fileira.",
          "Concede Chakra(+2) aos aliados quando eles Trocam de fileira."
        ]
      },
      "S2_091": {
        "name": "Naruto Uzumaki",
        "ability": "Vontade de Proteger",
        "descriptions": [
          "Na primeira vez que este card fica abaixo do Chakra base, ganha Chakra(+4) e Ímpeto(3s). Ao ser retirado, aumenta permanentemente o Chakra base em 2.",
          "Na primeira vez que este card fica abaixo do Chakra base, ganha Chakra(+5) e Ímpeto(3s). Ao ser retirado, aumenta permanentemente o Chakra base em 2."
        ]
      },
      "S2_092": {
        "name": "Sasuke Uchiha",
        "ability": "Marca da Maldição",
        "descriptions": [
          "Ao ser mobilizado, ganha Chakra(+3). Após cada encontro, ganha Chakra(+2).",
          "Ao ser mobilizado, ganha Chakra(+4). Após cada encontro, ganha Chakra(+2)."
        ]
      },
      "S2_093": {
        "name": "Sakura Haruno",
        "ability": "Inflexível",
        "descriptions": [
          "Bloqueio Permanente. Toda vez que Bloqueio ativa, ganha Chakra(+1) e Troca de fileira.",
          "Bloqueio Permanente. Toda vez que Bloqueio ativa, ganha Chakra(+2) e Troca de fileira."
        ]
      },
      "S2_094": {
        "name": "Rock Lee",
        "ability": "Quinto Portão",
        "descriptions": [
          "Ao ser mobilizado, Concentração(5s). Se a Concentração for bem-sucedida, ganha Chakra(+7) e ativa o restante desta habilidade. Pule para a primeira carta rival que aparecer por perto. Em cada encontro, Enfraqueça(2) a carta rival e Enfraqueça(1) você mesmo.",
          "Ao ser mobilizado, Concentração(3s). Se a Concentração for bem-sucedida, ganha Chakra(+7) e ativa o resto desta habilidade. Pule para a primeira carta rival que aparecer por perto. Em cada encontro, Enfraqueça(2) a carta rival e Enfraqueça(1) você mesmo."
        ]
      },
      "S2_095": {
        "name": "Neji Hyuga",
        "ability": "Sessenta e Quatro Golpes",
        "descriptions": [
          "Em cada encontro, Empurra(1) e Enfraquece(1). Quando este card faz um rival ser retirado, também reduz permanentemente o Chakra base desse rival em 2.",
          "Em cada encontro, Empurra(1) e Enfraquece(2). Quando este card faz um rival ser retirado, também reduz permanentemente o Chakra base desse rival em 2."
        ]
      },
      "S2_096": {
        "name": "Gaara",
        "ability": "Liberação de Areia",
        "descriptions": [
          "Bloqueio(1). Quando uma carta adversária se aproxima, Imobiliza(8s) e ganha Chakra(+2). Se o adversário já estiver imobilizado, em vez disso Enfraquece(3) e ganha Bloqueio(1).",
          "Bloqueio(2). Sempre que uma carta rival se aproxima, Imobiliza(8s) e ganha Chakra(+2). Se o rival já estiver Imobilizado, Enfraquece(3) e ganha Bloqueio(1) em vez disso."
        ]
      },
      "S2_097": {
        "name": "Hiruzen Sarutobi",
        "ability": "Mestre Elemental",
        "descriptions": [
          "Ao ser mobilizado, Enfraquece(1) e Lentidão(8s) todos os adversários da fileira. A primeira vez que esta carta ganha Chakra, Enfraquece(2) e Queima(3) todos os adversários da fileira.",
          "Ao ser mobilizado, Enfraquece(1) e Desacelera(12s) todos os rivais da fileira. Na primeira vez que esta carta ganha Chakra, Enfraquece(2) e Queima(4) todos os rivais da fileira."
        ]
      },
      "S2_098": {
        "name": "Hiruzen Sarutobi",
        "ability": "Selo Ceifeiro da Morte",
        "descriptions": [
          "Ao ser mobilizado, Concentração(4s). Se a Concentração for bem-sucedida, ativa o restante desta habilidade. Quando uma carta adversária se aproxima com Chakra igual ou maior, remove até 12 Chakra dela e desativa qualquer habilidade ativa. Se o alvo recuar, Sela(15s). Ao recuar, se Sela(15s). Recua instantaneamente após selar 3 cartas.",
          "Ao ser mobilizado, Concentração(4s). Se a Concentração for bem-sucedida, ativa o resto desta habilidade. Quando uma carta rival se aproxima com Chakra igual ou superior, remove dela até 15 Chakra e desativa qualquer habilidade ativa. Se o alvo se retirar, aplica Selo(15s). Ao se retirar, aplica Selo(15s) a si mesmo. Retira-se instantaneamente após selar 3 cartas."
        ]
      },
      "S2_099": {
        "name": "Ichibi",
        "ability": "Bolas de Ar",
        "descriptions": [
          "Ao ser mobilizado, Enfraquece(2) todos os adversários de sua fileira em Longo Alcance. A cada 10 segundos, Concentração(2s). Se a Concentração for bem-sucedida, Enfraquece(2) todos os adversários de sua fileira em Longo Alcance.",
          "Ao ser mobilizado, Enfraquece(3) todos os adversários de sua fileira em Longo Alcance. A cada 10 segundos, Concentração(2s). Se a Concentração for bem-sucedida, Enfraquece(3) todos os adversários de sua fileira em Longo Alcance."
        ]
      },
      "S2_100": {
        "name": "Kyubi",
        "ability": "Destino Conectado",
        "descriptions": [
          "Chakra(+7) ao próximo aliado mobilizado. As cartas estão ligadas. Quando um é retirado, o outro também é.",
          "Chakra(+8) ao próximo aliado mobilizado. As cartas estão ligadas. Quando um é retirado, o outro também é."
        ]
      },
      "S3_001": {
        "name": "Naruto Uzumaki",
        "ability": "Sonho compartilhado",
        "descriptions": [
          "Sempre que outra carta com Sonho Compartilhado se retira, esta carta ganha Chakra(+1).",
          "Sempre que outra carta com Sonho Compartilhado se retira, esta carta ganha Chakra(+2)."
        ]
      },
      "S3_002": {
        "name": "Sasuke Uchiha",
        "ability": "Treinamento de bola de fogo",
        "descriptions": [
          "Ímpeto(1s). Ao ser mobilizada, Chakra(+1) para cada carta rival afetada por Queimadura.",
          "Ímpeto(2s). Ao ser mobilizada, Chakra(+1) para cada carta rival afetada por Queimadura."
        ]
      },
      "S3_003": {
        "name": "Choji Akimichi",
        "ability": "Expansão parcial",
        "descriptions": [
          "Quando uma carta rival se aproxima, Enfraquece(1) e Empurra(2).",
          "Quando uma carta rival se aproxima, Enfraquece(1) e Empurra(4)."
        ]
      },
      "S3_004": {
        "name": "Kankuro",
        "ability": "Troca de marionete",
        "descriptions": [
          "Ao confrontar, Teletransporta para trás da carta rival, Enfraquece(2) e Imobiliza(5s).",
          "Ao confrontar, Teletransporta para trás da carta rival, Enfraquece(2) e Imobiliza(8s)."
        ]
      },
      "S3_005": {
        "name": "Kankuro",
        "ability": "Dama de ferro",
        "descriptions": [
          "Quando uma carta rival se aproxima, puxa-a para esta carta e desativa sua habilidade, então Enfraquece(2).",
          "Quando uma carta rival se aproxima, puxa-a para esta carta e desativa sua habilidade, então Enfraquece(3)."
        ]
      },
      "S3_006": {
        "name": "Neji Hyuga",
        "ability": "Defesa restrita",
        "descriptions": [
          "Bloqueio(2). Quando Bloqueio ativa, 50% de chance de Imobilizar(6s) a si mesma.",
          "Bloqueio(3). Quando Bloqueio ativa, 50% de chance de Imobilizar(6s) a si mesma."
        ]
      },
      "S3_007": {
        "name": "Shikamaru Nara",
        "ability": "Preguiçoso",
        "descriptions": [
          "Ímpeto(2s)",
          "Ímpeto(3s)"
        ]
      },
      "S3_008": {
        "name": "Jiraiya",
        "ability": "Ímpeto",
        "descriptions": [
          "Ímpeto(4s)",
          "Ímpeto(5s)"
        ]
      },
      "S3_009": {
        "name": "Jiraiya",
        "ability": "Armadilha da boca do sapo",
        "descriptions": [
          "Ao ser mobilizada, Imobiliza(6s) todas as cartas da fileira.",
          "Ao ser mobilizada, Imobiliza(10s) todas as cartas da fileira."
        ]
      },
      "S3_010": {
        "name": "Jiraiya",
        "ability": "Treinamento avançado",
        "descriptions": [
          "Sempre que você mobiliza um aliado de fileira com 3 ou menos de Chakra, concede a ele Concentração(8s). Se essa Concentração for bem-sucedida, a carta aliada ganha Chakra(+3).",
          "Sempre que você mobiliza um aliado de fileira com 3 ou menos de Chakra, concede a ele Concentração(8s). Se essa Concentração for bem-sucedida, a carta aliada ganha Chakra(+4)."
        ]
      },
      "S3_011": {
        "name": "Orochimaru",
        "ability": "Em guarda",
        "descriptions": [
          "Bloqueio(1)",
          "Bloqueio(2)"
        ]
      },
      "S3_012": {
        "name": "Orochimaru",
        "ability": "Esquivo",
        "descriptions": [
          "Ímpeto(3s). Quando uma carta rival se aproxima, Enfraquece(1) e Troca de fileira.",
          "Ímpeto(5s). Quando uma carta rival se aproxima, Enfraquece(1) e Troca de fileira."
        ]
      },
      "S3_013": {
        "name": "Tsunade",
        "ability": "Ímpeto",
        "descriptions": [
          "Ímpeto(3s)",
          "Ímpeto(4s)"
        ]
      },
      "S3_014": {
        "name": "Tsunade",
        "ability": "Peteleco poderoso",
        "descriptions": [
          "Bloqueio(1). Quando uma carta rival se aproxima, salta sobre ela e a Empurra(2).",
          "Bloqueio(1). Quando uma carta rival se aproxima, salta sobre ela e a Empurra(4)."
        ]
      },
      "S3_015": {
        "name": "Tsunade",
        "ability": "Experiente",
        "descriptions": [
          "Ímpeto(3s). Ao confrontar, Empurra(1).",
          "Ímpeto(4s). Ao confrontar, Empurra(1)."
        ]
      },
      "S3_016": {
        "name": "Manda",
        "ability": "Serpente colossal",
        "descriptions": [
          "Ímpeto(4s) e Bloqueio(1). Quando Bloqueio ativa, Troca de fileira.",
          "Ímpeto(4s) e Bloqueio(2). Quando Bloqueio ativa, Troca de fileira."
        ]
      },
      "S3_017": {
        "name": "Katsuyu",
        "ability": "Jato de ácido",
        "descriptions": [
          "Ao ser mobilizada, Enfraquece(2) e Desacelera(6s) todos os rivais em Médio Alcance.",
          "Ao ser mobilizada, Enfraquece(3) e Desacelera(6s) todos os rivais em Médio Alcance."
        ]
      },
      "S3_018": {
        "name": "Hiruzen Sarutobi",
        "ability": "Teste dos sinos",
        "descriptions": [
          "Desacelera(6s) os próximos três aliados mobilizados, concedendo-lhes Chakra(+1) a cada 3 segundos enquanto estiverem sob esta Desaceleração.",
          "Desacelera(9s) os próximos três aliados mobilizados, concedendo-lhes Chakra(+1) a cada 3 segundos enquanto estiverem sob esta Desaceleração."
        ]
      },
      "S3_019": {
        "name": "Itachi Uchiha",
        "ability": "Irmão mais velho",
        "descriptions": [
          "O próximo Sasuke mobilizado ganha Chakra(+2) e Ímpeto(4s) se for mobilizado na mesma fileira, ou Bloqueio(2) e Desacelera(10s) se for mobilizado em outra fileira.",
          "O próximo Sasuke mobilizado ganha Chakra(+2) e Ímpeto(5s) se for mobilizado na mesma fileira, ou Bloqueio(2) e Desacelera(12s) se for mobilizado em outra fileira."
        ]
      },
      "S3_020": {
        "name": "Jirobo",
        "ability": "Liberação do selo amaldiçoado",
        "descriptions": [
          "Bloqueio(1). Ao confrontar, Empurra(1).",
          "Bloqueio(2). Ao confrontar, Empurra(1)."
        ]
      },
      "S3_021": {
        "name": "Kidomaru",
        "ability": "Liberação do selo amaldiçoado",
        "descriptions": [
          "Bloqueio(1) e Ímpeto(2s).",
          "Bloqueio(1) e Ímpeto(4s)."
        ]
      },
      "S3_022": {
        "name": "Kidomaru",
        "ability": "Chuva de aranhas",
        "descriptions": [
          "Ao ser mobilizada, Imobiliza(4s) ou Desacelera(6s) aleatoriamente todas as cartas rivais.",
          "Ao ser mobilizada, Imobiliza(6s) ou Desacelera(8s) aleatoriamente todas as cartas rivais."
        ]
      },
      "S3_023": {
        "name": "Kimimaro",
        "ability": "Controle dos ossos",
        "descriptions": [
          "Ímpeto(2s). Ao confrontar, Enfraquece(3).",
          "Ímpeto(4s). Ao confrontar, Enfraquece(3)."
        ]
      },
      "S3_024": {
        "name": "Sakon & Ukon",
        "ability": "Liberação do selo amaldiçoado",
        "descriptions": [
          "Bloqueio(1). Ao confrontar, Enfraquece(1).",
          "Bloqueio(1). Ao confrontar, Enfraquece(2)."
        ]
      },
      "S3_025": {
        "name": "Tayuya",
        "ability": "Liberação do selo amaldiçoado",
        "descriptions": [
          "Bloqueio(1) e Ímpeto(2s).",
          "Bloqueio(1) e Ímpeto(4s)."
        ]
      },
      "S3_026": {
        "name": "Kimimaro",
        "ability": "Liberação do selo amaldiçoado",
        "descriptions": [
          "Bloqueio(1). Quando uma carta rival se aproxima, Imobiliza(2s) a si mesma e Chakra(+1). Ao confrontar, Enfraquece(1).",
          "Bloqueio(2). Quando uma carta rival se aproxima, Imobiliza(2s) a si mesma e Chakra(+1). Ao confrontar, Enfraquece(1)."
        ]
      },
      "S3_027": {
        "name": "Shizune",
        "ability": "Porquinho devotado",
        "descriptions": [
          "Ao ser mobilizada, Invoca Tonton com Chakra(1) e Ímpeto(5s) na mesma fileira que a Tsunade aliada. Ao alcançar uma carta Tsunade aliada, concede-lhe Chakra(+3) e então se retira.",
          "Ao ser mobilizada, Invoca Tonton com Chakra(1) e Ímpeto(5s) na mesma fileira que a Tsunade aliada. Ao alcançar uma carta Tsunade aliada, concede-lhe Chakra(+4) e então se retira."
        ]
      },
      "S3_028": {
        "name": "Tsume Inuzuka",
        "ability": "Mestra dos cães",
        "descriptions": [
          "Ao ser mobilizada, Invoca Kuromaru com Chakra(3) em outra fileira. O próximo Cão Ninja mobilizado ganha Chakra(+2).",
          "Ao ser mobilizada, Invoca Kuromaru com Chakra(3) em outra fileira. O próximo Cão Ninja mobilizado ganha Chakra(+3)."
        ]
      },
      "S3_029": {
        "name": "Akahoshi",
        "ability": "Treinamento enganoso",
        "descriptions": [
          "Sempre que cartas aliadas se concentram, concede-lhes Concentração(+4s). Enfraquece(1) as cartas aliadas a cada 4 segundos durante a Concentração.",
          "Sempre que cartas aliadas se concentram, concede-lhes Concentração(+6s). Enfraquece(1) as cartas aliadas a cada 4 segundos durante a Concentração."
        ]
      },
      "S3_030": {
        "name": "Amachi",
        "ability": "Bala de água",
        "descriptions": [
          "Ímpeto(2s). Ao ser mobilizada, Enfraquece(1) a carta rival mais próxima em Médio Alcance.",
          "Ímpeto(3s). Ao ser mobilizada, Enfraquece(2) a carta rival mais próxima em Médio Alcance."
        ]
      },
      "S3_031": {
        "name": "Aoi Rokusho",
        "ability": "Chuva de agulhas",
        "descriptions": [
          "Ao confrontar, Enfraquece(1) e Desacelera(3s) todos os rivais de fileira próximos.",
          "Ao confrontar, Enfraquece(1) e Desacelera(5s) todos os rivais de fileira próximos."
        ]
      },
      "S3_032": {
        "name": "Dan Kato",
        "ability": "Sonho compartilhado",
        "descriptions": [
          "Sempre que outra carta com Sonho Compartilhado se retira, esta carta ganha Chakra(+1).",
          "Sempre que outra carta com Sonho Compartilhado se retira, esta carta ganha Chakra(+2)."
        ]
      },
      "S3_033": {
        "name": "Fugaku Uchiha",
        "ability": "Líder dos Uchiha",
        "descriptions": [
          "Ao mobilizar cartas Uchiha aliadas, elas ganham Bloqueio(+1) e Desacelera(6s) se tiverem 3 de Chakra ou menos, caso contrário ganham Chakra(+2) e Imobilização(4s).",
          "Ao mobilizar cartas Uchiha aliadas, elas ganham Bloqueio(+2) e Desacelera(6s) se tiverem 3 de Chakra ou menos, caso contrário ganham Chakra(+3) e Imobilização(4s)."
        ]
      },
      "S3_034": {
        "name": "Fūjin",
        "ability": "Força lendária",
        "descriptions": [
          "Bloqueio(1). Ao confrontar, Enfraquece(1) e Empurra(3).",
          "Bloqueio(2). Ao confrontar, Enfraquece(1) e Empurra(3)."
        ]
      },
      "S3_035": {
        "name": "Gamatatsu",
        "ability": "Motivado por comida",
        "descriptions": [
          "Ao ser mobilizada, Concentra(12s). A cada 4 segundos durante a Concentração, gasta 1 energia se disponível para conceder Chakra(+2) aos outros Sapos aliados.",
          "Ao ser mobilizada, Concentra(16s). A cada 4 segundos durante a Concentração, gasta 1 energia se disponível para conceder Chakra(+2) aos outros Sapos aliados."
        ]
      },
      "S3_036": {
        "name": "Hanzaki",
        "ability": "Plano de roubo",
        "descriptions": [
          "Ímpeto(2s). Ao ser mobilizada, Enfraquece(1) todos os aliados de fileira, ganhando Chakra(+2) para cada aliado afetado.",
          "Ímpeto(3s). Ao ser mobilizada, Enfraquece(1) todos os aliados de fileira, ganhando Chakra(+2) para cada aliado afetado."
        ]
      },
      "S3_037": {
        "name": "Hanzaki",
        "ability": "Investida do Zanbato",
        "descriptions": [
          "Bloqueio(1). Quando uma carta rival se aproxima, salta sobre ela e a Enfraquece(1) ou Empurra(1).",
          "Bloqueio(2). Quando uma carta rival se aproxima, salta sobre ela e a Enfraquece(1) ou Empurra(1)."
        ]
      },
      "S3_038": {
        "name": "Idate Morino",
        "ability": "Corredor",
        "descriptions": [
          "Ímpeto(4s). Ao confrontar, Troca de fileira.",
          "Ímpeto(5s). Ao confrontar, Troca de fileira."
        ]
      },
      "S3_039": {
        "name": "Jirocho Wasabi",
        "ability": "Crença sincera",
        "descriptions": [
          "O próximo aliado mobilizado em outra fileira ganha Ímpeto(2s) e Bloqueio(1). Quando ele chega ao Médio Alcance, converte o Ímpeto restante em até 3 Chakra.",
          "O próximo aliado mobilizado em outra fileira ganha Ímpeto(3s) e Bloqueio(1). Quando ele chega ao Médio Alcance, converte o Ímpeto restante em até 3 Chakra."
        ]
      },
      "S3_040": {
        "name": "Arashi",
        "ability": "Mandala de aprisionamento",
        "descriptions": [
          "Ao ser mobilizada, Empurra(2) e Imobiliza(8s) o rival de fileira com mais Chakra. Enquanto esse rival estiver sob esta Imobilização, Enfraquece(1) a carta rival a cada 4s.",
          "Ao ser mobilizada, Empurra(4) e Imobiliza(8s) o rival de fileira com mais Chakra. Enquanto esse rival estiver sob esta Imobilização, Enfraquece(1) a carta rival a cada 4s."
        ]
      },
      "S3_041": {
        "name": "Kagerō",
        "ability": "Arte ninja Kagero",
        "descriptions": [
          "Ao ser mobilizada, Enfraquece(3) dois rivais de fileira em Médio Alcance, então Troca de fileira a si mesma e a dois aliados de fileira em Curto Alcance.",
          "Ao ser mobilizada, Enfraquece(4) dois rivais de fileira em Médio Alcance, então Troca de fileira a si mesma e a dois aliados de fileira em Curto Alcance."
        ]
      },
      "S3_042": {
        "name": "Kyuroku Wagarashi",
        "ability": "Desonra",
        "descriptions": [
          "O próximo aliado da própria fileira mobilizado ganha Ímpeto(4s). Quando Kyuroku se retira, esse aliado Troca de fileira e todos os aliados da própria fileira são Desacelerados(3s).",
          "O próximo aliado da própria fileira mobilizado ganha Ímpeto(5s). Quando Kyuroku se retira, esse aliado Troca de fileira e todos os aliados da própria fileira são Desacelerados(3s)."
        ]
      },
      "S3_043": {
        "name": "Mikoto Uchiha",
        "ability": "Alívio",
        "descriptions": [
          "O próximo Sasuke mobilizado ganha Chakra(+1). A primeira vez que uma carta Sasuke aliada fica abaixo do Chakra base, Cura(1).",
          "O próximo Sasuke mobilizado ganha Chakra(+1). A primeira vez que uma carta Sasuke aliada fica abaixo do Chakra base, Cura(2)."
        ]
      },
      "S3_044": {
        "name": "Mizuki",
        "ability": "Selo amaldiçoado animal",
        "descriptions": [
          "Ao confrontar, Enfraquece(4). Após 20 segundos, define seu Chakra em Chakra(1) e desativa esta habilidade.",
          "Ao confrontar, Enfraquece(5). Após 20 segundos, define seu Chakra em Chakra(1) e desativa esta habilidade."
        ]
      },
      "S3_045": {
        "name": "Nawaki",
        "ability": "Sonho compartilhado",
        "descriptions": [
          "Sempre que outra carta com Sonho Compartilhado se retira, esta carta ganha Chakra(+1).",
          "Sempre que outra carta com Sonho Compartilhado se retira, esta carta ganha Chakra(+2)."
        ]
      },
      "S3_046": {
        "name": "Raiga Kurosuki",
        "ability": "Espadas do trovão",
        "descriptions": [
          "Quando uma carta rival se aproxima, Enfraquece(1) e Troca a fileira dela.",
          "Quando uma carta rival se aproxima, Enfraquece(2) e Troca a fileira dela."
        ]
      },
      "S3_047": {
        "name": "Raijin",
        "ability": "Força lendária",
        "descriptions": [
          "Bloqueio(1). Ao confrontar, Enfraquece(1) e Empurra(3).",
          "Bloqueio(2). Ao confrontar, Enfraquece(1) e Empurra(3)."
        ]
      },
      "S3_048": {
        "name": "Sumaru",
        "ability": "Guia local",
        "descriptions": [
          "Ao ser mobilizada, dois aliados em Curto Alcance ganham Ímpeto(3s).",
          "Ao ser mobilizada, três aliados em Curto Alcance ganham Ímpeto(3s)."
        ]
      },
      "S3_049": {
        "name": "Yoshino Nara",
        "ability": "Rigor",
        "descriptions": [
          "O próximo Shikamaru mobilizado ganha Chakra(+1) e Desacelera(8s).",
          "O próximo Shikamaru mobilizado ganha Chakra(+1) e Desacelera(12s)."
        ]
      },
      "S3_050": {
        "name": "Uchiha Trio",
        "ability": "Suspeita",
        "descriptions": [
          "Ímpeto(4s). Quando em Médio Alcance, Chakra(+2).",
          "Ímpeto(6s). Quando em Médio Alcance, Chakra(+2)."
        ]
      },
      "S3_051": {
        "name": "Naruto Uzumaki",
        "ability": "Manto da raposa demoníaca",
        "descriptions": [
          "Ímpeto(3s). Ao ser mobilizada, Chakra(+2). A primeira vez que esta carta fica abaixo do Chakra base, Cura(2).",
          "Ímpeto(5s). Ao ser mobilizada, Chakra(+2). A primeira vez que esta carta fica abaixo do Chakra base, Cura(2)."
        ]
      },
      "S3_052": {
        "name": "Sasuke Uchiha",
        "ability": "Liberação do selo amaldiçoado",
        "descriptions": [
          "A primeira vez que esta carta ganha Chakra, ganha Chakra(+2) adicional.",
          "A primeira vez que esta carta ganha Chakra, ganha Chakra(+4) adicional."
        ]
      },
      "S3_053": {
        "name": "Kankuro",
        "ability": "Superioridade tática",
        "descriptions": [
          "Sempre que aliados se teletransportam para trás de rivais, ganha Chakra(+2).",
          "Sempre que aliados se teletransportam para trás de rivais, ganha Chakra(+3)."
        ]
      },
      "S3_054": {
        "name": "Shikamaru Nara",
        "ability": "Estrangulamento da sombra",
        "descriptions": [
          "Quando um adversário se aproxima, Imobiliza(6s) ele e esta carta. O adversário perde 1 Chakra a cada 2 segundos enquanto estiver sob esta Imobilização.",
          "Quando um adversário se aproxima, Imobiliza(8s) ele e esta carta. O adversário perde 1 Chakra a cada 2 segundos enquanto estiver sob esta Imobilização."
        ]
      },
      "S3_055": {
        "name": "Akamaru",
        "ability": "Marcação",
        "descriptions": [
          "Ao ser mobilizada, Desacelera(8s) todos os rivais de fileira. Enquanto esta Desaceleração estiver ativa, Enfraquecimento(+1) às habilidades Enfraquecer aliadas aplicadas aos rivais afetados.",
          "Ao ser mobilizada, Desacelera(12s) todos os rivais de fileira. Enquanto esta Desaceleração estiver ativa, Enfraquecimento(+1) às habilidades Enfraquecer aliadas aplicadas aos rivais afetados."
        ]
      },
      "S3_056": {
        "name": "Itachi Uchiha",
        "ability": "Compostura",
        "descriptions": [
          "Ganha Chakra(+1) e Imobiliza(2s) a si mesma sempre que uma carta ganha Foco.",
          "Ganha Chakra(+2) e Imobiliza(4s) a si mesma sempre que uma carta ganha Foco."
        ]
      },
      "S3_057": {
        "name": "Jiraiya",
        "ability": "Experiente",
        "descriptions": [
          "Ímpeto(3s). Ao confrontar, Troca de fileira.",
          "Ímpeto(4s). Ao confrontar, Troca de fileira."
        ]
      },
      "S3_058": {
        "name": "Jiraiya",
        "ability": "Jizo de agulhas",
        "descriptions": [
          "Bloqueio(2). Quando Bloqueio ativa, Enfraquece(2) o rival que o acionou. Ignora Bloqueio.",
          "Bloqueio(3). Quando Bloqueio ativa, Enfraquece(2) o rival que o acionou. Ignora Bloqueio."
        ]
      },
      "S3_059": {
        "name": "Orochimaru",
        "ability": "Experiente",
        "descriptions": [
          "Ímpeto(3s). Ao confrontar, Enfraquece(1).",
          "Ímpeto(4s). Ao confrontar, Enfraquece(1)."
        ]
      },
      "S3_060": {
        "name": "Tsunade",
        "ability": "A Quinta",
        "descriptions": [
          "Ao ser mobilizada, concede Chakra(+1) a todos os aliados nas outras fileiras. Enquanto esta carta estiver ativa, Cura(2) cada aliado na primeira vez que ele é Enfraquecido.",
          "Ao ser mobilizada, concede Chakra(+2) a todos os aliados nas outras fileiras. Enquanto esta carta estiver ativa, Cura(2) cada aliado na primeira vez que ele é Enfraquecido."
        ]
      },
      "S3_061": {
        "name": "Tsunade",
        "ability": "Alvo fácil lendário",
        "descriptions": [
          "Ao ser mobilizada, 10% de chance de ganhar Chakra(+6). Caso contrário, ganha Ímpeto(3s).",
          "Ao ser mobilizada, 10% de chance de ganhar Chakra(+7). Caso contrário, ganha Ímpeto(4s)."
        ]
      },
      "S3_062": {
        "name": "Tsunade",
        "ability": "Cura desesperada",
        "descriptions": [
          "Ao ser mobilizada, Cura(2) o aliado de fileira mais próximo. A primeira vez que um aliado de fileira perde Chakra de qualquer fonte, Cura(2).",
          "Ao ser mobilizada, Cura(3) o aliado de fileira mais próximo. A primeira vez que um aliado de fileira perde Chakra de qualquer fonte, Cura(3)."
        ]
      },
      "S3_063": {
        "name": "Gamabunta",
        "ability": "Kenjutsu do sapo",
        "descriptions": [
          "Quando uma carta rival se aproxima, salta sobre ela e a Enfraquece(2). Ganha Ímpeto(+3s) na primeira vez que ganha Chakra.",
          "Quando uma carta rival se aproxima, salta sobre ela e a Enfraquece(3). Ganha Ímpeto(+4s) na primeira vez que ganha Chakra."
        ]
      },
      "S3_064": {
        "name": "Kabuto Yakuchi",
        "ability": "Bisturi de Chakra",
        "descriptions": [
          "Ímpeto(2s). Ao confrontar, Teletransporta para trás da carta rival e a Imobiliza permanentemente.",
          "Ímpeto(3s). Ao confrontar, Teletransporta para trás da carta rival e a Imobiliza permanentemente."
        ]
      },
      "S3_065": {
        "name": "Kisame Hoshigaki",
        "ability": "Bloqueio da Samehada",
        "descriptions": [
          "Bloqueio(3). Quando Bloqueio ativa, Enfraquece(1) o rival que o acionou e ganha Chakra(+1).",
          "Bloqueio(4). Quando Bloqueio ativa, Enfraquece(1) o rival que o acionou e ganha Chakra(+1)."
        ]
      },
      "S3_066": {
        "name": "Jirobo",
        "ability": "Drenagem de Chakra",
        "descriptions": [
          "A cada confronto, Chakra(+1) para esta carta e Enfraquece(1) a carta rival.",
          "A cada confronto, Chakra(+1) para esta carta e Enfraquece(2) a carta rival."
        ]
      },
      "S3_067": {
        "name": "Sakon & Ukon",
        "ability": "Fusão amaldiçoada",
        "descriptions": [
          "Ao confrontar, Teletransporta para trás da carta rival e então Imobiliza(6s) a ela e a esta carta. O rival perde 1 Chakra a cada 2 segundos enquanto sob esta Imobilização.",
          "Ao confrontar, Teletransporta para trás da carta rival e então Imobiliza(8s) a ela e a esta carta. O rival perde 1 Chakra a cada 2 segundos enquanto sob esta Imobilização."
        ]
      },
      "S3_068": {
        "name": "Kurenai Yuhi",
        "ability": "Finta de genjutsu",
        "descriptions": [
          "Ao confrontar, Teletransporta para trás da carta rival, Enfraquece(2) e Desacelera(4s).",
          "Ao confrontar, Teletransporta para trás da carta rival, Enfraquece(2) e Desacelera(8s)."
        ]
      },
      "S3_069": {
        "name": "Shizune",
        "ability": "Névoa venenosa",
        "descriptions": [
          "Ao ser mobilizada, Desacelera(8s) todas as cartas em Médio Alcance e desativa suas habilidades. Elas perdem 2 Chakra a cada 4 segundos enquanto sob esta Desaceleração.",
          "Ao ser mobilizada, Desacelera(12s) todas as cartas em Médio Alcance e desativa suas habilidades. Elas perdem 2 Chakra a cada 4 segundos enquanto sob esta Desaceleração."
        ]
      },
      "S3_070": {
        "name": "Akahoshi",
        "ability": "Sem escrúpulos",
        "descriptions": [
          "Bloqueio(1). Quando Bloqueio ativa, Enfraquece(2) o rival que o ativou. A primeira vez que esta carta perde Chakra, Enfraquece(2) um aliado aleatório e ganha Chakra(+2) e Bloqueio(+1).",
          "Bloqueio(1). Quando Bloqueio ativa, Enfraquece(2) o rival que o ativou. A primeira vez que esta carta perde Chakra, Enfraquece(2) um aliado aleatório e ganha Chakra(+3) e Bloqueio(+1)."
        ]
      },
      "S3_071": {
        "name": "Amachi",
        "ability": "Monstro marinho",
        "descriptions": [
          "Ao ser mobilizada, Imobiliza(6s) a si mesma. Enquanto sob Imobilização, a cada 3 segundos Imobiliza(3s) ou Desacelera(6s) todos os rivais de fileira.",
          "Ao ser mobilizada, Imobiliza(9s) a si mesma. Enquanto sob Imobilização, a cada 3 segundos Imobiliza(3s) ou Desacelera(6s) todos os rivais de fileira."
        ]
      },
      "S3_072": {
        "name": "Aoi Rokusho",
        "ability": "Espada de Raijin",
        "descriptions": [
          "Bloqueio(2). Ao confrontar, Enfraquece(1) e Imobiliza(2s) a carta rival. Ignora Bloqueio.",
          "Bloqueio(2). Ao confrontar, Enfraquece(2) e Imobiliza(4s) a carta rival. Ignora Bloqueio."
        ]
      },
      "S3_073": {
        "name": "Sumaru",
        "ability": "Chakra da estrela",
        "descriptions": [
          "Ao ser mobilizada, Chakra(+1) e Troca de fileira se houver aliados de fileira. Ao confrontar, Enfraquece(2) a carta rival.",
          "Ao ser mobilizada, Chakra(+1) e Troca de fileira se houver aliados de fileira. Ao confrontar, Enfraquece(3) a carta rival."
        ]
      },
      "S3_074": {
        "name": "Naruto Uzumaki",
        "ability": "Rasengan",
        "descriptions": [
          "Ao confrontar, Enfraquece(2) e Empurra(4). Remove toda Bloqueio da carta adversária.",
          "Ao confrontar, Enfraquece(3) e Empurra(5). Remove toda Bloqueio da carta adversária."
        ]
      },
      "S3_075": {
        "name": "Naruto Uzumaki",
        "ability": "Forma de uma cauda",
        "descriptions": [
          "A cada confronto, Enfraquece(1). A primeira vez que esta carta fica abaixo do Chakra base, Cura(3) a si mesma.",
          "A cada confronto, Enfraquece(1). A primeira vez que esta carta fica abaixo do Chakra base, Cura(4) a si mesma."
        ]
      },
      "S3_076": {
        "name": "Sasuke Uchiha",
        "ability": "Previsão evoluída",
        "descriptions": [
          "Bloqueio(3). Quando Bloqueio ativa, Chakra(+1). Não pode ser Enfraquecido em confrontos com cartas rivais de 3 de Chakra ou menos.",
          "Bloqueio(3). Quando Bloqueio ativa, Chakra(+2). Não pode ser Enfraquecido em confrontos com cartas rivais de 3 de Chakra ou menos."
        ]
      },
      "S3_077": {
        "name": "Sasuke Uchiha",
        "ability": "Defesa alada",
        "descriptions": [
          "Bloqueio(2). Ao confrontar, Enfraquece(2). Quando Bloqueio ativa, ganha Ímpeto(2s) e reativa esta habilidade.",
          "Bloqueio(2). Ao confrontar, Enfraquece(2). Quando Bloqueio ativa, ganha Ímpeto(4s) e reativa esta habilidade."
        ]
      },
      "S3_078": {
        "name": "Gaara",
        "ability": "Escudo de Shukaku",
        "descriptions": [
          "Bloqueio(3). Enquanto esta carta estiver ativa, os aliados de fileira atrás dela ignoram os efeitos de habilidade rivais, mas consomem o Bloqueio desta carta.",
          "Bloqueio(4). Enquanto esta carta estiver ativa, os aliados de fileira atrás dela ignoram os efeitos de habilidade rivais, mas consomem o Bloqueio desta carta."
        ]
      },
      "S3_079": {
        "name": "Kiba Inuzuka",
        "ability": "Combo de transformação",
        "descriptions": [
          "Ao ser mobilizada, retira Akamaru e Kiba aliados e transfere o Chakra deles para esta carta, ganhando Chakra(+1) adicional por retirada. A cada confronto, Enfraquece(1).",
          "Ao ser mobilizada, retira Akamaru e Kiba aliados e transfere o Chakra deles para esta carta, ganhando Chakra(+2) adicional por retirada. A cada confronto, Enfraquece(1)."
        ]
      },
      "S3_080": {
        "name": "Rock Lee",
        "ability": "Punho embriagado",
        "descriptions": [
          "A cada 10s, Concentra(3s). Se a Concentração for bem-sucedida, ganha aleatoriamente Ímpeto(2s), Bloqueio(1) ou Chakra(+1). A cada confronto, Enfraquece(1).",
          "A cada 8s, Concentra(3s). Se a Concentração for bem-sucedida, ganha aleatoriamente Ímpeto(2s), Bloqueio(1) ou Chakra(+1). A cada confronto, Enfraquece(1)."
        ]
      },
      "S3_081": {
        "name": "Temari",
        "ability": "Dança de decapitação rápida",
        "descriptions": [
          "Ao ser mobilizada, Concentra(9s). A cada 3 segundos durante a Concentração, Enfraquece(1) e Empurra(2) todos os rivais em Médio e Longo Alcance.",
          "Ao ser mobilizada, Concentra(9s). A cada 3 segundos durante a Concentração, Enfraquece(1) e Empurra(4) todos os rivais em Médio e Longo Alcance."
        ]
      },
      "S3_082": {
        "name": "Itachi Uchiha",
        "ability": "Exército de Tsukuyomi",
        "descriptions": [
          "Enquanto esta carta estiver ativa, sempre que você Imobiliza cartas rivais, Invoca um clone desta carta nessa mesma fileira com Ímpeto(4s) e perde 1 Chakra. Os clones não podem marcar pontos nem ganhar Chakra.",
          "Enquanto esta carta estiver ativa, sempre que você Imobiliza cartas rivais, Invoca um clone desta carta nessa mesma fileira com Ímpeto(6s) e perde 1 Chakra. Os clones não podem marcar pontos nem ganhar Chakra."
        ]
      },
      "S3_083": {
        "name": "Itachi Uchiha",
        "ability": "Fuga do Amaterasu",
        "descriptions": [
          "Sempre que uma carta rival se aproxima, Queima(10), então Troca de fileira e perde 1 Chakra. Este efeito de Queimadura pode se espalhar para outras cartas ao se tocarem e ignora Bloqueio.",
          "Sempre que uma carta rival se aproxima, Queima(15), então Troca de fileira e perde 1 Chakra. Este efeito de Queimadura pode se espalhar para outras cartas ao se tocarem e ignora Bloqueio."
        ]
      },
      "S3_084": {
        "name": "Jiraiya",
        "ability": "Lança-chamas de óleo de sapo",
        "descriptions": [
          "Ao ser mobilizada, Queima(3) todas as cartas rivais e então Concentra(8s). Durante a Concentração, ganha Chakra(+1) sempre que aliados aplicam Queimadura. Se a Concentração for bem-sucedida, Queima(4) todas as cartas rivais.",
          "Ao ser mobilizada, Queima(3) todas as cartas rivais e então Concentra(8s). Durante a Concentração, ganha Chakra(+1) sempre que aliados aplicam Queimadura. Se a Concentração for bem-sucedida, Queima(5) todas as cartas rivais."
        ]
      },
      "S3_085": {
        "name": "Gamabunta",
        "ability": "Combo de óleo de sapo",
        "descriptions": [
          "Ao ser mobilizada, Queima(3) todos os rivais de fileira. Se algum rival já estiver sob Queimadura, dispara instantaneamente a quantidade de Queimadura restante.",
          "Ao ser mobilizada, Queima(4) todos os rivais de fileira. Se algum rival já estiver sob Queimadura, dispara instantaneamente a quantidade de Queimadura restante."
        ]
      },
      "S3_086": {
        "name": "Kidomaru",
        "ability": "Arco da aranha",
        "descriptions": [
          "Ao ser mobilizada, Concentra(12s). A cada 4 segundos durante a Concentração, Enfraquece(2) e Imobiliza(6s) o rival com mais Chakra em Longo Alcance.",
          "Ao ser mobilizada, Concentra(16s). A cada 4 segundos durante a Concentração, Enfraquece(2) e Imobiliza(6s) o rival com mais Chakra em Longo Alcance."
        ]
      },
      "S3_087": {
        "name": "Tayuya",
        "ability": "Flauta demoníaca",
        "descriptions": [
          "Ao ser mobilizada, Chakra(+1). Enquanto esta carta estiver ativa, as Desacelerações aplicadas por aliados não expiram.",
          "Ao ser mobilizada, Chakra(+2). Enquanto esta carta estiver ativa, as Desacelerações aplicadas por aliados não expiram."
        ]
      },
      "S3_088": {
        "name": "Kimimaro",
        "ability": "Arma viva",
        "descriptions": [
          "Bloqueio(3). A cada confronto, Enfraquece(2). Troca de fileira ao fazer um rival se retirar.",
          "Bloqueio(5). A cada confronto, Enfraquece(2). Troca de fileira ao fazer um rival se retirar."
        ]
      },
      "S3_089": {
        "name": "Akahoshi",
        "ability": "Dragão da estrela",
        "descriptions": [
          "Ao ser mobilizada, Empurra(2), Enfraquece(1) e Imobiliza(4s) todos os rivais de fileira.",
          "Ao ser mobilizada, Empurra(2), Enfraquece(1) e Imobiliza(8s) todos os rivais de fileira."
        ]
      },
      "S3_090": {
        "name": "Raiga Kurosuki",
        "ability": "Tornado do dragão do trovão",
        "descriptions": [
          "Ao ser mobilizada, Concentra(8s). Se a Concentração for bem-sucedida, Enfraquece(3) e Empurra(2) todos os rivais de fileira em Curto e Médio Alcance.",
          "Ao ser mobilizada, Concentra(6s). Se a Concentração for bem-sucedida, Enfraquece(3) e Empurra(2) todos os rivais de fileira em Curto e Médio Alcance."
        ]
      },
      "S3_091": {
        "name": "Sasuke Uchiha",
        "ability": "Chidori negro",
        "descriptions": [
          "Ímpeto(4s). Pule para a primeira carta rival que aparecer por perto, ganha Chakra(+2) e a Enfraquece(3). Enfraquece(2) todas as outras cartas por perto. Ignora Bloqueio.",
          "Ímpeto(5s). Pule para a primeira carta rival que aparecer por perto, ganha Chakra(+2) e a Enfraquece(4). Enfraquece(2) todas as outras cartas por perto. Ignora Bloqueio."
        ]
      },
      "S3_092": {
        "name": "Naruto Uzumaki",
        "ability": "Rasengan da raposa demoníaca",
        "descriptions": [
          "Ímpeto(4s). Pule para a primeira carta rival que aparecer por perto, a Enfraquece(3) e a Empurra(2). Enfraquece(2) todas as outras cartas por perto. Remove todo o Bloqueio da carta adversária.",
          "Ímpeto(5s). Pule para a primeira carta rival que aparecer por perto, a Enfraquece(4) e a Empurra(2). Enfraquece(2) todas as outras cartas por perto. Remove todo o Bloqueio da carta adversária."
        ]
      },
      "S3_093": {
        "name": "Choji Akimichi",
        "ability": "Fúria da borboleta",
        "descriptions": [
          "Bloqueio(3). Quando Bloqueio ativa, Chakra(+2). Se a carta rival que acionou Bloqueio estiver por perto, salta sobre ela. Enquanto Bloqueio estiver disponível, Enfraquece(2) e Empurra(1) a cada confronto.",
          "Bloqueio(3). Quando Bloqueio ativa, Chakra(+3). Se a carta rival que acionou Bloqueio estiver por perto, salta sobre ela. Enquanto Bloqueio estiver disponível, Enfraquece(2) e Empurra(1) a cada confronto."
        ]
      },
      "S3_094": {
        "name": "Gaara",
        "ability": "Tsunami de areia",
        "descriptions": [
          "Ao ser mobilizada, Concentra(6s). A cada 2 segundos durante a Concentração, Enfraquece(1) e Empurra(1) todas as cartas rivais. Se tiverem 2 de Chakra ou menos, Enfraquece(2) em vez disso. Quando esta carta faz outra se retirar, Sela(5s).",
          "Ao ser mobilizada, Concentra(8s). A cada 2 segundos durante a Concentração, Enfraquece(1) e Empurra(1) todas as cartas rivais. Se tiverem 3 de Chakra ou menos, Enfraquece(3) em vez disso. Quando esta carta faz outra se retirar, Sela(5s)."
        ]
      },
      "S3_095": {
        "name": "Itachi Uchiha",
        "ability": "Tsukuyomi",
        "descriptions": [
          "Ao ser mobilizada, Imobiliza(12s) a carta rival mais próxima, então perde 1 Chakra. Se a carta rival tiver mais de 1 Chakra, ela perde 1 Chakra por segundo. Sempre que aliados Imobilizam cartas rivais, redispara esta habilidade para cada rival afetado.",
          "Ao ser mobilizada, Imobiliza(16s) a carta rival mais próxima, então perde 1 Chakra. Se a carta rival tiver mais de 1 Chakra, ela perde 1 Chakra por segundo. Sempre que aliados Imobilizam cartas rivais, redispara esta habilidade para cada rival afetado."
        ]
      },
      "S3_096": {
        "name": "Itachi Uchiha",
        "ability": "Carnificina",
        "descriptions": [
          "Sempre que uma carta é mobilizada na mesma fileira, Enfraquece(1) e Imobiliza(10s). Se tiver 3 de Chakra ou menos, Enfraquece(3) em vez disso. Troca de fileira em seguida.",
          "Sempre que uma carta é mobilizada na mesma fileira, Enfraquece(2) e Imobiliza(10s). Se tiver 4 de Chakra ou menos, Enfraquece(4) em vez disso. Troca de fileira em seguida."
        ]
      },
      "S3_097": {
        "name": "Tsunade",
        "ability": "Regeneração mitótica",
        "descriptions": [
          "Na primeira vez que esta carta fica abaixo do Chakra base, Cura até o Chakra base e ganha Chakra(+4). Nos 10 segundos seguintes, ignora habilidades adversárias e Cura(4) após cada confronto. Ao se retirar, reduz permanentemente seu Chakra base em 1.",
          "Na primeira vez que esta carta fica abaixo do Chakra base, Cura até o Chakra base e ganha Chakra(+5). Nos 10 segundos seguintes, ignora habilidades adversárias e Cura(4) após cada confronto. Ao se retirar, reduz permanentemente seu Chakra base em 1."
        ]
      },
      "S3_098": {
        "name": "Sakon & Ukon",
        "ability": "Defesa sincronizada",
        "descriptions": [
          "Mobiliza-se como Sakon e Ukon em fileiras separadas com Bloqueio(2). Sempre que o Bloqueio de um aliado ativa, ambas as cartas ganham Chakra(+1).",
          "Mobiliza-se como Sakon e Ukon em fileiras separadas com Bloqueio(4). Sempre que o Bloqueio de um aliado ativa, ambas as cartas ganham Chakra(+1)."
        ]
      },
      "S3_099": {
        "name": "Tayuya",
        "ability": "Invocação dos Doki",
        "descriptions": [
          "Ao ser mobilizada, Concentra(8s). Se a Concentração for bem-sucedida, Invoca um demônio Doki em cada fileira. Sempre que você Invoca outras cartas, elas ganham Chakra(+1). Ignora todas as habilidades e confrontos rivais enquanto os demônios estiverem ativos.",
          "Ao ser mobilizada, Concentra(6s). Se a Concentração for bem-sucedida, Invoca um demônio Doki em cada fileira. Sempre que você Invoca outras cartas, elas ganham Chakra(+1). Ignora todas as habilidades e confrontos rivais enquanto os demônios estiverem ativos."
        ]
      },
      "S3_100": {
        "name": "Kimimaro",
        "ability": "Lealdade inabalável",
        "descriptions": [
          "Ao ser mobilizada, ganha Chakra(+6) e Ímpeto(5s). Bloqueio permanente enquanto Ímpeto estiver ativo. A cada confronto, Enfraquece(1) a si mesma e Enfraquece(3) a carta rival. Ao se retirar, Enfraquece(2) todas as cartas. Não pode ser afetada por habilidades aliadas.",
          "Ao ser mobilizada, ganha Chakra(+8) e Ímpeto(6s). Bloqueio permanente enquanto Ímpeto estiver ativo. A cada confronto, Enfraquece(1) a si mesma e Enfraquece(3) a carta rival. Ao se retirar, Enfraquece(2) todas as cartas. Não pode ser afetada por habilidades aliadas."
        ]
      }
    },
    "ruleNotes": {
      "S2_041": "{allies} aliados do personagem exigido; a composição do deck não é verificada.",
      "S1_004": "Efeitos de confronto aplicados em {activations} confrontos.",
      "S1_005": "Efeitos de confronto aplicados em {activations} confrontos.",
      "S1_008": "Efeitos de confronto aplicados em {activations} confrontos.",
      "S1_010": "Efeitos de confronto aplicados em {activations} confrontos.",
      "S1_023": "Efeitos de confronto aplicados em {activations} confrontos.",
      "S1_030": "Efeitos de confronto aplicados em {activations} confrontos.",
      "S1_035": "Efeitos de confronto aplicados em {activations} confrontos.",
      "S2_007": "Efeitos de confronto aplicados em {activations} confrontos.",
      "S2_025": "Efeitos de confronto aplicados em {activations} confrontos.",
      "S2_030": "Efeitos de confronto aplicados em {activations} confrontos.",
      "S2_042": "Efeitos de confronto aplicados em {activations} confrontos.",
      "S2_052": "Efeitos de confronto aplicados em {activations} confrontos.",
      "S2_053": "Efeitos de confronto aplicados em {activations} confrontos.",
      "S2_063": "Efeitos de confronto aplicados em {activations} confrontos.",
      "S3_004": "Efeitos de confronto aplicados em {activations} confrontos.",
      "S3_023": "Efeitos de confronto aplicados em {activations} confrontos.",
      "S3_024": "Efeitos de confronto aplicados em {activations} confrontos.",
      "S3_034": "Efeitos de confronto aplicados em {activations} confrontos.",
      "S3_044": "Um confronto antes de 20s; o retorno posterior a Chakra(1) fica fora do pico. Efeitos sem repetição explícita se aplicam uma vez.",
      "S3_047": "Efeitos de confronto aplicados em {activations} confrontos.",
      "S3_059": "Efeitos de confronto aplicados em {activations} confrontos.",
      "S3_068": "Efeitos de confronto aplicados em {activations} confrontos.",
      "S3_072": "Efeitos de confronto aplicados em {activations} confrontos.",
      "S3_074": "Efeitos de confronto aplicados em {activations} confrontos.",
      "S1_003": "Uma nova unidade com o Chakra indicado.",
      "S1_019": "{allies} alvos/eventos do grupo indicado; condições favoráveis.",
      "S1_046": "{allies} alvos/eventos do grupo indicado; condições favoráveis.",
      "S1_062": "{allies} alvos/eventos do grupo indicado; condições favoráveis.",
      "S1_073": "{allies} alvos/eventos do grupo indicado; condições favoráveis.",
      "S2_015": "{allies} alvos/eventos do grupo indicado; condições favoráveis.",
      "S2_022": "{allies} alvos/eventos do grupo indicado; condições favoráveis.",
      "S2_073": "{allies} alvos/eventos do grupo indicado; condições favoráveis.",
      "S2_083": "{allies} alvos/eventos do grupo indicado; condições favoráveis.",
      "S3_002": "{allies} alvos/eventos do grupo indicado; condições favoráveis.",
      "S1_020": "O dano a um aliado é subtraído.",
      "S1_021": "3 aliados.",
      "S1_022": "3 aliados.",
      "S1_024": "O número de aliados indicado para o nível.",
      "S1_033": "Um bônus: Akamaru ou esta carta. Trazer do deck não duplica o poder base.",
      "S1_038": "O número de aliados indicado para o nível.",
      "S1_053": "{enemies} adversários atingidos.",
      "S1_069": "{enemies} adversários atingidos.",
      "S1_074": "{enemies} adversários atingidos.",
      "S1_079": "{enemies} adversários atingidos.",
      "S1_081": "{enemies} adversários atingidos.",
      "S2_008": "{enemies} adversários atingidos.",
      "S2_076": "{enemies} adversários em um confronto. Efeitos sem repetição explícita se aplicam uma vez.",
      "S2_088": "{enemies} adversários atingidos.",
      "S3_017": "{enemies} adversários atingidos.",
      "S3_031": "{enemies} adversários em um confronto. Efeitos sem repetição explícita se aplicam uma vez.",
      "S3_089": "{enemies} adversários atingidos.",
      "S3_090": "{enemies} adversários atingidos.",
      "S1_056": "A opção com bônus numérico é usada. Trazer Hiruzen não soma seu poder novamente.",
      "S1_060": "Carta trazida do deck: seu poder já está incluído, portanto nenhuma nova unidade é contada.",
      "S1_083": "Melhor opção condicional: {enemies} adversários e {allies} aliados, sem ganho líquido.",
      "S2_002": "{enemies} adversários com Chakra maior.",
      "S2_016": "Três novas unidades com Chakra(1); a reciclagem da carta não é simulada.",
      "S2_018": "Um aliado para cada um dos dois nomes; as identidades exigidas não são verificadas.",
      "S2_019": "Um aliado para cada um dos dois nomes; as identidades exigidas não são verificadas.",
      "S2_020": "Um aliado para cada um dos dois nomes; as identidades exigidas não são verificadas.",
      "S2_032": "Bônus ao Sapo trazido; seu poder já está incluído no deck.",
      "S2_037": "O Chakra dos Anbu não é indicado: a Invocação não é quantificada.",
      "S2_038": "Opção de bônus com Chakra baixo; a carta invocada do deck não é contada duas vezes.",
      "S2_039": "Um ou dois adversários, conforme o nível.",
      "S2_040": "{enemies} adversários e {allies} aliados atingidos ao se retirar; sem ganho líquido.",
      "S2_054": "Divide o Chakra adversário por dois usando o Chakra configurado para o alvo.",
      "S2_058": "O controle temporário de um adversário não é convertido em poder.",
      "S2_064": "O controle temporário de um adversário não é convertido em poder.",
      "S2_062": "Um ou dois adversários, conforme o nível.",
      "S2_067": "Número explícito de alvos; uma mobilização e uma retirada.",
      "S2_070": "Um confronto; bônus para {allies} aliados uma vez ao se retirar. Efeitos sem repetição explícita se aplicam uma vez.",
      "S2_071": "3 golpes em um confronto. Efeitos sem repetição explícita se aplicam uma vez.",
      "S2_072": "{enemies} adversários e {allies} aliados: o dano aliado compensa o dano adversário.",
      "S2_080": "{enemies} adversários e {allies} aliados: o dano aliado compensa o dano adversário.",
      "S2_074": "{enemies} adversários próximos em um confronto. Efeitos sem repetição explícita se aplicam uma vez.",
      "S2_077": "Cópia de uma carta aliada, sem adicionar poder ao total do deck.",
      "S2_086": "O dano aos dois aliados é subtraído; trazer do deck não é contado duas vezes e os sacrifícios não são simulados.",
      "S2_089": "A Queimadura é contada como dano total igual ao seu valor.",
      "S2_091": "Bônus uma vez. O aumento base ao se retirar vale para a próxima vida e não é somado.",
      "S2_097": "Dois eventos distintos, ambos contra {enemies} adversários; a Queimadura é contada como dano total.",
      "S3_027": "Novo Tonton e bônus para Tsunade; a presença e a sobrevivência de Tsunade não são simuladas.",
      "S3_028": "Novo Kuromaru e bônus para o próximo Cão Ninja.",
      "S3_036": "{allies} aliados sofrem 1 de dano; esta carta ganha 2 para cada um.",
      "S3_041": "Dois adversários.",
      "S3_043": "Bônus para o próximo Sasuke e uma Cura posterior.",
      "S3_051": "Bônus inicial e uma Cura.",
      "S3_060": "Os aliados configurados são considerados em outras fileiras e atingidos pela primeira vez: um bônus e uma Cura por aliado.",
      "S3_062": "Uma Cura inicial e a primeira Cura reativa.",
      "S3_073": "Bônus inicial e dano em um confronto. Efeitos sem repetição explícita se aplicam uma vez.",
      "S3_085": "{enemies} adversários; a Queimadura existente não é contada sem um valor conhecido.",
      "S3_091": "Primeiro alvo, bônus e dano a 5 outros adversários e {allies} aliados. A expressão “outras cartas” é ambígua.",
      "S3_092": "O primeiro alvo é atingido separadamente; o dano às outras cartas o exclui e inclui todos os aliados configurados.",
      "S3_039": "Conversão favorável do Ímpeto inicial restante: 2/3 Chakra nos níveis 1/2, máximo 3; nenhum bônus externo simulado."
    },
    "calculation": {
      "effectC": "bônus de Chakra",
      "effectW": "Enfraquecimento",
      "effectH": "Cura",
      "effectB": "Queimadura por alvo",
      "effectK": "Chakra invocado",
      "amount": "{value} {effect}",
      "burnTotal": "{value} Queimadura por alvo, duração total limitada pelo Chakra adversário",
      "copy": "{value} Chakra da cópia",
      "restore": "{value} Cura de 1 Chakra até o Chakra base",
      "rush": "{value} Chakra do Ímpeto restante (máximo 3)",
      "enemies": {
        "one": "{value} adversário",
        "other": "{value} adversários"
      },
      "otherEnemies": "{value} outros adversários, excluindo o primeiro alvo",
      "allies": {
        "one": "{value} aliado",
        "other": "{value} aliados"
      },
      "first": "{value} primeira ativação",
      "remaining": {
        "one": "{value} ativação seguinte",
        "other": "{value} ativações seguintes"
      },
      "activations": {
        "one": "{value} ativação",
        "other": "{value} ativações"
      },
      "enemyChakra": "{value} Chakra adversário",
      "targets": {
        "one": "{value} alvo",
        "other": "{value} alvos"
      },
      "drain": "{value} Chakra removido sem ficar abaixo de 1",
      "removable": "{value} Chakra removível",
      "bestBranch": "melhor opção: {label}",
      "unquantified": "Contribuição numérica ainda não quantificada.",
      "repeated": "Efeito aplicado em {activations} ativações.",
      "once": "Efeito de confronto contado uma vez; apenas efeitos que indicam cada confronto se repetem.",
      "favourable": "Condições favoráveis presumidas. Sinergias entre cartas não são simuladas.",
      "tactical": "Efeito tático sem bônus numérico de Chakra, dano ou Cura.",
      "halving": "A divisão por dois usa o Chakra adversário configurado; o arredondamento exato no jogo ainda não foi confirmado.",
      "burnNote": "Queimadura: alvos afetados × mín(duração em segundos, Chakra adversário). A propagação se limita aos alvos adversários configurados; aplicações múltiplas não contam os mesmos pontos de Chakra duas vezes.",
      "allCards": "Efeito em todas as cartas: {enemies} adversários e {allies} aliados. O dano aliado, limitado pelo Chakra aliado por aplicação, reduz o Poder.",
      "ebisu": "Bônus e penalidades usam o número configurado de aliados; a sobrevivência da carta não é simulada."
    },
    "errors": {
      "invalidJson": "O arquivo não contém um JSON de deck válido.",
      "invalidDeck": "Arquivo de deck inválido.",
      "invalidCards": "Verifique cartas, duplicatas e níveis no arquivo.",
      "invalidOptions": "Opções de cálculo inválidas.",
      "invalidValues": "Valores de hipóteses inválidos.",
      "invalidOverrides": "Ajustes individuais de carta inválidos.",
      "missingCard": "As hipóteses se referem a uma carta fora do deck.",
      "fileTooLarge": "O arquivo é grande demais.",
      "importFailed": "Não foi possível importar o deck.",
      "invalidRule": "Regra inválida: {id}, nível {level}, {factor}",
      "invalidFactor": "Fator inválido: {factor}"
    },
    "normalizations": [],
    "flag": "pt"
  },
  "es": {
    "name": "Español",
    "locale": "es-ES",
    "ui": {
      "synergies": "Sinergias",
      "synergyPartners": "Cartas con sinergia con {name}",
      "synergySources": "Cartas con las mismas combinaciones",
      "loadMore": "Mostrar más",
      "backToTop": "Volver arriba",
      "details": "Detalles",
      "collapseSidebar": "Contraer barra lateral",
      "expandSidebar": "Expandir barra lateral",
      "sortBy": "Ordenar por:",
      "toolbarModes": "Modos de la barra",
      "collapseToolbar": "Contraer barra",
      "expandToolbar": "Expandir barra",
      "pageTitle": "Naruto · Cartas y mazos",
      "brand": "Naruto · Constructor de mazos",
      "heading": "Cartas y mazos",
      "database": "Base de cartas",
      "builder": "Crear mazo",
      "sections": "Secciones",
      "language": "Idioma",
      "filters": "Filtrar cartas",
      "searchFilters": "Búsqueda y filtros",
      "textOrIndex": "Texto o número",
      "searchPlaceholder": "Buscar",
      "rarity": "Rareza",
      "season": "Serie",
      "skillType": "Tipo de habilidad",
      "cost": "Coste",
      "chakra": "Chakra",
      "minPower": "Potencia mín.",
      "minimum": "mín",
      "cardLevel": "Nivel de carta",
      "sort": "Ordenar",
      "sortCards": "Ordenar cartas",
      "index": "Número",
      "alphabetical": "Nombre",
      "quality": "Calidad",
      "power": "Potencia",
      "resetFilters": "Borrar filtros",
      "allFeminine": "Todas",
      "all": "Todos",
      "none": "Sin tipo",
      "common": "Común",
      "rare": "Rara",
      "epic": "Épica",
      "legendary": "Legendaria",
      "first": "Primera",
      "second": "Segunda",
      "third": "Tercera",
      "ascending": "Ascendente",
      "descending": "Descendente",
      "ascendingAction": "Orden ascendente. Cambiar a descendente",
      "descendingAction": "Orden descendente. Cambiar a ascendente",
      "selectedCount": "{count} seleccionados",
      "cardCount": "{count} cartas",
      "noResults": "Ninguna carta coincide con los filtros.",
      "assumptions": "Hipótesis de cálculo",
      "enemyChakra": "Chakra rival",
      "enemies": "Objetivos rivales",
      "allyChakra": "Chakra aliado",
      "allies": "Objetivos aliados",
      "activations": "Activaciones de carta",
      "applyStandard": "Aplicar valores",
      "calculationInfo": "Información del cálculo",
      "standardApplied": "Valores aplicados a todas las cartas de esta sesión.",
      "standardPending": "Cambios pendientes: las cartas siguen usando los valores anteriores.",
      "defaultDeckName": "Mazo 1",
      "deckNameLabel": "Nombre del mazo:",
      "deckNamePlaceholder": "Nombre del mazo",
      "deckSlots": "Los diez espacios del mazo",
      "deckCardsLevels": "Cartas y niveles del mazo",
      "averageCost": "Coste medio",
      "averagePower": "Potencia media",
      "averageQuality": "Calidad media",
      "viewDeck": "Detalles",
      "import": "Importar",
      "export": "Exportar",
      "clearDeck": "Vaciar",
      "closeDeck": "Cerrar mazo",
      "closeCard": "Cerrar detalles de la carta",
      "closeInfo": "Cerrar información del cálculo",
      "distribution": "Distribución de costes",
      "curveCaption": "Número de cartas por Coste",
      "databaseEffects": "Base de efectos de cartas",
      "builderCards": "Cartas para el mazo",
      "confirm": "Confirmar",
      "cancel": "Cancelar",
      "replaceDeck": "¿Reemplazar el mazo actual por el importado?",
      "confirmClear": "¿Quitar todas las cartas del mazo?",
      "deckImported": "Mazo importado.",
      "sessionUnavailable": "El guardado automático de sesión no está disponible. Exporta tu mazo para conservarlo.",
      "sessionInvalid": "No se pudo restaurar la sesión guardada. Puedes importar un mazo exportado.",
      "addToDeck": "Añadir al mazo",
      "removeFromDeck": "Quitar del mazo",
      "addCard": "Añadir {name} al mazo",
      "removeCard": "Quitar {name} del mazo",
      "openCard": "Abrir {name} · {reference}",
      "removeNamedCard": "Quitar {name}",
      "emptySlot": "Espacio {slot} vacío",
      "cardLevelTitle": "{name} · {reference} · nivel {level}",
      "levelShort": "Nv.{level}",
      "changeLevel": "Cambiar nivel",
      "changeLevelTitle": "Haz clic para cambiar al nivel {level}",
      "changeLevelAction": "Nivel {level}. Cambiar al nivel {next}",
      "powerQuality": "Potencia y calidad",
      "localAssumptions": "Hipótesis de esta carta",
      "useStandard": "Usar valores generales",
      "localChanges": "Cambios inmediatos, solo para esta carta.",
      "powerComposition": "Desglose de potencia",
      "contributions": "Contribuciones al cálculo",
      "noContributions": "Sin contribución numérica adicional.",
      "baseChakra": "Chakra base",
      "summonedChakra": "Chakra invocado",
      "chakraBoosts": "Aumentos de Chakra",
      "friendlyDamage": "Daño propio / a aliados",
      "enemyDamage": "Daño a rivales",
      "burn": "Quemadura",
      "heal": "Cura",
      "curveBar": "Coste {cost}: {count} cartas",
      "energyCost": "Coste de energía",
      "costValue": "Coste {value}",
      "chakraValue": "Chakra base {value}",
      "info1": "Potencia = Chakra base + Invocaciones + aumentos − daño propio y a aliados + daño a rivales + Quemadura + Cura.",
      "info2": "Calidad = Potencia / coste de la carta.",
      "info3": "Quemadura = objetivos rivales × duración en segundos (o Chakra rival si es menor que la duración).",
      "info4": "Los efectos se cuentan según las activaciones indicadas en la carta o en las hipótesis de cálculo.",
      "info5": "El movimiento, la Protección y otros modificadores no se incluyen en la Potencia.",
      "info6": "El selector de nivel de los filtros cambia toda la lista, excepto las cartas del mazo.",
      "deckBuilding": "Mazo en construcción",
      "deckInfo": "Información del mazo",
      "closeDeckInfo": "Cerrar información del mazo",
      "deckPowerDescription": "La potencia media es la media de las potencias de las cartas del mazo.",
      "deckQualityDescription": "La calidad media es la media de las calidades de cada carta del mazo.",
      "exportInfo": "La exportación incluye los niveles y las hipótesis de cálculo específicos de cada carta."
    },
    "effects": {
      "Cost": "Coste",
      "Chakra": "Chakra",
      "Weaken": "Debilitamiento",
      "Push": "Empuja",
      "Pin": "Inmovilización",
      "Rush": "Aceleración",
      "Slow": "Ralentización",
      "Guard": "Protección",
      "Seal": "Sello",
      "Switch": "Cambio",
      "Summon": "Invocación",
      "Teleport": "Teletransporte",
      "Burn": "Quemadura",
      "Focus": "Concentración",
      "Heal": "Cura"
    },
    "terms": {
      "Cost": "costes?",
      "Chakra": "chakra",
      "Weaken": "debilit[\\p{L}]*",
      "Push": "empuj[\\p{L}]*(?: hacia atrás)?",
      "Pin": "inmoviliz[\\p{L}]*",
      "Rush": "acelera[\\p{L}]*|ímpeto[\\p{L}]*",
      "Slow": "ralentiz[\\p{L}]*",
      "Guard": "protecci[óo]n[\\p{L}]*|guardia[\\p{L}]*",
      "Seal": "sell[\\p{L}]*",
      "Switch": "cambi[\\p{L}]*",
      "Summon": "invoc[\\p{L}]*",
      "Teleport": "teletransport[\\p{L}]*",
      "Burn": "quem[\\p{L}]*",
      "Focus": "concentr[\\p{L}]*",
      "Heal": "cura[\\p{L}]*"
    },
    "cards": {
      "S1_001": {
        "name": "NARUTO UZUMAKI",
        "ability": "Potencial",
        "descriptions": [
          "La primera vez que esta carta gana chakra, gana un Chakra(+1) adicional.",
          "La primera vez que esta carta gana chakra, gana un Chakra(+2) adicional."
        ]
      },
      "S1_002": {
        "name": "NARUTO UZUMAKI",
        "ability": "Aprendiendo",
        "descriptions": [
          "Obtiene Chakra(+2) después de 6 segundos.",
          "Obtiene Chakra(+3) después de 6 segundos."
        ]
      },
      "S1_003": {
        "name": "NARUTO UZUMAKI",
        "ability": "Multiplicación oculta de cuerpo",
        "descriptions": [
          "Crea 1 clon en otra línea con Chakra(1).",
          "Invoca 1 clon en otra línea con Chakra(2)."
        ]
      },
      "S1_004": {
        "name": "NARUTO UZUMAKI",
        "ability": "Juramento",
        "descriptions": [
          "Obtiene Chakra(+1) después de un enfrentamiento con éxito.",
          "Obtiene Chakra(+2) después de un enfrentamiento con éxito."
        ]
      },
      "S1_005": {
        "name": "SASUKE UCHIHA",
        "ability": "Maestría del Kunai",
        "descriptions": [
          "En caso de enfrentamiento, Debilita(2) la carta rival.",
          "En caso de enfrentamiento, Debilita(3) la carta rival."
        ]
      },
      "S1_006": {
        "name": "SAKURA HARUNO",
        "ability": "Lanzamiento de Kunai",
        "descriptions": [
          "Al desplegarse, Debilita(2) a un rival aleatorio a largo alcance. Los objetivos pertenecen a su propia línea.",
          "Al desplegarse, Debilita(3) a un rival aleatorio a largo alcance. Los objetivos pertenecen a su propia línea."
        ]
      },
      "S1_007": {
        "name": "SAKURA HARUNO",
        "ability": "Equilibrio de Chakra",
        "descriptions": [
          "Cuando los aliados en su línea tienen éxito en un enfrentamiento, les otorga Chakra(+1) y Inmoviliza(3s) esta carta.",
          "Cuando los aliados en su línea tienen éxito en un enfrentamiento, les otorga Chakra(+1) y Inmoviliza(5s) esta carta."
        ]
      },
      "S1_008": {
        "name": "SAKURA HARUNO",
        "ability": "Patada Giratoria",
        "descriptions": [
          "En caso de enfrentamiento, Empuja(1) y Debilita(1) la carta rival.",
          "En caso de enfrentamiento, Empuja(2) y Debilita(1) la carta rival."
        ]
      },
      "S1_009": {
        "name": "KAKASHI HATAKE",
        "ability": "Acelerón",
        "descriptions": [
          "Acelerar(5s)",
          "Acelerar(6s)"
        ]
      },
      "S1_010": {
        "name": "KAKASHI HATAKE",
        "ability": "Jefe de Equipo",
        "descriptions": [
          "En caso de enfrentamiento, otorga Chakra(+2) a un aliado a corto alcance. Los objetivos pertenecen a su propia línea.",
          "En caso de enfrentamiento, otorga Chakra(+3) a un aliado en su línea a corto alcance."
        ]
      },
      "S1_011": {
        "name": "IRUKA UMINO",
        "ability": "Sensei",
        "descriptions": [
          "Otorga Chakra(+2) al siguiente aliado desplegado.",
          "Otorga Chakra(+3) al siguiente aliado desplegado."
        ]
      },
      "S1_012": {
        "name": "ZABUZA MOMOCHI",
        "ability": "Entrada Amenazadora",
        "descriptions": [
          "Se despliega a medio alcance, Ralentiza(4s) y Cambia de línea al rival de su propia línea con más Chakra.",
          "Se despliega a medio alcance, Ralentiza(6s) y Cambia de línea al rival de su propia línea con más Chakra."
        ]
      },
      "S1_013": {
        "name": "ZABUZA MOMOCHI",
        "ability": "Agresión",
        "descriptions": [
          "Al desplegarse, Debilita(3) a la carta rival más cercana en su línea.",
          "Al desplegarse, Debilita(4) a la carta rival más cercana en su línea."
        ]
      },
      "S1_014": {
        "name": "HAKU",
        "ability": "Agujas",
        "descriptions": [
          "Al desplegarse, Inmoviliza(6s) al rival más cercano en su línea.",
          "Al desplegarse, Inmoviliza(7s) al rival más cercano en su línea."
        ]
      },
      "S1_015": {
        "name": "KONOHAMARU SARUTOBI",
        "ability": "Lanzamiento de Shuriken",
        "descriptions": [
          "Al desplegarse, Debilita(1) a un rival aleatorio a corto alcance. Los objetivos pertenecen a su propia línea.",
          "Al desplegarse, Debilita(2) a un rival aleatorio a corto alcance. Los objetivos pertenecen a su propia línea."
        ]
      },
      "S1_016": {
        "name": "EBISU",
        "ability": "Lección Rápida",
        "descriptions": [
          "Al desplegarse, otorga Chakra(+2) al aliado más cercano. Los objetivos pertenecen a su propia línea.",
          "Al desplegarse, otorga Chakra(+3) al aliado más cercano. Los objetivos pertenecen a su propia línea."
        ]
      },
      "S1_017": {
        "name": "TAZUNA",
        "ability": "Constructor de Puentes",
        "descriptions": [
          "Al desplegarte, lleva a 2 aliados de una posición de medio alcance a esta carta. Los objetivos pertenecen a su propia línea.",
          "Al desplegarte, lleva a 3 aliados de una posición de medio alcance a esta carta. Los objetivos pertenecen a su propia línea."
        ]
      },
      "S1_018": {
        "name": "INARI",
        "ability": "Acelerón",
        "descriptions": [
          "Acelerar(2s)",
          "Acelerar(3s)"
        ]
      },
      "S1_019": {
        "name": "KAIZA",
        "ability": "Mártir",
        "descriptions": [
          "Al retirarse, otorga Chakra(+1) solo a los aliados de su propia línea.",
          "Al retirarse, otorga Chakra(+2) solo a los aliados de su propia línea."
        ]
      },
      "S1_020": {
        "name": "MIZUKI TOJI",
        "ability": "Intención Oculta",
        "descriptions": [
          "Al desplegarse, Debilita(2) a un aliado aleatorio en su linea y Chakra(+3) para esta carta.",
          "Al desplegarse, Debilita(2) a un aliado aleatorio en su linea y Chakra(+4) para esta carta."
        ]
      },
      "S1_021": {
        "name": "MIZUKI TOJI",
        "ability": "Presa Fácil",
        "descriptions": [
          "Cuando se retira, otorga Chakra(+1) a 3 aliados aleatorios.",
          "Cuando se retira, otorga Chakra(+2) a 3 aliados aleatorios."
        ]
      },
      "S1_022": {
        "name": "MADAME SHIJIMI",
        "ability": "Rescate Gatuno",
        "descriptions": [
          "Al desplegarse, Chakra(+1) y Ralentiza(3s) a 3 aliados en su línea a corto alcance.",
          "Al desplegarse, Chakra(+2) y Ralentiza(3s) a 3 aliados en su línea a corto alcance."
        ]
      },
      "S1_023": {
        "name": "GOZU",
        "ability": "Emboscada",
        "descriptions": [
          "En caso de enfrentamiento, Debilita(1) la carta rival y se Teletransporta detrás de ella.",
          "En caso de enfrentamiento, Debilita(2) la carta rival y se Teletransporta detrás de ella."
        ]
      },
      "S1_024": {
        "name": "TSUNAMI",
        "ability": "Hospitalidad",
        "descriptions": [
          "Al desplegarse, otorga Chakra(+1) a 2 aliados en su línea.",
          "Al desplegarse, otorga Chakra(+1) a 3 aliados en su línea."
        ]
      },
      "S1_025": {
        "name": "WARAJI",
        "ability": "Acelerón",
        "descriptions": [
          "Acelerar(3s)",
          "Acelerar(4s)"
        ]
      },
      "S1_026": {
        "name": "ZORI",
        "ability": "Acelerón",
        "descriptions": [
          "Acelerar(3s)",
          "Acelerar(4s)"
        ]
      },
      "S1_027": {
        "name": "INO YAMANAKA",
        "ability": "Encanto",
        "descriptions": [
          "Al desplegarse, otorga Chakra(+1) al aliado más cercano a corto alcance y lo empuja a medio alcance.",
          "Al desplegarse, otorga Chakra(+2) al aliado más cercano a corto alcance y lo Empuja a medio alcance."
        ]
      },
      "S1_028": {
        "name": "SHIKAMARU NARA",
        "ability": "Imitación de Sombra",
        "descriptions": [
          "Al desplegarse, Inmoviliza(10s) esta carta y la carta rival más cercana. Los objetivos pertenecen a su propia línea.",
          "Al desplegarse, Inmoviliza(12s) esta carta y la carta rival más cercana. Los objetivos pertenecen a su propia línea."
        ]
      },
      "S1_029": {
        "name": "CHOJI AKIMICHI",
        "ability": "Fortaleza",
        "descriptions": [
          "En caso de enfrentamiento, Empuja(1) la carta rival.",
          "En caso de enfrentamiento, Empuja(2) la carta rival."
        ]
      },
      "S1_030": {
        "name": "ASUMA SARUTOBI",
        "ability": "Maestría Cuerpo a Cuerpo",
        "descriptions": [
          "En caso de enfrentamiento, obtiene Chakra(+3) si la carta rival tiene un Chakra superior.",
          "En caso de enfrentamiento, obtiene Chakra(+4) si la carta rival tiene un Chakra superior."
        ]
      },
      "S1_031": {
        "name": "HINATA HYUGA",
        "ability": "Timidez",
        "descriptions": [
          "Al desplegarse, Empuja(2) la carta rival más cercana a corto alcance. Los objetivos pertenecen a su propia línea.",
          "Al desplegarse, Empuja(3) la carta rival más cercana a corto alcance. Los objetivos pertenecen a su propia línea."
        ]
      },
      "S1_032": {
        "name": "HINATA HYUGA",
        "ability": "Puño Suave",
        "descriptions": [
          "En el primer enfrentamiento, Empuja(1) solo al rival encontrado si tiene 3 Chakra o menos.",
          "En el primer enfrentamiento, Empuja(2) solo al rival encontrado si tiene 3 Chakra o menos."
        ]
      },
      "S1_033": {
        "name": "KIBA INUZUKA",
        "ability": "Mejor Amigo",
        "descriptions": [
          "Invoca un Akamaru aleatorio de tu baraja y otórgale Chakra(+1). Si no hay Akamaru, esta carta gana Chakra(+1).",
          "Invoca un Akamaru aleatorio de tu baraja y otórgale Chakra(+2). Si no hay Akamaru, esta carta gana Chakra(+2)."
        ]
      },
      "S1_034": {
        "name": "AKAMARU",
        "ability": "Acelerón",
        "descriptions": [
          "Acelerar(6s)",
          "Acelerar(7s)"
        ]
      },
      "S1_035": {
        "name": "SHINO ABURAME",
        "ability": "Insectos de Chakra",
        "descriptions": [
          "En caso de enfrentamiento, otorga Chakra(+2) a esta carta y Debilita(1) a la carta rival.",
          "En caso de enfrentamiento, otorga Chakra(+2) a esta carta y Debilita(2) a la carta rival."
        ]
      },
      "S1_036": {
        "name": "KURENAI YUHI",
        "ability": "Finta",
        "descriptions": [
          "En caso de enfrentamiento, Empuja(2) e Inmoviliza(2s) la carta rival.",
          "En caso de enfrentamiento, Empuja(2) e Inmoviliza(4s) la carta rival."
        ]
      },
      "S1_037": {
        "name": "PAKKUN",
        "ability": "Nariz Delicada",
        "descriptions": [
          "Ignora todas las habilidades y enfrentamientos de los rivales hasta llegar a medio alcance. Los aliados desplegados en esta línea obtienen Acelerar(+2s) mientras esta carta esté activa.",
          "Ignora todas las habilidades y enfrentamientos rivales hasta llegar a medio alcance. Los aliados ganan Acelera(+3s) al desplegarse en esta línea mientras esta carta está activa."
        ]
      },
      "S1_038": {
        "name": "AYAME",
        "ability": "Comida Fresca",
        "descriptions": [
          "Al desplegarse, otorga Chakra(+2) a 2 aliados en su línea a medio alcance.",
          "Al desplegarse, otorga Chakra(+2) a 3 aliados en su línea a medio alcance."
        ]
      },
      "S1_039": {
        "name": "MOEGI KAZAMATSURI",
        "ability": "Acelerón",
        "descriptions": [
          "Acelerar(2s)",
          "Acelerar(3s)"
        ]
      },
      "S1_040": {
        "name": "UDON ISE",
        "ability": "Acelerón",
        "descriptions": [
          "Acelerar(2s)",
          "Acelerar(3s)"
        ]
      },
      "S1_041": {
        "name": "NINJA TROOPS",
        "ability": "Vanguardia",
        "descriptions": [
          "Acelera(2s). Al retirarse, otorga Chakra(+3) al aliado desplegado más recientemente.",
          "Acelera(3s). Al retirarse, otorga Chakra(+3) al aliado desplegado más recientemente."
        ]
      },
      "S1_042": {
        "name": "NARUTO UZUMAKI",
        "ability": "Indefenso",
        "descriptions": [
          "Cuando se retira, Debilita(3) la carta rival.",
          "Cuando se retira, Debilita(4) la carta rival."
        ]
      },
      "S1_043": {
        "name": "NARUTO UZUMAKI",
        "ability": "Bromista",
        "descriptions": [
          "Al desplegarse, Ralentiza(10s) todas las cartas en la línea.",
          "Al desplegarse, Ralentiza(12s) todas las cartas en la línea."
        ]
      },
      "S1_044": {
        "name": "NARUTO UZUMAKI",
        "ability": "Técnica Erótica",
        "descriptions": [
          "Al desplegarse, Inmoviliza(4s) una carta rival a medio alcance. Los objetivos pertenecen a su propia línea.",
          "Al desplegarse, Inmoviliza(5s) una carta rival de la línea a medio alcance."
        ]
      },
      "S1_045": {
        "name": "NARUTO UZUMAKI",
        "ability": "Soledad",
        "descriptions": [
          "Al desplegarse, obtiene Chakra(+3) y Ralentiza(6s) si no hay aliados en la línea presentes.",
          "Al desplegarse, obtiene Chakra(+4) y Ralentiza(6s) si no hay aliados en la línea presentes."
        ]
      },
      "S1_046": {
        "name": "NARUTO UZUMAKI",
        "ability": "Graduación",
        "descriptions": [
          "Obtiene Chakra(+1) por cada aliado de la línea a corto alcance.",
          "Obtiene Chakra(+2) por cada aliado de la línea a corto alcance."
        ]
      },
      "S1_047": {
        "name": "NARUTO UZUMAKI",
        "ability": "Técnica de Transformación",
        "descriptions": [
          "Al desplegarse, se disfraza de otra carta de tu baraja que cuesta hasta 3 de Energía. Vuelve a su forma original en caso de enfrentamiento o al debilitarse.",
          "Al desplegarse, se disfraza de otra carta de tu baraja que cuesta hasta 4 de Energía. Vuelve a su forma original en caso de enfrentamiento o al debilitarse."
        ]
      },
      "S1_048": {
        "name": "NARUTO UZUMAKI",
        "ability": "Astuto",
        "descriptions": [
          "En caso de enfrentamiento, Inmoviliza(4s) la carta rival y se Teletransporta detrás de ella.",
          "En caso de enfrentamiento, Inmoviliza(6s) la carta rival y se Teletransporta detrás de ella."
        ]
      },
      "S1_049": {
        "name": "SASUKE UCHIHA",
        "ability": "Proyección",
        "descriptions": [
          "El siguiente aliado se despliega a medio alcance. Inmoviliza(4s) y Cambia de línea a un rival aleatorio de su propia línea a medio alcance.",
          "El siguiente aliado se despliega a medio alcance. Inmoviliza(8s) y Cambia de línea a un rival aleatorio de su propia línea a medio alcance."
        ]
      },
      "S1_050": {
        "name": "HIRUZEN SARUTOBI",
        "ability": "Técnica Bola de Cristal",
        "descriptions": [
          "Cuando los aliados obtienen Acelerar, les aplica Chakra(+1) y Acelerar(+1s).",
          "Cuando los aliados obtienen Acelerar, les aplica Chakra(+1) y Acelerar(+2s)."
        ]
      },
      "S1_051": {
        "name": "IRUKA UMINO",
        "ability": "Bromista",
        "descriptions": [
          "Cambia de línea aleatoriamente cada 8 segundos.",
          "Cambia de línea aleatoriamente cada 6 segundos."
        ]
      },
      "S1_052": {
        "name": "IRUKA UMINO",
        "ability": "Sacrificio",
        "descriptions": [
          "Se despliega directamente a medio alcance y otorga Chakra(+1) al aliado más cercano. Los objetivos pertenecen a su propia línea.",
          "Se despliega directamente a medio alcance y otorga Chakra(+2) al aliado más cercano. Los objetivos pertenecen a su propia línea."
        ]
      },
      "S1_053": {
        "name": "ZABUZA MOMOCHI",
        "ability": "Ocultación en la Niebla",
        "descriptions": [
          "Al desplegarse, Inmoviliza(6s) y Debilita(1) a todos los rivales de su propia línea a corto alcance.",
          "Al desplegarse, Inmoviliza(6s) y Debilita(2) a todos los rivales de su propia línea a corto alcance."
        ]
      },
      "S1_054": {
        "name": "ZABUZA MOMOCHI",
        "ability": "Roto",
        "descriptions": [
          "Obtiene Chakra(+3) la primera vez que un aliado de su línea se retira.",
          "Obtiene Chakra(+4) la primera vez que un aliado de su línea se retira."
        ]
      },
      "S1_055": {
        "name": "KONOHAMARU SARUTOBI",
        "ability": "Técnica Erótica Imperfecta",
        "descriptions": [
          "Al desplegarse, hay un 50 % de probabilidades de Inmovilizar(6s) una carta rival a medio alcance. Los objetivos pertenecen a su propia línea.",
          "Al desplegarse, hay un 50 % de probabilidades de Inmovilizar(8s) una carta rival en su línea a medio alcance."
        ]
      },
      "S1_056": {
        "name": "KONOHAMARU SARUTOBI",
        "ability": "Legado",
        "descriptions": [
          "Al desplegarse, hay un 50 % de probabilidades de invocar un Hiruzen aleatorio de tu baraja, de lo contrario, obtiene Chakra(+2).",
          "Al desplegarse, hay un 50 % de probabilidades de invocar un Hiruzen aleatorio de tu baraja, de lo contrario, obtiene Chakra(+3)."
        ]
      },
      "S1_057": {
        "name": "KONOHAMARU SARUTOBI",
        "ability": "Técnica Erótica",
        "descriptions": [
          "Al desplegarse, Inmoviliza(4s) una carta rival a medio alcance. Los objetivos pertenecen a su propia línea.",
          "Al desplegarse, Inmoviliza(5s) una carta rival en su línea a medio alcance."
        ]
      },
      "S1_058": {
        "name": "EBISU",
        "ability": "Lecciones Difíciles",
        "descriptions": [
          "Todos los aliados desplegados obtienen Chakra(+2) pero se Debilita(1) esta carta por cada vez.",
          "Todos los aliados desplegados obtienen Chakra(+3) pero se Debilita(1) esta carta por cada vez."
        ]
      },
      "S1_059": {
        "name": "INARI",
        "ability": "Tomar las Armas",
        "descriptions": [
          "Al desplegarse, Debilita(1) y Ralentiza(6s) a la carta rival más cercana a largo alcance. Los objetivos pertenecen a su propia línea.",
          "Al desplegarse, Debilita(1) y Ralentiza(8s) al primer rival en su línea a largo alcance."
        ]
      },
      "S1_060": {
        "name": "GATO",
        "ability": "Señor del Crimen",
        "descriptions": [
          "Al desplegarse, Concentración(6s). Si la Concentración tiene éxito, Invoca una carta aleatoria con un coste máximo de 3 desde tu baraja.",
          "Al desplegarse, Concentración(4s). Si la Concentración tiene éxito, Invoca una carta aleatoria con un coste máximo de 3 desde tu baraja."
        ]
      },
      "S1_061": {
        "name": "NINJA HOUNDS",
        "ability": "Persecución de Colmillos",
        "descriptions": [
          "Al desplegarse, se Inmoviliza(6s) a sí mismo y al oponente en su línea con el chakra más alto.",
          "Al desplegarse, se Inmoviliza(8s) a sí mismo y al oponente en su línea con el chakra más alto."
        ]
      },
      "S1_062": {
        "name": "TEUCHI",
        "ability": "Camino del Ramen",
        "descriptions": [
          "Chakra(+1) a los aliados en su linea después de 8 segundos.",
          "Chakra(+2) a los aliados en su linea después de 8 segundos."
        ]
      },
      "S1_063": {
        "name": "NARUTO UZUMAKI",
        "ability": "Determinación",
        "descriptions": [
          "Cuando Iruka aliado esté a punto de retirarse, lo devuelve al inicio de la línea y crea 3 clones con Chakra(1) distribuidos en todas las líneas.",
          "Cuando un Iruka aliado está a punto de retirarse, lo devuelve al inicio de la línea e Invoca 5 clones con Chakra(1) distribuidos en todas las líneas."
        ]
      },
      "S1_064": {
        "name": "NARUTO UZUMAKI",
        "ability": "Pose Perfecta",
        "descriptions": [
          "Obtiene Chakra(+5) después de 10 s.",
          "Obtiene Chakra(+6) después de 10 s."
        ]
      },
      "S1_065": {
        "name": "NARUTO UZUMAKI",
        "ability": "Técnica Erótica Masiva",
        "descriptions": [
          "En caso de enfrentamiento, Inmoviliza(6s) la carta rival, se teletransporta detrás de ella y Acelera(2s).",
          "En caso de enfrentamiento, Inmoviliza(8s) la carta rival, se teletransporta detrás de ella y Acelera(4s)."
        ]
      },
      "S1_066": {
        "name": "SASUKE UCHIHA",
        "ability": "Predicción",
        "descriptions": [
          "No se puede debilitar durante enfrentamientos con cartas rivales de 2 o menos Chakra.",
          "No se puede debilitar durante enfrentamientos con cartas rivales de 3 o menos Chakra."
        ]
      },
      "S1_067": {
        "name": "SAKURA HARUNO",
        "ability": "Fuego Interior",
        "descriptions": [
          "Gana Chakra(+3) la primera vez que se despliega un rival en su línea; después, Chakra(+1) cada vez que un rival se despliega o Cambia a esta línea.",
          "Gana Chakra(+3) la primera vez que se despliega un rival en su línea; después, Chakra(+2) cada vez que un rival se despliega o Cambia a esta línea."
        ]
      },
      "S1_068": {
        "name": "KAKASHI HATAKE",
        "ability": "Muerte Milenaria",
        "descriptions": [
          "Salta sobre la primera carta rival que se acerca, la Debilita(1) y la Empuja(3).",
          "Salta sobre la primera carta rival que se acerca, la Debilita(1) y la Empuja(4)."
        ]
      },
      "S1_069": {
        "name": "KAKASHI HATAKE",
        "ability": "Gran Catarata",
        "descriptions": [
          "Al desplegarse, Empuja(3) y Debilita(2) a todos los rivales de la línea.",
          "Al desplegarse, Empuja(3) y Debilita(3) a todos los rivales de la línea."
        ]
      },
      "S1_070": {
        "name": "KAKASHI HATAKE",
        "ability": "Raikiri",
        "descriptions": [
          "Salta sobre la primera carta rival que se acerca y la Debilita(3). Ignora Protección.",
          "Salta sobre la primera carta rival que se acerca y la Debilita(4). Ignora Protección."
        ]
      },
      "S1_071": {
        "name": "KAKASHI HATAKE",
        "ability": "Clon Falso",
        "descriptions": [
          "Gasta la energía restante para invocar hasta 5 clones con Chakra(2) disfrazados del original.",
          "Gasta la energía restante para invocar hasta 6 clones con Chakra(2) disfrazados del original."
        ]
      },
      "S1_072": {
        "name": "IRUKA UMINO",
        "ability": "Reprimenda",
        "descriptions": [
          "Mientras esta carta esté activa, otorga Chakra(+1) y Inmoviliza(2s) a los aliados con 2 Chakra al desplegarlos.",
          "Mientras esta carta está activa, Chakra(+2) y Inmoviliza(2s) a los aliados con 2 Chakra al desplegarlos."
        ]
      },
      "S1_073": {
        "name": "HIRUZEN SARUTOBI",
        "ability": "Voluntad de Fuego",
        "descriptions": [
          "Chakra[+1] a todos los aliados después de 10 segundos.",
          "Tras 10 segundos, Chakra(+2) a todos los aliados."
        ]
      },
      "S1_074": {
        "name": "ZABUZA MOMOCHI",
        "ability": "Dragón de Agua",
        "descriptions": [
          "Al desplegarse, Debilita(1) y Empuja(1) a todos los rivales en su línea a corto y medio alcance.",
          "Al desplegarse, Debilita(1) y Empuja(3) a todos los rivales de la línea a corto y medio alcance."
        ]
      },
      "S1_075": {
        "name": "HAKU",
        "ability": "Espejos de Hielo Demoníacos",
        "descriptions": [
          "En caso de enfrentamiento, Inmoviliza(2s) y Debilita(1) a los rivales cercanos de su propia línea; después, Cambia de línea. Esta habilidad se reactiva cada vez que gana Chakra.",
          "En caso de enfrentamiento, Inmoviliza(4s) y Debilita(1) a los rivales cercanos de su propia línea; después, Cambia de línea. Esta habilidad se reactiva cada vez que gana Chakra."
        ]
      },
      "S1_076": {
        "name": "GAMABUNTA",
        "ability": "Cooperación de sapo",
        "descriptions": [
          "Chakra(+1) cuando los aliados Empujan a los rivales.",
          "Chakra(+2) cuando los aliados Empujan a los rivales."
        ]
      },
      "S1_077": {
        "name": "NARUTO UZUMAKI",
        "ability": "Clones de Sombra",
        "descriptions": [
          "Crea 2 clones con Chakra(2) y Acelerar(4s) en las otras líneas, luego 2 clones nuevos después de 10s. Chakra(+1) cada vez que estos clones se retiran.",
          "Invoca 2 clones con Chakra(2) y Acelera(6s) en las otras líneas, y luego 2 nuevos clones tras 10 s. Chakra(+1) cada vez que estos clones se retiran."
        ]
      },
      "S1_078": {
        "name": "NARUTO UZUMAKI",
        "ability": "Furia de Kyubi",
        "descriptions": [
          "Cuando los aliados se retiran, Chakra(+1) y Acelerar(1s)",
          "Cuando los aliados se retiran, Chakra(+2) y Acelerar(1s)"
        ]
      },
      "S1_079": {
        "name": "NARUTO UZUMAKI",
        "ability": "Puñetazo furioso",
        "descriptions": [
          "Se despliega directamente a medio alcance, Debilita(2) y Empuja hacia atrás(1) a todos los rivales de la línea.",
          "Se despliega directamente a medio alcance, Debilita(2) y Empuja(3) hacia atrás a todos los rivales de la línea."
        ]
      },
      "S1_080": {
        "name": "NARUTO UZUMAKI",
        "ability": "Determinación",
        "descriptions": [
          "Obtiene Chakra(+2) cada 8 s.",
          "Obtiene Chakra(+2) cada 6 s."
        ]
      },
      "S1_081": {
        "name": "SASUKE UCHIHA",
        "ability": "Gran Bola de Fuego",
        "descriptions": [
          "Al desplegarse, Debilita(2) a todos los rivales a medio alcance.",
          "Al desplegarse, Debilita(3) a todos los rivales a medio alcance."
        ]
      },
      "S1_082": {
        "name": "KAKASHI HATAKE",
        "ability": "Plan de Batalla",
        "descriptions": [
          "Mientras está activo, Chakra(+1) siempre que los aliados Debiliten a sus rivales. Los aliados obtienen Chakra(+1) por cada carta afectada la primera vez que Debilitan a sus rivales.",
          "Mientras está activo, Chakra(+2) siempre que los aliados Debiliten a sus rivales. Los aliados obtienen Chakra(+1) por cada carta afectada la primera vez que Debilitan a sus rivales."
        ]
      },
      "S1_083": {
        "name": "ZABUZA MOMOCHI",
        "ability": "Demonio",
        "descriptions": [
          "Al desplegar, Debilita(1) todas las cartas. Si tienen 3 chakras o menos, Debilita(3) en su lugar.",
          "Al desplegar, Debilita(1) todas las cartas. Si tienen 4 chakras o menos, Debilita(4) en su lugar."
        ]
      },
      "S1_084": {
        "name": "ZABUZA MOMOCHI",
        "ability": "Carga Temeraria",
        "descriptions": [
          "En cada enfrentamiento, Debilita(2) las cartas rivales con 4 de Chakra o menos y hace que Cambien de línea. Acelera continuamente.",
          "En cada enfrentamiento, Debilita(3) las cartas rivales con 4 de Chakra o menos y hace que Cambien de línea. Acelera continuamente."
        ]
      },
      "S1_085": {
        "name": "KYUBI",
        "ability": "Desastre natural",
        "descriptions": [
          "Se despliega a medio alcance, Empuja(1) y Debilita(3) a todas las cartas. Mientras está activa, Debilita(1) a las nuevas cartas desplegadas. Ralentización permanente.",
          "Se despliega a medio alcance, Empuja(1) y Debilita(4) a todas las cartas. Mientras está activa, Debilita(1) a las nuevas cartas desplegadas. Ralentización permanente."
        ]
      },
      "S2_001": {
        "name": "Naruto Uzumaki",
        "ability": "Entrenamiento de Chakra",
        "descriptions": [
          "Al desplegarse, hay un 50 % de probabilidades de Chakra(+3).",
          "Al desplegarse, hay un 50 % de probabilidades de Chakra(+4)."
        ]
      },
      "S2_002": {
        "name": "Naruto Uzumaki",
        "ability": "Aspirante",
        "descriptions": [
          "Al desplegarse, Inmovilización(1s) y gana Chakra(+2) por cada rival de su línea con más Chakra.",
          "Al desplegarse, Inmovilización(2s) y gana Chakra(+2) por cada rival de su línea con más Chakra."
        ]
      },
      "S2_003": {
        "name": "Sasuke Uchiha",
        "ability": "Combo del León",
        "descriptions": [
          "Salta sobre la primera carta rival que se acerca, y la Debilita(2).",
          "Salta sobre la primera carta rival que se acerca, y la Debilita(3)."
        ]
      },
      "S2_004": {
        "name": "Sakura Haruno",
        "ability": "Acelerón",
        "descriptions": [
          "Acelerar(2s)",
          "Acelerar(3s)"
        ]
      },
      "S2_005": {
        "name": "Rock Lee",
        "ability": "Protector",
        "descriptions": [
          "Acelera(+3s) cada vez que un rival se despliega en esta línea.",
          "Acelera(+4s) cada vez que un rival se despliega en esta línea."
        ]
      },
      "S2_006": {
        "name": "Rock Lee",
        "ability": "Bomba de Amor",
        "descriptions": [
          "Chakra(+1) al siguiente aliado desplegado. Mientras esta carta esté activa, Cambia de línea a ese aliado cada 8 segundos.",
          "Chakra(+2) al siguiente aliado desplegado. Mientras esta carta está activa, Cambia a ese aliado de línea cada 8 segundos."
        ]
      },
      "S2_007": {
        "name": "Neji Hyuga",
        "ability": "Puño Suave",
        "descriptions": [
          "En caso de enfrentamiento, Debilita(2) y Empuja(1).",
          "En caso de enfrentamiento, Debilita(2) y Empuja(2)."
        ]
      },
      "S2_008": {
        "name": "Tenten",
        "ability": "Dragones Gemelos",
        "descriptions": [
          "Al desplegarse, Debilita(1) y Ralentiza(6s) a todos los rivales a largo alcance.",
          "Al desplegarse, Debilita(1) y Ralentiza(8s) a todos los rivales a largo alcance."
        ]
      },
      "S2_009": {
        "name": "Gai Maito",
        "ability": "Poder de la Juventud",
        "descriptions": [
          "Mientras esta carta está activa, otorga Chakra(+2) a las cartas de Rock Lee al desplegarlas.",
          "Mientras esta carta está activa, otorga Chakra(+3) a las cartas de Rock Lee al desplegarlas."
        ]
      },
      "S2_010": {
        "name": "Gaara",
        "ability": "Peligroso",
        "descriptions": [
          "Se despliega directamente a medio alcance, Chakra(+3) si hay una carta rival a medio alcance.",
          "Se despliega directamente a medio alcance, Chakra(+4) si hay una carta rival a medio alcance."
        ]
      },
      "S2_011": {
        "name": "Kankuro",
        "ability": "Descarado",
        "descriptions": [
          "Otorga Chakra(+3) al siguiente Gaara aliado desplegado.",
          "Otorga Chakra(+4) al siguiente Gaara aliado desplegado."
        ]
      },
      "S2_012": {
        "name": "Temari",
        "ability": "Prudente",
        "descriptions": [
          "Otorga Protección(1) y Ralentiza(6s) al siguiente Gaara aliado desplegado.",
          "Otorga Protección(1) y Ralentiza(10s) al siguiente Gaara aliado desplegado."
        ]
      },
      "S2_013": {
        "name": "Baki",
        "ability": "Resiliente",
        "descriptions": [
          "Acelera(3s) y Protección(1).",
          "Acelera(4s) y Protección(1)."
        ]
      },
      "S2_014": {
        "name": "Ino Yamanaka",
        "ability": "Acelerón",
        "descriptions": [
          "Acelerar(2s)",
          "Acelerar(3s)"
        ]
      },
      "S2_015": {
        "name": "Kabuto Yakushi",
        "ability": "Explicación",
        "descriptions": [
          "Al desplegarse, todos los aliados a corto alcance ganan aleatoriamente Chakra(+1) o Inmovilizar(4s).",
          "Al desplegarse, todos los aliados a corto alcance ganan aleatoriamente Chakra(+2) o Inmovilizar(4s)."
        ]
      },
      "S2_016": {
        "name": "Student Trio",
        "ability": "Equipo Konohamaru",
        "descriptions": [
          "Al retirarse, vuelve a desplegarse como Konohamaru, Moegi y Udon con Acelerar(3s) y Chakra(1) en cada línea.",
          "Al retirarse, vuelve a desplegarse como Konohamaru, Moegi y Udon con Acelerar(4s) y Chakra(1) en cada línea."
        ]
      },
      "S2_017": {
        "name": "Ibiki Morino",
        "ability": "Reglas Estrictas",
        "descriptions": [
          "Al desplegarse, Empuja(2) o Inmoviliza(4s) a todos los rivales de la línea.",
          "Al desplegarse, Empuja(3) o Inmoviliza(5s) a todos los rivales de la línea."
        ]
      },
      "S2_018": {
        "name": "Choza Akimichi",
        "ability": "Viejos Amigos",
        "descriptions": [
          "Mientras esta carta está activa, otorga Chakra(+1) a las cartas aliadas de Shikaku e Inoichi.",
          "Mientras esta carta está activa, otorga Chakra(+2) a las cartas aliadas de Shikaku e Inoichi."
        ]
      },
      "S2_019": {
        "name": "Inoichi Yamanaka",
        "ability": "Viejos Amigos",
        "descriptions": [
          "Mientras esta carta está activa, otorga Chakra(+1) a las cartas aliadas de Choza y Shikaku.",
          "Mientras esta carta está activa, otorga Chakra(+2) a las cartas aliadas de Choza y Shikaku."
        ]
      },
      "S2_020": {
        "name": "Shikaku Nara",
        "ability": "Viejos Amigos",
        "descriptions": [
          "Mientras esta carta está activa, otorga Chakra(+1) a las cartas aliadas de Inoichi y Choza.",
          "Mientras esta carta está activa, otorga Chakra(+2) a las cartas aliadas de Inoichi y Choza."
        ]
      },
      "S2_021": {
        "name": "Hanabi Hyuga",
        "ability": "Prodigio",
        "descriptions": [
          "Acelera(2s). En caso de enfrentamiento, Empuja(2).",
          "Acelera(3s). En caso de enfrentamiento, Empuja(3)."
        ]
      },
      "S2_022": {
        "name": "Hiashi Hyuga",
        "ability": "Líder Hyuga",
        "descriptions": [
          "Mientras esta carta está activa, los Hyuga aliados ganan Chakra(+2) y Empuja(1). Empuja no aumenta un valor ya existente.",
          "Mientras esta carta está activa, los Hyuga aliados ganan Chakra(+3) y Empuja(1). Empuja no aumenta un valor ya existente."
        ]
      },
      "S2_023": {
        "name": "Hizashi Hyuga",
        "ability": "Sacrificio del Hermano",
        "descriptions": [
          "Acelera(2s). Cuando un Hiashi aliado esté a punto de retirarse, tira de él hacia el comienzo de la línea y se retira en su lugar.",
          "Acelera(3s). Cuando un Hiashi aliado esté a punto de retirarse, tira de él hacia el comienzo de la línea y se retira en su lugar."
        ]
      },
      "S2_024": {
        "name": "Zaku Abumi",
        "ability": "Ondas Decapitadoras",
        "descriptions": [
          "Al desplegarse, Empuja(2) y Cambia de línea a dos cartas rivales a medio alcance.",
          "Al desplegarse, Empuja(2) y Cambia de línea a tres cartas rivales a medio alcance."
        ]
      },
      "S2_025": {
        "name": "Dosu Kinuta",
        "ability": "Altavoz de Eco Resonante",
        "descriptions": [
          "En caso de enfrentamiento, Debilita(2) la carta rival. Si el rival no se retira, lo Inmoviliza(4s) y Cambia de línea.",
          "En caso de enfrentamiento, Debilita(2) la carta rival. Si el rival no se retira, lo Inmoviliza(5s) y Cambia de línea."
        ]
      },
      "S2_026": {
        "name": "Kin Tsuchi",
        "ability": "Agujas de Cascabel",
        "descriptions": [
          "Al desplegarse, Debilita(1) e Inmoviliza(2s) la carta rival más cercana.",
          "Al desplegarse, Debilita(2) e Inmoviliza(2s) la carta rival más cercana."
        ]
      },
      "S2_027": {
        "name": "Izumo Kamizuki",
        "ability": "Sabotaje",
        "descriptions": [
          "Al desplegarse, Inmoviliza(2s) a dos aliados de la línea aleatorios.",
          "Al desplegarse, Inmoviliza(2s) a tres aliados de la línea aleatorios."
        ]
      },
      "S2_028": {
        "name": "Kotetsu Hagane",
        "ability": "Desorientación",
        "descriptions": [
          "Al desplegarse, Ralentiza(4s) y Cambia de línea a 2 aliados aleatorios.",
          "Al desplegarse, Ralentiza(4s) y Cambia de línea a tres aliados aleatorios."
        ]
      },
      "S2_029": {
        "name": "Oboro",
        "ability": "Clon de Niebla",
        "descriptions": [
          "Al desplegarse, crea 2 clones con Chakra(1). Cuando los clones se retiran, hay un 50 % de probabilidad de crear otro clon en la misma línea.",
          "Al desplegarse, Invoca 2 clones con Chakra(2). Cuando los clones se retiran, hay un 50 % de probabilidad de crear otro clon en la misma línea."
        ]
      },
      "S2_030": {
        "name": "Yoroi Akado",
        "ability": "Absorción de Chakra",
        "descriptions": [
          "En caso de enfrentamiento, otorga Chakra(+1) a esta carta y Debilita(1) a la carta rival. También desactiva cualquier habilidad activa.",
          "En caso de enfrentamiento, otorga Chakra(+2) a esta carta y Debilita(1) a la carta rival. También desactiva cualquier habilidad activa."
        ]
      },
      "S2_031": {
        "name": "Ningame",
        "ability": "Templanza",
        "descriptions": [
          "Cada vez que los aliados de la línea ganan Acelerar, se convierte en un Chakra(+1) en su lugar.",
          "Cada vez que los aliados de la línea ganan Acelerar, se convierte en un Chakra(+2) en su lugar."
        ]
      },
      "S2_032": {
        "name": "Gama",
        "ability": "Pergamino de Sapo",
        "descriptions": [
          "Al desplegarse, Invoca un Sapo aleatorio de tu baraja y le otorga Chakra(+1).",
          "Al desplegarse, Invoca un Sapo aleatorio de tu baraja y le otorga Chakra(+2)."
        ]
      },
      "S2_033": {
        "name": "Gamakichi",
        "ability": "Bocaza",
        "descriptions": [
          "Los Sapos aliados aplican Empuja(1) al enfrentarse, mientras esta carta esté activa. Chakra(+1) cada vez que un Sapo empuja a un rival.",
          "Los sapos aliados aplican Empuja(2) al enfrentarse mientras esta carta está activa. Chakra(+1) cada vez que un sapo empuja a un rival."
        ]
      },
      "S2_034": {
        "name": "Giant Snake",
        "ability": "Serpenteo",
        "descriptions": [
          "Se despliega directamente a medio alcance y Cambia de línea a dos cartas más presentes a medio alcance.",
          "Se despliega directamente a medio alcance y Cambia de línea a otras 3 cartas presentes a medio alcance."
        ]
      },
      "S2_035": {
        "name": "Raido Namiashi",
        "ability": "Guardaespaldas",
        "descriptions": [
          "Acelera(2s). Cuando un Hiruzen aliado esté a punto de retirarse, tira de él hacia el comienzo de la línea y se retira en su lugar.",
          "Acelera(3s). Cuando un Hiruzen aliado esté a punto de retirarse, tira de él hacia el comienzo de la línea y se retira en su lugar."
        ]
      },
      "S2_036": {
        "name": "Homura Mitokado",
        "ability": "Consuelo",
        "descriptions": [
          "El siguiente aliado desplegado gana Protección(1) y Chakra(+1).",
          "El siguiente aliado desplegado gana Protección(1) y Chakra(+2)."
        ]
      },
      "S2_037": {
        "name": "Koharu Utatane",
        "ability": "Seguridad",
        "descriptions": [
          "Después de 10 segundos, despliega a los Cuerpos de élite.",
          "Después de 8 segundos, despliega a los Cuerpos de élite."
        ]
      },
      "S2_038": {
        "name": "Genma Shiranui",
        "ability": "Proctor",
        "descriptions": [
          "Al desplegarse, Concentración(6s). Si la Concentración tiene éxito, Invoca una carta aleatoria de tu mazo con un coste de hasta 4. Si tiene 3 o menos Chakra, concédele Chakra(+2).",
          "Al desplegarse, Concentración(4s). Si la Concentración tiene éxito, Invoca una carta aleatoria con un coste máximo de 4 desde tu baraja. Si tiene 3 de Chakra o menos, le otorga Chakra(+2)."
        ]
      },
      "S2_039": {
        "name": "Genma Shiranui",
        "ability": "Alerta",
        "descriptions": [
          "Al desplegarse, Debilita(3) a un rival de la línea a medio alcance.",
          "Al desplegarse, Debilita(3) a dos rivales de la línea a medio alcance."
        ]
      },
      "S2_040": {
        "name": "Yashamaru",
        "ability": "Deber Reticente",
        "descriptions": [
          "Al retirarse, Debilita(3) todas las cartas cercanas.",
          "Al retirarse, Debilita(4) todas las cartas cercanas."
        ]
      },
      "S2_041": {
        "name": "Karura",
        "ability": "Amor de Madre",
        "descriptions": [
          "Al desplegarse, otorga Chakra(+2) y Ralentiza(3s) a las cartas Gaara aliadas.",
          "Al desplegarse, otorga Chakra(+2) y Ralentiza(5s) a las cartas Gaara aliadas."
        ]
      },
      "S2_042": {
        "name": "Yugao Uzuki",
        "ability": "Juramento de Venganza",
        "descriptions": [
          "Acelera(3s). Protección(1). En caso de enfrentamiento, Debilita(2).",
          "Acelera(4s). Protección(1). En caso de enfrentamiento, Debilita(2)."
        ]
      },
      "S2_043": {
        "name": "Hana Inuzuka",
        "ability": "Acelerón",
        "descriptions": [
          "Acelerar(4s)",
          "Acelerar(5s)"
        ]
      },
      "S2_044": {
        "name": "Tsume Inuzuka",
        "ability": "Liderar la Carga",
        "descriptions": [
          "Acelera(4s). El siguiente aliado desplegado gana Acelerar(+3s) y Chakra(+1).",
          "Acelera(4s). El siguiente aliado desplegado gana Acelerar(+3s) y Chakra(+2)."
        ]
      },
      "S2_045": {
        "name": "Shibi Aburame",
        "ability": "Ayuda Oportuna",
        "descriptions": [
          "Acelera(5s). Chakra(+1) a los aliados al alcanzarlos.",
          "Acelera(6s). Chakra(+1) a los aliados al alcanzarlos."
        ]
      },
      "S2_046": {
        "name": "Jirobo",
        "ability": "Sur",
        "descriptions": [
          "El siguiente Orochimaru desplegado obtiene Chakra(+3).",
          "El siguiente Orochimaru desplegado obtiene Chakra(+4)."
        ]
      },
      "S2_047": {
        "name": "Kidomaru",
        "ability": "Este",
        "descriptions": [
          "El siguiente Orochimaru desplegado obtiene Acelerar(+4s).",
          "El siguiente Orochimaru desplegado obtiene Acelerar(+5s)."
        ]
      },
      "S2_048": {
        "name": "Sakon",
        "ability": "Oeste",
        "descriptions": [
          "El siguiente Orochimaru desplegado Debilita(3) a la carta rival más cercana.",
          "El siguiente Orochimaru desplegado Debilita(4) a la carta rival más cercana."
        ]
      },
      "S2_049": {
        "name": "Tayuya",
        "ability": "Norte",
        "descriptions": [
          "El siguiente Orochimaru desplegado gana Guardia(1).",
          "El siguiente Orochimaru desplegado obtiene Protección(2)."
        ]
      },
      "S2_050": {
        "name": "Anbu",
        "ability": "Cuerpos de Élite",
        "descriptions": [
          "Al desplegarse, gana aleatoriamente Chakra(+2) o Acelerar(4s).",
          "Al desplegarse, gana aleatoriamente Chakra(+3) o Acelerar(5s)."
        ]
      },
      "S2_051": {
        "name": "Naruto Uzumaki",
        "ability": "Destructor del Destino",
        "descriptions": [
          "Protección(2). Cuando se activa Protección, reinicia Aceleración(2s), sin sumarse a la duración restante. Al terminar la Aceleración, Cambia de línea.",
          "Protección(3). Cuando se activa Protección, reinicia Aceleración(2s), sin sumarse a la duración restante. Al terminar la Aceleración, Cambia de línea."
        ]
      },
      "S2_052": {
        "name": "Sakura Haruno",
        "ability": "Firme",
        "descriptions": [
          "En caso de enfrentamiento, Debilita(1) la carta rival y obtiene Protección(1).",
          "En caso de enfrentamiento, Debilita(1) la carta rival y obtiene Protección(2)."
        ]
      },
      "S2_053": {
        "name": "Rock Lee",
        "ability": "Remolino de la Hoja",
        "descriptions": [
          "En caso de enfrentamiento, Empuja(1) y Debilita(2) la carta rival.",
          "En caso de enfrentamiento, Empuja(2) y Debilita(2) la carta rival."
        ]
      },
      "S2_054": {
        "name": "Neji Hyuga",
        "ability": "Byakugan",
        "descriptions": [
          "Al desplegarse, reduce el Chakra de la carta rival más cercana a la mitad y gana Acelerar(2s).",
          "Al desplegarse, reduce el Chakra de la carta rival más cercana a la mitad y gana Acelerar(4s)."
        ]
      },
      "S2_055": {
        "name": "Neji Hyuga",
        "ability": "Carga del Destino",
        "descriptions": [
          "Cada vez que esta carta gane Chakra, gana Chakra(+1) adicional. No puede tener más de 10 de chakra en total.",
          "Cada vez que esta carta gane Chakra, gana Chakra(+2) adicional. No puede tener más de 10 de chakra en total."
        ]
      },
      "S2_056": {
        "name": "Gai Maito",
        "ability": "Reprimenda",
        "descriptions": [
          "Se despliega directamente a medio alcance. El aliado de su línea más cercano obtiene Chakra(+2) y queda Inmovilizado(2s).",
          "Se despliega directamente a medio alcance. El aliado de su línea más cercano obtiene Chakra(+2) y queda Inmovilizado(6s)."
        ]
      },
      "S2_057": {
        "name": "Choji Akimichi",
        "ability": "Bala de Cañón Humana",
        "descriptions": [
          "Acelera(3s). En cada de enfrentamiento, Empuja(2) y Debilita(1) si Acelerar está activo.",
          "Acelera(4s). En cada de enfrentamiento, Empuja(2) y Debilita(1) si Acelerar está activo."
        ]
      },
      "S2_058": {
        "name": "Ino Yamanaka",
        "ability": "Traspaso Mental",
        "descriptions": [
          "Al desplegarse, Concentración(8s) y toma el control del rival a medio alcance de línea con el Chakra más alto. Cuando termina la Concentración, devuelve el control de la carta a tu rival.",
          "Al desplegarse, Concentración(12s) y toma el control del rival a medio alcance de línea con el Chakra más alto. Al terminar la Concentración, devuelve el control de la carta a tu rival."
        ]
      },
      "S2_059": {
        "name": "Hinata Hyuga",
        "ability": "Cambiar",
        "descriptions": [
          "En caso de enfrentamiento, Empuja(1) y Cambia de línea a la carta rival.",
          "En caso de enfrentamiento, Empuja(2) y Cambia de línea a la carta rival."
        ]
      },
      "S2_060": {
        "name": "Gaara",
        "ability": "Escudo de Arena",
        "descriptions": [
          "Guardia(2). Cuando se activa Guardia, Chakra(+1).",
          "Protección(3). Cuando Protección se activa, obtiene Chakra(+1)."
        ]
      },
      "S2_061": {
        "name": "Temari",
        "ability": "Abanico Gigante",
        "descriptions": [
          "Guardia(2). Al desplegarse y cuando se activa Guardia, Empuja(2) a todos los rivales en su línea.",
          "Protección(3). Al desplegarse y cuando Protección se activa, Empuja(3) a todos los rivales de línea."
        ]
      },
      "S2_062": {
        "name": "Anko Mitarashi",
        "ability": "Serpiente de las Sombras",
        "descriptions": [
          "Al desplegarse, Debilita(2) y Inmoviliza(4s) una carta rival de línea a medio alcance.",
          "Al desplegarse, Debilita(2) y Inmoviliza(4s) dos cartas rivales de línea a medio alcance."
        ]
      },
      "S2_063": {
        "name": "Choza Akimichi",
        "ability": "Expansión de Cuerpo",
        "descriptions": [
          "En caso de enfrentamiento, Empuja(3) y Debilita(2) la carta rival.",
          "En caso de enfrentamiento, Empuja(3) y Debilita(3) la carta rival."
        ]
      },
      "S2_064": {
        "name": "Inoichi Yamanaka",
        "ability": "Confusión Mental",
        "descriptions": [
          "Al desplegarse, Concentración(10s) y toma el control del rival a medio alcance de línea más cercano, lo Ralentiza(10s) y desactiva permanentemente cualquier habilidad activa. Cuando termina la Concentración, devuelve el control de la carta a tu rival.",
          "Al desplegarse, Concentración(14s) y toma el control del rival a medio alcance de línea más cercano, lo Ralentiza(10s) y desactiva permanentemente cualquier habilidad activa. Al terminar la Concentración, devuelve el control de la carta a tu rival."
        ]
      },
      "S2_065": {
        "name": "Shikaku Nara",
        "ability": "Sombra Vinculante",
        "descriptions": [
          "Al desplegarse, Inmoviliza(10s) a sí mismo y a dos rivales en su línea a largo alcance.",
          "Al desplegarse, Inmoviliza(12s) a sí mismo y a dos rivales de línea a largo alcance."
        ]
      },
      "S2_066": {
        "name": "Jiraiya",
        "ability": "Salvia Pervia",
        "descriptions": [
          "Cambia aleatoriamente de línea cada 10 segundos.",
          "Cambia aleatoriamente de línea cada 8 segundos."
        ]
      },
      "S2_067": {
        "name": "Orochimaru",
        "ability": "Maquinaciones",
        "descriptions": [
          "Al desplegarse y al retirarse, Debilita(1) hasta cualquier 4 cartas.",
          "Al desplegarse y al retirarse, Debilita(1) hasta cualquier 6 cartas."
        ]
      },
      "S2_068": {
        "name": "Hashirama Senju",
        "ability": "Reanimación de Edo",
        "descriptions": [
          "Cuando esté por debajo del chakra base, obtiene Chakra(+1) cada 4 segundos hasta volver al chakra base.",
          "Cuando esté por debajo del chakra base, obtiene Chakra(+1) cada 3 segundos hasta volver al chakra base."
        ]
      },
      "S2_069": {
        "name": "Tobirama Senju",
        "ability": "Reanimación de Edo",
        "descriptions": [
          "Cuando esté por debajo del chakra base, obtiene Chakra(+1) cada 4 segundos hasta volver al chakra base.",
          "Cuando esté por debajo del chakra base, obtiene Chakra(+1) cada 3 segundos hasta volver al chakra base."
        ]
      },
      "S2_070": {
        "name": "Hiruzen Sarutobi",
        "ability": "El Tercero",
        "descriptions": [
          "En caso de enfrentamiento, obtiene Chakra(+2). Al retirarse, otorga Chakra(+2) a todos los aliados.",
          "En caso de enfrentamiento, obtiene Chakra(+3). Al retirarse, otorga Chakra(+2) a todos los aliados."
        ]
      },
      "S2_071": {
        "name": "Hayate Gekko",
        "ability": "Danza de las Tres Lunas",
        "descriptions": [
          "En caso de enfrentamiento, Debilita(1) tres veces. Si el rival no se retira, también Empuja(2).",
          "En caso de enfrentamiento, Debilita(1) tres veces. Si el rival no se retira, también Empuja(3)."
        ]
      },
      "S2_072": {
        "name": "Ibiki Morino",
        "ability": "Interrogatorio",
        "descriptions": [
          "Al desplegarse, Debilita(1) y Ralentiza(4s) todas las cartas.",
          "Al desplegarse, Debilita(1) y Ralentiza(6s) todas las cartas."
        ]
      },
      "S2_073": {
        "name": "Gamahiro",
        "ability": "Peso",
        "descriptions": [
          "Al desplegarse, gana Chakra(+2) por cada sapo aliado. Ralentización permanente.",
          "Al desplegarse, gana Chakra(+3) por cada sapo aliado. Ralentización permanente."
        ]
      },
      "S2_074": {
        "name": "Sasuke Uchiha",
        "ability": "Chidori",
        "descriptions": [
          "En caso de enfrentamiento, salta a través de los rivales cercanos, Debilita(2) a cada uno de ellos. Ignora Protección.",
          "En caso de enfrentamiento, salta a través de los rivales cercanos, Debilita(3) a cada uno de ellos. Ignora Protección."
        ]
      },
      "S2_075": {
        "name": "Rock Lee",
        "ability": "Sin Peso",
        "descriptions": [
          "Acelera(3s). En cada enfrentamiento, si la carta rival tiene un Chakra más alto, Empuja(1) y Debilita(2), entonces Cambia de línea.",
          "Acelera(3s). En cada enfrentamiento, si la carta rival tiene un Chakra más alto, Empuja(2) y Debilita(2), entonces Cambia de línea."
        ]
      },
      "S2_076": {
        "name": "Neji Hyuga",
        "ability": "Rotación",
        "descriptions": [
          "En caso de enfrentamiento, Empuja(2) y Debilita(3) a todas las cartas rivales cercanas.",
          "En caso de enfrentamiento, Empuja(4) y Debilita(3) a todas las cartas rivales cercanas."
        ]
      },
      "S2_077": {
        "name": "Kiba Inuzuka",
        "ability": "Colmillos Cruzados",
        "descriptions": [
          "El siguiente Akamaru desplegado se convierte en una copia completa de esta carta con Acelerar(4s).",
          "El siguiente Akamaru desplegado se convierte en una copia completa de esta carta con Acelerar(5s)."
        ]
      },
      "S2_078": {
        "name": "Shikamaru Nara",
        "ability": "Maestro de Shogi",
        "descriptions": [
          "Al desplegarse, se Inmoviliza(10s) a sí mismo y gana Chakra(+3). Mientras esta carta está activa, cada vez que Inmovilizas a otras cartas aliadas o estas se Concentran, ganan Chakra(+3).",
          "Al desplegarse, se Inmoviliza(12s) a sí mismo y gana Chakra(+4). Mientras esta carta está activa, cada vez que Inmovilizas a otras cartas aliadas o estas ganan Concentración, ganan Chakra(+3)."
        ]
      },
      "S2_079": {
        "name": "Asuma Sarutobi",
        "ability": "Cuchillas de Chakra",
        "descriptions": [
          "En cada enfrentamiento, Debilita(1). Cuando esta carta hace que un rival se retire, Acelera(+1s).",
          "En cada enfrentamiento, Debilita(2). Cuando esta carta hace que un rival se retire, Acelera(+1s)."
        ]
      },
      "S2_080": {
        "name": "Gaara",
        "ability": "Inestable",
        "descriptions": [
          "Al desplegarse, Debilita(2) y Ralentiza(6s) a todas las cartas de la línea.",
          "Al desplegarse, Debilita(2) y Ralentiza(8s) a todas las cartas de la línea."
        ]
      },
      "S2_081": {
        "name": "Gaara",
        "ability": "Sed de Sangre",
        "descriptions": [
          "Chakra(+1) cada vez que cualquier carta aliada Debilita a cualquier carta.",
          "Chakra(+2) cada vez que cualquier carta aliada Debilita a cualquier carta."
        ]
      },
      "S2_082": {
        "name": "Kankuro",
        "ability": "Asalto de Marionetas",
        "descriptions": [
          "Debilita(3) y Ralentiza(2s) al primer rival que se acerca. Si no se retira, lo Cambia de línea. Gana Chakra(+1) y reactiva esta habilidad cuando otro aliado hace que un rival Cambie de línea.",
          "Debilita(3) y Ralentiza(5s) al primer rival que se acerca. Si no se retira, lo Cambia de línea. Gana Chakra(+1) y reactiva esta habilidad cuando otro aliado hace que un rival Cambie de línea."
        ]
      },
      "S2_083": {
        "name": "Jiraya",
        "ability": "Sabio Sapo",
        "descriptions": [
          "Chakra(+3) a los sapos aliados mientras esta carta está activa.",
          "Chakra(+4) a los sapos aliados mientras esta carta está activa."
        ]
      },
      "S2_084": {
        "name": "Orochimaru",
        "ability": "Traición",
        "descriptions": [
          "Ignora todas las habilidades y enfrentamientos rivales. Cuando llega al medio alcance, obtiene Chakra(+2) y se vuelve vulnerable.",
          "Ignora todas las habilidades y enfrentamientos rivales. Cuando llega al medio alcance, obtiene Chakra(+3) y se vuelve vulnerable."
        ]
      },
      "S2_085": {
        "name": "Orochimaru",
        "ability": "Kusanagi",
        "descriptions": [
          "En cada enfrentamiento, Debilita(2). Siempre que una carta rival Cambie de línea, Cambia a la misma línea y obtiene Protección(1).",
          "En cada enfrentamiento, Debilita(3). Siempre que una carta rival Cambie de línea, Cambia a la misma línea y obtiene Protección(1)."
        ]
      },
      "S2_086": {
        "name": "Orochimaru",
        "ability": "Hechicero. Transmigración",
        "descriptions": [
          "Al desplegarse, Debilita(2) a los dos aliados con el chakra más bajo. Por cada retirada, Invoca a Edo Hashirama y Tobirama desde tu baraja, otorgándoles Acelerar(3s).",
          "Al desplegarse, Debilita(2) a los dos aliados con el chakra más bajo. Por cada retirada, Invoca a Edo Hashirama y Tobirama desde tu baraja, otorgándoles Acelerar(5s)."
        ]
      },
      "S2_087": {
        "name": "Hashirama Senju",
        "ability": "¡Génesis de los Bosques!",
        "descriptions": [
          "Al desplegarse, Inmoviliza(12s) a todas las cartas rivales.",
          "Al desplegarse, Inmoviliza(14s) a todas las cartas rivales."
        ]
      },
      "S2_088": {
        "name": "Tobirama Senju",
        "ability": "¡Muro de Agua!",
        "descriptions": [
          "Al desplegarse, Debilita(2) y Ralentiza(4s) a todas las cartas rivales.",
          "Al desplegarse, Debilita(2) y Ralentiza(8s) a todas las cartas rivales."
        ]
      },
      "S2_089": {
        "name": "Hiruzen Sarutobi",
        "ability": "Bombas de Dragón de Fuego",
        "descriptions": [
          "Al desplegarse, Debilita(3) y Quema(4) a la carta rival más cercana.",
          "Al desplegarse, Debilita(3) y Quema(5) a la carta rival más cercana."
        ]
      },
      "S2_090": {
        "name": "Enma",
        "ability": "Rey Mono",
        "descriptions": [
          "Chakra(+1) a los aliados cuando hacen un Cambio de línea.",
          "Chakra(+2) a los aliados cuando hacen un Cambio de línea."
        ]
      },
      "S2_091": {
        "name": "Naruto Uzumaki",
        "ability": "Voluntad de Proteger",
        "descriptions": [
          "La primera vez que esta carta esté por debajo del Chakra base, gana Chakra(+4) y Acelerar(3s). Al retirarse, aumenta permanentemente el Chakra base en 2.",
          "La primera vez que esta carta esté por debajo del Chakra base, gana Chakra(+5) y Acelerar(3s). Al retirarse, aumenta permanentemente el Chakra base en 2."
        ]
      },
      "S2_092": {
        "name": "Sasuke Uchiha",
        "ability": "Marca de Maldición",
        "descriptions": [
          "Al desplegarse, obtiene Chakra(+3). Tras cada enfrentamiento, obtiene Chakra(+2).",
          "Al desplegarse, obtiene Chakra(+4). Tras cada enfrentamiento, obtiene Chakra(+2)."
        ]
      },
      "S2_093": {
        "name": "Sakura Haruno",
        "ability": "Inflexible",
        "descriptions": [
          "Tiene Protección permanente. Cada vez que Protección se activa, Chakra(+1) y Cambia de línea.",
          "Tiene Protección permanente. Cada vez que Protección se activa, Chakra(+2) y Cambia de línea."
        ]
      },
      "S2_094": {
        "name": "Rock Lee",
        "ability": "Quinta Puerta",
        "descriptions": [
          "Al desplegarse, Concentración(5s). Si la Concentración tiene éxito, obtiene Chakra(+7) y activa el resto de esta habilidad. Salta a la primera carta rival que se acerque. En cada encuentro, Debilita(2) la carta rival y Debilita(1) a ti mismo.",
          "Al desplegarse, Concentración(3s). Si la Concentración tiene éxito, obtiene Chakra(+7) y activa el resto de esta habilidad. Salta a la primera carta rival que se acerque. En cada encuentro, Debilita(2) la carta rival y Debilita(1) a ti mismo."
        ]
      },
      "S2_095": {
        "name": "Neji Hyuga",
        "ability": "64 puntos Hakke",
        "descriptions": [
          "En cada enfrentamiento Empuja(1) y Debilita(1). Cuando esta carta hace que un rival se retire, también reduce permanentemente el Chakra base de ese rival en 2.",
          "En cada enfrentamiento Empuja(1) y Debilita(2). Cuando esta carta hace que un rival se retire, también reduce permanentemente el Chakra base de ese rival en 2."
        ]
      },
      "S2_096": {
        "name": "Gaara",
        "ability": "Liberación de Arena",
        "descriptions": [
          "Guardia(1). Cuando una carta rival se acerca, Inmoviliza(8s) y gana Chakra(+2). Si el rival ya está inmovilizado, en su lugar Debilita(3) y gana Guardia(1).",
          "Protección(2). Cada vez que una carta rival se acerca, la Inmoviliza(8s) y obtiene Chakra(+2). Si el rival ya está Inmovilizado, lo Debilita(3) y obtiene Protección(1) en su lugar."
        ]
      },
      "S2_097": {
        "name": "Hiruzen Sarutobi",
        "ability": "Maestro Elemental",
        "descriptions": [
          "Al desplegarse, Debilita(1) y Ralentiza(8s) a todos los rivales en su línea. La primera vez que esta carta gana Chakra, Debilita(2) y Quema(3) a todos los rivales en su línea.",
          "Al desplegarse, Debilita(1) y Ralentiza(12s) a todos los rivales de la línea. La primera vez que esta carta gana Chakra, Debilita(2) y Quema(4) a todos los rivales de la línea."
        ]
      },
      "S2_098": {
        "name": "Hiruzen Sarutobi",
        "ability": "Sello de la Parca",
        "descriptions": [
          "Al desplegarse, Concentración(4s). Si la Concentración tiene éxito, activa el resto de esta habilidad. Cuando una carta rival se acerca con Chakra igual o mayor, le quita hasta 12 Chakra y desactiva cualquier habilidad activa. Si el objetivo se retira, Sella(15s). Al retirarse, se Sella(15s) a sí mismo. Se retira al instante tras sellar 3 cartas.",
          "Al desplegarse, Concentración(4s). Si la Concentración tiene éxito, activa el resto de esta habilidad. Cuando una carta rival se acerca con Chakra igual o superior, le quita hasta 15 Chakra y desactiva cualquier habilidad activa. Si el objetivo se retira, lo Sella(15s). Al retirarse, se Sella(15s) a sí mismo. Se retira al instante tras sellar 3 cartas."
        ]
      },
      "S2_099": {
        "name": "Ichibi",
        "ability": "Golpe del Vacío",
        "descriptions": [
          "Al desplegarse, Debilita(2) a todos los rivales de la línea a largo alcance. Cada 10 segundos, Concentración(2s). Si la Concentración tiene éxito, Debilita(2) a todos los rivales de la línea a largo alcance.",
          "Al desplegarse, Debilita(3) a todos los rivales de la línea a largo alcance. Cada 10 segundos, Concentración(2s). Si la Concentración tiene éxito, Debilita(3) a todos los rivales de la línea a largo alcance."
        ]
      },
      "S2_100": {
        "name": "Kyubi",
        "ability": "Destino Vinculado",
        "descriptions": [
          "Otorga Chakra(+7) al siguiente aliado desplegado. Las cartas se vinculan, cuando una se retira también lo hace la otra.",
          "Otorga Chakra(+8) al siguiente aliado desplegado. Las cartas se vinculan, cuando una se retira también lo hace la otra."
        ]
      },
      "S3_001": {
        "name": "Naruto Uzumaki",
        "ability": "Sueño compartido",
        "descriptions": [
          "Cada vez que otra carta con Sueño Compartido se retira, esta carta gana Chakra(+1).",
          "Cada vez que otra carta con Sueño Compartido se retira, esta carta gana Chakra(+2)."
        ]
      },
      "S3_002": {
        "name": "Sasuke Uchiha",
        "ability": "Entrenamiento de bola de fuego",
        "descriptions": [
          "Acelerar(1s). Al desplegarse, Chakra(+1) por cada carta rival afectada por Quemadura.",
          "Acelerar(2s). Al desplegarse, Chakra(+1) por cada carta rival afectada por Quemadura."
        ]
      },
      "S3_003": {
        "name": "Choji Akimichi",
        "ability": "Expansión parcial",
        "descriptions": [
          "Cuando una carta rival se acerca, Debilita(1) y Empuja(2).",
          "Cuando una carta rival se acerca, Debilita(1) y Empuja(4)."
        ]
      },
      "S3_004": {
        "name": "Kankuro",
        "ability": "Cambio de marioneta",
        "descriptions": [
          "En caso de enfrentamiento, Teletransporta detrás de la carta rival, la Debilita(2) y la Inmoviliza(5s).",
          "En caso de enfrentamiento, Teletransporta detrás de la carta rival, la Debilita(2) y la Inmoviliza(8s)."
        ]
      },
      "S3_005": {
        "name": "Kankuro",
        "ability": "Doncella de hierro",
        "descriptions": [
          "Cuando una carta rival se acerca, la atrae hacia esta carta y desactiva su habilidad, luego la Debilita(2).",
          "Cuando una carta rival se acerca, la atrae hacia esta carta y desactiva su habilidad, luego la Debilita(3)."
        ]
      },
      "S3_006": {
        "name": "Neji Hyuga",
        "ability": "Defensa concentrada",
        "descriptions": [
          "Protección(2). Cuando Protección se activa, 50% de probabilidad de Inmovilizarse(6s).",
          "Protección(3). Cuando Protección se activa, 50% de probabilidad de Inmovilizarse(6s)."
        ]
      },
      "S3_007": {
        "name": "Shikamaru Nara",
        "ability": "Perezoso",
        "descriptions": [
          "Acelerar(2s)",
          "Acelerar(3s)"
        ]
      },
      "S3_008": {
        "name": "Jiraiya",
        "ability": "Aceleración",
        "descriptions": [
          "Acelerar(4s)",
          "Acelerar(5s)"
        ]
      },
      "S3_009": {
        "name": "Jiraiya",
        "ability": "Trampa de la boca del sapo",
        "descriptions": [
          "Al desplegarse, Inmoviliza(6s) a todas las cartas de la línea.",
          "Al desplegarse, Inmoviliza(10s) a todas las cartas de la línea."
        ]
      },
      "S3_010": {
        "name": "Jiraiya",
        "ability": "Entrenamiento avanzado",
        "descriptions": [
          "Cada vez que despliegas a un aliado de línea con 3 o menos de Chakra, le concede Concentración(8s). Si esa Concentración tiene éxito, la carta aliada gana Chakra(+3).",
          "Cada vez que despliegas a un aliado de línea con 3 o menos de Chakra, le concede Concentración(8s). Si esa Concentración tiene éxito, la carta aliada gana Chakra(+4)."
        ]
      },
      "S3_011": {
        "name": "Orochimaru",
        "ability": "En guardia",
        "descriptions": [
          "Protección(1)",
          "Protección(2)"
        ]
      },
      "S3_012": {
        "name": "Orochimaru",
        "ability": "Escurridizo",
        "descriptions": [
          "Acelerar(3s). Cuando una carta rival se acerca, la Debilita(1) y Cambia de línea.",
          "Acelerar(5s). Cuando una carta rival se acerca, la Debilita(1) y Cambia de línea."
        ]
      },
      "S3_013": {
        "name": "Tsunade",
        "ability": "Aceleración",
        "descriptions": [
          "Acelerar(3s)",
          "Acelerar(4s)"
        ]
      },
      "S3_014": {
        "name": "Tsunade",
        "ability": "Capirotazo potente",
        "descriptions": [
          "Protección(1). Cuando una carta rival se acerca, salta sobre ella y la Empuja(2).",
          "Protección(1). Cuando una carta rival se acerca, salta sobre ella y la Empuja(4)."
        ]
      },
      "S3_015": {
        "name": "Tsunade",
        "ability": "Veterano",
        "descriptions": [
          "Acelerar(3s). En caso de enfrentamiento, Empuja(1).",
          "Acelerar(4s). En caso de enfrentamiento, Empuja(1)."
        ]
      },
      "S3_016": {
        "name": "Manda",
        "ability": "Serpiente colosal",
        "descriptions": [
          "Acelerar(4s) y Protección(1). Cuando Protección se activa, Cambia de línea.",
          "Acelerar(4s) y Protección(2). Cuando Protección se activa, Cambia de línea."
        ]
      },
      "S3_017": {
        "name": "Katsuyu",
        "ability": "Disparo de ácido",
        "descriptions": [
          "Al desplegarse, Debilita(2) y Ralentiza(6s) a todos los rivales a medio alcance.",
          "Al desplegarse, Debilita(3) y Ralentiza(6s) a todos los rivales a medio alcance."
        ]
      },
      "S3_018": {
        "name": "Hiruzen Sarutobi",
        "ability": "Prueba de los cascabeles",
        "descriptions": [
          "Ralentiza(6s) a los próximos tres aliados desplegados, otorgándoles Chakra(+1) cada 3 segundos mientras estén bajo esta Ralentización.",
          "Ralentiza(9s) a los próximos tres aliados desplegados, otorgándoles Chakra(+1) cada 3 segundos mientras estén bajo esta Ralentización."
        ]
      },
      "S3_019": {
        "name": "Itachi Uchiha",
        "ability": "Hermano mayor",
        "descriptions": [
          "El próximo Sasuke desplegado gana Chakra(+2) y Acelerar(4s) si se despliega en la misma línea, o Protección(2) y Ralentiza(10s) si se despliega en otra línea.",
          "El próximo Sasuke desplegado gana Chakra(+2) y Acelerar(5s) si se despliega en la misma línea, o Protección(2) y Ralentiza(12s) si se despliega en otra línea."
        ]
      },
      "S3_020": {
        "name": "Jirobo",
        "ability": "Liberación del sello maldito",
        "descriptions": [
          "Protección(1). En caso de enfrentamiento, Empuja(1).",
          "Protección(2). En caso de enfrentamiento, Empuja(1)."
        ]
      },
      "S3_021": {
        "name": "Kidomaru",
        "ability": "Liberación del sello maldito",
        "descriptions": [
          "Protección(1) y Acelerar(2s).",
          "Protección(1) y Acelerar(4s)."
        ]
      },
      "S3_022": {
        "name": "Kidomaru",
        "ability": "Lluvia de arañas",
        "descriptions": [
          "Al desplegarse, Inmoviliza(4s) o Ralentiza(6s) aleatoriamente a todas las cartas rivales.",
          "Al desplegarse, Inmoviliza(6s) o Ralentiza(8s) aleatoriamente a todas las cartas rivales."
        ]
      },
      "S3_023": {
        "name": "Kimimaro",
        "ability": "Control de huesos",
        "descriptions": [
          "Acelerar(2s). En caso de enfrentamiento, Debilita(3).",
          "Acelerar(4s). En caso de enfrentamiento, Debilita(3)."
        ]
      },
      "S3_024": {
        "name": "Sakon & Ukon",
        "ability": "Liberación del sello maldito",
        "descriptions": [
          "Protección(1). En caso de enfrentamiento, Debilita(1).",
          "Protección(1). En caso de enfrentamiento, Debilita(2)."
        ]
      },
      "S3_025": {
        "name": "Tayuya",
        "ability": "Liberación del sello maldito",
        "descriptions": [
          "Protección(1) y Acelerar(2s).",
          "Protección(1) y Acelerar(4s)."
        ]
      },
      "S3_026": {
        "name": "Kimimaro",
        "ability": "Liberación del sello maldito",
        "descriptions": [
          "Protección(1). Cuando una carta rival se acerca, se Inmoviliza(2s) y Chakra(+1). En caso de enfrentamiento, Debilita(1).",
          "Protección(2). Cuando una carta rival se acerca, se Inmoviliza(2s) y Chakra(+1). En caso de enfrentamiento, Debilita(1)."
        ]
      },
      "S3_027": {
        "name": "Shizune",
        "ability": "Cerdito devoto",
        "descriptions": [
          "Al desplegarse, Invoca a Tonton con Chakra(1) y Acelerar(5s) en la misma línea que la Tsunade aliada. Al alcanzar una carta Tsunade aliada, le otorga Chakra(+3) y luego se retira.",
          "Al desplegarse, Invoca a Tonton con Chakra(1) y Acelerar(5s) en la misma línea que la Tsunade aliada. Al alcanzar una carta Tsunade aliada, le otorga Chakra(+4) y luego se retira."
        ]
      },
      "S3_028": {
        "name": "Tsume Inuzuka",
        "ability": "Maestra de los perros",
        "descriptions": [
          "Al desplegarse, Invoca a Kuromaru con Chakra(3) en otra línea. El próximo Perro Ninja desplegado gana Chakra(+2).",
          "Al desplegarse, Invoca a Kuromaru con Chakra(3) en otra línea. El próximo Perro Ninja desplegado gana Chakra(+3)."
        ]
      },
      "S3_029": {
        "name": "Akahoshi",
        "ability": "Entrenamiento engañoso",
        "descriptions": [
          "Cada vez que las cartas aliadas se concentran, les concede Concentración(+4s). Debilita(1) a las cartas aliadas cada 4 segundos durante la Concentración.",
          "Cada vez que las cartas aliadas se concentran, les concede Concentración(+6s). Debilita(1) a las cartas aliadas cada 4 segundos durante la Concentración."
        ]
      },
      "S3_030": {
        "name": "Amachi",
        "ability": "Bala de agua",
        "descriptions": [
          "Acelerar(2s). Al desplegarse, Debilita(1) a la carta rival más cercana a medio alcance.",
          "Acelerar(3s). Al desplegarse, Debilita(2) a la carta rival más cercana a medio alcance."
        ]
      },
      "S3_031": {
        "name": "Aoi Rokusho",
        "ability": "Lluvia de agujas",
        "descriptions": [
          "En caso de enfrentamiento, Debilita(1) y Ralentiza(3s) a todos los rivales de línea cercanos.",
          "En caso de enfrentamiento, Debilita(1) y Ralentiza(5s) a todos los rivales de línea cercanos."
        ]
      },
      "S3_032": {
        "name": "Dan Kato",
        "ability": "Sueño compartido",
        "descriptions": [
          "Cada vez que otra carta con Sueño Compartido se retira, esta carta gana Chakra(+1).",
          "Cada vez que otra carta con Sueño Compartido se retira, esta carta gana Chakra(+2)."
        ]
      },
      "S3_033": {
        "name": "Fugaku Uchiha",
        "ability": "Líder de los Uchiha",
        "descriptions": [
          "Al desplegar cartas Uchiha aliadas, estas ganan Protección(+1) y Ralentiza(6s) si tienen 3 de Chakra o menos, de lo contrario ganan Chakra(+2) y Inmoviliza(4s).",
          "Al desplegar cartas Uchiha aliadas, estas ganan Protección(+2) y Ralentiza(6s) si tienen 3 de Chakra o menos, de lo contrario ganan Chakra(+3) y Inmoviliza(4s)."
        ]
      },
      "S3_034": {
        "name": "Fūjin",
        "ability": "Fuerza legendaria",
        "descriptions": [
          "Protección(1). En caso de enfrentamiento, Debilita(1) y Empuja(3).",
          "Protección(2). En caso de enfrentamiento, Debilita(1) y Empuja(3)."
        ]
      },
      "S3_035": {
        "name": "Gamatatsu",
        "ability": "Motivado por la comida",
        "descriptions": [
          "Al desplegarse, Se concentra(12s). Cada 4 segundos durante la Concentración, gasta 1 de energía si está disponible para otorgar Chakra(+2) a los demás Sapos aliados.",
          "Al desplegarse, Se concentra(16s). Cada 4 segundos durante la Concentración, gasta 1 de energía si está disponible para otorgar Chakra(+2) a los demás Sapos aliados."
        ]
      },
      "S3_036": {
        "name": "Hanzaki",
        "ability": "Plan de robo",
        "descriptions": [
          "Acelerar(2s). Al desplegarse, Debilita(1) a todos los aliados de línea, ganando Chakra(+2) por cada aliado afectado.",
          "Acelerar(3s). Al desplegarse, Debilita(1) a todos los aliados de línea, ganando Chakra(+2) por cada aliado afectado."
        ]
      },
      "S3_037": {
        "name": "Hanzaki",
        "ability": "Estocada con Zanbato",
        "descriptions": [
          "Protección(1). Cuando una carta rival se acerca, salta sobre ella y la Debilita(1) o la Empuja(1).",
          "Protección(2). Cuando una carta rival se acerca, salta sobre ella y la Debilita(1) o la Empuja(1)."
        ]
      },
      "S3_038": {
        "name": "Idate Morino",
        "ability": "Corredor",
        "descriptions": [
          "Acelerar(4s). En caso de enfrentamiento, Cambia de línea.",
          "Acelerar(5s). En caso de enfrentamiento, Cambia de línea."
        ]
      },
      "S3_039": {
        "name": "Jirocho Wasabi",
        "ability": "Confianza sincera",
        "descriptions": [
          "El siguiente aliado desplegado en otra línea gana Acelerar(2s) y Protección(1). Cuando llega a medio alcance, convierte la Aceleración restante en hasta 3 Chakra.",
          "El siguiente aliado desplegado en otra línea gana Acelerar(3s) y Protección(1). Cuando llega a medio alcance, convierte la Aceleración restante en hasta 3 Chakra."
        ]
      },
      "S3_040": {
        "name": "Arashi",
        "ability": "Mandala de atadura",
        "descriptions": [
          "Al desplegarse, Empuja(2) e Inmoviliza(8s) al rival de línea con más Chakra. Mientras ese rival esté bajo esta Inmovilización, Debilita(1) a la carta rival cada 4s.",
          "Al desplegarse, Empuja(4) e Inmoviliza(8s) al rival de línea con más Chakra. Mientras ese rival esté bajo esta Inmovilización, Debilita(1) a la carta rival cada 4s."
        ]
      },
      "S3_041": {
        "name": "Kagerō",
        "ability": "Arte ninja Kagero",
        "descriptions": [
          "Al desplegarse, Debilita(3) a dos rivales de línea a medio alcance, luego Cambia de línea a sí misma y a dos aliados de línea a corto alcance.",
          "Al desplegarse, Debilita(4) a dos rivales de línea a medio alcance, luego Cambia de línea a sí misma y a dos aliados de línea a corto alcance."
        ]
      },
      "S3_042": {
        "name": "Kyuroku Wagarashi",
        "ability": "Deshonor",
        "descriptions": [
          "El próximo aliado de su línea desplegado obtiene Acelerar(4s). Cuando Kyuroku se retira, ese aliado Cambia de línea y todos los aliados de su línea quedan Ralentizados(3s).",
          "El próximo aliado de su línea desplegado obtiene Acelerar(5s). Cuando Kyuroku se retira, ese aliado Cambia de línea y todos los aliados de su línea quedan Ralentizados(3s)."
        ]
      },
      "S3_043": {
        "name": "Mikoto Uchiha",
        "ability": "Consuelo",
        "descriptions": [
          "El próximo Sasuke desplegado gana Chakra(+1). La primera vez que una carta Sasuke aliada baja de su Chakra base, la Cura(1).",
          "El próximo Sasuke desplegado gana Chakra(+1). La primera vez que una carta Sasuke aliada baja de su Chakra base, la Cura(2)."
        ]
      },
      "S3_044": {
        "name": "Mizuki",
        "ability": "Sello maldito animal",
        "descriptions": [
          "En caso de enfrentamiento, Debilita(4). Tras 20 segundos, fija su Chakra en Chakra(1) y desactiva esta habilidad.",
          "En caso de enfrentamiento, Debilita(5). Tras 20 segundos, fija su Chakra en Chakra(1) y desactiva esta habilidad."
        ]
      },
      "S3_045": {
        "name": "Nawaki",
        "ability": "Sueño compartido",
        "descriptions": [
          "Cada vez que otra carta con Sueño Compartido se retira, esta carta gana Chakra(+1).",
          "Cada vez que otra carta con Sueño Compartido se retira, esta carta gana Chakra(+2)."
        ]
      },
      "S3_046": {
        "name": "Raiga Kurosuki",
        "ability": "Espadas del trueno",
        "descriptions": [
          "Cuando una carta rival se acerca, la Debilita(1) y Cambia su línea.",
          "Cuando una carta rival se acerca, la Debilita(2) y Cambia su línea."
        ]
      },
      "S3_047": {
        "name": "Raijin",
        "ability": "Fuerza legendaria",
        "descriptions": [
          "Protección(1). En caso de enfrentamiento, Debilita(1) y Empuja(3).",
          "Protección(2). En caso de enfrentamiento, Debilita(1) y Empuja(3)."
        ]
      },
      "S3_048": {
        "name": "Sumaru",
        "ability": "Guía local",
        "descriptions": [
          "Al desplegarse, dos aliados a corto alcance ganan Acelerar(3s).",
          "Al desplegarse, tres aliados a corto alcance ganan Acelerar(3s)."
        ]
      },
      "S3_049": {
        "name": "Yoshino Nara",
        "ability": "Severidad",
        "descriptions": [
          "El próximo Shikamaru desplegado gana Chakra(+1) y Ralentiza(8s).",
          "El próximo Shikamaru desplegado gana Chakra(+1) y Ralentiza(12s)."
        ]
      },
      "S3_050": {
        "name": "Uchiha Trio",
        "ability": "Sospecha",
        "descriptions": [
          "Acelerar(4s). Cuando está a medio alcance, Chakra(+2).",
          "Acelerar(6s). Cuando está a medio alcance, Chakra(+2)."
        ]
      },
      "S3_051": {
        "name": "Naruto Uzumaki",
        "ability": "Manto del zorro demoníaco",
        "descriptions": [
          "Acelerar(3s). Al desplegarse, Chakra(+2). La primera vez que esta carta baja de su Chakra base, Cura(2).",
          "Acelerar(5s). Al desplegarse, Chakra(+2). La primera vez que esta carta baja de su Chakra base, Cura(2)."
        ]
      },
      "S3_052": {
        "name": "Sasuke Uchiha",
        "ability": "Liberación del sello maldito",
        "descriptions": [
          "La primera vez que esta carta gana Chakra, gana Chakra(+2) adicional.",
          "La primera vez que esta carta gana Chakra, gana Chakra(+4) adicional."
        ]
      },
      "S3_053": {
        "name": "Kankuro",
        "ability": "Superioridad táctica",
        "descriptions": [
          "Cada vez que aliados se teletransportan detrás de rivales, gana Chakra(+2).",
          "Cada vez que aliados se teletransportan detrás de rivales, gana Chakra(+3)."
        ]
      },
      "S3_054": {
        "name": "Shikamaru Nara",
        "ability": "Estrangulamiento de sombra",
        "descriptions": [
          "Cuando un rival se acerca, lo Inmoviliza(6s) junto con esta carta. El rival pierde 1 Chakra cada 2 segundos mientras dure esta Inmovilización.",
          "Cuando un rival se acerca, lo Inmoviliza(8s) junto con esta carta. El rival pierde 1 Chakra cada 2 segundos mientras dure esta Inmovilización."
        ]
      },
      "S3_055": {
        "name": "Akamaru",
        "ability": "Marcado",
        "descriptions": [
          "Al desplegarse, Ralentiza(8s) a todos los rivales de línea. Mientras esta Ralentización esté activa, Debilitar(+1) a las habilidades Debilitar aliadas aplicadas a los rivales afectados.",
          "Al desplegarse, Ralentiza(12s) a todos los rivales de línea. Mientras esta Ralentización esté activa, Debilitar(+1) a las habilidades Debilitar aliadas aplicadas a los rivales afetados."
        ]
      },
      "S3_056": {
        "name": "Itachi Uchiha",
        "ability": "Compostura",
        "descriptions": [
          "Gana Chakra(+1) y se Inmoviliza(2s) cada vez que una carta gana Concentración.",
          "Gana Chakra(+2) y se Inmoviliza(4s) cada vez que una carta gana Concentración."
        ]
      },
      "S3_057": {
        "name": "Jiraiya",
        "ability": "Veterano",
        "descriptions": [
          "Acelerar(3s). En caso de enfrentamiento, Cambia de línea.",
          "Acelerar(4s). En caso de enfrentamiento, Cambia de línea."
        ]
      },
      "S3_058": {
        "name": "Jiraiya",
        "ability": "Jizo de agujas",
        "descriptions": [
          "Protección(2). Cuando Protección se activa, Debilita(2) al rival que la activó. Ignora Protección.",
          "Protección(3). Cuando Protección se activa, Debilita(2) al rival que la activó. Ignora Protección."
        ]
      },
      "S3_059": {
        "name": "Orochimaru",
        "ability": "Veterano",
        "descriptions": [
          "Acelerar(3s). En caso de enfrentamiento, Debilita(1).",
          "Acelerar(4s). En caso de enfrentamiento, Debilita(1)."
        ]
      },
      "S3_060": {
        "name": "Tsunade",
        "ability": "La Quinta",
        "descriptions": [
          "Al desplegarse, otorga Chakra(+1) a todos los aliados de las otras líneas. Mientras está activa, Cura(2) a cada aliado la primera vez que es Debilitado.",
          "Al desplegarse, otorga Chakra(+2) a todos los aliados de las otras líneas. Mientras está activa, Cura(2) a cada aliado la primera vez que es Debilitado."
        ]
      },
      "S3_061": {
        "name": "Tsunade",
        "ability": "Blanco fácil legendario",
        "descriptions": [
          "Al desplegarse, 10% de probabilidad de ganar Chakra(+6). De lo contrario, gana Acelerar(3s).",
          "Al desplegarse, 10% de probabilidad de ganar Chakra(+7). De lo contrario, gana Acelerar(4s)."
        ]
      },
      "S3_062": {
        "name": "Tsunade",
        "ability": "Cura desesperada",
        "descriptions": [
          "Al desplegarse, Cura(2) al aliado de línea más cercano. La primera vez que un aliado de línea pierde Chakra de cualquier fuente, lo Cura(2).",
          "Al desplegarse, Cura(3) al aliado de línea más cercano. La primera vez que un aliado de línea pierde Chakra de cualquier fuente, lo Cura(3)."
        ]
      },
      "S3_063": {
        "name": "Gamabunta",
        "ability": "Kenjutsu del sapo",
        "descriptions": [
          "Cuando una carta rival se acerca, salta sobre ella y la Debilita(2). Gana Acelerar(+3s) la primera vez que gana Chakra.",
          "Cuando una carta rival se acerca, salta sobre ella y la Debilita(3). Gana Acelerar(+4s) la primera vez que gana Chakra."
        ]
      },
      "S3_064": {
        "name": "Kabuto Yakuchi",
        "ability": "Bisturí de Chakra",
        "descriptions": [
          "Acelerar(2s). En caso de enfrentamiento, Teletransporta detrás de la carta rival y la Inmoviliza permanentemente.",
          "Acelerar(3s). En caso de enfrentamiento, Teletransporta detrás de la carta rival y la Inmoviliza permanentemente."
        ]
      },
      "S3_065": {
        "name": "Kisame Hoshigaki",
        "ability": "Protección de Samehada",
        "descriptions": [
          "Protección(3). Cuando Protección se activa, Debilita(1) al rival que la activó y gana Chakra(+1).",
          "Protección(4). Cuando Protección se activa, Debilita(1) al rival que la activó y gana Chakra(+1)."
        ]
      },
      "S3_066": {
        "name": "Jirobo",
        "ability": "Drenaje de Chakra",
        "descriptions": [
          "En cada enfrentamiento, Chakra(+1) para esta carta y Debilita(1) a la carta rival.",
          "En cada enfrentamiento, Chakra(+1) para esta carta y Debilita(2) a la carta rival."
        ]
      },
      "S3_067": {
        "name": "Sakon & Ukon",
        "ability": "Fusión maldita",
        "descriptions": [
          "En caso de enfrentamiento, Teletransporta detrás de la carta rival y luego la Inmoviliza(6s) a ella y a esta carta. El rival pierde 1 Chakra cada 2 segundos mientras esté bajo esta Inmovilización.",
          "En caso de enfrentamiento, Teletransporta detrás de la carta rival y luego la Inmoviliza(8s) a ella y a esta carta. El rival pierde 1 Chakra cada 2 segundos mientras esté bajo esta Inmovilización."
        ]
      },
      "S3_068": {
        "name": "Kurenai Yuhi",
        "ability": "Finta de genjutsu",
        "descriptions": [
          "En caso de enfrentamiento, Teletransporta detrás de la carta rival, la Debilita(2) y la Ralentiza(4s).",
          "En caso de enfrentamiento, Teletransporta detrás de la carta rival, la Debilita(2) y la Ralentiza(8s)."
        ]
      },
      "S3_069": {
        "name": "Shizune",
        "ability": "Niebla venenosa",
        "descriptions": [
          "Al desplegarse, Ralentiza(8s) a todas las cartas a medio alcance y desactiva sus habilidades. Pierden 2 Chakra cada 4 segundos mientras estén bajo esta Ralentización.",
          "Al desplegarse, Ralentiza(12s) a todas las cartas a medio alcance y desactiva sus habilidades. Pierden 2 Chakra cada 4 segundos mientras estén bajo esta Ralentización."
        ]
      },
      "S3_070": {
        "name": "Akahoshi",
        "ability": "Sin escrúpulos",
        "descriptions": [
          "Protección(1). Cuando Protección se activa, Debilita(2) al rival que la activó. La primera vez que esta carta pierde Chakra, Debilita(2) a un aliado aleatorio y gana Chakra(+2) y Protección(+1).",
          "Protección(1). Cuando Protección se activa, Debilita(2) al rival que la activó. La primera vez que esta carta pierde Chakra, Debilita(2) a un aliado aleatorio y gana Chakra(+3) y Protección(+1)."
        ]
      },
      "S3_071": {
        "name": "Amachi",
        "ability": "Monstruo marino",
        "descriptions": [
          "Al desplegarse, se Inmoviliza(6s). Mientras esté bajo Inmovilización, cada 3 segundos Inmoviliza(3s) o Ralentiza(6s) a todos los rivales de línea.",
          "Al desplegarse, se Inmoviliza(9s). Mientras esté bajo Inmovilización, cada 3 segundos Inmoviliza(3s) o Ralentiza(6s) a todos los rivales de línea."
        ]
      },
      "S3_072": {
        "name": "Aoi Rokusho",
        "ability": "Espada de Raijin",
        "descriptions": [
          "Protección(2). En caso de enfrentamiento, Debilita(1) e Inmoviliza(2s) a la carta rival. Ignora Protección.",
          "Protección(2). En caso de enfrentamiento, Debilita(2) e Inmoviliza(4s) a la carta rival. Ignora Protección."
        ]
      },
      "S3_073": {
        "name": "Sumaru",
        "ability": "Chakra de la estrella",
        "descriptions": [
          "Al desplegarse, Chakra(+1) y Cambia de línea si hay aliados de línea. En caso de enfrentamiento, Debilita(2) a la carta rival.",
          "Al desplegarse, Chakra(+1) y Cambia de línea si hay aliados de línea. En caso de enfrentamiento, Debilita(3) a la carta rival."
        ]
      },
      "S3_074": {
        "name": "Naruto Uzumaki",
        "ability": "Rasengan",
        "descriptions": [
          "En caso de enfrentamiento, Debilita(2) y Empuja(4). Elimina toda Protección de la carta rival.",
          "En caso de enfrentamiento, Debilita(3) y Empuja(5). Elimina toda Protección de la carta rival."
        ]
      },
      "S3_075": {
        "name": "Naruto Uzumaki",
        "ability": "Forma de una cola",
        "descriptions": [
          "En cada enfrentamiento, Debilita(1). La primera vez que esta carta baja de su Chakra base, se Cura(3).",
          "En cada enfrentamiento, Debilita(1). La primera vez que esta carta baja de su Chakra base, se Cura(4)."
        ]
      },
      "S3_076": {
        "name": "Sasuke Uchiha",
        "ability": "Predicción evolucionada",
        "descriptions": [
          "Protección(3). Cuando Protección se activa, Chakra(+1). No puede ser Debilitado en enfrentamientos con cartas rivales de 3 de Chakra o menos.",
          "Protección(3). Cuando Protección se activa, Chakra(+2). No puede ser Debilitado en enfrentamientos con cartas rivales de 3 de Chakra o menos."
        ]
      },
      "S3_077": {
        "name": "Sasuke Uchiha",
        "ability": "Defensa alada",
        "descriptions": [
          "Protección(2). En caso de enfrentamiento, Debilita(2). Cuando Protección se activa, gana Acelerar(2s) y reactiva esta habilidad.",
          "Protección(2). En caso de enfrentamiento, Debilita(2). Cuando Protección se activa, gana Acelerar(4s) y reactiva esta habilidad."
        ]
      },
      "S3_078": {
        "name": "Gaara",
        "ability": "Escudo de Shukaku",
        "descriptions": [
          "Protección(3). Mientras esta carta esté activa, los aliados de línea detrás de ella ignoran los efectos de habilidad rivales, pero consumen la Protección de esta carta.",
          "Protección(4). Mientras esta carta esté activa, los aliados de línea detrás de ella ignoran los efectos de habilidad rivales, pero consumen la Protección de esta carta."
        ]
      },
      "S3_079": {
        "name": "Kiba Inuzuka",
        "ability": "Combo de transformación",
        "descriptions": [
          "Al desplegarse, retira a Akamaru y Kiba aliados y transfiere su Chakra a esta carta, ganando Chakra(+1) adicional por cada retirada. En cada enfrentamiento, Debilita(1).",
          "Al desplegarse, retira a Akamaru y Kiba aliados y transfiere su Chakra a esta carta, ganando Chakra(+2) adicional por cada retirada. En cada enfrentamiento, Debilita(1)."
        ]
      },
      "S3_080": {
        "name": "Rock Lee",
        "ability": "Puño ebrio",
        "descriptions": [
          "Cada 10s, se Concentra(3s). Si la Concentración tiene éxito, gana aleatoriamente Acelerar(2s), Protección(1) o Chakra(+1). En cada enfrentamiento, Debilita(1).",
          "Cada 8s, se Concentra(3s). Si la Concentración tiene éxito, gana aleatoriamente Acelerar(2s), Protección(1) o Chakra(+1). En cada enfrentamiento, Debilita(1)."
        ]
      },
      "S3_081": {
        "name": "Temari",
        "ability": "Danza de decapitación rápida",
        "descriptions": [
          "Al desplegarse, Se concentra(9s). Cada 3 segundos durante la Concentración, Debilita(1) y Empuja(2) a todos los rivales a medio y largo alcance.",
          "Al desplegarse, Se concentra(9s). Cada 3 segundos durante la Concentración, Debilita(1) y Empuja(4) a todos los rivales a medio y largo alcance."
        ]
      },
      "S3_082": {
        "name": "Itachi Uchiha",
        "ability": "Ejército de Tsukuyomi",
        "descriptions": [
          "Mientras esta carta esté activa, cada vez que Inmovilizas cartas rivales, Invoca un clon de esta carta en esa misma línea con Acelerar(4s) y pierde 1 Chakra. Los clones no pueden marcar puntos ni ganar Chakra.",
          "Mientras esta carta esté activa, cada vez que Inmovilizas cartas rivales, Invoca un clon de esta carta en esa misma línea con Acelerar(6s) y pierde 1 Chakra. Los clones no pueden marcar puntos ni ganar Chakra."
        ]
      },
      "S3_083": {
        "name": "Itachi Uchiha",
        "ability": "Escape de Amaterasu",
        "descriptions": [
          "Cada vez que una carta rival se acerca, la Quema(10), luego Cambia de línea y pierde 1 Chakra. Este efecto de Quemadura puede propagarse a otras cartas al tocarse e ignora Protección.",
          "Cada vez que una carta rival se acerca, la Quema(15), luego Cambia de línea y pierde 1 Chakra. Este efecto de Quemadura puede propagarse a otras cartas al tocarse e ignora Protección."
        ]
      },
      "S3_084": {
        "name": "Jiraiya",
        "ability": "Lanzallamas de aceite de sapo",
        "descriptions": [
          "Al desplegarse, Quema(3) a todas las cartas rivales y luego se Concentra(8s). Durante la Concentración, gana Chakra(+1) cada vez que aliados aplican Quemadura. Si la Concentración tiene éxito, Quema(4) a todas las cartas rivales.",
          "Al desplegarse, Quema(3) a todas las cartas rivales y luego se Concentra(8s). Durante la Concentración, gana Chakra(+1) cada vez que aliados aplican Quemadura. Si la Concentración tiene éxito, Quema(5) a todas las cartas rivales."
        ]
      },
      "S3_085": {
        "name": "Gamabunta",
        "ability": "Combo de aceite de sapo",
        "descriptions": [
          "Al desplegarse, Quema(3) a todos los rivales de línea. Si algún rival ya está bajo Quemadura, desencadena al instante la cantidad de Quemadura restante.",
          "Al desplegarse, Quema(4) a todos los rivales de línea. Si algún rival ya está bajo Quemadura, desencadena al instante la cantidad de Quemadura restante."
        ]
      },
      "S3_086": {
        "name": "Kidomaru",
        "ability": "Arco de araña",
        "descriptions": [
          "Al desplegarse, Se concentra(12s). Cada 4 segundos durante la Concentración, Debilita(2) e Inmoviliza(6s) al rival con más Chakra a largo alcance.",
          "Al desplegarse, Se concentra(16s). Cada 4 segundos durante la Concentración, Debilita(2) e Inmoviliza(6s) al rival con más Chakra a largo alcance."
        ]
      },
      "S3_087": {
        "name": "Tayuya",
        "ability": "Flauta demoníaca",
        "descriptions": [
          "Al desplegarse, Chakra(+1). Mientras esta carta esté activa, las Ralentizaciones aplicadas por aliados no expiran.",
          "Al desplegarse, Chakra(+2). Mientras esta carta esté activa, las Ralentizaciones aplicadas por aliados no expiran."
        ]
      },
      "S3_088": {
        "name": "Kimimaro",
        "ability": "Arma viviente",
        "descriptions": [
          "Protección(3). En cada enfrentamiento, Debilita(2). Cambia de línea al hacer que un rival se retire.",
          "Protección(5). En cada enfrentamiento, Debilita(2). Cambia de línea al hacer que un rival se retire."
        ]
      },
      "S3_089": {
        "name": "Akahoshi",
        "ability": "Dragón de la estrella",
        "descriptions": [
          "Al desplegarse, Empuja(2), Debilita(1) e Inmoviliza(4s) a todos los rivales de línea.",
          "Al desplegarse, Empuja(2), Debilita(1) e Inmoviliza(8s) a todos los rivales de línea."
        ]
      },
      "S3_090": {
        "name": "Raiga Kurosuki",
        "ability": "Tornado del dragón del trueno",
        "descriptions": [
          "Al desplegarse, Se concentra(8s). Si la Concentración tiene éxito, Debilita(3) y Empuja(2) a todos los rivales de línea a corto y medio alcance.",
          "Al desplegarse, Se concentra(6s). Si la Concentración tiene éxito, Debilita(3) y Empuja(2) a todos los rivales de línea a corto y medio alcance."
        ]
      },
      "S3_091": {
        "name": "Sasuke Uchiha",
        "ability": "Chidori negro",
        "descriptions": [
          "Acelerar(4s). Salta a la primera carta rival que se acerque, obtiene Chakra(+2) y la Debilita(3). Debilita(2) a todas las demás cartas cercanas. Ignora Protección.",
          "Acelerar(5s). Salta a la primera carta rival que se acerque, obtiene Chakra(+2) y la Debilita(4). Debilita(2) a todas las demás cartas cercanas. Ignora Protección."
        ]
      },
      "S3_092": {
        "name": "Naruto Uzumaki",
        "ability": "Rasengan del zorro demoníaco",
        "descriptions": [
          "Acelerar(4s). Salta a la primera carta rival que se acerque, la Debilita(3) y la Empuja(2). Debilita(2) a todas las demás cartas cercanas. Elimina toda la Protección de la carta rival.",
          "Acelerar(5s). Salta a la primera carta rival que se acerque, la Debilita(4) y la Empuja(2). Debilita(2) a todas las demás cartas cercanas. Elimina toda la Protección de la carta rival."
        ]
      },
      "S3_093": {
        "name": "Choji Akimichi",
        "ability": "Furia de la mariposa",
        "descriptions": [
          "Protección(3). Cuando Protección se activa, Chakra(+2). Si la carta rival que activó Protección está cerca, salta sobre ella. Mientras Protección esté disponible, Debilita(2) y Empuja(1) en cada enfrentamiento.",
          "Protección(3). Cuando Protección se activa, Chakra(+3). Si la carta rival que activó Protección está cerca, salta sobre ella. Mientras Protección esté disponible, Debilita(2) y Empuja(1) en cada enfrentamiento."
        ]
      },
      "S3_094": {
        "name": "Gaara",
        "ability": "Tsunami de arena",
        "descriptions": [
          "Al desplegarse, Se concentra(6s). Cada 2 segundos durante la Concentración, Debilita(1) y Empuja(1) a todas las cartas rivales. Si tienen 2 de Chakra o menos, Debilita(2) en su lugar. Cuando esta carta hace que otra se retire, la Sella(5s).",
          "Al desplegarse, Se concentra(8s). Cada 2 segundos durante la Concentración, Debilita(1) y Empuja(1) a todas las cartas rivales. Si tienen 3 de Chakra o menos, Debilita(3) en su lugar. Cuando esta carta hace que otra se retire, la Sella(5s)."
        ]
      },
      "S3_095": {
        "name": "Itachi Uchiha",
        "ability": "Tsukuyomi",
        "descriptions": [
          "Al desplegarse, Inmoviliza(12s) a la carta rival más cercana, luego pierde 1 Chakra. Si la carta rival tiene más de 1 Chakra, pierde 1 Chakra por segundo. Cada vez que aliados Inmovilizan cartas rivales, vuelve a activar esta habilidad por cada rival afectado.",
          "Al desplegarse, Inmoviliza(16s) a la carta rival más cercana, luego pierde 1 Chakra. Si la carta rival tiene más de 1 Chakra, pierde 1 Chakra por segundo. Cada vez que aliados Inmovilizan cartas rivales, vuelve a activar esta habilidad por cada rival afectado."
        ]
      },
      "S3_096": {
        "name": "Itachi Uchiha",
        "ability": "Carnicería",
        "descriptions": [
          "Cada vez que una carta se despliega en la misma línea, la Debilita(1) e Inmoviliza(10s). Si tiene 3 de Chakra o menos, la Debilita(3) en su lugar. Luego Cambia de línea.",
          "Cada vez que una carta se despliega en la misma línea, la Debilita(2) e Inmoviliza(10s). Si tiene 4 de Chakra o menos, la Debilita(4) en su lugar. Luego Cambia de línea."
        ]
      },
      "S3_097": {
        "name": "Tsunade",
        "ability": "Regeneración mitótica",
        "descriptions": [
          "La primera vez que esta carta baja de su Chakra base, se Cura hasta el Chakra base y gana Chakra(+4). Durante los siguientes 10 segundos, ignora habilidades rivales y se Cura(4) después de cada enfrentamiento. Al retirarse, reduce permanentemente su Chakra base en 1.",
          "La primera vez que esta carta baja de su Chakra base, se Cura hasta el Chakra base y gana Chakra(+5). Durante los siguientes 10 segundos, ignora habilidades rivales y se Cura(4) después de cada enfrentamiento. Al retirarse, reduce permanentemente su Chakra base en 1."
        ]
      },
      "S3_098": {
        "name": "Sakon & Ukon",
        "ability": "Defensa sincronizada",
        "descriptions": [
          "Se despliega como Sakon y Ukon en líneas separadas con Protección(2). Cada vez que la Protección de un aliado se activa, ambas cartas ganan Chakra(+1).",
          "Se despliega como Sakon y Ukon en líneas separadas con Protección(4). Cada vez que la Protección de un aliado se activa, ambas cartas ganan Chakra(+1)."
        ]
      },
      "S3_099": {
        "name": "Tayuya",
        "ability": "Invocación de los Doki",
        "descriptions": [
          "Al desplegarse, Se concentra(8s). Si la Concentración tiene éxito, Invoca a un demonio Doki en cada línea. Cada vez que Invocas otras cartas, ganan Chakra(+1). Ignora todas las habilidades y enfrentamientos rivales mientras los demonios estén activos.",
          "Al desplegarse, Se concentra(6s). Si la Concentración tiene éxito, Invoca a un demonio Doki en cada línea. Cada vez que Invocas otras cartas, ganan Chakra(+1). Ignora todas las habilidades y enfrentamientos rivales mientras los demonios estén activos."
        ]
      },
      "S3_100": {
        "name": "Kimimaro",
        "ability": "Lealtad inquebrantable",
        "descriptions": [
          "Al desplegarse, gana Chakra(+6) y Acelerar(5s). Protección permanente mientras Ímpeto esté activo. En cada enfrentamiento, se Debilita(1) y Debilita(3) a la carta rival. Al retirarse, Debilita(2) a todas las cartas. No puede verse afectada por habilidades aliadas.",
          "Al desplegarse, gana Chakra(+8) y Acelerar(6s). Protección permanente mientras Ímpeto esté activo. En cada enfrentamiento, se Debilita(1) y Debilita(3) a la carta rival. Al retirarse, Debilita(2) a todas las cartas. No puede verse afectada por habilidades aliadas."
        ]
      }
    },
    "ruleNotes": {
      "S2_041": "{allies} aliados del personaje requerido; no se comprueba la composición del mazo.",
      "S1_004": "Efectos de enfrentamiento aplicados durante {activations} enfrentamientos.",
      "S1_005": "Efectos de enfrentamiento aplicados durante {activations} enfrentamientos.",
      "S1_008": "Efectos de enfrentamiento aplicados durante {activations} enfrentamientos.",
      "S1_010": "Efectos de enfrentamiento aplicados durante {activations} enfrentamientos.",
      "S1_023": "Efectos de enfrentamiento aplicados durante {activations} enfrentamientos.",
      "S1_030": "Efectos de enfrentamiento aplicados durante {activations} enfrentamientos.",
      "S1_035": "Efectos de enfrentamiento aplicados durante {activations} enfrentamientos.",
      "S2_007": "Efectos de enfrentamiento aplicados durante {activations} enfrentamientos.",
      "S2_025": "Efectos de enfrentamiento aplicados durante {activations} enfrentamientos.",
      "S2_030": "Efectos de enfrentamiento aplicados durante {activations} enfrentamientos.",
      "S2_042": "Efectos de enfrentamiento aplicados durante {activations} enfrentamientos.",
      "S2_052": "Efectos de enfrentamiento aplicados durante {activations} enfrentamientos.",
      "S2_053": "Efectos de enfrentamiento aplicados durante {activations} enfrentamientos.",
      "S2_063": "Efectos de enfrentamiento aplicados durante {activations} enfrentamientos.",
      "S3_004": "Efectos de enfrentamiento aplicados durante {activations} enfrentamientos.",
      "S3_023": "Efectos de enfrentamiento aplicados durante {activations} enfrentamientos.",
      "S3_024": "Efectos de enfrentamiento aplicados durante {activations} enfrentamientos.",
      "S3_034": "Efectos de enfrentamiento aplicados durante {activations} enfrentamientos.",
      "S3_044": "Un enfrentamiento antes de 20s; el reinicio posterior a Chakra(1) se excluye del máximo. Los efectos sin repetición explícita se aplican una vez.",
      "S3_047": "Efectos de enfrentamiento aplicados durante {activations} enfrentamientos.",
      "S3_059": "Efectos de enfrentamiento aplicados durante {activations} enfrentamientos.",
      "S3_068": "Efectos de enfrentamiento aplicados durante {activations} enfrentamientos.",
      "S3_072": "Efectos de enfrentamiento aplicados durante {activations} enfrentamientos.",
      "S3_074": "Efectos de enfrentamiento aplicados durante {activations} enfrentamientos.",
      "S1_003": "Una unidad nueva con el Chakra indicado.",
      "S1_019": "{allies} objetivos/eventos del grupo indicado; condiciones favorables.",
      "S1_046": "{allies} objetivos/eventos del grupo indicado; condiciones favorables.",
      "S1_062": "{allies} objetivos/eventos del grupo indicado; condiciones favorables.",
      "S1_073": "{allies} objetivos/eventos del grupo indicado; condiciones favorables.",
      "S2_015": "{allies} objetivos/eventos del grupo indicado; condiciones favorables.",
      "S2_022": "{allies} objetivos/eventos del grupo indicado; condiciones favorables.",
      "S2_073": "{allies} objetivos/eventos del grupo indicado; condiciones favorables.",
      "S2_083": "{allies} objetivos/eventos del grupo indicado; condiciones favorables.",
      "S3_002": "{allies} objetivos/eventos del grupo indicado; condiciones favorables.",
      "S1_020": "Se resta el daño a un aliado.",
      "S1_021": "3 aliados.",
      "S1_022": "3 aliados.",
      "S1_024": "El número de aliados indicado para el nivel.",
      "S1_033": "Un aumento: Akamaru o esta carta. Traer del mazo no duplica la potencia base.",
      "S1_038": "El número de aliados indicado para el nivel.",
      "S1_053": "{enemies} rivales afectados.",
      "S1_069": "{enemies} rivales afectados.",
      "S1_074": "{enemies} rivales afectados.",
      "S1_079": "{enemies} rivales afectados.",
      "S1_081": "{enemies} rivales afectados.",
      "S2_008": "{enemies} rivales afectados.",
      "S2_076": "{enemies} rivales en un enfrentamiento. Los efectos sin repetición explícita se aplican una vez.",
      "S2_088": "{enemies} rivales afectados.",
      "S3_017": "{enemies} rivales afectados.",
      "S3_031": "{enemies} rivales en un enfrentamiento. Los efectos sin repetición explícita se aplican una vez.",
      "S3_089": "{enemies} rivales afectados.",
      "S3_090": "{enemies} rivales afectados.",
      "S1_056": "Se usa la opción con aumento numérico. Traer a Hiruzen no suma su potencia de nuevo.",
      "S1_060": "Carta traída del mazo: su potencia ya está incluida, por lo que no se cuenta una unidad nueva.",
      "S1_083": "Mejor opción condicional: {enemies} rivales y {allies} aliados, sin ganancia neta.",
      "S2_002": "{enemies} rivales con más Chakra.",
      "S2_016": "Tres unidades nuevas con Chakra(1); no se simula el reciclaje de la carta.",
      "S2_018": "Un aliado por cada uno de los dos nombres; no se comprueban las identidades requeridas.",
      "S2_019": "Un aliado por cada uno de los dos nombres; no se comprueban las identidades requeridas.",
      "S2_020": "Un aliado por cada uno de los dos nombres; no se comprueban las identidades requeridas.",
      "S2_032": "Aumento al Sapo traído; su potencia ya está incluida en el mazo.",
      "S2_037": "No se indica el Chakra de los Anbu: la Invocación no se cuantifica.",
      "S2_038": "Opción de aumento con Chakra bajo; la carta invocada del mazo no se cuenta dos veces.",
      "S2_039": "Uno o dos rivales, según el nivel.",
      "S2_040": "{enemies} rivales y {allies} aliados afectados al retirarse; sin ganancia neta.",
      "S2_054": "Divide el Chakra rival por dos usando el Chakra configurado para el objetivo.",
      "S2_058": "El control temporal de un rival no se convierte en potencia.",
      "S2_064": "El control temporal de un rival no se convierte en potencia.",
      "S2_062": "Uno o dos rivales, según el nivel.",
      "S2_067": "Número explícito de objetivos; un despliegue y una retirada.",
      "S2_070": "Un enfrentamiento; aumento para {allies} aliados una vez al retirarse. Los efectos sin repetición explícita se aplican una vez.",
      "S2_071": "3 golpes en un enfrentamiento. Los efectos sin repetición explícita se aplican una vez.",
      "S2_072": "{enemies} rivales y {allies} aliados: el daño aliado compensa el daño rival.",
      "S2_080": "{enemies} rivales y {allies} aliados: el daño aliado compensa el daño rival.",
      "S2_074": "{enemies} rivales cercanos en un enfrentamiento. Los efectos sin repetición explícita se aplican una vez.",
      "S2_077": "Copia de una carta aliada, sin añadir potencia al total del mazo.",
      "S2_086": "Se resta el daño a los dos aliados; traer del mazo no se cuenta dos veces y no se simulan sacrificios.",
      "S2_089": "La Quemadura se cuenta como daño total igual a su valor.",
      "S2_091": "Aumento una vez. El aumento base al retirarse se aplica a la siguiente vida y no se suma.",
      "S2_097": "Dos eventos distintos, ambos contra {enemies} rivales; la Quemadura se cuenta como daño total.",
      "S3_027": "Tonton nuevo y aumento para Tsunade; no se simulan la presencia ni la supervivencia de Tsunade.",
      "S3_028": "Kuromaru nuevo y aumento para el siguiente Perro Ninja.",
      "S3_036": "{allies} aliados reciben 1 de daño; esta carta gana 2 por cada uno.",
      "S3_041": "Dos rivales.",
      "S3_043": "Aumento para el siguiente Sasuke y una Cura posterior.",
      "S3_051": "Aumento inicial y una Cura.",
      "S3_060": "Se supone que los aliados configurados están en otras líneas y reciben su primer golpe: un aumento y una Cura por aliado.",
      "S3_062": "Una Cura inicial y la primera Cura reactiva.",
      "S3_073": "Aumento inicial y daño en un enfrentamiento. Los efectos sin repetición explícita se aplican una vez.",
      "S3_085": "{enemies} rivales; la Quemadura existente no se cuenta sin un valor conocido.",
      "S3_091": "Primer objetivo, aumento y daño a otros 5 rivales y {allies} aliados. La expresión «otras cartas» es ambigua.",
      "S3_092": "El primer objetivo se afecta por separado; el daño a otras cartas lo excluye e incluye a todos los aliados configurados.",
      "S3_039": "Conversión favorable de la Aceleración inicial restante: 2/3 Chakra en los niveles 1/2, máximo 3; sin aumentos externos simulados."
    },
    "calculation": {
      "effectC": "aumento de Chakra",
      "effectW": "Debilitamiento",
      "effectH": "Cura",
      "effectB": "Quemadura por objetivo",
      "effectK": "Chakra invocado",
      "amount": "{value} {effect}",
      "burnTotal": "{value} Quemadura por objetivo, duración total limitada por el Chakra rival",
      "copy": "{value} Chakra de la copia",
      "restore": "{value} Cura de 1 Chakra hasta el Chakra base",
      "rush": "{value} Chakra de la Aceleración restante (máximo 3)",
      "enemies": {
        "one": "{value} rival",
        "other": "{value} rivales"
      },
      "otherEnemies": "{value} otros rivales, excluyendo el primer objetivo",
      "allies": {
        "one": "{value} aliado",
        "other": "{value} aliados"
      },
      "first": "{value} primera activación",
      "remaining": {
        "one": "{value} activación posterior",
        "other": "{value} activaciones posteriores"
      },
      "activations": {
        "one": "{value} activación",
        "other": "{value} activaciones"
      },
      "enemyChakra": "{value} Chakra rival",
      "targets": {
        "one": "{value} objetivo",
        "other": "{value} objetivos"
      },
      "drain": "{value} Chakra retirado sin bajar de 1",
      "removable": "{value} Chakra que se puede quitar",
      "bestBranch": "mejor opción: {label}",
      "unquantified": "Contribución numérica aún no cuantificada.",
      "repeated": "Efecto aplicado durante {activations} activaciones.",
      "once": "El efecto de enfrentamiento se cuenta una vez; solo se repiten los que indican cada enfrentamiento.",
      "favourable": "Se presuponen condiciones favorables. No se simulan sinergias entre cartas.",
      "tactical": "Efecto táctico sin aumento numérico de Chakra, daño ni Cura.",
      "halving": "La división por dos usa el Chakra rival configurado; el redondeo exacto del juego sigue sin confirmarse.",
      "burnNote": "Quemadura: objetivos afectados × mín(duración en segundos, Chakra rival). La propagación se limita a los objetivos rivales configurados; varias aplicaciones no cuentan dos veces los mismos puntos de Chakra.",
      "allCards": "Efecto sobre todas las cartas: {enemies} rivales y {allies} aliados. El daño aliado, limitado por el Chakra aliado por aplicación, reduce la Potencia.",
      "ebisu": "Los aumentos y penalizaciones usan el número configurado de aliados; no se simula la supervivencia de la carta."
    },
    "errors": {
      "invalidJson": "El archivo no contiene un JSON de mazo válido.",
      "invalidDeck": "Archivo de mazo no válido.",
      "invalidCards": "Revisa las cartas, los duplicados y los niveles del archivo.",
      "invalidOptions": "Opciones de cálculo no válidas.",
      "invalidValues": "Valores de hipótesis no válidos.",
      "invalidOverrides": "Ajustes individuales de carta no válidos.",
      "missingCard": "Las hipótesis se refieren a una carta que no está en el mazo.",
      "fileTooLarge": "El archivo es demasiado grande.",
      "importFailed": "No se pudo importar el mazo.",
      "invalidRule": "Regla no válida: {id}, nivel {level}, {factor}",
      "invalidFactor": "Factor no válido: {factor}"
    },
    "normalizations": [],
    "flag": "es"
  },
  "de": {
    "name": "Deutsch",
    "locale": "de-DE",
    "flag": "de",
    "ui": {
      "synergies": "Synergien",
      "synergyPartners": "Karten mit Synergie zu {name}",
      "synergySources": "Karten mit denselben Synergiepartnern",
      "loadMore": "Mehr anzeigen",
      "backToTop": "Nach oben",
      "details": "Details",
      "collapseSidebar": "Seitenleiste einklappen",
      "expandSidebar": "Seitenleiste ausklappen",
      "sortBy": "Sortieren nach:",
      "toolbarModes": "Werkzeugleistenmodi",
      "collapseToolbar": "Werkzeugleiste einklappen",
      "expandToolbar": "Werkzeugleiste ausklappen",
      "pageTitle": "Naruto · Karten und Decks",
      "brand": "Naruto · Deckbuilder",
      "heading": "Karten und Decks",
      "database": "Kartendatenbank",
      "builder": "Deck erstellen",
      "sections": "Bereiche",
      "language": "Sprache",
      "filters": "Karten filtern",
      "searchFilters": "Suche und Filter",
      "textOrIndex": "Text oder Nummer",
      "searchPlaceholder": "Suchen",
      "rarity": "Seltenheit",
      "season": "Serie",
      "skillType": "Fähigkeitstyp",
      "cost": "Kosten",
      "chakra": "Chakra",
      "minPower": "Min. Stärke",
      "minimum": "min",
      "cardLevel": "Kartenlevel",
      "sort": "Sortieren",
      "sortCards": "Karten sortieren",
      "index": "Nummer",
      "alphabetical": "Name",
      "quality": "Qualität",
      "power": "Stärke",
      "resetFilters": "Filter löschen",
      "allFeminine": "Alle",
      "all": "Alle",
      "none": "Ohne Typ",
      "common": "Gewöhnlich",
      "rare": "Selten",
      "epic": "Episch",
      "legendary": "Legendär",
      "first": "Erste",
      "second": "Zweite",
      "third": "Dritte",
      "ascending": "Aufsteigend",
      "descending": "Absteigend",
      "ascendingAction": "Aufsteigend. Zu absteigend wechseln",
      "descendingAction": "Absteigend. Zu aufsteigend wechseln",
      "selectedCount": "{count} ausgewählt",
      "cardCount": "{count} Karten",
      "noResults": "Keine Karten entsprechen den Filtern.",
      "assumptions": "Berechnungsannahmen",
      "enemyChakra": "Gegnerisches Chakra",
      "enemies": "Gegnerische Ziele",
      "allyChakra": "Verbündetes Chakra",
      "allies": "Verbündete Ziele",
      "activations": "Kartenaktivierungen",
      "applyStandard": "Standard anwenden",
      "calculationInfo": "Berechnungsinfos",
      "standardApplied": "Standardwerte auf alle Karten dieser Sitzung angewendet.",
      "standardPending": "Änderungen ausstehend: Die Karten verwenden noch die bisherigen Standardwerte.",
      "defaultDeckName": "Deck 1",
      "deckNameLabel": "Deckname:",
      "deckNamePlaceholder": "Deckname",
      "deckSlots": "Die zehn Deckplätze",
      "deckCardsLevels": "Deckkarten und Level",
      "averageCost": "Durchschnittskosten",
      "averagePower": "Durchschnittsstärke",
      "averageQuality": "Durchschnittsqualität",
      "viewDeck": "Deckdetails",
      "import": "Importieren",
      "export": "Exportieren",
      "clearDeck": "Leeren",
      "closeDeck": "Deck schließen",
      "closeCard": "Kartendetails schließen",
      "closeInfo": "Berechnungsinformationen schließen",
      "distribution": "Kostenverteilung",
      "curveCaption": "Anzahl der Karten nach Kosten",
      "databaseEffects": "Datenbank der Karteneffekte",
      "builderCards": "Karten für das Deck",
      "confirm": "Bestätigen",
      "cancel": "Abbrechen",
      "replaceDeck": "Das aktuelle Deck durch das importierte Deck ersetzen?",
      "confirmClear": "Alle Karten aus dem Deck entfernen?",
      "deckImported": "Deck importiert.",
      "sessionUnavailable": "Automatisches Speichern der Sitzung ist nicht verfügbar. Exportiere dein Deck, um es zu behalten.",
      "sessionInvalid": "Die gespeicherte Sitzung konnte nicht wiederhergestellt werden. Du kannst ein exportiertes Deck importieren.",
      "addToDeck": "Zum Deck hinzufügen",
      "removeFromDeck": "Aus dem Deck entfernen",
      "addCard": "{name} zum Deck hinzufügen",
      "removeCard": "{name} aus dem Deck entfernen",
      "openCard": "{name} öffnen · {reference}",
      "removeNamedCard": "{name} entfernen",
      "emptySlot": "Platz {slot} leer",
      "cardLevelTitle": "{name} · {reference} · Level {level}",
      "levelShort": "Lv.{level}",
      "changeLevel": "Level wechseln",
      "changeLevelTitle": "Klicken, um zu Level {level} zu wechseln",
      "changeLevelAction": "Level {level}. Zu Level {next} wechseln",
      "powerQuality": "Stärke und Qualität",
      "localAssumptions": "Annahmen für diese Karte",
      "useStandard": "Standard verwenden",
      "localChanges": "Änderungen gelten sofort und nur für diese Karte.",
      "powerComposition": "Zusammensetzung der Stärke",
      "contributions": "Berechnungsbeiträge",
      "noContributions": "Kein zusätzlicher Zahlenbeitrag.",
      "baseChakra": "Basis-Chakra",
      "summonedChakra": "Beschworenes Chakra",
      "chakraBoosts": "Chakra-Boni",
      "friendlyDamage": "Schaden an sich / Verbündeten",
      "enemyDamage": "Schaden an Gegnern",
      "burn": "Brennen",
      "heal": "Heilen",
      "curveBar": "Kosten {cost}: {count} Karten",
      "energyCost": "Energiekosten",
      "costValue": "Kosten {value}",
      "chakraValue": "Basis-Chakra {value}",
      "info1": "Stärke = Basis-Chakra + Beschwörungen + Boni − Schaden an sich und Verbündeten + Schaden an Gegnern + Brennen + Heilung.",
      "info2": "Qualität = Stärke / Kartenkosten.",
      "info3": "Brennen = gegnerische Ziele × Dauer in Sekunden (oder gegnerisches Chakra, falls es geringer als die Dauer ist).",
      "info4": "Effekte werden entsprechend der auf der Karte oder in den Berechnungsannahmen angegebenen Aktivierungszahl gezählt.",
      "info5": "Bewegung, Wache und andere Modifikatoren fließen nicht in die Stärke der Karte ein.",
      "info6": "Der Levelschalter im Filterbereich ändert die gesamte Liste, außer den Karten, die bereits im Deck sind.",
      "deckBuilding": "Deck im Aufbau",
      "deckInfo": "Deckinformationen",
      "closeDeckInfo": "Deckinformationen schließen",
      "deckPowerDescription": "Die Durchschnittsstärke ist der Mittelwert der Stärke aller Karten im Deck.",
      "deckQualityDescription": "Die Durchschnittsqualität ist der Mittelwert der Qualität der einzelnen Karten im Deck.",
      "exportInfo": "Der Export enthält die für jede Karte festgelegten Level und Berechnungsannahmen."
    },
    "effects": {
      "Cost": "Kosten",
      "Chakra": "Chakra",
      "Weaken": "Schwächen",
      "Push": "Schieben",
      "Pin": "Festnageln",
      "Rush": "Ansturm",
      "Slow": "Verlangsamen",
      "Guard": "Wache",
      "Seal": "Versiegeln",
      "Switch": "Wechseln",
      "Summon": "Beschwören",
      "Teleport": "Teleportieren",
      "Burn": "Brennen",
      "Focus": "Fokus",
      "Heal": "Heilen"
    },
    "terms": {
      "Cost": "kosten",
      "Chakra": "chakra",
      "Weaken": "schwäch[\\p{L}]*|geschwäch[\\p{L}]*",
      "Push": "schieb[\\p{L}]*",
      "Pin": "festnagel[\\p{L}]*|festgenagel[\\p{L}]*",
      "Rush": "ansturm",
      "Slow": "verlangsam[\\p{L}]*",
      "Guard": "wache",
      "Seal": "versiegel[\\p{L}]*",
      "Switch": "wechsel[\\p{L}]*",
      "Summon": "beschw[öo][\\p{L}]*",
      "Teleport": "teleport[\\p{L}]*",
      "Burn": "brenn[\\p{L}]*",
      "Focus": "fokus[\\p{L}]*",
      "Heal": "heil[\\p{L}]*"
    },
    "cards": {
      "S1_001": {
        "name": "NARUTO UZUMAKI",
        "ability": "Potenzial",
        "descriptions": [
          "Wenn diese Karte zum ersten Mal Chakra erhält, erhält sie zusätzlich Chakra(+1).",
          "Wenn diese Karte zum ersten Mal Chakra erhält, erhält sie zusätzlich Chakra(+2)."
        ]
      },
      "S1_002": {
        "name": "NARUTO UZUMAKI",
        "ability": "Lernen",
        "descriptions": [
          "Chakra(+2) nach 6 Sekunden.",
          "Chakra(+3) nach 6 Sekunden."
        ]
      },
      "S1_003": {
        "name": "NARUTO UZUMAKI",
        "ability": "Schattenklon-Jutsu",
        "descriptions": [
          "Erstelle 1 Klon auf einer anderen Spur mit Chakra(1).",
          "Beschwöre 1 Klon auf einer anderen Spur mit Chakra(2)."
        ]
      },
      "S1_004": {
        "name": "NARUTO UZUMAKI",
        "ability": "Schwur",
        "descriptions": [
          "Chakra(+1) nach einer erfolgreichen Begegnung.",
          "Chakra(+2) nach einer erfolgreichen Begegnung."
        ]
      },
      "S1_005": {
        "name": "SASUKE UCHIHA",
        "ability": "Kunai-Beherrschung",
        "descriptions": [
          "Bei Begegnung die rivalisierende Karte Schwächen(2).",
          "Bei Begegnung die rivalisierende Karte Schwächen(3)."
        ]
      },
      "S1_006": {
        "name": "SAKURA HARUNO",
        "ability": "Kunai-Wurf",
        "descriptions": [
          "Bei Einsatz einen zufälligen Rivalen in weiter Distanz Schwächen(2). Die Ziele befinden sich auf der eigenen Spur.",
          "Bei Einsatz einen zufälligen Rivalen in weiter Distanz Schwächen(3). Die Ziele befinden sich auf der eigenen Spur."
        ]
      },
      "S1_007": {
        "name": "SAKURA HARUNO",
        "ability": "Chakra-Gleichgewicht",
        "descriptions": [
          "Wenn Spur-Verbündete eine Begegnung erfolgreich beenden, erhalten sie Chakra(+1), und diese Karte wird selbst Festnageln(3s).",
          "Wenn Spur-Verbündete eine Begegnung erfolgreich beenden, erhalten sie Chakra(+1), und diese Karte wird selbst Festnageln(5s)."
        ]
      },
      "S1_008": {
        "name": "SAKURA HARUNO",
        "ability": "Rundtritt",
        "descriptions": [
          "Bei Begegnung erhält die rivalisierende Karte Schieben(1) und Schwächen(1).",
          "Bei Begegnung erhält die rivalisierende Karte Schieben(2) und Schwächen(1)."
        ]
      },
      "S1_009": {
        "name": "KAKASHI HATAKE",
        "ability": "Ansturm",
        "descriptions": [
          "Ansturm(5s)",
          "Ansturm(6s)"
        ]
      },
      "S1_010": {
        "name": "KAKASHI HATAKE",
        "ability": "Teamleiter",
        "descriptions": [
          "Bei Begegnung erhält ein Verbündeter in Kurzdistanz Chakra(+2). Die Ziele befinden sich auf der eigenen Spur.",
          "Bei Begegnung erhält ein Verbündeter auf der eigenen Spur in Kurzdistanz Chakra(+3)."
        ]
      },
      "S1_011": {
        "name": "IRUKA UMINO",
        "ability": "Sensei",
        "descriptions": [
          "Chakra(+2) zum nächsten eingesetzten Verbündeten.",
          "Chakra(+3) zum nächsten eingesetzten Verbündeten."
        ]
      },
      "S1_012": {
        "name": "ZABUZA MOMOCHI",
        "ability": "Bedrohlicher Auftritt",
        "descriptions": [
          "Wird direkt auf Mitteldistanz eingesetzt. Den Gegner mit dem höchsten Chakra auf der eigenen Spur Verlangsamen(4s) und seine Spur Wechseln.",
          "Wird direkt auf Mitteldistanz eingesetzt. Den Gegner mit dem höchsten Chakra auf der eigenen Spur Verlangsamen(6s) und seine Spur Wechseln."
        ]
      },
      "S1_013": {
        "name": "ZABUZA MOMOCHI",
        "ability": "Aggression",
        "descriptions": [
          "Bei Einsatz Schwächen(3) für den nächstgelegenen Rivalen auf der Spur.",
          "Bei Einsatz Schwächen(4) für den nächstgelegenen Rivalen auf der Spur."
        ]
      },
      "S1_014": {
        "name": "HAKU",
        "ability": "Nadeln",
        "descriptions": [
          "Bei Einsatz Festnageln(6s) für den nächstgelegenen Spur-Rivalen.",
          "Bei Einsatz Festnageln(7s) für den nächstgelegenen Spur-Rivalen."
        ]
      },
      "S1_015": {
        "name": "KONOHAMARU SARUTOBI",
        "ability": "Shurikenwurf",
        "descriptions": [
          "Bei Einsatz Schwächen(1) für einen zufälligen Rivalen in Kurzdistanz. Die Ziele befinden sich auf der eigenen Spur.",
          "Bei Einsatz Schwächen(2) für einen zufälligen Rivalen in Kurzdistanz. Die Ziele befinden sich auf der eigenen Spur."
        ]
      },
      "S1_016": {
        "name": "EBISU",
        "ability": "Schnelle Lektion",
        "descriptions": [
          "Bei Einsatz Chakra(+2) für den nächsten Verbündeten. Die Ziele befinden sich auf der eigenen Spur.",
          "Bei Einsatz Chakra(+3) für den nächsten Verbündeten. Die Ziele befinden sich auf der eigenen Spur."
        ]
      },
      "S1_017": {
        "name": "TAZUNA",
        "ability": "Brückenbauer",
        "descriptions": [
          "Bei Einsatz 2 Verbündete auf der eigenen Spur in Mitteldistanz zur Position dieser Karte zurückziehen.",
          "Bei Einsatz 3 Verbündete auf der eigenen Spur in Mitteldistanz zur Position dieser Karte zurückziehen."
        ]
      },
      "S1_018": {
        "name": "INARI",
        "ability": "Ansturm",
        "descriptions": [
          "Ansturm(2s)",
          "Ansturm(3s)"
        ]
      },
      "S1_019": {
        "name": "KAIZA",
        "ability": "Märtyrer",
        "descriptions": [
          "Beim Rückzug erhalten nur Verbündete auf der eigenen Spur Chakra(+1).",
          "Beim Rückzug erhalten nur Verbündete auf der eigenen Spur Chakra(+2)."
        ]
      },
      "S1_020": {
        "name": "MIZUKI TOJI",
        "ability": "Verborgene Absicht",
        "descriptions": [
          "Bei Einsatz, Schwächen(2) für einen zufälligen Spur-Verbündeten und Chakra(+3) verleiht dieser Karte.",
          "Bei Einsatz, Schwächen(2) für einen zufälligen Spur-Verbündeten und Chakra(+4) verleiht dieser Karte."
        ]
      },
      "S1_021": {
        "name": "MIZUKI TOJI",
        "ability": "Leichter Gegner",
        "descriptions": [
          "Bei Rückzug, Chakra(+1) für 3 zufällige Verbündete.",
          "Bei Rückzug, Chakra(+2) für 3 zufällige Verbündete."
        ]
      },
      "S1_022": {
        "name": "MADAME SHIJIMI",
        "ability": "Katzenrettung",
        "descriptions": [
          "Bei Einsatz, Chakra(+1) für 3 Spur-Verbündete in Kurzdistanz und sie Verlangsamen(3s).",
          "Bei Einsatz, Chakra(+2) für 3 Spur-Verbündete in Kurzdistanz und sie Verlangsamen(3s)."
        ]
      },
      "S1_023": {
        "name": "GOZU",
        "ability": "Hinterhalt",
        "descriptions": [
          "Bei Begegnung Schwächen(1) für rivalisierende Karte und sich hinter sie Teleportieren.",
          "Bei Begegnung Schwächen(2) für rivalisierende Karte und sich hinter sie Teleportieren."
        ]
      },
      "S1_024": {
        "name": "TSUNAMI",
        "ability": "Gastfreundschaft",
        "descriptions": [
          "Bei Einsatz: Chakra(+1) für zwei Spur-Verbündete.",
          "Bei Einsatz: Chakra(+1) für drei Spur-Verbündete."
        ]
      },
      "S1_025": {
        "name": "WARAJI",
        "ability": "Ansturm",
        "descriptions": [
          "Ansturm(3s)",
          "Ansturm(4s)"
        ]
      },
      "S1_026": {
        "name": "ZORI",
        "ability": "Ansturm",
        "descriptions": [
          "Ansturm(3s)",
          "Ansturm(4s)"
        ]
      },
      "S1_027": {
        "name": "INO YAMANAKA",
        "ability": "Charme",
        "descriptions": [
          "Bei Einsatz Chakra(+1) auf den nächsten Verbündeten in Kurzdistanz und schiebt ihn auf Mitteldistanz.",
          "Bei Einsatz Chakra(+2) für den nächsten Verbündeten in Kurzdistanz und Schieben ihn in Mitteldistanz."
        ]
      },
      "S1_028": {
        "name": "SHIKAMARU NARA",
        "ability": "Schattenlähmung-Jutsu",
        "descriptions": [
          "Bei Einsatz sich selbst und die nächstgelegene rivalisierende Karten Festnageln(10s). Die Ziele befinden sich auf der eigenen Spur.",
          "Bei Einsatz sich selbst und die nächstgelegene rivalisierende Karten Festnageln(12s). Die Ziele befinden sich auf der eigenen Spur."
        ]
      },
      "S1_029": {
        "name": "CHOJI AKIMICHI",
        "ability": "Stärke",
        "descriptions": [
          "Bei Begegnung die rivalisierenden Karte Schieben(1).",
          "Bei Begegnung die rivalisierenden Karte Schieben(2)."
        ]
      },
      "S1_030": {
        "name": "ASUMA SARUTOBI",
        "ability": "Nahkampfkönnen",
        "descriptions": [
          "Bei Begegnung Chakra(+3), wenn die rivalisierende Karte ein höheres Chakra hat.",
          "Bei Begegnung Chakra(+4), wenn die rivalisierende Karte ein höheres Chakra hat."
        ]
      },
      "S1_031": {
        "name": "HINATA HYUGA",
        "ability": "Schüchtern",
        "descriptions": [
          "Bei Einsatz die nächstgelegene Rivalenkarte in Kurzdistanz Schieben(2). Die Ziele befinden sich auf der eigenen Spur.",
          "Bei Einsatz die nächstgelegene Rivalenkarte in Kurzdistanz Schieben(3). Die Ziele befinden sich auf der eigenen Spur."
        ]
      },
      "S1_032": {
        "name": "HINATA HYUGA",
        "ability": "Sanfte Faust",
        "descriptions": [
          "Bei der ersten Begegnung nur die angetroffene gegnerische Karte Schieben(1), sofern sie höchstens 3 Chakra hat.",
          "Bei der ersten Begegnung nur die angetroffene gegnerische Karte Schieben(2), sofern sie höchstens 3 Chakra hat."
        ]
      },
      "S1_033": {
        "name": "KIBA INUZUKA",
        "ability": "Bester Freund",
        "descriptions": [
          "Beschwöre ein zufälliges Akamaru aus deinem Deck und gib ihm Chakra(+1). Falls kein Akamaru vorhanden ist, erhält stattdessen diese Karte Chakra(+1).",
          "Beschwöre ein zufälliges Akamaru aus deinem Deck und gib ihm Chakra(+2). Falls kein Akamaru vorhanden ist, erhält stattdessen diese Karte Chakra(+2)."
        ]
      },
      "S1_034": {
        "name": "AKAMARU",
        "ability": "Ansturm",
        "descriptions": [
          "Ansturm(6s)",
          "Ansturm(7s)"
        ]
      },
      "S1_035": {
        "name": "SHINO ABURAME",
        "ability": "Chakra-Insekten",
        "descriptions": [
          "Bei Begegnung Chakra(+2) auf diese Karte und Schwächen(1) auf die rivalisierende Karte.",
          "Bei Begegnung Chakra(+2) auf diese Karte und Schwächen(2) auf die rivalisierende Karte."
        ]
      },
      "S1_036": {
        "name": "KURENAI YUHI",
        "ability": "Finte",
        "descriptions": [
          "Bei Begegnung die angetroffene gegnerische Karte Schieben(2) und Festnageln(2s).",
          "Bei Begegnung die angetroffene gegnerische Karte Schieben(2) und Festnageln(4s)."
        ]
      },
      "S1_037": {
        "name": "PAKKUN",
        "ability": "Spitze Nase",
        "descriptions": [
          "Ignoriert alle rivalisierenden Fähigkeiten und Begegnungen bis zur Mitteldistanz. Auf dieser Spur eingesetzte Verbündete erhalten Ansturm(+2s), solange diese Karte aktiv ist.",
          "Ignoriert alle gegnerischen Fähigkeiten und Begegnungen, bis Mitteldistanz erreicht ist. Verbündete erhalten Ansturm(+3s), wenn sie auf dieser Spur eingesetzt werden, während diese Karte aktiv ist."
        ]
      },
      "S1_038": {
        "name": "AYAME",
        "ability": "Frische Mahlzeiten",
        "descriptions": [
          "Bei Einsatz Chakra(+2) für 2 Spur-Verbündete in Mitteldistanz.",
          "Bei Einsatz Chakra(+2) für 3 Spur-Verbündete in Mitteldistanz."
        ]
      },
      "S1_039": {
        "name": "MOEGI KAZAMATSURI",
        "ability": "Ansturm",
        "descriptions": [
          "Ansturm(2s)",
          "Ansturm(3s)"
        ]
      },
      "S1_040": {
        "name": "UDON ISE",
        "ability": "Ansturm",
        "descriptions": [
          "Ansturm(2s)",
          "Ansturm(3s)"
        ]
      },
      "S1_041": {
        "name": "NINJA TROOPS",
        "ability": "Vorreiter",
        "descriptions": [
          "Ansturm(2s). Beim Rückzug Chakra(+3) an den zuletzt eingesetzten Verbündeten.",
          "Ansturm(3s). Beim Rückzug Chakra(+3) an den zuletzt eingesetzten Verbündeten."
        ]
      },
      "S1_042": {
        "name": "NARUTO UZUMAKI",
        "ability": "Wehrlos",
        "descriptions": [
          "Bei Rückzug die rivalisierende Karte Schwächen(3).",
          "Bei Rückzug die rivalisierende Karte Schwächen(4)."
        ]
      },
      "S1_043": {
        "name": "NARUTO UZUMAKI",
        "ability": "Spaßvogel",
        "descriptions": [
          "Bei Einsatz alle Karten auf der Spur Verlangsamen(10s).",
          "Bei Einsatz alle Karten auf der Spur Verlangsamen(12s)."
        ]
      },
      "S1_044": {
        "name": "NARUTO UZUMAKI",
        "ability": "Sexy Jutsu",
        "descriptions": [
          "Bei Einsatz eine rivalisierende Karte in Mitteldistanz Festnageln(4s). Die Ziele befinden sich auf der eigenen Spur.",
          "Bei Einsatz eine Spur-Rivalen in Mitteldistanz Festnageln(5s)."
        ]
      },
      "S1_045": {
        "name": "NARUTO UZUMAKI",
        "ability": "Einsamkeit",
        "descriptions": [
          "Bei Einsatz Chakra(+3) und Verlangsamen(6s) falls keine Spur-Verbündeten da sind.",
          "Bei Einsatz Chakra(+4) und Verlangsamen(6s) falls keine Spur-Verbündeten da sind."
        ]
      },
      "S1_046": {
        "name": "NARUTO UZUMAKI",
        "ability": "Abschluss",
        "descriptions": [
          "Diese Karte erhält Chakra(+1) für jeden Verbündeten auf der eigenen Spur in Kurzdistanz.",
          "Diese Karte erhält Chakra(+2) für jeden Verbündeten auf der eigenen Spur in Kurzdistanz."
        ]
      },
      "S1_047": {
        "name": "NARUTO UZUMAKI",
        "ability": "Verwandlungs-Jutsu",
        "descriptions": [
          "Bei Einsatz als andere Karte aus deinem Deck, mit Kosten bis zu 3, tarnen. Verwandelt sich bei Begegnung oder Schwächen wieder ins Original zurück.",
          "Bei Einsatz als andere Karte aus deinem Deck, mit Kosten bis zu 4, tarnen. Verwandelt sich bei Begegnung oder Schwächen wieder ins Original zurück."
        ]
      },
      "S1_048": {
        "name": "NARUTO UZUMAKI",
        "ability": "Listig",
        "descriptions": [
          "Bei Begegnung rivalisierende Karte Festnageln(4s) und hinter sie Teleportieren.",
          "Bei Begegnung rivalisierende Karte Festnageln(6s) und hinter sie Teleportieren."
        ]
      },
      "S1_049": {
        "name": "SASUKE UCHIHA",
        "ability": "Vorsprung",
        "descriptions": [
          "Der nächste Verbündete wird auf Mitteldistanz eingesetzt. Einen zufälligen Gegner auf der eigenen Spur in Mitteldistanz Festnageln(4s) und seine Spur Wechseln.",
          "Der nächste Verbündete wird auf Mitteldistanz eingesetzt. Einen zufälligen Gegner auf der eigenen Spur in Mitteldistanz Festnageln(8s) und seine Spur Wechseln."
        ]
      },
      "S1_050": {
        "name": "HIRUZEN SARUTOBI",
        "ability": "Teleskoptechnik",
        "descriptions": [
          "Wenn Verbündete Ansturm erhalten, wende Chakra(+1) und Ansturm(+1s) auf sie an.",
          "Wenn Verbündete Ansturm erhalten, wende Chakra(+1) und Ansturm(+2s) auf sie an."
        ]
      },
      "S1_051": {
        "name": "IRUKA UMINO",
        "ability": "Spaßvogel",
        "descriptions": [
          "Zufällig die Spur alle 8 Sekunden Wechseln.",
          "Zufällig die Spur alle 6 Sekunden Wechseln."
        ]
      },
      "S1_052": {
        "name": "IRUKA UMINO",
        "ability": "Opfern",
        "descriptions": [
          "Wird direkt auf Mitteldistanz eingesetzt und gewährt dem nächsten Verbündeten auf der eigenen Spur Chakra(+1).",
          "Wird direkt auf Mitteldistanz eingesetzt und gewährt dem nächsten Verbündeten auf der eigenen Spur Chakra(+2)."
        ]
      },
      "S1_053": {
        "name": "ZABUZA MOMOCHI",
        "ability": "Im Nebel verborgen",
        "descriptions": [
          "Bei Einsatz alle Gegner auf der eigenen Spur in Kurzdistanz Festnageln(6s) und Schwächen(1).",
          "Bei Einsatz alle Gegner auf der eigenen Spur in Kurzdistanz Festnageln(6s) und Schwächen(2)."
        ]
      },
      "S1_054": {
        "name": "ZABUZA MOMOCHI",
        "ability": "Gebrochen",
        "descriptions": [
          "Gewinnt beim ersten Mal Chakra(+3), wenn sich ein Spur-Verbündeter zurückzieht.",
          "Gewinnt beim ersten Mal Chakra(+4), wenn sich ein Spur-Verbündeter zurückzieht."
        ]
      },
      "S1_055": {
        "name": "KONOHAMARU SARUTOBI",
        "ability": "Imperfekte Sexy Jutsu",
        "descriptions": [
          "Bei Einsatz besteht eine 50%ige Chance, dass man eine rivalisierende Karte in Mitteldistanz Festnageln(6s) kann. Die Ziele befinden sich auf der eigenen Spur.",
          "Bei Einsatz besteht eine 50%ige Chance, dass man eine Spur-Rivalen in Mitteldistanz Festnageln(8s) kann."
        ]
      },
      "S1_056": {
        "name": "KONOHAMARU SARUTOBI",
        "ability": "Vermächtnis",
        "descriptions": [
          "Beim Einsatz besteht eine 50%ige Chance, einen zufälligen Hiruzen aus deinem Deck zu Beschwören, andernfalls Chakra(+2).",
          "Beim Einsatz besteht eine 50%ige Chance, einen zufälligen Hiruzen aus deinem Deck zu Beschwören, andernfalls Chakra(+3)."
        ]
      },
      "S1_057": {
        "name": "KONOHAMARU SARUTOBI",
        "ability": "Sexy Jutsu",
        "descriptions": [
          "Bei Einsatz eine rivalisierende Karte in Mitteldistanz Festnageln(4s). Die Ziele befinden sich auf der eigenen Spur.",
          "Bei Einsatz eine Spur-Rivalen in Mitteldistanz Festnageln(5s)."
        ]
      },
      "S1_058": {
        "name": "EBISU",
        "ability": "Schwierige Lektionen",
        "descriptions": [
          "Alle eingesetzten Verbündeten erhalten Chakra(+2), aber Schwächen(1) diese Karte jedes Mal.",
          "Alle eingesetzten Verbündeten erhalten Chakra(+3), aber Schwächen(1) diese Karte jedes Mal."
        ]
      },
      "S1_059": {
        "name": "INARI",
        "ability": "Handeln",
        "descriptions": [
          "Bei Einsatz die nächste rivalisierende Karte in weiter Distanz Schwächen(1) und Verlangsamen(6s). Die Ziele befinden sich auf der eigenen Spur.",
          "Bei Einsatz den nächstgelegenen Spur-Rivalen in weiter Distanz Schwächen(1) und Verlangsamen(8s)."
        ]
      },
      "S1_060": {
        "name": "GATO",
        "ability": "Verbrecherboss",
        "descriptions": [
          "Bei Einsatz Fokus(6s). Wenn der Fokus gelingt, Beschwöre eine zufällige Karte mit maximalen Kosten von 3 aus deinem Deck.",
          "Bei Einsatz Fokus(4s). Wenn der Fokus gelingt, Beschwöre eine zufällige Karte mit maximalen Kosten von 3 aus deinem Deck."
        ]
      },
      "S1_061": {
        "name": "NINJA HOUNDS",
        "ability": "Reißzahn-Jagd",
        "descriptions": [
          "Bei Einsatz sich selbst und den Spur-Rivalen mit dem höchsten Chakra Festnageln(6s).",
          "Bei Einsatz sich selbst und den Spur-Rivalen mit dem höchsten Chakra Festnageln(8s)."
        ]
      },
      "S1_062": {
        "name": "TEUCHI",
        "ability": "Der Weg des Ramen",
        "descriptions": [
          "Chakra(+1) für Verbündete in seiner Spur nach 8 Sekunden.",
          "Chakra(+2) für Verbündete in seiner Spur nach 8 Sekunden."
        ]
      },
      "S1_063": {
        "name": "NARUTO UZUMAKI",
        "ability": "Bestimmung",
        "descriptions": [
          "Wenn sich der verbündete Iruka gerade zurückziehen will, wird er an den Anfang der Spur zurückgezogen und 3 Klone mit Chakra(1) auf alle Spuren verteilt erschaffen.",
          "Wenn ein verbündeter Iruka sich zurückziehen will, wird er an den Anfang der Spur zurückgezogen und Beschwöre 5 Klone mit Chakra(1), verteilt auf alle Spuren."
        ]
      },
      "S1_064": {
        "name": "NARUTO UZUMAKI",
        "ability": "Selbstdarstellung",
        "descriptions": [
          "Chakra(+5) nach 10 Sekunden.",
          "Chakra(+6) nach 10 Sekunden."
        ]
      },
      "S1_065": {
        "name": "NARUTO UZUMAKI",
        "ability": "Sexy Jutsu der Massen",
        "descriptions": [
          "Bei Begegnung rivalisierende Karte Festnageln(6s), teleportiere dich hinter sie und Ansturm(2s).",
          "Bei Begegnung rivalisierende Karte Festnageln(8s), teleportiere dich hinter sie und Ansturm(4s)."
        ]
      },
      "S1_066": {
        "name": "SASUKE UCHIHA",
        "ability": "Vorhersage",
        "descriptions": [
          "Kann bei Begegnungen mit rivalisierenden Karten mit 2 Chakra oder weniger nicht geschwächt werden.",
          "Kann bei Begegnungen mit rivalisierenden Karten mit 3 Chakra oder weniger nicht geschwächt werden."
        ]
      },
      "S1_067": {
        "name": "SAKURA HARUNO",
        "ability": "Inneres Feuer",
        "descriptions": [
          "Beim ersten Einsatz eines Gegners auf der eigenen Spur erhält diese Karte Chakra(+3). Danach erhält sie Chakra(+1), wenn ein Gegner auf dieser Spur eingesetzt wird oder dorthin Wechselt.",
          "Beim ersten Einsatz eines Gegners auf der eigenen Spur erhält diese Karte Chakra(+3). Danach erhält sie Chakra(+2), wenn ein Gegner auf dieser Spur eingesetzt wird oder dorthin Wechselt."
        ]
      },
      "S1_068": {
        "name": "KAKASHI HATAKE",
        "ability": "Tausendjähriger Tod",
        "descriptions": [
          "Spring auf die erste rivalisierende Karte, die sich in Reichweite begibt, sie erhält Schwächen(1) und Schieben(3).",
          "Spring auf die erste rivalisierende Karte, die sich in Reichweite begibt, sie erhält Schwächen(1) und Schieben(4)."
        ]
      },
      "S1_069": {
        "name": "KAKASHI HATAKE",
        "ability": "Riesenwirbel-Jutsu",
        "descriptions": [
          "Bei Einsatz erhalten alle Spur-Rivalen Schieben(3) und Schwächen(2).",
          "Bei Einsatz erhalten alle Spur-Rivalen Schieben(3) und Schwächen(3)."
        ]
      },
      "S1_070": {
        "name": "KAKASHI HATAKE",
        "ability": "Raikiri",
        "descriptions": [
          "Spring auf die erste rivalisierende Karte, die sich in Reichweite begibt, sie erhält Schwächen(3). Ignoriert Wache.",
          "Spring auf die erste rivalisierende Karte, die sich in Reichweite begibt, sie erhält Schwächen(4). Ignoriert Wache."
        ]
      },
      "S1_071": {
        "name": "KAKASHI HATAKE",
        "ability": "Klon-Täuschung",
        "descriptions": [
          "Verwende die verbleibende Energie, und Beschwöre bis zu 5 Klone mit Chakra(2), die als das Original getarnt sind.",
          "Verwende die verbleibende Energie, und Beschwöre bis zu 6 Klone mit Chakra(2), die als das Original getarnt sind."
        ]
      },
      "S1_072": {
        "name": "IRUKA UMINO",
        "ability": "Zanken",
        "descriptions": [
          "Während diese Karte aktiv ist, Chakra(+1) und Festnageln(2s) für Verbündete mit 2 Chakra beim Einsatz.",
          "Während diese Karte aktiv ist, Chakra(+2) und Festnageln(2s) für Verbündete mit 2 Chakra, wenn sie eingesetzt werden."
        ]
      },
      "S1_073": {
        "name": "HIRUZEN SARUTOBI",
        "ability": "Wille des Feuers",
        "descriptions": [
          "Chakra[+1] für alle Verbündeten nach 10 Sekunden.",
          "Nach 10 Sekunden: Chakra(+2) für alle Verbündeten."
        ]
      },
      "S1_074": {
        "name": "ZABUZA MOMOCHI",
        "ability": "Wasserdrache-Jutsu",
        "descriptions": [
          "Bei Einsatz alle Spur-Rivalen in Kurz- und Mitteldistanz Schwächen(1) und Schieben(1).",
          "Bei Einsatz Schwächen(1) und Schieben(3) für alle Spur-Rivalen in Kurz- und Mitteldistanz."
        ]
      },
      "S1_075": {
        "name": "HAKU",
        "ability": "Eiskristallspiegel",
        "descriptions": [
          "Bei Begegnung nahe Gegner auf der eigenen Spur Festnageln(2s) und Schwächen(1), dann selbst die Spur Wechseln. Diese Fähigkeit wird bei jedem Chakra-Gewinn wieder aktiviert.",
          "Bei Begegnung nahe Gegner auf der eigenen Spur Festnageln(4s) und Schwächen(1), dann selbst die Spur Wechseln. Diese Fähigkeit wird bei jedem Chakra-Gewinn wieder aktiviert."
        ]
      },
      "S1_076": {
        "name": "GAMABUNTA",
        "ability": "Krötenunterstützung",
        "descriptions": [
          "Chakra(+1) immer wenn Verbündete Schieben Rivalen.",
          "Chakra(+2) immer wenn Verbündete Schieben Rivalen."
        ]
      },
      "S1_077": {
        "name": "NARUTO UZUMAKI",
        "ability": "Multi-Schattenklon",
        "descriptions": [
          "Erstelle auf den anderen Spuren 2 Klone mit Chakra(2) und Ansturm(4s), dann nach 10 Sekunden 2 neue Klone. Chakra(+1) wenn sich diese Klone zurückziehen.",
          "Beschwöre auf den anderen Spuren 2 Klone mit Chakra(2) und Ansturm(6s), und dann nach 10 s 2 neue Klone. Chakra(+1), wann immer diese Klone sich zurückziehen."
        ]
      },
      "S1_078": {
        "name": "NARUTO UZUMAKI",
        "ability": "Kyubis Wut",
        "descriptions": [
          "Immer wenn sich Verbündete zurückziehen, Chakra(+1) und Ansturm(1s).",
          "Immer wenn sich Verbündete zurückziehen, Chakra(+2) und Ansturm(1s)."
        ]
      },
      "S1_079": {
        "name": "NARUTO UZUMAKI",
        "ability": "Wütender Schlag",
        "descriptions": [
          "Wird direkt auf Mitteldistanz eingesetzt. Alle Spur-Rivalen werden mit Schwächen(2) und Schieben(1) belegt.",
          "Wird direkt auf Mitteldistanz eingesetzt. Alle Spur-Rivalen werden mit Schwächen(2) und Schieben(3) belegt."
        ]
      },
      "S1_080": {
        "name": "NARUTO UZUMAKI",
        "ability": "Entschlossenheit",
        "descriptions": [
          "Chakra(+2) alle 8 Sekunden.",
          "Chakra(+2) alle 6 Sekunden."
        ]
      },
      "S1_081": {
        "name": "SASUKE UCHIHA",
        "ability": "Feuerball-Jutsu",
        "descriptions": [
          "Bei Einsatz erhalten alle Rivalen in Mitteldistanz Schwächen(2).",
          "Bei Einsatz erhalten alle Rivalen in Mitteldistanz Schwächen(3)."
        ]
      },
      "S1_082": {
        "name": "KAKASHI HATAKE",
        "ability": "Schlachtplan",
        "descriptions": [
          "Solange diese Karte aktiv ist, erhält sie Chakra(+1), wenn Verbündete Rivalen schwächen. Verbündete erhalten Chakra(+1) für jede betroffene Karte, wenn sie zum ersten Mal Rivalen schwächen.",
          "Solange diese Karte aktiv ist, erhält sie Chakra(+2), wenn Verbündete Rivalen Schwächen. Verbündete erhalten Chakra(+1) für jede betroffene Karte, wenn sie zum ersten Mal Rivalen Schwächen."
        ]
      },
      "S1_083": {
        "name": "ZABUZA MOMOCHI",
        "ability": "Dämon",
        "descriptions": [
          "Bei Einsatz werden alle Karten um Schwächen(1). Haben sie 3 oder weniger Chakra, werden stattdessen alle Karten um Schwächen(3).",
          "Bei Einsatz werden alle Karten um Schwächen(1). Haben sie 4 oder weniger Chakra, werden stattdessen alle Karten um Schwächen(4)."
        ]
      },
      "S1_084": {
        "name": "ZABUZA MOMOCHI",
        "ability": "Rücksichtsloser Angriff",
        "descriptions": [
          "Bei jeder Begegnung werden rivalisierende Karten mit 4 oder weniger Chakra mit Schwächen(2) belegt und müssen die Spur Wechseln. Permanenter Ansturm.",
          "Bei jeder Begegnung werden rivalisierende Karten mit 4 oder weniger Chakra mit Schwächen(3) belegt und müssen die Spur Wechseln. Permanenter Ansturm."
        ]
      },
      "S1_085": {
        "name": "KYUBI",
        "ability": "Naturkatastrophe",
        "descriptions": [
          "Wird direkt auf Mitteldistanz eingesetzt. Alle Karten werden mit Schieben(1) und Schwächen(3) belegt. Solange diese Karte aktiv ist, werden neu eingesetzte Karten mit Schwächen(1) belegt. Dauerhaft Verlangsamt.",
          "Wird direkt auf Mitteldistanz eingesetzt. Alle Karten werden mit Schieben(1) und Schwächen(4) belegt. Solange diese Karte aktiv ist, werden neu eingesetzte Karten mit Schwächen(1) belegt. Dauerhaft Verlangsamt."
        ]
      },
      "S2_001": {
        "name": "Naruto Uzumaki",
        "ability": "Chakra-Training",
        "descriptions": [
          "Bei Einsatz besteht eine 50%ige Chance, Chakra(+3).",
          "Bei Einsatz besteht eine 50%ige Chance, Chakra(+4)."
        ]
      },
      "S2_002": {
        "name": "Naruto Uzumaki",
        "ability": "Herausforderer",
        "descriptions": [
          "Bei Einsatz Festnageln(1s) und Chakra(+2) für jeden Spur-Rivalen mit höherem Chakra.",
          "Bei Einsatz Festnageln(2s) und Chakra(+2) für jeden Spur-Rivalen mit höherem Chakra."
        ]
      },
      "S2_003": {
        "name": "Sasuke Uchiha",
        "ability": "Barriere des Löwen",
        "descriptions": [
          "Spring auf die erste rivalisierende Karte, die sich in Reichweite begibt, sie erhält Schwächen(2).",
          "Spring auf die erste rivalisierende Karte, die sich in Reichweite begibt, sie erhält Schwächen(3)."
        ]
      },
      "S2_004": {
        "name": "Sakura Haruno",
        "ability": "Ansturm",
        "descriptions": [
          "Ansturm(2s)",
          "Ansturm(3s)"
        ]
      },
      "S2_005": {
        "name": "Rock Lee",
        "ability": "Beschützer",
        "descriptions": [
          "Ansturm(+3s), wann immer ein Rivale auf dieser Spur eingesetzt wird.",
          "Ansturm(+4s), wann immer ein Rivale auf dieser Spur eingesetzt wird."
        ]
      },
      "S2_006": {
        "name": "Rock Lee",
        "ability": "Liebesbombe",
        "descriptions": [
          "Chakra(+1) für den nächsten eingesetzten Verbündeten. Während diese Karte aktiv ist, die Spur dieses Verbündeten alle 8 Sekunden Wechseln.",
          "Chakra(+2) für den nächsten eingesetzten Verbündeten. Während diese Karte aktiv ist, die Spur dieses Verbündeten alle 8 Sekunden Wechseln."
        ]
      },
      "S2_007": {
        "name": "Neji Hyuga",
        "ability": "Sanfte Faust",
        "descriptions": [
          "Bei der Begegnung Schwächen(2) und Schieben(1).",
          "Bei der Begegnung Schwächen(2) und Schieben(2)."
        ]
      },
      "S2_008": {
        "name": "Tenten",
        "ability": "Steigende Zwillingsdrachen",
        "descriptions": [
          "Bei Einsatz alle Rivalen in weiter Distanz Schwächen(1)und Verlangsamen(6s).",
          "Bei Einsatz alle Rivalen in weiter Distanz Schwächen(1) und Verlangsamen(8s)."
        ]
      },
      "S2_009": {
        "name": "Gai Maito",
        "ability": "Macht der Jugend",
        "descriptions": [
          "Während diese Karte aktiv ist, Chakra(+2) für Rock Lee-Karten, wenn sie eingesetzt werden.",
          "Während diese Karte aktiv ist, Chakra(+3) für Rock Lee-Karten, wenn sie eingesetzt werden."
        ]
      },
      "S2_010": {
        "name": "Gaara",
        "ability": "Gefährlich",
        "descriptions": [
          "Wird direkt auf Mitteldistanz eingesetzt und erhält Chakra(+3), wenn sich eine rivalisierende Karte in Mitteldistanz befindet.",
          "Wird direkt auf Mitteldistanz eingesetzt und erhält Chakra(+4), wenn sich eine rivalisierende Karte in Mitteldistanz befindet."
        ]
      },
      "S2_011": {
        "name": "Kankuro",
        "ability": "Dreist",
        "descriptions": [
          "Chakra(+3) für den nächsten eingesetzten Gaara.",
          "Chakra(+4) für den nächsten eingesetzten Gaara."
        ]
      },
      "S2_012": {
        "name": "Temari",
        "ability": "Vorsichtig",
        "descriptions": [
          "Wache(1) und Verlangsamen(6s) für den nächsten eingesetzten verbündeten Gaara.",
          "Wache(1) und Verlangsamen(10s) für den nächsten eingesetzten verbündeten Gaara."
        ]
      },
      "S2_013": {
        "name": "Baki",
        "ability": "Robust",
        "descriptions": [
          "Ansturm(3s) und Wache(1).",
          "Ansturm(4s) und Wache(1)."
        ]
      },
      "S2_014": {
        "name": "Ino Yamanaka",
        "ability": "Ansturm",
        "descriptions": [
          "Ansturm(2s)",
          "Ansturm(3s)"
        ]
      },
      "S2_015": {
        "name": "Kabuto Yakushi",
        "ability": "Erläuterung",
        "descriptions": [
          "Bei Einsatz erhalten alle Verbündeten in Kurzdistanz zufällig Chakra(+1) oder Festnageln(4s).",
          "Bei Einsatz erhalten alle Verbündeten in Kurzdistanz zufällig Chakra(+2) oder Festnageln(4s)."
        ]
      },
      "S2_016": {
        "name": "Student Trio",
        "ability": "Team Konohamaru",
        "descriptions": [
          "Beim Rückzug erneuter Einsatz als Konohamaru, Moegi und Udon mit Ansturm(3s) und Chakra(1) auf jeder Spur.",
          "Beim Rückzug erneuter Einsatz als Konohamaru, Moegi und Udon mit Ansturm(4s) und Chakra(1) auf jeder Spur."
        ]
      },
      "S2_017": {
        "name": "Ibiki Morino",
        "ability": "Strenge Regeln",
        "descriptions": [
          "Bei Einsatz Schieben(2)- oder Festnageln(4s). alle Spur-Rivalen.",
          "Bei Einsatz Schieben(3)- oder Festnageln(5s). alle Spur-Rivalen."
        ]
      },
      "S2_018": {
        "name": "Choza Akimichi",
        "ability": "Alte Freunde",
        "descriptions": [
          "Während diese Karte aktiv ist, Chakra(+1) auf verbündete Shikaku- und Inoichi-Karten.",
          "Während diese Karte aktiv ist, Chakra(+2) auf verbündete Shikaku- und Inoichi-Karten."
        ]
      },
      "S2_019": {
        "name": "Inoichi Yamanaka",
        "ability": "Alte Freunde",
        "descriptions": [
          "Während diese Karte aktiv ist, Chakra(+1) auf verbündete Choza- und Shikaku-Karten.",
          "Während diese Karte aktiv ist, Chakra(+2) auf verbündete Choza- und Shikaku-Karten."
        ]
      },
      "S2_020": {
        "name": "Shikaku Nara",
        "ability": "Alte Freunde",
        "descriptions": [
          "Während diese Karte aktiv ist, Chakra(+1) auf verbündete Inoichi- und Choza-Karten.",
          "Während diese Karte aktiv ist, Chakra(+2) auf verbündete Inoichi- und Choza-Karten."
        ]
      },
      "S2_021": {
        "name": "Hanabi Hyuga",
        "ability": "Wunder",
        "descriptions": [
          "Ansturm(2s). Bei Begegnung Schieben(2).",
          "Ansturm(3s). Bei Begegnung Schieben(3)."
        ]
      },
      "S2_022": {
        "name": "Hiashi Hyuga",
        "ability": "Hyuga-Anführer",
        "descriptions": [
          "Solange diese Karte aktiv ist, erhalten verbündete Hyuga-Karten Chakra(+2) und Schieben(1). Schieben erhöht keinen bereits vorhandenen Wert.",
          "Solange diese Karte aktiv ist, erhalten verbündete Hyuga-Karten Chakra(+3) und Schieben(1). Schieben erhöht keinen bereits vorhandenen Wert."
        ]
      },
      "S2_023": {
        "name": "Hizashi Hyuga",
        "ability": "Das Opfer des Bruders",
        "descriptions": [
          "Ansturm(2s). Wenn ein verbündeter Hiashi sich zurückziehen würde, wird er an den Spuranfang zurückgezogen. Diese Karte zieht sich stattdessen zurück.",
          "Ansturm(3s). Wenn ein verbündeter Hiashi sich zurückziehen würde, wird er an den Spuranfang zurückgezogen. Diese Karte zieht sich stattdessen zurück."
        ]
      },
      "S2_024": {
        "name": "Zaku Abumi",
        "ability": "Schneidende Schallwellen",
        "descriptions": [
          "Bei Einsatz zwei rivalisierende Karten in Mitteldistanz Schieben(2) und Spur Wechseln.",
          "Bei Einsatz Schieben(2) und Wechsel der Spur bei drei rivalisierenden Karten in Mitteldistanz."
        ]
      },
      "S2_025": {
        "name": "Dosu Kinuta",
        "ability": "Resonierende Echo-Übung",
        "descriptions": [
          "Bei der Begegnung Schwächen(2) auf die rivalisierende Karte. Wenn der Rivale sich nicht zurückzieht, Festnageln(4s), dann SpurWechseln.",
          "Bei der Begegnung Schwächen(2) auf die rivalisierende Karte. Wenn der Rivale sich nicht zurückzieht, Festnageln(5s), dann SpurWechseln."
        ]
      },
      "S2_026": {
        "name": "Kin Tsuchi",
        "ability": "Glockennadeln",
        "descriptions": [
          "Bei Bereitstellung Schwächen(1) und Festnageln(2s) auf nächste rivalisierende Karte.",
          "Bei Bereitstellung Schwächen(2) und Festnageln(2s) auf nächste rivalisierende Karte."
        ]
      },
      "S2_027": {
        "name": "Izumo Kamizuki",
        "ability": "Sabotage",
        "descriptions": [
          "Bei Einsatz Festnageln(2s) auf zwei zufällige Spur-Verbündete.",
          "Bei Einsatz Festnageln(2s) auf drei zufällige Spur-Verbündete."
        ]
      },
      "S2_028": {
        "name": "Kotetsu Hagane",
        "ability": "Fehlleitung",
        "descriptions": [
          "Bei Einsatz 2 zufällige Verbündete Verlangsamen(4s) und Spur Wechseln.",
          "Bei Einsatz Verlangsamen(4s) und Wechsel der Spur bei drei zufälligen Verbündeten."
        ]
      },
      "S2_029": {
        "name": "Oboro",
        "ability": "Nebelklon",
        "descriptions": [
          "Bei Einsatz 2 Klone mit Chakra(1) erstellen. Wenn sich Klone zurückziehen, besteht 50% Chance, einen weiteren Klon auf derselben Spur zu erstellen.",
          "Bei Einsatz Beschwöre 2 Klone mit Chakra(2). Wenn sich Klone zurückziehen, besteht 50% Chance, einen weiteren Klon auf derselben Spur zu erstellen."
        ]
      },
      "S2_030": {
        "name": "Yoroi Akado",
        "ability": "Chakra-Absorption",
        "descriptions": [
          "Bei Begegnung, Chakra(+1) auf diese Karte und Schwächen(1) auf rivalisierende Karte. Deaktiviert auch jede aktive Fähigkeit.",
          "Bei Begegnung, Chakra(+2) auf diese Karte und Schwächen(1) auf rivalisierende Karte. Deaktiviert auch jede aktive Fähigkeit."
        ]
      },
      "S2_031": {
        "name": "Ningame",
        "ability": "Mäßigkeit",
        "descriptions": [
          "Wann immer Spur-Verbündete Ansturm erhalten, wird es stattdessen in Chakra(+1) umgewandelt.",
          "Wann immer Spur-Verbündete Ansturm erhalten, wird es stattdessen in Chakra(+2) umgewandelt."
        ]
      },
      "S2_032": {
        "name": "Gama",
        "ability": "Krötenrolle",
        "descriptions": [
          "Bei Einsatz Beschwören einer zufälligen Kröte von deinem Deck und Chakra(+1).",
          "Bei Einsatz Beschwören einer zufälligen Kröte von deinem Deck und Chakra(+2)."
        ]
      },
      "S2_033": {
        "name": "Gamakichi",
        "ability": "Großmaul",
        "descriptions": [
          "Verbündete Kröten wenden Schieben(1) bei Begegnung an, während diese Karte aktiv ist. Chakra(+1), wenn eine Kröte einen Rivalen schiebt.",
          "Verbündete Kröten wenden Schieben(2) bei Begegnung an, während diese Karte aktiv ist. Chakra(+1), wann immer eine Kröte einen Rivalen schiebt."
        ]
      },
      "S2_034": {
        "name": "Giant Snake",
        "ability": "Schlittern",
        "descriptions": [
          "Wird direkt auf Mitteldistanz eingesetzt und lässt zwei beliebige andere Karten in Mitteldistanz die Spur Wechseln.",
          "Wird direkt auf Mitteldistanz eingesetzt und lässt 3 beliebige andere Karten in Mitteldistanz die Spur Wechseln."
        ]
      },
      "S2_035": {
        "name": "Raido Namiashi",
        "ability": "Leibwächter",
        "descriptions": [
          "Ansturm(2s). Wenn ein verbündeter Hiruzen sich zurückziehen würde, wird er an den Spuranfang zurückgezogen. Diese Karte zieht sich stattdessen zurück.",
          "Ansturm(3s). Wenn ein verbündeter Hiruzen sich zurückziehen würde, wird er an den Spuranfang zurückgezogen. Diese Karte zieht sich stattdessen zurück."
        ]
      },
      "S2_036": {
        "name": "Homura Mitokado",
        "ability": "Beruhigung",
        "descriptions": [
          "Der nächste eingesetzte Verbündete erhält Wache(1) und Chakra(+1).",
          "Der nächste eingesetzte Verbündete erhält Wache(1) und Chakra(+2)."
        ]
      },
      "S2_037": {
        "name": "Koharu Utatane",
        "ability": "Sicherheit",
        "descriptions": [
          "Setze nach 10 Sekunden Anbu Black Ops ein.",
          "Setze nach 8 Sekunden Anbu Black Ops ein."
        ]
      },
      "S2_038": {
        "name": "Genma Shiranui",
        "ability": "Aufseher",
        "descriptions": [
          "Bei Einsatz Fokus(6s). Wenn der Fokus gelingt, Beschwöre eine zufällige Karte mit Kosten bis zu 4 aus deinem Deck. Falls sie 3 oder weniger Chakra hat, erhält sie Chakra(+2).",
          "Bei Einsatz Fokus(4s). Wenn der Fokus gelingt, Beschwöre eine zufällige Karte mit maximalen Kosten von 4 aus deinem Deck. Hat sie 3 oder weniger Chakra, gewähre ihr Chakra(+2)."
        ]
      },
      "S2_039": {
        "name": "Genma Shiranui",
        "ability": "Alarm",
        "descriptions": [
          "Bei Einsatz, Schwächen(3) bei einem Spur-Rivalen in Mitteldistanz.",
          "Bei Einsatz, Schwächen(3) bei zwei Spur-Rivalen in Mitteldistanz."
        ]
      },
      "S2_040": {
        "name": "Yashamaru",
        "ability": "Widerwillige Pflicht",
        "descriptions": [
          "Bei Rückzug Schwächen(3) auf alle Karten in der Nähe.",
          "Bei Rückzug Schwächen(4) auf alle Karten in der Nähe."
        ]
      },
      "S2_041": {
        "name": "Karura",
        "ability": "Mutterliebe",
        "descriptions": [
          "Bei Einsatz Chakra(+2) und Verlangsamen(3s) auf verbündete Gaara-Karten.",
          "Bei Einsatz Chakra(+2) und Verlangsamen(5s) auf verbündete Gaara-Karten."
        ]
      },
      "S2_042": {
        "name": "Yugao Uzuki",
        "ability": "Rachsüchtiger Eid",
        "descriptions": [
          "Ansturm(3s). Wache(1). Bei Begegnung Schwächen(2).",
          "Ansturm(4s). Wache(1). Bei Begegnung Schwächen(2)."
        ]
      },
      "S2_043": {
        "name": "Hana Inuzuka",
        "ability": "Ansturm",
        "descriptions": [
          "Ansturm(4s)",
          "Ansturm(5s)"
        ]
      },
      "S2_044": {
        "name": "Tsume Inuzuka",
        "ability": "Führe die Ladung",
        "descriptions": [
          "Ansturm(4s). Der nächste eingesetzte Verbündete erhält Ansturm(+3s) und Chakra(+1).",
          "Ansturm(4s). Der nächste eingesetzte Verbündete erhält Ansturm(+3s) und Chakra(+2)."
        ]
      },
      "S2_045": {
        "name": "Shibi Aburame",
        "ability": "Rechtzeitige Hilfe",
        "descriptions": [
          "Ansturm(5s). Chakra(+1) auf Verbündete, wenn sie sie erreichen.",
          "Ansturm(6s). Chakra(+1) auf Verbündete, wenn sie sie erreichen."
        ]
      },
      "S2_046": {
        "name": "Jirobo",
        "ability": "Süden",
        "descriptions": [
          "Nächster eingesetzter Orochimaru erhält Chakra(+3).",
          "Nächster eingesetzter Orochimaru erhält Chakra(+4)."
        ]
      },
      "S2_047": {
        "name": "Kidomaru",
        "ability": "Ost",
        "descriptions": [
          "Nächster eingesetzter Orochimaru erhält Ansturm(+4s).",
          "Nächster eingesetzter Orochimaru erhält Ansturm(+5s)."
        ]
      },
      "S2_048": {
        "name": "Sakon",
        "ability": "Westen",
        "descriptions": [
          "Nächster eingesetzter Orochimaru wendet Schwächen(3) auf die nächste rivalisierende Karte an.",
          "Nächster eingesetzter Orochimaru wendet Schwächen(4) auf die nächste rivalisierende Karte an."
        ]
      },
      "S2_049": {
        "name": "Tayuya",
        "ability": "Norden",
        "descriptions": [
          "Der nächste eingesetzte Orochimaru erhält Wache(1).",
          "Der nächste eingesetzte Orochimaru erhält Wache(2)."
        ]
      },
      "S2_050": {
        "name": "Anbu",
        "ability": "Black Ops",
        "descriptions": [
          "Bei Einsatz, erhalte zufällig Chakra(+2) oder Ansturm(4s).",
          "Bei Einsatz, erhalte zufällig Chakra(+3) oder Ansturm(5s)."
        ]
      },
      "S2_051": {
        "name": "Naruto Uzumaki",
        "ability": "Unterbrecher des Schicksals",
        "descriptions": [
          "Wache(2). Wenn Wache auslöst, Ansturm(2s) neu starten, ohne die Restdauer zu addieren. Wenn Ansturm endet, selbst die Spur Wechseln.",
          "Wache(3). Wenn Wache auslöst, Ansturm(2s) neu starten, ohne die Restdauer zu addieren. Wenn Ansturm endet, selbst die Spur Wechseln."
        ]
      },
      "S2_052": {
        "name": "Sakura Haruno",
        "ability": "Standhaft",
        "descriptions": [
          "Bei Begegnung, Schwächen(1) der rivalisierenden Karte und Wache(1).",
          "Bei Begegnung, Schwächen(1) der rivalisierenden Karte und Wache(2)."
        ]
      },
      "S2_053": {
        "name": "Rock Lee",
        "ability": "Laub-Wirbelwind",
        "descriptions": [
          "Bei Begegnung erhält die rivalisierende Karte Schieben(1) und Schwächen(2).",
          "Bei Begegnung erhält die rivalisierende Karte Schieben(2) und Schwächen(2)."
        ]
      },
      "S2_054": {
        "name": "Neji Hyuga",
        "ability": "Byakugan",
        "descriptions": [
          "Bei Einsatz, das Chakra der nächsten rivalisierenden Karte auf die Hälfte reduzieren und Ansturm(2s) erhalten.",
          "Bei Einsatz, das Chakra der nächsten rivalisierenden Karte auf die Hälfte reduzieren und Ansturm(4s) erhalten."
        ]
      },
      "S2_055": {
        "name": "Neji Hyuga",
        "ability": "Last des Schicksals",
        "descriptions": [
          "Immer wenn diese Karte Chakra erhält, Chakra(+1) erhalten. Kann insgesamt nicht mehr als 10 Chakra haben.",
          "Immer wenn diese Karte Chakra erhält, Chakra(+2) erhalten. Kann insgesamt nicht mehr als 10 Chakra haben."
        ]
      },
      "S2_056": {
        "name": "Gai Maito",
        "ability": "Verweis",
        "descriptions": [
          "Wird direkt auf Mitteldistanz eingesetzt. Der nächste Verbündete auf der eigenen Spur erhält Chakra(+2) und wird Festgenagelt(2s).",
          "Wird direkt auf Mitteldistanz eingesetzt. Der nächste Verbündete auf der eigenen Spur erhält Chakra(+2) und wird Festgenagelt(6s)."
        ]
      },
      "S2_057": {
        "name": "Choji Akimichi",
        "ability": "Menschlicher Felsbrocken",
        "descriptions": [
          "Ansturm(3s). Bei jeder Begegnung Schieben(2) und Schwächen(1), wenn Ansturm aktiv ist.",
          "Ansturm(4s). Bei jeder Begegnung Schieben(2) und Schwächen(1), wenn Ansturm aktiv ist."
        ]
      },
      "S2_058": {
        "name": "Ino Yamanaka",
        "ability": "Gedankenübertragung",
        "descriptions": [
          "Bei Einsatz Fokus(8s) und übernimm die Kontrolle über den Spur-Rivalen in Mitteldistanz mit dem höchsten Chakra. Nach Ende des Fokus geht die Kontrolle über die Karte an deinen Rivalen zurück.",
          "Bei Einsatz Fokus(12s) und die Kontrolle über den Spur-Rivalen in Mitteldistanz mit dem höchsten Chakra übernehmen. Endet der Fokus, gib die Kontrolle über die Karte an deinen Rivalen zurück."
        ]
      },
      "S2_059": {
        "name": "Hinata Hyuga",
        "ability": "Ablenken",
        "descriptions": [
          "Bei Begegnung, Schieben(1) und Spur der rivalisierenden Karte wechseln.",
          "Bei Begegnung, Schieben(2) und Spur der rivalisierenden Karte Wechseln."
        ]
      },
      "S2_060": {
        "name": "Gaara",
        "ability": "Sandschild",
        "descriptions": [
          "Wache(2). Wenn Wache aktiviert wird, Chakra(+1).",
          "Wache(3). Wenn Wache aktiviert wird, Chakra(+1)."
        ]
      },
      "S2_061": {
        "name": "Temari",
        "ability": "Riesiger Ventilator",
        "descriptions": [
          "Wache(2). Bei Einsatz und wenn Wache aktiviert wird, Schieben(2) bei allen Spur-Rivalen.",
          "Wache(3). Bei Einsatz und wenn Wache aktiviert wird, Schieben(3) für alle Spur-Rivalen."
        ]
      },
      "S2_062": {
        "name": "Anko Mitarashi",
        "ability": "Auffallende Schattenschlangen",
        "descriptions": [
          "Bei Einsatz Schwächen(2) und Festnageln(4s) einer Spur-Rivalen in Mitteldistanz.",
          "Bei Einsatz Schwächen(2) und Festnageln(4s) zwei Spur-Rivalen in Mitteldistanz."
        ]
      },
      "S2_063": {
        "name": "Choza Akimichi",
        "ability": "Körperausdehnung",
        "descriptions": [
          "Bei Begegnung erhält die rivalisierende Karte Schieben(3) und Schwächen(2).",
          "Bei Begegnung erhält die rivalisierende Karte Schieben(3) und Schwächen(3)."
        ]
      },
      "S2_064": {
        "name": "Inoichi Yamanaka",
        "ability": "Zerstörung des Geistes",
        "descriptions": [
          "Bei Einsatz Fokus(10s) und übernimm die Kontrolle über den nächsten Spur-Rivalen in Mitteldistanz, Verlangsamt(10s) ihn und deaktiviert dauerhaft alle aktiven Fähigkeiten. Nach Ende des Fokus geht die Kontrolle über die Karte an deinen Rivalen zurück.",
          "Bei Einsatz Fokus(14s) und die Kontrolle über den nächsten Spur-Rivalen in Mitteldistanz übernehmen, ihn Verlangsamen(10s) und alle aktiven Fähigkeiten des Gegners dauerhaft deaktivieren. Endet der Fokus, gib die Kontrolle über die Karte an deinen Rivalen zurück."
        ]
      },
      "S2_065": {
        "name": "Shikaku Nara",
        "ability": "Schattenlähmung",
        "descriptions": [
          "Bei Einsatz Festnageln(10s) sich selbst und zwei Spur-Rivalen in weiter Distanz.",
          "Bei Einsatz Festnageln(12s) bei sich selbst und zwei Spur-Rivalen in weiter Distanz."
        ]
      },
      "S2_066": {
        "name": "Jiraiya",
        "ability": "Pervy-Salbei",
        "descriptions": [
          "Alle 10 Sekunden zufälliger Wechsel der Spur.",
          "Alle 8 Sekunden zufälliger Wechsel der Spur."
        ]
      },
      "S2_067": {
        "name": "Orochimaru",
        "ability": "Machenschaften",
        "descriptions": [
          "Bem Einsatz und beim Zurückziehen Schwächen(1) auf bis zu 4 beliebige Karten.",
          "Bem Einsatz und beim Zurückziehen Schwächen(1) auf bis zu 6 beliebige Karten."
        ]
      },
      "S2_068": {
        "name": "Hashirama Senju",
        "ability": "Edo-Reanimation",
        "descriptions": [
          "Wenn unter dem Basis-Chakra, Chakra(+1) alle 4 Sekunden bis das Basis-Chakra wieder erreicht wird.",
          "Wenn unter dem Basis-Chakra, Chakra(+1) alle 3 Sekunden bis das Basis-Chakra wieder erreicht wird."
        ]
      },
      "S2_069": {
        "name": "Tobirama Senju",
        "ability": "Edo-Reanimation",
        "descriptions": [
          "Wenn unter dem Basis-Chakra, Chakra(+1) alle 4 Sekunden bis das Basis-Chakra wieder erreicht wird.",
          "Wenn unter dem Basis-Chakra, Chakra(+1) alle 3 Sekunden bis das Basis-Chakra wieder erreicht wird."
        ]
      },
      "S2_070": {
        "name": "Hiruzen Sarutobi",
        "ability": "Der Dritte",
        "descriptions": [
          "Bei Begegnung, Chakra(+2). Beim Zurückziehen Chakra(+2) für alle Verbündeten.",
          "Bei Begegnung, Chakra(+3). Beim Zurückziehen Chakra(+2) für alle Verbündeten."
        ]
      },
      "S2_071": {
        "name": "Hayate Gekko",
        "ability": "Halbmondtanz",
        "descriptions": [
          "Bei Begegnung dreimal Schwächen(1). Wenn der Rivale sich nicht zurückzieht, auch Schieben(2).",
          "Bei Begegnung dreimal Schwächen(1). Wenn der Rivale sich nicht zurückzieht, auch Schieben(3)."
        ]
      },
      "S2_072": {
        "name": "Ibiki Morino",
        "ability": "Verhör",
        "descriptions": [
          "Bei Einsatz Schwächen(1) und Verlangsamen(4s) aller Karten.",
          "Bei Einsatz Schwächen(1) und Verlangsamen(6s) aller Karten."
        ]
      },
      "S2_073": {
        "name": "Gamahiro",
        "ability": "Gewicht",
        "descriptions": [
          "Bei Einsatz Chakra(+2) für jede verbündete Kröte. Dauerhaft Verlangsamt.",
          "Bei Einsatz Chakra(+3) für jede verbündete Kröte. Dauerhaft Verlangsamt."
        ]
      },
      "S2_074": {
        "name": "Sasuke Uchiha",
        "ability": "Chidori",
        "descriptions": [
          "Bei Begegnung durch Rivalen in der Nähe springen, Schwächen(2) bei jedem von ihnen. Ignoriert Wache.",
          "Bei Begegnung durch Rivalen in der Nähe springen, Schwächen(3) bei jedem von ihnen. Ignoriert Wache."
        ]
      },
      "S2_075": {
        "name": "Rock Lee",
        "ability": "Schwerelos",
        "descriptions": [
          "Ansturm(3s). Bei jeder Begegnung, wenn die rivalisierende Karte ein höheres Chakra hat, Schieben(1) und Schwächen(2), dann SpurWechseln.",
          "Ansturm(3s). Bei jeder Begegnung, wenn die rivalisierende Karte ein höheres Chakra hat, Schieben(2) und Schwächen(2), dann SpurWechseln."
        ]
      },
      "S2_076": {
        "name": "Neji Hyuga",
        "ability": "Rotation",
        "descriptions": [
          "Bei Begegnung, Schieben(2) und Schwächen(3) bei allen rivalisierenden Karten in der Nähe.",
          "Bei Begegnung, Schieben(4) und Schwächen(3) bei allen rivalisierenden Karten in der Nähe."
        ]
      },
      "S2_077": {
        "name": "Kiba Inuzuka",
        "ability": "Mann-Biest-Klon",
        "descriptions": [
          "Der nächste eingesetzte Akamaru wird zu einer vollständigen Kopie dieser Karte mit Ansturm(4s).",
          "Der nächste eingesetzte Akamaru wird zu einer vollständigen Kopie dieser Karte mit Ansturm(5s)."
        ]
      },
      "S2_078": {
        "name": "Shikamaru Nara",
        "ability": "Shogi-Meister",
        "descriptions": [
          "Bei Einsatz selbst Festnageln(10s) und Chakra(+3) erhalten. Während diese Karte aktiv ist, erhalten andere verbündete Karten Chakra(+3), wenn du sie Festnagelst oder sie sich Fokussieren.",
          "Bei Einsatz sich selbst Festnageln(12s) und Chakra(+4) erhalten. Während diese Karte aktiv ist, erhalten andere verbündete Karten Chakra(+3), sooft du sie Festnagelst oder sie Fokus erhalten."
        ]
      },
      "S2_079": {
        "name": "Asuma Sarutobi",
        "ability": "Chakra-Klingen",
        "descriptions": [
          "Bei jeder Begegnung, Schwächen(1). Wenn diese Karte bewirkt, dass sich ein Rivale zurückzieht, Ansturm(+1s).",
          "Bei jeder Begegnung, Schwächen(2). Wenn diese Karte bewirkt, dass sich ein Rivale zurückzieht, Ansturm(+1s)."
        ]
      },
      "S2_080": {
        "name": "Gaara",
        "ability": "Instabil",
        "descriptions": [
          "Bei Einsatz Schwächen(2) und Verlangsamen(6s) auf alle Karten auf der Spur.",
          "Bei Einsatz Schwächen(2) und Verlangsamen(8s) auf alle Karten auf der Spur."
        ]
      },
      "S2_081": {
        "name": "Gaara",
        "ability": "Blutdurst",
        "descriptions": [
          "Chakra(+1), wenn verbündete Karten andere Karten Schwächen.",
          "Chakra(+2), wenn verbündete Karten andere Karten Schwächen."
        ]
      },
      "S2_082": {
        "name": "Kankuro",
        "ability": "Marionettenangriff",
        "descriptions": [
          "Die erste nahe gegnerische Karte Schwächen(3) und Verlangsamen(2s). Zieht sie sich nicht zurück, ihre Spur Wechseln. Wenn ein anderer Verbündeter einen Gegner zum Spurwechsel bringt, erhält diese Karte Chakra(+1) und aktiviert diese Fähigkeit erneut.",
          "Die erste nahe gegnerische Karte Schwächen(3) und Verlangsamen(5s). Zieht sie sich nicht zurück, ihre Spur Wechseln. Wenn ein anderer Verbündeter einen Gegner zum Spurwechsel bringt, erhält diese Karte Chakra(+1) und aktiviert diese Fähigkeit erneut."
        ]
      },
      "S2_083": {
        "name": "Jiraya",
        "ability": "Krötensalbei",
        "descriptions": [
          "Chakra(+3) für verbündete Kröten, während diese Karte aktiv ist.",
          "Chakra(+4) für verbündete Kröten, während diese Karte aktiv ist."
        ]
      },
      "S2_084": {
        "name": "Orochimaru",
        "ability": "Verrat",
        "descriptions": [
          "Ignoriere alle rivalisierenden Fähigkeiten und Begegnungen. In mittlerer Distanz Chakra(+2) und du wirst verwundbar.",
          "Ignoriere alle rivalisierenden Fähigkeiten und Begegnungen. In mittlerer Distanz Chakra(+3) und du wirst verwundbar."
        ]
      },
      "S2_085": {
        "name": "Orochimaru",
        "ability": "Kusanagi",
        "descriptions": [
          "Bei jeder Begegnung Schwächen(2). Bei jedem Wechsel einer rivalisierenden Karte auf eine andere Spur, Wechsel auf dieselbe Spur und Wache(1).",
          "Bei jeder Begegnung Schwächen(3). Bei jedem Wechsel der Spur von rivalisierende Karten, Wechsel auf dieselbe Spur und Wache(1)."
        ]
      },
      "S2_086": {
        "name": "Orochimaru",
        "ability": "Edo Tensei",
        "descriptions": [
          "Bei Einsatz, Schwächen(2) von zwei Verbündeten mit dem niedrigsten Chakra. Für jeden Rückzug Beschwören von Edo Hashirama und Tobirama von deinem Deck, was ihnen Ansturm(3s) gewährt.",
          "Bei Einsatz, Schwächen(2) von zwei Verbündeten mit dem niedrigsten Chakra. Für jeden Rückzug Beschwören von Edo Hashirama und Tobirama von deinem Deck, was ihnen Ansturm(5s) gewährt."
        ]
      },
      "S2_087": {
        "name": "Hashirama Senju",
        "ability": "Tiefwald-Entstehung",
        "descriptions": [
          "Bei Einsatz, Festnageln(12s), für alle rivalisierenden Karten.",
          "Bei Einsatz, Festnageln(14s), für alle rivalisierenden Karten."
        ]
      },
      "S2_088": {
        "name": "Tobirama Senju",
        "ability": "Wasserstoßwelle",
        "descriptions": [
          "Bei Einsatz Schwächen(2) und Verlangsamen(4s) für alle rivalisierenden Karten.",
          "Bei Einsatz Schwächen(2) und Verlangsamen(8s) für alle rivalisierenden Karten."
        ]
      },
      "S2_089": {
        "name": "Hiruzen Sarutobi",
        "ability": "Feuerdrachenbomben",
        "descriptions": [
          "Bei Einsatz Schwächen(3) und Brennen(4) auf die nächste rivalisierende Karte.",
          "Bei Einsatz Schwächen(3) und Brennen(5) für die nächste rivalisierende Karte."
        ]
      },
      "S2_090": {
        "name": "Enma",
        "ability": "Affenkönig",
        "descriptions": [
          "Chakra(+1) für Verbündete, bei Spur-Wechsel.",
          "Chakra(+2) für Verbündete, bei Spur-Wechsel."
        ]
      },
      "S2_091": {
        "name": "Naruto Uzumaki",
        "ability": "Wille zum Schutz",
        "descriptions": [
          "Wenn diese Karte zum ersten Mal unter das Basis-Chakra fällt, Chakra(+4) und Ansturm(3s). Bei Rückzug erhöht sich das Basis-Chakra dauerhaft um 2.",
          "Wenn diese Karte zum ersten Mal unter das Basis-Chakra fällt, Chakra(+5) und Ansturm(3s). Bei Rückzug erhöht sich das Basis-Chakra dauerhaft um 2."
        ]
      },
      "S2_092": {
        "name": "Sasuke Uchiha",
        "ability": "Fluchmarkierung",
        "descriptions": [
          "Bei Einsatz Chakra(+3). Nach jeder Begegnung Chakra(+2).",
          "Bei Einsatz Chakra(+4). Nach jeder Begegnung Chakra(+2)."
        ]
      },
      "S2_093": {
        "name": "Sakura Haruno",
        "ability": "Unnachgiebig",
        "descriptions": [
          "Permanente Wache. Jedes Mal, wenn Wache aktiviert wird, Chakra(+1) und Wechsel der Spur.",
          "Permanente Wache. Jedes Mal, wenn Wache aktiviert wird, Chakra(+2) und Wechsel der Spur."
        ]
      },
      "S2_094": {
        "name": "Rock Lee",
        "ability": "Fünftes Tor",
        "descriptions": [
          "Bei Einsatz Fokus(5s). Wenn der Fokus gelingt, erhalte Chakra(+7) und aktiviere den Rest dieser Fähigkeit. Springe zur ersten gegnerischen Karte in deiner Nähe. Bei jeder Begegnung, Schwäche(2) gegnerische Karte und Schwäche(1) dich selbst.",
          "Bei Einsatz Fokus(3s). Wenn der Fokus gelingt, erhalte Chakra(+7) und aktiviere den Rest dieser Fähigkeit. Springe zur ersten gegnerischen Karte in deiner Nähe. Bei jeder Begegnung, Schwäche(2) gegnerische Karte und Schwäche(1) dich selbst."
        ]
      },
      "S2_095": {
        "name": "Neji Hyuga",
        "ability": "Vierundsechzig Palmen",
        "descriptions": [
          "Bei jeder Begegnung Schieben(1) und Schwächen(1). Wenn diese Karte bewirkt, dass sich ein Rivale zurückzieht, reduziert sie auch das Basis-Chakra dieses Rivalen dauerhaft um 2.",
          "Bei jeder Begegnung Schieben(1) und Schwächen(2). Wenn diese Karte bewirkt, dass sich ein Rivale zurückzieht, reduziert sie auch das Basis-Chakra dieses Rivalen dauerhaft um 2."
        ]
      },
      "S2_096": {
        "name": "Gaara",
        "ability": "Sandfreisetzung",
        "descriptions": [
          "Wache(1). Wenn eine rivalisierende Karte in der Nähe ist, Festnageln(8s) und erhalte Chakra(+2). Ist der Rivale bereits festgenagelt, stattdessen Schwächen(3) und erhalte Wache(1).",
          "Wache(2). Immer wenn sich eine rivalisierende Karte nähert, Festnageln(8s) sie und erhalte Chakra(+2). Ist der Rivale bereits festgenagelt, stattdessen Schwächen(3) und erhalte Wache(1)."
        ]
      },
      "S2_097": {
        "name": "Hiruzen Sarutobi",
        "ability": "Elementarmeister",
        "descriptions": [
          "Bei Einsatz Schwächen(1) und Verlangsamen(8s) für alle Spur-Rivalen. Erhält die Karte zum ersten Mal Chakra, Schwächen(2) und Brennen(3) für alle Spur-Rivalen.",
          "Bei Einsatz Schwächen(1) und Verlangsamen(12s) für alle Spur-Rivalen. Erhält die Karte zum ersten Mal Chakra, Schwächen(2) und Brennen(4) für alle Spur-Rivalen."
        ]
      },
      "S2_098": {
        "name": "Hiruzen Sarutobi",
        "ability": "Reaper-Todessiegel",
        "descriptions": [
          "Bei Einsatz Fokus(4s). Wenn der Fokus gelingt, aktiviere den Rest dieser Fähigkeit. Wenn eine gegnerische Karte mit gleichem oder höherem Chakra in der Nähe ist, entferne bis zu 12 Chakra und deaktiviere ihre aktive Fähigkeit. Zieht sich das Ziel zurück, Versiegeln(15s). Beim Abziehen, Versiegeln(15s) sich selbst. Zieht sich nach dem Versiegeln von 3 Karten sofort zurück.",
          "Bei Einsatz Fokus(4s). Wenn der Fokus gelingt, aktiviere den Rest dieser Fähigkeit. Nähert sich eine rivalisierende Karte mit gleich viel oder mehr Chakra, entferne bis zu 15 Chakra von ihr und deaktiviere jede aktive Fähigkeit. Zieht sich das Ziel zurück, Versiegeln(15s). Beim eigenen Rückzug, Versiegeln(15s) sich selbst. Zieht sich sofort zurück, nachdem 3 Karten versiegelt wurden."
        ]
      },
      "S2_099": {
        "name": "Ichibi",
        "ability": "Luftgeschosse",
        "descriptions": [
          "Beim Einsatz Schwächen(2) für alle Spur-Rivalen in weiter Distanz. Alle 10 Sekunden Fokus(2s). Wenn der Fokus gelingt, Schwächen(2) für alle Spur-Rivalen in weiter Distanz.",
          "Beim Einsatz Schwächen(3) für alle Spur-Rivalen in weiter Distanz. Alle 10 Sekunden Fokus(2s). Wenn der Fokus gelingt, Schwächen(3) für alle Spur-Rivalen in weiter Distanz."
        ]
      },
      "S2_100": {
        "name": "Kyubi",
        "ability": "Verknüpftes Schicksal",
        "descriptions": [
          "Chakra(+7) für den nächsten eingesetzten Verbündeten. Karten sind verlinkt, wenn sich eine zurückzieht, dann auch die andere.",
          "Chakra(+8) für den nächsten eingesetzten Verbündeten. Karten sind verlinkt, wenn sich eine zurückzieht, dann auch die andere."
        ]
      },
      "S3_001": {
        "name": "Naruto Uzumaki",
        "ability": "Geteilter Traum",
        "descriptions": [
          "Immer wenn sich eine andere Karte mit Geteilter Traum zurückzieht, erhält diese Karte Chakra(+1).",
          "Immer wenn sich eine andere Karte mit Geteilter Traum zurückzieht, erhält diese Karte Chakra(+2)."
        ]
      },
      "S3_002": {
        "name": "Sasuke Uchiha",
        "ability": "Feuerballtraining",
        "descriptions": [
          "Ansturm(1s). Bei Einsatz Chakra(+1) für jede von Brennen betroffene gegnerische Karte.",
          "Ansturm(2s). Bei Einsatz Chakra(+1) für jede von Brennen betroffene gegnerische Karte."
        ]
      },
      "S3_003": {
        "name": "Choji Akimichi",
        "ability": "Teilweise Körpervergrößerung",
        "descriptions": [
          "Wenn sich eine gegnerische Karte nähert, Schwächen(1) und Schieben(2).",
          "Wenn sich eine gegnerische Karte nähert, Schwächen(1) und Schieben(4)."
        ]
      },
      "S3_004": {
        "name": "Kankuro",
        "ability": "Puppenwechsel",
        "descriptions": [
          "Bei Begegnung Teleportieren hinter die gegnerische Karte, Schwächen(2) und Festnageln(5s).",
          "Bei Begegnung Teleportieren hinter die gegnerische Karte, Schwächen(2) und Festnageln(8s)."
        ]
      },
      "S3_005": {
        "name": "Kankuro",
        "ability": "Eiserne Jungfrau",
        "descriptions": [
          "Wenn sich eine gegnerische Karte nähert, zieht sie zu dieser Karte und deaktiviert ihre Fähigkeit, dann Schwächen(2).",
          "Wenn sich eine gegnerische Karte nähert, zieht sie zu dieser Karte und deaktiviert ihre Fähigkeit, dann Schwächen(3)."
        ]
      },
      "S3_006": {
        "name": "Neji Hyuga",
        "ability": "Gezielte Verteidigung",
        "descriptions": [
          "Wache(2). Wenn Wache auslöst, 50% Chance, sich selbst zu Festnageln(6s).",
          "Wache(3). Wenn Wache auslöst, 50% Chance, sich selbst zu Festnageln(6s)."
        ]
      },
      "S3_007": {
        "name": "Shikamaru Nara",
        "ability": "Faulpelz",
        "descriptions": [
          "Ansturm(2s)",
          "Ansturm(3s)"
        ]
      },
      "S3_008": {
        "name": "Jiraiya",
        "ability": "Ansturm",
        "descriptions": [
          "Ansturm(4s)",
          "Ansturm(5s)"
        ]
      },
      "S3_009": {
        "name": "Jiraiya",
        "ability": "Krötenmaulfalle",
        "descriptions": [
          "Bei Einsatz Festnageln(6s) alle Karten auf der Spur.",
          "Bei Einsatz Festnageln(10s) alle Karten auf der Spur."
        ]
      },
      "S3_010": {
        "name": "Jiraiya",
        "ability": "Fortgeschrittenes Training",
        "descriptions": [
          "Immer wenn du einen Spur-Verbündeten mit 3 oder weniger Chakra einsetzt, gewähre ihm Fokus(8s). Wenn dieser Fokus gelingt, erhält die verbündete Karte Chakra(+3).",
          "Immer wenn du einen Spur-Verbündeten mit 3 oder weniger Chakra einsetzt, gewähre ihm Fokus(8s). Wenn dieser Fokus gelingt, erhält die verbündete Karte Chakra(+4)."
        ]
      },
      "S3_011": {
        "name": "Orochimaru",
        "ability": "Auf der Hut",
        "descriptions": [
          "Wache(1)",
          "Wache(2)"
        ]
      },
      "S3_012": {
        "name": "Orochimaru",
        "ability": "Schwer zu fassen",
        "descriptions": [
          "Ansturm(3s). Wenn sich eine gegnerische Karte nähert, sie Schwächen(1) und die Spur Wechseln.",
          "Ansturm(5s). Wenn sich eine gegnerische Karte nähert, sie Schwächen(1) und die Spur Wechseln."
        ]
      },
      "S3_013": {
        "name": "Tsunade",
        "ability": "Ansturm",
        "descriptions": [
          "Ansturm(3s)",
          "Ansturm(4s)"
        ]
      },
      "S3_014": {
        "name": "Tsunade",
        "ability": "Kraftvoller Fingerschnipp",
        "descriptions": [
          "Wache(1). Wenn sich eine gegnerische Karte nähert, spring auf sie und Schieben(2).",
          "Wache(1). Wenn sich eine gegnerische Karte nähert, spring auf sie und Schieben(4)."
        ]
      },
      "S3_015": {
        "name": "Tsunade",
        "ability": "Erfahren",
        "descriptions": [
          "Ansturm(3s). Bei Begegnung Schieben(1).",
          "Ansturm(4s). Bei Begegnung Schieben(1)."
        ]
      },
      "S3_016": {
        "name": "Manda",
        "ability": "Kolossale Schlange",
        "descriptions": [
          "Ansturm(4s) und Wache(1). Wenn Wache auslöst, die Spur Wechseln.",
          "Ansturm(4s) und Wache(2). Wenn Wache auslöst, die Spur Wechseln."
        ]
      },
      "S3_017": {
        "name": "Katsuyu",
        "ability": "Säureschuss",
        "descriptions": [
          "Bei Einsatz alle Rivalen in Mitteldistanz Schwächen(2) und Verlangsamen(6s).",
          "Bei Einsatz alle Rivalen in Mitteldistanz Schwächen(3) und Verlangsamen(6s)."
        ]
      },
      "S3_018": {
        "name": "Hiruzen Sarutobi",
        "ability": "Glöckchenprüfung",
        "descriptions": [
          "Verlangsamen(6s) die nächsten drei eingesetzten Verbündeten und gewährt ihnen alle 3 Sekunden Chakra(+1), solange sie von dieser Verlangsamung betroffen sind.",
          "Verlangsamen(9s) die nächsten drei eingesetzten Verbündeten und gewährt ihnen alle 3 Sekunden Chakra(+1), solange sie von dieser Verlangsamung betroffen sind."
        ]
      },
      "S3_019": {
        "name": "Itachi Uchiha",
        "ability": "Großer Bruder",
        "descriptions": [
          "Der nächste eingesetzte Sasuke erhält Chakra(+2) und Ansturm(4s), wenn er auf derselben Spur eingesetzt wird, oder Wache(2) und Verlangsamen(10s), wenn er auf einer anderen Spur eingesetzt wird.",
          "Der nächste eingesetzte Sasuke erhält Chakra(+2) und Ansturm(5s), wenn er auf derselben Spur eingesetzt wird, oder Wache(2) und Verlangsamen(12s), wenn er auf einer anderen Spur eingesetzt wird."
        ]
      },
      "S3_020": {
        "name": "Jirobo",
        "ability": "Befreiung des Fluchmals",
        "descriptions": [
          "Wache(1). Bei Begegnung Schieben(1).",
          "Wache(2). Bei Begegnung Schieben(1)."
        ]
      },
      "S3_021": {
        "name": "Kidomaru",
        "ability": "Befreiung des Fluchmals",
        "descriptions": [
          "Wache(1) und Ansturm(2s).",
          "Wache(1) und Ansturm(4s)."
        ]
      },
      "S3_022": {
        "name": "Kidomaru",
        "ability": "Spinnenregen",
        "descriptions": [
          "Bei Einsatz zufällig alle gegnerischen Karten Festnageln(4s) oder Verlangsamen(6s).",
          "Bei Einsatz zufällig alle gegnerischen Karten Festnageln(6s) oder Verlangsamen(8s)."
        ]
      },
      "S3_023": {
        "name": "Kimimaro",
        "ability": "Knochenkontrolle",
        "descriptions": [
          "Ansturm(2s). Bei Begegnung Schwächen(3).",
          "Ansturm(4s). Bei Begegnung Schwächen(3)."
        ]
      },
      "S3_024": {
        "name": "Sakon & Ukon",
        "ability": "Befreiung des Fluchmals",
        "descriptions": [
          "Wache(1). Bei Begegnung Schwächen(1).",
          "Wache(1). Bei Begegnung Schwächen(2)."
        ]
      },
      "S3_025": {
        "name": "Tayuya",
        "ability": "Befreiung des Fluchmals",
        "descriptions": [
          "Wache(1) und Ansturm(2s).",
          "Wache(1) und Ansturm(4s)."
        ]
      },
      "S3_026": {
        "name": "Kimimaro",
        "ability": "Befreiung des Fluchmals",
        "descriptions": [
          "Wache(1). Wenn sich eine gegnerische Karte nähert, sich selbst Festnageln(2s) und Chakra(+1). Bei Begegnung Schwächen(1).",
          "Wache(2). Wenn sich eine gegnerische Karte nähert, sich selbst Festnageln(2s) und Chakra(+1). Bei Begegnung Schwächen(1)."
        ]
      },
      "S3_027": {
        "name": "Shizune",
        "ability": "Treues Schweinchen",
        "descriptions": [
          "Bei Einsatz Beschwöre Tonton mit Chakra(1) und Ansturm(5s) auf derselben Spur wie die verbündete Tsunade. Erreicht sie eine verbündete Tsunade-Karte, gewähre ihr Chakra(+3) und ziehe dich dann zurück.",
          "Bei Einsatz Beschwöre Tonton mit Chakra(1) und Ansturm(5s) auf derselben Spur wie die verbündete Tsunade. Erreicht sie eine verbündete Tsunade-Karte, gewähre ihr Chakra(+4) und ziehe dich dann zurück."
        ]
      },
      "S3_028": {
        "name": "Tsume Inuzuka",
        "ability": "Herrin der Hunde",
        "descriptions": [
          "Bei Einsatz Beschwöre Kuromaru mit Chakra(3) auf einer anderen Spur. Der nächste eingesetzte Ninjahund erhält Chakra(+2).",
          "Bei Einsatz Beschwöre Kuromaru mit Chakra(3) auf einer anderen Spur. Der nächste eingesetzte Ninjahund erhält Chakra(+3)."
        ]
      },
      "S3_029": {
        "name": "Akahoshi",
        "ability": "Täuschendes Training",
        "descriptions": [
          "Immer wenn sich verbündete Karten fokussieren, gewähre ihnen Fokus(+4s). Schwächen(1) verbündete Karten alle 4 Sekunden während des Fokus.",
          "Immer wenn sich verbündete Karten fokussieren, gewähre ihnen Fokus(+6s). Schwächen(1) verbündete Karten alle 4 Sekunden während des Fokus."
        ]
      },
      "S3_030": {
        "name": "Amachi",
        "ability": "Wasserkanonenkugel",
        "descriptions": [
          "Ansturm(2s). Bei Einsatz die nächste gegnerische Karte in Mitteldistanz Schwächen(1).",
          "Ansturm(3s). Bei Einsatz die nächste gegnerische Karte in Mitteldistanz Schwächen(2)."
        ]
      },
      "S3_031": {
        "name": "Aoi Rokusho",
        "ability": "Nadelregen",
        "descriptions": [
          "Bei Begegnung alle nahen Spur-Rivalen Schwächen(1) und Verlangsamen(3s).",
          "Bei Begegnung alle nahen Spur-Rivalen Schwächen(1) und Verlangsamen(5s)."
        ]
      },
      "S3_032": {
        "name": "Dan Kato",
        "ability": "Geteilter Traum",
        "descriptions": [
          "Immer wenn sich eine andere Karte mit Geteilter Traum zurückzieht, erhält diese Karte Chakra(+1).",
          "Immer wenn sich eine andere Karte mit Geteilter Traum zurückzieht, erhält diese Karte Chakra(+2)."
        ]
      },
      "S3_033": {
        "name": "Fugaku Uchiha",
        "ability": "Anführer der Uchiha",
        "descriptions": [
          "Beim Einsatz verbündeter Uchiha-Karten erhalten diese Wache(+1) und Verlangsamen(6s), wenn sie 3 oder weniger Chakra haben, andernfalls erhalten sie Chakra(+2) und Festnageln(4s).",
          "Beim Einsatz verbündeter Uchiha-Karten erhalten diese Wache(+2) und Verlangsamen(6s), wenn sie 3 oder weniger Chakra haben, andernfalls erhalten sie Chakra(+3) und Festnageln(4s)."
        ]
      },
      "S3_034": {
        "name": "Fūjin",
        "ability": "Legendäre Stärke",
        "descriptions": [
          "Wache(1). Bei Begegnung Schwächen(1) und Schieben(3).",
          "Wache(2). Bei Begegnung Schwächen(1) und Schieben(3)."
        ]
      },
      "S3_035": {
        "name": "Gamatatsu",
        "ability": "Vom Essen motiviert",
        "descriptions": [
          "Bei Einsatz Fokussieren(12s). Alle 4 Sekunden während des Fokus 1 Energie ausgeben, falls verfügbar, um anderen verbündeten Kröten Chakra(+2) zu gewähren.",
          "Bei Einsatz Fokussieren(16s). Alle 4 Sekunden während des Fokus 1 Energie ausgeben, falls verfügbar, um anderen verbündeten Kröten Chakra(+2) zu gewähren."
        ]
      },
      "S3_036": {
        "name": "Hanzaki",
        "ability": "Raubplan",
        "descriptions": [
          "Ansturm(2s). Bei Einsatz alle Spur-Verbündeten Schwächen(1) und für jeden betroffenen Verbündeten Chakra(+2) erhalten.",
          "Ansturm(3s). Bei Einsatz alle Spur-Verbündeten Schwächen(1) und für jeden betroffenen Verbündeten Chakra(+2) erhalten."
        ]
      },
      "S3_037": {
        "name": "Hanzaki",
        "ability": "Zanbato-Ausfall",
        "descriptions": [
          "Wache(1). Wenn sich eine gegnerische Karte nähert, spring auf sie und Schwächen(1) oder Schieben(1).",
          "Wache(2). Wenn sich eine gegnerische Karte nähert, spring auf sie und Schwächen(1) oder Schieben(1)."
        ]
      },
      "S3_038": {
        "name": "Idate Morino",
        "ability": "Läufer",
        "descriptions": [
          "Ansturm(4s). Bei Begegnung die Spur Wechseln.",
          "Ansturm(5s). Bei Begegnung die Spur Wechseln."
        ]
      },
      "S3_039": {
        "name": "Jirocho Wasabi",
        "ability": "Aufrichtiger Glaube",
        "descriptions": [
          "Der nächste auf einer anderen Spur eingesetzte Verbündete erhält Ansturm(2s) und Wache(1). Erreicht er die Mitteldistanz, wird sein verbleibender Ansturm in bis zu 3 Chakra umgewandelt.",
          "Der nächste auf einer anderen Spur eingesetzte Verbündete erhält Ansturm(3s) und Wache(1). Erreicht er die Mitteldistanz, wird sein verbleibender Ansturm in bis zu 3 Chakra umgewandelt."
        ]
      },
      "S3_040": {
        "name": "Arashi",
        "ability": "Fesselndes Mandala",
        "descriptions": [
          "Bei Einsatz den Spur-Rivalen mit dem höchsten Chakra Schieben(2) und Festnageln(8s). Solange dieses Festnageln wirkt, die gegnerische Karte alle 4s Schwächen(1).",
          "Bei Einsatz den Spur-Rivalen mit dem höchsten Chakra Schieben(4) und Festnageln(8s). Solange dieses Festnageln wirkt, die gegnerische Karte alle 4s Schwächen(1)."
        ]
      },
      "S3_041": {
        "name": "Kagerō",
        "ability": "Kagero-Ninjakunst",
        "descriptions": [
          "Bei Einsatz zwei Spur-Rivalen in Mitteldistanz Schwächen(3), dann sich selbst und zwei Spur-Verbündete in Kurzdistanz die Spur Wechseln.",
          "Bei Einsatz zwei Spur-Rivalen in Mitteldistanz Schwächen(4), dann sich selbst und zwei Spur-Verbündete in Kurzdistanz die Spur Wechseln."
        ]
      },
      "S3_042": {
        "name": "Kyuroku Wagarashi",
        "ability": "Ehrlos",
        "descriptions": [
          "Der nächste eingesetzte Spur-Verbündete erhält Ansturm(4s). Wenn Kyuroku sich zurückzieht, Wechselt dieser Verbündete die Spur und alle Spur-Verbündeten werden Verlangsamt(3s).",
          "Der nächste eingesetzte Spur-Verbündete erhält Ansturm(5s). Wenn Kyuroku sich zurückzieht, Wechselt dieser Verbündete die Spur und alle Spur-Verbündeten werden Verlangsamt(3s)."
        ]
      },
      "S3_043": {
        "name": "Mikoto Uchiha",
        "ability": "Beruhigung",
        "descriptions": [
          "Der nächste eingesetzte Sasuke erhält Chakra(+1). Wenn eine verbündete Sasuke-Karte zum ersten Mal unter ihr Basis-Chakra fällt, sie Heilen(1).",
          "Der nächste eingesetzte Sasuke erhält Chakra(+1). Wenn eine verbündete Sasuke-Karte zum ersten Mal unter ihr Basis-Chakra fällt, sie Heilen(2)."
        ]
      },
      "S3_044": {
        "name": "Mizuki",
        "ability": "Tierisches Fluchmal",
        "descriptions": [
          "Bei Begegnung Schwächen(4). Nach 20 Sekunden das eigene Chakra auf Chakra(1) setzen und diese Fähigkeit deaktivieren.",
          "Bei Begegnung Schwächen(5). Nach 20 Sekunden das eigene Chakra auf Chakra(1) setzen und diese Fähigkeit deaktivieren."
        ]
      },
      "S3_045": {
        "name": "Nawaki",
        "ability": "Geteilter Traum",
        "descriptions": [
          "Immer wenn sich eine andere Karte mit Geteilter Traum zurückzieht, erhält diese Karte Chakra(+1).",
          "Immer wenn sich eine andere Karte mit Geteilter Traum zurückzieht, erhält diese Karte Chakra(+2)."
        ]
      },
      "S3_046": {
        "name": "Raiga Kurosuki",
        "ability": "Donnerschwerter",
        "descriptions": [
          "Wenn sich eine gegnerische Karte nähert, sie Schwächen(1) und ihre Spur Wechseln.",
          "Wenn sich eine gegnerische Karte nähert, sie Schwächen(2) und ihre Spur Wechseln."
        ]
      },
      "S3_047": {
        "name": "Raijin",
        "ability": "Legendäre Stärke",
        "descriptions": [
          "Wache(1). Bei Begegnung Schwächen(1) und Schieben(3).",
          "Wache(2). Bei Begegnung Schwächen(1) und Schieben(3)."
        ]
      },
      "S3_048": {
        "name": "Sumaru",
        "ability": "Ortskenntnis",
        "descriptions": [
          "Bei Einsatz erhalten zwei Verbündete in Kurzdistanz Ansturm(3s).",
          "Bei Einsatz erhalten drei Verbündete in Kurzdistanz Ansturm(3s)."
        ]
      },
      "S3_049": {
        "name": "Yoshino Nara",
        "ability": "Strenge",
        "descriptions": [
          "Der nächste eingesetzte Shikamaru erhält Chakra(+1) und Verlangsamen(8s).",
          "Der nächste eingesetzte Shikamaru erhält Chakra(+1) und Verlangsamen(12s)."
        ]
      },
      "S3_050": {
        "name": "Uchiha Trio",
        "ability": "Verdacht",
        "descriptions": [
          "Ansturm(4s). In Mitteldistanz Chakra(+2).",
          "Ansturm(6s). In Mitteldistanz Chakra(+2)."
        ]
      },
      "S3_051": {
        "name": "Naruto Uzumaki",
        "ability": "Mantel des Dämonenfuchses",
        "descriptions": [
          "Ansturm(3s). Bei Einsatz Chakra(+2). Wenn diese Karte zum ersten Mal unter ihr Basis-Chakra fällt, Heilen(2).",
          "Ansturm(5s). Bei Einsatz Chakra(+2). Wenn diese Karte zum ersten Mal unter ihr Basis-Chakra fällt, Heilen(2)."
        ]
      },
      "S3_052": {
        "name": "Sasuke Uchiha",
        "ability": "Befreiung des Fluchmals",
        "descriptions": [
          "Wenn diese Karte zum ersten Mal Chakra erhält, zusätzlich Chakra(+2) erhalten.",
          "Wenn diese Karte zum ersten Mal Chakra erhält, zusätzlich Chakra(+4) erhalten."
        ]
      },
      "S3_053": {
        "name": "Kankuro",
        "ability": "Taktische Überlegenheit",
        "descriptions": [
          "Immer wenn sich Verbündete hinter Rivalen teleportieren, Chakra(+2) erhalten.",
          "Immer wenn sich Verbündete hinter Rivalen teleportieren, Chakra(+3) erhalten."
        ]
      },
      "S3_054": {
        "name": "Shikamaru Nara",
        "ability": "Schattenwürgen",
        "descriptions": [
          "Nähert sich eine gegnerische Karte, sie und diese Karte Festnageln(6s). Solange dieses Festnageln wirkt, verliert der Gegner alle 2 Sekunden 1 Chakra.",
          "Nähert sich eine gegnerische Karte, sie und diese Karte Festnageln(8s). Solange dieses Festnageln wirkt, verliert der Gegner alle 2 Sekunden 1 Chakra."
        ]
      },
      "S3_055": {
        "name": "Akamaru",
        "ability": "Markierung",
        "descriptions": [
          "Bei Einsatz alle Spur-Rivalen Verlangsamen(8s). Solange diese Verlangsamung aktiv ist, Schwächen(+1) auf verbündete Schwächen-Fähigkeiten, die auf betroffene Rivalen angewendet werden.",
          "Bei Einsatz alle Spur-Rivalen Verlangsamen(12s). Solange diese Verlangsamung aktiv ist, Schwächen(+1) auf verbündete Schwächen-Fähigkeiten, die auf betroffene Rivalen angewendet werden."
        ]
      },
      "S3_056": {
        "name": "Itachi Uchiha",
        "ability": "Gelassenheit",
        "descriptions": [
          "Erhält Chakra(+1) und Festnageln(2s) sich selbst, sooft eine Karte Fokus erhält.",
          "Erhält Chakra(+2) und Festnageln(4s) sich selbst, sooft eine Karte Fokus erhält."
        ]
      },
      "S3_057": {
        "name": "Jiraiya",
        "ability": "Erfahren",
        "descriptions": [
          "Ansturm(3s). Bei Begegnung die Spur Wechseln.",
          "Ansturm(4s). Bei Begegnung die Spur Wechseln."
        ]
      },
      "S3_058": {
        "name": "Jiraiya",
        "ability": "Nadel-Jizo",
        "descriptions": [
          "Wache(2). Wenn Wache auslöst, den auslösenden Rivalen Schwächen(2). Ignoriert Wache.",
          "Wache(3). Wenn Wache auslöst, den auslösenden Rivalen Schwächen(2). Ignoriert Wache."
        ]
      },
      "S3_059": {
        "name": "Orochimaru",
        "ability": "Erfahren",
        "descriptions": [
          "Ansturm(3s). Bei Begegnung Schwächen(1).",
          "Ansturm(4s). Bei Begegnung Schwächen(1)."
        ]
      },
      "S3_060": {
        "name": "Tsunade",
        "ability": "Die Fünfte",
        "descriptions": [
          "Bei Einsatz erhalten alle Verbündeten auf anderen Spuren Chakra(+1). Solange diese Karte aktiv ist, jeden Verbündeten Heilen(2), wenn er zum ersten Mal Geschwächt wird.",
          "Bei Einsatz erhalten alle Verbündeten auf anderen Spuren Chakra(+2). Solange diese Karte aktiv ist, jeden Verbündeten Heilen(2), wenn er zum ersten Mal Geschwächt wird."
        ]
      },
      "S3_061": {
        "name": "Tsunade",
        "ability": "Legendäres leichtes Ziel",
        "descriptions": [
          "Bei Einsatz 10% Chance auf Chakra(+6). Andernfalls Ansturm(3s).",
          "Bei Einsatz 10% Chance auf Chakra(+7). Andernfalls Ansturm(4s)."
        ]
      },
      "S3_062": {
        "name": "Tsunade",
        "ability": "Verzweifelte Heilung",
        "descriptions": [
          "Bei Einsatz den nächsten Spur-Verbündeten Heilen(2). Wenn ein Spur-Verbündeter zum ersten Mal aus beliebiger Quelle Chakra verliert, ihn Heilen(2).",
          "Bei Einsatz den nächsten Spur-Verbündeten Heilen(3). Wenn ein Spur-Verbündeter zum ersten Mal aus beliebiger Quelle Chakra verliert, ihn Heilen(3)."
        ]
      },
      "S3_063": {
        "name": "Gamabunta",
        "ability": "Kröten-Kenjutsu",
        "descriptions": [
          "Wenn sich eine gegnerische Karte nähert, spring auf sie und Schwächen(2). Erhält beim ersten Chakra-Gewinn Ansturm(+3s).",
          "Wenn sich eine gegnerische Karte nähert, spring auf sie und Schwächen(3). Erhält beim ersten Chakra-Gewinn Ansturm(+4s)."
        ]
      },
      "S3_064": {
        "name": "Kabuto Yakuchi",
        "ability": "Chakra-Skalpell",
        "descriptions": [
          "Ansturm(2s). Bei Begegnung Teleportieren hinter die gegnerische Karte und sie dauerhaft Festnageln.",
          "Ansturm(3s). Bei Begegnung Teleportieren hinter die gegnerische Karte und sie dauerhaft Festnageln."
        ]
      },
      "S3_065": {
        "name": "Kisame Hoshigaki",
        "ability": "Samehada-Wache",
        "descriptions": [
          "Wache(3). Wenn Wache auslöst, den auslösenden Rivalen Schwächen(1) und Chakra(+1) erhalten.",
          "Wache(4). Wenn Wache auslöst, den auslösenden Rivalen Schwächen(1) und Chakra(+1) erhalten."
        ]
      },
      "S3_066": {
        "name": "Jirobo",
        "ability": "Chakra-Entzug",
        "descriptions": [
          "Bei jeder Begegnung Chakra(+1) für diese Karte und die gegnerische Karte Schwächen(1).",
          "Bei jeder Begegnung Chakra(+1) für diese Karte und die gegnerische Karte Schwächen(2)."
        ]
      },
      "S3_067": {
        "name": "Sakon & Ukon",
        "ability": "Verfluchte Verschmelzung",
        "descriptions": [
          "Bei Begegnung Teleportieren hinter die gegnerische Karte, dann sie und diese Karte Festnageln(6s). Der Rivale verliert alle 2 Sekunden 1 Chakra, solange dieses Festnageln wirkt.",
          "Bei Begegnung Teleportieren hinter die gegnerische Karte, dann sie und diese Karte Festnageln(8s). Der Rivale verliert alle 2 Sekunden 1 Chakra, solange dieses Festnageln wirkt."
        ]
      },
      "S3_068": {
        "name": "Kurenai Yuhi",
        "ability": "Genjutsu-Finte",
        "descriptions": [
          "Bei Begegnung Teleportieren hinter die gegnerische Karte, sie Schwächen(2) und Verlangsamen(4s).",
          "Bei Begegnung Teleportieren hinter die gegnerische Karte, sie Schwächen(2) und Verlangsamen(8s)."
        ]
      },
      "S3_069": {
        "name": "Shizune",
        "ability": "Giftnebel",
        "descriptions": [
          "Bei Einsatz alle Karten in Mitteldistanz Verlangsamen(8s) und ihre Fähigkeiten deaktivieren. Sie verlieren alle 4 Sekunden 2 Chakra, solange diese Verlangsamung wirkt.",
          "Bei Einsatz alle Karten in Mitteldistanz Verlangsamen(12s) und ihre Fähigkeiten deaktivieren. Sie verlieren alle 4 Sekunden 2 Chakra, solange diese Verlangsamung wirkt."
        ]
      },
      "S3_070": {
        "name": "Akahoshi",
        "ability": "Skrupellos",
        "descriptions": [
          "Wache(1). Wenn Wache auslöst, den auslösenden Rivalen Schwächen(2). Wenn diese Karte zum ersten Mal Chakra verliert, einen zufälligen Verbündeten Schwächen(2) und Chakra(+2) sowie Wache(+1) erhalten.",
          "Wache(1). Wenn Wache auslöst, den auslösenden Rivalen Schwächen(2). Wenn diese Karte zum ersten Mal Chakra verliert, einen zufälligen Verbündeten Schwächen(2) und Chakra(+3) sowie Wache(+1) erhalten."
        ]
      },
      "S3_071": {
        "name": "Amachi",
        "ability": "Seeungeheuer",
        "descriptions": [
          "Bei Einsatz sich selbst Festnageln(6s). Solange festgenagelt, alle 3 Sekunden alle Spur-Rivalen Festnageln(3s) oder Verlangsamen(6s).",
          "Bei Einsatz sich selbst Festnageln(9s). Solange festgenagelt, alle 3 Sekunden alle Spur-Rivalen Festnageln(3s) oder Verlangsamen(6s)."
        ]
      },
      "S3_072": {
        "name": "Aoi Rokusho",
        "ability": "Raijin-Schwert",
        "descriptions": [
          "Wache(2). Bei Begegnung die gegnerische Karte Schwächen(1) und Festnageln(2s). Ignoriert Wache.",
          "Wache(2). Bei Begegnung die gegnerische Karte Schwächen(2) und Festnageln(4s). Ignoriert Wache."
        ]
      },
      "S3_073": {
        "name": "Sumaru",
        "ability": "Sternen-Chakra",
        "descriptions": [
          "Bei Einsatz Chakra(+1) und die Spur Wechseln, wenn Spur-Verbündete vorhanden sind. Bei Begegnung die gegnerische Karte Schwächen(2).",
          "Bei Einsatz Chakra(+1) und die Spur Wechseln, wenn Spur-Verbündete vorhanden sind. Bei Begegnung die gegnerische Karte Schwächen(3)."
        ]
      },
      "S3_074": {
        "name": "Naruto Uzumaki",
        "ability": "Rasengan",
        "descriptions": [
          "Bei Begegnung Schwächen(2) und Schieben(4). Entfernt alle Wache von der rivalisierenden Karte.",
          "Bei Begegnung Schwächen(3) und Schieben(5). Entfernt alle Wache von der rivalisierenden Karte."
        ]
      },
      "S3_075": {
        "name": "Naruto Uzumaki",
        "ability": "Einschwänzige Form",
        "descriptions": [
          "Bei jeder Begegnung Schwächen(1). Wenn diese Karte zum ersten Mal unter ihr Basis-Chakra fällt, sich selbst Heilen(3).",
          "Bei jeder Begegnung Schwächen(1). Wenn diese Karte zum ersten Mal unter ihr Basis-Chakra fällt, sich selbst Heilen(4)."
        ]
      },
      "S3_076": {
        "name": "Sasuke Uchiha",
        "ability": "Weiterentwickelte Vorhersage",
        "descriptions": [
          "Wache(3). Wenn Wache auslöst, Chakra(+1). Kann bei Begegnungen mit gegnerischen Karten mit 3 oder weniger Chakra nicht geschwächt werden.",
          "Wache(3). Wenn Wache auslöst, Chakra(+2). Kann bei Begegnungen mit gegnerischen Karten mit 3 oder weniger Chakra nicht geschwächt werden."
        ]
      },
      "S3_077": {
        "name": "Sasuke Uchiha",
        "ability": "Geflügelte Verteidigung",
        "descriptions": [
          "Wache(2). Bei Begegnung Schwächen(2). Wenn Wache auslöst, Ansturm(2s) erhalten und diese Fähigkeit wieder aktivieren.",
          "Wache(2). Bei Begegnung Schwächen(2). Wenn Wache auslöst, Ansturm(4s) erhalten und diese Fähigkeit wieder aktivieren."
        ]
      },
      "S3_078": {
        "name": "Gaara",
        "ability": "Shukakus Schild",
        "descriptions": [
          "Wache(3). Solange diese Karte aktiv ist, ignorieren die Spur-Verbündeten hinter ihr gegnerische Fähigkeitseffekte, verbrauchen aber die Wache dieser Karte.",
          "Wache(4). Solange diese Karte aktiv ist, ignorieren die Spur-Verbündeten hinter ihr gegnerische Fähigkeitseffekte, verbrauchen aber die Wache dieser Karte."
        ]
      },
      "S3_079": {
        "name": "Kiba Inuzuka",
        "ability": "Verwandlungskombo",
        "descriptions": [
          "Bei Einsatz die verbündeten Akamaru und Kiba zurückziehen und ihr Chakra auf diese Karte übertragen, dabei je Rückzug zusätzlich Chakra(+1) erhalten. Bei jeder Begegnung Schwächen(1).",
          "Bei Einsatz die verbündeten Akamaru und Kiba zurückziehen und ihr Chakra auf diese Karte übertragen, dabei je Rückzug zusätzlich Chakra(+2) erhalten. Bei jeder Begegnung Schwächen(1)."
        ]
      },
      "S3_080": {
        "name": "Rock Lee",
        "ability": "Trunkene Faust",
        "descriptions": [
          "Alle 10s Fokussieren(3s). Wenn der Fokus gelingt, zufällig Ansturm(2s), Wache(1) oder Chakra(+1) erhalten. Bei jeder Begegnung Schwächen(1).",
          "Alle 8s Fokussieren(3s). Wenn der Fokus gelingt, zufällig Ansturm(2s), Wache(1) oder Chakra(+1) erhalten. Bei jeder Begegnung Schwächen(1)."
        ]
      },
      "S3_081": {
        "name": "Temari",
        "ability": "Schneller Enthauptungstanz",
        "descriptions": [
          "Bei Einsatz Fokussieren(9s). Alle 3 Sekunden während des Fokus alle Rivalen in Mittel- und Weitdistanz Schwächen(1) und Schieben(2).",
          "Bei Einsatz Fokussieren(9s). Alle 3 Sekunden während des Fokus alle Rivalen in Mittel- und Weitdistanz Schwächen(1) und Schieben(4)."
        ]
      },
      "S3_082": {
        "name": "Itachi Uchiha",
        "ability": "Tsukuyomi-Armee",
        "descriptions": [
          "Solange diese Karte aktiv ist, Beschwöre bei jedem Festnageln gegnerischer Karten einen Klon dieser Karte auf eben dieser Spur mit Ansturm(4s) und verliere 1 Chakra. Klone können keine Basistreffer erzielen oder Chakra erhalten.",
          "Solange diese Karte aktiv ist, Beschwöre bei jedem Festnageln gegnerischer Karten einen Klon dieser Karte auf eben dieser Spur mit Ansturm(6s) und verliere 1 Chakra. Klone können keine Basistreffer erzielen oder Chakra erhalten."
        ]
      },
      "S3_083": {
        "name": "Itachi Uchiha",
        "ability": "Flucht aus Amaterasu",
        "descriptions": [
          "Wenn sich eine gegnerische Karte nähert, sie Brennen(10), dann die Spur Wechseln und 1 Chakra verlieren. Dieser Brenn-Effekt kann sich bei Berührung auf andere Karten ausbreiten und ignoriert Wache.",
          "Wenn sich eine gegnerische Karte nähert, sie Brennen(15), dann die Spur Wechseln und 1 Chakra verlieren. Dieser Brenn-Effekt kann sich bei Berührung auf andere Karten ausbreiten und ignoriert Wache."
        ]
      },
      "S3_084": {
        "name": "Jiraiya",
        "ability": "Krötenöl-Flammenwerfer",
        "descriptions": [
          "Bei Einsatz alle gegnerischen Karten Brennen(3), dann Fokussieren(8s). Während des Fokus Chakra(+1) erhalten, sooft Verbündete Brennen anwenden. Wenn der Fokus gelingt, alle gegnerischen Karten Brennen(4).",
          "Bei Einsatz alle gegnerischen Karten Brennen(3), dann Fokussieren(8s). Während des Fokus Chakra(+1) erhalten, sooft Verbündete Brennen anwenden. Wenn der Fokus gelingt, alle gegnerischen Karten Brennen(5)."
        ]
      },
      "S3_085": {
        "name": "Gamabunta",
        "ability": "Krötenöl-Kombo",
        "descriptions": [
          "Bei Einsatz alle Spur-Rivalen Brennen(3). Sind Rivalen bereits von Brennen betroffen, wird die verbleibende Brennen-Menge sofort ausgelöst.",
          "Bei Einsatz alle Spur-Rivalen Brennen(4). Sind Rivalen bereits von Brennen betroffen, wird die verbleibende Brennen-Menge sofort ausgelöst."
        ]
      },
      "S3_086": {
        "name": "Kidomaru",
        "ability": "Spinnenbogen",
        "descriptions": [
          "Bei Einsatz Fokussieren(12s). Alle 4 Sekunden während des Fokus den Rivalen mit dem höchsten Chakra in Weitdistanz Schwächen(2) und Festnageln(6s).",
          "Bei Einsatz Fokussieren(16s). Alle 4 Sekunden während des Fokus den Rivalen mit dem höchsten Chakra in Weitdistanz Schwächen(2) und Festnageln(6s)."
        ]
      },
      "S3_087": {
        "name": "Tayuya",
        "ability": "Dämonische Flöte",
        "descriptions": [
          "Bei Einsatz Chakra(+1). Solange diese Karte aktiv ist, laufen von Verbündeten angewendete Verlangsamungen nicht ab.",
          "Bei Einsatz Chakra(+2). Solange diese Karte aktiv ist, laufen von Verbündeten angewendete Verlangsamungen nicht ab."
        ]
      },
      "S3_088": {
        "name": "Kimimaro",
        "ability": "Lebende Waffe",
        "descriptions": [
          "Wache(3). Bei jeder Begegnung Schwächen(2). Die Spur Wechseln, wenn ein Rivale zum Rückzug gezwungen wird.",
          "Wache(5). Bei jeder Begegnung Schwächen(2). Die Spur Wechseln, wenn ein Rivale zum Rückzug gezwungen wird."
        ]
      },
      "S3_089": {
        "name": "Akahoshi",
        "ability": "Sternendrache",
        "descriptions": [
          "Bei Einsatz alle Spur-Rivalen Schieben(2), Schwächen(1) und Festnageln(4s).",
          "Bei Einsatz alle Spur-Rivalen Schieben(2), Schwächen(1) und Festnageln(8s)."
        ]
      },
      "S3_090": {
        "name": "Raiga Kurosuki",
        "ability": "Donnerdrachen-Tornado",
        "descriptions": [
          "Bei Einsatz Fokussieren(8s). Wenn der Fokus gelingt, alle Spur-Rivalen in Kurz- und Mitteldistanz Schwächen(3) und Schieben(2).",
          "Bei Einsatz Fokussieren(6s). Wenn der Fokus gelingt, alle Spur-Rivalen in Kurz- und Mitteldistanz Schwächen(3) und Schieben(2)."
        ]
      },
      "S3_091": {
        "name": "Sasuke Uchiha",
        "ability": "Schwarzes Chidori",
        "descriptions": [
          "Ansturm(4s). Springe zur ersten gegnerischen Karte in deiner Nähe, erhalte Chakra(+2) und Schwäche(3) sie. Schwäche(2) alle anderen Karten in der Nähe. Ignoriert Wache.",
          "Ansturm(5s). Springe zur ersten gegnerischen Karte in deiner Nähe, erhalte Chakra(+2) und Schwäche(4) sie. Schwäche(2) alle anderen Karten in der Nähe. Ignoriert Wache."
        ]
      },
      "S3_092": {
        "name": "Naruto Uzumaki",
        "ability": "Rasengan des Dämonenfuchses",
        "descriptions": [
          "Ansturm(4s). Springe zur ersten gegnerischen Karte in deiner Nähe, Schwäche(3) und Schiebe(2) sie. Schwäche(2) alle anderen Karten in der Nähe. Entfernt alle Wache der gegnerischen Karte.",
          "Ansturm(5s). Springe zur ersten gegnerischen Karte in deiner Nähe, Schwäche(4) und Schiebe(2) sie. Schwäche(2) alle anderen Karten in der Nähe. Entfernt alle Wache der gegnerischen Karte."
        ]
      },
      "S3_093": {
        "name": "Choji Akimichi",
        "ability": "Schmetterlingswut",
        "descriptions": [
          "Wache(3). Wenn Wache auslöst, Chakra(+2). Ist die auslösende gegnerische Karte in der Nähe, spring auf sie. Solange Wache verfügbar ist, bei jeder Begegnung Schwächen(2) und Schieben(1).",
          "Wache(3). Wenn Wache auslöst, Chakra(+3). Ist die auslösende gegnerische Karte in der Nähe, spring auf sie. Solange Wache verfügbar ist, bei jeder Begegnung Schwächen(2) und Schieben(1)."
        ]
      },
      "S3_094": {
        "name": "Gaara",
        "ability": "Sandtsunami",
        "descriptions": [
          "Bei Einsatz Fokussieren(6s). Alle 2 Sekunden während des Fokus alle gegnerischen Karten Schwächen(1) und Schieben(1). Haben sie 2 oder weniger Chakra, stattdessen Schwächen(2). Zwingt diese Karte eine andere zum Rückzug, sie Versiegeln(5s).",
          "Bei Einsatz Fokussieren(8s). Alle 2 Sekunden während des Fokus alle gegnerischen Karten Schwächen(1) und Schieben(1). Haben sie 3 oder weniger Chakra, stattdessen Schwächen(3). Zwingt diese Karte eine andere zum Rückzug, sie Versiegeln(5s)."
        ]
      },
      "S3_095": {
        "name": "Itachi Uchiha",
        "ability": "Tsukuyomi",
        "descriptions": [
          "Bei Einsatz die nächste gegnerische Karte Festnageln(12s), dann 1 Chakra verlieren. Hat die gegnerische Karte mehr als 1 Chakra, verliert sie pro Sekunde 1 Chakra. Sooft Verbündete gegnerische Karten festnageln, wird diese Fähigkeit für jeden betroffenen Rivalen erneut ausgelöst.",
          "Bei Einsatz die nächste gegnerische Karte Festnageln(16s), dann 1 Chakra verlieren. Hat die gegnerische Karte mehr als 1 Chakra, verliert sie pro Sekunde 1 Chakra. Sooft Verbündete gegnerische Karten festnageln, wird diese Fähigkeit für jeden betroffenen Rivalen erneut ausgelöst."
        ]
      },
      "S3_096": {
        "name": "Itachi Uchiha",
        "ability": "Blutbad",
        "descriptions": [
          "Wenn eine Karte auf derselben Spur eingesetzt wird, sie Schwächen(1) und Festnageln(10s). Hat sie 3 oder weniger Chakra, stattdessen Schwächen(3). Danach die Spur Wechseln.",
          "Wenn eine Karte auf derselben Spur eingesetzt wird, sie Schwächen(2) und Festnageln(10s). Hat sie 4 oder weniger Chakra, stattdessen Schwächen(4). Danach die Spur Wechseln."
        ]
      },
      "S3_097": {
        "name": "Tsunade",
        "ability": "Mitotische Regeneration",
        "descriptions": [
          "Wenn diese Karte zum ersten Mal unter ihr Basis-Chakra fällt, sich bis zum Basis-Chakra Heilen und Chakra(+4) erhalten. In den nächsten 10 Sekunden gegnerische Fähigkeiten ignorieren und nach jeder Begegnung Heilen(4). Beim Rückzug das Basis-Chakra dauerhaft um 1 senken.",
          "Wenn diese Karte zum ersten Mal unter ihr Basis-Chakra fällt, sich bis zum Basis-Chakra Heilen und Chakra(+5) erhalten. In den nächsten 10 Sekunden gegnerische Fähigkeiten ignorieren und nach jeder Begegnung Heilen(4). Beim Rückzug das Basis-Chakra dauerhaft um 1 senken."
        ]
      },
      "S3_098": {
        "name": "Sakon & Ukon",
        "ability": "Synchronisierte Verteidigung",
        "descriptions": [
          "Wird als Sakon und Ukon auf getrennten Spuren mit Wache(2) eingesetzt. Sooft die Wache eines Verbündeten auslöst, erhalten beide Karten Chakra(+1).",
          "Wird als Sakon und Ukon auf getrennten Spuren mit Wache(4) eingesetzt. Sooft die Wache eines Verbündeten auslöst, erhalten beide Karten Chakra(+1)."
        ]
      },
      "S3_099": {
        "name": "Tayuya",
        "ability": "Doki-Beschwörung",
        "descriptions": [
          "Bei Einsatz Fokussieren(8s). Wenn der Fokus gelingt, auf jeder Spur einen Doki-Dämon Beschwören. Sooft du andere Karten Beschwörest, erhalten sie Chakra(+1). Ignoriert alle gegnerischen Fähigkeiten und Begegnungen, solange die Dämonen aktiv sind.",
          "Bei Einsatz Fokussieren(6s). Wenn der Fokus gelingt, auf jeder Spur einen Doki-Dämon Beschwören. Sooft du andere Karten Beschwörest, erhalten sie Chakra(+1). Ignoriert alle gegnerischen Fähigkeiten und Begegnungen, solange die Dämonen aktiv sind."
        ]
      },
      "S3_100": {
        "name": "Kimimaro",
        "ability": "Unerschütterliche Treue",
        "descriptions": [
          "Bei Einsatz Chakra(+6) und Ansturm(5s) erhalten. Dauerhafte Wache, solange Ansturm aktiv ist. Bei jeder Begegnung sich Schwächen(1) und die gegnerische Karte Schwächen(3). Beim Zurückziehen alle Karten Schwächen(2). Kann nicht von verbündeten Fähigkeiten beeinflusst werden.",
          "Bei Einsatz Chakra(+8) und Ansturm(6s) erhalten. Dauerhafte Wache, solange Ansturm aktiv ist. Bei jeder Begegnung sich Schwächen(1) und die gegnerische Karte Schwächen(3). Beim Zurückziehen alle Karten Schwächen(2). Kann nicht von verbündeten Fähigkeiten beeinflusst werden."
        ]
      }
    },
    "ruleNotes": {
      "S2_041": "{allies} Verbündete des erforderlichen Charakters; die Deckzusammensetzung wird nicht geprüft.",
      "S1_004": "Begegnungseffekte über {activations} Begegnungen angewendet.",
      "S1_005": "Begegnungseffekte über {activations} Begegnungen angewendet.",
      "S1_008": "Begegnungseffekte über {activations} Begegnungen angewendet.",
      "S1_010": "Begegnungseffekte über {activations} Begegnungen angewendet.",
      "S1_023": "Begegnungseffekte über {activations} Begegnungen angewendet.",
      "S1_030": "Begegnungseffekte über {activations} Begegnungen angewendet.",
      "S1_035": "Begegnungseffekte über {activations} Begegnungen angewendet.",
      "S2_007": "Begegnungseffekte über {activations} Begegnungen angewendet.",
      "S2_025": "Begegnungseffekte über {activations} Begegnungen angewendet.",
      "S2_030": "Begegnungseffekte über {activations} Begegnungen angewendet.",
      "S2_042": "Begegnungseffekte über {activations} Begegnungen angewendet.",
      "S2_052": "Begegnungseffekte über {activations} Begegnungen angewendet.",
      "S2_053": "Begegnungseffekte über {activations} Begegnungen angewendet.",
      "S2_063": "Begegnungseffekte über {activations} Begegnungen angewendet.",
      "S3_004": "Begegnungseffekte über {activations} Begegnungen angewendet.",
      "S3_023": "Begegnungseffekte über {activations} Begegnungen angewendet.",
      "S3_024": "Begegnungseffekte über {activations} Begegnungen angewendet.",
      "S3_034": "Begegnungseffekte über {activations} Begegnungen angewendet.",
      "S3_044": "Eine Begegnung vor 20s; das spätere Zurücksetzen auf Chakra(1) zählt nicht zum Spitzenwert. Effekte ohne ausdrückliche Wiederholung gelten einmal.",
      "S3_047": "Begegnungseffekte über {activations} Begegnungen angewendet.",
      "S3_059": "Begegnungseffekte über {activations} Begegnungen angewendet.",
      "S3_068": "Begegnungseffekte über {activations} Begegnungen angewendet.",
      "S3_072": "Begegnungseffekte über {activations} Begegnungen angewendet.",
      "S3_074": "Begegnungseffekte über {activations} Begegnungen angewendet.",
      "S1_003": "Eine neue Einheit mit dem angegebenen Chakra.",
      "S1_019": "{allies} Ziele/Ereignisse der angegebenen Gruppe; günstige Bedingungen.",
      "S1_046": "{allies} Ziele/Ereignisse der angegebenen Gruppe; günstige Bedingungen.",
      "S1_062": "{allies} Ziele/Ereignisse der angegebenen Gruppe; günstige Bedingungen.",
      "S1_073": "{allies} Ziele/Ereignisse der angegebenen Gruppe; günstige Bedingungen.",
      "S2_015": "{allies} Ziele/Ereignisse der angegebenen Gruppe; günstige Bedingungen.",
      "S2_022": "{allies} Ziele/Ereignisse der angegebenen Gruppe; günstige Bedingungen.",
      "S2_073": "{allies} Ziele/Ereignisse der angegebenen Gruppe; günstige Bedingungen.",
      "S2_083": "{allies} Ziele/Ereignisse der angegebenen Gruppe; günstige Bedingungen.",
      "S3_002": "{allies} Ziele/Ereignisse der angegebenen Gruppe; günstige Bedingungen.",
      "S1_020": "Schaden an einem Verbündeten wird abgezogen.",
      "S1_021": "3 Verbündete.",
      "S1_022": "3 Verbündete.",
      "S1_024": "Die für das Level angegebene Anzahl Verbündeter.",
      "S1_033": "Ein Bonus: Akamaru oder diese Karte. Das Holen aus dem Deck verdoppelt die Basisstärke nicht.",
      "S1_038": "Die für das Level angegebene Anzahl Verbündeter.",
      "S1_053": "{enemies} getroffene Gegner.",
      "S1_069": "{enemies} getroffene Gegner.",
      "S1_074": "{enemies} getroffene Gegner.",
      "S1_079": "{enemies} getroffene Gegner.",
      "S1_081": "{enemies} getroffene Gegner.",
      "S2_008": "{enemies} getroffene Gegner.",
      "S2_076": "{enemies} Gegner in einer Begegnung. Effekte ohne ausdrückliche Wiederholung gelten einmal.",
      "S2_088": "{enemies} getroffene Gegner.",
      "S3_017": "{enemies} getroffene Gegner.",
      "S3_031": "{enemies} Gegner in einer Begegnung. Effekte ohne ausdrückliche Wiederholung gelten einmal.",
      "S3_089": "{enemies} getroffene Gegner.",
      "S3_090": "{enemies} getroffene Gegner.",
      "S1_056": "Die Option mit Zahlenbonus wird verwendet. Das Holen von Hiruzen addiert seine Stärke nicht erneut.",
      "S1_060": "Aus dem Deck geholte Karte: Ihre Stärke ist bereits enthalten, daher zählt keine neue Einheit.",
      "S1_083": "Beste bedingte Option: {enemies} Gegner und {allies} Verbündete, ohne Nettogewinn.",
      "S2_002": "{enemies} Gegner mit höherem Chakra.",
      "S2_016": "Drei neue Einheiten mit Chakra(1); das Wiederverwenden der Karte wird nicht simuliert.",
      "S2_018": "Ein Verbündeter für jeden der beiden Namen; erforderliche Identitäten werden nicht geprüft.",
      "S2_019": "Ein Verbündeter für jeden der beiden Namen; erforderliche Identitäten werden nicht geprüft.",
      "S2_020": "Ein Verbündeter für jeden der beiden Namen; erforderliche Identitäten werden nicht geprüft.",
      "S2_032": "Bonus für die geholte Kröte; ihre Stärke ist bereits im Deck enthalten.",
      "S2_037": "Für Anbu ist kein Chakra angegeben: Die Beschwörung wird nicht beziffert.",
      "S2_038": "Bonusoption bei geringem Chakra; die aus dem Deck beschworene Karte wird nicht doppelt gezählt.",
      "S2_039": "Je nach Level ein oder zwei Gegner.",
      "S2_040": "{enemies} Gegner und {allies} Verbündete beim Rückzug getroffen; kein Nettogewinn.",
      "S2_054": "Halbiert gegnerisches Chakra anhand des für das Ziel eingestellten Chakra-Werts.",
      "S2_058": "Vorübergehende Kontrolle über einen Gegner wird nicht in Stärke umgerechnet.",
      "S2_064": "Vorübergehende Kontrolle über einen Gegner wird nicht in Stärke umgerechnet.",
      "S2_062": "Je nach Level ein oder zwei Gegner.",
      "S2_067": "Ausdrückliche Zielzahl; ein Einsatz und ein Rückzug.",
      "S2_070": "Eine Begegnung; Bonus für {allies} Verbündete einmal beim Rückzug. Effekte ohne ausdrückliche Wiederholung gelten einmal.",
      "S2_071": "3 Treffer in einer Begegnung. Effekte ohne ausdrückliche Wiederholung gelten einmal.",
      "S2_072": "{enemies} Gegner und {allies} Verbündete: Verbündetenschaden gleicht Gegnerschaden aus.",
      "S2_080": "{enemies} Gegner und {allies} Verbündete: Verbündetenschaden gleicht Gegnerschaden aus.",
      "S2_074": "{enemies} nahe Gegner in einer Begegnung. Effekte ohne ausdrückliche Wiederholung gelten einmal.",
      "S2_077": "Kopie einer verbündeten Karte ohne zusätzliche Stärke für die Decksumme.",
      "S2_086": "Schaden an beiden Verbündeten wird abgezogen; das Holen aus dem Deck wird nicht doppelt gezählt und Opfer werden nicht simuliert.",
      "S2_089": "Brennen wird als Gesamtschaden in Höhe seines Werts behandelt.",
      "S2_091": "Einmaliger Bonus. Der Basisanstieg beim Rückzug gilt für das nächste Leben und wird nicht addiert.",
      "S2_097": "Zwei getrennte Ereignisse, beide gegen {enemies} Gegner; Brennen zählt als Gesamtschaden.",
      "S3_027": "Neue Tonton und Bonus für Tsunade; Tsunades Anwesenheit und Überleben werden nicht simuliert.",
      "S3_028": "Neuer Kuromaru und Bonus für den nächsten Ninjahund.",
      "S3_036": "{allies} Verbündete erleiden 1 Schaden; diese Karte erhält für jeden 2.",
      "S3_041": "Zwei Gegner.",
      "S3_043": "Bonus für den nächsten Sasuke und eine spätere Heilung.",
      "S3_051": "Anfangsbonus und eine Heilung.",
      "S3_060": "Die eingestellten Verbündeten stehen annahmegemäß auf anderen Spuren und werden erstmals getroffen: ein Bonus und eine Heilung pro Verbündetem.",
      "S3_062": "Eine anfängliche Heilung und die erste reaktive Heilung.",
      "S3_073": "Anfangsbonus und Schaden in einer Begegnung. Effekte ohne ausdrückliche Wiederholung gelten einmal.",
      "S3_085": "{enemies} Gegner; vorhandenes Brennen wird ohne bekannten Wert nicht gezählt.",
      "S3_091": "Erstes Ziel, Bonus und Schaden an 5 weiteren Gegnern und {allies} Verbündeten. Die Formulierung „andere Karten“ ist mehrdeutig.",
      "S3_092": "Das erste Ziel wird getrennt getroffen; Schaden an anderen Karten schließt es aus und umfasst alle eingestellten Verbündeten.",
      "S3_039": "Günstige Umwandlung des verbleibenden anfänglichen Ansturms: 2/3 Chakra auf Level 1/2, maximal 3; kein externer Bonus simuliert."
    },
    "calculation": {
      "effectC": "Chakra-Bonus",
      "effectW": "Schwächen",
      "effectH": "Heilen",
      "effectB": "Brennen pro Ziel",
      "effectK": "beschworenes Chakra",
      "amount": "{value} {effect}",
      "burnTotal": "{value} Brennen pro Ziel, Gesamtdauer durch gegnerisches Chakra begrenzt",
      "copy": "{value} Chakra der Kopie",
      "restore": "{value} Heilung von 1 Chakra bis zum Basis-Chakra",
      "rush": "{value} Chakra aus verbleibendem Ansturm (maximal 3)",
      "enemies": {
        "one": "{value} Gegner",
        "other": "{value} Gegner"
      },
      "otherEnemies": "{value} weitere Gegner, ohne das erste Ziel",
      "allies": {
        "one": "{value} Verbündeter",
        "other": "{value} Verbündete"
      },
      "first": "{value} erste Aktivierung",
      "remaining": {
        "one": "{value} weitere Aktivierung",
        "other": "{value} weitere Aktivierungen"
      },
      "activations": {
        "one": "{value} Aktivierung",
        "other": "{value} Aktivierungen"
      },
      "enemyChakra": "{value} gegnerisches Chakra",
      "targets": {
        "one": "{value} Ziel",
        "other": "{value} Ziele"
      },
      "drain": "{value} entferntes Chakra, ohne unter 1 zu fallen",
      "removable": "{value} entfernbares Chakra",
      "bestBranch": "beste Option: {label}",
      "unquantified": "Der Zahlenbeitrag wurde noch nicht berechnet.",
      "repeated": "Effekt über {activations} Aktivierungen angewendet.",
      "once": "Begegnungseffekt einmal gezählt; nur ausdrücklich bei jeder Begegnung geltende Effekte werden wiederholt.",
      "favourable": "Günstige Bedingungen werden angenommen. Synergien mit anderen Karten werden nicht simuliert.",
      "tactical": "Taktischer Effekt ohne zahlenmäßigen Chakra-Bonus, Schaden oder Heilung.",
      "halving": "Die Halbierung verwendet das eingestellte gegnerische Chakra; die genaue Rundung im Spiel ist noch nicht bestätigt.",
      "burnNote": "Brennen: betroffene Ziele × min(Dauer in Sekunden, gegnerisches Chakra). Die Ausbreitung ist auf die eingestellten gegnerischen Ziele begrenzt; mehrere Anwendungen zählen dieselben Chakra-Punkte nicht doppelt.",
      "allCards": "Effekt auf alle Karten: {enemies} Gegner und {allies} Verbündete. Verbündetenschaden ist pro Anwendung durch das verbündete Chakra begrenzt und verringert die Stärke.",
      "ebisu": "Bonus und Abzüge verwenden die eingestellte Zahl der Verbündeten; das Überleben der Karte wird nicht simuliert."
    },
    "errors": {
      "invalidJson": "Die Datei enthält kein gültiges Deck-JSON.",
      "invalidDeck": "Ungültige Deckdatei.",
      "invalidCards": "Prüfe Karten, Duplikate und Level in der Datei.",
      "invalidOptions": "Ungültige Berechnungsoptionen.",
      "invalidValues": "Ungültige Annahmewerte.",
      "invalidOverrides": "Ungültige individuelle Karteneinstellungen.",
      "missingCard": "Die Annahmen beziehen sich auf eine Karte außerhalb des Decks.",
      "fileTooLarge": "Die Datei ist zu groß.",
      "importFailed": "Das Deck konnte nicht importiert werden.",
      "invalidRule": "Ungültige Regel: {id}, Level {level}, {factor}",
      "invalidFactor": "Ungültiger Faktor: {factor}"
    },
    "normalizations": []
  }
};
