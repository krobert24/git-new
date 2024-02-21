import storeItems from "../data/items.json"
import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import './store.css'
export function Store() {
  return(
    <>
<h1>Available Store Items:</h1>

<Row  md={1} xs={1} lg={1} className='g-3'>
  {storeItems.map(item => (
    <Col className='ite' key={item.id}><StoreItem {...item} /></Col>
  ))}
</Row>
</>
  ) 
}
