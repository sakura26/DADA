常見弱點概觀
=====

## 資料來源

最有名的消息來源大概就是OWASP了，他每年會列出資安屆最重要的十大弱點，同時本身也有許多專案開發相關工具與教學

<https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project>


以下列出一些常見的弱點的術語與原理簡介，有點亂。當然，不可能涵蓋一切，新的攻擊型態不停的在成長，請隨時擴展自己的知識庫

## 網站常見弱點介紹

* [SQL Injection](https://zh.wikipedia.org/zh-tw/SQL%E8%B3%87%E6%96%99%E9%9A%B1%E7%A2%BC%E6%94%BB%E6%93%8A)
* [Code injection](https://zh.wikipedia.org/zh-tw/%E4%BB%A3%E7%A2%BC%E6%B3%A8%E5%85%A5)
* Session管理不當
* [XSS](https://zh.wikipedia.org/wiki/%E8%B7%A8%E7%B6%B2%E7%AB%99%E6%8C%87%E4%BB%A4%E7%A2%BC)
* [CSRF](https://zh.wikipedia.org/zh-tw/%E8%B7%A8%E7%AB%99%E8%AF%B7%E6%B1%82%E4%BC%AA%E9%80%A0)
* 組態錯誤
* 資料外洩
* API防禦不足
* API權限
* 不可預見的重新導向
* 使用了有弱點的framework
* 使用虛弱的憑證或未使用加密
* Remote Code Execution - RCE
* Denied of service - DoS
* DDoS
* Directory Traversal 
* File Inclusion 
* 提權
* 取得資訊



## 本機常見弱點

* [Buffer/stack overflow](https://ithelp.ithome.com.tw/articles/10188599)
* [Heap Overflow](https://en.wikipedia.org/wiki/Heap_overflow)
* [Use after free](https://www.anquanke.com/post/id/85281)
* [錯誤的安全控管](https://www.ithome.com.tw/news/126764)
* 本地提權
* Process injection
* DLL Injection
* Dll path hijacking
* UAC Bypass
* Heap Spread