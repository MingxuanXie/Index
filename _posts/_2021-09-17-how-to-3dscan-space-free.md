---
layout: post
title: "如何使用免费工具三维扫描空间"
categories: blog
---  
## 扫描前准备工作
1. 尽量让被扫描的室内空间足够明亮，光照均匀，没有强阴影；晚上扫描需要尽可能多的灯照，白天扫描需避开太阳光直射进房间且打开室内灯补光。
2. 确保扫描途中光照没有明显变化，比如不要在傍晚扫描。
3. 确保扫描途中没有别的物体在移动（比如人、宠物，人和宠物需要静止状态单独扫描）。
4. 扫描镜子与玻璃的效果不好，建议移走或遮挡。
  
## 方法一：使用带LiDAR的iOS设备
支持以下设备：  
iPad Pro 2019年之后所有型号
iPhone 12及13的Pro/Pro Max型号
![iOS LiDAR](https://photos5.appleinsider.com/gallery/38217-72464-iPhone-12-Pro-LiDAR-xl.jpg)

1. 从App Store下载免费LiDAR扫描应用[3Dscanner App](https://www.3dscannerapp.com/)。
2. 注意LiDAR镜头及相机镜头是否干净。
3. 启动3Dscanner App，右下角选择`HIGH RES`。
4. 弹出按钮中从左往右依次按以下推荐参数设置（以扫描3米左右层高的室内空间为例）。 
    
| CONFIDENCE | RANGE | MASKING | RESOLUTION |
| ---------- | ----- | ------- | ---------- |
| High       | 2.5m  | None    | 10mm       |

5. 正对着一面墙，点击红色圆形按钮开始扫描。
6. 按照App视觉提示**缓速**走动及移动设备，将整个空间扫描覆盖，家具需要各个角度都有照射到。注意移动速度不能太快否则贴图会模糊不清。
7. 确保所有角度都扫描到后，再次点击红色圆形按钮结束扫描。
8. 在弹出`Process Scan`菜单中，选择`HD`，然后点击`Start`按钮，等待几十秒到几分钟即可完成贴图。
9. *（可选操作）点击`More`按钮，点击`Crop & Edit Scan`，点击左下角工具按钮的`Crop with Box`将扫描模型中的不需要部分删掉。
10.  *（可选操作）点击`More`按钮，点击`Rename Scan`更改名字为空间名字。

**最后点击`Share`按钮，选择`GLTF`，然后通过微信将模型文件发送给我即可。**

## 方法二：Photogrammetry照片矩阵测量及模型生成
设备需求：  
任何能拍照的设备，但推荐使用有手动模式的专业相机（单反，无反相机），优先使用带稳定功能的相机或镜头。

1. 选择等效全画幅24mm～35mm焦段的镜头，即广角但畸变小的镜头。
2. 在满足曝光充足的条件下，全画幅相机光圈尽可能控制在f8左右，C画幅控制在尽可能f5.6左右。即尽可能减少焦外模糊。
3. 但同时需要保证曝光时间不宜过长以避免画面模糊，通过相机稳定功能及设置较高ISO确保画面不模糊。
4. 确定好光圈、曝光时间、ISO后切换到手动模式，**确保这三个数值拍摄过程中不改变，即曝光度整体不变**（对焦可为自动模式）。
5. 同方法一，从正对一面墙开始连续拍照，确保两张照片之间有50%以上的画面内容重叠。一边在空间内行走一边拍摄，确保空间中的每个角落，家具的每一面都有拍摄到。
6. 对于一些细节可以距离稍近拍摄，同时也要有不同角度的整个空间照片来确保整体定位准确。
7. 通常一个房间照片数量在70～200张左右，照片越多越好但同时后处理时间也会变长。  
  
**最后将jpg格式照片打包发我即可，我会使用开源软件[AliceVision Meshroom](https://alicevision.org/#meshroom)将照片数据生成为三维模型。**  
（由于Meshroom只能在有Nvidia显卡的Windows电脑上运行，目前我们空间数量还不多，我这边就直接操作了。以后空间变多我再教新的小伙伴一起做这件事，感兴趣的也可以自行在它官网里学习如何是用）。

本文会持续更新。

---

<!-- <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />本<span xmlns:dct="http://purl.org/dc/terms/" href="http://purl.org/dc/dcmitype/Text" rel="dct:type">文</span>由<a xmlns:cc="http://creativecommons.org/ns#" href="https://mingxuan.fun/" property="cc:attributionName" rel="cc:attributionURL">Mingxuan Xie</a>采用<a rel="license" href="http://creativecommons.org/licenses/by/4.0/">知识共享署名 4.0 国际许可协议</a>进行许可，转载需署名原作者并包含原文链接。 -->