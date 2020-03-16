import React, {useState, useEffect} from 'react'
import EventList from '../ProductComponents/EventList'
import event_img from './images/Event/eventimg.png'

export default function EventListPage() {
    const [eventItems, setEventItems] = useState(null)

    if(eventItems === null){
        setEventItems(
        [
            {
                img:event_img
            },
            {
                img:event_img
            },
            {
                img:event_img
            },
            {
                img:event_img
            },
            {
                img:event_img
            }
        ])
    }

    useEffect(()=>{

    })

    return (
        <>
            <EventList eventItems={eventItems}/>
        </>
    )
}
