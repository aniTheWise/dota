let sentinel_strength = [
    "earthshaker", "sven", "tiny", "kunkka",
    "beastmaster", "dragon_knight", "rattletrap", "omniknight",
    "huskar", "alchemist", "brewmaster", "treant",
    "wisp", "centaur", "shredder", "bristleback",
    "tusk", "elder_titan", "legion_commander", /*"earth_spirit",*/
    "phoenix" /*, "mars", "snapfire"*/
];
sentinel_agility = [
    "antimage", "drow_ranger", "juggernaut", "mirana",
    "morphling", "phantom_lancer", "vengefulspirit", "riki",
    "sniper", "templar_assassin", "luna", "bounty_hunter",
    "ursa", "gyrocopter", "lone_druid", "naga_siren",
    "troll_warlord", "ember_spirit" /*, "monkey_king", "pangolier"*/
];
sentinel_intelligence = [
    "crystal_maiden", "puck", "storm_spirit", "windrunner",
    "zeus", "lina", "shadow_shaman", "tinker",
    "furion", "enchantress", "jakiro", "chen",
    "silencer", "ogre_magi", "rubick", "disruptor",
    "keeper_of_the_light", "skywrath_mage", /*"oracle",*/ "techies"/*,
    "dark_willow", "void_spirit"*/
];
scourge_strength = [
    "axe", "pudge", "sand_king", "slardar",
    "tidehunter", "skeleton_king", "life_stealer", "night_stalker",
    "doom_bringer", "spirit_breaker", "lycan", "chaos_knight",
    "undying", "magnataur", "abaddon", "abyssal_underlord"
];
scourge_agility = [

    "bloodseeker", "nevermore", "razor", "venomancer",
    "faceless_void", "phantom_assassin", "viper", "clinkz",
    "broodmother", "weaver", "spectre", "meepo",
    "nyx_assassin", "slark", "medusa", "terrorblade",
    "arc_warden"
];
scourge_intelligence = [

    "bane", "lich", "lion", "witch_doctor",
    "enigma", "necrolyte", "warlock", "queenofpain",
    "death_prophet", "pugna", "dazzle", "leshrac",
    "dark_seer", "batrider", "ancient_apparition", "invoker",
    "obsidian_destroyer", "shadow_demon", "visage"/*, "winter_wyvern",
    "grimstroke"*/
];
radiant_strength = [
    "earthshaker", "sven", "tiny", "kunkka",
    "beastmaster", "dragon_knight", "rattletrap", "omniknight",
    "huskar", "alchemist", "brewmaster", "treant",
    "wisp", "centaur", "shredder", "bristleback",
    "tusk", "elder_titan", "legion_commander", "phoenix",
];
radiant_agility = [
    "antimage", "drow_ranger", "juggernaut", "mirana",
    "morphling", "phantom_lancer", "vengefulspirit", "riki",
    "sniper", "templar_assassin", "luna", "bounty_hunter",
    "ursa", "gyrocopter", "lone_druid", "naga_siren",
    "troll_warlord", "ember_spirit"
];
radiant_intelligence = [
    "crystal_maiden", "puck", "storm_spirit", "windrunner",
    "zeus", "lina", "shadow_shaman", "tinker",
    "furion", "enchantress", "jakiro", "chen",
    "silencer", "ogre_magi", "rubick", "disruptor",
    "keeper_of_the_light", "skywrath_mage", "techies"
];
dire_strength = [
    "axe", "pudge", "sand_king", "slardar",
    "tidehunter", "skeleton_king", "life_stealer", "night_stalker",
    "doom_bringer", "spirit_breaker", "lycan", "chaos_knight",
    "undying", "magnataur", "abaddon", "abyssal_underlord"
];
dire_agility = [
    "bloodseeker", "nevermore", "razor", "venomancer",
    "faceless_void", "phantom_assassin", "viper", "clinkz",
    "broodmother", "weaver", "spectre", "meepo",
    "nyx_assassin", "slark", "medusa", "terrorblade",
    "arc_warden"
];
dire_intelligence = [
    "bane", "lich", "lion", "witch_doctor",
    "enigma", "necrolyte", "warlock", "queenofpain",
    "death_prophet", "pugna", "dazzle", "leshrac",
    "dark_seer", "batrider", "ancient_apparition", "invoker",
    "obsidian_destroyer", "shadow_demon", "visage"
];

new_in_dota2 = ["earth_spirit",
    "mars", "snapfire", "monkey_king", "pangolier", "oracle",
    "dark_willow", "void_spirit", "winter_wyvern",
    "grimstroke"];



// let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];




let sen_str = document.querySelector(".strength-green .sentinel");
let rad_str = document.querySelector(".strength-green .radiant");
let sco_str = document.querySelector(".strength-red .scourge");
let dir_str = document.querySelector(".strength-red .dire");

let sen_agi = document.querySelector(".agility-green .sentinel");
let rad_agi = document.querySelector(".agility-green .radiant");
let sco_agi = document.querySelector(".agility-red .scourge");
let dir_agi = document.querySelector(".agility-red .dire");

let sen_int = document.querySelector(".intelligence-green .sentinel");
let rad_int = document.querySelector(".intelligence-green .radiant");
let sco_int = document.querySelector(".intelligence-red .scourge");
let dir_int = document.querySelector(".intelligence-red .dire");


sentinel_strength.forEach(hero => {
    addHero(hero, sen_str, "dota1", "str-sen")
});
radiant_strength.forEach(hero => {
    addHero(hero, rad_str, "dota2", "str-rad")
});
scourge_strength.forEach(hero => {
    addHero(hero, sco_str, "dota1", "str-sco")
});
dire_strength.forEach(hero => {
    addHero(hero, dir_str, "dota2", "str-dir")
});

sentinel_agility.forEach(hero => {
    addHero(hero, sen_agi, "dota1", "agi-sen")
});
radiant_agility.forEach(hero => {
    addHero(hero, rad_agi, "dota2", "agi-rad")
});
scourge_agility.forEach(hero => {
    addHero(hero, sco_agi, "dota1", "agi-sco")
});
dire_agility.forEach(hero => {
    addHero(hero, dir_agi, "dota2", "agi-dir")
});

sentinel_intelligence.forEach(hero => {
    addHero(hero, sen_int, "dota1", "int-sen")
});
radiant_intelligence.forEach(hero => {
    addHero(hero, rad_int, "dota2", "int-rad")
});
scourge_intelligence.forEach(hero => {
    addHero(hero, sco_int, "dota1", "int-sco")
});
dire_intelligence.forEach(hero => {
    addHero(hero, dir_int, "dota2", "int-dir")
});



function addHero(hero, destination, version, gif_dest) {
    let img_container = document.createElement("div");
    let img_element = document.createElement("img");
    let img_path = ".\\images\\heros\\" + version + "\\" + hero + ".png";
    img_element["src"] = img_path;
    img_element.classList = "zoom";
    img_element.addEventListener("click", () => {
        console.log("url('.\\images\\models\\dota1\\" + hero + ".png')");
        document.querySelector("." + gif_dest).style.backgroundImage = "url('./images/models/" + version + "/" + hero + ".gif')";
        // document.querySelector(".hero-gif").style.backgroundImage = "url('./images/models/dota2/" + hero + ".gif')";
    });
    img_container["width"] = 100;
    // img_container.style.display = "flex";
    img_container["height"] = 100;
    // img_element["width"]= 100;
    img_container.appendChild(img_element);
    destination.appendChild(img_container);
    // destination.appendChild(img_element);
}
