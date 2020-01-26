import React from 'react'
import AddLocationIcon from '@material-ui/icons/AddLocation'
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople'

interface Props {
    lat: number,
    lng: number
}

export const Me: React.FC<Props> = () => <div><EmojiPeopleIcon /></div>
export const Pin: React.FC<Props> = () => <div><AddLocationIcon /></div>
