


export const getNews = async () => {
    try {
        const res = await fetch('https://wp.driveo.pk/wp-json/wp/v2/posts?categories=3&per_page=10&order=desc&orderby=date&_fields=id,title,content,featured_media,featured_media_src_url,excerpt',
            {
                cache: 'no-cache',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
        const data = await res.json()
        return data
    } catch (error) {
        return error
    }
}

export const getNewsById = async (id: number) => {
    try {
        const res = await fetch(`https://wp.driveo.pk/wp-json/wp/v2/posts/${id}`, {
            cache: 'no-cache',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        const data = await res.json();
        return data;
    } catch (error) {
        return error;
    }
}

export const getEvents = async () => {
    try {
        const res = await fetch('https://wp.driveo.pk/wp-json/tribe/events/v1/events/?page=1&per_page=10&start_date=2025-01-01',
            {
                cache: 'no-cache',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )

        const data = await res.json()
        return data
    } catch (error) {
        return error
    }
}

export const getEventById = async (id: number) => {
    try {
        const res = await fetch(`https://wp.driveo.pk/wp-json/tribe/events/v1/events/${id}?page=1&per_page=10&start_date=2025-01-01`,
            {
                cache: 'no-cache',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )

        const data = await res.json()
        return data
    } catch (error) {
        return error
    }
}