主機鑑識 - 尋找後門
=====
什麼是後門 - 上次講過了
一個潛伏在電腦中，默默收集資料，並藉機傳送給駭客/接收執行駭客的命令

為什麼不叫「病毒」？

進入 -> 提權 -> 「植入 -> 潛伏」

* 進入：社交工程、寄送文件檔、系統0-Day
* 提權：系統0-Day、社交工程
* 植入：放下可被執行的程式或script於系統中，並加入系統啟動流程（可能省略）
* 潛伏：

Dropper

前兩個可能是不同的程式或手法，而後兩者則是後門的範疇。
今天我們著重於怎麼發現隱藏在電腦中的木馬，以傳統的檔案型病毒為例。
現在流行的無檔案惡意程式，或DLL掛馬、或網站掛馬我們有機會另外再談

如果你要寫一隻後門，你會怎麼寫？

基本組成：一隻程式、可以被系統或使用者執行起來、定時回頭跟駭客通訊，執行駭客想做的事

這幾個地方都有一些方法可以去偵測與追蹤

防毒軟體、Autoruns、CnC連線分析、行為分析

## 基本工具組
SysInternal Toolkit

### Process Explorer 
<https://docs.microsoft.com/en-us/sysinternals/downloads/process-explorer>

可以視為強化版的工作管理員，深入的理解系統程序中各種屬性，行為，與相依關係

### Autoruns 
<https://docs.microsoft.com/en-us/sysinternals/downloads/autoruns>

所有程式都需要被執行起來才有辦法做事，後門也是一樣的。Autoruns將系統啟動流程中各個端點列出方便你檢視有沒有意料之外的程式藏在其中

### TCPView 
<https://docs.microsoft.com/en-us/sysinternals/downloads/tcpview> 

即時檢視系統中所有的網路連結，以TCP連線為主，
不過我更常用cports

### Process Monitors 
<https://docs.microsoft.com/en-us/sysinternals/downloads/procmon>

真正深入即時跟蹤程式的運作，將一切記錄下來，這是一個比較難以駕馭的工具，因為數據量相當大且複雜

毫無疑問，作業系統是一個複雜龐大的地方，你必須要對系統有一定程度的熟悉才有辦法在一堆資訊中找到可疑的點，這也導致這變成一個相當吃經驗、直覺與OS基礎的任務。

## 常見的持久化方法

<https://www.freebuf.com/vuls/195906.html>

## 幾個特性
* 在windows, system32目錄下出現的「非原裝」程式
* 應用程式簽章（無簽章、不可信賴的CA、以及被竊取的簽章）
* 掛在系統程序中，但你查了半天卻發現不屬於你安裝的任何程式也不屬於系統
* 不該連線的程式發起了連線 / 去了不該去的地方
* 別忘了駭客也會隱藏自身 - 程序列表可能看不到、程序注入、Services、dll injection...

## 抓到了，怎麼驗證他就是惡意程式？
丟進虛擬機跑囉，務必隔離免得爆炸