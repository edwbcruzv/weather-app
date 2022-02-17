import React from 'react'
import PropTypes from 'prop-types'
import { LineChart , Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer} from 'recharts'

const ForecastChart = ({data}) => {
  console.log(data)
  return (
    <div>
      <ResponsiveContainer height={250} width={"95%"}>

      <LineChart
        
        margin={{top:20,bottom:20,left:5, right:5 }}
        data={data}>
          <XAxis dataKey="dayHour"></XAxis>
          <YAxis></YAxis>

          <CartesianGrid></CartesianGrid>

          <Line type="monotone" dataKey="max" stroke="#FF0000"/>
          <Line type="monotone" dataKey="min" stroke="#0000FF"/>

          <Tooltip></Tooltip>
          <Legend></Legend>
      </LineChart>

      </ResponsiveContainer>
    </div>
  )
}

ForecastChart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
          dayHour: PropTypes.string.isRequired,
          min: PropTypes.number.isRequired,
          max: PropTypes.number.isRequired
        })
    )
}


export default ForecastChart