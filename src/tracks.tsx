import React from 'react'
import gql from 'graphql-tag'
import { useSongsQuery } from './generated/graphql'

gql`
  query Songs {
    songs {
      id
      artist {
        name
      }
      title
      duration
      album {
        name
      }
    }
  }
`

export function Tracks() {
  // const [{ data, fetching, error }] = useQuery({ query })
  const [{ data, fetching, error }] = useSongsQuery()
  if (fetching) return <p>Loading...</p>
  if (error) return <p>Oh no... {error.message}</p>

  return (
    <ul>
      {data?.songs?.map(song => (
        <li key={song.id}>
          <h2>{song.title}</h2>
          <p>{song.id}</p>
          <p>Artist: {song.artist?.name}</p>
          <p>Album: {song.album?.name}</p>
          <small>duration: {song.duration ? song.duration / 60 : 'unknown'} minutes</small>
        </li>
      ))}
    </ul>
  )
}