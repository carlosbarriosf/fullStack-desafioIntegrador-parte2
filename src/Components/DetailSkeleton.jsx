import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


function DetailSkeleton() {
  return (
    <div className='productDetail__skeleton'>
        <div className="productDetail-container">
            <div>
                <Skeleton 
                  count={3}  
                  baseColor="#1e293b" 
                  highlightColor="#94a3b8"
                  style={{
                    margin: '1rem 0',
                    // padding: '0.5rem 0',
                  }}
                />
            </div>
            <div className='productDetail__image-container'>
                <Skeleton
                  // className='hola'
                  baseColor="#1e293b" 
                  highlightColor="#94a3b8" 
                  height={250}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '12px'
                  }}
                />
            </div>
        </div>
    </div>
  )
}

export default DetailSkeleton