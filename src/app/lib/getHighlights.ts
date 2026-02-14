

export const getHighlights = async () => {
    try {
        const res = await fetch('https://wp.driveo.pk/wp-json/wp/v2/posts?categories=2&per_page=10&order=desc&orderby=date&_fields=id,title,content,featured_media,featured_media_src_url', {
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

export const getHighlightsById = async (id: number) => {
    try {
        const res = await fetch(`https://wp.driveo.pk/wp-json/wp/v2/posts/${id}`, {
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