import React from 'react'
import getRandomElemArray from '../utils/getRandomElemArray'

const BtnQuote = ({setQuote, phrases, setNumberBg}) => {

  const handleRandomPhrase =()=>{
    setQuote(getRandomElemArray(phrases))
    setNumberBg(getRandomElemArray([1,2,3,4,5,6,7,8]))
  }

  return (
    <button className='container__btn' onClick={handleRandomPhrase}>Other Phrase</button> 
  )
}

export default BtnQuote