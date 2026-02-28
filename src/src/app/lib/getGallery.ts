

export const getGalleries = async () => {
    try {
        const res = await fetch('https://wp.driveo.pk/wp-json/5cript-gallery/v1/galleries', {
            cache: 'no-cache',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })

        const data = await res.json()
        return data
    } catch (error) {
        return error
    }
}

export const getGallery = async (id: number) => {
    try {
        const res = await fetch(`https://wp.driveo.pk/wp-json/5cript-gallery/v1/gallery/${id}/images`, {
            cache: 'no-cache',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        const data = await res.json()
        return data
    } catch (error) {
        return error
    }
}