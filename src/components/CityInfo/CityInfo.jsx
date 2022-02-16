import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography';

const CityInfo = ({city,country}) => {

    return (
        <div>

            {/* investigar typography api para ver el resto de equiquetas */}
            <Typography display="inline" variant="h4">{city},</Typography>
            <Typography display="inline" variant="h5">{country}</Typography>

        </div>
    )
}

CityInfo.propTypes = {
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired
}

export default CityInfo
