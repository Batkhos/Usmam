import React from 'react'
import './CSS/House.css'
import died from '../Components/Assest/died.jpg'
import usmamBackground from '../Components/Assest/usmamBackground.jpg'
import handball from"../Components/Assest/handball.jpg"
import tabrik from '../Components/Assest/tabrik.jpg'
import girlsmatch from '../Components/Assest/girlsmatch.jpg'
import youth from '../Components/Assest/youth.jpg'
import match from '../Components/Assest/match.jpg'


export default function House() {
  return (
    <>
    <div className='home'>
      <img src={usmamBackground} alt="" />
      <h3>Union sportive municipale d'Aït Melloul</h3>
        <div className='news'>
          <div>
        <img  src={tabrik} alt="" />
        <p>
بمناسبة حلول الذكرى 80 لتقديم وثيقة الاستقلال،  يتقدم المكتب المديري للإتحاد الرياضي البلدي لأيت ملول بتقديم أزكى التهاني وأطيب التبريكات لصاحب الجلالة الملك محمد السادس نصره الله وأيده، متمنين لجلالته موفور الصحة والعافية، وللشعب المغربي بمزيد من التقدم والازدهار .</p>
          </div>
          <div>
          <img src={girlsmatch} alt="" />
        <p>🆙🙋‍♀️ تواجه آنسات اليوزمام يوم الأحد نهاية هذا الأسبوع آنسات نادي وئام أكادير لحساب مباريات الجولة الخامسة للبطولة الجهوية للإناث، وذلك على أرضية ملعب أشكور ببنسركاو إبتداء من الساعة الرابعة عصرا.</p>
          </div>
          <div>
            <img src={youth} alt="" />
            <p>🔴 نتائج الفئات العمرية لليوزمام خلال مباريات الجولة العاشرة من البطولة الجهوية للفئات العمرية لكرة القدم .</p>
          </div>
          <div>
            <img src={died} alt="" />
            <p>
⚫️ تعزية
بأسف وأسى تلقت مكونات نادي الإتحاد الرياضي البلدي لأيت ملول، خبر وفاة المسمى قيد حياته حجوب برنيش والذي كان يشغل منصب عضو باللجنة الجهوية للقوانين والأنظمة وحكم سابق ومراقب مقابلات سابق بالعصبة الجهوية سوس ماسة لكرة القدم.
وبهذه المناسبة الأليمة تتقدم كل مكونات اليوزمام، بأحر التعازي والمواساة إلى عائلة الفقيد سائلين المولى عز وجل أن يتغمده بواسع رحمته ويسكنه فسيح جناته، وأن يتقبله في الفردوس الأعلى مع النبيئين والصديقين والشهداء، ويلهم ذويه الصبر والسلوان.
إنا لله وإنا إليه راجعون
</p>
          </div><div>
            <img src={handball} alt="" />
            <p>🏐 كرة اليد "كبار"  
يرحل فريق اليوزمام لكرة اليد يوم غد الأحد لمدينة أولاد برحيل لمواجهة فريق رشاد أولاد برحيل لكرة اليد وذلك في إطار مباريات الجولة الثانية من البطولة الوطنية لكرة اليد القسم الثاني</p>
          </div><div>
            <img src={match} alt="" />
            <p> النتيجة النهائية للمقابلة.</p>
          </div>
             </div>
    </div>
    </>
  )
}
