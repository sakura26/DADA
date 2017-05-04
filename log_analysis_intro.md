# Log分析入門

## 前言

Log，一個讓人又愛又恨的東西

又臭又長不好讀，每天產生一大堆，不小心就塞爆了硬碟搞掛了主機，又吃不少效能

但，

他也是除錯時重要的救星，唯一可以了解系統狀況的夥伴，以及，在駭客攻擊中，讓你存活的必要手段

一起來瞭解他吧！

這是「戰情分析」系列課程

我們會一路從「Log概論」、「Log分析」、「Log處理」、「SOC」、「資安戰情室」一路深入，最終我們將能掌握自己的系統，看到駭客，並作出回應

_這不是傳統的課程，請不要來「聽課」，腦袋硬梆梆的是做不好資安的，請不吝跟大家分享想法_

另外如果你已經有相當經驗，可以跳過這堂課，但也歡迎來聊天

授權方式 [CC: BY-SA](https://creativecommons.org/licenses/by-sa/3.0/tw/legalcode) 

黑魔法防禦術 FB群組 => [](https://www.facebook.com/groups/308549376151517)[https://www.facebook.com/groups/308549376151517](https://www.facebook.com/groups/308549376151517)

加入請記得回答問題喔，如果一直沒收到加入回覆，請發個訊息跟我聯絡，或看一下收件夾

## Log基礎

### Log是什麼？

為了記錄曾經發生過的重要事件而產生的數據

[](https://www.youtube.com/watch?v=XvyrUfuLGVk)https://www.youtube.com/watch?v=XvyrUfuLGVk

*   請大家分享一下第一次看到Log滿畫面刷的時候是什麼時候，以及感想ＸＤ

*   我覺得似乎可以補充一下，log 除了自動產生的以外，還有一些是  commit log 這種有人參與的

      ​

### 為什麼要有Log？

*   除錯
*   效能調教
*   稽核追蹤
*   鑑識
*   了解現況
*   備份、資料同步、回溯（常用在DB）

*   Mysql binary log, Oracle redo log, GIT
*   log 也可拿來讓 monitor system 做近即時的狀態通報之類的，或是很簡單的統計流量或使用狀態 (eg. 把 httpd access log 用時間區段 (像是 1 min) group 就可以得到每分鐘的線上人數

### 誰想看Log?

*   架站的時候
*   e04，有bug！

*   in this case, git log 很有用，用其他 log 找到錯在哪裡也可以找到這段程式碼是誰寫的

*   系統不穩定而抓狂的網管

*   前提是各種 log 都要有留，這部分應該要搭配 log server 一起服用

*   被駭客打的嫑嫑的可憐人
*   怒氣沖沖準備上法院的主管
*   **駭客**
*   **資安人員**

### 資安人員看Log幹嘛？

*   找出駭客的行跡
*   發現異常行為
*   尋找弱點
*   釐清「曾經發生過什麼事」
*   舉證上法院 →  不可否認性/ 憑證
*   得知目前的安全性與政策成效

### 資安上的定番

*   網路流量
*   登出入記錄
*   存取紀錄
*   指令操作（異常、特權）
*   排程動作
*   系統運作檢核點

### Log的必要組成

*   以時間為主軸
*   主體（誰發起了這則log）
*   事件描述

*   最好有 人、事、時、地、物

### Log的特性

*   隨時間產生
*   多為文字紀錄

*   有少數是用自己的格式，不過都有相對應的工具可以解出來

*   非常大量
*   不應被修改，生成後固定
*   可被歸檔、分割

*   logrotate (y)

*   一般來說人們很討厭他

### Log分級與分類

[](https://en.wikipedia.org/wiki/Syslog)https://en.wikipedia.org/wiki/Syslog

*   Syslog Factility

Kern / User / mail / daemon / auth / syslog / lpr / news / uucp / authpriv / ftp / cron / local0~7

*   Syslog Severity

Emergency / Alert / Critical / Error / Warning / Notice / Info / Debug

*   我遇過一些系統是直接 pipe 到 /var/log/messages 的，猜測應該是設定問題 XD
*   姆，比較不建議這麼做，這樣容易寫入打架，同時LogRotate的時候會出包ＸＤ
*   基本上遇到的那台系統也沒拿來當 server，可能是系統預設問題 XD?

### Log的常見欄位

*   時間
*   事件名稱
*   事件編號
*   嚴重程度Severity
*   發生的主機
*   來源
*   目標
*   動作

*   來個 sample 之類的 XD? 欸等等樓下有 XD

### Unix常見Log

filelog / kernel log

syslog

*   這裡會大略介紹什麼是syslog

*   /var/log/auth.log
*   /var/log/boot.log
*   /var/log/dmesg
*   /var/log/dpkg.log
*   /var/log/kern.log
*   /var/log/mail.*
*   /var/log/syslog    /var/log/message
*   /var/log/wtmp  utmp  lastlog  
*   /var/log/apache2/access.log
*   /var/log/apache2/error.log

族繁不及備載...

### Log範例

#### Apache Access Log

*   xxx.xxx.tw:80 114.27.125.17 - - [09/Apr/2017:07:42:38 +0800] "GET /s/pixmicat.php?mode=module&load=mod_shoutbox&action=latest HTTP/1.1" 200 416 "[](http://xxx.xxx.tw/s/)http://[x](http://p.komica.acg.club.tw/s/)[x](http://x.tw/s/)[x](http://xx.tw/s/)[.](http://xxx.tw/s/)[x](http://xxx..tw/s/)xx.tw/s/" "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36"
*   xxx.xxx.tw:80 183.178.169.204 - - [09/Apr/2017:07:42:41 +0800] "GET /a/pixmicat.php?mode=module&load=mod_shoutbox&action=latest HTTP/1.1" 200 432 "[](http://xxx.xxx.tw/a/)http://[x](http://.tw/a/)[x](http://x.tw/a/)[x](http://xx.tw/a/)[.](http://xxx.tw/a/)[x](http://xxx..tw/a/)[x](http://xxx.x.tw/a/)[x](http://xxx.xx.tw/a/).tw/a/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36"

#### Apache Error log

*   [Sun Apr 09 07:46:12 2017] [error] [client 126.xxx.60.57] File does not exist: /home/xxx/www/favicon.ico, referer: [](http://xxx.xxx.com/photo/mt/c/DSCF7116.JPG)http://[x](http://.com/photo/mt/c/DSCF7116.JPG)[x](http://x.com/photo/mt/c/DSCF7116.JPG)[x](http://xx.com/photo/mt/c/DSCF7116.JPG)[.x](http://xxx.com/photo/mt/c/DSCF7116.JPG)[x](http://xxx.x.com/photo/mt/c/DSCF7116.JPG)[x](http://xxx.xx.com/photo/mt/c/DSCF7116.JPG).com/photo/mt/c/DSCF7116.JPG
*   [Sun Apr 09 07:48:19 2017] [error] [client 68.xxx.180.113] File does not exist: /home/p/a/src/1486650846281.gif

#### vsftpd

*   Sun Apr  2 12:28:51 2017 [pid 2] CONNECT: Client "174.106.37.179"
*   Sun Apr  2 12:28:53 2017 [pid 1] [anonymous] FAIL LOGIN: Client "174.106.37.179"
*   Sun Apr  2 14:25:55 2017 [pid 2] CONNECT: Client "115.159.55.184"
*   Sun Apr  2 14:25:57 2017 [pid 1] [club] FAIL LOGIN: Client "115.159.55.184"
*   Sun Apr  2 14:25:59 2017 [pid 2] CONNECT: Client "115.159.55.184"
*   Sun Apr  2 14:26:03 2017 [pid 1] [xxx.xxx.xxx.club.tw] FAIL LOGIN: Client "115.159.55.184"
*   Sun Apr  2 14:26:04 2017 [pid 2] CONNECT: Client "115.159.55.184"
*   Sun Apr  2 14:26:07 2017 [pid 1][xxx] FAIL LOGIN: Client "115.159.55.184"
*   Sun Apr  2 14:26:08 2017 [pid 2] CONNECT: Client "115.159.55.184"
*   Sun Apr  2 14:26:12 2017 [pid 1] [clubtw] FAIL LOGIN: Client "115.159.55.184"

#### syslog / message

*   Apr  9 07:42:29 xxx rsyslogd: [origin software="rsyslogd" swVersion="5.x.x" x-pid="1006" x-info="[](http://www.rsyslog.com)http://www.rsyslog.com"] rsyslogd was HUPed
*   Apr  9 07:42:48 xxx anacron[23088]: Job `cron.daily' terminated (mailing output)
*   Apr  9 07:42:48 xxx anacron[23088]: Normal exit (1 job run)
*   Apr  9 07:42:48 xxx postfix/pickup[22694]: 323FA6010A: uid=0 from=<root>
*   Apr  9 07:42:48 xxx postfix/cleanup[23501]: 323FA6010A: message-id=<20170408234248.323FA6010A@xxx.com>
*   Apr  9 07:42:48 xxx postfix/qmgr[1968]: 323FA6010A: from=<root@xxx.com>, size=466, nrcpt=1 (queue active)
*   Apr  9 07:42:48 xxx postfix/local[23503]: 323FA6010A: to=<root@xxx.com>, orig_to=<root>, relay=local, delay=0.02, delays=0.02/0/0/0, dsn=2.0.0, status=sent (delivered to mailbox)
*   Apr  9 07:42:48 xxx postfix/qmgr[1968]: 323FA6010A: removed

#### auth.log

*   Apr  9 11:22:12 xxx sshd[xx]: Accepted password for xxx from xxx.xxx.xxx.82 port 55825 ssh2
*   Apr  9 11:22:12 xxx sshd[xx]: pam_unix(sshd:session): session opened for user xxx by(uid=0)
*   Apr  9 11:25:01 xxx CRON[xx]:pam_unix(cron:session): session opened for user root by(uid=0)
*   Apr  9 11:46:12 xxx sudo:       xxx : TTY=pts/3 ; PWD=/var/log ; USER=root ;COMMAND=/bin/su
*   Apr  9 11:46:12 xxx sudo: pam_unix(sudo:session): session opened for user root by xxx(uid=1000)
*   Apr  9 11:46:12 xxx su[xx]: Successful su for root by root
*   Apr  9 11:46:12 xxx su[xx]: + /dev/pts/3 root:root
*   Apr  9 11:46:12 xxx su[xx]: pam_unix(su:session): session opened for user root by xx(uid=0)

#### Lastlog

*   $ last
*   xxx       pts/4        220-xxx-xxx-82.h Sun Apr  9 13:26   still logged in   
*   xxx       pts/3        220-xxx-xxx-82.h Sun Apr  9 11:22   still logged in   
*   wtmp begins Sun Apr  9 11:22:16 2018

#### Windows也有喔

圖1.1

![image](https://github.com/sakura26/DADA/blob/master/img/log_analysis_1.png)

補充：windows安全日誌分析之logparser篇

[](https://read01.com/de7e.html)https://read01.com/de7e.html

## 簡易的Log分析

很多時候，我們只是想知道很簡單的問題

今天有多少人登入？

某個檔案的下載次數？

有沒有壞人正在試著暴力破解密碼？

某個站流量的使用時間分佈？

也有些時候，我只是想觀察某個使用者到底上了我的站一路上做了些什麼

Log分析大致上有兩個走向

*   逐行理解
*   統計概觀

前者大量使用在鑑識中，而後者協助你快速的找到有問題的地方快速切入

畢竟當面對海量的Log滿天飛的時候，一條一條看想要找到問題，幾乎是不可能的任務

這裡介紹以Unix指令行做簡單快速的Log分析

大多數情況下，你可以快速地得到“單一參數”的統計結果，可以直接丟去excel畫圖

複雜的多值統計也可以做到，但就需要寫複雜的Script了

優勢是你幾乎到任意Unix機台都能夠快速的對Log進行分析，熟練之後可以相當隨心所欲

缺點是複雜計算不容易實現，這種循序處理效能也不好，對於大量數據的情況，我們等一下會介紹更好的工具

### 常用Unix串流處理命令

head / tail

*   -f , -n

grep / egrep

*   -v, regex

cat

*   -d  -n  行號

cut 

*   -d, -c, -f

sort / uniq 

*   -c, -n   

tr / sed

*   -d, regex

awk

*   太複雜了自己看，猛猛的神物

補充：Linux日志终极指南

[](http://os.51cto.com/art/201703/535721.htm)http://os.51cto.com/art/201703/535721.htm

用SQL指令分析網站日誌 輕鬆掌握主機運作狀況

[](http://www.netadmin.com.tw/article_content.aspx?sn=1703130003)http://www.netadmin.com.tw/article_content.aspx?sn=1703130003

#### vsftpd.log

*   Sun Apr  2 12:28:51 2017 [pid 2] CONNECT: Client "174.106.37.179"
*   Sun Apr  2 12:28:53 2017 [pid 1] [anonymous] FAIL LOGIN: Client "174.106.37.179"
*   Sun Apr  2 14:25:55 2017 [pid 2] CONNECT: Client "115.159.55.184"
*   Sun Apr  2 14:25:57 2017 [pid 1] [club] FAIL LOGIN: Client "115.159.55.184"
*   Sun Apr  2 14:25:59 2017 [pid 2] CONNECT: Client "115.159.55.184"
*   Sun Apr  2 14:26:03 2017 [pid 1] [xxx.xxx.xxx.club.tw] FAIL LOGIN: Client "115.159.55.184"
*   Sun Apr  2 14:26:04 2017 [pid 2] CONNECT: Client "115.159.55.184"
*   Sun Apr  2 14:26:07 2017 [pid 1] [xxx] FAIL LOGIN: Client "115.159.55.184"
*   Sun Apr  2 14:26:08 2017 [pid 2] CONNECT: Client "115.159.55.184"
*   Sun Apr  2 14:26:12 2017 [pid 1] [clubtw] FAIL LOGIN: Client "115.159.55.184"

#### 抓出FTP登入失敗者的排名

*   $ cat vsftpd.log* | grep FAIL | cut -c 35- | tr -d ']' | cut -d' ' -f1 | sort | uniq -c | sort -n | tail 
*   868 club888
*   868 club_tw
*   868 club-tw
*   868 ppclub
*   869 club666
*   873 tw
*   881 clubtw
*   890 pp.xxx.club.tw
*   1372 club
*   1416 pp

#### 抓出FTP登入失敗者的來源ip並與名稱配對

*   $ cat vsftpd.log* | grep FAIL | awk '{print $8 " " $12}' | sort | uniq -c | sort -n | tail
*   868 [club123456] "115.159.55.184"
*   868 [club888] "115.159.55.184"
*   868 [club_tw] "115.159.55.184"
*   868 [club-tw] "115.159.55.184"
*   868 [clubtw] "115.159.55.184"
*   868 [pp] "115.159.55.184"
*   868 [ppclub] "115.159.55.184"
*   868 [pp.xxx.club.tw] "115.159.55.184"
*   868 [tw] "115.159.55.184"
*   869 [club666] "115.159.55.184"

#### 排除"115.159.55.184"換個方法再看一次

*   $ cat vsftpd.log* | grep FAIL | grep -v "115.159.55.184" | awk '{print $8 " " $12}' | sort | uniq -c | sort -n | tail
*   58 [pp] "60.249.245.180"
*   59 [club] "60.249.245.180"
*   60 [acg] "60.249.245.180"
*   88 [admin] "45.76.185.49"
*   88 [ftp] "45.76.185.49"
*   88 [root] "45.76.185.49"
*   97 [pp] "166.62.39.130"
*   98 [acg] "166.62.39.130"
*   98 [club] "166.62.39.130"
*   102 [komica] "166.62.39.130"

#### 抓出每個IP嘗試登入的使用者名稱總量（進階）

*   $ for line in `cat vsftpd.log* | grep FAIL | awk '{print $12}' | sort | uniq`; do echo -n "$line: ";cat vsftpd.log*|grep $line|awk '{print $8}'| sort | uniq -c|wc -l ; done | awk '{print $2" "$1}'| sort -n | tail
*   6 "60.13.132.38":
*   6 "60.13.192.113":
*   6 "60.216.4.162":
*   6 "60.249.245.180":
*   6 "85.99.113.82":
*   6 "95.9.179.10":
*   7 "62.149.193.132":
*   13 "115.159.55.184":
*   54 "112.64.217.127":
*   82 Client:

#### Apache網站的使用時間分佈圖（小時）

*   $ cat other_vhosts_access.log | cut -d'[' -f 2 | cut -d':' -f1-2 | sort | uniq -c 
*   896 09/Apr/2017:07
*   3315 09/Apr/2017:08
*   4286 09/Apr/2017:09
*   4778 09/Apr/2017:10
*   6075 09/Apr/2017:11
*   5580 09/Apr/2017:12
*   6635 09/Apr/2017:13
*   6958 09/Apr/2017:14
*   6583 09/Apr/2017:15
*   6119 09/Apr/2017:16

呃...還是太複雜嗎？

好吧，我們來看看一些現成工具

## 常見工具

### 簡易

#### Excel / OpenOffice calc / Google sheets**

基本上來說，你得先把資料轉換成Excel或是CSV檔案，這可以透過Script來實現

雖然Excel有資料解析精靈可以用，使用前得先確認你的資料跟你想像中長得一樣，免得匯進去各種爆炸

大體上來說，你可以輕鬆用它建立許多基本圖表，長條圖、折線圖、圓餅圖、區域圖、雷達圖、散佈圖、地圖等，是最基本的工具

#### Qlik Sense Desktop

即時更新 / 屬記憶體資料庫 / 

[](http://www.qlik.com/us/products/qlik-sense/getting-started)http://www.qlik.com/us/products/qlik-sense/getting-started

展示 [](https://webapps.qlik.com/masters/index.html#/2017-stats/)https://webapps.qlik.com/masters/index.html#/2017-stats/

免費的工具，專注在視覺化與互動

*   類似Excel的簡易操作介面，
*   但是有更棒且可擴充的圖表，
*   能對資料進行清理、轉換、過濾、再製（ETL）
*   產生的圖表可即時互動，輕鬆深入理解資料的本質
*   非常高的效能

大致上的操作是：檔案拖進去，選擇欄位，拉圖表，就這樣了ＸＤ

然後如果需要更新資料，再拖一次就是了

值得一試

### 特化/炫砲

#### 專門針對Web分析的有一大串

我之前用過AWstats，不過後來都直接shell處理掉了，下面有一堆可用的軟體列表

[](https://en.wikipedia.org/wiki/Web_log_analysis_software)[https://en.wikipedia.org/wiki/Web_log_analysis_software](https://en.wikipedia.org/wiki/Web_log_analysis_software)

不過這個也很酷炫

Logstalgia [](http://logstalgia.io/)[http://logstalgia.io/](http://logstalgia.io/)

[](https://www.youtube.com/watch?v=jqlIQ0MXsnA)[https://www.youtube.com/watch?v=jqlIQ0MXsnA](https://www.youtube.com/watch?v=jqlIQ0MXsnA)

即時狀態

apachetop  

![](https://github.com/sakura26/DADA/blob/master/img/log_analysis_2.jpg)

​		圖1.2

[](http://img1.51cto.com/attachment/200908/13/612518_1250155488VmfN.jpg)http://img1.51cto.com/attachment/200908/13/612518_1250155488VmfN.jpg

### 防火牆

把pfSense防火牆的Log用Logstalgia展現

[](https://xn--blgg-hra.no/2016/02/live-visualizing-mikrotik-firewall-traffic-with-logstalgia/)[https://xn--blgg-hra.no/2016/02/live-visualizing-mikrotik-firewall-traffic-with-logstalgia/](https://xn--blgg-hra.no/2016/02/live-visualizing-mikrotik-firewall-traffic-with-logstalgia/)

VisualFirewall，類似 Logstalgia ，可惜不會動

[](https://www.chrisleephd.us/projects/visualfirewall.html)[https://www.chrisleephd.us/projects/visualfirewall.html](https://www.chrisleephd.us/projects/visualfirewall.html)

glTail.rb 看起來也很炫，雖然我不太懂為什麼他要加入物理引擎...

[](http://www.fudgie.org/)[http://www.fudgie.org/](http://www.fudgie.org/)

###  進階

從這邊開始就是一個完整的環境了

#### ELK Stack

*

[](https://www.youtube.com/watch?v=TOxu97lvqRc)https://www.youtube.com/watch?v=TOxu97lvqRc

相當不錯的分析套件，OpenSource

包含ElasticSearch資料儲存搜尋、LogStash資料收集轉換、Kibana視覺化

優點：快速完成圖表，互動性也不差，全分散式架構很威猛

缺點：你還是需要Regex的能力去對Log切欄位，ElasticSearch無法關閉的Ranking機制在大量數據時會造成瓶頸，而Kibana與ElasticSearch的Restful連結並沒有足夠安全的驗證機制，如果丟在外網跑可能很快就會燒起來惹（[CVE-2015-1427](http://jordan-wright.com/blog/2015/03/08/elasticsearch-rce-vulnerability-cve-2015-1427/) ）

#### Hadoop生態系

專門處理巨量資料的情況，台灣應該沒什麼需要用到的場景在（資料量不夠大）

效能稱不上好，成本不低，也不是很方便（目前好像沒有現成的套件，都自己寫），但數據量大的時候只有他了

由於LogStash跟Flume(fluentd?)都有把資料解析後匯入HDFS的能力，所以用他分析的也不在少數

### **商業軟體**

#### Qlik Sense Server

前面有提供免費的Desktop版的介紹了，Server則帶有更多企業級屬性，諸如報表（n-printing）、多人共享、多人同步編輯、自動刷新等等。如果要用在商業上，那就是他了

#### Splunk

一個Unix Like的Log管理系統，號稱全分散式，有很好的效能，強項在即時標記與過濾

但關聯性分析方面就弱一點，然後可能比ArcSight還貴

*

[](https://www.youtube.com/watch?v=-q-Ue603vKc)https://www.youtube.com/watch?v=-q-Ue603vKc

這玩意看起來也滿帥的，是外掛套件，不過非常吃效能

#### ArcSight Logger 

相當昂貴，專注於資安上的分析系統，同時可以分析與畫圖，產生報告，甚至做到即時回應

因為專注在資安上，所以有很多預製的樣板如ISO 27001來協助稽核跟分析，欄位則是固定寫死的

強項是關聯性分析軟體ESM，不過真的有本事去使用這個技術的人少之又少...

然後效能實在是 = =

*   <s>缺點我就不多說了，用了好幾年心裡各種幹</s>
*   視覺化能力真的很弱，只有事件圖能看

![](https://github.com/sakura26/DADA/blob/master/img/log_analysis_3.png)

圖3

*   第一階段切到這邊，後面可能會講太多....

## 參考

[2016COSCUP Everything is log  ](https://speakerdeck.com/poga/everything-is-log)[](https://speakerdeck.com/poga/everything-is-log)[https://speakerdeck.com/poga/everything-is-log](https://speakerdeck.com/poga/everything-is-log)

萬事萬物皆是 LOG - 參考資料 [](http://ppt.cc/WTpok)**[http://ppt.cc/WTpok](http://ppt.cc/WTpok)**

萬事萬物皆是 LOG - 系統架構也來點科普 [](https://www.slideshare.net/poga/log-65475572)https://www.slideshare.net/poga/log-65475572

從記錄收集分析談IT Log管理 [](http://jackforsec.blogspot.tw/2009/11/it-log.html)http://jackforsec.blogspot.tw/2009/11/it-log.html

**HP ArcSight Vs. IBM QRadar Vs. McAfee Nitro Vs. Splunk Vs. RSA Security Vs. LogRhythm**

[](https://www.itcentralstation.com/product_reviews/logrhythm-review-32130-by-vinod-shankar)https://www.itcentralstation.com/product_reviews/logrhythm-review-32130-by-vinod-shankar

PHP Apache Access Log 分析工具 拆分字段成CSV文件並插入Mysql

[](http://www.itread01.com/articles/1478075420.html)http://www.itread01.com/articles/1478075420.html