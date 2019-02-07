import React, { Component } from 'react'

function DecideFound(found) {
    if (found) {
      if (found.length) {
        return <div>
                  <h3>Found Movies </h3>
                    {found.map((ele, ind) => {
                      return <div key = {ind}>{ele}</div>
                    })}
               </div>
      } else {
        return <h3>Results not Found</h3>
      }
    } 
  }

  export default DecideFound