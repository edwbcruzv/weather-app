import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography';
import {IconContext} from 'react-icons'
import { Grid, Skeleton } from '@mui/material';

// se usa el componente y tambien extraemos los datos para validar "state"
import IconState, {validValues} from '../IconState/IconState'; 

/**
 * Este componente junta el icono correspondiente a "state" y la temperatura
 * @param {temperature={10} state="snow"} param0 
 * @returns 
 */
const Weather = ({temperature,state}) => {
    return (
        <Grid container item
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}>
            <IconContext.Provider value={{size:'6em'}}> 
            
            {    
                state?
                <IconState state={state}/> 
                :
                <Skeleton variant='circular' height={80} width={80} />
            }
            </IconContext.Provider>
            
            {
                temperature?
                <Typography display="inline" variant="h2">{temperature}</Typography>
                :
                <Skeleton variant='rectangular' height={80} width={80} />
                
            }
        </Grid>
    )
}

Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validValues).isRequired
}


export default Weather