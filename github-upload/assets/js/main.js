/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== 滚动进度条 =====*/
window.addEventListener('scroll', () => {
    const scrollProgress = document.querySelector('.scroll-progress-bar');
    const scrollTop = window.pageYOffset;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / documentHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';
});

/*===== 自定义光标 =====*/
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 100);
});

// 光标交互效果
document.querySelectorAll('a, button, .nav__link, .project__card').forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(0.5)';
    });
    
    link.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
    });
});

/*===== 粒子效果 =====*/
if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#667eea"
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 0.5,
                random: false
            },
            size: {
                value: 3,
                random: true
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#667eea",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            }
        },
        retina_detect: true
    });
}

/*===== 打字机效果 =====*/
document.addEventListener('DOMContentLoaded', function() {
    if (typeof Typed !== 'undefined') {
        new Typed('#typed-text', {
            strings: [
                'Systems Designer',
                'Cultural Bridge Builder',
                'AI Conversation Partner',
                'Human-Centered Technologist'
            ],
            typeSpeed: 80,
            backSpeed: 50,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }
});

/*===== 主题切换 =====*/
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// 检查本地存储的主题，如果没有则默认为白天模式
const currentTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', currentTheme);
if (currentTheme === 'dark') {
    themeToggle.innerHTML = '<i class="bx bx-sun"></i>';
} else {
    themeToggle.innerHTML = '<i class="bx bx-moon"></i>';
}
// 保存默认主题到本地存储
if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'light');
}

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // 更新图标
    if (newTheme === 'dark') {
        themeToggle.innerHTML = '<i class="bx bx-sun"></i>';
    } else {
        themeToggle.innerHTML = '<i class="bx bx-moon"></i>';
    }
});

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

/*===== LEARNING CARDS TOGGLE =====*/
function toggleCard(cardNumber) {
    const card = document.getElementById(`card-${cardNumber}`);
    const toggle = card.previousElementSibling.querySelector('.learning__card-toggle');
    
    // Toggle the card content
    card.classList.toggle('active');
    toggle.classList.toggle('active');
    
    // Close other cards
    for (let i = 1; i <= 3; i++) {
        if (i !== cardNumber) {
            const otherCard = document.getElementById(`card-${i}`);
            const otherToggle = otherCard.previousElementSibling.querySelector('.learning__card-toggle');
            otherCard.classList.remove('active');
            otherToggle.classList.remove('active');
        }
    }
}

/*===== 手风琴功能 (仅用于Learning部分) =====*/
function toggleAccordion(element) {
    const accordionItem = element.parentNode;
    const content = accordionItem.querySelector('.accordion__content');
    const icon = element.querySelector('.accordion__icon');
    
    // 关闭其他打开的手风琴项
    const allAccordionItems = document.querySelectorAll('.accordion__item');
    allAccordionItems.forEach(item => {
        if (item !== accordionItem) {
            const otherContent = item.querySelector('.accordion__content');
            const otherIcon = item.querySelector('.accordion__icon');
            const otherHeader = item.querySelector('.accordion__header');
            
            otherContent.classList.remove('show');
            otherIcon.classList.remove('rotate');
            otherHeader.classList.remove('active');
        }
    });
    
    // 切换当前手风琴项
    content.classList.toggle('show');
    icon.classList.toggle('rotate');
    element.classList.toggle('active');
    
    // 添加平滑滚动动画
    if (content.classList.contains('show')) {
        setTimeout(() => {
            element.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'nearest' 
            });
        }, 300);
    }
}

/*===== Projects统一设计 =====*/
// 移除了可展开项目卡片功能 - 现在所有项目都使用统一的卡片格式

/*===== Project Category Filtering =====*/
document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.project__filter-btn');
    const projectCards = document.querySelectorAll('.project__card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(button => button.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'flex';
                    card.style.animation = 'fadeInUp 0.5s ease';
                } else {
                    const cardCategory = card.getAttribute('data-category');
                    if (cardCategory === filterValue) {
                        card.style.display = 'flex';
                        card.style.animation = 'fadeInUp 0.5s ease';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
});

