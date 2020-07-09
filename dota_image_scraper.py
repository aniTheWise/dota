from bs4 import BeautifulSoup
import requests
import urllib

hero_name_list = []


def download_image(image_url):
    # req = urllib.request.Request(
    #     image_url, headers={'User-Agent': 'Mozilla/5.0'})
    # resource = urllib.request.urlopen(req)

    name_start_index = image_url.rfind("/")
    name_end_index = image_url.find("_full")

    name = image_url[name_start_index + 1: name_end_index]
    f.write(name + "\n")

    image_file_name = "./images/heros/dota2/" + \
        image_url[name_start_index + 1: name_end_index] + ".png"

    # output = open(image_file_name, "wb")
    # output.write(resource.read())
    # output.close()


source = requests.get('http://www.dota2.com/heroes').text

soup = BeautifulSoup(source, 'lxml')

heros = soup.find_all('a', class_='heroPickerIconLink')

f = open('hero_list.txt', 'w')

for index, hero in enumerate(heros):
    # print(index, hero['href'])
    hero_source = requests.get(hero['href']).text
    hero_soup = BeautifulSoup(hero_source, 'lxml')
    hero_image_link = hero_soup.find('img', id="heroTopPortraitIMG")['src']
    download_image(hero_image_link)

f.close()
print('done')