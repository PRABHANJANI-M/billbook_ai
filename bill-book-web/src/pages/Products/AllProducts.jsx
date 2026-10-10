import { useState, useMemo, useEffect, useRef } from 'react'
import { Package, PlusSquare, Search, Trash2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import PageHeader from '../../components/common/PageHeader'
import DataTable from '../../components/common/DataTable'
import Badge from '../../components/common/Badge'
import Button from '../../components/common/Button'
import { useData } from '../../context/DataContext'
import { formatCurrency } from '../../utils/format'

export default function AllProducts() {
  const [allProductsSearch, setAllProductsSearch] = useState('')
  const navigate = useNavigate()
  const { products, dispatch } = useData()
  const location = useLocation()
  const inputRef = useRef(null)

  // Initialize query from URL param `q` so sidebar search can navigate here
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const q = params.get('q') || ''
    setAllProductsSearch(q)
    // focus the search input when navigated from sidebar
    if (q && inputRef.current) {
      inputRef.current.focus()
    }
  }, [location.search])

  const filtered = useMemo(
    () => products.filter((p) => p.name.toLowerCase().includes(allProductsSearch.toLowerCase())),
    [products, allProductsSearch]
  )

  const handleDelete = (id) => {
    if (confirm('Delete this product?')) dispatch({ type: 'DELETE_PRODUCT', payload: { id } })
  }

  return (
    <div>
      <PageHeader
        icon={Package}
        title="All Products"
        actions={
          <Button onClick={() => navigate('/products/add')}>
            <span className="flex items-center gap-1"><PlusSquare size={15} /> Add Product</span>
          </Button>
        }
      />

      <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2 mb-4 max-w-sm">
        <Search size={15} className="text-gray-400" />
        <input
          ref={inputRef}
          value={allProductsSearch}
          onChange={(e) => {
            e.stopPropagation()
            console.log('AllProducts search changed:', e.target.value)
            setAllProductsSearch(e.target.value)
          }}
          placeholder="Search products..."
          className="outline-none text-sm flex-1"
        />
      </div>

      <DataTable
        columns={[
          { key: 'name', label: 'Product' },
          { key: 'sku', label: 'SKU' },
          { key: 'category', label: 'Category' },
          { key: 'price', label: 'Sell Price', render: (r) => formatCurrency(r.price) },
          { key: 'stock', label: 'Stock', render: (r) => (
            <Badge color={r.stock === 0 ? 'red' : r.stock <= r.alertQty ? 'yellow' : 'green'}>
              {r.stock}
            </Badge>
          )},
          { key: 'active', label: 'Status', render: (r) => <Badge color={r.active ? 'green' : 'gray'}>{r.active ? 'Active' : 'Inactive'}</Badge> },
          { key: 'actions', label: '', render: (r) => (
            <button onClick={() => handleDelete(r.id)} title="Delete product">
              <Trash2 size={14} className="text-red-400 hover:text-red-600" />
            </button>
          )},
        ]}
        data={filtered}
      />
    </div>
  )
}