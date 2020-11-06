const common = "\
    //===========================================================================\r\n\
// Blizzard.j ( define Jass2 functions that need to be in every map script )\r\n\
//===========================================================================\r\n\
\r\n\
\r\n\
globals\r\n\
    //-----------------------------------------------------------------------\r\n\
    // Constants\r\n\
    //\r\n\
\r\n\
    // Misc constants\r\n\
    constant real      bj_PI                            = 3.14159\r\n\
    constant real      bj_E                             = 2.71828\r\n\
    constant real      bj_CELLWIDTH                     = 128.0\r\n\
    constant real      bj_CLIFFHEIGHT                   = 128.0\r\n\
    constant real      bj_UNIT_FACING                   = 270.0\r\n\
    constant real      bj_RADTODEG                      = 180.0/bj_PI\r\n\
    constant real      bj_DEGTORAD                      = bj_PI/180.0\r\n\
    constant real      bj_TEXT_DELAY_QUEST              = 20.00\r\n\
    constant real      bj_TEXT_DELAY_QUESTUPDATE        = 20.00\r\n\
    constant real      bj_TEXT_DELAY_QUESTDONE          = 20.00\r\n\
    constant real      bj_TEXT_DELAY_QUESTFAILED        = 20.00\r\n\
    constant real      bj_TEXT_DELAY_QUESTREQUIREMENT   = 20.00\r\n\
    constant real      bj_TEXT_DELAY_MISSIONFAILED      = 20.00\r\n\
    constant real      bj_TEXT_DELAY_ALWAYSHINT         = 12.00\r\n\
    constant real      bj_TEXT_DELAY_HINT               = 12.00\r\n\
    constant real      bj_TEXT_DELAY_SECRET             = 10.00\r\n\
    constant real      bj_TEXT_DELAY_UNITACQUIRED       = 15.00\r\n\
    constant real      bj_TEXT_DELAY_UNITAVAILABLE      = 10.00\r\n\
    constant real      bj_TEXT_DELAY_ITEMACQUIRED       = 10.00\r\n\
    constant real      bj_TEXT_DELAY_WARNING            = 12.00\r\n\
    constant real      bj_QUEUE_DELAY_QUEST             =  5.00\r\n\
    constant real      bj_QUEUE_DELAY_HINT              =  5.00\r\n\
    constant real      bj_QUEUE_DELAY_SECRET            =  3.00\r\n\
    constant real      bj_HANDICAP_EASY                 = 60.00\r\n\
    constant real      bj_GAME_STARTED_THRESHOLD        =  0.01\r\n\
    constant real      bj_WAIT_FOR_COND_MIN_INTERVAL    =  0.10\r\n\
    constant real      bj_POLLED_WAIT_INTERVAL          =  0.10\r\n\
    constant real      bj_POLLED_WAIT_SKIP_THRESHOLD    =  2.00\r\n\
\r\n\
    // Game constants\r\n\
    constant integer   bj_MAX_INVENTORY                 =   6\r\n\
    constant integer   bj_MAX_PLAYERS                   =  12\r\n\
    constant integer   bj_PLAYER_NEUTRAL_VICTIM         =  13\r\n\
    constant integer   bj_PLAYER_NEUTRAL_EXTRA          =  14\r\n\
    constant integer   bj_MAX_PLAYER_SLOTS              =  16\r\n\
    constant integer   bj_MAX_SKELETONS                 =  25\r\n\
    constant integer   bj_MAX_STOCK_ITEM_SLOTS          =  11\r\n\
    constant integer   bj_MAX_STOCK_UNIT_SLOTS          =  11\r\n\
    constant integer   bj_MAX_ITEM_LEVEL                =  10\r\n\
\r\n\
    // Ideally these would be looked up from Units/MiscData.txt,\r\n\
    // but there is currently no script functionality exposed to do that\r\n\
    constant real      bj_TOD_DAWN                      = 6.00\r\n\
    constant real      bj_TOD_DUSK                      = 18.00\r\n\
\r\n\
    // Melee game settings:\r\n\
    //   - Starting Time of Day (TOD)\r\n\
    //   - Starting Gold\r\n\
    //   - Starting Lumber\r\n\
    //   - Starting Hero Tokens (free heroes)\r\n\
    //   - Max heroes allowed per player\r\n\
    //   - Max heroes allowed per hero type\r\n\
    //   - Distance from start loc to search for nearby mines\r\n\
    //\r\n\
    constant real      bj_MELEE_STARTING_TOD            = 8.00\r\n\
    constant integer   bj_MELEE_STARTING_GOLD_V0        = 750\r\n\
    constant integer   bj_MELEE_STARTING_GOLD_V1        = 500\r\n\
    constant integer   bj_MELEE_STARTING_LUMBER_V0      = 200\r\n\
    constant integer   bj_MELEE_STARTING_LUMBER_V1      = 150\r\n\
    constant integer   bj_MELEE_STARTING_HERO_TOKENS    = 1\r\n\
    constant integer   bj_MELEE_HERO_LIMIT              = 3\r\n\
    constant integer   bj_MELEE_HERO_TYPE_LIMIT         = 1\r\n\
    constant real      bj_MELEE_MINE_SEARCH_RADIUS      = 2000\r\n\
    constant real      bj_MELEE_CLEAR_UNITS_RADIUS      = 1500\r\n\
    constant real      bj_MELEE_CRIPPLE_TIMEOUT         = 120.00\r\n\
    constant real      bj_MELEE_CRIPPLE_MSG_DURATION    = 20.00\r\n\
    constant integer   bj_MELEE_MAX_TWINKED_HEROES_V0   = 3\r\n\
    constant integer   bj_MELEE_MAX_TWINKED_HEROES_V1   = 1\r\n\
\r\n\
    // Delay between a creep's death and the time it may drop an item.\r\n\
    constant real      bj_CREEP_ITEM_DELAY              = 0.50\r\n\
\r\n\
    // Timing settings for Marketplace inventories.\r\n\
    constant real      bj_STOCK_RESTOCK_INITIAL_DELAY   = 120\r\n\
    constant real      bj_STOCK_RESTOCK_INTERVAL        = 30\r\n\
    constant integer   bj_STOCK_MAX_ITERATIONS          = 20\r\n\
\r\n\
    // Max events registered by a single \"dest dies in region\" event.\r\n\
    constant integer   bj_MAX_DEST_IN_REGION_EVENTS     = 64\r\n\
\r\n\
    // Camera settings\r\n\
    constant integer   bj_CAMERA_MIN_FARZ               = 100\r\n\
    constant integer   bj_CAMERA_DEFAULT_DISTANCE       = 1650\r\n\
    constant integer   bj_CAMERA_DEFAULT_FARZ           = 5000\r\n\
    constant integer   bj_CAMERA_DEFAULT_AOA            = 304\r\n\
    constant integer   bj_CAMERA_DEFAULT_FOV            = 70\r\n\
    constant integer   bj_CAMERA_DEFAULT_ROLL           = 0\r\n\
    constant integer   bj_CAMERA_DEFAULT_ROTATION       = 90\r\n\
\r\n\
    // Rescue\r\n\
    constant real      bj_RESCUE_PING_TIME              = 2.00\r\n\
\r\n\
    // Transmission behavior settings\r\n\
    constant real      bj_NOTHING_SOUND_DURATION        = 5.00\r\n\
    constant real      bj_TRANSMISSION_PING_TIME        = 1.00\r\n\
    constant integer   bj_TRANSMISSION_IND_RED          = 255\r\n\
    constant integer   bj_TRANSMISSION_IND_BLUE         = 255\r\n\
    constant integer   bj_TRANSMISSION_IND_GREEN        = 255\r\n\
    constant integer   bj_TRANSMISSION_IND_ALPHA        = 255\r\n\
    constant real      bj_TRANSMISSION_PORT_HANGTIME    = 1.50\r\n\
\r\n\
    // Cinematic mode settings\r\n\
    constant real      bj_CINEMODE_INTERFACEFADE        = 0.50\r\n\
    constant gamespeed bj_CINEMODE_GAMESPEED            = MAP_SPEED_NORMAL\r\n\
\r\n\
    // Cinematic mode volume levels\r\n\
    constant real      bj_CINEMODE_VOLUME_UNITMOVEMENT  = 0.40\r\n\
    constant real      bj_CINEMODE_VOLUME_UNITSOUNDS    = 0.00\r\n\
    constant real      bj_CINEMODE_VOLUME_COMBAT        = 0.40\r\n\
    constant real      bj_CINEMODE_VOLUME_SPELLS        = 0.40\r\n\
    constant real      bj_CINEMODE_VOLUME_UI            = 0.00\r\n\
    constant real      bj_CINEMODE_VOLUME_MUSIC         = 0.55\r\n\
    constant real      bj_CINEMODE_VOLUME_AMBIENTSOUNDS = 1.00\r\n\
    constant real      bj_CINEMODE_VOLUME_FIRE          = 0.60\r\n\
\r\n\
    // Speech mode volume levels\r\n\
    constant real      bj_SPEECH_VOLUME_UNITMOVEMENT    = 0.25\r\n\
    constant real      bj_SPEECH_VOLUME_UNITSOUNDS      = 0.00\r\n\
    constant real      bj_SPEECH_VOLUME_COMBAT          = 0.25\r\n\
    constant real      bj_SPEECH_VOLUME_SPELLS          = 0.25\r\n\
    constant real      bj_SPEECH_VOLUME_UI              = 0.00\r\n\
    constant real      bj_SPEECH_VOLUME_MUSIC           = 0.55\r\n\
    constant real      bj_SPEECH_VOLUME_AMBIENTSOUNDS   = 1.00\r\n\
    constant real      bj_SPEECH_VOLUME_FIRE            = 0.60\r\n\
\r\n\
    // Smart pan settings\r\n\
    constant real      bj_SMARTPAN_TRESHOLD_PAN         = 500\r\n\
    constant real      bj_SMARTPAN_TRESHOLD_SNAP        = 3500\r\n\
\r\n\
    // QueuedTriggerExecute settings\r\n\
    constant integer   bj_MAX_QUEUED_TRIGGERS           = 100\r\n\
    constant real      bj_QUEUED_TRIGGER_TIMEOUT        = 180.00\r\n\
\r\n\
    // Campaign indexing constants\r\n\
    constant integer   bj_CAMPAIGN_INDEX_T        = 0\r\n\
    constant integer   bj_CAMPAIGN_INDEX_H        = 1\r\n\
    constant integer   bj_CAMPAIGN_INDEX_U        = 2\r\n\
    constant integer   bj_CAMPAIGN_INDEX_O        = 3\r\n\
    constant integer   bj_CAMPAIGN_INDEX_N        = 4\r\n\
    constant integer   bj_CAMPAIGN_INDEX_XN       = 5\r\n\
    constant integer   bj_CAMPAIGN_INDEX_XH       = 6\r\n\
    constant integer   bj_CAMPAIGN_INDEX_XU       = 7\r\n\
    constant integer   bj_CAMPAIGN_INDEX_XO       = 8\r\n\
\r\n\
    // Campaign offset constants (for mission indexing)\r\n\
    constant integer   bj_CAMPAIGN_OFFSET_T       = 0\r\n\
    constant integer   bj_CAMPAIGN_OFFSET_H       = 1\r\n\
    constant integer   bj_CAMPAIGN_OFFSET_U       = 2\r\n\
    constant integer   bj_CAMPAIGN_OFFSET_O       = 3\r\n\
    constant integer   bj_CAMPAIGN_OFFSET_N       = 4\r\n\
    constant integer   bj_CAMPAIGN_OFFSET_XN      = 0\r\n\
    constant integer   bj_CAMPAIGN_OFFSET_XH      = 1\r\n\
    constant integer   bj_CAMPAIGN_OFFSET_XU      = 2\r\n\
    constant integer   bj_CAMPAIGN_OFFSET_XO      = 3\r\n\
\r\n\
    // Mission indexing constants\r\n\
    // Tutorial\r\n\
    constant integer   bj_MISSION_INDEX_T00       = bj_CAMPAIGN_OFFSET_T * 1000 + 0\r\n\
    constant integer   bj_MISSION_INDEX_T01       = bj_CAMPAIGN_OFFSET_T * 1000 + 1\r\n\
    // Human\r\n\
    constant integer   bj_MISSION_INDEX_H00       = bj_CAMPAIGN_OFFSET_H * 1000 + 0\r\n\
    constant integer   bj_MISSION_INDEX_H01       = bj_CAMPAIGN_OFFSET_H * 1000 + 1\r\n\
    constant integer   bj_MISSION_INDEX_H02       = bj_CAMPAIGN_OFFSET_H * 1000 + 2\r\n\
    constant integer   bj_MISSION_INDEX_H03       = bj_CAMPAIGN_OFFSET_H * 1000 + 3\r\n\
    constant integer   bj_MISSION_INDEX_H04       = bj_CAMPAIGN_OFFSET_H * 1000 + 4\r\n\
    constant integer   bj_MISSION_INDEX_H05       = bj_CAMPAIGN_OFFSET_H * 1000 + 5\r\n\
    constant integer   bj_MISSION_INDEX_H06       = bj_CAMPAIGN_OFFSET_H * 1000 + 6\r\n\
    constant integer   bj_MISSION_INDEX_H07       = bj_CAMPAIGN_OFFSET_H * 1000 + 7\r\n\
    constant integer   bj_MISSION_INDEX_H08       = bj_CAMPAIGN_OFFSET_H * 1000 + 8\r\n\
    constant integer   bj_MISSION_INDEX_H09       = bj_CAMPAIGN_OFFSET_H * 1000 + 9\r\n\
    constant integer   bj_MISSION_INDEX_H10       = bj_CAMPAIGN_OFFSET_H * 1000 + 10\r\n\
    constant integer   bj_MISSION_INDEX_H11       = bj_CAMPAIGN_OFFSET_H * 1000 + 11\r\n\
    // Undead\r\n\
    constant integer   bj_MISSION_INDEX_U00       = bj_CAMPAIGN_OFFSET_U * 1000 + 0\r\n\
    constant integer   bj_MISSION_INDEX_U01       = bj_CAMPAIGN_OFFSET_U * 1000 + 1\r\n\
    constant integer   bj_MISSION_INDEX_U02       = bj_CAMPAIGN_OFFSET_U * 1000 + 2\r\n\
    constant integer   bj_MISSION_INDEX_U03       = bj_CAMPAIGN_OFFSET_U * 1000 + 3\r\n\
    constant integer   bj_MISSION_INDEX_U05       = bj_CAMPAIGN_OFFSET_U * 1000 + 4\r\n\
    constant integer   bj_MISSION_INDEX_U07       = bj_CAMPAIGN_OFFSET_U * 1000 + 5\r\n\
    constant integer   bj_MISSION_INDEX_U08       = bj_CAMPAIGN_OFFSET_U * 1000 + 6\r\n\
    constant integer   bj_MISSION_INDEX_U09       = bj_CAMPAIGN_OFFSET_U * 1000 + 7\r\n\
    constant integer   bj_MISSION_INDEX_U10       = bj_CAMPAIGN_OFFSET_U * 1000 + 8\r\n\
    constant integer   bj_MISSION_INDEX_U11       = bj_CAMPAIGN_OFFSET_U * 1000 + 9\r\n\
    // Orc\r\n\
    constant integer   bj_MISSION_INDEX_O00       = bj_CAMPAIGN_OFFSET_O * 1000 + 0\r\n\
    constant integer   bj_MISSION_INDEX_O01       = bj_CAMPAIGN_OFFSET_O * 1000 + 1\r\n\
    constant integer   bj_MISSION_INDEX_O02       = bj_CAMPAIGN_OFFSET_O * 1000 + 2\r\n\
    constant integer   bj_MISSION_INDEX_O03       = bj_CAMPAIGN_OFFSET_O * 1000 + 3\r\n\
    constant integer   bj_MISSION_INDEX_O04       = bj_CAMPAIGN_OFFSET_O * 1000 + 4\r\n\
    constant integer   bj_MISSION_INDEX_O05       = bj_CAMPAIGN_OFFSET_O * 1000 + 5\r\n\
    constant integer   bj_MISSION_INDEX_O06       = bj_CAMPAIGN_OFFSET_O * 1000 + 6\r\n\
    constant integer   bj_MISSION_INDEX_O07       = bj_CAMPAIGN_OFFSET_O * 1000 + 7\r\n\
    constant integer   bj_MISSION_INDEX_O08       = bj_CAMPAIGN_OFFSET_O * 1000 + 8\r\n\
    constant integer   bj_MISSION_INDEX_O09       = bj_CAMPAIGN_OFFSET_O * 1000 + 9\r\n\
    constant integer   bj_MISSION_INDEX_O10       = bj_CAMPAIGN_OFFSET_O * 1000 + 10\r\n\
    // Night Elf\r\n\
    constant integer   bj_MISSION_INDEX_N00       = bj_CAMPAIGN_OFFSET_N * 1000 + 0\r\n\
    constant integer   bj_MISSION_INDEX_N01       = bj_CAMPAIGN_OFFSET_N * 1000 + 1\r\n\
    constant integer   bj_MISSION_INDEX_N02       = bj_CAMPAIGN_OFFSET_N * 1000 + 2\r\n\
    constant integer   bj_MISSION_INDEX_N03       = bj_CAMPAIGN_OFFSET_N * 1000 + 3\r\n\
    constant integer   bj_MISSION_INDEX_N04       = bj_CAMPAIGN_OFFSET_N * 1000 + 4\r\n\
    constant integer   bj_MISSION_INDEX_N05       = bj_CAMPAIGN_OFFSET_N * 1000 + 5\r\n\
    constant integer   bj_MISSION_INDEX_N06       = bj_CAMPAIGN_OFFSET_N * 1000 + 6\r\n\
    constant integer   bj_MISSION_INDEX_N07       = bj_CAMPAIGN_OFFSET_N * 1000 + 7\r\n\
    constant integer   bj_MISSION_INDEX_N08       = bj_CAMPAIGN_OFFSET_N * 1000 + 8\r\n\
    constant integer   bj_MISSION_INDEX_N09       = bj_CAMPAIGN_OFFSET_N * 1000 + 9\r\n\
    // Expansion Night Elf\r\n\
    constant integer   bj_MISSION_INDEX_XN00       = bj_CAMPAIGN_OFFSET_XN * 1000 + 0\r\n\
    constant integer   bj_MISSION_INDEX_XN01       = bj_CAMPAIGN_OFFSET_XN * 1000 + 1\r\n\
    constant integer   bj_MISSION_INDEX_XN02       = bj_CAMPAIGN_OFFSET_XN * 1000 + 2\r\n\
    constant integer   bj_MISSION_INDEX_XN03       = bj_CAMPAIGN_OFFSET_XN * 1000 + 3\r\n\
    constant integer   bj_MISSION_INDEX_XN04       = bj_CAMPAIGN_OFFSET_XN * 1000 + 4\r\n\
    constant integer   bj_MISSION_INDEX_XN05       = bj_CAMPAIGN_OFFSET_XN * 1000 + 5\r\n\
    constant integer   bj_MISSION_INDEX_XN06       = bj_CAMPAIGN_OFFSET_XN * 1000 + 6\r\n\
    constant integer   bj_MISSION_INDEX_XN07       = bj_CAMPAIGN_OFFSET_XN * 1000 + 7\r\n\
    constant integer   bj_MISSION_INDEX_XN08       = bj_CAMPAIGN_OFFSET_XN * 1000 + 8\r\n\
    constant integer   bj_MISSION_INDEX_XN09       = bj_CAMPAIGN_OFFSET_XN * 1000 + 9\r\n\
    constant integer   bj_MISSION_INDEX_XN10       = bj_CAMPAIGN_OFFSET_XN * 1000 + 10\r\n\
    // Expansion Human\r\n\
    constant integer   bj_MISSION_INDEX_XH00       = bj_CAMPAIGN_OFFSET_XH * 1000 + 0\r\n\
    constant integer   bj_MISSION_INDEX_XH01       = bj_CAMPAIGN_OFFSET_XH * 1000 + 1\r\n\
    constant integer   bj_MISSION_INDEX_XH02       = bj_CAMPAIGN_OFFSET_XH * 1000 + 2\r\n\
    constant integer   bj_MISSION_INDEX_XH03       = bj_CAMPAIGN_OFFSET_XH * 1000 + 3\r\n\
    constant integer   bj_MISSION_INDEX_XH04       = bj_CAMPAIGN_OFFSET_XH * 1000 + 4\r\n\
    constant integer   bj_MISSION_INDEX_XH05       = bj_CAMPAIGN_OFFSET_XH * 1000 + 5\r\n\
    constant integer   bj_MISSION_INDEX_XH06       = bj_CAMPAIGN_OFFSET_XH * 1000 + 6\r\n\
    constant integer   bj_MISSION_INDEX_XH07       = bj_CAMPAIGN_OFFSET_XH * 1000 + 7\r\n\
    constant integer   bj_MISSION_INDEX_XH08       = bj_CAMPAIGN_OFFSET_XH * 1000 + 8\r\n\
    constant integer   bj_MISSION_INDEX_XH09       = bj_CAMPAIGN_OFFSET_XH * 1000 + 9\r\n\
    // Expansion Undead\r\n\
    constant integer   bj_MISSION_INDEX_XU00       = bj_CAMPAIGN_OFFSET_XU * 1000 + 0\r\n\
    constant integer   bj_MISSION_INDEX_XU01       = bj_CAMPAIGN_OFFSET_XU * 1000 + 1\r\n\
    constant integer   bj_MISSION_INDEX_XU02       = bj_CAMPAIGN_OFFSET_XU * 1000 + 2\r\n\
    constant integer   bj_MISSION_INDEX_XU03       = bj_CAMPAIGN_OFFSET_XU * 1000 + 3\r\n\
    constant integer   bj_MISSION_INDEX_XU04       = bj_CAMPAIGN_OFFSET_XU * 1000 + 4\r\n\
    constant integer   bj_MISSION_INDEX_XU05       = bj_CAMPAIGN_OFFSET_XU * 1000 + 5\r\n\
    constant integer   bj_MISSION_INDEX_XU06       = bj_CAMPAIGN_OFFSET_XU * 1000 + 6\r\n\
    constant integer   bj_MISSION_INDEX_XU07       = bj_CAMPAIGN_OFFSET_XU * 1000 + 7\r\n\
    constant integer   bj_MISSION_INDEX_XU08       = bj_CAMPAIGN_OFFSET_XU * 1000 + 8\r\n\
    constant integer   bj_MISSION_INDEX_XU09       = bj_CAMPAIGN_OFFSET_XU * 1000 + 9\r\n\
    constant integer   bj_MISSION_INDEX_XU10       = bj_CAMPAIGN_OFFSET_XU * 1000 + 10\r\n\
    constant integer   bj_MISSION_INDEX_XU11       = bj_CAMPAIGN_OFFSET_XU * 1000 + 11\r\n\
    constant integer   bj_MISSION_INDEX_XU12       = bj_CAMPAIGN_OFFSET_XU * 1000 + 12\r\n\
    constant integer   bj_MISSION_INDEX_XU13       = bj_CAMPAIGN_OFFSET_XU * 1000 + 13\r\n\
\r\n\
    // Expansion Orc\r\n\
    constant integer   bj_MISSION_INDEX_XO00       = bj_CAMPAIGN_OFFSET_XO * 1000 + 0\r\n\
\r\n\
    // Cinematic indexing constants\r\n\
    constant integer   bj_CINEMATICINDEX_TOP      = 0\r\n\
    constant integer   bj_CINEMATICINDEX_HOP      = 1\r\n\
    constant integer   bj_CINEMATICINDEX_HED      = 2\r\n\
    constant integer   bj_CINEMATICINDEX_OOP      = 3\r\n\
    constant integer   bj_CINEMATICINDEX_OED      = 4\r\n\
    constant integer   bj_CINEMATICINDEX_UOP      = 5\r\n\
    constant integer   bj_CINEMATICINDEX_UED      = 6\r\n\
    constant integer   bj_CINEMATICINDEX_NOP      = 7\r\n\
    constant integer   bj_CINEMATICINDEX_NED      = 8\r\n\
    constant integer   bj_CINEMATICINDEX_XOP      = 9\r\n\
    constant integer   bj_CINEMATICINDEX_XED      = 10\r\n\
\r\n\
    // Alliance settings\r\n\
    constant integer   bj_ALLIANCE_UNALLIED        = 0\r\n\
    constant integer   bj_ALLIANCE_UNALLIED_VISION = 1\r\n\
    constant integer   bj_ALLIANCE_ALLIED          = 2\r\n\
    constant integer   bj_ALLIANCE_ALLIED_VISION   = 3\r\n\
    constant integer   bj_ALLIANCE_ALLIED_UNITS    = 4\r\n\
    constant integer   bj_ALLIANCE_ALLIED_ADVUNITS = 5\r\n\
    constant integer   bj_ALLIANCE_NEUTRAL         = 6\r\n\
    constant integer   bj_ALLIANCE_NEUTRAL_VISION  = 7\r\n\
\r\n\
    // Keyboard Event Types\r\n\
    constant integer   bj_KEYEVENTTYPE_DEPRESS     = 0\r\n\
    constant integer   bj_KEYEVENTTYPE_RELEASE     = 1\r\n\
\r\n\
    // Keyboard Event Keys\r\n\
    constant integer   bj_KEYEVENTKEY_LEFT         = 0\r\n\
    constant integer   bj_KEYEVENTKEY_RIGHT        = 1\r\n\
    constant integer   bj_KEYEVENTKEY_DOWN         = 2\r\n\
    constant integer   bj_KEYEVENTKEY_UP           = 3\r\n\
\r\n\
    // Transmission timing methods\r\n\
    constant integer   bj_TIMETYPE_ADD             = 0\r\n\
    constant integer   bj_TIMETYPE_SET             = 1\r\n\
    constant integer   bj_TIMETYPE_SUB             = 2\r\n\
\r\n\
    // Camera bounds adjustment methods\r\n\
    constant integer   bj_CAMERABOUNDS_ADJUST_ADD  = 0\r\n\
    constant integer   bj_CAMERABOUNDS_ADJUST_SUB  = 1\r\n\
\r\n\
    // Quest creation states\r\n\
    constant integer   bj_QUESTTYPE_REQ_DISCOVERED   = 0\r\n\
    constant integer   bj_QUESTTYPE_REQ_UNDISCOVERED = 1\r\n\
    constant integer   bj_QUESTTYPE_OPT_DISCOVERED   = 2\r\n\
    constant integer   bj_QUESTTYPE_OPT_UNDISCOVERED = 3\r\n\
\r\n\
    // Quest message types\r\n\
    constant integer   bj_QUESTMESSAGE_DISCOVERED    = 0\r\n\
    constant integer   bj_QUESTMESSAGE_UPDATED       = 1\r\n\
    constant integer   bj_QUESTMESSAGE_COMPLETED     = 2\r\n\
    constant integer   bj_QUESTMESSAGE_FAILED        = 3\r\n\
    constant integer   bj_QUESTMESSAGE_REQUIREMENT   = 4\r\n\
    constant integer   bj_QUESTMESSAGE_MISSIONFAILED = 5\r\n\
    constant integer   bj_QUESTMESSAGE_ALWAYSHINT    = 6\r\n\
    constant integer   bj_QUESTMESSAGE_HINT          = 7\r\n\
    constant integer   bj_QUESTMESSAGE_SECRET        = 8\r\n\
    constant integer   bj_QUESTMESSAGE_UNITACQUIRED  = 9\r\n\
    constant integer   bj_QUESTMESSAGE_UNITAVAILABLE = 10\r\n\
    constant integer   bj_QUESTMESSAGE_ITEMACQUIRED  = 11\r\n\
    constant integer   bj_QUESTMESSAGE_WARNING       = 12\r\n\
\r\n\
    // Leaderboard sorting methods\r\n\
    constant integer   bj_SORTTYPE_SORTBYVALUE     = 0\r\n\
    constant integer   bj_SORTTYPE_SORTBYPLAYER    = 1\r\n\
    constant integer   bj_SORTTYPE_SORTBYLABEL     = 2\r\n\
\r\n\
    // Cinematic fade filter methods\r\n\
    constant integer   bj_CINEFADETYPE_FADEIN      = 0\r\n\
    constant integer   bj_CINEFADETYPE_FADEOUT     = 1\r\n\
    constant integer   bj_CINEFADETYPE_FADEOUTIN   = 2\r\n\
\r\n\
    // Buff removal methods\r\n\
    constant integer   bj_REMOVEBUFFS_POSITIVE     = 0\r\n\
    constant integer   bj_REMOVEBUFFS_NEGATIVE     = 1\r\n\
    constant integer   bj_REMOVEBUFFS_ALL          = 2\r\n\
    constant integer   bj_REMOVEBUFFS_NONTLIFE     = 3\r\n\
\r\n\
    // Buff properties - polarity\r\n\
    constant integer   bj_BUFF_POLARITY_POSITIVE   = 0\r\n\
    constant integer   bj_BUFF_POLARITY_NEGATIVE   = 1\r\n\
    constant integer   bj_BUFF_POLARITY_EITHER     = 2\r\n\
\r\n\
    // Buff properties - resist type\r\n\
    constant integer   bj_BUFF_RESIST_MAGIC        = 0\r\n\
    constant integer   bj_BUFF_RESIST_PHYSICAL     = 1\r\n\
    constant integer   bj_BUFF_RESIST_EITHER       = 2\r\n\
    constant integer   bj_BUFF_RESIST_BOTH         = 3\r\n\
\r\n\
    // Hero stats\r\n\
    constant integer   bj_HEROSTAT_STR             = 0\r\n\
    constant integer   bj_HEROSTAT_AGI             = 1\r\n\
    constant integer   bj_HEROSTAT_INT             = 2\r\n\
\r\n\
    // Hero skill point modification methods\r\n\
    constant integer   bj_MODIFYMETHOD_ADD    = 0\r\n\
    constant integer   bj_MODIFYMETHOD_SUB    = 1\r\n\
    constant integer   bj_MODIFYMETHOD_SET    = 2\r\n\
\r\n\
    // Unit state adjustment methods (for replaced units)\r\n\
    constant integer   bj_UNIT_STATE_METHOD_ABSOLUTE = 0\r\n\
    constant integer   bj_UNIT_STATE_METHOD_RELATIVE = 1\r\n\
    constant integer   bj_UNIT_STATE_METHOD_DEFAULTS = 2\r\n\
    constant integer   bj_UNIT_STATE_METHOD_MAXIMUM  = 3\r\n\
\r\n\
    // Gate operations\r\n\
    constant integer   bj_GATEOPERATION_CLOSE      = 0\r\n\
    constant integer   bj_GATEOPERATION_OPEN       = 1\r\n\
    constant integer   bj_GATEOPERATION_DESTROY    = 2\r\n\
\r\n\
	// Game cache value types\r\n\
	constant integer   bj_GAMECACHE_BOOLEAN                 = 0\r\n\
	constant integer   bj_GAMECACHE_INTEGER                 = 1\r\n\
	constant integer   bj_GAMECACHE_REAL                    = 2\r\n\
	constant integer   bj_GAMECACHE_UNIT                    = 3\r\n\
	constant integer   bj_GAMECACHE_STRING                  = 4\r\n\
	\r\n\
	// Hashtable value types\r\n\
	constant integer   bj_HASHTABLE_BOOLEAN                 = 0\r\n\
	constant integer   bj_HASHTABLE_INTEGER                 = 1\r\n\
	constant integer   bj_HASHTABLE_REAL                    = 2\r\n\
	constant integer   bj_HASHTABLE_STRING                  = 3\r\n\
	constant integer   bj_HASHTABLE_HANDLE                  = 4\r\n\
\r\n\
    // Item status types\r\n\
    constant integer   bj_ITEM_STATUS_HIDDEN       = 0\r\n\
    constant integer   bj_ITEM_STATUS_OWNED        = 1\r\n\
    constant integer   bj_ITEM_STATUS_INVULNERABLE = 2\r\n\
    constant integer   bj_ITEM_STATUS_POWERUP      = 3\r\n\
    constant integer   bj_ITEM_STATUS_SELLABLE     = 4\r\n\
    constant integer   bj_ITEM_STATUS_PAWNABLE     = 5\r\n\
\r\n\
    // Itemcode status types\r\n\
    constant integer   bj_ITEMCODE_STATUS_POWERUP  = 0\r\n\
    constant integer   bj_ITEMCODE_STATUS_SELLABLE = 1\r\n\
    constant integer   bj_ITEMCODE_STATUS_PAWNABLE = 2\r\n\
\r\n\
    // Minimap ping styles\r\n\
    constant integer   bj_MINIMAPPINGSTYLE_SIMPLE  = 0\r\n\
    constant integer   bj_MINIMAPPINGSTYLE_FLASHY  = 1\r\n\
    constant integer   bj_MINIMAPPINGSTYLE_ATTACK  = 2\r\n\
\r\n\
    // Corpse creation settings\r\n\
    constant real      bj_CORPSE_MAX_DEATH_TIME    = 8.00\r\n\
\r\n\
    // Corpse creation styles\r\n\
    constant integer   bj_CORPSETYPE_FLESH         = 0\r\n\
    constant integer   bj_CORPSETYPE_BONE          = 1\r\n\
\r\n\
    // Elevator pathing-blocker destructable code\r\n\
    constant integer   bj_ELEVATOR_BLOCKER_CODE    = 'DTep'\r\n\
    constant integer   bj_ELEVATOR_CODE01          = 'DTrf'\r\n\
    constant integer   bj_ELEVATOR_CODE02          = 'DTrx'\r\n\
\r\n\
    // Elevator wall codes\r\n\
    constant integer   bj_ELEVATOR_WALL_TYPE_ALL        = 0\r\n\
    constant integer   bj_ELEVATOR_WALL_TYPE_EAST       = 1\r\n\
    constant integer   bj_ELEVATOR_WALL_TYPE_NORTH      = 2\r\n\
    constant integer   bj_ELEVATOR_WALL_TYPE_SOUTH      = 3\r\n\
    constant integer   bj_ELEVATOR_WALL_TYPE_WEST       = 4\r\n\
\r\n\
    //-----------------------------------------------------------------------\r\n\
    // Variables\r\n\
    //\r\n\
\r\n\
    // Force predefs\r\n\
    force              bj_FORCE_ALL_PLAYERS        = null\r\n\
    force array        bj_FORCE_PLAYER\r\n\
\r\n\
    integer            bj_MELEE_MAX_TWINKED_HEROES = 0\r\n\
\r\n\
    // Map area rects\r\n\
    rect               bj_mapInitialPlayableArea   = null\r\n\
    rect               bj_mapInitialCameraBounds   = null\r\n\
\r\n\
    // Utility function vars\r\n\
    integer            bj_forLoopAIndex            = 0\r\n\
    integer            bj_forLoopBIndex            = 0\r\n\
    integer            bj_forLoopAIndexEnd         = 0\r\n\
    integer            bj_forLoopBIndexEnd         = 0\r\n\
\r\n\
    boolean            bj_slotControlReady         = false\r\n\
    boolean array      bj_slotControlUsed\r\n\
    mapcontrol array   bj_slotControl\r\n\
\r\n\
    // Game started detection vars\r\n\
    timer              bj_gameStartedTimer         = null\r\n\
    boolean            bj_gameStarted              = false\r\n\
    timer              bj_volumeGroupsTimer        = CreateTimer()\r\n\
\r\n\
    // Singleplayer check\r\n\
    boolean            bj_isSinglePlayer           = false\r\n\
\r\n\
    // Day/Night Cycle vars\r\n\
    trigger            bj_dncSoundsDay             = null\r\n\
    trigger            bj_dncSoundsNight           = null\r\n\
    sound              bj_dayAmbientSound          = null\r\n\
    sound              bj_nightAmbientSound        = null\r\n\
    trigger            bj_dncSoundsDawn            = null\r\n\
    trigger            bj_dncSoundsDusk            = null\r\n\
    sound              bj_dawnSound                = null\r\n\
    sound              bj_duskSound                = null\r\n\
    boolean            bj_useDawnDuskSounds        = true\r\n\
    boolean            bj_dncIsDaytime             = false\r\n\
\r\n\
    // Triggered sounds\r\n\
    //sound              bj_pingMinimapSound         = null\r\n\
    sound              bj_rescueSound              = null\r\n\
    sound              bj_questDiscoveredSound     = null\r\n\
    sound              bj_questUpdatedSound        = null\r\n\
    sound              bj_questCompletedSound      = null\r\n\
    sound              bj_questFailedSound         = null\r\n\
    sound              bj_questHintSound           = null\r\n\
    sound              bj_questSecretSound         = null\r\n\
    sound              bj_questItemAcquiredSound   = null\r\n\
    sound              bj_questWarningSound        = null\r\n\
    sound              bj_victoryDialogSound       = null\r\n\
    sound              bj_defeatDialogSound        = null\r\n\
\r\n\
    // Marketplace vars\r\n\
    trigger            bj_stockItemPurchased       = null\r\n\
    timer              bj_stockUpdateTimer         = null\r\n\
    boolean array      bj_stockAllowedPermanent\r\n\
    boolean array      bj_stockAllowedCharged\r\n\
    boolean array      bj_stockAllowedArtifact\r\n\
    integer            bj_stockPickedItemLevel     = 0\r\n\
    itemtype           bj_stockPickedItemType\r\n\
\r\n\
    // Melee vars\r\n\
    trigger            bj_meleeVisibilityTrained   = null\r\n\
    boolean            bj_meleeVisibilityIsDay     = true\r\n\
    boolean            bj_meleeGrantHeroItems      = false\r\n\
    location           bj_meleeNearestMineToLoc    = null\r\n\
    unit               bj_meleeNearestMine         = null\r\n\
    real               bj_meleeNearestMineDist     = 0.00\r\n\
    boolean            bj_meleeGameOver            = false\r\n\
    boolean array      bj_meleeDefeated\r\n\
    boolean array      bj_meleeVictoried\r\n\
    unit array         bj_ghoul\r\n\
    timer array        bj_crippledTimer\r\n\
    timerdialog array  bj_crippledTimerWindows\r\n\
    boolean array      bj_playerIsCrippled\r\n\
    boolean array      bj_playerIsExposed\r\n\
    boolean            bj_finishSoonAllExposed     = false\r\n\
    timerdialog        bj_finishSoonTimerDialog    = null\r\n\
    integer array      bj_meleeTwinkedHeroes\r\n\
\r\n\
    // Rescue behavior vars\r\n\
    trigger            bj_rescueUnitBehavior       = null\r\n\
    boolean            bj_rescueChangeColorUnit    = true\r\n\
    boolean            bj_rescueChangeColorBldg    = true\r\n\
\r\n\
    // Transmission vars\r\n\
    timer              bj_cineSceneEndingTimer     = null\r\n\
    sound              bj_cineSceneLastSound       = null\r\n\
    trigger            bj_cineSceneBeingSkipped    = null\r\n\
\r\n\
    // Cinematic mode vars\r\n\
    gamespeed          bj_cineModePriorSpeed       = MAP_SPEED_NORMAL\r\n\
    boolean            bj_cineModePriorFogSetting  = false\r\n\
    boolean            bj_cineModePriorMaskSetting = false\r\n\
    boolean            bj_cineModeAlreadyIn        = false\r\n\
    boolean            bj_cineModePriorDawnDusk    = false\r\n\
    integer            bj_cineModeSavedSeed        = 0\r\n\
\r\n\
    // Cinematic fade vars\r\n\
    timer              bj_cineFadeFinishTimer      = null\r\n\
    timer              bj_cineFadeContinueTimer    = null\r\n\
    real               bj_cineFadeContinueRed      = 0\r\n\
    real               bj_cineFadeContinueGreen    = 0\r\n\
    real               bj_cineFadeContinueBlue     = 0\r\n\
    real               bj_cineFadeContinueTrans    = 0\r\n\
    real               bj_cineFadeContinueDuration = 0\r\n\
    string             bj_cineFadeContinueTex      = \"\"\r\n\
\r\n\
    // QueuedTriggerExecute vars\r\n\
    integer            bj_queuedExecTotal          = 0\r\n\
    trigger array      bj_queuedExecTriggers\r\n\
    boolean array      bj_queuedExecUseConds\r\n\
    timer              bj_queuedExecTimeoutTimer   = CreateTimer()\r\n\
    trigger            bj_queuedExecTimeout        = null\r\n\
\r\n\
    // Helper vars (for Filter and Enum funcs)\r\n\
    integer            bj_destInRegionDiesCount    = 0\r\n\
    trigger            bj_destInRegionDiesTrig     = null\r\n\
    integer            bj_groupCountUnits          = 0\r\n\
    integer            bj_forceCountPlayers        = 0\r\n\
    integer            bj_groupEnumTypeId          = 0\r\n\
    player             bj_groupEnumOwningPlayer    = null\r\n\
    group              bj_groupAddGroupDest        = null\r\n\
    group              bj_groupRemoveGroupDest     = null\r\n\
    integer            bj_groupRandomConsidered    = 0\r\n\
    unit               bj_groupRandomCurrentPick   = null\r\n\
    group              bj_groupLastCreatedDest     = null\r\n\
    group              bj_randomSubGroupGroup      = null\r\n\
    integer            bj_randomSubGroupWant       = 0\r\n\
    integer            bj_randomSubGroupTotal      = 0\r\n\
    real               bj_randomSubGroupChance     = 0\r\n\
    integer            bj_destRandomConsidered     = 0\r\n\
    destructable       bj_destRandomCurrentPick    = null\r\n\
    destructable       bj_elevatorWallBlocker      = null\r\n\
    destructable       bj_elevatorNeighbor         = null\r\n\
    integer            bj_itemRandomConsidered     = 0\r\n\
    item               bj_itemRandomCurrentPick    = null\r\n\
    integer            bj_forceRandomConsidered    = 0\r\n\
    player             bj_forceRandomCurrentPick   = null\r\n\
    unit               bj_makeUnitRescuableUnit    = null\r\n\
    boolean            bj_makeUnitRescuableFlag    = true\r\n\
    boolean            bj_pauseAllUnitsFlag        = true\r\n\
    location           bj_enumDestructableCenter   = null\r\n\
    real               bj_enumDestructableRadius   = 0\r\n\
    playercolor        bj_setPlayerTargetColor     = null\r\n\
    boolean            bj_isUnitGroupDeadResult    = true\r\n\
    boolean            bj_isUnitGroupEmptyResult   = true\r\n\
    boolean            bj_isUnitGroupInRectResult  = true\r\n\
    rect               bj_isUnitGroupInRectRect    = null\r\n\
    boolean            bj_changeLevelShowScores    = false\r\n\
    string             bj_changeLevelMapName       = null\r\n\
    group              bj_suspendDecayFleshGroup   = CreateGroup()\r\n\
    group              bj_suspendDecayBoneGroup    = CreateGroup()\r\n\
    timer              bj_delayedSuspendDecayTimer = CreateTimer()\r\n\
    trigger            bj_delayedSuspendDecayTrig  = null\r\n\
    integer            bj_livingPlayerUnitsTypeId  = 0\r\n\
    widget             bj_lastDyingWidget          = null\r\n\
\r\n\
    // Random distribution vars\r\n\
    integer            bj_randDistCount            = 0\r\n\
    integer array      bj_randDistID\r\n\
    integer array      bj_randDistChance\r\n\
\r\n\
    // Last X'd vars\r\n\
    unit               bj_lastCreatedUnit          = null\r\n\
    item               bj_lastCreatedItem          = null\r\n\
    item               bj_lastRemovedItem          = null\r\n\
    unit               bj_lastHauntedGoldMine      = null\r\n\
    destructable       bj_lastCreatedDestructable  = null\r\n\
    group              bj_lastCreatedGroup         = CreateGroup()\r\n\
    fogmodifier        bj_lastCreatedFogModifier   = null\r\n\
    effect             bj_lastCreatedEffect        = null\r\n\
    weathereffect      bj_lastCreatedWeatherEffect = null\r\n\
    terraindeformation bj_lastCreatedTerrainDeformation = null\r\n\
    quest              bj_lastCreatedQuest         = null\r\n\
    questitem          bj_lastCreatedQuestItem     = null\r\n\
    defeatcondition    bj_lastCreatedDefeatCondition = null\r\n\
    timer              bj_lastStartedTimer         = CreateTimer()\r\n\
    timerdialog        bj_lastCreatedTimerDialog   = null\r\n\
    leaderboard        bj_lastCreatedLeaderboard   = null\r\n\
    multiboard         bj_lastCreatedMultiboard    = null\r\n\
    sound              bj_lastPlayedSound          = null\r\n\
    string             bj_lastPlayedMusic          = \"\"\r\n\
    real               bj_lastTransmissionDuration = 0\r\n\
    gamecache          bj_lastCreatedGameCache     = null\r\n\
    hashtable          bj_lastCreatedHashtable     = null\r\n\
    unit               bj_lastLoadedUnit           = null\r\n\
    button             bj_lastCreatedButton        = null\r\n\
    unit               bj_lastReplacedUnit         = null\r\n\
    texttag            bj_lastCreatedTextTag       = null\r\n\
    lightning          bj_lastCreatedLightning     = null\r\n\
    image              bj_lastCreatedImage         = null\r\n\
    ubersplat          bj_lastCreatedUbersplat     = null\r\n\
\r\n\
    // Filter function vars\r\n\
    boolexpr           filterIssueHauntOrderAtLocBJ      = null\r\n\
    boolexpr           filterEnumDestructablesInCircleBJ = null\r\n\
    boolexpr           filterGetUnitsInRectOfPlayer      = null\r\n\
    boolexpr           filterGetUnitsOfTypeIdAll         = null\r\n\
    boolexpr           filterGetUnitsOfPlayerAndTypeId   = null\r\n\
    boolexpr           filterMeleeTrainedUnitIsHeroBJ    = null\r\n\
    boolexpr           filterLivingPlayerUnitsOfTypeId   = null\r\n\
\r\n\
    // Memory cleanup vars\r\n\
    boolean            bj_wantDestroyGroup         = false\r\n\
endglobals\r\n\
\r\n\
\r\n\
\r\n\
//***************************************************************************\r\n\
//*\r\n\
//*  Debugging Functions\r\n\
//*\r\n\
//***************************************************************************\r\n\
\r\n\
//===========================================================================\r\n\
function BJDebugMsg takes string msg returns nothing\r\n\
    local integer i = 0\r\n\
    loop\r\n\
        call DisplayTimedTextToPlayer(Player(i),0,0,60,msg)\r\n\
        set i = i + 1\r\n\
        exitwhen i == bj_MAX_PLAYERS\r\n\
    endloop\r\n\
endfunction\r\n\
\r\n\
\r\n\
\r\n\
//***************************************************************************\r\n\
//*\r\n\
//*  Math Utility Functions\r\n\
//*\r\n\
//***************************************************************************\r\n\
\r\n\
//===========================================================================\r\n\
function RMinBJ takes real a, real b returns real\r\n\
    if (a < b) then\r\n\
        return a\r\n\
    else\r\n\
        return b\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function RMaxBJ takes real a, real b returns real\r\n\
    if (a < b) then\r\n\
        return b\r\n\
    else\r\n\
        return a\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function RAbsBJ takes real a returns real\r\n\
    if (a >= 0) then\r\n\
        return a\r\n\
    else\r\n\
        return -a\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function RSignBJ takes real a returns real\r\n\
    if (a >= 0.0) then\r\n\
        return 1.0\r\n\
    else\r\n\
        return -1.0\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function IMinBJ takes integer a, integer b returns integer\r\n\
    if (a < b) then\r\n\
        return a\r\n\
    else\r\n\
        return b\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function IMaxBJ takes integer a, integer b returns integer\r\n\
    if (a < b) then\r\n\
        return b\r\n\
    else\r\n\
        return a\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function IAbsBJ takes integer a returns integer\r\n\
    if (a >= 0) then\r\n\
        return a\r\n\
    else\r\n\
        return -a\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function ISignBJ takes integer a returns integer\r\n\
    if (a >= 0) then\r\n\
        return 1\r\n\
    else\r\n\
        return -1\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SinBJ takes real degrees returns real\r\n\
    return Sin(degrees * bj_DEGTORAD)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CosBJ takes real degrees returns real\r\n\
    return Cos(degrees * bj_DEGTORAD)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function TanBJ takes real degrees returns real\r\n\
    return Tan(degrees * bj_DEGTORAD)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function AsinBJ takes real degrees returns real\r\n\
    return Asin(degrees) * bj_RADTODEG\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function AcosBJ takes real degrees returns real\r\n\
    return Acos(degrees) * bj_RADTODEG\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function AtanBJ takes real degrees returns real\r\n\
    return Atan(degrees) * bj_RADTODEG\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function Atan2BJ takes real y, real x returns real\r\n\
    return Atan2(y, x) * bj_RADTODEG\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function AngleBetweenPoints takes location locA, location locB returns real\r\n\
    return bj_RADTODEG * Atan2(GetLocationY(locB) - GetLocationY(locA), GetLocationX(locB) - GetLocationX(locA))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function DistanceBetweenPoints takes location locA, location locB returns real\r\n\
    local real dx = GetLocationX(locB) - GetLocationX(locA)\r\n\
    local real dy = GetLocationY(locB) - GetLocationY(locA)\r\n\
    return SquareRoot(dx * dx + dy * dy)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function PolarProjectionBJ takes location source, real dist, real angle returns location\r\n\
    local real x = GetLocationX(source) + dist * Cos(angle * bj_DEGTORAD)\r\n\
    local real y = GetLocationY(source) + dist * Sin(angle * bj_DEGTORAD)\r\n\
    return Location(x, y)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetRandomDirectionDeg takes nothing returns real\r\n\
    return GetRandomReal(0, 360)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetRandomPercentageBJ takes nothing returns real\r\n\
    return GetRandomReal(0, 100)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetRandomLocInRect takes rect whichRect returns location\r\n\
    return Location(GetRandomReal(GetRectMinX(whichRect), GetRectMaxX(whichRect)), GetRandomReal(GetRectMinY(whichRect), GetRectMaxY(whichRect)))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Calculate the modulus/remainder of (dividend) divided by (divisor).\r\n\
// Examples:  18 mod 5 = 3.  15 mod 5 = 0.  -8 mod 5 = 2.\r\n\
//\r\n\
function ModuloInteger takes integer dividend, integer divisor returns integer\r\n\
    local integer modulus = dividend - (dividend / divisor) * divisor\r\n\
\r\n\
    // If the dividend was negative, the above modulus calculation will\r\n\
    // be negative, but within (-divisor..0).  We can add (divisor) to\r\n\
    // shift this result into the desired range of (0..divisor).\r\n\
    if (modulus < 0) then\r\n\
        set modulus = modulus + divisor\r\n\
    endif\r\n\
\r\n\
    return modulus\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Calculate the modulus/remainder of (dividend) divided by (divisor).\r\n\
// Examples:  13.000 mod 2.500 = 0.500.  -6.000 mod 2.500 = 1.500.\r\n\
//\r\n\
function ModuloReal takes real dividend, real divisor returns real\r\n\
    local real modulus = dividend - I2R(R2I(dividend / divisor)) * divisor\r\n\
\r\n\
    // If the dividend was negative, the above modulus calculation will\r\n\
    // be negative, but within (-divisor..0).  We can add (divisor) to\r\n\
    // shift this result into the desired range of (0..divisor).\r\n\
    if (modulus < 0) then\r\n\
        set modulus = modulus + divisor\r\n\
    endif\r\n\
\r\n\
    return modulus\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function OffsetLocation takes location loc, real dx, real dy returns location\r\n\
    return Location(GetLocationX(loc) + dx, GetLocationY(loc) + dy)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function OffsetRectBJ takes rect r, real dx, real dy returns rect\r\n\
    return Rect( GetRectMinX(r) + dx, GetRectMinY(r) + dy, GetRectMaxX(r) + dx, GetRectMaxY(r) + dy )\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function RectFromCenterSizeBJ takes location center, real width, real height returns rect\r\n\
    local real x = GetLocationX( center )\r\n\
    local real y = GetLocationY( center )\r\n\
    return Rect( x - width*0.5, y - height*0.5, x + width*0.5, y + height*0.5 )\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function RectContainsCoords takes rect r, real x, real y returns boolean\r\n\
    return (GetRectMinX(r) <= x) and (x <= GetRectMaxX(r)) and (GetRectMinY(r) <= y) and (y <= GetRectMaxY(r))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function RectContainsLoc takes rect r, location loc returns boolean\r\n\
    return RectContainsCoords(r, GetLocationX(loc), GetLocationY(loc))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function RectContainsUnit takes rect r, unit whichUnit returns boolean\r\n\
    return RectContainsCoords(r, GetUnitX(whichUnit), GetUnitY(whichUnit))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function RectContainsItem takes item whichItem, rect r returns boolean\r\n\
    if (whichItem == null) then\r\n\
        return false\r\n\
    endif\r\n\
\r\n\
    if (IsItemOwned(whichItem)) then\r\n\
        return false\r\n\
    endif\r\n\
\r\n\
    return RectContainsCoords(r, GetItemX(whichItem), GetItemY(whichItem))\r\n\
endfunction\r\n\
\r\n\
\r\n\
\r\n\
//***************************************************************************\r\n\
//*\r\n\
//*  Utility Constructs\r\n\
//*\r\n\
//***************************************************************************\r\n\
\r\n\
//===========================================================================\r\n\
// Runs the trigger's actions if the trigger's conditions evaluate to true.\r\n\
//\r\n\
function ConditionalTriggerExecute takes trigger trig returns nothing\r\n\
    if TriggerEvaluate(trig) then\r\n\
        call TriggerExecute(trig)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Runs the trigger's actions if the trigger's conditions evaluate to true.\r\n\
//\r\n\
function TriggerExecuteBJ takes trigger trig, boolean checkConditions returns boolean\r\n\
    if checkConditions then\r\n\
        if not (TriggerEvaluate(trig)) then\r\n\
            return false\r\n\
        endif\r\n\
    endif\r\n\
    call TriggerExecute(trig)\r\n\
    return true\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Arranges for a trigger to fire almost immediately, except that the calling\r\n\
// trigger is not interrupted as is the case with a TriggerExecute call.\r\n\
// Since the trigger executes normally, its conditions are still evaluated.\r\n\
//\r\n\
function PostTriggerExecuteBJ takes trigger trig, boolean checkConditions returns boolean\r\n\
    if checkConditions then\r\n\
        if not (TriggerEvaluate(trig)) then\r\n\
            return false\r\n\
        endif\r\n\
    endif\r\n\
    call TriggerRegisterTimerEvent(trig, 0, false)\r\n\
    return true\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Debug - Display the contents of the trigger queue (as either null or \"x\"\r\n\
// for each entry).\r\n\
function QueuedTriggerCheck takes nothing returns nothing\r\n\
    local string s = \"TrigQueue Check \"\r\n\
    local integer i\r\n\
\r\n\
    set i = 0\r\n\
    loop\r\n\
        exitwhen i >= bj_queuedExecTotal\r\n\
        set s = s + \"q[\" + I2S(i) + \"]=\"\r\n\
        if (bj_queuedExecTriggers[i] == null) then\r\n\
            set s = s + \"null \"\r\n\
        else\r\n\
            set s = s + \"x \"\r\n\
        endif\r\n\
        set i = i + 1\r\n\
    endloop\r\n\
    set s = s + \"(\" + I2S(bj_queuedExecTotal) + \" total)\"\r\n\
    call DisplayTimedTextToPlayer(GetLocalPlayer(),0,0,600,s)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Searches the queue for a given trigger, returning the index of the\r\n\
// trigger within the queue if it is found, or -1 if it is not found.\r\n\
//\r\n\
function QueuedTriggerGetIndex takes trigger trig returns integer\r\n\
    // Determine which, if any, of the queued triggers is being removed.\r\n\
    local integer index     = 0\r\n\
    loop\r\n\
        exitwhen index >= bj_queuedExecTotal\r\n\
        if (bj_queuedExecTriggers[index] == trig) then\r\n\
            return index\r\n\
        endif\r\n\
        set index = index + 1\r\n\
    endloop\r\n\
    return -1\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Removes a trigger from the trigger queue, shifting other triggers down\r\n\
// to fill the unused space.  If the currently running trigger is removed\r\n\
// in this manner, this function does NOT attempt to run the next trigger.\r\n\
//\r\n\
function QueuedTriggerRemoveByIndex takes integer trigIndex returns boolean\r\n\
    local integer index\r\n\
\r\n\
    // If the to-be-removed index is out of range, fail.\r\n\
    if (trigIndex >= bj_queuedExecTotal) then\r\n\
        return false\r\n\
    endif\r\n\
\r\n\
    // Shift all queue entries down to fill in the gap.\r\n\
    set bj_queuedExecTotal = bj_queuedExecTotal - 1\r\n\
    set index = trigIndex\r\n\
    loop\r\n\
        exitwhen index >= bj_queuedExecTotal\r\n\
        set bj_queuedExecTriggers[index] = bj_queuedExecTriggers[index + 1]\r\n\
        set bj_queuedExecUseConds[index] = bj_queuedExecUseConds[index + 1]\r\n\
        set index = index + 1\r\n\
    endloop\r\n\
    return true\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Attempt to execute the first trigger in the queue.  If it fails, remove\r\n\
// it and execute the next one.  Continue this cycle until a trigger runs,\r\n\
// or until the queue is empty.\r\n\
//\r\n\
function QueuedTriggerAttemptExec takes nothing returns boolean\r\n\
    loop\r\n\
        exitwhen bj_queuedExecTotal == 0\r\n\
\r\n\
        if TriggerExecuteBJ(bj_queuedExecTriggers[0], bj_queuedExecUseConds[0]) then\r\n\
            // Timeout the queue if it sits at the front of the queue for too long.\r\n\
            call TimerStart(bj_queuedExecTimeoutTimer, bj_QUEUED_TRIGGER_TIMEOUT, false, null)\r\n\
            return true\r\n\
        endif\r\n\
\r\n\
        call QueuedTriggerRemoveByIndex(0)\r\n\
    endloop\r\n\
    return false\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Queues a trigger to be executed, assuring that such triggers are not\r\n\
// executed at the same time.\r\n\
//\r\n\
function QueuedTriggerAddBJ takes trigger trig, boolean checkConditions returns boolean\r\n\
    // Make sure our queue isn't full.  If it is, return failure.\r\n\
    if (bj_queuedExecTotal >= bj_MAX_QUEUED_TRIGGERS) then\r\n\
        return false\r\n\
    endif\r\n\
\r\n\
    // Add the trigger to an array of to-be-executed triggers.\r\n\
    set bj_queuedExecTriggers[bj_queuedExecTotal] = trig\r\n\
    set bj_queuedExecUseConds[bj_queuedExecTotal] = checkConditions\r\n\
    set bj_queuedExecTotal = bj_queuedExecTotal + 1\r\n\
\r\n\
    // If this is the only trigger in the queue, run it.\r\n\
    if (bj_queuedExecTotal == 1) then\r\n\
        call QueuedTriggerAttemptExec()\r\n\
    endif\r\n\
    return true\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Denotes the end of a queued trigger. Be sure to call this only once per\r\n\
// queued trigger, or risk stepping on the toes of other queued triggers.\r\n\
//\r\n\
function QueuedTriggerRemoveBJ takes trigger trig returns nothing\r\n\
    local integer index\r\n\
    local integer trigIndex\r\n\
    local boolean trigExecuted\r\n\
\r\n\
    // Find the trigger's index.\r\n\
    set trigIndex = QueuedTriggerGetIndex(trig)\r\n\
    if (trigIndex == -1) then\r\n\
        return\r\n\
    endif\r\n\
\r\n\
    // Shuffle the other trigger entries down to fill in the gap.\r\n\
    call QueuedTriggerRemoveByIndex(trigIndex)\r\n\
\r\n\
    // If we just axed the currently running trigger, run the next one.\r\n\
    if (trigIndex == 0) then\r\n\
        call PauseTimer(bj_queuedExecTimeoutTimer)\r\n\
        call QueuedTriggerAttemptExec()\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Denotes the end of a queued trigger. Be sure to call this only once per\r\n\
// queued trigger, lest you step on the toes of other queued triggers.\r\n\
//\r\n\
function QueuedTriggerDoneBJ takes nothing returns nothing\r\n\
    local integer index\r\n\
\r\n\
    // Make sure there's something on the queue to remove.\r\n\
    if (bj_queuedExecTotal <= 0) then\r\n\
        return\r\n\
    endif\r\n\
\r\n\
    // Remove the currently running trigger from the array.\r\n\
    call QueuedTriggerRemoveByIndex(0)\r\n\
\r\n\
    // If other triggers are waiting to run, run one of them.\r\n\
    call PauseTimer(bj_queuedExecTimeoutTimer)\r\n\
    call QueuedTriggerAttemptExec()\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Empty the trigger queue.\r\n\
//\r\n\
function QueuedTriggerClearBJ takes nothing returns nothing\r\n\
    call PauseTimer(bj_queuedExecTimeoutTimer)\r\n\
    set bj_queuedExecTotal = 0\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Remove all but the currently executing trigger from the trigger queue.\r\n\
//\r\n\
function QueuedTriggerClearInactiveBJ takes nothing returns nothing\r\n\
    set bj_queuedExecTotal = IMinBJ(bj_queuedExecTotal, 1)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function QueuedTriggerCountBJ takes nothing returns integer\r\n\
    return bj_queuedExecTotal\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function IsTriggerQueueEmptyBJ takes nothing returns boolean\r\n\
    return bj_queuedExecTotal <= 0\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function IsTriggerQueuedBJ takes trigger trig returns boolean\r\n\
    return QueuedTriggerGetIndex(trig) != -1\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetForLoopIndexA takes nothing returns integer\r\n\
    return bj_forLoopAIndex\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetForLoopIndexA takes integer newIndex returns nothing\r\n\
    set bj_forLoopAIndex = newIndex\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetForLoopIndexB takes nothing returns integer\r\n\
    return bj_forLoopBIndex\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetForLoopIndexB takes integer newIndex returns nothing\r\n\
    set bj_forLoopBIndex = newIndex\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// We can't do game-time waits, so this simulates one by starting a timer\r\n\
// and polling until the timer expires.\r\n\
function PolledWait takes real duration returns nothing\r\n\
    local timer t\r\n\
    local real  timeRemaining\r\n\
\r\n\
    if (duration > 0) then\r\n\
        set t = CreateTimer()\r\n\
        call TimerStart(t, duration, false, null)\r\n\
        loop\r\n\
            set timeRemaining = TimerGetRemaining(t)\r\n\
            exitwhen timeRemaining <= 0\r\n\
\r\n\
            // If we have a bit of time left, skip past 10% of the remaining\r\n\
            // duration instead of checking every interval, to minimize the\r\n\
            // polling on long waits.\r\n\
            if (timeRemaining > bj_POLLED_WAIT_SKIP_THRESHOLD) then\r\n\
                call TriggerSleepAction(0.1 * timeRemaining)\r\n\
            else\r\n\
                call TriggerSleepAction(bj_POLLED_WAIT_INTERVAL)\r\n\
            endif\r\n\
        endloop\r\n\
        call DestroyTimer(t)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function IntegerTertiaryOp takes boolean flag, integer valueA, integer valueB returns integer\r\n\
    if flag then\r\n\
        return valueA\r\n\
    else\r\n\
        return valueB\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
\r\n\
//***************************************************************************\r\n\
//*\r\n\
//*  General Utility Functions\r\n\
//*  These functions exist purely to make the trigger dialogs cleaner and\r\n\
//*  more comprehensible.\r\n\
//*\r\n\
//***************************************************************************\r\n\
\r\n\
//===========================================================================\r\n\
function DoNothing takes nothing returns nothing\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// This function does nothing.  WorldEdit should should eventually ignore\r\n\
// CommentString triggers during script generation, but until such a time,\r\n\
// this function will serve as a stub.\r\n\
//\r\n\
function CommentString takes string commentString returns nothing\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// This function returns the input string, converting it from the localized text, if necessary\r\n\
//\r\n\
function StringIdentity takes string theString returns string\r\n\
    return GetLocalizedString(theString)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetBooleanAnd takes boolean valueA, boolean valueB returns boolean\r\n\
    return valueA and valueB\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetBooleanOr takes boolean valueA, boolean valueB returns boolean\r\n\
    return valueA or valueB\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Converts a percentage (real, 0..100) into a scaled integer (0..max),\r\n\
// clipping the result to 0..max in case the input is invalid.\r\n\
//\r\n\
function PercentToInt takes real percentage, integer max returns integer\r\n\
    local integer result = R2I(percentage * I2R(max) * 0.01)\r\n\
\r\n\
    if (result < 0) then\r\n\
        set result = 0\r\n\
    elseif (result > max) then\r\n\
        set result = max\r\n\
    endif\r\n\
\r\n\
    return result\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function PercentTo255 takes real percentage returns integer\r\n\
    return PercentToInt(percentage, 255)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetTimeOfDay takes nothing returns real\r\n\
    return GetFloatGameState(GAME_STATE_TIME_OF_DAY)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetTimeOfDay takes real whatTime returns nothing\r\n\
    call SetFloatGameState(GAME_STATE_TIME_OF_DAY, whatTime)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetTimeOfDayScalePercentBJ takes real scalePercent returns nothing\r\n\
    call SetTimeOfDayScale(scalePercent * 0.01)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetTimeOfDayScalePercentBJ takes nothing returns real\r\n\
    return GetTimeOfDayScale() * 100\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function PlaySound takes string soundName returns nothing\r\n\
    local sound soundHandle = CreateSound(soundName, false, false, true, 12700, 12700, \"\")\r\n\
    call StartSound(soundHandle)\r\n\
    call KillSoundWhenDone(soundHandle)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CompareLocationsBJ takes location A, location B returns boolean\r\n\
    return GetLocationX(A) == GetLocationX(B) and GetLocationY(A) == GetLocationY(B)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CompareRectsBJ takes rect A, rect B returns boolean\r\n\
    return GetRectMinX(A) == GetRectMinX(B) and GetRectMinY(A) == GetRectMinY(B) and GetRectMaxX(A) == GetRectMaxX(B) and GetRectMaxY(A) == GetRectMaxY(B)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Returns a square rect that exactly encompasses the specified circle.\r\n\
//\r\n\
function GetRectFromCircleBJ takes location center, real radius returns rect\r\n\
    local real centerX = GetLocationX(center)\r\n\
    local real centerY = GetLocationY(center)\r\n\
    return Rect(centerX - radius, centerY - radius, centerX + radius, centerY + radius)\r\n\
endfunction\r\n\
\r\n\
\r\n\
\r\n\
//***************************************************************************\r\n\
//*\r\n\
//*  Camera Utility Functions\r\n\
//*\r\n\
//***************************************************************************\r\n\
\r\n\
//===========================================================================\r\n\
function GetCurrentCameraSetup takes nothing returns camerasetup\r\n\
    local camerasetup theCam = CreateCameraSetup()\r\n\
    local real duration = 0\r\n\
    call CameraSetupSetField(theCam, CAMERA_FIELD_TARGET_DISTANCE, GetCameraField(CAMERA_FIELD_TARGET_DISTANCE), duration)\r\n\
    call CameraSetupSetField(theCam, CAMERA_FIELD_FARZ,            GetCameraField(CAMERA_FIELD_FARZ),            duration)\r\n\
    call CameraSetupSetField(theCam, CAMERA_FIELD_ZOFFSET,         GetCameraField(CAMERA_FIELD_ZOFFSET),         duration)\r\n\
    call CameraSetupSetField(theCam, CAMERA_FIELD_ANGLE_OF_ATTACK, bj_RADTODEG * GetCameraField(CAMERA_FIELD_ANGLE_OF_ATTACK), duration)\r\n\
    call CameraSetupSetField(theCam, CAMERA_FIELD_FIELD_OF_VIEW,   bj_RADTODEG * GetCameraField(CAMERA_FIELD_FIELD_OF_VIEW),   duration)\r\n\
    call CameraSetupSetField(theCam, CAMERA_FIELD_ROLL,            bj_RADTODEG * GetCameraField(CAMERA_FIELD_ROLL),            duration)\r\n\
    call CameraSetupSetField(theCam, CAMERA_FIELD_ROTATION,        bj_RADTODEG * GetCameraField(CAMERA_FIELD_ROTATION),        duration)\r\n\
    call CameraSetupSetDestPosition(theCam, GetCameraTargetPositionX(), GetCameraTargetPositionY(), duration)\r\n\
    return theCam\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CameraSetupApplyForPlayer takes boolean doPan, camerasetup whichSetup, player whichPlayer, real duration returns nothing\r\n\
    if (GetLocalPlayer() == whichPlayer) then\r\n\
        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
        call CameraSetupApplyForceDuration(whichSetup, doPan, duration)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CameraSetupGetFieldSwap takes camerafield whichField, camerasetup whichSetup returns real\r\n\
    return CameraSetupGetField(whichSetup, whichField)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetCameraFieldForPlayer takes player whichPlayer, camerafield whichField, real value, real duration returns nothing\r\n\
    if (GetLocalPlayer() == whichPlayer) then\r\n\
        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
        call SetCameraField(whichField, value, duration)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetCameraTargetControllerNoZForPlayer takes player whichPlayer, unit whichUnit, real xoffset, real yoffset, boolean inheritOrientation returns nothing\r\n\
    if (GetLocalPlayer() == whichPlayer) then\r\n\
        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
        call SetCameraTargetController(whichUnit, xoffset, yoffset, inheritOrientation)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetCameraPositionForPlayer takes player whichPlayer, real x, real y returns nothing\r\n\
    if (GetLocalPlayer() == whichPlayer) then\r\n\
        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
        call SetCameraPosition(x, y)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetCameraPositionLocForPlayer takes player whichPlayer, location loc returns nothing\r\n\
    if (GetLocalPlayer() == whichPlayer) then\r\n\
        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
        call SetCameraPosition(GetLocationX(loc), GetLocationY(loc))\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function RotateCameraAroundLocBJ takes real degrees, location loc, player whichPlayer, real duration returns nothing\r\n\
    if (GetLocalPlayer() == whichPlayer) then\r\n\
        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
        call SetCameraRotateMode(GetLocationX(loc), GetLocationY(loc), bj_DEGTORAD * degrees, duration)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function PanCameraToForPlayer takes player whichPlayer, real x, real y returns nothing\r\n\
    if (GetLocalPlayer() == whichPlayer) then\r\n\
        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
        call PanCameraTo(x, y)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function PanCameraToLocForPlayer takes player whichPlayer, location loc returns nothing\r\n\
    if (GetLocalPlayer() == whichPlayer) then\r\n\
        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
        call PanCameraTo(GetLocationX(loc), GetLocationY(loc))\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function PanCameraToTimedForPlayer takes player whichPlayer, real x, real y, real duration returns nothing\r\n\
    if (GetLocalPlayer() == whichPlayer) then\r\n\
        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
        call PanCameraToTimed(x, y, duration)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function PanCameraToTimedLocForPlayer takes player whichPlayer, location loc, real duration returns nothing\r\n\
    if (GetLocalPlayer() == whichPlayer) then\r\n\
        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
        call PanCameraToTimed(GetLocationX(loc), GetLocationY(loc), duration)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function PanCameraToTimedLocWithZForPlayer takes player whichPlayer, location loc, real zOffset, real duration returns nothing\r\n\
    if (GetLocalPlayer() == whichPlayer) then\r\n\
        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
        call PanCameraToTimedWithZ(GetLocationX(loc), GetLocationY(loc), zOffset, duration)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SmartCameraPanBJ takes player whichPlayer, location loc, real duration returns nothing\r\n\
    local real dist\r\n\
    if (GetLocalPlayer() == whichPlayer) then\r\n\
        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
\r\n\
        set dist = DistanceBetweenPoints(loc, GetCameraTargetPositionLoc())\r\n\
        if (dist >= bj_SMARTPAN_TRESHOLD_SNAP) then\r\n\
            // If the user is too far away, snap the camera.\r\n\
            call PanCameraToTimed(GetLocationX(loc), GetLocationY(loc), 0)\r\n\
        elseif (dist >= bj_SMARTPAN_TRESHOLD_PAN) then\r\n\
            // If the user is moderately close, pan the camera.\r\n\
            call PanCameraToTimed(GetLocationX(loc), GetLocationY(loc), duration)\r\n\
        else\r\n\
            // User is close enough, so don't touch the camera.\r\n\
        endif\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetCinematicCameraForPlayer takes player whichPlayer, string cameraModelFile returns nothing\r\n\
    if (GetLocalPlayer() == whichPlayer) then\r\n\
        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
        call SetCinematicCamera(cameraModelFile)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function ResetToGameCameraForPlayer takes player whichPlayer, real duration returns nothing\r\n\
    if (GetLocalPlayer() == whichPlayer) then\r\n\
        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
        call ResetToGameCamera(duration)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CameraSetSourceNoiseForPlayer takes player whichPlayer, real magnitude, real velocity returns nothing\r\n\
    if (GetLocalPlayer() == whichPlayer) then\r\n\
        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
        call CameraSetSourceNoise(magnitude, velocity)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CameraSetTargetNoiseForPlayer takes player whichPlayer, real magnitude, real velocity returns nothing\r\n\
    if (GetLocalPlayer() == whichPlayer) then\r\n\
        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
        call CameraSetTargetNoise(magnitude, velocity)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CameraSetEQNoiseForPlayer takes player whichPlayer, real magnitude returns nothing\r\n\
    local real richter = magnitude\r\n\
    if (richter > 5.0) then\r\n\
        set richter = 5.0\r\n\
    endif\r\n\
    if (richter < 2.0) then\r\n\
        set richter = 2.0\r\n\
    endif\r\n\
    if (GetLocalPlayer() == whichPlayer) then\r\n\
        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
        call CameraSetTargetNoiseEx(magnitude*2.0, magnitude*Pow(10,richter),true)\r\n\
        call CameraSetSourceNoiseEx(magnitude*2.0, magnitude*Pow(10,richter),true)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CameraClearNoiseForPlayer takes player whichPlayer returns nothing\r\n\
    if (GetLocalPlayer() == whichPlayer) then\r\n\
        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
        call CameraSetSourceNoise(0, 0)\r\n\
        call CameraSetTargetNoise(0, 0)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Query the current camera bounds.\r\n\
//\r\n\
function GetCurrentCameraBoundsMapRectBJ takes nothing returns rect\r\n\
    return Rect(GetCameraBoundMinX(), GetCameraBoundMinY(), GetCameraBoundMaxX(), GetCameraBoundMaxY())\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Query the initial camera bounds, as defined at map init.\r\n\
//\r\n\
function GetCameraBoundsMapRect takes nothing returns rect\r\n\
    return bj_mapInitialCameraBounds\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Query the playable map area, as defined at map init.\r\n\
//\r\n\
function GetPlayableMapRect takes nothing returns rect\r\n\
    return bj_mapInitialPlayableArea\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Query the entire map area, as defined at map init.\r\n\
//\r\n\
function GetEntireMapRect takes nothing returns rect\r\n\
    return GetWorldBounds()\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetCameraBoundsToRect takes rect r returns nothing\r\n\
    local real minX = GetRectMinX(r)\r\n\
    local real minY = GetRectMinY(r)\r\n\
    local real maxX = GetRectMaxX(r)\r\n\
    local real maxY = GetRectMaxY(r)\r\n\
    call SetCameraBounds(minX, minY, minX, maxY, maxX, maxY, maxX, minY)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetCameraBoundsToRectForPlayerBJ takes player whichPlayer, rect r returns nothing\r\n\
    if (GetLocalPlayer() == whichPlayer) then\r\n\
        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
        call SetCameraBoundsToRect(r)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function AdjustCameraBoundsBJ takes integer adjustMethod, real dxWest, real dxEast, real dyNorth, real dySouth returns nothing\r\n\
    local real minX = 0\r\n\
    local real minY = 0\r\n\
    local real maxX = 0\r\n\
    local real maxY = 0\r\n\
    local real scale = 0\r\n\
\r\n\
    if (adjustMethod == bj_CAMERABOUNDS_ADJUST_ADD) then\r\n\
        set scale = 1\r\n\
    elseif (adjustMethod == bj_CAMERABOUNDS_ADJUST_SUB) then\r\n\
        set scale = -1\r\n\
    else\r\n\
        // Unrecognized adjustment method - ignore the request.\r\n\
        return\r\n\
    endif\r\n\
\r\n\
    // Adjust the actual camera values\r\n\
    set minX = GetCameraBoundMinX() - scale * dxWest\r\n\
    set maxX = GetCameraBoundMaxX() + scale * dxEast\r\n\
    set minY = GetCameraBoundMinY() - scale * dySouth\r\n\
    set maxY = GetCameraBoundMaxY() + scale * dyNorth\r\n\
\r\n\
    // Make sure the camera bounds are still valid.\r\n\
    if (maxX < minX) then\r\n\
        set minX = (minX + maxX) * 0.5\r\n\
        set maxX = minX\r\n\
    endif\r\n\
    if (maxY < minY) then\r\n\
        set minY = (minY + maxY) * 0.5\r\n\
        set maxY = minY\r\n\
    endif\r\n\
\r\n\
    // Apply the new camera values.\r\n\
    call SetCameraBounds(minX, minY, minX, maxY, maxX, maxY, maxX, minY)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function AdjustCameraBoundsForPlayerBJ takes integer adjustMethod, player whichPlayer, real dxWest, real dxEast, real dyNorth, real dySouth returns nothing\r\n\
    if (GetLocalPlayer() == whichPlayer) then\r\n\
        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
        call AdjustCameraBoundsBJ(adjustMethod, dxWest, dxEast, dyNorth, dySouth)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetCameraQuickPositionForPlayer takes player whichPlayer, real x, real y returns nothing\r\n\
    if (GetLocalPlayer() == whichPlayer) then\r\n\
        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
        call SetCameraQuickPosition(x, y)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetCameraQuickPositionLocForPlayer takes player whichPlayer, location loc returns nothing\r\n\
    if (GetLocalPlayer() == whichPlayer) then\r\n\
        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
        call SetCameraQuickPosition(GetLocationX(loc), GetLocationY(loc))\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetCameraQuickPositionLoc takes location loc returns nothing\r\n\
    call SetCameraQuickPosition(GetLocationX(loc), GetLocationY(loc))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function StopCameraForPlayerBJ takes player whichPlayer returns nothing\r\n\
    if (GetLocalPlayer() == whichPlayer) then\r\n\
        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
        call StopCamera()\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetCameraOrientControllerForPlayerBJ takes player whichPlayer, unit whichUnit, real xoffset, real yoffset returns nothing\r\n\
    if (GetLocalPlayer() == whichPlayer) then\r\n\
        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
        call SetCameraOrientController(whichUnit, xoffset, yoffset)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CameraSetSmoothingFactorBJ takes real factor returns nothing\r\n\
    call CameraSetSmoothingFactor(factor)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CameraResetSmoothingFactorBJ takes nothing returns nothing\r\n\
    call CameraSetSmoothingFactor(0)\r\n\
endfunction\r\n\
\r\n\
\r\n\
\r\n\
//***************************************************************************\r\n\
//*\r\n\
//*  Text Utility Functions\r\n\
//*\r\n\
//***************************************************************************\r\n\
\r\n\
//===========================================================================\r\n\
function DisplayTextToForce takes force toForce, string message returns nothing\r\n\
    if (IsPlayerInForce(GetLocalPlayer(), toForce)) then\r\n\
        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
        call DisplayTextToPlayer(GetLocalPlayer(), 0, 0, message)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function DisplayTimedTextToForce takes force toForce, real duration, string message returns nothing\r\n\
    if (IsPlayerInForce(GetLocalPlayer(), toForce)) then\r\n\
        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
        call DisplayTimedTextToPlayer(GetLocalPlayer(), 0, 0, duration, message)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function ClearTextMessagesBJ takes force toForce returns nothing\r\n\
    if (IsPlayerInForce(GetLocalPlayer(), toForce)) then\r\n\
        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
        call ClearTextMessages()\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// The parameters for the API Substring function are unintuitive, so this\r\n\
// merely performs a translation for the starting index.\r\n\
//\r\n\
function SubStringBJ takes string source, integer start, integer end returns string\r\n\
    return SubString(source, start-1, end)\r\n\
endfunction  \r\n\
  \r\n\
function GetHandleIdBJ takes handle h returns integer\r\n\
    return GetHandleId(h)\r\n\
endfunction\r\n\
\r\n\
function StringHashBJ takes string s returns integer\r\n\
    return StringHash(s)\r\n\
endfunction\r\n\
\r\n\
\r\n\
\r\n\
//***************************************************************************\r\n\
//*\r\n\
//*  Event Registration Utility Functions\r\n\
//*\r\n\
//***************************************************************************\r\n\
\r\n\
//===========================================================================\r\n\
function TriggerRegisterTimerEventPeriodic takes trigger trig, real timeout returns event\r\n\
    return TriggerRegisterTimerEvent(trig, timeout, true)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function TriggerRegisterTimerEventSingle takes trigger trig, real timeout returns event\r\n\
    return TriggerRegisterTimerEvent(trig, timeout, false)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function TriggerRegisterTimerExpireEventBJ takes trigger trig, timer t returns event\r\n\
    return TriggerRegisterTimerExpireEvent(trig, t)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function TriggerRegisterPlayerUnitEventSimple takes trigger trig, player whichPlayer, playerunitevent whichEvent returns event\r\n\
    return TriggerRegisterPlayerUnitEvent(trig, whichPlayer, whichEvent, null)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function TriggerRegisterAnyUnitEventBJ takes trigger trig, playerunitevent whichEvent returns nothing\r\n\
    local integer index\r\n\
\r\n\
    set index = 0\r\n\
    loop\r\n\
        call TriggerRegisterPlayerUnitEvent(trig, Player(index), whichEvent, null)\r\n\
\r\n\
        set index = index + 1\r\n\
        exitwhen index == bj_MAX_PLAYER_SLOTS\r\n\
    endloop\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function TriggerRegisterPlayerSelectionEventBJ takes trigger trig, player whichPlayer, boolean selected returns event\r\n\
    if selected then\r\n\
        return TriggerRegisterPlayerUnitEvent(trig, whichPlayer, EVENT_PLAYER_UNIT_SELECTED, null)\r\n\
    else\r\n\
        return TriggerRegisterPlayerUnitEvent(trig, whichPlayer, EVENT_PLAYER_UNIT_DESELECTED, null)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function TriggerRegisterPlayerKeyEventBJ takes trigger trig, player whichPlayer, integer keType, integer keKey returns event\r\n\
    if (keType == bj_KEYEVENTTYPE_DEPRESS) then\r\n\
        // Depress event - find out what key\r\n\
        if (keKey == bj_KEYEVENTKEY_LEFT) then\r\n\
            return TriggerRegisterPlayerEvent(trig, whichPlayer, EVENT_PLAYER_ARROW_LEFT_DOWN)\r\n\
        elseif (keKey == bj_KEYEVENTKEY_RIGHT) then\r\n\
            return TriggerRegisterPlayerEvent(trig, whichPlayer, EVENT_PLAYER_ARROW_RIGHT_DOWN)\r\n\
        elseif (keKey == bj_KEYEVENTKEY_DOWN) then\r\n\
            return TriggerRegisterPlayerEvent(trig, whichPlayer, EVENT_PLAYER_ARROW_DOWN_DOWN)\r\n\
        elseif (keKey == bj_KEYEVENTKEY_UP) then\r\n\
            return TriggerRegisterPlayerEvent(trig, whichPlayer, EVENT_PLAYER_ARROW_UP_DOWN)\r\n\
        else\r\n\
            // Unrecognized key - ignore the request and return failure.\r\n\
            return null\r\n\
        endif\r\n\
    elseif (keType == bj_KEYEVENTTYPE_RELEASE) then\r\n\
        // Release event - find out what key\r\n\
        if (keKey == bj_KEYEVENTKEY_LEFT) then\r\n\
            return TriggerRegisterPlayerEvent(trig, whichPlayer, EVENT_PLAYER_ARROW_LEFT_UP)\r\n\
        elseif (keKey == bj_KEYEVENTKEY_RIGHT) then\r\n\
            return TriggerRegisterPlayerEvent(trig, whichPlayer, EVENT_PLAYER_ARROW_RIGHT_UP)\r\n\
        elseif (keKey == bj_KEYEVENTKEY_DOWN) then\r\n\
            return TriggerRegisterPlayerEvent(trig, whichPlayer, EVENT_PLAYER_ARROW_DOWN_UP)\r\n\
        elseif (keKey == bj_KEYEVENTKEY_UP) then\r\n\
            return TriggerRegisterPlayerEvent(trig, whichPlayer, EVENT_PLAYER_ARROW_UP_UP)\r\n\
        else\r\n\
            // Unrecognized key - ignore the request and return failure.\r\n\
            return null\r\n\
        endif\r\n\
    else\r\n\
        // Unrecognized type - ignore the request and return failure.\r\n\
        return null\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function TriggerRegisterPlayerEventVictory takes trigger trig, player whichPlayer returns event\r\n\
    return TriggerRegisterPlayerEvent(trig, whichPlayer, EVENT_PLAYER_VICTORY)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function TriggerRegisterPlayerEventDefeat takes trigger trig, player whichPlayer returns event\r\n\
    return TriggerRegisterPlayerEvent(trig, whichPlayer, EVENT_PLAYER_DEFEAT)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function TriggerRegisterPlayerEventLeave takes trigger trig, player whichPlayer returns event\r\n\
    return TriggerRegisterPlayerEvent(trig, whichPlayer, EVENT_PLAYER_LEAVE)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function TriggerRegisterPlayerEventAllianceChanged takes trigger trig, player whichPlayer returns event\r\n\
    return TriggerRegisterPlayerEvent(trig, whichPlayer, EVENT_PLAYER_ALLIANCE_CHANGED)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function TriggerRegisterPlayerEventEndCinematic takes trigger trig, player whichPlayer returns event\r\n\
    return TriggerRegisterPlayerEvent(trig, whichPlayer, EVENT_PLAYER_END_CINEMATIC)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function TriggerRegisterGameStateEventTimeOfDay takes trigger trig, limitop opcode, real limitval returns event\r\n\
    return TriggerRegisterGameStateEvent(trig, GAME_STATE_TIME_OF_DAY, opcode, limitval)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function TriggerRegisterEnterRegionSimple takes trigger trig, region whichRegion returns event\r\n\
    return TriggerRegisterEnterRegion(trig, whichRegion, null)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function TriggerRegisterLeaveRegionSimple takes trigger trig, region whichRegion returns event\r\n\
    return TriggerRegisterLeaveRegion(trig, whichRegion, null)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function TriggerRegisterEnterRectSimple takes trigger trig, rect r returns event\r\n\
    local region rectRegion = CreateRegion()\r\n\
    call RegionAddRect(rectRegion, r)\r\n\
    return TriggerRegisterEnterRegion(trig, rectRegion, null)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function TriggerRegisterLeaveRectSimple takes trigger trig, rect r returns event\r\n\
    local region rectRegion = CreateRegion()\r\n\
    call RegionAddRect(rectRegion, r)\r\n\
    return TriggerRegisterLeaveRegion(trig, rectRegion, null)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function TriggerRegisterDistanceBetweenUnits takes trigger trig, unit whichUnit, boolexpr condition, real range returns event\r\n\
    return TriggerRegisterUnitInRange(trig, whichUnit, range, condition)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function TriggerRegisterUnitInRangeSimple takes trigger trig, real range, unit whichUnit returns event\r\n\
    return TriggerRegisterUnitInRange(trig, whichUnit, range, null)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function TriggerRegisterUnitLifeEvent takes trigger trig, unit whichUnit, limitop opcode, real limitval returns event\r\n\
    return TriggerRegisterUnitStateEvent(trig, whichUnit, UNIT_STATE_LIFE, opcode, limitval)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function TriggerRegisterUnitManaEvent takes trigger trig, unit whichUnit, limitop opcode, real limitval returns event\r\n\
    return TriggerRegisterUnitStateEvent(trig, whichUnit, UNIT_STATE_MANA, opcode, limitval)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function TriggerRegisterDialogEventBJ takes trigger trig, dialog whichDialog returns event\r\n\
    return TriggerRegisterDialogEvent(trig, whichDialog)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function TriggerRegisterShowSkillEventBJ takes trigger trig returns event\r\n\
    return TriggerRegisterGameEvent(trig, EVENT_GAME_SHOW_SKILL)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function TriggerRegisterBuildSubmenuEventBJ takes trigger trig returns event\r\n\
    return TriggerRegisterGameEvent(trig, EVENT_GAME_BUILD_SUBMENU)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function TriggerRegisterGameLoadedEventBJ takes trigger trig returns event\r\n\
    return TriggerRegisterGameEvent(trig, EVENT_GAME_LOADED)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function TriggerRegisterGameSavedEventBJ takes trigger trig returns event\r\n\
    return TriggerRegisterGameEvent(trig, EVENT_GAME_SAVE)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function RegisterDestDeathInRegionEnum takes nothing returns nothing\r\n\
    set bj_destInRegionDiesCount = bj_destInRegionDiesCount + 1\r\n\
    if (bj_destInRegionDiesCount <= bj_MAX_DEST_IN_REGION_EVENTS) then\r\n\
        call TriggerRegisterDeathEvent(bj_destInRegionDiesTrig, GetEnumDestructable())\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function TriggerRegisterDestDeathInRegionEvent takes trigger trig, rect r returns nothing\r\n\
    set bj_destInRegionDiesTrig = trig\r\n\
    set bj_destInRegionDiesCount = 0\r\n\
    call EnumDestructablesInRect(r, null, function RegisterDestDeathInRegionEnum)\r\n\
endfunction\r\n\
\r\n\
\r\n\
\r\n\
//***************************************************************************\r\n\
//*\r\n\
//*  Environment Utility Functions\r\n\
//*\r\n\
//***************************************************************************\r\n\
\r\n\
//===========================================================================\r\n\
function AddWeatherEffectSaveLast takes rect where, integer effectID returns weathereffect\r\n\
    set bj_lastCreatedWeatherEffect = AddWeatherEffect(where, effectID)\r\n\
    return bj_lastCreatedWeatherEffect\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetLastCreatedWeatherEffect takes nothing returns weathereffect\r\n\
    return bj_lastCreatedWeatherEffect\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function RemoveWeatherEffectBJ takes weathereffect whichWeatherEffect returns nothing\r\n\
    call RemoveWeatherEffect(whichWeatherEffect)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function TerrainDeformationCraterBJ takes real duration, boolean permanent, location where, real radius, real depth returns terraindeformation\r\n\
    set bj_lastCreatedTerrainDeformation = TerrainDeformCrater(GetLocationX(where), GetLocationY(where), radius, depth, R2I(duration * 1000), permanent)\r\n\
    return bj_lastCreatedTerrainDeformation\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function TerrainDeformationRippleBJ takes real duration, boolean limitNeg, location where, real startRadius, real endRadius, real depth, real wavePeriod, real waveWidth returns terraindeformation\r\n\
    local real spaceWave\r\n\
    local real timeWave\r\n\
    local real radiusRatio\r\n\
\r\n\
    if (endRadius <= 0 or waveWidth <= 0 or wavePeriod <= 0) then\r\n\
        return null\r\n\
    endif\r\n\
\r\n\
    set timeWave = 2.0 * duration / wavePeriod\r\n\
    set spaceWave = 2.0 * endRadius / waveWidth\r\n\
    set radiusRatio = startRadius / endRadius\r\n\
\r\n\
    set bj_lastCreatedTerrainDeformation = TerrainDeformRipple(GetLocationX(where), GetLocationY(where), endRadius, depth, R2I(duration * 1000), 1, spaceWave, timeWave, radiusRatio, limitNeg)\r\n\
    return bj_lastCreatedTerrainDeformation\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function TerrainDeformationWaveBJ takes real duration, location source, location target, real radius, real depth, real trailDelay returns terraindeformation\r\n\
    local real distance\r\n\
    local real dirX\r\n\
    local real dirY\r\n\
    local real speed\r\n\
\r\n\
    set distance = DistanceBetweenPoints(source, target)\r\n\
    if (distance == 0 or duration <= 0) then\r\n\
        return null\r\n\
    endif\r\n\
\r\n\
    set dirX = (GetLocationX(target) - GetLocationX(source)) / distance\r\n\
    set dirY = (GetLocationY(target) - GetLocationY(source)) / distance\r\n\
    set speed = distance / duration\r\n\
\r\n\
    set bj_lastCreatedTerrainDeformation = TerrainDeformWave(GetLocationX(source), GetLocationY(source), dirX, dirY, distance, speed, radius, depth, R2I(trailDelay * 1000), 1)\r\n\
    return bj_lastCreatedTerrainDeformation\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function TerrainDeformationRandomBJ takes real duration, location where, real radius, real minDelta, real maxDelta, real updateInterval returns terraindeformation\r\n\
    set bj_lastCreatedTerrainDeformation = TerrainDeformRandom(GetLocationX(where), GetLocationY(where), radius, minDelta, maxDelta, R2I(duration * 1000), R2I(updateInterval * 1000))\r\n\
    return bj_lastCreatedTerrainDeformation\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function TerrainDeformationStopBJ takes terraindeformation deformation, real duration returns nothing\r\n\
    call TerrainDeformStop(deformation, R2I(duration * 1000))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetLastCreatedTerrainDeformation takes nothing returns terraindeformation\r\n\
    return bj_lastCreatedTerrainDeformation\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function AddLightningLoc takes string codeName, location where1, location where2 returns lightning\r\n\
    set bj_lastCreatedLightning = AddLightningEx(codeName, true, GetLocationX(where1), GetLocationY(where1), GetLocationZ(where1), GetLocationX(where2), GetLocationY(where2), GetLocationZ(where2))\r\n\
    return bj_lastCreatedLightning\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function DestroyLightningBJ takes lightning whichBolt returns boolean\r\n\
    return DestroyLightning(whichBolt)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function MoveLightningLoc takes lightning whichBolt, location where1, location where2 returns boolean\r\n\
    return MoveLightningEx(whichBolt, true, GetLocationX(where1), GetLocationY(where1), GetLocationZ(where1), GetLocationX(where2), GetLocationY(where2), GetLocationZ(where2))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetLightningColorABJ takes lightning whichBolt returns real\r\n\
    return GetLightningColorA(whichBolt)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetLightningColorRBJ takes lightning whichBolt returns real\r\n\
    return GetLightningColorR(whichBolt)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetLightningColorGBJ takes lightning whichBolt returns real\r\n\
    return GetLightningColorG(whichBolt)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetLightningColorBBJ takes lightning whichBolt returns real\r\n\
    return GetLightningColorB(whichBolt)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetLightningColorBJ takes lightning whichBolt, real r, real g, real b, real a returns boolean\r\n\
    return SetLightningColor(whichBolt, r, g, b, a)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetLastCreatedLightningBJ takes nothing returns lightning\r\n\
    return bj_lastCreatedLightning\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetAbilityEffectBJ takes integer abilcode, effecttype t, integer index returns string\r\n\
    return GetAbilityEffectById(abilcode, t, index)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetAbilitySoundBJ takes integer abilcode, soundtype t returns string\r\n\
    return GetAbilitySoundById(abilcode, t)\r\n\
endfunction\r\n\
\r\n\
\r\n\
//===========================================================================\r\n\
function GetTerrainCliffLevelBJ takes location where returns integer\r\n\
    return GetTerrainCliffLevel(GetLocationX(where), GetLocationY(where))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetTerrainTypeBJ takes location where returns integer\r\n\
    return GetTerrainType(GetLocationX(where), GetLocationY(where))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetTerrainVarianceBJ takes location where returns integer\r\n\
    return GetTerrainVariance(GetLocationX(where), GetLocationY(where))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetTerrainTypeBJ takes location where, integer terrainType, integer variation, integer area, integer shape returns nothing\r\n\
    call SetTerrainType(GetLocationX(where), GetLocationY(where), terrainType, variation, area, shape)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function IsTerrainPathableBJ takes location where, pathingtype t returns boolean\r\n\
    return IsTerrainPathable(GetLocationX(where), GetLocationY(where), t)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetTerrainPathableBJ takes location where, pathingtype t, boolean flag returns nothing\r\n\
    call SetTerrainPathable(GetLocationX(where), GetLocationY(where), t, flag)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetWaterBaseColorBJ takes real red, real green, real blue, real transparency returns nothing\r\n\
    call SetWaterBaseColor(PercentTo255(red), PercentTo255(green), PercentTo255(blue), PercentTo255(100.0-transparency))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CreateFogModifierRectSimple takes player whichPlayer, fogstate whichFogState, rect r, boolean afterUnits returns fogmodifier\r\n\
    set bj_lastCreatedFogModifier = CreateFogModifierRect(whichPlayer, whichFogState, r, true, afterUnits)\r\n\
    return bj_lastCreatedFogModifier\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CreateFogModifierRadiusLocSimple takes player whichPlayer, fogstate whichFogState, location center, real radius, boolean afterUnits returns fogmodifier\r\n\
    set bj_lastCreatedFogModifier = CreateFogModifierRadiusLoc(whichPlayer, whichFogState, center, radius, true, afterUnits)\r\n\
    return bj_lastCreatedFogModifier\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Version of CreateFogModifierRect that assumes use of sharedVision and\r\n\
// gives the option of immediately enabling the modifier, so that triggers\r\n\
// can default to modifiers that are immediately enabled.\r\n\
//\r\n\
function CreateFogModifierRectBJ takes boolean enabled, player whichPlayer, fogstate whichFogState, rect r returns fogmodifier\r\n\
    set bj_lastCreatedFogModifier = CreateFogModifierRect(whichPlayer, whichFogState, r, true, false)\r\n\
    if enabled then\r\n\
        call FogModifierStart(bj_lastCreatedFogModifier)\r\n\
    endif\r\n\
    return bj_lastCreatedFogModifier\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Version of CreateFogModifierRadius that assumes use of sharedVision and\r\n\
// gives the option of immediately enabling the modifier, so that triggers\r\n\
// can default to modifiers that are immediately enabled.\r\n\
//\r\n\
function CreateFogModifierRadiusLocBJ takes boolean enabled, player whichPlayer, fogstate whichFogState, location center, real radius returns fogmodifier\r\n\
    set bj_lastCreatedFogModifier = CreateFogModifierRadiusLoc(whichPlayer, whichFogState, center, radius, true, false)\r\n\
    if enabled then\r\n\
        call FogModifierStart(bj_lastCreatedFogModifier)\r\n\
    endif\r\n\
    return bj_lastCreatedFogModifier\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetLastCreatedFogModifier takes nothing returns fogmodifier\r\n\
    return bj_lastCreatedFogModifier\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function FogEnableOn takes nothing returns nothing\r\n\
    call FogEnable(true)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function FogEnableOff takes nothing returns nothing\r\n\
    call FogEnable(false)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function FogMaskEnableOn takes nothing returns nothing\r\n\
    call FogMaskEnable(true)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function FogMaskEnableOff takes nothing returns nothing\r\n\
    call FogMaskEnable(false)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function UseTimeOfDayBJ takes boolean flag returns nothing\r\n\
    call SuspendTimeOfDay(not flag)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetTerrainFogExBJ takes integer style, real zstart, real zend, real density, real red, real green, real blue returns nothing\r\n\
    call SetTerrainFogEx(style, zstart, zend, density, red * 0.01, green * 0.01, blue * 0.01)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function ResetTerrainFogBJ takes nothing returns nothing\r\n\
    call ResetTerrainFog()\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetDoodadAnimationBJ takes string animName, integer doodadID, real radius, location center returns nothing\r\n\
    call SetDoodadAnimation(GetLocationX(center), GetLocationY(center), radius, doodadID, false, animName, false)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetDoodadAnimationRectBJ takes string animName, integer doodadID, rect r returns nothing\r\n\
    call SetDoodadAnimationRect(r, doodadID, animName, false)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function AddUnitAnimationPropertiesBJ takes boolean add, string animProperties, unit whichUnit returns nothing\r\n\
    call AddUnitAnimationProperties(whichUnit, animProperties, add)\r\n\
endfunction\r\n\
\r\n\
\r\n\
//============================================================================\r\n\
function CreateImageBJ takes string file, real size, location where, real zOffset, integer imageType returns image\r\n\
    set bj_lastCreatedImage = CreateImage(file, size, size, size, GetLocationX(where), GetLocationY(where), zOffset, 0, 0, 0, imageType)\r\n\
    return bj_lastCreatedImage\r\n\
endfunction\r\n\
\r\n\
//============================================================================\r\n\
function ShowImageBJ takes boolean flag, image whichImage returns nothing\r\n\
    call ShowImage(whichImage, flag)\r\n\
endfunction\r\n\
\r\n\
//============================================================================\r\n\
function SetImagePositionBJ takes image whichImage, location where, real zOffset returns nothing\r\n\
    call SetImagePosition(whichImage, GetLocationX(where), GetLocationY(where), zOffset)\r\n\
endfunction\r\n\
\r\n\
//============================================================================\r\n\
function SetImageColorBJ takes image whichImage, real red, real green, real blue, real alpha returns nothing\r\n\
    call SetImageColor(whichImage, PercentTo255(red), PercentTo255(green), PercentTo255(blue), PercentTo255(100.0-alpha))\r\n\
endfunction\r\n\
\r\n\
//============================================================================\r\n\
function GetLastCreatedImage takes nothing returns image\r\n\
    return bj_lastCreatedImage\r\n\
endfunction\r\n\
\r\n\
//============================================================================\r\n\
function CreateUbersplatBJ takes location where, string name, real red, real green, real blue, real alpha, boolean forcePaused, boolean noBirthTime returns ubersplat\r\n\
    set bj_lastCreatedUbersplat = CreateUbersplat(GetLocationX(where), GetLocationY(where), name, PercentTo255(red), PercentTo255(green), PercentTo255(blue), PercentTo255(100.0-alpha), forcePaused, noBirthTime)\r\n\
    return bj_lastCreatedUbersplat\r\n\
endfunction\r\n\
\r\n\
//============================================================================\r\n\
function ShowUbersplatBJ takes boolean flag, ubersplat whichSplat returns nothing\r\n\
    call ShowUbersplat(whichSplat, flag)\r\n\
endfunction\r\n\
\r\n\
//============================================================================\r\n\
function GetLastCreatedUbersplat takes nothing returns ubersplat\r\n\
    return bj_lastCreatedUbersplat\r\n\
endfunction\r\n\
\r\n\
\r\n\
//***************************************************************************\r\n\
//*\r\n\
//*  Sound Utility Functions\r\n\
//*\r\n\
//***************************************************************************\r\n\
\r\n\
//===========================================================================\r\n\
function PlaySoundBJ takes sound soundHandle returns nothing\r\n\
    set bj_lastPlayedSound = soundHandle\r\n\
    if (soundHandle != null) then\r\n\
        call StartSound(soundHandle)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function StopSoundBJ takes sound soundHandle, boolean fadeOut returns nothing\r\n\
    call StopSound(soundHandle, false, fadeOut)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetSoundVolumeBJ takes sound soundHandle, real volumePercent returns nothing\r\n\
    call SetSoundVolume(soundHandle, PercentToInt(volumePercent, 127))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetSoundOffsetBJ takes real newOffset, sound soundHandle returns nothing\r\n\
    call SetSoundPlayPosition(soundHandle, R2I(newOffset * 1000))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetSoundDistanceCutoffBJ takes sound soundHandle, real cutoff returns nothing\r\n\
    call SetSoundDistanceCutoff(soundHandle, cutoff)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetSoundPitchBJ takes sound soundHandle, real pitch returns nothing\r\n\
    call SetSoundPitch(soundHandle, pitch)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetSoundPositionLocBJ takes sound soundHandle, location loc, real z returns nothing\r\n\
    call SetSoundPosition(soundHandle, GetLocationX(loc), GetLocationY(loc), z)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function AttachSoundToUnitBJ takes sound soundHandle, unit whichUnit returns nothing\r\n\
    call AttachSoundToUnit(soundHandle, whichUnit)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetSoundConeAnglesBJ takes sound soundHandle, real inside, real outside, real outsideVolumePercent returns nothing\r\n\
    call SetSoundConeAngles(soundHandle, inside, outside, PercentToInt(outsideVolumePercent, 127))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function KillSoundWhenDoneBJ takes sound soundHandle returns nothing\r\n\
    call KillSoundWhenDone(soundHandle)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function PlaySoundAtPointBJ takes sound soundHandle, real volumePercent, location loc, real z returns nothing\r\n\
    call SetSoundPositionLocBJ(soundHandle, loc, z)\r\n\
    call SetSoundVolumeBJ(soundHandle, volumePercent)\r\n\
    call PlaySoundBJ(soundHandle)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function PlaySoundOnUnitBJ takes sound soundHandle, real volumePercent, unit whichUnit returns nothing\r\n\
    call AttachSoundToUnitBJ(soundHandle, whichUnit)\r\n\
    call SetSoundVolumeBJ(soundHandle, volumePercent)\r\n\
    call PlaySoundBJ(soundHandle)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function PlaySoundFromOffsetBJ takes sound soundHandle, real volumePercent, real startingOffset returns nothing\r\n\
    call SetSoundVolumeBJ(soundHandle, volumePercent)\r\n\
    call PlaySoundBJ(soundHandle)\r\n\
    call SetSoundOffsetBJ(startingOffset, soundHandle)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function PlayMusicBJ takes string musicFileName returns nothing\r\n\
    set bj_lastPlayedMusic = musicFileName\r\n\
    call PlayMusic(musicFileName)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function PlayMusicExBJ takes string musicFileName, real startingOffset, real fadeInTime returns nothing\r\n\
    set bj_lastPlayedMusic = musicFileName\r\n\
    call PlayMusicEx(musicFileName, R2I(startingOffset * 1000), R2I(fadeInTime * 1000))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetMusicOffsetBJ takes real newOffset returns nothing\r\n\
    call SetMusicPlayPosition(R2I(newOffset * 1000))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function PlayThematicMusicBJ takes string musicName returns nothing\r\n\
    call PlayThematicMusic(musicName)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function PlayThematicMusicExBJ takes string musicName, real startingOffset returns nothing\r\n\
    call PlayThematicMusicEx(musicName, R2I(startingOffset * 1000))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetThematicMusicOffsetBJ takes real newOffset returns nothing\r\n\
    call SetThematicMusicPlayPosition(R2I(newOffset * 1000))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function EndThematicMusicBJ takes nothing returns nothing\r\n\
    call EndThematicMusic()\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function StopMusicBJ takes boolean fadeOut returns nothing\r\n\
    call StopMusic(fadeOut)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function ResumeMusicBJ takes nothing returns nothing\r\n\
    call ResumeMusic()\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetMusicVolumeBJ takes real volumePercent returns nothing\r\n\
    call SetMusicVolume(PercentToInt(volumePercent, 127))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetSoundDurationBJ takes sound soundHandle returns real\r\n\
    if (soundHandle == null) then\r\n\
        return bj_NOTHING_SOUND_DURATION\r\n\
    else\r\n\
        return I2R(GetSoundDuration(soundHandle)) * 0.001\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetSoundFileDurationBJ takes string musicFileName returns real\r\n\
    return I2R(GetSoundFileDuration(musicFileName)) * 0.001\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetLastPlayedSound takes nothing returns sound\r\n\
    return bj_lastPlayedSound\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetLastPlayedMusic takes nothing returns string\r\n\
    return bj_lastPlayedMusic\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function VolumeGroupSetVolumeBJ takes volumegroup vgroup, real percent returns nothing\r\n\
    call VolumeGroupSetVolume(vgroup, percent * 0.01)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetCineModeVolumeGroupsImmediateBJ takes nothing returns nothing\r\n\
    call VolumeGroupSetVolume(SOUND_VOLUMEGROUP_UNITMOVEMENT,  bj_CINEMODE_VOLUME_UNITMOVEMENT)\r\n\
    call VolumeGroupSetVolume(SOUND_VOLUMEGROUP_UNITSOUNDS,    bj_CINEMODE_VOLUME_UNITSOUNDS)\r\n\
    call VolumeGroupSetVolume(SOUND_VOLUMEGROUP_COMBAT,        bj_CINEMODE_VOLUME_COMBAT)\r\n\
    call VolumeGroupSetVolume(SOUND_VOLUMEGROUP_SPELLS,        bj_CINEMODE_VOLUME_SPELLS)\r\n\
    call VolumeGroupSetVolume(SOUND_VOLUMEGROUP_UI,            bj_CINEMODE_VOLUME_UI)\r\n\
    call VolumeGroupSetVolume(SOUND_VOLUMEGROUP_MUSIC,         bj_CINEMODE_VOLUME_MUSIC)\r\n\
    call VolumeGroupSetVolume(SOUND_VOLUMEGROUP_AMBIENTSOUNDS, bj_CINEMODE_VOLUME_AMBIENTSOUNDS)\r\n\
    call VolumeGroupSetVolume(SOUND_VOLUMEGROUP_FIRE,          bj_CINEMODE_VOLUME_FIRE)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetCineModeVolumeGroupsBJ takes nothing returns nothing\r\n\
    // Delay the request if it occurs at map init.\r\n\
    if bj_gameStarted then\r\n\
        call SetCineModeVolumeGroupsImmediateBJ()\r\n\
    else\r\n\
        call TimerStart(bj_volumeGroupsTimer, bj_GAME_STARTED_THRESHOLD, false, function SetCineModeVolumeGroupsImmediateBJ)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetSpeechVolumeGroupsImmediateBJ takes nothing returns nothing\r\n\
    call VolumeGroupSetVolume(SOUND_VOLUMEGROUP_UNITMOVEMENT,  bj_SPEECH_VOLUME_UNITMOVEMENT)\r\n\
    call VolumeGroupSetVolume(SOUND_VOLUMEGROUP_UNITSOUNDS,    bj_SPEECH_VOLUME_UNITSOUNDS)\r\n\
    call VolumeGroupSetVolume(SOUND_VOLUMEGROUP_COMBAT,        bj_SPEECH_VOLUME_COMBAT)\r\n\
    call VolumeGroupSetVolume(SOUND_VOLUMEGROUP_SPELLS,        bj_SPEECH_VOLUME_SPELLS)\r\n\
    call VolumeGroupSetVolume(SOUND_VOLUMEGROUP_UI,            bj_SPEECH_VOLUME_UI)\r\n\
    call VolumeGroupSetVolume(SOUND_VOLUMEGROUP_MUSIC,         bj_SPEECH_VOLUME_MUSIC)\r\n\
    call VolumeGroupSetVolume(SOUND_VOLUMEGROUP_AMBIENTSOUNDS, bj_SPEECH_VOLUME_AMBIENTSOUNDS)\r\n\
    call VolumeGroupSetVolume(SOUND_VOLUMEGROUP_FIRE,          bj_SPEECH_VOLUME_FIRE)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetSpeechVolumeGroupsBJ takes nothing returns nothing\r\n\
    // Delay the request if it occurs at map init.\r\n\
    if bj_gameStarted then\r\n\
        call SetSpeechVolumeGroupsImmediateBJ()\r\n\
    else\r\n\
        call TimerStart(bj_volumeGroupsTimer, bj_GAME_STARTED_THRESHOLD, false, function SetSpeechVolumeGroupsImmediateBJ)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function VolumeGroupResetImmediateBJ takes nothing returns nothing\r\n\
    call VolumeGroupReset()\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function VolumeGroupResetBJ takes nothing returns nothing\r\n\
    // Delay the request if it occurs at map init.\r\n\
    if bj_gameStarted then\r\n\
        call VolumeGroupResetImmediateBJ()\r\n\
    else\r\n\
        call TimerStart(bj_volumeGroupsTimer, bj_GAME_STARTED_THRESHOLD, false, function VolumeGroupResetImmediateBJ)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetSoundIsPlayingBJ takes sound soundHandle returns boolean\r\n\
    return GetSoundIsLoading(soundHandle) or GetSoundIsPlaying(soundHandle)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function WaitForSoundBJ takes sound soundHandle, real offset returns nothing\r\n\
    call TriggerWaitForSound( soundHandle, offset )\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetMapMusicIndexedBJ takes string musicName, integer index returns nothing\r\n\
    call SetMapMusic(musicName, false, index)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetMapMusicRandomBJ takes string musicName returns nothing\r\n\
    call SetMapMusic(musicName, true, 0)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function ClearMapMusicBJ takes nothing returns nothing\r\n\
    call ClearMapMusic()\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetStackedSoundBJ takes boolean add, sound soundHandle, rect r returns nothing\r\n\
    local real width = GetRectMaxX(r) - GetRectMinX(r)\r\n\
    local real height = GetRectMaxY(r) - GetRectMinY(r)\r\n\
\r\n\
    call SetSoundPosition(soundHandle, GetRectCenterX(r), GetRectCenterY(r), 0)\r\n\
    if add then\r\n\
        call RegisterStackedSound(soundHandle, true, width, height)\r\n\
    else\r\n\
        call UnregisterStackedSound(soundHandle, true, width, height)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function StartSoundForPlayerBJ takes player whichPlayer, sound soundHandle returns nothing\r\n\
    if (whichPlayer == GetLocalPlayer()) then\r\n\
        call StartSound(soundHandle)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function VolumeGroupSetVolumeForPlayerBJ takes player whichPlayer, volumegroup vgroup, real scale returns nothing\r\n\
    if (GetLocalPlayer() == whichPlayer) then\r\n\
        call VolumeGroupSetVolume(vgroup, scale)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function EnableDawnDusk takes boolean flag returns nothing\r\n\
    set bj_useDawnDuskSounds = flag\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function IsDawnDuskEnabled takes nothing returns boolean\r\n\
    return bj_useDawnDuskSounds\r\n\
endfunction\r\n\
\r\n\
\r\n\
\r\n\
//***************************************************************************\r\n\
//*\r\n\
//*  Day/Night ambient sounds\r\n\
//*\r\n\
//***************************************************************************\r\n\
\r\n\
//===========================================================================\r\n\
function SetAmbientDaySound takes string inLabel returns nothing\r\n\
    local real ToD\r\n\
\r\n\
    // Stop old sound, if necessary\r\n\
    if (bj_dayAmbientSound != null) then\r\n\
        call StopSound(bj_dayAmbientSound, true, true)\r\n\
    endif\r\n\
\r\n\
    // Create new sound\r\n\
    set bj_dayAmbientSound = CreateMIDISound(inLabel, 20, 20)\r\n\
\r\n\
    // Start the sound if necessary, based on current time\r\n\
    set ToD = GetTimeOfDay()\r\n\
    if (ToD >= bj_TOD_DAWN and ToD < bj_TOD_DUSK) then\r\n\
        call StartSound(bj_dayAmbientSound)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetAmbientNightSound takes string inLabel returns nothing\r\n\
    local real ToD\r\n\
\r\n\
    // Stop old sound, if necessary\r\n\
    if (bj_nightAmbientSound != null) then\r\n\
        call StopSound(bj_nightAmbientSound, true, true)\r\n\
    endif\r\n\
\r\n\
    // Create new sound\r\n\
    set bj_nightAmbientSound = CreateMIDISound(inLabel, 20, 20)\r\n\
\r\n\
    // Start the sound if necessary, based on current time\r\n\
    set ToD = GetTimeOfDay()\r\n\
    if (ToD < bj_TOD_DAWN or ToD >= bj_TOD_DUSK) then\r\n\
        call StartSound(bj_nightAmbientSound)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
\r\n\
\r\n\
//***************************************************************************\r\n\
//*\r\n\
//*  Special Effect Utility Functions\r\n\
//*\r\n\
//***************************************************************************\r\n\
\r\n\
//===========================================================================\r\n\
function AddSpecialEffectLocBJ takes location where, string modelName returns effect\r\n\
    set bj_lastCreatedEffect = AddSpecialEffectLoc(modelName, where)\r\n\
    return bj_lastCreatedEffect\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function AddSpecialEffectTargetUnitBJ takes string attachPointName, widget targetWidget, string modelName returns effect\r\n\
    set bj_lastCreatedEffect = AddSpecialEffectTarget(modelName, targetWidget, attachPointName)\r\n\
    return bj_lastCreatedEffect\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Two distinct trigger actions can't share the same function name, so this\r\n\
// dummy function simply mimics the behavior of an existing call.\r\n\
//\r\n\
// Commented out - Destructibles have no attachment points.\r\n\
//\r\n\
//function AddSpecialEffectTargetDestructableBJ takes string attachPointName, widget targetWidget, string modelName returns effect\r\n\
//    return AddSpecialEffectTargetUnitBJ(attachPointName, targetWidget, modelName)\r\n\
//endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Two distinct trigger actions can't share the same function name, so this\r\n\
// dummy function simply mimics the behavior of an existing call.\r\n\
//\r\n\
// Commented out - Items have no attachment points.\r\n\
//\r\n\
//function AddSpecialEffectTargetItemBJ takes string attachPointName, widget targetWidget, string modelName returns effect\r\n\
//    return AddSpecialEffectTargetUnitBJ(attachPointName, targetWidget, modelName)\r\n\
//endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function DestroyEffectBJ takes effect whichEffect returns nothing\r\n\
    call DestroyEffect(whichEffect)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetLastCreatedEffectBJ takes nothing returns effect\r\n\
    return bj_lastCreatedEffect\r\n\
endfunction\r\n\
\r\n\
\r\n\
\r\n\
//***************************************************************************\r\n\
//*\r\n\
//*  Hero and Item Utility Functions\r\n\
//*\r\n\
//***************************************************************************\r\n\
\r\n\
//===========================================================================\r\n\
function GetItemLoc takes item whichItem returns location\r\n\
    return Location(GetItemX(whichItem), GetItemY(whichItem))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetItemLifeBJ takes widget whichWidget returns real\r\n\
    return GetWidgetLife(whichWidget)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetItemLifeBJ takes widget whichWidget, real life returns nothing\r\n\
    call SetWidgetLife(whichWidget, life)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function AddHeroXPSwapped takes integer xpToAdd, unit whichHero, boolean showEyeCandy returns nothing\r\n\
    call AddHeroXP(whichHero, xpToAdd, showEyeCandy)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetHeroLevelBJ takes unit whichHero, integer newLevel, boolean showEyeCandy returns nothing\r\n\
    local integer oldLevel = GetHeroLevel(whichHero)\r\n\
\r\n\
    if (newLevel > oldLevel) then\r\n\
        call SetHeroLevel(whichHero, newLevel, showEyeCandy)\r\n\
    elseif (newLevel < oldLevel) then\r\n\
        call UnitStripHeroLevel(whichHero, oldLevel - newLevel)\r\n\
    else\r\n\
        // No change in level - ignore the request.\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function DecUnitAbilityLevelSwapped takes integer abilcode, unit whichUnit returns integer\r\n\
    return DecUnitAbilityLevel(whichUnit, abilcode)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function IncUnitAbilityLevelSwapped takes integer abilcode, unit whichUnit returns integer\r\n\
    return IncUnitAbilityLevel(whichUnit, abilcode)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetUnitAbilityLevelSwapped takes integer abilcode, unit whichUnit, integer level returns integer\r\n\
    return SetUnitAbilityLevel(whichUnit, abilcode, level)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetUnitAbilityLevelSwapped takes integer abilcode, unit whichUnit returns integer\r\n\
    return GetUnitAbilityLevel(whichUnit, abilcode)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function UnitHasBuffBJ takes unit whichUnit, integer buffcode returns boolean\r\n\
    return (GetUnitAbilityLevel(whichUnit, buffcode) > 0)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function UnitRemoveBuffBJ takes integer buffcode, unit whichUnit returns boolean\r\n\
    return UnitRemoveAbility(whichUnit, buffcode)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function UnitAddItemSwapped takes item whichItem, unit whichHero returns boolean\r\n\
    return UnitAddItem(whichHero, whichItem)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function UnitAddItemByIdSwapped takes integer itemId, unit whichHero returns item\r\n\
    // Create the item at the hero's feet first, and then give it to him.\r\n\
    // This is to ensure that the item will be left at the hero's feet if\r\n\
    // his inventory is full. \r\n\
    set bj_lastCreatedItem = CreateItem(itemId, GetUnitX(whichHero), GetUnitY(whichHero))\r\n\
    call UnitAddItem(whichHero, bj_lastCreatedItem)\r\n\
    return bj_lastCreatedItem\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function UnitRemoveItemSwapped takes item whichItem, unit whichHero returns nothing\r\n\
    set bj_lastRemovedItem = whichItem\r\n\
    call UnitRemoveItem(whichHero, whichItem)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Translates 0-based slot indices to 1-based slot indices.\r\n\
//\r\n\
function UnitRemoveItemFromSlotSwapped takes integer itemSlot, unit whichHero returns item\r\n\
    set bj_lastRemovedItem = UnitRemoveItemFromSlot(whichHero, itemSlot-1)\r\n\
    return bj_lastRemovedItem\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CreateItemLoc takes integer itemId, location loc returns item\r\n\
    set bj_lastCreatedItem = CreateItem(itemId, GetLocationX(loc), GetLocationY(loc))\r\n\
    return bj_lastCreatedItem\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetLastCreatedItem takes nothing returns item\r\n\
    return bj_lastCreatedItem\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetLastRemovedItem takes nothing returns item\r\n\
    return bj_lastRemovedItem\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetItemPositionLoc takes item whichItem, location loc returns nothing\r\n\
    call SetItemPosition(whichItem, GetLocationX(loc), GetLocationY(loc))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetLearnedSkillBJ takes nothing returns integer\r\n\
    return GetLearnedSkill()\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SuspendHeroXPBJ takes boolean flag, unit whichHero returns nothing\r\n\
    call SuspendHeroXP(whichHero, not flag)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetPlayerHandicapXPBJ takes player whichPlayer, real handicapPercent returns nothing\r\n\
    call SetPlayerHandicapXP(whichPlayer, handicapPercent * 0.01)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetPlayerHandicapXPBJ takes player whichPlayer returns real\r\n\
    return GetPlayerHandicapXP(whichPlayer) * 100\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetPlayerHandicapBJ takes player whichPlayer, real handicapPercent returns nothing\r\n\
    call SetPlayerHandicap(whichPlayer, handicapPercent * 0.01)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetPlayerHandicapBJ takes player whichPlayer returns real\r\n\
    return GetPlayerHandicap(whichPlayer) * 100\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetHeroStatBJ takes integer whichStat, unit whichHero, boolean includeBonuses returns integer\r\n\
    if (whichStat == bj_HEROSTAT_STR) then\r\n\
        return GetHeroStr(whichHero, includeBonuses)\r\n\
    elseif (whichStat == bj_HEROSTAT_AGI) then\r\n\
        return GetHeroAgi(whichHero, includeBonuses)\r\n\
    elseif (whichStat == bj_HEROSTAT_INT) then\r\n\
        return GetHeroInt(whichHero, includeBonuses)\r\n\
    else\r\n\
        // Unrecognized hero stat - return 0\r\n\
        return 0\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetHeroStat takes unit whichHero, integer whichStat, integer value returns nothing\r\n\
    // Ignore requests for negative hero stats.\r\n\
    if (value <= 0) then\r\n\
        return\r\n\
    endif\r\n\
\r\n\
    if (whichStat == bj_HEROSTAT_STR) then\r\n\
        call SetHeroStr(whichHero, value, true)\r\n\
    elseif (whichStat == bj_HEROSTAT_AGI) then\r\n\
        call SetHeroAgi(whichHero, value, true)\r\n\
    elseif (whichStat == bj_HEROSTAT_INT) then\r\n\
        call SetHeroInt(whichHero, value, true)\r\n\
    else\r\n\
        // Unrecognized hero stat - ignore the request.\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function ModifyHeroStat takes integer whichStat, unit whichHero, integer modifyMethod, integer value returns nothing\r\n\
    if (modifyMethod == bj_MODIFYMETHOD_ADD) then\r\n\
        call SetHeroStat(whichHero, whichStat, GetHeroStatBJ(whichStat, whichHero, false) + value)\r\n\
    elseif (modifyMethod == bj_MODIFYMETHOD_SUB) then\r\n\
        call SetHeroStat(whichHero, whichStat, GetHeroStatBJ(whichStat, whichHero, false) - value)\r\n\
    elseif (modifyMethod == bj_MODIFYMETHOD_SET) then\r\n\
        call SetHeroStat(whichHero, whichStat, value)\r\n\
    else\r\n\
        // Unrecognized modification method - ignore the request.\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function ModifyHeroSkillPoints takes unit whichHero, integer modifyMethod, integer value returns boolean\r\n\
    if (modifyMethod == bj_MODIFYMETHOD_ADD) then\r\n\
        return UnitModifySkillPoints(whichHero, value)\r\n\
    elseif (modifyMethod == bj_MODIFYMETHOD_SUB) then\r\n\
        return UnitModifySkillPoints(whichHero, -value)\r\n\
    elseif (modifyMethod == bj_MODIFYMETHOD_SET) then\r\n\
        return UnitModifySkillPoints(whichHero, value - GetHeroSkillPoints(whichHero))\r\n\
    else\r\n\
        // Unrecognized modification method - ignore the request and return failure.\r\n\
        return false\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function UnitDropItemPointBJ takes unit whichUnit, item whichItem, real x, real y returns boolean\r\n\
    return UnitDropItemPoint(whichUnit, whichItem, x, y)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function UnitDropItemPointLoc takes unit whichUnit, item whichItem, location loc returns boolean\r\n\
    return UnitDropItemPoint(whichUnit, whichItem, GetLocationX(loc), GetLocationY(loc))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function UnitDropItemSlotBJ takes unit whichUnit, item whichItem, integer slot returns boolean\r\n\
    return UnitDropItemSlot(whichUnit, whichItem, slot-1)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function UnitDropItemTargetBJ takes unit whichUnit, item whichItem, widget target returns boolean\r\n\
    return UnitDropItemTarget(whichUnit, whichItem, target)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Two distinct trigger actions can't share the same function name, so this\r\n\
// dummy function simply mimics the behavior of an existing call.\r\n\
//\r\n\
function UnitUseItemDestructable takes unit whichUnit, item whichItem, widget target returns boolean\r\n\
    return UnitUseItemTarget(whichUnit, whichItem, target)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function UnitUseItemPointLoc takes unit whichUnit, item whichItem, location loc returns boolean\r\n\
    return UnitUseItemPoint(whichUnit, whichItem, GetLocationX(loc), GetLocationY(loc))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Translates 0-based slot indices to 1-based slot indices.\r\n\
//\r\n\
function UnitItemInSlotBJ takes unit whichUnit, integer itemSlot returns item\r\n\
    return UnitItemInSlot(whichUnit, itemSlot-1)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Translates 0-based slot indices to 1-based slot indices.\r\n\
//\r\n\
function GetInventoryIndexOfItemTypeBJ takes unit whichUnit, integer itemId returns integer\r\n\
    local integer index\r\n\
    local item    indexItem\r\n\
\r\n\
    set index = 0\r\n\
    loop\r\n\
        set indexItem = UnitItemInSlot(whichUnit, index)\r\n\
        if (indexItem != null) and (GetItemTypeId(indexItem) == itemId) then\r\n\
            return index + 1\r\n\
        endif\r\n\
\r\n\
        set index = index + 1\r\n\
        exitwhen index >= bj_MAX_INVENTORY\r\n\
    endloop\r\n\
    return 0\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetItemOfTypeFromUnitBJ takes unit whichUnit, integer itemId returns item\r\n\
    local integer index = GetInventoryIndexOfItemTypeBJ(whichUnit, itemId)\r\n\
\r\n\
    if (index == 0) then\r\n\
        return null\r\n\
    else\r\n\
        return UnitItemInSlot(whichUnit, index - 1)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function UnitHasItemOfTypeBJ takes unit whichUnit, integer itemId returns boolean\r\n\
    return GetInventoryIndexOfItemTypeBJ(whichUnit, itemId) > 0\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function UnitInventoryCount takes unit whichUnit returns integer\r\n\
    local integer index = 0\r\n\
    local integer count = 0\r\n\
\r\n\
    loop\r\n\
        if (UnitItemInSlot(whichUnit, index) != null) then\r\n\
            set count = count + 1\r\n\
        endif\r\n\
\r\n\
        set index = index + 1\r\n\
        exitwhen index >= bj_MAX_INVENTORY\r\n\
    endloop\r\n\
\r\n\
    return count\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function UnitInventorySizeBJ takes unit whichUnit returns integer\r\n\
    return UnitInventorySize(whichUnit)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetItemInvulnerableBJ takes item whichItem, boolean flag returns nothing\r\n\
    call SetItemInvulnerable(whichItem, flag)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetItemDropOnDeathBJ takes item whichItem, boolean flag returns nothing\r\n\
    call SetItemDropOnDeath(whichItem, flag)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetItemDroppableBJ takes item whichItem, boolean flag returns nothing\r\n\
    call SetItemDroppable(whichItem, flag)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetItemPlayerBJ takes item whichItem, player whichPlayer, boolean changeColor returns nothing\r\n\
    call SetItemPlayer(whichItem, whichPlayer, changeColor)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetItemVisibleBJ takes boolean show, item whichItem returns nothing\r\n\
    call SetItemVisible(whichItem, show)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function IsItemHiddenBJ takes item whichItem returns boolean\r\n\
    return not IsItemVisible(whichItem)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function ChooseRandomItemBJ takes integer level returns integer\r\n\
    return ChooseRandomItem(level)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function ChooseRandomItemExBJ takes integer level, itemtype whichType returns integer\r\n\
    return ChooseRandomItemEx(whichType, level)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function ChooseRandomNPBuildingBJ takes nothing returns integer\r\n\
    return ChooseRandomNPBuilding()\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function ChooseRandomCreepBJ takes integer level returns integer\r\n\
    return ChooseRandomCreep(level)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function EnumItemsInRectBJ takes rect r, code actionFunc returns nothing\r\n\
    call EnumItemsInRect(r, null, actionFunc)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// See GroupPickRandomUnitEnum for the details of this algorithm.\r\n\
//\r\n\
function RandomItemInRectBJEnum takes nothing returns nothing\r\n\
    set bj_itemRandomConsidered = bj_itemRandomConsidered + 1\r\n\
    if (GetRandomInt(1, bj_itemRandomConsidered) == 1) then\r\n\
        set bj_itemRandomCurrentPick = GetEnumItem()\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Picks a random item from within a rect, matching a condition\r\n\
//\r\n\
function RandomItemInRectBJ takes rect r, boolexpr filter returns item\r\n\
    set bj_itemRandomConsidered = 0\r\n\
    set bj_itemRandomCurrentPick = null\r\n\
    call EnumItemsInRect(r, filter, function RandomItemInRectBJEnum)\r\n\
    call DestroyBoolExpr(filter)\r\n\
    return bj_itemRandomCurrentPick\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Picks a random item from within a rect\r\n\
//\r\n\
function RandomItemInRectSimpleBJ takes rect r returns item\r\n\
    return RandomItemInRectBJ(r, null)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CheckItemStatus takes item whichItem, integer status returns boolean\r\n\
    if (status == bj_ITEM_STATUS_HIDDEN) then\r\n\
        return not IsItemVisible(whichItem)\r\n\
    elseif (status == bj_ITEM_STATUS_OWNED) then\r\n\
        return IsItemOwned(whichItem)\r\n\
    elseif (status == bj_ITEM_STATUS_INVULNERABLE) then\r\n\
        return IsItemInvulnerable(whichItem)\r\n\
    elseif (status == bj_ITEM_STATUS_POWERUP) then\r\n\
        return IsItemPowerup(whichItem)\r\n\
    elseif (status == bj_ITEM_STATUS_SELLABLE) then\r\n\
        return IsItemSellable(whichItem)\r\n\
    elseif (status == bj_ITEM_STATUS_PAWNABLE) then\r\n\
        return IsItemPawnable(whichItem)\r\n\
    else\r\n\
        // Unrecognized status - return false\r\n\
        return false\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CheckItemcodeStatus takes integer itemId, integer status returns boolean\r\n\
    if (status == bj_ITEMCODE_STATUS_POWERUP) then\r\n\
        return IsItemIdPowerup(itemId)\r\n\
    elseif (status == bj_ITEMCODE_STATUS_SELLABLE) then\r\n\
        return IsItemIdSellable(itemId)\r\n\
    elseif (status == bj_ITEMCODE_STATUS_PAWNABLE) then\r\n\
        return IsItemIdPawnable(itemId)\r\n\
    else\r\n\
        // Unrecognized status - return false\r\n\
        return false\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
\r\n\
\r\n\
//***************************************************************************\r\n\
//*\r\n\
//*  Unit Utility Functions\r\n\
//*\r\n\
//***************************************************************************\r\n\
\r\n\
//===========================================================================\r\n\
function UnitId2OrderIdBJ takes integer unitId returns integer\r\n\
    return unitId\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function String2UnitIdBJ takes string unitIdString returns integer\r\n\
    return UnitId(unitIdString)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function UnitId2StringBJ takes integer unitId returns string\r\n\
    local string unitString = UnitId2String(unitId)\r\n\
\r\n\
    if (unitString != null) then\r\n\
        return unitString\r\n\
    endif\r\n\
\r\n\
    // The unitId was not recognized - return an empty string.\r\n\
    return \"\"\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function String2OrderIdBJ takes string orderIdString returns integer\r\n\
    local integer orderId\r\n\
    \r\n\
    // Check to see if it's a generic order.\r\n\
    set orderId = OrderId(orderIdString)\r\n\
    if (orderId != 0) then\r\n\
        return orderId\r\n\
    endif\r\n\
\r\n\
    // Check to see if it's a (train) unit order.\r\n\
    set orderId = UnitId(orderIdString)\r\n\
    if (orderId != 0) then\r\n\
        return orderId\r\n\
    endif\r\n\
\r\n\
    // Unrecognized - return 0\r\n\
    return 0\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function OrderId2StringBJ takes integer orderId returns string\r\n\
    local string orderString\r\n\
\r\n\
    // Check to see if it's a generic order.\r\n\
    set orderString = OrderId2String(orderId)\r\n\
    if (orderString != null) then\r\n\
        return orderString\r\n\
    endif\r\n\
\r\n\
    // Check to see if it's a (train) unit order.\r\n\
    set orderString = UnitId2String(orderId)\r\n\
    if (orderString != null) then\r\n\
        return orderString\r\n\
    endif\r\n\
\r\n\
    // Unrecognized - return an empty string.\r\n\
    return \"\"\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetIssuedOrderIdBJ takes nothing returns integer\r\n\
    return GetIssuedOrderId()\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetKillingUnitBJ takes nothing returns unit\r\n\
    return GetKillingUnit()\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CreateUnitAtLocSaveLast takes player id, integer unitid, location loc, real face returns unit\r\n\
    if (unitid == 'ugol') then\r\n\
        set bj_lastCreatedUnit = CreateBlightedGoldmine(id, GetLocationX(loc), GetLocationY(loc), face)\r\n\
    else\r\n\
        set bj_lastCreatedUnit = CreateUnitAtLoc(id, unitid, loc, face)\r\n\
    endif\r\n\
\r\n\
    return bj_lastCreatedUnit\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetLastCreatedUnit takes nothing returns unit\r\n\
    return bj_lastCreatedUnit\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CreateNUnitsAtLoc takes integer count, integer unitId, player whichPlayer, location loc, real face returns group\r\n\
    call GroupClear(bj_lastCreatedGroup)\r\n\
    loop\r\n\
        set count = count - 1\r\n\
        exitwhen count < 0\r\n\
        call CreateUnitAtLocSaveLast(whichPlayer, unitId, loc, face)\r\n\
        call GroupAddUnit(bj_lastCreatedGroup, bj_lastCreatedUnit)\r\n\
    endloop\r\n\
    return bj_lastCreatedGroup\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CreateNUnitsAtLocFacingLocBJ takes integer count, integer unitId, player whichPlayer, location loc, location lookAt returns group\r\n\
    return CreateNUnitsAtLoc(count, unitId, whichPlayer, loc, AngleBetweenPoints(loc, lookAt))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetLastCreatedGroupEnum takes nothing returns nothing\r\n\
    call GroupAddUnit(bj_groupLastCreatedDest, GetEnumUnit())\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetLastCreatedGroup takes nothing returns group\r\n\
    set bj_groupLastCreatedDest = CreateGroup()\r\n\
    call ForGroup(bj_lastCreatedGroup, function GetLastCreatedGroupEnum)\r\n\
    return bj_groupLastCreatedDest\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CreateCorpseLocBJ takes integer unitid, player whichPlayer, location loc returns unit\r\n\
    set bj_lastCreatedUnit = CreateCorpse(whichPlayer, unitid, GetLocationX(loc), GetLocationY(loc), GetRandomReal(0, 360))\r\n\
    return bj_lastCreatedUnit\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function UnitSuspendDecayBJ takes boolean suspend, unit whichUnit returns nothing\r\n\
    call UnitSuspendDecay(whichUnit, suspend)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function DelayedSuspendDecayStopAnimEnum takes nothing returns nothing\r\n\
    local unit enumUnit = GetEnumUnit()\r\n\
\r\n\
    if (GetUnitState(enumUnit, UNIT_STATE_LIFE) <= 0) then\r\n\
        call SetUnitTimeScale(enumUnit, 0.0001)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function DelayedSuspendDecayBoneEnum takes nothing returns nothing\r\n\
    local unit enumUnit = GetEnumUnit()\r\n\
\r\n\
    if (GetUnitState(enumUnit, UNIT_STATE_LIFE) <= 0) then\r\n\
        call UnitSuspendDecay(enumUnit, true)\r\n\
        call SetUnitTimeScale(enumUnit, 0.0001)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Game code explicitly sets the animation back to \"decay bone\" after the\r\n\
// initial corpse fades away, so we reset it now.  It's best not to show\r\n\
// off corpses thus created until after this grace period has passed.\r\n\
//\r\n\
function DelayedSuspendDecayFleshEnum takes nothing returns nothing\r\n\
    local unit enumUnit = GetEnumUnit()\r\n\
\r\n\
    if (GetUnitState(enumUnit, UNIT_STATE_LIFE) <= 0) then\r\n\
        call UnitSuspendDecay(enumUnit, true)\r\n\
        call SetUnitTimeScale(enumUnit, 10.0)\r\n\
        call SetUnitAnimation(enumUnit, \"decay flesh\")\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Waits a short period of time to ensure that the corpse is decaying, and\r\n\
// then suspend the animation and corpse decay.\r\n\
//\r\n\
function DelayedSuspendDecay takes nothing returns nothing\r\n\
    local group boneGroup\r\n\
    local group fleshGroup\r\n\
\r\n\
    // Switch the global unit groups over to local variables and recreate\r\n\
    // the global versions, so that this function can handle overlapping\r\n\
    // calls.\r\n\
    set boneGroup = bj_suspendDecayBoneGroup\r\n\
    set fleshGroup = bj_suspendDecayFleshGroup\r\n\
    set bj_suspendDecayBoneGroup = CreateGroup()\r\n\
    set bj_suspendDecayFleshGroup = CreateGroup()\r\n\
\r\n\
    call ForGroup(fleshGroup, function DelayedSuspendDecayStopAnimEnum)\r\n\
    call ForGroup(boneGroup, function DelayedSuspendDecayStopAnimEnum)\r\n\
\r\n\
    call TriggerSleepAction(bj_CORPSE_MAX_DEATH_TIME)\r\n\
    call ForGroup(fleshGroup, function DelayedSuspendDecayFleshEnum)\r\n\
    call ForGroup(boneGroup, function DelayedSuspendDecayBoneEnum)\r\n\
\r\n\
    call TriggerSleepAction(0.05)\r\n\
    call ForGroup(fleshGroup, function DelayedSuspendDecayStopAnimEnum)\r\n\
\r\n\
    call DestroyGroup(boneGroup)\r\n\
    call DestroyGroup(fleshGroup)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function DelayedSuspendDecayCreate takes nothing returns nothing\r\n\
    set bj_delayedSuspendDecayTrig = CreateTrigger()\r\n\
    call TriggerRegisterTimerExpireEvent(bj_delayedSuspendDecayTrig, bj_delayedSuspendDecayTimer)\r\n\
    call TriggerAddAction(bj_delayedSuspendDecayTrig, function DelayedSuspendDecay)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CreatePermanentCorpseLocBJ takes integer style, integer unitid, player whichPlayer, location loc, real facing returns unit\r\n\
    set bj_lastCreatedUnit = CreateCorpse(whichPlayer, unitid, GetLocationX(loc), GetLocationY(loc), facing)\r\n\
    call SetUnitBlendTime(bj_lastCreatedUnit, 0)\r\n\
\r\n\
    if (style == bj_CORPSETYPE_FLESH) then\r\n\
        call SetUnitAnimation(bj_lastCreatedUnit, \"decay flesh\")\r\n\
        call GroupAddUnit(bj_suspendDecayFleshGroup, bj_lastCreatedUnit)\r\n\
    elseif (style == bj_CORPSETYPE_BONE) then\r\n\
        call SetUnitAnimation(bj_lastCreatedUnit, \"decay bone\")\r\n\
        call GroupAddUnit(bj_suspendDecayBoneGroup, bj_lastCreatedUnit)\r\n\
    else\r\n\
        // Unknown decay style - treat as skeletal.\r\n\
        call SetUnitAnimation(bj_lastCreatedUnit, \"decay bone\")\r\n\
        call GroupAddUnit(bj_suspendDecayBoneGroup, bj_lastCreatedUnit)\r\n\
    endif\r\n\
\r\n\
    call TimerStart(bj_delayedSuspendDecayTimer, 0.05, false, null)\r\n\
    return bj_lastCreatedUnit\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetUnitStateSwap takes unitstate whichState, unit whichUnit returns real\r\n\
    return GetUnitState(whichUnit, whichState)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetUnitStatePercent takes unit whichUnit, unitstate whichState, unitstate whichMaxState returns real\r\n\
    local real value    = GetUnitState(whichUnit, whichState)\r\n\
    local real maxValue = GetUnitState(whichUnit, whichMaxState)\r\n\
\r\n\
    // Return 0 for null units.\r\n\
    if (whichUnit == null) or (maxValue == 0) then\r\n\
        return 0.0\r\n\
    endif\r\n\
\r\n\
    return value / maxValue * 100.0\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetUnitLifePercent takes unit whichUnit returns real\r\n\
    return GetUnitStatePercent(whichUnit, UNIT_STATE_LIFE, UNIT_STATE_MAX_LIFE)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetUnitManaPercent takes unit whichUnit returns real\r\n\
    return GetUnitStatePercent(whichUnit, UNIT_STATE_MANA, UNIT_STATE_MAX_MANA)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SelectUnitSingle takes unit whichUnit returns nothing\r\n\
    call ClearSelection()\r\n\
    call SelectUnit(whichUnit, true)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SelectGroupBJEnum takes nothing returns nothing\r\n\
    call SelectUnit( GetEnumUnit(), true )\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SelectGroupBJ takes group g returns nothing\r\n\
    call ClearSelection()\r\n\
    call ForGroup( g, function SelectGroupBJEnum )\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SelectUnitAdd takes unit whichUnit returns nothing\r\n\
    call SelectUnit(whichUnit, true)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SelectUnitRemove takes unit whichUnit returns nothing\r\n\
    call SelectUnit(whichUnit, false)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function ClearSelectionForPlayer takes player whichPlayer returns nothing\r\n\
    if (GetLocalPlayer() == whichPlayer) then\r\n\
        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
        call ClearSelection()\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SelectUnitForPlayerSingle takes unit whichUnit, player whichPlayer returns nothing\r\n\
    if (GetLocalPlayer() == whichPlayer) then\r\n\
        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
        call ClearSelection()\r\n\
        call SelectUnit(whichUnit, true)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SelectGroupForPlayerBJ takes group g, player whichPlayer returns nothing\r\n\
    if (GetLocalPlayer() == whichPlayer) then\r\n\
        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
        call ClearSelection()\r\n\
        call ForGroup( g, function SelectGroupBJEnum )\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SelectUnitAddForPlayer takes unit whichUnit, player whichPlayer returns nothing\r\n\
    if (GetLocalPlayer() == whichPlayer) then\r\n\
        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
        call SelectUnit(whichUnit, true)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SelectUnitRemoveForPlayer takes unit whichUnit, player whichPlayer returns nothing\r\n\
    if (GetLocalPlayer() == whichPlayer) then\r\n\
        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
        call SelectUnit(whichUnit, false)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetUnitLifeBJ takes unit whichUnit, real newValue returns nothing\r\n\
    call SetUnitState(whichUnit, UNIT_STATE_LIFE, RMaxBJ(0,newValue))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetUnitManaBJ takes unit whichUnit, real newValue returns nothing\r\n\
    call SetUnitState(whichUnit, UNIT_STATE_MANA, RMaxBJ(0,newValue))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetUnitLifePercentBJ takes unit whichUnit, real percent returns nothing\r\n\
    call SetUnitState(whichUnit, UNIT_STATE_LIFE, GetUnitState(whichUnit, UNIT_STATE_MAX_LIFE) * RMaxBJ(0,percent) * 0.01)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetUnitManaPercentBJ takes unit whichUnit, real percent returns nothing\r\n\
    call SetUnitState(whichUnit, UNIT_STATE_MANA, GetUnitState(whichUnit, UNIT_STATE_MAX_MANA) * RMaxBJ(0,percent) * 0.01)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function IsUnitDeadBJ takes unit whichUnit returns boolean\r\n\
    return GetUnitState(whichUnit, UNIT_STATE_LIFE) <= 0\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function IsUnitAliveBJ takes unit whichUnit returns boolean\r\n\
    return not IsUnitDeadBJ(whichUnit)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function IsUnitGroupDeadBJEnum takes nothing returns nothing\r\n\
    if not IsUnitDeadBJ(GetEnumUnit()) then\r\n\
        set bj_isUnitGroupDeadResult = false\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Returns true if every unit of the group is dead.\r\n\
//\r\n\
function IsUnitGroupDeadBJ takes group g returns boolean\r\n\
    // If the user wants the group destroyed, remember that fact and clear\r\n\
    // the flag, in case it is used again in the callback.\r\n\
    local boolean wantDestroy = bj_wantDestroyGroup\r\n\
    set bj_wantDestroyGroup = false\r\n\
\r\n\
    set bj_isUnitGroupDeadResult = true\r\n\
    call ForGroup(g, function IsUnitGroupDeadBJEnum)\r\n\
\r\n\
    // If the user wants the group destroyed, do so now.\r\n\
    if (wantDestroy) then\r\n\
        call DestroyGroup(g)\r\n\
    endif\r\n\
    return bj_isUnitGroupDeadResult\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function IsUnitGroupEmptyBJEnum takes nothing returns nothing\r\n\
    set bj_isUnitGroupEmptyResult = false\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Returns true if the group contains no units.\r\n\
//\r\n\
function IsUnitGroupEmptyBJ takes group g returns boolean\r\n\
    // If the user wants the group destroyed, remember that fact and clear\r\n\
    // the flag, in case it is used again in the callback.\r\n\
    local boolean wantDestroy = bj_wantDestroyGroup\r\n\
    set bj_wantDestroyGroup = false\r\n\
\r\n\
    set bj_isUnitGroupEmptyResult = true\r\n\
    call ForGroup(g, function IsUnitGroupEmptyBJEnum)\r\n\
\r\n\
    // If the user wants the group destroyed, do so now.\r\n\
    if (wantDestroy) then\r\n\
        call DestroyGroup(g)\r\n\
    endif\r\n\
    return bj_isUnitGroupEmptyResult\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function IsUnitGroupInRectBJEnum takes nothing returns nothing\r\n\
    if not RectContainsUnit(bj_isUnitGroupInRectRect, GetEnumUnit()) then\r\n\
        set bj_isUnitGroupInRectResult = false\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Returns true if every unit of the group is within the given rect.\r\n\
//\r\n\
function IsUnitGroupInRectBJ takes group g, rect r returns boolean\r\n\
    set bj_isUnitGroupInRectResult = true\r\n\
    set bj_isUnitGroupInRectRect = r\r\n\
    call ForGroup(g, function IsUnitGroupInRectBJEnum)\r\n\
    return bj_isUnitGroupInRectResult\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function IsUnitHiddenBJ takes unit whichUnit returns boolean\r\n\
    return IsUnitHidden(whichUnit)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function ShowUnitHide takes unit whichUnit returns nothing\r\n\
    call ShowUnit(whichUnit, false)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function ShowUnitShow takes unit whichUnit returns nothing\r\n\
    // Prevent dead heroes from being unhidden.\r\n\
    if (IsUnitType(whichUnit, UNIT_TYPE_HERO) and IsUnitDeadBJ(whichUnit)) then\r\n\
        return\r\n\
    endif\r\n\
\r\n\
    call ShowUnit(whichUnit, true)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function IssueHauntOrderAtLocBJFilter takes nothing returns boolean\r\n\
    return GetUnitTypeId(GetFilterUnit()) == 'ngol'\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function IssueHauntOrderAtLocBJ takes unit whichPeon, location loc returns boolean\r\n\
    local group g = null\r\n\
    local unit goldMine = null\r\n\
\r\n\
    // Search for a gold mine within a 1-cell radius of the specified location.\r\n\
    set g = CreateGroup()\r\n\
    call GroupEnumUnitsInRangeOfLoc(g, loc, 2*bj_CELLWIDTH, filterIssueHauntOrderAtLocBJ)\r\n\
    set goldMine = FirstOfGroup(g)\r\n\
    call DestroyGroup(g)\r\n\
\r\n\
    // If no mine was found, abort the request.\r\n\
    if (goldMine == null) then\r\n\
        return false\r\n\
    endif\r\n\
\r\n\
    // Issue the Haunt Gold Mine order.\r\n\
    return IssueTargetOrderById(whichPeon, 'ugol', goldMine)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function IssueBuildOrderByIdLocBJ takes unit whichPeon, integer unitId, location loc returns boolean\r\n\
    if (unitId == 'ugol') then\r\n\
        return IssueHauntOrderAtLocBJ(whichPeon, loc)\r\n\
    else\r\n\
        return IssueBuildOrderById(whichPeon, unitId, GetLocationX(loc), GetLocationY(loc))\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function IssueTrainOrderByIdBJ takes unit whichUnit, integer unitId returns boolean\r\n\
    return IssueImmediateOrderById(whichUnit, unitId)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GroupTrainOrderByIdBJ takes group g, integer unitId returns boolean\r\n\
    return GroupImmediateOrderById(g, unitId)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function IssueUpgradeOrderByIdBJ takes unit whichUnit, integer techId returns boolean\r\n\
    return IssueImmediateOrderById(whichUnit, techId)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetAttackedUnitBJ takes nothing returns unit\r\n\
    return GetTriggerUnit()\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetUnitFlyHeightBJ takes unit whichUnit, real newHeight, real rate returns nothing\r\n\
    call SetUnitFlyHeight(whichUnit, newHeight, rate)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetUnitTurnSpeedBJ takes unit whichUnit, real turnSpeed returns nothing\r\n\
    call SetUnitTurnSpeed(whichUnit, turnSpeed)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetUnitPropWindowBJ takes unit whichUnit, real propWindow returns nothing\r\n\
    local real angle = propWindow\r\n\
    if (angle <= 0) then\r\n\
        set angle = 1\r\n\
    elseif (angle >= 360) then\r\n\
        set angle = 359\r\n\
    endif\r\n\
    set angle = angle * bj_DEGTORAD\r\n\
\r\n\
    call SetUnitPropWindow(whichUnit, angle)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetUnitPropWindowBJ takes unit whichUnit returns real\r\n\
    return GetUnitPropWindow(whichUnit) * bj_RADTODEG\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetUnitDefaultPropWindowBJ takes unit whichUnit returns real\r\n\
    return GetUnitDefaultPropWindow(whichUnit)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetUnitBlendTimeBJ takes unit whichUnit, real blendTime returns nothing\r\n\
    call SetUnitBlendTime(whichUnit, blendTime)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetUnitAcquireRangeBJ takes unit whichUnit, real acquireRange returns nothing\r\n\
    call SetUnitAcquireRange(whichUnit, acquireRange)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function UnitSetCanSleepBJ takes unit whichUnit, boolean canSleep returns nothing\r\n\
    call UnitAddSleep(whichUnit, canSleep)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function UnitCanSleepBJ takes unit whichUnit returns boolean\r\n\
    return UnitCanSleep(whichUnit)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function UnitWakeUpBJ takes unit whichUnit returns nothing\r\n\
    call UnitWakeUp(whichUnit)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function UnitIsSleepingBJ takes unit whichUnit returns boolean\r\n\
    return UnitIsSleeping(whichUnit)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function WakePlayerUnitsEnum takes nothing returns nothing\r\n\
    call UnitWakeUp(GetEnumUnit())\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function WakePlayerUnits takes player whichPlayer returns nothing\r\n\
    local group g = CreateGroup()\r\n\
    call GroupEnumUnitsOfPlayer(g, whichPlayer, null)\r\n\
    call ForGroup(g, function WakePlayerUnitsEnum)\r\n\
    call DestroyGroup(g)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function EnableCreepSleepBJ takes boolean enable returns nothing\r\n\
    call SetPlayerState(Player(PLAYER_NEUTRAL_AGGRESSIVE), PLAYER_STATE_NO_CREEP_SLEEP, IntegerTertiaryOp(enable, 0, 1))\r\n\
\r\n\
    // If we're disabling, attempt to wake any already-sleeping creeps.\r\n\
    if (not enable) then\r\n\
        call WakePlayerUnits(Player(PLAYER_NEUTRAL_AGGRESSIVE))\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function UnitGenerateAlarms takes unit whichUnit, boolean generate returns boolean\r\n\
    return UnitIgnoreAlarm(whichUnit, not generate)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function DoesUnitGenerateAlarms takes unit whichUnit returns boolean\r\n\
    return not UnitIgnoreAlarmToggled(whichUnit)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function PauseAllUnitsBJEnum takes nothing returns nothing\r\n\
    call PauseUnit( GetEnumUnit(), bj_pauseAllUnitsFlag )\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Pause all units \r\n\
function PauseAllUnitsBJ takes boolean pause returns nothing\r\n\
    local integer index\r\n\
    local player  indexPlayer\r\n\
    local group   g\r\n\
\r\n\
    set bj_pauseAllUnitsFlag = pause\r\n\
    set g = CreateGroup()\r\n\
    set index = 0\r\n\
    loop\r\n\
        set indexPlayer = Player( index )\r\n\
\r\n\
        // If this is a computer slot, pause/resume the AI.\r\n\
        if (GetPlayerController( indexPlayer ) == MAP_CONTROL_COMPUTER) then\r\n\
            call PauseCompAI( indexPlayer, pause )\r\n\
        endif\r\n\
\r\n\
        // Enumerate and unpause every unit owned by the player.\r\n\
        call GroupEnumUnitsOfPlayer( g, indexPlayer, null )\r\n\
        call ForGroup( g, function PauseAllUnitsBJEnum )\r\n\
        call GroupClear( g )\r\n\
\r\n\
        set index = index + 1\r\n\
        exitwhen index == bj_MAX_PLAYER_SLOTS\r\n\
    endloop\r\n\
    call DestroyGroup(g)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function PauseUnitBJ takes boolean pause, unit whichUnit returns nothing\r\n\
    call PauseUnit(whichUnit, pause)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function IsUnitPausedBJ takes unit whichUnit returns boolean\r\n\
    return IsUnitPaused(whichUnit)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function UnitPauseTimedLifeBJ takes boolean flag, unit whichUnit returns nothing\r\n\
    call UnitPauseTimedLife(whichUnit, flag)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function UnitApplyTimedLifeBJ takes real duration, integer buffId, unit whichUnit returns nothing\r\n\
    call UnitApplyTimedLife(whichUnit, buffId, duration)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function UnitShareVisionBJ takes boolean share, unit whichUnit, player whichPlayer returns nothing\r\n\
    call UnitShareVision(whichUnit, whichPlayer, share)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function UnitRemoveBuffsBJ takes integer buffType, unit whichUnit returns nothing\r\n\
    if (buffType == bj_REMOVEBUFFS_POSITIVE) then\r\n\
        call UnitRemoveBuffs(whichUnit, true, false)\r\n\
    elseif (buffType == bj_REMOVEBUFFS_NEGATIVE) then\r\n\
        call UnitRemoveBuffs(whichUnit, false, true)\r\n\
    elseif (buffType == bj_REMOVEBUFFS_ALL) then\r\n\
        call UnitRemoveBuffs(whichUnit, true, true)\r\n\
    elseif (buffType == bj_REMOVEBUFFS_NONTLIFE) then\r\n\
        call UnitRemoveBuffsEx(whichUnit, true, true, false, false, false, true, false)\r\n\
    else\r\n\
        // Unrecognized dispel type - ignore the request.\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function UnitRemoveBuffsExBJ takes integer polarity, integer resist, unit whichUnit, boolean bTLife, boolean bAura returns nothing\r\n\
    local boolean bPos   = (polarity == bj_BUFF_POLARITY_EITHER) or (polarity == bj_BUFF_POLARITY_POSITIVE)\r\n\
    local boolean bNeg   = (polarity == bj_BUFF_POLARITY_EITHER) or (polarity == bj_BUFF_POLARITY_NEGATIVE)\r\n\
    local boolean bMagic = (resist == bj_BUFF_RESIST_BOTH) or (resist == bj_BUFF_RESIST_MAGIC)\r\n\
    local boolean bPhys  = (resist == bj_BUFF_RESIST_BOTH) or (resist == bj_BUFF_RESIST_PHYSICAL)\r\n\
\r\n\
    call UnitRemoveBuffsEx(whichUnit, bPos, bNeg, bMagic, bPhys, bTLife, bAura, false)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function UnitCountBuffsExBJ takes integer polarity, integer resist, unit whichUnit, boolean bTLife, boolean bAura returns integer\r\n\
    local boolean bPos   = (polarity == bj_BUFF_POLARITY_EITHER) or (polarity == bj_BUFF_POLARITY_POSITIVE)\r\n\
    local boolean bNeg   = (polarity == bj_BUFF_POLARITY_EITHER) or (polarity == bj_BUFF_POLARITY_NEGATIVE)\r\n\
    local boolean bMagic = (resist == bj_BUFF_RESIST_BOTH) or (resist == bj_BUFF_RESIST_MAGIC)\r\n\
    local boolean bPhys  = (resist == bj_BUFF_RESIST_BOTH) or (resist == bj_BUFF_RESIST_PHYSICAL)\r\n\
\r\n\
    return UnitCountBuffsEx(whichUnit, bPos, bNeg, bMagic, bPhys, bTLife, bAura, false)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function UnitRemoveAbilityBJ takes integer abilityId, unit whichUnit returns boolean\r\n\
    return UnitRemoveAbility(whichUnit, abilityId)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function UnitAddAbilityBJ takes integer abilityId, unit whichUnit returns boolean\r\n\
    return UnitAddAbility(whichUnit, abilityId)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function UnitRemoveTypeBJ takes unittype whichType, unit whichUnit returns boolean\r\n\
    return UnitRemoveType(whichUnit, whichType)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function UnitAddTypeBJ takes unittype whichType, unit whichUnit returns boolean\r\n\
    return UnitAddType(whichUnit, whichType)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function UnitMakeAbilityPermanentBJ takes boolean permanent, integer abilityId, unit whichUnit returns boolean\r\n\
    return UnitMakeAbilityPermanent(whichUnit, permanent, abilityId)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetUnitExplodedBJ takes unit whichUnit, boolean exploded returns nothing\r\n\
    call SetUnitExploded(whichUnit, exploded)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function ExplodeUnitBJ takes unit whichUnit returns nothing\r\n\
    call SetUnitExploded(whichUnit, true)\r\n\
    call KillUnit(whichUnit)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetTransportUnitBJ takes nothing returns unit\r\n\
    return GetTransportUnit()\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetLoadedUnitBJ takes nothing returns unit\r\n\
    return GetLoadedUnit()\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function IsUnitInTransportBJ takes unit whichUnit, unit whichTransport returns boolean\r\n\
    return IsUnitInTransport(whichUnit, whichTransport)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function IsUnitLoadedBJ takes unit whichUnit returns boolean\r\n\
    return IsUnitLoaded(whichUnit)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function IsUnitIllusionBJ takes unit whichUnit returns boolean\r\n\
    return IsUnitIllusion(whichUnit)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// This attempts to replace a unit with a new unit type by creating a new\r\n\
// unit of the desired type using the old unit's location, facing, etc.\r\n\
//\r\n\
function ReplaceUnitBJ takes unit whichUnit, integer newUnitId, integer unitStateMethod returns unit\r\n\
    local unit    oldUnit = whichUnit\r\n\
    local unit    newUnit\r\n\
    local boolean wasHidden\r\n\
    local integer index\r\n\
    local item    indexItem\r\n\
    local real    oldRatio\r\n\
\r\n\
    // If we have bogus data, don't attempt the replace.\r\n\
    if (oldUnit == null) then\r\n\
        set bj_lastReplacedUnit = oldUnit\r\n\
        return oldUnit\r\n\
    endif\r\n\
\r\n\
    // Hide the original unit.\r\n\
    set wasHidden = IsUnitHidden(oldUnit)\r\n\
    call ShowUnit(oldUnit, false)\r\n\
\r\n\
    // Create the replacement unit.\r\n\
    if (newUnitId == 'ugol') then\r\n\
        set newUnit = CreateBlightedGoldmine(GetOwningPlayer(oldUnit), GetUnitX(oldUnit), GetUnitY(oldUnit), GetUnitFacing(oldUnit))\r\n\
    else\r\n\
        set newUnit = CreateUnit(GetOwningPlayer(oldUnit), newUnitId, GetUnitX(oldUnit), GetUnitY(oldUnit), GetUnitFacing(oldUnit))\r\n\
    endif\r\n\
\r\n\
    // Set the unit's life and mana according to the requested method.\r\n\
    if (unitStateMethod == bj_UNIT_STATE_METHOD_RELATIVE) then\r\n\
        // Set the replacement's current/max life ratio to that of the old unit.\r\n\
        // If both units have mana, do the same for mana.\r\n\
        if (GetUnitState(oldUnit, UNIT_STATE_MAX_LIFE) > 0) then\r\n\
            set oldRatio = GetUnitState(oldUnit, UNIT_STATE_LIFE) / GetUnitState(oldUnit, UNIT_STATE_MAX_LIFE)\r\n\
            call SetUnitState(newUnit, UNIT_STATE_LIFE, oldRatio * GetUnitState(newUnit, UNIT_STATE_MAX_LIFE))\r\n\
        endif\r\n\
\r\n\
        if (GetUnitState(oldUnit, UNIT_STATE_MAX_MANA) > 0) and (GetUnitState(newUnit, UNIT_STATE_MAX_MANA) > 0) then\r\n\
            set oldRatio = GetUnitState(oldUnit, UNIT_STATE_MANA) / GetUnitState(oldUnit, UNIT_STATE_MAX_MANA)\r\n\
            call SetUnitState(newUnit, UNIT_STATE_MANA, oldRatio * GetUnitState(newUnit, UNIT_STATE_MAX_MANA))\r\n\
        endif\r\n\
    elseif (unitStateMethod == bj_UNIT_STATE_METHOD_ABSOLUTE) then\r\n\
        // Set the replacement's current life to that of the old unit.\r\n\
        // If the new unit has mana, do the same for mana.\r\n\
        call SetUnitState(newUnit, UNIT_STATE_LIFE, GetUnitState(oldUnit, UNIT_STATE_LIFE))\r\n\
        if (GetUnitState(newUnit, UNIT_STATE_MAX_MANA) > 0) then\r\n\
            call SetUnitState(newUnit, UNIT_STATE_MANA, GetUnitState(oldUnit, UNIT_STATE_MANA))\r\n\
        endif\r\n\
    elseif (unitStateMethod == bj_UNIT_STATE_METHOD_DEFAULTS) then\r\n\
        // The newly created unit should already have default life and mana.\r\n\
    elseif (unitStateMethod == bj_UNIT_STATE_METHOD_MAXIMUM) then\r\n\
        // Use max life and mana.\r\n\
        call SetUnitState(newUnit, UNIT_STATE_LIFE, GetUnitState(newUnit, UNIT_STATE_MAX_LIFE))\r\n\
        call SetUnitState(newUnit, UNIT_STATE_MANA, GetUnitState(newUnit, UNIT_STATE_MAX_MANA))\r\n\
    else\r\n\
        // Unrecognized unit state method - ignore the request.\r\n\
    endif\r\n\
\r\n\
    // Mirror properties of the old unit onto the new unit.\r\n\
    //call PauseUnit(newUnit, IsUnitPaused(oldUnit))\r\n\
    call SetResourceAmount(newUnit, GetResourceAmount(oldUnit))\r\n\
\r\n\
    // If both the old and new units are heroes, handle their hero info.\r\n\
    if (IsUnitType(oldUnit, UNIT_TYPE_HERO) and IsUnitType(newUnit, UNIT_TYPE_HERO)) then\r\n\
        call SetHeroXP(newUnit, GetHeroXP(oldUnit), false)\r\n\
\r\n\
        set index = 0\r\n\
        loop\r\n\
            set indexItem = UnitItemInSlot(oldUnit, index)\r\n\
            if (indexItem != null) then\r\n\
                call UnitRemoveItem(oldUnit, indexItem)\r\n\
                call UnitAddItem(newUnit, indexItem)\r\n\
            endif\r\n\
\r\n\
            set index = index + 1\r\n\
            exitwhen index >= bj_MAX_INVENTORY\r\n\
        endloop\r\n\
    endif\r\n\
\r\n\
    // Remove or kill the original unit.  It is sometimes unsafe to remove\r\n\
    // hidden units, so kill the original unit if it was previously hidden.\r\n\
    if wasHidden then\r\n\
        call KillUnit(oldUnit)\r\n\
        call RemoveUnit(oldUnit)\r\n\
    else\r\n\
        call RemoveUnit(oldUnit)\r\n\
    endif\r\n\
\r\n\
    set bj_lastReplacedUnit = newUnit\r\n\
    return newUnit\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetLastReplacedUnitBJ takes nothing returns unit\r\n\
    return bj_lastReplacedUnit\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetUnitPositionLocFacingBJ takes unit whichUnit, location loc, real facing returns nothing\r\n\
    call SetUnitPositionLoc(whichUnit, loc)\r\n\
    call SetUnitFacing(whichUnit, facing)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetUnitPositionLocFacingLocBJ takes unit whichUnit, location loc, location lookAt returns nothing\r\n\
    call SetUnitPositionLoc(whichUnit, loc)\r\n\
    call SetUnitFacing(whichUnit, AngleBetweenPoints(loc, lookAt))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function AddItemToStockBJ takes integer itemId, unit whichUnit, integer currentStock, integer stockMax returns nothing\r\n\
    call AddItemToStock(whichUnit, itemId, currentStock, stockMax)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function AddUnitToStockBJ takes integer unitId, unit whichUnit, integer currentStock, integer stockMax returns nothing\r\n\
    call AddUnitToStock(whichUnit, unitId, currentStock, stockMax)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function RemoveItemFromStockBJ takes integer itemId, unit whichUnit returns nothing\r\n\
    call RemoveItemFromStock(whichUnit, itemId)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function RemoveUnitFromStockBJ takes integer unitId, unit whichUnit returns nothing\r\n\
    call RemoveUnitFromStock(whichUnit, unitId)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetUnitUseFoodBJ takes boolean enable, unit whichUnit returns nothing\r\n\
    call SetUnitUseFood(whichUnit, enable)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function UnitDamagePointLoc takes unit whichUnit, real delay, real radius, location loc, real amount, attacktype whichAttack, damagetype whichDamage returns boolean\r\n\
    return UnitDamagePoint(whichUnit, delay, radius, GetLocationX(loc), GetLocationY(loc), amount, true, false, whichAttack, whichDamage, WEAPON_TYPE_WHOKNOWS)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function UnitDamageTargetBJ takes unit whichUnit, unit target, real amount, attacktype whichAttack, damagetype whichDamage returns boolean\r\n\
    return UnitDamageTarget(whichUnit, target, amount, true, false, whichAttack, whichDamage, WEAPON_TYPE_WHOKNOWS)\r\n\
endfunction\r\n\
\r\n\
\r\n\
\r\n\
//***************************************************************************\r\n\
//*\r\n\
//*  Destructable Utility Functions\r\n\
//*\r\n\
//***************************************************************************\r\n\
\r\n\
//===========================================================================\r\n\
function CreateDestructableLoc takes integer objectid, location loc, real facing, real scale, integer variation returns destructable\r\n\
    set bj_lastCreatedDestructable = CreateDestructable(objectid, GetLocationX(loc), GetLocationY(loc), facing, scale, variation)\r\n\
    return bj_lastCreatedDestructable\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CreateDeadDestructableLocBJ takes integer objectid, location loc, real facing, real scale, integer variation returns destructable\r\n\
    set bj_lastCreatedDestructable = CreateDeadDestructable(objectid, GetLocationX(loc), GetLocationY(loc), facing, scale, variation)\r\n\
    return bj_lastCreatedDestructable\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetLastCreatedDestructable takes nothing returns destructable\r\n\
    return bj_lastCreatedDestructable\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function ShowDestructableBJ takes boolean flag, destructable d returns nothing\r\n\
    call ShowDestructable(d, flag)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetDestructableInvulnerableBJ takes destructable d, boolean flag returns nothing\r\n\
    call SetDestructableInvulnerable(d, flag)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function IsDestructableInvulnerableBJ takes destructable d returns boolean\r\n\
    return IsDestructableInvulnerable(d)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetDestructableLoc takes destructable whichDestructable returns location\r\n\
    return Location(GetDestructableX(whichDestructable), GetDestructableY(whichDestructable))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function EnumDestructablesInRectAll takes rect r, code actionFunc returns nothing\r\n\
    call EnumDestructablesInRect(r, null, actionFunc)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function EnumDestructablesInCircleBJFilter takes nothing returns boolean\r\n\
    local location destLoc = GetDestructableLoc(GetFilterDestructable())\r\n\
    local boolean result\r\n\
\r\n\
    set result = DistanceBetweenPoints(destLoc, bj_enumDestructableCenter) <= bj_enumDestructableRadius\r\n\
    call RemoveLocation(destLoc)\r\n\
    return result\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function IsDestructableDeadBJ takes destructable d returns boolean\r\n\
    return GetDestructableLife(d) <= 0\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function IsDestructableAliveBJ takes destructable d returns boolean\r\n\
    return not IsDestructableDeadBJ(d)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// See GroupPickRandomUnitEnum for the details of this algorithm.\r\n\
//\r\n\
function RandomDestructableInRectBJEnum takes nothing returns nothing\r\n\
    set bj_destRandomConsidered = bj_destRandomConsidered + 1\r\n\
    if (GetRandomInt(1,bj_destRandomConsidered) == 1) then\r\n\
        set bj_destRandomCurrentPick = GetEnumDestructable()\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Picks a random destructable from within a rect, matching a condition\r\n\
//\r\n\
function RandomDestructableInRectBJ takes rect r, boolexpr filter returns destructable\r\n\
    set bj_destRandomConsidered = 0\r\n\
    set bj_destRandomCurrentPick = null\r\n\
    call EnumDestructablesInRect(r, filter, function RandomDestructableInRectBJEnum)\r\n\
    call DestroyBoolExpr(filter)\r\n\
    return bj_destRandomCurrentPick\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Picks a random destructable from within a rect\r\n\
//\r\n\
function RandomDestructableInRectSimpleBJ takes rect r returns destructable\r\n\
    return RandomDestructableInRectBJ(r, null)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Enumerates within a rect, with a filter to narrow the enumeration down\r\n\
// objects within a circular area.\r\n\
//\r\n\
function EnumDestructablesInCircleBJ takes real radius, location loc, code actionFunc returns nothing\r\n\
    local rect r\r\n\
\r\n\
    if (radius >= 0) then\r\n\
        set bj_enumDestructableCenter = loc\r\n\
        set bj_enumDestructableRadius = radius\r\n\
        set r = GetRectFromCircleBJ(loc, radius)\r\n\
        call EnumDestructablesInRect(r, filterEnumDestructablesInCircleBJ, actionFunc)\r\n\
        call RemoveRect(r)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetDestructableLifePercentBJ takes destructable d, real percent returns nothing\r\n\
    call SetDestructableLife(d, GetDestructableMaxLife(d) * percent * 0.01)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetDestructableMaxLifeBJ takes destructable d, real max returns nothing\r\n\
    call SetDestructableMaxLife(d, max)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function ModifyGateBJ takes integer gateOperation, destructable d returns nothing\r\n\
    if (gateOperation == bj_GATEOPERATION_CLOSE) then\r\n\
        if (GetDestructableLife(d) <= 0) then\r\n\
            call DestructableRestoreLife(d, GetDestructableMaxLife(d), true)\r\n\
        endif\r\n\
        call SetDestructableAnimation(d, \"stand\")\r\n\
    elseif (gateOperation == bj_GATEOPERATION_OPEN) then\r\n\
        if (GetDestructableLife(d) > 0) then\r\n\
            call KillDestructable(d)\r\n\
        endif\r\n\
        call SetDestructableAnimation(d, \"death alternate\")\r\n\
    elseif (gateOperation == bj_GATEOPERATION_DESTROY) then\r\n\
        if (GetDestructableLife(d) > 0) then\r\n\
            call KillDestructable(d)\r\n\
        endif\r\n\
        call SetDestructableAnimation(d, \"death\")\r\n\
    else\r\n\
        // Unrecognized gate state - ignore the request.\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Determine the elevator's height from its occlusion height.\r\n\
//\r\n\
function GetElevatorHeight takes destructable d returns integer\r\n\
    local integer height\r\n\
\r\n\
    set height = 1 + R2I(GetDestructableOccluderHeight(d) / bj_CLIFFHEIGHT)\r\n\
    if (height < 1) or (height > 3) then\r\n\
        set height = 1\r\n\
    endif\r\n\
    return height\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// To properly animate an elevator, we must know not only what height we\r\n\
// want to change to, but also what height we are currently at.  This code\r\n\
// determines the elevator's current height from its occlusion height.\r\n\
// Arbitrarily changing an elevator's occlusion height is thus inadvisable.\r\n\
//\r\n\
function ChangeElevatorHeight takes destructable d, integer newHeight returns nothing\r\n\
    local integer oldHeight\r\n\
\r\n\
    // Cap the new height within the supported range.\r\n\
    set newHeight = IMaxBJ(1, newHeight)\r\n\
    set newHeight = IMinBJ(3, newHeight)\r\n\
\r\n\
    // Find out what height the elevator is already at.\r\n\
    set oldHeight = GetElevatorHeight(d)\r\n\
\r\n\
    // Set the elevator's occlusion height.\r\n\
    call SetDestructableOccluderHeight(d, bj_CLIFFHEIGHT*(newHeight-1))\r\n\
\r\n\
    if (newHeight == 1) then\r\n\
        if (oldHeight == 2) then\r\n\
            call SetDestructableAnimation(d, \"birth\")\r\n\
            call QueueDestructableAnimation(d, \"stand\")\r\n\
        elseif (oldHeight == 3) then\r\n\
            call SetDestructableAnimation(d, \"birth third\")\r\n\
            call QueueDestructableAnimation(d, \"stand\")\r\n\
        else\r\n\
            // Unrecognized old height - snap to new height.\r\n\
            call SetDestructableAnimation(d, \"stand\")\r\n\
        endif\r\n\
    elseif (newHeight == 2) then\r\n\
        if (oldHeight == 1) then\r\n\
            call SetDestructableAnimation(d, \"death\")\r\n\
            call QueueDestructableAnimation(d, \"stand second\")\r\n\
        elseif (oldHeight == 3) then\r\n\
            call SetDestructableAnimation(d, \"birth second\")\r\n\
            call QueueDestructableAnimation(d, \"stand second\")\r\n\
        else\r\n\
            // Unrecognized old height - snap to new height.\r\n\
            call SetDestructableAnimation(d, \"stand second\")\r\n\
        endif\r\n\
    elseif (newHeight == 3) then\r\n\
        if (oldHeight == 1) then\r\n\
            call SetDestructableAnimation(d, \"death third\")\r\n\
            call QueueDestructableAnimation(d, \"stand third\")\r\n\
        elseif (oldHeight == 2) then\r\n\
            call SetDestructableAnimation(d, \"death second\")\r\n\
            call QueueDestructableAnimation(d, \"stand third\")\r\n\
        else\r\n\
            // Unrecognized old height - snap to new height.\r\n\
            call SetDestructableAnimation(d, \"stand third\")\r\n\
        endif\r\n\
    else\r\n\
        // Unrecognized new height - ignore the request.\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Grab the unit and throw his own coords in his face, forcing him to push\r\n\
// and shove until he finds a spot where noone will bother him.\r\n\
//\r\n\
function NudgeUnitsInRectEnum takes nothing returns nothing\r\n\
    local unit nudgee = GetEnumUnit()\r\n\
\r\n\
    call SetUnitPosition(nudgee, GetUnitX(nudgee), GetUnitY(nudgee))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function NudgeItemsInRectEnum takes nothing returns nothing\r\n\
    local item nudgee = GetEnumItem()\r\n\
\r\n\
    call SetItemPosition(nudgee, GetItemX(nudgee), GetItemY(nudgee))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Nudge the items and units within a given rect ever so gently, so as to\r\n\
// encourage them to find locations where they can peacefully coexist with\r\n\
// pathing restrictions and live happy, fruitful lives.\r\n\
//\r\n\
function NudgeObjectsInRect takes rect nudgeArea returns nothing\r\n\
    local group        g\r\n\
\r\n\
    set g = CreateGroup()\r\n\
    call GroupEnumUnitsInRect(g, nudgeArea, null)\r\n\
    call ForGroup(g, function NudgeUnitsInRectEnum)\r\n\
    call DestroyGroup(g)\r\n\
\r\n\
    call EnumItemsInRect(nudgeArea, null, function NudgeItemsInRectEnum)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function NearbyElevatorExistsEnum takes nothing returns nothing\r\n\
    local destructable d     = GetEnumDestructable()\r\n\
    local integer      dType = GetDestructableTypeId(d)\r\n\
\r\n\
    if (dType == bj_ELEVATOR_CODE01) or (dType == bj_ELEVATOR_CODE02) then\r\n\
        set bj_elevatorNeighbor = d\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function NearbyElevatorExists takes real x, real y returns boolean\r\n\
    local real findThreshold = 32\r\n\
    local rect r\r\n\
\r\n\
    // If another elevator is overlapping this one, ignore the wall.\r\n\
    set r = Rect(x - findThreshold, y - findThreshold, x + findThreshold, y + findThreshold)\r\n\
    set bj_elevatorNeighbor = null\r\n\
    call EnumDestructablesInRect(r, null, function NearbyElevatorExistsEnum)\r\n\
    call RemoveRect(r)\r\n\
\r\n\
    return bj_elevatorNeighbor != null\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function FindElevatorWallBlockerEnum takes nothing returns nothing\r\n\
    set bj_elevatorWallBlocker = GetEnumDestructable()\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// This toggles pathing on or off for one wall of an elevator by killing\r\n\
// or reviving a pathing blocker at the appropriate location (and creating\r\n\
// the pathing blocker in the first place, if it does not yet exist).\r\n\
//\r\n\
function ChangeElevatorWallBlocker takes real x, real y, real facing, boolean open returns nothing\r\n\
    local destructable blocker = null\r\n\
    local real         findThreshold = 32\r\n\
    local real         nudgeLength   = 4.25 * bj_CELLWIDTH\r\n\
    local real         nudgeWidth    = 1.25 * bj_CELLWIDTH\r\n\
    local rect         r\r\n\
\r\n\
    // Search for the pathing blocker within the general area.\r\n\
    set r = Rect(x - findThreshold, y - findThreshold, x + findThreshold, y + findThreshold)\r\n\
    set bj_elevatorWallBlocker = null\r\n\
    call EnumDestructablesInRect(r, null, function FindElevatorWallBlockerEnum)\r\n\
    call RemoveRect(r)\r\n\
    set blocker = bj_elevatorWallBlocker\r\n\
\r\n\
    // Ensure that the blocker exists.\r\n\
    if (blocker == null) then\r\n\
        set blocker = CreateDeadDestructable(bj_ELEVATOR_BLOCKER_CODE, x, y, facing, 1, 0)\r\n\
    elseif (GetDestructableTypeId(blocker) != bj_ELEVATOR_BLOCKER_CODE) then\r\n\
        // If a different destructible exists in the blocker's spot, ignore\r\n\
        // the request.  (Two destructibles cannot occupy the same location\r\n\
        // on the map, so we cannot create an elevator blocker here.)\r\n\
        return\r\n\
    endif\r\n\
\r\n\
    if (open) then\r\n\
        // Ensure that the blocker is dead.\r\n\
        if (GetDestructableLife(blocker) > 0) then\r\n\
            call KillDestructable(blocker)\r\n\
        endif\r\n\
    else\r\n\
        // Ensure that the blocker is alive.\r\n\
        if (GetDestructableLife(blocker) <= 0) then\r\n\
            call DestructableRestoreLife(blocker, GetDestructableMaxLife(blocker), false)\r\n\
        endif\r\n\
\r\n\
        // Nudge any objects standing in the blocker's way.\r\n\
        if (facing == 0) then\r\n\
            set r = Rect(x - nudgeWidth/2, y - nudgeLength/2, x + nudgeWidth/2, y + nudgeLength/2)\r\n\
            call NudgeObjectsInRect(r)\r\n\
            call RemoveRect(r)\r\n\
        elseif (facing == 90) then\r\n\
            set r = Rect(x - nudgeLength/2, y - nudgeWidth/2, x + nudgeLength/2, y + nudgeWidth/2)\r\n\
            call NudgeObjectsInRect(r)\r\n\
            call RemoveRect(r)\r\n\
        else\r\n\
            // Unrecognized blocker angle - don't nudge anything.\r\n\
        endif\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function ChangeElevatorWalls takes boolean open, integer walls, destructable d returns nothing\r\n\
    local real x = GetDestructableX(d)\r\n\
    local real y = GetDestructableY(d)\r\n\
    local real distToBlocker = 192\r\n\
    local real distToNeighbor = 256\r\n\
\r\n\
    if (walls == bj_ELEVATOR_WALL_TYPE_ALL) or (walls == bj_ELEVATOR_WALL_TYPE_EAST) then\r\n\
        if (not NearbyElevatorExists(x + distToNeighbor, y)) then\r\n\
            call ChangeElevatorWallBlocker(x + distToBlocker, y, 0, open)\r\n\
        endif\r\n\
    endif\r\n\
\r\n\
    if (walls == bj_ELEVATOR_WALL_TYPE_ALL) or (walls == bj_ELEVATOR_WALL_TYPE_NORTH) then\r\n\
        if (not NearbyElevatorExists(x, y + distToNeighbor)) then\r\n\
            call ChangeElevatorWallBlocker(x, y + distToBlocker, 90, open)\r\n\
        endif\r\n\
    endif\r\n\
\r\n\
    if (walls == bj_ELEVATOR_WALL_TYPE_ALL) or (walls == bj_ELEVATOR_WALL_TYPE_SOUTH) then\r\n\
        if (not NearbyElevatorExists(x, y - distToNeighbor)) then\r\n\
            call ChangeElevatorWallBlocker(x, y - distToBlocker, 90, open)\r\n\
        endif\r\n\
    endif\r\n\
\r\n\
    if (walls == bj_ELEVATOR_WALL_TYPE_ALL) or (walls == bj_ELEVATOR_WALL_TYPE_WEST) then\r\n\
        if (not NearbyElevatorExists(x - distToNeighbor, y)) then\r\n\
            call ChangeElevatorWallBlocker(x - distToBlocker, y, 0, open)\r\n\
        endif\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
\r\n\
\r\n\
//***************************************************************************\r\n\
//*\r\n\
//*  Neutral Building Utility Functions\r\n\
//*\r\n\
//***************************************************************************\r\n\
\r\n\
//===========================================================================\r\n\
function WaygateActivateBJ takes boolean activate, unit waygate returns nothing\r\n\
    call WaygateActivate(waygate, activate)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function WaygateIsActiveBJ takes unit waygate returns boolean\r\n\
    return WaygateIsActive(waygate)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function WaygateSetDestinationLocBJ takes unit waygate, location loc returns nothing\r\n\
    call WaygateSetDestination(waygate, GetLocationX(loc), GetLocationY(loc))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function WaygateGetDestinationLocBJ takes unit waygate returns location\r\n\
    return Location(WaygateGetDestinationX(waygate), WaygateGetDestinationY(waygate))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function UnitSetUsesAltIconBJ takes boolean flag, unit whichUnit returns nothing\r\n\
    call UnitSetUsesAltIcon(whichUnit, flag)\r\n\
endfunction\r\n\
\r\n\
\r\n\
\r\n\
//***************************************************************************\r\n\
//*\r\n\
//*  UI Utility Functions\r\n\
//*\r\n\
//***************************************************************************\r\n\
\r\n\
//===========================================================================\r\n\
function ForceUIKeyBJ takes player whichPlayer, string key returns nothing\r\n\
    if (GetLocalPlayer() == whichPlayer) then\r\n\
        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
        call ForceUIKey(key)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function ForceUICancelBJ takes player whichPlayer returns nothing\r\n\
    if (GetLocalPlayer() == whichPlayer) then\r\n\
        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
        call ForceUICancel()\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
\r\n\
\r\n\
//***************************************************************************\r\n\
//*\r\n\
//*  Group and Force Utility Functions\r\n\
//*\r\n\
//***************************************************************************\r\n\
\r\n\
//===========================================================================\r\n\
function ForGroupBJ takes group whichGroup, code callback returns nothing\r\n\
    // If the user wants the group destroyed, remember that fact and clear\r\n\
    // the flag, in case it is used again in the callback.\r\n\
    local boolean wantDestroy = bj_wantDestroyGroup\r\n\
    set bj_wantDestroyGroup = false\r\n\
\r\n\
    call ForGroup(whichGroup, callback)\r\n\
\r\n\
    // If the user wants the group destroyed, do so now.\r\n\
    if (wantDestroy) then\r\n\
        call DestroyGroup(whichGroup)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GroupAddUnitSimple takes unit whichUnit, group whichGroup returns nothing\r\n\
    call GroupAddUnit(whichGroup, whichUnit)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GroupRemoveUnitSimple takes unit whichUnit, group whichGroup returns nothing\r\n\
    call GroupRemoveUnit(whichGroup, whichUnit)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GroupAddGroupEnum takes nothing returns nothing\r\n\
    call GroupAddUnit(bj_groupAddGroupDest, GetEnumUnit())\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GroupAddGroup takes group sourceGroup, group destGroup returns nothing\r\n\
    // If the user wants the group destroyed, remember that fact and clear\r\n\
    // the flag, in case it is used again in the callback.\r\n\
    local boolean wantDestroy = bj_wantDestroyGroup\r\n\
    set bj_wantDestroyGroup = false\r\n\
\r\n\
    set bj_groupAddGroupDest = destGroup\r\n\
    call ForGroup(sourceGroup, function GroupAddGroupEnum)\r\n\
\r\n\
    // If the user wants the group destroyed, do so now.\r\n\
    if (wantDestroy) then\r\n\
        call DestroyGroup(sourceGroup)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GroupRemoveGroupEnum takes nothing returns nothing\r\n\
    call GroupRemoveUnit(bj_groupRemoveGroupDest, GetEnumUnit())\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GroupRemoveGroup takes group sourceGroup, group destGroup returns nothing\r\n\
    // If the user wants the group destroyed, remember that fact and clear\r\n\
    // the flag, in case it is used again in the callback.\r\n\
    local boolean wantDestroy = bj_wantDestroyGroup\r\n\
    set bj_wantDestroyGroup = false\r\n\
\r\n\
    set bj_groupRemoveGroupDest = destGroup\r\n\
    call ForGroup(sourceGroup, function GroupRemoveGroupEnum)\r\n\
\r\n\
    // If the user wants the group destroyed, do so now.\r\n\
    if (wantDestroy) then\r\n\
        call DestroyGroup(sourceGroup)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function ForceAddPlayerSimple takes player whichPlayer, force whichForce returns nothing\r\n\
    call ForceAddPlayer(whichForce, whichPlayer)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function ForceRemovePlayerSimple takes player whichPlayer, force whichForce returns nothing\r\n\
    call ForceRemovePlayer(whichForce, whichPlayer)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Consider each unit, one at a time, keeping a \"current pick\".   Once all units\r\n\
// are considered, this \"current pick\" will be the resulting random unit.\r\n\
//\r\n\
// The chance of picking a given unit over the \"current pick\" is 1/N, where N is\r\n\
// the number of units considered thusfar (including the current consideration).\r\n\
//\r\n\
function GroupPickRandomUnitEnum takes nothing returns nothing\r\n\
    set bj_groupRandomConsidered = bj_groupRandomConsidered + 1\r\n\
    if (GetRandomInt(1,bj_groupRandomConsidered) == 1) then\r\n\
        set bj_groupRandomCurrentPick = GetEnumUnit()\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Picks a random unit from a group.\r\n\
//\r\n\
function GroupPickRandomUnit takes group whichGroup returns unit\r\n\
    // If the user wants the group destroyed, remember that fact and clear\r\n\
    // the flag, in case it is used again in the callback.\r\n\
    local boolean wantDestroy = bj_wantDestroyGroup\r\n\
    set bj_wantDestroyGroup = false\r\n\
\r\n\
    set bj_groupRandomConsidered = 0\r\n\
    set bj_groupRandomCurrentPick = null\r\n\
    call ForGroup(whichGroup, function GroupPickRandomUnitEnum)\r\n\
\r\n\
    // If the user wants the group destroyed, do so now.\r\n\
    if (wantDestroy) then\r\n\
        call DestroyGroup(whichGroup)\r\n\
    endif\r\n\
    return bj_groupRandomCurrentPick\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// See GroupPickRandomUnitEnum for the details of this algorithm.\r\n\
//\r\n\
function ForcePickRandomPlayerEnum takes nothing returns nothing\r\n\
    set bj_forceRandomConsidered = bj_forceRandomConsidered + 1\r\n\
    if (GetRandomInt(1,bj_forceRandomConsidered) == 1) then\r\n\
        set bj_forceRandomCurrentPick = GetEnumPlayer()\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Picks a random player from a force.\r\n\
//\r\n\
function ForcePickRandomPlayer takes force whichForce returns player\r\n\
    set bj_forceRandomConsidered = 0\r\n\
    set bj_forceRandomCurrentPick = null\r\n\
    call ForForce(whichForce, function ForcePickRandomPlayerEnum)\r\n\
    return bj_forceRandomCurrentPick\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function EnumUnitsSelected takes player whichPlayer, boolexpr enumFilter, code enumAction returns nothing\r\n\
    local group g = CreateGroup()\r\n\
    call SyncSelections()\r\n\
    call GroupEnumUnitsSelected(g, whichPlayer, enumFilter)\r\n\
    call DestroyBoolExpr(enumFilter)\r\n\
    call ForGroup(g, enumAction)\r\n\
    call DestroyGroup(g)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetUnitsInRectMatching takes rect r, boolexpr filter returns group\r\n\
    local group g = CreateGroup()\r\n\
    call GroupEnumUnitsInRect(g, r, filter)\r\n\
    call DestroyBoolExpr(filter)\r\n\
    return g\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetUnitsInRectAll takes rect r returns group\r\n\
    return GetUnitsInRectMatching(r, null)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetUnitsInRectOfPlayerFilter takes nothing returns boolean\r\n\
    return GetOwningPlayer(GetFilterUnit()) == bj_groupEnumOwningPlayer\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetUnitsInRectOfPlayer takes rect r, player whichPlayer returns group\r\n\
    local group g = CreateGroup()\r\n\
    set bj_groupEnumOwningPlayer = whichPlayer\r\n\
    call GroupEnumUnitsInRect(g, r, filterGetUnitsInRectOfPlayer)\r\n\
    return g\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetUnitsInRangeOfLocMatching takes real radius, location whichLocation, boolexpr filter returns group\r\n\
    local group g = CreateGroup()\r\n\
    call GroupEnumUnitsInRangeOfLoc(g, whichLocation, radius, filter)\r\n\
    call DestroyBoolExpr(filter)\r\n\
    return g\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetUnitsInRangeOfLocAll takes real radius, location whichLocation returns group\r\n\
    return GetUnitsInRangeOfLocMatching(radius, whichLocation, null)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetUnitsOfTypeIdAllFilter takes nothing returns boolean\r\n\
    return GetUnitTypeId(GetFilterUnit()) == bj_groupEnumTypeId\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetUnitsOfTypeIdAll takes integer unitid returns group\r\n\
    local group   result = CreateGroup()\r\n\
    local group   g      = CreateGroup()\r\n\
    local integer index\r\n\
\r\n\
    set index = 0\r\n\
    loop\r\n\
        set bj_groupEnumTypeId = unitid\r\n\
        call GroupClear(g)\r\n\
        call GroupEnumUnitsOfPlayer(g, Player(index), filterGetUnitsOfTypeIdAll)\r\n\
        call GroupAddGroup(g, result)\r\n\
\r\n\
        set index = index + 1\r\n\
        exitwhen index == bj_MAX_PLAYER_SLOTS\r\n\
    endloop\r\n\
    call DestroyGroup(g)\r\n\
\r\n\
    return result\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetUnitsOfPlayerMatching takes player whichPlayer, boolexpr filter returns group\r\n\
    local group g = CreateGroup()\r\n\
    call GroupEnumUnitsOfPlayer(g, whichPlayer, filter)\r\n\
    call DestroyBoolExpr(filter)\r\n\
    return g\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetUnitsOfPlayerAll takes player whichPlayer returns group\r\n\
    return GetUnitsOfPlayerMatching(whichPlayer, null)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetUnitsOfPlayerAndTypeIdFilter takes nothing returns boolean\r\n\
    return GetUnitTypeId(GetFilterUnit()) == bj_groupEnumTypeId\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetUnitsOfPlayerAndTypeId takes player whichPlayer, integer unitid returns group\r\n\
    local group g = CreateGroup()\r\n\
    set bj_groupEnumTypeId = unitid\r\n\
    call GroupEnumUnitsOfPlayer(g, whichPlayer, filterGetUnitsOfPlayerAndTypeId)\r\n\
    return g\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetUnitsSelectedAll takes player whichPlayer returns group\r\n\
    local group g = CreateGroup()\r\n\
    call SyncSelections()\r\n\
    call GroupEnumUnitsSelected(g, whichPlayer, null)\r\n\
    return g\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetForceOfPlayer takes player whichPlayer returns force\r\n\
    local force f = CreateForce()\r\n\
    call ForceAddPlayer(f, whichPlayer)\r\n\
    return f\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetPlayersAll takes nothing returns force\r\n\
    return bj_FORCE_ALL_PLAYERS\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetPlayersByMapControl takes mapcontrol whichControl returns force\r\n\
    local force f = CreateForce()\r\n\
    local integer playerIndex\r\n\
    local player  indexPlayer\r\n\
\r\n\
    set playerIndex = 0\r\n\
    loop\r\n\
        set indexPlayer = Player(playerIndex)\r\n\
        if GetPlayerController(indexPlayer) == whichControl then\r\n\
            call ForceAddPlayer(f, indexPlayer)\r\n\
        endif\r\n\
\r\n\
        set playerIndex = playerIndex + 1\r\n\
        exitwhen playerIndex == bj_MAX_PLAYER_SLOTS\r\n\
    endloop\r\n\
\r\n\
    return f\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetPlayersAllies takes player whichPlayer returns force\r\n\
    local force f = CreateForce()\r\n\
    call ForceEnumAllies(f, whichPlayer, null)\r\n\
    return f\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetPlayersEnemies takes player whichPlayer returns force\r\n\
    local force f = CreateForce()\r\n\
    call ForceEnumEnemies(f, whichPlayer, null)\r\n\
    return f\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetPlayersMatching takes boolexpr filter returns force\r\n\
    local force f = CreateForce()\r\n\
    call ForceEnumPlayers(f, filter)\r\n\
    call DestroyBoolExpr(filter)\r\n\
    return f\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CountUnitsInGroupEnum takes nothing returns nothing\r\n\
    set bj_groupCountUnits = bj_groupCountUnits + 1\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CountUnitsInGroup takes group g returns integer\r\n\
    // If the user wants the group destroyed, remember that fact and clear\r\n\
    // the flag, in case it is used again in the callback.\r\n\
    local boolean wantDestroy = bj_wantDestroyGroup\r\n\
    set bj_wantDestroyGroup = false\r\n\
\r\n\
    set bj_groupCountUnits = 0\r\n\
    call ForGroup(g, function CountUnitsInGroupEnum)\r\n\
\r\n\
    // If the user wants the group destroyed, do so now.\r\n\
    if (wantDestroy) then\r\n\
        call DestroyGroup(g)\r\n\
    endif\r\n\
    return bj_groupCountUnits\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CountPlayersInForceEnum takes nothing returns nothing\r\n\
    set bj_forceCountPlayers = bj_forceCountPlayers + 1\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CountPlayersInForceBJ takes force f returns integer\r\n\
    set bj_forceCountPlayers = 0\r\n\
    call ForForce(f, function CountPlayersInForceEnum)\r\n\
    return bj_forceCountPlayers\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetRandomSubGroupEnum takes nothing returns nothing\r\n\
    if (bj_randomSubGroupWant > 0) then\r\n\
        if (bj_randomSubGroupWant >= bj_randomSubGroupTotal) or (GetRandomReal(0,1) < bj_randomSubGroupChance) then\r\n\
            // We either need every remaining unit, or the unit passed its chance check.\r\n\
            call GroupAddUnit(bj_randomSubGroupGroup, GetEnumUnit())\r\n\
            set bj_randomSubGroupWant = bj_randomSubGroupWant - 1\r\n\
        endif\r\n\
    endif\r\n\
    set bj_randomSubGroupTotal = bj_randomSubGroupTotal - 1\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetRandomSubGroup takes integer count, group sourceGroup returns group\r\n\
    local group g = CreateGroup()\r\n\
\r\n\
    set bj_randomSubGroupGroup = g\r\n\
    set bj_randomSubGroupWant  = count\r\n\
    set bj_randomSubGroupTotal = CountUnitsInGroup(sourceGroup)\r\n\
\r\n\
    if (bj_randomSubGroupWant <= 0 or bj_randomSubGroupTotal <= 0) then\r\n\
        return g\r\n\
    endif\r\n\
\r\n\
    set bj_randomSubGroupChance = I2R(bj_randomSubGroupWant) / I2R(bj_randomSubGroupTotal)\r\n\
    call ForGroup(sourceGroup, function GetRandomSubGroupEnum)\r\n\
    return g\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LivingPlayerUnitsOfTypeIdFilter takes nothing returns boolean\r\n\
    local unit filterUnit = GetFilterUnit()\r\n\
    return IsUnitAliveBJ(filterUnit) and GetUnitTypeId(filterUnit) == bj_livingPlayerUnitsTypeId\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CountLivingPlayerUnitsOfTypeId takes integer unitId, player whichPlayer returns integer\r\n\
    local group g\r\n\
    local integer matchedCount\r\n\
\r\n\
    set g = CreateGroup()\r\n\
    set bj_livingPlayerUnitsTypeId = unitId\r\n\
    call GroupEnumUnitsOfPlayer(g, whichPlayer, filterLivingPlayerUnitsOfTypeId)\r\n\
    set matchedCount = CountUnitsInGroup(g)\r\n\
    call DestroyGroup(g)\r\n\
\r\n\
    return matchedCount\r\n\
endfunction\r\n\
\r\n\
\r\n\
\r\n\
//***************************************************************************\r\n\
//*\r\n\
//*  Animation Utility Functions\r\n\
//*\r\n\
//***************************************************************************\r\n\
\r\n\
//===========================================================================\r\n\
function ResetUnitAnimation takes unit whichUnit returns nothing\r\n\
    call SetUnitAnimation(whichUnit, \"stand\")\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetUnitTimeScalePercent takes unit whichUnit, real percentScale returns nothing\r\n\
    call SetUnitTimeScale(whichUnit, percentScale * 0.01)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetUnitScalePercent takes unit whichUnit, real percentScaleX, real percentScaleY, real percentScaleZ returns nothing\r\n\
    call SetUnitScale(whichUnit, percentScaleX * 0.01, percentScaleY * 0.01, percentScaleZ * 0.01)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// This version differs from the common.j interface in that the alpha value\r\n\
// is reversed so as to be displayed as transparency, and all four parameters\r\n\
// are treated as percentages rather than bytes.\r\n\
//\r\n\
function SetUnitVertexColorBJ takes unit whichUnit, real red, real green, real blue, real transparency returns nothing\r\n\
    call SetUnitVertexColor(whichUnit, PercentTo255(red), PercentTo255(green), PercentTo255(blue), PercentTo255(100.0-transparency))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function UnitAddIndicatorBJ takes unit whichUnit, real red, real green, real blue, real transparency returns nothing\r\n\
    call AddIndicator(whichUnit, PercentTo255(red), PercentTo255(green), PercentTo255(blue), PercentTo255(100.0-transparency))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function DestructableAddIndicatorBJ takes destructable whichDestructable, real red, real green, real blue, real transparency returns nothing\r\n\
    call AddIndicator(whichDestructable, PercentTo255(red), PercentTo255(green), PercentTo255(blue), PercentTo255(100.0-transparency))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function ItemAddIndicatorBJ takes item whichItem, real red, real green, real blue, real transparency returns nothing\r\n\
    call AddIndicator(whichItem, PercentTo255(red), PercentTo255(green), PercentTo255(blue), PercentTo255(100.0-transparency))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Sets a unit's facing to point directly at a location.\r\n\
//\r\n\
function SetUnitFacingToFaceLocTimed takes unit whichUnit, location target, real duration returns nothing\r\n\
    local location unitLoc = GetUnitLoc(whichUnit)\r\n\
\r\n\
    call SetUnitFacingTimed(whichUnit, AngleBetweenPoints(unitLoc, target), duration)\r\n\
    call RemoveLocation(unitLoc)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Sets a unit's facing to point directly at another unit.\r\n\
//\r\n\
function SetUnitFacingToFaceUnitTimed takes unit whichUnit, unit target, real duration returns nothing\r\n\
    local location unitLoc = GetUnitLoc(target)\r\n\
\r\n\
    call SetUnitFacingToFaceLocTimed(whichUnit, unitLoc, duration)\r\n\
    call RemoveLocation(unitLoc)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function QueueUnitAnimationBJ takes unit whichUnit, string whichAnimation returns nothing\r\n\
    call QueueUnitAnimation(whichUnit, whichAnimation)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetDestructableAnimationBJ takes destructable d, string whichAnimation returns nothing\r\n\
    call SetDestructableAnimation(d, whichAnimation)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function QueueDestructableAnimationBJ takes destructable d, string whichAnimation returns nothing\r\n\
    call QueueDestructableAnimation(d, whichAnimation)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetDestAnimationSpeedPercent takes destructable d, real percentScale returns nothing\r\n\
    call SetDestructableAnimationSpeed(d, percentScale * 0.01)\r\n\
endfunction\r\n\
\r\n\
\r\n\
\r\n\
//***************************************************************************\r\n\
//*\r\n\
//*  Dialog Utility Functions\r\n\
//*\r\n\
//***************************************************************************\r\n\
\r\n\
//===========================================================================\r\n\
function DialogDisplayBJ takes boolean flag, dialog whichDialog, player whichPlayer returns nothing\r\n\
    call DialogDisplay(whichPlayer, whichDialog, flag)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function DialogSetMessageBJ takes dialog whichDialog, string message returns nothing\r\n\
    call DialogSetMessage(whichDialog, message)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function DialogAddButtonBJ takes dialog whichDialog, string buttonText returns button\r\n\
    set bj_lastCreatedButton = DialogAddButton(whichDialog, buttonText,0)\r\n\
    return bj_lastCreatedButton\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function DialogAddButtonWithHotkeyBJ takes dialog whichDialog, string buttonText, integer hotkey returns button\r\n\
    set bj_lastCreatedButton = DialogAddButton(whichDialog, buttonText,hotkey)\r\n\
    return bj_lastCreatedButton\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function DialogClearBJ takes dialog whichDialog returns nothing\r\n\
    call DialogClear(whichDialog)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetLastCreatedButtonBJ takes nothing returns button\r\n\
    return bj_lastCreatedButton\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetClickedButtonBJ takes nothing returns button\r\n\
    return GetClickedButton()\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetClickedDialogBJ takes nothing returns dialog\r\n\
    return GetClickedDialog()\r\n\
endfunction\r\n\
\r\n\
\r\n\
\r\n\
//***************************************************************************\r\n\
//*\r\n\
//*  Alliance Utility Functions\r\n\
//*\r\n\
//***************************************************************************\r\n\
\r\n\
//===========================================================================\r\n\
function SetPlayerAllianceBJ takes player sourcePlayer, alliancetype whichAllianceSetting, boolean value, player otherPlayer returns nothing\r\n\
    // Prevent players from attempting to ally with themselves.\r\n\
    if (sourcePlayer == otherPlayer) then\r\n\
        return\r\n\
    endif\r\n\
\r\n\
    call SetPlayerAlliance(sourcePlayer, otherPlayer, whichAllianceSetting, value)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Set all flags used by the in-game \"Ally\" checkbox.\r\n\
//\r\n\
function SetPlayerAllianceStateAllyBJ takes player sourcePlayer, player otherPlayer, boolean flag returns nothing\r\n\
    call SetPlayerAlliance(sourcePlayer, otherPlayer, ALLIANCE_PASSIVE,       flag)\r\n\
    call SetPlayerAlliance(sourcePlayer, otherPlayer, ALLIANCE_HELP_REQUEST,  flag)\r\n\
    call SetPlayerAlliance(sourcePlayer, otherPlayer, ALLIANCE_HELP_RESPONSE, flag)\r\n\
    call SetPlayerAlliance(sourcePlayer, otherPlayer, ALLIANCE_SHARED_XP,     flag)\r\n\
    call SetPlayerAlliance(sourcePlayer, otherPlayer, ALLIANCE_SHARED_SPELLS, flag)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Set all flags used by the in-game \"Shared Vision\" checkbox.\r\n\
//\r\n\
function SetPlayerAllianceStateVisionBJ takes player sourcePlayer, player otherPlayer, boolean flag returns nothing\r\n\
    call SetPlayerAlliance(sourcePlayer, otherPlayer, ALLIANCE_SHARED_VISION, flag)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Set all flags used by the in-game \"Shared Units\" checkbox.\r\n\
//\r\n\
function SetPlayerAllianceStateControlBJ takes player sourcePlayer, player otherPlayer, boolean flag returns nothing\r\n\
    call SetPlayerAlliance(sourcePlayer, otherPlayer, ALLIANCE_SHARED_CONTROL, flag)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Set all flags used by the in-game \"Shared Units\" checkbox with the Full\r\n\
// Shared Unit Control feature enabled.\r\n\
//\r\n\
function SetPlayerAllianceStateFullControlBJ takes player sourcePlayer, player otherPlayer, boolean flag returns nothing\r\n\
    call SetPlayerAlliance(sourcePlayer, otherPlayer, ALLIANCE_SHARED_ADVANCED_CONTROL, flag)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetPlayerAllianceStateBJ takes player sourcePlayer, player otherPlayer, integer allianceState returns nothing\r\n\
    // Prevent players from attempting to ally with themselves.\r\n\
    if (sourcePlayer == otherPlayer) then\r\n\
        return\r\n\
    endif\r\n\
\r\n\
    if allianceState == bj_ALLIANCE_UNALLIED then\r\n\
        call SetPlayerAllianceStateAllyBJ(        sourcePlayer, otherPlayer, false )\r\n\
        call SetPlayerAllianceStateVisionBJ(      sourcePlayer, otherPlayer, false )\r\n\
        call SetPlayerAllianceStateControlBJ(     sourcePlayer, otherPlayer, false )\r\n\
        call SetPlayerAllianceStateFullControlBJ( sourcePlayer, otherPlayer, false )\r\n\
    elseif allianceState == bj_ALLIANCE_UNALLIED_VISION then\r\n\
        call SetPlayerAllianceStateAllyBJ(        sourcePlayer, otherPlayer, false )\r\n\
        call SetPlayerAllianceStateVisionBJ(      sourcePlayer, otherPlayer, true  )\r\n\
        call SetPlayerAllianceStateControlBJ(     sourcePlayer, otherPlayer, false )\r\n\
        call SetPlayerAllianceStateFullControlBJ( sourcePlayer, otherPlayer, false )\r\n\
    elseif allianceState == bj_ALLIANCE_ALLIED then\r\n\
        call SetPlayerAllianceStateAllyBJ(        sourcePlayer, otherPlayer, true  )\r\n\
        call SetPlayerAllianceStateVisionBJ(      sourcePlayer, otherPlayer, false )\r\n\
        call SetPlayerAllianceStateControlBJ(     sourcePlayer, otherPlayer, false )\r\n\
        call SetPlayerAllianceStateFullControlBJ( sourcePlayer, otherPlayer, false )\r\n\
    elseif allianceState == bj_ALLIANCE_ALLIED_VISION then\r\n\
        call SetPlayerAllianceStateAllyBJ(        sourcePlayer, otherPlayer, true  )\r\n\
        call SetPlayerAllianceStateVisionBJ(      sourcePlayer, otherPlayer, true  )\r\n\
        call SetPlayerAllianceStateControlBJ(     sourcePlayer, otherPlayer, false )\r\n\
        call SetPlayerAllianceStateFullControlBJ( sourcePlayer, otherPlayer, false )\r\n\
    elseif allianceState == bj_ALLIANCE_ALLIED_UNITS then\r\n\
        call SetPlayerAllianceStateAllyBJ(        sourcePlayer, otherPlayer, true  )\r\n\
        call SetPlayerAllianceStateVisionBJ(      sourcePlayer, otherPlayer, true  )\r\n\
        call SetPlayerAllianceStateControlBJ(     sourcePlayer, otherPlayer, true  )\r\n\
        call SetPlayerAllianceStateFullControlBJ( sourcePlayer, otherPlayer, false )\r\n\
    elseif allianceState == bj_ALLIANCE_ALLIED_ADVUNITS then\r\n\
        call SetPlayerAllianceStateAllyBJ(        sourcePlayer, otherPlayer, true  )\r\n\
        call SetPlayerAllianceStateVisionBJ(      sourcePlayer, otherPlayer, true  )\r\n\
        call SetPlayerAllianceStateControlBJ(     sourcePlayer, otherPlayer, true  )\r\n\
        call SetPlayerAllianceStateFullControlBJ( sourcePlayer, otherPlayer, true  )\r\n\
    elseif allianceState == bj_ALLIANCE_NEUTRAL then\r\n\
        call SetPlayerAllianceStateAllyBJ(        sourcePlayer, otherPlayer, false )\r\n\
        call SetPlayerAllianceStateVisionBJ(      sourcePlayer, otherPlayer, false )\r\n\
        call SetPlayerAllianceStateControlBJ(     sourcePlayer, otherPlayer, false )\r\n\
        call SetPlayerAllianceStateFullControlBJ( sourcePlayer, otherPlayer, false )\r\n\
        call SetPlayerAlliance( sourcePlayer, otherPlayer, ALLIANCE_PASSIVE, true )\r\n\
    elseif allianceState == bj_ALLIANCE_NEUTRAL_VISION then\r\n\
        call SetPlayerAllianceStateAllyBJ(        sourcePlayer, otherPlayer, false )\r\n\
        call SetPlayerAllianceStateVisionBJ(      sourcePlayer, otherPlayer, true  )\r\n\
        call SetPlayerAllianceStateControlBJ(     sourcePlayer, otherPlayer, false )\r\n\
        call SetPlayerAllianceStateFullControlBJ( sourcePlayer, otherPlayer, false )\r\n\
        call SetPlayerAlliance( sourcePlayer, otherPlayer, ALLIANCE_PASSIVE, true )\r\n\
    else\r\n\
        // Unrecognized alliance state - ignore the request.\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Set the alliance states for an entire force towards another force.\r\n\
//\r\n\
function SetForceAllianceStateBJ takes force sourceForce, force targetForce, integer allianceState returns nothing\r\n\
    local integer sourceIndex\r\n\
    local integer targetIndex\r\n\
\r\n\
    set sourceIndex = 0\r\n\
    loop\r\n\
\r\n\
        if (sourceForce==bj_FORCE_ALL_PLAYERS or IsPlayerInForce(Player(sourceIndex), sourceForce)) then\r\n\
            set targetIndex = 0\r\n\
            loop\r\n\
                if (targetForce==bj_FORCE_ALL_PLAYERS or IsPlayerInForce(Player(targetIndex), targetForce)) then\r\n\
                    call SetPlayerAllianceStateBJ(Player(sourceIndex), Player(targetIndex), allianceState)\r\n\
                endif\r\n\
\r\n\
                set targetIndex = targetIndex + 1\r\n\
                exitwhen targetIndex == bj_MAX_PLAYER_SLOTS\r\n\
            endloop\r\n\
        endif\r\n\
\r\n\
        set sourceIndex = sourceIndex + 1\r\n\
        exitwhen sourceIndex == bj_MAX_PLAYER_SLOTS\r\n\
    endloop\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Test to see if two players are co-allied (allied with each other).\r\n\
//\r\n\
function PlayersAreCoAllied takes player playerA, player playerB returns boolean\r\n\
    // Players are considered to be allied with themselves.\r\n\
    if (playerA == playerB) then\r\n\
        return true\r\n\
    endif\r\n\
\r\n\
    // Co-allies are both allied with each other.\r\n\
    if GetPlayerAlliance(playerA, playerB, ALLIANCE_PASSIVE) then\r\n\
        if GetPlayerAlliance(playerB, playerA, ALLIANCE_PASSIVE) then\r\n\
            return true\r\n\
        endif\r\n\
    endif\r\n\
    return false\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Force (whichPlayer) AI player to share vision and advanced unit control \r\n\
// with all AI players of its allies.\r\n\
//\r\n\
function ShareEverythingWithTeamAI takes player whichPlayer returns nothing\r\n\
    local integer playerIndex\r\n\
    local player  indexPlayer\r\n\
\r\n\
    set playerIndex = 0\r\n\
    loop\r\n\
        set indexPlayer = Player(playerIndex)\r\n\
        if (PlayersAreCoAllied(whichPlayer, indexPlayer) and whichPlayer != indexPlayer) then\r\n\
            if (GetPlayerController(indexPlayer) == MAP_CONTROL_COMPUTER) then\r\n\
                call SetPlayerAlliance(whichPlayer, indexPlayer, ALLIANCE_SHARED_VISION, true)\r\n\
                call SetPlayerAlliance(whichPlayer, indexPlayer, ALLIANCE_SHARED_CONTROL, true)\r\n\
                call SetPlayerAlliance(whichPlayer, indexPlayer, ALLIANCE_SHARED_ADVANCED_CONTROL, true)\r\n\
            endif\r\n\
        endif\r\n\
\r\n\
        set playerIndex = playerIndex + 1\r\n\
        exitwhen playerIndex == bj_MAX_PLAYERS\r\n\
    endloop\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Force (whichPlayer) to share vision and advanced unit control with all of his/her allies.\r\n\
//\r\n\
function ShareEverythingWithTeam takes player whichPlayer returns nothing\r\n\
    local integer playerIndex\r\n\
    local player  indexPlayer\r\n\
\r\n\
    set playerIndex = 0\r\n\
    loop\r\n\
        set indexPlayer = Player(playerIndex)\r\n\
        if (PlayersAreCoAllied(whichPlayer, indexPlayer) and whichPlayer != indexPlayer) then\r\n\
            call SetPlayerAlliance(whichPlayer, indexPlayer, ALLIANCE_SHARED_VISION, true)\r\n\
            call SetPlayerAlliance(whichPlayer, indexPlayer, ALLIANCE_SHARED_CONTROL, true)\r\n\
            call SetPlayerAlliance(indexPlayer, whichPlayer, ALLIANCE_SHARED_CONTROL, true)\r\n\
            call SetPlayerAlliance(whichPlayer, indexPlayer, ALLIANCE_SHARED_ADVANCED_CONTROL, true)\r\n\
        endif\r\n\
\r\n\
        set playerIndex = playerIndex + 1\r\n\
        exitwhen playerIndex == bj_MAX_PLAYERS\r\n\
    endloop\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Creates a 'Neutral Victim' player slot.  This slot is passive towards all\r\n\
// other players, but all other players are aggressive towards him/her.\r\n\
// \r\n\
function ConfigureNeutralVictim takes nothing returns nothing\r\n\
    local integer index\r\n\
    local player indexPlayer\r\n\
    local player neutralVictim = Player(bj_PLAYER_NEUTRAL_VICTIM)\r\n\
\r\n\
    set index = 0\r\n\
    loop\r\n\
        set indexPlayer = Player(index)\r\n\
\r\n\
        call SetPlayerAlliance(neutralVictim, indexPlayer, ALLIANCE_PASSIVE, true)\r\n\
        call SetPlayerAlliance(indexPlayer, neutralVictim, ALLIANCE_PASSIVE, false)\r\n\
\r\n\
        set index = index + 1\r\n\
        exitwhen index == bj_MAX_PLAYERS\r\n\
    endloop\r\n\
\r\n\
    // Neutral Victim and Neutral Aggressive should not fight each other.\r\n\
    set indexPlayer = Player(PLAYER_NEUTRAL_AGGRESSIVE)\r\n\
    call SetPlayerAlliance(neutralVictim, indexPlayer, ALLIANCE_PASSIVE, true)\r\n\
    call SetPlayerAlliance(indexPlayer, neutralVictim, ALLIANCE_PASSIVE, true)\r\n\
\r\n\
    // Neutral Victim does not give bounties.\r\n\
    call SetPlayerState(neutralVictim, PLAYER_STATE_GIVES_BOUNTY, 0)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function MakeUnitsPassiveForPlayerEnum takes nothing returns nothing\r\n\
    call SetUnitOwner(GetEnumUnit(), Player(bj_PLAYER_NEUTRAL_VICTIM), false)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Change ownership for every unit of (whichPlayer)'s team to neutral passive.\r\n\
//\r\n\
function MakeUnitsPassiveForPlayer takes player whichPlayer returns nothing\r\n\
    local group   playerUnits = CreateGroup()\r\n\
    call CachePlayerHeroData(whichPlayer)\r\n\
    call GroupEnumUnitsOfPlayer(playerUnits, whichPlayer, null)\r\n\
    call ForGroup(playerUnits, function MakeUnitsPassiveForPlayerEnum)\r\n\
    call DestroyGroup(playerUnits)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Change ownership for every unit of (whichPlayer)'s team to neutral passive.\r\n\
//\r\n\
function MakeUnitsPassiveForTeam takes player whichPlayer returns nothing\r\n\
    local integer playerIndex\r\n\
    local player  indexPlayer\r\n\
\r\n\
    set playerIndex = 0\r\n\
    loop\r\n\
        set indexPlayer = Player(playerIndex)\r\n\
        if PlayersAreCoAllied(whichPlayer, indexPlayer) then\r\n\
            call MakeUnitsPassiveForPlayer(indexPlayer)\r\n\
        endif\r\n\
\r\n\
        set playerIndex = playerIndex + 1\r\n\
        exitwhen playerIndex == bj_MAX_PLAYERS\r\n\
    endloop\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Determine whether or not victory/defeat is disabled via cheat codes.\r\n\
//\r\n\
function AllowVictoryDefeat takes playergameresult gameResult returns boolean\r\n\
    if (gameResult == PLAYER_GAME_RESULT_VICTORY) then\r\n\
        return not IsNoVictoryCheat()\r\n\
    endif\r\n\
    if (gameResult == PLAYER_GAME_RESULT_DEFEAT) then\r\n\
        return not IsNoDefeatCheat()\r\n\
    endif\r\n\
    if (gameResult == PLAYER_GAME_RESULT_NEUTRAL) then\r\n\
        return (not IsNoVictoryCheat()) and (not IsNoDefeatCheat())\r\n\
    endif\r\n\
    return true\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function EndGameBJ takes nothing returns nothing\r\n\
    call EndGame( true )\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function MeleeVictoryDialogBJ takes player whichPlayer, boolean leftGame returns nothing\r\n\
    local trigger t = CreateTrigger()\r\n\
    local dialog  d = DialogCreate()\r\n\
    local string formatString\r\n\
\r\n\
    // Display \"player was victorious\" or \"player has left the game\" message\r\n\
    if (leftGame) then\r\n\
        set formatString = GetLocalizedString( \"PLAYER_LEFT_GAME\" )\r\n\
    else\r\n\
        set formatString = GetLocalizedString( \"PLAYER_VICTORIOUS\" )\r\n\
    endif\r\n\
\r\n\
    call DisplayTimedTextFromPlayer(whichPlayer, 0, 0, 60, formatString)\r\n\
\r\n\
    call DialogSetMessage( d, GetLocalizedString( \"GAMEOVER_VICTORY_MSG\" ) )\r\n\
    call DialogAddButton( d, GetLocalizedString( \"GAMEOVER_CONTINUE_GAME\" ), GetLocalizedHotkey(\"GAMEOVER_CONTINUE_GAME\") )\r\n\
\r\n\
    set t = CreateTrigger()\r\n\
    call TriggerRegisterDialogButtonEvent( t, DialogAddQuitButton( d, true, GetLocalizedString( \"GAMEOVER_QUIT_GAME\" ), GetLocalizedHotkey(\"GAMEOVER_QUIT_GAME\") ) )\r\n\
\r\n\
    call DialogDisplay( whichPlayer, d, true )\r\n\
    call StartSoundForPlayerBJ( whichPlayer, bj_victoryDialogSound )\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function MeleeDefeatDialogBJ takes player whichPlayer, boolean leftGame returns nothing\r\n\
    local trigger t = CreateTrigger()\r\n\
    local dialog  d = DialogCreate()\r\n\
    local string formatString\r\n\
\r\n\
    // Display \"player was defeated\" or \"player has left the game\" message\r\n\
    if (leftGame) then\r\n\
        set formatString = GetLocalizedString( \"PLAYER_LEFT_GAME\" )\r\n\
    else\r\n\
        set formatString = GetLocalizedString( \"PLAYER_DEFEATED\" )\r\n\
    endif\r\n\
\r\n\
    call DisplayTimedTextFromPlayer(whichPlayer, 0, 0, 60, formatString)\r\n\
\r\n\
    call DialogSetMessage( d, GetLocalizedString( \"GAMEOVER_DEFEAT_MSG\" ) )\r\n\
\r\n\
    // Only show the continue button if the game is not over and observers on death are allowed\r\n\
    if (not bj_meleeGameOver and IsMapFlagSet(MAP_OBSERVERS_ON_DEATH)) then\r\n\
        call DialogAddButton( d, GetLocalizedString( \"GAMEOVER_CONTINUE_OBSERVING\" ), GetLocalizedHotkey(\"GAMEOVER_CONTINUE_OBSERVING\") )\r\n\
    endif\r\n\
\r\n\
    set t = CreateTrigger()\r\n\
    call TriggerRegisterDialogButtonEvent( t, DialogAddQuitButton( d, true, GetLocalizedString( \"GAMEOVER_QUIT_GAME\" ), GetLocalizedHotkey(\"GAMEOVER_QUIT_GAME\") ) )\r\n\
\r\n\
    call DialogDisplay( whichPlayer, d, true )\r\n\
    call StartSoundForPlayerBJ( whichPlayer, bj_defeatDialogSound )\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GameOverDialogBJ takes player whichPlayer, boolean leftGame returns nothing\r\n\
    local trigger t = CreateTrigger()\r\n\
    local dialog  d = DialogCreate()\r\n\
    local string  s\r\n\
\r\n\
    // Display \"player left the game\" message\r\n\
    call DisplayTimedTextFromPlayer(whichPlayer, 0, 0, 60, GetLocalizedString( \"PLAYER_LEFT_GAME\" ))\r\n\
\r\n\
    if (GetIntegerGameState(GAME_STATE_DISCONNECTED) != 0) then\r\n\
        set s = GetLocalizedString( \"GAMEOVER_DISCONNECTED\" )\r\n\
    else\r\n\
        set s = GetLocalizedString( \"GAMEOVER_GAME_OVER\" )\r\n\
    endif\r\n\
\r\n\
    call DialogSetMessage( d, s )\r\n\
\r\n\
    set t = CreateTrigger()\r\n\
    call TriggerRegisterDialogButtonEvent( t, DialogAddQuitButton( d, true, GetLocalizedString( \"GAMEOVER_OK\" ), GetLocalizedHotkey(\"GAMEOVER_OK\") ) )\r\n\
\r\n\
    call DialogDisplay( whichPlayer, d, true )\r\n\
    call StartSoundForPlayerBJ( whichPlayer, bj_defeatDialogSound )\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function RemovePlayerPreserveUnitsBJ takes player whichPlayer, playergameresult gameResult, boolean leftGame returns nothing\r\n\
    if AllowVictoryDefeat(gameResult) then\r\n\
\r\n\
        call RemovePlayer(whichPlayer, gameResult)\r\n\
\r\n\
        if( gameResult == PLAYER_GAME_RESULT_VICTORY ) then\r\n\
            call MeleeVictoryDialogBJ( whichPlayer, leftGame )\r\n\
            return\r\n\
        elseif( gameResult == PLAYER_GAME_RESULT_DEFEAT ) then\r\n\
            call MeleeDefeatDialogBJ( whichPlayer, leftGame )\r\n\
        else\r\n\
            call GameOverDialogBJ( whichPlayer, leftGame )\r\n\
        endif\r\n\
\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CustomVictoryOkBJ takes nothing returns nothing\r\n\
    if bj_isSinglePlayer then\r\n\
        call PauseGame( false )\r\n\
        // Bump the difficulty back up to the default.\r\n\
        call SetGameDifficulty(GetDefaultDifficulty())\r\n\
    endif\r\n\
\r\n\
    if (bj_changeLevelMapName == null) then\r\n\
        call EndGame( bj_changeLevelShowScores )\r\n\
    else\r\n\
        call ChangeLevel( bj_changeLevelMapName, bj_changeLevelShowScores )\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CustomVictoryQuitBJ takes nothing returns nothing\r\n\
    if bj_isSinglePlayer then\r\n\
        call PauseGame( false )\r\n\
        // Bump the difficulty back up to the default.\r\n\
        call SetGameDifficulty(GetDefaultDifficulty())\r\n\
    endif\r\n\
\r\n\
    call EndGame( bj_changeLevelShowScores )\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CustomVictoryDialogBJ takes player whichPlayer returns nothing\r\n\
    local trigger t = CreateTrigger()\r\n\
    local dialog  d = DialogCreate()\r\n\
\r\n\
    call DialogSetMessage( d, GetLocalizedString( \"GAMEOVER_VICTORY_MSG\" ) )\r\n\
\r\n\
    set t = CreateTrigger()\r\n\
    call TriggerRegisterDialogButtonEvent( t, DialogAddButton( d, GetLocalizedString( \"GAMEOVER_CONTINUE\" ), GetLocalizedHotkey(\"GAMEOVER_CONTINUE\") ) )\r\n\
    call TriggerAddAction( t, function CustomVictoryOkBJ )\r\n\
\r\n\
    set t = CreateTrigger()\r\n\
    call TriggerRegisterDialogButtonEvent( t, DialogAddButton( d, GetLocalizedString( \"GAMEOVER_QUIT_MISSION\" ), GetLocalizedHotkey(\"GAMEOVER_QUIT_MISSION\") ) )\r\n\
    call TriggerAddAction( t, function CustomVictoryQuitBJ )\r\n\
\r\n\
    if (GetLocalPlayer() == whichPlayer) then\r\n\
        call EnableUserControl( true )\r\n\
        if bj_isSinglePlayer then\r\n\
            call PauseGame( true )\r\n\
        endif\r\n\
        call EnableUserUI(false)\r\n\
    endif\r\n\
\r\n\
    call DialogDisplay( whichPlayer, d, true )\r\n\
    call VolumeGroupSetVolumeForPlayerBJ( whichPlayer, SOUND_VOLUMEGROUP_UI, 1.0 )\r\n\
    call StartSoundForPlayerBJ( whichPlayer, bj_victoryDialogSound )\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CustomVictorySkipBJ takes player whichPlayer returns nothing\r\n\
    if (GetLocalPlayer() == whichPlayer) then\r\n\
        if bj_isSinglePlayer then\r\n\
            // Bump the difficulty back up to the default.\r\n\
            call SetGameDifficulty(GetDefaultDifficulty())\r\n\
        endif\r\n\
\r\n\
        if (bj_changeLevelMapName == null) then\r\n\
            call EndGame( bj_changeLevelShowScores )\r\n\
        else\r\n\
            call ChangeLevel( bj_changeLevelMapName, bj_changeLevelShowScores )\r\n\
        endif\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CustomVictoryBJ takes player whichPlayer, boolean showDialog, boolean showScores returns nothing\r\n\
    if AllowVictoryDefeat( PLAYER_GAME_RESULT_VICTORY ) then\r\n\
        call RemovePlayer( whichPlayer, PLAYER_GAME_RESULT_VICTORY )\r\n\
\r\n\
        if not bj_isSinglePlayer then\r\n\
            call DisplayTimedTextFromPlayer(whichPlayer, 0, 0, 60, GetLocalizedString( \"PLAYER_VICTORIOUS\" ) )\r\n\
        endif\r\n\
\r\n\
        // UI only needs to be displayed to users.\r\n\
        if (GetPlayerController(whichPlayer) == MAP_CONTROL_USER) then\r\n\
            set bj_changeLevelShowScores = showScores\r\n\
            if showDialog then\r\n\
                call CustomVictoryDialogBJ( whichPlayer )\r\n\
            else\r\n\
                call CustomVictorySkipBJ( whichPlayer )\r\n\
            endif\r\n\
        endif\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CustomDefeatRestartBJ takes nothing returns nothing\r\n\
    call PauseGame( false )\r\n\
    call RestartGame( true )\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CustomDefeatReduceDifficultyBJ takes nothing returns nothing\r\n\
    local gamedifficulty diff = GetGameDifficulty()\r\n\
\r\n\
    call PauseGame( false )\r\n\
\r\n\
    // Knock the difficulty down, if possible.\r\n\
    if (diff == MAP_DIFFICULTY_EASY) then\r\n\
        // Sorry, but it doesn't get any easier than this.\r\n\
    elseif (diff == MAP_DIFFICULTY_NORMAL) then\r\n\
        call SetGameDifficulty(MAP_DIFFICULTY_EASY)\r\n\
    elseif (diff == MAP_DIFFICULTY_HARD) then\r\n\
        call SetGameDifficulty(MAP_DIFFICULTY_NORMAL)\r\n\
    else\r\n\
        // Unrecognized difficulty\r\n\
    endif\r\n\
\r\n\
    call RestartGame( true )\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CustomDefeatLoadBJ takes nothing returns nothing\r\n\
    call PauseGame( false )\r\n\
    call DisplayLoadDialog()\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CustomDefeatQuitBJ takes nothing returns nothing\r\n\
    if bj_isSinglePlayer then\r\n\
        call PauseGame( false )\r\n\
    endif\r\n\
\r\n\
    // Bump the difficulty back up to the default.\r\n\
    call SetGameDifficulty(GetDefaultDifficulty())\r\n\
    call EndGame( true )\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CustomDefeatDialogBJ takes player whichPlayer, string message returns nothing\r\n\
    local trigger t = CreateTrigger()\r\n\
    local dialog  d = DialogCreate()\r\n\
\r\n\
    call DialogSetMessage( d, message )\r\n\
\r\n\
    if bj_isSinglePlayer then\r\n\
        set t = CreateTrigger()\r\n\
        call TriggerRegisterDialogButtonEvent( t, DialogAddButton( d, GetLocalizedString( \"GAMEOVER_RESTART\" ), GetLocalizedHotkey(\"GAMEOVER_RESTART\") ) )\r\n\
        call TriggerAddAction( t, function CustomDefeatRestartBJ )\r\n\
\r\n\
        if (GetGameDifficulty() != MAP_DIFFICULTY_EASY) then\r\n\
            set t = CreateTrigger()\r\n\
            call TriggerRegisterDialogButtonEvent( t, DialogAddButton( d, GetLocalizedString( \"GAMEOVER_REDUCE_DIFFICULTY\" ), GetLocalizedHotkey(\"GAMEOVER_REDUCE_DIFFICULTY\") ) )\r\n\
            call TriggerAddAction( t, function CustomDefeatReduceDifficultyBJ )\r\n\
        endif\r\n\
\r\n\
        set t = CreateTrigger()\r\n\
        call TriggerRegisterDialogButtonEvent( t, DialogAddButton( d, GetLocalizedString( \"GAMEOVER_LOAD\" ), GetLocalizedHotkey(\"GAMEOVER_LOAD\") ) )\r\n\
        call TriggerAddAction( t, function CustomDefeatLoadBJ )\r\n\
    endif\r\n\
\r\n\
    set t = CreateTrigger()\r\n\
    call TriggerRegisterDialogButtonEvent( t, DialogAddButton( d, GetLocalizedString( \"GAMEOVER_QUIT_MISSION\" ), GetLocalizedHotkey(\"GAMEOVER_QUIT_MISSION\") ) )\r\n\
    call TriggerAddAction( t, function CustomDefeatQuitBJ )\r\n\
\r\n\
    if (GetLocalPlayer() == whichPlayer) then\r\n\
        call EnableUserControl( true )\r\n\
        if bj_isSinglePlayer then\r\n\
            call PauseGame( true )\r\n\
        endif\r\n\
        call EnableUserUI(false)\r\n\
    endif\r\n\
\r\n\
    call DialogDisplay( whichPlayer, d, true )\r\n\
    call VolumeGroupSetVolumeForPlayerBJ( whichPlayer, SOUND_VOLUMEGROUP_UI, 1.0 )\r\n\
    call StartSoundForPlayerBJ( whichPlayer, bj_defeatDialogSound )\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CustomDefeatBJ takes player whichPlayer, string message returns nothing\r\n\
    if AllowVictoryDefeat( PLAYER_GAME_RESULT_DEFEAT ) then\r\n\
        call RemovePlayer( whichPlayer, PLAYER_GAME_RESULT_DEFEAT )\r\n\
\r\n\
        if not bj_isSinglePlayer then\r\n\
            call DisplayTimedTextFromPlayer(whichPlayer, 0, 0, 60, GetLocalizedString( \"PLAYER_DEFEATED\" ) )\r\n\
        endif\r\n\
\r\n\
        // UI only needs to be displayed to users.\r\n\
        if (GetPlayerController(whichPlayer) == MAP_CONTROL_USER) then\r\n\
            call CustomDefeatDialogBJ( whichPlayer, message )\r\n\
        endif\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetNextLevelBJ takes string nextLevel returns nothing\r\n\
    if (nextLevel == \"\") then\r\n\
        set bj_changeLevelMapName = null\r\n\
    else\r\n\
        set bj_changeLevelMapName = nextLevel\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetPlayerOnScoreScreenBJ takes boolean flag, player whichPlayer returns nothing\r\n\
    call SetPlayerOnScoreScreen(whichPlayer, flag)\r\n\
endfunction\r\n\
\r\n\
\r\n\
\r\n\
//***************************************************************************\r\n\
//*\r\n\
//*  Quest Utility Functions\r\n\
//*\r\n\
//***************************************************************************\r\n\
\r\n\
//===========================================================================\r\n\
function CreateQuestBJ takes integer questType, string title, string description, string iconPath returns quest\r\n\
    local boolean required   = (questType == bj_QUESTTYPE_REQ_DISCOVERED) or (questType == bj_QUESTTYPE_REQ_UNDISCOVERED)\r\n\
    local boolean discovered = (questType == bj_QUESTTYPE_REQ_DISCOVERED) or (questType == bj_QUESTTYPE_OPT_DISCOVERED)\r\n\
\r\n\
    set bj_lastCreatedQuest = CreateQuest()\r\n\
    call QuestSetTitle(bj_lastCreatedQuest, title)\r\n\
    call QuestSetDescription(bj_lastCreatedQuest, description)\r\n\
    call QuestSetIconPath(bj_lastCreatedQuest, iconPath)\r\n\
    call QuestSetRequired(bj_lastCreatedQuest, required)\r\n\
    call QuestSetDiscovered(bj_lastCreatedQuest, discovered)\r\n\
    call QuestSetCompleted(bj_lastCreatedQuest, false)\r\n\
    return bj_lastCreatedQuest\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function DestroyQuestBJ takes quest whichQuest returns nothing\r\n\
    call DestroyQuest(whichQuest)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function QuestSetEnabledBJ takes boolean enabled, quest whichQuest returns nothing\r\n\
    call QuestSetEnabled(whichQuest, enabled)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function QuestSetTitleBJ takes quest whichQuest, string title returns nothing\r\n\
    call QuestSetTitle(whichQuest, title)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function QuestSetDescriptionBJ takes quest whichQuest, string description returns nothing\r\n\
    call QuestSetDescription(whichQuest, description)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function QuestSetCompletedBJ takes quest whichQuest, boolean completed returns nothing\r\n\
    call QuestSetCompleted(whichQuest, completed)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function QuestSetFailedBJ takes quest whichQuest, boolean failed returns nothing\r\n\
    call QuestSetFailed(whichQuest, failed)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function QuestSetDiscoveredBJ takes quest whichQuest, boolean discovered returns nothing\r\n\
    call QuestSetDiscovered(whichQuest, discovered)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetLastCreatedQuestBJ takes nothing returns quest\r\n\
    return bj_lastCreatedQuest\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CreateQuestItemBJ takes quest whichQuest, string description returns questitem\r\n\
    set bj_lastCreatedQuestItem = QuestCreateItem(whichQuest)\r\n\
    call QuestItemSetDescription(bj_lastCreatedQuestItem, description)\r\n\
    call QuestItemSetCompleted(bj_lastCreatedQuestItem, false)\r\n\
    return bj_lastCreatedQuestItem\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function QuestItemSetDescriptionBJ takes questitem whichQuestItem, string description returns nothing\r\n\
    call QuestItemSetDescription(whichQuestItem, description)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function QuestItemSetCompletedBJ takes questitem whichQuestItem, boolean completed returns nothing\r\n\
    call QuestItemSetCompleted(whichQuestItem, completed)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetLastCreatedQuestItemBJ takes nothing returns questitem\r\n\
    return bj_lastCreatedQuestItem\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CreateDefeatConditionBJ takes string description returns defeatcondition\r\n\
    set bj_lastCreatedDefeatCondition = CreateDefeatCondition()\r\n\
    call DefeatConditionSetDescription(bj_lastCreatedDefeatCondition, description)\r\n\
    return bj_lastCreatedDefeatCondition\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function DestroyDefeatConditionBJ takes defeatcondition whichCondition returns nothing\r\n\
    call DestroyDefeatCondition(whichCondition)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function DefeatConditionSetDescriptionBJ takes defeatcondition whichCondition, string description returns nothing\r\n\
    call DefeatConditionSetDescription(whichCondition, description)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetLastCreatedDefeatConditionBJ takes nothing returns defeatcondition\r\n\
    return bj_lastCreatedDefeatCondition\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function FlashQuestDialogButtonBJ takes nothing returns nothing\r\n\
    call FlashQuestDialogButton()\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function QuestMessageBJ takes force f, integer messageType, string message returns nothing\r\n\
    if (IsPlayerInForce(GetLocalPlayer(), f)) then\r\n\
        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
\r\n\
        if (messageType == bj_QUESTMESSAGE_DISCOVERED) then\r\n\
            call DisplayTimedTextToPlayer(GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_QUEST, \" \")\r\n\
            call DisplayTimedTextToPlayer(GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_QUEST, message)\r\n\
            call StartSound(bj_questDiscoveredSound)\r\n\
            call FlashQuestDialogButton()\r\n\
\r\n\
        elseif (messageType == bj_QUESTMESSAGE_UPDATED) then\r\n\
            call DisplayTimedTextToPlayer(GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_QUESTUPDATE, \" \")\r\n\
            call DisplayTimedTextToPlayer(GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_QUESTUPDATE, message)\r\n\
            call StartSound(bj_questUpdatedSound)\r\n\
            call FlashQuestDialogButton()\r\n\
\r\n\
        elseif (messageType == bj_QUESTMESSAGE_COMPLETED) then\r\n\
            call DisplayTimedTextToPlayer(GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_QUESTDONE, \" \")\r\n\
            call DisplayTimedTextToPlayer(GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_QUESTDONE, message)\r\n\
            call StartSound(bj_questCompletedSound)\r\n\
            call FlashQuestDialogButton()\r\n\
\r\n\
        elseif (messageType == bj_QUESTMESSAGE_FAILED) then\r\n\
            call DisplayTimedTextToPlayer(GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_QUESTFAILED, \" \")\r\n\
            call DisplayTimedTextToPlayer(GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_QUESTFAILED, message)\r\n\
            call StartSound(bj_questFailedSound)\r\n\
            call FlashQuestDialogButton()\r\n\
\r\n\
        elseif (messageType == bj_QUESTMESSAGE_REQUIREMENT) then\r\n\
            call DisplayTimedTextToPlayer(GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_QUESTREQUIREMENT, message)\r\n\
\r\n\
        elseif (messageType == bj_QUESTMESSAGE_MISSIONFAILED) then\r\n\
            call DisplayTimedTextToPlayer(GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_MISSIONFAILED, \" \")\r\n\
            call DisplayTimedTextToPlayer(GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_MISSIONFAILED, message)\r\n\
            call StartSound(bj_questFailedSound)\r\n\
\r\n\
        elseif (messageType == bj_QUESTMESSAGE_HINT) then\r\n\
            call DisplayTimedTextToPlayer(GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_HINT, \" \")\r\n\
            call DisplayTimedTextToPlayer(GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_HINT, message)\r\n\
            call StartSound(bj_questHintSound)\r\n\
\r\n\
        elseif (messageType == bj_QUESTMESSAGE_ALWAYSHINT) then\r\n\
            call DisplayTimedTextToPlayer(GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_ALWAYSHINT, \" \")\r\n\
            call DisplayTimedTextToPlayer(GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_ALWAYSHINT, message)\r\n\
            call StartSound(bj_questHintSound)\r\n\
\r\n\
        elseif (messageType == bj_QUESTMESSAGE_SECRET) then\r\n\
            call DisplayTimedTextToPlayer(GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_SECRET, \" \")\r\n\
            call DisplayTimedTextToPlayer(GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_SECRET, message)\r\n\
            call StartSound(bj_questSecretSound)\r\n\
\r\n\
        elseif (messageType == bj_QUESTMESSAGE_UNITACQUIRED) then\r\n\
            call DisplayTimedTextToPlayer(GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_UNITACQUIRED, \" \")\r\n\
            call DisplayTimedTextToPlayer(GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_UNITACQUIRED, message)\r\n\
            call StartSound(bj_questHintSound)\r\n\
\r\n\
        elseif (messageType == bj_QUESTMESSAGE_UNITAVAILABLE) then\r\n\
            call DisplayTimedTextToPlayer(GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_UNITAVAILABLE, \" \")\r\n\
            call DisplayTimedTextToPlayer(GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_UNITAVAILABLE, message)\r\n\
            call StartSound(bj_questHintSound)\r\n\
\r\n\
        elseif (messageType == bj_QUESTMESSAGE_ITEMACQUIRED) then\r\n\
            call DisplayTimedTextToPlayer(GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_ITEMACQUIRED, \" \")\r\n\
            call DisplayTimedTextToPlayer(GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_ITEMACQUIRED, message)\r\n\
            call StartSound(bj_questItemAcquiredSound)\r\n\
\r\n\
        elseif (messageType == bj_QUESTMESSAGE_WARNING) then\r\n\
            call DisplayTimedTextToPlayer(GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_WARNING, \" \")\r\n\
            call DisplayTimedTextToPlayer(GetLocalPlayer(), 0, 0, bj_TEXT_DELAY_WARNING, message)\r\n\
            call StartSound(bj_questWarningSound)\r\n\
\r\n\
        else\r\n\
            // Unrecognized message type - ignore the request.\r\n\
        endif\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
\r\n\
\r\n\
//***************************************************************************\r\n\
//*\r\n\
//*  Timer Utility Functions\r\n\
//*\r\n\
//***************************************************************************\r\n\
\r\n\
//===========================================================================\r\n\
function StartTimerBJ takes timer t, boolean periodic, real timeout returns timer\r\n\
    set bj_lastStartedTimer = t\r\n\
    call TimerStart(t, timeout, periodic, null)\r\n\
    return bj_lastStartedTimer\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CreateTimerBJ takes boolean periodic, real timeout returns timer\r\n\
    set bj_lastStartedTimer = CreateTimer()\r\n\
    call TimerStart(bj_lastStartedTimer, timeout, periodic, null)\r\n\
    return bj_lastStartedTimer\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function DestroyTimerBJ takes timer whichTimer returns nothing\r\n\
    call DestroyTimer(whichTimer)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function PauseTimerBJ takes boolean pause, timer whichTimer returns nothing\r\n\
    if pause then\r\n\
        call PauseTimer(whichTimer)\r\n\
    else\r\n\
        call ResumeTimer(whichTimer)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetLastCreatedTimerBJ takes nothing returns timer\r\n\
    return bj_lastStartedTimer\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CreateTimerDialogBJ takes timer t, string title returns timerdialog\r\n\
    set bj_lastCreatedTimerDialog = CreateTimerDialog(t)\r\n\
    call TimerDialogSetTitle(bj_lastCreatedTimerDialog, title)\r\n\
    call TimerDialogDisplay(bj_lastCreatedTimerDialog, true)\r\n\
    return bj_lastCreatedTimerDialog\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function DestroyTimerDialogBJ takes timerdialog td returns nothing\r\n\
    call DestroyTimerDialog(td)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function TimerDialogSetTitleBJ takes timerdialog td, string title returns nothing\r\n\
    call TimerDialogSetTitle(td, title)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function TimerDialogSetTitleColorBJ takes timerdialog td, real red, real green, real blue, real transparency returns nothing\r\n\
    call TimerDialogSetTitleColor(td, PercentTo255(red), PercentTo255(green), PercentTo255(blue), PercentTo255(100.0-transparency))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function TimerDialogSetTimeColorBJ takes timerdialog td, real red, real green, real blue, real transparency returns nothing\r\n\
    call TimerDialogSetTimeColor(td, PercentTo255(red), PercentTo255(green), PercentTo255(blue), PercentTo255(100.0-transparency))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function TimerDialogSetSpeedBJ takes timerdialog td, real speedMultFactor returns nothing\r\n\
    call TimerDialogSetSpeed(td, speedMultFactor)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function TimerDialogDisplayForPlayerBJ takes boolean show, timerdialog td, player whichPlayer returns nothing\r\n\
    if (GetLocalPlayer() == whichPlayer) then\r\n\
        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
        call TimerDialogDisplay(td, show)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function TimerDialogDisplayBJ takes boolean show, timerdialog td returns nothing\r\n\
    call TimerDialogDisplay(td, show)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetLastCreatedTimerDialogBJ takes nothing returns timerdialog\r\n\
    return bj_lastCreatedTimerDialog\r\n\
endfunction\r\n\
\r\n\
\r\n\
\r\n\
//***************************************************************************\r\n\
//*\r\n\
//*  Leaderboard Utility Functions\r\n\
//*\r\n\
//***************************************************************************\r\n\
\r\n\
//===========================================================================\r\n\
function LeaderboardResizeBJ takes leaderboard lb returns nothing\r\n\
    local integer size = LeaderboardGetItemCount(lb)\r\n\
\r\n\
    if (LeaderboardGetLabelText(lb) == \"\") then\r\n\
        set size = size - 1\r\n\
    endif\r\n\
    call LeaderboardSetSizeByItemCount(lb, size)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LeaderboardSetPlayerItemValueBJ takes player whichPlayer, leaderboard lb, integer val returns nothing\r\n\
    call LeaderboardSetItemValue(lb, LeaderboardGetPlayerIndex(lb, whichPlayer), val)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LeaderboardSetPlayerItemLabelBJ takes player whichPlayer, leaderboard lb, string val returns nothing\r\n\
    call LeaderboardSetItemLabel(lb, LeaderboardGetPlayerIndex(lb, whichPlayer), val)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LeaderboardSetPlayerItemStyleBJ takes player whichPlayer, leaderboard lb, boolean showLabel, boolean showValue, boolean showIcon returns nothing\r\n\
    call LeaderboardSetItemStyle(lb, LeaderboardGetPlayerIndex(lb, whichPlayer), showLabel, showValue, showIcon)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LeaderboardSetPlayerItemLabelColorBJ takes player whichPlayer, leaderboard lb, real red, real green, real blue, real transparency returns nothing\r\n\
    call LeaderboardSetItemLabelColor(lb, LeaderboardGetPlayerIndex(lb, whichPlayer), PercentTo255(red), PercentTo255(green), PercentTo255(blue), PercentTo255(100.0-transparency))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LeaderboardSetPlayerItemValueColorBJ takes player whichPlayer, leaderboard lb, real red, real green, real blue, real transparency returns nothing\r\n\
    call LeaderboardSetItemValueColor(lb, LeaderboardGetPlayerIndex(lb, whichPlayer), PercentTo255(red), PercentTo255(green), PercentTo255(blue), PercentTo255(100.0-transparency))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LeaderboardSetLabelColorBJ takes leaderboard lb, real red, real green, real blue, real transparency returns nothing\r\n\
    call LeaderboardSetLabelColor(lb, PercentTo255(red), PercentTo255(green), PercentTo255(blue), PercentTo255(100.0-transparency))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LeaderboardSetValueColorBJ takes leaderboard lb, real red, real green, real blue, real transparency returns nothing\r\n\
    call LeaderboardSetValueColor(lb, PercentTo255(red), PercentTo255(green), PercentTo255(blue), PercentTo255(100.0-transparency))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LeaderboardSetLabelBJ takes leaderboard lb, string label returns nothing\r\n\
    call LeaderboardSetLabel(lb, label)\r\n\
    call LeaderboardResizeBJ(lb)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LeaderboardSetStyleBJ takes leaderboard lb, boolean showLabel, boolean showNames, boolean showValues, boolean showIcons returns nothing\r\n\
    call LeaderboardSetStyle(lb, showLabel, showNames, showValues, showIcons)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LeaderboardGetItemCountBJ takes leaderboard lb returns integer\r\n\
    return LeaderboardGetItemCount(lb)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LeaderboardHasPlayerItemBJ takes leaderboard lb, player whichPlayer returns boolean\r\n\
    return LeaderboardHasPlayerItem(lb, whichPlayer)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function ForceSetLeaderboardBJ takes leaderboard lb, force toForce returns nothing\r\n\
    local integer index\r\n\
    local player  indexPlayer\r\n\
\r\n\
    set index = 0\r\n\
    loop\r\n\
        set indexPlayer = Player(index)\r\n\
        if IsPlayerInForce(indexPlayer, toForce) then\r\n\
            call PlayerSetLeaderboard(indexPlayer, lb)\r\n\
        endif\r\n\
        set index = index + 1\r\n\
        exitwhen index == bj_MAX_PLAYERS\r\n\
    endloop\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CreateLeaderboardBJ takes force toForce, string label returns leaderboard\r\n\
    set bj_lastCreatedLeaderboard = CreateLeaderboard()\r\n\
    call LeaderboardSetLabel(bj_lastCreatedLeaderboard, label)\r\n\
    call ForceSetLeaderboardBJ(bj_lastCreatedLeaderboard, toForce)\r\n\
    call LeaderboardDisplay(bj_lastCreatedLeaderboard, true)\r\n\
    return bj_lastCreatedLeaderboard\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function DestroyLeaderboardBJ takes leaderboard lb returns nothing\r\n\
    call DestroyLeaderboard(lb)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LeaderboardDisplayBJ takes boolean show, leaderboard lb returns nothing\r\n\
    call LeaderboardDisplay(lb, show)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LeaderboardAddItemBJ takes player whichPlayer, leaderboard lb, string label, integer value returns nothing\r\n\
    if (LeaderboardHasPlayerItem(lb, whichPlayer)) then\r\n\
        call LeaderboardRemovePlayerItem(lb, whichPlayer)\r\n\
    endif\r\n\
    call LeaderboardAddItem(lb, label, value, whichPlayer)\r\n\
    call LeaderboardResizeBJ(lb)\r\n\
    //call LeaderboardSetSizeByItemCount(lb, LeaderboardGetItemCount(lb))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LeaderboardRemovePlayerItemBJ takes player whichPlayer, leaderboard lb returns nothing\r\n\
    call LeaderboardRemovePlayerItem(lb, whichPlayer)\r\n\
    call LeaderboardResizeBJ(lb)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LeaderboardSortItemsBJ takes leaderboard lb, integer sortType, boolean ascending returns nothing\r\n\
    if (sortType == bj_SORTTYPE_SORTBYVALUE) then\r\n\
        call LeaderboardSortItemsByValue(lb, ascending)\r\n\
    elseif (sortType == bj_SORTTYPE_SORTBYPLAYER) then\r\n\
        call LeaderboardSortItemsByPlayer(lb, ascending)\r\n\
    elseif (sortType == bj_SORTTYPE_SORTBYLABEL) then\r\n\
        call LeaderboardSortItemsByLabel(lb, ascending)\r\n\
    else\r\n\
        // Unrecognized sort type - ignore the request.\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LeaderboardSortItemsByPlayerBJ takes leaderboard lb, boolean ascending returns nothing\r\n\
    call LeaderboardSortItemsByPlayer(lb, ascending)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LeaderboardSortItemsByLabelBJ takes leaderboard lb, boolean ascending returns nothing\r\n\
    call LeaderboardSortItemsByLabel(lb, ascending)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LeaderboardGetPlayerIndexBJ takes player whichPlayer, leaderboard lb returns integer\r\n\
    return LeaderboardGetPlayerIndex(lb, whichPlayer) + 1\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Returns the player who is occupying a specified position in a leaderboard.\r\n\
// The position parameter is expected in the range of 1..16.\r\n\
//\r\n\
function LeaderboardGetIndexedPlayerBJ takes integer position, leaderboard lb returns player\r\n\
    local integer index\r\n\
    local player  indexPlayer\r\n\
\r\n\
    set index = 0\r\n\
    loop\r\n\
        set indexPlayer = Player(index)\r\n\
        if (LeaderboardGetPlayerIndex(lb, indexPlayer) == position - 1) then\r\n\
            return indexPlayer\r\n\
        endif\r\n\
\r\n\
        set index = index + 1\r\n\
        exitwhen index == bj_MAX_PLAYERS\r\n\
    endloop\r\n\
\r\n\
    return Player(PLAYER_NEUTRAL_PASSIVE)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function PlayerGetLeaderboardBJ takes player whichPlayer returns leaderboard\r\n\
    return PlayerGetLeaderboard(whichPlayer)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetLastCreatedLeaderboard takes nothing returns leaderboard\r\n\
    return bj_lastCreatedLeaderboard\r\n\
endfunction\r\n\
\r\n\
//***************************************************************************\r\n\
//*\r\n\
//*  Multiboard Utility Functions\r\n\
//*\r\n\
//***************************************************************************\r\n\
\r\n\
//===========================================================================\r\n\
function CreateMultiboardBJ takes integer cols, integer rows, string title returns multiboard\r\n\
    set bj_lastCreatedMultiboard = CreateMultiboard()\r\n\
    call MultiboardSetRowCount(bj_lastCreatedMultiboard, rows)\r\n\
    call MultiboardSetColumnCount(bj_lastCreatedMultiboard, cols)\r\n\
    call MultiboardSetTitleText(bj_lastCreatedMultiboard, title)\r\n\
    call MultiboardDisplay(bj_lastCreatedMultiboard, true)\r\n\
    return bj_lastCreatedMultiboard\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function DestroyMultiboardBJ takes multiboard mb returns nothing\r\n\
    call DestroyMultiboard(mb)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetLastCreatedMultiboard takes nothing returns multiboard\r\n\
    return bj_lastCreatedMultiboard\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function MultiboardDisplayBJ takes boolean show, multiboard mb returns nothing\r\n\
    call MultiboardDisplay(mb, show)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function MultiboardMinimizeBJ takes boolean minimize, multiboard mb returns nothing\r\n\
    call MultiboardMinimize(mb, minimize)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function MultiboardSetTitleTextColorBJ takes multiboard mb, real red, real green, real blue, real transparency returns nothing\r\n\
    call MultiboardSetTitleTextColor(mb, PercentTo255(red), PercentTo255(green), PercentTo255(blue), PercentTo255(100.0-transparency))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function MultiboardAllowDisplayBJ takes boolean flag returns nothing\r\n\
    call MultiboardSuppressDisplay(not flag)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function MultiboardSetItemStyleBJ takes multiboard mb, integer col, integer row, boolean showValue, boolean showIcon returns nothing\r\n\
    local integer curRow = 0\r\n\
    local integer curCol = 0\r\n\
    local integer numRows = MultiboardGetRowCount(mb)\r\n\
    local integer numCols = MultiboardGetColumnCount(mb)\r\n\
    local multiboarditem mbitem = null\r\n\
\r\n\
    // Loop over rows, using 1-based index\r\n\
    loop\r\n\
        set curRow = curRow + 1\r\n\
        exitwhen curRow > numRows\r\n\
\r\n\
        // Apply setting to the requested row, or all rows (if row is 0)\r\n\
        if (row == 0 or row == curRow) then\r\n\
            // Loop over columns, using 1-based index\r\n\
            set curCol = 0\r\n\
            loop\r\n\
                set curCol = curCol + 1\r\n\
                exitwhen curCol > numCols\r\n\
\r\n\
                // Apply setting to the requested column, or all columns (if col is 0)\r\n\
                if (col == 0 or col == curCol) then\r\n\
                    set mbitem = MultiboardGetItem(mb, curRow - 1, curCol - 1)\r\n\
                    call MultiboardSetItemStyle(mbitem, showValue, showIcon)\r\n\
                    call MultiboardReleaseItem(mbitem)\r\n\
                endif\r\n\
            endloop\r\n\
        endif\r\n\
    endloop\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function MultiboardSetItemValueBJ takes multiboard mb, integer col, integer row, string val returns nothing\r\n\
    local integer curRow = 0\r\n\
    local integer curCol = 0\r\n\
    local integer numRows = MultiboardGetRowCount(mb)\r\n\
    local integer numCols = MultiboardGetColumnCount(mb)\r\n\
    local multiboarditem mbitem = null\r\n\
\r\n\
    // Loop over rows, using 1-based index\r\n\
    loop\r\n\
        set curRow = curRow + 1\r\n\
        exitwhen curRow > numRows\r\n\
\r\n\
        // Apply setting to the requested row, or all rows (if row is 0)\r\n\
        if (row == 0 or row == curRow) then\r\n\
            // Loop over columns, using 1-based index\r\n\
            set curCol = 0\r\n\
            loop\r\n\
                set curCol = curCol + 1\r\n\
                exitwhen curCol > numCols\r\n\
\r\n\
                // Apply setting to the requested column, or all columns (if col is 0)\r\n\
                if (col == 0 or col == curCol) then\r\n\
                    set mbitem = MultiboardGetItem(mb, curRow - 1, curCol - 1)\r\n\
                    call MultiboardSetItemValue(mbitem, val)\r\n\
                    call MultiboardReleaseItem(mbitem)\r\n\
                endif\r\n\
            endloop\r\n\
        endif\r\n\
    endloop\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function MultiboardSetItemColorBJ takes multiboard mb, integer col, integer row, real red, real green, real blue, real transparency returns nothing\r\n\
    local integer curRow = 0\r\n\
    local integer curCol = 0\r\n\
    local integer numRows = MultiboardGetRowCount(mb)\r\n\
    local integer numCols = MultiboardGetColumnCount(mb)\r\n\
    local multiboarditem mbitem = null\r\n\
\r\n\
    // Loop over rows, using 1-based index\r\n\
    loop\r\n\
        set curRow = curRow + 1\r\n\
        exitwhen curRow > numRows\r\n\
\r\n\
        // Apply setting to the requested row, or all rows (if row is 0)\r\n\
        if (row == 0 or row == curRow) then\r\n\
            // Loop over columns, using 1-based index\r\n\
            set curCol = 0\r\n\
            loop\r\n\
                set curCol = curCol + 1\r\n\
                exitwhen curCol > numCols\r\n\
\r\n\
                // Apply setting to the requested column, or all columns (if col is 0)\r\n\
                if (col == 0 or col == curCol) then\r\n\
                    set mbitem = MultiboardGetItem(mb, curRow - 1, curCol - 1)\r\n\
                    call MultiboardSetItemValueColor(mbitem, PercentTo255(red), PercentTo255(green), PercentTo255(blue), PercentTo255(100.0-transparency))\r\n\
                    call MultiboardReleaseItem(mbitem)\r\n\
                endif\r\n\
            endloop\r\n\
        endif\r\n\
    endloop\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function MultiboardSetItemWidthBJ takes multiboard mb, integer col, integer row, real width returns nothing\r\n\
    local integer curRow = 0\r\n\
    local integer curCol = 0\r\n\
    local integer numRows = MultiboardGetRowCount(mb)\r\n\
    local integer numCols = MultiboardGetColumnCount(mb)\r\n\
    local multiboarditem mbitem = null\r\n\
\r\n\
    // Loop over rows, using 1-based index\r\n\
    loop\r\n\
        set curRow = curRow + 1\r\n\
        exitwhen curRow > numRows\r\n\
\r\n\
        // Apply setting to the requested row, or all rows (if row is 0)\r\n\
        if (row == 0 or row == curRow) then\r\n\
            // Loop over columns, using 1-based index\r\n\
            set curCol = 0\r\n\
            loop\r\n\
                set curCol = curCol + 1\r\n\
                exitwhen curCol > numCols\r\n\
\r\n\
                // Apply setting to the requested column, or all columns (if col is 0)\r\n\
                if (col == 0 or col == curCol) then\r\n\
                    set mbitem = MultiboardGetItem(mb, curRow - 1, curCol - 1)\r\n\
                    call MultiboardSetItemWidth(mbitem, width/100.0)\r\n\
                    call MultiboardReleaseItem(mbitem)\r\n\
                endif\r\n\
            endloop\r\n\
        endif\r\n\
    endloop\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function MultiboardSetItemIconBJ takes multiboard mb, integer col, integer row, string iconFileName returns nothing\r\n\
    local integer curRow = 0\r\n\
    local integer curCol = 0\r\n\
    local integer numRows = MultiboardGetRowCount(mb)\r\n\
    local integer numCols = MultiboardGetColumnCount(mb)\r\n\
    local multiboarditem mbitem = null\r\n\
\r\n\
    // Loop over rows, using 1-based index\r\n\
    loop\r\n\
        set curRow = curRow + 1\r\n\
        exitwhen curRow > numRows\r\n\
\r\n\
        // Apply setting to the requested row, or all rows (if row is 0)\r\n\
        if (row == 0 or row == curRow) then\r\n\
            // Loop over columns, using 1-based index\r\n\
            set curCol = 0\r\n\
            loop\r\n\
                set curCol = curCol + 1\r\n\
                exitwhen curCol > numCols\r\n\
\r\n\
                // Apply setting to the requested column, or all columns (if col is 0)\r\n\
                if (col == 0 or col == curCol) then\r\n\
                    set mbitem = MultiboardGetItem(mb, curRow - 1, curCol - 1)\r\n\
                    call MultiboardSetItemIcon(mbitem, iconFileName)\r\n\
                    call MultiboardReleaseItem(mbitem)\r\n\
                endif\r\n\
            endloop\r\n\
        endif\r\n\
    endloop\r\n\
endfunction\r\n\
\r\n\
\r\n\
\r\n\
//***************************************************************************\r\n\
//*\r\n\
//*  Text Tag Utility Functions\r\n\
//*\r\n\
//***************************************************************************\r\n\
\r\n\
//===========================================================================\r\n\
// Scale the font size linearly such that size 10 equates to height 0.023.\r\n\
// Screen-relative font heights are harder to grasp and than font sizes.\r\n\
//\r\n\
function TextTagSize2Height takes real size returns real\r\n\
    return size * 0.023 / 10\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Scale the speed linearly such that speed 128 equates to 0.071.\r\n\
// Screen-relative speeds are hard to grasp.\r\n\
//\r\n\
function TextTagSpeed2Velocity takes real speed returns real\r\n\
    return speed * 0.071 / 128\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetTextTagColorBJ takes texttag tt, real red, real green, real blue, real transparency returns nothing\r\n\
    call SetTextTagColor(tt, PercentTo255(red), PercentTo255(green), PercentTo255(blue), PercentTo255(100.0-transparency))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetTextTagVelocityBJ takes texttag tt, real speed, real angle returns nothing\r\n\
    local real vel = TextTagSpeed2Velocity(speed)\r\n\
    local real xvel = vel * Cos(angle * bj_DEGTORAD)\r\n\
    local real yvel = vel * Sin(angle * bj_DEGTORAD)\r\n\
\r\n\
    call SetTextTagVelocity(tt, xvel, yvel)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetTextTagTextBJ takes texttag tt, string s, real size returns nothing\r\n\
    local real textHeight = TextTagSize2Height(size)\r\n\
\r\n\
    call SetTextTagText(tt, s, textHeight)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetTextTagPosBJ takes texttag tt, location loc, real zOffset returns nothing\r\n\
    call SetTextTagPos(tt, GetLocationX(loc), GetLocationY(loc), zOffset)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetTextTagPosUnitBJ takes texttag tt, unit whichUnit, real zOffset returns nothing\r\n\
    call SetTextTagPosUnit(tt, whichUnit, zOffset)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetTextTagSuspendedBJ takes texttag tt, boolean flag returns nothing\r\n\
    call SetTextTagSuspended(tt, flag)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetTextTagPermanentBJ takes texttag tt, boolean flag returns nothing\r\n\
    call SetTextTagPermanent(tt, flag)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetTextTagAgeBJ takes texttag tt, real age returns nothing\r\n\
    call SetTextTagAge(tt, age)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetTextTagLifespanBJ takes texttag tt, real lifespan returns nothing\r\n\
    call SetTextTagLifespan(tt, lifespan)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetTextTagFadepointBJ takes texttag tt, real fadepoint returns nothing\r\n\
    call SetTextTagFadepoint(tt, fadepoint)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CreateTextTagLocBJ takes string s, location loc, real zOffset, real size, real red, real green, real blue, real transparency returns texttag\r\n\
    set bj_lastCreatedTextTag = CreateTextTag()\r\n\
    call SetTextTagTextBJ(bj_lastCreatedTextTag, s, size)\r\n\
    call SetTextTagPosBJ(bj_lastCreatedTextTag, loc, zOffset)\r\n\
    call SetTextTagColorBJ(bj_lastCreatedTextTag, red, green, blue, transparency)\r\n\
\r\n\
    return bj_lastCreatedTextTag\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CreateTextTagUnitBJ takes string s, unit whichUnit, real zOffset, real size, real red, real green, real blue, real transparency returns texttag\r\n\
    set bj_lastCreatedTextTag = CreateTextTag()\r\n\
    call SetTextTagTextBJ(bj_lastCreatedTextTag, s, size)\r\n\
    call SetTextTagPosUnitBJ(bj_lastCreatedTextTag, whichUnit, zOffset)\r\n\
    call SetTextTagColorBJ(bj_lastCreatedTextTag, red, green, blue, transparency)\r\n\
\r\n\
    return bj_lastCreatedTextTag\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function DestroyTextTagBJ takes texttag tt returns nothing\r\n\
    call DestroyTextTag(tt)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function ShowTextTagForceBJ takes boolean show, texttag tt, force whichForce returns nothing\r\n\
    if (IsPlayerInForce(GetLocalPlayer(), whichForce)) then\r\n\
        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
        call SetTextTagVisibility(tt, show)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetLastCreatedTextTag takes nothing returns texttag\r\n\
    return bj_lastCreatedTextTag\r\n\
endfunction\r\n\
\r\n\
\r\n\
\r\n\
//***************************************************************************\r\n\
//*\r\n\
//*  Cinematic Utility Functions\r\n\
//*\r\n\
//***************************************************************************\r\n\
\r\n\
//===========================================================================\r\n\
function PauseGameOn takes nothing returns nothing\r\n\
    call PauseGame(true)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function PauseGameOff takes nothing returns nothing\r\n\
    call PauseGame(false)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetUserControlForceOn takes force whichForce returns nothing\r\n\
    if (IsPlayerInForce(GetLocalPlayer(), whichForce)) then\r\n\
        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
        call EnableUserControl(true)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetUserControlForceOff takes force whichForce returns nothing\r\n\
    if (IsPlayerInForce(GetLocalPlayer(), whichForce)) then\r\n\
        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
        call EnableUserControl(false)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function ShowInterfaceForceOn takes force whichForce, real fadeDuration returns nothing\r\n\
    if (IsPlayerInForce(GetLocalPlayer(), whichForce)) then\r\n\
        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
        call ShowInterface(true, fadeDuration)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function ShowInterfaceForceOff takes force whichForce, real fadeDuration returns nothing\r\n\
    if (IsPlayerInForce(GetLocalPlayer(), whichForce)) then\r\n\
        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
        call ShowInterface(false, fadeDuration)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function PingMinimapForForce takes force whichForce, real x, real y, real duration returns nothing\r\n\
    if (IsPlayerInForce(GetLocalPlayer(), whichForce)) then\r\n\
        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
        call PingMinimap(x, y, duration)\r\n\
        //call StartSound(bj_pingMinimapSound)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function PingMinimapLocForForce takes force whichForce, location loc, real duration returns nothing\r\n\
    call PingMinimapForForce(whichForce, GetLocationX(loc), GetLocationY(loc), duration)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function PingMinimapForPlayer takes player whichPlayer, real x, real y, real duration returns nothing\r\n\
    if (GetLocalPlayer() == whichPlayer) then\r\n\
        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
        call PingMinimap(x, y, duration)\r\n\
        //call StartSound(bj_pingMinimapSound)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function PingMinimapLocForPlayer takes player whichPlayer, location loc, real duration returns nothing\r\n\
    call PingMinimapForPlayer(whichPlayer, GetLocationX(loc), GetLocationY(loc), duration)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function PingMinimapForForceEx takes force whichForce, real x, real y, real duration, integer style, real red, real green, real blue returns nothing\r\n\
    local integer red255   = PercentTo255(red)\r\n\
    local integer green255 = PercentTo255(green)\r\n\
    local integer blue255  = PercentTo255(blue)\r\n\
\r\n\
    if (IsPlayerInForce(GetLocalPlayer(), whichForce)) then\r\n\
        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
\r\n\
        // Prevent 100% red simple and flashy pings, as they become \"attack\" pings.\r\n\
        if (red255 == 255) and (green255 == 0) and (blue255 == 0) then\r\n\
            set red255 = 254\r\n\
        endif\r\n\
\r\n\
        if (style == bj_MINIMAPPINGSTYLE_SIMPLE) then\r\n\
            call PingMinimapEx(x, y, duration, red255, green255, blue255, false)\r\n\
        elseif (style == bj_MINIMAPPINGSTYLE_FLASHY) then\r\n\
            call PingMinimapEx(x, y, duration, red255, green255, blue255, true)\r\n\
        elseif (style == bj_MINIMAPPINGSTYLE_ATTACK) then\r\n\
            call PingMinimapEx(x, y, duration, 255, 0, 0, false)\r\n\
        else\r\n\
            // Unrecognized ping style - ignore the request.\r\n\
        endif\r\n\
        \r\n\
        //call StartSound(bj_pingMinimapSound)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function PingMinimapLocForForceEx takes force whichForce, location loc, real duration, integer style, real red, real green, real blue returns nothing\r\n\
    call PingMinimapForForceEx(whichForce, GetLocationX(loc), GetLocationY(loc), duration, style, red, green, blue)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function EnableWorldFogBoundaryBJ takes boolean enable, force f returns nothing\r\n\
    if (IsPlayerInForce(GetLocalPlayer(), f)) then\r\n\
        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
        call EnableWorldFogBoundary(enable)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function EnableOcclusionBJ takes boolean enable, force f returns nothing\r\n\
    if (IsPlayerInForce(GetLocalPlayer(), f)) then\r\n\
        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
        call EnableOcclusion(enable)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
\r\n\
\r\n\
//***************************************************************************\r\n\
//*\r\n\
//*  Cinematic Transmission Utility Functions\r\n\
//*\r\n\
//***************************************************************************\r\n\
\r\n\
//===========================================================================\r\n\
// If cancelled, stop the sound and end the cinematic scene.\r\n\
//\r\n\
function CancelCineSceneBJ takes nothing returns nothing\r\n\
    call StopSoundBJ(bj_cineSceneLastSound, true)\r\n\
    call EndCinematicScene()\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Init a trigger to listen for END_CINEMATIC events and respond to them if\r\n\
// a cinematic scene is in progress.  For performance reasons, this should\r\n\
// only be called once a cinematic scene has been started, so that maps\r\n\
// lacking such scenes do not bother to register for these events.\r\n\
//\r\n\
function TryInitCinematicBehaviorBJ takes nothing returns nothing\r\n\
    local integer index\r\n\
\r\n\
    if (bj_cineSceneBeingSkipped == null) then\r\n\
        set bj_cineSceneBeingSkipped = CreateTrigger()\r\n\
        set index = 0\r\n\
        loop\r\n\
            call TriggerRegisterPlayerEvent(bj_cineSceneBeingSkipped, Player(index), EVENT_PLAYER_END_CINEMATIC)\r\n\
            set index = index + 1\r\n\
            exitwhen index == bj_MAX_PLAYERS\r\n\
        endloop\r\n\
        call TriggerAddAction(bj_cineSceneBeingSkipped, function CancelCineSceneBJ)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetCinematicSceneBJ takes sound soundHandle, integer portraitUnitId, playercolor color, string speakerTitle, string text, real sceneDuration, real voiceoverDuration returns nothing\r\n\
    set bj_cineSceneLastSound = soundHandle\r\n\
    call PlaySoundBJ(soundHandle)\r\n\
    call SetCinematicScene(portraitUnitId, color, speakerTitle, text, sceneDuration, voiceoverDuration)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetTransmissionDuration takes sound soundHandle, integer timeType, real timeVal returns real\r\n\
    local real duration\r\n\
\r\n\
    if (timeType == bj_TIMETYPE_ADD) then\r\n\
        set duration = GetSoundDurationBJ(soundHandle) + timeVal\r\n\
    elseif (timeType == bj_TIMETYPE_SET) then\r\n\
        set duration = timeVal\r\n\
    elseif (timeType == bj_TIMETYPE_SUB) then\r\n\
        set duration = GetSoundDurationBJ(soundHandle) - timeVal\r\n\
    else\r\n\
        // Unrecognized timeType - ignore timeVal.\r\n\
        set duration = GetSoundDurationBJ(soundHandle)\r\n\
    endif\r\n\
\r\n\
    // Make sure we have a non-negative duration.\r\n\
    if (duration < 0) then\r\n\
        set duration = 0\r\n\
    endif\r\n\
    return duration\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function WaitTransmissionDuration takes sound soundHandle, integer timeType, real timeVal returns nothing\r\n\
    if (timeType == bj_TIMETYPE_SET) then\r\n\
        // If we have a static duration wait, just perform the wait.\r\n\
        call TriggerSleepAction(timeVal)\r\n\
\r\n\
    elseif (soundHandle == null) then\r\n\
        // If the sound does not exist, perform a default length wait.\r\n\
        call TriggerSleepAction(bj_NOTHING_SOUND_DURATION)\r\n\
\r\n\
    elseif (timeType == bj_TIMETYPE_SUB) then\r\n\
        // If the transmission is cutting off the sound, wait for the sound\r\n\
        // to be mostly finished.\r\n\
        call WaitForSoundBJ(soundHandle, timeVal)\r\n\
\r\n\
    elseif (timeType == bj_TIMETYPE_ADD) then\r\n\
        // If the transmission is extending beyond the sound's length, wait\r\n\
        // for it to finish, and then wait the additional time.\r\n\
        call WaitForSoundBJ(soundHandle, 0)\r\n\
        call TriggerSleepAction(timeVal)\r\n\
\r\n\
    else\r\n\
        // Unrecognized timeType - ignore.\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function DoTransmissionBasicsXYBJ takes integer unitId, playercolor color, real x, real y, sound soundHandle, string unitName, string message, real duration returns nothing\r\n\
    call SetCinematicSceneBJ(soundHandle, unitId, color, unitName, message, duration + bj_TRANSMISSION_PORT_HANGTIME, duration)\r\n\
\r\n\
    if (unitId != 0) then\r\n\
        call PingMinimap(x, y, bj_TRANSMISSION_PING_TIME)\r\n\
        //call SetCameraQuickPosition(x, y)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Display a text message to a Player Group with an accompanying sound,\r\n\
// portrait, speech indicator, and all that good stuff.\r\n\
//   - Query duration of sound\r\n\
//   - Play sound\r\n\
//   - Display text message for duration\r\n\
//   - Display animating portrait for duration\r\n\
//   - Display a speech indicator for the unit\r\n\
//   - Ping the minimap\r\n\
//\r\n\
function TransmissionFromUnitWithNameBJ takes force toForce, unit whichUnit, string unitName, sound soundHandle, string message, integer timeType, real timeVal, boolean wait returns nothing\r\n\
    call TryInitCinematicBehaviorBJ()\r\n\
\r\n\
    // Ensure that the time value is non-negative.\r\n\
    set timeVal = RMaxBJ(timeVal, 0)\r\n\
\r\n\
    set bj_lastTransmissionDuration = GetTransmissionDuration(soundHandle, timeType, timeVal)\r\n\
    set bj_lastPlayedSound = soundHandle\r\n\
\r\n\
    if (IsPlayerInForce(GetLocalPlayer(), toForce)) then\r\n\
        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
\r\n\
        if (whichUnit == null) then\r\n\
            // If the unit reference is invalid, send the transmission from the center of the map with no portrait.\r\n\
            call DoTransmissionBasicsXYBJ(0, PLAYER_COLOR_RED, 0, 0, soundHandle, unitName, message, bj_lastTransmissionDuration)\r\n\
        else\r\n\
            call DoTransmissionBasicsXYBJ(GetUnitTypeId(whichUnit), GetPlayerColor(GetOwningPlayer(whichUnit)), GetUnitX(whichUnit), GetUnitY(whichUnit), soundHandle, unitName, message, bj_lastTransmissionDuration)\r\n\
            if (not IsUnitHidden(whichUnit)) then\r\n\
                call UnitAddIndicator(whichUnit, bj_TRANSMISSION_IND_RED, bj_TRANSMISSION_IND_BLUE, bj_TRANSMISSION_IND_GREEN, bj_TRANSMISSION_IND_ALPHA)\r\n\
            endif\r\n\
        endif\r\n\
    endif\r\n\
\r\n\
    if wait and (bj_lastTransmissionDuration > 0) then\r\n\
        // call TriggerSleepAction(bj_lastTransmissionDuration)\r\n\
        call WaitTransmissionDuration(soundHandle, timeType, timeVal)\r\n\
    endif\r\n\
\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// This operates like TransmissionFromUnitWithNameBJ, but for a unit type\r\n\
// rather than a unit instance.  As such, no speech indicator is employed.\r\n\
//\r\n\
function TransmissionFromUnitTypeWithNameBJ takes force toForce, player fromPlayer, integer unitId, string unitName, location loc, sound soundHandle, string message, integer timeType, real timeVal, boolean wait returns nothing\r\n\
    call TryInitCinematicBehaviorBJ()\r\n\
\r\n\
    // Ensure that the time value is non-negative.\r\n\
    set timeVal = RMaxBJ(timeVal, 0)\r\n\
\r\n\
    set bj_lastTransmissionDuration = GetTransmissionDuration(soundHandle, timeType, timeVal)\r\n\
    set bj_lastPlayedSound = soundHandle\r\n\
\r\n\
    if (IsPlayerInForce(GetLocalPlayer(), toForce)) then\r\n\
        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
\r\n\
        call DoTransmissionBasicsXYBJ(unitId, GetPlayerColor(fromPlayer), GetLocationX(loc), GetLocationY(loc), soundHandle, unitName, message, bj_lastTransmissionDuration)\r\n\
    endif\r\n\
\r\n\
    if wait and (bj_lastTransmissionDuration > 0) then\r\n\
        // call TriggerSleepAction(bj_lastTransmissionDuration)\r\n\
        call WaitTransmissionDuration(soundHandle, timeType, timeVal)\r\n\
    endif\r\n\
\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetLastTransmissionDurationBJ takes nothing returns real\r\n\
    return bj_lastTransmissionDuration\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function ForceCinematicSubtitlesBJ takes boolean flag returns nothing\r\n\
    call ForceCinematicSubtitles(flag)\r\n\
endfunction\r\n\
\r\n\
\r\n\
//***************************************************************************\r\n\
//*\r\n\
//*  Cinematic Mode Utility Functions\r\n\
//*\r\n\
//***************************************************************************\r\n\
\r\n\
//===========================================================================\r\n\
// Makes many common UI settings changes at once, for use when beginning and\r\n\
// ending cinematic sequences.  Note that some affects apply to all players,\r\n\
// such as game speed.  This is unavoidable.\r\n\
//   - Clear the screen of text messages\r\n\
//   - Hide interface UI (letterbox mode)\r\n\
//   - Hide game messages (ally under attack, etc.)\r\n\
//   - Disable user control\r\n\
//   - Disable occlusion\r\n\
//   - Set game speed (for all players)\r\n\
//   - Lock game speed (for all players)\r\n\
//   - Disable black mask (for all players)\r\n\
//   - Disable fog of war (for all players)\r\n\
//   - Disable world boundary fog (for all players)\r\n\
//   - Dim non-speech sound channels\r\n\
//   - End any outstanding music themes\r\n\
//   - Fix the random seed to a set value\r\n\
//   - Reset the camera smoothing factor\r\n\
//\r\n\
function CinematicModeExBJ takes boolean cineMode, force forForce, real interfaceFadeTime returns nothing\r\n\
    // If the game hasn't started yet, perform interface fades immediately\r\n\
    if (not bj_gameStarted) then\r\n\
        set interfaceFadeTime = 0\r\n\
    endif\r\n\
\r\n\
    if (cineMode) then\r\n\
        // Save the UI state so that we can restore it later.\r\n\
        if (not bj_cineModeAlreadyIn) then\r\n\
            set bj_cineModeAlreadyIn = true\r\n\
            set bj_cineModePriorSpeed = GetGameSpeed()\r\n\
            set bj_cineModePriorFogSetting = IsFogEnabled()\r\n\
            set bj_cineModePriorMaskSetting = IsFogMaskEnabled()\r\n\
            set bj_cineModePriorDawnDusk = IsDawnDuskEnabled()\r\n\
            set bj_cineModeSavedSeed = GetRandomInt(0, 1000000)\r\n\
        endif\r\n\
\r\n\
        // Perform local changes\r\n\
        if (IsPlayerInForce(GetLocalPlayer(), forForce)) then\r\n\
            // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
            call ClearTextMessages()\r\n\
            call ShowInterface(false, interfaceFadeTime)\r\n\
            call EnableUserControl(false)\r\n\
            call EnableOcclusion(false)\r\n\
            call SetCineModeVolumeGroupsBJ()\r\n\
        endif\r\n\
\r\n\
        // Perform global changes\r\n\
        call SetGameSpeed(bj_CINEMODE_GAMESPEED)\r\n\
        call SetMapFlag(MAP_LOCK_SPEED, true)\r\n\
        call FogMaskEnable(false)\r\n\
        call FogEnable(false)\r\n\
        call EnableWorldFogBoundary(false)\r\n\
        call EnableDawnDusk(false)\r\n\
\r\n\
        // Use a fixed random seed, so that cinematics play consistently.\r\n\
        call SetRandomSeed(0)\r\n\
    else\r\n\
        set bj_cineModeAlreadyIn = false\r\n\
\r\n\
        // Perform local changes\r\n\
        if (IsPlayerInForce(GetLocalPlayer(), forForce)) then\r\n\
            // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
            call ShowInterface(true, interfaceFadeTime)\r\n\
            call EnableUserControl(true)\r\n\
            call EnableOcclusion(true)\r\n\
            call VolumeGroupReset()\r\n\
            call EndThematicMusic()\r\n\
            call CameraResetSmoothingFactorBJ()\r\n\
        endif\r\n\
\r\n\
        // Perform global changes\r\n\
        call SetMapFlag(MAP_LOCK_SPEED, false)\r\n\
        call SetGameSpeed(bj_cineModePriorSpeed)\r\n\
        call FogMaskEnable(bj_cineModePriorMaskSetting)\r\n\
        call FogEnable(bj_cineModePriorFogSetting)\r\n\
        call EnableWorldFogBoundary(true)\r\n\
        call EnableDawnDusk(bj_cineModePriorDawnDusk)\r\n\
        call SetRandomSeed(bj_cineModeSavedSeed)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CinematicModeBJ takes boolean cineMode, force forForce returns nothing\r\n\
    call CinematicModeExBJ(cineMode, forForce, bj_CINEMODE_INTERFACEFADE)\r\n\
endfunction\r\n\
\r\n\
\r\n\
\r\n\
//***************************************************************************\r\n\
//*\r\n\
//*  Cinematic Filter Utility Functions\r\n\
//*\r\n\
//***************************************************************************\r\n\
\r\n\
//===========================================================================\r\n\
function DisplayCineFilterBJ takes boolean flag returns nothing\r\n\
    call DisplayCineFilter(flag)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CinematicFadeCommonBJ takes real red, real green, real blue, real duration, string tex, real startTrans, real endTrans returns nothing\r\n\
    if (duration == 0) then\r\n\
        // If the fade is instant, use the same starting and ending values,\r\n\
        // so that we effectively do a set rather than a fade.\r\n\
        set startTrans = endTrans\r\n\
    endif\r\n\
    call EnableUserUI(false)\r\n\
    call SetCineFilterTexture(tex)\r\n\
    call SetCineFilterBlendMode(BLEND_MODE_BLEND)\r\n\
    call SetCineFilterTexMapFlags(TEXMAP_FLAG_NONE)\r\n\
    call SetCineFilterStartUV(0, 0, 1, 1)\r\n\
    call SetCineFilterEndUV(0, 0, 1, 1)\r\n\
    call SetCineFilterStartColor(PercentTo255(red), PercentTo255(green), PercentTo255(blue), PercentTo255(100-startTrans))\r\n\
    call SetCineFilterEndColor(PercentTo255(red), PercentTo255(green), PercentTo255(blue), PercentTo255(100-endTrans))\r\n\
    call SetCineFilterDuration(duration)\r\n\
    call DisplayCineFilter(true)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function FinishCinematicFadeBJ takes nothing returns nothing\r\n\
    call DestroyTimer(bj_cineFadeFinishTimer)\r\n\
    set bj_cineFadeFinishTimer = null\r\n\
    call DisplayCineFilter(false)\r\n\
    call EnableUserUI(true)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function FinishCinematicFadeAfterBJ takes real duration returns nothing\r\n\
    // Create a timer to end the cinematic fade.\r\n\
    set bj_cineFadeFinishTimer = CreateTimer()\r\n\
    call TimerStart(bj_cineFadeFinishTimer, duration, false, function FinishCinematicFadeBJ)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function ContinueCinematicFadeBJ takes nothing returns nothing\r\n\
    call DestroyTimer(bj_cineFadeContinueTimer)\r\n\
    set bj_cineFadeContinueTimer = null\r\n\
    call CinematicFadeCommonBJ(bj_cineFadeContinueRed, bj_cineFadeContinueGreen, bj_cineFadeContinueBlue, bj_cineFadeContinueDuration, bj_cineFadeContinueTex, bj_cineFadeContinueTrans, 100)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function ContinueCinematicFadeAfterBJ takes real duration, real red, real green, real blue, real trans, string tex returns nothing\r\n\
    set bj_cineFadeContinueRed = red\r\n\
    set bj_cineFadeContinueGreen = green\r\n\
    set bj_cineFadeContinueBlue = blue\r\n\
    set bj_cineFadeContinueTrans = trans\r\n\
    set bj_cineFadeContinueDuration = duration\r\n\
    set bj_cineFadeContinueTex = tex\r\n\
\r\n\
    // Create a timer to continue the cinematic fade.\r\n\
    set bj_cineFadeContinueTimer = CreateTimer()\r\n\
    call TimerStart(bj_cineFadeContinueTimer, duration, false, function ContinueCinematicFadeBJ)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function AbortCinematicFadeBJ takes nothing returns nothing\r\n\
    if (bj_cineFadeContinueTimer != null) then\r\n\
        call DestroyTimer(bj_cineFadeContinueTimer)\r\n\
    endif\r\n\
\r\n\
    if (bj_cineFadeFinishTimer != null) then\r\n\
        call DestroyTimer(bj_cineFadeFinishTimer)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CinematicFadeBJ takes integer fadetype, real duration, string tex, real red, real green, real blue, real trans returns nothing\r\n\
    if (fadetype == bj_CINEFADETYPE_FADEOUT) then\r\n\
        // Fade out to the requested color.\r\n\
        call AbortCinematicFadeBJ()\r\n\
        call CinematicFadeCommonBJ(red, green, blue, duration, tex, 100, trans)\r\n\
    elseif (fadetype == bj_CINEFADETYPE_FADEIN) then\r\n\
        // Fade in from the requested color.\r\n\
        call AbortCinematicFadeBJ()\r\n\
        call CinematicFadeCommonBJ(red, green, blue, duration, tex, trans, 100)\r\n\
        call FinishCinematicFadeAfterBJ(duration)\r\n\
    elseif (fadetype == bj_CINEFADETYPE_FADEOUTIN) then\r\n\
        // Fade out to the requested color, and then fade back in from it.\r\n\
        if (duration > 0) then\r\n\
            call AbortCinematicFadeBJ()\r\n\
            call CinematicFadeCommonBJ(red, green, blue, duration * 0.5, tex, 100, trans)\r\n\
            call ContinueCinematicFadeAfterBJ(duration * 0.5, red, green, blue, trans, tex)\r\n\
            call FinishCinematicFadeAfterBJ(duration)\r\n\
        endif\r\n\
    else\r\n\
        // Unrecognized fadetype - ignore the request.\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CinematicFilterGenericBJ takes real duration, blendmode bmode, string tex, real red0, real green0, real blue0, real trans0, real red1, real green1, real blue1, real trans1 returns nothing\r\n\
    call AbortCinematicFadeBJ()\r\n\
    call SetCineFilterTexture(tex)\r\n\
    call SetCineFilterBlendMode(bmode)\r\n\
    call SetCineFilterTexMapFlags(TEXMAP_FLAG_NONE)\r\n\
    call SetCineFilterStartUV(0, 0, 1, 1)\r\n\
    call SetCineFilterEndUV(0, 0, 1, 1)\r\n\
    call SetCineFilterStartColor(PercentTo255(red0), PercentTo255(green0), PercentTo255(blue0), PercentTo255(100-trans0))\r\n\
    call SetCineFilterEndColor(PercentTo255(red1), PercentTo255(green1), PercentTo255(blue1), PercentTo255(100-trans1))\r\n\
    call SetCineFilterDuration(duration)\r\n\
    call DisplayCineFilter(true)\r\n\
endfunction\r\n\
\r\n\
\r\n\
\r\n\
//***************************************************************************\r\n\
//*\r\n\
//*  Rescuable Unit Utility Functions\r\n\
//*\r\n\
//***************************************************************************\r\n\
\r\n\
//===========================================================================\r\n\
// Rescues a unit for a player.  This performs the default rescue behavior,\r\n\
// including a rescue sound, flashing selection circle, ownership change,\r\n\
// and optionally a unit color change.\r\n\
//\r\n\
function RescueUnitBJ takes unit whichUnit, player rescuer, boolean changeColor returns nothing\r\n\
    if IsUnitDeadBJ(whichUnit) or (GetOwningPlayer(whichUnit) == rescuer) then\r\n\
        return\r\n\
    endif\r\n\
\r\n\
    call StartSound(bj_rescueSound)\r\n\
    call SetUnitOwner(whichUnit, rescuer, changeColor)\r\n\
    call UnitAddIndicator(whichUnit, 0, 255, 0, 255)\r\n\
    call PingMinimapForPlayer(rescuer, GetUnitX(whichUnit), GetUnitY(whichUnit), bj_RESCUE_PING_TIME)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function TriggerActionUnitRescuedBJ takes nothing returns nothing\r\n\
    local unit theUnit = GetTriggerUnit()\r\n\
\r\n\
    if IsUnitType(theUnit, UNIT_TYPE_STRUCTURE) then\r\n\
        call RescueUnitBJ(theUnit, GetOwningPlayer(GetRescuer()), bj_rescueChangeColorBldg)\r\n\
    else\r\n\
        call RescueUnitBJ(theUnit, GetOwningPlayer(GetRescuer()), bj_rescueChangeColorUnit)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Attempt to init triggers for default rescue behavior.  For performance\r\n\
// reasons, this should only be attempted if a player is set to Rescuable,\r\n\
// or if a specific unit is thus flagged.\r\n\
//\r\n\
function TryInitRescuableTriggersBJ takes nothing returns nothing\r\n\
    local integer index\r\n\
\r\n\
    if (bj_rescueUnitBehavior == null) then\r\n\
        set bj_rescueUnitBehavior = CreateTrigger()\r\n\
        set index = 0\r\n\
        loop\r\n\
            call TriggerRegisterPlayerUnitEvent(bj_rescueUnitBehavior, Player(index), EVENT_PLAYER_UNIT_RESCUED, null)\r\n\
            set index = index + 1\r\n\
            exitwhen index == bj_MAX_PLAYER_SLOTS\r\n\
        endloop\r\n\
        call TriggerAddAction(bj_rescueUnitBehavior, function TriggerActionUnitRescuedBJ)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Determines whether or not rescued units automatically change color upon\r\n\
// being rescued.\r\n\
//\r\n\
function SetRescueUnitColorChangeBJ takes boolean changeColor returns nothing\r\n\
    set bj_rescueChangeColorUnit = changeColor\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Determines whether or not rescued buildings automatically change color\r\n\
// upon being rescued.\r\n\
//\r\n\
function SetRescueBuildingColorChangeBJ takes boolean changeColor returns nothing\r\n\
    set bj_rescueChangeColorBldg = changeColor\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function MakeUnitRescuableToForceBJEnum takes nothing returns nothing\r\n\
    call TryInitRescuableTriggersBJ()\r\n\
    call SetUnitRescuable(bj_makeUnitRescuableUnit, GetEnumPlayer(), bj_makeUnitRescuableFlag)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function MakeUnitRescuableToForceBJ takes unit whichUnit, boolean isRescuable, force whichForce returns nothing\r\n\
    // Flag the unit as rescuable/unrescuable for the appropriate players.\r\n\
    set bj_makeUnitRescuableUnit = whichUnit\r\n\
    set bj_makeUnitRescuableFlag = isRescuable\r\n\
    call ForForce(whichForce, function MakeUnitRescuableToForceBJEnum)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function InitRescuableBehaviorBJ takes nothing returns nothing\r\n\
    local integer index\r\n\
\r\n\
    set index = 0\r\n\
    loop\r\n\
        // If at least one player slot is \"Rescuable\"-controlled, init the\r\n\
        // rescue behavior triggers.\r\n\
        if (GetPlayerController(Player(index)) == MAP_CONTROL_RESCUABLE) then\r\n\
            call TryInitRescuableTriggersBJ()\r\n\
            return\r\n\
        endif\r\n\
        set index = index + 1\r\n\
        exitwhen index == bj_MAX_PLAYERS\r\n\
    endloop\r\n\
endfunction\r\n\
\r\n\
\r\n\
\r\n\
//***************************************************************************\r\n\
//*\r\n\
//*  Research and Upgrade Utility Functions\r\n\
//*\r\n\
//***************************************************************************\r\n\
\r\n\
//===========================================================================\r\n\
function SetPlayerTechResearchedSwap takes integer techid, integer levels, player whichPlayer returns nothing\r\n\
    call SetPlayerTechResearched(whichPlayer, techid, levels)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetPlayerTechMaxAllowedSwap takes integer techid, integer maximum, player whichPlayer returns nothing\r\n\
    call SetPlayerTechMaxAllowed(whichPlayer, techid, maximum)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetPlayerMaxHeroesAllowed takes integer maximum, player whichPlayer returns nothing\r\n\
    call SetPlayerTechMaxAllowed(whichPlayer, 'HERO', maximum)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetPlayerTechCountSimple takes integer techid, player whichPlayer returns integer\r\n\
    return GetPlayerTechCount(whichPlayer, techid, true)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetPlayerTechMaxAllowedSwap takes integer techid, player whichPlayer returns integer\r\n\
    return GetPlayerTechMaxAllowed(whichPlayer, techid)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetPlayerAbilityAvailableBJ takes boolean avail, integer abilid, player whichPlayer returns nothing\r\n\
    call SetPlayerAbilityAvailable(whichPlayer, abilid, avail)\r\n\
endfunction\r\n\
\r\n\
\r\n\
\r\n\
//***************************************************************************\r\n\
//*\r\n\
//*  Campaign Utility Functions\r\n\
//*\r\n\
//***************************************************************************\r\n\
\r\n\
function SetCampaignMenuRaceBJ takes integer campaignNumber returns nothing\r\n\
    if (campaignNumber == bj_CAMPAIGN_INDEX_T) then\r\n\
        call SetCampaignMenuRace(RACE_OTHER)\r\n\
    elseif (campaignNumber == bj_CAMPAIGN_INDEX_H) then\r\n\
        call SetCampaignMenuRace(RACE_HUMAN)\r\n\
    elseif (campaignNumber == bj_CAMPAIGN_INDEX_U) then\r\n\
        call SetCampaignMenuRace(RACE_UNDEAD)\r\n\
    elseif (campaignNumber == bj_CAMPAIGN_INDEX_O) then\r\n\
        call SetCampaignMenuRace(RACE_ORC)\r\n\
    elseif (campaignNumber == bj_CAMPAIGN_INDEX_N) then\r\n\
        call SetCampaignMenuRace(RACE_NIGHTELF)\r\n\
    elseif (campaignNumber == bj_CAMPAIGN_INDEX_XN) then\r\n\
        call SetCampaignMenuRaceEx(bj_CAMPAIGN_OFFSET_XN)\r\n\
    elseif (campaignNumber == bj_CAMPAIGN_INDEX_XH) then\r\n\
        call SetCampaignMenuRaceEx(bj_CAMPAIGN_OFFSET_XH)\r\n\
    elseif (campaignNumber == bj_CAMPAIGN_INDEX_XU) then\r\n\
        call SetCampaignMenuRaceEx(bj_CAMPAIGN_OFFSET_XU)\r\n\
    elseif (campaignNumber == bj_CAMPAIGN_INDEX_XO) then\r\n\
        call SetCampaignMenuRaceEx(bj_CAMPAIGN_OFFSET_XO)\r\n\
    else\r\n\
        // Unrecognized campaign - ignore the request\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Converts a single campaign mission designation into campaign and mission\r\n\
// numbers.  The 1000's digit is considered the campaign index, and the 1's\r\n\
// digit is considered the mission index within that campaign.  This is done\r\n\
// so that the trigger for this can use a single drop-down to list all of\r\n\
// the campaign missions.\r\n\
//\r\n\
function SetMissionAvailableBJ takes boolean available, integer missionIndex returns nothing\r\n\
    local integer campaignNumber = missionIndex / 1000\r\n\
    local integer missionNumber = missionIndex - campaignNumber * 1000\r\n\
\r\n\
    call SetMissionAvailable(campaignNumber, missionNumber, available)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetCampaignAvailableBJ takes boolean available, integer campaignNumber returns nothing\r\n\
    local integer campaignOffset\r\n\
\r\n\
    if (campaignNumber == bj_CAMPAIGN_INDEX_H) then\r\n\
        call SetTutorialCleared(true)\r\n\
    endif\r\n\
\r\n\
    if (campaignNumber == bj_CAMPAIGN_INDEX_XN) then\r\n\
        set campaignOffset = bj_CAMPAIGN_OFFSET_XN\r\n\
    elseif (campaignNumber == bj_CAMPAIGN_INDEX_XH) then\r\n\
        set campaignOffset = bj_CAMPAIGN_OFFSET_XH\r\n\
    elseif (campaignNumber == bj_CAMPAIGN_INDEX_XU) then\r\n\
        set campaignOffset = bj_CAMPAIGN_OFFSET_XU\r\n\
    elseif (campaignNumber == bj_CAMPAIGN_INDEX_XO) then\r\n\
        set campaignOffset = bj_CAMPAIGN_OFFSET_XO\r\n\
    else\r\n\
        set campaignOffset = campaignNumber\r\n\
    endif\r\n\
\r\n\
    call SetCampaignAvailable(campaignOffset, available)\r\n\
    call SetCampaignMenuRaceBJ(campaignNumber)\r\n\
    call ForceCampaignSelectScreen()\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetCinematicAvailableBJ takes boolean available, integer cinematicIndex returns nothing\r\n\
    if ( cinematicIndex == bj_CINEMATICINDEX_TOP ) then\r\n\
        call SetOpCinematicAvailable( bj_CAMPAIGN_INDEX_T, available )\r\n\
        call PlayCinematic( \"TutorialOp\" )\r\n\
    elseif (cinematicIndex == bj_CINEMATICINDEX_HOP) then\r\n\
        call SetOpCinematicAvailable( bj_CAMPAIGN_INDEX_H, available )\r\n\
        call PlayCinematic( \"HumanOp\" )\r\n\
    elseif (cinematicIndex == bj_CINEMATICINDEX_HED) then\r\n\
        call SetEdCinematicAvailable( bj_CAMPAIGN_INDEX_H, available )\r\n\
        call PlayCinematic( \"HumanEd\" )\r\n\
    elseif (cinematicIndex == bj_CINEMATICINDEX_OOP) then\r\n\
        call SetOpCinematicAvailable( bj_CAMPAIGN_INDEX_O, available )\r\n\
        call PlayCinematic( \"OrcOp\" )\r\n\
    elseif (cinematicIndex == bj_CINEMATICINDEX_OED) then\r\n\
        call SetEdCinematicAvailable( bj_CAMPAIGN_INDEX_O, available )\r\n\
        call PlayCinematic( \"OrcEd\" )\r\n\
    elseif (cinematicIndex == bj_CINEMATICINDEX_UOP) then\r\n\
        call SetEdCinematicAvailable( bj_CAMPAIGN_INDEX_U, available )\r\n\
        call PlayCinematic( \"UndeadOp\" )\r\n\
    elseif (cinematicIndex == bj_CINEMATICINDEX_UED) then\r\n\
        call SetEdCinematicAvailable( bj_CAMPAIGN_INDEX_U, available )\r\n\
        call PlayCinematic( \"UndeadEd\" )\r\n\
    elseif (cinematicIndex == bj_CINEMATICINDEX_NOP) then\r\n\
        call SetEdCinematicAvailable( bj_CAMPAIGN_INDEX_N, available )\r\n\
        call PlayCinematic( \"NightElfOp\" )\r\n\
    elseif (cinematicIndex == bj_CINEMATICINDEX_NED) then\r\n\
        call SetEdCinematicAvailable( bj_CAMPAIGN_INDEX_N, available )\r\n\
        call PlayCinematic( \"NightElfEd\" )\r\n\
    elseif (cinematicIndex == bj_CINEMATICINDEX_XOP) then\r\n\
        call SetOpCinematicAvailable( bj_CAMPAIGN_OFFSET_XN, available )\r\n\
        call PlayCinematic( \"IntroX\" )\r\n\
    elseif (cinematicIndex == bj_CINEMATICINDEX_XED) then\r\n\
        call SetEdCinematicAvailable( bj_CAMPAIGN_OFFSET_XU, available )\r\n\
        call PlayCinematic( \"OutroX\" )\r\n\
    else\r\n\
        // Unrecognized cinematic - ignore the request.\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function InitGameCacheBJ takes string campaignFile returns gamecache\r\n\
    set bj_lastCreatedGameCache = InitGameCache(campaignFile)\r\n\
    return bj_lastCreatedGameCache\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SaveGameCacheBJ takes gamecache cache returns boolean\r\n\
    return SaveGameCache(cache)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetLastCreatedGameCacheBJ takes nothing returns gamecache\r\n\
    return bj_lastCreatedGameCache\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function InitHashtableBJ takes nothing returns hashtable\r\n\
    set bj_lastCreatedHashtable = InitHashtable()\r\n\
    return bj_lastCreatedHashtable\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetLastCreatedHashtableBJ takes nothing returns hashtable\r\n\
    return bj_lastCreatedHashtable\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function StoreRealBJ takes real value, string key, string missionKey, gamecache cache returns nothing\r\n\
    call StoreReal(cache, missionKey, key, value)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function StoreIntegerBJ takes integer value, string key, string missionKey, gamecache cache returns nothing\r\n\
    call StoreInteger(cache, missionKey, key, value)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function StoreBooleanBJ takes boolean value, string key, string missionKey, gamecache cache returns nothing\r\n\
    call StoreBoolean(cache, missionKey, key, value)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function StoreStringBJ takes string value, string key, string missionKey, gamecache cache returns boolean\r\n\
    return StoreString(cache, missionKey, key, value)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function StoreUnitBJ takes unit whichUnit, string key, string missionKey, gamecache cache returns boolean\r\n\
    return StoreUnit(cache, missionKey, key, whichUnit)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SaveRealBJ takes real value, integer key, integer missionKey, hashtable table returns nothing\r\n\
    call SaveReal(table, missionKey, key, value)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SaveIntegerBJ takes integer value, integer key, integer missionKey, hashtable table returns nothing\r\n\
    call SaveInteger(table, missionKey, key, value)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SaveBooleanBJ takes boolean value, integer key, integer missionKey, hashtable table returns nothing\r\n\
    call SaveBoolean(table, missionKey, key, value)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SaveStringBJ takes string value, integer key, integer missionKey, hashtable table returns boolean\r\n\
    return SaveStr(table, missionKey, key, value)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SavePlayerHandleBJ takes player whichPlayer, integer key, integer missionKey, hashtable table returns boolean\r\n\
    return SavePlayerHandle(table, missionKey, key, whichPlayer)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SaveWidgetHandleBJ takes widget whichWidget, integer key, integer missionKey, hashtable table returns boolean\r\n\
    return SaveWidgetHandle(table, missionKey, key, whichWidget)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SaveDestructableHandleBJ takes destructable whichDestructable, integer key, integer missionKey, hashtable table returns boolean\r\n\
    return SaveDestructableHandle(table, missionKey, key, whichDestructable)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SaveItemHandleBJ takes item whichItem, integer key, integer missionKey, hashtable table returns boolean\r\n\
    return SaveItemHandle(table, missionKey, key, whichItem)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SaveUnitHandleBJ takes unit whichUnit, integer key, integer missionKey, hashtable table returns boolean\r\n\
    return SaveUnitHandle(table, missionKey, key, whichUnit)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SaveAbilityHandleBJ takes ability whichAbility, integer key, integer missionKey, hashtable table returns boolean\r\n\
    return SaveAbilityHandle(table, missionKey, key, whichAbility)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SaveTimerHandleBJ takes timer whichTimer, integer key, integer missionKey, hashtable table returns boolean\r\n\
    return SaveTimerHandle(table, missionKey, key, whichTimer)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SaveTriggerHandleBJ takes trigger whichTrigger, integer key, integer missionKey, hashtable table returns boolean\r\n\
    return SaveTriggerHandle(table, missionKey, key, whichTrigger)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SaveTriggerConditionHandleBJ takes triggercondition whichTriggercondition, integer key, integer missionKey, hashtable table returns boolean\r\n\
    return SaveTriggerConditionHandle(table, missionKey, key, whichTriggercondition)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SaveTriggerActionHandleBJ takes triggeraction whichTriggeraction, integer key, integer missionKey, hashtable table returns boolean\r\n\
    return SaveTriggerActionHandle(table, missionKey, key, whichTriggeraction)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SaveTriggerEventHandleBJ takes event whichEvent, integer key, integer missionKey, hashtable table returns boolean\r\n\
    return SaveTriggerEventHandle(table, missionKey, key, whichEvent)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SaveForceHandleBJ takes force whichForce, integer key, integer missionKey, hashtable table returns boolean\r\n\
    return SaveForceHandle(table, missionKey, key, whichForce)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SaveGroupHandleBJ takes group whichGroup, integer key, integer missionKey, hashtable table returns boolean\r\n\
    return SaveGroupHandle(table, missionKey, key, whichGroup)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SaveLocationHandleBJ takes location whichLocation, integer key, integer missionKey, hashtable table returns boolean\r\n\
    return SaveLocationHandle(table, missionKey, key, whichLocation)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SaveRectHandleBJ takes rect whichRect, integer key, integer missionKey, hashtable table returns boolean\r\n\
    return SaveRectHandle(table, missionKey, key, whichRect)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SaveBooleanExprHandleBJ takes boolexpr whichBoolexpr, integer key, integer missionKey, hashtable table returns boolean\r\n\
    return SaveBooleanExprHandle(table, missionKey, key, whichBoolexpr)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SaveSoundHandleBJ takes sound whichSound, integer key, integer missionKey, hashtable table returns boolean\r\n\
    return SaveSoundHandle(table, missionKey, key, whichSound)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SaveEffectHandleBJ takes effect whichEffect, integer key, integer missionKey, hashtable table returns boolean\r\n\
    return SaveEffectHandle(table, missionKey, key, whichEffect)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SaveUnitPoolHandleBJ takes unitpool whichUnitpool, integer key, integer missionKey, hashtable table returns boolean\r\n\
    return SaveUnitPoolHandle(table, missionKey, key, whichUnitpool)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SaveItemPoolHandleBJ takes itempool whichItempool, integer key, integer missionKey, hashtable table returns boolean\r\n\
    return SaveItemPoolHandle(table, missionKey, key, whichItempool)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SaveQuestHandleBJ takes quest whichQuest, integer key, integer missionKey, hashtable table returns boolean\r\n\
    return SaveQuestHandle(table, missionKey, key, whichQuest)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SaveQuestItemHandleBJ takes questitem whichQuestitem, integer key, integer missionKey, hashtable table returns boolean\r\n\
    return SaveQuestItemHandle(table, missionKey, key, whichQuestitem)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SaveDefeatConditionHandleBJ takes defeatcondition whichDefeatcondition, integer key, integer missionKey, hashtable table returns boolean\r\n\
    return SaveDefeatConditionHandle(table, missionKey, key, whichDefeatcondition)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SaveTimerDialogHandleBJ takes timerdialog whichTimerdialog, integer key, integer missionKey, hashtable table returns boolean\r\n\
    return SaveTimerDialogHandle(table, missionKey, key, whichTimerdialog)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SaveLeaderboardHandleBJ takes leaderboard whichLeaderboard, integer key, integer missionKey, hashtable table returns boolean\r\n\
    return SaveLeaderboardHandle(table, missionKey, key, whichLeaderboard)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SaveMultiboardHandleBJ takes multiboard whichMultiboard, integer key, integer missionKey, hashtable table returns boolean\r\n\
    return SaveMultiboardHandle(table, missionKey, key, whichMultiboard)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SaveMultiboardItemHandleBJ takes multiboarditem whichMultiboarditem, integer key, integer missionKey, hashtable table returns boolean\r\n\
    return SaveMultiboardItemHandle(table, missionKey, key, whichMultiboarditem)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SaveTrackableHandleBJ takes trackable whichTrackable, integer key, integer missionKey, hashtable table returns boolean\r\n\
    return SaveTrackableHandle(table, missionKey, key, whichTrackable)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SaveDialogHandleBJ takes dialog whichDialog, integer key, integer missionKey, hashtable table returns boolean\r\n\
    return SaveDialogHandle(table, missionKey, key, whichDialog)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SaveButtonHandleBJ takes button whichButton, integer key, integer missionKey, hashtable table returns boolean\r\n\
    return SaveButtonHandle(table, missionKey, key, whichButton)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SaveTextTagHandleBJ takes texttag whichTexttag, integer key, integer missionKey, hashtable table returns boolean\r\n\
    return SaveTextTagHandle(table, missionKey, key, whichTexttag)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SaveLightningHandleBJ takes lightning whichLightning, integer key, integer missionKey, hashtable table returns boolean\r\n\
    return SaveLightningHandle(table, missionKey, key, whichLightning)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SaveImageHandleBJ takes image whichImage, integer key, integer missionKey, hashtable table returns boolean\r\n\
    return SaveImageHandle(table, missionKey, key, whichImage)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SaveUbersplatHandleBJ takes ubersplat whichUbersplat, integer key, integer missionKey, hashtable table returns boolean\r\n\
    return SaveUbersplatHandle(table, missionKey, key, whichUbersplat)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SaveRegionHandleBJ takes region whichRegion, integer key, integer missionKey, hashtable table returns boolean\r\n\
    return SaveRegionHandle(table, missionKey, key, whichRegion)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SaveFogStateHandleBJ takes fogstate whichFogState, integer key, integer missionKey, hashtable table returns boolean\r\n\
    return SaveFogStateHandle(table, missionKey, key, whichFogState)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SaveFogModifierHandleBJ takes fogmodifier whichFogModifier, integer key, integer missionKey, hashtable table returns boolean\r\n\
    return SaveFogModifierHandle(table, missionKey, key, whichFogModifier)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SaveAgentHandleBJ takes agent whichAgent, integer key, integer missionKey, hashtable table returns boolean\r\n\
    return SaveAgentHandle(table, missionKey, key, whichAgent)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SaveHashtableHandleBJ takes hashtable whichHashtable, integer key, integer missionKey, hashtable table returns boolean\r\n\
    return SaveHashtableHandle(table, missionKey, key, whichHashtable)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetStoredRealBJ takes string key, string missionKey, gamecache cache returns real\r\n\
    //call SyncStoredReal(cache, missionKey, key)\r\n\
    return GetStoredReal(cache, missionKey, key)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetStoredIntegerBJ takes string key, string missionKey, gamecache cache returns integer\r\n\
    //call SyncStoredInteger(cache, missionKey, key)\r\n\
    return GetStoredInteger(cache, missionKey, key)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetStoredBooleanBJ takes string key, string missionKey, gamecache cache returns boolean\r\n\
    //call SyncStoredBoolean(cache, missionKey, key)\r\n\
    return GetStoredBoolean(cache, missionKey, key)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetStoredStringBJ takes string key, string missionKey, gamecache cache returns string\r\n\
    local string s\r\n\
\r\n\
    //call SyncStoredString(cache, missionKey, key)\r\n\
    set s = GetStoredString(cache, missionKey, key)\r\n\
    if (s == null) then\r\n\
        return \"\"\r\n\
    else\r\n\
        return s\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LoadRealBJ takes integer key, integer missionKey, hashtable table returns real\r\n\
    //call SyncStoredReal(table, missionKey, key)\r\n\
    return LoadReal(table, missionKey, key)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LoadIntegerBJ takes integer key, integer missionKey, hashtable table returns integer\r\n\
    //call SyncStoredInteger(table, missionKey, key)\r\n\
    return LoadInteger(table, missionKey, key)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LoadBooleanBJ takes integer key, integer missionKey, hashtable table returns boolean\r\n\
    //call SyncStoredBoolean(table, missionKey, key)\r\n\
    return LoadBoolean(table, missionKey, key)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LoadStringBJ takes integer key, integer missionKey, hashtable table returns string\r\n\
    local string s\r\n\
\r\n\
    //call SyncStoredString(table, missionKey, key)\r\n\
    set s = LoadStr(table, missionKey, key)\r\n\
    if (s == null) then\r\n\
        return \"\"\r\n\
    else\r\n\
        return s\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LoadPlayerHandleBJ takes integer key, integer missionKey, hashtable table returns player\r\n\
    return LoadPlayerHandle(table, missionKey, key)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LoadWidgetHandleBJ takes integer key, integer missionKey, hashtable table returns widget\r\n\
    return LoadWidgetHandle(table, missionKey, key)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LoadDestructableHandleBJ takes integer key, integer missionKey, hashtable table returns destructable\r\n\
    return LoadDestructableHandle(table, missionKey, key)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LoadItemHandleBJ takes integer key, integer missionKey, hashtable table returns item\r\n\
    return LoadItemHandle(table, missionKey, key)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LoadUnitHandleBJ takes integer key, integer missionKey, hashtable table returns unit\r\n\
    return LoadUnitHandle(table, missionKey, key)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LoadAbilityHandleBJ takes integer key, integer missionKey, hashtable table returns ability\r\n\
    return LoadAbilityHandle(table, missionKey, key)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LoadTimerHandleBJ takes integer key, integer missionKey, hashtable table returns timer\r\n\
    return LoadTimerHandle(table, missionKey, key)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LoadTriggerHandleBJ takes integer key, integer missionKey, hashtable table returns trigger\r\n\
    return LoadTriggerHandle(table, missionKey, key)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LoadTriggerConditionHandleBJ takes integer key, integer missionKey, hashtable table returns triggercondition\r\n\
    return LoadTriggerConditionHandle(table, missionKey, key)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LoadTriggerActionHandleBJ takes integer key, integer missionKey, hashtable table returns triggeraction\r\n\
    return LoadTriggerActionHandle(table, missionKey, key)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LoadTriggerEventHandleBJ takes integer key, integer missionKey, hashtable table returns event\r\n\
    return LoadTriggerEventHandle(table, missionKey, key)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LoadForceHandleBJ takes integer key, integer missionKey, hashtable table returns force\r\n\
    return LoadForceHandle(table, missionKey, key)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LoadGroupHandleBJ takes integer key, integer missionKey, hashtable table returns group\r\n\
    return LoadGroupHandle(table, missionKey, key)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LoadLocationHandleBJ takes integer key, integer missionKey, hashtable table returns location\r\n\
    return LoadLocationHandle(table, missionKey, key)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LoadRectHandleBJ takes integer key, integer missionKey, hashtable table returns rect\r\n\
    return LoadRectHandle(table, missionKey, key)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LoadBooleanExprHandleBJ takes integer key, integer missionKey, hashtable table returns boolexpr\r\n\
    return LoadBooleanExprHandle(table, missionKey, key)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LoadSoundHandleBJ takes integer key, integer missionKey, hashtable table returns sound\r\n\
    return LoadSoundHandle(table, missionKey, key)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LoadEffectHandleBJ takes integer key, integer missionKey, hashtable table returns effect\r\n\
    return LoadEffectHandle(table, missionKey, key)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LoadUnitPoolHandleBJ takes integer key, integer missionKey, hashtable table returns unitpool\r\n\
    return LoadUnitPoolHandle(table, missionKey, key)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LoadItemPoolHandleBJ takes integer key, integer missionKey, hashtable table returns itempool\r\n\
    return LoadItemPoolHandle(table, missionKey, key)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LoadQuestHandleBJ takes integer key, integer missionKey, hashtable table returns quest\r\n\
    return LoadQuestHandle(table, missionKey, key)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LoadQuestItemHandleBJ takes integer key, integer missionKey, hashtable table returns questitem\r\n\
    return LoadQuestItemHandle(table, missionKey, key)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LoadDefeatConditionHandleBJ takes integer key, integer missionKey, hashtable table returns defeatcondition\r\n\
    return LoadDefeatConditionHandle(table, missionKey, key)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LoadTimerDialogHandleBJ takes integer key, integer missionKey, hashtable table returns timerdialog\r\n\
    return LoadTimerDialogHandle(table, missionKey, key)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LoadLeaderboardHandleBJ takes integer key, integer missionKey, hashtable table returns leaderboard\r\n\
    return LoadLeaderboardHandle(table, missionKey, key)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LoadMultiboardHandleBJ takes integer key, integer missionKey, hashtable table returns multiboard\r\n\
    return LoadMultiboardHandle(table, missionKey, key)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LoadMultiboardItemHandleBJ takes integer key, integer missionKey, hashtable table returns multiboarditem\r\n\
    return LoadMultiboardItemHandle(table, missionKey, key)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LoadTrackableHandleBJ takes integer key, integer missionKey, hashtable table returns trackable\r\n\
    return LoadTrackableHandle(table, missionKey, key)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LoadDialogHandleBJ takes integer key, integer missionKey, hashtable table returns dialog\r\n\
    return LoadDialogHandle(table, missionKey, key)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LoadButtonHandleBJ takes integer key, integer missionKey, hashtable table returns button\r\n\
    return LoadButtonHandle(table, missionKey, key)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LoadTextTagHandleBJ takes integer key, integer missionKey, hashtable table returns texttag\r\n\
    return LoadTextTagHandle(table, missionKey, key)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LoadLightningHandleBJ takes integer key, integer missionKey, hashtable table returns lightning\r\n\
    return LoadLightningHandle(table, missionKey, key)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LoadImageHandleBJ takes integer key, integer missionKey, hashtable table returns image\r\n\
    return LoadImageHandle(table, missionKey, key)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LoadUbersplatHandleBJ takes integer key, integer missionKey, hashtable table returns ubersplat\r\n\
    return LoadUbersplatHandle(table, missionKey, key)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LoadRegionHandleBJ takes integer key, integer missionKey, hashtable table returns region\r\n\
    return LoadRegionHandle(table, missionKey, key)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LoadFogStateHandleBJ takes integer key, integer missionKey, hashtable table returns fogstate\r\n\
    return LoadFogStateHandle(table, missionKey, key)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LoadFogModifierHandleBJ takes integer key, integer missionKey, hashtable table returns fogmodifier\r\n\
    return LoadFogModifierHandle(table, missionKey, key)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LoadHashtableHandleBJ takes integer key, integer missionKey, hashtable table returns hashtable\r\n\
    return LoadHashtableHandle(table, missionKey, key)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function RestoreUnitLocFacingAngleBJ takes string key, string missionKey, gamecache cache, player forWhichPlayer, location loc, real facing returns unit\r\n\
    //call SyncStoredUnit(cache, missionKey, key)\r\n\
    set bj_lastLoadedUnit = RestoreUnit(cache, missionKey, key, forWhichPlayer, GetLocationX(loc), GetLocationY(loc), facing)\r\n\
    return bj_lastLoadedUnit\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function RestoreUnitLocFacingPointBJ takes string key, string missionKey, gamecache cache, player forWhichPlayer, location loc, location lookAt returns unit\r\n\
    //call SyncStoredUnit(cache, missionKey, key)\r\n\
    return RestoreUnitLocFacingAngleBJ(key, missionKey, cache, forWhichPlayer, loc, AngleBetweenPoints(loc, lookAt))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetLastRestoredUnitBJ takes nothing returns unit\r\n\
    return bj_lastLoadedUnit\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function FlushGameCacheBJ takes gamecache cache returns nothing\r\n\
    call FlushGameCache(cache)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function FlushStoredMissionBJ takes string missionKey, gamecache cache returns nothing\r\n\
    call FlushStoredMission(cache, missionKey)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function FlushParentHashtableBJ takes hashtable table returns nothing\r\n\
    call FlushParentHashtable(table)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function FlushChildHashtableBJ takes integer missionKey, hashtable table returns nothing\r\n\
    call FlushChildHashtable(table, missionKey)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function HaveStoredValue takes string key, integer valueType, string missionKey, gamecache cache returns boolean\r\n\
    if (valueType == bj_GAMECACHE_BOOLEAN) then\r\n\
        return HaveStoredBoolean(cache, missionKey, key)\r\n\
    elseif (valueType == bj_GAMECACHE_INTEGER) then\r\n\
        return HaveStoredInteger(cache, missionKey, key)\r\n\
    elseif (valueType == bj_GAMECACHE_REAL) then\r\n\
        return HaveStoredReal(cache, missionKey, key)\r\n\
    elseif (valueType == bj_GAMECACHE_UNIT) then\r\n\
        return HaveStoredUnit(cache, missionKey, key)\r\n\
    elseif (valueType == bj_GAMECACHE_STRING) then\r\n\
        return HaveStoredString(cache, missionKey, key)\r\n\
    else\r\n\
        // Unrecognized value type - ignore the request.\r\n\
        return false\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function HaveSavedValue takes integer key, integer valueType, integer missionKey, hashtable table returns boolean\r\n\
    if (valueType == bj_HASHTABLE_BOOLEAN) then\r\n\
        return HaveSavedBoolean(table, missionKey, key)\r\n\
    elseif (valueType == bj_HASHTABLE_INTEGER) then\r\n\
        return HaveSavedInteger(table, missionKey, key)\r\n\
    elseif (valueType == bj_HASHTABLE_REAL) then\r\n\
        return HaveSavedReal(table, missionKey, key)\r\n\
    elseif (valueType == bj_HASHTABLE_STRING) then\r\n\
        return HaveSavedString(table, missionKey, key)\r\n\
    elseif (valueType == bj_HASHTABLE_HANDLE) then\r\n\
        return HaveSavedHandle(table, missionKey, key)\r\n\
    else\r\n\
        // Unrecognized value type - ignore the request.\r\n\
        return false\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function ShowCustomCampaignButton takes boolean show, integer whichButton returns nothing\r\n\
    call SetCustomCampaignButtonVisible(whichButton - 1, show)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function IsCustomCampaignButtonVisibile takes integer whichButton returns boolean\r\n\
    return GetCustomCampaignButtonVisible(whichButton - 1)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LoadGameBJ takes string loadFileName, boolean doScoreScreen returns nothing\r\n\
    call LoadGame(loadFileName, doScoreScreen)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SaveAndChangeLevelBJ takes string saveFileName, string newLevel, boolean doScoreScreen returns nothing\r\n\
    call SaveGame(saveFileName)\r\n\
    call ChangeLevel(newLevel, doScoreScreen)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SaveAndLoadGameBJ takes string saveFileName, string loadFileName, boolean doScoreScreen returns nothing\r\n\
    call SaveGame(saveFileName)\r\n\
    call LoadGame(loadFileName, doScoreScreen)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function RenameSaveDirectoryBJ takes string sourceDirName, string destDirName returns boolean\r\n\
    return RenameSaveDirectory(sourceDirName, destDirName)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function RemoveSaveDirectoryBJ takes string sourceDirName returns boolean\r\n\
    return RemoveSaveDirectory(sourceDirName)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function CopySaveGameBJ takes string sourceSaveName, string destSaveName returns boolean\r\n\
    return CopySaveGame(sourceSaveName, destSaveName)\r\n\
endfunction\r\n\
\r\n\
\r\n\
\r\n\
//***************************************************************************\r\n\
//*\r\n\
//*  Miscellaneous Utility Functions\r\n\
//*\r\n\
//***************************************************************************\r\n\
\r\n\
//===========================================================================\r\n\
function GetPlayerStartLocationX takes player whichPlayer returns real\r\n\
    return GetStartLocationX(GetPlayerStartLocation(whichPlayer))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetPlayerStartLocationY takes player whichPlayer returns real\r\n\
    return GetStartLocationY(GetPlayerStartLocation(whichPlayer))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetPlayerStartLocationLoc takes player whichPlayer returns location\r\n\
    return GetStartLocationLoc(GetPlayerStartLocation(whichPlayer))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetRectCenter takes rect whichRect returns location\r\n\
    return Location(GetRectCenterX(whichRect), GetRectCenterY(whichRect))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function IsPlayerSlotState takes player whichPlayer, playerslotstate whichState returns boolean\r\n\
    return GetPlayerSlotState(whichPlayer) == whichState\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetFadeFromSeconds takes real seconds returns integer\r\n\
    if (seconds != 0) then\r\n\
        return 128 / R2I(seconds)\r\n\
    endif\r\n\
    return 10000\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetFadeFromSecondsAsReal takes real seconds returns real\r\n\
    if (seconds != 0) then\r\n\
        return 128.00 / seconds\r\n\
    endif\r\n\
    return 10000.00\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function AdjustPlayerStateSimpleBJ takes player whichPlayer, playerstate whichPlayerState, integer delta returns nothing\r\n\
    call SetPlayerState(whichPlayer, whichPlayerState, GetPlayerState(whichPlayer, whichPlayerState) + delta)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function AdjustPlayerStateBJ takes integer delta, player whichPlayer, playerstate whichPlayerState returns nothing\r\n\
    // If the change was positive, apply the difference to the player's\r\n\
    // gathered resources property as well.\r\n\
    if (delta > 0) then\r\n\
        if (whichPlayerState == PLAYER_STATE_RESOURCE_GOLD) then\r\n\
            call AdjustPlayerStateSimpleBJ(whichPlayer, PLAYER_STATE_GOLD_GATHERED, delta)\r\n\
        elseif (whichPlayerState == PLAYER_STATE_RESOURCE_LUMBER) then\r\n\
            call AdjustPlayerStateSimpleBJ(whichPlayer, PLAYER_STATE_LUMBER_GATHERED, delta)\r\n\
        endif\r\n\
    endif\r\n\
\r\n\
    call AdjustPlayerStateSimpleBJ(whichPlayer, whichPlayerState, delta)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetPlayerStateBJ takes player whichPlayer, playerstate whichPlayerState, integer value returns nothing\r\n\
    local integer oldValue = GetPlayerState(whichPlayer, whichPlayerState)\r\n\
    call AdjustPlayerStateBJ(value - oldValue, whichPlayer, whichPlayerState)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetPlayerFlagBJ takes playerstate whichPlayerFlag, boolean flag, player whichPlayer returns nothing\r\n\
    call SetPlayerState(whichPlayer, whichPlayerFlag, IntegerTertiaryOp(flag, 1, 0))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetPlayerTaxRateBJ takes integer rate, playerstate whichResource, player sourcePlayer, player otherPlayer returns nothing\r\n\
    call SetPlayerTaxRate(sourcePlayer, otherPlayer, whichResource, rate)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetPlayerTaxRateBJ takes playerstate whichResource, player sourcePlayer, player otherPlayer returns integer\r\n\
    return GetPlayerTaxRate(sourcePlayer, otherPlayer, whichResource)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function IsPlayerFlagSetBJ takes playerstate whichPlayerFlag, player whichPlayer returns boolean\r\n\
    return GetPlayerState(whichPlayer, whichPlayerFlag) == 1\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function AddResourceAmountBJ takes integer delta, unit whichUnit returns nothing\r\n\
    call AddResourceAmount(whichUnit, delta)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetConvertedPlayerId takes player whichPlayer returns integer\r\n\
    return GetPlayerId(whichPlayer) + 1\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function ConvertedPlayer takes integer convertedPlayerId returns player\r\n\
    return Player(convertedPlayerId - 1)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetRectWidthBJ takes rect r returns real\r\n\
    return GetRectMaxX(r) - GetRectMinX(r)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetRectHeightBJ takes rect r returns real\r\n\
    return GetRectMaxY(r) - GetRectMinY(r)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Replaces a gold mine with a blighted gold mine for the given player.\r\n\
//\r\n\
function BlightGoldMineForPlayerBJ takes unit goldMine, player whichPlayer returns unit\r\n\
    local real    mineX\r\n\
    local real    mineY\r\n\
    local integer mineGold\r\n\
    local unit    newMine\r\n\
\r\n\
    // Make sure we're replacing a Gold Mine and not some other type of unit.\r\n\
    if GetUnitTypeId(goldMine) != 'ngol' then\r\n\
        return null\r\n\
    endif\r\n\
\r\n\
    // Save the Gold Mine's properties and remove it.\r\n\
    set mineX    = GetUnitX(goldMine)\r\n\
    set mineY    = GetUnitY(goldMine)\r\n\
    set mineGold = GetResourceAmount(goldMine)\r\n\
    call RemoveUnit(goldMine)\r\n\
\r\n\
    // Create a Haunted Gold Mine to replace the Gold Mine.\r\n\
    set newMine = CreateBlightedGoldmine(whichPlayer, mineX, mineY, bj_UNIT_FACING)\r\n\
    call SetResourceAmount(newMine, mineGold)\r\n\
    return newMine\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function BlightGoldMineForPlayer takes unit goldMine, player whichPlayer returns unit\r\n\
    set bj_lastHauntedGoldMine = BlightGoldMineForPlayerBJ(goldMine, whichPlayer)\r\n\
    return bj_lastHauntedGoldMine\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetLastHauntedGoldMine takes nothing returns unit\r\n\
    return bj_lastHauntedGoldMine\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function IsPointBlightedBJ takes location where returns boolean\r\n\
    return IsPointBlighted(GetLocationX(where), GetLocationY(where))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetPlayerColorBJEnum takes nothing returns nothing\r\n\
    call SetUnitColor(GetEnumUnit(), bj_setPlayerTargetColor)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetPlayerColorBJ takes player whichPlayer, playercolor color, boolean changeExisting returns nothing\r\n\
    local group g\r\n\
\r\n\
    call SetPlayerColor(whichPlayer, color)\r\n\
    if changeExisting then\r\n\
        set bj_setPlayerTargetColor = color\r\n\
        set g = CreateGroup()\r\n\
        call GroupEnumUnitsOfPlayer(g, whichPlayer, null)\r\n\
        call ForGroup(g, function SetPlayerColorBJEnum)\r\n\
        call DestroyGroup(g)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetPlayerUnitAvailableBJ takes integer unitId, boolean allowed, player whichPlayer returns nothing\r\n\
    if allowed then\r\n\
        call SetPlayerTechMaxAllowed(whichPlayer, unitId, -1)\r\n\
    else\r\n\
        call SetPlayerTechMaxAllowed(whichPlayer, unitId, 0)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function LockGameSpeedBJ takes nothing returns nothing\r\n\
    call SetMapFlag(MAP_LOCK_SPEED, true)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function UnlockGameSpeedBJ takes nothing returns nothing\r\n\
    call SetMapFlag(MAP_LOCK_SPEED, false)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function IssueTargetOrderBJ takes unit whichUnit, string order, widget targetWidget returns boolean\r\n\
    return IssueTargetOrder( whichUnit, order, targetWidget )\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function IssuePointOrderLocBJ takes unit whichUnit, string order, location whichLocation returns boolean\r\n\
    return IssuePointOrderLoc( whichUnit, order, whichLocation )\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Two distinct trigger actions can't share the same function name, so this\r\n\
// dummy function simply mimics the behavior of an existing call.\r\n\
//\r\n\
function IssueTargetDestructableOrder takes unit whichUnit, string order, widget targetWidget returns boolean\r\n\
    return IssueTargetOrder( whichUnit, order, targetWidget )\r\n\
endfunction\r\n\
\r\n\
function IssueTargetItemOrder takes unit whichUnit, string order, widget targetWidget returns boolean\r\n\
    return IssueTargetOrder( whichUnit, order, targetWidget )\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function IssueImmediateOrderBJ takes unit whichUnit, string order returns boolean\r\n\
    return IssueImmediateOrder( whichUnit, order )\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GroupTargetOrderBJ takes group whichGroup, string order, widget targetWidget returns boolean\r\n\
    return GroupTargetOrder( whichGroup, order, targetWidget )\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GroupPointOrderLocBJ takes group whichGroup, string order, location whichLocation returns boolean\r\n\
    return GroupPointOrderLoc( whichGroup, order, whichLocation )\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GroupImmediateOrderBJ takes group whichGroup, string order returns boolean\r\n\
    return GroupImmediateOrder( whichGroup, order )\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Two distinct trigger actions can't share the same function name, so this\r\n\
// dummy function simply mimics the behavior of an existing call.\r\n\
//\r\n\
function GroupTargetDestructableOrder takes group whichGroup, string order, widget targetWidget returns boolean\r\n\
    return GroupTargetOrder( whichGroup, order, targetWidget )\r\n\
endfunction\r\n\
\r\n\
function GroupTargetItemOrder takes group whichGroup, string order, widget targetWidget returns boolean\r\n\
    return GroupTargetOrder( whichGroup, order, targetWidget )\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetDyingDestructable takes nothing returns destructable\r\n\
    return GetTriggerDestructable()\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Rally point setting\r\n\
//\r\n\
function SetUnitRallyPoint takes unit whichUnit, location targPos returns nothing\r\n\
    call IssuePointOrderLocBJ(whichUnit, \"setrally\", targPos)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetUnitRallyUnit takes unit whichUnit, unit targUnit returns nothing\r\n\
    call IssueTargetOrder(whichUnit, \"setrally\", targUnit)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetUnitRallyDestructable takes unit whichUnit, destructable targDest returns nothing\r\n\
    call IssueTargetOrder(whichUnit, \"setrally\", targDest)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Utility function for use by editor-generated item drop table triggers.\r\n\
// This function is added as an action to all destructable drop triggers,\r\n\
// so that a widget drop may be differentiated from a unit drop.\r\n\
//\r\n\
function SaveDyingWidget takes nothing returns nothing\r\n\
    set bj_lastDyingWidget = GetTriggerWidget()\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetBlightRectBJ takes boolean addBlight, player whichPlayer, rect r returns nothing\r\n\
    call SetBlightRect(whichPlayer, r, addBlight)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetBlightRadiusLocBJ takes boolean addBlight, player whichPlayer, location loc, real radius returns nothing\r\n\
    call SetBlightLoc(whichPlayer, loc, radius, addBlight)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function GetAbilityName takes integer abilcode returns string\r\n\
    return GetObjectName(abilcode)\r\n\
endfunction\r\n\
\r\n\
\r\n\
//***************************************************************************\r\n\
//*\r\n\
//*  Melee Template Visibility Settings\r\n\
//*\r\n\
//***************************************************************************\r\n\
\r\n\
//===========================================================================\r\n\
function MeleeStartingVisibility takes nothing returns nothing\r\n\
    // Start by setting the ToD.\r\n\
    call SetFloatGameState(GAME_STATE_TIME_OF_DAY, bj_MELEE_STARTING_TOD)\r\n\
\r\n\
    // call FogMaskEnable(true)\r\n\
    // call FogEnable(true)\r\n\
endfunction\r\n\
\r\n\
\r\n\
\r\n\
//***************************************************************************\r\n\
//*\r\n\
//*  Melee Template Starting Resources\r\n\
//*\r\n\
//***************************************************************************\r\n\
\r\n\
//===========================================================================\r\n\
function MeleeStartingResources takes nothing returns nothing\r\n\
    local integer index\r\n\
    local player  indexPlayer\r\n\
    local version v\r\n\
    local integer startingGold\r\n\
    local integer startingLumber\r\n\
\r\n\
    set v = VersionGet()\r\n\
    if (v == VERSION_REIGN_OF_CHAOS) then\r\n\
        set startingGold = bj_MELEE_STARTING_GOLD_V0\r\n\
        set startingLumber = bj_MELEE_STARTING_LUMBER_V0\r\n\
    else\r\n\
        set startingGold = bj_MELEE_STARTING_GOLD_V1\r\n\
        set startingLumber = bj_MELEE_STARTING_LUMBER_V1\r\n\
    endif\r\n\
\r\n\
    // Set each player's starting resources.\r\n\
    set index = 0\r\n\
    loop\r\n\
        set indexPlayer = Player(index)\r\n\
        if (GetPlayerSlotState(indexPlayer) == PLAYER_SLOT_STATE_PLAYING) then\r\n\
            call SetPlayerState(indexPlayer, PLAYER_STATE_RESOURCE_GOLD, startingGold)\r\n\
            call SetPlayerState(indexPlayer, PLAYER_STATE_RESOURCE_LUMBER, startingLumber)\r\n\
        endif\r\n\
\r\n\
        set index = index + 1\r\n\
        exitwhen index == bj_MAX_PLAYERS\r\n\
    endloop\r\n\
endfunction\r\n\
\r\n\
\r\n\
\r\n\
//***************************************************************************\r\n\
//*\r\n\
//*  Melee Template Hero Limit\r\n\
//*\r\n\
//***************************************************************************\r\n\
\r\n\
//===========================================================================\r\n\
function ReducePlayerTechMaxAllowed takes player whichPlayer, integer techId, integer limit returns nothing\r\n\
    local integer oldMax = GetPlayerTechMaxAllowed(whichPlayer, techId)\r\n\
\r\n\
    // A value of -1 is used to indicate no limit, so check for that as well.\r\n\
    if (oldMax < 0 or oldMax > limit) then\r\n\
        call SetPlayerTechMaxAllowed(whichPlayer, techId, limit)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function MeleeStartingHeroLimit takes nothing returns nothing\r\n\
    local integer index\r\n\
\r\n\
    set index = 0\r\n\
    loop\r\n\
        // max heroes per player\r\n\
        call SetPlayerMaxHeroesAllowed(bj_MELEE_HERO_LIMIT, Player(index))\r\n\
\r\n\
        // each player is restricted to a limit per hero type as well\r\n\
        call ReducePlayerTechMaxAllowed(Player(index), 'Hamg', bj_MELEE_HERO_TYPE_LIMIT)\r\n\
        call ReducePlayerTechMaxAllowed(Player(index), 'Hmkg', bj_MELEE_HERO_TYPE_LIMIT)\r\n\
        call ReducePlayerTechMaxAllowed(Player(index), 'Hpal', bj_MELEE_HERO_TYPE_LIMIT)\r\n\
        call ReducePlayerTechMaxAllowed(Player(index), 'Hblm', bj_MELEE_HERO_TYPE_LIMIT)\r\n\
\r\n\
        call ReducePlayerTechMaxAllowed(Player(index), 'Obla', bj_MELEE_HERO_TYPE_LIMIT)\r\n\
        call ReducePlayerTechMaxAllowed(Player(index), 'Ofar', bj_MELEE_HERO_TYPE_LIMIT)\r\n\
        call ReducePlayerTechMaxAllowed(Player(index), 'Otch', bj_MELEE_HERO_TYPE_LIMIT)\r\n\
        call ReducePlayerTechMaxAllowed(Player(index), 'Oshd', bj_MELEE_HERO_TYPE_LIMIT)\r\n\
\r\n\
        call ReducePlayerTechMaxAllowed(Player(index), 'Edem', bj_MELEE_HERO_TYPE_LIMIT)\r\n\
        call ReducePlayerTechMaxAllowed(Player(index), 'Ekee', bj_MELEE_HERO_TYPE_LIMIT)\r\n\
        call ReducePlayerTechMaxAllowed(Player(index), 'Emoo', bj_MELEE_HERO_TYPE_LIMIT)\r\n\
        call ReducePlayerTechMaxAllowed(Player(index), 'Ewar', bj_MELEE_HERO_TYPE_LIMIT)\r\n\
\r\n\
        call ReducePlayerTechMaxAllowed(Player(index), 'Udea', bj_MELEE_HERO_TYPE_LIMIT)\r\n\
        call ReducePlayerTechMaxAllowed(Player(index), 'Udre', bj_MELEE_HERO_TYPE_LIMIT)\r\n\
        call ReducePlayerTechMaxAllowed(Player(index), 'Ulic', bj_MELEE_HERO_TYPE_LIMIT)\r\n\
        call ReducePlayerTechMaxAllowed(Player(index), 'Ucrl', bj_MELEE_HERO_TYPE_LIMIT)\r\n\
\r\n\
        call ReducePlayerTechMaxAllowed(Player(index), 'Npbm', bj_MELEE_HERO_TYPE_LIMIT)\r\n\
        call ReducePlayerTechMaxAllowed(Player(index), 'Nbrn', bj_MELEE_HERO_TYPE_LIMIT)\r\n\
        call ReducePlayerTechMaxAllowed(Player(index), 'Nngs', bj_MELEE_HERO_TYPE_LIMIT)\r\n\
        call ReducePlayerTechMaxAllowed(Player(index), 'Nplh', bj_MELEE_HERO_TYPE_LIMIT)\r\n\
        call ReducePlayerTechMaxAllowed(Player(index), 'Nbst', bj_MELEE_HERO_TYPE_LIMIT)\r\n\
        call ReducePlayerTechMaxAllowed(Player(index), 'Nalc', bj_MELEE_HERO_TYPE_LIMIT)\r\n\
        call ReducePlayerTechMaxAllowed(Player(index), 'Ntin', bj_MELEE_HERO_TYPE_LIMIT)\r\n\
        call ReducePlayerTechMaxAllowed(Player(index), 'Nfir', bj_MELEE_HERO_TYPE_LIMIT)\r\n\
\r\n\
        set index = index + 1\r\n\
        exitwhen index == bj_MAX_PLAYERS\r\n\
    endloop\r\n\
endfunction\r\n\
\r\n\
\r\n\
\r\n\
//***************************************************************************\r\n\
//*\r\n\
//*  Melee Template Granted Hero Items\r\n\
//*\r\n\
//***************************************************************************\r\n\
\r\n\
//===========================================================================\r\n\
function MeleeTrainedUnitIsHeroBJFilter takes nothing returns boolean\r\n\
    return IsUnitType(GetFilterUnit(), UNIT_TYPE_HERO)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// The first N heroes trained or hired for each player start off with a\r\n\
// standard set of items.  This is currently:\r\n\
//   - 1x Scroll of Town Portal\r\n\
//\r\n\
function MeleeGrantItemsToHero takes unit whichUnit returns nothing\r\n\
    local integer owner   = GetPlayerId(GetOwningPlayer(whichUnit))\r\n\
\r\n\
    // If we haven't twinked N heroes for this player yet, twink away.\r\n\
    if (bj_meleeTwinkedHeroes[owner] < bj_MELEE_MAX_TWINKED_HEROES) then\r\n\
        call UnitAddItemById(whichUnit, 'stwp')\r\n\
        set bj_meleeTwinkedHeroes[owner] = bj_meleeTwinkedHeroes[owner] + 1\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function MeleeGrantItemsToTrainedHero takes nothing returns nothing\r\n\
    call MeleeGrantItemsToHero(GetTrainedUnit())\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function MeleeGrantItemsToHiredHero takes nothing returns nothing\r\n\
    call MeleeGrantItemsToHero(GetSoldUnit())\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function MeleeGrantHeroItems takes nothing returns nothing\r\n\
    local integer index\r\n\
    local trigger trig\r\n\
\r\n\
    // Initialize the twinked hero counts.\r\n\
    set index = 0\r\n\
    loop\r\n\
        set bj_meleeTwinkedHeroes[index] = 0\r\n\
\r\n\
        set index = index + 1\r\n\
        exitwhen index == bj_MAX_PLAYER_SLOTS\r\n\
    endloop\r\n\
\r\n\
    // Register for an event whenever a hero is trained, so that we can give\r\n\
    // him/her their starting items.\r\n\
    set index = 0\r\n\
    loop\r\n\
        set trig = CreateTrigger()\r\n\
        call TriggerRegisterPlayerUnitEvent(trig, Player(index), EVENT_PLAYER_UNIT_TRAIN_FINISH, filterMeleeTrainedUnitIsHeroBJ)\r\n\
        call TriggerAddAction(trig, function MeleeGrantItemsToTrainedHero)\r\n\
\r\n\
        set index = index + 1\r\n\
        exitwhen index == bj_MAX_PLAYERS\r\n\
    endloop\r\n\
\r\n\
    // Register for an event whenever a neutral hero is hired, so that we\r\n\
    // can give him/her their starting items.\r\n\
    set trig = CreateTrigger()\r\n\
    call TriggerRegisterPlayerUnitEvent(trig, Player(PLAYER_NEUTRAL_PASSIVE), EVENT_PLAYER_UNIT_SELL, filterMeleeTrainedUnitIsHeroBJ)\r\n\
    call TriggerAddAction(trig, function MeleeGrantItemsToHiredHero)\r\n\
\r\n\
    // Flag that we are giving starting items to heroes, so that the melee\r\n\
    // starting units code can create them as necessary.\r\n\
    set bj_meleeGrantHeroItems = true\r\n\
endfunction\r\n\
\r\n\
\r\n\
\r\n\
//***************************************************************************\r\n\
//*\r\n\
//*  Melee Template Clear Start Locations\r\n\
//*\r\n\
//***************************************************************************\r\n\
\r\n\
//===========================================================================\r\n\
function MeleeClearExcessUnit takes nothing returns nothing\r\n\
    local unit    theUnit = GetEnumUnit()\r\n\
    local integer owner   = GetPlayerId(GetOwningPlayer(theUnit))\r\n\
\r\n\
    if (owner == PLAYER_NEUTRAL_AGGRESSIVE) then\r\n\
        // Remove any Neutral Hostile units from the area.\r\n\
        call RemoveUnit(GetEnumUnit())\r\n\
    elseif (owner == PLAYER_NEUTRAL_PASSIVE) then\r\n\
        // Remove non-structure Neutral Passive units from the area.\r\n\
        if not IsUnitType(theUnit, UNIT_TYPE_STRUCTURE) then\r\n\
            call RemoveUnit(GetEnumUnit())\r\n\
        endif\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function MeleeClearNearbyUnits takes real x, real y, real range returns nothing\r\n\
    local group nearbyUnits\r\n\
    \r\n\
    set nearbyUnits = CreateGroup()\r\n\
    call GroupEnumUnitsInRange(nearbyUnits, x, y, range, null)\r\n\
    call ForGroup(nearbyUnits, function MeleeClearExcessUnit)\r\n\
    call DestroyGroup(nearbyUnits)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function MeleeClearExcessUnits takes nothing returns nothing\r\n\
    local integer index\r\n\
    local real    locX\r\n\
    local real    locY\r\n\
    local player  indexPlayer\r\n\
\r\n\
    set index = 0\r\n\
    loop\r\n\
        set indexPlayer = Player(index)\r\n\
\r\n\
        // If the player slot is being used, clear any nearby creeps.\r\n\
        if (GetPlayerSlotState(indexPlayer) == PLAYER_SLOT_STATE_PLAYING) then\r\n\
            set locX = GetStartLocationX(GetPlayerStartLocation(indexPlayer))\r\n\
            set locY = GetStartLocationY(GetPlayerStartLocation(indexPlayer))\r\n\
\r\n\
            call MeleeClearNearbyUnits(locX, locY, bj_MELEE_CLEAR_UNITS_RADIUS)\r\n\
        endif\r\n\
\r\n\
        set index = index + 1\r\n\
        exitwhen index == bj_MAX_PLAYERS\r\n\
    endloop\r\n\
endfunction\r\n\
\r\n\
\r\n\
\r\n\
//***************************************************************************\r\n\
//*\r\n\
//*  Melee Template Starting Units\r\n\
//*\r\n\
//***************************************************************************\r\n\
\r\n\
//===========================================================================\r\n\
function MeleeEnumFindNearestMine takes nothing returns nothing\r\n\
    local unit enumUnit = GetEnumUnit()\r\n\
    local real dist\r\n\
    local location unitLoc\r\n\
\r\n\
    if (GetUnitTypeId(enumUnit) == 'ngol') then\r\n\
        set unitLoc = GetUnitLoc(enumUnit)\r\n\
        set dist = DistanceBetweenPoints(unitLoc, bj_meleeNearestMineToLoc)\r\n\
        call RemoveLocation(unitLoc)\r\n\
\r\n\
        // If this is our first mine, or the closest thusfar, use it instead.\r\n\
        if (bj_meleeNearestMineDist < 0) or (dist < bj_meleeNearestMineDist) then\r\n\
            set bj_meleeNearestMine = enumUnit\r\n\
            set bj_meleeNearestMineDist = dist\r\n\
        endif\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function MeleeFindNearestMine takes location src, real range returns unit\r\n\
    local group nearbyMines\r\n\
\r\n\
    set bj_meleeNearestMine = null\r\n\
    set bj_meleeNearestMineDist = -1\r\n\
    set bj_meleeNearestMineToLoc = src\r\n\
\r\n\
    set nearbyMines = CreateGroup()\r\n\
    call GroupEnumUnitsInRangeOfLoc(nearbyMines, src, range, null)\r\n\
    call ForGroup(nearbyMines, function MeleeEnumFindNearestMine)\r\n\
    call DestroyGroup(nearbyMines)\r\n\
\r\n\
    return bj_meleeNearestMine\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function MeleeRandomHeroLoc takes player p, integer id1, integer id2, integer id3, integer id4, location loc returns unit\r\n\
    local unit    hero = null\r\n\
    local integer roll\r\n\
    local integer pick\r\n\
    local version v\r\n\
\r\n\
    // The selection of heroes is dependant on the game version.\r\n\
    set v = VersionGet()\r\n\
    if (v == VERSION_REIGN_OF_CHAOS) then\r\n\
        set roll = GetRandomInt(1,3)\r\n\
    else\r\n\
        set roll = GetRandomInt(1,4)\r\n\
    endif\r\n\
\r\n\
    // Translate the roll into a unitid.\r\n\
    if roll == 1 then\r\n\
        set pick = id1\r\n\
    elseif roll == 2 then\r\n\
        set pick = id2\r\n\
    elseif roll == 3 then\r\n\
        set pick = id3\r\n\
    elseif roll == 4 then\r\n\
        set pick = id4\r\n\
    else\r\n\
        // Unrecognized id index - pick the first hero in the list.\r\n\
        set pick = id1\r\n\
    endif\r\n\
\r\n\
    // Create the hero.\r\n\
    set hero = CreateUnitAtLoc(p, pick, loc, bj_UNIT_FACING)\r\n\
    if bj_meleeGrantHeroItems then\r\n\
        call MeleeGrantItemsToHero(hero)\r\n\
    endif\r\n\
    return hero\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Returns a location which is (distance) away from (src) in the direction of (targ).\r\n\
//\r\n\
function MeleeGetProjectedLoc takes location src, location targ, real distance, real deltaAngle returns location\r\n\
    local real srcX = GetLocationX(src)\r\n\
    local real srcY = GetLocationY(src)\r\n\
    local real direction = Atan2(GetLocationY(targ) - srcY, GetLocationX(targ) - srcX) + deltaAngle\r\n\
    return Location(srcX + distance * Cos(direction), srcY + distance * Sin(direction))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function MeleeGetNearestValueWithin takes real val, real minVal, real maxVal returns real\r\n\
    if (val < minVal) then\r\n\
        return minVal\r\n\
    elseif (val > maxVal) then\r\n\
        return maxVal\r\n\
    else\r\n\
        return val\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function MeleeGetLocWithinRect takes location src, rect r returns location\r\n\
    local real withinX = MeleeGetNearestValueWithin(GetLocationX(src), GetRectMinX(r), GetRectMaxX(r))\r\n\
    local real withinY = MeleeGetNearestValueWithin(GetLocationY(src), GetRectMinY(r), GetRectMaxY(r))\r\n\
    return Location(withinX, withinY)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Starting Units for Human Players\r\n\
//   - 1 Town Hall, placed at start location\r\n\
//   - 5 Peasants, placed between start location and nearest gold mine\r\n\
//\r\n\
function MeleeStartingUnitsHuman takes player whichPlayer, location startLoc, boolean doHeroes, boolean doCamera, boolean doPreload returns nothing\r\n\
    local boolean  useRandomHero = IsMapFlagSet(MAP_RANDOM_HERO)\r\n\
    local real     unitSpacing   = 64.00\r\n\
    local unit     nearestMine\r\n\
    local location nearMineLoc\r\n\
    local location heroLoc\r\n\
    local real     peonX\r\n\
    local real     peonY\r\n\
    local unit     townHall = null\r\n\
\r\n\
    if (doPreload) then\r\n\
        call Preloader( \"scripts\\HumanMelee.pld\" )\r\n\
    endif\r\n\
\r\n\
    set nearestMine = MeleeFindNearestMine(startLoc, bj_MELEE_MINE_SEARCH_RADIUS)\r\n\
    if (nearestMine != null) then\r\n\
        // Spawn Town Hall at the start location.\r\n\
        set townHall = CreateUnitAtLoc(whichPlayer, 'htow', startLoc, bj_UNIT_FACING)\r\n\
        \r\n\
        // Spawn Peasants near the mine.\r\n\
        set nearMineLoc = MeleeGetProjectedLoc(GetUnitLoc(nearestMine), startLoc, 320, 0)\r\n\
        set peonX = GetLocationX(nearMineLoc)\r\n\
        set peonY = GetLocationY(nearMineLoc)\r\n\
        call CreateUnit(whichPlayer, 'hpea', peonX + 0.00 * unitSpacing, peonY + 1.00 * unitSpacing, bj_UNIT_FACING)\r\n\
        call CreateUnit(whichPlayer, 'hpea', peonX + 1.00 * unitSpacing, peonY + 0.15 * unitSpacing, bj_UNIT_FACING)\r\n\
        call CreateUnit(whichPlayer, 'hpea', peonX - 1.00 * unitSpacing, peonY + 0.15 * unitSpacing, bj_UNIT_FACING)\r\n\
        call CreateUnit(whichPlayer, 'hpea', peonX + 0.60 * unitSpacing, peonY - 1.00 * unitSpacing, bj_UNIT_FACING)\r\n\
        call CreateUnit(whichPlayer, 'hpea', peonX - 0.60 * unitSpacing, peonY - 1.00 * unitSpacing, bj_UNIT_FACING)\r\n\
\r\n\
        // Set random hero spawn point to be off to the side of the start location.\r\n\
        set heroLoc = MeleeGetProjectedLoc(GetUnitLoc(nearestMine), startLoc, 384, 45)\r\n\
    else\r\n\
        // Spawn Town Hall at the start location.\r\n\
        set townHall = CreateUnitAtLoc(whichPlayer, 'htow', startLoc, bj_UNIT_FACING)\r\n\
        \r\n\
        // Spawn Peasants directly south of the town hall.\r\n\
        set peonX = GetLocationX(startLoc)\r\n\
        set peonY = GetLocationY(startLoc) - 224.00\r\n\
        call CreateUnit(whichPlayer, 'hpea', peonX + 2.00 * unitSpacing, peonY + 0.00 * unitSpacing, bj_UNIT_FACING)\r\n\
        call CreateUnit(whichPlayer, 'hpea', peonX + 1.00 * unitSpacing, peonY + 0.00 * unitSpacing, bj_UNIT_FACING)\r\n\
        call CreateUnit(whichPlayer, 'hpea', peonX + 0.00 * unitSpacing, peonY + 0.00 * unitSpacing, bj_UNIT_FACING)\r\n\
        call CreateUnit(whichPlayer, 'hpea', peonX - 1.00 * unitSpacing, peonY + 0.00 * unitSpacing, bj_UNIT_FACING)\r\n\
        call CreateUnit(whichPlayer, 'hpea', peonX - 2.00 * unitSpacing, peonY + 0.00 * unitSpacing, bj_UNIT_FACING)\r\n\
\r\n\
        // Set random hero spawn point to be just south of the start location.\r\n\
        set heroLoc = Location(peonX, peonY - 2.00 * unitSpacing)\r\n\
    endif\r\n\
\r\n\
    if (townHall != null) then\r\n\
        call UnitAddAbilityBJ('Amic', townHall)\r\n\
        call UnitMakeAbilityPermanentBJ(true, 'Amic', townHall)\r\n\
    endif\r\n\
\r\n\
    if (doHeroes) then\r\n\
        // If the \"Random Hero\" option is set, start the player with a random hero.\r\n\
        // Otherwise, give them a \"free hero\" token.\r\n\
        if useRandomHero then\r\n\
            call MeleeRandomHeroLoc(whichPlayer, 'Hamg', 'Hmkg', 'Hpal', 'Hblm', heroLoc)\r\n\
        else\r\n\
            call SetPlayerState(whichPlayer, PLAYER_STATE_RESOURCE_HERO_TOKENS, bj_MELEE_STARTING_HERO_TOKENS)\r\n\
        endif\r\n\
    endif\r\n\
\r\n\
    if (doCamera) then\r\n\
        // Center the camera on the initial Peasants.\r\n\
        call SetCameraPositionForPlayer(whichPlayer, peonX, peonY)\r\n\
        call SetCameraQuickPositionForPlayer(whichPlayer, peonX, peonY)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Starting Units for Orc Players\r\n\
//   - 1 Great Hall, placed at start location\r\n\
//   - 5 Peons, placed between start location and nearest gold mine\r\n\
//\r\n\
function MeleeStartingUnitsOrc takes player whichPlayer, location startLoc, boolean doHeroes, boolean doCamera, boolean doPreload returns nothing\r\n\
    local boolean  useRandomHero = IsMapFlagSet(MAP_RANDOM_HERO)\r\n\
    local real     unitSpacing   = 64.00\r\n\
    local unit     nearestMine\r\n\
    local location nearMineLoc\r\n\
    local location heroLoc\r\n\
    local real     peonX\r\n\
    local real     peonY\r\n\
\r\n\
    if (doPreload) then\r\n\
        call Preloader( \"scripts\\OrcMelee.pld\" )\r\n\
    endif\r\n\
\r\n\
    set nearestMine = MeleeFindNearestMine(startLoc, bj_MELEE_MINE_SEARCH_RADIUS)\r\n\
    if (nearestMine != null) then\r\n\
        // Spawn Great Hall at the start location.\r\n\
        call CreateUnitAtLoc(whichPlayer, 'ogre', startLoc, bj_UNIT_FACING)\r\n\
        \r\n\
        // Spawn Peons near the mine.\r\n\
        set nearMineLoc = MeleeGetProjectedLoc(GetUnitLoc(nearestMine), startLoc, 320, 0)\r\n\
        set peonX = GetLocationX(nearMineLoc)\r\n\
        set peonY = GetLocationY(nearMineLoc)\r\n\
        call CreateUnit(whichPlayer, 'opeo', peonX + 0.00 * unitSpacing, peonY + 1.00 * unitSpacing, bj_UNIT_FACING)\r\n\
        call CreateUnit(whichPlayer, 'opeo', peonX + 1.00 * unitSpacing, peonY + 0.15 * unitSpacing, bj_UNIT_FACING)\r\n\
        call CreateUnit(whichPlayer, 'opeo', peonX - 1.00 * unitSpacing, peonY + 0.15 * unitSpacing, bj_UNIT_FACING)\r\n\
        call CreateUnit(whichPlayer, 'opeo', peonX + 0.60 * unitSpacing, peonY - 1.00 * unitSpacing, bj_UNIT_FACING)\r\n\
        call CreateUnit(whichPlayer, 'opeo', peonX - 0.60 * unitSpacing, peonY - 1.00 * unitSpacing, bj_UNIT_FACING)\r\n\
\r\n\
        // Set random hero spawn point to be off to the side of the start location.\r\n\
        set heroLoc = MeleeGetProjectedLoc(GetUnitLoc(nearestMine), startLoc, 384, 45)\r\n\
    else\r\n\
        // Spawn Great Hall at the start location.\r\n\
        call CreateUnitAtLoc(whichPlayer, 'ogre', startLoc, bj_UNIT_FACING)\r\n\
        \r\n\
        // Spawn Peons directly south of the town hall.\r\n\
        set peonX = GetLocationX(startLoc)\r\n\
        set peonY = GetLocationY(startLoc) - 224.00\r\n\
        call CreateUnit(whichPlayer, 'opeo', peonX + 2.00 * unitSpacing, peonY + 0.00 * unitSpacing, bj_UNIT_FACING)\r\n\
        call CreateUnit(whichPlayer, 'opeo', peonX + 1.00 * unitSpacing, peonY + 0.00 * unitSpacing, bj_UNIT_FACING)\r\n\
        call CreateUnit(whichPlayer, 'opeo', peonX + 0.00 * unitSpacing, peonY + 0.00 * unitSpacing, bj_UNIT_FACING)\r\n\
        call CreateUnit(whichPlayer, 'opeo', peonX - 1.00 * unitSpacing, peonY + 0.00 * unitSpacing, bj_UNIT_FACING)\r\n\
        call CreateUnit(whichPlayer, 'opeo', peonX - 2.00 * unitSpacing, peonY + 0.00 * unitSpacing, bj_UNIT_FACING)\r\n\
\r\n\
        // Set random hero spawn point to be just south of the start location.\r\n\
        set heroLoc = Location(peonX, peonY - 2.00 * unitSpacing)\r\n\
    endif\r\n\
\r\n\
    if (doHeroes) then\r\n\
        // If the \"Random Hero\" option is set, start the player with a random hero.\r\n\
        // Otherwise, give them a \"free hero\" token.\r\n\
        if useRandomHero then\r\n\
            call MeleeRandomHeroLoc(whichPlayer, 'Obla', 'Ofar', 'Otch', 'Oshd', heroLoc)\r\n\
        else\r\n\
            call SetPlayerState(whichPlayer, PLAYER_STATE_RESOURCE_HERO_TOKENS, bj_MELEE_STARTING_HERO_TOKENS)\r\n\
        endif\r\n\
    endif\r\n\
\r\n\
    if (doCamera) then\r\n\
        // Center the camera on the initial Peons.\r\n\
        call SetCameraPositionForPlayer(whichPlayer, peonX, peonY)\r\n\
        call SetCameraQuickPositionForPlayer(whichPlayer, peonX, peonY)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Starting Units for Undead Players\r\n\
//   - 1 Necropolis, placed at start location\r\n\
//   - 1 Haunted Gold Mine, placed on nearest gold mine\r\n\
//   - 3 Acolytes, placed between start location and nearest gold mine\r\n\
//   - 1 Ghoul, placed between start location and nearest gold mine\r\n\
//   - Blight, centered on nearest gold mine, spread across a \"large area\"\r\n\
//\r\n\
function MeleeStartingUnitsUndead takes player whichPlayer, location startLoc, boolean doHeroes, boolean doCamera, boolean doPreload returns nothing\r\n\
    local boolean  useRandomHero = IsMapFlagSet(MAP_RANDOM_HERO)\r\n\
    local real     unitSpacing   = 64.00\r\n\
    local unit     nearestMine\r\n\
    local location nearMineLoc\r\n\
    local location nearTownLoc\r\n\
    local location heroLoc\r\n\
    local real     peonX\r\n\
    local real     peonY\r\n\
    local real     ghoulX\r\n\
    local real     ghoulY\r\n\
\r\n\
    if (doPreload) then\r\n\
        call Preloader( \"scripts\\UndeadMelee.pld\" )\r\n\
    endif\r\n\
\r\n\
    set nearestMine = MeleeFindNearestMine(startLoc, bj_MELEE_MINE_SEARCH_RADIUS)\r\n\
    if (nearestMine != null) then\r\n\
        // Spawn Necropolis at the start location.\r\n\
        call CreateUnitAtLoc(whichPlayer, 'unpl', startLoc, bj_UNIT_FACING)\r\n\
        \r\n\
        // Replace the nearest gold mine with a blighted version.\r\n\
        set nearestMine = BlightGoldMineForPlayerBJ(nearestMine, whichPlayer)\r\n\
\r\n\
        // Spawn Ghoul near the Necropolis.\r\n\
        set nearTownLoc = MeleeGetProjectedLoc(startLoc, GetUnitLoc(nearestMine), 288, 0)\r\n\
        set ghoulX = GetLocationX(nearTownLoc)\r\n\
        set ghoulY = GetLocationY(nearTownLoc)\r\n\
        set bj_ghoul[GetPlayerId(whichPlayer)] = CreateUnit(whichPlayer, 'ugho', ghoulX + 0.00 * unitSpacing, ghoulY + 0.00 * unitSpacing, bj_UNIT_FACING)\r\n\
\r\n\
        // Spawn Acolytes near the mine.\r\n\
        set nearMineLoc = MeleeGetProjectedLoc(GetUnitLoc(nearestMine), startLoc, 320, 0)\r\n\
        set peonX = GetLocationX(nearMineLoc)\r\n\
        set peonY = GetLocationY(nearMineLoc)\r\n\
        call CreateUnit(whichPlayer, 'uaco', peonX + 0.00 * unitSpacing, peonY + 0.50 * unitSpacing, bj_UNIT_FACING)\r\n\
        call CreateUnit(whichPlayer, 'uaco', peonX + 0.65 * unitSpacing, peonY - 0.50 * unitSpacing, bj_UNIT_FACING)\r\n\
        call CreateUnit(whichPlayer, 'uaco', peonX - 0.65 * unitSpacing, peonY - 0.50 * unitSpacing, bj_UNIT_FACING)\r\n\
\r\n\
        // Create a patch of blight around the gold mine.\r\n\
        call SetBlightLoc(whichPlayer,nearMineLoc, 768, true)\r\n\
\r\n\
        // Set random hero spawn point to be off to the side of the start location.\r\n\
        set heroLoc = MeleeGetProjectedLoc(GetUnitLoc(nearestMine), startLoc, 384, 45)\r\n\
    else\r\n\
        // Spawn Necropolis at the start location.\r\n\
        call CreateUnitAtLoc(whichPlayer, 'unpl', startLoc, bj_UNIT_FACING)\r\n\
        \r\n\
        // Spawn Acolytes and Ghoul directly south of the Necropolis.\r\n\
        set peonX = GetLocationX(startLoc)\r\n\
        set peonY = GetLocationY(startLoc) - 224.00\r\n\
        call CreateUnit(whichPlayer, 'uaco', peonX - 1.50 * unitSpacing, peonY + 0.00 * unitSpacing, bj_UNIT_FACING)\r\n\
        call CreateUnit(whichPlayer, 'uaco', peonX - 0.50 * unitSpacing, peonY + 0.00 * unitSpacing, bj_UNIT_FACING)\r\n\
        call CreateUnit(whichPlayer, 'uaco', peonX + 0.50 * unitSpacing, peonY + 0.00 * unitSpacing, bj_UNIT_FACING)\r\n\
        call CreateUnit(whichPlayer, 'ugho', peonX + 1.50 * unitSpacing, peonY + 0.00 * unitSpacing, bj_UNIT_FACING)\r\n\
\r\n\
        // Create a patch of blight around the start location.\r\n\
        call SetBlightLoc(whichPlayer,startLoc, 768, true)\r\n\
\r\n\
        // Set random hero spawn point to be just south of the start location.\r\n\
        set heroLoc = Location(peonX, peonY - 2.00 * unitSpacing)\r\n\
    endif\r\n\
\r\n\
    if (doHeroes) then\r\n\
        // If the \"Random Hero\" option is set, start the player with a random hero.\r\n\
        // Otherwise, give them a \"free hero\" token.\r\n\
        if useRandomHero then\r\n\
            call MeleeRandomHeroLoc(whichPlayer, 'Udea', 'Udre', 'Ulic', 'Ucrl', heroLoc)\r\n\
        else\r\n\
            call SetPlayerState(whichPlayer, PLAYER_STATE_RESOURCE_HERO_TOKENS, bj_MELEE_STARTING_HERO_TOKENS)\r\n\
        endif\r\n\
    endif\r\n\
\r\n\
    if (doCamera) then\r\n\
        // Center the camera on the initial Acolytes.\r\n\
        call SetCameraPositionForPlayer(whichPlayer, peonX, peonY)\r\n\
        call SetCameraQuickPositionForPlayer(whichPlayer, peonX, peonY)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Starting Units for Night Elf Players\r\n\
//   - 1 Tree of Life, placed by nearest gold mine, already entangled\r\n\
//   - 5 Wisps, placed between Tree of Life and nearest gold mine\r\n\
//\r\n\
function MeleeStartingUnitsNightElf takes player whichPlayer, location startLoc, boolean doHeroes, boolean doCamera, boolean doPreload returns nothing\r\n\
    local boolean  useRandomHero = IsMapFlagSet(MAP_RANDOM_HERO)\r\n\
    local real     unitSpacing   = 64.00\r\n\
    local real     minTreeDist   = 3.50 * bj_CELLWIDTH\r\n\
    local real     minWispDist   = 1.75 * bj_CELLWIDTH\r\n\
    local unit     nearestMine\r\n\
    local location nearMineLoc\r\n\
    local location wispLoc\r\n\
    local location heroLoc\r\n\
    local real     peonX\r\n\
    local real     peonY\r\n\
    local unit     tree\r\n\
\r\n\
    if (doPreload) then\r\n\
        call Preloader( \"scripts\\NightElfMelee.pld\" )\r\n\
    endif\r\n\
\r\n\
    set nearestMine = MeleeFindNearestMine(startLoc, bj_MELEE_MINE_SEARCH_RADIUS)\r\n\
    if (nearestMine != null) then\r\n\
        // Spawn Tree of Life near the mine and have it entangle the mine.\r\n\
        // Project the Tree's coordinates from the gold mine, and then snap\r\n\
        // the X and Y values to within minTreeDist of the Gold Mine.\r\n\
        set nearMineLoc = MeleeGetProjectedLoc(GetUnitLoc(nearestMine), startLoc, 650, 0)\r\n\
        set nearMineLoc = MeleeGetLocWithinRect(nearMineLoc, GetRectFromCircleBJ(GetUnitLoc(nearestMine), minTreeDist))\r\n\
        set tree = CreateUnitAtLoc(whichPlayer, 'etol', nearMineLoc, bj_UNIT_FACING)\r\n\
        call IssueTargetOrder(tree, \"entangleinstant\", nearestMine)\r\n\
\r\n\
        // Spawn Wisps at the start location.\r\n\
        set wispLoc = MeleeGetProjectedLoc(GetUnitLoc(nearestMine), startLoc, 320, 0)\r\n\
        set wispLoc = MeleeGetLocWithinRect(wispLoc, GetRectFromCircleBJ(GetUnitLoc(nearestMine), minWispDist))\r\n\
        set peonX = GetLocationX(wispLoc)\r\n\
        set peonY = GetLocationY(wispLoc)\r\n\
        call CreateUnit(whichPlayer, 'ewsp', peonX + 0.00 * unitSpacing, peonY + 1.00 * unitSpacing, bj_UNIT_FACING)\r\n\
        call CreateUnit(whichPlayer, 'ewsp', peonX + 1.00 * unitSpacing, peonY + 0.15 * unitSpacing, bj_UNIT_FACING)\r\n\
        call CreateUnit(whichPlayer, 'ewsp', peonX - 1.00 * unitSpacing, peonY + 0.15 * unitSpacing, bj_UNIT_FACING)\r\n\
        call CreateUnit(whichPlayer, 'ewsp', peonX + 0.58 * unitSpacing, peonY - 1.00 * unitSpacing, bj_UNIT_FACING)\r\n\
        call CreateUnit(whichPlayer, 'ewsp', peonX - 0.58 * unitSpacing, peonY - 1.00 * unitSpacing, bj_UNIT_FACING)\r\n\
\r\n\
        // Set random hero spawn point to be off to the side of the start location.\r\n\
        set heroLoc = MeleeGetProjectedLoc(GetUnitLoc(nearestMine), startLoc, 384, 45)\r\n\
    else\r\n\
        // Spawn Tree of Life at the start location.\r\n\
        call CreateUnitAtLoc(whichPlayer, 'etol', startLoc, bj_UNIT_FACING)\r\n\
\r\n\
        // Spawn Wisps directly south of the town hall.\r\n\
        set peonX = GetLocationX(startLoc)\r\n\
        set peonY = GetLocationY(startLoc) - 224.00\r\n\
        call CreateUnit(whichPlayer, 'ewsp', peonX - 2.00 * unitSpacing, peonY + 0.00 * unitSpacing, bj_UNIT_FACING)\r\n\
        call CreateUnit(whichPlayer, 'ewsp', peonX - 1.00 * unitSpacing, peonY + 0.00 * unitSpacing, bj_UNIT_FACING)\r\n\
        call CreateUnit(whichPlayer, 'ewsp', peonX + 0.00 * unitSpacing, peonY + 0.00 * unitSpacing, bj_UNIT_FACING)\r\n\
        call CreateUnit(whichPlayer, 'ewsp', peonX + 1.00 * unitSpacing, peonY + 0.00 * unitSpacing, bj_UNIT_FACING)\r\n\
        call CreateUnit(whichPlayer, 'ewsp', peonX + 2.00 * unitSpacing, peonY + 0.00 * unitSpacing, bj_UNIT_FACING)\r\n\
\r\n\
        // Set random hero spawn point to be just south of the start location.\r\n\
        set heroLoc = Location(peonX, peonY - 2.00 * unitSpacing)\r\n\
    endif\r\n\
\r\n\
    if (doHeroes) then\r\n\
        // If the \"Random Hero\" option is set, start the player with a random hero.\r\n\
        // Otherwise, give them a \"free hero\" token.\r\n\
        if useRandomHero then\r\n\
            call MeleeRandomHeroLoc(whichPlayer, 'Edem', 'Ekee', 'Emoo', 'Ewar', heroLoc)\r\n\
        else\r\n\
            call SetPlayerState(whichPlayer, PLAYER_STATE_RESOURCE_HERO_TOKENS, bj_MELEE_STARTING_HERO_TOKENS)\r\n\
        endif\r\n\
    endif\r\n\
\r\n\
    if (doCamera) then\r\n\
        // Center the camera on the initial Wisps.\r\n\
        call SetCameraPositionForPlayer(whichPlayer, peonX, peonY)\r\n\
        call SetCameraQuickPositionForPlayer(whichPlayer, peonX, peonY)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Starting Units for Players Whose Race is Unknown\r\n\
//   - 12 Sheep, placed randomly around the start location\r\n\
//\r\n\
function MeleeStartingUnitsUnknownRace takes player whichPlayer, location startLoc, boolean doHeroes, boolean doCamera, boolean doPreload returns nothing\r\n\
    local integer index\r\n\
\r\n\
    if (doPreload) then\r\n\
    endif\r\n\
\r\n\
    set index = 0\r\n\
    loop\r\n\
        call CreateUnit(whichPlayer, 'nshe', GetLocationX(startLoc) + GetRandomReal(-256, 256), GetLocationY(startLoc) + GetRandomReal(-256, 256), GetRandomReal(0, 360))\r\n\
        set index = index + 1\r\n\
        exitwhen index == 12\r\n\
    endloop\r\n\
\r\n\
    if (doHeroes) then\r\n\
        // Give them a \"free hero\" token, out of pity.\r\n\
        call SetPlayerState(whichPlayer, PLAYER_STATE_RESOURCE_HERO_TOKENS, bj_MELEE_STARTING_HERO_TOKENS)\r\n\
    endif\r\n\
\r\n\
    if (doCamera) then\r\n\
        // Center the camera on the initial sheep.\r\n\
        call SetCameraPositionLocForPlayer(whichPlayer, startLoc)\r\n\
        call SetCameraQuickPositionLocForPlayer(whichPlayer, startLoc)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function MeleeStartingUnits takes nothing returns nothing\r\n\
    local integer  index\r\n\
    local player   indexPlayer\r\n\
    local location indexStartLoc\r\n\
    local race     indexRace\r\n\
\r\n\
    call Preloader( \"scripts\\SharedMelee.pld\" )\r\n\
\r\n\
    set index = 0\r\n\
    loop\r\n\
        set indexPlayer = Player(index)\r\n\
        if (GetPlayerSlotState(indexPlayer) == PLAYER_SLOT_STATE_PLAYING) then\r\n\
            set indexStartLoc = GetStartLocationLoc(GetPlayerStartLocation(indexPlayer))\r\n\
            set indexRace = GetPlayerRace(indexPlayer)\r\n\
\r\n\
            // Create initial race-specific starting units\r\n\
            if (indexRace == RACE_HUMAN) then\r\n\
                call MeleeStartingUnitsHuman(indexPlayer, indexStartLoc, true, true, true)\r\n\
            elseif (indexRace == RACE_ORC) then\r\n\
                call MeleeStartingUnitsOrc(indexPlayer, indexStartLoc, true, true, true)\r\n\
            elseif (indexRace == RACE_UNDEAD) then\r\n\
                call MeleeStartingUnitsUndead(indexPlayer, indexStartLoc, true, true, true)\r\n\
            elseif (indexRace == RACE_NIGHTELF) then\r\n\
                call MeleeStartingUnitsNightElf(indexPlayer, indexStartLoc, true, true, true)\r\n\
            else\r\n\
                call MeleeStartingUnitsUnknownRace(indexPlayer, indexStartLoc, true, true, true)\r\n\
            endif\r\n\
        endif\r\n\
\r\n\
        set index = index + 1\r\n\
        exitwhen index == bj_MAX_PLAYERS\r\n\
    endloop\r\n\
    \r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function MeleeStartingUnitsForPlayer takes race whichRace, player whichPlayer, location loc, boolean doHeroes returns nothing\r\n\
    // Create initial race-specific starting units\r\n\
    if (whichRace == RACE_HUMAN) then\r\n\
        call MeleeStartingUnitsHuman(whichPlayer, loc, doHeroes, false, false)\r\n\
    elseif (whichRace == RACE_ORC) then\r\n\
        call MeleeStartingUnitsOrc(whichPlayer, loc, doHeroes, false, false)\r\n\
    elseif (whichRace == RACE_UNDEAD) then\r\n\
        call MeleeStartingUnitsUndead(whichPlayer, loc, doHeroes, false, false)\r\n\
    elseif (whichRace == RACE_NIGHTELF) then\r\n\
        call MeleeStartingUnitsNightElf(whichPlayer, loc, doHeroes, false, false)\r\n\
    else\r\n\
        // Unrecognized race - ignore the request.\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
\r\n\
\r\n\
//***************************************************************************\r\n\
//*\r\n\
//*  Melee Template Starting AI Scripts\r\n\
//*\r\n\
//***************************************************************************\r\n\
\r\n\
//===========================================================================\r\n\
function PickMeleeAI takes player num, string s1, string s2, string s3 returns nothing\r\n\
    local integer pick\r\n\
\r\n\
    // easy difficulty never uses any custom AI scripts\r\n\
    // that are designed to be a bit more challenging\r\n\
    //\r\n\
    if GetAIDifficulty(num) == AI_DIFFICULTY_NEWBIE then\r\n\
        call StartMeleeAI(num,s1)\r\n\
        return\r\n\
    endif\r\n\
\r\n\
    if s2 == null then\r\n\
        set pick = 1\r\n\
    elseif s3 == null then\r\n\
        set pick = GetRandomInt(1,2)\r\n\
    else\r\n\
        set pick = GetRandomInt(1,3)\r\n\
    endif\r\n\
\r\n\
    if pick == 1 then\r\n\
        call StartMeleeAI(num,s1)\r\n\
    elseif pick == 2 then\r\n\
        call StartMeleeAI(num,s2)\r\n\
    else\r\n\
        call StartMeleeAI(num,s3)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function MeleeStartingAI takes nothing returns nothing\r\n\
    local integer index\r\n\
    local player  indexPlayer\r\n\
    local race    indexRace\r\n\
\r\n\
    set index = 0\r\n\
    loop\r\n\
        set indexPlayer = Player(index)\r\n\
        if (GetPlayerSlotState(indexPlayer) == PLAYER_SLOT_STATE_PLAYING) then\r\n\
            set indexRace = GetPlayerRace(indexPlayer)\r\n\
            if (GetPlayerController(indexPlayer) == MAP_CONTROL_COMPUTER) then\r\n\
                // Run a race-specific melee AI script.\r\n\
                if (indexRace == RACE_HUMAN) then\r\n\
                    call PickMeleeAI(indexPlayer, \"human.ai\", null, null)\r\n\
                elseif (indexRace == RACE_ORC) then\r\n\
                    call PickMeleeAI(indexPlayer, \"orc.ai\", null, null)\r\n\
                elseif (indexRace == RACE_UNDEAD) then\r\n\
                    call PickMeleeAI(indexPlayer, \"undead.ai\", null, null)\r\n\
                    call RecycleGuardPosition(bj_ghoul[index])\r\n\
                elseif (indexRace == RACE_NIGHTELF) then\r\n\
                    call PickMeleeAI(indexPlayer, \"elf.ai\", null, null)\r\n\
                else\r\n\
                    // Unrecognized race.\r\n\
                endif\r\n\
                call ShareEverythingWithTeamAI(indexPlayer)\r\n\
            endif\r\n\
        endif\r\n\
\r\n\
        set index = index + 1\r\n\
        exitwhen index == bj_MAX_PLAYERS\r\n\
    endloop\r\n\
endfunction\r\n\
\r\n\
function LockGuardPosition takes unit targ returns nothing\r\n\
    call SetUnitCreepGuard(targ,true)\r\n\
endfunction\r\n\
\r\n\
\r\n\
//***************************************************************************\r\n\
//*\r\n\
//*  Melee Template Victory / Defeat Conditions\r\n\
//*\r\n\
//***************************************************************************\r\n\
\r\n\
//===========================================================================\r\n\
function MeleePlayerIsOpponent takes integer playerIndex, integer opponentIndex returns boolean\r\n\
    local player thePlayer = Player(playerIndex)\r\n\
    local player theOpponent = Player(opponentIndex)\r\n\
\r\n\
    // The player himself is not an opponent.\r\n\
    if (playerIndex == opponentIndex) then\r\n\
        return false\r\n\
    endif\r\n\
\r\n\
    // Unused player slots are not opponents.\r\n\
    if (GetPlayerSlotState(theOpponent) != PLAYER_SLOT_STATE_PLAYING) then\r\n\
        return false\r\n\
    endif\r\n\
\r\n\
    // Players who are already defeated are not opponents.\r\n\
    if (bj_meleeDefeated[opponentIndex]) then\r\n\
        return false\r\n\
    endif\r\n\
\r\n\
    // Allied players with allied victory set are not opponents.\r\n\
    if GetPlayerAlliance(thePlayer, theOpponent, ALLIANCE_PASSIVE) then\r\n\
        if GetPlayerAlliance(theOpponent, thePlayer, ALLIANCE_PASSIVE) then\r\n\
            if (GetPlayerState(thePlayer, PLAYER_STATE_ALLIED_VICTORY) == 1) then\r\n\
                if (GetPlayerState(theOpponent, PLAYER_STATE_ALLIED_VICTORY) == 1) then\r\n\
                    return false\r\n\
                endif\r\n\
            endif\r\n\
        endif\r\n\
    endif\r\n\
\r\n\
    return true\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Count buildings currently owned by all allies, including the player themself.\r\n\
//\r\n\
function MeleeGetAllyStructureCount takes player whichPlayer returns integer\r\n\
    local integer    playerIndex\r\n\
    local integer    buildingCount\r\n\
    local player     indexPlayer\r\n\
\r\n\
    // Count the number of buildings controlled by all not-yet-defeated co-allies.\r\n\
    set buildingCount = 0\r\n\
    set playerIndex = 0\r\n\
    loop\r\n\
        set indexPlayer = Player(playerIndex)\r\n\
\r\n\
        // uncomment to cause defeat even if you have control of ally structures, but yours have been nixed\r\n\
        //if (PlayersAreCoAllied(whichPlayer, indexPlayer) and not bj_meleeDefeated[playerIndex]) then\r\n\
        if (PlayersAreCoAllied(whichPlayer, indexPlayer)) then\r\n\
            set buildingCount = buildingCount + GetPlayerStructureCount(indexPlayer, true)\r\n\
        endif\r\n\
            \r\n\
        set playerIndex = playerIndex + 1\r\n\
        exitwhen playerIndex == bj_MAX_PLAYERS\r\n\
    endloop\r\n\
\r\n\
    return buildingCount\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Count allies, excluding dead players and the player themself.\r\n\
//\r\n\
function MeleeGetAllyCount takes player whichPlayer returns integer\r\n\
    local integer playerIndex\r\n\
    local integer playerCount\r\n\
    local player  indexPlayer\r\n\
\r\n\
    // Count the number of not-yet-defeated co-allies.\r\n\
    set playerCount = 0\r\n\
    set playerIndex = 0\r\n\
    loop\r\n\
        set indexPlayer = Player(playerIndex)\r\n\
        if PlayersAreCoAllied(whichPlayer, indexPlayer) and not bj_meleeDefeated[playerIndex] and (whichPlayer != indexPlayer) then\r\n\
            set playerCount = playerCount + 1\r\n\
        endif\r\n\
\r\n\
        set playerIndex = playerIndex + 1\r\n\
        exitwhen playerIndex == bj_MAX_PLAYERS\r\n\
    endloop\r\n\
\r\n\
    return playerCount\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Counts key structures owned by a player and his or her allies, including\r\n\
// structures currently upgrading or under construction.\r\n\
//\r\n\
// Key structures: Town Hall, Great Hall, Tree of Life, Necropolis\r\n\
//\r\n\
function MeleeGetAllyKeyStructureCount takes player whichPlayer returns integer\r\n\
    local integer    playerIndex\r\n\
    local player     indexPlayer\r\n\
    local integer    keyStructs\r\n\
\r\n\
    // Count the number of buildings controlled by all not-yet-defeated co-allies.\r\n\
    set keyStructs = 0\r\n\
    set playerIndex = 0\r\n\
    loop\r\n\
        set indexPlayer = Player(playerIndex)\r\n\
        if (PlayersAreCoAllied(whichPlayer, indexPlayer)) then\r\n\
            set keyStructs = keyStructs + GetPlayerTypedUnitCount(indexPlayer, \"townhall\", true, true)\r\n\
            set keyStructs = keyStructs + GetPlayerTypedUnitCount(indexPlayer, \"greathall\", true, true)\r\n\
            set keyStructs = keyStructs + GetPlayerTypedUnitCount(indexPlayer, \"treeoflife\", true, true)\r\n\
            set keyStructs = keyStructs + GetPlayerTypedUnitCount(indexPlayer, \"necropolis\", true, true)\r\n\
        endif\r\n\
            \r\n\
        set playerIndex = playerIndex + 1\r\n\
        exitwhen playerIndex == bj_MAX_PLAYERS\r\n\
    endloop\r\n\
\r\n\
    return keyStructs\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Enum: Draw out a specific player.\r\n\
//\r\n\
function MeleeDoDrawEnum takes nothing returns nothing\r\n\
    local player thePlayer = GetEnumPlayer()\r\n\
\r\n\
    call CachePlayerHeroData(thePlayer)\r\n\
    call RemovePlayerPreserveUnitsBJ(thePlayer, PLAYER_GAME_RESULT_TIE, false)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Enum: Victory out a specific player.\r\n\
//\r\n\
function MeleeDoVictoryEnum takes nothing returns nothing\r\n\
    local player thePlayer = GetEnumPlayer()\r\n\
    local integer playerIndex = GetPlayerId(thePlayer)\r\n\
\r\n\
    if (not bj_meleeVictoried[playerIndex]) then\r\n\
        set bj_meleeVictoried[playerIndex] = true\r\n\
        call CachePlayerHeroData(thePlayer)\r\n\
        call RemovePlayerPreserveUnitsBJ(thePlayer, PLAYER_GAME_RESULT_VICTORY, false)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Defeat out a specific player.\r\n\
//\r\n\
function MeleeDoDefeat takes player whichPlayer returns nothing\r\n\
    set bj_meleeDefeated[GetPlayerId(whichPlayer)] = true\r\n\
    call RemovePlayerPreserveUnitsBJ(whichPlayer, PLAYER_GAME_RESULT_DEFEAT, false)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Enum: Defeat out a specific player.\r\n\
//\r\n\
function MeleeDoDefeatEnum takes nothing returns nothing\r\n\
    local player thePlayer = GetEnumPlayer()\r\n\
\r\n\
    // needs to happen before ownership change\r\n\
    call CachePlayerHeroData(thePlayer)\r\n\
    call MakeUnitsPassiveForTeam(thePlayer)\r\n\
    call MeleeDoDefeat(thePlayer)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// A specific player left the game.\r\n\
//\r\n\
function MeleeDoLeave takes player whichPlayer returns nothing\r\n\
    if (GetIntegerGameState(GAME_STATE_DISCONNECTED) != 0) then\r\n\
        call GameOverDialogBJ( whichPlayer, true )\r\n\
    else\r\n\
        set bj_meleeDefeated[GetPlayerId(whichPlayer)] = true\r\n\
        call RemovePlayerPreserveUnitsBJ(whichPlayer, PLAYER_GAME_RESULT_DEFEAT, true)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Remove all observers\r\n\
// \r\n\
function MeleeRemoveObservers takes nothing returns nothing\r\n\
    local integer    playerIndex\r\n\
    local player     indexPlayer\r\n\
\r\n\
    // Give all observers the game over dialog\r\n\
    set playerIndex = 0\r\n\
    loop\r\n\
        set indexPlayer = Player(playerIndex)\r\n\
\r\n\
        if (IsPlayerObserver(indexPlayer)) then\r\n\
            call RemovePlayerPreserveUnitsBJ(indexPlayer, PLAYER_GAME_RESULT_NEUTRAL, false)\r\n\
        endif\r\n\
\r\n\
        set playerIndex = playerIndex + 1\r\n\
        exitwhen playerIndex == bj_MAX_PLAYERS\r\n\
    endloop\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Test all players to determine if a team has won.  For a team to win, all\r\n\
// remaining (read: undefeated) players need to be co-allied with all other\r\n\
// remaining players.  If even one player is not allied towards another,\r\n\
// everyone must be denied victory.\r\n\
//\r\n\
function MeleeCheckForVictors takes nothing returns force\r\n\
    local integer    playerIndex\r\n\
    local integer    opponentIndex\r\n\
    local force      opponentlessPlayers = CreateForce()\r\n\
    local boolean    gameOver = false\r\n\
\r\n\
    // Check to see if any players have opponents remaining.\r\n\
    set playerIndex = 0\r\n\
    loop\r\n\
        if (not bj_meleeDefeated[playerIndex]) then\r\n\
            // Determine whether or not this player has any remaining opponents.\r\n\
            set opponentIndex = 0\r\n\
            loop\r\n\
                // If anyone has an opponent, noone can be victorious yet.\r\n\
                if MeleePlayerIsOpponent(playerIndex, opponentIndex) then\r\n\
                    return CreateForce()\r\n\
                endif\r\n\
\r\n\
                set opponentIndex = opponentIndex + 1\r\n\
                exitwhen opponentIndex == bj_MAX_PLAYERS\r\n\
            endloop\r\n\
\r\n\
            // Keep track of each opponentless player so that we can give\r\n\
            // them a victory later.\r\n\
            call ForceAddPlayer(opponentlessPlayers, Player(playerIndex))\r\n\
            set gameOver = true\r\n\
        endif\r\n\
\r\n\
        set playerIndex = playerIndex + 1\r\n\
        exitwhen playerIndex == bj_MAX_PLAYERS\r\n\
    endloop\r\n\
\r\n\
    // Set the game over global flag\r\n\
    set bj_meleeGameOver = gameOver\r\n\
\r\n\
    return opponentlessPlayers\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Test each player to determine if anyone has been defeated.\r\n\
//\r\n\
function MeleeCheckForLosersAndVictors takes nothing returns nothing\r\n\
    local integer    playerIndex\r\n\
    local player     indexPlayer\r\n\
    local force      defeatedPlayers = CreateForce()\r\n\
    local force      victoriousPlayers\r\n\
    local boolean    gameOver = false\r\n\
\r\n\
    // If the game is already over, do nothing\r\n\
    if (bj_meleeGameOver) then\r\n\
        return\r\n\
    endif\r\n\
\r\n\
    // If the game was disconnected then it is over, in this case we\r\n\
    // don't want to report results for anyone as they will most likely\r\n\
    // conflict with the actual game results\r\n\
    if (GetIntegerGameState(GAME_STATE_DISCONNECTED) != 0) then\r\n\
        set bj_meleeGameOver = true\r\n\
        return\r\n\
    endif\r\n\
\r\n\
    // Check each player to see if he or she has been defeated yet.\r\n\
    set playerIndex = 0\r\n\
    loop\r\n\
        set indexPlayer = Player(playerIndex)\r\n\
\r\n\
        if (not bj_meleeDefeated[playerIndex] and not bj_meleeVictoried[playerIndex]) then\r\n\
            //call DisplayTimedTextToPlayer(GetLocalPlayer(), 0, 0, 60, \"Player\"+I2S(playerIndex)+\" has \"+I2S(MeleeGetAllyStructureCount(indexPlayer))+\" ally buildings.\")\r\n\
            if (MeleeGetAllyStructureCount(indexPlayer) <= 0) then\r\n\
\r\n\
                // Keep track of each defeated player so that we can give\r\n\
                // them a defeat later.\r\n\
                call ForceAddPlayer(defeatedPlayers, Player(playerIndex))\r\n\
\r\n\
                // Set their defeated flag now so MeleeCheckForVictors\r\n\
                // can detect victors.\r\n\
                set bj_meleeDefeated[playerIndex] = true\r\n\
            endif\r\n\
        endif\r\n\
            \r\n\
        set playerIndex = playerIndex + 1\r\n\
        exitwhen playerIndex == bj_MAX_PLAYERS\r\n\
    endloop\r\n\
\r\n\
    // Now that the defeated flags are set, check if there are any victors\r\n\
    set victoriousPlayers = MeleeCheckForVictors()\r\n\
\r\n\
    // Defeat all defeated players\r\n\
    call ForForce(defeatedPlayers, function MeleeDoDefeatEnum)\r\n\
\r\n\
    // Give victory to all victorious players\r\n\
    call ForForce(victoriousPlayers, function MeleeDoVictoryEnum)\r\n\
\r\n\
    // If the game is over we should remove all observers\r\n\
    if (bj_meleeGameOver) then\r\n\
        call MeleeRemoveObservers()\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Returns a race-specific \"build X or be revealed\" message.\r\n\
//\r\n\
function MeleeGetCrippledWarningMessage takes player whichPlayer returns string\r\n\
    local race r = GetPlayerRace(whichPlayer)\r\n\
\r\n\
    if (r == RACE_HUMAN) then\r\n\
        return GetLocalizedString(\"CRIPPLE_WARNING_HUMAN\")\r\n\
    elseif (r == RACE_ORC) then\r\n\
        return GetLocalizedString(\"CRIPPLE_WARNING_ORC\")\r\n\
    elseif (r == RACE_NIGHTELF) then\r\n\
        return GetLocalizedString(\"CRIPPLE_WARNING_NIGHTELF\")\r\n\
    elseif (r == RACE_UNDEAD) then\r\n\
        return GetLocalizedString(\"CRIPPLE_WARNING_UNDEAD\")\r\n\
    else\r\n\
        // Unrecognized Race\r\n\
        return \"\"\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Returns a race-specific \"build X\" label for cripple timers.\r\n\
//\r\n\
function MeleeGetCrippledTimerMessage takes player whichPlayer returns string\r\n\
    local race r = GetPlayerRace(whichPlayer)\r\n\
\r\n\
    if (r == RACE_HUMAN) then\r\n\
        return GetLocalizedString(\"CRIPPLE_TIMER_HUMAN\")\r\n\
    elseif (r == RACE_ORC) then\r\n\
        return GetLocalizedString(\"CRIPPLE_TIMER_ORC\")\r\n\
    elseif (r == RACE_NIGHTELF) then\r\n\
        return GetLocalizedString(\"CRIPPLE_TIMER_NIGHTELF\")\r\n\
    elseif (r == RACE_UNDEAD) then\r\n\
        return GetLocalizedString(\"CRIPPLE_TIMER_UNDEAD\")\r\n\
    else\r\n\
        // Unrecognized Race\r\n\
        return \"\"\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Returns a race-specific \"build X\" label for cripple timers.\r\n\
//\r\n\
function MeleeGetCrippledRevealedMessage takes player whichPlayer returns string\r\n\
    return GetLocalizedString(\"CRIPPLE_REVEALING_PREFIX\") + GetPlayerName(whichPlayer) + GetLocalizedString(\"CRIPPLE_REVEALING_POSTFIX\")\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function MeleeExposePlayer takes player whichPlayer, boolean expose returns nothing\r\n\
    local integer playerIndex\r\n\
    local player  indexPlayer\r\n\
    local force   toExposeTo = CreateForce()\r\n\
\r\n\
    call CripplePlayer( whichPlayer, toExposeTo, false )\r\n\
\r\n\
    set bj_playerIsExposed[GetPlayerId(whichPlayer)] = expose\r\n\
    set playerIndex = 0\r\n\
    loop\r\n\
        set indexPlayer = Player(playerIndex)\r\n\
        if (not PlayersAreCoAllied(whichPlayer, indexPlayer)) then\r\n\
            call ForceAddPlayer( toExposeTo, indexPlayer )\r\n\
        endif\r\n\
\r\n\
        set playerIndex = playerIndex + 1\r\n\
        exitwhen playerIndex == bj_MAX_PLAYERS\r\n\
    endloop\r\n\
\r\n\
    call CripplePlayer( whichPlayer, toExposeTo, expose )\r\n\
    call DestroyForce(toExposeTo)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function MeleeExposeAllPlayers takes nothing returns nothing\r\n\
    local integer playerIndex\r\n\
    local player  indexPlayer\r\n\
    local integer playerIndex2\r\n\
    local player  indexPlayer2\r\n\
    local force   toExposeTo = CreateForce()\r\n\
\r\n\
    set playerIndex = 0\r\n\
    loop\r\n\
        set indexPlayer = Player(playerIndex)\r\n\
\r\n\
        call ForceClear( toExposeTo )\r\n\
        call CripplePlayer( indexPlayer, toExposeTo, false )\r\n\
\r\n\
        set playerIndex2 = 0\r\n\
        loop\r\n\
            set indexPlayer2 = Player(playerIndex2)\r\n\
\r\n\
            if playerIndex != playerIndex2 then\r\n\
                if (not PlayersAreCoAllied(indexPlayer, indexPlayer2)) then\r\n\
                    call ForceAddPlayer( toExposeTo, indexPlayer2 )\r\n\
                endif\r\n\
            endif\r\n\
\r\n\
            set playerIndex2 = playerIndex2 + 1\r\n\
            exitwhen playerIndex2 == bj_MAX_PLAYERS\r\n\
        endloop\r\n\
\r\n\
        call CripplePlayer( indexPlayer, toExposeTo, true )\r\n\
\r\n\
        set playerIndex = playerIndex + 1\r\n\
        exitwhen playerIndex == bj_MAX_PLAYERS\r\n\
    endloop\r\n\
\r\n\
    call DestroyForce( toExposeTo )\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function MeleeCrippledPlayerTimeout takes nothing returns nothing\r\n\
    local timer expiredTimer = GetExpiredTimer()\r\n\
    local integer playerIndex\r\n\
    local player  exposedPlayer\r\n\
\r\n\
    // Determine which player's timer expired.\r\n\
    set playerIndex = 0\r\n\
    loop\r\n\
        if (bj_crippledTimer[playerIndex] == expiredTimer) then\r\n\
            exitwhen true\r\n\
        endif\r\n\
\r\n\
        set playerIndex = playerIndex + 1\r\n\
        exitwhen playerIndex == bj_MAX_PLAYERS\r\n\
    endloop\r\n\
    if (playerIndex == bj_MAX_PLAYERS) then\r\n\
        return\r\n\
    endif\r\n\
    set exposedPlayer = Player(playerIndex)\r\n\
\r\n\
    if (GetLocalPlayer() == exposedPlayer) then\r\n\
        // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
\r\n\
        // Hide the timer window for this player.\r\n\
        call TimerDialogDisplay(bj_crippledTimerWindows[playerIndex], false)\r\n\
    endif\r\n\
\r\n\
    // Display a text message to all players, explaining the exposure.\r\n\
    call DisplayTimedTextToPlayer(GetLocalPlayer(), 0, 0, bj_MELEE_CRIPPLE_MSG_DURATION, MeleeGetCrippledRevealedMessage(exposedPlayer))\r\n\
\r\n\
    // Expose the player.\r\n\
    call MeleeExposePlayer(exposedPlayer, true)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function MeleePlayerIsCrippled takes player whichPlayer returns boolean\r\n\
    local integer allyStructures    = MeleeGetAllyStructureCount(whichPlayer)\r\n\
    local integer allyKeyStructures = MeleeGetAllyKeyStructureCount(whichPlayer)\r\n\
\r\n\
    // Dead teams are not considered to be crippled.\r\n\
    return (allyStructures > 0) and (allyKeyStructures <= 0)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Test each player to determine if anyone has become crippled.\r\n\
//\r\n\
function MeleeCheckForCrippledPlayers takes nothing returns nothing\r\n\
    local integer    playerIndex\r\n\
    local player     indexPlayer\r\n\
    local force      crippledPlayers = CreateForce()\r\n\
    local boolean    isNowCrippled\r\n\
    local race       indexRace\r\n\
\r\n\
    // The \"finish soon\" exposure of all players overrides any \"crippled\" exposure\r\n\
    if bj_finishSoonAllExposed then\r\n\
        return\r\n\
    endif\r\n\
\r\n\
    // Check each player to see if he or she has been crippled or uncrippled.\r\n\
    set playerIndex = 0\r\n\
    loop\r\n\
        set indexPlayer = Player(playerIndex)\r\n\
        set isNowCrippled = MeleePlayerIsCrippled(indexPlayer)\r\n\
\r\n\
        if (not bj_playerIsCrippled[playerIndex] and isNowCrippled) then\r\n\
\r\n\
            // Player became crippled; start their cripple timer.\r\n\
            set bj_playerIsCrippled[playerIndex] = true\r\n\
            call TimerStart(bj_crippledTimer[playerIndex], bj_MELEE_CRIPPLE_TIMEOUT, false, function MeleeCrippledPlayerTimeout)\r\n\
\r\n\
            if (GetLocalPlayer() == indexPlayer) then\r\n\
                // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
\r\n\
                // Show the timer window.\r\n\
                call TimerDialogDisplay(bj_crippledTimerWindows[playerIndex], true)\r\n\
\r\n\
                // Display a warning message.\r\n\
                call DisplayTimedTextToPlayer(indexPlayer, 0, 0, bj_MELEE_CRIPPLE_MSG_DURATION, MeleeGetCrippledWarningMessage(indexPlayer))\r\n\
            endif\r\n\
\r\n\
        elseif (bj_playerIsCrippled[playerIndex] and not isNowCrippled) then\r\n\
\r\n\
            // Player became uncrippled; stop their cripple timer.\r\n\
            set bj_playerIsCrippled[playerIndex] = false\r\n\
            call PauseTimer(bj_crippledTimer[playerIndex])\r\n\
\r\n\
            if (GetLocalPlayer() == indexPlayer) then\r\n\
                // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
\r\n\
                // Hide the timer window for this player.\r\n\
                call TimerDialogDisplay(bj_crippledTimerWindows[playerIndex], false)\r\n\
\r\n\
                // Display a confirmation message if the player's team is still alive.\r\n\
                if (MeleeGetAllyStructureCount(indexPlayer) > 0) then\r\n\
                    if (bj_playerIsExposed[playerIndex]) then\r\n\
                        call DisplayTimedTextToPlayer(indexPlayer, 0, 0, bj_MELEE_CRIPPLE_MSG_DURATION, GetLocalizedString(\"CRIPPLE_UNREVEALED\"))\r\n\
                    else\r\n\
                        call DisplayTimedTextToPlayer(indexPlayer, 0, 0, bj_MELEE_CRIPPLE_MSG_DURATION, GetLocalizedString(\"CRIPPLE_UNCRIPPLED\"))\r\n\
                    endif\r\n\
                endif\r\n\
            endif\r\n\
\r\n\
            // If the player granted shared vision, deny that vision now.\r\n\
            call MeleeExposePlayer(indexPlayer, false)\r\n\
\r\n\
        endif\r\n\
            \r\n\
        set playerIndex = playerIndex + 1\r\n\
        exitwhen playerIndex == bj_MAX_PLAYERS\r\n\
    endloop\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Determine if the lost unit should result in any defeats or victories.\r\n\
//\r\n\
function MeleeCheckLostUnit takes unit lostUnit returns nothing\r\n\
    local player lostUnitOwner = GetOwningPlayer(lostUnit)\r\n\
\r\n\
    // We only need to check for mortality if this was the last building.\r\n\
    if (GetPlayerStructureCount(lostUnitOwner, true) <= 0) then\r\n\
        call MeleeCheckForLosersAndVictors()\r\n\
    endif\r\n\
\r\n\
    // Check if the lost unit has crippled or uncrippled the player.\r\n\
    // (A team with 0 units is dead, and thus considered uncrippled.)\r\n\
    call MeleeCheckForCrippledPlayers()\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Determine if the gained unit should result in any defeats, victories,\r\n\
// or cripple-status changes.\r\n\
//\r\n\
function MeleeCheckAddedUnit takes unit addedUnit returns nothing\r\n\
    local player addedUnitOwner = GetOwningPlayer(addedUnit)\r\n\
\r\n\
    // If the player was crippled, this unit may have uncrippled him/her.\r\n\
    if (bj_playerIsCrippled[GetPlayerId(addedUnitOwner)]) then\r\n\
        call MeleeCheckForCrippledPlayers()\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function MeleeTriggerActionConstructCancel takes nothing returns nothing\r\n\
    call MeleeCheckLostUnit(GetCancelledStructure())\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function MeleeTriggerActionUnitDeath takes nothing returns nothing\r\n\
    if (IsUnitType(GetDyingUnit(), UNIT_TYPE_STRUCTURE)) then\r\n\
        call MeleeCheckLostUnit(GetDyingUnit())\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function MeleeTriggerActionUnitConstructionStart takes nothing returns nothing\r\n\
    call MeleeCheckAddedUnit(GetConstructingStructure())\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function MeleeTriggerActionPlayerDefeated takes nothing returns nothing\r\n\
    local player thePlayer = GetTriggerPlayer()\r\n\
    call CachePlayerHeroData(thePlayer)\r\n\
\r\n\
    if (MeleeGetAllyCount(thePlayer) > 0) then\r\n\
        // If at least one ally is still alive and kicking, share units with\r\n\
        // them and proceed with death.\r\n\
        call ShareEverythingWithTeam(thePlayer)\r\n\
        if (not bj_meleeDefeated[GetPlayerId(thePlayer)]) then\r\n\
            call MeleeDoDefeat(thePlayer)\r\n\
        endif\r\n\
    else\r\n\
        // If no living allies remain, swap all units and buildings over to\r\n\
        // neutral_passive and proceed with death.\r\n\
        call MakeUnitsPassiveForTeam(thePlayer)\r\n\
        if (not bj_meleeDefeated[GetPlayerId(thePlayer)]) then\r\n\
            call MeleeDoDefeat(thePlayer)\r\n\
        endif\r\n\
    endif\r\n\
    call MeleeCheckForLosersAndVictors()\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function MeleeTriggerActionPlayerLeft takes nothing returns nothing\r\n\
    local player thePlayer = GetTriggerPlayer()\r\n\
\r\n\
    // Just show game over for observers when they leave\r\n\
    if (IsPlayerObserver(thePlayer)) then\r\n\
        call RemovePlayerPreserveUnitsBJ(thePlayer, PLAYER_GAME_RESULT_NEUTRAL, false)\r\n\
        return\r\n\
    endif\r\n\
\r\n\
    call CachePlayerHeroData(thePlayer)\r\n\
\r\n\
    // This is the same as defeat except the player generates the message \r\n\
    // \"player left the game\" as opposed to \"player was defeated\".\r\n\
\r\n\
    if (MeleeGetAllyCount(thePlayer) > 0) then\r\n\
        // If at least one ally is still alive and kicking, share units with\r\n\
        // them and proceed with death.\r\n\
        call ShareEverythingWithTeam(thePlayer)\r\n\
        call MeleeDoLeave(thePlayer)\r\n\
    else\r\n\
        // If no living allies remain, swap all units and buildings over to\r\n\
        // neutral_passive and proceed with death.\r\n\
        call MakeUnitsPassiveForTeam(thePlayer)\r\n\
        call MeleeDoLeave(thePlayer)\r\n\
    endif\r\n\
    call MeleeCheckForLosersAndVictors()\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function MeleeTriggerActionAllianceChange takes nothing returns nothing\r\n\
    call MeleeCheckForLosersAndVictors()\r\n\
    call MeleeCheckForCrippledPlayers()\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function MeleeTriggerTournamentFinishSoon takes nothing returns nothing\r\n\
    // Note: We may get this trigger multiple times\r\n\
    local integer    playerIndex\r\n\
    local player     indexPlayer\r\n\
    local real       timeRemaining = GetTournamentFinishSoonTimeRemaining()\r\n\
\r\n\
    if not bj_finishSoonAllExposed then\r\n\
        set bj_finishSoonAllExposed = true\r\n\
\r\n\
        // Reset all crippled players and their timers, and hide the local crippled timer dialog\r\n\
        set playerIndex = 0\r\n\
        loop\r\n\
            set indexPlayer = Player(playerIndex)\r\n\
            if bj_playerIsCrippled[playerIndex] then\r\n\
                // Uncripple the player\r\n\
                set bj_playerIsCrippled[playerIndex] = false\r\n\
                call PauseTimer(bj_crippledTimer[playerIndex])\r\n\
\r\n\
                if (GetLocalPlayer() == indexPlayer) then\r\n\
                    // Use only local code (no net traffic) within this block to avoid desyncs.\r\n\
\r\n\
                    // Hide the timer window.\r\n\
                    call TimerDialogDisplay(bj_crippledTimerWindows[playerIndex], false)\r\n\
                endif\r\n\
\r\n\
            endif\r\n\
            set playerIndex = playerIndex + 1\r\n\
            exitwhen playerIndex == bj_MAX_PLAYERS\r\n\
        endloop\r\n\
\r\n\
        // Expose all players\r\n\
        call MeleeExposeAllPlayers()\r\n\
    endif\r\n\
\r\n\
    // Show the \"finish soon\" timer dialog and set the real time remaining\r\n\
    call TimerDialogDisplay(bj_finishSoonTimerDialog, true)\r\n\
    call TimerDialogSetRealTimeRemaining(bj_finishSoonTimerDialog, timeRemaining)\r\n\
endfunction\r\n\
\r\n\
\r\n\
//===========================================================================\r\n\
function MeleeWasUserPlayer takes player whichPlayer returns boolean\r\n\
    local playerslotstate slotState\r\n\
\r\n\
    if (GetPlayerController(whichPlayer) != MAP_CONTROL_USER) then\r\n\
        return false\r\n\
    endif\r\n\
\r\n\
    set slotState = GetPlayerSlotState(whichPlayer)\r\n\
\r\n\
    return (slotState == PLAYER_SLOT_STATE_PLAYING or slotState == PLAYER_SLOT_STATE_LEFT)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function MeleeTournamentFinishNowRuleA takes integer multiplier returns nothing\r\n\
    local integer array playerScore\r\n\
    local integer array teamScore\r\n\
    local force array   teamForce\r\n\
    local integer       teamCount\r\n\
    local integer       index\r\n\
    local player        indexPlayer\r\n\
    local integer       index2\r\n\
    local player        indexPlayer2\r\n\
    local integer       bestTeam\r\n\
    local integer       bestScore\r\n\
    local boolean       draw\r\n\
\r\n\
    // Compute individual player scores\r\n\
    set index = 0\r\n\
    loop\r\n\
        set indexPlayer = Player(index)\r\n\
        if MeleeWasUserPlayer(indexPlayer) then\r\n\
            set playerScore[index] = GetTournamentScore(indexPlayer)\r\n\
            if playerScore[index] <= 0 then\r\n\
                set playerScore[index] = 1\r\n\
            endif\r\n\
        else\r\n\
            set playerScore[index] = 0\r\n\
        endif\r\n\
        set index = index + 1\r\n\
        exitwhen index == bj_MAX_PLAYERS\r\n\
    endloop\r\n\
\r\n\
    // Compute team scores and team forces\r\n\
    set teamCount = 0\r\n\
    set index = 0\r\n\
    loop\r\n\
        if playerScore[index] != 0 then\r\n\
            set indexPlayer = Player(index)\r\n\
\r\n\
            set teamScore[teamCount] = 0\r\n\
            set teamForce[teamCount] = CreateForce()\r\n\
\r\n\
            set index2 = index\r\n\
            loop\r\n\
                if playerScore[index2] != 0 then\r\n\
                    set indexPlayer2 = Player(index2)\r\n\
\r\n\
                    if PlayersAreCoAllied(indexPlayer, indexPlayer2) then\r\n\
                        set teamScore[teamCount] = teamScore[teamCount] + playerScore[index2]\r\n\
                        call ForceAddPlayer(teamForce[teamCount], indexPlayer2)\r\n\
                        set playerScore[index2] = 0\r\n\
                    endif\r\n\
                endif\r\n\
\r\n\
                set index2 = index2 + 1\r\n\
                exitwhen index2 == bj_MAX_PLAYERS\r\n\
            endloop\r\n\
\r\n\
            set teamCount = teamCount + 1\r\n\
        endif\r\n\
\r\n\
        set index = index + 1\r\n\
        exitwhen index == bj_MAX_PLAYERS\r\n\
    endloop\r\n\
\r\n\
    // The game is now over\r\n\
    set bj_meleeGameOver = true\r\n\
\r\n\
    // There should always be at least one team, but continue to work if not\r\n\
    if teamCount != 0 then\r\n\
\r\n\
        // Find best team score\r\n\
        set bestTeam = -1\r\n\
        set bestScore = -1\r\n\
        set index = 0\r\n\
        loop\r\n\
            if teamScore[index] > bestScore then\r\n\
                set bestTeam = index\r\n\
                set bestScore = teamScore[index]\r\n\
            endif\r\n\
\r\n\
            set index = index + 1\r\n\
            exitwhen index == teamCount\r\n\
        endloop\r\n\
\r\n\
        // Check whether the best team's score is 'multiplier' times better than\r\n\
        // every other team. In the case of multiplier == 1 and exactly equal team\r\n\
        // scores, the first team (which was randomly chosen by the server) will win.\r\n\
        set draw = false\r\n\
        set index = 0\r\n\
        loop\r\n\
            if index != bestTeam then\r\n\
                if bestScore < (multiplier * teamScore[index]) then\r\n\
                    set draw = true\r\n\
                endif\r\n\
            endif\r\n\
\r\n\
            set index = index + 1\r\n\
            exitwhen index == teamCount\r\n\
        endloop\r\n\
\r\n\
        if draw then\r\n\
            // Give draw to all players on all teams\r\n\
            set index = 0\r\n\
            loop\r\n\
                call ForForce(teamForce[index], function MeleeDoDrawEnum)\r\n\
\r\n\
                set index = index + 1\r\n\
                exitwhen index == teamCount\r\n\
            endloop\r\n\
        else\r\n\
            // Give defeat to all players on teams other than the best team\r\n\
            set index = 0\r\n\
            loop\r\n\
                if index != bestTeam then\r\n\
                    call ForForce(teamForce[index], function MeleeDoDefeatEnum)\r\n\
                endif\r\n\
\r\n\
                set index = index + 1\r\n\
                exitwhen index == teamCount\r\n\
            endloop\r\n\
\r\n\
            // Give victory to all players on the best team\r\n\
            call ForForce(teamForce[bestTeam], function MeleeDoVictoryEnum)\r\n\
        endif\r\n\
    endif\r\n\
\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function MeleeTriggerTournamentFinishNow takes nothing returns nothing\r\n\
    local integer rule = GetTournamentFinishNowRule()\r\n\
\r\n\
    // If the game is already over, do nothing\r\n\
    if bj_meleeGameOver then\r\n\
        return\r\n\
    endif\r\n\
\r\n\
    if (rule == 1) then\r\n\
        // Finals games\r\n\
        call MeleeTournamentFinishNowRuleA(1)\r\n\
    else\r\n\
        // Preliminary games\r\n\
        call MeleeTournamentFinishNowRuleA(3)\r\n\
    endif\r\n\
\r\n\
    // Since the game is over we should remove all observers\r\n\
    call MeleeRemoveObservers()\r\n\
\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function MeleeInitVictoryDefeat takes nothing returns nothing\r\n\
    local trigger    trig\r\n\
    local integer    index\r\n\
    local player     indexPlayer\r\n\
\r\n\
    // Create a timer window for the \"finish soon\" timeout period, it has no timer\r\n\
    // because it is driven by real time (outside of the game state to avoid desyncs)\r\n\
    set bj_finishSoonTimerDialog = CreateTimerDialog(null)\r\n\
\r\n\
    // Set a trigger to fire when we receive a \"finish soon\" game event\r\n\
    set trig = CreateTrigger()\r\n\
    call TriggerRegisterGameEvent(trig, EVENT_GAME_TOURNAMENT_FINISH_SOON)\r\n\
    call TriggerAddAction(trig, function MeleeTriggerTournamentFinishSoon)\r\n\
\r\n\
    // Set a trigger to fire when we receive a \"finish now\" game event\r\n\
    set trig = CreateTrigger()\r\n\
    call TriggerRegisterGameEvent(trig, EVENT_GAME_TOURNAMENT_FINISH_NOW)\r\n\
    call TriggerAddAction(trig, function MeleeTriggerTournamentFinishNow)\r\n\
\r\n\
    // Set up each player's mortality code.\r\n\
    set index = 0\r\n\
    loop\r\n\
        set indexPlayer = Player(index)\r\n\
\r\n\
        // Make sure this player slot is playing.\r\n\
        if (GetPlayerSlotState(indexPlayer) == PLAYER_SLOT_STATE_PLAYING) then\r\n\
            set bj_meleeDefeated[index] = false\r\n\
            set bj_meleeVictoried[index] = false\r\n\
\r\n\
            // Create a timer and timer window in case the player is crippled.\r\n\
            set bj_playerIsCrippled[index] = false\r\n\
            set bj_playerIsExposed[index] = false\r\n\
            set bj_crippledTimer[index] = CreateTimer()\r\n\
            set bj_crippledTimerWindows[index] = CreateTimerDialog(bj_crippledTimer[index])\r\n\
            call TimerDialogSetTitle(bj_crippledTimerWindows[index], MeleeGetCrippledTimerMessage(indexPlayer))\r\n\
\r\n\
            // Set a trigger to fire whenever a building is cancelled for this player.\r\n\
            set trig = CreateTrigger()\r\n\
            call TriggerRegisterPlayerUnitEvent(trig, indexPlayer, EVENT_PLAYER_UNIT_CONSTRUCT_CANCEL, null)\r\n\
            call TriggerAddAction(trig, function MeleeTriggerActionConstructCancel)\r\n\
\r\n\
            // Set a trigger to fire whenever a unit dies for this player.\r\n\
            set trig = CreateTrigger()\r\n\
            call TriggerRegisterPlayerUnitEvent(trig, indexPlayer, EVENT_PLAYER_UNIT_DEATH, null)\r\n\
            call TriggerAddAction(trig, function MeleeTriggerActionUnitDeath)\r\n\
\r\n\
            // Set a trigger to fire whenever a unit begins construction for this player\r\n\
            set trig = CreateTrigger()\r\n\
            call TriggerRegisterPlayerUnitEvent(trig, indexPlayer, EVENT_PLAYER_UNIT_CONSTRUCT_START, null)\r\n\
            call TriggerAddAction(trig, function MeleeTriggerActionUnitConstructionStart)\r\n\
\r\n\
            // Set a trigger to fire whenever this player defeats-out\r\n\
            set trig = CreateTrigger()\r\n\
            call TriggerRegisterPlayerEvent(trig, indexPlayer, EVENT_PLAYER_DEFEAT)\r\n\
            call TriggerAddAction(trig, function MeleeTriggerActionPlayerDefeated)\r\n\
\r\n\
            // Set a trigger to fire whenever this player leaves\r\n\
            set trig = CreateTrigger()\r\n\
            call TriggerRegisterPlayerEvent(trig, indexPlayer, EVENT_PLAYER_LEAVE)\r\n\
            call TriggerAddAction(trig, function MeleeTriggerActionPlayerLeft)\r\n\
\r\n\
            // Set a trigger to fire whenever this player changes his/her alliances.\r\n\
            set trig = CreateTrigger()\r\n\
            call TriggerRegisterPlayerAllianceChange(trig, indexPlayer, ALLIANCE_PASSIVE)\r\n\
            call TriggerRegisterPlayerStateEvent(trig, indexPlayer, PLAYER_STATE_ALLIED_VICTORY, EQUAL, 1)\r\n\
            call TriggerAddAction(trig, function MeleeTriggerActionAllianceChange)\r\n\
        else\r\n\
            set bj_meleeDefeated[index] = true\r\n\
            set bj_meleeVictoried[index] = false\r\n\
\r\n\
            // Handle leave events for observers\r\n\
            if (IsPlayerObserver(indexPlayer)) then\r\n\
                // Set a trigger to fire whenever this player leaves\r\n\
                set trig = CreateTrigger()\r\n\
                call TriggerRegisterPlayerEvent(trig, indexPlayer, EVENT_PLAYER_LEAVE)\r\n\
                call TriggerAddAction(trig, function MeleeTriggerActionPlayerLeft)\r\n\
            endif\r\n\
        endif\r\n\
\r\n\
        set index = index + 1\r\n\
        exitwhen index == bj_MAX_PLAYERS\r\n\
    endloop\r\n\
\r\n\
    // Test for victory / defeat at startup, in case the user has already won / lost.\r\n\
    // Allow for a short time to pass first, so that the map can finish loading.\r\n\
    call TimerStart(CreateTimer(), 2.0, false, function MeleeTriggerActionAllianceChange)\r\n\
endfunction\r\n\
\r\n\
\r\n\
\r\n\
//***************************************************************************\r\n\
//*\r\n\
//*  Player Slot Availability\r\n\
//*\r\n\
//***************************************************************************\r\n\
\r\n\
//===========================================================================\r\n\
function CheckInitPlayerSlotAvailability takes nothing returns nothing\r\n\
    local integer index\r\n\
\r\n\
    if (not bj_slotControlReady) then\r\n\
        set index = 0\r\n\
        loop\r\n\
            set bj_slotControlUsed[index] = false\r\n\
            set bj_slotControl[index] = MAP_CONTROL_USER\r\n\
            set index = index + 1\r\n\
            exitwhen index == bj_MAX_PLAYERS\r\n\
        endloop\r\n\
        set bj_slotControlReady = true\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetPlayerSlotAvailable takes player whichPlayer, mapcontrol control returns nothing\r\n\
    local integer playerIndex = GetPlayerId(whichPlayer)\r\n\
\r\n\
    call CheckInitPlayerSlotAvailability()\r\n\
    set bj_slotControlUsed[playerIndex] = true\r\n\
    set bj_slotControl[playerIndex] = control\r\n\
endfunction\r\n\
\r\n\
\r\n\
\r\n\
//***************************************************************************\r\n\
//*\r\n\
//*  Generic Template Player-slot Initialization\r\n\
//*\r\n\
//***************************************************************************\r\n\
\r\n\
//===========================================================================\r\n\
function TeamInitPlayerSlots takes integer teamCount returns nothing\r\n\
    local integer index\r\n\
    local player  indexPlayer\r\n\
    local integer team\r\n\
\r\n\
    call SetTeams(teamCount)\r\n\
\r\n\
    call CheckInitPlayerSlotAvailability()\r\n\
    set index = 0\r\n\
    set team = 0\r\n\
    loop\r\n\
        if (bj_slotControlUsed[index]) then\r\n\
            set indexPlayer = Player(index)\r\n\
            call SetPlayerTeam( indexPlayer, team )\r\n\
            set team = team + 1\r\n\
            if (team >= teamCount) then\r\n\
                set team = 0\r\n\
            endif\r\n\
        endif\r\n\
\r\n\
        set index = index + 1\r\n\
        exitwhen index == bj_MAX_PLAYERS\r\n\
    endloop\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function MeleeInitPlayerSlots takes nothing returns nothing\r\n\
    call TeamInitPlayerSlots(bj_MAX_PLAYERS)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function FFAInitPlayerSlots takes nothing returns nothing\r\n\
    call TeamInitPlayerSlots(bj_MAX_PLAYERS)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function OneOnOneInitPlayerSlots takes nothing returns nothing\r\n\
    // Limit the game to 2 players.\r\n\
    call SetTeams(2)\r\n\
    call SetPlayers(2)\r\n\
    call TeamInitPlayerSlots(2)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function InitGenericPlayerSlots takes nothing returns nothing\r\n\
    local gametype gType = GetGameTypeSelected()\r\n\
\r\n\
    if (gType == GAME_TYPE_MELEE) then\r\n\
        call MeleeInitPlayerSlots()\r\n\
    elseif (gType == GAME_TYPE_FFA) then\r\n\
        call FFAInitPlayerSlots()\r\n\
    elseif (gType == GAME_TYPE_USE_MAP_SETTINGS) then\r\n\
        // Do nothing; the map-specific script handles this.\r\n\
    elseif (gType == GAME_TYPE_ONE_ON_ONE) then\r\n\
        call OneOnOneInitPlayerSlots()\r\n\
    elseif (gType == GAME_TYPE_TWO_TEAM_PLAY) then\r\n\
        call TeamInitPlayerSlots(2)\r\n\
    elseif (gType == GAME_TYPE_THREE_TEAM_PLAY) then\r\n\
        call TeamInitPlayerSlots(3)\r\n\
    elseif (gType == GAME_TYPE_FOUR_TEAM_PLAY) then\r\n\
        call TeamInitPlayerSlots(4)\r\n\
    else\r\n\
        // Unrecognized Game Type\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
\r\n\
\r\n\
//***************************************************************************\r\n\
//*\r\n\
//*  Blizzard.j Initialization\r\n\
//*\r\n\
//***************************************************************************\r\n\
\r\n\
//===========================================================================\r\n\
function SetDNCSoundsDawn takes nothing returns nothing\r\n\
    if bj_useDawnDuskSounds then\r\n\
        call StartSound(bj_dawnSound)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetDNCSoundsDusk takes nothing returns nothing\r\n\
    if bj_useDawnDuskSounds then\r\n\
        call StartSound(bj_duskSound)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetDNCSoundsDay takes nothing returns nothing\r\n\
    local real ToD = GetTimeOfDay()\r\n\
\r\n\
    if (ToD >= bj_TOD_DAWN and ToD < bj_TOD_DUSK) and not bj_dncIsDaytime then\r\n\
        set bj_dncIsDaytime = true\r\n\
\r\n\
        // change ambient sounds\r\n\
        call StopSound(bj_nightAmbientSound, false, true)\r\n\
        call StartSound(bj_dayAmbientSound)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function SetDNCSoundsNight takes nothing returns nothing\r\n\
    local real ToD = GetTimeOfDay()\r\n\
\r\n\
    if (ToD < bj_TOD_DAWN or ToD >= bj_TOD_DUSK) and bj_dncIsDaytime then\r\n\
        set bj_dncIsDaytime = false\r\n\
\r\n\
        // change ambient sounds\r\n\
        call StopSound(bj_dayAmbientSound, false, true)\r\n\
        call StartSound(bj_nightAmbientSound)\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function InitDNCSounds takes nothing returns nothing\r\n\
    // Create sounds to be played at dawn and dusk.\r\n\
    set bj_dawnSound = CreateSoundFromLabel(\"RoosterSound\", false, false, false, 10000, 10000)\r\n\
    set bj_duskSound = CreateSoundFromLabel(\"WolfSound\", false, false, false, 10000, 10000)\r\n\
\r\n\
    // Set up triggers to respond to dawn and dusk.\r\n\
    set bj_dncSoundsDawn = CreateTrigger()\r\n\
    call TriggerRegisterGameStateEvent(bj_dncSoundsDawn, GAME_STATE_TIME_OF_DAY, EQUAL, bj_TOD_DAWN)\r\n\
    call TriggerAddAction(bj_dncSoundsDawn, function SetDNCSoundsDawn)\r\n\
\r\n\
    set bj_dncSoundsDusk = CreateTrigger()\r\n\
    call TriggerRegisterGameStateEvent(bj_dncSoundsDusk, GAME_STATE_TIME_OF_DAY, EQUAL, bj_TOD_DUSK)\r\n\
    call TriggerAddAction(bj_dncSoundsDusk, function SetDNCSoundsDusk)\r\n\
\r\n\
    // Set up triggers to respond to changes from day to night or vice-versa.\r\n\
    set bj_dncSoundsDay = CreateTrigger()\r\n\
    call TriggerRegisterGameStateEvent(bj_dncSoundsDay,   GAME_STATE_TIME_OF_DAY, GREATER_THAN_OR_EQUAL, bj_TOD_DAWN)\r\n\
    call TriggerRegisterGameStateEvent(bj_dncSoundsDay,   GAME_STATE_TIME_OF_DAY, LESS_THAN,             bj_TOD_DUSK)\r\n\
    call TriggerAddAction(bj_dncSoundsDay, function SetDNCSoundsDay)\r\n\
\r\n\
    set bj_dncSoundsNight = CreateTrigger()\r\n\
    call TriggerRegisterGameStateEvent(bj_dncSoundsNight, GAME_STATE_TIME_OF_DAY, LESS_THAN,             bj_TOD_DAWN)\r\n\
    call TriggerRegisterGameStateEvent(bj_dncSoundsNight, GAME_STATE_TIME_OF_DAY, GREATER_THAN_OR_EQUAL, bj_TOD_DUSK)\r\n\
    call TriggerAddAction(bj_dncSoundsNight, function SetDNCSoundsNight)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function InitBlizzardGlobals takes nothing returns nothing\r\n\
    local integer index\r\n\
    local integer userControlledPlayers\r\n\
    local version v\r\n\
\r\n\
    // Init filter function vars\r\n\
    set filterIssueHauntOrderAtLocBJ = Filter(function IssueHauntOrderAtLocBJFilter)\r\n\
    set filterEnumDestructablesInCircleBJ = Filter(function EnumDestructablesInCircleBJFilter)\r\n\
    set filterGetUnitsInRectOfPlayer = Filter(function GetUnitsInRectOfPlayerFilter)\r\n\
    set filterGetUnitsOfTypeIdAll = Filter(function GetUnitsOfTypeIdAllFilter)\r\n\
    set filterGetUnitsOfPlayerAndTypeId = Filter(function GetUnitsOfPlayerAndTypeIdFilter)\r\n\
    set filterMeleeTrainedUnitIsHeroBJ = Filter(function MeleeTrainedUnitIsHeroBJFilter)\r\n\
    set filterLivingPlayerUnitsOfTypeId = Filter(function LivingPlayerUnitsOfTypeIdFilter)\r\n\
\r\n\
    // Init force presets\r\n\
    set index = 0\r\n\
    loop\r\n\
        exitwhen index == bj_MAX_PLAYER_SLOTS\r\n\
        set bj_FORCE_PLAYER[index] = CreateForce()\r\n\
        call ForceAddPlayer(bj_FORCE_PLAYER[index], Player(index))\r\n\
        set index = index + 1\r\n\
    endloop\r\n\
\r\n\
    set bj_FORCE_ALL_PLAYERS = CreateForce()\r\n\
    call ForceEnumPlayers(bj_FORCE_ALL_PLAYERS, null)\r\n\
\r\n\
    // Init Cinematic Mode history\r\n\
    set bj_cineModePriorSpeed = GetGameSpeed()\r\n\
    set bj_cineModePriorFogSetting = IsFogEnabled()\r\n\
    set bj_cineModePriorMaskSetting = IsFogMaskEnabled()\r\n\
\r\n\
    // Init Trigger Queue\r\n\
    set index = 0\r\n\
    loop\r\n\
        exitwhen index >= bj_MAX_QUEUED_TRIGGERS\r\n\
        set bj_queuedExecTriggers[index] = null\r\n\
        set bj_queuedExecUseConds[index] = false\r\n\
        set index = index + 1\r\n\
    endloop\r\n\
\r\n\
    // Init singleplayer check\r\n\
    set bj_isSinglePlayer = false\r\n\
    set userControlledPlayers = 0\r\n\
    set index = 0\r\n\
    loop\r\n\
        exitwhen index >= bj_MAX_PLAYERS\r\n\
        if (GetPlayerController(Player(index)) == MAP_CONTROL_USER and GetPlayerSlotState(Player(index)) == PLAYER_SLOT_STATE_PLAYING) then\r\n\
            set userControlledPlayers = userControlledPlayers + 1\r\n\
        endif\r\n\
        set index = index + 1\r\n\
    endloop\r\n\
    set bj_isSinglePlayer = (userControlledPlayers == 1)\r\n\
\r\n\
    // Init sounds\r\n\
    //set bj_pingMinimapSound = CreateSoundFromLabel(\"AutoCastButtonClick\", false, false, false, 10000, 10000)\r\n\
    set bj_rescueSound = CreateSoundFromLabel(\"Rescue\", false, false, false, 10000, 10000)\r\n\
    set bj_questDiscoveredSound = CreateSoundFromLabel(\"QuestNew\", false, false, false, 10000, 10000)\r\n\
    set bj_questUpdatedSound = CreateSoundFromLabel(\"QuestUpdate\", false, false, false, 10000, 10000)\r\n\
    set bj_questCompletedSound = CreateSoundFromLabel(\"QuestCompleted\", false, false, false, 10000, 10000)\r\n\
    set bj_questFailedSound = CreateSoundFromLabel(\"QuestFailed\", false, false, false, 10000, 10000)\r\n\
    set bj_questHintSound = CreateSoundFromLabel(\"Hint\", false, false, false, 10000, 10000)\r\n\
    set bj_questSecretSound = CreateSoundFromLabel(\"SecretFound\", false, false, false, 10000, 10000)\r\n\
    set bj_questItemAcquiredSound = CreateSoundFromLabel(\"ItemReward\", false, false, false, 10000, 10000)\r\n\
    set bj_questWarningSound = CreateSoundFromLabel(\"Warning\", false, false, false, 10000, 10000)\r\n\
    set bj_victoryDialogSound = CreateSoundFromLabel(\"QuestCompleted\", false, false, false, 10000, 10000)\r\n\
    set bj_defeatDialogSound = CreateSoundFromLabel(\"QuestFailed\", false, false, false, 10000, 10000)\r\n\
\r\n\
    // Init corpse creation triggers.\r\n\
    call DelayedSuspendDecayCreate()\r\n\
\r\n\
    // Init version-specific data\r\n\
    set v = VersionGet()\r\n\
    if (v == VERSION_REIGN_OF_CHAOS) then\r\n\
        set bj_MELEE_MAX_TWINKED_HEROES = bj_MELEE_MAX_TWINKED_HEROES_V0\r\n\
    else\r\n\
        set bj_MELEE_MAX_TWINKED_HEROES = bj_MELEE_MAX_TWINKED_HEROES_V1\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function InitQueuedTriggers takes nothing returns nothing\r\n\
    set bj_queuedExecTimeout = CreateTrigger()\r\n\
    call TriggerRegisterTimerExpireEvent(bj_queuedExecTimeout, bj_queuedExecTimeoutTimer)\r\n\
    call TriggerAddAction(bj_queuedExecTimeout, function QueuedTriggerDoneBJ)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function InitMapRects takes nothing returns nothing\r\n\
    set bj_mapInitialPlayableArea = Rect(GetCameraBoundMinX()-GetCameraMargin(CAMERA_MARGIN_LEFT), GetCameraBoundMinY()-GetCameraMargin(CAMERA_MARGIN_BOTTOM), GetCameraBoundMaxX()+GetCameraMargin(CAMERA_MARGIN_RIGHT), GetCameraBoundMaxY()+GetCameraMargin(CAMERA_MARGIN_TOP))\r\n\
    set bj_mapInitialCameraBounds = GetCurrentCameraBoundsMapRectBJ()\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function InitSummonableCaps takes nothing returns nothing\r\n\
    local integer index\r\n\
\r\n\
    set index = 0\r\n\
    loop\r\n\
        // upgraded units\r\n\
        // Note: Only do this if the corresponding upgrade is not yet researched\r\n\
        // Barrage - Siege Engines\r\n\
        if (not GetPlayerTechResearched(Player(index), 'Rhrt', true)) then\r\n\
            call SetPlayerTechMaxAllowed(Player(index), 'hrtt', 0)\r\n\
        endif\r\n\
\r\n\
        // Berserker Upgrade - Troll Berserkers\r\n\
        if (not GetPlayerTechResearched(Player(index), 'Robk', true)) then\r\n\
            call SetPlayerTechMaxAllowed(Player(index), 'otbk', 0)\r\n\
        endif\r\n\
\r\n\
        // max skeletons per player\r\n\
        call SetPlayerTechMaxAllowed(Player(index), 'uske', bj_MAX_SKELETONS)\r\n\
\r\n\
        set index = index + 1\r\n\
        exitwhen index == bj_MAX_PLAYERS\r\n\
    endloop\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Update the per-class stock limits.\r\n\
//\r\n\
function UpdateStockAvailability takes item whichItem returns nothing\r\n\
    local itemtype iType  = GetItemType(whichItem)\r\n\
    local integer  iLevel = GetItemLevel(whichItem)\r\n\
\r\n\
    // Update allowed type/level combinations.\r\n\
    if (iType == ITEM_TYPE_PERMANENT) then\r\n\
        set bj_stockAllowedPermanent[iLevel] = true\r\n\
    elseif (iType == ITEM_TYPE_CHARGED) then\r\n\
        set bj_stockAllowedCharged[iLevel] = true\r\n\
    elseif (iType == ITEM_TYPE_ARTIFACT) then\r\n\
        set bj_stockAllowedArtifact[iLevel] = true\r\n\
    else\r\n\
        // Not interested in this item type - ignore the item.\r\n\
    endif\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Find a sellable item of the given type and level, and then add it.\r\n\
//\r\n\
function UpdateEachStockBuildingEnum takes nothing returns nothing\r\n\
    local integer iteration = 0\r\n\
    local integer pickedItemId\r\n\
\r\n\
    loop\r\n\
        set pickedItemId = ChooseRandomItemEx(bj_stockPickedItemType, bj_stockPickedItemLevel)\r\n\
        exitwhen IsItemIdSellable(pickedItemId)\r\n\
\r\n\
        // If we get hung up on an entire class/level combo of unsellable\r\n\
        // items, or a very unlucky series of random numbers, give up.\r\n\
        set iteration = iteration + 1\r\n\
        if (iteration > bj_STOCK_MAX_ITERATIONS) then\r\n\
            return\r\n\
        endif\r\n\
    endloop\r\n\
    call AddItemToStock(GetEnumUnit(), pickedItemId, 1, 1)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function UpdateEachStockBuilding takes itemtype iType, integer iLevel returns nothing\r\n\
    local group g\r\n\
\r\n\
    set bj_stockPickedItemType = iType\r\n\
    set bj_stockPickedItemLevel = iLevel\r\n\
\r\n\
    set g = CreateGroup()\r\n\
    call GroupEnumUnitsOfType(g, \"marketplace\", null)\r\n\
    call ForGroup(g, function UpdateEachStockBuildingEnum)\r\n\
    call DestroyGroup(g)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Update stock inventory.\r\n\
//\r\n\
function PerformStockUpdates takes nothing returns nothing\r\n\
    local integer  pickedItemId\r\n\
    local itemtype pickedItemType\r\n\
    local integer  pickedItemLevel = 0\r\n\
    local integer  allowedCombinations = 0\r\n\
    local integer  iLevel\r\n\
\r\n\
    // Give each type/level combination a chance of being picked.\r\n\
    set iLevel = 1\r\n\
    loop\r\n\
        if (bj_stockAllowedPermanent[iLevel]) then\r\n\
            set allowedCombinations = allowedCombinations + 1\r\n\
            if (GetRandomInt(1, allowedCombinations) == 1) then\r\n\
                set pickedItemType = ITEM_TYPE_PERMANENT\r\n\
                set pickedItemLevel = iLevel\r\n\
            endif\r\n\
        endif\r\n\
        if (bj_stockAllowedCharged[iLevel]) then\r\n\
            set allowedCombinations = allowedCombinations + 1\r\n\
            if (GetRandomInt(1, allowedCombinations) == 1) then\r\n\
                set pickedItemType = ITEM_TYPE_CHARGED\r\n\
                set pickedItemLevel = iLevel\r\n\
            endif\r\n\
        endif\r\n\
        if (bj_stockAllowedArtifact[iLevel]) then\r\n\
            set allowedCombinations = allowedCombinations + 1\r\n\
            if (GetRandomInt(1, allowedCombinations) == 1) then\r\n\
                set pickedItemType = ITEM_TYPE_ARTIFACT\r\n\
                set pickedItemLevel = iLevel\r\n\
            endif\r\n\
        endif\r\n\
\r\n\
        set iLevel = iLevel + 1\r\n\
        exitwhen iLevel > bj_MAX_ITEM_LEVEL\r\n\
    endloop\r\n\
\r\n\
    // Make sure we found a valid item type to add.\r\n\
    if (allowedCombinations == 0) then\r\n\
        return\r\n\
    endif\r\n\
\r\n\
    call UpdateEachStockBuilding(pickedItemType, pickedItemLevel)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
// Perform the first update, and then arrange future updates.\r\n\
//\r\n\
function StartStockUpdates takes nothing returns nothing\r\n\
    call PerformStockUpdates()\r\n\
    call TimerStart(bj_stockUpdateTimer, bj_STOCK_RESTOCK_INTERVAL, true, function PerformStockUpdates)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function RemovePurchasedItem takes nothing returns nothing\r\n\
    call RemoveItemFromStock(GetSellingUnit(), GetItemTypeId(GetSoldItem()))\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function InitNeutralBuildings takes nothing returns nothing\r\n\
    local integer iLevel\r\n\
\r\n\
    // Chart of allowed stock items.\r\n\
    set iLevel = 0\r\n\
    loop\r\n\
        set bj_stockAllowedPermanent[iLevel] = false\r\n\
        set bj_stockAllowedCharged[iLevel] = false\r\n\
        set bj_stockAllowedArtifact[iLevel] = false\r\n\
        set iLevel = iLevel + 1\r\n\
        exitwhen iLevel > bj_MAX_ITEM_LEVEL\r\n\
    endloop\r\n\
\r\n\
    // Limit stock inventory slots.\r\n\
    call SetAllItemTypeSlots(bj_MAX_STOCK_ITEM_SLOTS)\r\n\
    call SetAllUnitTypeSlots(bj_MAX_STOCK_UNIT_SLOTS)\r\n\
\r\n\
    // Arrange the first update.\r\n\
    set bj_stockUpdateTimer = CreateTimer()\r\n\
    call TimerStart(bj_stockUpdateTimer, bj_STOCK_RESTOCK_INITIAL_DELAY, false, function StartStockUpdates)\r\n\
\r\n\
    // Set up a trigger to fire whenever an item is sold.\r\n\
    set bj_stockItemPurchased = CreateTrigger()\r\n\
    call TriggerRegisterPlayerUnitEvent(bj_stockItemPurchased, Player(PLAYER_NEUTRAL_PASSIVE), EVENT_PLAYER_UNIT_SELL_ITEM, null)\r\n\
    call TriggerAddAction(bj_stockItemPurchased, function RemovePurchasedItem)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function MarkGameStarted takes nothing returns nothing\r\n\
    set bj_gameStarted = true\r\n\
    call DestroyTimer(bj_gameStartedTimer)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function DetectGameStarted takes nothing returns nothing\r\n\
    set bj_gameStartedTimer = CreateTimer()\r\n\
    call TimerStart(bj_gameStartedTimer, bj_GAME_STARTED_THRESHOLD, false, function MarkGameStarted)\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function InitBlizzard takes nothing returns nothing\r\n\
    // Set up the Neutral Victim player slot, to torture the abandoned units\r\n\
    // of defeated players.  Since some triggers expect this player slot to\r\n\
    // exist, this is performed for all maps.\r\n\
    call ConfigureNeutralVictim()\r\n\
\r\n\
    call InitBlizzardGlobals()\r\n\
    call InitQueuedTriggers()\r\n\
    call InitRescuableBehaviorBJ()\r\n\
    call InitDNCSounds()\r\n\
    call InitMapRects()\r\n\
    call InitSummonableCaps()\r\n\
    call InitNeutralBuildings()\r\n\
    call DetectGameStarted()\r\n\
endfunction\r\n\
\r\n\
\r\n\
\r\n\
//***************************************************************************\r\n\
//*\r\n\
//*  Random distribution\r\n\
//*\r\n\
//*  Used to select a random object from a given distribution of chances\r\n\
//*\r\n\
//*  - RandomDistReset clears the distribution list\r\n\
//*\r\n\
//*  - RandomDistAddItem adds a new object to the distribution list\r\n\
//*    with a given identifier and an integer chance to be chosen\r\n\
//*\r\n\
//*  - RandomDistChoose will use the current distribution list to choose\r\n\
//*    one of the objects randomly based on the chance distribution\r\n\
//*  \r\n\
//*  Note that the chances are effectively normalized by their sum,\r\n\
//*  so only the relative values of each chance are important\r\n\
//*\r\n\
//***************************************************************************\r\n\
\r\n\
//===========================================================================\r\n\
function RandomDistReset takes nothing returns nothing\r\n\
    set bj_randDistCount = 0\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function RandomDistAddItem takes integer inID, integer inChance returns nothing\r\n\
    set bj_randDistID[bj_randDistCount] = inID\r\n\
    set bj_randDistChance[bj_randDistCount] = inChance\r\n\
    set bj_randDistCount = bj_randDistCount + 1\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function RandomDistChoose takes nothing returns integer\r\n\
    local integer sum = 0\r\n\
    local integer chance = 0\r\n\
    local integer index\r\n\
    local integer foundID = -1\r\n\
    local boolean done\r\n\
\r\n\
    // No items?\r\n\
    if (bj_randDistCount == 0) then\r\n\
        return -1\r\n\
    endif\r\n\
\r\n\
    // Find sum of all chances\r\n\
    set index = 0\r\n\
    loop\r\n\
        set sum = sum + bj_randDistChance[index]\r\n\
\r\n\
        set index = index + 1\r\n\
        exitwhen index == bj_randDistCount\r\n\
    endloop\r\n\
\r\n\
    // Choose random number within the total range\r\n\
    set chance = GetRandomInt(1, sum)\r\n\
\r\n\
    // Find ID which corresponds to this chance\r\n\
    set index = 0\r\n\
    set sum = 0\r\n\
    set done = false\r\n\
    loop\r\n\
        set sum = sum + bj_randDistChance[index]\r\n\
\r\n\
        if (chance <= sum) then\r\n\
            set foundID = bj_randDistID[index]\r\n\
            set done = true\r\n\
        endif\r\n\
\r\n\
        set index = index + 1\r\n\
        if (index == bj_randDistCount) then\r\n\
            set done = true\r\n\
        endif\r\n\
\r\n\
        exitwhen done == true\r\n\
    endloop\r\n\
\r\n\
    return foundID\r\n\
endfunction\r\n\
\r\n\
\r\n\
\r\n\
//***************************************************************************\r\n\
//*\r\n\
//*  Drop item\r\n\
//*\r\n\
//*  Makes the given unit drop the given item\r\n\
//*\r\n\
//*  Note: This could potentially cause problems if the unit is standing\r\n\
//*        right on the edge of an unpathable area and happens to drop the\r\n\
//*        item into the unpathable area where nobody can get it...\r\n\
//*\r\n\
//***************************************************************************\r\n\
\r\n\
function UnitDropItem takes unit inUnit, integer inItemID returns item\r\n\
    local real x\r\n\
    local real y\r\n\
    local real radius = 32\r\n\
    local real unitX\r\n\
    local real unitY\r\n\
    local item droppedItem\r\n\
\r\n\
    if (inItemID == -1) then\r\n\
        return null\r\n\
    endif\r\n\
\r\n\
    set unitX = GetUnitX(inUnit)\r\n\
    set unitY = GetUnitY(inUnit)\r\n\
\r\n\
    set x = GetRandomReal(unitX - radius, unitX + radius)\r\n\
    set y = GetRandomReal(unitY - radius, unitY + radius)\r\n\
\r\n\
    set droppedItem = CreateItem(inItemID, x, y)\r\n\
\r\n\
    call SetItemDropID(droppedItem, GetUnitTypeId(inUnit))\r\n\
    call UpdateStockAvailability(droppedItem)\r\n\
\r\n\
    return droppedItem\r\n\
endfunction\r\n\
\r\n\
//===========================================================================\r\n\
function WidgetDropItem takes widget inWidget, integer inItemID returns item\r\n\
    local real x\r\n\
    local real y\r\n\
    local real radius = 32\r\n\
    local real widgetX\r\n\
    local real widgetY\r\n\
\r\n\
    if (inItemID == -1) then\r\n\
        return null\r\n\
    endif\r\n\
\r\n\
    set widgetX = GetWidgetX(inWidget)\r\n\
    set widgetY = GetWidgetY(inWidget)\r\n\
\r\n\
    set x = GetRandomReal(widgetX - radius, widgetX + radius)\r\n\
    set y = GetRandomReal(widgetY - radius, widgetY + radius)\r\n\
\r\n\
    return CreateItem(inItemID, x, y)\r\n\
endfunction\r\n\
//============================================================================\r\n\
// Native types. All native functions take extended handle types when\r\n\
// possible to help prevent passing bad values to native functions\r\n\
//\r\n\
type agent			    extends     handle  // all reference counted objects\r\n\
type event              extends     agent  // a reference to an event registration\r\n\
type player             extends     agent  // a single player reference\r\n\
type widget             extends     agent  // an interactive game object with life\r\n\
type unit               extends     widget  // a single unit reference\r\n\
type destructable       extends     widget\r\n\
type item               extends     widget\r\n\
type ability            extends     agent\r\n\
type buff               extends     ability\r\n\
type force              extends     agent\r\n\
type group              extends     agent\r\n\
type trigger            extends     agent\r\n\
type triggercondition   extends     agent\r\n\
type triggeraction      extends     handle\r\n\
type timer              extends     agent\r\n\
type location           extends     agent\r\n\
type region             extends     agent\r\n\
type rect               extends     agent\r\n\
type boolexpr           extends     agent\r\n\
type sound              extends     agent\r\n\
type conditionfunc      extends     boolexpr\r\n\
type filterfunc         extends     boolexpr\r\n\
type unitpool           extends     handle\r\n\
type itempool           extends     handle\r\n\
type race               extends     handle\r\n\
type alliancetype       extends     handle\r\n\
type racepreference     extends     handle\r\n\
type gamestate          extends     handle\r\n\
type igamestate         extends     gamestate\r\n\
type fgamestate         extends     gamestate\r\n\
type playerstate        extends     handle\r\n\
type playerscore        extends     handle\r\n\
type playergameresult   extends     handle\r\n\
type unitstate          extends     handle\r\n\
type aidifficulty       extends     handle\r\n\
\r\n\
type eventid            extends     handle\r\n\
type gameevent          extends     eventid\r\n\
type playerevent        extends     eventid\r\n\
type playerunitevent    extends     eventid\r\n\
type unitevent          extends     eventid\r\n\
type limitop            extends     eventid\r\n\
type widgetevent        extends     eventid\r\n\
type dialogevent        extends     eventid\r\n\
type unittype           extends     handle\r\n\
\r\n\
type gamespeed          extends     handle\r\n\
type gamedifficulty     extends     handle\r\n\
type gametype           extends     handle\r\n\
type mapflag            extends     handle\r\n\
type mapvisibility      extends     handle\r\n\
type mapsetting         extends     handle\r\n\
type mapdensity         extends     handle\r\n\
type mapcontrol         extends     handle\r\n\
type playerslotstate    extends     handle\r\n\
type volumegroup        extends     handle\r\n\
type camerafield        extends     handle\r\n\
type camerasetup        extends     handle\r\n\
type playercolor        extends     handle\r\n\
type placement          extends     handle\r\n\
type startlocprio       extends     handle\r\n\
type raritycontrol      extends     handle\r\n\
type blendmode          extends     handle\r\n\
type texmapflags        extends     handle\r\n\
type effect             extends     agent\r\n\
type effecttype         extends     handle\r\n\
type weathereffect      extends     handle\r\n\
type terraindeformation extends     handle\r\n\
type fogstate           extends     handle\r\n\
type fogmodifier        extends     agent\r\n\
type dialog             extends     agent\r\n\
type button             extends     agent\r\n\
type quest              extends     agent\r\n\
type questitem          extends     agent\r\n\
type defeatcondition    extends     agent\r\n\
type timerdialog        extends     agent\r\n\
type leaderboard        extends     agent\r\n\
type multiboard         extends     agent\r\n\
type multiboarditem     extends     agent\r\n\
type trackable          extends     agent\r\n\
type gamecache          extends     agent\r\n\
type version            extends     handle\r\n\
type itemtype           extends     handle\r\n\
type texttag            extends     handle\r\n\
type attacktype         extends     handle\r\n\
type damagetype         extends     handle\r\n\
type weapontype         extends     handle\r\n\
type soundtype          extends     handle\r\n\
type lightning          extends     handle\r\n\
type pathingtype        extends     handle\r\n\
type image              extends     handle\r\n\
type ubersplat          extends     handle\r\n\
type hashtable          extends     agent\r\n\
\r\n\
constant native ConvertRace                 takes integer i returns race\r\n\
constant native ConvertAllianceType         takes integer i returns alliancetype\r\n\
constant native ConvertRacePref             takes integer i returns racepreference\r\n\
constant native ConvertIGameState           takes integer i returns igamestate\r\n\
constant native ConvertFGameState           takes integer i returns fgamestate\r\n\
constant native ConvertPlayerState          takes integer i returns playerstate\r\n\
constant native ConvertPlayerScore          takes integer i returns playerscore\r\n\
constant native ConvertPlayerGameResult     takes integer i returns playergameresult\r\n\
constant native ConvertUnitState            takes integer i returns unitstate\r\n\
constant native ConvertAIDifficulty         takes integer i returns aidifficulty\r\n\
constant native ConvertGameEvent            takes integer i returns gameevent\r\n\
constant native ConvertPlayerEvent          takes integer i returns playerevent\r\n\
constant native ConvertPlayerUnitEvent      takes integer i returns playerunitevent\r\n\
constant native ConvertWidgetEvent          takes integer i returns widgetevent\r\n\
constant native ConvertDialogEvent          takes integer i returns dialogevent\r\n\
constant native ConvertUnitEvent            takes integer i returns unitevent\r\n\
constant native ConvertLimitOp              takes integer i returns limitop\r\n\
constant native ConvertUnitType             takes integer i returns unittype\r\n\
constant native ConvertGameSpeed            takes integer i returns gamespeed\r\n\
constant native ConvertPlacement            takes integer i returns placement\r\n\
constant native ConvertStartLocPrio         takes integer i returns startlocprio\r\n\
constant native ConvertGameDifficulty       takes integer i returns gamedifficulty\r\n\
constant native ConvertGameType             takes integer i returns gametype\r\n\
constant native ConvertMapFlag              takes integer i returns mapflag\r\n\
constant native ConvertMapVisibility        takes integer i returns mapvisibility\r\n\
constant native ConvertMapSetting           takes integer i returns mapsetting\r\n\
constant native ConvertMapDensity           takes integer i returns mapdensity\r\n\
constant native ConvertMapControl           takes integer i returns mapcontrol\r\n\
constant native ConvertPlayerColor          takes integer i returns playercolor\r\n\
constant native ConvertPlayerSlotState      takes integer i returns playerslotstate\r\n\
constant native ConvertVolumeGroup          takes integer i returns volumegroup\r\n\
constant native ConvertCameraField          takes integer i returns camerafield\r\n\
constant native ConvertBlendMode            takes integer i returns blendmode\r\n\
constant native ConvertRarityControl        takes integer i returns raritycontrol\r\n\
constant native ConvertTexMapFlags          takes integer i returns texmapflags\r\n\
constant native ConvertFogState             takes integer i returns fogstate\r\n\
constant native ConvertEffectType           takes integer i returns effecttype\r\n\
constant native ConvertVersion              takes integer i returns version\r\n\
constant native ConvertItemType             takes integer i returns itemtype\r\n\
constant native ConvertAttackType           takes integer i returns attacktype\r\n\
constant native ConvertDamageType           takes integer i returns damagetype\r\n\
constant native ConvertWeaponType           takes integer i returns weapontype\r\n\
constant native ConvertSoundType            takes integer i returns soundtype\r\n\
constant native ConvertPathingType          takes integer i returns pathingtype\r\n\
\r\n\
constant native OrderId                     takes string  orderIdString     returns integer\r\n\
constant native OrderId2String              takes integer orderId           returns string\r\n\
constant native UnitId                      takes string  unitIdString      returns integer\r\n\
constant native UnitId2String               takes integer unitId            returns string\r\n\
\r\n\
// Not currently working correctly...\r\n\
constant native AbilityId                   takes string  abilityIdString   returns integer\r\n\
constant native AbilityId2String            takes integer abilityId         returns string\r\n\
\r\n\
// Looks up the \"name\" field for any object (unit, item, ability)\r\n\
constant native GetObjectName               takes integer objectId          returns string\r\n\
\r\n\
globals\r\n\
\r\n\
//===================================================\r\n\
// Game Constants    \r\n\
//===================================================\r\n\
\r\n\
    // pfff\r\n\
    constant boolean            FALSE                           = false\r\n\
    constant boolean            TRUE                            = true\r\n\
    constant integer            JASS_MAX_ARRAY_SIZE             = 8192\r\n\
\r\n\
    constant integer            PLAYER_NEUTRAL_PASSIVE          = 15\r\n\
    constant integer            PLAYER_NEUTRAL_AGGRESSIVE       = 12\r\n\
\r\n\
    constant playercolor        PLAYER_COLOR_RED                = ConvertPlayerColor(0)\r\n\
    constant playercolor        PLAYER_COLOR_BLUE               = ConvertPlayerColor(1)\r\n\
    constant playercolor        PLAYER_COLOR_CYAN               = ConvertPlayerColor(2)\r\n\
    constant playercolor        PLAYER_COLOR_PURPLE             = ConvertPlayerColor(3)\r\n\
    constant playercolor        PLAYER_COLOR_YELLOW             = ConvertPlayerColor(4)\r\n\
    constant playercolor        PLAYER_COLOR_ORANGE             = ConvertPlayerColor(5)\r\n\
    constant playercolor        PLAYER_COLOR_GREEN              = ConvertPlayerColor(6)\r\n\
    constant playercolor        PLAYER_COLOR_PINK               = ConvertPlayerColor(7)\r\n\
    constant playercolor        PLAYER_COLOR_LIGHT_GRAY         = ConvertPlayerColor(8)\r\n\
    constant playercolor        PLAYER_COLOR_LIGHT_BLUE         = ConvertPlayerColor(9)\r\n\
    constant playercolor        PLAYER_COLOR_AQUA               = ConvertPlayerColor(10)\r\n\
    constant playercolor        PLAYER_COLOR_BROWN              = ConvertPlayerColor(11)\r\n\
\r\n\
    constant race               RACE_HUMAN                      = ConvertRace(1)\r\n\
    constant race               RACE_ORC                        = ConvertRace(2)\r\n\
    constant race               RACE_UNDEAD                     = ConvertRace(3)\r\n\
    constant race               RACE_NIGHTELF                   = ConvertRace(4)\r\n\
    constant race               RACE_DEMON                      = ConvertRace(5)\r\n\
    constant race               RACE_OTHER                      = ConvertRace(7)\r\n\
\r\n\
    constant playergameresult   PLAYER_GAME_RESULT_VICTORY      = ConvertPlayerGameResult(0)\r\n\
    constant playergameresult   PLAYER_GAME_RESULT_DEFEAT       = ConvertPlayerGameResult(1)\r\n\
    constant playergameresult   PLAYER_GAME_RESULT_TIE          = ConvertPlayerGameResult(2)\r\n\
    constant playergameresult   PLAYER_GAME_RESULT_NEUTRAL      = ConvertPlayerGameResult(3)\r\n\
\r\n\
    constant alliancetype       ALLIANCE_PASSIVE                = ConvertAllianceType(0)\r\n\
    constant alliancetype       ALLIANCE_HELP_REQUEST           = ConvertAllianceType(1)\r\n\
    constant alliancetype       ALLIANCE_HELP_RESPONSE          = ConvertAllianceType(2)\r\n\
    constant alliancetype       ALLIANCE_SHARED_XP              = ConvertAllianceType(3)\r\n\
    constant alliancetype       ALLIANCE_SHARED_SPELLS          = ConvertAllianceType(4)\r\n\
    constant alliancetype       ALLIANCE_SHARED_VISION          = ConvertAllianceType(5)\r\n\
    constant alliancetype       ALLIANCE_SHARED_CONTROL         = ConvertAllianceType(6)\r\n\
    constant alliancetype       ALLIANCE_SHARED_ADVANCED_CONTROL= ConvertAllianceType(7)\r\n\
    constant alliancetype       ALLIANCE_RESCUABLE              = ConvertAllianceType(8)\r\n\
    constant alliancetype       ALLIANCE_SHARED_VISION_FORCED   = ConvertAllianceType(9)\r\n\
\r\n\
    constant version            VERSION_REIGN_OF_CHAOS          = ConvertVersion(0)\r\n\
    constant version            VERSION_FROZEN_THRONE           = ConvertVersion(1)\r\n\
\r\n\
    constant attacktype         ATTACK_TYPE_NORMAL              = ConvertAttackType(0)\r\n\
    constant attacktype         ATTACK_TYPE_MELEE               = ConvertAttackType(1)\r\n\
    constant attacktype         ATTACK_TYPE_PIERCE              = ConvertAttackType(2)\r\n\
    constant attacktype         ATTACK_TYPE_SIEGE               = ConvertAttackType(3)\r\n\
    constant attacktype         ATTACK_TYPE_MAGIC               = ConvertAttackType(4)\r\n\
    constant attacktype         ATTACK_TYPE_CHAOS               = ConvertAttackType(5)\r\n\
    constant attacktype         ATTACK_TYPE_HERO                = ConvertAttackType(6)\r\n\
\r\n\
    constant damagetype         DAMAGE_TYPE_UNKNOWN             = ConvertDamageType(0)\r\n\
    constant damagetype         DAMAGE_TYPE_NORMAL              = ConvertDamageType(4)\r\n\
    constant damagetype         DAMAGE_TYPE_ENHANCED            = ConvertDamageType(5)\r\n\
    constant damagetype         DAMAGE_TYPE_FIRE                = ConvertDamageType(8)\r\n\
    constant damagetype         DAMAGE_TYPE_COLD                = ConvertDamageType(9)\r\n\
    constant damagetype         DAMAGE_TYPE_LIGHTNING           = ConvertDamageType(10)\r\n\
    constant damagetype         DAMAGE_TYPE_POISON              = ConvertDamageType(11)\r\n\
    constant damagetype         DAMAGE_TYPE_DISEASE             = ConvertDamageType(12)\r\n\
    constant damagetype         DAMAGE_TYPE_DIVINE              = ConvertDamageType(13)\r\n\
    constant damagetype         DAMAGE_TYPE_MAGIC               = ConvertDamageType(14)\r\n\
    constant damagetype         DAMAGE_TYPE_SONIC               = ConvertDamageType(15)\r\n\
    constant damagetype         DAMAGE_TYPE_ACID                = ConvertDamageType(16)\r\n\
    constant damagetype         DAMAGE_TYPE_FORCE               = ConvertDamageType(17)\r\n\
    constant damagetype         DAMAGE_TYPE_DEATH               = ConvertDamageType(18)\r\n\
    constant damagetype         DAMAGE_TYPE_MIND                = ConvertDamageType(19)\r\n\
    constant damagetype         DAMAGE_TYPE_PLANT               = ConvertDamageType(20)\r\n\
    constant damagetype         DAMAGE_TYPE_DEFENSIVE           = ConvertDamageType(21)\r\n\
    constant damagetype         DAMAGE_TYPE_DEMOLITION          = ConvertDamageType(22)\r\n\
    constant damagetype         DAMAGE_TYPE_SLOW_POISON         = ConvertDamageType(23)\r\n\
    constant damagetype         DAMAGE_TYPE_SPIRIT_LINK         = ConvertDamageType(24)\r\n\
    constant damagetype         DAMAGE_TYPE_SHADOW_STRIKE       = ConvertDamageType(25)\r\n\
    constant damagetype         DAMAGE_TYPE_UNIVERSAL           = ConvertDamageType(26)\r\n\
\r\n\
    constant weapontype         WEAPON_TYPE_WHOKNOWS            = ConvertWeaponType(0)\r\n\
    constant weapontype         WEAPON_TYPE_METAL_LIGHT_CHOP    = ConvertWeaponType(1)\r\n\
    constant weapontype         WEAPON_TYPE_METAL_MEDIUM_CHOP   = ConvertWeaponType(2)\r\n\
    constant weapontype         WEAPON_TYPE_METAL_HEAVY_CHOP    = ConvertWeaponType(3)\r\n\
    constant weapontype         WEAPON_TYPE_METAL_LIGHT_SLICE   = ConvertWeaponType(4)\r\n\
    constant weapontype         WEAPON_TYPE_METAL_MEDIUM_SLICE  = ConvertWeaponType(5)\r\n\
    constant weapontype         WEAPON_TYPE_METAL_HEAVY_SLICE   = ConvertWeaponType(6)\r\n\
    constant weapontype         WEAPON_TYPE_METAL_MEDIUM_BASH   = ConvertWeaponType(7)\r\n\
    constant weapontype         WEAPON_TYPE_METAL_HEAVY_BASH    = ConvertWeaponType(8)\r\n\
    constant weapontype         WEAPON_TYPE_METAL_MEDIUM_STAB   = ConvertWeaponType(9)\r\n\
    constant weapontype         WEAPON_TYPE_METAL_HEAVY_STAB    = ConvertWeaponType(10)\r\n\
    constant weapontype         WEAPON_TYPE_WOOD_LIGHT_SLICE    = ConvertWeaponType(11)\r\n\
    constant weapontype         WEAPON_TYPE_WOOD_MEDIUM_SLICE   = ConvertWeaponType(12)\r\n\
    constant weapontype         WEAPON_TYPE_WOOD_HEAVY_SLICE    = ConvertWeaponType(13)\r\n\
    constant weapontype         WEAPON_TYPE_WOOD_LIGHT_BASH     = ConvertWeaponType(14)\r\n\
    constant weapontype         WEAPON_TYPE_WOOD_MEDIUM_BASH    = ConvertWeaponType(15)\r\n\
    constant weapontype         WEAPON_TYPE_WOOD_HEAVY_BASH     = ConvertWeaponType(16)\r\n\
    constant weapontype         WEAPON_TYPE_WOOD_LIGHT_STAB     = ConvertWeaponType(17)\r\n\
    constant weapontype         WEAPON_TYPE_WOOD_MEDIUM_STAB    = ConvertWeaponType(18)\r\n\
    constant weapontype         WEAPON_TYPE_CLAW_LIGHT_SLICE    = ConvertWeaponType(19)\r\n\
    constant weapontype         WEAPON_TYPE_CLAW_MEDIUM_SLICE   = ConvertWeaponType(20)\r\n\
    constant weapontype         WEAPON_TYPE_CLAW_HEAVY_SLICE    = ConvertWeaponType(21)\r\n\
    constant weapontype         WEAPON_TYPE_AXE_MEDIUM_CHOP     = ConvertWeaponType(22)\r\n\
    constant weapontype         WEAPON_TYPE_ROCK_HEAVY_BASH     = ConvertWeaponType(23)\r\n\
\r\n\
    constant pathingtype        PATHING_TYPE_ANY                = ConvertPathingType(0)\r\n\
    constant pathingtype        PATHING_TYPE_WALKABILITY        = ConvertPathingType(1)\r\n\
    constant pathingtype        PATHING_TYPE_FLYABILITY         = ConvertPathingType(2)\r\n\
    constant pathingtype        PATHING_TYPE_BUILDABILITY       = ConvertPathingType(3)\r\n\
    constant pathingtype        PATHING_TYPE_PEONHARVESTPATHING = ConvertPathingType(4)\r\n\
    constant pathingtype        PATHING_TYPE_BLIGHTPATHING      = ConvertPathingType(5)\r\n\
    constant pathingtype        PATHING_TYPE_FLOATABILITY       = ConvertPathingType(6)\r\n\
    constant pathingtype        PATHING_TYPE_AMPHIBIOUSPATHING  = ConvertPathingType(7)\r\n\
\r\n\
//===================================================\r\n\
// Map Setup Constants    \r\n\
//===================================================\r\n\
\r\n\
    constant racepreference     RACE_PREF_HUMAN                     = ConvertRacePref(1)\r\n\
    constant racepreference     RACE_PREF_ORC                       = ConvertRacePref(2)\r\n\
    constant racepreference     RACE_PREF_NIGHTELF                  = ConvertRacePref(4)\r\n\
    constant racepreference     RACE_PREF_UNDEAD                    = ConvertRacePref(8)\r\n\
    constant racepreference     RACE_PREF_DEMON                     = ConvertRacePref(16)\r\n\
    constant racepreference     RACE_PREF_RANDOM                    = ConvertRacePref(32)\r\n\
    constant racepreference     RACE_PREF_USER_SELECTABLE           = ConvertRacePref(64)\r\n\
\r\n\
    constant mapcontrol         MAP_CONTROL_USER                    = ConvertMapControl(0)\r\n\
    constant mapcontrol         MAP_CONTROL_COMPUTER                = ConvertMapControl(1)\r\n\
    constant mapcontrol         MAP_CONTROL_RESCUABLE               = ConvertMapControl(2)\r\n\
    constant mapcontrol         MAP_CONTROL_NEUTRAL                 = ConvertMapControl(3)\r\n\
    constant mapcontrol         MAP_CONTROL_CREEP                   = ConvertMapControl(4)\r\n\
    constant mapcontrol         MAP_CONTROL_NONE                    = ConvertMapControl(5)\r\n\
\r\n\
    constant gametype           GAME_TYPE_MELEE                     = ConvertGameType(1)\r\n\
    constant gametype           GAME_TYPE_FFA                       = ConvertGameType(2)\r\n\
    constant gametype           GAME_TYPE_USE_MAP_SETTINGS          = ConvertGameType(4)\r\n\
    constant gametype           GAME_TYPE_BLIZ                      = ConvertGameType(8)\r\n\
    constant gametype           GAME_TYPE_ONE_ON_ONE                = ConvertGameType(16)\r\n\
    constant gametype           GAME_TYPE_TWO_TEAM_PLAY             = ConvertGameType(32)\r\n\
    constant gametype           GAME_TYPE_THREE_TEAM_PLAY           = ConvertGameType(64)\r\n\
    constant gametype           GAME_TYPE_FOUR_TEAM_PLAY            = ConvertGameType(128)\r\n\
\r\n\
    constant mapflag            MAP_FOG_HIDE_TERRAIN                = ConvertMapFlag(1)\r\n\
    constant mapflag            MAP_FOG_MAP_EXPLORED                = ConvertMapFlag(2)\r\n\
    constant mapflag            MAP_FOG_ALWAYS_VISIBLE              = ConvertMapFlag(4)\r\n\
\r\n\
    constant mapflag            MAP_USE_HANDICAPS                   = ConvertMapFlag(8)\r\n\
    constant mapflag            MAP_OBSERVERS                       = ConvertMapFlag(16)\r\n\
    constant mapflag            MAP_OBSERVERS_ON_DEATH              = ConvertMapFlag(32)\r\n\
\r\n\
    constant mapflag            MAP_FIXED_COLORS                    = ConvertMapFlag(128)\r\n\
    \r\n\
    constant mapflag            MAP_LOCK_RESOURCE_TRADING           = ConvertMapFlag(256)\r\n\
    constant mapflag            MAP_RESOURCE_TRADING_ALLIES_ONLY    = ConvertMapFlag(512)\r\n\
\r\n\
    constant mapflag            MAP_LOCK_ALLIANCE_CHANGES           = ConvertMapFlag(1024)\r\n\
    constant mapflag            MAP_ALLIANCE_CHANGES_HIDDEN         = ConvertMapFlag(2048)\r\n\
\r\n\
    constant mapflag            MAP_CHEATS                          = ConvertMapFlag(4096)\r\n\
    constant mapflag            MAP_CHEATS_HIDDEN                   = ConvertMapFlag(8192)\r\n\
\r\n\
    constant mapflag            MAP_LOCK_SPEED                      = ConvertMapFlag(8192*2)\r\n\
    constant mapflag            MAP_LOCK_RANDOM_SEED                = ConvertMapFlag(8192*4)\r\n\
    constant mapflag            MAP_SHARED_ADVANCED_CONTROL         = ConvertMapFlag(8192*8)\r\n\
    constant mapflag            MAP_RANDOM_HERO                     = ConvertMapFlag(8192*16)\r\n\
    constant mapflag            MAP_RANDOM_RACES                    = ConvertMapFlag(8192*32)\r\n\
    constant mapflag            MAP_RELOADED                        = ConvertMapFlag(8192*64)\r\n\
\r\n\
    constant placement          MAP_PLACEMENT_RANDOM                = ConvertPlacement(0)   // random among all slots\r\n\
    constant placement          MAP_PLACEMENT_FIXED                 = ConvertPlacement(1)   // player 0 in start loc 0...\r\n\
    constant placement          MAP_PLACEMENT_USE_MAP_SETTINGS      = ConvertPlacement(2)   // whatever was specified by the script\r\n\
    constant placement          MAP_PLACEMENT_TEAMS_TOGETHER        = ConvertPlacement(3)   // random with allies next to each other    \r\n\
\r\n\
    constant startlocprio       MAP_LOC_PRIO_LOW                    = ConvertStartLocPrio(0)\r\n\
    constant startlocprio       MAP_LOC_PRIO_HIGH                   = ConvertStartLocPrio(1)\r\n\
    constant startlocprio       MAP_LOC_PRIO_NOT                    = ConvertStartLocPrio(2)\r\n\
\r\n\
    constant mapdensity         MAP_DENSITY_NONE                    = ConvertMapDensity(0)\r\n\
    constant mapdensity         MAP_DENSITY_LIGHT                   = ConvertMapDensity(1)\r\n\
    constant mapdensity         MAP_DENSITY_MEDIUM                  = ConvertMapDensity(2)\r\n\
    constant mapdensity         MAP_DENSITY_HEAVY                   = ConvertMapDensity(3)\r\n\
\r\n\
    constant gamedifficulty     MAP_DIFFICULTY_EASY                 = ConvertGameDifficulty(0)\r\n\
    constant gamedifficulty     MAP_DIFFICULTY_NORMAL               = ConvertGameDifficulty(1)\r\n\
    constant gamedifficulty     MAP_DIFFICULTY_HARD                 = ConvertGameDifficulty(2)\r\n\
    constant gamedifficulty     MAP_DIFFICULTY_INSANE               = ConvertGameDifficulty(3)\r\n\
\r\n\
    constant gamespeed          MAP_SPEED_SLOWEST                   = ConvertGameSpeed(0)\r\n\
    constant gamespeed          MAP_SPEED_SLOW                      = ConvertGameSpeed(1)\r\n\
    constant gamespeed          MAP_SPEED_NORMAL                    = ConvertGameSpeed(2)\r\n\
    constant gamespeed          MAP_SPEED_FAST                      = ConvertGameSpeed(3)\r\n\
    constant gamespeed          MAP_SPEED_FASTEST                   = ConvertGameSpeed(4)\r\n\
\r\n\
    constant playerslotstate    PLAYER_SLOT_STATE_EMPTY             = ConvertPlayerSlotState(0)\r\n\
    constant playerslotstate    PLAYER_SLOT_STATE_PLAYING           = ConvertPlayerSlotState(1)\r\n\
    constant playerslotstate    PLAYER_SLOT_STATE_LEFT              = ConvertPlayerSlotState(2)\r\n\
\r\n\
//===================================================\r\n\
// Sound Constants\r\n\
//===================================================\r\n\
    constant volumegroup        SOUND_VOLUMEGROUP_UNITMOVEMENT      = ConvertVolumeGroup(0)\r\n\
    constant volumegroup        SOUND_VOLUMEGROUP_UNITSOUNDS        = ConvertVolumeGroup(1)\r\n\
    constant volumegroup        SOUND_VOLUMEGROUP_COMBAT            = ConvertVolumeGroup(2)\r\n\
    constant volumegroup        SOUND_VOLUMEGROUP_SPELLS            = ConvertVolumeGroup(3)\r\n\
    constant volumegroup        SOUND_VOLUMEGROUP_UI                = ConvertVolumeGroup(4)\r\n\
    constant volumegroup        SOUND_VOLUMEGROUP_MUSIC             = ConvertVolumeGroup(5)\r\n\
    constant volumegroup        SOUND_VOLUMEGROUP_AMBIENTSOUNDS     = ConvertVolumeGroup(6)\r\n\
    constant volumegroup        SOUND_VOLUMEGROUP_FIRE              = ConvertVolumeGroup(7)\r\n\
\r\n\
\r\n\
//===================================================\r\n\
// Game, Player, and Unit States\r\n\
//\r\n\
// For use with TriggerRegister<X>StateEvent\r\n\
//\r\n\
//===================================================\r\n\
\r\n\
    constant igamestate GAME_STATE_DIVINE_INTERVENTION          = ConvertIGameState(0)\r\n\
    constant igamestate GAME_STATE_DISCONNECTED                 = ConvertIGameState(1)\r\n\
    constant fgamestate GAME_STATE_TIME_OF_DAY                  = ConvertFGameState(2)\r\n\
\r\n\
    constant playerstate PLAYER_STATE_GAME_RESULT               = ConvertPlayerState(0)\r\n\
\r\n\
    // current resource levels\r\n\
    //\r\n\
    constant playerstate PLAYER_STATE_RESOURCE_GOLD             = ConvertPlayerState(1)\r\n\
    constant playerstate PLAYER_STATE_RESOURCE_LUMBER           = ConvertPlayerState(2)\r\n\
    constant playerstate PLAYER_STATE_RESOURCE_HERO_TOKENS      = ConvertPlayerState(3)\r\n\
    constant playerstate PLAYER_STATE_RESOURCE_FOOD_CAP         = ConvertPlayerState(4)\r\n\
    constant playerstate PLAYER_STATE_RESOURCE_FOOD_USED        = ConvertPlayerState(5)\r\n\
    constant playerstate PLAYER_STATE_FOOD_CAP_CEILING          = ConvertPlayerState(6)\r\n\
\r\n\
    constant playerstate PLAYER_STATE_GIVES_BOUNTY              = ConvertPlayerState(7)\r\n\
    constant playerstate PLAYER_STATE_ALLIED_VICTORY            = ConvertPlayerState(8)\r\n\
    constant playerstate PLAYER_STATE_PLACED                    = ConvertPlayerState(9)\r\n\
    constant playerstate PLAYER_STATE_OBSERVER_ON_DEATH         = ConvertPlayerState(10)\r\n\
    constant playerstate PLAYER_STATE_OBSERVER                  = ConvertPlayerState(11)\r\n\
    constant playerstate PLAYER_STATE_UNFOLLOWABLE              = ConvertPlayerState(12)\r\n\
\r\n\
    // taxation rate for each resource\r\n\
    //\r\n\
    constant playerstate PLAYER_STATE_GOLD_UPKEEP_RATE          = ConvertPlayerState(13)\r\n\
    constant playerstate PLAYER_STATE_LUMBER_UPKEEP_RATE        = ConvertPlayerState(14)\r\n\
\r\n\
    // cumulative resources collected by the player during the mission\r\n\
    //\r\n\
    constant playerstate PLAYER_STATE_GOLD_GATHERED             = ConvertPlayerState(15)\r\n\
    constant playerstate PLAYER_STATE_LUMBER_GATHERED           = ConvertPlayerState(16)\r\n\
\r\n\
    constant playerstate PLAYER_STATE_NO_CREEP_SLEEP            = ConvertPlayerState(25)\r\n\
\r\n\
    constant unitstate UNIT_STATE_LIFE                          = ConvertUnitState(0)\r\n\
    constant unitstate UNIT_STATE_MAX_LIFE                      = ConvertUnitState(1)\r\n\
    constant unitstate UNIT_STATE_MANA                          = ConvertUnitState(2)\r\n\
    constant unitstate UNIT_STATE_MAX_MANA                      = ConvertUnitState(3)\r\n\
\r\n\
    constant aidifficulty AI_DIFFICULTY_NEWBIE                  = ConvertAIDifficulty(0)\r\n\
    constant aidifficulty AI_DIFFICULTY_NORMAL                  = ConvertAIDifficulty(1)\r\n\
    constant aidifficulty AI_DIFFICULTY_INSANE                  = ConvertAIDifficulty(2)\r\n\
\r\n\
    // player score values\r\n\
    constant playerscore PLAYER_SCORE_UNITS_TRAINED             = ConvertPlayerScore(0)\r\n\
    constant playerscore PLAYER_SCORE_UNITS_KILLED              = ConvertPlayerScore(1)\r\n\
    constant playerscore PLAYER_SCORE_STRUCT_BUILT              = ConvertPlayerScore(2)\r\n\
    constant playerscore PLAYER_SCORE_STRUCT_RAZED              = ConvertPlayerScore(3)\r\n\
    constant playerscore PLAYER_SCORE_TECH_PERCENT              = ConvertPlayerScore(4)\r\n\
    constant playerscore PLAYER_SCORE_FOOD_MAXPROD              = ConvertPlayerScore(5)\r\n\
    constant playerscore PLAYER_SCORE_FOOD_MAXUSED              = ConvertPlayerScore(6)\r\n\
    constant playerscore PLAYER_SCORE_HEROES_KILLED             = ConvertPlayerScore(7)\r\n\
    constant playerscore PLAYER_SCORE_ITEMS_GAINED              = ConvertPlayerScore(8)\r\n\
    constant playerscore PLAYER_SCORE_MERCS_HIRED               = ConvertPlayerScore(9)\r\n\
    constant playerscore PLAYER_SCORE_GOLD_MINED_TOTAL          = ConvertPlayerScore(10)\r\n\
    constant playerscore PLAYER_SCORE_GOLD_MINED_UPKEEP         = ConvertPlayerScore(11)\r\n\
    constant playerscore PLAYER_SCORE_GOLD_LOST_UPKEEP          = ConvertPlayerScore(12)\r\n\
    constant playerscore PLAYER_SCORE_GOLD_LOST_TAX             = ConvertPlayerScore(13)\r\n\
    constant playerscore PLAYER_SCORE_GOLD_GIVEN                = ConvertPlayerScore(14)\r\n\
    constant playerscore PLAYER_SCORE_GOLD_RECEIVED             = ConvertPlayerScore(15)\r\n\
    constant playerscore PLAYER_SCORE_LUMBER_TOTAL              = ConvertPlayerScore(16)\r\n\
    constant playerscore PLAYER_SCORE_LUMBER_LOST_UPKEEP        = ConvertPlayerScore(17)\r\n\
    constant playerscore PLAYER_SCORE_LUMBER_LOST_TAX           = ConvertPlayerScore(18)\r\n\
    constant playerscore PLAYER_SCORE_LUMBER_GIVEN              = ConvertPlayerScore(19)\r\n\
    constant playerscore PLAYER_SCORE_LUMBER_RECEIVED           = ConvertPlayerScore(20)\r\n\
    constant playerscore PLAYER_SCORE_UNIT_TOTAL                = ConvertPlayerScore(21)\r\n\
    constant playerscore PLAYER_SCORE_HERO_TOTAL                = ConvertPlayerScore(22)\r\n\
    constant playerscore PLAYER_SCORE_RESOURCE_TOTAL            = ConvertPlayerScore(23)\r\n\
    constant playerscore PLAYER_SCORE_TOTAL                     = ConvertPlayerScore(24)\r\n\
        \r\n\
//===================================================\r\n\
// Game, Player and Unit Events\r\n\
//\r\n\
//  When an event causes a trigger to fire these\r\n\
//  values allow the action code to determine which\r\n\
//  event was dispatched and therefore which set of\r\n\
//  native functions should be used to get information\r\n\
//  about the event.\r\n\
//\r\n\
// Do NOT change the order or value of these constants\r\n\
// without insuring that the JASS_GAME_EVENTS_WAR3 enum\r\n\
// is changed to match.\r\n\
//\r\n\
//===================================================\r\n\
\r\n\
    //===================================================\r\n\
    // For use with TriggerRegisterGameEvent    \r\n\
    //===================================================    \r\n\
\r\n\
    constant gameevent EVENT_GAME_VICTORY                       = ConvertGameEvent(0)\r\n\
    constant gameevent EVENT_GAME_END_LEVEL                     = ConvertGameEvent(1)\r\n\
\r\n\
    constant gameevent EVENT_GAME_VARIABLE_LIMIT                = ConvertGameEvent(2)\r\n\
    constant gameevent EVENT_GAME_STATE_LIMIT                   = ConvertGameEvent(3)   \r\n\
\r\n\
    constant gameevent EVENT_GAME_TIMER_EXPIRED                 = ConvertGameEvent(4)\r\n\
\r\n\
    constant gameevent EVENT_GAME_ENTER_REGION                  = ConvertGameEvent(5)\r\n\
    constant gameevent EVENT_GAME_LEAVE_REGION                  = ConvertGameEvent(6)\r\n\
\r\n\
    constant gameevent EVENT_GAME_TRACKABLE_HIT                 = ConvertGameEvent(7)\r\n\
    constant gameevent EVENT_GAME_TRACKABLE_TRACK               = ConvertGameEvent(8)\r\n\
\r\n\
    constant gameevent EVENT_GAME_SHOW_SKILL                    = ConvertGameEvent(9)    \r\n\
    constant gameevent EVENT_GAME_BUILD_SUBMENU                 = ConvertGameEvent(10)\r\n\
\r\n\
    //===================================================\r\n\
    // For use with TriggerRegisterPlayerEvent\r\n\
    //===================================================\r\n\
    constant playerevent EVENT_PLAYER_STATE_LIMIT               = ConvertPlayerEvent(11)\r\n\
    constant playerevent EVENT_PLAYER_ALLIANCE_CHANGED          = ConvertPlayerEvent(12)\r\n\
\r\n\
    constant playerevent EVENT_PLAYER_DEFEAT                    = ConvertPlayerEvent(13)\r\n\
    constant playerevent EVENT_PLAYER_VICTORY                   = ConvertPlayerEvent(14)\r\n\
    constant playerevent EVENT_PLAYER_LEAVE                     = ConvertPlayerEvent(15)\r\n\
    constant playerevent EVENT_PLAYER_CHAT                      = ConvertPlayerEvent(16)\r\n\
    constant playerevent EVENT_PLAYER_END_CINEMATIC             = ConvertPlayerEvent(17)\r\n\
\r\n\
    //===================================================\r\n\
    // For use with TriggerRegisterPlayerUnitEvent\r\n\
    //===================================================\r\n\
\r\n\
    constant playerunitevent EVENT_PLAYER_UNIT_ATTACKED                 = ConvertPlayerUnitEvent(18)\r\n\
    constant playerunitevent EVENT_PLAYER_UNIT_RESCUED                  = ConvertPlayerUnitEvent(19)\r\n\
\r\n\
    constant playerunitevent EVENT_PLAYER_UNIT_DEATH                    = ConvertPlayerUnitEvent(20)\r\n\
    constant playerunitevent EVENT_PLAYER_UNIT_DECAY                    = ConvertPlayerUnitEvent(21)\r\n\
\r\n\
    constant playerunitevent EVENT_PLAYER_UNIT_DETECTED                 = ConvertPlayerUnitEvent(22)\r\n\
    constant playerunitevent EVENT_PLAYER_UNIT_HIDDEN                   = ConvertPlayerUnitEvent(23)\r\n\
\r\n\
    constant playerunitevent EVENT_PLAYER_UNIT_SELECTED                 = ConvertPlayerUnitEvent(24)\r\n\
    constant playerunitevent EVENT_PLAYER_UNIT_DESELECTED               = ConvertPlayerUnitEvent(25)\r\n\
\r\n\
    constant playerunitevent EVENT_PLAYER_UNIT_CONSTRUCT_START          = ConvertPlayerUnitEvent(26)\r\n\
    constant playerunitevent EVENT_PLAYER_UNIT_CONSTRUCT_CANCEL         = ConvertPlayerUnitEvent(27)\r\n\
    constant playerunitevent EVENT_PLAYER_UNIT_CONSTRUCT_FINISH         = ConvertPlayerUnitEvent(28)\r\n\
\r\n\
    constant playerunitevent EVENT_PLAYER_UNIT_UPGRADE_START            = ConvertPlayerUnitEvent(29)\r\n\
    constant playerunitevent EVENT_PLAYER_UNIT_UPGRADE_CANCEL           = ConvertPlayerUnitEvent(30)\r\n\
    constant playerunitevent EVENT_PLAYER_UNIT_UPGRADE_FINISH           = ConvertPlayerUnitEvent(31)\r\n\
\r\n\
    constant playerunitevent EVENT_PLAYER_UNIT_TRAIN_START              = ConvertPlayerUnitEvent(32)\r\n\
    constant playerunitevent EVENT_PLAYER_UNIT_TRAIN_CANCEL             = ConvertPlayerUnitEvent(33)\r\n\
    constant playerunitevent EVENT_PLAYER_UNIT_TRAIN_FINISH             = ConvertPlayerUnitEvent(34)\r\n\
\r\n\
    constant playerunitevent EVENT_PLAYER_UNIT_RESEARCH_START           = ConvertPlayerUnitEvent(35)\r\n\
    constant playerunitevent EVENT_PLAYER_UNIT_RESEARCH_CANCEL          = ConvertPlayerUnitEvent(36)\r\n\
    constant playerunitevent EVENT_PLAYER_UNIT_RESEARCH_FINISH          = ConvertPlayerUnitEvent(37)\r\n\
    constant playerunitevent EVENT_PLAYER_UNIT_ISSUED_ORDER             = ConvertPlayerUnitEvent(38)\r\n\
    constant playerunitevent EVENT_PLAYER_UNIT_ISSUED_POINT_ORDER       = ConvertPlayerUnitEvent(39)\r\n\
    constant playerunitevent EVENT_PLAYER_UNIT_ISSUED_TARGET_ORDER      = ConvertPlayerUnitEvent(40)\r\n\
    constant playerunitevent EVENT_PLAYER_UNIT_ISSUED_UNIT_ORDER        = ConvertPlayerUnitEvent(40)    // for compat\r\n\
\r\n\
    constant playerunitevent EVENT_PLAYER_HERO_LEVEL                    = ConvertPlayerUnitEvent(41)\r\n\
    constant playerunitevent EVENT_PLAYER_HERO_SKILL                    = ConvertPlayerUnitEvent(42)\r\n\
\r\n\
    constant playerunitevent EVENT_PLAYER_HERO_REVIVABLE                = ConvertPlayerUnitEvent(43)\r\n\
\r\n\
    constant playerunitevent EVENT_PLAYER_HERO_REVIVE_START             = ConvertPlayerUnitEvent(44)\r\n\
    constant playerunitevent EVENT_PLAYER_HERO_REVIVE_CANCEL            = ConvertPlayerUnitEvent(45)\r\n\
    constant playerunitevent EVENT_PLAYER_HERO_REVIVE_FINISH            = ConvertPlayerUnitEvent(46)\r\n\
    constant playerunitevent EVENT_PLAYER_UNIT_SUMMON                   = ConvertPlayerUnitEvent(47)\r\n\
    constant playerunitevent EVENT_PLAYER_UNIT_DROP_ITEM                = ConvertPlayerUnitEvent(48)\r\n\
    constant playerunitevent EVENT_PLAYER_UNIT_PICKUP_ITEM              = ConvertPlayerUnitEvent(49)\r\n\
    constant playerunitevent EVENT_PLAYER_UNIT_USE_ITEM                 = ConvertPlayerUnitEvent(50)\r\n\
\r\n\
    constant playerunitevent EVENT_PLAYER_UNIT_LOADED                   = ConvertPlayerUnitEvent(51)\r\n\
    \r\n\
    //===================================================\r\n\
    // For use with TriggerRegisterUnitEvent\r\n\
    //===================================================\r\n\
\r\n\
    constant unitevent EVENT_UNIT_DAMAGED                               = ConvertUnitEvent(52)\r\n\
    constant unitevent EVENT_UNIT_DEATH                                 = ConvertUnitEvent(53)\r\n\
    constant unitevent EVENT_UNIT_DECAY                                 = ConvertUnitEvent(54)\r\n\
    constant unitevent EVENT_UNIT_DETECTED                              = ConvertUnitEvent(55)\r\n\
    constant unitevent EVENT_UNIT_HIDDEN                                = ConvertUnitEvent(56)\r\n\
    constant unitevent EVENT_UNIT_SELECTED                              = ConvertUnitEvent(57)\r\n\
    constant unitevent EVENT_UNIT_DESELECTED                            = ConvertUnitEvent(58)\r\n\
                                                                        \r\n\
    constant unitevent EVENT_UNIT_STATE_LIMIT                           = ConvertUnitEvent(59)                                                                        \r\n\
\r\n\
    // Events which may have a filter for the \"other unit\"              \r\n\
    //                                                                  \r\n\
    constant unitevent EVENT_UNIT_ACQUIRED_TARGET                       = ConvertUnitEvent(60)\r\n\
    constant unitevent EVENT_UNIT_TARGET_IN_RANGE                       = ConvertUnitEvent(61)\r\n\
    constant unitevent EVENT_UNIT_ATTACKED                              = ConvertUnitEvent(62)\r\n\
    constant unitevent EVENT_UNIT_RESCUED                               = ConvertUnitEvent(63)\r\n\
                                                                        \r\n\
    constant unitevent EVENT_UNIT_CONSTRUCT_CANCEL                      = ConvertUnitEvent(64)\r\n\
    constant unitevent EVENT_UNIT_CONSTRUCT_FINISH                      = ConvertUnitEvent(65)\r\n\
                                                                        \r\n\
    constant unitevent EVENT_UNIT_UPGRADE_START                         = ConvertUnitEvent(66)\r\n\
    constant unitevent EVENT_UNIT_UPGRADE_CANCEL                        = ConvertUnitEvent(67)\r\n\
    constant unitevent EVENT_UNIT_UPGRADE_FINISH                        = ConvertUnitEvent(68)\r\n\
                                                                        \r\n\
    // Events which involve the specified unit performing               \r\n\
    // training of other units                                          \r\n\
    //                                                                  \r\n\
    constant unitevent EVENT_UNIT_TRAIN_START                           = ConvertUnitEvent(69)\r\n\
    constant unitevent EVENT_UNIT_TRAIN_CANCEL                          = ConvertUnitEvent(70)\r\n\
    constant unitevent EVENT_UNIT_TRAIN_FINISH                          = ConvertUnitEvent(71)\r\n\
                                                                        \r\n\
    constant unitevent EVENT_UNIT_RESEARCH_START                        = ConvertUnitEvent(72)\r\n\
    constant unitevent EVENT_UNIT_RESEARCH_CANCEL                       = ConvertUnitEvent(73)\r\n\
    constant unitevent EVENT_UNIT_RESEARCH_FINISH                       = ConvertUnitEvent(74)\r\n\
                                                                        \r\n\
    constant unitevent EVENT_UNIT_ISSUED_ORDER                          = ConvertUnitEvent(75)\r\n\
    constant unitevent EVENT_UNIT_ISSUED_POINT_ORDER                    = ConvertUnitEvent(76)\r\n\
    constant unitevent EVENT_UNIT_ISSUED_TARGET_ORDER                   = ConvertUnitEvent(77)\r\n\
                                                                       \r\n\
    constant unitevent EVENT_UNIT_HERO_LEVEL                            = ConvertUnitEvent(78)\r\n\
    constant unitevent EVENT_UNIT_HERO_SKILL                            = ConvertUnitEvent(79)\r\n\
                                                                        \r\n\
    constant unitevent EVENT_UNIT_HERO_REVIVABLE                        = ConvertUnitEvent(80)\r\n\
    constant unitevent EVENT_UNIT_HERO_REVIVE_START                     = ConvertUnitEvent(81)\r\n\
    constant unitevent EVENT_UNIT_HERO_REVIVE_CANCEL                    = ConvertUnitEvent(82)\r\n\
    constant unitevent EVENT_UNIT_HERO_REVIVE_FINISH                    = ConvertUnitEvent(83)\r\n\
                                                                        \r\n\
    constant unitevent EVENT_UNIT_SUMMON                                = ConvertUnitEvent(84)\r\n\
                                                                        \r\n\
    constant unitevent EVENT_UNIT_DROP_ITEM                             = ConvertUnitEvent(85)\r\n\
    constant unitevent EVENT_UNIT_PICKUP_ITEM                           = ConvertUnitEvent(86)\r\n\
    constant unitevent EVENT_UNIT_USE_ITEM                              = ConvertUnitEvent(87)\r\n\
\r\n\
    constant unitevent EVENT_UNIT_LOADED                                = ConvertUnitEvent(88)\r\n\
\r\n\
    constant widgetevent EVENT_WIDGET_DEATH                             = ConvertWidgetEvent(89)\r\n\
\r\n\
    constant dialogevent EVENT_DIALOG_BUTTON_CLICK                      = ConvertDialogEvent(90)\r\n\
    constant dialogevent EVENT_DIALOG_CLICK                             = ConvertDialogEvent(91)\r\n\
\r\n\
    //===================================================\r\n\
    // Frozen Throne Expansion Events\r\n\
    // Need to be added here to preserve compat\r\n\
    //===================================================\r\n\
\r\n\
    //===================================================\r\n\
    // For use with TriggerRegisterGameEvent    \r\n\
    //===================================================    \r\n\
\r\n\
    constant gameevent          EVENT_GAME_LOADED                       = ConvertGameEvent(256)\r\n\
    constant gameevent          EVENT_GAME_TOURNAMENT_FINISH_SOON       = ConvertGameEvent(257)\r\n\
    constant gameevent          EVENT_GAME_TOURNAMENT_FINISH_NOW        = ConvertGameEvent(258)\r\n\
    constant gameevent          EVENT_GAME_SAVE                         = ConvertGameEvent(259)\r\n\
\r\n\
    //===================================================\r\n\
    // For use with TriggerRegisterPlayerEvent\r\n\
    //===================================================\r\n\
\r\n\
    constant playerevent        EVENT_PLAYER_ARROW_LEFT_DOWN            = ConvertPlayerEvent(261)\r\n\
    constant playerevent        EVENT_PLAYER_ARROW_LEFT_UP              = ConvertPlayerEvent(262)\r\n\
    constant playerevent        EVENT_PLAYER_ARROW_RIGHT_DOWN           = ConvertPlayerEvent(263)\r\n\
    constant playerevent        EVENT_PLAYER_ARROW_RIGHT_UP             = ConvertPlayerEvent(264)\r\n\
    constant playerevent        EVENT_PLAYER_ARROW_DOWN_DOWN            = ConvertPlayerEvent(265)\r\n\
    constant playerevent        EVENT_PLAYER_ARROW_DOWN_UP              = ConvertPlayerEvent(266)\r\n\
    constant playerevent        EVENT_PLAYER_ARROW_UP_DOWN              = ConvertPlayerEvent(267)\r\n\
    constant playerevent        EVENT_PLAYER_ARROW_UP_UP                = ConvertPlayerEvent(268)\r\n\
\r\n\
    //===================================================\r\n\
    // For use with TriggerRegisterPlayerUnitEvent\r\n\
    //===================================================\r\n\
\r\n\
    constant playerunitevent    EVENT_PLAYER_UNIT_SELL                  = ConvertPlayerUnitEvent(269)\r\n\
    constant playerunitevent    EVENT_PLAYER_UNIT_CHANGE_OWNER          = ConvertPlayerUnitEvent(270)\r\n\
    constant playerunitevent    EVENT_PLAYER_UNIT_SELL_ITEM             = ConvertPlayerUnitEvent(271)\r\n\
    constant playerunitevent    EVENT_PLAYER_UNIT_SPELL_CHANNEL         = ConvertPlayerUnitEvent(272)\r\n\
    constant playerunitevent    EVENT_PLAYER_UNIT_SPELL_CAST            = ConvertPlayerUnitEvent(273)\r\n\
    constant playerunitevent    EVENT_PLAYER_UNIT_SPELL_EFFECT          = ConvertPlayerUnitEvent(274)\r\n\
    constant playerunitevent    EVENT_PLAYER_UNIT_SPELL_FINISH          = ConvertPlayerUnitEvent(275)\r\n\
    constant playerunitevent    EVENT_PLAYER_UNIT_SPELL_ENDCAST         = ConvertPlayerUnitEvent(276)\r\n\
    constant playerunitevent    EVENT_PLAYER_UNIT_PAWN_ITEM             = ConvertPlayerUnitEvent(277)\r\n\
\r\n\
    //===================================================\r\n\
    // For use with TriggerRegisterUnitEvent\r\n\
    //===================================================\r\n\
\r\n\
    constant unitevent          EVENT_UNIT_SELL                         = ConvertUnitEvent(286)\r\n\
    constant unitevent          EVENT_UNIT_CHANGE_OWNER                 = ConvertUnitEvent(287)\r\n\
    constant unitevent          EVENT_UNIT_SELL_ITEM                    = ConvertUnitEvent(288)\r\n\
    constant unitevent          EVENT_UNIT_SPELL_CHANNEL                = ConvertUnitEvent(289)\r\n\
    constant unitevent          EVENT_UNIT_SPELL_CAST                   = ConvertUnitEvent(290)\r\n\
    constant unitevent          EVENT_UNIT_SPELL_EFFECT                 = ConvertUnitEvent(291)\r\n\
    constant unitevent          EVENT_UNIT_SPELL_FINISH                 = ConvertUnitEvent(292)\r\n\
    constant unitevent          EVENT_UNIT_SPELL_ENDCAST                = ConvertUnitEvent(293)\r\n\
    constant unitevent          EVENT_UNIT_PAWN_ITEM                    = ConvertUnitEvent(294)\r\n\
\r\n\
    //===================================================\r\n\
    // Limit Event API constants    \r\n\
    // variable, player state, game state, and unit state events\r\n\
    // ( do NOT change the order of these... )\r\n\
    //===================================================\r\n\
    constant limitop LESS_THAN                              = ConvertLimitOp(0)\r\n\
    constant limitop LESS_THAN_OR_EQUAL                     = ConvertLimitOp(1)\r\n\
    constant limitop EQUAL                                  = ConvertLimitOp(2)\r\n\
    constant limitop GREATER_THAN_OR_EQUAL                  = ConvertLimitOp(3)\r\n\
    constant limitop GREATER_THAN                           = ConvertLimitOp(4)\r\n\
    constant limitop NOT_EQUAL                              = ConvertLimitOp(5)\r\n\
\r\n\
//===================================================\r\n\
// Unit Type Constants for use with IsUnitType()\r\n\
//===================================================\r\n\
\r\n\
    constant unittype UNIT_TYPE_HERO                        = ConvertUnitType(0)\r\n\
    constant unittype UNIT_TYPE_DEAD                        = ConvertUnitType(1)\r\n\
    constant unittype UNIT_TYPE_STRUCTURE                   = ConvertUnitType(2)\r\n\
\r\n\
    constant unittype UNIT_TYPE_FLYING                      = ConvertUnitType(3)\r\n\
    constant unittype UNIT_TYPE_GROUND                      = ConvertUnitType(4)\r\n\
\r\n\
    constant unittype UNIT_TYPE_ATTACKS_FLYING              = ConvertUnitType(5)\r\n\
    constant unittype UNIT_TYPE_ATTACKS_GROUND              = ConvertUnitType(6)\r\n\
\r\n\
    constant unittype UNIT_TYPE_MELEE_ATTACKER              = ConvertUnitType(7)\r\n\
    constant unittype UNIT_TYPE_RANGED_ATTACKER             = ConvertUnitType(8)\r\n\
\r\n\
    constant unittype UNIT_TYPE_GIANT                       = ConvertUnitType(9)\r\n\
    constant unittype UNIT_TYPE_SUMMONED                    = ConvertUnitType(10)\r\n\
    constant unittype UNIT_TYPE_STUNNED                     = ConvertUnitType(11)\r\n\
    constant unittype UNIT_TYPE_PLAGUED                     = ConvertUnitType(12)\r\n\
    constant unittype UNIT_TYPE_SNARED                      = ConvertUnitType(13)\r\n\
\r\n\
    constant unittype UNIT_TYPE_UNDEAD                      = ConvertUnitType(14)\r\n\
    constant unittype UNIT_TYPE_MECHANICAL                  = ConvertUnitType(15)\r\n\
    constant unittype UNIT_TYPE_PEON                        = ConvertUnitType(16)\r\n\
    constant unittype UNIT_TYPE_SAPPER                      = ConvertUnitType(17)\r\n\
    constant unittype UNIT_TYPE_TOWNHALL                    = ConvertUnitType(18)    \r\n\
    constant unittype UNIT_TYPE_ANCIENT                     = ConvertUnitType(19)\r\n\
    \r\n\
    constant unittype UNIT_TYPE_TAUREN                      = ConvertUnitType(20)\r\n\
    constant unittype UNIT_TYPE_POISONED                    = ConvertUnitType(21)\r\n\
    constant unittype UNIT_TYPE_POLYMORPHED                 = ConvertUnitType(22)\r\n\
    constant unittype UNIT_TYPE_SLEEPING                    = ConvertUnitType(23)\r\n\
    constant unittype UNIT_TYPE_RESISTANT                   = ConvertUnitType(24)\r\n\
    constant unittype UNIT_TYPE_ETHEREAL                    = ConvertUnitType(25)\r\n\
    constant unittype UNIT_TYPE_MAGIC_IMMUNE                = ConvertUnitType(26)\r\n\
\r\n\
//===================================================\r\n\
// Unit Type Constants for use with ChooseRandomItemEx()\r\n\
//===================================================\r\n\
\r\n\
    constant itemtype ITEM_TYPE_PERMANENT                   = ConvertItemType(0)\r\n\
    constant itemtype ITEM_TYPE_CHARGED                     = ConvertItemType(1)\r\n\
    constant itemtype ITEM_TYPE_POWERUP                     = ConvertItemType(2)\r\n\
    constant itemtype ITEM_TYPE_ARTIFACT                    = ConvertItemType(3)\r\n\
    constant itemtype ITEM_TYPE_PURCHASABLE                 = ConvertItemType(4)\r\n\
    constant itemtype ITEM_TYPE_CAMPAIGN                    = ConvertItemType(5)\r\n\
    constant itemtype ITEM_TYPE_MISCELLANEOUS               = ConvertItemType(6)\r\n\
    constant itemtype ITEM_TYPE_UNKNOWN                     = ConvertItemType(7)\r\n\
    constant itemtype ITEM_TYPE_ANY                         = ConvertItemType(8)\r\n\
\r\n\
    // Deprecated, should use ITEM_TYPE_POWERUP\r\n\
    constant itemtype ITEM_TYPE_TOME                        = ConvertItemType(2)\r\n\
\r\n\
//===================================================\r\n\
// Animatable Camera Fields\r\n\
//===================================================\r\n\
\r\n\
    constant camerafield CAMERA_FIELD_TARGET_DISTANCE       = ConvertCameraField(0)\r\n\
    constant camerafield CAMERA_FIELD_FARZ                  = ConvertCameraField(1)\r\n\
    constant camerafield CAMERA_FIELD_ANGLE_OF_ATTACK       = ConvertCameraField(2)\r\n\
    constant camerafield CAMERA_FIELD_FIELD_OF_VIEW         = ConvertCameraField(3)\r\n\
    constant camerafield CAMERA_FIELD_ROLL                  = ConvertCameraField(4)\r\n\
    constant camerafield CAMERA_FIELD_ROTATION              = ConvertCameraField(5)\r\n\
    constant camerafield CAMERA_FIELD_ZOFFSET               = ConvertCameraField(6)\r\n\
\r\n\
    constant blendmode   BLEND_MODE_NONE                    = ConvertBlendMode(0)\r\n\
    constant blendmode   BLEND_MODE_DONT_CARE               = ConvertBlendMode(0)\r\n\
    constant blendmode   BLEND_MODE_KEYALPHA                = ConvertBlendMode(1)\r\n\
    constant blendmode   BLEND_MODE_BLEND                   = ConvertBlendMode(2)\r\n\
    constant blendmode   BLEND_MODE_ADDITIVE                = ConvertBlendMode(3)\r\n\
    constant blendmode   BLEND_MODE_MODULATE                = ConvertBlendMode(4)\r\n\
    constant blendmode   BLEND_MODE_MODULATE_2X             = ConvertBlendMode(5)\r\n\
    \r\n\
    constant raritycontrol  RARITY_FREQUENT                 = ConvertRarityControl(0)\r\n\
    constant raritycontrol  RARITY_RARE                     = ConvertRarityControl(1)\r\n\
\r\n\
    constant texmapflags    TEXMAP_FLAG_NONE                = ConvertTexMapFlags(0)\r\n\
    constant texmapflags    TEXMAP_FLAG_WRAP_U              = ConvertTexMapFlags(1)\r\n\
    constant texmapflags    TEXMAP_FLAG_WRAP_V              = ConvertTexMapFlags(2)\r\n\
    constant texmapflags    TEXMAP_FLAG_WRAP_UV             = ConvertTexMapFlags(3)\r\n\
\r\n\
    constant fogstate       FOG_OF_WAR_MASKED               = ConvertFogState(1)\r\n\
    constant fogstate       FOG_OF_WAR_FOGGED               = ConvertFogState(2)\r\n\
    constant fogstate       FOG_OF_WAR_VISIBLE              = ConvertFogState(4)\r\n\
\r\n\
//===================================================\r\n\
// Camera Margin constants for use with GetCameraMargin\r\n\
//===================================================\r\n\
\r\n\
    constant integer        CAMERA_MARGIN_LEFT              = 0\r\n\
    constant integer        CAMERA_MARGIN_RIGHT             = 1\r\n\
    constant integer        CAMERA_MARGIN_TOP               = 2\r\n\
    constant integer        CAMERA_MARGIN_BOTTOM            = 3\r\n\
\r\n\
//===================================================\r\n\
// Effect API constants\r\n\
//===================================================\r\n\
\r\n\
    constant effecttype     EFFECT_TYPE_EFFECT              = ConvertEffectType(0)\r\n\
    constant effecttype     EFFECT_TYPE_TARGET              = ConvertEffectType(1)\r\n\
    constant effecttype     EFFECT_TYPE_CASTER              = ConvertEffectType(2)\r\n\
    constant effecttype     EFFECT_TYPE_SPECIAL             = ConvertEffectType(3)\r\n\
    constant effecttype     EFFECT_TYPE_AREA_EFFECT         = ConvertEffectType(4)\r\n\
    constant effecttype     EFFECT_TYPE_MISSILE             = ConvertEffectType(5)\r\n\
    constant effecttype     EFFECT_TYPE_LIGHTNING           = ConvertEffectType(6)\r\n\
\r\n\
    constant soundtype      SOUND_TYPE_EFFECT               = ConvertSoundType(0)\r\n\
    constant soundtype      SOUND_TYPE_EFFECT_LOOPED        = ConvertSoundType(1)\r\n\
\r\n\
endglobals\r\n\
\r\n\
//============================================================================\r\n\
// MathAPI\r\n\
native Deg2Rad  takes real degrees returns real\r\n\
native Rad2Deg  takes real radians returns real\r\n\
\r\n\
native Sin      takes real radians returns real\r\n\
native Cos      takes real radians returns real\r\n\
native Tan      takes real radians returns real\r\n\
\r\n\
// Expect values between -1 and 1...returns 0 for invalid input\r\n\
native Asin     takes real y returns real\r\n\
native Acos     takes real x returns real\r\n\
\r\n\
native Atan     takes real x returns real\r\n\
\r\n\
// Returns 0 if x and y are both 0\r\n\
native Atan2    takes real y, real x returns real\r\n\
\r\n\
// Returns 0 if x <= 0\r\n\
native SquareRoot takes real x returns real\r\n\
\r\n\
// computes x to the y power\r\n\
// y == 0.0             => 1\r\n\
// x ==0.0 and y < 0    => 0\r\n\
//\r\n\
native Pow      takes real x, real power returns real\r\n\
\r\n\
//============================================================================\r\n\
// String Utility API\r\n\
native I2R  takes integer i returns real\r\n\
native R2I  takes real r returns integer\r\n\
native I2S  takes integer i returns string\r\n\
native R2S  takes real r returns string\r\n\
native R2SW takes real r, integer width, integer precision returns string\r\n\
native S2I  takes string s returns integer\r\n\
native S2R  takes string s returns real\r\n\
native GetHandleId takes handle h returns integer\r\n\
native SubString takes string source, integer start, integer end returns string\r\n\
native StringLength takes string s returns integer\r\n\
native StringCase takes string source, boolean upper returns string\r\n\
native StringHash takes string s returns integer\r\n\
\r\n\
native GetLocalizedString takes string source returns string\r\n\
native GetLocalizedHotkey takes string source returns integer\r\n\
\r\n\
//============================================================================\r\n\
// Map Setup API\r\n\
//\r\n\
//  These are native functions for describing the map configuration\r\n\
//  these funcs should only be used in the \"config\" function of\r\n\
//  a map script. The functions should also be called in this order\r\n\
//  ( i.e. call SetPlayers before SetPlayerColor...\r\n\
//\r\n\
\r\n\
native SetMapName           takes string name returns nothing\r\n\
native SetMapDescription    takes string description returns nothing\r\n\
\r\n\
native SetTeams             takes integer teamcount returns nothing\r\n\
native SetPlayers           takes integer playercount returns nothing\r\n\
\r\n\
native DefineStartLocation      takes integer whichStartLoc, real x, real y returns nothing\r\n\
native DefineStartLocationLoc   takes integer whichStartLoc, location whichLocation returns nothing\r\n\
native SetStartLocPrioCount     takes integer whichStartLoc, integer prioSlotCount returns nothing\r\n\
native SetStartLocPrio          takes integer whichStartLoc, integer prioSlotIndex, integer otherStartLocIndex, startlocprio priority returns nothing\r\n\
native GetStartLocPrioSlot      takes integer whichStartLoc, integer prioSlotIndex returns integer\r\n\
native GetStartLocPrio          takes integer whichStartLoc, integer prioSlotIndex returns startlocprio\r\n\
\r\n\
native SetGameTypeSupported takes gametype whichGameType, boolean value returns nothing\r\n\
native SetMapFlag           takes mapflag whichMapFlag, boolean value returns nothing\r\n\
native SetGamePlacement     takes placement whichPlacementType returns nothing\r\n\
native SetGameSpeed         takes gamespeed whichspeed returns nothing\r\n\
native SetGameDifficulty    takes gamedifficulty whichdifficulty returns nothing\r\n\
native SetResourceDensity   takes mapdensity whichdensity returns nothing\r\n\
native SetCreatureDensity   takes mapdensity whichdensity returns nothing\r\n\
\r\n\
native GetTeams             takes nothing returns integer\r\n\
native GetPlayers           takes nothing returns integer\r\n\
\r\n\
native IsGameTypeSupported  takes gametype whichGameType returns boolean\r\n\
native GetGameTypeSelected  takes nothing returns gametype\r\n\
native IsMapFlagSet         takes mapflag whichMapFlag returns boolean\r\n\
\r\n\
constant native GetGamePlacement     takes nothing returns placement\r\n\
constant native GetGameSpeed         takes nothing returns gamespeed\r\n\
constant native GetGameDifficulty    takes nothing returns gamedifficulty\r\n\
constant native GetResourceDensity   takes nothing returns mapdensity\r\n\
constant native GetCreatureDensity   takes nothing returns mapdensity\r\n\
constant native GetStartLocationX    takes integer whichStartLocation returns real\r\n\
constant native GetStartLocationY    takes integer whichStartLocation returns real\r\n\
constant native GetStartLocationLoc  takes integer whichStartLocation returns location\r\n\
\r\n\
\r\n\
native SetPlayerTeam            takes player whichPlayer, integer whichTeam returns nothing\r\n\
native SetPlayerStartLocation   takes player whichPlayer, integer startLocIndex returns nothing\r\n\
// forces player to have the specified start loc and marks the start loc as occupied\r\n\
// which removes it from consideration for subsequently placed players\r\n\
// ( i.e. you can use this to put people in a fixed loc and then\r\n\
//   use random placement for any unplaced players etc )\r\n\
native ForcePlayerStartLocation takes player whichPlayer, integer startLocIndex returns nothing \r\n\
native SetPlayerColor           takes player whichPlayer, playercolor color returns nothing\r\n\
native SetPlayerAlliance        takes player sourcePlayer, player otherPlayer, alliancetype whichAllianceSetting, boolean value returns nothing\r\n\
native SetPlayerTaxRate         takes player sourcePlayer, player otherPlayer, playerstate whichResource, integer rate returns nothing\r\n\
native SetPlayerRacePreference  takes player whichPlayer, racepreference whichRacePreference returns nothing\r\n\
native SetPlayerRaceSelectable  takes player whichPlayer, boolean value returns nothing\r\n\
native SetPlayerController      takes player whichPlayer, mapcontrol controlType returns nothing\r\n\
native SetPlayerName            takes player whichPlayer, string name returns nothing\r\n\
\r\n\
native SetPlayerOnScoreScreen   takes player whichPlayer, boolean flag returns nothing\r\n\
\r\n\
native GetPlayerTeam            takes player whichPlayer returns integer\r\n\
native GetPlayerStartLocation   takes player whichPlayer returns integer\r\n\
native GetPlayerColor           takes player whichPlayer returns playercolor\r\n\
native GetPlayerSelectable      takes player whichPlayer returns boolean\r\n\
native GetPlayerController      takes player whichPlayer returns mapcontrol\r\n\
native GetPlayerSlotState       takes player whichPlayer returns playerslotstate\r\n\
native GetPlayerTaxRate         takes player sourcePlayer, player otherPlayer, playerstate whichResource returns integer\r\n\
native IsPlayerRacePrefSet      takes player whichPlayer, racepreference pref returns boolean\r\n\
native GetPlayerName            takes player whichPlayer returns string\r\n\
\r\n\
//============================================================================\r\n\
// Timer API\r\n\
//\r\n\
native CreateTimer          takes nothing returns timer\r\n\
native DestroyTimer         takes timer whichTimer returns nothing\r\n\
native TimerStart           takes timer whichTimer, real timeout, boolean periodic, code handlerFunc returns nothing\r\n\
native TimerGetElapsed      takes timer whichTimer returns real\r\n\
native TimerGetRemaining    takes timer whichTimer returns real\r\n\
native TimerGetTimeout      takes timer whichTimer returns real\r\n\
native PauseTimer           takes timer whichTimer returns nothing\r\n\
native ResumeTimer          takes timer whichTimer returns nothing\r\n\
native GetExpiredTimer      takes nothing returns timer\r\n\
\r\n\
//============================================================================\r\n\
// Group API\r\n\
//\r\n\
native CreateGroup                          takes nothing returns group\r\n\
native DestroyGroup                         takes group whichGroup returns nothing\r\n\
native GroupAddUnit                         takes group whichGroup, unit whichUnit returns nothing\r\n\
native GroupRemoveUnit                      takes group whichGroup, unit whichUnit returns nothing\r\n\
native GroupClear                           takes group whichGroup returns nothing\r\n\
native GroupEnumUnitsOfType                 takes group whichGroup, string unitname, boolexpr filter returns nothing\r\n\
native GroupEnumUnitsOfPlayer               takes group whichGroup, player whichPlayer, boolexpr filter returns nothing\r\n\
native GroupEnumUnitsOfTypeCounted          takes group whichGroup, string unitname, boolexpr filter, integer countLimit returns nothing\r\n\
native GroupEnumUnitsInRect                 takes group whichGroup, rect r, boolexpr filter returns nothing\r\n\
native GroupEnumUnitsInRectCounted          takes group whichGroup, rect r, boolexpr filter, integer countLimit returns nothing\r\n\
native GroupEnumUnitsInRange                takes group whichGroup, real x, real y, real radius, boolexpr filter returns nothing\r\n\
native GroupEnumUnitsInRangeOfLoc           takes group whichGroup, location whichLocation, real radius, boolexpr filter returns nothing\r\n\
native GroupEnumUnitsInRangeCounted         takes group whichGroup, real x, real y, real radius, boolexpr filter, integer countLimit returns nothing\r\n\
native GroupEnumUnitsInRangeOfLocCounted    takes group whichGroup, location whichLocation, real radius, boolexpr filter, integer countLimit returns nothing\r\n\
native GroupEnumUnitsSelected               takes group whichGroup, player whichPlayer, boolexpr filter returns nothing\r\n\
\r\n\
native GroupImmediateOrder                  takes group whichGroup, string order returns boolean\r\n\
native GroupImmediateOrderById              takes group whichGroup, integer order returns boolean\r\n\
native GroupPointOrder                      takes group whichGroup, string order, real x, real y returns boolean\r\n\
native GroupPointOrderLoc                   takes group whichGroup, string order, location whichLocation returns boolean\r\n\
native GroupPointOrderById                  takes group whichGroup, integer order, real x, real y returns boolean\r\n\
native GroupPointOrderByIdLoc               takes group whichGroup, integer order, location whichLocation returns boolean\r\n\
native GroupTargetOrder                     takes group whichGroup, string order, widget targetWidget returns boolean\r\n\
native GroupTargetOrderById                 takes group whichGroup, integer order, widget targetWidget returns boolean\r\n\
\r\n\
// This will be difficult to support with potentially disjoint, cell-based regions\r\n\
// as it would involve enumerating all the cells that are covered by a particularregion\r\n\
// a better implementation would be a trigger that adds relevant units as they enter\r\n\
// and removes them if they leave...\r\n\
native ForGroup                 takes group whichGroup, code callback returns nothing\r\n\
native FirstOfGroup             takes group whichGroup returns unit\r\n\
\r\n\
//============================================================================\r\n\
// Force API\r\n\
//\r\n\
native CreateForce              takes nothing returns force\r\n\
native DestroyForce             takes force whichForce returns nothing\r\n\
native ForceAddPlayer           takes force whichForce, player whichPlayer returns nothing\r\n\
native ForceRemovePlayer        takes force whichForce, player whichPlayer returns nothing\r\n\
native ForceClear               takes force whichForce returns nothing\r\n\
native ForceEnumPlayers         takes force whichForce, boolexpr filter returns nothing\r\n\
native ForceEnumPlayersCounted  takes force whichForce, boolexpr filter, integer countLimit returns nothing\r\n\
native ForceEnumAllies          takes force whichForce, player whichPlayer, boolexpr filter returns nothing\r\n\
native ForceEnumEnemies         takes force whichForce, player whichPlayer, boolexpr filter returns nothing\r\n\
native ForForce                 takes force whichForce, code callback returns nothing\r\n\
\r\n\
//============================================================================\r\n\
// Region and Location API\r\n\
//\r\n\
native Rect                     takes real minx, real miny, real maxx, real maxy returns rect\r\n\
native RectFromLoc              takes location min, location max returns rect\r\n\
native RemoveRect               takes rect whichRect returns nothing\r\n\
native SetRect                  takes rect whichRect, real minx, real miny, real maxx, real maxy returns nothing\r\n\
native SetRectFromLoc           takes rect whichRect, location min, location max returns nothing\r\n\
native MoveRectTo               takes rect whichRect, real newCenterX, real newCenterY returns nothing\r\n\
native MoveRectToLoc            takes rect whichRect, location newCenterLoc returns nothing\r\n\
\r\n\
native GetRectCenterX           takes rect whichRect returns real\r\n\
native GetRectCenterY           takes rect whichRect returns real\r\n\
native GetRectMinX              takes rect whichRect returns real\r\n\
native GetRectMinY              takes rect whichRect returns real\r\n\
native GetRectMaxX              takes rect whichRect returns real\r\n\
native GetRectMaxY              takes rect whichRect returns real\r\n\
\r\n\
native CreateRegion             takes nothing returns region\r\n\
native RemoveRegion             takes region whichRegion returns nothing\r\n\
\r\n\
native RegionAddRect            takes region whichRegion, rect r returns nothing\r\n\
native RegionClearRect          takes region whichRegion, rect r returns nothing\r\n\
\r\n\
native RegionAddCell           takes region whichRegion, real x, real y returns nothing\r\n\
native RegionAddCellAtLoc      takes region whichRegion, location whichLocation returns nothing\r\n\
native RegionClearCell         takes region whichRegion, real x, real y returns nothing\r\n\
native RegionClearCellAtLoc    takes region whichRegion, location whichLocation returns nothing\r\n\
\r\n\
native Location                 takes real x, real y returns location\r\n\
native RemoveLocation           takes location whichLocation returns nothing\r\n\
native MoveLocation             takes location whichLocation, real newX, real newY returns nothing\r\n\
native GetLocationX             takes location whichLocation returns real\r\n\
native GetLocationY             takes location whichLocation returns real\r\n\
\r\n\
// This function is asynchronous. The values it returns are not guaranteed synchronous between each player.\r\n\
//  If you attempt to use it in a synchronous manner, it may cause a desync.\r\n\
native GetLocationZ             takes location whichLocation returns real\r\n\
\r\n\
native IsUnitInRegion               takes region whichRegion, unit whichUnit returns boolean\r\n\
native IsPointInRegion              takes region whichRegion, real x, real y returns boolean\r\n\
native IsLocationInRegion           takes region whichRegion, location whichLocation returns boolean\r\n\
\r\n\
// Returns full map bounds, including unplayable borders, in world coordinates\r\n\
native GetWorldBounds           takes nothing returns rect\r\n\
\r\n\
//============================================================================\r\n\
// Native trigger interface\r\n\
//\r\n\
native CreateTrigger    takes nothing returns trigger\r\n\
native DestroyTrigger   takes trigger whichTrigger returns nothing\r\n\
native ResetTrigger     takes trigger whichTrigger returns nothing\r\n\
native EnableTrigger    takes trigger whichTrigger returns nothing\r\n\
native DisableTrigger   takes trigger whichTrigger returns nothing\r\n\
native IsTriggerEnabled takes trigger whichTrigger returns boolean\r\n\
\r\n\
native TriggerWaitOnSleeps   takes trigger whichTrigger, boolean flag returns nothing\r\n\
native IsTriggerWaitOnSleeps takes trigger whichTrigger returns boolean\r\n\
\r\n\
constant native GetFilterUnit       takes nothing returns unit\r\n\
constant native GetEnumUnit         takes nothing returns unit\r\n\
\r\n\
constant native GetFilterDestructable   takes nothing returns destructable\r\n\
constant native GetEnumDestructable     takes nothing returns destructable\r\n\
\r\n\
constant native GetFilterItem           takes nothing returns item\r\n\
constant native GetEnumItem             takes nothing returns item\r\n\
\r\n\
constant native GetFilterPlayer     takes nothing returns player\r\n\
constant native GetEnumPlayer       takes nothing returns player\r\n\
\r\n\
constant native GetTriggeringTrigger    takes nothing returns trigger\r\n\
constant native GetTriggerEventId       takes nothing returns eventid\r\n\
constant native GetTriggerEvalCount     takes trigger whichTrigger returns integer\r\n\
constant native GetTriggerExecCount     takes trigger whichTrigger returns integer\r\n\
\r\n\
native ExecuteFunc          takes string funcName returns nothing\r\n\
\r\n\
//============================================================================\r\n\
// Boolean Expr API ( for compositing trigger conditions and unit filter funcs...)\r\n\
//============================================================================\r\n\
native And              takes boolexpr operandA, boolexpr operandB returns boolexpr\r\n\
native Or               takes boolexpr operandA, boolexpr operandB returns boolexpr\r\n\
native Not              takes boolexpr operand returns boolexpr\r\n\
native Condition        takes code func returns conditionfunc\r\n\
native DestroyCondition takes conditionfunc c returns nothing\r\n\
native Filter           takes code func returns filterfunc\r\n\
native DestroyFilter    takes filterfunc f returns nothing\r\n\
native DestroyBoolExpr  takes boolexpr e returns nothing\r\n\
\r\n\
//============================================================================\r\n\
// Trigger Game Event API\r\n\
//============================================================================\r\n\
\r\n\
native TriggerRegisterVariableEvent takes trigger whichTrigger, string varName, limitop opcode, real limitval returns event\r\n\
\r\n\
    // EVENT_GAME_VARIABLE_LIMIT\r\n\
    //constant native string GetTriggeringVariableName takes nothing returns string\r\n\
\r\n\
// Creates it's own timer and triggers when it expires\r\n\
native TriggerRegisterTimerEvent takes trigger whichTrigger, real timeout, boolean periodic returns event\r\n\
\r\n\
// Triggers when the timer you tell it about expires\r\n\
native TriggerRegisterTimerExpireEvent takes trigger whichTrigger, timer t returns event\r\n\
\r\n\
native TriggerRegisterGameStateEvent takes trigger whichTrigger, gamestate whichState, limitop opcode, real limitval returns event\r\n\
\r\n\
native TriggerRegisterDialogEvent       takes trigger whichTrigger, dialog whichDialog returns event\r\n\
native TriggerRegisterDialogButtonEvent takes trigger whichTrigger, button whichButton returns event\r\n\
\r\n\
//  EVENT_GAME_STATE_LIMIT\r\n\
constant native GetEventGameState takes nothing returns gamestate\r\n\
\r\n\
native TriggerRegisterGameEvent takes trigger whichTrigger, gameevent whichGameEvent returns event\r\n\
  \r\n\
// EVENT_GAME_VICTORY\r\n\
constant native GetWinningPlayer takes nothing returns player\r\n\
\r\n\
\r\n\
native TriggerRegisterEnterRegion takes trigger whichTrigger, region whichRegion, boolexpr filter returns event\r\n\
\r\n\
// EVENT_GAME_ENTER_REGION\r\n\
constant native GetTriggeringRegion takes nothing returns region\r\n\
constant native GetEnteringUnit takes nothing returns unit\r\n\
\r\n\
// EVENT_GAME_LEAVE_REGION\r\n\
\r\n\
native TriggerRegisterLeaveRegion takes trigger whichTrigger, region whichRegion, boolexpr filter returns event\r\n\
constant native GetLeavingUnit takes nothing returns unit\r\n\
\r\n\
native TriggerRegisterTrackableHitEvent takes trigger whichTrigger, trackable t returns event\r\n\
native TriggerRegisterTrackableTrackEvent takes trigger whichTrigger, trackable t returns event\r\n\
\r\n\
// EVENT_GAME_TRACKABLE_HIT\r\n\
// EVENT_GAME_TRACKABLE_TRACK\r\n\
constant native GetTriggeringTrackable takes nothing returns trackable\r\n\
\r\n\
// EVENT_DIALOG_BUTTON_CLICK\r\n\
constant native GetClickedButton takes nothing returns button\r\n\
constant native GetClickedDialog    takes nothing returns dialog\r\n\
\r\n\
// EVENT_GAME_TOURNAMENT_FINISH_SOON\r\n\
constant native GetTournamentFinishSoonTimeRemaining takes nothing returns real\r\n\
constant native GetTournamentFinishNowRule takes nothing returns integer\r\n\
constant native GetTournamentFinishNowPlayer takes nothing returns player\r\n\
constant native GetTournamentScore takes player whichPlayer returns integer\r\n\
\r\n\
// EVENT_GAME_SAVE\r\n\
constant native GetSaveBasicFilename takes nothing returns string\r\n\
\r\n\
//============================================================================\r\n\
// Trigger Player Based Event API\r\n\
//============================================================================\r\n\
\r\n\
native TriggerRegisterPlayerEvent takes trigger whichTrigger, player  whichPlayer, playerevent whichPlayerEvent returns event\r\n\
\r\n\
// EVENT_PLAYER_DEFEAT\r\n\
// EVENT_PLAYER_VICTORY\r\n\
constant native GetTriggerPlayer takes nothing returns player\r\n\
\r\n\
native TriggerRegisterPlayerUnitEvent takes trigger whichTrigger, player whichPlayer, playerunitevent whichPlayerUnitEvent, boolexpr filter returns event\r\n\
\r\n\
// EVENT_PLAYER_HERO_LEVEL\r\n\
// EVENT_UNIT_HERO_LEVEL\r\n\
constant native GetLevelingUnit takes nothing returns unit\r\n\
\r\n\
// EVENT_PLAYER_HERO_SKILL\r\n\
// EVENT_UNIT_HERO_SKILL\r\n\
constant native GetLearningUnit      takes nothing returns unit\r\n\
constant native GetLearnedSkill      takes nothing returns integer\r\n\
constant native GetLearnedSkillLevel takes nothing returns integer\r\n\
\r\n\
// EVENT_PLAYER_HERO_REVIVABLE\r\n\
constant native GetRevivableUnit takes nothing returns unit\r\n\
\r\n\
// EVENT_PLAYER_HERO_REVIVE_START\r\n\
// EVENT_PLAYER_HERO_REVIVE_CANCEL\r\n\
// EVENT_PLAYER_HERO_REVIVE_FINISH\r\n\
// EVENT_UNIT_HERO_REVIVE_START\r\n\
// EVENT_UNIT_HERO_REVIVE_CANCEL\r\n\
// EVENT_UNIT_HERO_REVIVE_FINISH\r\n\
constant native GetRevivingUnit takes nothing returns unit\r\n\
\r\n\
// EVENT_PLAYER_UNIT_ATTACKED\r\n\
constant native GetAttacker takes nothing returns unit\r\n\
\r\n\
// EVENT_PLAYER_UNIT_RESCUED\r\n\
constant native GetRescuer  takes nothing returns unit\r\n\
\r\n\
// EVENT_PLAYER_UNIT_DEATH\r\n\
constant native GetDyingUnit takes nothing returns unit\r\n\
constant native GetKillingUnit takes nothing returns unit\r\n\
\r\n\
// EVENT_PLAYER_UNIT_DECAY\r\n\
constant native GetDecayingUnit takes nothing returns unit\r\n\
\r\n\
// EVENT_PLAYER_UNIT_SELECTED\r\n\
//constant native GetSelectedUnit takes nothing returns unit\r\n\
\r\n\
// EVENT_PLAYER_UNIT_CONSTRUCT_START\r\n\
constant native GetConstructingStructure takes nothing returns unit\r\n\
\r\n\
// EVENT_PLAYER_UNIT_CONSTRUCT_FINISH\r\n\
// EVENT_PLAYER_UNIT_CONSTRUCT_CANCEL\r\n\
constant native GetCancelledStructure takes nothing returns unit\r\n\
constant native GetConstructedStructure takes nothing returns unit\r\n\
\r\n\
// EVENT_PLAYER_UNIT_RESEARCH_START\r\n\
// EVENT_PLAYER_UNIT_RESEARCH_CANCEL\r\n\
// EVENT_PLAYER_UNIT_RESEARCH_FINISH\r\n\
constant native GetResearchingUnit takes nothing returns unit\r\n\
constant native GetResearched takes nothing returns integer\r\n\
\r\n\
// EVENT_PLAYER_UNIT_TRAIN_START\r\n\
// EVENT_PLAYER_UNIT_TRAIN_CANCEL\r\n\
constant native GetTrainedUnitType takes nothing returns integer\r\n\
\r\n\
// EVENT_PLAYER_UNIT_TRAIN_FINISH\r\n\
constant native GetTrainedUnit takes nothing returns unit\r\n\
\r\n\
// EVENT_PLAYER_UNIT_DETECTED\r\n\
constant native GetDetectedUnit takes nothing returns unit\r\n\
\r\n\
// EVENT_PLAYER_UNIT_SUMMONED\r\n\
constant native GetSummoningUnit    takes nothing returns unit\r\n\
constant native GetSummonedUnit     takes nothing returns unit\r\n\
\r\n\
// EVENT_PLAYER_UNIT_LOADED\r\n\
constant native GetTransportUnit    takes nothing returns unit\r\n\
constant native GetLoadedUnit       takes nothing returns unit\r\n\
\r\n\
// EVENT_PLAYER_UNIT_SELL\r\n\
constant native GetSellingUnit      takes nothing returns unit\r\n\
constant native GetSoldUnit         takes nothing returns unit\r\n\
constant native GetBuyingUnit       takes nothing returns unit\r\n\
\r\n\
// EVENT_PLAYER_UNIT_SELL_ITEM\r\n\
constant native GetSoldItem         takes nothing returns item\r\n\
\r\n\
// EVENT_PLAYER_UNIT_CHANGE_OWNER\r\n\
constant native GetChangingUnit             takes nothing returns unit\r\n\
constant native GetChangingUnitPrevOwner    takes nothing returns player\r\n\
\r\n\
// EVENT_PLAYER_UNIT_DROP_ITEM\r\n\
// EVENT_PLAYER_UNIT_PICKUP_ITEM\r\n\
// EVENT_PLAYER_UNIT_USE_ITEM\r\n\
constant native GetManipulatingUnit takes nothing returns unit\r\n\
constant native GetManipulatedItem  takes nothing returns item\r\n\
\r\n\
// EVENT_PLAYER_UNIT_ISSUED_ORDER\r\n\
constant native GetOrderedUnit takes nothing returns unit\r\n\
constant native GetIssuedOrderId takes nothing returns integer\r\n\
\r\n\
// EVENT_PLAYER_UNIT_ISSUED_POINT_ORDER\r\n\
constant native GetOrderPointX takes nothing returns real\r\n\
constant native GetOrderPointY takes nothing returns real\r\n\
constant native GetOrderPointLoc takes nothing returns location\r\n\
\r\n\
// EVENT_PLAYER_UNIT_ISSUED_TARGET_ORDER\r\n\
constant native GetOrderTarget              takes nothing returns widget\r\n\
constant native GetOrderTargetDestructable  takes nothing returns destructable\r\n\
constant native GetOrderTargetItem          takes nothing returns item\r\n\
constant native GetOrderTargetUnit          takes nothing returns unit\r\n\
\r\n\
// EVENT_UNIT_SPELL_CHANNEL\r\n\
// EVENT_UNIT_SPELL_CAST\r\n\
// EVENT_UNIT_SPELL_EFFECT\r\n\
// EVENT_UNIT_SPELL_FINISH\r\n\
// EVENT_UNIT_SPELL_ENDCAST\r\n\
// EVENT_PLAYER_UNIT_SPELL_CHANNEL\r\n\
// EVENT_PLAYER_UNIT_SPELL_CAST\r\n\
// EVENT_PLAYER_UNIT_SPELL_EFFECT\r\n\
// EVENT_PLAYER_UNIT_SPELL_FINISH\r\n\
// EVENT_PLAYER_UNIT_SPELL_ENDCAST\r\n\
constant native GetSpellAbilityUnit         takes nothing returns unit\r\n\
constant native GetSpellAbilityId           takes nothing returns integer\r\n\
constant native GetSpellAbility             takes nothing returns ability\r\n\
constant native GetSpellTargetLoc           takes nothing returns location\r\n\
constant native GetSpellTargetX				takes nothing returns real\r\n\
constant native GetSpellTargetY				takes nothing returns real\r\n\
constant native GetSpellTargetDestructable  takes nothing returns destructable\r\n\
constant native GetSpellTargetItem          takes nothing returns item\r\n\
constant native GetSpellTargetUnit          takes nothing returns unit\r\n\
\r\n\
native TriggerRegisterPlayerAllianceChange takes trigger whichTrigger, player whichPlayer, alliancetype whichAlliance returns event\r\n\
native TriggerRegisterPlayerStateEvent takes trigger whichTrigger, player whichPlayer, playerstate whichState, limitop opcode, real limitval returns event\r\n\
\r\n\
// EVENT_PLAYER_STATE_LIMIT\r\n\
constant native GetEventPlayerState takes nothing returns playerstate\r\n\
\r\n\
native TriggerRegisterPlayerChatEvent takes trigger whichTrigger, player whichPlayer, string chatMessageToDetect, boolean exactMatchOnly returns event\r\n\
\r\n\
// EVENT_PLAYER_CHAT\r\n\
\r\n\
// returns the actual string they typed in ( same as what you registered for\r\n\
// if you required exact match )\r\n\
constant native GetEventPlayerChatString takes nothing returns string\r\n\
\r\n\
// returns the string that you registered for\r\n\
constant native GetEventPlayerChatStringMatched takes nothing returns string\r\n\
\r\n\
native TriggerRegisterDeathEvent takes trigger whichTrigger, widget whichWidget returns event\r\n\
\r\n\
//============================================================================\r\n\
// Trigger Unit Based Event API\r\n\
//============================================================================\r\n\
\r\n\
// returns handle to unit which triggered the most recent event when called from\r\n\
// within a trigger action function...returns null handle when used incorrectly\r\n\
\r\n\
constant native GetTriggerUnit takes nothing returns unit\r\n\
\r\n\
native TriggerRegisterUnitStateEvent takes trigger whichTrigger, unit whichUnit, unitstate whichState, limitop opcode, real limitval returns event\r\n\
\r\n\
// EVENT_UNIT_STATE_LIMIT\r\n\
constant native GetEventUnitState takes nothing returns unitstate\r\n\
\r\n\
native TriggerRegisterUnitEvent takes trigger whichTrigger, unit whichUnit, unitevent whichEvent returns event\r\n\
\r\n\
// EVENT_UNIT_DAMAGED\r\n\
constant native GetEventDamage takes nothing returns real\r\n\
constant native GetEventDamageSource takes nothing returns unit\r\n\
\r\n\
// EVENT_UNIT_DEATH\r\n\
// EVENT_UNIT_DECAY\r\n\
// Use the GetDyingUnit and GetDecayingUnit funcs above\r\n\
\r\n\
// EVENT_UNIT_DETECTED \r\n\
constant native GetEventDetectingPlayer takes nothing returns player\r\n\
\r\n\
native TriggerRegisterFilterUnitEvent takes trigger whichTrigger, unit whichUnit, unitevent whichEvent, boolexpr filter returns event\r\n\
\r\n\
// EVENT_UNIT_ACQUIRED_TARGET\r\n\
// EVENT_UNIT_TARGET_IN_RANGE\r\n\
constant native GetEventTargetUnit takes nothing returns unit\r\n\
\r\n\
// EVENT_UNIT_ATTACKED\r\n\
// Use GetAttacker from the Player Unit Event API Below...\r\n\
\r\n\
// EVENT_UNIT_RESCUEDED\r\n\
// Use GetRescuer from the Player Unit Event API Below...\r\n\
\r\n\
// EVENT_UNIT_CONSTRUCT_CANCEL\r\n\
// EVENT_UNIT_CONSTRUCT_FINISH\r\n\
\r\n\
// See the Player Unit Construction Event API above for event info funcs\r\n\
\r\n\
// EVENT_UNIT_TRAIN_START\r\n\
// EVENT_UNIT_TRAIN_CANCELLED\r\n\
// EVENT_UNIT_TRAIN_FINISH\r\n\
\r\n\
// See the Player Unit Training Event API above for event info funcs\r\n\
\r\n\
// EVENT_UNIT_SELL\r\n\
\r\n\
// See the Player Unit Sell Event API above for event info funcs\r\n\
\r\n\
// EVENT_UNIT_DROP_ITEM\r\n\
// EVENT_UNIT_PICKUP_ITEM\r\n\
// EVENT_UNIT_USE_ITEM\r\n\
// See the Player Unit/Item manipulation Event API above for event info funcs\r\n\
\r\n\
// EVENT_UNIT_ISSUED_ORDER\r\n\
// EVENT_UNIT_ISSUED_POINT_ORDER\r\n\
// EVENT_UNIT_ISSUED_TARGET_ORDER\r\n\
\r\n\
// See the Player Unit Order Event API above for event info funcs\r\n\
\r\n\
native TriggerRegisterUnitInRange takes trigger whichTrigger, unit whichUnit, real range, boolexpr filter returns event\r\n\
\r\n\
native TriggerAddCondition    takes trigger whichTrigger, boolexpr condition returns triggercondition\r\n\
native TriggerRemoveCondition takes trigger whichTrigger, triggercondition whichCondition returns nothing\r\n\
native TriggerClearConditions takes trigger whichTrigger returns nothing\r\n\
\r\n\
native TriggerAddAction     takes trigger whichTrigger, code actionFunc returns triggeraction\r\n\
native TriggerRemoveAction  takes trigger whichTrigger, triggeraction whichAction returns nothing\r\n\
native TriggerClearActions  takes trigger whichTrigger returns nothing\r\n\
native TriggerSleepAction   takes real timeout returns nothing\r\n\
native TriggerWaitForSound  takes sound s, real offset returns nothing\r\n\
native TriggerEvaluate      takes trigger whichTrigger returns boolean\r\n\
native TriggerExecute       takes trigger whichTrigger returns nothing\r\n\
native TriggerExecuteWait   takes trigger whichTrigger returns nothing\r\n\
native TriggerSyncStart     takes nothing returns nothing\r\n\
native TriggerSyncReady     takes nothing returns nothing\r\n\
\r\n\
//============================================================================\r\n\
// Widget API\r\n\
native  GetWidgetLife   takes widget whichWidget returns real\r\n\
native  SetWidgetLife   takes widget whichWidget, real newLife returns nothing\r\n\
native  GetWidgetX      takes widget whichWidget returns real\r\n\
native  GetWidgetY      takes widget whichWidget returns real\r\n\
constant native GetTriggerWidget takes nothing returns widget\r\n\
\r\n\
//============================================================================\r\n\
// Destructable Object API\r\n\
// Facing arguments are specified in degrees\r\n\
native          CreateDestructable          takes integer objectid, real x, real y, real face, real scale, integer variation returns destructable\r\n\
native          CreateDestructableZ         takes integer objectid, real x, real y, real z, real face, real scale, integer variation returns destructable\r\n\
native          CreateDeadDestructable      takes integer objectid, real x, real y, real face, real scale, integer variation returns destructable\r\n\
native          CreateDeadDestructableZ     takes integer objectid, real x, real y, real z, real face, real scale, integer variation returns destructable\r\n\
native          RemoveDestructable          takes destructable d returns nothing\r\n\
native          KillDestructable            takes destructable d returns nothing\r\n\
native          SetDestructableInvulnerable takes destructable d, boolean flag returns nothing\r\n\
native          IsDestructableInvulnerable  takes destructable d returns boolean\r\n\
native          EnumDestructablesInRect     takes rect r, boolexpr filter, code actionFunc returns nothing\r\n\
native          GetDestructableTypeId       takes destructable d returns integer\r\n\
native          GetDestructableX            takes destructable d returns real\r\n\
native          GetDestructableY            takes destructable d returns real\r\n\
native          SetDestructableLife         takes destructable d, real life returns nothing\r\n\
native          GetDestructableLife         takes destructable d returns real\r\n\
native          SetDestructableMaxLife      takes destructable d, real max returns nothing\r\n\
native          GetDestructableMaxLife      takes destructable d returns real\r\n\
native          DestructableRestoreLife     takes destructable d, real life, boolean birth returns nothing\r\n\
native          QueueDestructableAnimation  takes destructable d, string whichAnimation returns nothing\r\n\
native          SetDestructableAnimation    takes destructable d, string whichAnimation returns nothing\r\n\
native          SetDestructableAnimationSpeed takes destructable d, real speedFactor returns nothing\r\n\
native          ShowDestructable            takes destructable d, boolean flag returns nothing\r\n\
native          GetDestructableOccluderHeight takes destructable d returns real\r\n\
native          SetDestructableOccluderHeight takes destructable d, real height returns nothing\r\n\
native          GetDestructableName         takes destructable d returns string\r\n\
constant native GetTriggerDestructable takes nothing returns destructable\r\n\
\r\n\
//============================================================================\r\n\
// Item API\r\n\
native          CreateItem      takes integer itemid, real x, real y returns item\r\n\
native          RemoveItem      takes item whichItem returns nothing\r\n\
native          GetItemPlayer   takes item whichItem returns player\r\n\
native          GetItemTypeId   takes item i returns integer\r\n\
native          GetItemX        takes item i returns real\r\n\
native          GetItemY        takes item i returns real\r\n\
native          SetItemPosition takes item i, real x, real y returns nothing\r\n\
native          SetItemDropOnDeath  takes item whichItem, boolean flag returns nothing\r\n\
native          SetItemDroppable takes item i, boolean flag returns nothing\r\n\
native          SetItemPawnable takes item i, boolean flag returns nothing\r\n\
native          SetItemPlayer    takes item whichItem, player whichPlayer, boolean changeColor returns nothing\r\n\
native          SetItemInvulnerable takes item whichItem, boolean flag returns nothing\r\n\
native          IsItemInvulnerable  takes item whichItem returns boolean\r\n\
native          SetItemVisible  takes item whichItem, boolean show returns nothing\r\n\
native          IsItemVisible   takes item whichItem returns boolean\r\n\
native          IsItemOwned     takes item whichItem returns boolean\r\n\
native          IsItemPowerup   takes item whichItem returns boolean\r\n\
native          IsItemSellable  takes item whichItem returns boolean\r\n\
native          IsItemPawnable  takes item whichItem returns boolean\r\n\
native          IsItemIdPowerup takes integer itemId returns boolean\r\n\
native          IsItemIdSellable takes integer itemId returns boolean\r\n\
native          IsItemIdPawnable takes integer itemId returns boolean\r\n\
native          EnumItemsInRect     takes rect r, boolexpr filter, code actionFunc returns nothing\r\n\
native          GetItemLevel    takes item whichItem returns integer\r\n\
native          GetItemType     takes item whichItem returns itemtype\r\n\
native          SetItemDropID   takes item whichItem, integer unitId returns nothing\r\n\
constant native GetItemName     takes item whichItem returns string\r\n\
native          GetItemCharges  takes item whichItem returns integer\r\n\
native          SetItemCharges  takes item whichItem, integer charges returns nothing\r\n\
native          GetItemUserData takes item whichItem returns integer\r\n\
native          SetItemUserData takes item whichItem, integer data returns nothing\r\n\
\r\n\
//============================================================================\r\n\
// Unit API\r\n\
// Facing arguments are specified in degrees\r\n\
native          CreateUnit              takes player id, integer unitid, real x, real y, real face returns unit\r\n\
native          CreateUnitByName        takes player whichPlayer, string unitname, real x, real y, real face returns unit\r\n\
native          CreateUnitAtLoc         takes player id, integer unitid, location whichLocation, real face returns unit\r\n\
native          CreateUnitAtLocByName   takes player id, string unitname, location whichLocation, real face returns unit\r\n\
native          CreateCorpse            takes player whichPlayer, integer unitid, real x, real y, real face returns unit\r\n\
\r\n\
native          KillUnit            takes unit whichUnit returns nothing\r\n\
native          RemoveUnit          takes unit whichUnit returns nothing\r\n\
native          ShowUnit            takes unit whichUnit, boolean show returns nothing\r\n\
\r\n\
native          SetUnitState        takes unit whichUnit, unitstate whichUnitState, real newVal returns nothing\r\n\
native          SetUnitX            takes unit whichUnit, real newX returns nothing\r\n\
native          SetUnitY            takes unit whichUnit, real newY returns nothing\r\n\
native          SetUnitPosition     takes unit whichUnit, real newX, real newY returns nothing\r\n\
native          SetUnitPositionLoc  takes unit whichUnit, location whichLocation returns nothing\r\n\
native          SetUnitFacing       takes unit whichUnit, real facingAngle returns nothing\r\n\
native          SetUnitFacingTimed  takes unit whichUnit, real facingAngle, real duration returns nothing\r\n\
native          SetUnitMoveSpeed    takes unit whichUnit, real newSpeed returns nothing\r\n\
native          SetUnitFlyHeight    takes unit whichUnit, real newHeight, real rate returns nothing\r\n\
native          SetUnitTurnSpeed    takes unit whichUnit, real newTurnSpeed returns nothing\r\n\
native          SetUnitPropWindow   takes unit whichUnit, real newPropWindowAngle returns nothing\r\n\
native          SetUnitAcquireRange takes unit whichUnit, real newAcquireRange returns nothing\r\n\
native          SetUnitCreepGuard   takes unit whichUnit, boolean creepGuard returns nothing\r\n\
\r\n\
native          GetUnitAcquireRange     takes unit whichUnit returns real\r\n\
native          GetUnitTurnSpeed        takes unit whichUnit returns real\r\n\
native          GetUnitPropWindow       takes unit whichUnit returns real\r\n\
native          GetUnitFlyHeight        takes unit whichUnit returns real\r\n\
\r\n\
native          GetUnitDefaultAcquireRange      takes unit whichUnit returns real\r\n\
native          GetUnitDefaultTurnSpeed         takes unit whichUnit returns real\r\n\
native          GetUnitDefaultPropWindow        takes unit whichUnit returns real\r\n\
native          GetUnitDefaultFlyHeight         takes unit whichUnit returns real\r\n\
\r\n\
native          SetUnitOwner        takes unit whichUnit, player whichPlayer, boolean changeColor returns nothing\r\n\
native          SetUnitColor        takes unit whichUnit, playercolor whichColor returns nothing\r\n\
\r\n\
native          SetUnitScale        takes unit whichUnit, real scaleX, real scaleY, real scaleZ returns nothing\r\n\
native          SetUnitTimeScale    takes unit whichUnit, real timeScale returns nothing\r\n\
native          SetUnitBlendTime    takes unit whichUnit, real blendTime returns nothing\r\n\
native          SetUnitVertexColor  takes unit whichUnit, integer red, integer green, integer blue, integer alpha returns nothing\r\n\
\r\n\
native          QueueUnitAnimation          takes unit whichUnit, string whichAnimation returns nothing\r\n\
native          SetUnitAnimation            takes unit whichUnit, string whichAnimation returns nothing\r\n\
native          SetUnitAnimationByIndex     takes unit whichUnit, integer whichAnimation returns nothing\r\n\
native          SetUnitAnimationWithRarity  takes unit whichUnit, string whichAnimation, raritycontrol rarity returns nothing\r\n\
native          AddUnitAnimationProperties  takes unit whichUnit, string animProperties, boolean add returns nothing\r\n\
\r\n\
native          SetUnitLookAt       takes unit whichUnit, string whichBone, unit lookAtTarget, real offsetX, real offsetY, real offsetZ returns nothing\r\n\
native          ResetUnitLookAt     takes unit whichUnit returns nothing\r\n\
\r\n\
native          SetUnitRescuable    takes unit whichUnit, player byWhichPlayer, boolean flag returns nothing\r\n\
native          SetUnitRescueRange  takes unit whichUnit, real range returns nothing\r\n\
\r\n\
native          SetHeroStr          takes unit whichHero, integer newStr, boolean permanent returns nothing\r\n\
native          SetHeroAgi          takes unit whichHero, integer newAgi, boolean permanent returns nothing\r\n\
native          SetHeroInt          takes unit whichHero, integer newInt, boolean permanent returns nothing\r\n\
\r\n\
native          GetHeroStr          takes unit whichHero, boolean includeBonuses returns integer\r\n\
native          GetHeroAgi          takes unit whichHero, boolean includeBonuses returns integer\r\n\
native          GetHeroInt          takes unit whichHero, boolean includeBonuses returns integer\r\n\
\r\n\
native          UnitStripHeroLevel  takes unit whichHero, integer howManyLevels returns boolean\r\n\
\r\n\
native          GetHeroXP           takes unit whichHero returns integer\r\n\
native          SetHeroXP           takes unit whichHero, integer newXpVal,  boolean showEyeCandy returns nothing\r\n\
\r\n\
native          GetHeroSkillPoints      takes unit whichHero returns integer\r\n\
native          UnitModifySkillPoints   takes unit whichHero, integer skillPointDelta returns boolean\r\n\
\r\n\
native          AddHeroXP           takes unit whichHero, integer xpToAdd,   boolean showEyeCandy returns nothing\r\n\
native          SetHeroLevel        takes unit whichHero, integer level,  boolean showEyeCandy returns nothing\r\n\
constant native GetHeroLevel        takes unit whichHero returns integer\r\n\
constant native GetUnitLevel        takes unit whichUnit returns integer\r\n\
native          GetHeroProperName   takes unit whichHero returns string\r\n\
native          SuspendHeroXP       takes unit whichHero, boolean flag returns nothing\r\n\
native          IsSuspendedXP       takes unit whichHero returns boolean\r\n\
native          SelectHeroSkill     takes unit whichHero, integer abilcode returns nothing\r\n\
native          GetUnitAbilityLevel takes unit whichUnit, integer abilcode returns integer\r\n\
native          DecUnitAbilityLevel takes unit whichUnit, integer abilcode returns integer\r\n\
native          IncUnitAbilityLevel takes unit whichUnit, integer abilcode returns integer\r\n\
native          SetUnitAbilityLevel takes unit whichUnit, integer abilcode, integer level returns integer\r\n\
native          ReviveHero          takes unit whichHero, real x, real y, boolean doEyecandy returns boolean\r\n\
native          ReviveHeroLoc       takes unit whichHero, location loc, boolean doEyecandy returns boolean\r\n\
native          SetUnitExploded     takes unit whichUnit, boolean exploded returns nothing\r\n\
native          SetUnitInvulnerable takes unit whichUnit, boolean flag returns nothing\r\n\
native          PauseUnit           takes unit whichUnit, boolean flag returns nothing\r\n\
native          IsUnitPaused        takes unit whichHero returns boolean\r\n\
native          SetUnitPathing      takes unit whichUnit, boolean flag returns nothing\r\n\
\r\n\
native          ClearSelection      takes nothing returns nothing\r\n\
native          SelectUnit          takes unit whichUnit, boolean flag returns nothing\r\n\
\r\n\
native          GetUnitPointValue       takes unit whichUnit returns integer\r\n\
native          GetUnitPointValueByType takes integer unitType returns integer\r\n\
//native        SetUnitPointValueByType takes integer unitType, integer newPointValue returns nothing\r\n\
\r\n\
native          UnitAddItem             takes unit whichUnit, item whichItem returns boolean\r\n\
native          UnitAddItemById         takes unit whichUnit, integer itemId returns item\r\n\
native          UnitAddItemToSlotById   takes unit whichUnit, integer itemId, integer itemSlot returns boolean\r\n\
native          UnitRemoveItem          takes unit whichUnit, item whichItem returns nothing\r\n\
native          UnitRemoveItemFromSlot  takes unit whichUnit, integer itemSlot returns item\r\n\
native          UnitHasItem             takes unit whichUnit, item whichItem returns boolean\r\n\
native          UnitItemInSlot          takes unit whichUnit, integer itemSlot returns item\r\n\
native          UnitInventorySize       takes unit whichUnit returns integer\r\n\
\r\n\
native          UnitDropItemPoint       takes unit whichUnit, item whichItem, real x, real y returns boolean\r\n\
native          UnitDropItemSlot        takes unit whichUnit, item whichItem, integer slot returns boolean\r\n\
native          UnitDropItemTarget      takes unit whichUnit, item whichItem, widget target returns boolean\r\n\
\r\n\
native          UnitUseItem             takes unit whichUnit, item whichItem returns boolean\r\n\
native          UnitUseItemPoint        takes unit whichUnit, item whichItem, real x, real y returns boolean\r\n\
native          UnitUseItemTarget       takes unit whichUnit, item whichItem, widget target returns boolean\r\n\
\r\n\
constant native GetUnitX            takes unit whichUnit returns real\r\n\
constant native GetUnitY            takes unit whichUnit returns real\r\n\
constant native GetUnitLoc          takes unit whichUnit returns location\r\n\
constant native GetUnitFacing       takes unit whichUnit returns real\r\n\
constant native GetUnitMoveSpeed    takes unit whichUnit returns real\r\n\
constant native GetUnitDefaultMoveSpeed takes unit whichUnit returns real\r\n\
constant native GetUnitState        takes unit whichUnit, unitstate whichUnitState returns real\r\n\
constant native GetOwningPlayer     takes unit whichUnit returns player\r\n\
constant native GetUnitTypeId       takes unit whichUnit returns integer\r\n\
constant native GetUnitRace         takes unit whichUnit returns race\r\n\
constant native GetUnitName         takes unit whichUnit returns string\r\n\
constant native GetUnitFoodUsed     takes unit whichUnit returns integer\r\n\
constant native GetUnitFoodMade     takes unit whichUnit returns integer\r\n\
constant native GetFoodMade         takes integer unitId returns integer\r\n\
constant native GetFoodUsed         takes integer unitId returns integer\r\n\
native          SetUnitUseFood      takes unit whichUnit, boolean useFood returns nothing\r\n\
\r\n\
constant native GetUnitRallyPoint           takes unit whichUnit returns location\r\n\
constant native GetUnitRallyUnit            takes unit whichUnit returns unit\r\n\
constant native GetUnitRallyDestructable    takes unit whichUnit returns destructable\r\n\
\r\n\
constant native IsUnitInGroup       takes unit whichUnit, group whichGroup returns boolean\r\n\
constant native IsUnitInForce       takes unit whichUnit, force whichForce returns boolean\r\n\
constant native IsUnitOwnedByPlayer takes unit whichUnit, player whichPlayer returns boolean\r\n\
constant native IsUnitAlly          takes unit whichUnit, player whichPlayer returns boolean\r\n\
constant native IsUnitEnemy         takes unit whichUnit, player whichPlayer returns boolean\r\n\
constant native IsUnitVisible       takes unit whichUnit, player whichPlayer returns boolean\r\n\
constant native IsUnitDetected      takes unit whichUnit, player whichPlayer returns boolean\r\n\
constant native IsUnitInvisible     takes unit whichUnit, player whichPlayer returns boolean\r\n\
constant native IsUnitFogged        takes unit whichUnit, player whichPlayer returns boolean\r\n\
constant native IsUnitMasked        takes unit whichUnit, player whichPlayer returns boolean\r\n\
constant native IsUnitSelected      takes unit whichUnit, player whichPlayer returns boolean\r\n\
constant native IsUnitRace          takes unit whichUnit, race whichRace returns boolean\r\n\
constant native IsUnitType          takes unit whichUnit, unittype whichUnitType returns boolean\r\n\
constant native IsUnit              takes unit whichUnit, unit whichSpecifiedUnit returns boolean\r\n\
constant native IsUnitInRange       takes unit whichUnit, unit otherUnit, real distance returns boolean\r\n\
constant native IsUnitInRangeXY     takes unit whichUnit, real x, real y, real distance returns boolean\r\n\
constant native IsUnitInRangeLoc    takes unit whichUnit, location whichLocation, real distance returns boolean\r\n\
constant native IsUnitHidden        takes unit whichUnit returns boolean\r\n\
constant native IsUnitIllusion      takes unit whichUnit returns boolean\r\n\
\r\n\
constant native IsUnitInTransport   takes unit whichUnit, unit whichTransport returns boolean\r\n\
constant native IsUnitLoaded        takes unit whichUnit returns boolean\r\n\
\r\n\
constant native IsHeroUnitId        takes integer unitId returns boolean\r\n\
constant native IsUnitIdType        takes integer unitId, unittype whichUnitType returns boolean\r\n\
\r\n\
native UnitShareVision              takes unit whichUnit, player whichPlayer, boolean share returns nothing\r\n\
native UnitSuspendDecay             takes unit whichUnit, boolean suspend returns nothing\r\n\
native UnitAddType                  takes unit whichUnit, unittype whichUnitType returns boolean\r\n\
native UnitRemoveType               takes unit whichUnit, unittype whichUnitType returns boolean\r\n\
\r\n\
native UnitAddAbility               takes unit whichUnit, integer abilityId returns boolean\r\n\
native UnitRemoveAbility            takes unit whichUnit, integer abilityId returns boolean\r\n\
native UnitMakeAbilityPermanent     takes unit whichUnit, boolean permanent, integer abilityId returns boolean\r\n\
native UnitRemoveBuffs              takes unit whichUnit, boolean removePositive, boolean removeNegative returns nothing\r\n\
native UnitRemoveBuffsEx            takes unit whichUnit, boolean removePositive, boolean removeNegative, boolean magic, boolean physical, boolean timedLife, boolean aura, boolean autoDispel returns nothing\r\n\
native UnitHasBuffsEx               takes unit whichUnit, boolean removePositive, boolean removeNegative, boolean magic, boolean physical, boolean timedLife, boolean aura, boolean autoDispel returns boolean\r\n\
native UnitCountBuffsEx             takes unit whichUnit, boolean removePositive, boolean removeNegative, boolean magic, boolean physical, boolean timedLife, boolean aura, boolean autoDispel returns integer\r\n\
native UnitAddSleep                 takes unit whichUnit, boolean add returns nothing\r\n\
native UnitCanSleep                 takes unit whichUnit returns boolean\r\n\
native UnitAddSleepPerm             takes unit whichUnit, boolean add returns nothing\r\n\
native UnitCanSleepPerm             takes unit whichUnit returns boolean\r\n\
native UnitIsSleeping               takes unit whichUnit returns boolean\r\n\
native UnitWakeUp                   takes unit whichUnit returns nothing\r\n\
native UnitApplyTimedLife           takes unit whichUnit, integer buffId, real duration returns nothing\r\n\
native UnitIgnoreAlarm              takes unit whichUnit, boolean flag returns boolean\r\n\
native UnitIgnoreAlarmToggled       takes unit whichUnit returns boolean\r\n\
native UnitResetCooldown            takes unit whichUnit returns nothing\r\n\
native UnitSetConstructionProgress  takes unit whichUnit, integer constructionPercentage returns nothing\r\n\
native UnitSetUpgradeProgress       takes unit whichUnit, integer upgradePercentage returns nothing\r\n\
native UnitPauseTimedLife           takes unit whichUnit, boolean flag returns nothing\r\n\
native UnitSetUsesAltIcon           takes unit whichUnit, boolean flag returns nothing\r\n\
\r\n\
native UnitDamagePoint              takes unit whichUnit, real delay, real radius, real x, real y, real amount, boolean attack, boolean ranged, attacktype attackType, damagetype damageType, weapontype weaponType returns boolean\r\n\
native UnitDamageTarget             takes unit whichUnit, widget target, real amount, boolean attack, boolean ranged, attacktype attackType, damagetype damageType, weapontype weaponType returns boolean\r\n\
\r\n\
native IssueImmediateOrder          takes unit whichUnit, string order returns boolean\r\n\
native IssueImmediateOrderById      takes unit whichUnit, integer order returns boolean\r\n\
native IssuePointOrder              takes unit whichUnit, string order, real x, real y returns boolean\r\n\
native IssuePointOrderLoc           takes unit whichUnit, string order, location whichLocation returns boolean\r\n\
native IssuePointOrderById          takes unit whichUnit, integer order, real x, real y returns boolean\r\n\
native IssuePointOrderByIdLoc       takes unit whichUnit, integer order, location whichLocation returns boolean\r\n\
native IssueTargetOrder             takes unit whichUnit, string order, widget targetWidget returns boolean\r\n\
native IssueTargetOrderById         takes unit whichUnit, integer order, widget targetWidget returns boolean\r\n\
native IssueInstantPointOrder       takes unit whichUnit, string order, real x, real y, widget instantTargetWidget returns boolean\r\n\
native IssueInstantPointOrderById   takes unit whichUnit, integer order, real x, real y, widget instantTargetWidget returns boolean\r\n\
native IssueInstantTargetOrder      takes unit whichUnit, string order, widget targetWidget, widget instantTargetWidget returns boolean\r\n\
native IssueInstantTargetOrderById  takes unit whichUnit, integer order, widget targetWidget, widget instantTargetWidget returns boolean\r\n\
native IssueBuildOrder              takes unit whichPeon, string unitToBuild, real x, real y returns boolean\r\n\
native IssueBuildOrderById          takes unit whichPeon, integer unitId, real x, real y returns boolean\r\n\
\r\n\
native IssueNeutralImmediateOrder       takes player forWhichPlayer, unit neutralStructure, string unitToBuild returns boolean\r\n\
native IssueNeutralImmediateOrderById   takes player forWhichPlayer,unit neutralStructure, integer unitId returns boolean\r\n\
native IssueNeutralPointOrder           takes player forWhichPlayer,unit neutralStructure, string unitToBuild, real x, real y returns boolean\r\n\
native IssueNeutralPointOrderById       takes player forWhichPlayer,unit neutralStructure, integer unitId, real x, real y returns boolean\r\n\
native IssueNeutralTargetOrder          takes player forWhichPlayer,unit neutralStructure, string unitToBuild, widget target returns boolean\r\n\
native IssueNeutralTargetOrderById      takes player forWhichPlayer,unit neutralStructure, integer unitId, widget target returns boolean\r\n\
\r\n\
native GetUnitCurrentOrder          takes unit whichUnit returns integer\r\n\
\r\n\
native SetResourceAmount            takes unit whichUnit, integer amount returns nothing\r\n\
native AddResourceAmount            takes unit whichUnit, integer amount returns nothing\r\n\
native GetResourceAmount            takes unit whichUnit returns integer\r\n\
\r\n\
native WaygateGetDestinationX       takes unit waygate returns real\r\n\
native WaygateGetDestinationY       takes unit waygate returns real\r\n\
native WaygateSetDestination        takes unit waygate, real x, real y returns nothing\r\n\
native WaygateActivate              takes unit waygate, boolean activate returns nothing\r\n\
native WaygateIsActive              takes unit waygate returns boolean\r\n\
\r\n\
native AddItemToAllStock            takes integer itemId, integer currentStock, integer stockMax returns nothing\r\n\
native AddItemToStock               takes unit whichUnit, integer itemId, integer currentStock, integer stockMax returns nothing\r\n\
native AddUnitToAllStock            takes integer unitId, integer currentStock, integer stockMax returns nothing\r\n\
native AddUnitToStock               takes unit whichUnit, integer unitId, integer currentStock, integer stockMax returns nothing\r\n\
\r\n\
native RemoveItemFromAllStock       takes integer itemId returns nothing\r\n\
native RemoveItemFromStock          takes unit whichUnit, integer itemId returns nothing\r\n\
native RemoveUnitFromAllStock       takes integer unitId returns nothing\r\n\
native RemoveUnitFromStock          takes unit whichUnit, integer unitId returns nothing\r\n\
\r\n\
native SetAllItemTypeSlots          takes integer slots returns nothing\r\n\
native SetAllUnitTypeSlots          takes integer slots returns nothing\r\n\
native SetItemTypeSlots             takes unit whichUnit, integer slots returns nothing\r\n\
native SetUnitTypeSlots             takes unit whichUnit, integer slots returns nothing\r\n\
\r\n\
native GetUnitUserData              takes unit whichUnit returns integer\r\n\
native SetUnitUserData              takes unit whichUnit, integer data returns nothing\r\n\
\r\n\
//============================================================================\r\n\
// Player API\r\n\
constant native Player              takes integer number returns player\r\n\
constant native GetLocalPlayer      takes nothing returns player\r\n\
constant native IsPlayerAlly        takes player whichPlayer, player otherPlayer returns boolean\r\n\
constant native IsPlayerEnemy       takes player whichPlayer, player otherPlayer returns boolean\r\n\
constant native IsPlayerInForce     takes player whichPlayer, force whichForce returns boolean\r\n\
constant native IsPlayerObserver    takes player whichPlayer returns boolean\r\n\
constant native IsVisibleToPlayer           takes real x, real y, player whichPlayer returns boolean\r\n\
constant native IsLocationVisibleToPlayer   takes location whichLocation, player whichPlayer returns boolean\r\n\
constant native IsFoggedToPlayer            takes real x, real y, player whichPlayer returns boolean\r\n\
constant native IsLocationFoggedToPlayer    takes location whichLocation, player whichPlayer returns boolean\r\n\
constant native IsMaskedToPlayer            takes real x, real y, player whichPlayer returns boolean\r\n\
constant native IsLocationMaskedToPlayer    takes location whichLocation, player whichPlayer returns boolean\r\n\
\r\n\
constant native GetPlayerRace           takes player whichPlayer returns race\r\n\
constant native GetPlayerId             takes player whichPlayer returns integer\r\n\
constant native GetPlayerUnitCount      takes player whichPlayer, boolean includeIncomplete returns integer\r\n\
constant native GetPlayerTypedUnitCount takes player whichPlayer, string unitName, boolean includeIncomplete, boolean includeUpgrades returns integer\r\n\
constant native GetPlayerStructureCount takes player whichPlayer, boolean includeIncomplete returns integer\r\n\
constant native GetPlayerState          takes player whichPlayer, playerstate whichPlayerState returns integer\r\n\
constant native GetPlayerScore          takes player whichPlayer, playerscore whichPlayerScore returns integer\r\n\
constant native GetPlayerAlliance       takes player sourcePlayer, player otherPlayer, alliancetype whichAllianceSetting returns boolean\r\n\
\r\n\
constant native GetPlayerHandicap       takes player whichPlayer returns real\r\n\
constant native GetPlayerHandicapXP     takes player whichPlayer returns real\r\n\
constant native SetPlayerHandicap       takes player whichPlayer, real handicap returns nothing\r\n\
constant native SetPlayerHandicapXP     takes player whichPlayer, real handicap returns nothing\r\n\
\r\n\
constant native SetPlayerTechMaxAllowed takes player whichPlayer, integer techid, integer maximum returns nothing\r\n\
constant native GetPlayerTechMaxAllowed takes player whichPlayer, integer techid returns integer\r\n\
constant native AddPlayerTechResearched takes player whichPlayer, integer techid, integer levels returns nothing\r\n\
constant native SetPlayerTechResearched takes player whichPlayer, integer techid, integer setToLevel returns nothing\r\n\
constant native GetPlayerTechResearched takes player whichPlayer, integer techid, boolean specificonly returns boolean\r\n\
constant native GetPlayerTechCount      takes player whichPlayer, integer techid, boolean specificonly returns integer\r\n\
\r\n\
native SetPlayerUnitsOwner takes player whichPlayer, integer newOwner returns nothing\r\n\
native CripplePlayer takes player whichPlayer, force toWhichPlayers, boolean flag returns nothing\r\n\
\r\n\
native SetPlayerAbilityAvailable        takes player whichPlayer, integer abilid, boolean avail returns nothing\r\n\
\r\n\
native SetPlayerState   takes player whichPlayer, playerstate whichPlayerState, integer value returns nothing\r\n\
native RemovePlayer     takes player whichPlayer, playergameresult gameResult returns nothing\r\n\
\r\n\
// Used to store hero level data for the scorescreen\r\n\
// before units are moved to neutral passive in melee games\r\n\
//\r\n\
native CachePlayerHeroData takes player whichPlayer returns nothing\r\n\
\r\n\
//============================================================================\r\n\
// Fog of War API\r\n\
native  SetFogStateRect      takes player forWhichPlayer, fogstate whichState, rect where, boolean useSharedVision returns nothing\r\n\
native  SetFogStateRadius    takes player forWhichPlayer, fogstate whichState, real centerx, real centerY, real radius, boolean useSharedVision returns nothing\r\n\
native  SetFogStateRadiusLoc takes player forWhichPlayer, fogstate whichState, location center, real radius, boolean useSharedVision returns nothing\r\n\
native  FogMaskEnable        takes boolean enable returns nothing\r\n\
native  IsFogMaskEnabled     takes nothing returns boolean\r\n\
native  FogEnable            takes boolean enable returns nothing\r\n\
native  IsFogEnabled         takes nothing returns boolean\r\n\
\r\n\
native CreateFogModifierRect        takes player forWhichPlayer, fogstate whichState, rect where, boolean useSharedVision, boolean afterUnits returns fogmodifier\r\n\
native CreateFogModifierRadius      takes player forWhichPlayer, fogstate whichState, real centerx, real centerY, real radius, boolean useSharedVision, boolean afterUnits returns fogmodifier\r\n\
native CreateFogModifierRadiusLoc   takes player forWhichPlayer, fogstate whichState, location center, real radius, boolean useSharedVision, boolean afterUnits returns fogmodifier\r\n\
native DestroyFogModifier           takes fogmodifier whichFogModifier returns nothing\r\n\
native FogModifierStart             takes fogmodifier whichFogModifier returns nothing\r\n\
native FogModifierStop              takes fogmodifier whichFogModifier returns nothing\r\n\
\r\n\
//============================================================================\r\n\
// Game API\r\n\
native VersionGet takes nothing returns version\r\n\
native VersionCompatible takes version whichVersion returns boolean\r\n\
native VersionSupported takes version whichVersion returns boolean\r\n\
\r\n\
native EndGame takes boolean doScoreScreen returns nothing\r\n\
\r\n\
// Async only!\r\n\
native          ChangeLevel         takes string newLevel, boolean doScoreScreen returns nothing\r\n\
native          RestartGame         takes boolean doScoreScreen returns nothing\r\n\
native          ReloadGame          takes nothing returns nothing\r\n\
// %%% SetCampaignMenuRace is deprecated.  It must remain to support\r\n\
// old maps which use it, but all new maps should use SetCampaignMenuRaceEx\r\n\
native          SetCampaignMenuRace takes race r returns nothing\r\n\
native          SetCampaignMenuRaceEx takes integer campaignIndex returns nothing\r\n\
native          ForceCampaignSelectScreen takes nothing returns nothing\r\n\
\r\n\
native          LoadGame            takes string saveFileName, boolean doScoreScreen returns nothing\r\n\
native          SaveGame            takes string saveFileName returns nothing\r\n\
native          RenameSaveDirectory takes string sourceDirName, string destDirName returns boolean\r\n\
native          RemoveSaveDirectory takes string sourceDirName returns boolean\r\n\
native          CopySaveGame        takes string sourceSaveName, string destSaveName returns boolean\r\n\
native          SaveGameExists      takes string saveName returns boolean\r\n\
native          SyncSelections      takes nothing returns nothing\r\n\
native          SetFloatGameState   takes fgamestate whichFloatGameState, real value returns nothing\r\n\
constant native GetFloatGameState   takes fgamestate whichFloatGameState returns real\r\n\
native          SetIntegerGameState takes igamestate whichIntegerGameState, integer value returns nothing\r\n\
constant native GetIntegerGameState takes igamestate whichIntegerGameState returns integer\r\n\
\r\n\
\r\n\
//============================================================================\r\n\
// Campaign API\r\n\
native  SetTutorialCleared      takes boolean cleared returns nothing\r\n\
native  SetMissionAvailable     takes integer campaignNumber, integer missionNumber, boolean available returns nothing\r\n\
native  SetCampaignAvailable    takes integer campaignNumber, boolean available  returns nothing\r\n\
native  SetOpCinematicAvailable takes integer campaignNumber, boolean available  returns nothing\r\n\
native  SetEdCinematicAvailable takes integer campaignNumber, boolean available  returns nothing\r\n\
native  GetDefaultDifficulty    takes nothing returns gamedifficulty\r\n\
native  SetDefaultDifficulty    takes gamedifficulty g returns nothing\r\n\
native  SetCustomCampaignButtonVisible  takes integer whichButton, boolean visible returns nothing\r\n\
native  GetCustomCampaignButtonVisible  takes integer whichButton returns boolean\r\n\
native  DoNotSaveReplay         takes nothing returns nothing\r\n\
\r\n\
//============================================================================\r\n\
// Dialog API\r\n\
native DialogCreate                 takes nothing returns dialog\r\n\
native DialogDestroy                takes dialog whichDialog returns nothing\r\n\
native DialogClear                  takes dialog whichDialog returns nothing\r\n\
native DialogSetMessage             takes dialog whichDialog, string messageText returns nothing\r\n\
native DialogAddButton              takes dialog whichDialog, string buttonText, integer hotkey returns button\r\n\
native DialogAddQuitButton          takes dialog whichDialog, boolean doScoreScreen, string buttonText, integer hotkey returns button\r\n\
native DialogDisplay                takes player whichPlayer, dialog whichDialog, boolean flag returns nothing\r\n\
\r\n\
// Creates a new or reads in an existing game cache file stored\r\n\
// in the current campaign profile dir\r\n\
//\r\n\
native  ReloadGameCachesFromDisk takes nothing returns boolean\r\n\
\r\n\
native  InitGameCache    takes string campaignFile returns gamecache\r\n\
native  SaveGameCache    takes gamecache whichCache returns boolean\r\n\
\r\n\
native  StoreInteger					takes gamecache cache, string missionKey, string key, integer value returns nothing\r\n\
native  StoreReal						takes gamecache cache, string missionKey, string key, real value returns nothing\r\n\
native  StoreBoolean					takes gamecache cache, string missionKey, string key, boolean value returns nothing\r\n\
native  StoreUnit						takes gamecache cache, string missionKey, string key, unit whichUnit returns boolean\r\n\
native  StoreString						takes gamecache cache, string missionKey, string key, string value returns boolean\r\n\
\r\n\
native SyncStoredInteger        takes gamecache cache, string missionKey, string key returns nothing\r\n\
native SyncStoredReal           takes gamecache cache, string missionKey, string key returns nothing\r\n\
native SyncStoredBoolean        takes gamecache cache, string missionKey, string key returns nothing\r\n\
native SyncStoredUnit           takes gamecache cache, string missionKey, string key returns nothing\r\n\
native SyncStoredString         takes gamecache cache, string missionKey, string key returns nothing\r\n\
\r\n\
native  HaveStoredInteger					takes gamecache cache, string missionKey, string key returns boolean\r\n\
native  HaveStoredReal						takes gamecache cache, string missionKey, string key returns boolean\r\n\
native  HaveStoredBoolean					takes gamecache cache, string missionKey, string key returns boolean\r\n\
native  HaveStoredUnit						takes gamecache cache, string missionKey, string key returns boolean\r\n\
native  HaveStoredString					takes gamecache cache, string missionKey, string key returns boolean\r\n\
\r\n\
native  FlushGameCache						takes gamecache cache returns nothing\r\n\
native  FlushStoredMission					takes gamecache cache, string missionKey returns nothing\r\n\
native  FlushStoredInteger					takes gamecache cache, string missionKey, string key returns nothing\r\n\
native  FlushStoredReal						takes gamecache cache, string missionKey, string key returns nothing\r\n\
native  FlushStoredBoolean					takes gamecache cache, string missionKey, string key returns nothing\r\n\
native  FlushStoredUnit						takes gamecache cache, string missionKey, string key returns nothing\r\n\
native  FlushStoredString					takes gamecache cache, string missionKey, string key returns nothing\r\n\
\r\n\
// Will return 0 if the specified value's data is not found in the cache\r\n\
native  GetStoredInteger				takes gamecache cache, string missionKey, string key returns integer\r\n\
native  GetStoredReal					takes gamecache cache, string missionKey, string key returns real\r\n\
native  GetStoredBoolean				takes gamecache cache, string missionKey, string key returns boolean\r\n\
native  GetStoredString					takes gamecache cache, string missionKey, string key returns string\r\n\
native  RestoreUnit						takes gamecache cache, string missionKey, string key, player forWhichPlayer, real x, real y, real facing returns unit\r\n\
\r\n\
\r\n\
native  InitHashtable    takes nothing returns hashtable\r\n\
\r\n\
native  SaveInteger						takes hashtable table, integer parentKey, integer childKey, integer value returns nothing\r\n\
native  SaveReal						takes hashtable table, integer parentKey, integer childKey, real value returns nothing\r\n\
native  SaveBoolean						takes hashtable table, integer parentKey, integer childKey, boolean value returns nothing\r\n\
native  SaveStr							takes hashtable table, integer parentKey, integer childKey, string value returns boolean\r\n\
native  SavePlayerHandle				takes hashtable table, integer parentKey, integer childKey, player whichPlayer returns boolean\r\n\
native  SaveWidgetHandle				takes hashtable table, integer parentKey, integer childKey, widget whichWidget returns boolean\r\n\
native  SaveDestructableHandle			takes hashtable table, integer parentKey, integer childKey, destructable whichDestructable returns boolean\r\n\
native  SaveItemHandle					takes hashtable table, integer parentKey, integer childKey, item whichItem returns boolean\r\n\
native  SaveUnitHandle					takes hashtable table, integer parentKey, integer childKey, unit whichUnit returns boolean\r\n\
native  SaveAbilityHandle				takes hashtable table, integer parentKey, integer childKey, ability whichAbility returns boolean\r\n\
native  SaveTimerHandle					takes hashtable table, integer parentKey, integer childKey, timer whichTimer returns boolean\r\n\
native  SaveTriggerHandle				takes hashtable table, integer parentKey, integer childKey, trigger whichTrigger returns boolean\r\n\
native  SaveTriggerConditionHandle		takes hashtable table, integer parentKey, integer childKey, triggercondition whichTriggercondition returns boolean\r\n\
native  SaveTriggerActionHandle			takes hashtable table, integer parentKey, integer childKey, triggeraction whichTriggeraction returns boolean\r\n\
native  SaveTriggerEventHandle			takes hashtable table, integer parentKey, integer childKey, event whichEvent returns boolean\r\n\
native  SaveForceHandle					takes hashtable table, integer parentKey, integer childKey, force whichForce returns boolean\r\n\
native  SaveGroupHandle					takes hashtable table, integer parentKey, integer childKey, group whichGroup returns boolean\r\n\
native  SaveLocationHandle				takes hashtable table, integer parentKey, integer childKey, location whichLocation returns boolean\r\n\
native  SaveRectHandle					takes hashtable table, integer parentKey, integer childKey, rect whichRect returns boolean\r\n\
native  SaveBooleanExprHandle			takes hashtable table, integer parentKey, integer childKey, boolexpr whichBoolexpr returns boolean\r\n\
native  SaveSoundHandle					takes hashtable table, integer parentKey, integer childKey, sound whichSound returns boolean\r\n\
native  SaveEffectHandle				takes hashtable table, integer parentKey, integer childKey, effect whichEffect returns boolean\r\n\
native  SaveUnitPoolHandle				takes hashtable table, integer parentKey, integer childKey, unitpool whichUnitpool returns boolean\r\n\
native  SaveItemPoolHandle				takes hashtable table, integer parentKey, integer childKey, itempool whichItempool returns boolean\r\n\
native  SaveQuestHandle					takes hashtable table, integer parentKey, integer childKey, quest whichQuest returns boolean\r\n\
native  SaveQuestItemHandle				takes hashtable table, integer parentKey, integer childKey, questitem whichQuestitem returns boolean\r\n\
native  SaveDefeatConditionHandle		takes hashtable table, integer parentKey, integer childKey, defeatcondition whichDefeatcondition returns boolean\r\n\
native  SaveTimerDialogHandle			takes hashtable table, integer parentKey, integer childKey, timerdialog whichTimerdialog returns boolean\r\n\
native  SaveLeaderboardHandle			takes hashtable table, integer parentKey, integer childKey, leaderboard whichLeaderboard returns boolean\r\n\
native  SaveMultiboardHandle			takes hashtable table, integer parentKey, integer childKey, multiboard whichMultiboard returns boolean\r\n\
native  SaveMultiboardItemHandle		takes hashtable table, integer parentKey, integer childKey, multiboarditem whichMultiboarditem returns boolean\r\n\
native  SaveTrackableHandle				takes hashtable table, integer parentKey, integer childKey, trackable whichTrackable returns boolean\r\n\
native  SaveDialogHandle				takes hashtable table, integer parentKey, integer childKey, dialog whichDialog returns boolean\r\n\
native  SaveButtonHandle				takes hashtable table, integer parentKey, integer childKey, button whichButton returns boolean\r\n\
native  SaveTextTagHandle				takes hashtable table, integer parentKey, integer childKey, texttag whichTexttag returns boolean\r\n\
native  SaveLightningHandle				takes hashtable table, integer parentKey, integer childKey, lightning whichLightning returns boolean\r\n\
native  SaveImageHandle					takes hashtable table, integer parentKey, integer childKey, image whichImage returns boolean\r\n\
native  SaveUbersplatHandle				takes hashtable table, integer parentKey, integer childKey, ubersplat whichUbersplat returns boolean\r\n\
native  SaveRegionHandle				takes hashtable table, integer parentKey, integer childKey, region whichRegion returns boolean\r\n\
native  SaveFogStateHandle				takes hashtable table, integer parentKey, integer childKey, fogstate whichFogState returns boolean\r\n\
native  SaveFogModifierHandle			takes hashtable table, integer parentKey, integer childKey, fogmodifier whichFogModifier returns boolean\r\n\
native  SaveAgentHandle					takes hashtable table, integer parentKey, integer childKey, agent whichAgent returns boolean\r\n\
native  SaveHashtableHandle				takes hashtable table, integer parentKey, integer childKey, hashtable whichHashtable returns boolean\r\n\
\r\n\
\r\n\
native  LoadInteger					takes hashtable table, integer parentKey, integer childKey returns integer\r\n\
native  LoadReal					takes hashtable table, integer parentKey, integer childKey returns real\r\n\
native  LoadBoolean				    takes hashtable table, integer parentKey, integer childKey returns boolean\r\n\
native  LoadStr 					takes hashtable table, integer parentKey, integer childKey returns string\r\n\
native  LoadPlayerHandle			takes hashtable table, integer parentKey, integer childKey returns player\r\n\
native  LoadWidgetHandle			takes hashtable table, integer parentKey, integer childKey returns widget\r\n\
native  LoadDestructableHandle		takes hashtable table, integer parentKey, integer childKey returns destructable\r\n\
native  LoadItemHandle				takes hashtable table, integer parentKey, integer childKey returns item\r\n\
native  LoadUnitHandle				takes hashtable table, integer parentKey, integer childKey returns unit\r\n\
native  LoadAbilityHandle			takes hashtable table, integer parentKey, integer childKey returns ability\r\n\
native  LoadTimerHandle				takes hashtable table, integer parentKey, integer childKey returns timer\r\n\
native  LoadTriggerHandle			takes hashtable table, integer parentKey, integer childKey returns trigger\r\n\
native  LoadTriggerConditionHandle	takes hashtable table, integer parentKey, integer childKey returns triggercondition\r\n\
native  LoadTriggerActionHandle		takes hashtable table, integer parentKey, integer childKey returns triggeraction\r\n\
native  LoadTriggerEventHandle		takes hashtable table, integer parentKey, integer childKey returns event\r\n\
native  LoadForceHandle				takes hashtable table, integer parentKey, integer childKey returns force\r\n\
native  LoadGroupHandle				takes hashtable table, integer parentKey, integer childKey returns group\r\n\
native  LoadLocationHandle			takes hashtable table, integer parentKey, integer childKey returns location\r\n\
native  LoadRectHandle				takes hashtable table, integer parentKey, integer childKey returns rect\r\n\
native  LoadBooleanExprHandle		takes hashtable table, integer parentKey, integer childKey returns boolexpr\r\n\
native  LoadSoundHandle				takes hashtable table, integer parentKey, integer childKey returns sound\r\n\
native  LoadEffectHandle			takes hashtable table, integer parentKey, integer childKey returns effect\r\n\
native  LoadUnitPoolHandle			takes hashtable table, integer parentKey, integer childKey returns unitpool\r\n\
native  LoadItemPoolHandle			takes hashtable table, integer parentKey, integer childKey returns itempool\r\n\
native  LoadQuestHandle				takes hashtable table, integer parentKey, integer childKey returns quest\r\n\
native  LoadQuestItemHandle			takes hashtable table, integer parentKey, integer childKey returns questitem\r\n\
native  LoadDefeatConditionHandle	takes hashtable table, integer parentKey, integer childKey returns defeatcondition\r\n\
native  LoadTimerDialogHandle		takes hashtable table, integer parentKey, integer childKey returns timerdialog\r\n\
native  LoadLeaderboardHandle		takes hashtable table, integer parentKey, integer childKey returns leaderboard\r\n\
native  LoadMultiboardHandle		takes hashtable table, integer parentKey, integer childKey returns multiboard\r\n\
native  LoadMultiboardItemHandle	takes hashtable table, integer parentKey, integer childKey returns multiboarditem\r\n\
native  LoadTrackableHandle			takes hashtable table, integer parentKey, integer childKey returns trackable\r\n\
native  LoadDialogHandle			takes hashtable table, integer parentKey, integer childKey returns dialog\r\n\
native  LoadButtonHandle			takes hashtable table, integer parentKey, integer childKey returns button\r\n\
native  LoadTextTagHandle			takes hashtable table, integer parentKey, integer childKey returns texttag\r\n\
native  LoadLightningHandle			takes hashtable table, integer parentKey, integer childKey returns lightning\r\n\
native  LoadImageHandle				takes hashtable table, integer parentKey, integer childKey returns image\r\n\
native  LoadUbersplatHandle			takes hashtable table, integer parentKey, integer childKey returns ubersplat\r\n\
native  LoadRegionHandle			takes hashtable table, integer parentKey, integer childKey returns region\r\n\
native  LoadFogStateHandle			takes hashtable table, integer parentKey, integer childKey returns fogstate\r\n\
native  LoadFogModifierHandle		takes hashtable table, integer parentKey, integer childKey returns fogmodifier\r\n\
native  LoadHashtableHandle			takes hashtable table, integer parentKey, integer childKey returns hashtable\r\n\
\r\n\
native  HaveSavedInteger					takes hashtable table, integer parentKey, integer childKey returns boolean\r\n\
native  HaveSavedReal						takes hashtable table, integer parentKey, integer childKey returns boolean\r\n\
native  HaveSavedBoolean					takes hashtable table, integer parentKey, integer childKey returns boolean\r\n\
native  HaveSavedString					    takes hashtable table, integer parentKey, integer childKey returns boolean\r\n\
native  HaveSavedHandle     				takes hashtable table, integer parentKey, integer childKey returns boolean\r\n\
\r\n\
native  RemoveSavedInteger					takes hashtable table, integer parentKey, integer childKey returns nothing\r\n\
native  RemoveSavedReal						takes hashtable table, integer parentKey, integer childKey returns nothing\r\n\
native  RemoveSavedBoolean					takes hashtable table, integer parentKey, integer childKey returns nothing\r\n\
native  RemoveSavedString					takes hashtable table, integer parentKey, integer childKey returns nothing\r\n\
native  RemoveSavedHandle					takes hashtable table, integer parentKey, integer childKey returns nothing\r\n\
\r\n\
native  FlushParentHashtable						takes hashtable table returns nothing\r\n\
native  FlushChildHashtable					takes hashtable table, integer parentKey returns nothing\r\n\
\r\n\
\r\n\
//============================================================================\r\n\
// Randomization API\r\n\
native GetRandomInt takes integer lowBound, integer highBound returns integer\r\n\
native GetRandomReal takes real lowBound, real highBound returns real\r\n\
\r\n\
native CreateUnitPool           takes nothing returns unitpool\r\n\
native DestroyUnitPool          takes unitpool whichPool returns nothing\r\n\
native UnitPoolAddUnitType      takes unitpool whichPool, integer unitId, real weight returns nothing\r\n\
native UnitPoolRemoveUnitType   takes unitpool whichPool, integer unitId returns nothing\r\n\
native PlaceRandomUnit          takes unitpool whichPool, player forWhichPlayer, real x, real y, real facing returns unit\r\n\
\r\n\
native CreateItemPool           takes nothing returns itempool\r\n\
native DestroyItemPool          takes itempool whichItemPool returns nothing\r\n\
native ItemPoolAddItemType      takes itempool whichItemPool, integer itemId, real weight returns nothing\r\n\
native ItemPoolRemoveItemType   takes itempool whichItemPool, integer itemId returns nothing\r\n\
native PlaceRandomItem          takes itempool whichItemPool, real x, real y returns item\r\n\
\r\n\
// Choose any random unit/item. (NP means Neutral Passive)\r\n\
native ChooseRandomCreep        takes integer level returns integer\r\n\
native ChooseRandomNPBuilding   takes nothing returns integer\r\n\
native ChooseRandomItem         takes integer level returns integer\r\n\
native ChooseRandomItemEx       takes itemtype whichType, integer level returns integer\r\n\
native SetRandomSeed            takes integer seed returns nothing\r\n\
\r\n\
//============================================================================\r\n\
// Visual API\r\n\
native SetTerrainFog                takes real a, real b, real c, real d, real e returns nothing\r\n\
native ResetTerrainFog              takes nothing returns nothing\r\n\
\r\n\
native SetUnitFog                   takes real a, real b, real c, real d, real e returns nothing\r\n\
native SetTerrainFogEx              takes integer style, real zstart, real zend, real density, real red, real green, real blue returns nothing\r\n\
native DisplayTextToPlayer          takes player toPlayer, real x, real y, string message returns nothing\r\n\
native DisplayTimedTextToPlayer     takes player toPlayer, real x, real y, real duration, string message returns nothing\r\n\
native DisplayTimedTextFromPlayer   takes player toPlayer, real x, real y, real duration, string message returns nothing\r\n\
native ClearTextMessages            takes nothing returns nothing\r\n\
native SetDayNightModels            takes string terrainDNCFile, string unitDNCFile returns nothing\r\n\
native SetSkyModel                  takes string skyModelFile returns nothing\r\n\
native EnableUserControl            takes boolean b returns nothing\r\n\
native EnableUserUI                 takes boolean b returns nothing\r\n\
native SuspendTimeOfDay             takes boolean b returns nothing\r\n\
native SetTimeOfDayScale            takes real r returns nothing\r\n\
native GetTimeOfDayScale            takes nothing returns real\r\n\
native ShowInterface                takes boolean flag, real fadeDuration returns nothing\r\n\
native PauseGame                    takes boolean flag returns nothing\r\n\
native UnitAddIndicator             takes unit whichUnit, integer red, integer green, integer blue, integer alpha returns nothing\r\n\
native AddIndicator                 takes widget whichWidget, integer red, integer green, integer blue, integer alpha returns nothing\r\n\
native PingMinimap                  takes real x, real y, real duration returns nothing\r\n\
native PingMinimapEx                takes real x, real y, real duration, integer red, integer green, integer blue, boolean extraEffects returns nothing\r\n\
native EnableOcclusion              takes boolean flag returns nothing\r\n\
native SetIntroShotText             takes string introText returns nothing\r\n\
native SetIntroShotModel            takes string introModelPath returns nothing\r\n\
native EnableWorldFogBoundary       takes boolean b returns nothing\r\n\
native PlayModelCinematic           takes string modelName returns nothing\r\n\
native PlayCinematic                takes string movieName returns nothing\r\n\
native ForceUIKey                   takes string key returns nothing\r\n\
native ForceUICancel                takes nothing returns nothing\r\n\
native DisplayLoadDialog            takes nothing returns nothing\r\n\
native SetAltMinimapIcon            takes string iconPath returns nothing\r\n\
native DisableRestartMission        takes boolean flag returns nothing\r\n\
\r\n\
native CreateTextTag                takes nothing returns texttag\r\n\
native DestroyTextTag               takes texttag t returns nothing\r\n\
native SetTextTagText               takes texttag t, string s, real height returns nothing\r\n\
native SetTextTagPos                takes texttag t, real x, real y, real heightOffset returns nothing\r\n\
native SetTextTagPosUnit            takes texttag t, unit whichUnit, real heightOffset returns nothing\r\n\
native SetTextTagColor              takes texttag t, integer red, integer green, integer blue, integer alpha returns nothing\r\n\
native SetTextTagVelocity           takes texttag t, real xvel, real yvel returns nothing\r\n\
native SetTextTagVisibility         takes texttag t, boolean flag returns nothing\r\n\
native SetTextTagSuspended          takes texttag t, boolean flag returns nothing\r\n\
native SetTextTagPermanent          takes texttag t, boolean flag returns nothing\r\n\
native SetTextTagAge                takes texttag t, real age returns nothing\r\n\
native SetTextTagLifespan           takes texttag t, real lifespan returns nothing\r\n\
native SetTextTagFadepoint          takes texttag t, real fadepoint returns nothing\r\n\
\r\n\
native SetReservedLocalHeroButtons  takes integer reserved returns nothing\r\n\
native GetAllyColorFilterState      takes nothing returns integer\r\n\
native SetAllyColorFilterState      takes integer state returns nothing\r\n\
native GetCreepCampFilterState      takes nothing returns boolean\r\n\
native SetCreepCampFilterState      takes boolean state returns nothing\r\n\
native EnableMinimapFilterButtons   takes boolean enableAlly, boolean enableCreep returns nothing\r\n\
native EnableDragSelect             takes boolean state, boolean ui returns nothing\r\n\
native EnablePreSelect              takes boolean state, boolean ui returns nothing\r\n\
native EnableSelect                 takes boolean state, boolean ui returns nothing\r\n\
\r\n\
//============================================================================\r\n\
// Trackable API\r\n\
native CreateTrackable      takes string trackableModelPath, real x, real y, real facing returns trackable\r\n\
\r\n\
//============================================================================\r\n\
// Quest API\r\n\
native CreateQuest          takes nothing returns quest\r\n\
native DestroyQuest         takes quest whichQuest returns nothing\r\n\
native QuestSetTitle        takes quest whichQuest, string title returns nothing\r\n\
native QuestSetDescription  takes quest whichQuest, string description returns nothing\r\n\
native QuestSetIconPath     takes quest whichQuest, string iconPath returns nothing\r\n\
\r\n\
native QuestSetRequired     takes quest whichQuest, boolean required   returns nothing\r\n\
native QuestSetCompleted    takes quest whichQuest, boolean completed  returns nothing\r\n\
native QuestSetDiscovered   takes quest whichQuest, boolean discovered returns nothing\r\n\
native QuestSetFailed       takes quest whichQuest, boolean failed     returns nothing\r\n\
native QuestSetEnabled      takes quest whichQuest, boolean enabled    returns nothing\r\n\
    \r\n\
native IsQuestRequired     takes quest whichQuest returns boolean\r\n\
native IsQuestCompleted    takes quest whichQuest returns boolean\r\n\
native IsQuestDiscovered   takes quest whichQuest returns boolean\r\n\
native IsQuestFailed       takes quest whichQuest returns boolean\r\n\
native IsQuestEnabled      takes quest whichQuest returns boolean\r\n\
\r\n\
native QuestCreateItem          takes quest whichQuest returns questitem\r\n\
native QuestItemSetDescription  takes questitem whichQuestItem, string description returns nothing\r\n\
native QuestItemSetCompleted    takes questitem whichQuestItem, boolean completed returns nothing\r\n\
\r\n\
native IsQuestItemCompleted     takes questitem whichQuestItem returns boolean\r\n\
\r\n\
native CreateDefeatCondition            takes nothing returns defeatcondition\r\n\
native DestroyDefeatCondition           takes defeatcondition whichCondition returns nothing\r\n\
native DefeatConditionSetDescription    takes defeatcondition whichCondition, string description returns nothing\r\n\
\r\n\
native FlashQuestDialogButton   takes nothing returns nothing\r\n\
native ForceQuestDialogUpdate   takes nothing returns nothing\r\n\
\r\n\
//============================================================================\r\n\
// Timer Dialog API\r\n\
native CreateTimerDialog                takes timer t returns timerdialog\r\n\
native DestroyTimerDialog               takes timerdialog whichDialog returns nothing\r\n\
native TimerDialogSetTitle              takes timerdialog whichDialog, string title returns nothing\r\n\
native TimerDialogSetTitleColor         takes timerdialog whichDialog, integer red, integer green, integer blue, integer alpha returns nothing\r\n\
native TimerDialogSetTimeColor          takes timerdialog whichDialog, integer red, integer green, integer blue, integer alpha returns nothing\r\n\
native TimerDialogSetSpeed              takes timerdialog whichDialog, real speedMultFactor returns nothing\r\n\
native TimerDialogDisplay               takes timerdialog whichDialog, boolean display returns nothing\r\n\
native IsTimerDialogDisplayed           takes timerdialog whichDialog returns boolean\r\n\
native TimerDialogSetRealTimeRemaining  takes timerdialog whichDialog, real timeRemaining returns nothing\r\n\
\r\n\
//============================================================================\r\n\
// Leaderboard API\r\n\
\r\n\
// Create a leaderboard object\r\n\
native CreateLeaderboard                takes nothing returns leaderboard\r\n\
native DestroyLeaderboard               takes leaderboard lb returns nothing\r\n\
\r\n\
native LeaderboardDisplay               takes leaderboard lb, boolean show returns nothing\r\n\
native IsLeaderboardDisplayed           takes leaderboard lb returns boolean\r\n\
\r\n\
native LeaderboardGetItemCount          takes leaderboard lb returns integer\r\n\
\r\n\
native LeaderboardSetSizeByItemCount    takes leaderboard lb, integer count returns nothing\r\n\
native LeaderboardAddItem               takes leaderboard lb, string label, integer value, player p returns nothing\r\n\
native LeaderboardRemoveItem            takes leaderboard lb, integer index returns nothing\r\n\
native LeaderboardRemovePlayerItem      takes leaderboard lb, player p returns nothing\r\n\
native LeaderboardClear                 takes leaderboard lb returns nothing\r\n\
\r\n\
native LeaderboardSortItemsByValue      takes leaderboard lb, boolean ascending returns nothing\r\n\
native LeaderboardSortItemsByPlayer     takes leaderboard lb, boolean ascending returns nothing\r\n\
native LeaderboardSortItemsByLabel      takes leaderboard lb, boolean ascending returns nothing\r\n\
\r\n\
native LeaderboardHasPlayerItem         takes leaderboard lb, player p returns boolean\r\n\
native LeaderboardGetPlayerIndex        takes leaderboard lb, player p returns integer\r\n\
native LeaderboardSetLabel              takes leaderboard lb, string label returns nothing\r\n\
native LeaderboardGetLabelText          takes leaderboard lb returns string\r\n\
\r\n\
native PlayerSetLeaderboard             takes player toPlayer, leaderboard lb returns nothing\r\n\
native PlayerGetLeaderboard             takes player toPlayer returns leaderboard\r\n\
\r\n\
native LeaderboardSetLabelColor         takes leaderboard lb, integer red, integer green, integer blue, integer alpha returns nothing\r\n\
native LeaderboardSetValueColor         takes leaderboard lb, integer red, integer green, integer blue, integer alpha returns nothing\r\n\
native LeaderboardSetStyle              takes leaderboard lb, boolean showLabel, boolean showNames, boolean showValues, boolean showIcons returns nothing\r\n\
\r\n\
native LeaderboardSetItemValue          takes leaderboard lb, integer whichItem, integer val returns nothing\r\n\
native LeaderboardSetItemLabel          takes leaderboard lb, integer whichItem, string val returns nothing\r\n\
native LeaderboardSetItemStyle          takes leaderboard lb, integer whichItem, boolean showLabel, boolean showValue, boolean showIcon returns nothing\r\n\
native LeaderboardSetItemLabelColor     takes leaderboard lb, integer whichItem, integer red, integer green, integer blue, integer alpha returns nothing\r\n\
native LeaderboardSetItemValueColor     takes leaderboard lb, integer whichItem, integer red, integer green, integer blue, integer alpha returns nothing\r\n\
\r\n\
//============================================================================\r\n\
// Multiboard API\r\n\
//============================================================================\r\n\
\r\n\
// Create a multiboard object\r\n\
native CreateMultiboard                 takes nothing returns multiboard\r\n\
native DestroyMultiboard                takes multiboard lb returns nothing\r\n\
\r\n\
native MultiboardDisplay                takes multiboard lb, boolean show returns nothing\r\n\
native IsMultiboardDisplayed            takes multiboard lb returns boolean\r\n\
\r\n\
native MultiboardMinimize               takes multiboard lb, boolean minimize returns nothing\r\n\
native IsMultiboardMinimized            takes multiboard lb returns boolean\r\n\
native MultiboardClear                  takes multiboard lb returns nothing\r\n\
\r\n\
native MultiboardSetTitleText           takes multiboard lb, string label returns nothing\r\n\
native MultiboardGetTitleText           takes multiboard lb returns string\r\n\
native MultiboardSetTitleTextColor      takes multiboard lb, integer red, integer green, integer blue, integer alpha returns nothing\r\n\
\r\n\
native MultiboardGetRowCount            takes multiboard lb returns integer\r\n\
native MultiboardGetColumnCount         takes multiboard lb returns integer\r\n\
\r\n\
native MultiboardSetColumnCount         takes multiboard lb, integer count returns nothing\r\n\
native MultiboardSetRowCount            takes multiboard lb, integer count returns nothing\r\n\
\r\n\
// broadcast settings to all items\r\n\
native MultiboardSetItemsStyle          takes multiboard lb, boolean showValues, boolean showIcons returns nothing\r\n\
native MultiboardSetItemsValue          takes multiboard lb, string value returns nothing\r\n\
native MultiboardSetItemsValueColor     takes multiboard lb, integer red, integer green, integer blue, integer alpha returns nothing\r\n\
native MultiboardSetItemsWidth          takes multiboard lb, real width returns nothing\r\n\
native MultiboardSetItemsIcon           takes multiboard lb, string iconPath returns nothing\r\n\
\r\n\
\r\n\
// funcs for modifying individual items\r\n\
native MultiboardGetItem                takes multiboard lb, integer row, integer column returns multiboarditem\r\n\
native MultiboardReleaseItem            takes multiboarditem mbi returns nothing\r\n\
\r\n\
native MultiboardSetItemStyle           takes multiboarditem mbi, boolean showValue, boolean showIcon returns nothing\r\n\
native MultiboardSetItemValue           takes multiboarditem mbi, string val returns nothing\r\n\
native MultiboardSetItemValueColor      takes multiboarditem mbi, integer red, integer green, integer blue, integer alpha returns nothing\r\n\
native MultiboardSetItemWidth           takes multiboarditem mbi, real width returns nothing\r\n\
native MultiboardSetItemIcon            takes multiboarditem mbi, string iconFileName returns nothing\r\n\
\r\n\
// meant to unequivocally suspend display of existing and\r\n\
// subsequently displayed multiboards\r\n\
//\r\n\
native MultiboardSuppressDisplay        takes boolean flag returns nothing\r\n\
\r\n\
//============================================================================\r\n\
// Camera API\r\n\
native SetCameraPosition            takes real x, real y returns nothing\r\n\
native SetCameraQuickPosition       takes real x, real y returns nothing\r\n\
native SetCameraBounds              takes real x1, real y1, real x2, real y2, real x3, real y3, real x4, real y4 returns nothing\r\n\
native StopCamera                   takes nothing returns nothing\r\n\
native ResetToGameCamera            takes real duration returns nothing\r\n\
native PanCameraTo                  takes real x, real y returns nothing\r\n\
native PanCameraToTimed             takes real x, real y, real duration returns nothing\r\n\
native PanCameraToWithZ             takes real x, real y, real zOffsetDest returns nothing\r\n\
native PanCameraToTimedWithZ        takes real x, real y, real zOffsetDest, real duration returns nothing\r\n\
native SetCinematicCamera           takes string cameraModelFile returns nothing\r\n\
native SetCameraRotateMode          takes real x, real y, real radiansToSweep, real duration returns nothing\r\n\
native SetCameraField               takes camerafield whichField, real value, real duration returns nothing\r\n\
native AdjustCameraField            takes camerafield whichField, real offset, real duration returns nothing\r\n\
native SetCameraTargetController    takes unit whichUnit, real xoffset, real yoffset, boolean inheritOrientation returns nothing\r\n\
native SetCameraOrientController    takes unit whichUnit, real xoffset, real yoffset returns nothing\r\n\
\r\n\
native CreateCameraSetup                    takes nothing returns camerasetup\r\n\
native CameraSetupSetField                  takes camerasetup whichSetup, camerafield whichField, real value, real duration returns nothing\r\n\
native CameraSetupGetField                  takes camerasetup whichSetup, camerafield whichField returns real\r\n\
native CameraSetupSetDestPosition           takes camerasetup whichSetup, real x, real y, real duration returns nothing\r\n\
native CameraSetupGetDestPositionLoc        takes camerasetup whichSetup returns location\r\n\
native CameraSetupGetDestPositionX          takes camerasetup whichSetup returns real\r\n\
native CameraSetupGetDestPositionY          takes camerasetup whichSetup returns real\r\n\
native CameraSetupApply                     takes camerasetup whichSetup, boolean doPan, boolean panTimed returns nothing\r\n\
native CameraSetupApplyWithZ                takes camerasetup whichSetup, real zDestOffset returns nothing\r\n\
native CameraSetupApplyForceDuration        takes camerasetup whichSetup, boolean doPan, real forceDuration returns nothing\r\n\
native CameraSetupApplyForceDurationWithZ   takes camerasetup whichSetup, real zDestOffset, real forceDuration returns nothing\r\n\
\r\n\
native CameraSetTargetNoise             takes real mag, real velocity returns nothing\r\n\
native CameraSetSourceNoise             takes real mag, real velocity returns nothing\r\n\
\r\n\
native CameraSetTargetNoiseEx           takes real mag, real velocity, boolean vertOnly returns nothing\r\n\
native CameraSetSourceNoiseEx           takes real mag, real velocity, boolean vertOnly returns nothing\r\n\
\r\n\
native CameraSetSmoothingFactor         takes real factor returns nothing\r\n\
\r\n\
native SetCineFilterTexture             takes string filename returns nothing\r\n\
native SetCineFilterBlendMode           takes blendmode whichMode returns nothing\r\n\
native SetCineFilterTexMapFlags         takes texmapflags whichFlags returns nothing\r\n\
native SetCineFilterStartUV             takes real minu, real minv, real maxu, real maxv returns nothing\r\n\
native SetCineFilterEndUV               takes real minu, real minv, real maxu, real maxv returns nothing\r\n\
native SetCineFilterStartColor          takes integer red, integer green, integer blue, integer alpha returns nothing\r\n\
native SetCineFilterEndColor            takes integer red, integer green, integer blue, integer alpha returns nothing\r\n\
native SetCineFilterDuration            takes real duration returns nothing\r\n\
native DisplayCineFilter                takes boolean flag returns nothing\r\n\
native IsCineFilterDisplayed            takes nothing returns boolean\r\n\
\r\n\
native SetCinematicScene                takes integer portraitUnitId, playercolor color, string speakerTitle, string text, real sceneDuration, real voiceoverDuration returns nothing\r\n\
native EndCinematicScene                takes nothing returns nothing\r\n\
native ForceCinematicSubtitles          takes boolean flag returns nothing\r\n\
\r\n\
native GetCameraMargin                  takes integer whichMargin returns real\r\n\
\r\n\
// These return values for the local players camera only...\r\n\
constant native GetCameraBoundMinX          takes nothing returns real\r\n\
constant native GetCameraBoundMinY          takes nothing returns real\r\n\
constant native GetCameraBoundMaxX          takes nothing returns real\r\n\
constant native GetCameraBoundMaxY          takes nothing returns real\r\n\
constant native GetCameraField              takes camerafield whichField returns real\r\n\
constant native GetCameraTargetPositionX    takes nothing returns real\r\n\
constant native GetCameraTargetPositionY    takes nothing returns real\r\n\
constant native GetCameraTargetPositionZ    takes nothing returns real\r\n\
constant native GetCameraTargetPositionLoc  takes nothing returns location\r\n\
constant native GetCameraEyePositionX       takes nothing returns real\r\n\
constant native GetCameraEyePositionY       takes nothing returns real\r\n\
constant native GetCameraEyePositionZ       takes nothing returns real\r\n\
constant native GetCameraEyePositionLoc     takes nothing returns location\r\n\
\r\n\
//============================================================================\r\n\
// Sound API\r\n\
//\r\n\
native NewSoundEnvironment          takes string environmentName returns nothing\r\n\
\r\n\
native CreateSound                  takes string fileName, boolean looping, boolean is3D, boolean stopwhenoutofrange, integer fadeInRate, integer fadeOutRate, string eaxSetting returns sound\r\n\
native CreateSoundFilenameWithLabel takes string fileName, boolean looping, boolean is3D, boolean stopwhenoutofrange, integer fadeInRate, integer fadeOutRate, string SLKEntryName returns sound\r\n\
native CreateSoundFromLabel         takes string soundLabel, boolean looping, boolean is3D, boolean stopwhenoutofrange, integer fadeInRate, integer fadeOutRate returns sound\r\n\
native CreateMIDISound              takes string soundLabel, integer fadeInRate, integer fadeOutRate returns sound\r\n\
\r\n\
native SetSoundParamsFromLabel      takes sound soundHandle, string soundLabel returns nothing\r\n\
native SetSoundDistanceCutoff       takes sound soundHandle, real cutoff returns nothing\r\n\
native SetSoundChannel              takes sound soundHandle, integer channel returns nothing\r\n\
native SetSoundVolume               takes sound soundHandle, integer volume returns nothing\r\n\
native SetSoundPitch                takes sound soundHandle, real pitch returns nothing\r\n\
\r\n\
// the following method must be called immediately after calling \"StartSound\" \r\n\
native SetSoundPlayPosition         takes sound soundHandle, integer millisecs returns nothing\r\n\
\r\n\
// these calls are only valid if the sound was created with 3d enabled\r\n\
native SetSoundDistances            takes sound soundHandle, real minDist, real maxDist returns nothing\r\n\
native SetSoundConeAngles           takes sound soundHandle, real inside, real outside, integer outsideVolume returns nothing\r\n\
native SetSoundConeOrientation      takes sound soundHandle, real x, real y, real z returns nothing\r\n\
native SetSoundPosition             takes sound soundHandle, real x, real y, real z returns nothing\r\n\
native SetSoundVelocity             takes sound soundHandle, real x, real y, real z returns nothing\r\n\
native AttachSoundToUnit            takes sound soundHandle, unit whichUnit returns nothing\r\n\
\r\n\
native StartSound                   takes sound soundHandle returns nothing\r\n\
native StopSound                    takes sound soundHandle, boolean killWhenDone, boolean fadeOut returns nothing\r\n\
native KillSoundWhenDone            takes sound soundHandle returns nothing\r\n\
\r\n\
// Music Interface. Note that if music is disabled, these calls do nothing\r\n\
native SetMapMusic                  takes string musicName, boolean random, integer index returns nothing\r\n\
native ClearMapMusic                takes nothing returns nothing\r\n\
\r\n\
native PlayMusic                    takes string musicName returns nothing\r\n\
native PlayMusicEx                  takes string musicName, integer frommsecs, integer fadeinmsecs returns nothing\r\n\
native StopMusic                    takes boolean fadeOut returns nothing\r\n\
native ResumeMusic                  takes nothing returns nothing\r\n\
\r\n\
native PlayThematicMusic            takes string musicFileName returns nothing\r\n\
native PlayThematicMusicEx          takes string musicFileName, integer frommsecs returns nothing\r\n\
native EndThematicMusic             takes nothing returns nothing\r\n\
\r\n\
native SetMusicVolume               takes integer volume returns nothing\r\n\
native SetMusicPlayPosition         takes integer millisecs returns nothing\r\n\
native SetThematicMusicPlayPosition takes integer millisecs returns nothing\r\n\
\r\n\
// other music and sound calls\r\n\
native SetSoundDuration             takes sound soundHandle, integer duration returns nothing\r\n\
native GetSoundDuration             takes sound soundHandle returns integer\r\n\
native GetSoundFileDuration         takes string musicFileName returns integer\r\n\
\r\n\
native VolumeGroupSetVolume         takes volumegroup vgroup, real scale returns nothing\r\n\
native VolumeGroupReset             takes nothing returns nothing\r\n\
\r\n\
native GetSoundIsPlaying            takes sound soundHandle returns boolean\r\n\
native GetSoundIsLoading            takes sound soundHandle returns boolean\r\n\
\r\n\
native RegisterStackedSound         takes sound soundHandle, boolean byPosition, real rectwidth, real rectheight returns nothing\r\n\
native UnregisterStackedSound       takes sound soundHandle, boolean byPosition, real rectwidth, real rectheight returns nothing\r\n\
\r\n\
//============================================================================\r\n\
// Effects API\r\n\
//\r\n\
native AddWeatherEffect             takes rect where, integer effectID returns weathereffect\r\n\
native RemoveWeatherEffect          takes weathereffect whichEffect returns nothing\r\n\
native EnableWeatherEffect          takes weathereffect whichEffect, boolean enable returns nothing\r\n\
\r\n\
native TerrainDeformCrater          takes real x, real y, real radius, real depth, integer duration, boolean permanent returns terraindeformation\r\n\
native TerrainDeformRipple          takes real x, real y, real radius, real depth, integer duration, integer count, real spaceWaves, real timeWaves, real radiusStartPct, boolean limitNeg returns terraindeformation\r\n\
native TerrainDeformWave            takes real x, real y, real dirX, real dirY, real distance, real speed, real radius, real depth, integer trailTime, integer count returns terraindeformation\r\n\
native TerrainDeformRandom          takes real x, real y, real radius, real minDelta, real maxDelta, integer duration, integer updateInterval returns terraindeformation\r\n\
native TerrainDeformStop            takes terraindeformation deformation, integer duration returns nothing\r\n\
native TerrainDeformStopAll         takes nothing returns nothing\r\n\
\r\n\
native AddSpecialEffect             takes string modelName, real x, real y returns effect\r\n\
native AddSpecialEffectLoc          takes string modelName, location where returns effect\r\n\
native AddSpecialEffectTarget       takes string modelName, widget targetWidget, string attachPointName returns effect\r\n\
native DestroyEffect                takes effect whichEffect returns nothing\r\n\
\r\n\
native AddSpellEffect               takes string abilityString, effecttype t, real x, real y returns effect\r\n\
native AddSpellEffectLoc            takes string abilityString, effecttype t,location where returns effect\r\n\
native AddSpellEffectById           takes integer abilityId, effecttype t,real x, real y returns effect\r\n\
native AddSpellEffectByIdLoc        takes integer abilityId, effecttype t,location where returns effect\r\n\
native AddSpellEffectTarget         takes string modelName, effecttype t, widget targetWidget, string attachPoint returns effect\r\n\
native AddSpellEffectTargetById     takes integer abilityId, effecttype t, widget targetWidget, string attachPoint returns effect\r\n\
\r\n\
native AddLightning                 takes string codeName, boolean checkVisibility, real x1, real y1, real x2, real y2 returns lightning\r\n\
native AddLightningEx               takes string codeName, boolean checkVisibility, real x1, real y1, real z1, real x2, real y2, real z2 returns lightning\r\n\
native DestroyLightning             takes lightning whichBolt returns boolean\r\n\
native MoveLightning                takes lightning whichBolt, boolean checkVisibility, real x1, real y1, real x2, real y2 returns boolean\r\n\
native MoveLightningEx              takes lightning whichBolt, boolean checkVisibility, real x1, real y1, real z1, real x2, real y2, real z2 returns boolean\r\n\
native GetLightningColorA           takes lightning whichBolt returns real\r\n\
native GetLightningColorR           takes lightning whichBolt returns real\r\n\
native GetLightningColorG           takes lightning whichBolt returns real\r\n\
native GetLightningColorB           takes lightning whichBolt returns real\r\n\
native SetLightningColor            takes lightning whichBolt, real r, real g, real b, real a returns boolean\r\n\
\r\n\
native GetAbilityEffect             takes string abilityString, effecttype t, integer index returns string\r\n\
native GetAbilityEffectById         takes integer abilityId, effecttype t, integer index returns string\r\n\
native GetAbilitySound              takes string abilityString, soundtype t returns string\r\n\
native GetAbilitySoundById          takes integer abilityId, soundtype t returns string\r\n\
\r\n\
//============================================================================\r\n\
// Terrain API\r\n\
//\r\n\
native GetTerrainCliffLevel         takes real x, real y returns integer\r\n\
native SetWaterBaseColor            takes integer red, integer green, integer blue, integer alpha returns nothing\r\n\
native SetWaterDeforms              takes boolean val returns nothing\r\n\
native GetTerrainType               takes real x, real y returns integer\r\n\
native GetTerrainVariance           takes real x, real y returns integer\r\n\
native SetTerrainType               takes real x, real y, integer terrainType, integer variation, integer area, integer shape returns nothing\r\n\
native IsTerrainPathable            takes real x, real y, pathingtype t returns boolean\r\n\
native SetTerrainPathable           takes real x, real y, pathingtype t, boolean flag returns nothing\r\n\
\r\n\
//============================================================================\r\n\
// Image API\r\n\
//\r\n\
native CreateImage                  takes string file, real sizeX, real sizeY, real sizeZ, real posX, real posY, real posZ, real originX, real originY, real originZ, integer imageType returns image\r\n\
native DestroyImage                 takes image whichImage returns nothing\r\n\
native ShowImage                    takes image whichImage, boolean flag returns nothing\r\n\
native SetImageConstantHeight       takes image whichImage, boolean flag, real height returns nothing\r\n\
native SetImagePosition             takes image whichImage, real x, real y, real z returns nothing\r\n\
native SetImageColor                takes image whichImage, integer red, integer green, integer blue, integer alpha returns nothing\r\n\
native SetImageRender               takes image whichImage, boolean flag returns nothing\r\n\
native SetImageRenderAlways         takes image whichImage, boolean flag returns nothing\r\n\
native SetImageAboveWater           takes image whichImage, boolean flag, boolean useWaterAlpha returns nothing\r\n\
native SetImageType                 takes image whichImage, integer imageType returns nothing\r\n\
\r\n\
//============================================================================\r\n\
// Ubersplat API\r\n\
//\r\n\
native CreateUbersplat              takes real x, real y, string name, integer red, integer green, integer blue, integer alpha, boolean forcePaused, boolean noBirthTime returns ubersplat\r\n\
native DestroyUbersplat             takes ubersplat whichSplat returns nothing\r\n\
native ResetUbersplat               takes ubersplat whichSplat returns nothing\r\n\
native FinishUbersplat              takes ubersplat whichSplat returns nothing\r\n\
native ShowUbersplat                takes ubersplat whichSplat, boolean flag returns nothing\r\n\
native SetUbersplatRender           takes ubersplat whichSplat, boolean flag returns nothing\r\n\
native SetUbersplatRenderAlways     takes ubersplat whichSplat, boolean flag returns nothing\r\n\
\r\n\
//============================================================================\r\n\
// Blight API\r\n\
//\r\n\
native SetBlight                takes player whichPlayer, real x, real y, real radius, boolean addBlight returns nothing\r\n\
native SetBlightRect            takes player whichPlayer, rect r, boolean addBlight returns nothing\r\n\
native SetBlightPoint           takes player whichPlayer, real x, real y, boolean addBlight returns nothing\r\n\
native SetBlightLoc             takes player whichPlayer, location whichLocation, real radius, boolean addBlight returns nothing\r\n\
native CreateBlightedGoldmine   takes player id, real x, real y, real face returns unit\r\n\
native IsPointBlighted          takes real x, real y returns boolean\r\n\
\r\n\
//============================================================================\r\n\
// Doodad API\r\n\
//\r\n\
native SetDoodadAnimation       takes real x, real y, real radius, integer doodadID, boolean nearestOnly, string animName, boolean animRandom returns nothing\r\n\
native SetDoodadAnimationRect   takes rect r, integer doodadID, string animName, boolean animRandom returns nothing\r\n\
\r\n\
//============================================================================\r\n\
// Computer AI interface\r\n\
//\r\n\
native StartMeleeAI         takes player num, string script                 returns nothing\r\n\
native StartCampaignAI      takes player num, string script                 returns nothing\r\n\
native CommandAI            takes player num, integer command, integer data returns nothing\r\n\
native PauseCompAI          takes player p,   boolean pause                 returns nothing\r\n\
native GetAIDifficulty      takes player num                                returns aidifficulty\r\n\
\r\n\
native RemoveGuardPosition  takes unit hUnit                                returns nothing\r\n\
native RecycleGuardPosition takes unit hUnit                                returns nothing\r\n\
native RemoveAllGuardPositions takes player num                             returns nothing\r\n\
\r\n\
//============================================================================\r\n\
native Cheat            takes string cheatStr returns nothing\r\n\
native IsNoVictoryCheat takes nothing returns boolean\r\n\
native IsNoDefeatCheat  takes nothing returns boolean\r\n\
\r\n\
native Preload          takes string filename returns nothing\r\n\
native PreloadEnd       takes real timeout returns nothing\r\n\
\r\n\
native PreloadStart     takes nothing returns nothing\r\n\
native PreloadRefresh   takes nothing returns nothing\r\n\
native PreloadEndEx     takes nothing returns nothing\r\n\
\r\n\
native PreloadGenClear  takes nothing returns nothing\r\n\
native PreloadGenStart  takes nothing returns nothing\r\n\
native PreloadGenEnd    takes string filename returns nothing\r\n\
native Preloader        takes string filename returns nothing\r\n\
";
module.exports = common;