/*===== INTELLIGENT ASSISTANT =====*/
// Multilingual translations
const translations = {
    en: {
        'assistant.name': 'Dekyi Assistant',
        'assistant.status': 'Online - Ready to help',
        'assistant.welcome': '👋 Hello! I\'m here to help you explore Dekyi\'s work and discuss potential collaborations.',
        'assistant.quickActions': 'Quick Actions:',
        'assistant.exploreProjects': 'Explore Projects',
        'assistant.collaborate': 'Collaboration Inquiry',
        'assistant.background': 'About Background',
        'assistant.faqTitle': 'Frequently Asked Questions:',
        'assistant.faq1.q': 'What\'s your research focus?',
        'assistant.faq1.a': 'I focus on interdisciplinary research combining AI, cultural preservation, and human-centered design. My work bridges technology and cultural understanding.',
        'assistant.faq2.q': 'How do you approach collaborations?',
        'assistant.faq2.a': 'I value authentic partnerships that respect cultural contexts and create meaningful impact. I\'m open to research collaborations, design projects, and cultural bridge-building initiatives.',
        'assistant.faq3.q': 'What makes your approach unique?',
        'assistant.faq3.a': 'My trilingual background (Chinese, Tibetan, English) and interdisciplinary experience allow me to approach problems from multiple cultural and technical perspectives.',
        'assistant.collabTitle': 'Tell me about your collaboration idea:',
        'assistant.selectType': 'Select collaboration type...',
        'assistant.research': 'Research Partnership',
        'assistant.design': 'UX/Design Project',
        'assistant.cultural': 'Cultural Bridge Building',
        'assistant.ai': 'AI/Data Science',
        'assistant.other': 'Other',
        'assistant.describePlaceholder': 'Describe your project idea...',
        'assistant.timelinePlaceholder': 'Preferred timeline',
        'assistant.emailPlaceholder': 'Your email',
        'assistant.submit': 'Send Collaboration Request',
        'assistant.typePlaceholder': 'Type your message...'
    },
    zh: {
        'assistant.name': 'Dekyi 助手',
        'assistant.status': '在线 - 随时为您服务',
        'assistant.welcome': '👋 您好！我来帮助您了解Dekyi的工作并探讨潜在的合作机会。',
        'assistant.quickActions': '快速操作：',
        'assistant.exploreProjects': '探索项目',
        'assistant.collaborate': '合作咨询',
        'assistant.background': '关于背景',
        'assistant.skills': '技能专长',
        'assistant.faqTitle': '常见问题：',
        'assistant.faq1.q': '您的研究重点是什么？',
        'assistant.faq1.a': '我专注于结合AI、文化保护和以人为本设计的跨学科研究。我的工作连接技术与文化理解。',
        'assistant.faq2.q': '您如何看待合作？',
        'assistant.faq2.a': '我重视尊重文化背景并创造有意义影响的真诚伙伴关系。我乐于进行研究合作、设计项目和文化桥梁建设倡议。',
        'assistant.faq3.q': '您的方法有什么独特之处？',
        'assistant.faq3.a': '我的三语背景（中文、藏文、英文）和跨学科经验让我能够从多个文化和技术角度解决问题。',
        'assistant.collabTitle': '请告诉我您的合作想法：',
        'assistant.selectType': '选择合作类型...',
        'assistant.research': '研究合作',
        'assistant.design': 'UX/设计项目',
        'assistant.cultural': '文化桥梁建设',
        'assistant.ai': 'AI/数据科学',
        'assistant.other': '其他',
        'assistant.describePlaceholder': '描述您的项目想法...',
        'assistant.timelinePlaceholder': '期望时间线',
        'assistant.emailPlaceholder': '您的邮箱',
        'assistant.submit': '发送合作请求',
        'assistant.typePlaceholder': '输入您的消息...'
    },
    bo: {
        'assistant.name': 'སྐྱིད་དེའི་རོགས་རམ་འཕྲུལ་རིག',
        'assistant.status': 'དྲང་པོ་ཡོད། - རོགས་རམ་ལ་གྲ་སྒྲིག',
        'assistant.welcome': '👋 བཀྲ་ཤིས་བདེ་ལེགས! ང་འདིར་སྐྱིད་དེའི་ལས་ཀ་སྤྱོད་པ་དང་མཉམ་འབྲེལ་གྱི་གོ་སྐབས་གླེང་མོལ་ལ་རོགས་རམ་ཡིན།',
        'assistant.quickActions': 'མགྱོགས་བྱ་ལས་དོན།',
        'assistant.exploreProjects': 'ལས་འཆར་རྟོག་ཞིབ།',
        'assistant.collaborate': 'མཉམ་འབྲེལ་འདྲི་རྩད།',
        'assistant.background': 'རྒྱབ་ལྗོངས་སྐོར།',
        'assistant.skills': 'རིག་རྩལ་མཁས་རྩལ།',
        'assistant.faqTitle': 'སྤྱོད་དྲི་བ་འདྲི་བ།',
        'assistant.faq1.q': 'ཁྱེད་ཀྱི་ཞིབ་འཇུག་གི་གཙོ་གནད་གང་ཡིན་ནམ།',
        'assistant.faq1.a': 'ང་རིག་ནུས་སྤྱི་ཚོགས། རིག་གཞུང་སྲུང་སྐྱོབ། མི་སེར་དབུས་གཙོ་བྱས་པའི་འཆར་འགོད་བཅས་ཁུངས་བྱས་པའི་ཞིབ་འཇུག་ལ་ཞུགས་ཡོད།',
        'assistant.faq2.q': 'ཁྱེད་ཀྱིས་མཉམ་འབྲེལ་ལ་ཇི་ལྟར་ལྟ་གི་ཡོད།',
        'assistant.faq2.a': 'ང་རིག་གཞུང་གི་ཁོར་ཡུག་ལ་དབང་སྦྱོར་དང་དོན་སྙིང་དང་ལྡན་པའི་ཤུགས་རྐྱེན་སྐྲུན་པའི་དྲང་བདེན་མཉམ་འབྲེལ་ལ་རིན་ཐང་འདོགས།',
        'assistant.faq3.q': 'ཁྱེད་ཀྱི་ཐབས་ལམ་གྱི་ཁྱད་ཆོས་གང་ཡིན།',
        'assistant.faq3.a': 'ང་ལ་སྐད་གསུམ་(རྒྱ་སྐད། བོད་སྐད། དབྱིན་སྐད)གྱི་རྒྱབ་ལྗོངས་དང་ཁུངས་མང་བའི་ཉམས་མྱོང་ཡོད་པས། དཀའ་རྙོག་ཚར་རིག་གཞུང་དང་ཐེག་པའི་ལྟ་སྤྱོད་མང་པོ་ནས་ཞིབ་འཇུག་བྱེད་ཐུབ།',
        'assistant.collabTitle': 'ཁྱེད་ཀྱི་མཉམ་འབྲེལ་གྱི་བསམ་ཚུལ་གང་ཡིན་ཞུས་དང་།',
        'assistant.selectType': 'མཉམ་འབྲེལ་རིགས་སུ་འདེམས་དང་...',
        'assistant.research': 'ཞིབ་འཇུག་མཉམ་འབྲེལ།',
        'assistant.design': 'སྤྱོད་མཁན་ཉམས་མྱོང་འཆར་འགོད་ལས་འཆར།',
        'assistant.cultural': 'རིག་གཞུང་ཟམ་པ་བཟོ་རྒྱུ།',
        'assistant.ai': 'རིག་ནུས་སྤྱི་ཚོགས/གཞི་གྲངས་ཚན་རིག',
        'assistant.other': 'གཞན་དག',
        'assistant.describePlaceholder': 'ཁྱེད་ཀྱི་ལས་འཆར་གྱི་བསམ་ཚུལ་འགྲེལ་བཤད་གནང་དང་...',
        'assistant.timelinePlaceholder': 'འདོད་པའི་དུས་ཚིགས།',
        'assistant.emailPlaceholder': 'ཁྱེད་ཀྱི་གློག་ཡིག',
        'assistant.submit': 'མཉམ་འབྲེལ་ཞུ་ཡིག་སྐུར་དང་།',
        'assistant.typePlaceholder': 'ཁྱེད་ཀྱི་འཕྲིན་ཡིག་འདི་འབྲི་དང་...'
    }
};

