import React from 'react'
import './countriePopup.css'

const CountriePopUp = ({trigger,setTrigger,capitalc,namec,priphoto, continent, sregion,currency, languages, icon, population}) => {
  return (trigger) ? (
    <>
        <div className="popup">
            <div className="popup-inner">
                <div className="data">
                    <div className="image">
                        <img src={priphoto} alt="" />
                    </div>
                    <div className="sub">
                        <div className="icon">
                            <img src={icon} alt="name" />
                        </div>
                        <div className="titles">
                            <p className='names'>{namec}</p>
                            <p className='ubication'>{continent.name}</p>
                        </div>
                    </div>
                    <div className="details">
                        <p className='details-pop'>Capital: <span className='result-details'>{capitalc}</span></p>
                        <p className='details-pop'>Language: {languages.map((lan,ind) => {
                            return(
                                <span key={ind} className='result-details'>{lan.name}, </span>
                            )
                        })}
                        </p> 
                        <p className='details-pop'>Population: <span className='result-details' >{population}</span></p>
                        <p className='details-pop'>Currency: <span className='result-details' >{currency}</span></p>
                        <p className='details-pop'>Region: <span className='result-details' >{sregion}</span></p>
                    </div>
                </div>
                <div className="close">
                    <button className='btn-close' onClick={() => setTrigger(false)}><img src='./x.png'/></button>
                </div>
            </div>
        </div>
    </>
  ) : "";
}

export default CountriePopUp