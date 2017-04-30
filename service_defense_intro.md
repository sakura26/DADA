# 服務防禦概論
<ul class="comment"><li>這邊要拉出來！超過1.5hr了！</li></ul class="comment">

## Service強化法則

*   充分理解服務的運作原理
*   所有服務必須要確實配置完畢後才可開放公眾存取
*   盡量使用最小權限帳戶運作你的服務
*   保護設定檔
*   盡量使用chroot
*   避免明文驗證
*   保持最新，保持小氣
*   若非公開服務，使用防火牆協助限制來源IP
*   定期檢視服務Logs

**常見Service強化**

Telnet

*   請趕快丟了吧

SSH

*   禁止root直接登入
*   禁止空密碼
*   限制來源IP
*   注意TCP轉向
*   注意xwindow轉向
*   OpenSSL務必保持在最新版

FTP

*   以最低權限執行
*   配置磁碟限額
*   chroot user
*   匿名登入不要給予寫入權限避免濫用
*   啟用FTPS或改用SFTP
*   記得關掉使用者的shell