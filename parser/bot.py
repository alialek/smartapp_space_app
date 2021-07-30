from bs4 import BeautifulSoup
import json
import time
import requests

LINK = 'https://my-calend.ru/holidays/31-december'
url = LINK

with open('data3.json', 'w') as file:
	print('[', file=file)
	for i in range(1):
		print('!!', i)
		html = requests.get(url).text
		soup = BeautifulSoup(html, 'html.parser')

		holidays_list = soup.find('ul', {'class': 'holidays-items'})

		data_day = {
			"holidays": [],
			"names": [],
			"holidays_details": [],
			"url": url,
		}
		for block in holidays_list:
			# print(block, file=file)
			name = ''
			if block.find('a') and block.find('a') != -1:
				name = block.find('a').text
			elif block.find('span') and block.find('span') != -1:
				name = block.find('span').text

			if name != '':
				data_day["holidays"].append(name.strip())

		names_list = soup.find('section', {'class': 'holidays-name-days'})
		if names_list:
			for block in names_list:
				if block.find('a') and block.find('a') != -1:
					name = block.find('a').text
					data_day["names"].append(name.strip())

		holidays_details_list = soup.find('details', {'class': 'holidays-details'}).p.find_all('span')
		if holidays_details_list:
			for block in holidays_details_list:
				data_day["holidays_details"].append(block.text.strip())

		url = soup.find('a', {'class': 'near-next'}).get('href')

		print(data_day, file=file)
		print(',', file=file)
		time.sleep(1)

	print(']', file=file)
