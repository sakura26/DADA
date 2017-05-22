# 資料銷毀

## 媒材

* 光碟燒錄片
* 傳統硬碟
* SSD
* 磁帶

## 實體銷毀

### 高強度磁力

* 對象：硬碟、磁帶
* 要買機器產生足夠的強磁力，不是拿磁鐵魯一魯就好
* 經過磁力處理不只資料消失，連硬碟都會無法使用。

### 榔頭與鐵鍬

* 對象：所有媒材（除了磁帶）
* 要注意：NSA等級的組織可有限還原殘片中的數據！

#### 火燒

* 對象：所有媒材
* 要注意：NSA等級的組織可有限還原殘片中的數據！

#### 微波（未經測試！）

* 對象：燒錄的光碟片（非壓片）
* 因為微波可以破壞光碟的染料層，所以可以破壞資料

## 可再次使用為前提

### 硬碟完整抹除

*   參考資料 [](http://evolutionbrain.blogspot.tw/2015/02/blog-post_26.html)[http://evolutionbrain.blogspot.tw/2015/02/blog-post_26.html](http://evolutionbrain.blogspot.tw/2015/02/blog-post_26.html)

美國國防部DOD 5220.22-M（DSS C&SM）

#### 定義了大量的美國資料清除與銷毀的安全方法

硬碟的部分為：一次全部寫０，一次全部寫１，一次亂入寫入

#### Guttman古特曼演算法

最高銷毀等級，重複寫入達35次，把所有的資料重複可能性都跑過

#### 懶人作法

*   ！！以下請務必換掉of參數所指的裝置路徑，別把自己的硬碟給燒了！！

##### 全部寫０

*   速度最快，但即使如此以目前的硬碟容量也要寫個幾個小時

```shell
dd if=/dev/zero of=/dev/sda
```

##### 全部寫１

```shell
dd if=<(yes $'\01' | tr -d "\n") of=/dev/sda
```

弱點：單次寫入0或1有可能可以被磁力分析找出微弱的磁力強弱變化，挖出資料

##### 寫入亂數

*   速度大概是全部寫０的數倍慢，而且很吃ＣＰＵ

*   dd if=/dev/urandom of=/dev/sda

##### 緊急狀況

如果你只有幾秒鐘時間，請至少抹掉磁碟分割表與檔案配置表

*   ！！以下請務必換掉of參數所指的裝置路徑，別把自己的硬碟給燒了！！

*   ###### collect disk info

    ``` shell
    fdisk -l | grep Disk | grep \/dev\/ | cut -d' ' -f 2 | cut -d':' -f1 > /tmp/localdrives
    ```

*   ###### erase disk header

    ```shell
    for OUTPUT in $(cat /tmp/localdrives)
    do
    dd if=/dev/zero of=$OUTPUT bs=512 count=1 conv=notrunc
    done
    ```

參考：[](http://slides.com/sakura26/self-terminator)http://slides.com/sakura26/self-terminator

##### 另一種複寫想法

[](http://www.ithome.com.tw/node/80029)http://www.ithome.com.tw/node/80029

參照這次韓國遭受到的國家級攻擊，可以知道如果以二進制碼不停寫入重複的短字串，速度夠快而且資料復原上的難度也不低

#### 硬碟加密

如果能預先準備，我推薦使用檔案系統加密，這樣你只需要全力抹除金鑰就好，速度也夠快

#### SSD

有特殊韌體命令可以直接歸零整個硬碟的資料

直接寫入0或1是無效的！！ 韌體可能會幫你把東西cache壓縮起來而沒有實際寫入！

SSD有部分磁碟空間保留作為快取與錯誤修正使用，那邊可能會藏直接寫入清不到的資料

#### 硬體RAID

由於有快取與壓縮機制，直接寫入0或1效果不佳

請針對實體磁碟進行清楚

RAID驅動本身可能有提供抹除功能