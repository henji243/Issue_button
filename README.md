# Issue_button
(深夜テンション)

![button](https://user-images.githubusercontent.com/105550500/195113926-26f7137c-1d80-40ab-8eae-271d43f15ae5.png)
これを押してくれます
需要は全くないです
ブックマークレットにすると何気に便利?

# ブックマークレット
```js
javascript:try%20%7B%0A%20%20%20%20let%20url%20%3D%20location.href%0A%0A%20%20%20%20if%20(url.indexOf(%22https%3A%2F%2Fgithub.com%22)%20%3D%3D%20-1%20%7C%7C%20url.indexOf(%22%2Fissues%2F%22)%20%3D%3D%20-1)%20%7B%0A%20%20%20%20%20%20%20%20alert(%22GitHub%E3%81%AEissue%E3%81%AE%E3%83%9A%E3%83%BC%E3%82%B8%E3%81%A7%E5%AE%9F%E8%A1%8C%E3%81%97%E3%81%A6%E3%83%8D!%22)%0A%20%20%20%20%7Delse%20%7B%0A%20%20%20%20%20%20%20%20document.getElementsByClassName(%22ajax-pagination-btn%20no-underline%20pb-1%20pt-0%20px-4%20mt-0%20mb-1%20color-bg-default%20border-0%22)%5B0%5D.click()%3B%0A%20%20%20%20%7D%0A%7D%20catch(e)%20%7B%0A%20%20%20%20alert(%22%E3%83%9C%E3%82%BF%E3%83%B3%E3%81%8C%E3%81%AA%E3%81%84%E3%83%A8!%E3%82%B4%E3%83%A1%E3%83%B3%E3%83%8D!%22)%0A%7D
