import React from 'react'

const Map = ({routes, format}) => {
  const formatedData = routes.map(route => {
    const source = format("airport", route.src)
    const destination = format("airport", route.dest)
    const d = `M${source.long} ${source.lat} L ${destination.long} ${destination.lat}`
    console.log(source)

    return (
      <g key={route.airline + route.src + route.dest}>
        <circle
          className="source"
          cx={source.long}
          cy={source.lat}
        >
          <title>{source.name}</title>
        </circle>
        <circle
          className="destination"
          cx={destination.long}
          cy={destination.lat}
        >
          <title>{destination.name}</title>
        </circle>
        <path d={d} />
      </g>
    )
  })

  return (
    <svg className="map" viewBox="-180 -90 360 180">
      <g transform="scale(1 -1)">
        <image
          xlinkHref="equirectangular_world.jpg"
          href="equirectangular_world.jpg"
          x="-180"
          y="-90"
          height="100%"
          width="100%"
          transform="scale(1 -1)"
        />
        {formatedData}
      </g>
    </svg>
  )
}
export default Map
