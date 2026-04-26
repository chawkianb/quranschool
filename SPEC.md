# مدرسة قرآنية - مسجد الفضيل الورثلي

## Concept & Vision

تطبيق ويب احترافي يضم مدرسة قرآنية بطابع إسلامي أصيل. التصميم يجمع بين الأناقة العصرية والعناصر التقليدية الإسلامية، مع ألوان هادئة تعكس السكينة والطمأنينة. الهدف هو توفير واجهة سهلة الاستخدام لأولياء الأمور والمشرفين والإدارة.

## Design Language

### Aesthetic Direction
تصميم مستوحى من الفن الإسلامي والخط العربي، مع لمسات عصرية. استخدام الأنماط الهندسية الإسلامية (أشكال هندسية متكررة) والزخارف المستوحاة من المساجد.

### Color Palette
- **Primary**: `#1B4D3E` (أخضر إسلامي داكن)
- **Secondary**: `#C9A227` (ذهبي تراثي)
- **Accent**: `#8B4513` (بني خشبي)
- **Background**: `#F5F0E8` (كريمي دافئ)
- **Text Primary**: `#2C1810` (بني غامق)
- **Text Secondary**: `#5D4E37` (بني متوسط)
- **Light**: `#FFFFFF`
- **Success**: `#2E7D32`
- **Error**: `#C62828`

### Typography
- **Arabic Font**: Tajawal (Google Fonts) - للعناوين والنصوص الرئيسية
- **Decorative Font**: Amiri - للاقتباسات والزخارف
- **Fallback**: Arial, sans-serif

### Spatial System
- Base unit: 8px
- Spacing scale: 8, 16, 24, 32, 48, 64px
- Border radius: 8px (cards), 12px (buttons), 50% (avatars)

### Motion Philosophy
- حركات سلسة ومهادنة تعكس السكينة
- Transitions: 300ms ease-in-out
- Hover effects: scale(1.02) مع ظل خفيف
- Page transitions: fade-in 400ms

### Visual Assets
- أيقونات: Lucide Icons (stroke-width: 1.5)
- زخارف: SVG patterns إسلامية
- صور: placeholder بإلوان الإسلامي

## Layout & Structure

### Overall Structure
- **Header**: شعار + اسم المدرسة + قائمة التنقل
- **Hero Section**: قسم الترحيب مع معلومات المدرسة
- ** الأقسام**: عرض بطاقات الأقسام الأربعة
- **الإحصائيات**: أرقام وإنجازات المدرسة
- **Footer**: معلومات التواصل

### Page Sections
1. **Hero Section**
   - صورة خلفية مع overlay
   - اسم المسجد والمدرسة
   - رسالة ترحيبية

2. **Map Section (خريطة الأقسام)**
   - 4 بطاقات للأقسام الرئيسية
   - كل بطاقة تحتوي: أيقونة، اسم، وصف، عدد الطلاب، زر التفاصيل

3. **Stats Section**
   - عدد الطلاب
   - عدد المعلمين
   - سنوات الخبرة
   - التخصصات

4. **Teachers Management Section (وحدة إدارة الأساتذة)**
   - بطاقات الأساتذة مع معلومات تفصيلية
   - سجل الحضور والغياب اليومي
   - لوحة نشاط الأستاذ مع عدادات مستويات الحفظ
   - إدارة المسابقات والنتائج
   - زر طباعة القائمة

5. **Contact Section**
   - معلومات التواصل
   - ساعات العمل
   - العنوان

### Responsive Strategy
- Mobile: < 768px (single column)
- Tablet: 768px - 1024px (2 columns)
- Desktop: > 1024px (4 columns grid)

## Features & Interactions

### Core Features
1. **عرض الأقسام**: بطاقات تفاعلية تعرض معلومات كل قسم
2. **التنقل**: قائمة علوية ثابتة مع تأثيرات hover
3. **الرسوم المتحركة**: تأثيرات ظهور عند التمرير
4. **قائمة الأقسام**: عرض تفصيلي لكل قسم

### Card Interactions
- **Hover**: Scale up + shadow + border glow
- **Click**: يفتح تفاصيل القسم في modal أو صفحة جديدة
- **Touch**: ripple effect على الأجهزة اللوحية

### Navigation
- Fixed header مع blur backdrop
- Smooth scroll للروابط الداخلية
- Mobile hamburger menu

### Error Handling
- Graceful fallbacks للأيقونات
- Loading states مع skeleton
- Empty states بتصميم جميل

## Component Inventory

### Header Component
- **Default**: خلفية بيضاء مع ظل خفيف
- **Scrolled**: blur backdrop مع حجم أقل
- **Mobile**: hamburger menu

### Navigation Link
- **Default**: لون النص الأساسي
- **Hover**: لون ذهبي مع underline
- **Active**: لون ذهبي bold

### Department Card
- **Default**: خلفية بيضاء، ظل خفيف، border-radius 16px
- **Hover**: scale(1.03), shadow أكبر, border ذهبي
- **Active/Selected**: border ذهبي كامل

