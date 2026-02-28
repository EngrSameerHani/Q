import Link from 'next/link'
import { getHighlights } from '@/app/lib/getHighlights'

const Highlight = async () => {
  const highlights = await getHighlights()

  return (
    <div className="container">
      <h1 className="text-center">HighLights</h1>
      <div className="accordion" id="accordion03">
        {highlights && highlights.length ? (
          highlights.map((item: any) => (
            <div key={item.id} className="card">
              <div className="card-heading">
                <Link
                  href={`/about-us/highlights/${item.id}`}
                  className="card-link"
                >
                  {item.title.rendered}
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No highlights</p>
        )}
      </div>
    </div>
  )
}

export default Highlight
