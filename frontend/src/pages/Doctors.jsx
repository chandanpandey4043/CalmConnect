import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {

  const {speciality} = useParams()
  const [filterDoc, setFilterDoc] = useState([])

  const {doctors} = useContext(AppContext)
  return (
    <div>
      <p>Browse through the doctors specialist.</p>
      <div>
        <div>
          <p>General Physician</p>
          <p>Gynecologist</p>
          <p>Dermatologist</p>
          <p>Pediatricians</p>
          <p>Neurologist</p>
          <p>Gastroenterologist</p>
        </div>
        <div>
          {
            filterDoc.map()
          }
        </div>
      </div>
    </div>
  )
}

export default Doctors