### Button
- **Primary**: خلفية خضراء، نص أبيض
- **Secondary**: خلفية ذهبية، نص بني
- **Outline**: border ذهبي، خلفية شفافة
- **Hover**: darken 10%
- **Disabled**: opacity 0.5, cursor not-allowed

### Stat Counter
- **Animation**: counting up on scroll into view
- **Style**: رقم كبير + وصف صغير

### Modal (optional)
- **Overlay**: black 50% opacity
- **Content**: white background, centered
- **Close button**: X icon top-right

## Technical Approach

- **Framework**: Vanilla HTML/CSS/JS (single page application)
- **Styling**: CSS with CSS Variables for theming
- **Icons**: Lucide Icons via CDN
- **Fonts**: Google Fonts (Tajawal, Amiri)
- **Animations**: CSS transitions + Intersection Observer API
- **Responsive**: CSS Grid + Flexbox + Media Queries

## Department Data Structure

```json
{
  "departments": [
    {
      "id": "preparatory",
      "name": "قسم التحضيري",
      "icon": "baby",
      "description": "للتلاميذ في سن ما قبل التمدرس",
      "students": 45,
      "ageRange": "4-6 سنوات"
    },
    {
      "id": "literacy",
      "name": "قسم محو الأمية",
      "icon": "book-open",
      "description": "للكبار أو من فاتهم قطار التعليم",
      "students": 30,
      "ageRange": "15+ سنة"
    },
    {
      "id": "students",
      "name": "قسم المتمدرسين",
      "icon": "users",
      "description": "يشمل الفرعين التاليين:",
      "branches": [
        { "name": "فرع متمدرسي الدوام", "desc": "التدريس طوال السنة" },
        { "name": "فرع المدرسة الصيفية", "desc": "مكثف خلال الصيف" }
      ],
      "students": 120
    },
    {
      "id": "women",
      "name": "قسم تحفيظ النساء",
      "icon": "heart",
      "description": "حلقات مخصصة للنساء",
      "students": 85
    }
  ]
}
```

## Teacher Management System (وحدة إدارة الأساتذة)

### Features

#### 1. Attendance & Absence Records (سجل الحضور والغياب)
- **نظام الحضور اليومي**: تسجيل حضور الطلاب يوميًا
- **جدول الحضور**: عرض قائمة الطلاب مع إمكانية التبديل بين الحضور والغياب
- **التقرير الشهري**: زر لتوليد تقرير شهري تلقائي يتضمن:
  - إجمالي أيام الحضور والغياب
  - نسبة الحضور
  - تواقيع الأستاذ والإدارة

#### 2. Teacher Activity Dashboard (لوحة نشاط الأستاذ)
- **عدادات مستويات الحفظ**: عرض بياني دائري يوضح:
  - عدد الطلاب في مستوى 5 أحزاب
  - عدد الطلاب في مستوى 10 أحزاب
  - عدد الطلاب في مستوى 20 حزب
  - عدد الطلاب في مستوى 30 حزب
  - عدد الطلاب في مستوى 60 حزب (القرآن كاملاً)
- **إحصائيات سريعة**: عدد الطلاب، الحاضرين، الغائبين، نسبة الحضور

#### 3. Competitions Management (إدارة المسابقات)
- **سجل المسابقات**: قائمة بالمشاركات في مسابقات القرآن والمتون
- **تفاصيل المسابقة**: اسم المسابقة، التاريخ، النتيجة
- **ربط بالملف الشخصي**: جميع النتائج مرتبطة بملف الأستاذ لتقييم الأداء

#### 4. Print System (نظام الطباعة)
- **طباعة القائمة**: زر لتوليد قائمة الطلاب بصيغة PDF
- **معاينة قبل الطباعة**: عرض القائمة في نافذة منبثقة
- **خيارات التصدير**:
  - تحميل كملف PDF
  - طباعة مباشرة

### Teacher Data Structure

```json
{
  "teachers": [
    {
      "id": 1,
      "name": "الشيخ أحمد محمد",
      "specialty": "قسم المتمدرسين - فرع الدوام",
      "students": 24,
      "present": 18,
      "absent": 6,
      "attendanceRate": 92,
      "progressLevels": {
        "5": 12,
        "10": 8,
        "20": 4,
        "30": 2,
        "60": 1
      },
      "studentsList": [
        { "id": 1, "name": "محمد علي", "level": 20, "status": "present" }
      ],
      "competitions": [
        { "name": "المسابقة المحلية للتصحيح", "date": "15/06/2025", "result": "المركز الأول" }
      ]
    }
  ]
}
```

### Interactions
- **سجل الحضور**: يفتح نافذة منبثقة مع جدول الطلاب
- **تبديل الحضور**: نقر على زر الحضور/الغياب يحدث الحالة فورًا
- **تقرير شهري**: ينشئ تقرير PDF معاين قبل الطباعة
- **طباعة القائمة**: يفتح معاينة مع خيارات التحميل والطباعة
```