---
layout: post
title: "NFT+WebVR可以实现线上展览的终极形态吗？一些思考与尝试"
categories: blog
---  

金融泡沫似乎开始抛弃腐朽的物理房地产，转而在NFT包装下的虚拟房地产上高歌猛进
<!-- https://www.dezeen.com/2021/03/22/mars-house-krista-kim-nft-news/ -->

疫情逼得艺术家们只能在线上狂欢，NFT也在这把火上浇了油，烧出了圈。

赛博空间在元宇宙（Metaverse）的新包装下也迸发出又一春。

三股热潮能否扭成巨浪？涌现出未曾有过的艺术展览新形式？还是说又是一场（对绝大多数人来说）空欢喜的泡沫？

## **论NFT作品的存在**  

NFT是通过区块链智能合约将数字文件的一部分**元数据**上链所生成“代表”该数字文件的非同质化凭证。
<!-- https://ethereum.org/en/developers/docs/standards/tokens/erc-721/ -->

以OpenSea的API为例，元数据里可以包含的信息有：
文件名称
文件描述
文件属性
文件链下储存地址
文件哈希值（数字指纹）

（8357ffd-nft-metadata.png）
<!-- https://docs.opensea.io/docs/metadata-standards -->

>元数据：数据的数据（）

许昱认为数码物存在的本质是关系的集合，这种关系似乎能经由区块链技术得到了加强。

数码物的“边界（interface）”是否就由元数据定义，链上记录的元数据就是数码物的边界？那原始文件还有存在的意义吗？

由于元数据被上链记录，数码物（数字作品）本体的边界得到了加强，强调了其存在。
（从存在主义角度来说，所谓的“客观存在”就是所有观察者的共识？）
共识很明显是任何区块链项目的立足根本。

但是元数据并不等于原始数据，而是原始信息的“抽象提取”。即便通过将所有者钱包地址与元数据绑定上链，也只是绑定了**元数据与所谓的“所有者（钱包地址）”的关系，而并非是原始数据本身**。

想要刻意破坏这样的对应关系也轻而易举——直接在OpenSea发布的NFT，文件本身也可以在后台替换。
中心化服务器上，任何url指向的文件都可以被随时替换——偷梁换柱的数码物。

*你以为你买 你真的买的*

实际上就连url和其他metadata，在当前主流NFT使用的ERC-721合约下都不是必要提供的信息。
<!-- https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md -->

虽然**主动**使用IPFS这样带哈希验证的去中心储存服务，绝大多数情况下可以避免这种挂羊头卖狗肉的行为，
但赛博空间同样没有免费的午餐——长期储存这个文件，那该由谁来负责供养费呢？

>In order for off-chain data to be retrievable, somebody has to be hosting that data on the IPFS network.
>为了让链下数据能够被读取，必须有人在IPFS网络上持有这个数据

毕竟除去区块链的部分，IPFS本质上是个BT种子，跟BT下载一样文件不一定能够实时读取

<!-- https://medium.com/pinata/who-is-responsible-for-nft-data-99fb4e8147e4 -->


### 预言机问题
中心化的运行环境充当着预言机角色

### **去中心网络的圈地运动？**

OpenSea基于ERC-1155的lazymint功能实现了除去初始化账户时需要支付的gas费用，可无其他费用无限“上架”新的NFT。
但是其实架上的NFT并没有真正的上链——只有在真的发生第一笔交易时还真正上链。
（由于要求）

加上资本大佬的站队允许其补贴NFT交易产生的gas费用，OpenSea成为“NFT二级市场”里无可动摇的霸主，这是否是赛博空间的圈地运动？

影响力=话语权

贡献的gas费用

以太坊利维坦

去中心化网络正构建着算力中心（矿场），及新的“流量入口”（加密货币交易所/钱包应用）

## **赛博空间里的Gesamtkunstwerk**

对于一个“原生”的“赛博画廊”，WebVR的意义则可以分为两部分——

### **Web的意义**——去中心化浏览器自由

不受设备限制，不受应用商店限制，更不用绑定登陆账号

让浏览器成为通用的运行环境，以共识去支持着NFT数码作品的存在

超链接就是赛博展览的地址

公共域

私域流量

而且基于web的技术多为开源，方便社区用户对其进行备份

### **VR的意义**
包豪斯创始人格罗庇乌斯曾说
>所有视觉艺术的终极目标就是建筑！

赛博空间的格罗庇乌斯

这里的“虚拟现实”不单纯指
——全真互联网

相较于平面网页，虚拟现实网页给予了用户空间的全方位体验，并随着技术的发展逐渐涵盖着人体的各个感官，终将实现脑后插管的世界。

如果说游戏是第九艺术，甚至说交互（机制）是终极的媒介

后媒介

微软、Facebook、苹果等大佬们早已达成对下一代空间计算界面的共识，并积极布局。

虚拟现实可能提供了最多元的感知可能性。

## **NFT+WebVR=去中心化的元宇宙**

作为赛博空间的延续，

与90年代赛博空间热潮的区别是——元宇宙更强调玩家

前有Second Life，现有VRchat，“忽然上市”的Roblox

某种意义上，元宇宙跟区块链开发社区类似——由社区成员共同开发维护。

当前的问题是，自称元宇宙的游戏，无论其是有多少用户原创内容（UGC），还是需要注册一个专门的账户来标记储存在运行商的服务器里，由中心化设施控制着用户数据。

