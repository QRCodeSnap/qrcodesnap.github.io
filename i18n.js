/**
 * QRCodeSnap landing-page i18n.
 * Strings are derived from the original /cn/ and /ar/ pages
 * (preserving factual claims), with a few new strings for the
 * modernized layout (nav, kickers, hero eyebrow, etc.).
 */
(function () {
  var DICT = {
    en: {
      'nav.features': 'Features',
      'nav.ocr': 'OCR',
      'nav.premium': 'Premium',
      'nav.download': 'Download',

      'hero.eyebrow': 'Now with OCR Text Recognition',
      'hero.title':
        'The fastest way to <span class="grad-text">scan QR codes</span><br/>right from your menu bar.',
      'hero.sub':
        'QRCodeSnap is a lightweight macOS utility that lives in your menu bar. Capture any QR code on your screen — or extract text from any region — with a single click.',
      'hero.cta_secondary': 'See it in action',
      'hero.meta_macos': 'macOS 13+',
      'hero.meta_chip': 'Apple Silicon & Intel',
      'hero.badge_oneclick': 'One click scan',

      'f1.kicker': 'Instant Capture',
      'f1.title': 'Scan any QR code on screen, instantly.',
      'f1.body':
        "Whether it's on a webpage, a document, or buried in another app — just click the QRCodeSnap icon in your menu bar. It scans your entire screen, finds every QR code, and shows you the result. No screenshots, no app switching, no friction.",

      'f2.new': 'New',
      'f2.title':
        'OCR Text Recognition.<br/><span class="grad-text">If you can see it, you can select it.</span>',
      'f2.body':
        'Extract text from any screen region in a snap. Highlight a region, or let QRCodeSnap auto-detect text in the active window. Character-level precision: double-click to select a word, triple-click for a line, then <kbd>⌘C</kbd> to copy.',

      'f3.kicker': 'Tailored to you',
      'f3.title': 'Every detail, customizable.',
      'f3.body':
        "Launch at login so it's always ready. Toggle a sound for instant feedback on every successful scan. Or get results delivered as a system notification. We've thought of every detail.",

      'f4.kicker': 'Premium',
      'f4.title': 'Unlock your full workflow.',
      'f4.body':
        "Subscribe to Premium and unlock more powerful features to enhance your workflow. Set a global shortcut, enable One-Click Open, and even use your Mac's built-in camera to scan QR codes in the real world.",
      'f4.p1_t': 'One-Click Open',
      'f4.p1_d': 'Single result auto-opens.',
      'f4.p2_t': 'Global Shortcut',
      'f4.p2_d': 'Scan from anywhere.',
      'f4.p3_t': 'Camera Scan',
      'f4.p3_d': "Scan real-world QR codes with your Mac's built-in camera.",

      'cta.title': 'Ready to scan smarter?',
      'cta.body': 'Download QRCodeSnap today — free on the Mac App Store.',

      'footer.copy': '© 2026 QRCodeSnap. Made with care for macOS.',
      'footer.privacy': 'Privacy Policy',
      'footer.contact': 'Contact'
    },

    zh: {
      'nav.features': '功能',
      'nav.ocr': 'OCR',
      'nav.premium': '高级版',
      'nav.download': '下载',

      'hero.eyebrow': '全新 OCR 文字识别',
      'hero.title':
        '在菜单栏，<span class="grad-text">一键扫描二维码</span>，<br/>从未如此简单。',
      'hero.sub':
        'QRCodeSnap 是一款轻量、高效的 macOS 应用，常驻于你的菜单栏。一键捕捉屏幕上的任何二维码，也能提取屏幕任意区域的文字。',
      'hero.cta_secondary': '查看演示',
      'hero.meta_macos': 'macOS 13+',
      'hero.meta_chip': 'Apple Silicon 与 Intel',
      'hero.badge_oneclick': '一键扫描',

      'f1.kicker': '瞬间捕捉',
      'f1.title': '一键扫描屏幕上的所有二维码。',
      'f1.body':
        '无论是来自网页、文档还是其他应用，只需点击菜单栏上的 QRCodeSnap 图标，它就会立即扫描整个屏幕，找到并识别所有二维码。无需截图，无需切换应用，效率为王。',

      'f2.new': '新功能',
      'f2.title':
        'OCR 文字识别。<br/><span class="grad-text">只要能看见，就能选中。</span>',
      'f2.body':
        '一键提取屏幕上的文字。框选任意区域，或自动识别活动窗口中的所有文字。字符级精确选择，双击选词、三击选行，然后用 <kbd>⌘C</kbd> 复制。',

      'f3.kicker': '为你定制',
      'f3.title': '每个细节，皆可自定义。',
      'f3.body':
        '开机启动让它随时待命，开启提示音让每次扫描成功都有反馈，或选择以系统通知的形式查看结果。我们考虑到了每一个细节。',

      'f4.kicker': '高级版',
      'f4.title': '解锁完整工作流。',
      'f4.body':
        '订阅高级版，获得更多强大功能让工作流更上一层楼。设置全局快捷键、启用一键直达模式，甚至调用 Mac 内置摄像头扫描现实世界的二维码。',
      'f4.p1_t': '一键直达',
      'f4.p1_d': '单一结果自动打开。',
      'f4.p2_t': '全局快捷键',
      'f4.p2_d': '随时随地一键唤起。',
      'f4.p3_t': '摄像头扫描',
      'f4.p3_d': '用 Mac 内置摄像头扫描现实世界的二维码。',

      'cta.title': '准备好更聪明地扫码了吗？',
      'cta.body': '立即下载 QRCodeSnap —— 在 Mac App Store 免费获取。',

      'footer.copy': '© 2026 QRCodeSnap. 用心为 macOS 打造。',
      'footer.privacy': '隐私政策',
      'footer.contact': '联系我们'
    },

    ar: {
      'nav.features': 'الميزات',
      'nav.ocr': 'OCR',
      'nav.premium': 'الإصدار المميز',
      'nav.download': 'تنزيل',

      'hero.eyebrow': 'الآن مع التعرف على النص OCR',
      'hero.title':
        'أسرع طريقة <span class="grad-text">لمسح رموز QR</span><br/>مباشرةً من شريط القوائم.',
      'hero.sub':
        'QRCodeSnap تطبيق macOS خفيف يعيش في شريط القوائم. التقط أي رمز QR على شاشتك — أو استخرج النص من أي منطقة — بنقرة واحدة.',
      'hero.cta_secondary': 'شاهد العرض',
      'hero.meta_macos': 'macOS 13+',
      'hero.meta_chip': 'Apple Silicon و Intel',
      'hero.badge_oneclick': 'مسح بنقرة واحدة',

      'f1.kicker': 'التقاط فوري',
      'f1.title': 'امسح أي رمز QR على الشاشة فوراً.',
      'f1.body':
        'سواء كان على صفحة ويب أو مستند أو داخل تطبيق آخر — ما عليك سوى النقر على أيقونة QRCodeSnap في شريط القوائم. سيمسح شاشتك بالكامل ويجد كل رمز QR ويعرض لك النتيجة. بدون لقطات شاشة، بدون تبديل التطبيقات، بدون متاعب.',

      'f2.new': 'ميزة جديدة',
      'f2.title':
        'التعرف على النص OCR.<br/><span class="grad-text">إذا كنت تستطيع رؤيته، يمكنك تحديده.</span>',
      'f2.body':
        'استخرج النص من أي منطقة على الشاشة فوراً. حدد أي منطقة أو دع QRCodeSnap يتعرف على النص في النافذة النشطة تلقائياً. تحديد دقيق على مستوى الحرف: نقرة مزدوجة لتحديد كلمة، نقرة ثلاثية لتحديد سطر، ثم <kbd>⌘C</kbd> للنسخ.',

      'f3.kicker': 'مفصّل لك',
      'f3.title': 'كل تفصيلة قابلة للتخصيص.',
      'f3.body':
        'اضبطه للتشغيل عند بدء التشغيل ليكون جاهزاً دائماً. فعّل التنبيهات الصوتية للحصول على ردود فعل فورية على كل عملية مسح ناجحة. أو احصل على النتائج عبر إشعار النظام. لقد فكرنا في كل التفاصيل.',

      'f4.kicker': 'الإصدار المميز',
      'f4.title': 'أطلق العنان لسير عملك بالكامل.',
      'f4.body':
        'اشترك في الإصدار المميز للحصول على ميزات أكثر قوة لتعزيز سير عملك. اضبط اختصاراً عاماً، فعّل وضع "الفتح بنقرة واحدة"، واستخدم كاميرا Mac المدمجة لمسح رموز QR في العالم الحقيقي.',
      'f4.p1_t': 'الفتح بنقرة واحدة',
      'f4.p1_d': 'تُفتح النتيجة الواحدة تلقائياً.',
      'f4.p2_t': 'اختصار عام',
      'f4.p2_d': 'امسح من أي مكان.',
      'f4.p3_t': 'مسح بالكاميرا',
      'f4.p3_d': 'امسح رموز QR من العالم الحقيقي بكاميرا Mac المدمجة.',

      'cta.title': 'هل أنت جاهز للمسح بذكاء أكبر؟',
      'cta.body': 'حمّل QRCodeSnap اليوم — مجاناً على Mac App Store.',

      'footer.copy': '© 2026 QRCodeSnap. صُنع بعناية لنظام macOS.',
      'footer.privacy': 'سياسة الخصوصية',
      'footer.contact': 'تواصل معنا'
    }
  };

  function applyLang(lang) {
    if (!DICT[lang]) lang = 'en';
    var t = DICT[lang];

    // Update <html> attrs (already set by inline detector, but re-apply on switch)
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dataset.lang = lang;

    // Plain-text nodes
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] != null) el.textContent = t[key];
    });
    // HTML-allowed nodes (titles with <span class="grad-text">, body with <kbd>)
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (t[key] != null) el.innerHTML = t[key];
    });
    // attribute-targeted: data-i18n-attr="title:key,placeholder:key"
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(',').forEach(function (pair) {
        var p = pair.split(':');
        if (p.length === 2 && t[p[1].trim()] != null) {
          el.setAttribute(p[0].trim(), t[p[1].trim()]);
        }
      });
    });

    // Sync language-switch button active state
    document.querySelectorAll('.lang-switch [data-lang]').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.getAttribute('data-lang') === lang);
    });
  }

  function detectInitial() {
    // The inline detector already sets html.dataset.lang; just trust it.
    return document.documentElement.dataset.lang || 'en';
  }

  function setLang(lang) {
    try { localStorage.setItem('qrsnap.lang', lang); } catch (e) {}
    applyLang(lang);
  }

  // Wire up the switch buttons
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.lang-switch [data-lang]');
    if (!btn) return;
    setLang(btn.getAttribute('data-lang'));
  });

  // Initial apply
  applyLang(detectInitial());
})();