// Current language
let currentLang = localStorage.getItem('preferred-language') || 'zh';  // 默认中文

// Assistant functionality - moved before the existing form handling code
document.addEventListener('DOMContentLoaded', function() {
    // Language toggle
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentLang = btn.getAttribute('data-lang');
            updateLanguage();
        });
    });

    // Assistant functionality
    const assistantToggle = document.getElementById('assistantToggle');
    const assistantWindow = document.getElementById('assistantWindow');
    const assistantClose = document.getElementById('assistantClose');
    const assistantBadge = document.getElementById('assistantBadge');

    if (assistantToggle && assistantWindow && assistantClose) {
        // Toggle assistant window
        assistantToggle.addEventListener('click', () => {
            assistantWindow.classList.toggle('show');
            assistantBadge.style.display = 'none';
        });

        assistantClose.addEventListener('click', () => {
            assistantWindow.classList.remove('show');
        });
    }

    // Quick actions
    const quickBtns = document.querySelectorAll('.quick-btn');
    quickBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const action = btn.getAttribute('data-action');
            handleQuickAction(action);
        });
    });

    // FAQ functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isShown = answer.classList.contains('show');
            
            // Close all other answers
            document.querySelectorAll('.faq-answer').forEach(a => {
                a.classList.remove('show');
            });
            
            // Toggle current answer
            if (!isShown) {
                answer.classList.add('show');
            }
        });
    });

    // Collaboration form
    const collabForm = document.getElementById('collabForm');
    if (collabForm) {
        collabForm.addEventListener('submit', (e) => {
            e.preventDefault();
            handleCollaborationSubmit(e.target);
        });
    }

    // Chat functionality
    const messageInput = document.getElementById('messageInput');
    const sendBtn = document.getElementById('sendBtn');
    
    if (sendBtn && messageInput) {
        sendBtn.addEventListener('click', sendMessage);
        messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
});

// Update language function
function updateLanguage() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLang] && translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });

    // Update placeholders
    const placeholders = document.querySelectorAll('[data-translate-placeholder]');
    placeholders.forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[currentLang] && translations[currentLang][key]) {
            element.placeholder = translations[currentLang][key];
        }
    });
}

// Handle quick actions
function handleQuickAction(action) {
    const faqSection = document.getElementById('faqSection');
    const collaborationForm = document.getElementById('collaborationForm');

    console.log('Quick action clicked:', action); // Debug log

    // Hide all sections first
    faqSection.style.display = 'none';
    collaborationForm.style.display = 'none';

    switch(action) {
        case 'projects':
            addAssistantMessage(getLocalizedMessage('projectsMessage'));
            // Scroll to projects section
            document.getElementById('work').scrollIntoView({ behavior: 'smooth' });
            break;
        case 'collaborate':
            collaborationForm.style.display = 'block';
            addAssistantMessage(getLocalizedMessage('collaborateMessage'));
            break;
        case 'background':
            faqSection.style.display = 'block';
            addAssistantMessage(getLocalizedMessage('backgroundMessage'));
            break;
    }
}

// Get localized messages
function getLocalizedMessage(type) {
    const messages = {
        en: {
            projectsMessage: "Here are Dekyi's featured projects! You can use the category filters to explore specific areas like AI & Data, Research, Web Development, UX/Design, and Others. Each project represents a step in the interdisciplinary journey.",
            collaborateMessage: "Great! I'd love to learn about your collaboration idea. Please fill out the form below with details about your project.",
            backgroundMessage: "Here are some frequently asked questions about Dekyi's background and approach. Click on any question to learn more!"
        },
        zh: {
            projectsMessage: "这里是Dekyi的特色项目！您可以使用分类筛选器探索AI与数据、研究、网页开发、UX/设计和其他等特定领域。每个项目都代表跨学科旅程中的一步。",
            collaborateMessage: "太好了！我很想了解您的合作想法。请在下面的表格中填写您的项目详情。",
            backgroundMessage: "这里是一些关于Dekyi背景和方法的常见问题。点击任何问题了解更多！"
        },
        bo: {
            projectsMessage: "འདི་ནི་སྐྱིད་དེའི་ཁྱད་ཆོས་ལས་འཆར་ཡིན། ཁྱེད་ཀྱིས་རིགས་སྡེབ་ཀྱི་བསལ་འདེམས་སྤྱད་ནས་རིག་ནུས་སྤྱི་ཚོགས་དང་གཞི་གྲངས། ཞིབ་འཇུག སྡེ་ཚན་གོང་འཕེལ། UX/འཆར་འགོད། གཞན་དག་བཅས་ཀྱི་ཁྱད་ཆོས་ས་ཁུལ་རྟོག་ཞིབ་བྱེད་ཐུབ། ལས་འཆར་རེ་རེ་ནི་ཁུངས་སྣ་ཚོགས་ཀྱི་འགྲུལ་ལམ་ནང་གི་འགྲུལ་རིས་ཤིག་ཡིན།",
            collaborateMessage: "ཡག་པོ! ང་ཁྱེད་ཀྱི་མཉམ་འབྲེལ་གྱི་བསམ་ཚུལ་ཤེས་འདོད་ཡོད། ཁྱེད་ཀྱི་ལས་འཆར་གྱི་ཞིབ་ཕྲའི་གནས་ཚུལ་འོག་གི་ཐོ་གཞུང་ནང་གང་འདང་།",
            backgroundMessage: "འདི་རུ་སྐྱིད་དེའི་རྒྱབ་ལྗོངས་དང་ཐབས་ལམ་སྐོར་གྱི་སྤྱིར་ཡོད་ཀྱི་འདྲི་བ་འགའ་ཤས་ཡོད། དྲི་བ་གང་རུང་གནོན་ནས་ཤེས་རྟོགས་མང་བ་ཐོབ་ཐུབ!"
        }
    };
    
    return messages[currentLang] ? messages[currentLang][type] : messages.en[type];
}

