import { getAllPages } from '@/app/lib/getPages'
import DeletePages from '@/components/DeletePages'
import Link from 'next/link'
import React from 'react'
import { FiEdit, FiTrash } from 'react-icons/fi'

interface Pages {
  status: string
  message: string
  data: [
    {
      id: number
      title: string
      short_description: string
      description: string
      slug: string
    }
  ]
}

const DynamicPages = async () => {
  const pages: Pages = await getAllPages()

  return (
    <div>
      <div className="container">
        <div className="m-5">
          <div className="d-flex justify-content-between">
            <div>
              <h4>Pages</h4>
            </div>
            <div>
              <Link
                href="/admin/pages/create"
                type="button"
                className="btn btn--secondary btn-line btn-line-before btn--block"
                style={{ width: '200px' }}
              >
                Add Page
              </Link>
            </div>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Sr.</th>
                <th scope="col">Title</th>
                <th scope="col">Short Description</th>
                <th scope="col">Slug</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {pages?.data.length
                ? pages.data.map((page, index) => (
                    <tr key={page.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{page.title}</td>
                      <td>{page.short_description}</td>
                      <td>{page.slug}</td>

                      <td>
                        <Link
                          className="me-4"
                          href={`/admin/pages/edit/${page.id}`}
                        >
                          <FiEdit />
                        </Link>
                        <DeletePages id={page.id} />
                      </td>
                    </tr>
                  ))
                : 'no more data'}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default DynamicPages
