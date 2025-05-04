import React from "react";
import { useState } from "react";
import './FAQ.css';

const QuestionItem = ({ question, answer }) => {
    const [open, setOpen] = useState(false);

    const toggleQuestion = () => {
        setOpen(!open);
    };

    return (
        <div className="question">
            <div className="title" onClick={toggleQuestion}>
                <h1>{question}</h1>
                <span className={open ? "rotate" : "closed"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M5 13v-1h6V6h1v6h6v1h-6v6h-1v-6z" />
                    </svg>
                </span>
            </div>
            <div className={`answer ${open ? 'show' : ''}`}>
                <p>{answer}</p>
            </div>
        </div>
    );
};

const FAQ = () => {
    const faqData = [
        {
            question: "Bilet neçəyədir?",
            answer: `Biletin qiyməti həftənin günündən, vaxtından və formatından asılı olaraq dəyişə bilər. Bu
                    səbəbdən ana səhifədəki cədvəldən istədiyiniz filmə keçid edərək aktual qiymətlərlə tanış ola
                    bilərsiniz.`,
        },
        {
            question: "Özümüzlə yemək gətirə bilərik?",
            answer: `Biz kinoteatrın əmlakına, o cümlədən oturacaqlara və xalçaya ləkə sala biləcək məhsullara, eləcə
                    də onların keyfiyyətinə görə məsuliyyət daşıya bilmədiyimiz üçün kinoteatrdan kənarda alınmış
                    qida məhsulları ilə zala girişə icazə vermirik. Kinobarımızda satılan bütün məhsullar
                    sertifikatlaşdırılıb və tam təhlükəsizdir.`,
        },
        {
            question: "\"Love seats\" nədir?",
            answer: `Bu, sevgililər üçün nəzərdə tutulmuş ikili oturacaqlardır. Bir "love seats"in qiymətinə iki yer əldə edirsiniz.`,
        },
        {
            question: "Sizdə endirimlər varmı?",
            answer: `Bəli, var. Bununla bağlı ətraflı məlumatı saytımızdakı "Aksiya" bölməsindən əldə edə bilərsiniz.`,
        },
        {
            question: "Mənim yaşım filmin yaş reytinqinə uyğun deyilsə, ona baxa bilərəm?",
            answer: `Azərbaycan Respublikasının "Kinematoqrafiya haqqında" Qanunun 40.2.2-2-ci maddəsinə görə, yaş
                    təsnifatı təmin edilmədən və müvafiq yaş kateqoriyasına uyğun işarələnmədən informasiya
                    məhsullarının yayımlanması qadağandır. Bu qanunvericilik aktlarına əsasən, kinoteatrlar filmlərin
                    yaş məhdudiyyətlərinə riayət etməli və yaşı uyğun olmayan şəxslərin müvafiq filmlərə baxmasına
                    icazə verməməlidirlər. Yalnız valideynin müşayiəti ilə mümkündür.`,
        }
    ];

    return (
        <section className="faq">
            <div className="container">
                <div className="heading">
                    <h1>FAQ</h1>
                </div>
                <div className="questions">
                    {faqData.map((item, index) => (
                        <QuestionItem key={index} question={item.question} answer={item.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
