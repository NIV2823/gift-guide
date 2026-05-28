export const recipients = [
  { label: '老师', value: 'teacher' },
  { label: '同学', value: 'classmate' },
  { label: '家人', value: 'family' },
  { label: '朋友', value: 'friend' },
  { label: '同事', value: 'colleague' },
  { label: '长辈', value: 'elder' },
  { label: '恋人', value: 'lover' },
  { label: '领导', value: 'boss' },
  { label: '客户', value: 'client' },
  { label: '小孩', value: 'child' }
]

export const budgets = [
  { label: '50元以下', value: 'under_50' },
  { label: '50-100元', value: '50_100' },
  { label: '100-200元', value: '100_200' },
  { label: '200-500元', value: '200_500' },
  { label: '500-1000元', value: '500_1000' },
  { label: '1000-3000元', value: '1000_3000' },
  { label: '3000-5000元', value: '3000_5000' },
  { label: '5000-10000元', value: '5000_10000' },
  { label: '10000元以上', value: 'above_10000' }
]

export const categories = [
  {
    label: '日用百货',
    value: 'daily',
    children: [
      { label: '生活用品', value: 'living' },
      { label: '洗漱护理', value: 'care' },
      { label: '桌面好物', value: 'desktop' },
      { label: '便携用品', value: 'portable' }
    ]
  },
  {
    label: '文具文创',
    value: 'stationery',
    children: [
      { label: '书写工具', value: 'writing' },
      { label: '手账素材', value: 'journal' },
      { label: '文创周边', value: 'creative' },
      { label: '精致文具', value: 'premium_stationery' }
    ]
  },
  {
    label: '食品饮品',
    value: 'food',
    children: [
      { label: '零食礼盒', value: 'snack' },
      { label: '咖啡茶叶', value: 'drink' },
      { label: '健康滋补', value: 'health_food' },
      { label: '甜品糕点', value: 'dessert' }
    ]
  },
  {
    label: '家居生活',
    value: 'home',
    children: [
      { label: '家居装饰', value: 'decoration' },
      { label: '厨房用品', value: 'kitchen' },
      { label: '香薰氛围', value: 'aroma' },
      { label: '家纺布艺', value: 'textile' }
    ]
  },
  {
    label: '时尚饰品',
    value: 'fashion',
    children: [
      { label: '首饰', value: 'jewelry' },
      { label: '包包', value: 'bag' },
      { label: '围巾帽子', value: 'scarf_hat' },
      { label: '配饰', value: 'accessory' }
    ]
  },
  {
    label: '数码电子',
    value: 'digital',
    children: [
      { label: '小家电', value: 'appliance' },
      { label: '耳机音响', value: 'audio' },
      { label: '数码配件', value: 'gadget' },
      { label: '智能设备', value: 'smart' }
    ]
  },
  {
    label: '轻奢礼品',
    value: 'luxury',
    children: [
      { label: '品牌礼品', value: 'brand' },
      { label: '精致摆件', value: 'ornament' },
      { label: '高端礼盒', value: 'premium_box' },
      { label: '收藏类', value: 'collectible' }
    ]
  }
]

export const giftScenes = [
  { label: '日常寒暄', value: 'daily_greeting' },
  { label: '节日送礼', value: 'festival' },
  { label: '生日祝福', value: 'birthday' },
  { label: '感谢答谢', value: 'thanks' },
  { label: '探病慰问', value: 'sick' },
  { label: '道歉问候', value: 'apology' },
  { label: '升学祝贺', value: 'graduation' },
  { label: '乔迁新居', value: 'housewarming' }
]

