document.addEventListener('DOMContentLoaded', () => {
  // Experience data
  const experiences = [
    {
      date: '2024 - 至今',
      title: '高级视觉设计师',
      company: '某知名互联网公司',
      desc: '负责品牌视觉设计、UI/UX设计，主导多个重要项目的视觉方向，带领团队完成高质量设计交付。'
    },
    {
      date: '2022 - 2024',
      title: '全栈开发工程师',
      company: '某科技创新企业',
      desc: '负责前后端开发，使用React、Vue、Node.js等技术栈，独立完成多个Web应用的设计与开发。'
    },
    {
      date: '2020 - 2022',
      title: '新媒体运营专员',
      company: '某传媒机构',
      desc: '负责微信公众号、小程序内容运营，策划线上活动，累计增长粉丝5W+，提升品牌影响力。'
    }
  ];

  // Skills data
  const skills = [
    { icon: '📊', name: '办公软件', desc: '精通 Word、Excel、PowerPoint 等办公软件，擅长数据分析与可视化报告制作。', tags: ['Word', 'Excel', 'PPT', '数据分析'] },
    { icon: '🎬', name: '视频剪辑', desc: '熟练使用 Premiere Pro、After Effects 等工具，能独立完成宣传片、短视频的策划与制作。', tags: ['PR', 'AE', '剪映', '达芬奇'] },
    { icon: '🎨', name: '视觉设计', desc: '精通 Photoshop、Illustrator、Figma 等设计工具，擅长品牌设计、UI/UX 设计。', tags: ['PS', 'AI', 'Figma', 'Sketch'] },
    { icon: '🌐', name: 'WordPress 建站', desc: '丰富的 WordPress 主题开发、插件定制经验，能快速搭建企业官网、电商网站。', tags: ['WordPress', 'PHP', 'MySQL', 'WooCommerce'] },
    { icon: '📱', name: '公众号运营', desc: '熟悉微信公众号运营策略，擅长内容策划、活动运营、用户增长与数据分析。', tags: ['公众号', '内容运营', '活动策划', '数据分析'] },
    { icon: '⚡', name: '小程序开发', desc: '熟练使用微信小程序原生开发框架，能独立完成小程序前后端开发与上线。', tags: ['微信小程序', 'uni-app', '云开发', 'API'] }
  ];

  // Render timeline
  const timeline = document.getElementById('experienceTimeline');
  if (timeline) {
    experiences.forEach((exp, i) => {
      const item = document.createElement('div');
      item.className = 'timeline-item';
      item.style.animationDelay = (i * 0.2) + 's';
      item.innerHTML = 
        <div class='timeline-date'></div>
        <h3 class='timeline-title'></h3>
        <div class='timeline-company'></div>
        <p class='timeline-desc'></p>
      ;
      timeline.appendChild(item);
    });
  }

  // Render skills
  const grid = document.getElementById('skillsGrid');
  if (grid) {
    skills.forEach((skill, i) => {
      const card = document.createElement('div');
      card.className = 'skill-card';
      card.style.animationDelay = (i * 0.15) + 's';
      card.innerHTML = 
        <div class='skill-icon'></div>
        <h3 class='skill-name'></h3>
        <p class='skill-desc'></p>
        <div class='skill-tags'></div>
      ;
      grid.appendChild(card);
    });
  }
});
