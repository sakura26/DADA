無線網路概論-WIFI
=====
## 概論

最廣為使用的短距離無線數據通訊協定，由802.11系列定義

特性是一個開放的區域網路，任何人只要在範圍內就能監聽/連上該網路，使用權限控管來控制存取

<https://zh.wikipedia.org/wiki/Wi-Fi>

常見協議（速度）

* 802.11b（11Mbit/s，2.4GHz頻道）
* 802.11g（54Mbit/s，2.4GHz頻道）
* 802.11n（匯入多重輸入輸出（MIMO）和40Mbit頻寬（HT40）技術）
* 802.11ac（1×1 MIMO，433Mbit/s，5GHz頻道），80Mbit頻寬

頻段

* 2.4G
* 5G

2.4G 14個頻道中台灣只有11個可用，非重疊頻道：1、6、11

連線模式

Infra / ad-hoc / Wi-Fi Direct

### 運作

搜索、連結（驗證與加密）、漫遊、中斷

搜索：SSID（Service Set Identifier）經由beacons（訊號台）封包廣播

## 保護機制

驗證方式

* 802.1x
* PSK

加密方式

* [WEP](https://zh.wikipedia.org/wiki/%E6%9C%89%E7%B7%9A%E7%AD%89%E6%95%88%E5%8A%A0%E5%AF%86)：已被破解，千萬不可使用。RC4的誤用導致三分鐘之內就可以破解出密碼
* [WPA](https://zh.wikipedia.org/wiki/WPA)：一個過渡性版本，很快就切換到WPA2了
* [WPA2](https://zh.wikipedia.org/wiki/WPA)：WPA2維持了一段安全時期，但攻擊的嘗試並未停止。針對PSK模式，透過某種不停打斷使用者迫使重新連線抓取握手包，進一步暴力破解的攻擊手段雖然緩慢，但也總是有效，尤其是多數人使用自家電話號碼做為密碼的情況下
* 2017年，[KRACK](https://www.techbang.com/posts/54483-wpa2)攻擊橫空出世，找到了弱點施行重放攻擊之後，解碼封包跟竄改通訊都變成了簡單的事情。目前尚未有有效的解法（也許WPA3?）

User / Hacker friendly?

* [WPS](https://en.wikipedia.org/wiki/Wi-Fi_Protected_Setup)：對WIFI AP按下WPS按鈕之後，WIFI會暫時無條件信任連上的使用者，並自動與對方完成金鑰配對。即便你可以透過WPS Pin碼做一點初步驗證，但以此進行暴力破解是相當容易的

## 攻擊

KRACK

<https://www.youtube.com/watch?v=Oh4WURZoR98>

使用Kali Linux內建工具破解WPA2加密

<https://www.youtube.com/watch?v=i5BdH1mjMoY>

效能干擾/阻斷

<https://hackaday.com/2011/10/04/wifi-jamming-via-deauthentication-packets/>

RTS/CTS Flooding

<https://www.youtube.com/watch?v=37av3CrILIY>

溢波

對用戶進行定位

<https://www.youtube.com/watch?v=__ijtE8JeAU>

假基站

<https://www.youtube.com/watch?v=qMUlgFpcyV4>

WAR Driving

<https://zh.wikipedia.org/wiki/%E6%88%98%E4%BA%89%E9%A9%BE%E9%A9%B6>

## 工具

pineapple

![](img/pinapple.jpg)

<https://www.wifipineapple.com/>

<https://www.youtube.com/watch?v=6iZcZcIxGs8>