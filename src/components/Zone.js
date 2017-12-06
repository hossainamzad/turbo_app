import React from 'react'
const Zone = (props) => {
  return(
    <div>
      {props.currentZone.map(( zone, i) => {
        return(
          <div key={i}>
            <ol>Borough: {zone.name}</ol> <span>ZIP: {zone.zipCode}</span>
          </div>
          )
      })}
    </div>
    )
  }
export default Zone;
