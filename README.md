# 黑魔法防禦術

## 基本介紹

論資訊安全，台灣處於一個世界上稀有的處境。左邊是全世界最大的網軍集團，右邊是掌握最高技術的Big Brother。

這幾年來台灣已經成為兵家必爭之地。中國以台灣作為跳板，試圖藉由世界對台灣的信任攻下更多領地，而美國的Xkeyscore早已監控全世界，隨時可以知道誰，在什麼地方，做什麼，甚至是的即時錄影錄音。

但是，我們呢？台灣網路被評比為全世界第二骯髒的網路，而我們的企業與政府連自己要保護什麼都還不知道。

戰火早已開始，而我們還沒準備好。  
Time to take action

**活動方式**

我期待的是座談會型態，大家平行分享資訊與經驗

不過目前為止多數講的是基本概念與技術，所以有點像講課，但這不是我希望的QQ，無限期徵求講師分享新知與經驗，有任何想要說的也隨時歡迎補充 <(\_ \_)>

**目標**

* 培養更多防禦面資安人才
* 普及正確資安認知
* 透過專業改變台灣的市場情勢，合理收益
* 提升台灣的總體資安防禦能力

**對象**

學生、網管、開發者、資安從業人員

基本上不限，有足夠的背景知識與經驗會幫助你更快速地進入狀況

**時間**

每月一個主題，兩個梯次的分享會。第一梯次在摩茲工寮，第二梯次則與TDOH PIPE合辦，活動資訊請關注FB社群「黑魔法防禦術」

**社群**

有任何新動向與公告會同步發佈於TDOH與FB社群，社群自由加入，但為了避免機器人，請留意回答FB的問題。

黑魔法防禦術：<https://www.facebook.com/groups/308549376151517>

**雜談**

將過去被隱藏於少數人或企業的安全知識公開，是提升整體水準的最好作法。這個課程不只是傳授知識，也在協助我整理思緒。我期待那一天，當資訊人都能夠做出最好的判斷時，我們可以翻轉現有的資安產業，真正實現安全。

所有授課內容都以CC: BY-SA釋出

## 課程大綱

### 基礎
第一場 **「資訊安全概論」** 主要是講述安全的基本觀念，以及讓大家了解彼此的背景，不牽涉太多技術面。後幾場可以衡量自己的興趣與實力選擇參與。

*   [資訊安全概論](intro.md)
為什麼要做資安？我們為何而來？我們帶來什麼？為什麼非我們不可？
*   如果你真的想走這一行，你會希望擁有的[基礎知識](basic_knowledge.md) 
*   [常見資安弱點](basic_common_vuln.md)
*   [職業技能樹](TDOH_skilltree.md) －怎麼進入資安這一行？


### 主堡系列
**「主機防禦基礎」「主機防禦實務」「服務防禦概論」**

著重於如何強化網路戰的最基本單位：主機，也就是我們的主堡。

推薦網管、伺服器管理者、開發人員來了解

