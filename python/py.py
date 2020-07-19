import json
hero_list = []
with open("hero_list.txt", "r") as f:
    for index, line in enumerate(f):
        hero_list.append(line.replace('\n', ''))

json_hero_list = json.dumps(hero_list)

with open('hero_list_2.txt', "w") as f:
    f.write(json_hero_list)
