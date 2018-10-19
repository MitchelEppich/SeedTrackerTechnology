import React from "react"
import Map from 'pigeon-maps/react'
import Marker from 'pigeon-marker'

const _Map = props => {
    return (
        <Map center={[59.18, -95.71]} zoom={4} width={1920} height={1080}>
            <Marker anchor={[50.879, 4.6997]} payload={1} onClick={this.handleMarkerClick} />
        </Map>
    )
}


export default _Map