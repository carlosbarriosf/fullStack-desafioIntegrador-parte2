import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function CardLoadingSkeleton({cards}) {
  return (
    Array(cards).fill(0).map((item, i) => {
      return <div className='card-skeleton' key={i}>
                <div className='cards__card__imageContainer'>
                    <Skeleton height={250} baseColor="#1e293b" highlightColor="#94a3b8"/>
                </div>
                <div className='cards__card-description'>
                    <Skeleton 
                      count={4}
                      style={{
                        margin: '1rem 0',
                        padding: '0.5rem 0',
                        display: 'flex',
                      }}
                      baseColor="#1e293b"
                      highlightColor="#94a3b8"
                    />
                </div>
            </div>
    })
  )
}

export default CardLoadingSkeleton