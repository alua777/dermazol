import React from 'react'
import shower from '../../Assets/shower.svg'
import blueback from '../../Assets/blueback.svg'
import dermazol from '../../Assets/dermazol.svg'
import video from '../../Assets/video.svg'
import done from '../../Assets/done.svg'
import './Home.scss'
import Card from '../../Components/Card/Card'
import Step from '../../Components/Step/Step'
import forth from '../../Assets/forth.svg'
import Button from '../../Components/Button/Button'
import Menu from '../../Components/Menu/Menu'
import stamp from '../../Assets/stamp.svg'
import wave from '../../Assets/wave.svg'
import drop from '../../Assets/drop.svg'

export default function Home() {
  return (
    <div className='home'>
        <div className='first'>
            <img className="first_drop" src={drop} alt="" />
            
            <div className="first_part">
                <p className="first_part_title Merriweather">Перхоть – это медицинская, а не косметическая проблема</p>
                <p className="first_part_text">Дермазол: лечебный шампунь, устраняющий грибок – причину возникновения перхоти.</p>
                <p className="first_part_text">Для лечения и профилактики грибковых заболеваний кожи головы.</p>
            </div>
            <div className="first_part">
                <img src={dermazol} />
            </div>
            <img className='shower' src={shower} alt="" />
            <img className='first_stamp' src={stamp} alt="" />
        </div>

        <div className='second'>
            <img src={video} alt="" />
            <div className='second_part'>
                <div className='second_part_title'>
                    <div> <span  className='second_part_title_blue'>Дермазол </span>– когда другие средства против перхоти бессильны!
                     </div>
                </div>
                <div className='second_part_info'>
                    <div>ПОКАЗАНИЯ К ПРИМЕНЕНИЮ:</div>
                    <div>
                        <div>
                            <img src={done} alt="" />
                            Перхоть</div>
                        <div>
                            <img src={done} alt="" />
                            Себорейный дерматит
                        </div>
                        <div>
                            <img src={done} alt="" />
                            Отрубевидный лишай
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='third'>
            <div className='third_title'>
                <div>Способ <span className='blue'>примененения</span></div>
                <img src={wave} alt="" />
            
            </div>
            <div className='third_cards'>
                <Card
                    number="01"
                    title="Для лечения перхоти"
                    info1="2 раза в неделю в течение 2 недель"
                />
                <Card
                    number="02"
                    title="Для лечения себорейного дерматита"
                    info1="2 раза в неделю в течение 2–4 недель. "
                    info2="Для профилактики – 1 раз в 2 недели"
                />
                <Card
                    number="03"
                    title="При отрубевидном лишае"
                    info1="1 раз в сутки, курс лечения 5 дней."
                    info2 = "Для профилактики – 1 раз в сутки 3 дня"
                />
            </div>
        </div>

        <div className='forth'>
            <div className='third_title'>
                <div>Этапы <span className='blue'>использования</span></div>
                <img src={wave} alt="" />
            </div>
            <div className='forth_steps'>
                <Step step="1" info="Нанести на влажные волосы"/>
                <Step step="2" info="Оставить на 3–5 минут"/>
                <Step step="3" info="Тщательно смыть водой"/>
            </div>
        </div>

        <div className="fifth">
            <img src={forth} alt="" />
            <div className='fifth_part'>
                <div className='fifth_title'><span className='blue'>Инструкция</span> по медицинскому применению</div>
                <div className='fifth_menu'>
                    <Menu 
                        title="ПОКАЗАНИЯ К ПРИМЕНЕНИЮ"
                        info=""
                        />
                    
                    <Menu 
                        title="ПРОТИВОПОКАЗАНИЯ"
                        info=""
                        />
                    <Menu 
                        title="УСЛОВИЯ ОТПУСКА ИЗ АПТЕК: "
                        info="Из аптек отпускается без рецепта "
                        />
                    <Menu 
                        title="ОБЪЕМ УПАКОВКИ"
                        info=""
                        />
                </div>
                <Button className="fifth_menu_button button" text="Скачать инструкцию"/>
            </div>
        </div>
    </div>
  )
}
