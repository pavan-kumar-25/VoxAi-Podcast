import React from 'react'

const PodcastDetails = ({parms}:{parms:{podcastId:string}}) => {
  return (
    <p className='text-white-1'>PodcastDetails{parms.podcastId}</p>
  )
}

export default PodcastDetails