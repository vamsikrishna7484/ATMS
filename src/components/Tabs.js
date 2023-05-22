import React from 'react'
import Tab4 from './Tab4'
function Tabs({isAdmin}) {
  return (
    <div className="form-row d-flex pt-2">
        <div className="col-md-2 col-sm-6">TAB 1</div>
        <div className="col-md-2 col-sm-6">TAB 2</div>
        <div className="col-md-2 col-sm-6">TAB 3</div>
        {isAdmin?<Tab4/>:''}
    </div>
  )
}

export default Tabs