// Add assistant message
function addAssistantMessage(message) {
    const chatMessages = document.getElementById('chatMessages');
    console.log('Adding assistant message:', message); // Debug log
    console.log('chatMessages element:', chatMessages); // Debug log
    
    if (chatMessages && message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message assistant';
        
        // Enhanced message formatting
        let formattedMessage = message
            .replace(/\n\n/g, '<br><br>')  // Double line breaks first
            .replace(/\n/g, '<br>')        // Single line breaks
            .replace(/🤖/g, '<br>🤖')      // Add line break before emojis for better formatting
            .replace(/🎨/g, '<br>🎨')
            .replace(/🔬/g, '<br>🔬')
            .replace(/🌍/g, '<br>🌍')
            .replace(/🛠️/g, '<br>🛠️');
        
        console.log('Formatted message:', formattedMessage); // Debug log
        
        // Use innerHTML to support line breaks and formatting
        messageDiv.innerHTML = formattedMessage;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        console.log('Message added successfully'); // Debug log
        
        // Force a style update to ensure visibility
        messageDiv.style.display = 'block';
        messageDiv.style.opacity = '1';
        
    } else {
        console.error('Failed to add message:', { 
            chatMessages: chatMessages, 
            message: message,
            messageExists: !!message,
            chatMessagesExists: !!chatMessages
        }); // Debug log
        
        // Fallback: try to create the chat area if it doesn't exist
        if (!chatMessages) {
            console.warn('Chat messages container not found, trying to create one...');
            const assistantBody = document.getElementById('assistantBody');
            if (assistantBody) {
                const newChatMessages = document.createElement('div');
                newChatMessages.id = 'chatMessages';
                newChatMessages.className = 'chat-messages';
                newChatMessages.style.cssText = `
                    margin-top: 15px;
                    max-height: 200px;
                    overflow-y: auto;
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 8px;
                    padding: 10px;
                    background: rgba(255,255,255,0.05);
                `;
                assistantBody.appendChild(newChatMessages);
                
                // Try again
                if (message) {
                    const messageDiv = document.createElement('div');
                    messageDiv.className = 'message assistant';
                    messageDiv.innerHTML = message.replace(/\n/g, '<br>');
                    messageDiv.style.cssText = `
                        background: rgba(74, 144, 226, 0.2);
                        padding: 8px 12px;
                        border-radius: 6px;
                        margin: 5px 0;
                        color: inherit;
                    `;
                    newChatMessages.appendChild(messageDiv);
                    console.log('Fallback message added successfully');
                }
            }
        }
    }
}

// Add user message
function addUserMessage(message) {
    const chatMessages = document.getElementById('chatMessages');
    if (chatMessages) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message user';
        messageDiv.textContent = message;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

// Send message function
function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    if (!messageInput) return;
    
    const message = messageInput.value.trim();
    
    if (message) {
        addUserMessage(message);
        messageInput.value = '';
        
        // Show typing indicator
        addTypingIndicator();
        
        // Much faster and more intelligent response
        setTimeout(() => {
            removeTypingIndicator();
            const response = generateResponse(message);
            addAssistantMessage(response);
            
            // Add follow-up suggestions for certain topics with typing animation
            setTimeout(() => {
                const followUp = getFollowUpSuggestion(message);
                if (followUp) {
                    addTypingIndicator();
                    setTimeout(() => {
                        removeTypingIndicator();
                        addAssistantMessage(followUp);
                    }, 800);
                }
            }, 1000);
        }, 300); // Much faster - 300ms instead of 500ms
    }
}

