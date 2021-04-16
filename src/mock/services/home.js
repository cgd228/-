import Mock from 'mockjs'
import { builder } from '../utils'
import daily01 from '../../assets/images/daily01.png'
import daily02 from '../../assets/images/daily02.png'

import pic01 from '../../assets/images/pic01.png'
import pic02 from '../../assets/images/pic02.png'
import pic03 from '../../assets/images/pic03.png'
import pic04 from '../../assets/images/pic04.png'

import mainPng from '../../assets/images/welcome.png'
import dailyPng from '../../assets/images/daily.jpg'

const homeModule = () => {
  const data = [
    {
      moduleName: '主页',
      type: 'main',
      img: mainPng,
      data: []
    },
    {
      moduleName: '日志',
      type: 'daily',
      img: dailyPng,
      data: {
        record: [
          {
            title: '请好好珍惜“路痴”朋友',
            time: '2020-07-27',
            img: daily01,
            content:
              '小时候啊的撒娇玩耍胡闹初费尽心思得到的东西，值一直认为，老天爷是不公平的，可是，完全忘了我身旁美好的一切!'
          },
          {
            title: '请好好珍惜“路痴”朋友',
            time: '2020-07-27',
            img: daily02,
            content:
              '小时候啊，总盼望着长大，认为长大好啊，长大了，可以买好多好多的衣服 吃的 玩的，而且还没有人管自己，多好啊!长大后啊，总是盼望着童年，原来长大难啊，小时候，可以无忧无虑的撒娇 玩耍 胡闹，而且也没有人骂自己 ，多好啊!小时候盼望着长大，长大后回忆着童年。人就是这样，得不到的东西，永远都是较好的，可是一旦得到它，便会突然间觉得，当初费尽心思得到的东西，值么?原来，我是自私的，我得不到的东西，总是不愿意让别人得到，因为，我费尽千辛万苦的没有得到的东西，他们凭什么就可以得到?一直认为，老天爷是不公平的，可是，完全忘了我身旁美好的一切!'
          }
        ],
        list: [
          {
            title: '请好好珍惜“路痴”朋友',
            time: '2020-07-27',
            content:
              '小时候啊，总盼望着长大，认为长大好啊，长大了，可以买好多好多的衣服 吃的 玩的，而且还没有人管自己，多好啊!长大后啊，总是盼望着童年，原来长大难啊，小时候，可以无忧无虑的撒娇 玩耍 胡闹，而且也没有人骂自己 ，多好啊!小时候盼望着长大，长大后回忆着童年。人就是这样，得不到的东西，永远都是较好的，可是一旦得到它，便会突然间觉得，当初费尽心思得到的东西，值么?原来，我是自私的，我得不到的东西，总是不愿意让别人得到，因为，我费尽千辛万苦的没有得到的东西，他们凭什么就可以得到?一直认为，老天爷是不公平的，可是，完全忘了我身旁美好的一切!'
          },
          {
            title: '请好好珍惜“路痴”朋友',
            time: '2020-07-27',
            content:
              '小时候啊，总盼望着长大，认为长大好啊，长大了，可以买好多好多的衣服 吃的 玩的，而且还没有人管自己，多好啊!长大后啊，总是盼望着童年，原来长大难啊，小时候，可以无忧无虑的撒娇 玩耍 胡闹，而且也没有人骂自己 ，多好啊!小时候盼望着长大，长大后回忆着童年。人就是这样，得不到的东西，永远都是较好的，可是一旦得到它，便会突然间觉得，当初费尽心思得到的东西，值么?原来，我是自私的，我得不到的东西，总是不愿意让别人得到，因为，我费尽千辛万苦的没有得到的东西，他们凭什么就可以得到?一直认为，老天爷是不公平的，可是，完全忘了我身旁美好的一切!'
          },
          {
            title: '请好好珍惜“路痴”朋友',
            time: '2020-07-27',
            content:
              '小时候啊，总盼望着长大，认为长大好啊，长大了，可以买好多好多的衣服 吃的 玩的，而且还没有人管自己，多好啊!长大后啊，总是盼望着童年，原来长大难啊，小时候，可以无忧无虑的撒娇 玩耍 胡闹，而且也没有人骂自己 ，多好啊!小时候盼望着长大，长大后回忆着童年。人就是这样，得不到的东西，永远都是较好的，可是一旦得到它，便会突然间觉得，当初费尽心思得到的东西，值么?原来，我是自私的，我得不到的东西，总是不愿意让别人得到，因为，我费尽千辛万苦的没有得到的东西，他们凭什么就可以得到?一直认为，老天爷是不公平的，可是，完全忘了我身旁美好的一切!'
          }
        ]
      }
    },
    {
      moduleName: '相册',
      type: 'picture',
      data: [
        {
          img: pic01,
          title: '个人特写'
        },
        {
          img: pic02,
          title: '森林公园'
        },
        {
          img: pic03,
          title: '日本-《茶道》'
        },
        {
          img: pic04,
          title: '动物世界'
        }
      ]
    },
    {
      moduleName: '个人档',
      type: 'person',
      data: []
    },
    {
      moduleName: '分享',
      type: 'share',
      data: []
    }
  ]

  return builder(data)
}

Mock.mock(RegExp('homeInfo'), 'post', homeModule)