*   [主機防禦基礎](host_defense_intro.md) - 顧好你的主堡！
*   [主機防禦實務](host_defense_practice.md) - Linux
*   [服務防禦概論](service_defense_intro.md) 
*   [主機防禦進階SELinux](https://docs.google.com/file/d/0B1rfFnHqmPRLRnhDUGFBT1Q2bnM/edit?pli=1) by 小周
    *   想拿root? 抱歉我也沒有

### 戰場系列
**「網路架構基礎」「網路架構進階」**

探討戰場的環境，有哪些堡壘、炮塔，有什麼特性、該部署在哪邊。

推薦網管、伺服器管理者了解。

*   [網路架構基礎](network_defense_intro.md) - 你的城池有多大？
    *   這裡介紹網路，包含Office網段、DMZ網段、Backbone網段、Internet網段、以及可能有的友軍網段，以及資安設備：一些可能會出現在網路上，加強防禦的設備介紹，例如防火牆、IDS、AV、WAF等。
*   [網路架構進階](network_defense_advance.md) - 不沉的艦隊
    *   架構一個易守難攻、容易恢復的網路是有可能的
*   [無線網路安全](network_defense_wifi.md)

### 戰情系列
**「Log分析」「SOC概論」「SOC實務」「監控技術」「戰情中心」**

討論的是如何看清楚戰況，知道自己有沒有被打，是贏是輸。這是進階課程，也是企業級防禦的主要戰場，須先完成主堡與戰場系列

推薦資安人員、網管、伺服器管理者、開發人員來了解

*   [Log分析入門](log_analysis_intro.md) - 誰黑了我的主機？！
*   [Log分析架構](log_analysis_arch.md)  - 正式開始進入Log分析
*   [Log分析進階](log_analysis_adv.md)  - 思路、法門、攻擊
*   [Log分析：Ivan分享](log_analysis_ivan.pdf) - Acer前首席分析師的經驗分享
*   SOC概論 - 資安戰情室
*   戰情中心 - unleash the true power of SOC
*   [SysTw分享預訂](log_analysis_systw.md)
*   [網路威脅情報分析](http://www.ithome.com.tw/news/108022)

### CSI系列
**「主機鑑識」「網路鑑識」「手機鑑識」「資料復原」**

<s>工具人轉職</s>高階救火隊，解答幾個問題：是不是被黑了？駭客做了什麼？造成什麼損失？怎麼進來了？偷了甚麼走？這是100%的企業級資安，需要深入瞭解作業系統、網路、檔案系統等知識

歡迎資安人員/偏執狂/強者等一起來討論分享

*   主機鑑識 - Be a CSI
    *   [找網馬](https://drive.google.com/file/d/0B3F5ZsA91Z-pSVVyRTdjNFl6OHM/view)
    * [Google Chrome擴充套件後門解析](https://slides.com/sakura26/plugin-backdoor-analysis)
    * [Windows鑑識](forensic_windows.md)
*   網路鑑識
*   <s>手機鑑識</s>
*   資料復原
*   [資料銷毀](data_destroy.md) 
*   [惡意程式分析](malware_analysis_intro.md)

### 進階防禦
**「諜對諜」「SELinux」「honeypot/honeynet」「實體安全」**

這是玩家的領域。想知道玩家怎麼繞過你的防禦、對攻擊者放陷阱、做出難攻不落的系統、甚至破解實體世界的阻攔，一起來玩吧

*   APT - 你以為你真的有辦法應付他？
*   [實體安全](physical_security.md)
    *   怎麼開鎖、怎麼直接敲下整扇門、怎麼繞過攝影機、怎麼讓攝影機瞎掉、怎麼避開窗戶震動感應器、怎麼直接切斷大樓的保全通訊.... 知道對方怎麼敲你，你才有辦法真正回應攻擊
    *   考北喔這個不會被抓走吧ＸＤ
*   <s>honeypot - have a nice trap</s>
*   <s>honeynet - have a nice trap*n</s>

### 個人安全
**「監控」「反監控」「反反監控」「給人權工作者的自我防禦指南」**

這是額外的主題，談監控與反監控，矛與盾的對決。

身為一個用戶，要在這個網路時代活下來，你需要了解老大哥的險惡，以及如何在楚門的世界中自保

身為資安防禦者，監控是你的本行，你必須知道駭客是如何繞過你的眼底，並且用各種手段把例外抓出來

*   AI時代與社交工程 [線上錄影](https://youtu.be/d7pOP-PE9m8)、[投影片](https://slides.com/sakura26/ai) *NEW* - ChatGPT不只是一個強力的工具，更是對人類本質的一大挑戰。除了社會形態的大幅改變，社交工程更是如虎添翼，我們該如何應對這個未知的世界？
*   [監控](monitoring.md) - 當一個人能隨時了解你的過去、現在的一切，甚至能操控你的未來...這是現在進行式
*   [反監控](anti-monitoring.md)  - 續上，身為一個普通人/駭客，我們怎麼對抗？
*   [反反監控](anti-anti-monitoring.md) - 再續上，身為網管，我該怎麼面對這些躲避措施？
*   [給人權工作者的自保指南](https://slides.com/sakura26/general-information-security-defense-for-ngo) - 第一線的鬥士，身無寸甲卻要面對巨型企業與政府，這是你們該知道的....

### 開發者面向

*   [PHP防禦性開發指南](dev_php_defense.md)
*   [行動APP開發](dev_mobileAPP.md)
*   [Inndy安全開發小講義](https://github.com/Inndy/fresh-foods)

### 攻擊者面向


### 職業、生涯規劃與其他

*   [Tim 資安人員如何協助企業面對威脅](http://www.slideshare.net/timhsu/ss-59206268)
* [雜談](freetalk.md)

## 雜項

[HITCON 2016閃電秀投影片](http://slides.com/sakura26/realdefense-intro-22)

[授權](LICENSE.md)