export const gifts = [
  // ==================== 日用百货 ====================
  { id: 1, name: '精美保温杯', priceRange: '100_200', category: 'daily', subcategory: 'living', recipients: ['teacher', 'elder', 'friend', 'colleague', 'boss'], scenes: ['daily_greeting', 'festival', 'thanks'], reason: '实用又贴心，日常办公必备，品质保温杯陪伴每一天', sceneDesc: '日常关怀、节日问候、感谢心意' },
  { id: 2, name: '品牌毛巾礼盒套装', priceRange: '50_100', category: 'daily', subcategory: 'living', recipients: ['teacher', 'friend', 'family', 'elder'], scenes: ['daily_greeting', 'housewarming', 'thanks'], reason: '柔软亲肤，品牌品质，送毛巾寓意"温暖相伴"', sceneDesc: '乔迁新居、日常问候、节日小礼' },
  { id: 3, name: '高档商务雨伞', priceRange: '200_500', category: 'daily', subcategory: 'living', recipients: ['boss', 'client', 'colleague', 'teacher'], scenes: ['daily_greeting', 'thanks'], reason: '商务风范，晴雨两用，实用体面兼具', sceneDesc: '商务往来、日常关怀、答谢赠礼' },
  { id: 4, name: '品牌护手霜礼盒', priceRange: '100_200', category: 'daily', subcategory: 'care', recipients: ['teacher', 'lover', 'friend', 'elder', 'colleague'], scenes: ['daily_greeting', 'festival', 'thanks'], reason: '滋润呵护双手，多种香型可选，礼盒包装精致体面', sceneDesc: '冬日关怀、节日送礼、感谢问候' },
  { id: 5, name: '香氛沐浴礼盒', priceRange: '200_500', category: 'daily', subcategory: 'care', recipients: ['lover', 'friend', 'family'], scenes: ['birthday', 'festival', 'daily_greeting'], reason: '高级香氛沐浴体验，让沐浴变成享受，包装精美上档次', sceneDesc: '生日惊喜、节日礼物、日常浪漫' },
  { id: 6, name: '男士护肤套装', priceRange: '200_500', category: 'daily', subcategory: 'care', recipients: ['lover', 'friend', 'boss', 'colleague'], scenes: ['birthday', 'festival', 'daily_greeting'], reason: '男士专属护肤，控油清洁保湿一套搞定，实用又体面', sceneDesc: '送男友/老公、送男性朋友、同事关怀' },
  { id: 7, name: '桌面迷你加湿器', priceRange: '100_200', category: 'daily', subcategory: 'desktop', recipients: ['teacher', 'friend', 'colleague', 'classmate'], scenes: ['daily_greeting', 'festival'], reason: '静音加湿，小巧美观，改善办公环境的好帮手', sceneDesc: '日常关怀、办公室送礼、节日小礼' },
  { id: 8, name: '创意桌面收纳盒套装', priceRange: '50_100', category: 'daily', subcategory: 'desktop', recipients: ['classmate', 'friend', 'colleague', 'child'], scenes: ['daily_greeting', 'graduation'], reason: '多功能分区收纳，让桌面整洁有序，颜值与实用并存', sceneDesc: '升学祝贺、开学礼物、日常关怀' },
  { id: 9, name: '便携洗漱旅行套装', priceRange: '100_200', category: 'daily', subcategory: 'portable', recipients: ['friend', 'colleague', 'classmate', 'family'], scenes: ['daily_greeting', 'festival', 'graduation'], reason: '出差旅行必备，分装瓶整齐收纳，便携实用', sceneDesc: '出差礼物、开学礼物、日常出行关怀' },

  // ==================== 文具文创 ====================
  { id: 10, name: '品牌钢笔礼盒', priceRange: '200_500', category: 'stationery', subcategory: 'writing', recipients: ['teacher', 'boss', 'client', 'colleague'], scenes: ['thanks', 'festival', 'daily_greeting'], reason: '经典书写体验，礼盒包装尊贵大气，适合商务场景', sceneDesc: '教师节、商务答谢、节日送礼' },
  { id: 11, name: '高端签字笔套装', priceRange: '100_200', category: 'stationery', subcategory: 'writing', recipients: ['boss', 'client', 'colleague', 'teacher'], scenes: ['thanks', 'daily_greeting'], reason: '精致签字笔，书写流畅，适合商务签字场景', sceneDesc: '商务赠礼、答谢心意、日常办公' },
  { id: 12, name: '手账本素材套装', priceRange: '100_200', category: 'stationery', subcategory: 'journal', recipients: ['classmate', 'friend', 'lover'], scenes: ['birthday', 'festival', 'daily_greeting'], reason: '精美手账+多款胶带贴纸，记录生活每一刻美好', sceneDesc: '生日礼物、手工爱好者、节日心意' },
  { id: 13, name: '和纸胶带套装', priceRange: '50_100', category: 'stationery', subcategory: 'journal', recipients: ['classmate', 'friend', 'child'], scenes: ['daily_greeting', 'birthday'], reason: '多款精美图案，日系风格，手账装饰必备', sceneDesc: '手工爱好者、学生礼物、日常小惊喜' },
  { id: 14, name: '博物馆文创礼盒', priceRange: '200_500', category: 'stationery', subcategory: 'creative', recipients: ['teacher', 'friend', 'family', 'client'], scenes: ['festival', 'thanks', 'daily_greeting'], reason: '文化底蕴与设计感兼具，博物馆联名，送礼有品位', sceneDesc: '节日送礼、文化人士、有品位的礼物' },
  { id: 15, name: '国潮书签礼盒套装', priceRange: '50_100', category: 'stationery', subcategory: 'creative', recipients: ['classmate', 'teacher', 'friend', 'child'], scenes: ['festival', 'graduation', 'daily_greeting'], reason: '国风设计精美绝伦，金属质感，阅读时的雅致陪伴', sceneDesc: '教师节、开学礼物、读书爱好者' },
  { id: 16, name: '复古文具套装', priceRange: '200_500', category: 'stationery', subcategory: 'premium_stationery', recipients: ['teacher', 'friend', 'colleague', 'boss'], scenes: ['thanks', 'festival', 'birthday'], reason: '复古黄铜质感，内含钢笔尺子等，文具爱好者的珍藏', sceneDesc: '文具控最爱、教师节礼物、生日惊喜' },

  // ==================== 食品饮品 ====================
  { id: 17, name: '进口零食大礼包', priceRange: '200_500', category: 'food', subcategory: 'snack', recipients: ['friend', 'classmate', 'family', 'child', 'lover'], scenes: ['birthday', 'festival', 'daily_greeting'], reason: '精选多国人气零食，包装精美丰富，满足味蕾惊喜', sceneDesc: '生日派对、节日分享、日常惊喜' },
  { id: 18, name: '坚果零食礼盒', priceRange: '100_200', category: 'food', subcategory: 'snack', recipients: ['elder', 'family', 'friend', 'teacher'], scenes: ['festival', 'daily_greeting', 'thanks'], reason: '每日坚果科学配比，健康美味，过年过节必备', sceneDesc: '春节送礼、看望长辈、健康关怀' },
  { id: 19, name: '巧克力礼盒', priceRange: '100_200', category: 'food', subcategory: 'snack', recipients: ['lover', 'friend', 'classmate', 'child'], scenes: ['birthday', 'festival', 'apology'], reason: '进口可可，丝滑醇厚，甜蜜的心意传递', sceneDesc: '告白心意、道歉和解、生日礼物' },
  { id: 20, name: '精品咖啡豆套装', priceRange: '200_500', category: 'food', subcategory: 'drink', recipients: ['boss', 'client', 'colleague', 'friend'], scenes: ['thanks', 'daily_greeting', 'festival'], reason: '产地直供精品咖啡豆，搭配手冲壶，咖啡爱好者的挚爱', sceneDesc: '商务送礼、咖啡爱好者、品味之选' },
  { id: 21, name: '龙井茶礼盒', priceRange: '500_1000', category: 'food', subcategory: 'drink', recipients: ['elder', 'boss', 'client', 'family'], scenes: ['festival', 'thanks', 'daily_greeting'], reason: '明前特级龙井，清香甘醇，送礼的上佳之选', sceneDesc: '高端送礼、孝敬长辈、商务往来' },
  { id: 22, name: '花茶礼盒套装', priceRange: '100_200', category: 'food', subcategory: 'drink', recipients: ['teacher', 'friend', 'lover', 'elder'], scenes: ['daily_greeting', 'festival', 'thanks'], reason: '玫瑰花茶、茉莉花茶、桂花茶，养颜养生两相宜', sceneDesc: '送女性朋友、养生人士、节日好礼' },
  { id: 23, name: '蜂蜜礼盒', priceRange: '100_200', category: 'food', subcategory: 'health_food', recipients: ['elder', 'family', 'teacher', 'friend'], scenes: ['daily_greeting', 'festival', 'sick'], reason: '纯天然野生蜂蜜，滋补养颜，健康之选', sceneDesc: '看望长辈、探病慰问、日常养生' },
  { id: 24, name: '燕窝礼盒', priceRange: '500_1000', category: 'food', subcategory: 'health_food', recipients: ['elder', 'lover', 'family', 'boss'], scenes: ['festival', 'birthday', 'sick'], reason: '即食燕窝，美容养颜滋补佳品，高端大气', sceneDesc: '孝敬长辈、送女性亲友、滋补关爱' },
  { id: 25, name: '马卡龙礼盒', priceRange: '100_200', category: 'food', subcategory: 'dessert', recipients: ['lover', 'friend', 'classmate', 'child'], scenes: ['birthday', 'festival', 'apology'], reason: '法式甜点，色彩缤纷，甜蜜浪漫的心意之选', sceneDesc: '浪漫表白、甜点爱好者、生日惊喜' },
  { id: 26, name: '蛋黄酥礼盒', priceRange: '50_100', category: 'food', subcategory: 'dessert', recipients: ['friend', 'family', 'colleague', 'teacher'], scenes: ['festival', 'daily_greeting'], reason: '传统手工蛋黄酥，层层酥脆，中秋送礼佳品', sceneDesc: '中秋送礼、日常分享、同事关怀' },

  // ==================== 家居生活 ====================
  { id: 27, name: '艺术装饰画', priceRange: '200_500', category: 'home', subcategory: 'decoration', recipients: ['friend', 'family', 'lover', 'colleague'], scenes: ['housewarming', 'birthday', 'festival'], reason: '原创艺术装饰画，提升家居格调，为新家添彩', sceneDesc: '乔迁新居、新家装饰、生日惊喜' },
  { id: 28, name: '创意花瓶摆件', priceRange: '100_200', category: 'home', subcategory: 'decoration', recipients: ['friend', 'family', 'lover', 'teacher'], scenes: ['housewarming', 'daily_greeting'], reason: '手工吹制玻璃花瓶，简约优雅，装饰家居的点睛之笔', sceneDesc: '乔迁贺礼、家居装饰、日常心意' },
  { id: 29, name: '精美陶瓷餐具套装', priceRange: '200_500', category: 'home', subcategory: 'kitchen', recipients: ['family', 'friend', 'elder', 'colleague'], scenes: ['housewarming', 'festival', 'birthday'], reason: '日式/中式精美餐具，让用餐变成一种仪式感', sceneDesc: '乔迁新居、新家礼物、生活品质' },
  { id: 30, name: '陶瓷茶具套装', priceRange: '200_500', category: 'home', subcategory: 'kitchen', recipients: ['elder', 'boss', 'client', 'teacher'], scenes: ['festival', 'thanks', 'daily_greeting'], reason: '功夫茶具套装，品茗雅趣，文化底蕴深厚', sceneDesc: '送长辈、商务送礼、茶文化爱好者' },
  { id: 31, name: '香薰蜡烛礼盒套装', priceRange: '100_200', category: 'home', subcategory: 'aroma', recipients: ['lover', 'friend', 'teacher', 'colleague'], scenes: ['birthday', 'festival', 'daily_greeting'], reason: '天然大豆蜡，多款香型，营造温馨浪漫氛围', sceneDesc: '浪漫礼物、生日惊喜、闺蜜之选' },
  { id: 32, name: '精油扩香机', priceRange: '200_500', category: 'home', subcategory: 'aroma', recipients: ['lover', 'friend', 'family', 'colleague'], scenes: ['housewarming', 'birthday', 'daily_greeting'], reason: '超声波雾化，静音运行，让家充满自然芬芳', sceneDesc: '新家礼物、品质生活、日常放松' },
  { id: 33, name: '法兰绒毛毯', priceRange: '200_500', category: 'home', subcategory: 'textile', recipients: ['family', 'elder', 'lover', 'friend'], scenes: ['daily_greeting', 'birthday', 'festival'], reason: '柔软亲肤法兰绒，冬日暖心好物，裹住温暖与爱', sceneDesc: '冬日关怀、生日礼物、送长辈佳品' },
  { id: 34, name: '真丝眼罩礼盒', priceRange: '100_200', category: 'home', subcategory: 'textile', recipients: ['friend', 'lover', 'colleague', 'teacher'], scenes: ['daily_greeting', 'birthday', 'thanks'], reason: '100%桑蚕丝，遮光透气，提升睡眠质量', sceneDesc: '睡眠关怀、精致礼物、日常心意' },

  // ==================== 时尚饰品 ====================
  { id: 35, name: '银质项链', priceRange: '200_500', category: 'fashion', subcategory: 'jewelry', recipients: ['lover', 'friend', 'family'], scenes: ['birthday', 'festival', 'apology'], reason: '925纯银打造，简约设计百搭款，日常佩戴不挑场合', sceneDesc: '生日礼物、道歉礼物、表白心意' },
  { id: 36, name: '天然珍珠耳钉', priceRange: '200_500', category: 'fashion', subcategory: 'jewelry', recipients: ['lover', 'family', 'teacher'], scenes: ['birthday', 'thanks', 'festival'], reason: '天然淡水珍珠，温润光泽，优雅气质之选', sceneDesc: '送女友/妈妈、教师节礼物、优雅之选' },
  { id: 37, name: '水晶手链', priceRange: '100_200', category: 'fashion', subcategory: 'jewelry', recipients: ['lover', 'friend', 'classmate', 'family'], scenes: ['birthday', 'daily_greeting', 'festival'], reason: '天然水晶，每款有不同寓意，守护与祝福', sceneDesc: '闺蜜礼物、日常心意、守护祝福' },
  { id: 38, name: '品牌帆布托特包', priceRange: '200_500', category: 'fashion', subcategory: 'bag', recipients: ['lover', 'friend', 'classmate', 'colleague'], scenes: ['birthday', 'daily_greeting', 'graduation'], reason: '大容量帆布包，简约时尚，通勤上学两相宜', sceneDesc: '生日礼物、升学祝贺、日常实用' },
  { id: 39, name: '真皮卡包/零钱包', priceRange: '200_500', category: 'fashion', subcategory: 'bag', recipients: ['boss', 'client', 'colleague', 'friend'], scenes: ['thanks', 'daily_greeting', 'festival'], reason: '头层牛皮，精致小巧，随身携带的体面', sceneDesc: '商务小礼、答谢心意、日常赠礼' },
  { id: 40, name: '轻奢链条包', priceRange: '500_1000', category: 'fashion', subcategory: 'bag', recipients: ['lover', 'friend', 'family'], scenes: ['birthday', 'festival', 'apology'], reason: '轻奢品牌设计，精致链条包，约会逛街必备', sceneDesc: '生日惊喜、道歉礼物、节日浪漫' },
  { id: 41, name: '羊绒围巾', priceRange: '500_1000', category: 'fashion', subcategory: 'scarf_hat', recipients: ['elder', 'lover', 'family', 'boss'], scenes: ['daily_greeting', 'festival', 'thanks'], reason: '100%山羊绒，轻柔保暖，冬日里的温暖守护', sceneDesc: '孝敬长辈、冬日关怀、高端礼物' },
  { id: 42, name: '真丝丝巾', priceRange: '200_500', category: 'fashion', subcategory: 'scarf_hat', recipients: ['teacher', 'elder', 'lover', 'family'], scenes: ['festival', 'thanks', 'birthday'], reason: '桑蚕丝印花丝巾，优雅百搭，提升气质的点睛配饰', sceneDesc: '教师节礼物、送妈妈、优雅女性' },
  { id: 43, name: '品牌墨镜', priceRange: '500_1000', category: 'fashion', subcategory: 'accessory', recipients: ['lover', 'friend', 'family', 'colleague'], scenes: ['birthday', 'festival', 'daily_greeting'], reason: '偏光镜片，时尚设计，夏日出行必备潮品', sceneDesc: '夏日礼物、时尚达人、生日惊喜' },

  // ==================== 数码电子 ====================
  { id: 44, name: '声波电动牙刷', priceRange: '200_500', category: 'digital', subcategory: 'appliance', recipients: ['friend', 'family', 'lover', 'colleague'], scenes: ['birthday', 'daily_greeting', 'festival'], reason: '声波震动洁齿，多种模式，守护口腔健康', sceneDesc: '健康关怀、生日礼物、日常实用' },
  { id: 45, name: '迷你筋膜枪', priceRange: '200_500', category: 'digital', subcategory: 'appliance', recipients: ['friend', 'family', 'colleague', 'lover'], scenes: ['birthday', 'daily_greeting'], reason: '便携筋膜枪，运动放松好帮手，缓解肌肉疲劳', sceneDesc: '运动爱好者、健身达人、健康关怀' },
  { id: 46, name: '蓝牙耳机', priceRange: '200_500', category: 'digital', subcategory: 'audio', recipients: ['friend', 'classmate', 'colleague', 'lover'], scenes: ['birthday', 'daily_greeting', 'graduation'], reason: '真无线降噪，长续航，通勤运动好伴侣', sceneDesc: '学生礼物、通勤必备、日常实用' },
  { id: 47, name: '便携蓝牙音箱', priceRange: '200_500', category: 'digital', subcategory: 'audio', recipients: ['friend', 'classmate', 'family', 'lover'], scenes: ['birthday', 'festival', 'housewarming'], reason: '360°环绕立体声，防水便携，户外聚会必备', sceneDesc: '音乐爱好者、户外达人、新家礼物' },
  { id: 48, name: '主动降噪耳机', priceRange: '500_1000', category: 'digital', subcategory: 'audio', recipients: ['friend', 'colleague', 'classmate', 'lover'], scenes: ['birthday', 'festival', 'graduation'], reason: '旗舰级降噪，Hi-Fi音质，沉浸式听觉体验', sceneDesc: '音乐发烧友、学生礼物、品质生活' },
  { id: 49, name: '无线充电器套装', priceRange: '100_200', category: 'digital', subcategory: 'gadget', recipients: ['friend', 'colleague', 'classmate', 'lover'], scenes: ['daily_greeting', 'birthday', 'festival'], reason: '三合一无线充，手机耳机手表一充搞定，桌面整洁', sceneDesc: '数码爱好者、日常实用、生日小礼' },
  { id: 50, name: '屏幕挂灯', priceRange: '200_500', category: 'digital', subcategory: 'gadget', recipients: ['friend', 'colleague', 'classmate', 'teacher'], scenes: ['daily_greeting', 'birthday', 'thanks'], reason: '非对称光源不反光，护眼办公利器', sceneDesc: '程序员/设计师、办公关怀、日常实用' },
  { id: 51, name: '智能手环', priceRange: '200_500', category: 'digital', subcategory: 'smart', recipients: ['friend', 'family', 'lover', 'elder'], scenes: ['birthday', 'daily_greeting', 'festival'], reason: '心率血氧监测，运动健康管理，时尚实用', sceneDesc: '健康管理、运动达人、日常关怀' },
  { id: 52, name: '智能手表', priceRange: '1000_3000', category: 'digital', subcategory: 'smart', recipients: ['lover', 'family', 'friend', 'colleague'], scenes: ['birthday', 'festival', 'thanks'], reason: '旗舰智能手表，健康监测+智能助手，品质之选', sceneDesc: '生日大礼、年终答谢、高端实用' },
  { id: 53, name: '平板电脑', priceRange: '3000_5000', category: 'digital', subcategory: 'smart', recipients: ['child', 'classmate', 'family', 'lover'], scenes: ['birthday', 'graduation', 'festival'], reason: '学习娱乐兼顾，大屏护眼，送给孩子的成长礼物', sceneDesc: '升学奖励、生日大礼、学习工具' },

  // ==================== 轻奢礼品 ====================
  { id: 54, name: '品牌香水礼盒', priceRange: '500_1000', category: 'luxury', subcategory: 'brand', recipients: ['lover', 'friend', 'family', 'colleague'], scenes: ['birthday', 'festival', 'apology'], reason: '经典香型，留香持久，嗅觉记忆的浪漫礼物', sceneDesc: '生日大礼、节日浪漫、道歉心意' },
  { id: 55, name: '名牌钢笔礼盒', priceRange: '1000_3000', category: 'luxury', subcategory: 'brand', recipients: ['boss', 'client', 'teacher', 'elder'], scenes: ['thanks', 'festival', 'daily_greeting'], reason: '国际大牌钢笔，书写身份的象征，商务送礼首选', sceneDesc: '商务赠礼、尊贵答谢、身份象征' },
  { id: 56, name: '品牌丝巾礼盒', priceRange: '1000_3000', category: 'luxury', subcategory: 'brand', recipients: ['boss', 'client', 'elder', 'lover'], scenes: ['festival', 'thanks', 'birthday'], reason: '国际奢侈品牌经典丝巾，优雅永不过时', sceneDesc: '高端送礼、时尚品味、经典之选' },
  { id: 57, name: '水晶工艺品摆件', priceRange: '500_1000', category: 'luxury', subcategory: 'ornament', recipients: ['boss', 'client', 'elder', 'family'], scenes: ['festival', 'thanks', 'housewarming'], reason: 'K9水晶精雕，光影流转，镇宅摆件高端大气', sceneDesc: '乔迁贺礼、商务送礼、高端摆件' },
  { id: 58, name: '景泰蓝工艺摆件', priceRange: '1000_3000', category: 'luxury', subcategory: 'ornament', recipients: ['boss', 'client', 'elder', 'teacher'], scenes: ['festival', 'thanks', 'daily_greeting'], reason: '非遗景泰蓝工艺，国粹艺术珍品，送礼极具分量', sceneDesc: '高端送礼、文化收藏、尊贵赠礼' },
  { id: 59, name: '高端红酒礼盒', priceRange: '1000_3000', category: 'luxury', subcategory: 'premium_box', recipients: ['boss', 'client', 'elder', 'friend'], scenes: ['festival', 'thanks', 'housewarming'], reason: '法国名庄红酒，年份佳酿，木盒精装大气', sceneDesc: '商务宴请、高端送礼、品酒爱好者' },
  { id: 60, name: '茅台酒礼盒', priceRange: '3000_5000', category: 'luxury', subcategory: 'premium_box', recipients: ['boss', 'client', 'elder', 'family'], scenes: ['festival', 'thanks', 'housewarming'], reason: '国酒茅台，酱香典范，中国高端送礼首选', sceneDesc: '商务送礼、孝敬长辈、重大节日' },
  { id: 61, name: '豪华零食礼篮', priceRange: '500_1000', category: 'luxury', subcategory: 'premium_box', recipients: ['client', 'boss', 'family', 'friend'], scenes: ['festival', 'thanks', 'daily_greeting'], reason: '精选全球高端零食，藤编礼篮包装，丰盛体面', sceneDesc: '年终答谢、节日送礼、家庭分享' },
  { id: 62, name: '纪念币收藏套装', priceRange: '1000_3000', category: 'luxury', subcategory: 'collectible', recipients: ['elder', 'boss', 'client', 'family'], scenes: ['festival', 'thanks', 'birthday'], reason: '央行发行纪念币，限量珍藏，传家之选', sceneDesc: '收藏爱好者、高端送礼、传家珍藏' },
  { id: 63, name: '限量版手办', priceRange: '1000_3000', category: 'luxury', subcategory: 'collectible', recipients: ['friend', 'classmate', 'lover', 'child'], scenes: ['birthday', 'festival', 'graduation'], reason: '正版授权限量手办，精细做工，二次元爱好者终极梦想', sceneDesc: '动漫迷最爱、生日惊喜、收藏级礼物' },

  // ==================== 补充：10000元以上 ====================
  { id: 64, name: '高端瑞士手表', priceRange: 'above_10000', category: 'luxury', subcategory: 'brand', recipients: ['lover', 'boss', 'client', 'family'], scenes: ['birthday', 'thanks', 'festival'], reason: '瑞士机芯，经典设计，时间的艺术品，身份与品位的象征', sceneDesc: '顶级生日礼物、商务答谢、重要纪念日' },
  { id: 65, name: '名牌珠宝套装', priceRange: 'above_10000', category: 'luxury', subcategory: 'brand', recipients: ['lover', 'family'], scenes: ['birthday', 'festival', 'apology'], reason: '国际珠宝品牌，钻石/宝石镶嵌，璀璨夺目', sceneDesc: '求婚/纪念日、顶级生日礼物、奢华心意' },
  { id: 66, name: '限量版收藏手表', priceRange: 'above_10000', category: 'luxury', subcategory: 'collectible', recipients: ['boss', 'client', 'family', 'lover'], scenes: ['thanks', 'festival', 'birthday'], reason: '限量编号发行，手工打造，收藏与实用完美结合', sceneDesc: '顶级收藏、商务重礼、传世之选' }
]

