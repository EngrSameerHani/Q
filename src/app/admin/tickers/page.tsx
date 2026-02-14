import { getTickers } from '@/app/lib/getTickers'
import DeleteTickers from '@/components/DeleteTickers'
import Link from 'next/link'
import React from 'react'
import { FiEdit, FiTrash } from 'react-icons/fi'

interface Ticker {
  status: string
  message: string
  data: [
    {
      id: number
      title: string
      url: string
      created_at: string
    }
  ]
}

const TickersPage = async () => {
  const tickers: Ticker = await getTickers()

  return (
    <div className="container">
      <div className="m-5">
        <div className="d-flex justify-content-between">
          <div>
            <h4>Tickers</h4>
          </div>
          <div>
            <Link
              href="/admin/tickers/create"
              type="button"
              className="btn btn--secondary btn-line btn-line-before btn--block"
              style={{ width: '200px' }}
            >
              Add Ticker
            </Link>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Sr.</th>
              <th scope="col">Title</th>
              <th scope="col">Url</th>
              <th scope="col">Created At</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {tickers.data.length > 0 ? (
              tickers.data.map((ticker, index) => (
                <tr key={ticker.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{ticker.title}</td>
                  <td>{ticker.url}</td>
                  <td>
                    {new Date(ticker.created_at).toLocaleDateString('en-GB', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                    })}
                  </td>
                  <td>
                    <Link href={`/admin/tickers/edit/${ticker.id}`}>
                      <FiEdit />
                    </Link>
                    <DeleteTickers id={ticker.id} />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center">
                  No Tickers Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TickersPage