// Add typing indicator
function addTypingIndicator() {
    const chatMessages = document.getElementById('chatMessages');
    if (chatMessages) {
        // Remove existing typing indicator first
        removeTypingIndicator();
        
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message assistant typing-indicator';
        typingDiv.id = 'typingIndicator';
        typingDiv.innerHTML = '<span></span><span></span><span></span>';
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

// Remove typing indicator
function removeTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

// Get follow-up suggestions
function getFollowUpSuggestion(message) {
    const lowerMessage = message.toLowerCase();
    
    const followUps = {
        en: {
            projects: "Would you like me to show you how to filter projects by category, or are you interested in a specific type of work?",
            collaboration: "I can help you fill out the collaboration form if you'd like to propose a specific project!",
            skills: "Feel free to ask about any specific technical skill or cultural background aspect!",
            about: "Would you like to know more about Dekyi's educational background or current research focus?"
        },
        zh: {
            projects: "您想让我展示如何按类别筛选项目，还是对特定类型的工作感兴趣？",
            collaboration: "如果您想提出具体项目，我可以帮助您填写合作表格！",
            skills: "欢迎询问任何特定的技术技能或文化背景方面的问题！",
            about: "您想了解更多关于Dekyi的教育背景还是当前的研究重点？",
            thanks: "您还想了解Dekyi的工作或背景的其他方面吗？",
            greeting: "请随意使用上面的快速操作按钮，或询问我关于Dekyi项目和背景的任何问题！"
        },
        bo: {
            projects: "ཁྱེད་ཀྱིས་ང་ལ་རིགས་སྦྱོར་གྱིས་ལས་འཆར་ཇི་ལྟར་འདེམས་སྣང་བྱེད་མིན་སྟོན་དགོས་སམ། ཡང་ན་ཁྱད་ཆོས་ལས་ཀའི་རིགས་ལ་དོ་སྣང་ཡོད་དམ།",
            collaboration: "ཁྱེད་ཀྱིས་ཁྱད་ཆོས་ལས་འཆར་འདོན་རྒྱུ་ཡིན་ན། ང་ཁྱེད་ལ་མཉམ་འབྲེལ་ཐོ་གཞུང་གང་བ་ལ་རོགས་རམ་བྱེད་ཐུབ!",
            skills: "ཁྱད་ཆོས་ཐེག་པའི་རིག་རྩལ་འམ་རིག་གཞུང་རྒྱབ་ལྗོངས་ཀྱི་ཆ་ཤས་གང་རུང་སྐོར་དྲི་བ་འདྲི་རོགས!",
            about: "ཁྱེད་ཀྱིས་སྐྱིད་དེའི་ཤེས་ཡོན་རྒྱབ་ལྗོངས་སམ་མིག་སྔའི་ཞིབ་འཇུག་གི་གཙོ་གནད་སྐོར་མང་བ་ཤེས་འདོད་ཡོད་དམ།",
            thanks: "སྐྱིད་དེའི་ལས་ཀ་འམ་རྒྱབ་ལྗོངས་ཀྱི་ཆ་ཤས་གཞན་དག་ཅི་འདྲ་ཞིག་རྟོག་ཞིབ་ཞུ་འདོད་ཡོད་དམ།",
            greeting: "ཡར་གྱི་མགྱོགས་བྱ་ཨང་གནོན་སྤྱོད་པའམ། སྐྱིད་དེའི་ལས་འཆར་དང་རྒྱབ་ལྗོངས་སྐོར་གང་རུང་དྲི་བ་འདྲི་རོགས!"
        }
    };
    
    const langFollowUps = followUps[currentLang] || followUps.en;
    
    if (lowerMessage.includes('project') || lowerMessage.includes('项目') || lowerMessage.includes('ལས་འཆར')) {
        return langFollowUps.projects;
    } else if (lowerMessage.includes('collaborat') || lowerMessage.includes('合作') || lowerMessage.includes('མཉམ་འབྲེལ')) {
        return langFollowUps.collaboration;
    } else if (lowerMessage.includes('skill') || lowerMessage.includes('技能') || lowerMessage.includes('རིག་རྩལ')) {
        return langFollowUps.skills;
    } else if (lowerMessage.includes('about') || lowerMessage.includes('关于') || lowerMessage.includes('སྐོར')) {
        return langFollowUps.about;
    }
    
    return null;
}

// Generate response based on message
function generateResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    const responses = {
        en: {
            greeting: "Hello! Thanks for reaching out. How can I help you learn more about Dekyi's work?",
            projects: "Dekyi has worked on fascinating interdisciplinary projects spanning AI, cultural preservation, and human-centered design. Would you like me to highlight any specific area?",
            collaboration: "Collaboration opportunities are always exciting! Dekyi is particularly interested in projects that bridge technology and cultural understanding. What kind of collaboration do you have in mind?",
            skills: "Dekyi brings together technical expertise in AI/ML, UX design skills, and deep cultural knowledge. This combination creates unique perspectives on human-centered technology.",
            about: "Dekyi is a systems designer and cultural bridge builder with a trilingual background. She focuses on creating technology that respects and celebrates cultural diversity.",
            education: "Dekyi has interdisciplinary experience combining computer science, design thinking, and cultural studies. Her approach integrates technical skills with cultural sensitivity.",
            research: "Current research focuses on AI ethics, cultural preservation through technology, and human-centered design. Dekyi explores how technology can support rather than replace cultural practices.",
            contact: "You can reach out through the contact form below, or use the collaboration inquiry form to discuss specific project ideas. Dekyi is always open to meaningful partnerships!",
            ai: "Dekyi works with AI and machine learning for cultural preservation and ethical applications. She's particularly interested in AI that amplifies rather than replaces human creativity.",
            design: "Dekyi's design philosophy centers on human dignity and cultural respect. She believes technology should serve communities while preserving their unique identities.",
            culture: "Cultural bridge building is central to Dekyi's work. She helps connect different communities through thoughtful technology design and cross-cultural dialogue.",
            thanks: "You're very welcome! Is there anything specific about Dekyi's work you'd like to explore further?",
            languages: "Dekyi is trilingual (Chinese, Tibetan, English) which gives her unique insights into cross-cultural communication and design.",
            question: "Great question! I'm here to help you learn about Dekyi's interdisciplinary work. You can ask me about her projects, research, collaboration opportunities, or use the quick action buttons above.",
            default: "That's an interesting point! Dekyi's work focuses on creating meaningful connections between technology and culture. Feel free to explore the projects or use the collaboration form to discuss specific ideas."
        },
        zh: {
            greeting: "您好！感谢您的联系。我如何帮助您更好地了解Dekyi的工作？",
            projects: "Dekyi从事了跨越AI、文化保护和以人为本设计的迷人跨学科项目。您希望我重点介绍哪个特定领域吗？",
            collaboration: "合作机会总是令人兴奋的！Dekyi特别对连接技术与文化理解的项目感兴趣。您有什么样的合作想法？",
            skills: "Dekyi将AI/ML技术专长、UX设计技能和深厚的文化知识结合在一起。这种结合为以人为本的技术创造了独特的视角。",
            about: "Dekyi是一位系统设计师和文化桥梁建设者，拥有三语背景。她专注于创造尊重和庆祝文化多样性的技术。",
            education: "Dekyi拥有结合计算机科学、设计思维和文化研究的跨学科经验。她的方法将技术技能与文化敏感性相结合。",
            research: "目前的研究重点是AI伦理、通过技术进行文化保护以及以人为本的设计。Dekyi探索技术如何支持而非取代文化实践。",
            contact: "您可以通过下面的联系表单联系，或使用合作咨询表单讨论具体的项目想法。Dekyi总是乐于建立有意义的合作关系！",
            ai: "Dekyi致力于AI和机器学习在文化保护和伦理应用方面的工作。她特别关注能够放大而非取代人类创造力的AI。",
            design: "Dekyi的设计理念以人的尊严和文化尊重为中心。她相信技术应该服务社区，同时保护他们独特的身份。",
            culture: "文化桥梁建设是Dekyi工作的核心。她通过周到的技术设计和跨文化对话帮助连接不同的社区。",
            thanks: "不客气！您还想进一步了解Dekyi工作的哪个具体方面吗？",
            languages: "Dekyi会三种语言（中文、藏文、英文），这给了她跨文化交流和设计的独特见解。",
            question: "很好的问题！我来帮助您了解Dekyi的跨学科工作。您可以问我关于她的项目、研究、合作机会，或者使用上面的快速操作按钮。",
            default: "这是一个有趣的观点！Dekyi的工作专注于在技术与文化之间创造有意义的联系。请随意探索项目或使用合作表格讨论具体想法。"
        },
        bo: {
            greeting: "བཀྲ་ཤིས་བདེ་ལེགས! ཁྱེད་ཀྱིས་འབྲེལ་བ་བྱས་པར་ཐུགས་རྗེ་ཆེ། ང་ཇི་ལྟར་ཁྱེད་ལ་སྐྱིད་དེའི་ལས་ཀ་སྐོར་རྟོགས་པར་རོགས་རམ་བྱེད་ཐུབ།",
            projects: "སྐྱིད་དེ་ལ་རིག་ནུས་སྤྱི་ཚོགས། རིག་གཞུང་སྲུང་སྐྱོབ། མི་དབུས་གཙོ་བྱས་པའི་འཆར་འགོད་བཅས་འདུས་པའི་ཡིད་དུ་འོང་བའི་ཁུངས་སྣ་ཚོགས་ཀྱི་ལས་འཆར་ལ་ལས་ཀ་བྱས་ཡོད། ཁྱེད་ཀྱིས་ང་ལ་ཁྱད་ཆོས་ས་ཁུལ་གང་རུང་ཞིག་གསལ་བཤད་ཞུ་འདོད་དམ།",
            collaboration: "མཉམ་འབྲེལ་གྱི་གོ་སྐབས་རྟག་ཏུ་དགའ་སྤྲོ་སྐྱེ་བ་ཡིན! སྐྱིད་དེ་ཁྱད་པར་དུ་ཐེག་པ་དང་རིག་གཞུང་གི་ཤེས་རྟོགས་སྦྲེལ་བའི་ལས་འཆར་ལ་དོ་སྣང་ཡོད། ཁྱེད་ལ་ཇི་འདྲའི་མཉམ་འབྲེལ་གྱི་བསམ་ཚུལ་ཡོད།",
            skills: "སྐྱིད་དེ་ལ་AI/ML ཐེག་པའི་མཁས་རྩལ། UX འཆར་འགོད་ཀྱི་རིག་རྩལ། ཟབ་མོའི་རིག་གཞུང་གི་ཤེས་ཡོན་བཅས་ཟུང་འབྲེལ་བྱས་ཡོད། འདི་འདྲའི་ཟུང་འབྲེལ་གྱིས་མི་དབུས་གཙོ་བྱས་པའི་ཐེག་པ་ལ་ཁྱད་ཆོས་ཀྱི་ལྟ་སྤྱོད་སྐྲུན་གི་ཡོད།",
            about: "སྐྱིད་དེ་ནི་རིམ་ལུགས་འཆར་འགོད་པ་དང་རིག་གཞུང་ཟམ་པ་བཟོ་མཁན་ཞིག་ཡིན། སྐད་གསུམ་གྱི་རྒྱབ་ལྗོངས་ཡོད། རིག་གཞུང་མང་ཚོགས་པ་ལ་གུས་བརྩི་དང་རྗེས་སུ་ཡི་རངས་པའི་ཐེག་པ་སྐྲུན་པ་ལ་གཙོ་འདུན་ཡོད།",
            education: "སྐྱིད་དེ་ལ་གློག་རིག་ཚན་རིག་། འཆར་འགོད་བསམ་བློ། རིག་གཞུང་ཞིབ་འཇུག་བཅས་ཟུང་འབྲེལ་གྱི་ཁུངས་སྣ་ཚོགས་ཀྱི་ཉམས་མྱོང་ཡོད། ཁོ་མོའི་ཐབས་ལམ་ནི་ཐེག་པའི་རིག་རྩལ་དང་རིག་གཞུང་མྱུར་ཚོར་ཟུང་འབྲེལ་བྱེད་པ་ཡིན།",
            research: "མིག་སྔའི་ཞིབ་འཇུག་ནི་AI ཞི་བདེ། ཐེག་པའི་སྒོ་ནས་རིག་གཞུང་སྲུང་སྐྱོབ། མི་དབུས་གཙོ་བྱས་པའི་འཆར་འགོད་ལ་གཙོ་འདུན་ཡོད། སྐྱིད་དེས་ཐེག་པས་རིག་གཞུང་ལག་ལེན་ལ་ཚབ་བྱེད་ལས་རྗེས་རམ་ཇི་ལྟར་བྱེད་ཐུབ་མིན་རྟོག་ཞིབ་བྱེད།",
            contact: "འོག་གི་འབྲེལ་བ་ཐོ་གཞུང་གིས་འབྲེལ་བ་འཐབ་པའམ། ཁྱད་ཆོས་ལས་འཆར་གྱི་བསམ་ཚུལ་གླེང་མོལ་ལ་མཉམ་འབྲེལ་འདྲི་རྩད་ཐོ་གཞུང་སྤྱོད་ཆོག སྐྱིད་དེ་རྟག་ཏུ་དོན་སྙིང་དང་ལྡན་པའི་མཉམ་འབྲེལ་ལ་སྒོ་ཕྱེ་བ་ཡིན།",
            ai: "སྐྱིད་དེས་རིག་གཞུང་སྲུང་སྐྱོབ་དང་ཞི་བདེའི་སྤྱོད་ཡུལ་གྱི་ཆེད་དུ་AI དང་འཕྲུལ་རིག་སློབ་སྦྱོང་གི་ལས་ཀ་བྱེད། ཁྱད་པར་དུ་མིའི་རྩོམ་བཟོ་ཚབ་བྱེད་ལས་ཀླད་ཆེར་གཏོང་བའི་AI ལ་འདུ་ཤེས་ཡོད།",
            design: "སྐྱིད་དེའི་འཆར་འགོད་ལྟ་གྲུབ་ནི་མིའི་གཟུགས་ཅན་དང་རིག་གཞུང་བཅའ་སྒྲིག་ལ་སྙིང་པོ་བྱེད། ཁོ་མོས་ཐེག་པས་མི་ཚོགས་ལ་ཞབས་འདེགས་བྱེད་དགོས་ལ་ཅིར་ཡང་ཁོ་ཚོའི་ཐུན་མོང་མ་ཡིན་པའི་ངོ་བོ་སྲུང་སྐྱོབ་བྱེད་དགོས་པར་ཡིད་ཆེས།",
            culture: "རིག་གཞུང་ཟམ་པ་བཟོ་རྒྱུ་ནི་སྐྱིད་དེའི་ལས་ཀའི་སྙིང་པོ་ཡིན། ཁོ་མོས་བསམ་བློ་གཏོང་བའི་ཐེག་པ་འཆར་འགོད་དང་རིག་གཞུང་བརྒལ་བའི་གླེང་མོལ་བརྒྱུད་མི་ཚོགས་མི་འདྲ་བ་ཚོ་འབྲེལ་མཐུད་བྱེད་པར་རོགས་རམ་བྱེད།",
            thanks: "གང་ཞིག་ཡིན་ཀྱང་མི་འདུག! སྐྱིད་དེའི་ལས་ཀའི་ཁྱད་ཆོས་ཅི་ཞིག་ཁྱེད་ཀྱིས་མདུན་སར་རྟོག་ཞིབ་ཞུ་འདོད་དམ།",
            languages: "སྐྱིད་དེ་ལ་སྐད་གསུམ་(རྒྱ་སྐད། བོད་སྐད། དབྱིན་སྐད།)\n🛠️ ཐེག་པ: སྡེ་ཚན་གོང་འཕེལ། སྤྲིན་ལམ་ཞི་གནས། རང་འགུལ།\n\nགཙོ་གནད་རྟག་ཏུ་ཐེག་པ་དང་མི་རིགས་རིག་གཞུང་བར་དོན་སྙིང་དང་ལྡན་པའི་འབྲེལ་བ་སྐྲུན་པ་ལ་ཡིན།"
        }
    };
    
    const langResponses = responses[currentLang] || responses.en;
    
    // Enhanced keyword matching with more patterns
    const patterns = {
        greeting: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', '你好', '您好', 'བཀྲ་ཤིས', 'བདེ་ལེགས'],
        projects: ['project', 'work', 'portfolio', 'showcase', '项目', '作品', '工作', 'ལས་འཆར', 'ལས་ཀ', 'སྟོན', 'what did', 'what have you'],
        collaboration: ['collaborat', 'partner', 'work together', 'team up', '合作', '协作', '一起', 'མཉམ་འབྲེལ', 'ལས་གྲོགས', 'རོགས'],
        skills: ['skill', 'experience', 'expertise', 'ability', 'capable', '技能', '经验', '能力', '专长', 'རིག་རྩལ', 'ལག་རྩལ', 'ཉམས་མྱོང'],
        about: ['about', 'who are', 'tell me about', 'background', '关于', '介绍', '谁是', 'སྐོར', 'སུ་ཡིན', 'གང་ཞིག'],
        education: ['education', 'study', 'learn', 'school', 'university', '教育', '学习', '大学', 'སློབ་ཁྲིད', 'སློབ'],
        research: ['research', 'study', 'investigate', '研究', '调研', 'ཞིབ་འཇུག', 'ཞིབ'],
        contact: ['contact', 'reach', 'email', 'get in touch', '联系', '邮件', 'འབྲེལ་བ', 'འཐབ'],
        ai: ['ai', 'artificial intelligence', 'machine learning', 'ml', '人工智能', '机器学习', 'རིག་ནུས', 'སློབ་སྦྱོང'],
        design: ['design', 'ux', 'ui', 'user experience', '设计', '用户体验', 'འཆར་འགོད', 'སྤྱོད'],
        culture: ['culture', 'cultural', 'tradition', 'heritage', '文化', '传统', 'རིག་གཞུང', 'སྲོལ'],
        thanks: ['thank', 'thanks', 'appreciate', 'grateful', '谢谢', '感谢', 'ཐུགས་རྗེ'],
        languages: ['language', 'speak', 'trilingual', 'chinese', 'tibetan', 'english', '语言', '说话', 'སྐད', 'སྨྲ']
    };
    
    // Find the best matching pattern
    for (const [category, keywords] of Object.entries(patterns)) {
        if (keywords.some(keyword => lowerMessage.includes(keyword))) {
            return langResponses[category] || langResponses.default;
        }
    }
    
    // Special handling for questions
    if (lowerMessage.includes('?') || lowerMessage.includes('？') || lowerMessage.includes('ནམ')) {
        return langResponses.question;
    }
    
    return langResponses.default;
}

// Handle collaboration form submission
function handleCollaborationSubmit(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send this to your backend
    console.log('Collaboration request:', data);
    
    // Show success message
    const successMessages = {
        en: "Thank you for your collaboration request! Dekyi will review your proposal and get back to you soon.",
        zh: "感谢您的合作请求！Dekyi将审查您的提案并很快回复您。",
        bo: "ཁྱེད་ཀྱི་མཉམ་འབྲེལ་གྱི་ཞུ་ཡིག་ལ་ཐུགས་རྗེ་ཆེ! སྐྱིད་དེས་ཁྱེད་ཀྱི་འཆར་གཞི་བརྟག་དཔྱད་བྱས་ནས་མགྱོགས་པོ་ལན་འདེབས་རྒྱུ་ཡིན།"
    };
    
    addAssistantMessage(successMessages[currentLang] || successMessages.en);
    form.reset();
    
    // You could also send this to Formspree or another service
    // fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //     method: 'POST',
    //     body: formData
    // });
}

/*===== 表单处理优化 =====*/
const contactForm = document.getElementById('my-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 添加提交动画
        const submitBtn = this.querySelector('input[type="submit"]');
        const originalText = submitBtn.value;
        submitBtn.value = 'Sending...';
        submitBtn.disabled = true;
        
        // 模拟发送过程
        setTimeout(() => {
            submitBtn.value = 'Sent!';
            setTimeout(() => {
                submitBtn.value = originalText;
                submitBtn.disabled = false;
                this.reset();
            }, 2000);
        }, 1000);
    });
}

