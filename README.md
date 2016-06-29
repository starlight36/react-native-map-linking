# React Native Map Linking

这是一个利用React Native的Linking组件唤起系统内建地图的轮子, 目前支持:

* Android平台
    * 高德地图
    * 百度地图
* iOS平台
    * 高德地图
    * 百度地图
    * 苹果地图

## 快速开始

使用npm安装

```
npm install react-native-map-linking --save
```

引用组件, 开始使用: 

```js
import MapLinking from 'react-native-map-linking';

// 唤起地图, 并在地图上标记一个点
MapLinking.markLocation({lat: 40, lng: 118}, 'aaa', 'bbb');

// 唤起地图, 并让地图规划从开始到结束的路线
MapLinking.planRoute({lat:40, lng: 118, title: '起点'}, {lat:40, lng: 119, title: '终点'}, 'drive');

// 唤起地图, 并发起导航
MapLinking.navigate({lat:40, lng: 118, title: '终点'});
```

注意: iOS系统需要配置Schema支持, 见下面的说明。

## API

### markLocation(location, title, content)

在地图上标记一个点的位置。

* location 位置坐标, 是一个对象, 包括:
    * lat - 经度
    * lng - 纬度
    * type - 坐标类型, 支持`gcj02`(国测局坐标), `wgs84`(GPS坐标)
* title 地点标记名称
* content 地点标记说明

### planRoute(srcLocation, distLocation, mode)

规划两点之间的线路。

* srcLocation 起始位置坐标, 是一个对象, 包括:
    * lat - 经度
    * lng - 纬度
    * title - 起始位置名称
* distLocation 结束位置坐标, 是一个对象, 包括:
    * lat - 经度
    * lng - 纬度
    * type - 坐标类型, 支持`gcj02`(国测局坐标), `wgs84`(GPS坐标)
    * title - 结束位置名称
* mode 路线模式
    * drive - 驾车
    * bus - 公交
    * walk - 步行
    
### navigate(distLocation)

启动当前位置到目标位置的导航。

* distLocation 结束位置坐标, 是一个对象, 包括:
    * lat - 经度
    * lng - 纬度
    * type - 坐标类型, 支持`gcj02`(国测局坐标), `wgs84`(GPS坐标)
    * title - 结束位置名称

## 一些问题

* 如果系统内没有可用的地图, 组件会推荐下载高德地图、百度地图。
* 使用iOS内建地图时, 地图标记和导航功能可能不精确, 推荐使用高德地图。

## iOS配置Schema支持

iOS系统下需要在App的`info.plist`中配置Schema支持才能唤起地图:

```
<key>LSApplicationQueriesSchemes</key>
<array>
    <string>baidumap</string>
    <string>iosamap</string>
</array>
```

## 问题反馈

新浪微博: [@starlight36](http://weibo.com/starlight36)
问题系统: [问题系统](https://github.com/starlight36/react-native-map-linking/issues)

## 协议

MIT
