let hero_list = [
    "earthshaker", "sven", "tiny", "kunkka",
    "beastmaster", "dragon_knight", "rattletrap", "omniknight",
    "huskar", "alchemist", "brewmaster", "treant",
    "wisp", "centaur", "shredder", "bristleback",
    "tusk", "elder_titan", "legion_commander", "earth_spirit",
    "phoenix", "mars", "snapfire",

    "antimage", "drow_ranger", "juggernaut", "mirana",
    "morphling", "phantom_lancer", "vengefulspirit", "riki",
    "sniper", "templar_assassin", "luna", "bounty_hunter",
    "ursa", "gyrocopter", "lone_druid", "naga_siren",
    "troll_warlord", "ember_spirit", "monkey_king", "pangolier",

    "crystal_maiden", "puck", "storm_spirit", "windrunner",
    "zeus", "lina", "shadow_shaman", "tinker",
    "furion", "enchantress", "jakiro", "chen",
    "silencer", "ogre_magi", "rubick", "disruptor",
    "keeper_of_the_light", "skywrath_mage", "oracle", "techies",
    "dark_willow", "void_spirit",

    "axe", "pudge", "sand_king", "slardar",
    "tidehunter", "skeleton_king", "life_stealer", "night_stalker",
    "doom_bringer", "spirit_breaker", "lycan", "chaos_knight",
    "undying", "magnataur", "abaddon", "abyssal_underlord",

    "bloodseeker", "nevermore", "razor", "venomancer",
    "faceless_void", "phantom_assassin", "viper", "clinkz",
    "broodmother", "weaver", "spectre", "meepo",
    "nyx_assassin", "slark", "medusa", "terrorblade",
    "arc_warden",

    "bane", "lich", "lion", "witch_doctor",
    "enigma", "necrolyte", "warlock", "queenofpain",
    "death_prophet", "pugna", "dazzle", "leshrac",
    "dark_seer", "batrider", "ancient_apparition", "invoker",
    "obsidian_destroyer", "shadow_demon", "visage", "winter_wyvern",
    "grimstroke"
];

let hero_container = document.querySelector(".hero_container");
let filter_list = document.querySelector(".filter_list");
let hero_table = document.querySelector(".hero_table");

let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

letters.forEach(letter => {
    let link = document.querySelector('a');

});

hero_list.forEach(hero => {
    let d2_img_file = ".\\images\\heros\\dota2\\" + hero + ".png";
    let d2_img_tag = document.createElement("img");
    d2_img_tag["src"] = d2_img_file;
    d2_img_tag["width"] = 256;

    let d1_img_file = ".\\images\\heros\\dota1\\" + hero + ".png";
    let d1_img_tag = document.createElement("img");
    d1_img_tag["src"] = d1_img_file;
    d1_img_tag["height"] = 144;

    let tr = document.createElement("tr");
    let td_old = document.createElement("td");
    let td_new = document.createElement("td");

    // td_old.textContent = 'dota 1 img';
    // td_old.style.width = "256px";
    // td_old.style.height = "144px";
    // td_old.style.margin = "auto";
    td_old.appendChild(d1_img_tag)

    td_new.appendChild(d2_img_tag);
    tr.appendChild(td_old);
    tr.appendChild(td_new);
    hero_table.appendChild(tr);
});
