import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneConatct, updateContact } from '../Redux/Actions';

const UpdateContact=()=>{

  

    const {id}=useParams()
    const dispatch = useDispatch()
    useEffect(()=>{

       dispatch(getOneConatct(id))
    },[])
    const contact = useSelector(state => state.contact)
    const[name,setName]=useState(contact.name)
    const[email,setEmail]=useState(contact.email)
    const[age,setAge]=useState(contact.age)

    useEffect(()=>{
    setName(contact.name)
    setAge(contact.age)
    setEmail(contact.email)
    }, [contact])
  const navigate=useNavigate()
    const handleUpdate=(e)=>{
      e.preventDefault()
      dispatch(updateContact(id,{name,age,email},navigate))
    }

    return(
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Age</Form.Label>
          <Form.Control value={age} onChange={(e)=>setAge(e.target.value)} type="number" placeholder="Enter Age" />
      </Form.Group>


        <Button onClick={(e)=>handleUpdate(e)}  variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
}
export default UpdateContact