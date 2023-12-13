import { useState } from 'react'
import './App.css'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

function App() {
  // Sample data for rows
  const initialData = [
    { id: 1, description: 'Product 1', quantity: 5, price: 10.99 },
    { id: 2, description: 'Product 2', quantity: 3, price: 15.99 },
    { id: 3, description: 'Product 3', quantity: 8, price: 7.99 },
    { id: 4, description: 'Product 4', quantity: 2, price: 19.99 },
    { id: 5, description: 'Product 5', quantity: 6, price: 12.49 },
    { id: 6, description: 'Product 6', quantity: 4, price: 8.75 },
    { id: 7, description: 'Product 7', quantity: 10, price: 5.99 },
    { id: 8, description: 'Product 8', quantity: 7, price: 14.25 },
    { id: 9, description: 'Product 9', quantity: 1, price: 23.99 },
    { id: 10, description: 'Product 10', quantity: 9, price: 11.49 }
  ];
  // State to manage data
  const [data, setData] = useState(initialData);
  const doc = new jsPDF()
  const exportPdfHandler = () => {
    // Example 1
    // doc.autoTable({ html: '#product-table' })
    // doc.save('products.pdf')

    // Example 2
    // autoTable(doc, { html: '#product-table' })
    // doc.save('products.pdf')

    // Example 2
    autoTable(doc, { html: '#product-table', bodyStyles: { fillColor: 'yellow' }, columnStyles: { 0: { fillColor: [172, 157, 230], halign: 'center' } } })
    doc.save('products.pdf')
    // console.log("Table Data Exported");
  }
  return (
    <>
      <button className='export-btn' onClick={exportPdfHandler}>Export PDF</button>

      <table style={{ borderCollapse: 'collapse', width: '100%' }} id="product-table">
        <thead>
          <tr style={{ borderBottom: '1px solid #ddd', background: 'orange' }}>
            <th style={cellStyle}>ID</th>
            <th style={cellStyle}>Description</th>
            <th style={cellStyle}>Quantity</th>
            <th style={cellStyle}>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={cellStyle}>{item.id}</td>
              <td style={cellStyle}>{item.description}</td>
              <td style={cellStyle}>{item.quantity}</td>
              <td style={cellStyle}>{item.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
const cellStyle = {
  padding: '12px',
  textAlign: 'left',
};


export default App
