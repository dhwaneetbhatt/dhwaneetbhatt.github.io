import './goodreads.css'
import * as React from 'react'

function BooksComponent () {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.goodreads.com/review/grid_widget/109274211.My%20Read%20Books?cover_size=medium&num_books=50&order=d&shelf=read&sort=date_read&widget_id=1624612170';
    script.async = true;
    document.body.appendChild(script);
  })

  return (
    <div id='gr_grid_widget_1624612170'/>
  )
}

export default BooksComponent