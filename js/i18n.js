const i18n = {
  'zh-CN': {
    'nav.home': '家',
    'nav.experience': '经历',
    'nav.skills': '技能',
    'nav.contact': '联系',
    'home.greeting': '你好，我是',
    'home.title': '创意设计师 & 开发者',
    'home.description': '专注于视觉设计、品牌塑造与数字体验创作',
    'home.cta.explore': '探索更多',
    'home.cta.contact': '联系我',
    'home.scroll': '向下滚动',
    'experience.tag': '职业生涯',
    'experience.title': '工作经历',
    'experience.subtitle': '每一步都铸就了今天的我',
    'skills.tag': '专业能力',
    'skills.title': '技能图谱',
    'skills.subtitle': '多领域跨界，持续精进',
    'contact.tag': '保持联系',
    'contact.title': '找到我',
    'contact.subtitle': '期待与您的合作交流',
    'contact.address.label': '地址',
    'contact.address.value': '中国 · 天津市',
    'contact.address.full': '中华人民共和国天津市',
    'contact.email.label': '邮箱',
    'contact.phone.label': '电话',
    'footer.text': '© 2026 YSZ. 用创意点亮数字世界'
  },
  'en': {
    'nav.home': 'Home',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'home.greeting': 'Hello, I am',
    'home.title': 'Creative Designer & Developer',
    'home.description': 'Focused on visual design, branding and digital experience creation',
    'home.cta.explore': 'Explore More',
    'home.cta.contact': 'Contact Me',
    'home.scroll': 'Scroll Down',
    'experience.tag': 'Career',
    'experience.title': 'Work Experience',
    'experience.subtitle': 'Every step has shaped who I am today',
    'skills.tag': 'Expertise',
    'skills.title': 'Skill Map',
    'skills.subtitle': 'Cross-domain expertise, continuous improvement',
    'contact.tag': 'Get in Touch',
    'contact.title': 'Find Me',
    'contact.subtitle': 'Looking forward to collaborating with you',
    'contact.address.label': 'Address',
    'contact.address.value': 'Tianjin, China',
    'contact.address.full': 'Tianjin, People\'s Republic of China',
    'contact.email.label': 'Email',
    'contact.phone.label': 'Phone',
    'footer.text': '© 2026 YSZ. Lighting up the digital world with creativity'
  }
};

let currentLang = localStorage.getItem('lang') || 'zh-CN';

function updateLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key]) {
      el.textContent = i18n[lang][key];
    }
  });
  document.documentElement.lang = lang === 'zh-CN' ? 'zh-CN' : 'en';
  const langBtn = document.getElementById('langToggle');
  if (langBtn) langBtn.querySelector('.lang-text').textContent = lang === 'zh-CN' ? 'EN' : '中文';
}

document.addEventListener('DOMContentLoaded', () => {
  updateLanguage(currentLang);
  const langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      updateLanguage(currentLang === 'zh-CN' ? 'en' : 'zh-CN');
    });
  }
});
