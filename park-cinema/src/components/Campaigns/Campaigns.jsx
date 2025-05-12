import React from "react";
import './Campaigns.css'

const Campaigns = () => {
    return(
        <section className="campaigns">
            <div className="container">
                <div className="heading">
                    <h1>Aksiyalar</h1>
                </div>
                <div className="cards">
                    <div className="card">
                        <img src="https://new.parkcinema.az/_next/image?url=https%3A%2F%2Fnew.parkcinema.az%2Fapi%2Ffile%2FgetFile%2F1738581189628_imax__aksiya__sayt_ucun.png&w=640&q=75" alt="imax_super_day" />
                        <h3>Imaxda Super Gün</h3>
                    </div>
                    <div className="card">
                        <img src="https://new.parkcinema.az/_next/image?url=https%3A%2F%2Fnew.parkcinema.az%2Fapi%2Ffile%2FgetFile%2F1738581039056_kino_seheri__aksiya__sayt_ucun.png&w=640&q=75" alt="morning_action" />
                        <h3>Səhər Tarifi</h3>
                    </div>
                    <div className="card">
                        <img src="https://new.parkcinema.az/_next/image?url=https%3A%2F%2Fnew.parkcinema.az%2Fapi%2Ffile%2FgetFile%2F1738579595976_telebe__tarifi_aksiya__sayt_ucun.png&w=640&q=75" alt="student_action" />
                        <h3>Tələbə Tarifi</h3>
                    </div>
                    <div className="card">
                        <img src="https://new.parkcinema.az/_next/image?url=https%3A%2F%2Fnew.parkcinema.az%2Fapi%2Ffile%2FgetFile%2F1738578284204_super_gun__tarifi_aksiya__sayt_ucun.png&w=640&q=75" alt="super_day" />
                        <h3>Super Gün</h3>
                    </div>
                    <div className="card">
                        <img src="https://new.parkcinema.az/_next/image?url=https%3A%2F%2Fnew.parkcinema.az%2Fapi%2Ffile%2FgetFile%2F1738575408381_aile_tarifi_aksiya__sayt_ucun.png&w=640&q=75" alt="family_action" />
                        <h3>Ailə Tarifi</h3>
                    </div>
                    <div className="card">
                        <img src="https://new.parkcinema.az/_next/image?url=https%3A%2F%2Fnew.parkcinema.az%2Fapi%2Ffile%2FgetFile%2F1737476634730_in1.jpg&w=640&q=75" alt="birthday_action" />
                        <h3>AD GÜNÜ</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Campaigns