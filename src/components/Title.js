import React from 'react'

const Title = ({Title1, Title2}) => {
  return (
    <div className="section-title">
        <h2>
          {Title1} <span>{Title2}</span>
        </h2>
      </div>
  )
}

export default Title