const recipientMap = {
  teacher: '老师', classmate: '同学', family: '家人', friend: '朋友',
  colleague: '同事', elder: '长辈', lover: '恋人', boss: '领导',
  client: '客户', child: '小孩'
}

const budgetNames = {
  under_50: '50元以下', '50_100': '50-100元', '100_200': '100-200元',
  '200_500': '200-500元', '500_1000': '500-1000元', '1000_3000': '1000-3000元',
  '3000_5000': '3000-5000元', '5000_10000': '5000-10000元', above_10000: '10000元以上'
}

const sceneGreetings = {
  daily_greeting: {
    teacher: '{recipient}，感谢您一直以来的教导与付出，小小礼物不成敬意，祝您工作顺利、身体健康！',
    classmate: '{recipient}，好久不见十分想念，一份小礼物送去我的问候，有空常聚聚！',
    family: '亲爱的{recipient}，平时总是不好意思表达，借这份礼物说一声：有你们真好，永远爱你们！',
    friend: '{recipient}，一路走来有你真好，这份礼物代表我的心意，愿我们的友谊地久天长！',
    colleague: '{recipient}，共事的日子很愉快，一点心意请收下，祝工作顺利天天开心！',
    elder: '{recipient}，您辛苦了！一份小礼物略表孝心，祝您身体健康、万事如意！',
    lover: '亲爱的{recipient}，平淡的日子里因为有你才变得特别，这份礼物装着我的想念与爱意~',
    boss: '{recipient}，感谢您的指导与支持，一点心意不成敬意，祝事业蒸蒸日上！',
    client: '{recipient}，感谢长期以来的信任与合作，一份薄礼略表心意，期待继续携手共赢！',
    child: '亲爱的{recipient}，希望这份礼物能让你开心，愿你健康快乐、茁壮成长！'
  },
  festival: {
    teacher: '{recipient}，佳节来临之际，送上这份心意，感谢您的辛勤耕耘，祝节日快乐、桃李满天下！',
    classmate: '{recipient}，节日快乐！一起奋斗的日子最难忘，送上小礼物祝你前程似锦！',
    family: '亲爱的{recipient}，佳节团聚是最幸福的事，这份礼物承载着我对你们的爱与祝福！',
    friend: '{recipient}，节日快乐！愿这份礼物为你的节日增添一份喜悦，祝一切顺心如意！',
    colleague: '{recipient}，节日愉快！感谢工作中的配合与支持，一份节日礼物愿你阖家幸福！',
    elder: '{recipient}，佳节倍思亲，这份礼物代表我的心意，祝您福如东海、寿比南山！',
    lover: '亲爱的{recipient}，节日里的浪漫属于我们，愿这份礼物伴你度过每一个美好时刻~',
    boss: '{recipient}，值此佳节，敬备薄礼恭祝节日快乐！感谢您的引领，祝再创辉煌！',
    client: '{recipient}，佳节将至，一份心意礼盒为您送上满满祝福，祝生意兴隆、节日愉快！',
    child: '宝贝{recipient}，节日快乐！希望你收到礼物时笑得更开心，你是最棒的！'
  },
  birthday: {
    teacher: '{recipient}，生日快乐！感谢您的教诲之恩，送上一份心意祝您福寿安康、桃李芬芳！',
    classmate: '{recipient}，生日快乐！青春正好，愿你前程似锦、梦想成真！',
    family: '亲爱的{recipient}，生日快乐！感谢生命中有你，愿你的每一天都充满欢笑与幸福！',
    friend: '{recipient}，生日快乐！时光不老我们不散，祝新的一岁所有的美好如约而至！',
    colleague: '{recipient}，生日快乐！共事的日子因你更精彩，祝工作顺利、生活美满！',
    elder: '{recipient}，福寿安康生辰快乐！愿您健康长寿、笑口常开，我们永远爱您！',
    lover: '亲爱的{recipient}，生日快乐！你是上天给我最好的礼物，愿我们岁岁年年永相伴~',
    boss: '{recipient}，祝您生日快乐！感谢您的卓越领导，愿事业长虹、阖家幸福！',
    client: '{recipient}，生日之际送上真挚祝福，愿您生日快乐、事业腾达、万事顺意！',
    child: '祝宝贝{recipient}生日快乐！又长大一岁了，愿你的世界永远充满阳光与快乐！'
  },
  thanks: {
    teacher: '{recipient}，千言万语道不尽心中感激，一份礼物表心意，感谢您点亮我的人生之路！',
    classmate: '{recipient}，感谢相遇相知相伴，这份礼物承载着我的真挚谢意！',
    family: '亲爱的{recipient}，感谢你们无条件的爱与支持，这是我今生最大的财富！',
    friend: '{recipient}，谢谢你在每个需要的时候都在，这份礼物虽不贵重却满载真心！',
    colleague: '{recipient}，合作中的每份温暖我都铭记于心，感谢有你并肩作战！',
    elder: '{recipient}，感谢您多年来的关爱与教诲，儿女孙辈心中永远感恩！',
    lover: '亲爱的{recipient}，谢谢你出现在我的生命里，让每一天都闪闪发光~',
    boss: '{recipient}，感谢您的信任与栽培，在您麾下工作受益匪浅，谨以此礼表达谢意！',
    client: '{recipient}，感谢您的信任与支持，合作之路因您而精彩，谨致最诚挚的谢意！',
    child: '宝贝{recipient}，谢谢你的乖巧懂事，虽然你还小，但已经是最棒的宝贝啦！'
  },
  sick: {
    teacher: '{recipient}，听闻您身体抱恙十分挂念，一份滋补好礼祝您早日康复、重返讲台！',
    classmate: '{recipient}，听说你生病了很担心，好好休息早日康复，大家都盼着你回来！',
    family: '亲爱的{recipient}，身体最重要，好好休养不要操劳，我们都在你身边！',
    friend: '{recipient}，生病了一定要好好照顾自己，快快好起来一起去吃好吃的！',
    colleague: '{recipient}，身体是革命的本钱，安心休养，工作的事不用担心！',
    elder: '{recipient}，您的健康是我们最大的牵挂，安心养病早日康复，儿孙都在身边！',
    lover: '亲爱的{recipient}，看到你生病我好心疼，快点好起来，我还要带你去好多地方呢~',
    boss: '{recipient}，听闻您身体不适深表关切，望安心休养，祝早日康健归来！',
    client: '{recipient}，惊闻贵体欠安十分挂念，送上滋补好礼，祝早日康复、福寿安康！',
    child: '宝贝{recipient}，生病很难受吧，快快好起来，好了之后带你去游乐场玩！'
  },
  apology: {
    teacher: '{recipient}，之前的事我很抱歉，一点心意请您收下，希望能得到您的谅解！',
    classmate: '{recipient}，之前的事是我不好，这份礼物代表我的歉意，希望我们还是好朋友！',
    family: '亲爱的{recipient}，对不起让你们操心了，我会更加努力的，这份礼物赔个不是！',
    friend: '{recipient}，之前确实是我做得不对，一份小礼物请你收下，给我一个机会弥补！',
    colleague: '{recipient}，工作上的误会我很抱歉，一点诚意请你收下，往后我们好好配合！',
    elder: '{recipient}，之前惹您生气是我的不对，诚心送上礼物赔罪，请您原谅！',
    lover: '亲爱的{recipient}，对不起让你难过了，礼物是我最真心的道歉，请给我一次机会好吗？',
    boss: '{recipient}，之前的工作失误我深刻反省，谨备薄礼赔罪，定当加倍努力不负所望！',
    client: '{recipient}，之前的不周之处深表歉意，一份诚意之礼请您笑纳，定当改进服务！',
    child: '宝贝{recipient}，刚才对你太凶是我不对，这个礼物送给你，我们和好吧！'
  },
  graduation: {
    teacher: '{recipient}，桃李不言下自成蹊，感谢您的培养，这份礼物代表学生的感恩与敬意！',
    classmate: '{recipient}，毕业快乐！新的征程即将开始，祝你前程似锦、未来可期！',
    family: '亲爱的{recipient}，为你骄傲！这份礼物是对你努力的奖励，未来的路更加精彩！',
    friend: '{recipient}，恭喜顺利升学/毕业！这是你人生的重要里程碑，为你的成就感到骄傲！',
    colleague: '{recipient}，恭喜学有所成！工作学习两不误的精神令人敬佩，祝学业事业双丰收！',
    elder: '{recipient}，儿孙成才乃是最大欣慰，祝愿您在人生新阶段继续发光发热！',
    lover: '亲爱的{recipient}，为你自豪！在新的校园/岗位上继续闪耀吧，我会一直陪着你~',
    boss: '{recipient}，恭贺学业精进！不断学习的精神令人钦佩，祝学以致用再创佳绩！',
    client: '{recipient}，欣闻贵方才俊大有成就，特备薄礼祝贺，愿人才辈出事业长兴！',
    child: '宝贝{recipient}，恭喜升学！你的每一点进步都让我们骄傲，继续加油未来无限光明！'
  },
  housewarming: {
    teacher: '{recipient}，恭贺乔迁之喜！新居新气象，愿您桃李满园、安居乐业！',
    classmate: '{recipient}，恭喜搬新家！新的环境新的开始，祝你新家温馨幸福！',
    family: '亲爱的{recipient}，恭喜搬新家！愿这个新家充满欢乐、温馨与美好的回忆！',
    friend: '{recipient}，恭喜乔迁新居！愿你在这个新家里，每一天都幸福美满、惊喜不断！',
    colleague: '{recipient}，贺新居落成！愿新家带来新气象，生活事业双双节节高！',
    elder: '{recipient}，恭贺新居落成！愿您在新家安享晚年、福寿绵长、其乐融融！',
    lover: '亲爱的{recipient}，恭喜有了属于我们的新家，愿每一个角落都装满我们的甜蜜回忆~',
    boss: '{recipient}，恭祝乔迁之喜！新居新气象，祝事业家庭双丰收、步步高升！',
    client: '{recipient}，欣闻贵地乔迁新址，谨致最诚挚的祝贺，祝新址大展宏图、财源广进！',
    child: '宝贝{recipient}，恭喜搬了新家！你的小天地一定布置得很漂亮吧，祝你每天都开心！'
  }
}

