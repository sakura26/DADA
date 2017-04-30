# 行動裝置APP安全開發指南

## 介紹

**兩種平台、三種架構**

Android v.s. iOS

Native APP v.s. Web APP v.s. Hybird

**防禦檢核表**

[](https://drive.google.com/open?id=0BxOPagp1jPHWYmg3Y3BfLVhMcmc)[https://drive.google.com/open?id=0BxOPagp1jPHWYmg3Y3BfLVhMcmc](https://drive.google.com/open?id=0BxOPagp1jPHWYmg3Y3BfLVhMcmc)

**Top 10 2016**

1.  平台安全機制誤用
2.  不安全的儲存區
3.  不安全的資料傳輸
4.  不安全的身份驗證機制
5.  不足夠的加密機制
6.  不安全的授權機制
7.  客戶端程式品質
8.  程式竄改/劫持
9.  逆向工程
10.  不應帶進生產階段的後門

[](https://www.owasp.org/index.php/Mobile_Top_10_2016-Top_10)[https://www.owasp.org/index.php/Mobile_Top_10_2016-Top_10](https://www.owasp.org/index.php/Mobile_Top_10_2016-Top_10)

## 參考資料

**開發**

iphone/ipad [](http://www.kingstone.com.tw/book/book_page.asp?kmcode=2014480823149&lid=search&actid=wise)http://www.kingstone.com.tw/book/book_page.asp?kmcode=2014480823149&lid=search&actid=wise

[](http://peterpaniosapp.strikingly.com)http://peterpaniosapp.strikingly.com

**逆向**

Android及ARM原生語言：逆向工程破解Android APP安全 [](http://www.books.com.tw/products/0010621393)http://www.books.com.tw/products/0010621393

ios: idb

android: appuse

**鑑識工具**

xry

**標準**

OWASP Mobile App [](https://www.owasp.org/index.php/OWASP_Mobile_Security_Project)[https://www.owasp.org/index.php/OWASP_Mobile_Security_Project](https://www.owasp.org/index.php/OWASP_Mobile_Security_Project)

OWASP Mobile App check list [](https://drive.google.com/open?id=0BxOPagp1jPHWYmg3Y3BfLVhMcmc)https://drive.google.com/open?id=0BxOPagp1jPHWYmg3Y3BfLVhMcmc

OWASP Mobile App Top 10 [](https://www.owasp.org/index.php/Mobile_Top_10_2016-Top_10)https://www.owasp.org/index.php/Mobile_Top_10_2016-Top_10

**台灣標準**

行動應用APP基本資安檢測基準及自主檢測推動制度** **[](http://www.communications.org.tw/news/policy/item/8813-20160219.html)http://www.communications.org.tw/news/policy/item/8813-20160219.html

金融機構提供行動裝置應用程式注意事項 [](http://www.rootlaw.com.tw/LawContent.aspx?LawID=A040390041063200-1031105)http://www.rootlaw.com.tw/LawContent.aspx?LawID=A040390041063200-1031105

摘要說明如下：

 ( 一 ) 應針對應用程式檢視系統所需最小權限，並進行存取控制。 

 ( 二 ) 於行動裝置上如有必要儲存敏感資料， 應採取加密或亂碼化等相關機制保護， 以有效防範資料外洩。

  ( 三 ) 應針對應用程式進行原始碼掃描、黑箱測試或滲透測試，並針對中、高風險弱 點及可影響敏感資料被竊取或竄改之弱 點進行改善。

   ( 四 ) 啟動應用程式時，如經偵測行動裝置疑似 遭破解，應提示使用者注意風險（如圖5）。

   ( <s>五 ) 於安裝或首次啟動應用程式時，應提示 使用者於行動裝置上安裝防毒軟體（如 圖 6）。</s>

   ( 六 ) 採用憑證技術進行傳輸加密時，應用程 式應建立可信任憑證清單，並驗證完整 憑證鏈及其憑證有效性。 

   ( 七 ) 採用空中傳輸 (OTA，Over-The-Air) 方 式下載敏感資料前，應確認使用者身分 (如密碼)，並採用嚴密的技術防護措施， 且能有效防範相關資料被竊取。

    ( 八 ) 採用空中傳輸方式下載敏感資料時，應 確認行動裝置及應用程式之正確性，並 進行端點 ( 銀行端 ) 對端點 ( 應用程式 ) 全程加密防護。

    ( 九 ) 採用安全儲存媒介 (SE，Secure Element) 作為儲存裝置時，應確認使 用者指定之安全儲存媒介編號 ( 如 SE ID)、並於 SE 內增設存取控管，限制由可信任應用程式存取。

    ( 十 ) 採用近距離無線通訊 (NFC，Near Field Communication) 技術進行付款交易資料 傳輸前，應經由使用者人工確認。

<s>( 十一 ) 應於官網上提供應用程式之名稱、版 本與下載位置。</s>