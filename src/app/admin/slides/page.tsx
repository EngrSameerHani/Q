import { getAllSlides } from '@/app/lib/getSlides'
import DeleteSlides from '@/components/DeleteSlides'
import Link from 'next/link'
import React from 'react'
import { FaEdit } from 'react-icons/fa'

interface Slide {
  status: string
  message: string
  data: [
    {
      id: number
      title: string
      description: string
      image: string
      url: string
    }
  ]
}

const SlidersPage = async () => {
  const slides: Slide = await getAllSlides()

  return (
    <div className="container">
      <div className="m-5">
        <div className="d-flex justify-content-between">
          <div>
            <h4>Slides</h4>
          </div>
          <div>
            <Link
              href="/admin/slides/create"
              type="button"
              className="btn btn--secondary btn-line btn-line-before btn--block"
              style={{ width: '200px' }}
            >
              Add Slide
            </Link>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Sr.</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Image</th>
              <th scope="col">Url</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {slides?.data.length
              ? slides.data.map((slide, index) => (
                  <tr key={slide.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{slide.title}</td>
                    <td>{slide.description.substring(0, 20)}...</td>
                    <td>
                      <img
                        src={`https://qih.driveo.pk/${slide.image}`}
                        width={50}
                        height={50}
                        alt={slide.title}
                      />
                    </td>
                    <td>{slide.url}</td>
                    <td>
                      <Link
                        href={`/admin/slides/edit/${slide.id}`}
                        className="text-primary mx-2"
                      >
                        <FaEdit />
                      </Link>
                      <DeleteSlides id={slide.id} />
                    </td>
                  </tr>
                ))
              : 'No slides'}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SlidersPage