export function generateGreeting(recipient, scene) {
  const templates = sceneGreetings[scene]
  if (!templates) return ''
  const template = templates[recipient] || ''
  return template.replace('{recipient}', recipientMap[recipient] || '')
}

export function recommendGifts(filters) {
  const { recipient, budget, category, subcategory, scene } = filters

  let filtered = [...gifts]

  if (recipient) {
    filtered = filtered.filter(g => g.recipients.includes(recipient))
  }

  if (budget) {
    filtered = filtered.filter(g => g.priceRange === budget)
  }

  if (category) {
    filtered = filtered.filter(g => g.category === category)
  }

  if (subcategory) {
    filtered = filtered.filter(g => g.subcategory === subcategory)
  }

  if (filtered.length === 0) {
    let fallback = [...gifts]
    if (recipient) {
      fallback = fallback.filter(g => g.recipients.includes(recipient))
      if (fallback.length > 0) {
        filtered = fallback
      }
    }
  }

  if (filtered.length === 0) {
    filtered = [...gifts]
  }

  const shuffled = filtered.sort(() => Math.random() - 0.5)
  const count = Math.min(5, Math.max(3, shuffled.length))
  const selected = shuffled.slice(0, count)

  const greeting = scene && recipient ? generateGreeting(recipient, scene) : ''

  return {
    gifts: selected.map(g => ({
      id: g.id,
      name: g.name,
      reason: g.reason,
      sceneDesc: g.sceneDesc,
      priceRange: budgetNames[g.priceRange] || g.priceRange
    })),
    greeting
  }
}