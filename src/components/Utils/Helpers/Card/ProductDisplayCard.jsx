const ProductDisplayCard = ({ data, type }) => {
  return (
    <div className='display-card fdc cp'>
        <div className="img-container">
            <img src={data?.img} alt="" />
        </div>
        <footer className='fdc' style={{marginTop: `${type === 'c3' ? '-10px' : ''}`}}>
            { (type === "c1" || type === 'c2') && <span className='label-1'>{data?.label1}</span> }
            { type === "c1" && <span className='label-2'>{data?.label2}</span> }
            { type === "c3" && <span className='label-2'>{data?.label1}</span> }
            { type === "c5" && <span className='label-2'>{data?.label1}</span> }
            { type === "c5" && <span className='label-3'>{data?.label2}</span> }
        </footer>
    </div>
  )
}

export default ProductDisplayCard