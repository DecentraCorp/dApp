import React from 'react'
import { togglestyle } from '../../styles'

export default function Toggle() {
    
    return (
        <div style={togglestyle}>
             <input type="checkbox"/>
        <label className="toggle-switch-label" htmlFor="toggleSwitch">
         
        </label>
        </div>
    )
}