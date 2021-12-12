import eJm from './../assets/logo_jm.png';
import eLt from './../assets/logo_lt.png';
import eZh from './../assets/logo_zh.png';
import dHome from './../assets/d_home.svg';
import dSkills from './../assets/d_skills.svg';
import dExp from './../assets/d_exp.svg';
import dWorks from './../assets/d_works.svg';
import dContact from './../assets/d_contact.svg';
import sGithub from './../assets/s_github.svg';
import sSf from './../assets/s_sf.svg';
import sBlog from './../assets/s_blog.svg';
import sZh from './../assets/s_zh.svg';
import sJj from './../assets/s_Jj.svg';
import wJm from './../assets/w_jm.jpg';
import wLs from './../assets/w_ls.jpg';

export default {
  cn: {
    header: {
      langList: ['中', '英'],
      titleList: [
        {
          svg: dHome,
          title: '首页'
        },
        {
          svg: dSkills,
          title: '能力'
        },
        {
          svg: dExp,
          title: '经历'
        },
        {
          svg: dWorks,
          title: '作品集'
        },
        {
          svg: dContact,
          title: '联系我'
        }
      ]
    },
    footer: ['Released under the MIT License', 'All Rights Reserved ', `Copyright © 2014-${new Date().getFullYear()} AmbroseRen`],
    overview: {
      infoList: ['27岁', '本科', '杭州', '求职中'],
      quote: '生活是一种绵延不绝的渴望，渴望不断上升，变得更伟大而高贵。',
      desList: ['我叫任思(AmbroseRen)，前(后Java)端工程师', '喜欢项目构建和CG图形', 'ambroserencn@gmail.com']
    },
    skill: {
      outCircleList: [
        {
          bg: {
            backgroundColor: 'rgba(121,100,102,0.8)'
          },
          name: 'vue'
        },
        {
          bg: {
            backgroundColor: 'rgba(49,65,82,0.8)'
          },
          name: 'react'
        },
        {
          bg: {
            backgroundColor: 'rgba(76,157,160,0.8)'
          },
          name: 'angular'
        },
        {
          bg: {
            backgroundColor: 'rgba(66,66,66,0.8)'
          },
          name: 'nodejs'
        },
        {
          bg: {
            backgroundColor: 'rgba(193,131,106,0.8)'
          },
          name: '小程序'
        },
        {
          bg: {
            backgroundColor: 'rgba(117,148,179,0.8)'
          },
          name: '快应用'
        },
        {
          bg: {
            backgroundColor: 'rgba(71,83,94,0.8)'
          },
          name: 'ssr'
        },
        {
          bg: {
            backgroundColor: 'rgba(147,147,189,0.8)'
          },
          name: 'ts'
        }
      ],
      innerCircleList: [
        {
          bg: {
            backgroundColor: 'rgba(179,164,140,0.8)'
          },
          name: '构建'
        },
        {
          bg: {
            backgroundColor: 'rgba(171,209,220,0.8)'
          },
          name: '优化'
        },
        {
          bg: {
            backgroundColor: 'rgba(238,215,163,0.8)'
          },
          name: '测试'
        },
        {
          bg: {
            backgroundColor: 'rgba(207,184,178,0.8)'
          },
          name: '部署'
        }
      ],
      desList: [
        '三年Java后端开发经验，一年前端开发经验',
        '实际主要参与开发平台项目侧重为建筑运维、数据分析平台，主要负责后端技术开发',
        '前端技术栈均有尝试，擅长组件开发及构建优化',
        '自我驱动力强，沉淀有ID为"AmbroseRen"的全网技术博客、文章等'
      ]
    },
    exp: {
      expList: [
        {
          title: '职业规划中',
          time: '至今',
          post: 'null',
          img: {
            backgroundImage: `url(${eJm})`
          },
          contentList: ['null', 'null', 'null', 'null']
        },
        {
          title: '大漠数据',
          time: '2020年~2021年',
          post: 'Java后端研发工程师',
          img: {
            backgroundImage: `url(${eLt})`
          },
          contentList: ['负责系统数据分析模块的数据加载、逻辑功能开发和数据库数据设计', '使用技术：基于Spring-Cloud+Nacos+Redis框架。数据库为MySQL', '管理工具：使用git管理代码。微服务架构的 若依 框架开发，前端可视化框架为Vue', '高度组件化、模块化思维，拥有平台调试能力']
        },
        {
          title: '百川建科（天津）',
          time: '2018年~2019年',
          post: '建筑运维+企业模型管理平台开发',
          img: {
            backgroundImage: `url(${eZh})`
          },
          contentList: ['负责企业软件平台搭建', '负责网站后台管理页面开发', '负责内部WebGL模型在web端渲染和管理协同化', '同期工作之余提升自己技术选型和网站架构能力']
        }
      ]
    },
    works: {
      worksList: [
        {
          title: '聚美优品+ 小程序',
          des: '聚美优品+小程序是聚美集团电商业务在微信小程序上的实现，包括普通商品，拼团商品的销售流程及购物流程、用户中心等模块。',
          mini: wJm,
          style: {}
        },
        {
          title: '鹿尚生活 小程序',
          des: '鹿尚生活小程序是聚美集团专柜购业务在微信小程序上的实现，包括专柜购区域选择及提货方式等全套销售流程及购物流程、用户中心等模块。',
          mini: wLs,
          style: {}
        },
        {
          title: '聚美优品 快应用',
          des: '聚美优品快应用是聚美集团电商业务在安卓快应用上的实现，基于手机硬件平台的新型应用形态，为销售途径提供新的渠道。',
          url: 'http://hapjs.org/app/com.jm.quickapp',
          style: {}
        },
        {
          title: '聚美优品 H5',
          des: '聚美集团电商业务移动端的核心承载者，包括前三页，购物流程，用户中心等，通过jsbridge部分页面也在app内广泛应用。',
          url: 'https://h5.jumei.com',
          style: {}
        },
        {
          title: '聚美优品 增长活动',
          des: '聚美集团电商业务的新增长投放项目，电商主要的推广活动承载页面，实现采用多页面架构，支持打包单一活动的工作模式。',
          url: 'http://r.jumei.com',
          style: {}
        },
        {
          title: '街电crm后台管理系统',
          des: 'PC端街电crm后台商户管理系统，包括各种商户录入，统计，维护等若干功能。',
          url: '',
          style: {}
        },
        {
          title: '移动校园APP',
          des:
            '一站式、全生命周期的校园官方移动服务平台，涵盖PC、安卓、IOS、微信平台，上线学校包括中央财经大学，北京交通大学，中国戏曲学院，辽宁大学，西南财经大学等等，下载量数十万，深受学生老师喜爱。',
          url: 'http://app.cufe.edu.cn/',
          style: {}
        },
        {
          title: '移动校园管理系统',
          des: '针对校园APP的后台管理系统，包括人员架构，信息统计，权限设置，H5生产机，数据交换平台，各个模块的数据管理，反馈设置等等，为高校提供基于互联网运营的移动校园整体解决方案。',
          url: '',
          style: {}
        },
        {
          title: 'web前端工程师简历（2015年版）',
          des: '本简历初版，上线一个月后，百度关键词“web前端工程师简历”排名前三，点击量数百万，深受广大前端初学者的好评及模仿，至今搜该关键词百度前10页都处处能见该简历的仿版。',
          url: 'http://www.flqin.com/2015/',
          style: {}
        },
        {
          title: '@korey/MVVM',
          des: '一个简易的MVVM框架，实现了data-binding 和 view-refresh的功能，目前仅服务于本简历项目，仍在不断优化更新，欢迎学习交流',
          url: 'https://github.com/zhaoky/mvvm',
          style: {}
        },
        {
          title: '@korey/Fullpage',
          des: '一个简易的Fullpage框架，实现了上拉下拉，滑轮滚动，锚点直达的全屏翻页功能，目前仅服务于本简历项目，仍在不断优化更新，欢迎学习交流',
          url: 'https://github.com/zhaoky/fullpage',
          style: {}
        }
      ],
      viewMore: 'github上面查看更多'
    },
    contact: {
      title: '联系我',
      desList1: ['灵感', '代码', '梦想', '未来'],
      desList2: ['注重效率，偏爱敏捷开发', '喜欢尝试，期待新鲜事物', '前端即兴趣，兴趣即未来', '行路有良友，便是捷径', '带上我吧，一起看到更大的世界'],
      download: '下载简历',
      fileList: [
        {
          title: 'HTML版',
          url: 'www.baidu.com'
        },
        {
          title: 'PDF版',
          url: 'www.baidu.com'
        }
      ],
      typeList: [
        {
          icon: sGithub,
          url: 'https://github.com/AmbroseRen'
        },
        {
          icon: sSf,
          url: 'https://segmentfault.com/u/ambroseren'
        },
        {
          icon: sBlog,
          url: 'https://ambroseren.github.io'
        },
        {
          icon: sZh,
          url: 'https://www.zhihu.com/people/RS101202303'
        },
        {
          icon: sJj,
          url: 'https://juejin.cn/user/1653270128624423'
        }
      ]
    }
  },
  en: {
    header: {
      langList: ['CN', 'EN'],
      titleList: [
        {
          svg: dHome,
          title: 'home'
        },
        {
          svg: dSkills,
          title: 'skills'
        },
        {
          svg: dExp,
          title: 'exp'
        },
        {
          svg: dWorks,
          title: 'works'
        },
        {
          svg: dContact,
          title: 'contact'
        }
      ]
    },
    footer: ['Released under the MIT License', 'All Rights Reserved ', `Copyright © 2021-${new Date().getFullYear()} AmbroseRen`],
    overview: {
      infoList: ['27years', 'B.S.', 'HangZhou', 'On Job'],
      quote: 'Life is a kind of endless yearning, eager to continue to rise, become more great and noble.',
      desList: ['I am AmbroseRen, Java&Web engineer', 'DaMo Data（HangZhou）Engineer', 'ambroserencn@gmail.com']
    },
    skill: {
      outCircleList: [
        {
          bg: {
            backgroundColor: 'rgba(121,100,102,0.8)'
          },
          name: 'vue'
        },
        {
          bg: {
            backgroundColor: 'rgba(49,65,82,0.8)'
          },
          name: 'react'
        },
        {
          bg: {
            backgroundColor: 'rgba(76,157,160,0.8)'
          },
          name: 'angular'
        },
        {
          bg: {
            backgroundColor: 'rgba(66,66,66,0.8)'
          },
          name: 'nodejs'
        },
        {
          bg: {
            backgroundColor: 'rgba(193,131,106,0.8)'
          },
          name: 'miniP'
        },
        {
          bg: {
            backgroundColor: 'rgba(117,148,179,0.8)'
          },
          name: 'quickapp'
        },
        {
          bg: {
            backgroundColor: 'rgba(71,83,94,0.8)'
          },
          name: 'ssr'
        },
        {
          bg: {
            backgroundColor: 'rgba(147,147,189,0.8)'
          },
          name: 'ts'
        }
      ],
      innerCircleList: [
        {
          bg: {
            backgroundColor: 'rgba(179,164,140,0.8)'
          },
          name: 'build'
        },
        {
          bg: {
            backgroundColor: 'rgba(171,209,220,0.8)'
          },
          name: 'opt'
        },
        {
          bg: {
            backgroundColor: 'rgba(238,215,163,0.8)'
          },
          name: 'test'
        },
        {
          bg: {
            backgroundColor: 'rgba(207,184,178,0.8)'
          },
          name: 'deploy'
        }
      ],
      desList: [
        '4 years development experience,1 years management experience',
        'Actually lead the development of many platform projects (APP, PC, H5, miniprogram, quickapp, etc.), formulated and standardized the team workflow',
        'Try different technology stacks, Good at component development and construction optimization',
        'Self-driven, Author of webpack, vue and other source code analysis series articles'
      ]
    },
    exp: {
      expList: [
        {
          title: 'Jumei(chengdu)',
          time: '2017.04-now',
          post: 'Senior FE engineer/leader',
          img: {
            backgroundImage: `url(${eJm})`
          },
          contentList: [
            'Responsible for daily work of jumei e-commerce and growth FE team',
            'Participated in CRM development of jiedian, C/S development of unmanned shelves of meidian, etc',
            'Lead the development of jumei and other miniprogram/quickapp and growth',
            'Optimize and reconstruct some basic libraries of jumei, such as jumei-sdk'
          ]
        },
        {
          title: 'LANTU TECH',
          time: '2015.06-2017.04',
          post: 'Web front-end R & D engineers',
          img: {
            backgroundImage: `url(${eLt})`
          },
          contentList: [
            'Responsible for H5 hybrid development related to university campus mobile APP',
            'Responsible for the rapid construction of high-quality APP / PC / WeChat page',
            'According to business needs to design the appropriate project',
            'Highly component, modular thinking, with the platform debugging capabilities'
          ]
        },
        {
          title: 'Zhuohuang Management Co., Ltd',
          time: '2014.08-2015.06',
          post: 'Web development and SEO',
          img: {
            backgroundImage: `url(${eZh})`
          },
          contentList: [
            'Responsible for enterprise station static page development and simple interaction',
            'Responsible for website background maintenance',
            'Responsible for Baidu bid operation and seo optimization',
            'Outside of work to enhance their own javascript coding ability'
          ]
        }
      ]
    },
    works: {
      worksList: [
        {
          title: 'Jumei+ MiniProgram',
          des:
            'Jumei+ MiniProgram is the realization of Jumei e-commerce business on WeChat small program, including general merchandise, sales process of shopping carts, shopping process, user center and other modules.',
          mini: wJm,
          style: {}
        },
        {
          title: 'lushangLife MiniProgram',
          des:
            'lushangLife MiniProgram is the realization of Jumei counter purchase business on WeChat small program, including a full set of sales processes such as counter purchase area selection and delivery methods, as well as shopping process and user center modules.',
          mini: wLs,
          style: {}
        },
        {
          title: 'Jumei quickapp',
          des:
            'Jumei quickapp is the realization of Jumei e-commerce business in Android quickapp. Based on the new application form of mobile phone hardware platform, it provides a new channel for sales channels.',
          url: 'http://hapjs.org/app/com.jm.quickapp',
          style: {}
        },
        {
          title: 'Jumei H5',
          des:
            'The core carrier of the mobile terminal of Jumei e-commerce business, including the three pages, shopping process, user center, etc., is also widely used in the app through the jsbridge part of the page.',
          url: 'https://h5.jumei.com',
          style: {}
        },
        {
          title: 'Jumei growth',
          des:
            'The new growth project of Jumei e-commerce business, the main promotion activities of e-commerce hosted the page, realized the adoption of multi-page architecture, and supported the work mode of packaging a single activity.',
          url: 'http://r.jumei.com',
          style: {}
        },
        {
          title: 'jiedian CRM',
          des: 'The PC-side street power crm back-end merchant management system includes several functions such as various merchant entry, statistics, and maintenance.',
          url: '',
          style: {}
        },
        {
          title: 'Campus APP',
          des:
            'One-stop, the whole life cycle of the campus official mobile service platform, covering PC, Andrews, IOS, WeChat platform, on-line schools, including CUFE, BJTU, NACTA, LNU, SWUFE and so on, download Hundreds of thousands, loved by the students teacher.',
          url: 'http://app.cufe.edu.cn/',
          style: {}
        },
        {
          title: 'campus management system',
          des:
            'According to the background management system of campus APP, including the personnel structure, information statistics, H5 production machine, data exchange platform, data management of each module, feedback settings, etc., for the university to provide Internet-based mobile campus overall solution.',
          url: '',
          style: {}
        },
        {
          title: 'Web front engineer resumes (2015)',
          des:
            'The first edition of this resume, on the line a month later, Baidu keyword `web front engineer resumes` ranked the top three, hundreds of millions of traffic, by the majority of front-end beginners praise and imitation, so far the search Baidu 10 pages are everywhere See the copy of the resume.',
          url: 'http://www.flqin.com/2015/',
          style: {}
        },
        {
          title: '@korey/MVVM',
          des:
            'A simple MVVM framework that implements the functions of data-binding and view-refresh. Currently, it only serves this resume project. It is still optimized and updated. Welcome to learn communication.',
          url: 'https://github.com/zhaoky/mvvm',
          style: {}
        },
        {
          title: '@korey/Fullpage',
          des:
            'A simple Fullpage framework that implements full-screen page-turning with pull-up, scrolling, and anchor-pointing. Currently only serves this resume project, it is still optimized and updated. Welcome to learn communication.',
          url: 'https://github.com/zhaoky/fullpage',
          style: {}
        }
      ],
      viewMore: 'Go to github see more'
    },
    contact: {
      title: 'Contact Me',
      desList1: ['INSPIRATION', 'CODE', 'DREAM', 'FUTURE'],
      desList2: [
        'Focus on efficiency, preference for agile development',
        'Like to try, look forward to something new',
        'Front is interested, interest is the future',
        'Line road friends, is a shortcut',
        'With me, see the bigger world together'
      ],
      download: 'Download Resume',
      fileList: [
        {
          title: 'HTML',
          url: 'www.baidu.com'
        },
        {
          title: 'PDF',
          url: 'www.baidu.com'
        }
      ],
      typeList: [
        {
          icon: sGithub,
          url: 'https://github.com/AmbroseRen'
        },
        {
          icon: sSf,
          url: 'https://segmentfault.com/u/ambroseren'
        },
        {
          icon: sBlog,
          url: 'https://ambroseren.github.io'
        },
        {
          icon: sZh,
          url: 'https://www.zhihu.com/people/RS101202303'
        },
        {
          icon: sJj,
          url: 'https://juejin.cn/user/1653270128624423'
        }
      ]
    }
  }
};
