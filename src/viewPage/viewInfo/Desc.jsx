import React from 'react'

function Desc({title, desc}) {
  return (
    <div>
        {title ? (
            <div style={{display:'grid', gap:'5px'}}>
                <h4 style={{fontSize: '1em'}}>{title}</h4>
                <p>{desc}</p>
            </div>
        ) : (
            <div>
                <p>{desc}</p>
            </div>
        )
        }
    </div>
  )
}

export default Desc