import React from 'react'
import './App.css'
import { createClient, Provider } from 'urql'
import { Tracks } from './tracks'

const client = createClient({ url: 'http://localhost:3000/graphql' })

function App() {
	return (<Provider value={client}><Tracks /></Provider>)
}

export default App