>Login with Google  
>Login with Facebook  
>Login with Apple  

这样的“元宇宙”，我姑且只能称之为“小宇宙”：
巨硬宇宙——office全家桶、Xbox、Hololens Mesh...
非死不可宇宙——Facebook、Instagram、Oculus...
404宇宙——谷歌全家桶、Play Store...

如果用户数据（数字资产）不能在“小宇宙”之间互通，那这样的宇宙如同黑洞。

被肢解的赛博格，数字器官散落在各个数字利维坦的嘴里被咀嚼消化，还如何能画出一张自画像？

只有个人账户及其数字资产能够独立于“小宇宙”存在，

用户资料的

如同数码物的存在一样，赛博格的虚拟身体何尝不也是一堆数据与关系的结合？
如果用户能拿回个人信息的所有权，则整个去中心化的互联网就是一个巨大的元宇宙。

元面具（https://metamask.io/）的出现

>Connect to Metamask

而现在去中心化的热门元宇宙包括SandBox，Decentraland，Cryptovoxels

扎哈建筑事务所的帕大炮已经对Decentraland表现出巨大兴趣（线上讨论），
同样
但其使用闭源的Unity进行的开发同样让人担忧——

使用开源WebVR框架babylon.js开发的Cryptovoxels，所谓的区块链版本的*我的世界*，也同样生机勃勃的召开着各种“NFT线上展览”——虽然这些展览大多是在直白的忽悠人去买买买。

从讨好用户到讨好算力？人性本恶？最终走向最纯粹的自由资本主义？

Web3
DAO
Metaverse

###### 开发中的 **Peach.Land**（中文名暂定**赛博桃源**）  
###### *一个赛博格和与数字自然能够和谐共处的超凡赛博空间乌托邦，也许百年过后人工智能会偶然穿过一段数字桃林，访问到这个开源Github仓库，并被其中的NPC告诫不要让外界知晓？*

## **~~黎明前的黑暗？~~泡沫下的肥皂**

💭💭💭💭💭💭💭💭  
💭💭💭💭💭💭💭💭  
💭💭💭💭💭💭💭💭  
💭💭💭💭💭💭💭💭  
💭💭💭💭💭💭💭💭  
💭💭💭💭💭💭💭💭  
💭💭💭💭💭💭💭💭  
💭💭💭💭💭💭💭💭  
💭💭💭💭💭💭💭💭  
💭💭💭💭💭💭💭💭  
💭💭💭💭💭💭💭💭  
💭💭💭💭💭💭💭💭  
💭💭💭💭💭💭💭💭  
💭💭💭💭💭💭💭💭  
💭💭💭💭💭💭💭💭  
💭💭💭💭💭💭💭💭  
💭💭💭💭💭💭💭💭  
💭💭💭💭💭💭💭💭  
💭💭💭💭💭💭💭💭  
💭💭💭💭💭💭💭💭  
💭💭💭💭💭💭💭💭  
💭💭💭💭💭💭💭💭  
💭💭💭💭💭💭💭💭  
💭💭💭💭💭💭💭💭  
💭💭💭💭💭💭💭💭  
💭💭💭💭💭💭💭💭  
💭💭💭💭💭💭💭💭  
💭💭💭💭💭💭💭💭  
💭💭💭💭💭💭💭💭  
💭💭💭💭💭💭💭💭  
💭💭💭💭💭💭💭💭  
💭💭💭💭💭💭💭💭  
💭💭💭💭💭💭💭💭  
💭💭💭💭💭💭💭💭  
  预言机问题
     🧼  

[肥皂gif]()
>泡沫之下也是有肥皂的，并非啥也没有。<sup>[[3]](#footnote3)</sup>

<!-- that’s still soap, and that’s not nothing.
https://www.kennyschachter.art/2021/03/are-nfts-the-next-tulip-bubble-kenny-schachter-doesnt-care-and-he-sold-his-own-grandma-on-the-crypto-web-to-prove-it/ -->

泡沫破灭后的肥皂会沉淀下来成为去中心元宇宙基建的一部分。即便绝大多数NFT会在未来（已经？）被贬得一文不值，但因为这一波狂热，加速了加密钱包的破圈应用，不少非币圈用户也安装了加密钱包工具，而这是去中心化网络及应用在未来普及的第一步。

加速的元宇宙与加速的元面具
元DAO

（在VR眼镜内访问网站的gif动图）

*本文不对任何相关区块链构成投资建议*

<a name="footnote1"></a>[1] 


Cyberspace: First Steps, Ed. Michael Benedikt. MIT Press, 1993, p.250.

https://ethereum.org/en/nft/

https://rhizome.org/editorial/2021/mar/12/before-the-boom/

https://rhizome.org/editorial/2021/mar/03/another-new-world/

https://www.readblocks.com/zh-tw/archives/99145

>"It's already beginning to happen where architecture, fashion and the body sort of becomes one,"said Fredrik Hellberg of architecture studio Space Popular.

>He added that virtual worlds will allow people to "control or actually extend your body into architecture".
https://www.dezeen.com/2021/04/09/metaverse-meet-up-dezeen-club/

https://evan-helda.medium.com/the-nft-endgame-7f89cfa86fa4


文中的部分观点来自作者所参与的[奇忽局](http://qihuju.wiki/)的线上讨论。

CC-4-Attribute

mingxuan.fun