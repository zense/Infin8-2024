import React from 'react'
import './Faqs.css'
import faqs from '../../content/Faqs'

const Faqs = () => {
    const handleClick = (e)=>{
        const ans = document.getElementById(`a-${e.target.id}`)
        if(ans === null) e.target.parentNode.click();
        else{
            const arrow = document.getElementsByClassName(`svg-${e.target.id}`)
            
            if(ans.style.height === 'auto'){
                ans.style.height = '0px'
                arrow[0].style.transform = 'rotate(0deg)'
                ans.style.padding = '0'
            }
            else{
                ans.style.height = 'auto'
                arrow[0].style.transform = 'rotate(180deg)'
                ans.style.padding = '0.75rem'
            }
        }
    }
    return (
        <div className='w-screen h-auto pb-20' id='faqs'>
            <div className='faqs-heading-container flex w-screen items-center justify-center' >
                <div className='text-black faqs-heading flex items-center justify-center text-3xl'>Frequently Asked Questions</div>
            </div>
            <div className="faq-container flex flex-col items-center justify-center gap-5">
                {faqs.map((faq, index) => {
                    return (
                        <div className="faq-element w-11/12 bg-yellow rounded-3xl p-4" key={index}>
                            <div className="faq-q flex items-center justify-between font-bold text-2xl p-3" id={index} onClick={handleClick}>
                                <div className='w-11/12'>
                                    
                                {faq.question}
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className={`h-6 w-6 svg-${index}`}>
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                            <div className="faq-a font-medium text-lg" id={`a-${index}`}>
                                {faq.answer}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Faqs