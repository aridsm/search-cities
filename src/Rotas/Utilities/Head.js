import { useEffect } from 'react'

const Head = ({title, description}) => {

useEffect(() => {
    document.title = 'LifeQuality | ' + title;
    document.querySelector('meta[name="description"]').setAttribute('content', description)
}, [description, title])

}

export default Head