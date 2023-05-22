import React from 'react'
import MyCollections from "../components/MyCollections/MyCollections"
import ManageCollections from "../components/ManageCollections/ManageCollections"

export default function collections() {
  return (
    <div>
        <MyCollections />
        <ManageCollections />
    </div>
  )
}