// Project Details Functionality
const projectDetails = {
    'workflow-automation': {
        title: 'Workflow Automation Migration',
        year: '2025',
        image: 'assets/img/Workflow Automation Migration.jpg',
        description: 'A comprehensive migration project from n8n workflow automation to Google Cloud Run with Docker containerization.',
        details: `
            <h4>Project Overview</h4>
            <p>This project involved migrating complex automation workflows from a local n8n instance to a scalable cloud infrastructure using Google Cloud Run and Docker containers.</p>
            
            <h4>Key Achievements</h4>
            <ul>
                <li>Successfully containerized n8n workflows using Docker</li>
                <li>Implemented CI/CD pipeline for automated deployment</li>
                <li>Reduced operational costs by 40% through cloud optimization</li>
                <li>Improved workflow reliability and scalability</li>
                <li>Enhanced monitoring and logging capabilities</li>
            </ul>
            
            <h4>Challenges Overcome</h4>
            <ul>
                <li>Database migration and data integrity maintenance</li>
                <li>Webhook endpoint reconfiguration</li>
                <li>Environment variable management in cloud context</li>
                <li>Performance optimization for cloud deployment</li>
            </ul>
        `,
        tech: 'Google Cloud Run, Docker, n8n, CI/CD, PostgreSQL, Node.js',
        tags: ['Google Cloud', 'Docker', 'Automation', 'System Design']
    },
    'ai-dictionary': {
        title: 'AI-Powered Tibetan Dictionary',
        year: 'ongoing',
        image: 'assets/img/5.png',
        description: 'An innovative project using AI to preserve and enhance Tibetan language learning through intelligent definitions and cultural context.',
        details: `
            <h4>Cultural Impact</h4>
            <p>This ongoing project aims to preserve Tibetan language and culture through modern AI technology, making traditional knowledge accessible to younger generations.</p>
            
            <h4>Features</h4>
            <ul>
                <li>AI-generated contextual definitions in Tibetan, Chinese, and English</li>
                <li>Cultural and historical context for traditional terms</li>
                <li>Audio pronunciation guides</li>
                <li>Interactive learning modules</li>
                <li>Community contribution system</li>
            </ul>
            
            <h4>Technology Approach</h4>
            <ul>
                <li>GPT-based language models fine-tuned for Tibetan</li>
                <li>Custom tokenization for Tibetan script</li>
                <li>Cultural sensitivity validation pipeline</li>
                <li>Multi-modal content integration</li>
            </ul>
        `,
        tech: 'GPT-4, Python, Natural Language Processing, Cultural AI, Tibetan Script',
        tags: ['AI', 'Language Preservation', 'Prompt Engineering', 'Cultural Heritage']
    },
    'patina-hackathon': {
        title: 'Patina People Hackathon',
        year: '2025',
        image: 'assets/img/Patina People Hackathon .jpg',
        description: 'UCL hackathon focused on designing accessible communication tools for older adults, emphasizing inclusive design principles.',
        details: `
            <h4>Problem Statement</h4>
            <p>Addressing the digital divide by creating communication tools that respect the pace, familiarity preferences, and dignity of older adults.</p>
            
            <h4>Solution Approach</h4>
            <ul>
                <li>Conducted user research with 50+ older adults</li>
                <li>Designed intuitive voice-first interface</li>
                <li>Implemented large-text, high-contrast visual design</li>
                <li>Created simplified navigation patterns</li>
                <li>Integrated emergency contact features</li>
            </ul>
            
            <h4>Impact & Recognition</h4>
            <ul>
                <li>Winner of "Best Accessibility Design" award</li>
                <li>Prototype tested with local senior center</li>
                <li>Featured in UCL Design Review</li>
                <li>Influenced accessibility guidelines for student projects</li>
            </ul>
        `,
        tech: 'Figma, User Research, Accessibility Testing, Voice UI, React',
        tags: ['UX Design', 'Accessibility', 'User Research', 'Inclusive Design']
    },
    'podcast-experiments': {
        title: 'Podcast Experiments',
        year: '2024-ongoing',
        image: null,
        description: 'Exploring social dynamics and gender studies through media production, examining how stories shape identity and community.',
        details: `
            <h4>Research Questions</h4>
            <p>How do different storytelling formats affect the way people process and relate to discussions about gender, identity, and social structures?</p>
            
            <h4>Experimental Approaches</h4>
            <ul>
                <li>Interviewing individuals from diverse cultural backgrounds</li>
                <li>Testing different conversation formats and structures</li>
                <li>Analyzing listener engagement and response patterns</li>
                <li>Exploring the intimacy of voice-based media</li>
            </ul>
            
            <h4>Social Impact</h4>
            <ul>
                <li>Creating space for nuanced gender discussions</li>
                <li>Building bridges across cultural divides</li>
                <li>Documenting personal transformation stories</li>
                <li>Challenging binary thinking in social categories</li>
            </ul>
        `,
        tech: 'Audio Production, Qualitative Research, Social Analysis, Storytelling',
        tags: ['Media Production', 'Social Dynamics', 'Gender Studies', 'Communication']
    }
};

function showProjectDetails(projectId) {
    const project = projectDetails[projectId];
    if (!project) return;

    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalYear = document.getElementById('modalYear');
    const modalTags = document.getElementById('modalTags');
    const modalDescription = document.getElementById('modalDescription');
    const modalDetails = document.getElementById('modalDetails');
    const modalTech = document.getElementById('modalTech');

    // Set content
    modalTitle.textContent = project.title;
    modalYear.textContent = project.year;
    modalDescription.textContent = project.description;
    modalDetails.innerHTML = project.details;

    // Handle image
    if (project.image) {
        modalImage.src = project.image;
        modalImage.alt = project.title;
        modalImage.style.display = 'block';
    } else {
        modalImage.style.display = 'none';
    }

    // Set tags
    modalTags.innerHTML = project.tags.map(tag => 
        `<span class="project__tag">${tag}</span>`
    ).join('');

    // Set tech info
    modalTech.innerHTML = `
        <h4>Technologies & Approaches</h4>
        <p>${project.tech}</p>
    `;

    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeProjectModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeProjectModal();
    }
});
