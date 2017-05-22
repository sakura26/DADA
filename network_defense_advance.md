# 網路架構進階

授權方式 [CC: BY-SA](https://creativecommons.org/licenses/by-sa/3.0/tw/legalcode) 

## 如何規劃一個安全的網路

Simple is better

複雜的環境會要你付出相當大的代價去維護

### 爆炸時，怎麼讓受害範圍縮減在特定區塊？

做好網路區隔與條件限制

Output default drop

### 製造陷阱

honeypot

### 如何在對方進入你創造的世界時，一舉一動都被你所監視？

SOC

防火牆的區域聯防

## 你的設備真的安全嗎....?

### 小心你的「管理區域」

*   網路設備管理port
*   骨幹網路網段中有沒有不該留下的空間
*   資安設備是駭客的重要攻擊目標

#### 問題

* 什麼是Critical的區域？
* 什麼是重要的區域？
* 什麼是應該放到DMZ的？
* 什麼是正常使用但不應該碰到重要區域的？
* 什麼是危險區域應該隔離？
* 怎麼讓內部燒起來的時候不至於燒到外部？



### 嚴格的內對內流量管控

#### 處理竊聽的問題

你怎麼知道你定義的網路連線，裡面就真的是這些東西在跑？

anyone can be anything

*   各種tunnel

### 對於不可控制的員工網路，該怎麼應對？

#### 控管對外網路

*   firewall drop all
*   transport proxy for 80/443
*   centralized dns/mail server

#### 對付APT

APT這邊就可以講一堂課...

#### 實體隔離

AD is a trap!

三大危險服務：AD、Anti-Virus、資產管理系統

#### 放陷阱

看不見的監控系統

攻性防壁