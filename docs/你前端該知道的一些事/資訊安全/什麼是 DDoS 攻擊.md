---
slug: 什麼是 DDoS 攻擊？
title: 什麼是 DDoS 攻擊？
authors:
    name: Janny
    title: 什麼是 DDoS 攻擊？
    url: https://github.com/jiangjanny
    image_url: https://avatars.githubusercontent.com/u/109901097?s=96&v=4
tags: [InternetSecurity, OWASP]
---

。

## 那什麼是 DDoS ?

DDoS（Distributed Denial of Service，分散式阻斷服務）是一種常見的攻擊方式，攻擊者透過大量的惡意流量攻擊目標網站，企圖癱瘓伺服器，導致合法用戶無法正常訪問網站，這可以比喻為在知名歌手的演唱會搶票時，當大量的人同時搶票，售票系統可能會因為負荷過重而崩潰，使真正想購票的粉絲無法順利購買到票。

### DDoS 攻擊概述
目的：使目標系統或網絡資源無法提供正常服務，通常通過消耗帶寬、系統資源或連接數量來達成。
攻擊來源：攻擊者利用多個受感染的設備（僵屍網絡）來發送大量流量或請求。

![alt text](image-13.png)
> 通常流量或請求來使目標系統或網絡資源無法正常運作的攻擊手段。攻擊者利用多個受感染的計算機（通常是被稱為「僵屍網絡」的惡意軟體控制的設備）來發送大量的請求或流量，從而使目標系統超載或崩潰。


### **DDoS 攻擊簡介**

**DDoS 攻擊**（Distributed Denial of Service，分散式阻斷服務攻擊）是一種利用大量流量或請求來使目標系統或網絡資源無法正常運作的攻擊方式。攻擊者通過多個受感染的設備（通常是僵屍網絡）向目標發送大量的數據或請求，目的是讓目標系統過載、崩潰或無法提供正常服務。

### **DDoS 攻擊的類型**

1. **流量攻擊**（Volume-Based Attacks）：
   - **UDP 洪水**、**ICMP 洪水**：通過發送大量的數據包來消耗目標系統的帶寬資源。

2. **協議攻擊**（Protocol Attacks）：
   - **SYN 洪水**、**Ping of Death**：利用協議漏洞來消耗系統的連接資源或使系統崩潰。

3. **應用層攻擊**（Application Layer Attacks）：
   - **HTTP 洪水**、**Slowloris**：通過大量的應用層請求來耗盡伺服器資源，影響網站性能。

### **DDoS 攻擊的具體範例**

1. **大規模流量攻擊**
   - **範例**：在黑色星期五促銷期間，一個電子商務網站遭遇 DDoS 攻擊。攻擊者使用僵屍網絡向網站發送每秒數百萬個請求，導致網站伺服器過載。網站因此無法處理正常用戶的請求，結果業務損失慘重。

2. **SYN 洪水攻擊**
   - **範例**：一個金融機構的在線銀行服務遭受 SYN 洪水攻擊。攻擊者發送大量的 TCP SYN 請求，這些請求使伺服器的連接資源被耗盡，導致正常用戶無法連接到銀行服務，影響了業務操作。

3. **HTTP 洪水攻擊**
   - **範例**：一家新聞網站在重大新聞報導期間遭受 HTTP 洪水攻擊。攻擊者發送大量的 HTTP 請求請求新聞頁面，這些請求消耗了網站伺服器的資源。結果，網站變得非常緩慢，甚至完全無法訪問。

4. **Slowloris 攻擊**
   - **範例**：一個小型企業的網站受到 Slowloris 攻擊。攻擊者發送大量半開的 HTTP 請求，並保持這些連接不斷。伺服器的連接池最終被耗盡，導致正常用戶無法連接到網站。

5. **DNS 放大攻擊**
   - **範例**：攻擊者利用開放的 DNS 解析器發起 DNS 放大攻擊。攻擊者向這些解析器發送小型的查詢請求，但請求中的來源地址被偽造為受害者的 IP。結果，大量的 DNS 回應被發送到受害者的伺服器，消耗其帶寬，導致服務中斷。

### **防範 DDoS 攻擊的策略**

1. **流量過濾**：
   - 使用防火牆或流量過濾系統來檢測並阻擋異常流量。

2. **增加帶寬**：
   - 擴展網絡帶寬以應對大量的流量，雖然這不是根本解決方案，但可以提高系統的承載能力。

3. **使用 DDoS 防護服務**：
   - 雲端 DDoS 防護服務（如 Cloudflare、Akamai）可以檢測並緩解大規模攻擊。

4. **冗餘設計**：
   - 設計系統架構時使用負載均衡和多個數據中心來提高抗攻擊能力。

5. **反向代理**：
   - 使用反向代理來分發流量、過濾請求、緩存靜態內容並隱藏源伺服器 IP，減少攻擊影響。

6. **CDN（內容傳遞網路）**：
   - CDN 通過將內容分發到全球多個節點，分散流量，減少對單一伺服器的壓力，並提供額外的流量過濾和緩存功能。

### **總結**

DDoS 攻擊的目的是使目標系統無法提供正常服務，通過大規模的流量或請求來達成。具體範例包括大規模流量攻擊、SYN 洪水攻擊、HTTP 洪水攻擊、Slowloris 攻擊和 DNS 放大攻擊。通過使用流量過濾、擴展帶寬、DDoS 防護服務、冗餘設計、反向代理和 CDN 等策略，可以有效減少 DDoS 攻擊的影響，保護系統的穩定運行和業務持續性。