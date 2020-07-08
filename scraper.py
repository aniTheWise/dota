from bs4 import BeautifulSoup
import requests

source = requests.get('http://www.dota2.com/heroes').text

soup = BeautifulSoup(source, 'lxml')
counter = 1
heros = soup.find_all('a', class_='heroPickerIconLink')
for index, hero in enumerate(heros):
    print(index, hero['href'])
