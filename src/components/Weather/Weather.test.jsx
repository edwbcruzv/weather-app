import React from 'react'
import {render} from '@testing-library/react'
import Weather from './Weather'




test('Weather render', async() => {
    //AAA
    const {findByRole} =render(<Weather temperature={10} state="sunny"></Weather>)

    const temp = await findByRole("heading")

    expect(temp).toHaveTextContent("10")

})
