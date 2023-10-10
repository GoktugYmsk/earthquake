import React, { useEffect, useState } from 'react'

import Header from '../header'
import Content from '../content'
import Footer from '../footer'
import axios from 'axios';

function CustomComponent() {

    const [earthquakes, setEarthquakes] = useState([]);

    const refresh = async () => {
        setEarthquakes([])
        await axios.get('https://api.orhanaydogdu.com.tr/deprem/kandilli/live')
            .then(response => setEarthquakes(response.data.result))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        refresh();
    }, []);

    return (
        <div>
            <Header />
            <Content earthquakes={earthquakes} />
            <Footer refresh={refresh} />
        </div>
    )
}

export default CustomComponent